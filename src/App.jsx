import React, { useState, useEffect, useRef } from 'react';
import './widget.css';

// --- UTM & Click ID extraction ---
const UTM_PARAMS_MAP = {
  utm_source: 'UtmSource',
  utm_medium: 'UtmMedium',
  utm_campaign: 'UtmCampaign',
  utm_content: 'UtmContent',
  utm_term: 'UtmTerm',
  gclid: 'GCLID',
  gbraid: 'GBRAID',
  wbraid: 'WBRAID',
  dclid: 'DCLID',
  ttclid: 'TTCLID',
  fbclid: 'FBCLID',
  li_fat_id: 'LI_FAT_ID',
  ad_id: 'AD_ID',
};

const getCookieValue = (name) => {
  const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : null;
};

const getTrackingParams = () => {
  const params = new URLSearchParams(window.location.search);
  const tracking = {};
  for (const [urlKey, apiKey] of Object.entries(UTM_PARAMS_MAP)) {
    const value = params.get(urlKey) || getCookieValue(urlKey);
    if (value) tracking[apiKey] = value;
  }
  // Also capture the referral URL
  if (document.referrer) {
    tracking.ReferralURL = document.referrer;
  }
  return tracking;
};

const PRODUCTS = [
  { id: 'thuisbatterij', label: 'Thuisbatterij', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-thuisbatterij.svg' },
  { id: 'zonnepanelen', label: 'Zonnepanelen', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-zonnepanelen.svg' },
  { id: 'laadpaal', label: 'Laadpaal', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-laadpaal.svg' },
  { id: 'groepenkast', label: 'Groepenkast', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-groepenkast.svg' },
];

const PRODUCT_FLOW_MAP = {
  zonnepanelen: '9d9fc9e3-64a6-4cfc-83af-5bfc062fc21d',
  thuisbatterij: 'dc730492-87f6-41de-a97c-9d1ce279ed93',
  groepenkast: '8251df8d-242f-4349-922b-d28196c73223',
  laadpaal: '1f49c5e2-79b5-47b1-a507-77b1b7747036',
};

const TOTAL_STEPS = 3;

// Order in which fields are checked, so focus goes to the first invalid field on screen.
const FIELD_ORDER = ['firstname', 'lastname', 'postal', 'houseNumber', 'email', 'phone'];

// Text input with a programmatically linked label, error and hint (WCAG 1.3.1, 3.3.1, 3.3.2, 4.1.2).
function Field({ id, label, required = true, error, hint, inputRef, className = '', ...inputProps }) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`sc-form-group ${className}`}>
      <label className="sc-label" htmlFor={id}>
        {label}
        {required ? <span className="sc-required" aria-hidden="true"> *</span> : <span className="sc-visually-hidden"> (optioneel)</span>}
      </label>
      {hint && <div id={`${id}-hint`} className="sc-hint">{hint}</div>}
      <input
        id={id}
        ref={inputRef}
        className={`sc-input ${error ? 'error' : ''}`}
        aria-required={required ? 'true' : undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        {...inputProps}
      />
      {error && (
        <div id={`${id}-error`} className="sc-error-msg">
          <span aria-hidden="true">⚠ </span>{error}
        </div>
      )}
    </div>
  );
}

function App({ demo = false, headingLevel = 3 }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hasSolar: null,
    selectedProducts: [],
    firstname: '',
    lastname: '',
    postal: '',
    houseNumber: '',
    houseNumberAddition: '', // Optional addition
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Capture UTM & tracking params once on mount
  const [trackingData] = useState(() => getTrackingParams());

  // Unique id prefix so two widgets on one page never clash.
  const [uid] = useState(() => `sc-${Math.random().toString(36).slice(2, 8)}`);

  const headingRef = useRef(null);
  const fieldRefs = useRef({});
  const isFirstRender = useRef(true);

  // The widget question sits under the host page's own h2, so it defaults to h3 (WCAG 1.3.1).
  const Heading = `h${Math.min(Math.max(headingLevel, 2), 6)}`;

  // Move focus to the new step's heading after a step change, so keyboard and
  // screen reader users are not left on a removed element (WCAG 2.4.3).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (headingRef.current) headingRef.current.focus();
  }, [step, showSuccess]);

  // Progress calculation
  const progress = (step / TOTAL_STEPS) * 100;

  const handleUpdate = (field, value) => {
    let processedValue = value;

    // Strip spaces from postal code and convert to uppercase
    if (field === 'postal') {
      processedValue = value.replace(/\s/g, '').toUpperCase();
    }

    setFormData(prev => ({ ...prev, [field]: processedValue }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleProductToggle = (productId) => {
    setFormData(prev => {
      const current = prev.selectedProducts;
      if (current.includes(productId)) {
        return { ...prev, selectedProducts: current.filter(id => id !== productId) };
      } else {
        return { ...prev, selectedProducts: [...current, productId] };
      }
    });
    if (errors.selectedProducts) {
      setErrors(prev => ({ ...prev, selectedProducts: null }));
    }
  };

  const validateStep2 = () => {
    if (formData.selectedProducts.length === 0) {
      setErrors({ selectedProducts: 'Kies ten minste één product om verder te gaan.' });
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) newErrors.firstname = 'Vul je voornaam in.';
    if (!formData.lastname.trim()) newErrors.lastname = 'Vul je achternaam in.';

    // Postcode validation: 4 digits + 2 letters (1234AB format)
    const postalPattern = /^[0-9]{4}[A-Z]{2}$/;
    if (!postalPattern.test(formData.postal)) {
      newErrors.postal = 'Vul een postcode in met 4 cijfers en 2 letters, bijvoorbeeld 1234 AB.';
    }
    if (!formData.houseNumber.trim()) newErrors.houseNumber = 'Vul je huisnummer in.';
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.';
    }

    // Phone validation: only numbers and "+", min 10 digits, max 13 digits
    const phoneDigits = formData.phone.replace(/[^0-9]/g, ''); // Count only digits
    const hasInvalidChars = /[^0-9+]/.test(formData.phone); // Check for invalid characters

    if (hasInvalidChars) {
      newErrors.phone = 'Gebruik alleen cijfers en eventueel een +, bijvoorbeeld 0612345678.';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Een telefoonnummer heeft minimaal 10 cijfers, bijvoorbeeld 0612345678.';
    } else if (phoneDigits.length > 13) {
      newErrors.phone = 'Een telefoonnummer heeft maximaal 13 cijfers.';
    }

    setErrors(newErrors);

    // Put focus on the first field with an error, so it is announced (WCAG 3.3.1).
    const firstInvalid = FIELD_ORDER.find(f => newErrors[f]);
    if (firstInvalid && fieldRefs.current[firstInvalid]) {
      fieldRefs.current[firstInvalid].focus();
    }
    return Object.keys(newErrors).length === 0;
  };

  const chooseSolar = (value) => {
    handleUpdate('hasSolar', value);
    // Drop "zonnepanelen" if it was chosen before and is now hidden.
    if (value === true) {
      setFormData(prev => ({ ...prev, selectedProducts: prev.selectedProducts.filter(id => id !== 'zonnepanelen') }));
    }
    setStep(2); // Advance after an explicit button press
  };

  const handleNext = () => {
    if (step === 2 && !validateStep2()) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setErrors({});
    setSubmitError(null);
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setSubmitError(null);
    if (!validateStep3()) return;

    setIsSubmitting(true);

    const DEBUG_PAYLOAD_ONLY = false; // ← zet op false vóór build & push

    const flowsInterestedIn = formData.selectedProducts
      .filter(id => PRODUCT_FLOW_MAP[id])
      .map(id => ({ FlowID: PRODUCT_FLOW_MAP[id] }));

    // Prepare data for final processing
    // Mapping to new API structure
    const payload = {
      FlowID: "ea3563dc-c12f-4420-960d-b660275db7ad",
      Firstname: formData.firstname,
      Lastname: formData.lastname,
      Email: formData.email,
      Phonenumber: formData.phone,
      ...trackingData, // UTM params, click IDs & ReferralURL
      EnergyUsage: {
        HasSolarPanels: formData.hasSolar ? "Yes" : "No"
      },
      HouseDetails: {
        Zipcode: formData.postal,
        Housenumber: formData.houseNumber,
        HouseNumberAddition: formData.houseNumberAddition,
        Country: "NL"
      },
      // Putting measures in Note1 as requested
      Note1: formData.selectedProducts.join(', '),
      FlowsInterestedIn: flowsInterestedIn,
    };

    // Demo mode (data-demo="true" on the container): never send a lead.
    if (DEBUG_PAYLOAD_ONLY || demo) {
      console.log('Pico widget demo: geen aanvraag verstuurd. Payload:', payload);
      setIsSubmitting(false);
      setShowSuccess(true);
      return;
    }

    console.log('Submitting Form:', payload);

    try {
      const response = await fetch('https://pico.homezero.nl/rest/pico/v1/assignments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'hRxLOq1EK3VkSVFIFzD03qesWlALOWmZ'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // Try to parse JSON error
        if (errorData.error === "Could not find a building with this address") {
          throw new Error("AddressNotFound");
        }
        throw new Error(`API Error: ${response.statusText}`);
      }

      // Safely parse successful response
      const result = await response.json().catch(() => null);
      console.log('API Success:', result);

      setShowSuccess(true);
    } catch (error) {
      console.error('Submission failed:', error);
      // Inline message instead of a browser alert, announced via role="alert" (WCAG 4.1.3).
      if (error.message === "AddressNotFound") {
        setSubmitError('We konden geen woning vinden op dit adres. Controleer je postcode en huisnummer, of doe een normale huisscan op onze website.');
      } else {
        setSubmitError('Er is iets misgegaan bij het versturen. Probeer het later opnieuw of doe een normale huisscan op onze website.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (step === 2) handleNext();
    if (step === 3) handleSubmit();
  };

  const stepLabel = <span className="sc-visually-hidden">Stap {step} van {TOTAL_STEPS}: </span>;
  const titleId = `${uid}-title`;

  // Step 1: Initial Situation
  const renderStep1 = () => (
    <div className="fade-in">
      <Heading className="sc-title" id={titleId} ref={headingRef} tabIndex={-1}>
        {stepLabel}Heb je al zonnepanelen?
      </Heading>
      <div className="sc-grid" role="group" aria-labelledby={titleId}>
        <button
          type="button"
          className={`sc-tile ${formData.hasSolar === true ? 'active' : ''}`}
          aria-pressed={formData.hasSolar === true}
          onClick={() => chooseSolar(true)}
        >
          Ja
        </button>
        <button
          type="button"
          className={`sc-tile ${formData.hasSolar === false ? 'active' : ''}`}
          aria-pressed={formData.hasSolar === false}
          onClick={() => chooseSolar(false)}
        >
          Nee
        </button>
      </div>
    </div>
  );

  // Step 2: Product Interest
  const renderStep2 = () => {
    // Filter products: Hide 'zonnepanelen' if user already has them (hasSolar === true)
    const visibleProducts = PRODUCTS.filter(p => {
      if (formData.hasSolar === true && p.id === 'zonnepanelen') return false;
      return true;
    });
    const errorId = `${uid}-products-error`;

    return (
      <div className="fade-in">
        <Heading className="sc-title" id={titleId} ref={headingRef} tabIndex={-1}>
          {stepLabel}In welke producten heb je interesse?
        </Heading>
        <p className="sc-hint sc-hint-center" id={`${uid}-products-hint`}>Je kunt meerdere producten kiezen.</p>
        <div
          className="sc-grid"
          role="group"
          aria-labelledby={titleId}
          aria-describedby={`${uid}-products-hint${errors.selectedProducts ? ` ${errorId}` : ''}`}
        >
          {visibleProducts.map(p => {
            const selected = formData.selectedProducts.includes(p.id);
            return (
              <button
                type="button"
                key={p.id}
                className={`sc-tile ${selected ? 'active' : ''}`}
                aria-pressed={selected}
                onClick={() => handleProductToggle(p.id)}
              >
                <span className="sc-tile-content">
                  {/* Decorative: the label next to it already names the product (WCAG 1.1.1) */}
                  <img src={p.icon} alt="" className="sc-tile-icon" />
                  <span className="sc-tile-label">{p.label}</span>
                </span>
                {selected && (
                  <span className="sc-check-badge" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div role="alert" className="sc-alert-slot">
          {errors.selectedProducts && (
            <div id={errorId} className="sc-error-msg" style={{ textAlign: 'center', marginTop: '12px' }}>
              <span aria-hidden="true">⚠ </span>{errors.selectedProducts}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Step 3: Contact Details
  const renderStep3 = () => (
    <div className="fade-in">
      <Heading className="sc-title" id={titleId} ref={headingRef} tabIndex={-1}>
        {stepLabel}Waar mag je aanbod heen?
      </Heading>
      <p className="sc-hint sc-required-note">Velden met <span aria-hidden="true">*</span><span className="sc-visually-hidden">een sterretje</span> zijn verplicht.</p>

      <div className="sc-row">
        <div className="sc-col">
          <Field
            id={`${uid}-firstname`}
            label="Voornaam"
            type="text"
            autoComplete="given-name"
            value={formData.firstname}
            onChange={(e) => handleUpdate('firstname', e.target.value)}
            error={errors.firstname}
            inputRef={el => { fieldRefs.current.firstname = el; }}
          />
        </div>
        <div className="sc-col">
          <Field
            id={`${uid}-lastname`}
            label="Achternaam"
            type="text"
            autoComplete="family-name"
            value={formData.lastname}
            onChange={(e) => handleUpdate('lastname', e.target.value)}
            error={errors.lastname}
            inputRef={el => { fieldRefs.current.lastname = el; }}
          />
        </div>
      </div>

      <div className="sc-row">
        <div className="sc-col">
          <Field
            id={`${uid}-postal`}
            label="Postcode"
            type="text"
            autoComplete="postal-code"
            value={formData.postal}
            onChange={(e) => handleUpdate('postal', e.target.value)}
            placeholder="1234 AB"
            error={errors.postal}
            inputRef={el => { fieldRefs.current.postal = el; }}
          />
        </div>
        <div className="sc-col">
          <div className="sc-house-row">
            <Field
              id={`${uid}-housenumber`}
              label="Huisnummer"
              type="text"
              inputMode="numeric"
              className="sc-house-number"
              value={formData.houseNumber}
              onChange={(e) => handleUpdate('houseNumber', e.target.value)}
              error={errors.houseNumber}
              inputRef={el => { fieldRefs.current.houseNumber = el; }}
            />
            <Field
              id={`${uid}-addition`}
              label="Toevoeging"
              required={false}
              type="text"
              className="sc-house-addition"
              value={formData.houseNumberAddition}
              onChange={(e) => handleUpdate('houseNumberAddition', e.target.value)}
            />
          </div>
        </div>
      </div>

      <Field
        id={`${uid}-email`}
        label="E-mailadres"
        type="email"
        autoComplete="email"
        value={formData.email}
        onChange={(e) => handleUpdate('email', e.target.value)}
        placeholder="naam@voorbeeld.nl"
        error={errors.email}
        inputRef={el => { fieldRefs.current.email = el; }}
      />

      <Field
        id={`${uid}-phone`}
        label="Telefoonnummer"
        type="tel"
        autoComplete="tel"
        value={formData.phone}
        onChange={(e) => handleUpdate('phone', e.target.value)}
        placeholder="06 12345678"
        error={errors.phone}
        inputRef={el => { fieldRefs.current.phone = el; }}
      />

      <div role="alert" className="sc-alert-slot">
        {submitError && <div className="sc-submit-error"><span aria-hidden="true">⚠ </span>{submitError}</div>}
      </div>
    </div>
  );

  // Success Screen
  const renderSuccess = () => (
    <div className="sc-success-screen fade-in">
      <div className="sc-success-checkmark" aria-hidden="true">
        <svg viewBox="0 0 52 52" className="sc-checkmark-svg" focusable="false">
          <circle className="sc-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="sc-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <Heading className="sc-success-title" ref={headingRef} tabIndex={-1}>Bedankt!</Heading>
      <p className="sc-success-message">
        Je hoort snel van ons.
      </p>
    </div>
  );

  return (
    <div className="sc-widget-container">
      <form className="sc-card" onSubmit={onFormSubmit} noValidate aria-labelledby={showSuccess ? undefined : titleId}>
        {/* Progress Bar: the step is also given as text for screen readers (WCAG 1.3.1) */}
        <div
          className="sc-progress-bar"
          role="progressbar"
          aria-label="Voortgang"
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-valuenow={showSuccess ? TOTAL_STEPS : step}
          aria-valuetext={showSuccess ? 'Verstuurd' : `Stap ${step} van ${TOTAL_STEPS}`}
        >
          <div className="sc-progress-fill" style={{ width: `${showSuccess ? 100 : progress}%` }}></div>
        </div>

        {/* Content */}
        <div className="sc-content">
          {showSuccess ? renderSuccess() : (
            <>
              {/* Visible step text, so progress does not rely on the yellow bar alone (WCAG 1.4.11) */}
              <p className="sc-step" aria-hidden="true">Stap {step} van {TOTAL_STEPS}</p>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
            </>
          )}
        </div>

        {/* Footer */}
        {step > 1 && !showSuccess && (
          <div className="sc-footer space-between">
            <button type="button" className="sc-btn sc-btn-back" onClick={handleBack}>
              Terug
            </button>

            {step === 2 ? (
              <button type="submit" className="sc-btn">
                Volgende stap
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <button type="submit" className="sc-btn" disabled={isSubmitting} aria-disabled={isSubmitting}>
                  {isSubmitting ? 'Even geduld...' : 'Ontvang mijn gratis aanbod'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Disclaimer directly below the submit button */}
        {step === 3 && !showSuccess && (
          <div style={{ padding: '0 24px 24px 24px' }}>
            <p className="sc-disclaimer">
              Binnen een paar minuten gratis en vrijblijvend in je mail! Het kan zijn dat we je bellen voor meer informatie. Zo kunnen we je het beste advies geven.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
