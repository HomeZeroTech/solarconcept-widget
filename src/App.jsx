import React, { useState, useEffect } from 'react';
import './widget.css';

const PRODUCTS = [
  { id: 'thuisbatterij', label: 'Thuisbatterij', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-thuisbatterij.svg' },
  { id: 'zonnepanelen', label: 'Zonnepanelen', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-zonnepanelen.svg' },
  { id: 'laadpaal', label: 'Laadpaal', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-laadpaal.svg' },
  { id: 'groepenkast', label: 'Groepenkast', icon: 'https://www.solarconcept.nl/images/algemeen/Icoon-groepenkast.svg' },
];

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hasSolar: null,
    selectedProducts: [],
    postal: '',
    houseNumber: '',
    houseNumberAddition: '', // Optional addition
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Progress calculation
  const progress = (step / 3) * 100;

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
      setErrors({ selectedProducts: 'Selecteer ten minste één product.' });
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const newErrors = {};
    // Postcode validation: 4 digits + 2 letters (1234AB format)
    const postalPattern = /^[0-9]{4}[A-Z]{2}$/;
    if (!postalPattern.test(formData.postal)) {
      newErrors.postal = 'Postcode moet 4 cijfers gevolgd door 2 letters zijn (bijv. 1234AB).';
    }
    if (!formData.houseNumber) newErrors.houseNumber = 'Huisnummer is verplicht.';
    if (!formData.email.includes('@') || !formData.email.includes('.')) newErrors.email = 'Ongeldig e-mailadres.';

    // Phone validation: only numbers and "+", min 10 digits, max 13 digits
    const phoneDigits = formData.phone.replace(/[^0-9]/g, ''); // Count only digits
    const hasInvalidChars = /[^0-9+]/.test(formData.phone); // Check for invalid characters

    if (hasInvalidChars) {
      newErrors.phone = 'Telefoonnummer mag alleen cijfers en + bevatten.';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Telefoonnummer moet minimaal 10 cijfers bevatten.';
    } else if (phoneDigits.length > 13) {
      newErrors.phone = 'Telefoonnummer mag maximaal 13 cijfers bevatten.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 2 && !validateStep2()) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;

    setIsSubmitting(true);

    // Prepare data for final processing
    // Mapping to new API structure
    const payload = {
      FlowID: "a6673227-7758-4ee0-ba07-20e41366b2bb",
      Email: formData.email,
      Phonenumber: formData.phone,
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
      Note1: formData.selectedProducts.join(', ')
    };

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

      // Show success animation instead of alert
      setShowSuccess(true);
    } catch (error) {
      console.error('Submission failed:', error);
      if (error.message === "AddressNotFound") {
        alert('We konden geen gebouw vinden op dit adres. Controleer je invoer of doe een normale huisscan op onze website.');
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw of doe een normale huisscan op onze website.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 1: Initial Situation
  const renderStep1 = () => (
    <div className="fade-in">
      <h2 className="sc-title">Heb je al zonnepanelen?</h2>
      <div className="sc-grid">
        <div
          className={`sc-tile ${formData.hasSolar === true ? 'active' : ''}`}
          onClick={() => {
            handleUpdate('hasSolar', true);
            setStep(2); // Auto advance
          }}
        >
          Ja
        </div>
        <div
          className={`sc-tile ${formData.hasSolar === false ? 'active' : ''}`}
          onClick={() => {
            handleUpdate('hasSolar', false);
            setStep(2); // Auto advance
          }}
        >
          Nee
        </div>
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

    return (
      <div className="fade-in">
        <h2 className="sc-title">In welke producten heb je interesse?</h2>
        <div className="sc-grid">
          {visibleProducts.map(p => (
            <div
              key={p.id}
              className={`sc-tile ${formData.selectedProducts.includes(p.id) ? 'active' : ''}`}
              onClick={() => handleProductToggle(p.id)}
            >
              <div className="sc-tile-content">
                <img src={p.icon} alt={p.label} className="sc-tile-icon" />
                <span className="sc-tile-label">{p.label}</span>
              </div>
              {formData.selectedProducts.includes(p.id) && (
                <div className="sc-check-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        {errors.selectedProducts && <div className="sc-error-msg" style={{ textAlign: 'center', marginTop: '12px' }}>{errors.selectedProducts}</div>}
      </div>
    );
  };

  // Step 3: Contact Details
  const renderStep3 = () => (
    <div className="fade-in">
      <h2 className="sc-title">Waar mag je aanbod heen?</h2>

      <div className="sc-row">
        <div className="sc-col">
          <div className="sc-form-group">
            <label className="sc-label">Postcode</label>
            <input
              type="text"
              className={`sc-input ${errors.postal ? 'error' : ''}`}
              value={formData.postal}
              onChange={(e) => handleUpdate('postal', e.target.value)}
              placeholder="1234 AB"
            />
            {errors.postal && <div className="sc-error-msg">{errors.postal}</div>}
          </div>
        </div>
        <div className="sc-col">
          <div className="sc-form-group">
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <label className="sc-label">Huisnummer</label>
                <input
                  type="text"
                  className={`sc-input ${errors.houseNumber ? 'error' : ''}`}
                  value={formData.houseNumber}
                  onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                  placeholder="10"
                />
              </div>
              <div style={{ width: '140px' }}>
                <label className="sc-label">Toevoeging</label>
                <input
                  type="text"
                  className="sc-input"
                  value={formData.houseNumberAddition}
                  onChange={(e) => setFormData({ ...formData, houseNumberAddition: e.target.value })}
                  placeholder="Optioneel"
                />
              </div>
            </div>
            {errors.houseNumber && <span className="sc-error-text">{errors.houseNumber}</span>}
          </div>
        </div>
      </div>

      <div className="sc-form-group">
        <label className="sc-label">E-mailadres</label>
        <input
          type="email"
          className={`sc-input ${errors.email ? 'error' : ''}`}
          value={formData.email}
          onChange={(e) => handleUpdate('email', e.target.value)}
          placeholder="naam@voorbeeld.nl"
        />
        {errors.email && <div className="sc-error-msg">{errors.email}</div>}
      </div>

      <div className="sc-form-group">
        <label className="sc-label">Telefoonnummer</label>
        <input
          type="tel"
          className={`sc-input ${errors.phone ? 'error' : ''}`}
          value={formData.phone}
          onChange={(e) => handleUpdate('phone', e.target.value)}
          placeholder="06 12345678"
        />
        {errors.phone && <div className="sc-error-msg">{errors.phone}</div>}
      </div>
    </div>
  );

  // Success Screen
  const renderSuccess = () => (
    <div className="sc-success-screen fade-in">
      <div className="sc-success-checkmark">
        <svg viewBox="0 0 52 52" className="sc-checkmark-svg">
          <circle className="sc-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="sc-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <h2 className="sc-success-title">Bedankt!</h2>
      <p className="sc-success-message">
        Je aanvraag is verstuurd. Binnen een paar minuten ontvang je een gratis en vrijblijvend aanbod in je mail!
      </p>
    </div>
  );

  return (
    <div className="sc-widget-container">
      <div className="sc-card">
        {/* Progress Bar */}
        <div className="sc-progress-bar">
          <div className="sc-progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Content */}
        <div className="sc-content">
          {showSuccess ? renderSuccess() : (
            <>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
            </>
          )}
        </div>

        {/* Footer */}
        {step > 1 && !showSuccess && (
          <div className="sc-footer space-between">
            <button className="sc-btn sc-btn-back" onClick={handleBack}>
              Terug
            </button>

            {step === 2 ? (
              <button className="sc-btn" onClick={handleNext}>
                Volgende stap
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <button className="sc-btn" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Even geduld...' : 'Ontvang mijn gratis aanbod'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 3 Disclaimer - Outside footer flex or part of footer? 
            Requirement: "MUST be displayed directly below the submit button"
            So if it's in the footer, it needs to be handled carefully.
        */}
        {step === 3 && !showSuccess && (
          <div style={{ padding: '0 24px 24px 24px' }}>
            <p className="sc-disclaimer">
              Binnen een paar minuten gratis en vrijblijvend in je mail! Het kan zijn dat we je bellen voor meer informatie. Zo kunnen we je het beste advies geven.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
