(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--sc-primary: #ffdb00;--sc-primary-hover: #e6c600;--sc-footer-bg: #fff9c4;--sc-text: #1a1a1a;--sc-border: #e5e7eb;--sc-border-active: #ffdb00;--sc-radius: 8px;--sc-transition: all .3s ease}.sc-widget-container{font-family:inherit;color:var(--sc-text);width:100%;box-sizing:border-box}.sc-widget-container *{box-sizing:border-box}.sc-card{background:#fff;border-radius:var(--sc-radius);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;overflow:hidden;display:flex;flex-direction:column;height:600px;position:relative}.sc-progress-bar{height:4px;background:#f3f4f6;width:100%}.sc-progress-fill{height:100%;background:var(--sc-primary);transition:width .5s ease}.sc-content{padding:24px;flex:1;overflow-y:auto;display:flex;flex-direction:column}.sc-title{font-size:1.25rem;font-weight:600;margin-bottom:24px;text-align:center;line-height:1.4}.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.sc-tile{background:#fff;border:2px solid var(--sc-border);border-radius:var(--sc-radius);padding:16px;cursor:pointer;text-align:center;font-weight:500;transition:var(--sc-transition);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:140px;position:relative}.sc-tile:hover{border-color:var(--sc-primary)}.sc-tile.active{border-color:var(--sc-primary);background-color:#fffdf0;box-shadow:0 0 0 1px var(--sc-primary)}.sc-tile-content{display:flex;flex-direction:column;align-items:center;gap:12px}.sc-tile-icon{width:48px;height:48px;object-fit:contain}.sc-tile-label{font-weight:600;font-size:.95rem}.sc-check-badge{position:absolute;top:8px;right:8px;width:20px;height:20px;background-color:var(--sc-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;animation:popIn .2s cubic-bezier(.175,.885,.32,1.275)}@keyframes popIn{0%{transform:scale(0)}to{transform:scale(1)}}.sc-form-group{margin-bottom:16px}.sc-label{display:block;font-size:.875rem;font-weight:500;margin-bottom:6px}.sc-input{width:100%;padding:12px;border:1px solid var(--sc-border);border-radius:var(--sc-radius);font-size:1rem;transition:var(--sc-transition)}.sc-input:focus{outline:none;border-color:var(--sc-primary);box-shadow:0 0 0 3px #ffdb0033}.sc-input.error{border-color:#ef4444}.sc-error-msg{color:#ef4444;font-size:.75rem;margin-top:4px}.sc-row{display:flex;gap:16px}.sc-col{flex:1}.sc-footer{padding:24px;background:transparent;border-top:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center}.sc-footer.space-between{justify-content:space-between}.sc-btn{background-color:var(--sc-primary);color:var(--sc-text);border:none;padding:12px 24px;border-radius:var(--sc-radius);font-weight:600;cursor:pointer;transition:var(--sc-transition);font-size:1rem}.sc-btn:hover:not(:disabled){background-color:var(--sc-primary-hover)}.sc-btn:disabled{opacity:.5;cursor:not-allowed;background-color:#e5e7eb;color:#9ca3af}.sc-btn-back{background:transparent;color:#6b7280;padding:12px 16px}.sc-btn-back:hover{background:#0000000d;color:var(--sc-text)}.sc-disclaimer{font-size:.75rem;color:#6b7280;text-align:center;margin-top:12px;line-height:1.4}.fade-in{animation:fadeIn .4s ease-out}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 600px){.sc-grid{grid-template-columns:1fr}.sc-content{padding:16px;height:auto;overflow-y:visible}.sc-card{height:auto;min-height:600px}.sc-footer{padding:16px;flex-direction:column-reverse;gap:12px}.sc-footer.space-between{flex-direction:row}.sc-tile{min-height:100px;flex-direction:row;justify-content:flex-start;padding:12px;gap:16px}.sc-tile-content{flex-direction:row;gap:16px}.sc-tile-icon{width:32px;height:32px}.sc-check-badge{top:50%;transform:translateY(-50%);right:16px}}.sc-success-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 20px;min-height:400px}.sc-success-checkmark{width:80px;height:80px;margin-bottom:24px}.sc-checkmark-svg{width:100%;height:100%;border-radius:50%;display:block;stroke-width:2;stroke:#4caf50;stroke-miterlimit:10}.sc-checkmark-circle{stroke-dasharray:166;stroke-dashoffset:166;stroke:#4caf50;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.sc-checkmark-check{stroke-dasharray:48;stroke-dashoffset:48;stroke:#4caf50;animation:stroke .3s cubic-bezier(.65,0,.45,1) .6s forwards;stroke-width:3}@keyframes stroke{to{stroke-dashoffset:0}}.sc-success-title{font-size:28px;font-weight:700;color:var(--sc-text);margin:0 0 16px}.sc-success-message{font-size:16px;color:#666;line-height:1.6;max-width:400px;margin:0}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Z_(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var p0 = { exports: {} }, Kp = {}, v0 = { exports: {} }, xt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function J_() {
  if (XR) return xt;
  XR = 1;
  var q = Symbol.for("react.element"), te = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), Et = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), at = Symbol.for("react.suspense"), _e = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Be = Symbol.iterator;
  function X(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Be && _[Be] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, xe = {};
  function ot(_, B, Ne) {
    this.props = _, this.context = B, this.refs = xe, this.updater = Ne || Fe;
  }
  ot.prototype.isReactComponent = {}, ot.prototype.setState = function(_, B) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, B, "setState");
  }, ot.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Tn() {
  }
  Tn.prototype = ot.prototype;
  function en(_, B, Ne) {
    this.props = _, this.context = B, this.refs = xe, this.updater = Ne || Fe;
  }
  var it = en.prototype = new Tn();
  it.constructor = en, le(it, ot.prototype), it.isPureReactComponent = !0;
  var Ae = Array.isArray, Nt = Object.prototype.hasOwnProperty, Te = { current: null }, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(_, B, Ne) {
    var Ie, We = {}, ft = null, bt = null;
    if (B != null) for (Ie in B.ref !== void 0 && (bt = B.ref), B.key !== void 0 && (ft = "" + B.key), B) Nt.call(B, Ie) && !ee.hasOwnProperty(Ie) && (We[Ie] = B[Ie]);
    var qe = arguments.length - 2;
    if (qe === 1) We.children = Ne;
    else if (1 < qe) {
      for (var Tt = Array(qe), Bt = 0; Bt < qe; Bt++) Tt[Bt] = arguments[Bt + 2];
      We.children = Tt;
    }
    if (_ && _.defaultProps) for (Ie in qe = _.defaultProps, qe) We[Ie] === void 0 && (We[Ie] = qe[Ie]);
    return { $$typeof: q, type: _, key: ft, ref: bt, props: We, _owner: Te.current };
  }
  function Je(_, B) {
    return { $$typeof: q, type: _.type, key: B, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function st(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === q;
  }
  function un(_) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Ne) {
      return B[Ne];
    });
  }
  var Wt = /\/+/g;
  function Rt(_, B) {
    return typeof _ == "object" && _ !== null && _.key != null ? un("" + _.key) : B.toString(36);
  }
  function je(_, B, Ne, Ie, We) {
    var ft = typeof _;
    (ft === "undefined" || ft === "boolean") && (_ = null);
    var bt = !1;
    if (_ === null) bt = !0;
    else switch (ft) {
      case "string":
      case "number":
        bt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case q:
          case te:
            bt = !0;
        }
    }
    if (bt) return bt = _, We = We(bt), _ = Ie === "" ? "." + Rt(bt, 0) : Ie, Ae(We) ? (Ne = "", _ != null && (Ne = _.replace(Wt, "$&/") + "/"), je(We, B, Ne, "", function(Bt) {
      return Bt;
    })) : We != null && (st(We) && (We = Je(We, Ne + (!We.key || bt && bt.key === We.key ? "" : ("" + We.key).replace(Wt, "$&/") + "/") + _)), B.push(We)), 1;
    if (bt = 0, Ie = Ie === "" ? "." : Ie + ":", Ae(_)) for (var qe = 0; qe < _.length; qe++) {
      ft = _[qe];
      var Tt = Ie + Rt(ft, qe);
      bt += je(ft, B, Ne, Tt, We);
    }
    else if (Tt = X(_), typeof Tt == "function") for (_ = Tt.call(_), qe = 0; !(ft = _.next()).done; ) ft = ft.value, Tt = Ie + Rt(ft, qe++), bt += je(ft, B, Ne, Tt, We);
    else if (ft === "object") throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return bt;
  }
  function Ft(_, B, Ne) {
    if (_ == null) return _;
    var Ie = [], We = 0;
    return je(_, Ie, "", "", function(ft) {
      return B.call(Ne, ft, We++);
    }), Ie;
  }
  function gt(_) {
    if (_._status === -1) {
      var B = _._result;
      B = B(), B.then(function(Ne) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Ne);
      }, function(Ne) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Ne);
      }), _._status === -1 && (_._status = 0, _._result = B);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ct = { current: null }, I = { transition: null }, Ee = { ReactCurrentDispatcher: ct, ReactCurrentBatchConfig: I, ReactCurrentOwner: Te };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xt.Children = { map: Ft, forEach: function(_, B, Ne) {
    Ft(_, function() {
      B.apply(this, arguments);
    }, Ne);
  }, count: function(_) {
    var B = 0;
    return Ft(_, function() {
      B++;
    }), B;
  }, toArray: function(_) {
    return Ft(_, function(B) {
      return B;
    }) || [];
  }, only: function(_) {
    if (!st(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, xt.Component = ot, xt.Fragment = k, xt.Profiler = Oe, xt.PureComponent = en, xt.StrictMode = rt, xt.Suspense = at, xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, xt.act = ae, xt.cloneElement = function(_, B, Ne) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ie = le({}, _.props), We = _.key, ft = _.ref, bt = _._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ft = B.ref, bt = Te.current), B.key !== void 0 && (We = "" + B.key), _.type && _.type.defaultProps) var qe = _.type.defaultProps;
      for (Tt in B) Nt.call(B, Tt) && !ee.hasOwnProperty(Tt) && (Ie[Tt] = B[Tt] === void 0 && qe !== void 0 ? qe[Tt] : B[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) Ie.children = Ne;
    else if (1 < Tt) {
      qe = Array(Tt);
      for (var Bt = 0; Bt < Tt; Bt++) qe[Bt] = arguments[Bt + 2];
      Ie.children = qe;
    }
    return { $$typeof: q, type: _.type, key: We, ref: ft, props: Ie, _owner: bt };
  }, xt.createContext = function(_) {
    return _ = { $$typeof: Ct, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Et, _context: _ }, _.Consumer = _;
  }, xt.createElement = pe, xt.createFactory = function(_) {
    var B = pe.bind(null, _);
    return B.type = _, B;
  }, xt.createRef = function() {
    return { current: null };
  }, xt.forwardRef = function(_) {
    return { $$typeof: S, render: _ };
  }, xt.isValidElement = st, xt.lazy = function(_) {
    return { $$typeof: de, _payload: { _status: -1, _result: _ }, _init: gt };
  }, xt.memo = function(_, B) {
    return { $$typeof: _e, type: _, compare: B === void 0 ? null : B };
  }, xt.startTransition = function(_) {
    var B = I.transition;
    I.transition = {};
    try {
      _();
    } finally {
      I.transition = B;
    }
  }, xt.unstable_act = ae, xt.useCallback = function(_, B) {
    return ct.current.useCallback(_, B);
  }, xt.useContext = function(_) {
    return ct.current.useContext(_);
  }, xt.useDebugValue = function() {
  }, xt.useDeferredValue = function(_) {
    return ct.current.useDeferredValue(_);
  }, xt.useEffect = function(_, B) {
    return ct.current.useEffect(_, B);
  }, xt.useId = function() {
    return ct.current.useId();
  }, xt.useImperativeHandle = function(_, B, Ne) {
    return ct.current.useImperativeHandle(_, B, Ne);
  }, xt.useInsertionEffect = function(_, B) {
    return ct.current.useInsertionEffect(_, B);
  }, xt.useLayoutEffect = function(_, B) {
    return ct.current.useLayoutEffect(_, B);
  }, xt.useMemo = function(_, B) {
    return ct.current.useMemo(_, B);
  }, xt.useReducer = function(_, B, Ne) {
    return ct.current.useReducer(_, B, Ne);
  }, xt.useRef = function(_) {
    return ct.current.useRef(_);
  }, xt.useState = function(_) {
    return ct.current.useState(_);
  }, xt.useSyncExternalStore = function(_, B, Ne) {
    return ct.current.useSyncExternalStore(_, B, Ne);
  }, xt.useTransition = function() {
    return ct.current.useTransition();
  }, xt.version = "18.3.1", xt;
}
var Jp = { exports: {} };
Jp.exports;
var ZR;
function ek() {
  return ZR || (ZR = 1, function(q, te) {
    var k = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    k.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var rt = "18.3.1", Oe = Symbol.for("react.element"), Et = Symbol.for("react.portal"), Ct = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), at = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), de = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), Tn = Symbol.iterator, en = "@@iterator";
      function it(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Tn && h[Tn] || h[en];
        return typeof C == "function" ? C : null;
      }
      var Ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Nt = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {}, Je = null;
      function st(h) {
        Je = h;
      }
      pe.setExtraStackFrame = function(h) {
        Je = h;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var h = "";
        Je && (h += Je);
        var C = pe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var un = !1, Wt = !1, Rt = !1, je = !1, Ft = !1, gt = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: Nt,
        ReactCurrentOwner: ee
      };
      gt.ReactDebugCurrentFrame = pe, gt.ReactCurrentActQueue = Te;
      function ct(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          Ee("warn", h, M);
        }
      }
      function I(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          Ee("error", h, M);
        }
      }
      function Ee(h, C, M) {
        {
          var j = gt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", M = M.concat([Z]));
          var Se = M.map(function(ve) {
            return String(ve);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var ae = {};
      function _(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", Z = j + "." + C;
          if (ae[Z])
            return;
          I("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), ae[Z] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          _(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, j) {
          _(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, j) {
          _(h, "setState");
        }
      }, Ne = Object.assign, Ie = {};
      Object.freeze(Ie);
      function We(h, C, M) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = M || B;
      }
      We.prototype.isReactComponent = {}, We.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, We.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, bt = function(h, C) {
          Object.defineProperty(We.prototype, h, {
            get: function() {
              ct("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var qe in ft)
          ft.hasOwnProperty(qe) && bt(qe, ft[qe]);
      }
      function Tt() {
      }
      Tt.prototype = We.prototype;
      function Bt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = M || B;
      }
      var Nn = Bt.prototype = new Tt();
      Nn.constructor = Bt, Ne(Nn, We.prototype), Nn.isPureReactComponent = !0;
      function Gn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ar = Array.isArray;
      function Ln(h) {
        return ar(h);
      }
      function Er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return Mn(h), !1;
        } catch {
          return !0;
        }
      }
      function Mn(h) {
        return "" + h;
      }
      function fa(h) {
        if (Vn(h))
          return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), Mn(h);
      }
      function Qa(h, C, M) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? M + "(" + Z + ")" : M;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Bn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ct:
            return "Fragment";
          case Et:
            return "Portal";
          case at:
            return "Profiler";
          case S:
            return "StrictMode";
          case X:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case de:
              var C = h;
              return Dr(C) + ".Consumer";
            case _e:
              var M = h;
              return Dr(M._context) + ".Provider";
            case Be:
              return Qa(h, h.render, "ForwardRef");
            case le:
              var j = h.displayName || null;
              return j !== null ? j : Bn(h.type) || "Memo";
            case xe: {
              var Z = h, Se = Z._payload, ve = Z._init;
              try {
                return Bn(ve(Se));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ga, zn;
      zn = {};
      function ir(h) {
        if (qn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (qn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Oi(h, C) {
        var M = function() {
          Cr || (Cr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function da(h, C) {
        var M = function() {
          Ga || (Ga = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function J(h) {
        if (typeof h.ref == "string" && ee.current && h.__self && ee.current.stateNode !== h.__self) {
          var C = Bn(ee.current.type);
          zn[C] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), zn[C] = !0);
        }
      }
      var Me = function(h, C, M, j, Z, Se, ve) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Oe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: Se
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function nt(h, C, M) {
        var j, Z = {}, Se = null, ve = null, Pe = null, ut = null;
        if (C != null) {
          ir(C) && (ve = C.ref, J(C)), $r(C) && (fa(C.key), Se = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, ut = C.__source === void 0 ? null : C.__source;
          for (j in C)
            qn.call(C, j) && !Kn.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          Z.children = M;
        else if (Ht > 1) {
          for (var qt = Array(Ht), Kt = 0; Kt < Ht; Kt++)
            qt[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(qt), Z.children = qt;
        }
        if (h && h.defaultProps) {
          var et = h.defaultProps;
          for (j in et)
            Z[j] === void 0 && (Z[j] = et[j]);
        }
        if (Se || ve) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && Oi(Z, tn), ve && da(Z, tn);
        }
        return Me(h, Se, ve, Pe, ut, ee.current, Z);
      }
      function Ut(h, C) {
        var M = Me(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function on(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = Ne({}, h.props), Se = h.key, ve = h.ref, Pe = h._self, ut = h._source, Ht = h._owner;
        if (C != null) {
          ir(C) && (ve = C.ref, Ht = ee.current), $r(C) && (fa(C.key), Se = "" + C.key);
          var qt;
          h.type && h.type.defaultProps && (qt = h.type.defaultProps);
          for (j in C)
            qn.call(C, j) && !Kn.hasOwnProperty(j) && (C[j] === void 0 && qt !== void 0 ? Z[j] = qt[j] : Z[j] = C[j]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          Z.children = M;
        else if (Kt > 1) {
          for (var et = Array(Kt), tn = 0; tn < Kt; tn++)
            et[tn] = arguments[tn + 2];
          Z.children = et;
        }
        return Me(h.type, Se, ve, Pe, ut, Ht, Z);
      }
      function sn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Oe;
      }
      var cn = ".", Xn = ":";
      function an(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return M[Z];
        });
        return "$" + j;
      }
      var Qt = !1, At = /\/+/g;
      function pa(h) {
        return h.replace(At, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (fa(h.key), an("" + h.key)) : C.toString(36);
      }
      function ka(h, C, M, j, Z) {
        var Se = typeof h;
        (Se === "undefined" || Se === "boolean") && (h = null);
        var ve = !1;
        if (h === null)
          ve = !0;
        else
          switch (Se) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Oe:
                case Et:
                  ve = !0;
              }
          }
        if (ve) {
          var Pe = h, ut = Z(Pe), Ht = j === "" ? cn + _a(Pe, 0) : j;
          if (Ln(ut)) {
            var qt = "";
            Ht != null && (qt = pa(Ht) + "/"), ka(ut, C, qt, "", function(Xf) {
              return Xf;
            });
          } else ut != null && (sn(ut) && (ut.key && (!Pe || Pe.key !== ut.key) && fa(ut.key), ut = Ut(
            ut,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ut.key && (!Pe || Pe.key !== ut.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + ut.key) + "/"
            ) : "") + Ht
          )), C.push(ut));
          return 1;
        }
        var Kt, et, tn = 0, xn = j === "" ? cn : j + Xn;
        if (Ln(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            Kt = h[Jl], et = xn + _a(Kt, Jl), tn += ka(Kt, C, M, et, Z);
        else {
          var Go = it(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (Qt || ct("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var eu = Go.call(Pi), qo, Kf = 0; !(qo = eu.next()).done; )
              Kt = qo.value, et = xn + _a(Kt, Kf++), tn += ka(Kt, C, M, et, Z);
          } else if (Se === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function Ni(h, C, M) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return ka(h, j, "", "", function(Se) {
          return C.call(M, Se, Z++);
        }), j;
      }
      function $l(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Wl(h, C, M) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Li(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Ql(h) {
        if (!sn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function oi(h) {
        var C = {
          $$typeof: de,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: _e,
          _context: C
        };
        var M = !1, j = !1, Z = !1;
        {
          var Se = {
            $$typeof: de,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return j || (j = !0, I("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, I("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                Z || (ct("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), Z = !0);
              }
            }
          }), C.Consumer = Se;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, lr = 0, ha = 1, Wr = 2;
      function si(h) {
        if (h._status === va) {
          var C = h._result, M = C();
          if (M.then(function(Se) {
            if (h._status === lr || h._status === va) {
              var ve = h;
              ve._status = ha, ve._result = Se;
            }
          }, function(Se) {
            if (h._status === lr || h._status === va) {
              var ve = h;
              ve._status = Wr, ve._result = Se;
            }
          }), h._status === va) {
            var j = h;
            j._status = lr, j._result = M;
          }
        }
        if (h._status === ha) {
          var Z = h._result;
          return Z === void 0 && I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function ci(h) {
        var C = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, M = {
          $$typeof: xe,
          _payload: C,
          _init: si
        };
        {
          var j, Z;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Se) {
                I("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Se, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Se) {
                I("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Se, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === le ? I("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? I("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && I("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && I("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Be,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(j) {
              M = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ct || h === at || Ft || h === S || h === X || h === Fe || je || h === ot || un || Wt || Rt || typeof h == "object" && h !== null && (h.$$typeof === xe || h.$$typeof === le || h.$$typeof === _e || h.$$typeof === de || h.$$typeof === Be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        Y(h) || I("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: le,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return M;
      }
      function se() {
        var h = Ae.current;
        return h === null && I(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function pt(h) {
        var C = se();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? I("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && I("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Qe(h) {
        var C = se();
        return C.useState(h);
      }
      function ht(h, C, M) {
        var j = se();
        return j.useReducer(h, C, M);
      }
      function lt(h) {
        var C = se();
        return C.useRef(h);
      }
      function wn(h, C) {
        var M = se();
        return M.useEffect(h, C);
      }
      function ln(h, C) {
        var M = se();
        return M.useInsertionEffect(h, C);
      }
      function fn(h, C) {
        var M = se();
        return M.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var M = se();
        return M.useCallback(h, C);
      }
      function qa(h, C) {
        var M = se();
        return M.useMemo(h, C);
      }
      function jt(h, C, M) {
        var j = se();
        return j.useImperativeHandle(h, C, M);
      }
      function vn(h, C) {
        {
          var M = se();
          return M.useDebugValue(h, C);
        }
      }
      function Xe() {
        var h = se();
        return h.useTransition();
      }
      function fi(h) {
        var C = se();
        return C.useDeferredValue(h);
      }
      function zi() {
        var h = se();
        return h.useId();
      }
      function ic(h, C, M) {
        var j = se();
        return j.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, ul, Qr, Bo, Or, Io, lc, uc;
      function Ai() {
      }
      Ai.__reactDisabledLog = !0;
      function ol() {
        {
          if (Ui === 0) {
            ul = console.log, Qr = console.info, Bo = console.warn, Or = console.error, Io = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ai,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ui++;
        }
      }
      function Gr() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ne({}, h, {
                value: ul
              }),
              info: Ne({}, h, {
                value: Qr
              }),
              warn: Ne({}, h, {
                value: Bo
              }),
              error: Ne({}, h, {
                value: Or
              }),
              group: Ne({}, h, {
                value: Io
              }),
              groupCollapsed: Ne({}, h, {
                value: lc
              }),
              groupEnd: Ne({}, h, {
                value: uc
              })
            });
          }
          Ui < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = gt.ReactCurrentDispatcher, sl;
      function Fu(h, C, M) {
        {
          if (sl === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              sl = j && j[1] || "";
            }
          return `
` + sl + h;
        }
      }
      var ji = !1, Gl;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new ql();
      }
      function cl(h, C) {
        if (!h || ji)
          return "";
        {
          var M = Gl.get(h);
          if (M !== void 0)
            return M;
        }
        var j;
        ji = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Se;
        Se = di.current, di.current = null, ol();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (xn) {
                j = xn;
              }
              Reflect.construct(h, [], ve);
            } else {
              try {
                ve.call();
              } catch (xn) {
                j = xn;
              }
              h.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (xn) {
              j = xn;
            }
            h();
          }
        } catch (xn) {
          if (xn && j && typeof xn.stack == "string") {
            for (var Pe = xn.stack.split(`
`), ut = j.stack.split(`
`), Ht = Pe.length - 1, qt = ut.length - 1; Ht >= 1 && qt >= 0 && Pe[Ht] !== ut[qt]; )
              qt--;
            for (; Ht >= 1 && qt >= 0; Ht--, qt--)
              if (Pe[Ht] !== ut[qt]) {
                if (Ht !== 1 || qt !== 1)
                  do
                    if (Ht--, qt--, qt < 0 || Pe[Ht] !== ut[qt]) {
                      var Kt = `
` + Pe[Ht].replace(" at new ", " at ");
                      return h.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, Kt), Kt;
                    }
                  while (Ht >= 1 && qt >= 0);
                break;
              }
          }
        } finally {
          ji = !1, di.current = Se, Gr(), Error.prepareStackTrace = Z;
        }
        var et = h ? h.displayName || h.name : "", tn = et ? Fu(et) : "";
        return typeof h == "function" && Gl.set(h, tn), tn;
      }
      function Yo(h, C, M) {
        return cl(h, !1);
      }
      function $o(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function _t(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return cl(h, $o(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case X:
            return Fu("Suspense");
          case Fe:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Be:
              return Yo(h.render);
            case le:
              return _t(h.type, C, M);
            case xe: {
              var j = h, Z = j._payload, Se = j._init;
              try {
                return _t(Se(Z), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = gt.ReactDebugCurrentFrame;
      function kt(h) {
        if (h) {
          var C = h._owner, M = _t(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, M, j, Z) {
        {
          var Se = Function.call.bind(qn);
          for (var ve in h)
            if (Se(h, ve)) {
              var Pe = void 0;
              try {
                if (typeof h[ve] != "function") {
                  var ut = Error((j || "React class") + ": " + M + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                Pe = h[ve](C, ve, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Pe = Ht;
              }
              Pe && !(Pe instanceof Error) && (kt(Z), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, ve, typeof Pe), kt(null)), Pe instanceof Error && !(Pe.message in Wo) && (Wo[Pe.message] = !0, kt(Z), I("Failed %s type: %s", M, Pe.message), kt(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, M = _t(h.type, h._source, C ? C.type : null);
          st(M);
        } else
          st(null);
      }
      var Ye;
      Ye = !1;
      function Kl() {
        if (ee.current) {
          var h = Bn(ee.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Zn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function qr(h) {
        return h != null ? Zn(h.__source) : "";
      }
      var Nr = {};
      function vi(h) {
        var C = Kl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = vi(C);
          if (!Nr[M]) {
            Nr[M] = !0;
            var j = "";
            h && h._owner && h._owner !== ee.current && (j = " It was passed a child from " + Bn(h._owner.type) + "."), pi(h), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), pi(null);
          }
        }
      }
      function Gt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var M = 0; M < h.length; M++) {
              var j = h[M];
              sn(j) && Sn(j, C);
            }
          else if (sn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = it(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var Se = Z.call(h), ve; !(ve = Se.next()).done; )
                sn(ve.value) && Sn(ve.value, C);
          }
        }
      }
      function Ka(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            M = C.propTypes;
          else
            return;
          if (M) {
            var j = Bn(C);
            oc(M, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ye) {
            Ye = !0;
            var Z = Bn(C);
            I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var j = C[M];
            if (j !== "children" && j !== "key") {
              pi(h), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), I("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function Tr(h, C, M) {
        var j = Y(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = qr(C);
          Se ? Z += Se : Z += Kl();
          var ve;
          h === null ? ve = "null" : Ln(h) ? ve = "array" : h !== void 0 && h.$$typeof === Oe ? (ve = "<" + (Bn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof h, I("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, Z);
        }
        var Pe = nt.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (j)
          for (var ut = 2; ut < arguments.length; ut++)
            Gt(arguments[ut], h);
        return h === Ct ? Da(Pe) : Ka(Pe), Pe;
      }
      var Lr = !1;
      function qf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, ct("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ct("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var j = on.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Gt(arguments[Z], j.type);
        return Ka(j), j;
      }
      function Xl(h, C) {
        var M = Nt.transition;
        Nt.transition = {};
        var j = Nt.transition;
        Nt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Nt.transition = M, M === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && ct("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Zl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = q && q[C];
            Bu = M.call(q, "timers").setImmediate;
          } catch {
            Bu = function(Z) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && I("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = Z, Se.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, Na = !1;
      function fl(h) {
        {
          var C = Oa;
          Oa++, Te.current === null && (Te.current = []);
          var M = Te.isBatchingLegacy, j;
          try {
            if (Te.isBatchingLegacy = !0, j = h(), !M && Te.didScheduleLegacyUpdate) {
              var Z = Te.current;
              Z !== null && (Te.didScheduleLegacyUpdate = !1, Hi(Z));
            }
          } catch (et) {
            throw Fi(C), et;
          } finally {
            Te.isBatchingLegacy = M;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Se = j, ve = !1, Pe = {
              then: function(et, tn) {
                ve = !0, Se.then(function(xn) {
                  Fi(C), Oa === 0 ? Iu(xn, et, tn) : et(xn);
                }, function(xn) {
                  Fi(C), tn(xn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (Na = !0, I("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var ut = j;
            if (Fi(C), Oa === 0) {
              var Ht = Te.current;
              Ht !== null && (Hi(Ht), Te.current = null);
              var qt = {
                then: function(et, tn) {
                  Te.current === null ? (Te.current = [], Iu(ut, et, tn)) : et(ut);
                }
              };
              return qt;
            } else {
              var Kt = {
                then: function(et, tn) {
                  et(ut);
                }
              };
              return Kt;
            }
          }
        }
      }
      function Fi(h) {
        h !== Oa - 1 && I("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function Iu(h, C, M) {
        {
          var j = Te.current;
          if (j !== null)
            try {
              Hi(j), Zl(function() {
                j.length === 0 ? (Te.current = null, C(h)) : Iu(h, C, M);
              });
            } catch (Z) {
              M(Z);
            }
          else
            C(h);
        }
      }
      var dl = !1;
      function Hi(h) {
        if (!dl) {
          dl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            dl = !1;
          }
        }
      }
      var Yu = Tr, Qo = Pu, La = qf, $u = {
        map: Ni,
        forEach: Wl,
        count: $l,
        toArray: Li,
        only: Ql
      };
      te.Children = $u, te.Component = We, te.Fragment = Ct, te.Profiler = at, te.PureComponent = Bt, te.StrictMode = S, te.Suspense = X, te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gt, te.act = fl, te.cloneElement = Qo, te.createContext = oi, te.createElement = Yu, te.createFactory = La, te.createRef = Gn, te.forwardRef = Mi, te.isValidElement = sn, te.lazy = ci, te.memo = ie, te.startTransition = Xl, te.unstable_act = fl, te.useCallback = Rr, te.useContext = pt, te.useDebugValue = vn, te.useDeferredValue = fi, te.useEffect = wn, te.useId = zi, te.useImperativeHandle = jt, te.useInsertionEffect = ln, te.useLayoutEffect = fn, te.useMemo = qa, te.useReducer = ht, te.useRef = lt, te.useState = Qe, te.useSyncExternalStore = ic, te.useTransition = Xe, te.version = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var tk = {};
tk.NODE_ENV === "production" ? v0.exports = J_() : v0.exports = ek();
var ll = v0.exports;
const nk = /* @__PURE__ */ Z_(ll);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function rk() {
  if (JR) return Kp;
  JR = 1;
  var q = ll, te = Symbol.for("react.element"), k = Symbol.for("react.fragment"), rt = Object.prototype.hasOwnProperty, Oe = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Et = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ct(S, at, _e) {
    var de, Be = {}, X = null, Fe = null;
    _e !== void 0 && (X = "" + _e), at.key !== void 0 && (X = "" + at.key), at.ref !== void 0 && (Fe = at.ref);
    for (de in at) rt.call(at, de) && !Et.hasOwnProperty(de) && (Be[de] = at[de]);
    if (S && S.defaultProps) for (de in at = S.defaultProps, at) Be[de] === void 0 && (Be[de] = at[de]);
    return { $$typeof: te, type: S, key: X, ref: Fe, props: Be, _owner: Oe.current };
  }
  return Kp.Fragment = k, Kp.jsx = Ct, Kp.jsxs = Ct, Kp;
}
var Xp = {}, eT;
function ak() {
  if (eT) return Xp;
  eT = 1;
  var q = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return q.NODE_ENV !== "production" && function() {
    var te = ll, k = Symbol.for("react.element"), rt = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), Et = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), at = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), xe = Symbol.iterator, ot = "@@iterator";
    function Tn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = xe && R[xe] || R[ot];
      return typeof Y == "function" ? Y : null;
    }
    var en = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(R) {
      {
        for (var Y = arguments.length, ie = new Array(Y > 1 ? Y - 1 : 0), se = 1; se < Y; se++)
          ie[se - 1] = arguments[se];
        Ae("error", R, ie);
      }
    }
    function Ae(R, Y, ie) {
      {
        var se = en.ReactDebugCurrentFrame, pt = se.getStackAddendum();
        pt !== "" && (Y += "%s", ie = ie.concat([pt]));
        var Qe = ie.map(function(ht) {
          return String(ht);
        });
        Qe.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, Qe);
      }
    }
    var Nt = !1, Te = !1, ee = !1, pe = !1, Je = !1, st;
    st = Symbol.for("react.module.reference");
    function un(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Oe || R === Ct || Je || R === Et || R === de || R === Be || pe || R === le || Nt || Te || ee || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === X || R.$$typeof === S || R.$$typeof === at || R.$$typeof === _e || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === st || R.getModuleId !== void 0));
    }
    function Wt(R, Y, ie) {
      var se = R.displayName;
      if (se)
        return se;
      var pt = Y.displayName || Y.name || "";
      return pt !== "" ? ie + "(" + pt + ")" : ie;
    }
    function Rt(R) {
      return R.displayName || "Context";
    }
    function je(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Oe:
          return "Fragment";
        case rt:
          return "Portal";
        case Ct:
          return "Profiler";
        case Et:
          return "StrictMode";
        case de:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case at:
            var Y = R;
            return Rt(Y) + ".Consumer";
          case S:
            var ie = R;
            return Rt(ie._context) + ".Provider";
          case _e:
            return Wt(R, R.render, "ForwardRef");
          case X:
            var se = R.displayName || null;
            return se !== null ? se : je(R.type) || "Memo";
          case Fe: {
            var pt = R, Qe = pt._payload, ht = pt._init;
            try {
              return je(ht(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ft = Object.assign, gt = 0, ct, I, Ee, ae, _, B, Ne;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function We() {
      {
        if (gt === 0) {
          ct = console.log, I = console.info, Ee = console.warn, ae = console.error, _ = console.group, B = console.groupCollapsed, Ne = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        gt++;
      }
    }
    function ft() {
      {
        if (gt--, gt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ft({}, R, {
              value: ct
            }),
            info: Ft({}, R, {
              value: I
            }),
            warn: Ft({}, R, {
              value: Ee
            }),
            error: Ft({}, R, {
              value: ae
            }),
            group: Ft({}, R, {
              value: _
            }),
            groupCollapsed: Ft({}, R, {
              value: B
            }),
            groupEnd: Ft({}, R, {
              value: Ne
            })
          });
        }
        gt < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bt = en.ReactCurrentDispatcher, qe;
    function Tt(R, Y, ie) {
      {
        if (qe === void 0)
          try {
            throw Error();
          } catch (pt) {
            var se = pt.stack.trim().match(/\n( *(at )?)/);
            qe = se && se[1] || "";
          }
        return `
` + qe + R;
      }
    }
    var Bt = !1, Nn;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      Nn = new Gn();
    }
    function ar(R, Y) {
      if (!R || Bt)
        return "";
      {
        var ie = Nn.get(R);
        if (ie !== void 0)
          return ie;
      }
      var se;
      Bt = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      Qe = bt.current, bt.current = null, We();
      try {
        if (Y) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (vn) {
              se = vn;
            }
            Reflect.construct(R, [], ht);
          } else {
            try {
              ht.call();
            } catch (vn) {
              se = vn;
            }
            R.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vn) {
            se = vn;
          }
          R();
        }
      } catch (vn) {
        if (vn && se && typeof vn.stack == "string") {
          for (var lt = vn.stack.split(`
`), wn = se.stack.split(`
`), ln = lt.length - 1, fn = wn.length - 1; ln >= 1 && fn >= 0 && lt[ln] !== wn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (lt[ln] !== wn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || lt[ln] !== wn[fn]) {
                    var Rr = `
` + lt[ln].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && Nn.set(R, Rr), Rr;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Bt = !1, bt.current = Qe, ft(), Error.prepareStackTrace = pt;
      }
      var qa = R ? R.displayName || R.name : "", jt = qa ? Tt(qa) : "";
      return typeof R == "function" && Nn.set(R, jt), jt;
    }
    function Ln(R, Y, ie) {
      return ar(R, !1);
    }
    function Er(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Vn(R, Y, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ar(R, Er(R));
      if (typeof R == "string")
        return Tt(R);
      switch (R) {
        case de:
          return Tt("Suspense");
        case Be:
          return Tt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case _e:
            return Ln(R.render);
          case X:
            return Vn(R.type, Y, ie);
          case Fe: {
            var se = R, pt = se._payload, Qe = se._init;
            try {
              return Vn(Qe(pt), Y, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Mn = Object.prototype.hasOwnProperty, fa = {}, Qa = en.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var Y = R._owner, ie = Vn(R.type, R._source, Y ? Y.type : null);
        Qa.setExtraStackFrame(ie);
      } else
        Qa.setExtraStackFrame(null);
    }
    function Bn(R, Y, ie, se, pt) {
      {
        var Qe = Function.call.bind(Mn);
        for (var ht in R)
          if (Qe(R, ht)) {
            var lt = void 0;
            try {
              if (typeof R[ht] != "function") {
                var wn = Error((se || "React class") + ": " + ie + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              lt = R[ht](Y, ht, se, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              lt = ln;
            }
            lt && !(lt instanceof Error) && (Dr(pt), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", ie, ht, typeof lt), Dr(null)), lt instanceof Error && !(lt.message in fa) && (fa[lt.message] = !0, Dr(pt), it("Failed %s type: %s", ie, lt.message), Dr(null));
          }
      }
    }
    var qn = Array.isArray;
    function Kn(R) {
      return qn(R);
    }
    function Cr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ie = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function Ga(R) {
      try {
        return zn(R), !1;
      } catch {
        return !0;
      }
    }
    function zn(R) {
      return "" + R;
    }
    function ir(R) {
      if (Ga(R))
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), zn(R);
    }
    var $r = en.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, J;
    function Me(R) {
      if (Mn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function nt(R) {
      if (Mn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ut(R, Y) {
      typeof R.ref == "string" && $r.current;
    }
    function on(R, Y) {
      {
        var ie = function() {
          da || (da = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function sn(R, Y) {
      {
        var ie = function() {
          J || (J = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var cn = function(R, Y, ie, se, pt, Qe, ht) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ie,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: Qe
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function Xn(R, Y, ie, se, pt) {
      {
        var Qe, ht = {}, lt = null, wn = null;
        ie !== void 0 && (ir(ie), lt = "" + ie), nt(Y) && (ir(Y.key), lt = "" + Y.key), Me(Y) && (wn = Y.ref, Ut(Y, pt));
        for (Qe in Y)
          Mn.call(Y, Qe) && !Oi.hasOwnProperty(Qe) && (ht[Qe] = Y[Qe]);
        if (R && R.defaultProps) {
          var ln = R.defaultProps;
          for (Qe in ln)
            ht[Qe] === void 0 && (ht[Qe] = ln[Qe]);
        }
        if (lt || wn) {
          var fn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          lt && on(ht, fn), wn && sn(ht, fn);
        }
        return cn(R, lt, wn, pt, se, $r.current, ht);
      }
    }
    var an = en.ReactCurrentOwner, Qt = en.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Y = R._owner, ie = Vn(R.type, R._source, Y ? Y.type : null);
        Qt.setExtraStackFrame(ie);
      } else
        Qt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === k;
    }
    function ka() {
      {
        if (an.current) {
          var R = je(an.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ni(R) {
      return "";
    }
    var $l = {};
    function Wl(R) {
      {
        var Y = ka();
        if (!Y) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (Y = `

Check the top-level render call using <` + ie + ">.");
        }
        return Y;
      }
    }
    function Li(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = Wl(Y);
        if ($l[ie])
          return;
        $l[ie] = !0;
        var se = "";
        R && R._owner && R._owner !== an.current && (se = " It was passed a child from " + je(R._owner.type) + "."), At(R), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, se), At(null);
      }
    }
    function Ql(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Kn(R))
          for (var ie = 0; ie < R.length; ie++) {
            var se = R[ie];
            _a(se) && Li(se, Y);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var pt = Tn(R);
          if (typeof pt == "function" && pt !== R.entries)
            for (var Qe = pt.call(R), ht; !(ht = Qe.next()).done; )
              _a(ht.value) && Li(ht.value, Y);
        }
      }
    }
    function oi(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ie;
        if (typeof Y == "function")
          ie = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === _e || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === X))
          ie = Y.propTypes;
        else
          return;
        if (ie) {
          var se = je(Y);
          Bn(ie, R.props, "prop", se, R);
        } else if (Y.PropTypes !== void 0 && !pa) {
          pa = !0;
          var pt = je(Y);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(R) {
      {
        for (var Y = Object.keys(R.props), ie = 0; ie < Y.length; ie++) {
          var se = Y[ie];
          if (se !== "children" && se !== "key") {
            At(R), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), it("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var lr = {};
    function ha(R, Y, ie, se, pt, Qe) {
      {
        var ht = un(R);
        if (!ht) {
          var lt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Ni();
          wn ? lt += wn : lt += ka();
          var ln;
          R === null ? ln = "null" : Kn(R) ? ln = "array" : R !== void 0 && R.$$typeof === k ? (ln = "<" + (je(R.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof R, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, lt);
        }
        var fn = Xn(R, Y, ie, pt, Qe);
        if (fn == null)
          return fn;
        if (ht) {
          var Rr = Y.children;
          if (Rr !== void 0)
            if (se)
              if (Kn(Rr)) {
                for (var qa = 0; qa < Rr.length; qa++)
                  Ql(Rr[qa], R);
                Object.freeze && Object.freeze(Rr);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(Rr, R);
        }
        if (Mn.call(Y, "key")) {
          var jt = je(R), vn = Object.keys(Y).filter(function(zi) {
            return zi !== "key";
          }), Xe = vn.length > 0 ? "{key: someKey, " + vn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[jt + Xe]) {
            var fi = vn.length > 0 ? "{" + vn.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, jt, fi, jt), lr[jt + Xe] = !0;
          }
        }
        return R === Oe ? va(fn) : oi(fn), fn;
      }
    }
    function Wr(R, Y, ie) {
      return ha(R, Y, ie, !0);
    }
    function si(R, Y, ie) {
      return ha(R, Y, ie, !1);
    }
    var ci = si, Mi = Wr;
    Xp.Fragment = Oe, Xp.jsx = ci, Xp.jsxs = Mi;
  }(), Xp;
}
var ik = {};
ik.NODE_ENV === "production" ? p0.exports = rk() : p0.exports = ak();
var oe = p0.exports, ev = {}, h0 = { exports: {} }, $a = {}, Wm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function lk() {
  return tT || (tT = 1, function(q) {
    function te(I, Ee) {
      var ae = I.length;
      I.push(Ee);
      e: for (; 0 < ae; ) {
        var _ = ae - 1 >>> 1, B = I[_];
        if (0 < Oe(B, Ee)) I[_] = Ee, I[ae] = B, ae = _;
        else break e;
      }
    }
    function k(I) {
      return I.length === 0 ? null : I[0];
    }
    function rt(I) {
      if (I.length === 0) return null;
      var Ee = I[0], ae = I.pop();
      if (ae !== Ee) {
        I[0] = ae;
        e: for (var _ = 0, B = I.length, Ne = B >>> 1; _ < Ne; ) {
          var Ie = 2 * (_ + 1) - 1, We = I[Ie], ft = Ie + 1, bt = I[ft];
          if (0 > Oe(We, ae)) ft < B && 0 > Oe(bt, We) ? (I[_] = bt, I[ft] = ae, _ = ft) : (I[_] = We, I[Ie] = ae, _ = Ie);
          else if (ft < B && 0 > Oe(bt, ae)) I[_] = bt, I[ft] = ae, _ = ft;
          else break e;
        }
      }
      return Ee;
    }
    function Oe(I, Ee) {
      var ae = I.sortIndex - Ee.sortIndex;
      return ae !== 0 ? ae : I.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Et = performance;
      q.unstable_now = function() {
        return Et.now();
      };
    } else {
      var Ct = Date, S = Ct.now();
      q.unstable_now = function() {
        return Ct.now() - S;
      };
    }
    var at = [], _e = [], de = 1, Be = null, X = 3, Fe = !1, le = !1, xe = !1, ot = typeof setTimeout == "function" ? setTimeout : null, Tn = typeof clearTimeout == "function" ? clearTimeout : null, en = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function it(I) {
      for (var Ee = k(_e); Ee !== null; ) {
        if (Ee.callback === null) rt(_e);
        else if (Ee.startTime <= I) rt(_e), Ee.sortIndex = Ee.expirationTime, te(at, Ee);
        else break;
        Ee = k(_e);
      }
    }
    function Ae(I) {
      if (xe = !1, it(I), !le) if (k(at) !== null) le = !0, gt(Nt);
      else {
        var Ee = k(_e);
        Ee !== null && ct(Ae, Ee.startTime - I);
      }
    }
    function Nt(I, Ee) {
      le = !1, xe && (xe = !1, Tn(pe), pe = -1), Fe = !0;
      var ae = X;
      try {
        for (it(Ee), Be = k(at); Be !== null && (!(Be.expirationTime > Ee) || I && !un()); ) {
          var _ = Be.callback;
          if (typeof _ == "function") {
            Be.callback = null, X = Be.priorityLevel;
            var B = _(Be.expirationTime <= Ee);
            Ee = q.unstable_now(), typeof B == "function" ? Be.callback = B : Be === k(at) && rt(at), it(Ee);
          } else rt(at);
          Be = k(at);
        }
        if (Be !== null) var Ne = !0;
        else {
          var Ie = k(_e);
          Ie !== null && ct(Ae, Ie.startTime - Ee), Ne = !1;
        }
        return Ne;
      } finally {
        Be = null, X = ae, Fe = !1;
      }
    }
    var Te = !1, ee = null, pe = -1, Je = 5, st = -1;
    function un() {
      return !(q.unstable_now() - st < Je);
    }
    function Wt() {
      if (ee !== null) {
        var I = q.unstable_now();
        st = I;
        var Ee = !0;
        try {
          Ee = ee(!0, I);
        } finally {
          Ee ? Rt() : (Te = !1, ee = null);
        }
      } else Te = !1;
    }
    var Rt;
    if (typeof en == "function") Rt = function() {
      en(Wt);
    };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Ft = je.port2;
      je.port1.onmessage = Wt, Rt = function() {
        Ft.postMessage(null);
      };
    } else Rt = function() {
      ot(Wt, 0);
    };
    function gt(I) {
      ee = I, Te || (Te = !0, Rt());
    }
    function ct(I, Ee) {
      pe = ot(function() {
        I(q.unstable_now());
      }, Ee);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, q.unstable_continueExecution = function() {
      le || Fe || (le = !0, gt(Nt));
    }, q.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < I ? Math.floor(1e3 / I) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, q.unstable_getFirstCallbackNode = function() {
      return k(at);
    }, q.unstable_next = function(I) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = X;
      }
      var ae = X;
      X = Ee;
      try {
        return I();
      } finally {
        X = ae;
      }
    }, q.unstable_pauseExecution = function() {
    }, q.unstable_requestPaint = function() {
    }, q.unstable_runWithPriority = function(I, Ee) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var ae = X;
      X = I;
      try {
        return Ee();
      } finally {
        X = ae;
      }
    }, q.unstable_scheduleCallback = function(I, Ee, ae) {
      var _ = q.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? _ + ae : _) : ae = _, I) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ae + B, I = { id: de++, callback: Ee, priorityLevel: I, startTime: ae, expirationTime: B, sortIndex: -1 }, ae > _ ? (I.sortIndex = ae, te(_e, I), k(at) === null && I === k(_e) && (xe ? (Tn(pe), pe = -1) : xe = !0, ct(Ae, ae - _))) : (I.sortIndex = B, te(at, I), le || Fe || (le = !0, gt(Nt))), I;
    }, q.unstable_shouldYield = un, q.unstable_wrapCallback = function(I) {
      var Ee = X;
      return function() {
        var ae = X;
        X = Ee;
        try {
          return I.apply(this, arguments);
        } finally {
          X = ae;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {}, nT;
function uk() {
  return nT || (nT = 1, function(q) {
    var te = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    te.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = !1, rt = 5;
      function Oe(J, Me) {
        var nt = J.length;
        J.push(Me), S(J, Me, nt);
      }
      function Et(J) {
        return J.length === 0 ? null : J[0];
      }
      function Ct(J) {
        if (J.length === 0)
          return null;
        var Me = J[0], nt = J.pop();
        return nt !== Me && (J[0] = nt, at(J, nt, 0)), Me;
      }
      function S(J, Me, nt) {
        for (var Ut = nt; Ut > 0; ) {
          var on = Ut - 1 >>> 1, sn = J[on];
          if (_e(sn, Me) > 0)
            J[on] = Me, J[Ut] = sn, Ut = on;
          else
            return;
        }
      }
      function at(J, Me, nt) {
        for (var Ut = nt, on = J.length, sn = on >>> 1; Ut < sn; ) {
          var cn = (Ut + 1) * 2 - 1, Xn = J[cn], an = cn + 1, Qt = J[an];
          if (_e(Xn, Me) < 0)
            an < on && _e(Qt, Xn) < 0 ? (J[Ut] = Qt, J[an] = Me, Ut = an) : (J[Ut] = Xn, J[cn] = Me, Ut = cn);
          else if (an < on && _e(Qt, Me) < 0)
            J[Ut] = Qt, J[an] = Me, Ut = an;
          else
            return;
        }
      }
      function _e(J, Me) {
        var nt = J.sortIndex - Me.sortIndex;
        return nt !== 0 ? nt : J.id - Me.id;
      }
      var de = 1, Be = 2, X = 3, Fe = 4, le = 5;
      function xe(J, Me) {
      }
      var ot = typeof performance == "object" && typeof performance.now == "function";
      if (ot) {
        var Tn = performance;
        q.unstable_now = function() {
          return Tn.now();
        };
      } else {
        var en = Date, it = en.now();
        q.unstable_now = function() {
          return en.now() - it;
        };
      }
      var Ae = 1073741823, Nt = -1, Te = 250, ee = 5e3, pe = 1e4, Je = Ae, st = [], un = [], Wt = 1, Rt = null, je = X, Ft = !1, gt = !1, ct = !1, I = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(J) {
        for (var Me = Et(un); Me !== null; ) {
          if (Me.callback === null)
            Ct(un);
          else if (Me.startTime <= J)
            Ct(un), Me.sortIndex = Me.expirationTime, Oe(st, Me);
          else
            return;
          Me = Et(un);
        }
      }
      function B(J) {
        if (ct = !1, _(J), !gt)
          if (Et(st) !== null)
            gt = !0, zn(Ne);
          else {
            var Me = Et(un);
            Me !== null && ir(B, Me.startTime - J);
          }
      }
      function Ne(J, Me) {
        gt = !1, ct && (ct = !1, $r()), Ft = !0;
        var nt = je;
        try {
          var Ut;
          if (!k) return Ie(J, Me);
        } finally {
          Rt = null, je = nt, Ft = !1;
        }
      }
      function Ie(J, Me) {
        var nt = Me;
        for (_(nt), Rt = Et(st); Rt !== null && !(Rt.expirationTime > nt && (!J || Qa())); ) {
          var Ut = Rt.callback;
          if (typeof Ut == "function") {
            Rt.callback = null, je = Rt.priorityLevel;
            var on = Rt.expirationTime <= nt, sn = Ut(on);
            nt = q.unstable_now(), typeof sn == "function" ? Rt.callback = sn : Rt === Et(st) && Ct(st), _(nt);
          } else
            Ct(st);
          Rt = Et(st);
        }
        if (Rt !== null)
          return !0;
        var cn = Et(un);
        return cn !== null && ir(B, cn.startTime - nt), !1;
      }
      function We(J, Me) {
        switch (J) {
          case de:
          case Be:
          case X:
          case Fe:
          case le:
            break;
          default:
            J = X;
        }
        var nt = je;
        je = J;
        try {
          return Me();
        } finally {
          je = nt;
        }
      }
      function ft(J) {
        var Me;
        switch (je) {
          case de:
          case Be:
          case X:
            Me = X;
            break;
          default:
            Me = je;
            break;
        }
        var nt = je;
        je = Me;
        try {
          return J();
        } finally {
          je = nt;
        }
      }
      function bt(J) {
        var Me = je;
        return function() {
          var nt = je;
          je = Me;
          try {
            return J.apply(this, arguments);
          } finally {
            je = nt;
          }
        };
      }
      function qe(J, Me, nt) {
        var Ut = q.unstable_now(), on;
        if (typeof nt == "object" && nt !== null) {
          var sn = nt.delay;
          typeof sn == "number" && sn > 0 ? on = Ut + sn : on = Ut;
        } else
          on = Ut;
        var cn;
        switch (J) {
          case de:
            cn = Nt;
            break;
          case Be:
            cn = Te;
            break;
          case le:
            cn = Je;
            break;
          case Fe:
            cn = pe;
            break;
          case X:
          default:
            cn = ee;
            break;
        }
        var Xn = on + cn, an = {
          id: Wt++,
          callback: Me,
          priorityLevel: J,
          startTime: on,
          expirationTime: Xn,
          sortIndex: -1
        };
        return on > Ut ? (an.sortIndex = on, Oe(un, an), Et(st) === null && an === Et(un) && (ct ? $r() : ct = !0, ir(B, on - Ut))) : (an.sortIndex = Xn, Oe(st, an), !gt && !Ft && (gt = !0, zn(Ne))), an;
      }
      function Tt() {
      }
      function Bt() {
        !gt && !Ft && (gt = !0, zn(Ne));
      }
      function Nn() {
        return Et(st);
      }
      function Gn(J) {
        J.callback = null;
      }
      function ar() {
        return je;
      }
      var Ln = !1, Er = null, Vn = -1, Mn = rt, fa = -1;
      function Qa() {
        var J = q.unstable_now() - fa;
        return !(J < Mn);
      }
      function Dr() {
      }
      function Bn(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Mn = Math.floor(1e3 / J) : Mn = rt;
      }
      var qn = function() {
        if (Er !== null) {
          var J = q.unstable_now();
          fa = J;
          var Me = !0, nt = !0;
          try {
            nt = Er(Me, J);
          } finally {
            nt ? Kn() : (Ln = !1, Er = null);
          }
        } else
          Ln = !1;
      }, Kn;
      if (typeof ae == "function")
        Kn = function() {
          ae(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = qn, Kn = function() {
          Ga.postMessage(null);
        };
      } else
        Kn = function() {
          I(qn, 0);
        };
      function zn(J) {
        Er = J, Ln || (Ln = !0, Kn());
      }
      function ir(J, Me) {
        Vn = I(function() {
          J(q.unstable_now());
        }, Me);
      }
      function $r() {
        Ee(Vn), Vn = -1;
      }
      var Oi = Dr, da = null;
      q.unstable_IdlePriority = le, q.unstable_ImmediatePriority = de, q.unstable_LowPriority = Fe, q.unstable_NormalPriority = X, q.unstable_Profiling = da, q.unstable_UserBlockingPriority = Be, q.unstable_cancelCallback = Gn, q.unstable_continueExecution = Bt, q.unstable_forceFrameRate = Bn, q.unstable_getCurrentPriorityLevel = ar, q.unstable_getFirstCallbackNode = Nn, q.unstable_next = ft, q.unstable_pauseExecution = Tt, q.unstable_requestPaint = Oi, q.unstable_runWithPriority = We, q.unstable_scheduleCallback = qe, q.unstable_shouldYield = Qa, q.unstable_wrapCallback = bt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rT;
function oT() {
  if (rT) return Wm.exports;
  rT = 1;
  var q = {};
  return q.NODE_ENV === "production" ? Wm.exports = lk() : Wm.exports = uk(), Wm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function ok() {
  if (aT) return $a;
  aT = 1;
  var q = ll, te = oT();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var rt = /* @__PURE__ */ new Set(), Oe = {};
  function Et(n, r) {
    Ct(n, r), Ct(n + "Capture", r);
  }
  function Ct(n, r) {
    for (Oe[n] = r, n = 0; n < r.length; n++) rt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), at = Object.prototype.hasOwnProperty, _e = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, de = {}, Be = {};
  function X(n) {
    return at.call(Be, n) ? !0 : at.call(de, n) ? !1 : _e.test(n) ? Be[n] = !0 : (de[n] = !0, !1);
  }
  function Fe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function le(n, r, l, o) {
    if (r === null || typeof r > "u" || Fe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function xe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ot[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ot[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ot[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ot[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ot[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ot[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ot[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ot[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ot[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Tn = /[\-:]([a-z])/g;
  function en(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Tn,
      en
    );
    ot[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Tn, en);
    ot[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Tn, en);
    ot[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ot[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ot.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ot[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function it(n, r, l, o) {
    var c = ot.hasOwnProperty(r) ? ot[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (le(r, l, c, o) && (l = null), o || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ae = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nt = Symbol.for("react.element"), Te = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), st = Symbol.for("react.provider"), un = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), Rt = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), ct = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, _;
  function B(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Ne = !1;
  function Ie(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function We(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function ft(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ee:
        return "Fragment";
      case Te:
        return "Portal";
      case Je:
        return "Profiler";
      case pe:
        return "StrictMode";
      case Rt:
        return "Suspense";
      case je:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case st:
        return (n._context.displayName || "Context") + ".Provider";
      case Wt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ft:
        return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
      case gt:
        r = n._payload, n = n._init;
        try {
          return ft(n(r));
        } catch {
        }
    }
    return null;
  }
  function bt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ft(r);
      case 8:
        return r === pe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function qe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = Tt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function Gn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Tt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ar(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ln(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && it(n, "checked", r, !1);
  }
  function Mn(n, r) {
    Vn(n, r);
    var l = qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Qa(n, r.type, qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Qa(n, r, l) {
    (r !== "number" || ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Bn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + qe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: qe(l) };
  }
  function Cr(n, r) {
    var l = qe(r.value), o = qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function zn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ir(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? zn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, Oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    Me.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function nt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Ut(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = nt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var on = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function sn(n, r) {
    if (r) {
      if (on[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
    }
  }
  function cn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xn = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Qt = null, At = null, pa = null;
  function _a(n) {
    if (n = ss(n)) {
      if (typeof Qt != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = Yi(r), Qt(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    At ? pa ? pa.push(n) : pa = [n] : At = n;
  }
  function Ni() {
    if (At) {
      var n = At, r = pa;
      if (pa = At = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
    }
  }
  function $l(n, r) {
    return n(r);
  }
  function Wl() {
  }
  var Li = !1;
  function Ql(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return $l(n, r, l);
    } finally {
      Li = !1, (At !== null || pa !== null) && (Wl(), Ni());
    }
  }
  function oi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Yi(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var va = !1;
  if (S) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      va = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    va = !1;
  }
  function ha(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var Wr = !1, si = null, ci = !1, Mi = null, R = { onError: function(n) {
    Wr = !0, si = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    Wr = !1, si = null, ha.apply(R, arguments);
  }
  function ie(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), Wr) {
      if (Wr) {
        var U = si;
        Wr = !1, si = null;
      } else throw Error(k(198));
      ci || (ci = !0, Mi = U);
    }
  }
  function se(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Qe(n) {
    if (se(n) !== n) throw Error(k(188));
  }
  function ht(n) {
    var r = n.alternate;
    if (!r) {
      if (r = se(n), r === null) throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Qe(c), n;
          if (d === o) return Qe(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(k(189));
        }
      }
      if (l.alternate !== o) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function lt(n) {
    return n = ht(n), n !== null ? wn(n) : null;
  }
  function wn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = wn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var ln = te.unstable_scheduleCallback, fn = te.unstable_cancelCallback, Rr = te.unstable_shouldYield, qa = te.unstable_requestPaint, jt = te.unstable_now, vn = te.unstable_getCurrentPriorityLevel, Xe = te.unstable_ImmediatePriority, fi = te.unstable_UserBlockingPriority, zi = te.unstable_NormalPriority, ic = te.unstable_LowPriority, Ui = te.unstable_IdlePriority, ul = null, Qr = null;
  function Bo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Io = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / lc | 0) | 0;
  }
  var Ai = 64, ol = 4194304;
  function Gr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Gr(E) : (d &= m, d !== 0 && (o = Gr(d)));
    } else m = l & ~c, m !== 0 ? o = Gr(m) : d !== 0 && (o = Gr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Or(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Or(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function ql(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Yo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function $o(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function Wo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, kt, oc, pi, Ye, Kl = !1, Zn = [], qr = null, Nr = null, vi = null, Sn = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Ka = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        Sn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gt.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && kt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qr = Lr(qr, n, r, l, o, c), !0;
      case "dragenter":
        return Nr = Lr(Nr, n, r, l, o, c), !0;
      case "mouseover":
        return vi = Lr(vi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Sn.set(d, Lr(Sn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Gt.set(d, Lr(Gt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = se(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, Ye(n.priority, function() {
              oc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xn = o, l.target.dispatchEvent(o), Xn = null;
      } else return r = ss(l), r !== null && kt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    Kl = !1, qr !== null && Xl(qr) && (qr = null), Nr !== null && Xl(Nr) && (Nr = null), vi !== null && Xl(vi) && (vi = null), Sn.forEach(Vu), Gt.forEach(Vu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Kl || (Kl = !0, te.unstable_scheduleCallback(te.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Zl(c, n);
    }
    if (0 < Zn.length) {
      Zl(Zn[0], n);
      for (var l = 1; l < Zn.length; l++) {
        var o = Zn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qr !== null && Zl(qr, n), Nr !== null && Zl(Nr, n), vi !== null && Zl(vi, n), Sn.forEach(r), Gt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Ka.shift();
  }
  var Na = Ae.ReactCurrentBatchConfig, fl = !0;
  function Fi(n, r, l, o) {
    var c = _t, d = Na.transition;
    Na.transition = null;
    try {
      _t = 1, dl(n, r, l, o);
    } finally {
      _t = c, Na.transition = d;
    }
  }
  function Iu(n, r, l, o) {
    var c = _t, d = Na.transition;
    Na.transition = null;
    try {
      _t = 4, dl(n, r, l, o);
    } finally {
      _t = c, Na.transition = d;
    }
  }
  function dl(n, r, l, o) {
    if (fl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Hi, l), Tr(n, o);
      else if (qf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Yu(n, r, l, o) {
    if (Hi = null, n = an(o), n = iu(n), n !== null) if (r = se(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = pt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
  }
  function Qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (vn()) {
          case Xe:
            return 1;
          case fi:
            return 4;
          case zi:
          case ic:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, $u = null, h = null;
  function C() {
    if (h) return h;
    var n, r = $u, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function j() {
    return !0;
  }
  function Z() {
    return !1;
  }
  function Se(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : Z, this.isPropagationStopped = Z, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pe = Se(ve), ut = ae({}, ve, { view: 0, detail: 0 }), Ht = Se(ut), qt, Kt, et, tn = ae({}, ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== et && (et && n.type === "mousemove" ? (qt = n.screenX - et.screenX, Kt = n.screenY - et.screenY) : Kt = qt = 0, et = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), xn = Se(tn), Jl = ae({}, tn, { dataTransfer: 0 }), Go = Se(Jl), Pi = ae({}, ut, { relatedTarget: 0 }), eu = Se(Pi), qo = ae({}, ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Se(qo), sc = ae({}, ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = Se(sc), tv = ae({}, ve, { data: 0 }), cc = Se(tv), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Xa() {
    return Gm;
  }
  var qm = ae({}, ut, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = Se(qm), Jf = ae({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = Se(Jf), Km = ae({}, ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), dc = Se(Km), iv = ae({}, ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = Se(iv), Vi = ae({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Un = Se(Vi), Bi = [9, 13, 27, 32], Ko = S && "CompositionEvent" in window, pl = null;
  S && "documentMode" in document && (pl = document.documentMode);
  var Xm = S && "TextEvent" in window && !pl, Wu = S && (!Ko || pl && 8 < pl && 11 >= pl), lv = " ", uv = !1;
  function pc(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Zm(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (uv = !0, lv);
      case "textInput":
        return n = r.data, n === lv && uv ? null : n;
      default:
        return null;
    }
  }
  function sv(n, r) {
    if (Qu) return n === "compositionend" || !Ko && pc(n, r) ? (n = C(), h = $u = La = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Wu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    ka(o), r = ls(r, "onChange"), 0 < r.length && (l = new Pe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, hi = null;
  function ed(n) {
    yc(n, 0);
  }
  function Xo(n) {
    var r = ke(n);
    if (Gn(r)) return n;
  }
  function dv(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), nd = typeof vv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    pv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    Gu && (Gu.detachEvent("onpropertychange", mv), hi = Gu = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Xo(hi)) {
      var r = [];
      fv(r, hi, n, an(n)), Ql(ed, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (hv(), Gu = r, hi = l, Gu.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Xo(hi);
  }
  function yv(n, r) {
    if (n === "click") return Xo(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return Xo(r);
  }
  function gv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : gv;
  function Zo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!at.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ev(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vl() {
    for (var n = window, r = ar(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ar(n.document);
    }
    return r;
  }
  function qu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = vl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && qu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Ev(l, d);
          var m = Ev(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ku = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, rd = null, Jo = null, ad = !1;
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Xu == null || Xu !== ar(o) || (o = Xu, "selectionStart" in o && qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = ls(rd, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
  }
  function es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zu = { animationend: es("Animation", "AnimationEnd"), animationiteration: es("Animation", "AnimationIteration"), animationstart: es("Animation", "AnimationStart"), transitionend: es("Transition", "TransitionEnd") }, hc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Zu.animationend.animation, delete Zu.animationiteration.animation, delete Zu.animationstart.animation), "TransitionEvent" in window || delete Zu.transitionend.transition);
  function ts(n) {
    if (hc[n]) return hc[n];
    if (!Zu[n]) return n;
    var r = Zu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return hc[n] = r[l];
    return n;
  }
  var Tv = ts("animationend"), wv = ts("animationiteration"), xv = ts("animationstart"), bv = ts("transitionend"), _v = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mi(n, r) {
    _v.set(n, r), Et(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], ns = ld.toLowerCase(), ry = ld[0].toUpperCase() + ld.slice(1);
    mi(ns, "on" + ry);
  }
  mi(Tv, "onAnimationEnd"), mi(wv, "onAnimationIteration"), mi(xv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(bv, "onTransitionEnd"), Ct("onMouseEnter", ["mouseout", "mouseover"]), Ct("onMouseLeave", ["mouseout", "mouseover"]), Ct("onPointerEnter", ["pointerout", "pointerover"]), Ct("onPointerLeave", ["pointerout", "pointerover"]), Et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ie(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (ci) throw n = Mi, ci = !1, Mi = null, n;
  }
  function Pt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function hl(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, rt.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || hl(l, !1, n), hl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, hl("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Qo(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Iu;
        break;
      default:
        c = dl;
    }
    l = c.bind(null, r, l, n), c = void 0, !va || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function od(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = iu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Ql(function() {
      var U = d, W = an(l), Q = [];
      e: {
        var $ = _v.get(n);
        if ($ !== void 0) {
          var he = Pe, Ce = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = Zf;
              break;
            case "focusin":
              Ce = "focus", he = eu;
              break;
            case "focusout":
              Ce = "blur", he = eu;
              break;
            case "beforeblur":
            case "afterblur":
              he = eu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = xn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = dc;
              break;
            case Tv:
            case wv:
            case xv:
              he = Kf;
              break;
            case bv:
              he = Kr;
              break;
            case "scroll":
              he = Ht;
              break;
            case "wheel":
              he = Un;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = fc;
          }
          var we = (r & 4) !== 0, Dn = !we && n === "scroll", D = we ? $ !== null ? $ + "Capture" : null : $;
          we = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = oi(x, D), K != null && we.push(Ju(x, K, L)))), Dn) break;
            x = x.return;
          }
          0 < we.length && ($ = new he($, Ce, null, l, W), Q.push({ event: $, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", $ && l !== Xn && (Ce = l.relatedTarget || l.fromElement) && (iu(Ce) || Ce[Ii])) break e;
          if ((he || $) && ($ = W.window === W ? W : ($ = W.ownerDocument) ? $.defaultView || $.parentWindow : window, he ? (Ce = l.relatedTarget || l.toElement, he = U, Ce = Ce ? iu(Ce) : null, Ce !== null && (Dn = se(Ce), Ce !== Dn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (he = null, Ce = U), he !== Ce)) {
            if (we = xn, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (we = fc, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = he == null ? $ : ke(he), L = Ce == null ? $ : ke(Ce), $ = new we(K, x + "leave", he, l, W), $.target = Dn, $.relatedTarget = L, K = null, iu(W) === U && (we = new we(D, x + "enter", Ce, l, W), we.target = L, we.relatedTarget = Dn, K = we), Dn = K, he && Ce) t: {
              for (we = he, D = Ce, x = 0, L = we; L; L = nu(L)) x++;
              for (L = 0, K = D; K; K = nu(K)) L++;
              for (; 0 < x - L; ) we = nu(we), x--;
              for (; 0 < L - x; ) D = nu(D), L--;
              for (; x--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = nu(we), D = nu(D);
              }
              we = null;
            }
            else we = null;
            he !== null && gc(Q, $, he, we, !1), Ce !== null && Dn !== null && gc(Q, Dn, Ce, we, !0);
          }
        }
        e: {
          if ($ = U ? ke(U) : window, he = $.nodeName && $.nodeName.toLowerCase(), he === "select" || he === "input" && $.type === "file") var ce = dv;
          else if (cv($)) if (pv) ce = ny;
          else {
            ce = ty;
            var Le = ey;
          }
          else (he = $.nodeName) && he.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ce = yv);
          if (ce && (ce = ce(n, U))) {
            fv(Q, ce, l, W);
            break e;
          }
          Le && Le(n, $, U), n === "focusout" && (Le = $._wrapperState) && Le.controlled && $.type === "number" && Qa($, "number", $.value);
        }
        switch (Le = U ? ke(U) : window, n) {
          case "focusin":
            (cv(Le) || Le.contentEditable === "true") && (Xu = Le, rd = U, Jo = null);
            break;
          case "focusout":
            Jo = rd = Xu = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Rv(Q, l, W);
            break;
          case "selectionchange":
            if (Ku) break;
          case "keydown":
          case "keyup":
            Rv(Q, l, W);
        }
        var Ue;
        if (Ko) e: {
          switch (n) {
            case "compositionstart":
              var $e = "onCompositionStart";
              break e;
            case "compositionend":
              $e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $e = "onCompositionUpdate";
              break e;
          }
          $e = void 0;
        }
        else Qu ? pc(n, l) && ($e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Wu && l.locale !== "ko" && (Qu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Qu && (Ue = C()) : (La = W, $u = "value" in La ? La.value : La.textContent, Qu = !0)), Le = ls(U, $e), 0 < Le.length && ($e = new cc($e, n, null, l, W), Q.push({ event: $e, listeners: Le }), Ue ? $e.data = Ue : (Ue = ov(l), Ue !== null && ($e.data = Ue)))), (Ue = Xm ? Zm(n, l) : sv(n, l)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (W = new cc("onBeforeInput", "beforeinput", null, l, W), Q.push({ event: W, listeners: U }), W.data = Ue));
      }
      yc(Q, r);
    });
  }
  function Ju(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = oi(n, l), d != null && o.unshift(Ju(n, d, c)), d = oi(n, r), d != null && o.push(Ju(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = oi(l, d), T != null && m.unshift(Ju(l, T, E))) : c || (T = oi(l, d), T != null && m.push(Ju(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var iy = /\r\n?/g, kv = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(iy, `
`).replace(kv, "");
  }
  function Sc(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(k(425));
  }
  function Ec() {
  }
  var ru = null, us = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
    return Rc.resolve(null).then(n).catch(eo);
  } : Cc;
  function eo(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function to(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Oa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Oa(r);
  }
  function Ja(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Tc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, os = "__reactProps$" + no, Ii = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ii] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Tc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Tc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[Ma] || n[Ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ke(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function Yi(n) {
    return n[os] || null;
  }
  var En = [], mt = -1;
  function Xr(n) {
    return { current: n };
  }
  function It(n) {
    0 > mt || (n.current = En[mt], En[mt] = null, mt--);
  }
  function nn(n, r) {
    mt++, En[mt] = n.current, n.current = r;
  }
  var dt = {}, hn = Xr(dt), An = Xr(!1), za = dt;
  function ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return dt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yi() {
    It(An), It(hn);
  }
  function wc(n, r, l) {
    if (hn.current !== dt) throw Error(k(168));
    nn(hn, r), nn(An, l);
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(k(108, bt(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || dt, za = hn.current, nn(hn, n), nn(An, An.current), !0;
  }
  function xr(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(k(169));
    l ? (n = Nv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, It(An), It(hn), nn(hn, n)) : It(An), nn(An, l);
  }
  var ei = null, cs = !1, fs = !1;
  function ml(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  function fd(n) {
    cs = !0, ml(n);
  }
  function Mr() {
    if (!fs && ei !== null) {
      fs = !0;
      var n = 0, r = _t;
      try {
        var l = ei;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, cs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), ln(Xe, Mr), c;
      } finally {
        _t = r, fs = !1;
      }
    }
    return null;
  }
  var yl = [], gl = 0, ao = null, Sl = 0, ur = [], jn = 0, uu = null, zr = 1, gi = "";
  function El(n, r) {
    yl[gl++] = Sl, yl[gl++] = ao, ao = n, Sl = r;
  }
  function Lv(n, r, l) {
    ur[jn++] = zr, ur[jn++] = gi, ur[jn++] = uu, uu = n;
    var o = zr;
    n = gi;
    var c = 32 - Or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, zr = 1 << 32 - Or(r) + c | l << c | o, gi = d + n;
    } else zr = 1 << d | l << c | o, gi = n;
  }
  function dd(n) {
    n.return !== null && (El(n, 1), Lv(n, 1, 0));
  }
  function xc(n) {
    for (; n === ao; ) ao = yl[--gl], yl[gl] = null, Sl = yl[--gl], yl[gl] = null;
    for (; n === uu; ) uu = ur[--jn], ur[jn] = null, gi = ur[--jn], ur[jn] = null, zr = ur[--jn], ur[jn] = null;
  }
  var Zr = null, Jr = null, dn = !1, ti = null;
  function pd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, Jr = Ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: zr, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(k(418));
          r = Ja(l.nextSibling);
          var o = Zr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Zr = n);
        }
      } else {
        if (hd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Zr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function bn(n) {
    if (n !== Zr) return !1;
    if (!dn) return Mv(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (hd(n)) throw zv(), Error(k(418));
      for (; r; ) pd(n, r), r = Ja(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = Ja(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = Zr ? Ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = Jr; n; ) n = Ja(n.nextSibling);
  }
  function $i() {
    Jr = Zr = null, dn = !1;
  }
  function ds(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var ou = Ae.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Nl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = xu(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, K) {
      var ce = L.type;
      return ce === ee ? W(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === gt && Uv(ce) === x.type) ? (K = c(x, L.props), K.ref = ps(D, x, L), K.return = D, K) : (K = ff(L.type, L.key, L.props, null, D.mode, K), K.ref = ps(D, x, L), K.return = D, K);
    }
    function U(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Qd(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function W(D, x, L, K, ce) {
      return x === null || x.tag !== 7 ? (x = Ll(L, D.mode, K, ce), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = xu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Nt:
            return L = ff(x.type, x.key, x.props, null, D.mode, L), L.ref = ps(D, null, x), L.return = D, L;
          case Te:
            return x = Qd(x, D.mode, L), x.return = D, x;
          case gt:
            var K = x._init;
            return Q(D, K(x._payload), L);
        }
        if (Dr(x) || Ee(x)) return x = Ll(x, D.mode, L, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function $(D, x, L, K) {
      var ce = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ce !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Nt:
            return L.key === ce ? T(D, x, L, K) : null;
          case Te:
            return L.key === ce ? U(D, x, L, K) : null;
          case gt:
            return ce = L._init, $(
              D,
              x,
              ce(L._payload),
              K
            );
        }
        if (Dr(L) || Ee(L)) return ce !== null ? null : W(D, x, L, K, null);
        io(D, L);
      }
      return null;
    }
    function he(D, x, L, K, ce) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return D = D.get(L) || null, E(x, D, "" + K, ce);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Nt:
            return D = D.get(K.key === null ? L : K.key) || null, T(x, D, K, ce);
          case Te:
            return D = D.get(K.key === null ? L : K.key) || null, U(x, D, K, ce);
          case gt:
            var Le = K._init;
            return he(D, x, L, Le(K._payload), ce);
        }
        if (Dr(K) || Ee(K)) return D = D.get(L) || null, W(x, D, K, ce, null);
        io(x, K);
      }
      return null;
    }
    function Ce(D, x, L, K) {
      for (var ce = null, Le = null, Ue = x, $e = x = 0, Wn = null; Ue !== null && $e < L.length; $e++) {
        Ue.index > $e ? (Wn = Ue, Ue = null) : Wn = Ue.sibling;
        var Lt = $(D, Ue, L[$e], K);
        if (Lt === null) {
          Ue === null && (Ue = Wn);
          break;
        }
        n && Ue && Lt.alternate === null && r(D, Ue), x = d(Lt, x, $e), Le === null ? ce = Lt : Le.sibling = Lt, Le = Lt, Ue = Wn;
      }
      if ($e === L.length) return l(D, Ue), dn && El(D, $e), ce;
      if (Ue === null) {
        for (; $e < L.length; $e++) Ue = Q(D, L[$e], K), Ue !== null && (x = d(Ue, x, $e), Le === null ? ce = Ue : Le.sibling = Ue, Le = Ue);
        return dn && El(D, $e), ce;
      }
      for (Ue = o(D, Ue); $e < L.length; $e++) Wn = he(Ue, D, $e, L[$e], K), Wn !== null && (n && Wn.alternate !== null && Ue.delete(Wn.key === null ? $e : Wn.key), x = d(Wn, x, $e), Le === null ? ce = Wn : Le.sibling = Wn, Le = Wn);
      return n && Ue.forEach(function(zl) {
        return r(D, zl);
      }), dn && El(D, $e), ce;
    }
    function we(D, x, L, K) {
      var ce = Ee(L);
      if (typeof ce != "function") throw Error(k(150));
      if (L = ce.call(L), L == null) throw Error(k(151));
      for (var Le = ce = null, Ue = x, $e = x = 0, Wn = null, Lt = L.next(); Ue !== null && !Lt.done; $e++, Lt = L.next()) {
        Ue.index > $e ? (Wn = Ue, Ue = null) : Wn = Ue.sibling;
        var zl = $(D, Ue, Lt.value, K);
        if (zl === null) {
          Ue === null && (Ue = Wn);
          break;
        }
        n && Ue && zl.alternate === null && r(D, Ue), x = d(zl, x, $e), Le === null ? ce = zl : Le.sibling = zl, Le = zl, Ue = Wn;
      }
      if (Lt.done) return l(
        D,
        Ue
      ), dn && El(D, $e), ce;
      if (Ue === null) {
        for (; !Lt.done; $e++, Lt = L.next()) Lt = Q(D, Lt.value, K), Lt !== null && (x = d(Lt, x, $e), Le === null ? ce = Lt : Le.sibling = Lt, Le = Lt);
        return dn && El(D, $e), ce;
      }
      for (Ue = o(D, Ue); !Lt.done; $e++, Lt = L.next()) Lt = he(Ue, D, $e, Lt.value, K), Lt !== null && (n && Lt.alternate !== null && Ue.delete(Lt.key === null ? $e : Lt.key), x = d(Lt, x, $e), Le === null ? ce = Lt : Le.sibling = Lt, Le = Lt);
      return n && Ue.forEach(function(Ey) {
        return r(D, Ey);
      }), dn && El(D, $e), ce;
    }
    function Dn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === ee && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Nt:
            e: {
              for (var ce = L.key, Le = x; Le !== null; ) {
                if (Le.key === ce) {
                  if (ce = L.type, ce === ee) {
                    if (Le.tag === 7) {
                      l(D, Le.sibling), x = c(Le, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Le.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === gt && Uv(ce) === Le.type) {
                    l(D, Le.sibling), x = c(Le, L.props), x.ref = ps(D, Le, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Le);
                  break;
                } else r(D, Le);
                Le = Le.sibling;
              }
              L.type === ee ? (x = Ll(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = ff(L.type, L.key, L.props, null, D.mode, K), K.ref = ps(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case Te:
            e: {
              for (Le = L.key; x !== null; ) {
                if (x.key === Le) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Qd(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case gt:
            return Le = L._init, Dn(D, x, Le(L._payload), K);
        }
        if (Dr(L)) return Ce(D, x, L, K);
        if (Ee(L)) return we(D, x, L, K);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = xu(L, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var ni = Av(!0), or = Av(!1), re = Xr(null), ya = null, br = null, yd = null;
  function gd() {
    yd = br = ya = null;
  }
  function Sd(n) {
    var r = re.current;
    It(re), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ya = n, yd = br = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function Yt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, br === null) {
      if (ya === null) throw Error(k(308));
      br = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else br = br.next = n;
    return r;
  }
  var su = null;
  function Cd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function jv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Si(n, o);
  }
  function Si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ua = !1;
  function Cl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, yt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Si(n, l);
  }
  function bc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $o(n, l);
    }
  }
  function Hv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _c(n, r, l, o) {
    var c = n.updateQueue;
    Ua = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = U : E.next = U, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var $ = E.lane, he = E.eventTime;
        if ((o & $) === $) {
          W !== null && (W = W.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ce = n, we = E;
            switch ($ = r, he = l, we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  Q = Ce.call(he, Q, $);
                  break e;
                }
                Q = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, $ = typeof Ce == "function" ? Ce.call(he, Q, $) : Ce, $ == null) break e;
                Q = ae({}, Q, $);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else he = { eventTime: he, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = he, T = Q) : W = W.next = he, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = Q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(k(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ei = Xr(uo), vs = Xr(uo), hs = Xr(uo);
  function cu(n) {
    if (n === uo) throw Error(k(174));
    return n;
  }
  function Td(n, r) {
    switch (nn(hs, r), nn(vs, n), nn(Ei, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ir(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ir(r, n);
    }
    It(Ei), nn(Ei, r);
  }
  function oo() {
    It(Ei), It(vs), It(hs);
  }
  function wd(n) {
    cu(hs.current);
    var r = cu(Ei.current), l = ir(r, n.type);
    r !== l && (nn(vs, n), nn(Ei, l));
  }
  function xd(n) {
    vs.current === n && (It(Ei), It(vs));
  }
  var mn = Xr(0);
  function kc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var bd = [];
  function ms() {
    for (var n = 0; n < bd.length; n++) bd[n]._workInProgressVersionPrimary = null;
    bd.length = 0;
  }
  var De = Ae.ReactCurrentDispatcher, vt = Ae.ReactCurrentBatchConfig, wt = 0, Ze = null, Xt = null, In = null, Dc = !1, ys = !1, gs = 0, _d = 0;
  function P() {
    throw Error(k(321));
  }
  function Fn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function He(n, r, l, o, c, d) {
    if (wt = d, Ze = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, De.current = n === null || n.memoizedState === null ? Yc : $c, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(k(301));
        d += 1, In = Xt = null, r.updateQueue = null, De.current = Ts, n = l(o, c);
      } while (ys);
    }
    if (De.current = $t, r = Xt !== null && Xt.next !== null, wt = 0, In = Xt = Ze = null, Dc = !1, r) throw Error(k(300));
    return n;
  }
  function Tl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function Jn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return In === null ? Ze.memoizedState = In = n : In = In.next = n, In;
  }
  function er() {
    if (Xt === null) {
      var n = Ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Xt.next;
    var r = In === null ? Ze.memoizedState : In.next;
    if (r !== null) In = r, Xt = n;
    else {
      if (n === null) throw Error(k(310));
      Xt = n, n = { memoizedState: Xt.memoizedState, baseState: Xt.baseState, baseQueue: Xt.baseQueue, queue: Xt.queue, next: null }, In === null ? Ze.memoizedState = In = n : In = In.next = n;
    }
    return In;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = Xt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var W = U.lane;
        if ((wt & W) === W) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var Q = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, Ze.lanes |= W, Su |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ze.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function Oc(n, r) {
    var l = Ze, o = er(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Ss(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || In !== null && In.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Hn === null) throw Error(k(349));
      wt & 30 || Nc(l, r, c);
    }
    return c;
  }
  function Nc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ze.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && Uc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Si(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Ac(n) {
    var r = Jn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rs.bind(null, Ze, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ze.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return er().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Jn();
    Ze.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Xt !== null) {
      var m = Xt.memoizedState;
      if (d = m.destroy, o !== null && Fn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    Ze.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return fo(2048, 8, n, r);
  }
  function Hc(n, r) {
    return fo(4, 2, n, r);
  }
  function Pc(n, r) {
    return fo(4, 4, n, r);
  }
  function Es(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Es.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Vc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ic(n, r, l) {
    return wt & 21 ? (Za(l, r) || (l = Gl(), Ze.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Pv(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = vt.transition;
    vt.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, vt.transition = o;
    }
  }
  function po() {
    return er().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, xl(n)) ta(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = rn();
      Ca(l, n, o, c), Bv(l, r, o);
    }
  }
  function Rs(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (xl(n)) ta(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = jv(n, r, c, o), l !== null && (c = rn(), Ca(l, n, o, c), Bv(l, r, o));
    }
  }
  function xl(n) {
    var r = n.alternate;
    return n === Ze || r !== null && r === Ze;
  }
  function ta(n, r) {
    ys = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Bv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $o(n, l);
    }
  }
  var $t = { readContext: Yt, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Yc = { readContext: Yt, useCallback: function(n, r) {
    return Jn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Yt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Es.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Jn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Jn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vv.bind(null, Ze, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Jn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Cs, useDeferredValue: function(n) {
    return Jn().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Pv.bind(null, n[1]), Jn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ze, c = Jn();
    if (dn) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Hn === null) throw Error(k(349));
      wt & 30 || Nc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Jn(), r = Hn.identifierPrefix;
    if (dn) {
      var l = gi, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: Yt,
    useCallback: Vc,
    useContext: Yt,
    useEffect: Ss,
    useImperativeHandle: pu,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: fu,
    useRef: jc,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = er();
      return Ic(r, Xt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, Ts = { readContext: Yt, useCallback: Vc, useContext: Yt, useEffect: Ss, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: wl, useRef: jc, useState: function() {
    return wl(ea);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = er();
    return Xt === null ? r.memoizedState = n : Ic(r, Xt.memoizedState, n);
  }, useTransition: function() {
    var n = wl(ea)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? se(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = rn(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = rn(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = rn(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Rl(n, c, o), r !== null && (Ca(r, n, o, l), bc(r, n, o));
  } };
  function Iv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Yv(n, r, l) {
    var o = !1, c = dt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Yt(d) : (c = Cn(r) ? za : hn.current, o = r.contextTypes, d = (o = o != null) ? ma(n, c) : dt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Wc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Yt(d) : (d = Cn(r) ? za : hn.current, c.context = ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Wc.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bl(n, r) {
    try {
      var l = "", o = r;
      do
        l += We(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Gc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      kl || (kl = !0, Ls = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Wv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Rl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Ae.ReactCurrentOwner, tr = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? or(r, null, l, o) : ni(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = He(n, r, l, o, d, c), l = Tl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (dn && l && dd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function ra(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return sr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, sr(n, r, c);
    }
    return Kc(n, r, l, o, c);
  }
  function tt(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, nn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, nn(yo, Sa), Sa |= o;
    return _n(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, o, c) {
    var d = Cn(l) ? za : hn.current;
    return d = ma(r, d), lo(r, c), l = He(n, r, l, o, d, c), o = Tl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (dn && o && dd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (Cn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Aa(n, r), Yv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Yt(U) : (U = Cn(l) ? za : hn.current, U = ma(r, U));
      var W = l.getDerivedStateFromProps, Q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Qc(r, m, o, U), Ua = !1;
      var $ = r.memoizedState;
      m.state = $, _c(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || An.current || Ua ? (typeof W == "function" && (kd(r, l, W, o), T = r.memoizedState), (E = Ua || Iv(r, l, E, o, $, T, U)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : na(r.type, E), m.props = U, Q = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Yt(T) : (T = Cn(l) ? za : hn.current, T = ma(r, T));
      var he = l.getDerivedStateFromProps;
      (W = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || $ !== T) && Qc(r, m, o, T), Ua = !1, $ = r.memoizedState, m.state = $, _c(r, o, m, c);
      var Ce = r.memoizedState;
      E !== Q || $ !== Ce || An.current || Ua ? (typeof he == "function" && (kd(r, l, he, o), Ce = r.memoizedState), (U = Ua || Iv(r, l, U, o, $, Ce, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xr(r, l, !1), sr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ni(r, n.child, null, d), r.child = ni(r, null, E, d)) : _n(n, r, E, d), r.memoizedState = o.state, c && xr(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? wc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return $i(), ds(c), r.flags |= 256, _n(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nn(mn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ll(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Zc(l), r.memoizedState = zd, n) : bs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Gv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ll(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Zc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ds(o), ni(r, n.child, null, l), n = bs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Gv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Gc(Error(k(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ll(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(k(419)), o = Gc(d, o, void 0), Jc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, tr || E) {
      if (o = Hn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Si(n, c), Ca(o, n, c, -1));
      }
      return Bd(), o = Gc(Error(k(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = Ja(c.nextSibling), Zr = r, dn = !0, ti = null, n !== null && (ur[jn++] = zr, ur[jn++] = gi, ur[jn++] = uu, zr = n.id, gi = n.overflow, uu = r), r = bs(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function ef(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_n(n, r, o.children, l), o = mn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (nn(mn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && kc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && kc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Aa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function sr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), $i();
        break;
      case 5:
        wd(r);
        break;
      case 1:
        Cn(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        nn(re, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (nn(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qv(n, r, l) : (nn(mn, mn.current & 1), n = sr(n, r, l), n !== null ? n.sibling : null);
        nn(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return aa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), nn(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, tt(n, r, l);
    }
    return sr(n, r, l);
  }
  var ho, ga, Yn, qv;
  ho = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ga = function() {
  }, Yn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), o = Ln(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qn(n, c), o = qn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      sn(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Oe.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Oe.hasOwnProperty(U) ? (T != null && U === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (xc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _r(r), null;
      case 1:
        return Cn(r.type) && yi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), It(An), It(hn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (As(ti), ti = null))), ga(n, r), _r(r), null;
      case 5:
        xd(r);
        var c = cu(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) Yn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(k(166));
            return _r(r), null;
          }
          if (n = cu(Ei.current), bn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Er(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Kn(o, d), Pt("invalid", o);
            }
            sn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Oe.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                Nn(o), fa(o, d, !0);
                break;
              case "textarea":
                Nn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = zn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[os] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = cn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Er(n, o), c = Ln(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Kn(n, o), c = qn(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              sn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Ut(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Oe.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && it(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Nn(n), fa(n, o, !1);
                  break;
                case "textarea":
                  Nn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Bn(n, !!o.multiple, d, !1) : o.defaultValue != null && Bn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(k(166));
          if (l = cu(hs.current), cu(Ei.current), bn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return _r(r), null;
      case 13:
        if (It(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Jr !== null && r.mode & 1 && !(r.flags & 128)) zv(), $i(), r.flags |= 98560, d = !1;
          else if (d = bn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[Ma] = r;
            } else $i(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ti !== null && (As(ti), ti = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? $n === 0 && ($n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ga(n, r), n === null && is(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return Cn(r.type) && yi(), _r(r), null;
      case 19:
        if (It(mn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return nn(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && jt() > So && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return _r(r), null;
          } else 2 * jt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = jt(), r.sibling = null, l = mn.current, nn(mn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function Kv(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return Cn(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), It(An), It(hn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (It(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          $i();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return It(mn), null;
      case 4:
        return oo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, cr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function _l(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Rn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
    }
  }
  var Fd = !1;
  function cy(n, r) {
    if (ru = fl, n = vl(), qu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, W = 0, Q = n, $ = null;
          t: for (; ; ) {
            for (var he; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (he = Q.firstChild) !== null; )
              $ = Q, Q = he;
            for (; ; ) {
              if (Q === n) break t;
              if ($ === l && ++U === c && (E = m), $ === d && ++W === o && (T = m), (he = Q.nextSibling) !== null) break;
              Q = $, $ = Q.parentNode;
            }
            Q = he;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, fl = !1, ge = r; ge !== null; ) if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ge = n;
    else for (; ge !== null; ) {
      r = ge;
      try {
        var Ce = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ce !== null) {
              var we = Ce.memoizedProps, Dn = Ce.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : na(r.type, we), Dn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (K) {
        Rn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ge = n;
        break;
      }
      ge = r.return;
    }
    return Ce = Fd, Fd = !1, Ce;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function nf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function rf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Xv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[os], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ks(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  var yn = null, Ur = !1;
  function ja(n, r, l) {
    for (l = l.child; l !== null; ) Qi(n, r, l), l = l.sibling;
  }
  function Qi(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ul, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        cr || _l(l, r);
      case 6:
        var o = yn, c = Ur;
        yn = null, ja(n, r, l), yn = o, Ur = c, yn !== null && (Ur ? (n = yn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : yn.removeChild(l.stateNode));
        break;
      case 18:
        yn !== null && (Ur ? (n = yn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(yn, l.stateNode));
        break;
      case 4:
        o = yn, c = Ur, yn = l.stateNode.containerInfo, Ur = !0, ja(n, r, l), yn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!cr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        ja(n, r, l);
        break;
      case 1:
        if (!cr && (_l(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Rn(l, r, E);
        }
        ja(n, r, l);
        break;
      case 21:
        ja(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (cr = (o = cr) || l.memoizedState !== null, ja(n, r, l), cr = o) : ja(n, r, l);
        break;
      default:
        ja(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new sy()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              yn = E.stateNode, Ur = !1;
              break e;
            case 3:
              yn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              yn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (yn === null) throw Error(k(160));
        Qi(d, m, c), yn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        Rn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jv(r, n), r = r.sibling;
  }
  function Jv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), ai(n), o & 4) {
          try {
            mo(3, n, n.return), nf(3, n);
          } catch (we) {
            Rn(n, n.return, we);
          }
          try {
            mo(5, n, n.return);
          } catch (we) {
            Rn(n, n.return, we);
          }
        }
        break;
      case 1:
        ri(r, n), ai(n), o & 512 && l !== null && _l(l, l.return);
        break;
      case 5:
        if (ri(r, n), ai(n), o & 512 && l !== null && _l(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (we) {
            Rn(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), cn(E, m);
            var U = cn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], Q = T[m + 1];
              W === "style" ? Ut(c, Q) : W === "dangerouslySetInnerHTML" ? Oi(c, Q) : W === "children" ? da(c, Q) : it(c, W, Q, U);
            }
            switch (E) {
              case "input":
                Mn(c, d);
                break;
              case "textarea":
                Cr(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? Bn(c, !!d.multiple, he, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Bn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Bn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (we) {
            Rn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            Rn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (we) {
          Rn(n, n.return, we);
        }
        break;
      case 4:
        ri(r, n), ai(n);
        break;
      case 13:
        ri(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = jt())), o & 4 && Zv(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (cr = (U = cr) || W, ri(r, n), cr = U) : ri(r, n), ai(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (ge = n, W = n.child; W !== null; ) {
            for (Q = ge = W; ge !== null; ) {
              switch ($ = ge, he = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, $, $.return);
                  break;
                case 1:
                  _l($, $.return);
                  var Ce = $.stateNode;
                  if (typeof Ce.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                    } catch (we) {
                      Rn(o, l, we);
                    }
                  }
                  break;
                case 5:
                  _l($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    th(Q);
                    continue;
                  }
              }
              he !== null ? (he.return = $, ge = he) : th(Q);
            }
            W = W.sibling;
          }
          e: for (W = null, Q = n; ; ) {
            if (Q.tag === 5) {
              if (W === null) {
                W = Q;
                try {
                  c = Q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = nt("display", m));
                } catch (we) {
                  Rn(n, n.return, we);
                }
              }
            } else if (Q.tag === 6) {
              if (W === null) try {
                Q.stateNode.nodeValue = U ? "" : Q.memoizedProps;
              } catch (we) {
                Rn(n, n.return, we);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === n) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === n) break e;
              W === Q && (W = null), Q = Q.return;
            }
            W === Q && (W = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        ri(r, n), ai(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (af(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = ks(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = ks(n);
            Ci(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (T) {
        Rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    ge = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || cr;
          E = mu;
          var U = cr;
          if (mu = m, (cr = T) && !U) for (ge = c; ge !== null; ) m = ge, T = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : T !== null ? (T.return = m, ge = T) : Os(c);
          for (; d !== null; ) ge = d, eh(d), d = d.sibling;
          ge = c, mu = E, cr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ge = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              cr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !cr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var W = U.memoizedState;
                  if (W !== null) {
                    var Q = W.dehydrated;
                    Q !== null && Oa(Q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
          cr || r.flags & 512 && rf(r);
        } catch ($) {
          Rn(r, r.return, $);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function th(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Os(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (T) {
              Rn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Rn(r, c, T);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (T) {
              Rn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (T) {
              Rn(r, m, T);
            }
        }
      } catch (T) {
        Rn(r, r.return, T);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ge = E;
        break;
      }
      ge = r.return;
    }
  }
  var nh = Math.ceil, lf = Ae.ReactCurrentDispatcher, yu = Ae.ReactCurrentOwner, kr = Ae.ReactCurrentBatchConfig, yt = 0, Hn = null, kn = null, fr = 0, Sa = 0, yo = Xr(0), $n = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, ia = null, Pd = 0, So = 1 / 0, Gi = null, kl = !1, Ls = null, Fa = null, uf = !1, Dl = null, Ms = 0, Eo = 0, Co = null, Cu = -1, zs = 0;
  function rn() {
    return yt & 6 ? jt() : Cu !== -1 ? Cu : Cu = jt();
  }
  function Ea(n) {
    return n.mode & 1 ? yt & 2 && fr !== 0 ? fr & -fr : ou.transition !== null ? (zs === 0 && (zs = Gl()), zs) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Qo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(k(185));
    cl(n, l, o), (!(yt & 2) || n !== Hn) && (n === Hn && (!(yt & 2) && (Eu |= l), $n === 4 && Ol(n, fr)), nr(n, o), l === 1 && yt === 0 && !(r.mode & 1) && (So = jt() + 500, cs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = di(n, n === Hn ? fr : 0);
    if (o === 0) l !== null && fn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && fn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : ml(Fs.bind(null, n)), ly(function() {
        !(yt & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = Xe;
            break;
          case 4:
            l = fi;
            break;
          case 16:
            l = zi;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = zi;
        }
        l = oh(l, rh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function rh(n, r) {
    if (Cu = -1, zs = 0, yt & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = di(n, n === Hn ? fr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = yt;
      yt |= 2;
      var d = ah();
      (Hn !== n || fr !== r) && (Gi = null, So = jt() + 500, Tu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      gd(), lf.current = d, yt = c, kn !== null ? r = 0 : (Hn = null, fr = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = ji(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = gu, Tu(n, 0), Ol(n, o), nr(n, jt()), l;
      if (r === 6) Ol(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = cf(n, o), r === 2 && (d = ji(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ol(n, o), nr(n, jt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            wu(n, ia, Gi);
            break;
          case 3:
            if (Ol(n, o), (o & 130023424) === o && (r = Pd + 500 - jt(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                rn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(wu.bind(null, n, ia, Gi), r);
              break;
            }
            wu(n, ia, Gi);
            break;
          case 4:
            if (Ol(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = jt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(wu.bind(null, n, ia, Gi), o);
              break;
            }
            wu(n, ia, Gi);
            break;
          case 5:
            wu(n, ia, Gi);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return nr(n, jt()), n.callbackNode === l ? rh.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ia, ia = l, r !== null && As(r)), n;
  }
  function As(n) {
    ia === null ? ia = n : ia.push.apply(ia, n);
  }
  function js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ol(n, r) {
    for (r &= ~Ns, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (yt & 6) throw Error(k(327));
    Ro();
    var r = di(n, 0);
    if (!(r & 1)) return nr(n, jt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ji(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ol(n, r), nr(n, jt()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, ia, Gi), nr(n, jt()), null;
  }
  function of(n, r) {
    var l = yt;
    yt |= 1;
    try {
      return n(r);
    } finally {
      yt = l, yt === 0 && (So = jt() + 500, cs && Mr());
    }
  }
  function Ru(n) {
    Dl !== null && Dl.tag === 0 && !(yt & 6) && Ro();
    var r = yt;
    yt |= 1;
    var l = kr.transition, o = _t;
    try {
      if (kr.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, kr.transition = l, yt = r, !(yt & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, It(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ov(l)), kn !== null) for (l = kn.return; l !== null; ) {
      var o = l;
      switch (xc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yi();
          break;
        case 3:
          oo(), It(An), It(hn), ms();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          It(mn);
          break;
        case 19:
          It(mn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Hn = n, kn = n = Nl(n.current, null), fr = Sa = r, $n = 0, gu = null, Ns = Eu = Su = 0, ia = go = null, su !== null) {
      for (r = 0; r < su.length; r++) if (l = su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      su = null;
    }
    return n;
  }
  function sf(n, r) {
    do {
      var l = kn;
      try {
        if (gd(), De.current = $t, Dc) {
          for (var o = Ze.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (wt = 0, In = Xt = Ze = null, ys = !1, gs = 0, yu.current = null, l === null || l.return === null) {
          $n = 1, gu = r, kn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = fr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, Q = W.tag;
            if (!(W.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var $ = W.alternate;
              $ ? (W.updateQueue = $.updateQueue, W.memoizedState = $.memoizedState, W.lanes = $.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var he = Ld(m);
            if (he !== null) {
              he.flags &= -257, Wv(he, m, E, d, r), he.mode & 1 && Nd(d, U, r), r = he, T = U;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(T), r.updateQueue = we;
              } else Ce.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Bd();
                break e;
              }
              T = Error(k(426));
            }
          } else if (dn && E.mode & 1) {
            var Dn = Ld(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Wv(Dn, m, E, d, r), ds(bl(T, E));
              break e;
            }
          }
          d = T = bl(T, E), $n !== 4 && ($n = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, T, r);
                Hv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fa === null || !Fa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = $v(d, E, r);
                  Hv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (ce) {
        r = ce, kn === l && l !== null && (kn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ah() {
    var n = lf.current;
    return lf.current = $t, n === null ? $t : n;
  }
  function Bd() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Hn === null || !(Su & 268435455) && !(Eu & 268435455) || Ol(Hn, fr);
  }
  function cf(n, r) {
    var l = yt;
    yt |= 2;
    var o = ah();
    (Hn !== n || fr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (gd(), yt = l, lf.current = o, kn !== null) throw Error(k(261));
    return Hn = null, fr = 0, $n;
  }
  function fy() {
    for (; kn !== null; ) Id(kn);
  }
  function dy() {
    for (; kn !== null && !Rr(); ) Id(kn);
  }
  function Id(n) {
    var r = $d(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : kn = r, yu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Kv(l, r), l !== null) {
          l.flags &= 32767, kn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, kn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        kn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        kn = r;
        return;
      }
      kn = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function wu(n, r, l) {
    var o = _t, c = kr.transition;
    try {
      kr.transition = null, _t = 1, py(n, r, l, o);
    } finally {
      kr.transition = c, _t = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Ro();
    while (Dl !== null);
    if (yt & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Yo(n, d), n === Hn && (kn = Hn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(zi, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = _t;
      _t = 1;
      var E = yt;
      yt |= 4, yu.current = null, cy(n, l), Jv(l, n), Cv(us), fl = !!ru, us = ru = null, n.current = l, Ds(l), qa(), yt = E, _t = m, kr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Dl = n, Ms = c), d = n.pendingLanes, d === 0 && (Fa = null), Bo(l.stateNode), nr(n, jt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ls, Ls = null, n;
    return Ms & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Dl !== null) {
      var n = Wo(Ms), r = kr.transition, l = _t;
      try {
        if (kr.transition = null, _t = 16 > n ? 16 : n, Dl === null) var o = !1;
        else {
          if (n = Dl, Dl = null, Ms = 0, yt & 6) throw Error(k(331));
          var c = yt;
          for (yt |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if (ge.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ge = U; ge !== null; ) {
                    var W = ge;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, W, d);
                    }
                    var Q = W.child;
                    if (Q !== null) Q.return = W, ge = Q;
                    else for (; ge !== null; ) {
                      W = ge;
                      var $ = W.sibling, he = W.return;
                      if (Xv(W), W === U) {
                        ge = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = he, ge = $;
                        break;
                      }
                      ge = he;
                    }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var we = Ce.child;
                  if (we !== null) {
                    Ce.child = null;
                    do {
                      var Dn = we.sibling;
                      we.sibling = null, we = Dn;
                    } while (we !== null);
                  }
                }
                ge = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ge = m;
            else e: for (; ge !== null; ) {
              if (d = ge, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ge = D;
                break e;
              }
              ge = d.return;
            }
          }
          var x = n.current;
          for (ge = x; ge !== null; ) {
            m = ge;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ge = L;
            else e: for (m = x; ge !== null; ) {
              if (E = ge, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (ce) {
                Rn(E, E.return, ce);
              }
              if (E === m) {
                ge = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, ge = K;
                break e;
              }
              ge = E.return;
            }
          }
          if (yt = c, Mr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ul, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, kr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = bl(l, r), r = ws(n, r, 1), n = Rl(n, r, 1), r = rn(), n !== null && (cl(n, 1, r), nr(n, r));
  }
  function Rn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fa === null || !Fa.has(o))) {
          n = bl(l, n), n = $v(r, n, 1), r = Rl(r, n, 1), n = rn(), r !== null && (cl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = rn(), n.pingedLanes |= n.suspendedLanes & l, Hn === n && (fr & l) === l && ($n === 4 || $n === 3 && (fr & 130023424) === fr && 500 > jt() - Pd ? Tu(n, 0) : Ns |= l), nr(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = rn();
    n = Si(n, r), n !== null && (cl(n, r, l), nr(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var $d;
  $d = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || An.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, tf(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, dn && r.flags & 1048576 && Lv(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = ma(r, hn.current);
        lo(r, l), c = He(null, r, o, n, c, l);
        var d = Tl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Cn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cl(r), c.updater = Wc, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && dd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = na(o, n), c) {
            case 0:
              r = Kc(null, r, o, n, l);
              break e;
            case 1:
              r = oy(null, r, o, n, l);
              break e;
            case 11:
              r = qc(null, r, o, n, l);
              break e;
            case 14:
              r = ra(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Kc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bl(Error(k(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bl(Error(k(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Jr = Ja(r.stateNode.containerInfo.firstChild), Zr = r, dn = !0, ti = null, l = or(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if ($i(), o === c) {
              r = sr(n, r, l);
              break e;
            }
            _n(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return wd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), _n(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ni(r, null, o, l) : _n(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), qc(n, r, o, c, l);
      case 7:
        return _n(n, r, r.pendingProps, l), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, nn(re, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !An.current) {
              r = sr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Wi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var W = U.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(k(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          _n(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Yt(c), o = o(c), r.flags |= 1, _n(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), ra(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Aa(n, r), r.tag = 1, Cn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Yv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return aa(n, r, l);
      case 22:
        return tt(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function oh(n, r) {
    return ln(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Wt) return 11;
      if (n === Ft) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ee:
        return Ll(l.children, c, d, r);
      case pe:
        m = 8, c |= 8;
        break;
      case Je:
        return n = Ha(12, l, r, c | 2), n.elementType = Je, n.lanes = d, n;
      case Rt:
        return n = Ha(13, l, r, c), n.elementType = Rt, n.lanes = d, n;
      case je:
        return n = Ha(19, l, r, c), n.elementType = je, n.lanes = d, n;
      case ct:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case st:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case Wt:
            m = 11;
            break e;
          case Ft:
            m = 14;
            break e;
          case gt:
            m = 16, o = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ll(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = ct, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function xu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Qd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return dt;
    n = n._reactInternals;
    e: {
      if (se(n) !== n || n.tag !== 1) throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Cn(l)) return Nv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = fh(null), l = n.current, o = rn(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Rl(l, d, c), n.current.lanes = c, cl(n, c, o), nr(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = rn(), m = Ea(c);
    return l = fh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Rl(c, r, m), n !== null && (Ca(n, c, m, d), bc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function dh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    dh(n, r), (n = n.alternate) && dh(n, r);
  }
  function ph() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ml(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Ml.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(k(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Ml.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        pf(null, n, null, null);
      }), r[Ii] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ka.length && r !== 0 && r < Ka[l].priority; l++) ;
      Ka.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = vf(m);
          d.call(U);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Ii] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = vf(T);
        E.call(U);
      };
    }
    var T = df(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = T, n[Ii] = T.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      pf(r, T, l, o);
    }), T;
  }
  function gf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = vf(m);
          E.call(T);
        };
      }
      pf(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return vf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gr(r.pendingLanes);
          l !== 0 && ($o(r, l | 1), nr(r, jt()), !(yt & 6) && (So = jt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Si(n, 1);
          if (o !== null) {
            var c = rn();
            Ca(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, kt = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var l = rn();
        Ca(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Si(n, r);
      if (l !== null) {
        var o = rn();
        Ca(l, n, r, o);
      }
      hf(n, r);
    }
  }, pi = function() {
    return _t;
  }, Ye = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, Qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Mn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Yi(o);
              if (!c) throw Error(k(90));
              Gn(o), Mn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Cr(n, l);
        break;
      case "select":
        r = l.value, r != null && Bn(n, !!l.multiple, r, !1);
    }
  }, $l = of, Wl = Ru;
  var hh = { usingClientEntryPoint: !1, Events: [ss, ke, Yi, ka, Ni, of] }, Hs = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = lt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber) try {
      ul = Ps.inject(Sy), Qr = Ps;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(k(200));
    return ch(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(k(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Ii] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Ml(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = lt(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Ru(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return gf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return gf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(k(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = of, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return gf(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Wa = {}, iT;
function sk() {
  if (iT) return Wa;
  iT = 1;
  var q = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return q.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var te = ll, k = oT(), rt = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = !1;
    function Et(e) {
      Oe = e;
    }
    function Ct(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        at("warn", e, a);
      }
    }
    function S(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        at("error", e, a);
      }
    }
    function at(e, t, a) {
      {
        var i = rt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var _e = 0, de = 1, Be = 2, X = 3, Fe = 4, le = 5, xe = 6, ot = 7, Tn = 8, en = 9, it = 10, Ae = 11, Nt = 12, Te = 13, ee = 14, pe = 15, Je = 16, st = 17, un = 18, Wt = 19, Rt = 21, je = 22, Ft = 23, gt = 24, ct = 25, I = !0, Ee = !1, ae = !1, _ = !1, B = !1, Ne = !0, Ie = !0, We = !0, ft = !0, bt = /* @__PURE__ */ new Set(), qe = {}, Tt = {};
    function Bt(e, t) {
      Nn(e, t), Nn(e + "Capture", t);
    }
    function Nn(e, t) {
      qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), qe[e] = t;
      {
        var a = e.toLowerCase();
        Tt[a] = e, e === "onDoubleClick" && (Tt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        bt.add(t[i]);
    }
    var Gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function Ln(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Er(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Mn(e, t) {
      if (Er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function fa(e) {
      if (Er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    function Qa(e, t) {
      if (Er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function Dr(e, t) {
      if (Er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function Bn(e) {
      if (Er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    function qn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    var Kn = 0, Cr = 1, Ga = 2, zn = 3, ir = 4, $r = 5, Oi = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + da + "][" + J + "]*$"), nt = {}, Ut = {};
    function on(e) {
      return ar.call(Ut, e) ? !0 : ar.call(nt, e) ? !1 : Me.test(e) ? (Ut[e] = !0, !0) : (nt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function sn(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, a, i) {
      if (a !== null && a.type === Kn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case zn:
            return !t;
          case ir:
            return t === !1;
          case $r:
            return isNaN(t);
          case Oi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return At.hasOwnProperty(e) ? At[e] : null;
    }
    function Qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === zn || t === ir, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var At = {}, pa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    pa.forEach(function(e) {
      At[e] = new Qt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      At[t] = new Qt(
        t,
        Cr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      At[e] = new Qt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      At[e] = new Qt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      At[e] = new Qt(
        e,
        zn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Qt(
        e,
        zn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Qt(
        e,
        ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Qt(
        e,
        Oi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      At[e] = new Qt(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, ka = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ka);
      At[t] = new Qt(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ka);
      At[t] = new Qt(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ka);
      At[t] = new Qt(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      At[e] = new Qt(
        e,
        Cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ni = "xlinkHref";
    At[Ni] = new Qt(
      "xlinkHref",
      Cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      At[e] = new Qt(
        e,
        Cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var $l = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Wl = !1;
    function Li(e) {
      !Wl && $l.test(e) && (Wl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Mn(a, t), i.sanitizeURL && Li("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ir) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === zn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!on(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Mn(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = an(t);
      if (!sn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (on(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Mn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === zn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === zn || b === ir && a === !0 ? w = "" : (Mn(a, y), w = "" + a, u.sanitizeURL && Li(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), pt = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), ht = Symbol.for("react.scope"), lt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), fn = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, jt = "@@iterator";
    function vn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[jt];
      return typeof t == "function" ? t : null;
    }
    var Xe = Object.assign, fi = 0, zi, ic, Ui, ul, Qr, Bo, Or;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function lc() {
      {
        if (fi === 0) {
          zi = console.log, ic = console.info, Ui = console.warn, ul = console.error, Qr = console.group, Bo = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Io,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function uc() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, e, {
              value: zi
            }),
            info: Xe({}, e, {
              value: ic
            }),
            warn: Xe({}, e, {
              value: Ui
            }),
            error: Xe({}, e, {
              value: ul
            }),
            group: Xe({}, e, {
              value: Qr
            }),
            groupCollapsed: Xe({}, e, {
              value: Bo
            }),
            groupEnd: Xe({}, e, {
              value: Or
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = rt.ReactCurrentDispatcher, ol;
    function Gr(e, t, a) {
      {
        if (ol === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ol = i && i[1] || "";
          }
        return `
` + ol + e;
      }
    }
    var di = !1, sl;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      sl = new Fu();
    }
    function ji(e, t) {
      if (!e || di)
        return "";
      {
        var a = sl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      di = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && sl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        di = !1, Ai.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", z = w ? Gr(w) : "";
      return typeof e == "function" && sl.set(e, z), z;
    }
    function Gl(e, t, a) {
      return ji(e, !0);
    }
    function ql(e, t, a) {
      return ji(e, !1);
    }
    function cl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ji(e, cl(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case ie:
          return Gr("Suspense");
        case se:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return ql(e.render);
          case pt:
            return Yo(e.type, t, a);
          case Qe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $o(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Gr(e.type);
        case Je:
          return Gr("Lazy");
        case Te:
          return Gr("Suspense");
        case Wt:
          return Gr("SuspenseList");
        case _e:
        case Be:
        case pe:
          return ql(e.type);
        case Ae:
          return ql(e.type.render);
        case de:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function _t(e) {
      try {
        var t = "", a = e;
        do
          t += $o(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Wo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Wr:
          return "Fragment";
        case ha:
          return "Portal";
        case ci:
          return "Profiler";
        case si:
          return "StrictMode";
        case ie:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Hu(t) + ".Consumer";
          case Mi:
            var a = e;
            return Hu(a._context) + ".Provider";
          case Y:
            return Wo(e, e.render, "ForwardRef");
          case pt:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Qe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return kt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function oc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pi(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case gt:
          return "Cache";
        case en:
          var i = a;
          return pi(i) + ".Consumer";
        case it:
          var u = a;
          return pi(u._context) + ".Provider";
        case un:
          return "DehydratedFragment";
        case Ae:
          return oc(a, a.render, "ForwardRef");
        case ot:
          return "Fragment";
        case le:
          return a;
        case Fe:
          return "Portal";
        case X:
          return "Root";
        case xe:
          return "Text";
        case Je:
          return kt(a);
        case Tn:
          return a === si ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case Nt:
          return "Profiler";
        case Rt:
          return "Scope";
        case Te:
          return "Suspense";
        case Wt:
          return "SuspenseList";
        case ct:
          return "TracingMarker";
        case de:
        case _e:
        case st:
        case Be:
        case ee:
        case pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = rt.ReactDebugCurrentFrame, Zn = null, qr = !1;
    function Nr() {
      {
        if (Zn === null)
          return null;
        var e = Zn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function vi() {
      return Zn === null ? "" : _t(Zn);
    }
    function Sn() {
      Kl.getCurrentStack = null, Zn = null, qr = !1;
    }
    function Gt(e) {
      Kl.getCurrentStack = e === null ? null : vi, Zn = e, qr = !1;
    }
    function Ka() {
      return Zn;
    }
    function Da(e) {
      qr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Lr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qn(e), e;
        default:
          return "";
      }
    }
    var qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            qn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            qn(p), i = "" + p;
          },
          stopTracking: function() {
            Bu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Na(e) {
      Vu(e) || (e._valueTracker = Oa(e));
    }
    function fl(e) {
      if (!e)
        return !1;
      var t = Vu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Fi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Iu = !1, dl = !1, Hi = !1, Yu = !1;
    function Qo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function La(e, t) {
      var a = e, i = t.checked, u = Xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function $u(e, t) {
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Iu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), Iu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: Qo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Qo(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Hi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
      }
      h(e, t);
      var u = Lr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Tr(u)) : a.value !== Tr(u) && (a.value = Tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Se(a, t.type, u) : t.hasOwnProperty("defaultValue") && Se(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Mn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Lh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fl(f), C(f, p);
          }
        }
      }
    }
    function Se(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var ve = !1, Pe = !1, ut = !1;
    function Ht(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? te.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pe || (Pe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ut || (ut = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ve && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ve = !0);
    }
    function qt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var Kt = Array.isArray;
    function et(e) {
      return Kt(e);
    }
    var tn;
    tn = !1;
    function xn() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jl = ["value", "defaultValue"];
    function Go(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Jl.length; t++) {
          var a = Jl[t];
          if (e[a] != null) {
            var i = et(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, xn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, xn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Tr(Lr(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function eu(e, t) {
      return Xe({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function nv(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (et(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Lr(i)
      };
    }
    function rv(e, t) {
      var a = e, i = Lr(t.value), u = Lr(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Tr(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      rv(e, t);
    }
    var Xa = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return qm;
        default:
          return Xa;
      }
    }
    function fc(e, t) {
      return e == null || e === Xa ? Jf(t) : e === Zf && t === "foreignObject" ? Xa : e;
    }
    var Km = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = Km(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Vi = 3, Un = 8, Bi = 9, Ko = 11, pl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wu).forEach(function(e) {
      uv.forEach(function(t) {
        Wu[lv(t, e)] = Wu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wu.hasOwnProperty(e) && Wu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, Qu = /^ms-/;
    function Zm(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(Qu, "-ms-");
    }
    var sv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, fv = /-(.)/g, Gu = /;\s*$/, hi = {}, ed = {}, Xo = !1, dv = !1, pv = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pv(e.replace(cv, "ms-"))
        ));
      }, nd = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Gu, "")));
      }, hv = function(e, t) {
        Xo || (Xo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        dv || (dv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Jm.test(e) ? nd(e) : Gu.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var ey = sv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Zm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ey(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Zo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sv = Xe({
      menuitem: !0
    }, Zo), Ev = "__html";
    function vc(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function vl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var qu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Cv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ku = {}, Xu = new RegExp("^(aria)-[" + J + "]*$"), rd = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function Jo(e, t) {
      {
        if (ar.call(Ku, t) && Ku[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ku[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ku[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ku[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ku[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jo(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rv(e, t) {
      vl(e, t) || ad(e, t);
    }
    var es = !1;
    function Zu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !es && (es = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var wr = {}, ts = /^on./, Tv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + J + "]*$"), xv = new RegExp("^(aria)[A-Z][" + J + "]*$");
      hc = function(e, t, a, i) {
        if (ar.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ts.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ts.test(t))
          return Tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (wv.test(t) || xv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = an(t), y = v !== null && v.type === Kn;
        if (qu.hasOwnProperty(u)) {
          var g = qu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : cn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === zn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      vl(e, t) || bv(e, t, a);
    }
    var id = 1, mi = 2, tu = 4, ld = id | mi | tu, ns = null;
    function ry(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function rs() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function ay(e) {
      return e === ns;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var yc = null, Pt = null, hl = null;
    function as(e) {
      var t = bo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Lh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function is(e) {
      yc = e;
    }
    function ud(e) {
      Pt ? hl ? hl.push(e) : hl = [e] : Pt = e;
    }
    function od() {
      return Pt !== null || hl !== null;
    }
    function Ju() {
      if (Pt) {
        var e = Pt, t = hl;
        if (Pt = null, hl = null, as(e), t)
          for (var a = 0; a < t.length; a++)
            as(t[a]);
      }
    }
    var ls = function(e, t) {
      return e(t);
    }, nu = function() {
    }, gc = !1;
    function iy() {
      var e = od();
      e && (nu(), Ju());
    }
    function kv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return ls(e, t, a);
      } finally {
        gc = !1, iy();
      }
    }
    function Dv(e, t, a) {
      ls = e, nu = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Sc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Lh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (Gn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        us = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ov = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          Rc.removeEventListener(H, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function ze() {
          b = !0, F(), a.apply(i, ue), w = !1;
        }
        var be, Ot = !1, St = !1;
        function O(N) {
          if (be = N.error, Ot = !0, be === null && N.colno === 0 && N.lineno === 0 && (St = !0), N.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Rc.addEventListener(H, ze, !1), g.initEvent(H, !1, !1), Rc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (Ot ? St && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", O), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var ly = Ov, eo = !1, to = null, Ja = !1, Tc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ly.apply(no, arguments);
    }
    function os(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), eo) {
        var y = cd();
        Ja || (Ja = !0, Tc = y);
      }
    }
    function Ii() {
      if (Ja) {
        var e = Tc;
        throw Ja = !1, Tc = null, e;
      }
    }
    function sd() {
      return eo;
    }
    function cd() {
      if (eo) {
        var e = to;
        return eo = !1, to = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ro(e) {
      return e._reactInternals;
    }
    function iu(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), Yi = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), mt = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), It = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), dt = (
      /*                   */
      128
    ), hn = (
      /*            */
      256
    ), An = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ma = (
      /*                      */
      2048
    ), Cn = (
      /*                    */
      4096
    ), yi = (
      /*                   */
      8192
    ), wc = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), lu = (
      /*                   */
      32768
    ), xr = (
      /*                */
      65536
    ), ei = (
      /* */
      131072
    ), cs = (
      /*                       */
      1048576
    ), fs = (
      /*                    */
      2097152
    ), ml = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), yl = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      mt | za | 0
    ), ao = En | mt | Xr | It | An | Cn | yi, Sl = mt | nn | An | yi, ur = ma | Xr, jn = ml | fd | fs, uu = rt.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (En | Cn)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function gi(e) {
      if (e.tag === Te) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function El(e) {
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? zr(u) === u : !1;
    }
    function xc(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = zr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return xc(s), e;
            if (v === u)
              return xc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Jr(e) {
      var t = Zr(e);
      return t !== null ? dn(t) : null;
    }
    function dn(e) {
      if (e.tag === le || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ti(e) {
      var t = Zr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === le || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Fe) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = k.unstable_scheduleCallback, hd = k.unstable_cancelCallback, md = k.unstable_shouldYield, Mv = k.unstable_requestPaint, bn = k.unstable_now, zv = k.unstable_getCurrentPriorityLevel, $i = k.unstable_ImmediatePriority, ds = k.unstable_UserBlockingPriority, ou = k.unstable_NormalPriority, ps = k.unstable_LowPriority, io = k.unstable_IdlePriority, Uv = k.unstable_yieldValue, Av = k.unstable_setDisableYieldValue, ni = null, or = null, re = null, ya = !1, br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ie && (e = Xe({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ni = t.inject(e), or = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (or && typeof or.onScheduleFiberRoot == "function")
        try {
          or.onScheduleFiberRoot(ni, e, t);
        } catch (a) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (or && typeof or.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & dt) === dt;
          if (We) {
            var i;
            switch (t) {
              case aa:
                i = $i;
                break;
              case Aa:
                i = ds;
                break;
              case sr:
                i = ou;
                break;
              case tf:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            or.onCommitFiberRoot(ni, e, i, a);
          }
        } catch (u) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (or && typeof or.onPostCommitFiberRoot == "function")
        try {
          or.onPostCommitFiberRoot(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (or && typeof or.onCommitFiberUnmount == "function")
        try {
          or.onCommitFiberUnmount(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Yt(e) {
      if (typeof Uv == "function" && (Av(e), Et(e)), or && typeof or.setStrictMode == "function")
        try {
          or.setStrictMode(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      re = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Bv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jv(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function Si() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function Ua(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function Cl() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function Fv(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Rl(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function bc() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function Hv(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Ei(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function cu() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function Td(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function oo() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function wd(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function xd() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function mn() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function kc(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function bd(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), vt = (
      /*                 */
      1
    ), wt = (
      /*                    */
      2
    ), Ze = (
      /*               */
      8
    ), Xt = (
      /*              */
      16
    ), In = Math.clz32 ? Math.clz32 : gs, Dc = Math.log, ys = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / ys | 0) | 0;
    }
    var _d = 31, P = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), He = (
      /*                        */
      1
    ), Tl = (
      /*    */
      2
    ), Jn = (
      /*             */
      4
    ), er = (
      /*            */
      8
    ), ea = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), wl = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Nc = (
      /*                        */
      256
    ), Lc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), co = (
      /*                       */
      65536
    ), fo = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), Ss = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Pc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), Ic = (
      /*                             */
      67108864
    ), Pv = pu, po = (
      /*          */
      134217728
    ), Vv = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), ta = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & He)
          return "Sync";
        if (e & Tl)
          return "InputContinuousHydration";
        if (e & Jn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & ta)
          return "Offscreen";
      }
    }
    var $t = -1, Yc = so, $c = pu;
    function Ts(e) {
      switch (vu(e)) {
        case He:
          return He;
        case Tl:
          return Tl;
        case Jn:
          return Jn;
        case er:
          return er;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return e & wl;
        case pu:
        case Cs:
        case Vc:
        case Bc:
        case Ic:
          return e & Es;
        case po:
          return po;
        case Rs:
          return Rs;
        case xl:
          return xl;
        case ta:
          return ta;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function na(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Vv;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = Ts(p);
        else {
          var v = f & s;
          v !== P && (i = Ts(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = Ts(y) : s !== P && (i = Ts(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = vu(i), b = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (b & wl) !== P
        )
          return t;
      }
      (i & Jn) !== P && (i |= a & ea);
      var w = e.entangledLanes;
      if (w !== P)
        for (var z = e.entanglements, A = i & w; A > 0; ) {
          var F = _n(A), ue = 1 << F;
          i |= z[F], A &= ~ue;
        }
      return i;
    }
    function kd(e, t) {
      for (var a = e.eventTimes, i = $t; t > 0; ) {
        var u = _n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Wc(e, t) {
      switch (e) {
        case He:
        case Tl:
        case Jn:
          return t + 250;
        case er:
        case ea:
        case fu:
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return t + 5e3;
        case pu:
        case Cs:
        case Vc:
        case Bc:
        case Ic:
          return $t;
        case po:
        case Rs:
        case xl:
        case ta:
          return $t;
        default:
          return S("Should have found matching lanes. This is a bug in React."), $t;
      }
    }
    function Iv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === $t ? ((v & i) === P || (v & u) !== P) && (s[p] = Wc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Yv(e) {
      return Ts(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & ~ta;
      return t !== P ? t : t & ta ? ta : P;
    }
    function Dd(e) {
      return (e & He) !== P;
    }
    function bl(e) {
      return (e & Vv) !== P;
    }
    function Gc(e) {
      return (e & Es) === e;
    }
    function Od(e) {
      var t = He | Jn | ea;
      return (e & t) === P;
    }
    function uy(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = Tl | Jn | er | ea;
      return (t & a) !== P;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Nd(e) {
      return (e & wl) !== P;
    }
    function Ld() {
      var e = Yc;
      return Yc <<= 1, (Yc & wl) === P && (Yc = so), e;
    }
    function Wv() {
      var e = $c;
      return $c <<= 1, ($c & Es) === P && ($c = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function tr(e) {
      return vu(e);
    }
    function _n(e) {
      return 31 - In(e);
    }
    function qc(e) {
      return _n(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _n(i), s = 1 << u;
        a[u] = $t, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p;
        i[p] = P, u[p] = $t, s[p] = $t, f &= ~v;
      }
    }
    function bs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _n(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case Jn:
          i = Tl;
          break;
        case ea:
          i = er;
          break;
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
        case pu:
        case Cs:
        case Vc:
        case Bc:
        case Ic:
          i = fu;
          break;
        case xl:
          i = Rs;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function Gv(e, t, a) {
      if (br)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var aa = He, Aa = Jn, sr = ea, tf = xl, ho = Fn;
    function ga() {
      return ho;
    }
    function Yn(e) {
      ho = e;
    }
    function qv(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function _s(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _r(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Kv(e) {
      var t = vu(e);
      return Ad(aa, t) ? Ad(Aa, t) ? bl(t) ? sr : tf : Aa : aa;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var cr;
    function sy(e) {
      cr = e;
    }
    function ge(e) {
      cr(e);
    }
    var _l;
    function jd(e) {
      _l = e;
    }
    var Fd;
    function cy(e) {
      Fd = e;
    }
    var mo;
    function nf(e) {
      mo = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var af = !1, ks = [], Ci = null, Ri = null, yn = null, Ur = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Qi = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ri(e) {
      return Zv.indexOf(e) > -1;
    }
    function Jv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ai(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ci = null;
          break;
        case "dragenter":
        case "dragleave":
          Ri = null;
          break;
        case "mouseover":
        case "mouseout":
          yn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ja.delete(i);
          break;
        }
      }
    }
    function Ds(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Jv(t, a, i, u, s);
        if (t !== null) {
          var p = bo(t);
          p !== null && _l(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function eh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ci = Ds(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ri = Ds(Ri, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return yn = Ds(yn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Ds(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return ja.set(b, Ds(ja.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === X) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = El(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function th(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Qi.length && Ad(t, Qi[i].priority); i++)
        ;
      Qi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Os(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), rs();
        } else {
          var f = bo(i);
          return f !== null && _l(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function nh(e, t, a) {
      Os(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ci !== null && Os(Ci) && (Ci = null), Ri !== null && Os(Ri) && (Ri = null), yn !== null && Os(yn) && (yn = null), Ur.forEach(nh), ja.forEach(nh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, k.unstable_scheduleCallback(k.unstable_NormalPriority, lf)));
    }
    function kr(e) {
      if (ks.length > 0) {
        yu(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ci !== null && yu(Ci, e), Ri !== null && yu(Ri, e), yn !== null && yu(yn, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ur.forEach(i), ja.forEach(i);
      for (var u = 0; u < Qi.length; u++) {
        var s = Qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Qi.length > 0; ) {
        var f = Qi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Qi.shift();
      }
    }
    var yt = rt.ReactCurrentBatchConfig, Hn = !0;
    function kn(e) {
      Hn = !!e;
    }
    function fr() {
      return Hn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case aa:
          u = yo;
          break;
        case Aa:
          u = $n;
          break;
        case sr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = yt.transition;
      yt.transition = null;
      try {
        Yn(aa), gu(e, t, a, i);
      } finally {
        Yn(u), yt.transition = s;
      }
    }
    function $n(e, t, a, i) {
      var u = ga(), s = yt.transition;
      yt.transition = null;
      try {
        Yn(Aa), gu(e, t, a, i);
      } finally {
        Yn(u), yt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Hn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Eu, a), ai(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ai(e, i), t & tu && ri(e)) {
        for (; u !== null; ) {
          var s = bo(u);
          s !== null && ge(s);
          var f = Ns(e, t, a, i);
          if (f === null && _y(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Eu = null;
    function Ns(e, t, a, i) {
      Eu = null;
      var u = mc(i), s = Is(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = gi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === X) {
            var y = f.stateNode;
            if (mu(y))
              return El(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Eu = s, null;
    }
    function go(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return aa;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Aa;
        case "message": {
          var t = zv();
          switch (t) {
            case $i:
              return aa;
            case ds:
              return Aa;
            case ou:
            case ps:
              return sr;
            case io:
              return tf;
            default:
              return sr;
          }
        }
        default:
          return sr;
      }
    }
    function ia(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function So(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var kl = null, Ls = null, Fa = null;
    function uf(e) {
      return kl = e, Ls = Eo(), !0;
    }
    function Dl() {
      kl = null, Ls = null, Fa = null;
    }
    function Ms() {
      if (Fa)
        return Fa;
      var e, t = Ls, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Fa = u.slice(e, p), Fa;
    }
    function Eo() {
      return "value" in kl ? kl.value : kl.textContent;
    }
    function Co(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function rn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return Xe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ca = rn(Ea), nr = Xe({}, Ea, {
      view: 0,
      detail: 0
    }), rh = rn(nr), Us, As, js;
    function Ol(e) {
      e !== js && (js && e.type === "mousemove" ? (Us = e.screenX - js.screenX, As = e.screenY - js.screenY) : (Us = 0, As = 0), js = e);
    }
    var Fs = Xe({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ol(e), Us);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), of = rn(Fs), Ru = Xe({}, Fs, {
      dataTransfer: 0
    }), Vd = rn(Ru), Tu = Xe({}, nr, {
      relatedTarget: 0
    }), sf = rn(Tu), ah = Xe({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = rn(ah), cf = Xe({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = rn(cf), dy = Xe({}, Ea, {
      data: 0
    }), Id = rn(dy), ih = Id, wu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, py = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ro(e) {
      if (e.key) {
        var t = wu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Co(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? py[e.keyCode] || "Unidentified" : "";
    }
    var lh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Rn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = lh[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return Rn;
    }
    var uh = Xe({}, nr, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Co(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = rn(uh), hy = Xe({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), $d = rn(hy), oh = Xe({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), my = rn(oh), Ha = Xe({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wd = rn(Ha), yy = Xe({}, Fs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = rn(yy), ff = [9, 13, 27, 32], Ll = 229, To = Gn && "CompositionEvent" in window, xu = null;
    Gn && "documentMode" in document && (xu = document.documentMode);
    var Qd = Gn && "TextEvent" in window && !xu, sh = Gn && (!To || xu && xu > 8 && xu <= 11), df = 32, ch = String.fromCharCode(df);
    function fh() {
      Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Bt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dh(e, t) {
      return e === "keydown" && t.keyCode === Ll;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ll;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ph(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qd(e) {
      return e.locale === "ko";
    }
    var Ml = !1;
    function mf(e, t, a, i, u) {
      var s, f;
      if (To ? s = vf(t) : Ml ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !qd(i) && (!Ml && s === "onCompositionStart" ? Ml = uf(u) : s === "onCompositionEnd" && Ml && (f = Ms()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new Id(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ph(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Kd(e, t) {
      switch (e) {
        case "compositionend":
          return ph(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, ch);
        case "textInput":
          var i = t.data;
          return i === ch && Gd ? null : i;
        default:
          return null;
      }
    }
    function yf(e, t) {
      if (Ml) {
        if (e === "compositionend" || !To && hf(e, t)) {
          var a = Ms();
          return Dl(), Ml = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sh && !qd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, i, u) {
      var s;
      if (Qd ? s = Kd(t, i) : s = yf(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ih("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      mf(e, t, a, i, u), vh(e, t, a, i, u);
    }
    var gf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function hh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Hs(e) {
      if (!Gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sy() {
      Bt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ps(e, t, a, i) {
      ud(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Ca("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Ps(t, r, e, mc(e)), kv(c, t);
    }
    function c(e) {
      k0(e, 0);
    }
    function d(e) {
      var t = wf(e);
      if (fl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    Gn && (E = Hs("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", W);
    }
    function U() {
      n && (n.detachEvent("onpropertychange", W), n = null, r = null);
    }
    function W(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (U(), T(t, a)) : e === "focusout" && U();
    }
    function $(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function he(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return d(t);
    }
    function we(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Dn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Se(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : hh(p) ? E ? v = we : (v = $, y = Q) : he(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          Ps(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Dn(p);
    }
    function x() {
      Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function L(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ay(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, z = A ? Is(A) : null, z !== null) {
            var F = zr(z);
            (z !== F || z.tag !== le && z.tag !== xe) && (z = null);
          }
        } else
          w = null, z = a;
        if (w !== z) {
          var ue = of, ze = "onMouseLeave", be = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = $d, ze = "onPointerLeave", be = "onPointerEnter", Ot = "pointer");
          var St = w == null ? g : wf(w), O = z == null ? g : wf(z), H = new ue(ze, Ot + "leave", w, i, u);
          H.target = St, H.relatedTarget = O;
          var N = null, G = Is(u);
          if (G === a) {
            var ye = new ue(be, Ot + "enter", z, i, u);
            ye.target = O, ye.relatedTarget = St, N = ye;
          }
          OT(e, H, N, w, z);
        }
      }
    }
    function K(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : K;
    function Le(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ar.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ue(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function $e(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Wn(e, t) {
      for (var a = Ue(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ue($e(a));
      }
    }
    function Lt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zl(e, u, s, f, p);
    }
    function zl(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Ey(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Wn(e, f), g = Wn(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Vi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function dT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function pT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
        if (pT(t))
          e = t.contentWindow;
        else
          return t;
        t = Fi(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vT() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? mT(e) : null
      };
    }
    function hT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && dT(a)) {
        i !== null && Cy(a) && yT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function mT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Lt(e), t || {
        start: 0,
        end: 0
      };
    }
    function yT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ey(e, t);
    }
    var gT = Gn && "documentMode" in document && document.documentMode <= 11;
    function ST() {
      Bt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Ry = null, Xd = null, Ty = !1;
    function ET(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function CT(e) {
      return e.window === e ? e.document : e.nodeType === Bi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = CT(a);
      if (!(Ty || Sf == null || Sf !== Fi(i))) {
        var u = ET(Sf);
        if (!Xd || !Le(Xd, u)) {
          Xd = u;
          var s = Sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function RT(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (hh(p) || p.contentEditable === "true") && (Sf = p, Ry = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Ry = null, Xd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (gT)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    Gn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function yh(e) {
      if (wy[e])
        return wy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var C0 = yh("animationend"), R0 = yh("animationiteration"), T0 = yh("animationstart"), w0 = yh("transitionend"), x0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      x0.set(e, t), Bt(t, [e]);
    }
    function TT() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(C0, "onAnimationEnd"), wo(R0, "onAnimationIteration"), wo(T0, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(w0, "onTransitionEnd");
    }
    function wT(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = my;
            break;
          case C0:
          case R0:
          case T0:
            v = Bd;
            break;
          case w0:
            v = Wd;
            break;
          case "scroll":
            v = rh;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $d;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = kT(a, p, i.type, g, b);
          if (w.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: w
            });
          }
        }
      }
    }
    TT(), x(), Sy(), ST(), fh();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (L(e, t, a, i, u), D(e, t, a, i, u), RT(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, os(i, t, void 0, e), e.currentTarget = null;
    }
    function bT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, z = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _0(e, z, w), i = b;
        }
    }
    function k0(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        bT(s, f, a);
      }
      Ii();
    }
    function _T(e, t, a, i, u) {
      var s = mc(a), f = [];
      xT(f, e, i, a, s, t), k0(f, t);
    }
    function gn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = rx(t), u = NT(e);
      i.has(u) || (D0(t, e, mi, a), i.add(u));
    }
    function by(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), D0(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[gh]) {
        e[gh] = !0, bt.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Bi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, by("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : ia(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & mi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === X || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === X || b === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (O0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Is(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === le || A === xe) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      kv(function() {
        return _T(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, z = b.tag;
        if (z === le && w !== null && (g = w, p !== null)) {
          var A = ru(y, p);
          A != null && v.push(ep(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = ru(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function N0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === le && g !== null) {
          var w = g;
          if (u) {
            var z = ru(p, s);
            z != null && f.unshift(ep(p, z, w));
          } else if (!u) {
            var A = ru(p, s);
            A != null && f.push(ep(p, A, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function OT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function NT(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, tp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", xo = "suppressHydrationWarning", L0 = "autoFocus", Vs = "children", Bs = "style", Ch = "__html", ky, Rh, np, M0, Th, z0, U0;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      Rv(e, t), Zu(e, t), _v(e, t, {
        registrationNameDependencies: qe,
        possibleRegistrationNames: Tt
      });
    }, z0 = Gn && !document.documentMode, np = function(e, t, a) {
      if (!Pa) {
        var i = wh(a), u = wh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function wh(e) {
      Bn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LT, `
`).replace(MT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && I))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Bi ? e : e.ownerDocument;
    }
    function zT() {
    }
    function bh(e) {
      e.onclick = zT;
    }
    function UT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), yv(t, f);
          else if (s === tp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pl(t, f);
            } else typeof f == "number" && pl(t, "" + f);
          else s === Eh || s === xo || s === L0 || (qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && gn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function AT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === tp ? iv(e, f) : s === Vs ? pl(e, f) : va(e, s, f, i);
      }
    }
    function jT(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Xa && (p = Jf(e)), p === Xa) {
        if (u = vl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Xa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ar.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return A0(t).createTextNode(e);
    }
    function HT(e, t, a, i) {
      var u = vl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            gn(Zd[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          $u(e, a), s = La(e, a), gn("invalid", e);
          break;
        case "option":
          Ht(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = eu(e, a), gn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), UT(t, e, i, s, u), t) {
        case "input":
          Na(e), M(e, a, !1);
          break;
        case "textarea":
          Na(e), av(e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function PT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = La(e, a), p = La(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Vs || v === Eh || v === xo || v === L0 || (qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === z || w == null && z == null))
          if (v === Bs)
            if (w && Object.freeze(w), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && z[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var A = w ? w[Ch] : void 0, F = z ? z[Ch] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === xo || (qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && gn("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function VT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = vl(a, i), f = vl(a, u);
      switch (AT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function BT(e) {
      {
        var t = e.toLowerCase();
        return qu.hasOwnProperty(t) && qu[t] || null;
      }
    }
    function IT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = vl(t, a), Rh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            gn(Zd[y], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          $u(e, a), gn("invalid", e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          qo(e, a), gn("invalid", e);
          break;
        case "textarea":
          nv(e, a), gn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Vs)
            typeof F == "string" ? e.textContent !== F && (a[xo] !== !0 && xh(e.textContent, F, s, f), z = [Vs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[xo] !== !0 && xh(e.textContent, F, s, f), z = [Vs, "" + F]);
          else if (qe.hasOwnProperty(A))
            F != null && (typeof F != "function" && Th(A, F), A === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, ze = an(A);
            if (a[xo] !== !0) {
              if (!(A === Eh || A === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var be = e.innerHTML, Ot = F ? F[Ch] : void 0;
                  if (Ot != null) {
                    var St = U0(e, Ot);
                    St !== be && np(A, be, St);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), z0) {
                    var O = ty(F);
                    ue = e.getAttribute("style"), O !== ue && np(A, ue, O);
                  }
                } else if (p && !B)
                  v.delete(A.toLowerCase()), ue = oi(e, A, F), F !== ue && np(A, ue, F);
                else if (!sn(A, ze, p) && !Xn(A, F, ze, p)) {
                  var H = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), ue = Ql(e, A, F, ze);
                  else {
                    var N = i;
                    if (N === Xa && (N = Jf(t)), N === Xa)
                      v.delete(A.toLowerCase());
                    else {
                      var G = BT(A);
                      G !== null && G !== A && (H = !0, v.delete(G)), v.delete(A);
                    }
                    ue = oi(e, A, F);
                  }
                  var ye = B;
                  !ye && F !== ue && !H && np(A, ue, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && M0(v), t) {
        case "input":
          Na(e), M(e, a, !0);
          break;
        case "textarea":
          Na(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return z;
    }
    function YT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var WT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], QT = j0.concat(["button"]), GT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = Xe({}, e || F0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return GT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, KT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, H0 = {};
      rp = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qT(e, u) ? null : i, f = s ? null : KT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", ip = "$?", lp = "$!", XT = "style", My = null, zy = null;
    function ZT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case Ko: {
          t = i === Bi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function JT(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function yk(e) {
      return e;
    }
    function ew(e) {
      My = fr(), zy = vT();
      var t = null;
      return kn(!1), t;
    }
    function tw(e) {
      hT(zy), kn(My), My = null, zy = null;
    }
    function nw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = jT(e, t, a, s);
      return sp(u, y), By(y, t), y;
    }
    function rw(e, t) {
      e.appendChild(t);
    }
    function aw(e, t, a, i, u) {
      switch (HT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function iw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return PT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function lw(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return sp(i, s), s;
    }
    function uw() {
      var e = window.event;
      return e === void 0 ? sr : go(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, ow = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, P0 = typeof Promise == "function" ? Promise : void 0, sw = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(cw);
    } : Ay;
    function cw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function fw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function dw(e, t, a, i, u, s) {
      VT(e, t, a, i, u), By(e, u);
    }
    function V0(e) {
      pl(e, "");
    }
    function pw(e, t, a) {
      e.nodeValue = a;
    }
    function vw(e, t) {
      e.appendChild(t);
    }
    function hw(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function mw(e, t, a) {
      e.insertBefore(t, a);
    }
    function yw(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function gw(e, t) {
      e.removeChild(t);
    }
    function Sw(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), kr(t);
              return;
            } else
              i--;
          else (s === kh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      kr(t);
    }
    function Ew(e, t) {
      e.nodeType === Un ? Fy(e.parentNode, t) : e.nodeType === Kr && Fy(e, t), kr(e);
    }
    function Cw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Rw(e) {
      e.nodeValue = "";
    }
    function Tw(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function ww(e, t) {
      e.nodeValue = t;
    }
    function xw(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function bw(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _w(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function kw(e) {
      return e.nodeType !== Un ? null : e;
    }
    function B0(e) {
      return e.data === ip;
    }
    function Hy(e) {
      return e.data === lp;
    }
    function Dw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Ow(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Vi)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === kh || a === lp || a === ip)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Oh(e.nextSibling);
    }
    function Nw(e) {
      return Oh(e.firstChild);
    }
    function Lw(e) {
      return Oh(e.firstChild);
    }
    function Mw(e) {
      return Oh(e.nextSibling);
    }
    function zw(e, t, a, i, u, s, f) {
      sp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & vt) !== De;
      return IT(e, t, a, p, i, y, f);
    }
    function Uw(e, t, a, i) {
      return sp(a, e), a.mode & vt, YT(e, t);
    }
    function Aw(e, t) {
      sp(t, e);
    }
    function jw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === kh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === kh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fw(e) {
      kr(e);
    }
    function Hw(e) {
      kr(e);
    }
    function Pw(e) {
      return e !== "head" && e !== "body";
    }
    function Vw(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function Bw(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function Iw(e, t) {
      t.nodeType === Kr ? Dy(e, t) : t.nodeType === Un || Oy(e, t);
    }
    function Yw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? Dy(a, t) : t.nodeType === Un || Oy(a, t));
      }
    }
    function $w(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Kr ? Dy(a, i) : i.nodeType === Un || Oy(a, i));
    }
    function Ww(e, t, a) {
      Ny(e, t);
    }
    function Qw(e, t) {
      Ly(e, t);
    }
    function Gw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function Kw(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function Xw(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function Zw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Jw(e) {
      Jd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Py = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Vy = "__reactEvents$" + Rf, ex = "__reactListeners$" + Rf, tx = "__reactHandles$" + Rf;
    function nx(e) {
      delete e[Tf], delete e[Py], delete e[Vy], delete e[ex], delete e[tx];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function Nh(e, t) {
      t[op] = e;
    }
    function Y0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Is(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function bo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === le || t.tag === xe || t.tag === Te || t.tag === X) ? t : null;
    }
    function wf(e) {
      if (e.tag === le || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function rx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, W0 = rt.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Yo(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function qi(e, t, a, i, u) {
      {
        var s = Function.call.bind(ar);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Mh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Mh(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, Mh(u), S("Failed %s type: %s", a, p.message), Mh(null));
          }
      }
    }
    var Iy = [], zh;
    zh = [];
    var bu = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (bu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[bu] && S("Unexpected Fiber popped."), e.current = Iy[bu], Iy[bu] = null, zh[bu] = null, bu--;
    }
    function ua(e, t, a) {
      bu++, Iy[bu] = e.current, zh[bu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ii = {};
    Object.freeze(ii);
    var _u = _o(ii), Ul = _o(!1), $y = ii;
    function xf(e, t, a) {
      return a && Al(t) ? $y : _u.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          qi(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function Uh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      la(Ul, e), la(_u, e);
    }
    function Wy(e) {
      la(Ul, e), la(_u, e);
    }
    function G0(e, t, a) {
      {
        if (_u.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(_u, t, e), ua(Ul, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          qi(u, f, "child context", v);
        }
        return Xe({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return $y = _u.current, ua(_u, a, e), ua(Ul, Ul.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, la(Ul, e), la(_u, e), ua(_u, u, e), ua(Ul, a, e);
        } else
          la(Ul, e), ua(Ul, a, e);
      }
    }
    function ax(e) {
      {
        if (!Lv(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ko = 0, Fh = 1, ku = null, Qy = !1, Gy = !1;
    function X0(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function ix(e) {
      Qy = !0, X0(e);
    }
    function Z0() {
      Qy && Do();
    }
    function Do() {
      if (!Gy && ku !== null) {
        Gy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (Yn(aa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Qy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vd($i, Do), s;
        } finally {
          Yn(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Hh = null, Ph = 0, Ti = [], wi = 0, Ys = null, Du = 1, Ou = "";
    function lx(e) {
      return Ws(), (e.flags & cs) !== ke;
    }
    function ux(e) {
      return Ws(), Ph;
    }
    function ox() {
      var e = Ou, t = Du, a = t & ~sx(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Ws(), _f[kf++] = Ph, _f[kf++] = Hh, Hh = e, Ph = t;
    }
    function J0(e, t, a) {
      Ws(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Ys, Ys = e;
      var i = Du, u = Ou, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, z = s - y, A = Vh(t) + z, F = p << z, ue = F | w, ze = b + u;
        Du = 1 << A | ue, Ou = ze;
      } else {
        var be = p << s, Ot = be | f, St = u;
        Du = 1 << v | Ot, Ou = St;
      }
    }
    function qy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), J0(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - In(e);
    }
    function sx(e) {
      return 1 << Vh(e) - 1;
    }
    function Ky(e) {
      for (; e === Hh; )
        Hh = _f[--kf], _f[kf] = null, Ph = _f[--kf], _f[kf] = null;
      for (; e === Ys; )
        Ys = Ti[--wi], Ti[wi] = null, Ou = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null;
    }
    function cx() {
      return Ws(), Ys !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function fx(e, t) {
      Ws(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Ys, Du = t.id, Ou = t.overflow, Ys = e;
    }
    function Ws() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, Ki = !1, Qs = !1, Oo = null;
    function dx() {
      Ki && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Qs = !0;
    }
    function px() {
      return Qs;
    }
    function vx(e) {
      var t = e.stateNode.containerInfo;
      return xi = Lw(t), Ar = e, Ki = !0, Oo = null, Qs = !1, !0;
    }
    function hx(e, t, a) {
      return xi = Mw(t), Ar = e, Ki = !0, Oo = null, Qs = !1, a !== null && fx(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case X: {
          Iw(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & vt) !== De;
          $w(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && Yw(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = S_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, Ww(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                Qw(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & vt) !== De;
                Kw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case xe: {
                var b = t.pendingProps, w = (e.mode & vt) !== De;
                Xw(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case le:
                var F = t.type;
                t.pendingProps, Gw(A, F);
                break;
              case xe:
                var ue = t.pendingProps;
                qw(A, ue);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~Cn | En, Xy(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = bw(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Nw(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = _w(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case Te: {
          var f = kw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: cx(),
              retryLane: ta
            };
            e.memoizedState = p;
            var v = E_(f);
            return v.return = e, e.child = v, Ar = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & vt) !== De && (e.flags & dt) === ke;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ki) {
        var t = xi;
        if (!t) {
          Zy(e) && (Xy(Ar, e), Jy()), rE(Ar, e), Ki = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Zy(e) && (Xy(Ar, e), Jy()), t = up(a);
          var i = Ar;
          if (!t || !aE(e, t)) {
            rE(Ar, e), Ki = !1, Ar = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function mx(e, t, a) {
      var i = e.stateNode, u = !Qs, s = zw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function yx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Uw(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case X: {
              var s = u.stateNode.containerInfo, f = (u.mode & vt) !== De;
              Vw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & vt) !== De;
              Bw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Aw(a, e);
    }
    function Sx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jw(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== X && t.tag !== Te; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!Ki)
        return iE(e), Ki = !0, !1;
      if (e.tag !== X && (e.tag !== le || Pw(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Zy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = up(t);
      }
      return iE(e), e.tag === Te ? xi = Sx(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function Ex() {
      return Ki && xi !== null;
    }
    function lE(e) {
      for (var t = xi; t; )
        tE(e, t), t = up(t);
    }
    function Df() {
      Ar = null, xi = null, Ki = !1, Qs = !1;
    }
    function uE() {
      Oo !== null && (eR(Oo), Oo = null);
    }
    function jr() {
      return Ki;
    }
    function tg(e) {
      Oo === null ? Oo = [e] : Oo.push(e);
    }
    var Cx = rt.ReactCurrentBatchConfig, Rx = null;
    function Tx() {
      return Cx.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var wx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ze && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ye(w) || "Component"), qs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ye(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ye(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ye(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ye(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ye(w) || "Component"), qs.add(w.type);
        }), mp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          Ct(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          Ct(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Gs(u);
          Ct(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = wx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), oE.add(s.type);
            });
            var u = Gs(i);
            try {
              Gt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Sn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, sE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ze || Ne) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== de) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== de)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ye(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
      function t(O, H) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [H], O.flags |= Xr) : N.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var N = H; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, H) {
        for (var N = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? N.set(G.key, G) : N.set(G.index, G), G = G.sibling;
        return N;
      }
      function u(O, H) {
        var N = ac(O, H);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, H, N) {
        if (O.index = N, !e)
          return O.flags |= cs, H;
        var G = O.alternate;
        if (G !== null) {
          var ye = G.index;
          return ye < H ? (O.flags |= En, H) : ye;
        } else
          return O.flags |= En, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= En), O;
      }
      function p(O, H, N, G) {
        if (H === null || H.tag !== xe) {
          var ye = t0(N, O.mode, G);
          return ye.return = O, ye;
        } else {
          var fe = u(H, N);
          return fe.return = O, fe;
        }
      }
      function v(O, H, N, G) {
        var ye = N.type;
        if (ye === Wr)
          return g(O, H, N.props.children, G, N.key);
        if (H !== null && (H.elementType === ye || // Keep this check inline so it only runs on the false path:
        mR(H, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Qe && cE(ye) === H.type)) {
          var fe = u(H, N.props);
          return fe.ref = yp(O, H, N), fe.return = O, fe._debugSource = N._source, fe._debugOwner = N._owner, fe;
        }
        var Ve = e0(N, O.mode, G);
        return Ve.ref = yp(O, H, N), Ve.return = O, Ve;
      }
      function y(O, H, N, G) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== N.containerInfo || H.stateNode.implementation !== N.implementation) {
          var ye = n0(N, O.mode, G);
          return ye.return = O, ye;
        } else {
          var fe = u(H, N.children || []);
          return fe.return = O, fe;
        }
      }
      function g(O, H, N, G, ye) {
        if (H === null || H.tag !== ot) {
          var fe = Vo(N, O.mode, G, ye);
          return fe.return = O, fe;
        } else {
          var Ve = u(H, N);
          return Ve.return = O, Ve;
        }
      }
      function b(O, H, N) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = t0("" + H, O.mode, N);
          return G.return = O, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case lr: {
              var ye = e0(H, O.mode, N);
              return ye.ref = yp(O, null, H), ye.return = O, ye;
            }
            case ha: {
              var fe = n0(H, O.mode, N);
              return fe.return = O, fe;
            }
            case Qe: {
              var Ve = H._payload, Ke = H._init;
              return b(O, Ke(Ve), N);
            }
          }
          if (et(H) || vn(H)) {
            var Jt = Vo(H, O.mode, N, null);
            return Jt.return = O, Jt;
          }
          Yh(O, H);
        }
        return typeof H == "function" && $h(O), null;
      }
      function w(O, H, N, G) {
        var ye = H !== null ? H.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : p(O, H, "" + N, G);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case lr:
              return N.key === ye ? v(O, H, N, G) : null;
            case ha:
              return N.key === ye ? y(O, H, N, G) : null;
            case Qe: {
              var fe = N._payload, Ve = N._init;
              return w(O, H, Ve(fe), G);
            }
          }
          if (et(N) || vn(N))
            return ye !== null ? null : g(O, H, N, G, null);
          Yh(O, N);
        }
        return typeof N == "function" && $h(O), null;
      }
      function z(O, H, N, G, ye) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var fe = O.get(N) || null;
          return p(H, fe, "" + G, ye);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case lr: {
              var Ve = O.get(G.key === null ? N : G.key) || null;
              return v(H, Ve, G, ye);
            }
            case ha: {
              var Ke = O.get(G.key === null ? N : G.key) || null;
              return y(H, Ke, G, ye);
            }
            case Qe:
              var Jt = G._payload, Mt = G._init;
              return z(O, H, N, Mt(Jt), ye);
          }
          if (et(G) || vn(G)) {
            var Qn = O.get(N) || null;
            return g(H, Qn, G, ye, null);
          }
          Yh(H, G);
        }
        return typeof G == "function" && $h(H), null;
      }
      function A(O, H, N) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case lr:
            case ha:
              sE(O, N);
              var G = O.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Qe:
              var ye = O._payload, fe = O._init;
              A(fe(ye), H, N);
              break;
          }
        }
        return H;
      }
      function F(O, H, N, G) {
        for (var ye = null, fe = 0; fe < N.length; fe++) {
          var Ve = N[fe];
          ye = A(Ve, ye, O);
        }
        for (var Ke = null, Jt = null, Mt = H, Qn = 0, zt = 0, Pn = null; Mt !== null && zt < N.length; zt++) {
          Mt.index > zt ? (Pn = Mt, Mt = null) : Pn = Mt.sibling;
          var sa = w(O, Mt, N[zt], G);
          if (sa === null) {
            Mt === null && (Mt = Pn);
            break;
          }
          e && Mt && sa.alternate === null && t(O, Mt), Qn = s(sa, Qn, zt), Jt === null ? Ke = sa : Jt.sibling = sa, Jt = sa, Mt = Pn;
        }
        if (zt === N.length) {
          if (a(O, Mt), jr()) {
            var Yr = zt;
            $s(O, Yr);
          }
          return Ke;
        }
        if (Mt === null) {
          for (; zt < N.length; zt++) {
            var ui = b(O, N[zt], G);
            ui !== null && (Qn = s(ui, Qn, zt), Jt === null ? Ke = ui : Jt.sibling = ui, Jt = ui);
          }
          if (jr()) {
            var xa = zt;
            $s(O, xa);
          }
          return Ke;
        }
        for (var ba = i(O, Mt); zt < N.length; zt++) {
          var ca = z(ba, O, zt, N[zt], G);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? zt : ca.key), Qn = s(ca, Qn, zt), Jt === null ? Ke = ca : Jt.sibling = ca, Jt = ca);
        }
        if (e && ba.forEach(function(Gf) {
          return t(O, Gf);
        }), jr()) {
          var ju = zt;
          $s(O, ju);
        }
        return Ke;
      }
      function ue(O, H, N, G) {
        var ye = vn(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), N.entries === ye && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var fe = ye.call(N);
          if (fe)
            for (var Ve = null, Ke = fe.next(); !Ke.done; Ke = fe.next()) {
              var Jt = Ke.value;
              Ve = A(Jt, Ve, O);
            }
        }
        var Mt = ye.call(N);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, zt = null, Pn = H, sa = 0, Yr = 0, ui = null, xa = Mt.next(); Pn !== null && !xa.done; Yr++, xa = Mt.next()) {
          Pn.index > Yr ? (ui = Pn, Pn = null) : ui = Pn.sibling;
          var ba = w(O, Pn, xa.value, G);
          if (ba === null) {
            Pn === null && (Pn = ui);
            break;
          }
          e && Pn && ba.alternate === null && t(O, Pn), sa = s(ba, sa, Yr), zt === null ? Qn = ba : zt.sibling = ba, zt = ba, Pn = ui;
        }
        if (xa.done) {
          if (a(O, Pn), jr()) {
            var ca = Yr;
            $s(O, ca);
          }
          return Qn;
        }
        if (Pn === null) {
          for (; !xa.done; Yr++, xa = Mt.next()) {
            var ju = b(O, xa.value, G);
            ju !== null && (sa = s(ju, sa, Yr), zt === null ? Qn = ju : zt.sibling = ju, zt = ju);
          }
          if (jr()) {
            var Gf = Yr;
            $s(O, Gf);
          }
          return Qn;
        }
        for (var qp = i(O, Pn); !xa.done; Yr++, xa = Mt.next()) {
          var Yl = z(qp, O, Yr, xa.value, G);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Yr : Yl.key), sa = s(Yl, sa, Yr), zt === null ? Qn = Yl : zt.sibling = Yl, zt = Yl);
        }
        if (e && qp.forEach(function(X_) {
          return t(O, X_);
        }), jr()) {
          var K_ = Yr;
          $s(O, K_);
        }
        return Qn;
      }
      function ze(O, H, N, G) {
        if (H !== null && H.tag === xe) {
          a(O, H.sibling);
          var ye = u(H, N);
          return ye.return = O, ye;
        }
        a(O, H);
        var fe = t0(N, O.mode, G);
        return fe.return = O, fe;
      }
      function be(O, H, N, G) {
        for (var ye = N.key, fe = H; fe !== null; ) {
          if (fe.key === ye) {
            var Ve = N.type;
            if (Ve === Wr) {
              if (fe.tag === ot) {
                a(O, fe.sibling);
                var Ke = u(fe, N.props.children);
                return Ke.return = O, Ke._debugSource = N._source, Ke._debugOwner = N._owner, Ke;
              }
            } else if (fe.elementType === Ve || // Keep this check inline so it only runs on the false path:
            mR(fe, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Qe && cE(Ve) === fe.type) {
              a(O, fe.sibling);
              var Jt = u(fe, N.props);
              return Jt.ref = yp(O, fe, N), Jt.return = O, Jt._debugSource = N._source, Jt._debugOwner = N._owner, Jt;
            }
            a(O, fe);
            break;
          } else
            t(O, fe);
          fe = fe.sibling;
        }
        if (N.type === Wr) {
          var Mt = Vo(N.props.children, O.mode, G, N.key);
          return Mt.return = O, Mt;
        } else {
          var Qn = e0(N, O.mode, G);
          return Qn.ref = yp(O, H, N), Qn.return = O, Qn;
        }
      }
      function Ot(O, H, N, G) {
        for (var ye = N.key, fe = H; fe !== null; ) {
          if (fe.key === ye)
            if (fe.tag === Fe && fe.stateNode.containerInfo === N.containerInfo && fe.stateNode.implementation === N.implementation) {
              a(O, fe.sibling);
              var Ve = u(fe, N.children || []);
              return Ve.return = O, Ve;
            } else {
              a(O, fe);
              break;
            }
          else
            t(O, fe);
          fe = fe.sibling;
        }
        var Ke = n0(N, O.mode, G);
        return Ke.return = O, Ke;
      }
      function St(O, H, N, G) {
        var ye = typeof N == "object" && N !== null && N.type === Wr && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case lr:
              return f(be(O, H, N, G));
            case ha:
              return f(Ot(O, H, N, G));
            case Qe:
              var fe = N._payload, Ve = N._init;
              return St(O, H, Ve(fe), G);
          }
          if (et(N))
            return F(O, H, N, G);
          if (vn(N))
            return ue(O, H, N, G);
          Yh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(ze(O, H, "" + N, G)) : (typeof N == "function" && $h(O), a(O, H));
      }
      return St;
    }
    var Of = fE(!0), dE = fE(!1);
    function bx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _x(e, t) {
      for (var a = e.child; a !== null; )
        v_(a, t), a = a.sibling;
    }
    var ug = _o(null), og;
    og = {};
    var Wh = null, Nf = null, sg = null, Qh = !1;
    function Gh() {
      Wh = null, Nf = null, sg = null, Qh = !1;
    }
    function pE() {
      Qh = !0;
    }
    function vE() {
      Qh = !1;
    }
    function hE(e, t, a) {
      ua(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      la(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kx(e, t, a) {
      Dx(e, t, a);
    }
    function Dx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = tr(a), v = Nu($t, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = tt(w.lanes, a)), fg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === un) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = tt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = tt(A.lanes, a)), fg(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Lf(e, t) {
      Wh = e, Nf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function rr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (Wh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Wh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Ks = null;
    function dg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function Ox() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Nx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Lx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Va(e, t) {
      return qh(e, t);
    }
    var Mx = qh;
    function qh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (En | Cn)) !== ke && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (En | Cn)) !== ke && dR(e), i = u, u = u.return;
      if (i.tag === X) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Kh = 2, pg = 3, Xh = !1, vg, Zh;
    vg = !1, Zh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), N1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mx(e, a);
      } else
        return Lx(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, bs(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function zx(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ze) {
                Yt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Yt(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~xr | dt;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & Ze) {
                Yt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Yt(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : Xe({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = P, F = null, ue = null, ze = null, be = s;
        do {
          var Ot = be.lane, St = be.eventTime;
          if (hu(i, Ot)) {
            if (ze !== null) {
              var H = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              ze = ze.next = H;
            }
            z = zx(e, u, be, z, t, a);
            var N = be.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Fn) {
              e.flags |= nn;
              var G = u.effects;
              G === null ? u.effects = [be] : G.push(be);
            }
          } else {
            var O = {
              eventTime: St,
              lane: Ot,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            ze === null ? (ue = ze = O, F = z) : ze = ze.next = O, A = tt(A, Ot);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, fe = ye.next;
            ye.next = null, be = fe, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (F = z), u.baseState = F, u.firstBaseUpdate = ue, u.lastBaseUpdate = ze;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var Ke = Ve;
          do
            A = tt(A, Ke.lane), Ke = Ke.next;
          while (Ke !== Ve);
        } else s === null && (u.shared.lanes = P);
        Yp(A), e.lanes = A, e.memoizedState = z;
      }
      Zh = null;
    }
    function Ux(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Ux(f, a));
        }
    }
    var gp = {}, Lo = _o(gp), Sp = _o(gp), nm = _o(gp);
    function rm(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RE() {
      var e = rm(nm.current);
      return e;
    }
    function yg(e, t) {
      ua(nm, t, e), ua(Sp, e, e), ua(Lo, gp, e);
      var a = ZT(t);
      la(Lo, e), ua(Lo, a, e);
    }
    function Mf(e) {
      la(Lo, e), la(Sp, e), la(nm, e);
    }
    function gg() {
      var e = rm(Lo.current);
      return e;
    }
    function TE(e) {
      rm(nm.current);
      var t = rm(Lo.current), a = JT(t, e.type);
      t !== a && (ua(Sp, e, e), ua(Lo, a, e));
    }
    function Sg(e) {
      Sp.current === e && (la(Lo, e), la(Sp, e));
    }
    var Ax = 0, wE = 1, xE = 1, Ep = 2, Zi = _o(Ax);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function jx(e, t) {
      return e | t;
    }
    function Mo(e, t) {
      ua(Zi, t, e);
    }
    function Uf(e) {
      la(Zi, e);
    }
    function Fx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === Wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & dt) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), dr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Hx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = rt.ReactCurrentDispatcher, Cp = rt.ReactCurrentBatchConfig, wg, Af;
    wg = /* @__PURE__ */ new Set();
    var Xs = P, Zt = null, vr = null, hr = null, im = !1, Rp = !1, Tp = 0, Px = 0, Vx = 25, V = null, bi = null, zo = -1, xg = !1;
    function Vt() {
      {
        var e = V;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        bi !== null && (zo++, bi[zo] !== e && Bx(e));
      }
    }
    function jf(e) {
      e != null && !et(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Bx(e) {
      {
        var t = Ye(Zt);
        if (!wg.has(t) && (wg.add(t), bi !== null)) {
          for (var a = "", i = 30, u = 0; u <= zo; u++) {
            for (var s = bi[u], f = u === zo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, Zt = t, bi = e !== null ? e._debugHookTypes : null, zo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? me.current = QE : bi !== null ? me.current = WE : me.current = $E;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Vx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, vr = null, hr = null, t.updateQueue = null, zo = -1, me.current = GE, f = a(i, u);
        } while (Rp);
      }
      me.current = gm, t._debugHookTypes = bi;
      var v = vr !== null && vr.next !== null;
      if (Xs = P, Zt = null, vr = null, hr = null, V = null, bi = null, zo = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & vt) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function _E() {
      if (me.current = gm, im) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Xs = P, Zt = null, vr = null, hr = null, bi = null, zo = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Zt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function _i() {
      var e;
      if (vr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = Zt.memoizedState : a = hr.next, a !== null)
        hr = a, a = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? Zt.memoizedState = hr = i : hr = hr.next = i;
      }
      return hr;
    }
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kg(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Wx.bind(null, Zt, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = _i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = vr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, z = null, A = null, F = g;
        do {
          var ue = F.lane;
          if (hu(Xs, ue)) {
            if (A !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = be;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Ot = F.action;
              b = e(b, Ot);
            }
          } else {
            var ze = {
              lane: ue,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (z = A = ze, w = b) : A = A.next = ze, Zt.lanes = tt(Zt.lanes, ue), Yp(ue);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? w = b : A.next = z, ce(b, i.memoizedState) || Lp(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var St = u.interleaved;
      if (St !== null) {
        var O = St;
        do {
          var H = O.lane;
          Zt.lanes = tt(Zt.lanes, H), Yp(H), O = O.next;
        } while (O !== St);
      } else f === null && (u.lanes = P);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Og(e, t, a) {
      var i = _i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ce(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function gk(e, t, a) {
    }
    function Sk(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Zt, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          ce(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Xs) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(NE.bind(null, i, y, e), [e]), i.flags |= ma, wp(dr | Fr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Zt, u = _i(), s = t();
      if (!Af) {
        var f = t();
        ce(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !ce(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (bp(NE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        i.flags |= ma, wp(dr | Fr, OE.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Xs) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= wc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Zt.updateQueue;
      if (u === null)
        u = kE(), Zt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && ME(e);
    }
    function NE(e, t, a) {
      var i = function() {
        LE(t) && ME(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Va(e, He);
      t !== null && Sr(t, e, He, $t);
    }
    function um(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Qx.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return Dg(_g);
    }
    function Mg(e) {
      return Og(_g);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = kE(), Zt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = _i();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      Zt.flags |= e, u.memoizedState = wp(dr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = _i(), s = i === void 0 ? null : i, f = void 0;
      if (vr !== null) {
        var p = vr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Zt.flags |= e, u.memoizedState = wp(dr | t, a, f, s);
    }
    function cm(e, t) {
      return (Zt.mode & Xt) !== De ? xp(yl | ma | fd, Fr, e, t) : xp(ma | fd, Fr, e, t);
    }
    function bp(e, t) {
      return sm(ma, Fr, e, t);
    }
    function Ug(e, t) {
      return xp(mt, jl, e, t);
    }
    function fm(e, t) {
      return sm(mt, jl, e, t);
    }
    function Ag(e, t) {
      var a = mt;
      return a |= ml, (Zt.mode & Xt) !== De && (a |= Mr), xp(a, pr, e, t);
    }
    function dm(e, t) {
      return sm(mt, pr, e, t);
    }
    function zE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = mt;
      return u |= ml, (Zt.mode & Xt) !== De && (u |= Mr), xp(u, pr, zE.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(mt, pr, zE.bind(null, t, e), i);
    }
    function Ix(e, t) {
    }
    var vm = Ix;
    function Fg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = _i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = _i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = _i(), a = vr, i = a.memoizedState;
      return jE(t, i, e);
    }
    function AE(e) {
      var t = _i();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!ce(a, t)) {
          var u = Ld();
          Zt.lanes = tt(Zt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Yx(e, t, a) {
      var i = ga();
      Yn(_s(i, Aa)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ct("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = Yx.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Lg(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Mg(), t = e[0], a = _i(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function $x() {
      return PE;
    }
    function Bg() {
      var e = Fl(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = ox();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Px++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = _i(), t = e.memoizedState;
      return t;
    }
    function Wx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          Sr(s, e, i, f), IE(s, t, i);
        }
      }
      YE(e, i);
    }
    function Qx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = Ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ce(y, v)) {
                Nx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var b = wa();
          Sr(g, e, i, b), IE(g, t, i);
        }
      }
      YE(e, i);
    }
    function VE(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function BE(e, t) {
      Rp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, bs(e, u);
      }
    }
    function YE(e, t, a) {
      ms(e, t);
    }
    var gm = {
      readContext: rr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: Ee
    }, $E = null, WE = null, QE = null, GE = null, Hl = null, Ji = null, Sm = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), jf(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), jf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), jf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), jf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), jf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), jf(t);
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Bg();
        },
        unstable_isNewReconciler: Ee
      }, WE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), zg(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Bg();
        },
        unstable_isNewReconciler: Ee
      }, QE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = me.current;
          me.current = Ji;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = me.current;
          me.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), om();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = me.current;
          me.current = Ji;
          try {
            return Lg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), ym();
        },
        unstable_isNewReconciler: Ee
      }, GE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = me.current;
          me.current = Sm;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = me.current;
          me.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), om();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = me.current;
          me.current = Sm;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), ym();
        },
        unstable_isNewReconciler: Ee
      }, Hl = {
        readContext: function(e) {
          return Ig(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), Vt(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), Vt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), Vt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), Vt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), Vt();
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), Vt();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), Vt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Ge(), Vt();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), Vt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), Vt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Ge(), Vt(), Bg();
        },
        unstable_isNewReconciler: Ee
      }, Ji = {
        readContext: function(e) {
          return Ig(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), ne(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), ne();
          var a = me.current;
          me.current = Ji;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), ne();
          var i = me.current;
          me.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), ne(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), ne();
          var t = me.current;
          me.current = Ji;
          try {
            return Lg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), ne(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), ne(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), ne(), ym();
        },
        unstable_isNewReconciler: Ee
      }, Sm = {
        readContext: function(e) {
          return Ig(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), ne(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), ne(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), ne();
          var a = me.current;
          me.current = Ji;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), ne();
          var i = me.current;
          me.current = Ji;
          try {
            return Og(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), ne(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), ne();
          var t = me.current;
          me.current = Ji;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), ne(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), ne(), ym();
        },
        unstable_isNewReconciler: Ee
      };
    }
    var Uo = k.unstable_now, qE = 0, Em = -1, _p = -1, Cm = -1, Yg = !1, Rm = !1;
    function KE() {
      return Yg;
    }
    function Gx() {
      Rm = !0;
    }
    function qx() {
      Yg = !1, Rm = !1;
    }
    function Kx() {
      Yg = Rm, Rm = !1;
    }
    function XE() {
      return qE;
    }
    function ZE() {
      qE = Uo();
    }
    function $g(e) {
      _p = Uo(), e.actualStartTime < 0 && (e.actualStartTime = Uo());
    }
    function JE(e) {
      _p = -1;
    }
    function Tm(e, t) {
      if (_p >= 0) {
        var a = Uo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Pl(e) {
      if (Em >= 0) {
        var t = Uo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Nt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Wg(e) {
      if (Cm >= 0) {
        var t = Uo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Nt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vl() {
      Em = Uo();
    }
    function Qg() {
      Cm = Uo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function el(e, t) {
      if (e && e.defaultProps) {
        var a = Xe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Kg, Xg, Zg, Jg, eS, eC, wm, tS, nS, rS, kp;
    {
      Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ze) {
          Yt(!0);
          try {
            s = a(i, u);
          } finally {
            Yt(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? u : Xe({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Nu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Sr(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Nu(u, s);
        f.tag = gE, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Sr(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = wa(), u = Ho(a), s = Nu(i, u);
        s.tag = Kh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Sr(f, a, u, i), Jh(f, a, u)), bd(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ze) {
            Yt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Yt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, i) || !Le(u, s) : !0;
    }
    function Xx(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === De && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === De && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || et(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, ss(t, e), t._reactInternalInstance = qg;
    }
    function aC(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = rr(f);
      else {
        u = xf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? bf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & Ze) {
        Yt(!0);
        try {
          g = new t(a, s);
        } finally {
          Yt(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = kt(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var ue = kt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(ue) || (Jg.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, ze, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function Zx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      Xx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = rr(s);
      else {
        var f = xf(e, t, !0);
        u.context = bf(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ze && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Zx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = mt;
        y |= ml, (e.mode & Xt) !== De && (y |= Mr), e.flags |= y;
      }
    }
    function Jx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = rr(p);
      else {
        var y = xf(e, t, !0);
        v = bf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var w = e.memoizedState, z = u.state = w;
      if (em(e, a, u, i), z = e.memoizedState, s === a && w === z && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var A = mt;
          A |= ml, (e.mode & Xt) !== De && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), z = e.memoizedState);
      var F = tm() || nC(e, t, s, a, w, z, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = mt;
          ue |= ml, (e.mode & Xt) !== De && (ue |= Mr), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = mt;
          ze |= ml, (e.mode & Xt) !== De && (ze |= Mr), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, F;
    }
    function eb(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : el(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ii;
      if (typeof g == "object" && g !== null)
        b = rr(g);
      else {
        var w = xf(t, a, !0);
        b = bf(t, w);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iC(t, s, i, b), EE();
      var F = t.memoizedState, ue = s.state = F;
      if (em(t, i, s, u), ue = t.memoizedState, f === v && F === ue && !Uh() && !tm() && !ae)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), !1;
      typeof z == "function" && (aS(t, a, z, i), ue = t.memoizedState);
      var ze = tm() || nC(t, a, p, i, F, ue, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ae;
      return ze ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, b)), typeof s.componentDidUpdate == "function" && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= mt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = b, ze;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: _t(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function tb(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = tb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === X)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var nb = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Nu($t, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        G1(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Nu($t, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), oS(e, t), typeof u != "function" && W1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, He) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new nb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = q1.bind(null, e, t, a);
        br && $p(e, a), t.then(s, s);
      }
    }
    function rb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ab(e, t) {
      var a = e.tag;
      if ((e.mode & vt) === De && (a === _e || a === Ae || a === pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Te && Fx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & vt) === De) {
        if (e === t)
          e.flags |= xr;
        else {
          if (e.flags |= dt, a.flags |= ei, a.flags &= -52805, a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = st;
            else {
              var f = Nu($t, He);
              f.tag = Kh, No(a, f, He);
            }
          }
          a.lanes = tt(a.lanes, He);
        }
        return e;
      }
      return e.flags |= xr, e.lanes = u, e;
    }
    function ib(e, t, a, i, u) {
      if (a.flags |= lu, br && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ab(a), jr() && a.mode & vt && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~hn, sC(f, t, a, e, u), f.mode & vt && uC(e, s, u), rb(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & vt) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & xr) === ke && (v.flags |= hn), sC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), F1(i);
      var y = t;
      do {
        switch (y.tag) {
          case X: {
            var g = i;
            y.flags |= xr;
            var b = tr(u);
            y.lanes = tt(y.lanes, b);
            var w = lC(y, g, b);
            mg(y, w);
            return;
          }
          case de:
            var z = i, A = y.type, F = y.stateNode;
            if ((y.flags & dt) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= xr;
              var ue = tr(u);
              y.lanes = tt(y.lanes, ue);
              var ze = sS(y, z, ue);
              mg(y, ze);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function lb() {
      return null;
    }
    var Dp = rt.ReactCurrentOwner, tl = !1, cS, Op, fS, dS, pS, Js, vS, xm, Np;
    cS = {}, Op = {}, fS = {}, dS = {}, pS = {}, Js = !1, vS = {}, xm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function ub(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Lf(t, u), Ua(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & Ze) {
          Yt(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            Yt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !tl ? (bE(e, t, u), Lu(e, t, u)) : (jr() && y && qy(t), t.flags |= Yi, Ra(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (d_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = pe, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && qi(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && qi(
          b,
          i,
          // Resolved props
          "prop",
          kt(g)
        );
      }
      var w = e.child, z = TS(e, u);
      if (!z) {
        var A = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Le, F(A, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Yi;
      var ue = ac(w, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Qe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && qi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Le(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (tl = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & ei) !== ke && (tl = !0);
          else return t.lanes = e.lanes, Lu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & vt) === De) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (ra(a, ta)) {
          var b = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ta;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = tt(s.baseLanes, a), t.memoizedState = null) : z = a, Fm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function ob(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function sb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function cb(e, t, a) {
      {
        t.flags |= mt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= An, t.flags |= fs);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = bf(t, p);
      }
      var v, y;
      Lf(t, u), Ua(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & Ze) {
          Yt(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            Yt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !tl ? (bE(e, t, u), Lu(e, t, u)) : (jr() && y && qy(t), t.flags |= Yi, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (__(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= dt, t.flags |= xr;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = tt(t.lanes, g);
            var b = sS(t, Zs(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && qi(
            w,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var z;
      Al(a) ? (z = !0, jh(t)) : z = !1, Lf(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), aC(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = Jx(t, a, i, u) : F = eb(e, t, a, i, u);
      var ue = mS(e, t, a, F, z, u);
      {
        var ze = t.stateNode;
        F && ze.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Js = !0);
      }
      return ue;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & dt) !== ke;
      if (!i && !f)
        return u && K0(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        Ua(t);
        {
          if (Da(!0), v = p.render(), t.mode & Ze) {
            Yt(!0);
            try {
              p.render();
            } finally {
              Yt(!1);
            }
          }
          Da(!1);
        }
        Cl();
      }
      return t.flags |= Yi, e !== null && f ? ub(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function fb(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & hn) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, b);
        } else {
          vx(t);
          var w = dE(t, null, p, a);
          t.child = w;
          for (var z = w; z; )
            z.flags = z.flags & ~En | Cn, z = z.sibling;
        }
      } else {
        if (Df(), p === s)
          return Lu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return Df(), tg(u), t.flags |= hn, Ra(e, t, a, i), t.child;
    }
    function db(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= It), vC(e, t), Ra(e, t, f, a), t.child;
    }
    function pb(e, t) {
      return e === null && eg(t), null;
    }
    function vb(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = p_(v), g = el(v, u), b;
      switch (y) {
        case _e:
          return yS(t, v), t.type = v = Qf(v), b = hS(null, t, v, g, i), b;
        case de:
          return t.type = v = QS(v), b = hC(null, t, v, g, i), b;
        case Ae:
          return t.type = v = GS(v), b = cC(null, t, v, g, i), b;
        case ee: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && qi(
              w,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return b = fC(
            null,
            t,
            v,
            el(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Qe && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function hb(e, t, a, i, u) {
      _m(e, t), t.tag = de;
      var s;
      return Al(a) ? (s = !0, jh(t)) : s = !1, Lf(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function mb(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = bf(t, f);
      }
      Lf(t, i);
      var p, v;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Ze && Xi.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (Cl(), t.flags |= Yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = kt(a) || "Unknown";
          Op[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Op[b] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Al(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = _e, t.mode & Ze) {
          Yt(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            Yt(!1);
          }
        }
        return jr() && v && qy(t), Ra(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: lb(),
        transitions: null
      };
    }
    function yb(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function gb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Ep);
    }
    function Sb(e, t) {
      return xs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= dt);
      var u = Zi.current, s = !1, f = (t.flags & dt) !== ke;
      if (f || gb(u, e) ? (s = !0, t.flags &= ~dt) : (e === null || e.memoizedState !== null) && (u = jx(u, xE)), u = zf(u), Mo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return wb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Eb(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return xb(e, t, f, i, A, z, a);
        }
        if (s) {
          var F = i.fallback, ue = i.children, ze = Rb(e, t, ue, F, a), be = t.child, Ot = e.child.memoizedState;
          return be.memoizedState = Ot === null ? SS(a) : yb(Ot, a), be.childLanes = Sb(e, a), t.memoizedState = gS, ze;
        } else {
          var St = i.children, O = Cb(e, t, St, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Eb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & vt) === De && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & wt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vo(a, u, i, null)) : (p = CS(f, u), v = Vo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return SR(e, t, P, null);
    }
    function SC(e, t) {
      return ac(e, t);
    }
    function Cb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & vt) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Rb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & vt) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & wt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & jn;
      var b;
      return p !== null ? b = ac(p, i) : (b = Vo(i, s, u, null), b.flags |= En), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= En, t.memoizedState = null, f;
    }
    function Tb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Vo(i, s, u, null);
      return v.flags |= En, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & vt) !== De && Of(t, e.child, null, u), v;
    }
    function wb(e, t, a) {
      return (e.mode & vt) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : Hy(t) ? e.lanes = er : e.lanes = ta, null;
    }
    function xb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & hn) {
          t.flags &= ~hn;
          var O = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= dt, null;
          var H = i.children, N = i.fallback, G = Tb(e, t, H, N, f), ye = t.child;
          return ye.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (dx(), (t.mode & vt) === De)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = Dw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(b, p, y);
          return bm(e, t, f, w);
        }
        var z = ra(f, e.childLanes);
        if (tl || z) {
          var A = jm();
          if (A !== null) {
            var F = Jc(A, f);
            if (F !== Fn && F !== s.retryLane) {
              s.retryLane = F;
              var ue = $t;
              Va(e, F), Sr(A, e, F, ue);
            }
          }
          BS();
          var ze = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, ze);
        } else if (B0(u)) {
          t.flags |= dt, t.child = e.child;
          var be = K1.bind(null, e);
          return Ow(u, be), null;
        } else {
          hx(t, u, s.treeContext);
          var Ot = i.children, St = ES(t, Ot);
          return St.flags |= Cn, St;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), fg(e.return, t, a);
    }
    function bb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === Wt)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _b(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Db(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = et(e), i = !a && typeof vn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ob(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (et(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = vn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      kb(u), Db(s, u), Ob(f, u), Ra(e, t, f, a);
      var p = Zi.current, v = Eg(p, Ep);
      if (v)
        p = Cg(p, Ep), t.flags |= dt;
      else {
        var y = e !== null && (e.flags & dt) !== ke;
        y && bb(t, t.child, a), p = zf(p);
      }
      if (Mo(t, p), (t.mode & vt) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = _b(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && am(A) === null) {
                t.child = z;
                break;
              }
              var F = z.sibling;
              z.sibling = w, w = z, z = F;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Nb(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var TC = !1;
    function Lb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && qi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ce(y, p)) {
          if (f.children === s.children && !Uh())
            return Lu(e, t, a);
        } else
          kx(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var wC = !1;
    function Mb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = rr(i);
      Ua(t);
      var p;
      return Dp.current = t, Da(!0), p = s(f), Da(!1), Cl(), t.flags |= Yi, Ra(e, t, p, a), t.child;
    }
    function Lp() {
      tl = !0;
    }
    function _m(e, t) {
      (t.mode & vt) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), Yp(t.lanes), ra(a, t.childLanes) ? (bx(e, t), t.child) : null;
    }
    function zb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= En, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function Ub(e, t, a) {
      switch (t.tag) {
        case X:
          mC(t), t.stateNode, Df();
          break;
        case le:
          TE(t);
          break;
        case de: {
          var i = t.type;
          Al(i) && jh(t);
          break;
        }
        case Fe:
          yg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case Nt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= mt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mo(t, zf(Zi.current)), t.flags |= dt, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return gC(e, t, a);
            Mo(t, zf(Zi.current));
            var b = Lu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Mo(t, zf(Zi.current));
          break;
        }
        case Wt: {
          var w = (e.flags & dt) !== ke, z = ra(a, t.childLanes);
          if (w) {
            if (z)
              return RC(e, t, a);
            t.flags |= dt;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Mo(t, Zi.current), z)
            break;
          return null;
        }
        case je:
        case Ft:
          return t.lanes = P, pC(e, t, a);
      }
      return Lu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return zb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          tl = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & dt) === ke)
            return tl = !1, Ub(e, t, a);
          (e.flags & ei) !== ke ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, jr() && lx(t)) {
        var f = t.index, p = ux();
        J0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Be:
          return mb(e, t, t.type, a);
        case Je: {
          var v = t.elementType;
          return vb(e, t, v, a);
        }
        case _e: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : el(y, g);
          return hS(e, t, y, b, a);
        }
        case de: {
          var w = t.type, z = t.pendingProps, A = t.elementType === w ? z : el(w, z);
          return hC(e, t, w, A, a);
        }
        case X:
          return fb(e, t, a);
        case le:
          return db(e, t, a);
        case xe:
          return pb(e, t);
        case Te:
          return gC(e, t, a);
        case Fe:
          return Nb(e, t, a);
        case Ae: {
          var F = t.type, ue = t.pendingProps, ze = t.elementType === F ? ue : el(F, ue);
          return cC(e, t, F, ze, a);
        }
        case ot:
          return ob(e, t, a);
        case Tn:
          return sb(e, t, a);
        case Nt:
          return cb(e, t, a);
        case it:
          return Lb(e, t, a);
        case en:
          return Mb(e, t, a);
        case ee: {
          var be = t.type, Ot = t.pendingProps, St = el(be, Ot);
          if (t.type !== t.elementType) {
            var O = be.propTypes;
            O && qi(
              O,
              St,
              // Resolved for outer only
              "prop",
              kt(be)
            );
          }
          return St = el(be.type, St), fC(e, t, be, St, a);
        }
        case pe:
          return dC(e, t, t.type, t.pendingProps, a);
        case st: {
          var H = t.type, N = t.pendingProps, G = t.elementType === H ? N : el(H, N);
          return hb(e, t, H, G, a);
        }
        case Wt:
          return RC(e, t, a);
        case Rt:
          break;
        case je:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= mt;
    }
    function bC(e) {
      e.flags |= An, e.flags |= fs;
    }
    var _C, wS, kC, DC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === xe)
          rw(e, u.stateNode);
        else if (u.tag !== Fe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = iw(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Mp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = ke;
      if (t) {
        if ((e.mode & wt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = tt(a, tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & wt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ab(e, t, a) {
      if (Ex() && (t.mode & vt) !== De && (t.flags & dt) === ke)
        return lE(t), Df(), t.flags |= hn | lu | xr, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (gx(t), Hr(t), (t.mode & wt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & dt) === ke && (t.memoizedState = null), t.flags |= mt, Hr(t), (t.mode & wt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Be:
        case Je:
        case pe:
        case _e:
        case Ae:
        case ot:
        case Tn:
        case Nt:
        case en:
        case ee:
          return Hr(t), null;
        case de: {
          var u = t.type;
          return Al(u) && Ah(t), Hr(t), null;
        }
        case X: {
          var s = t.stateNode;
          if (Mf(t), Wy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & hn) !== ke) && (t.flags |= za, uE());
            }
          }
          return wS(e, t), Hr(t), null;
        }
        case le: {
          Sg(t);
          var v = RE(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = gg(), b = Bh(t);
            if (b)
              mx(t, v, g) && Pf(t);
            else {
              var w = nw(y, i, v, g, t);
              _C(w, t, !1, !1), t.stateNode = w, aw(w, y, i, v) && Pf(t);
            }
            t.ref !== null && bC(t);
          }
          return Hr(t), null;
        }
        case xe: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            DC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = RE(), ue = gg(), ze = Bh(t);
            ze ? yx(t) && Pf(t) : t.stateNode = lw(z, F, ue, t);
          }
          return Hr(t), null;
        }
        case Te: {
          Uf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = Ab(e, t, be);
            if (!Ot)
              return t.flags & xr ? t : null;
          }
          if ((t.flags & dt) !== ke)
            return t.lanes = a, (t.mode & wt) !== De && Gg(t), t;
          var St = be !== null, O = e !== null && e.memoizedState !== null;
          if (St !== O && St) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & vt) !== De) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || Eg(Zi.current, xE) ? j1() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= mt), Hr(t), (t.mode & wt) !== De && St) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Mf(t), wS(e, t), e === null && Jw(t.stateNode.containerInfo), Hr(t), null;
        case it:
          var fe = t.type._context;
          return cg(fe, t), Hr(t), null;
        case st: {
          var Ve = t.type;
          return Al(Ve) && Ah(t), Hr(t), null;
        }
        case Wt: {
          Uf(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return Hr(t), null;
          var Jt = (t.flags & dt) !== ke, Mt = Ke.rendering;
          if (Mt === null)
            if (Jt)
              Mp(Ke, !1);
            else {
              var Qn = H1() && (e === null || (e.flags & dt) === ke);
              if (!Qn)
                for (var zt = t.child; zt !== null; ) {
                  var Pn = am(zt);
                  if (Pn !== null) {
                    Jt = !0, t.flags |= dt, Mp(Ke, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= mt), t.subtreeFlags = ke, _x(t, a), Mo(t, Cg(Zi.current, Ep)), t.child;
                  }
                  zt = zt.sibling;
                }
              Ke.tail !== null && bn() > XC() && (t.flags |= dt, Jt = !0, Mp(Ke, !1), t.lanes = Pv);
            }
          else {
            if (!Jt) {
              var Yr = am(Mt);
              if (Yr !== null) {
                t.flags |= dt, Jt = !0;
                var ui = Yr.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= mt), Mp(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !Mt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - Ke.renderingStartTime > XC() && a !== ta && (t.flags |= dt, Jt = !0, Mp(Ke, !1), t.lanes = Pv);
            }
            if (Ke.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var xa = Ke.last;
              xa !== null ? xa.sibling = Mt : t.child = Mt, Ke.last = Mt;
            }
          }
          if (Ke.tail !== null) {
            var ba = Ke.tail;
            Ke.rendering = ba, Ke.tail = ba.sibling, Ke.renderingStartTime = bn(), ba.sibling = null;
            var ca = Zi.current;
            return Jt ? ca = Cg(ca, Ep) : ca = zf(ca), Mo(t, ca), ba;
          }
          return Hr(t), null;
        }
        case Rt:
          break;
        case je:
        case Ft: {
          VS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= yi);
          }
          return !Gf || (t.mode & vt) === De ? Hr(t) : ra(Il, ta) && (Hr(t), t.subtreeFlags & (En | mt) && (t.flags |= yi)), null;
        }
        case gt:
          return null;
        case ct:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jb(e, t, a) {
      switch (Ky(t), t.tag) {
        case de: {
          var i = t.type;
          Al(i) && Ah(t);
          var u = t.flags;
          return u & xr ? (t.flags = u & ~xr | dt, (t.mode & wt) !== De && Gg(t), t) : null;
        }
        case X: {
          t.stateNode, Mf(t), Wy(t), Tg();
          var s = t.flags;
          return (s & xr) !== ke && (s & dt) === ke ? (t.flags = s & ~xr | dt, t) : null;
        }
        case le:
          return Sg(t), null;
        case Te: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & xr ? (t.flags = p & ~xr | dt, (t.mode & wt) !== De && Gg(t), t) : null;
        }
        case Wt:
          return Uf(t), null;
        case Fe:
          return Mf(t), null;
        case it:
          var v = t.type._context;
          return cg(v, t), null;
        case je:
        case Ft:
          return VS(t), null;
        case gt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Ky(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case X: {
          t.stateNode, Mf(t), Wy(t), Tg();
          break;
        }
        case le: {
          Sg(t);
          break;
        }
        case Fe:
          Mf(t);
          break;
        case Te:
          Uf(t);
          break;
        case Wt:
          Uf(t);
          break;
        case it:
          var u = t.type._context;
          cg(u, t);
          break;
        case je:
        case Ft:
          VS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var km = !1, Pr = !1, Fb = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Vf = null, Bf = null;
    function Hb(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var Pb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & wt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Ao(pr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Pb(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function Vb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (We && ft && e.mode & wt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var UC = !1;
    function Bb(e, t) {
      ew(e.containerInfo), Re = t, Ib();
      var a = UC;
      return UC = !1, a;
    }
    function Ib() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & gl) !== ke && t !== null ? (t.return = e, Re = t) : Yb();
      }
    }
    function Yb() {
      for (; Re !== null; ) {
        var e = Re;
        Gt(e);
        try {
          $b(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        Sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function $b(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== ke) {
        switch (Gt(e), e.tag) {
          case _e:
          case Ae:
          case pe:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : el(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case X: {
            {
              var v = e.stateNode;
              xw(v.containerInfo);
            }
            break;
          }
          case le:
          case xe:
          case Fe:
          case st:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Sn();
      }
    }
    function nl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ba ? Rl(t) : (e & pr) !== Ba && Rd(t), (e & jl) !== Ba && Wp(!0), Dm(t, a, p), (e & jl) !== Ba && Wp(!1), (e & Fr) !== Ba ? bc() : (e & pr) !== Ba && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ao(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Ba ? Fv(t) : (e & pr) !== Ba && Hv(t);
            var f = s.create;
            (e & jl) !== Ba && Wp(!0), s.destroy = f(), (e & jl) !== Ba && Wp(!1), (e & Fr) !== Ba ? Wi() : (e & pr) !== Ba && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & pr) !== ke ? v = "useLayoutEffect" : (s.tag & jl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Wb(e, t) {
      if ((t.flags & mt) !== ke)
        switch (t.tag) {
          case Nt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            KE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case X:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Nt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Qb(e, t, a, i) {
      if ((a.flags & Sl) !== ke)
        switch (a.tag) {
          case _e:
          case Ae:
          case pe: {
            if (!Pr)
              if (a.mode & wt)
                try {
                  Vl(), Ao(pr | dr, a);
                } finally {
                  Pl(a);
                }
              else
                Ao(pr | dr, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & mt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & wt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : el(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & wt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), CE(a, p, u));
            break;
          }
          case X: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case de:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & mt) {
              var b = a.type, w = a.memoizedProps;
              fw(g, b, w);
            }
            break;
          }
          case xe:
            break;
          case Fe:
            break;
          case Nt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, ue = a.stateNode.effectDuration, ze = XE(), be = t === null ? "mount" : "update";
              KE() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, ue, ze), Y1(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case X:
                      var St = Ot.stateNode;
                      St.effectDuration += ue;
                      break e;
                    case Nt:
                      var O = Ot.stateNode;
                      O.effectDuration += ue;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case Te: {
            t1(e, a);
            break;
          }
          case Wt:
          case st:
          case Rt:
          case je:
          case Ft:
          case ct:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & An && AC(a);
    }
    function Gb(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          if (e.mode & wt)
            try {
              Vl(), MC(e, e.return);
            } finally {
              Pl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vb(e, e.return, t), zC(e, e.return);
          break;
        }
        case le: {
          zC(e, e.return);
          break;
        }
      }
    }
    function qb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Cw(u) : Tw(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Rw(s) : ww(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === Ft) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & wt)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Kb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && nx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xb(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === le || e.tag === X || e.tag === Fe;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== xe && t.tag !== un; ) {
          if (t.flags & En || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function Zb(e) {
      var t = Xb(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & It && (V0(a), t.flags &= ~It);
          var i = HC(e);
          _S(e, i, a);
          break;
        }
        case X:
        case Fe: {
          var u = t.stateNode.containerInfo, s = HC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === le || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? yw(a, s, t) : hw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === le || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? mw(a, s, t) : vw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, rl = !1;
    function Jb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, rl = !1;
              break e;
            }
            case X: {
              Vr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
            case Fe: {
              Vr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Vr = null, rl = !1;
      }
      Kb(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (lo(a), a.tag) {
        case le:
          Pr || If(a, t);
        case xe: {
          {
            var i = Vr, u = rl;
            Vr = null, jo(e, t, a), Vr = i, rl = u, Vr !== null && (rl ? Sw(Vr, a.stateNode) : gw(Vr, a.stateNode));
          }
          return;
        }
        case un: {
          Vr !== null && (rl ? Ew(Vr, a.stateNode) : Fy(Vr, a.stateNode));
          return;
        }
        case Fe: {
          {
            var s = Vr, f = rl;
            Vr = a.stateNode.containerInfo, rl = !0, jo(e, t, a), Vr = s, rl = f;
          }
          return;
        }
        case _e:
        case Ae:
        case ee:
        case pe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, z = b.tag;
                  w !== void 0 && ((z & jl) !== Ba ? Dm(a, t, w) : (z & pr) !== Ba && (Rd(a), a.mode & wt ? (Vl(), Dm(a, t, w), Pl(a)) : Dm(a, t, w), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case de: {
          if (!Pr) {
            If(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && xS(a, t, A);
          }
          jo(e, t, a);
          return;
        }
        case Rt: {
          jo(e, t, a);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            a.mode & vt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, jo(e, t, a), Pr = F;
          } else
            jo(e, t, a);
          break;
        }
        default: {
          jo(e, t, a);
          return;
        }
      }
    }
    function e1(e) {
      e.memoizedState;
    }
    function t1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Hw(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fb()), t.forEach(function(i) {
          var u = X1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), br)
              if (Vf !== null && Bf !== null)
                $p(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function n1(e, t, a) {
      Vf = a, Bf = e, Gt(t), BC(t, e), Gt(t), Vf = null, Bf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Jb(e, t, s);
          } catch (v) {
            pn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Gt(p), BC(p, e), p = p.sibling;
      Gt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case _e:
        case Ae:
        case ee:
        case pe: {
          if (al(t, e), Bl(e), u & mt) {
            try {
              nl(jl | dr, e, e.return), Ao(jl | dr, e);
            } catch (Ve) {
              pn(e, e.return, Ve);
            }
            if (e.mode & wt) {
              try {
                Vl(), nl(pr | dr, e, e.return);
              } catch (Ve) {
                pn(e, e.return, Ve);
              }
              Pl(e);
            } else
              try {
                nl(pr | dr, e, e.return);
              } catch (Ve) {
                pn(e, e.return, Ve);
              }
          }
          return;
        }
        case de: {
          al(t, e), Bl(e), u & An && i !== null && If(i, i.return);
          return;
        }
        case le: {
          al(t, e), Bl(e), u & An && i !== null && If(i, i.return);
          {
            if (e.flags & It) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Ve) {
                pn(e, e.return, Ve);
              }
            }
            if (u & mt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    dw(f, g, y, v, p, e);
                  } catch (Ve) {
                    pn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (al(t, e), Bl(e), u & mt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
            try {
              pw(b, z, w);
            } catch (Ve) {
              pn(e, e.return, Ve);
            }
          }
          return;
        }
        case X: {
          if (al(t, e), Bl(e), u & mt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Fw(t.containerInfo);
              } catch (Ve) {
                pn(e, e.return, Ve);
              }
          }
          return;
        }
        case Fe: {
          al(t, e), Bl(e);
          return;
        }
        case Te: {
          al(t, e), Bl(e);
          var F = e.child;
          if (F.flags & yi) {
            var ue = F.stateNode, ze = F.memoizedState, be = ze !== null;
            if (ue.isHidden = be, be) {
              var Ot = F.alternate !== null && F.alternate.memoizedState !== null;
              Ot || A1();
            }
          }
          if (u & mt) {
            try {
              e1(e);
            } catch (Ve) {
              pn(e, e.return, Ve);
            }
            VC(e);
          }
          return;
        }
        case je: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & vt
          ) {
            var O = Pr;
            Pr = O || St, al(t, e), Pr = O;
          } else
            al(t, e);
          if (Bl(e), u & yi) {
            var H = e.stateNode, N = e.memoizedState, G = N !== null, ye = e;
            if (H.isHidden = G, G && !St && (ye.mode & vt) !== De) {
              Re = ye;
              for (var fe = ye.child; fe !== null; )
                Re = fe, a1(fe), fe = fe.sibling;
            }
            qb(ye, G);
          }
          return;
        }
        case Wt: {
          al(t, e), Bl(e), u & mt && VC(e);
          return;
        }
        case Rt:
          return;
        default: {
          al(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          Zb(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & Cn && (e.flags &= ~Cn);
    }
    function r1(e, t, a) {
      Vf = a, Bf = t, Re = e, IC(e, t, a), Vf = null, Bf = null;
    }
    function IC(e, t, a) {
      for (var i = (e.mode & vt) !== De; Re !== null; ) {
        var u = Re, s = u.child;
        if (u.tag === je && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, b = km, w = Pr;
            km = p, Pr = g, Pr && !w && (Re = u, i1(u));
            for (var z = s; z !== null; )
              Re = z, IC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Re = u, km = b, Pr = w, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sl) !== ke && s !== null ? (s.return = u, Re = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & Sl) !== ke) {
          var u = i.alternate;
          Gt(i);
          try {
            Qb(t, u, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          Sn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Re = s;
          return;
        }
        Re = i.return;
      }
    }
    function a1(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        switch (t.tag) {
          case _e:
          case Ae:
          case ee:
          case pe: {
            if (t.mode & wt)
              try {
                Vl(), nl(pr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              nl(pr, t, t.return);
            break;
          }
          case de: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case le: {
            If(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              YC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Re = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function i1(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Re = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Re !== null; ) {
        var t = Re;
        Gt(t);
        try {
          Gb(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (Sn(), t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function l1(e, t, a, i) {
      Re = t, u1(t, e, a, i);
    }
    function u1(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re, s = u.child;
        (u.subtreeFlags & ur) !== ke && s !== null ? (s.return = u, Re = s) : o1(e, t, a, i);
      }
    }
    function o1(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re;
        if ((u.flags & ma) !== ke) {
          Gt(u);
          try {
            s1(t, u, a, i);
          } catch (f) {
            pn(u, u.return, f);
          }
          Sn();
        }
        if (u === e) {
          Re = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Re = s;
          return;
        }
        Re = u.return;
      }
    }
    function s1(e, t, a, i) {
      switch (t.tag) {
        case _e:
        case Ae:
        case pe: {
          if (t.mode & wt) {
            Qg();
            try {
              Ao(Fr | dr, t);
            } finally {
              Wg(t);
            }
          } else
            Ao(Fr | dr, t);
          break;
        }
      }
    }
    function c1(e) {
      Re = e, f1();
    }
    function f1() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & Xr) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Re = u, v1(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & ur) !== ke && t !== null ? (t.return = e, Re = t) : d1();
      }
    }
    function d1() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & ma) !== ke && (Gt(e), p1(e), Sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function p1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          e.mode & wt ? (Qg(), nl(Fr | dr, e, e.return), Wg(e)) : nl(Fr | dr, e, e.return);
          break;
        }
      }
    }
    function v1(e, t) {
      for (; Re !== null; ) {
        var a = Re;
        Gt(a), m1(a, t), Sn();
        var i = a.child;
        i !== null ? (i.return = a, Re = i) : h1(e);
      }
    }
    function h1(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Re = null;
          return;
        }
        if (a !== null) {
          a.return = i, Re = a;
          return;
        }
        Re = i;
      }
    }
    function m1(e, t) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          e.mode & wt ? (Qg(), nl(Fr, e, t), Wg(e)) : nl(Fr, e, t);
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          try {
            Ao(pr | dr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          try {
            Ao(Fr | dr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe: {
          try {
            nl(pr | dr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function E1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case pe:
          try {
            nl(Fr | dr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var C1 = [];
    function R1() {
      C1.forEach(function(e) {
        return e();
      });
    }
    var T1 = rt.ReactCurrentActQueue;
    function w1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x1 = Math.ceil, DS = rt.ReactCurrentDispatcher, OS = rt.ReactCurrentOwner, Br = rt.ReactCurrentBatchConfig, il = rt.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Mu = 0, Up = 1, ec = 2, Om = 3, Ap = 4, GC = 5, NS = 6, Dt = mr, Ta = null, On = null, yr = P, Il = P, LS = _o(P), gr = Mu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ia = null, MS = 0, qC = 500, KC = 1 / 0, b1 = 500, zu = null;
    function Pp() {
      KC = bn() + b1;
    }
    function XC() {
      return KC;
    }
    var Mm = !1, zS = null, Yf = null, tc = !1, Fo = null, Vp = P, US = [], AS = null, _1 = 50, Bp = 0, jS = null, FS = !1, zm = !1, k1 = 50, $f = 0, Um = null, Ip = $t, Am = P, ZC = !1;
    function jm() {
      return Ta;
    }
    function wa() {
      return (Dt & (Ir | ki)) !== mr ? bn() : (Ip !== $t || (Ip = bn()), Ip);
    }
    function Ho(e) {
      var t = e.mode;
      if ((t & vt) === De)
        return He;
      if ((Dt & Ir) !== mr && yr !== P)
        return tr(yr);
      var a = Tx() !== Rx;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === Fn && (Am = Ld()), Am;
      }
      var u = ga();
      if (u !== Fn)
        return u;
      var s = uw();
      return s;
    }
    function D1(e) {
      var t = e.mode;
      return (t & vt) === De ? He : Wv();
    }
    function Sr(e, t, a, i) {
      J1(), ZC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), vo(e, a, i), (Dt & Ir) !== P && e === Ta ? n_(t) : (br && Gv(e, t, a), r_(t), e === Ta && ((Dt & Ir) === mr && (Fp = tt(Fp, a)), gr === Ap && Po(e, yr)), Ya(e, i), a === He && Dt === mr && (t.mode & vt) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !il.isBatchingLegacy && (Pp(), Z0()));
    }
    function O1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ya(e, a);
    }
    function N1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & Ir) !== mr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      Iv(e, t);
      var i = na(e, e === Ta ? yr : P);
      if (i === P) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(il.current !== null && a !== $S)) {
        a == null && s !== He && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === He)
        e.tag === ko ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), ix(tR.bind(null, e))) : X0(tR.bind(null, e)), il.current !== null ? il.current.push(Do) : sw(function() {
          (Dt & (Ir | ki)) === mr && Do();
        }), f = null;
      else {
        var p;
        switch (Kv(i)) {
          case aa:
            p = $i;
            break;
          case Aa:
            p = ds;
            break;
          case sr:
            p = ou;
            break;
          case tf:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = WS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (qx(), Ip = $t, Am = P, (Dt & (Ir | ki)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = na(e, e === Ta ? yr : P);
      if (u === P)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? V1(e, u) : Hm(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Qc(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw nc(e, P), Po(e, u), Ya(e, bn()), v;
        }
        if (f === NS)
          Po(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !M1(g)) {
            if (f = Hm(e, u), f === ec) {
              var b = Qc(e);
              b !== P && (u = b, f = HS(e, b));
            }
            if (f === Up) {
              var w = jp;
              throw nc(e, P), Po(e, u), Ya(e, bn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, L1(e, f, u);
        }
      }
      return Ya(e, bn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= hn, Zw(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== ec) {
        var s = Ia;
        Ia = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function L1(e, t, a) {
      switch (t) {
        case Mu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ia, zu);
          break;
        }
        case Om: {
          if (Po(e, a), Gc(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = MS + qC - bn();
            if (i > 10) {
              var u = na(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Ia, zu), i);
              break;
            }
          }
          rc(e, Ia, zu);
          break;
        }
        case Ap: {
          if (Po(e, a), uy(a))
            break;
          if (!hR()) {
            var f = kd(e, a), p = f, v = bn() - p, y = Z1(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Ia, zu), y);
              break;
            }
          }
          rc(e, Ia, zu);
          break;
        }
        case GC: {
          rc(e, Ia, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function M1(e) {
      for (var t = e; ; ) {
        if (t.flags & wc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & wc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Po(e, t) {
      t = xs(t, Lm), t = xs(t, Fp), zd(e, t);
    }
    function tR(e) {
      if (Kx(), (Dt & (Ir | ki)) !== mr)
        throw new Error("Should not already be working.");
      Au();
      var t = na(e, P);
      if (!ra(t, He))
        return Ya(e, bn()), null;
      var a = Hm(e, t);
      if (e.tag !== ko && a === ec) {
        var i = Qc(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw nc(e, P), Po(e, t), Ya(e, bn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ia, zu), Ya(e, bn()), null;
    }
    function z1(e, t) {
      t !== P && (bs(e, tt(t, He)), Ya(e, bn()), (Dt & (Ir | ki)) === mr && (Pp(), Do()));
    }
    function PS(e, t) {
      var a = Dt;
      Dt |= QC;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Pp(), Z0());
      }
    }
    function U1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, Yn(aa), e(t, a, i, u);
      } finally {
        Yn(s), Br.transition = f, Dt === mr && Pp();
      }
    }
    function Uu(e) {
      Fo !== null && Fo.tag === ko && (Dt & (Ir | ki)) === mr && Au();
      var t = Dt;
      Dt |= QC;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, Yn(aa), e ? e() : void 0;
      } finally {
        Yn(i), Br.transition = a, Dt = t, (Dt & (Ir | ki)) === mr && Do();
      }
    }
    function nR() {
      return (Dt & (Ir | ki)) !== mr;
    }
    function Fm(e, t) {
      ua(LS, Il, e), Il = tt(Il, t);
    }
    function VS(e) {
      Il = LS.current, la(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, ow(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return On = s, yr = Il = t, gr = Mu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ia = null, Ox(), Xi.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = On;
        try {
          if (Gh(), _E(), Sn(), OS.current = null, a === null || a.return === null) {
            gr = Up, jp = t, On = null;
            return;
          }
          if (We && a.mode & wt && Tm(a, !0), Ie)
            if (Cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, yr);
            } else
              Ei(a, t, yr);
          ib(e, a.return, a, t, yr), uR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = DS.current;
      return DS.current = gm, e === null ? gm : e;
    }
    function iR(e) {
      DS.current = e;
    }
    function A1() {
      MS = bn();
    }
    function Yp(e) {
      Nm = tt(e, Nm);
    }
    function j1() {
      gr === Mu && (gr = Om);
    }
    function BS() {
      (gr === Mu || gr === Om || gr === ec) && (gr = Ap), Ta !== null && (bl(Nm) || bl(Fp)) && Po(Ta, yr);
    }
    function F1(e) {
      gr !== Ap && (gr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function H1() {
      return gr === Mu;
    }
    function Hm(e, t) {
      var a = Dt;
      Dt |= Ir;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        zu = ef(), nc(e, t);
      }
      wd(t);
      do
        try {
          P1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Gh(), Dt = a, iR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return mn(), Ta = null, yr = P, gr;
    }
    function P1() {
      for (; On !== null; )
        lR(On);
    }
    function V1(e, t) {
      var a = Dt;
      Dt |= Ir;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        zu = ef(), Pp(), nc(e, t);
      }
      wd(t);
      do
        try {
          B1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Gh(), iR(i), Dt = a, On !== null ? (xd(), Mu) : (mn(), Ta = null, yr = P, gr);
    }
    function B1() {
      for (; On !== null && !md(); )
        lR(On);
    }
    function lR(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & wt) !== De ? ($g(e), a = IS(t, e, Il), Tm(e, !0)) : a = IS(t, e, Il), Sn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : On = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === ke) {
          Gt(t);
          var u = void 0;
          if ((t.mode & wt) === De ? u = OC(a, t, Il) : ($g(t), u = OC(a, t, Il), Tm(t, !1)), Sn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = jb(a, t);
          if (s !== null) {
            s.flags &= Nv, On = s;
            return;
          }
          if ((t.mode & wt) !== De) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = ke, i.deletions = null;
          else {
            gr = NS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      gr === Mu && (gr = GC);
    }
    function rc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, Yn(aa), I1(e, t, a, i);
      } finally {
        Br.transition = u, Yn(i);
      }
      return null;
    }
    function I1(e, t, a, i) {
      do
        Au();
      while (Fo !== null);
      if (e_(), (Dt & (Ir | ki)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Si(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = tt(u.lanes, u.childLanes);
      Qv(e, f), e === Ta && (Ta = null, On = null, yr = P), ((u.subtreeFlags & ur) !== ke || (u.flags & ur) !== ke) && (tc || (tc = !0, AS = a, WS(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (gl | ao | Sl | ur)) !== ke, v = (u.flags & (gl | ao | Sl | ur)) !== ke;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        Yn(aa);
        var b = Dt;
        Dt |= ki, OS.current = null, Bb(e, u), ZE(), n1(e, u, s), tw(e.containerInfo), e.current = u, hs(s), r1(u, e, s), cu(), Mv(), Dt = b, Yn(g), Br.transition = y;
      } else
        e.current = u, ZE();
      var w = tc;
      if (tc ? (tc = !1, Fo = e, Vp = s) : ($f = 0, Um = null), f = e.pendingLanes, f === P && (Yf = null), w || fR(e.current, !1), Sd(u.stateNode, i), br && e.memoizedUpdaters.clear(), R1(), Ya(e, bn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], ue = F.stack, ze = F.digest;
          z(F.value, {
            componentStack: ue,
            digest: ze
          });
        }
      if (Mm) {
        Mm = !1;
        var be = zS;
        throw zS = null, be;
      }
      return ra(Vp, He) && e.tag !== ko && Au(), f = e.pendingLanes, ra(f, He) ? (Gx(), e === jS ? Bp++ : (Bp = 0, jS = e)) : Bp = 0, Do(), Si(), null;
    }
    function Au() {
      if (Fo !== null) {
        var e = Kv(Vp), t = _r(sr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, Yn(t), $1();
        } finally {
          Yn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Y1(e) {
      US.push(e), tc || (tc = !0, WS(ou, function() {
        return Au(), null;
      }));
    }
    function $1() {
      if (Fo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Fo, a = Vp;
      if (Fo = null, Vp = P, (Dt & (Ir | ki)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Td(a);
      var i = Dt;
      Dt |= ki, c1(t.current), l1(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Wb(t, f);
        }
      }
      oo(), fR(t.current, !0), Dt = i, Do(), zm ? t === Um ? $f++ : ($f = 0, Um = t) : $f = 0, FS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Yf !== null && Yf.has(e);
    }
    function W1(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Q1(e) {
      Mm || (Mm = !0, zS = e);
    }
    var G1 = Q1;
    function sR(e, t, a) {
      var i = Zs(a, t), u = lC(e, i, He), s = No(e, u, He), f = wa();
      s !== null && (vo(s, He, f), Ya(s, f));
    }
    function pn(e, t, a) {
      if (Hb(a), Wp(!1), e.tag === X) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          sR(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = sS(i, f, He), v = No(i, p, He), y = wa();
            v !== null && (vo(v, He, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function q1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Zc(e, a), a_(e), Ta === e && hu(yr, a) && (gr === Ap || gr === Om && Gc(yr) && bn() - MS < qC ? nc(e, P) : Lm = tt(Lm, a)), Ya(e, u);
    }
    function cR(e, t) {
      t === Fn && (t = D1(e));
      var a = wa(), i = Va(e, t);
      i !== null && (vo(i, t, a), Ya(i, a));
    }
    function K1(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function X1(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Wt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function Z1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x1(e / 1960) * 1960;
    }
    function J1() {
      if (Bp > _1)
        throw Bp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > k1 && ($f = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function e_() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Gt(e), Pm(e, Mr, S1), t && Pm(e, yl, E1), Pm(e, Mr, y1), t && Pm(e, yl, g1), Sn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((Dt & Ir) !== mr || !(e.mode & vt))
          return;
        var t = e.tag;
        if (t !== Be && t !== X && t !== de && t !== _e && t !== Ae && t !== ee && t !== pe)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = Zn;
        try {
          Gt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : Sn();
        }
      }
    }
    var IS;
    {
      var t_ = null;
      IS = function(e, t, a) {
        var i = ER(t_, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (px() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), _E(), NC(e, t), ER(t, i), t.mode & wt && $g(t), Ma(null, xC, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function n_(e) {
      if (qr && !$x())
        switch (e.tag) {
          case _e:
          case Ae:
          case pe: {
            var t = On && Ye(On) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (br) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gv(e, i, t);
        });
      }
    }
    var $S = {};
    function WS(e, t) {
      {
        var a = il.current;
        return a !== null ? (a.push(t), $S) : vd(e, t);
      }
    }
    function vR(e) {
      if (e !== $S)
        return hd(e);
    }
    function hR() {
      return il.current !== null;
    }
    function r_(e) {
      {
        if (e.mode & vt) {
          if (!WC())
            return;
        } else if (!w1() || Dt !== mr || e.tag !== _e && e.tag !== Ae && e.tag !== pe)
          return;
        if (il.current === null) {
          var t = Zn;
          try {
            Gt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Gt(e) : Sn();
          }
        }
      }
    }
    function a_(e) {
      e.tag !== ko && WC() && il.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      ZC = e;
    }
    var Di = null, Wf = null, i_ = function(e) {
      Di = e;
    };
    function Qf(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Qf(e);
    }
    function GS(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mR(e, t) {
      {
        if (Di === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case _e: {
            (typeof i == "function" || s === Qe) && (u = !0);
            break;
          }
          case Ae: {
            (s === Y || s === Qe) && (u = !0);
            break;
          }
          case ee:
          case pe: {
            (s === pt || s === Qe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Di(a);
          if (f !== void 0 && f === Di(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (Di === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var l_ = function(e, t) {
      {
        if (Di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, u_ = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Au(), Uu(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case _e:
          case pe:
          case de:
            v = p;
            break;
          case Ae:
            v = p.render;
            break;
        }
        if (Di === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Di(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === de ? g = !0 : y = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, He);
          w !== null && Sr(w, e, He, $t);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var o_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case _e:
          case pe:
          case de:
            p = f;
            break;
          case Ae:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? s_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function s_(e, t) {
      {
        var a = c_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case Fe:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function c_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function f_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new f_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function d_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function p_(e) {
      if (typeof e == "function")
        return ZS(e) ? de : _e;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return Ae;
        if (t === pt)
          return ee;
      }
      return Be;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Be:
        case _e:
        case pe:
          a.type = Qf(e.type);
          break;
        case de:
          a.type = QS(e.type);
          break;
        case Ae:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function v_(e, t) {
      e.flags &= jn | En;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function h_(e, t, a) {
      var i;
      return e === Fh ? (i = vt, t === !0 && (i |= Ze, i |= Xt)) : i = De, br && (i |= wt), li(X, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Be, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = de, p = QS(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case Wr:
            return Vo(a.children, u, s, t);
          case si:
            f = Tn, u |= Ze, (u & vt) !== De && (u |= Xt);
            break;
          case ci:
            return m_(a, u, s, t);
          case ie:
            return y_(a, u, s, t);
          case se:
            return g_(a, u, s, t);
          case wn:
            return SR(a, u, s, t);
          case ln:
          case ht:
          case fn:
          case Rr:
          case lt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = it;
                  break e;
                case R:
                  f = en;
                  break e;
                case Y:
                  f = Ae, p = GS(p);
                  break e;
                case pt:
                  f = ee;
                  break e;
                case Qe:
                  f = Je, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vo(e, t, a, i) {
      var u = li(ot, e, i, t);
      return u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(Nt, e, i, t | wt);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function y_(e, t, a, i) {
      var u = li(Te, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      var u = li(Wt, e, i, t);
      return u.elementType = se, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = li(je, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = li(xe, e, null, t);
      return i.lanes = a, i;
    }
    function S_() {
      var e = li(le, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function E_(e) {
      var t = li(un, null, null, De);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = li(Be, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function C_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Xc(P), this.expirationTimes = Xc($t), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Xc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ko:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new C_(e, t, a, p, v), b = h_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return hg(b), g;
    }
    var r0 = "18.3.1";
    function R_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ha,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function RR(e) {
      if (!e)
        return ii;
      var t = ro(e), a = ax(t);
      if (t.tag === de) {
        var i = t.type;
        if (Al(i))
          return q0(t, i, a);
      }
      return a;
    }
    function T_(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Jr(a);
        if (u === null)
          return null;
        if (u.mode & Ze) {
          var s = Ye(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = Zn;
            try {
              Gt(u), a.mode & Ze ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : Sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = CR(a, i, g, e, u, s, f, p, v);
      b.context = RR(null);
      var w = b.current, z = wa(), A = Ho(w), F = Nu(z, A);
      return F.callback = t ?? null, No(w, F, A), O1(b, A, z), b;
    }
    function Qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Ho(u);
      kc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Zn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(Zn) || "Unknown"));
      var v = Nu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Sr(y, u, f, s), Jh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Yv(t);
            z1(t, a);
          }
          break;
        }
        case Te: {
          Uu(function() {
            var u = Va(e, He);
            if (u !== null) {
              var s = wa();
              Sr(u, e, He, s);
            }
          });
          var i = He;
          l0(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function l0(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function x_(e) {
      if (e.tag === Te) {
        var t = po, a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function b_(e) {
      if (e.tag === Te) {
        var t = Ho(e), a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function bR(e) {
      var t = ti(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function __(e) {
      return _R(e);
    }
    var kR = function(e) {
      return !1;
    };
    function k_(e) {
      return kR(e);
    }
    var DR = null, OR = null, NR = null, LR = null, MR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = et(e) ? e.slice() : Xe({}, e);
        return a + 1 === t.length ? (et(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = et(e) ? e.slice() : Xe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], et(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          Ct("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ct("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = et(e) ? e.slice() : Xe({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, IR = function(e, t, a) {
        return BR(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = IR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Xe({}, e.memoizedProps);
          var f = Va(e, He);
          f !== null && Sr(f, e, He, $t);
        }
      }, OR = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Xe({}, e.memoizedProps);
          var s = Va(e, He);
          s !== null && Sr(s, e, He, $t);
        }
      }, NR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Xe({}, e.memoizedProps);
          var f = Va(e, He);
          f !== null && Sr(f, e, He, $t);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = IR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, He);
        i !== null && Sr(i, e, He, $t);
      }, MR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, He);
        a !== null && Sr(a, e, He, $t);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, He);
        i !== null && Sr(i, e, He, $t);
      }, UR = function(e) {
        var t = Va(e, He);
        t !== null && Sr(t, e, He, $t);
      }, AR = function(e) {
        _R = e;
      }, jR = function(e) {
        kR = e;
      };
    }
    function D_(e) {
      var t = Jr(e);
      return t === null ? null : t.stateNode;
    }
    function O_(e) {
      return null;
    }
    function N_() {
      return Zn;
    }
    function L_(e) {
      var t = e.findFiberByHostInstance, a = rt.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: NR,
        overrideProps: LR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || O_,
        // React Refresh
        findHostInstancesForRefresh: o_,
        scheduleRefresh: l_,
        scheduleRoot: u_,
        setRefreshHandler: i_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: N_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var YR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = bR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, Im.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Qp(null, e, null, null);
        }), Y0(t);
      }
    };
    function M_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? Ct("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Jd(p), new o0(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function z_(e) {
      e && th(e);
    }
    Im.prototype.unstable_scheduleHydration = z_;
    function U_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Nh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Hx(y, b);
        }
      return new Im(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Ko));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Ko || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var A_ = rt.ReactCurrentOwner, WR;
    WR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Bi ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function j_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = wR(
          t,
          i,
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = f, Nh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return Jd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = TR(
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return Jd(b), Uu(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function F_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      WR(a), F_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = j_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return Bm(f);
    }
    var GR = !1;
    function H_(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = A_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : T_(e, "findDOMNode");
    }
    function P_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function V_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function B_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var qR = !1;
    function I_(e) {
      if (qR || (qR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !bo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && bo(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(w_), jd(x_), cy(b_), nf(ga), Xv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is($T), Dv(PS, U1, Uu);
    function Y_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return R_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return B_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bo, wf, Lh, ud, Ju, PS]
    };
    function W_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t);
    }
    function Q_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t, a);
    }
    function G_(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var q_ = L_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!q_ && Gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Wa.createPortal = Y_, Wa.createRoot = W_, Wa.findDOMNode = H_, Wa.flushSync = G_, Wa.hydrate = P_, Wa.hydrateRoot = Q_, Wa.render = V_, Wa.unmountComponentAtNode = I_, Wa.unstable_batchedUpdates = PS, Wa.unstable_renderSubtreeIntoContainer = $_, Wa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (q) {
      console.error(q);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), h0.exports = ok()) : h0.exports = sk();
var ck = h0.exports, fk = {}, Zp = ck;
if (fk.NODE_ENV === "production")
  ev.createRoot = Zp.createRoot, ev.hydrateRoot = Zp.hydrateRoot;
else {
  var Qm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ev.createRoot = function(q, te) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Zp.createRoot(q, te);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  }, ev.hydrateRoot = function(q, te, k) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Zp.hydrateRoot(q, te, k);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  };
}
const dk = {
  utm_source: "UtmSource",
  utm_medium: "UtmMedium",
  utm_campaign: "UtmCampaign",
  utm_content: "UtmContent",
  utm_term: "UtmTerm",
  gclid: "GCLID",
  gbraid: "GBRAID",
  wbraid: "WBRAID",
  dclid: "DCLID",
  ttclid: "TTCLID",
  fbclid: "FBCLID",
  li_fat_id: "LI_FAT_ID",
  ad_id: "AD_ID"
}, pk = (q) => {
  const te = document.cookie.split("; ").find((k) => k.startsWith(q + "="));
  return te ? decodeURIComponent(te.split("=").slice(1).join("=")) : null;
}, vk = () => {
  const q = new URLSearchParams(window.location.search), te = {};
  for (const [k, rt] of Object.entries(dk)) {
    const Oe = q.get(k) || pk(k);
    Oe && (te[rt] = Oe);
  }
  return document.referrer && (te.ReferralURL = document.referrer), te;
}, hk = [
  { id: "thuisbatterij", label: "Thuisbatterij", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-thuisbatterij.svg" },
  { id: "zonnepanelen", label: "Zonnepanelen", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-zonnepanelen.svg" },
  { id: "laadpaal", label: "Laadpaal", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-laadpaal.svg" },
  { id: "groepenkast", label: "Groepenkast", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-groepenkast.svg" }
], lT = {
  zonnepanelen: "9d9fc9e3-64a6-4cfc-83af-5bfc062fc21d",
  thuisbatterij: "dc730492-87f6-41de-a97c-9d1ce279ed93",
  groepenkast: "8251df8d-242f-4349-922b-d28196c73223",
  laadpaal: "1f49c5e2-79b5-47b1-a507-77b1b7747036"
};
function mk() {
  const [q, te] = ll.useState(1), [k, rt] = ll.useState({
    hasSolar: null,
    selectedProducts: [],
    firstname: "",
    lastname: "",
    postal: "",
    houseNumber: "",
    houseNumberAddition: "",
    // Optional addition
    email: "",
    phone: ""
  }), [Oe, Et] = ll.useState({}), [Ct, S] = ll.useState(!1), [at, _e] = ll.useState(!1), [de] = ll.useState(() => vk()), Be = q / 3 * 100, X = (ee, pe) => {
    let Je = pe;
    ee === "postal" && (Je = pe.replace(/\s/g, "").toUpperCase()), rt((st) => ({ ...st, [ee]: Je })), Oe[ee] && Et((st) => ({ ...st, [ee]: null }));
  }, Fe = (ee) => {
    rt((pe) => {
      const Je = pe.selectedProducts;
      return Je.includes(ee) ? { ...pe, selectedProducts: Je.filter((st) => st !== ee) } : { ...pe, selectedProducts: [...Je, ee] };
    }), Oe.selectedProducts && Et((pe) => ({ ...pe, selectedProducts: null }));
  }, le = () => k.selectedProducts.length === 0 ? (Et({ selectedProducts: "Selecteer ten minste één product." }), !1) : !0, xe = () => {
    const ee = {};
    k.firstname || (ee.firstname = "Voornaam is verplicht."), k.lastname || (ee.lastname = "Achternaam is verplicht."), /^[0-9]{4}[A-Z]{2}$/.test(k.postal) || (ee.postal = "Postcode moet 4 cijfers gevolgd door 2 letters zijn (bijv. 1234AB)."), k.houseNumber || (ee.houseNumber = "Huisnummer is verplicht."), (!k.email.includes("@") || !k.email.includes(".")) && (ee.email = "Ongeldig e-mailadres.");
    const Je = k.phone.replace(/[^0-9]/g, "");
    return /[^0-9+]/.test(k.phone) ? ee.phone = "Telefoonnummer mag alleen cijfers en + bevatten." : Je.length < 10 ? ee.phone = "Telefoonnummer moet minimaal 10 cijfers bevatten." : Je.length > 13 && (ee.phone = "Telefoonnummer mag maximaal 13 cijfers bevatten."), Et(ee), Object.keys(ee).length === 0;
  }, ot = () => {
    q === 2 && !le() || te((ee) => ee + 1);
  }, Tn = () => {
    te((ee) => ee - 1);
  }, en = async () => {
    if (!xe()) return;
    S(!0);
    const ee = k.selectedProducts.filter((Je) => lT[Je]).map((Je) => ({ FlowID: lT[Je] })), pe = {
      FlowID: "ea3563dc-c12f-4420-960d-b660275db7ad",
      Firstname: k.firstname,
      Lastname: k.lastname,
      Email: k.email,
      Phonenumber: k.phone,
      ...de,
      // UTM params, click IDs & ReferralURL
      EnergyUsage: {
        HasSolarPanels: k.hasSolar ? "Yes" : "No"
      },
      HouseDetails: {
        Zipcode: k.postal,
        Housenumber: k.houseNumber,
        HouseNumberAddition: k.houseNumberAddition,
        Country: "NL"
      },
      // Putting measures in Note1 as requested
      Note1: k.selectedProducts.join(", "),
      FlowsInterestedIn: ee
    };
    console.log("Submitting Form:", pe);
    try {
      const Je = await fetch("https://pico.homezero.nl/rest/pico/v1/assignments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "hRxLOq1EK3VkSVFIFzD03qesWlALOWmZ"
        },
        body: JSON.stringify(pe)
      });
      if (!Je.ok)
        throw (await Je.json().catch(() => ({}))).error === "Could not find a building with this address" ? new Error("AddressNotFound") : new Error(`API Error: ${Je.statusText}`);
      const st = await Je.json().catch(() => null);
      console.log("API Success:", st), _e(!0);
    } catch (Je) {
      console.error("Submission failed:", Je), Je.message === "AddressNotFound" ? alert("We konden geen gebouw vinden op dit adres. Controleer je invoer of doe een normale huisscan op onze website.") : alert("Er is iets misgegaan. Probeer het later opnieuw of doe een normale huisscan op onze website.");
    } finally {
      S(!1);
    }
  }, it = () => /* @__PURE__ */ oe.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ oe.jsx("h2", { className: "sc-title", children: "Heb je al zonnepanelen?" }),
    /* @__PURE__ */ oe.jsxs("div", { className: "sc-grid", children: [
      /* @__PURE__ */ oe.jsx(
        "div",
        {
          className: `sc-tile ${k.hasSolar === !0 ? "active" : ""}`,
          onClick: () => {
            X("hasSolar", !0), te(2);
          },
          children: "Ja"
        }
      ),
      /* @__PURE__ */ oe.jsx(
        "div",
        {
          className: `sc-tile ${k.hasSolar === !1 ? "active" : ""}`,
          onClick: () => {
            X("hasSolar", !1), te(2);
          },
          children: "Nee"
        }
      )
    ] })
  ] }), Ae = () => {
    const ee = hk.filter((pe) => !(k.hasSolar === !0 && pe.id === "zonnepanelen"));
    return /* @__PURE__ */ oe.jsxs("div", { className: "fade-in", children: [
      /* @__PURE__ */ oe.jsx("h2", { className: "sc-title", children: "In welke producten heb je interesse?" }),
      /* @__PURE__ */ oe.jsx("div", { className: "sc-grid", children: ee.map((pe) => /* @__PURE__ */ oe.jsxs(
        "div",
        {
          className: `sc-tile ${k.selectedProducts.includes(pe.id) ? "active" : ""}`,
          onClick: () => Fe(pe.id),
          children: [
            /* @__PURE__ */ oe.jsxs("div", { className: "sc-tile-content", children: [
              /* @__PURE__ */ oe.jsx("img", { src: pe.icon, alt: pe.label, className: "sc-tile-icon" }),
              /* @__PURE__ */ oe.jsx("span", { className: "sc-tile-label", children: pe.label })
            ] }),
            k.selectedProducts.includes(pe.id) && /* @__PURE__ */ oe.jsx("div", { className: "sc-check-badge", children: /* @__PURE__ */ oe.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ oe.jsx("path", { d: "M10 3L4.5 8.5L2 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        },
        pe.id
      )) }),
      Oe.selectedProducts && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", style: { textAlign: "center", marginTop: "12px" }, children: Oe.selectedProducts })
    ] });
  }, Nt = () => /* @__PURE__ */ oe.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ oe.jsx("h2", { className: "sc-title", children: "Waar mag je aanbod heen?" }),
    /* @__PURE__ */ oe.jsxs("div", { className: "sc-row", children: [
      /* @__PURE__ */ oe.jsx("div", { className: "sc-col", children: /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Voornaam" }),
        /* @__PURE__ */ oe.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Oe.firstname ? "error" : ""}`,
            value: k.firstname,
            onChange: (ee) => X("firstname", ee.target.value),
            placeholder: "Jan"
          }
        ),
        Oe.firstname && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", children: Oe.firstname })
      ] }) }),
      /* @__PURE__ */ oe.jsx("div", { className: "sc-col", children: /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Achternaam" }),
        /* @__PURE__ */ oe.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Oe.lastname ? "error" : ""}`,
            value: k.lastname,
            onChange: (ee) => X("lastname", ee.target.value),
            placeholder: "Jansen"
          }
        ),
        Oe.lastname && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", children: Oe.lastname })
      ] }) })
    ] }),
    /* @__PURE__ */ oe.jsxs("div", { className: "sc-row", children: [
      /* @__PURE__ */ oe.jsx("div", { className: "sc-col", children: /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Postcode" }),
        /* @__PURE__ */ oe.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Oe.postal ? "error" : ""}`,
            value: k.postal,
            onChange: (ee) => X("postal", ee.target.value),
            placeholder: "1234 AB"
          }
        ),
        Oe.postal && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", children: Oe.postal })
      ] }) }),
      /* @__PURE__ */ oe.jsx("div", { className: "sc-col", children: /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ oe.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
          /* @__PURE__ */ oe.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Huisnummer" }),
            /* @__PURE__ */ oe.jsx(
              "input",
              {
                type: "text",
                className: `sc-input ${Oe.houseNumber ? "error" : ""}`,
                value: k.houseNumber,
                onChange: (ee) => rt({ ...k, houseNumber: ee.target.value }),
                placeholder: "10"
              }
            )
          ] }),
          /* @__PURE__ */ oe.jsxs("div", { style: { width: "140px" }, children: [
            /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Toevoeging" }),
            /* @__PURE__ */ oe.jsx(
              "input",
              {
                type: "text",
                className: "sc-input",
                value: k.houseNumberAddition,
                onChange: (ee) => rt({ ...k, houseNumberAddition: ee.target.value }),
                placeholder: "Optioneel"
              }
            )
          ] })
        ] }),
        Oe.houseNumber && /* @__PURE__ */ oe.jsx("span", { className: "sc-error-text", children: Oe.houseNumber })
      ] }) })
    ] }),
    /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "E-mailadres" }),
      /* @__PURE__ */ oe.jsx(
        "input",
        {
          type: "email",
          className: `sc-input ${Oe.email ? "error" : ""}`,
          value: k.email,
          onChange: (ee) => X("email", ee.target.value),
          placeholder: "naam@voorbeeld.nl"
        }
      ),
      Oe.email && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", children: Oe.email })
    ] }),
    /* @__PURE__ */ oe.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ oe.jsx("label", { className: "sc-label", children: "Telefoonnummer" }),
      /* @__PURE__ */ oe.jsx(
        "input",
        {
          type: "tel",
          className: `sc-input ${Oe.phone ? "error" : ""}`,
          value: k.phone,
          onChange: (ee) => X("phone", ee.target.value),
          placeholder: "06 12345678"
        }
      ),
      Oe.phone && /* @__PURE__ */ oe.jsx("div", { className: "sc-error-msg", children: Oe.phone })
    ] })
  ] }), Te = () => /* @__PURE__ */ oe.jsxs("div", { className: "sc-success-screen fade-in", children: [
    /* @__PURE__ */ oe.jsx("div", { className: "sc-success-checkmark", children: /* @__PURE__ */ oe.jsxs("svg", { viewBox: "0 0 52 52", className: "sc-checkmark-svg", children: [
      /* @__PURE__ */ oe.jsx("circle", { className: "sc-checkmark-circle", cx: "26", cy: "26", r: "25", fill: "none" }),
      /* @__PURE__ */ oe.jsx("path", { className: "sc-checkmark-check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" })
    ] }) }),
    /* @__PURE__ */ oe.jsx("h2", { className: "sc-success-title", children: "Bedankt!" }),
    /* @__PURE__ */ oe.jsx("p", { className: "sc-success-message", children: "Je hoort snel van ons." })
  ] });
  return /* @__PURE__ */ oe.jsx("div", { className: "sc-widget-container", children: /* @__PURE__ */ oe.jsxs("div", { className: "sc-card", children: [
    /* @__PURE__ */ oe.jsx("div", { className: "sc-progress-bar", children: /* @__PURE__ */ oe.jsx("div", { className: "sc-progress-fill", style: { width: `${Be}%` } }) }),
    /* @__PURE__ */ oe.jsx("div", { className: "sc-content", children: at ? Te() : /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
      q === 1 && it(),
      q === 2 && Ae(),
      q === 3 && Nt()
    ] }) }),
    q > 1 && !at && /* @__PURE__ */ oe.jsxs("div", { className: "sc-footer space-between", children: [
      /* @__PURE__ */ oe.jsx("button", { className: "sc-btn sc-btn-back", onClick: Tn, children: "Terug" }),
      q === 2 ? /* @__PURE__ */ oe.jsx("button", { className: "sc-btn", onClick: ot, children: "Volgende stap" }) : /* @__PURE__ */ oe.jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end" }, children: /* @__PURE__ */ oe.jsx("button", { className: "sc-btn", onClick: en, disabled: Ct, children: Ct ? "Even geduld..." : "Ontvang mijn gratis aanbod" }) })
    ] }),
    q === 3 && !at && /* @__PURE__ */ oe.jsx("div", { style: { padding: "0 24px 24px 24px" }, children: /* @__PURE__ */ oe.jsx("p", { className: "sc-disclaimer", children: "Binnen een paar minuten gratis en vrijblijvend in je mail! Het kan zijn dat we je bellen voor meer informatie. Zo kunnen we je het beste advies geven." }) })
  ] }) });
}
const fT = "pico-widget-container", uT = document.getElementById(fT);
uT ? ev.createRoot(uT).render(
  /* @__PURE__ */ oe.jsx(nk.StrictMode, { children: /* @__PURE__ */ oe.jsx(mk, {}) })
) : console.warn(`Pico Widget: Container element #${fT} not found. Widget will not render.`);
