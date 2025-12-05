(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--sc-primary: #ffdb00;--sc-primary-hover: #e6c600;--sc-footer-bg: #fff9c4;--sc-text: #1a1a1a;--sc-border: #e5e7eb;--sc-border-active: #ffdb00;--sc-radius: 8px;--sc-transition: all .3s ease}.sc-widget-container{font-family:inherit;color:var(--sc-text);width:100%;box-sizing:border-box}.sc-widget-container *{box-sizing:border-box}.sc-card{background:#fff;border-radius:var(--sc-radius);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;overflow:hidden;display:flex;flex-direction:column;height:600px;position:relative}.sc-progress-bar{height:4px;background:#f3f4f6;width:100%}.sc-progress-fill{height:100%;background:var(--sc-primary);transition:width .5s ease}.sc-content{padding:24px;flex:1;overflow-y:auto;display:flex;flex-direction:column}.sc-title{font-size:1.25rem;font-weight:600;margin-bottom:24px;text-align:center;line-height:1.4}.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.sc-tile{background:#fff;border:2px solid var(--sc-border);border-radius:var(--sc-radius);padding:16px;cursor:pointer;text-align:center;font-weight:500;transition:var(--sc-transition);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:140px;position:relative}.sc-tile:hover{border-color:var(--sc-primary)}.sc-tile.active{border-color:var(--sc-primary);background-color:#fffdf0;box-shadow:0 0 0 1px var(--sc-primary)}.sc-tile-content{display:flex;flex-direction:column;align-items:center;gap:12px}.sc-tile-icon{width:48px;height:48px;object-fit:contain}.sc-tile-label{font-weight:600;font-size:.95rem}.sc-check-badge{position:absolute;top:8px;right:8px;width:20px;height:20px;background-color:var(--sc-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;animation:popIn .2s cubic-bezier(.175,.885,.32,1.275)}@keyframes popIn{0%{transform:scale(0)}to{transform:scale(1)}}.sc-form-group{margin-bottom:16px}.sc-label{display:block;font-size:.875rem;font-weight:500;margin-bottom:6px}.sc-input{width:100%;padding:12px;border:1px solid var(--sc-border);border-radius:var(--sc-radius);font-size:1rem;transition:var(--sc-transition)}.sc-input:focus{outline:none;border-color:var(--sc-primary);box-shadow:0 0 0 3px #ffdb0033}.sc-input.error{border-color:#ef4444}.sc-error-msg{color:#ef4444;font-size:.75rem;margin-top:4px}.sc-row{display:flex;gap:16px}.sc-col{flex:1}.sc-footer{padding:24px;background:transparent;border-top:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center}.sc-footer.space-between{justify-content:space-between}.sc-btn{background-color:var(--sc-primary);color:var(--sc-text);border:none;padding:12px 24px;border-radius:var(--sc-radius);font-weight:600;cursor:pointer;transition:var(--sc-transition);font-size:1rem}.sc-btn:hover:not(:disabled){background-color:var(--sc-primary-hover)}.sc-btn:disabled{opacity:.5;cursor:not-allowed;background-color:#e5e7eb;color:#9ca3af}.sc-btn-back{background:transparent;color:#6b7280;padding:12px 16px}.sc-btn-back:hover{background:#0000000d;color:var(--sc-text)}.sc-disclaimer{font-size:.75rem;color:#6b7280;text-align:center;margin-top:12px;line-height:1.4}.fade-in{animation:fadeIn .4s ease-out}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 600px){.sc-grid{grid-template-columns:1fr}.sc-content{padding:16px;height:auto;overflow-y:visible}.sc-card{height:auto;min-height:600px}.sc-footer{padding:16px;flex-direction:column-reverse;gap:12px}.sc-footer.space-between{flex-direction:row}.sc-tile{min-height:100px;flex-direction:row;justify-content:flex-start;padding:12px;gap:16px}.sc-tile-content{flex-direction:row;gap:16px}.sc-tile-icon{width:32px;height:32px}.sc-check-badge{top:50%;transform:translateY(-50%);right:16px}}.sc-success-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 20px;min-height:400px}.sc-success-checkmark{width:80px;height:80px;margin-bottom:24px}.sc-checkmark-svg{width:100%;height:100%;border-radius:50%;display:block;stroke-width:2;stroke:#4caf50;stroke-miterlimit:10}.sc-checkmark-circle{stroke-dasharray:166;stroke-dashoffset:166;stroke:#4caf50;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.sc-checkmark-check{stroke-dasharray:48;stroke-dashoffset:48;stroke:#4caf50;animation:stroke .3s cubic-bezier(.65,0,.45,1) .6s forwards;stroke-width:3}@keyframes stroke{to{stroke-dashoffset:0}}.sc-success-title{font-size:28px;font-weight:700;color:var(--sc-text);margin:0 0 16px}.sc-success-message{font-size:16px;color:#666;line-height:1.6;max-width:400px;margin:0}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function X_(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var p0 = { exports: {} }, qp = {}, v0 = { exports: {} }, Tt = {};
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
function Z_() {
  if (XR) return Tt;
  XR = 1;
  var q = Symbol.for("react.element"), oe = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), gt = Symbol.for("react.provider"), St = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), _e = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ue = Symbol.iterator;
  function J(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Ue && _[Ue] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, we = {};
  function lt(_, B, Oe) {
    this.props = _, this.context = B, this.refs = we, this.updater = Oe || Fe;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(_, B) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, B, "setState");
  }, lt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Tn() {
  }
  Tn.prototype = lt.prototype;
  function en(_, B, Oe) {
    this.props = _, this.context = B, this.refs = we, this.updater = Oe || Fe;
  }
  var rt = en.prototype = new Tn();
  rt.constructor = en, ie(rt, lt.prototype), rt.isPureReactComponent = !0;
  var Ae = Array.isArray, Dt = Object.prototype.hasOwnProperty, W = { current: null }, me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(_, B, Oe) {
    var Ye, Qe = {}, ot = null, wt = null;
    if (B != null) for (Ye in B.ref !== void 0 && (wt = B.ref), B.key !== void 0 && (ot = "" + B.key), B) Dt.call(B, Ye) && !me.hasOwnProperty(Ye) && (Qe[Ye] = B[Ye]);
    var Ke = arguments.length - 2;
    if (Ke === 1) Qe.children = Oe;
    else if (1 < Ke) {
      for (var Ct = Array(Ke), Bt = 0; Bt < Ke; Bt++) Ct[Bt] = arguments[Bt + 2];
      Qe.children = Ct;
    }
    if (_ && _.defaultProps) for (Ye in Ke = _.defaultProps, Ke) Qe[Ye] === void 0 && (Qe[Ye] = Ke[Ye]);
    return { $$typeof: q, type: _, key: ot, ref: wt, props: Qe, _owner: W.current };
  }
  function Vt(_, B) {
    return { $$typeof: q, type: _.type, key: B, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Mt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === q;
  }
  function pn(_) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Oe) {
      return B[Oe];
    });
  }
  var Qt = /\/+/g;
  function Et(_, B) {
    return typeof _ == "object" && _ !== null && _.key != null ? pn("" + _.key) : B.toString(36);
  }
  function je(_, B, Oe, Ye, Qe) {
    var ot = typeof _;
    (ot === "undefined" || ot === "boolean") && (_ = null);
    var wt = !1;
    if (_ === null) wt = !0;
    else switch (ot) {
      case "string":
      case "number":
        wt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case q:
          case oe:
            wt = !0;
        }
    }
    if (wt) return wt = _, Qe = Qe(wt), _ = Ye === "" ? "." + Et(wt, 0) : Ye, Ae(Qe) ? (Oe = "", _ != null && (Oe = _.replace(Qt, "$&/") + "/"), je(Qe, B, Oe, "", function(Bt) {
      return Bt;
    })) : Qe != null && (Mt(Qe) && (Qe = Vt(Qe, Oe + (!Qe.key || wt && wt.key === Qe.key ? "" : ("" + Qe.key).replace(Qt, "$&/") + "/") + _)), B.push(Qe)), 1;
    if (wt = 0, Ye = Ye === "" ? "." : Ye + ":", Ae(_)) for (var Ke = 0; Ke < _.length; Ke++) {
      ot = _[Ke];
      var Ct = Ye + Et(ot, Ke);
      wt += je(ot, B, Oe, Ct, Qe);
    }
    else if (Ct = J(_), typeof Ct == "function") for (_ = Ct.call(_), Ke = 0; !(ot = _.next()).done; ) ot = ot.value, Ct = Ye + Et(ot, Ke++), wt += je(ot, B, Oe, Ct, Qe);
    else if (ot === "object") throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return wt;
  }
  function jt(_, B, Oe) {
    if (_ == null) return _;
    var Ye = [], Qe = 0;
    return je(_, Ye, "", "", function(ot) {
      return B.call(Oe, ot, Qe++);
    }), Ye;
  }
  function mt(_) {
    if (_._status === -1) {
      var B = _._result;
      B = B(), B.then(function(Oe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Oe);
      }, function(Oe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Oe);
      }), _._status === -1 && (_._status = 0, _._result = B);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ut = { current: null }, Y = { transition: null }, Se = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: Y, ReactCurrentOwner: W };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Tt.Children = { map: jt, forEach: function(_, B, Oe) {
    jt(_, function() {
      B.apply(this, arguments);
    }, Oe);
  }, count: function(_) {
    var B = 0;
    return jt(_, function() {
      B++;
    }), B;
  }, toArray: function(_) {
    return jt(_, function(B) {
      return B;
    }) || [];
  }, only: function(_) {
    if (!Mt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Tt.Component = lt, Tt.Fragment = D, Tt.Profiler = Be, Tt.PureComponent = en, Tt.StrictMode = ct, Tt.Suspense = nt, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, Tt.act = re, Tt.cloneElement = function(_, B, Oe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ye = ie({}, _.props), Qe = _.key, ot = _.ref, wt = _._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ot = B.ref, wt = W.current), B.key !== void 0 && (Qe = "" + B.key), _.type && _.type.defaultProps) var Ke = _.type.defaultProps;
      for (Ct in B) Dt.call(B, Ct) && !me.hasOwnProperty(Ct) && (Ye[Ct] = B[Ct] === void 0 && Ke !== void 0 ? Ke[Ct] : B[Ct]);
    }
    var Ct = arguments.length - 2;
    if (Ct === 1) Ye.children = Oe;
    else if (1 < Ct) {
      Ke = Array(Ct);
      for (var Bt = 0; Bt < Ct; Bt++) Ke[Bt] = arguments[Bt + 2];
      Ye.children = Ke;
    }
    return { $$typeof: q, type: _.type, key: Qe, ref: ot, props: Ye, _owner: wt };
  }, Tt.createContext = function(_) {
    return _ = { $$typeof: St, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: gt, _context: _ }, _.Consumer = _;
  }, Tt.createElement = xe, Tt.createFactory = function(_) {
    var B = xe.bind(null, _);
    return B.type = _, B;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(_) {
    return { $$typeof: S, render: _ };
  }, Tt.isValidElement = Mt, Tt.lazy = function(_) {
    return { $$typeof: fe, _payload: { _status: -1, _result: _ }, _init: mt };
  }, Tt.memo = function(_, B) {
    return { $$typeof: _e, type: _, compare: B === void 0 ? null : B };
  }, Tt.startTransition = function(_) {
    var B = Y.transition;
    Y.transition = {};
    try {
      _();
    } finally {
      Y.transition = B;
    }
  }, Tt.unstable_act = re, Tt.useCallback = function(_, B) {
    return ut.current.useCallback(_, B);
  }, Tt.useContext = function(_) {
    return ut.current.useContext(_);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(_) {
    return ut.current.useDeferredValue(_);
  }, Tt.useEffect = function(_, B) {
    return ut.current.useEffect(_, B);
  }, Tt.useId = function() {
    return ut.current.useId();
  }, Tt.useImperativeHandle = function(_, B, Oe) {
    return ut.current.useImperativeHandle(_, B, Oe);
  }, Tt.useInsertionEffect = function(_, B) {
    return ut.current.useInsertionEffect(_, B);
  }, Tt.useLayoutEffect = function(_, B) {
    return ut.current.useLayoutEffect(_, B);
  }, Tt.useMemo = function(_, B) {
    return ut.current.useMemo(_, B);
  }, Tt.useReducer = function(_, B, Oe) {
    return ut.current.useReducer(_, B, Oe);
  }, Tt.useRef = function(_) {
    return ut.current.useRef(_);
  }, Tt.useState = function(_) {
    return ut.current.useState(_);
  }, Tt.useSyncExternalStore = function(_, B, Oe) {
    return ut.current.useSyncExternalStore(_, B, Oe);
  }, Tt.useTransition = function() {
    return ut.current.useTransition();
  }, Tt.version = "18.3.1", Tt;
}
var Jp = { exports: {} };
Jp.exports;
var ZR;
function J_() {
  return ZR || (ZR = 1, function(q, oe) {
    var D = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    D.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ct = "18.3.1", Be = Symbol.for("react.element"), gt = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), fe = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), Tn = Symbol.iterator, en = "@@iterator";
      function rt(h) {
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
      }, Dt = {
        transition: null
      }, W = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xe = {}, Vt = null;
      function Mt(h) {
        Vt = h;
      }
      xe.setExtraStackFrame = function(h) {
        Vt = h;
      }, xe.getCurrentStack = null, xe.getStackAddendum = function() {
        var h = "";
        Vt && (h += Vt);
        var C = xe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var pn = !1, Qt = !1, Et = !1, je = !1, jt = !1, mt = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: Dt,
        ReactCurrentOwner: me
      };
      mt.ReactDebugCurrentFrame = xe, mt.ReactCurrentActQueue = W;
      function ut(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          Se("warn", h, M);
        }
      }
      function Y(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          Se("error", h, M);
        }
      }
      function Se(h, C, M) {
        {
          var j = mt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", M = M.concat([Z]));
          var ge = M.map(function(de) {
            return String(de);
          });
          ge.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ge);
        }
      }
      var re = {};
      function _(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", Z = j + "." + C;
          if (re[Z])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), re[Z] = !0;
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
      }, Oe = Object.assign, Ye = {};
      Object.freeze(Ye);
      function Qe(h, C, M) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = M || B;
      }
      Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Qe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, wt = function(h, C) {
          Object.defineProperty(Qe.prototype, h, {
            get: function() {
              ut("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ke in ot)
          ot.hasOwnProperty(Ke) && wt(Ke, ot[Ke]);
      }
      function Ct() {
      }
      Ct.prototype = Qe.prototype;
      function Bt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = M || B;
      }
      var Nn = Bt.prototype = new Ct();
      Nn.constructor = Bt, Oe(Nn, Qe.prototype), Nn.isPureReactComponent = !0;
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
          return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), Mn(h);
      }
      function Wa(h, C, M) {
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
        if (typeof h.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case St:
            return "Fragment";
          case gt:
            return "Portal";
          case nt:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case fe:
              var C = h;
              return Dr(C) + ".Consumer";
            case _e:
              var M = h;
              return Dr(M._context) + ".Provider";
            case Ue:
              return Wa(h, h.render, "ForwardRef");
            case ie:
              var j = h.displayName || null;
              return j !== null ? j : Bn(h.type) || "Memo";
            case we: {
              var Z = h, ge = Z._payload, de = Z._init;
              try {
                return Bn(de(ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, qn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ga, zn;
      zn = {};
      function ir(h) {
        if (Kn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (Kn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Oi(h, C) {
        var M = function() {
          Cr || (Cr = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function da(h, C) {
        var M = function() {
          Ga || (Ga = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && me.current && h.__self && me.current.stateNode !== h.__self) {
          var C = Bn(me.current.type);
          zn[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), zn[C] = !0);
        }
      }
      var Le = function(h, C, M, j, Z, ge, de) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Be,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: de,
          // Record the component responsible for creating this element.
          _owner: ge
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
      function tt(h, C, M) {
        var j, Z = {}, ge = null, de = null, Pe = null, it = null;
        if (C != null) {
          ir(C) && (de = C.ref, ee(C)), $r(C) && (fa(C.key), ge = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, it = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Kn.call(C, j) && !qn.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          Z.children = M;
        else if (Ft > 1) {
          for (var Kt = Array(Ft), qt = 0; qt < Ft; qt++)
            Kt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Kt), Z.children = Kt;
        }
        if (h && h.defaultProps) {
          var Je = h.defaultProps;
          for (j in Je)
            Z[j] === void 0 && (Z[j] = Je[j]);
        }
        if (ge || de) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ge && Oi(Z, tn), de && da(Z, tn);
        }
        return Le(h, ge, de, Pe, it, me.current, Z);
      }
      function zt(h, C) {
        var M = Le(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function un(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = Oe({}, h.props), ge = h.key, de = h.ref, Pe = h._self, it = h._source, Ft = h._owner;
        if (C != null) {
          ir(C) && (de = C.ref, Ft = me.current), $r(C) && (fa(C.key), ge = "" + C.key);
          var Kt;
          h.type && h.type.defaultProps && (Kt = h.type.defaultProps);
          for (j in C)
            Kn.call(C, j) && !qn.hasOwnProperty(j) && (C[j] === void 0 && Kt !== void 0 ? Z[j] = Kt[j] : Z[j] = C[j]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          Z.children = M;
        else if (qt > 1) {
          for (var Je = Array(qt), tn = 0; tn < qt; tn++)
            Je[tn] = arguments[tn + 2];
          Z.children = Je;
        }
        return Le(h.type, ge, de, Pe, it, Ft, Z);
      }
      function on(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Be;
      }
      var sn = ".", Xn = ":";
      function an(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return M[Z];
        });
        return "$" + j;
      }
      var Wt = !1, Ut = /\/+/g;
      function pa(h) {
        return h.replace(Ut, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (fa(h.key), an("" + h.key)) : C.toString(36);
      }
      function ka(h, C, M, j, Z) {
        var ge = typeof h;
        (ge === "undefined" || ge === "boolean") && (h = null);
        var de = !1;
        if (h === null)
          de = !0;
        else
          switch (ge) {
            case "string":
            case "number":
              de = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Be:
                case gt:
                  de = !0;
              }
          }
        if (de) {
          var Pe = h, it = Z(Pe), Ft = j === "" ? sn + _a(Pe, 0) : j;
          if (Ln(it)) {
            var Kt = "";
            Ft != null && (Kt = pa(Ft) + "/"), ka(it, C, Kt, "", function(Xf) {
              return Xf;
            });
          } else it != null && (on(it) && (it.key && (!Pe || Pe.key !== it.key) && fa(it.key), it = zt(
            it,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (it.key && (!Pe || Pe.key !== it.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + it.key) + "/"
            ) : "") + Ft
          )), C.push(it));
          return 1;
        }
        var qt, Je, tn = 0, xn = j === "" ? sn : j + Xn;
        if (Ln(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            qt = h[Jl], Je = xn + _a(qt, Jl), tn += ka(qt, C, M, Je, Z);
        else {
          var Go = rt(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (Wt || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var eu = Go.call(Pi), Ko, qf = 0; !(Ko = eu.next()).done; )
              qt = Ko.value, Je = xn + _a(qt, qf++), tn += ka(qt, C, M, Je, Z);
          } else if (ge === "object") {
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
        return ka(h, j, "", "", function(ge) {
          return C.call(M, ge, Z++);
        }), j;
      }
      function $l(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Li(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!on(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function oi(h) {
        var C = {
          $$typeof: fe,
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
          var ge = {
            $$typeof: fe,
            _context: C
          };
          Object.defineProperties(ge, {
            Provider: {
              get: function() {
                return j || (j = !0, Y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(de) {
                C.Provider = de;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(de) {
                C._currentValue = de;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(de) {
                C._currentValue2 = de;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(de) {
                C._threadCount = de;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, Y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(de) {
                Z || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), Z = !0);
              }
            }
          }), C.Consumer = ge;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, lr = 0, ha = 1, Qr = 2;
      function si(h) {
        if (h._status === va) {
          var C = h._result, M = C();
          if (M.then(function(ge) {
            if (h._status === lr || h._status === va) {
              var de = h;
              de._status = ha, de._result = ge;
            }
          }, function(ge) {
            if (h._status === lr || h._status === va) {
              var de = h;
              de._status = Qr, de._result = ge;
            }
          }), h._status === va) {
            var j = h;
            j._status = lr, j._result = M;
          }
        }
        if (h._status === ha) {
          var Z = h._result;
          return Z === void 0 && Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
          $$typeof: we,
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
              set: function(ge) {
                Y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = ge, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(ge) {
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = ge, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === ie ? Y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Y("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Y("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ue,
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
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === St || h === nt || jt || h === S || h === J || h === Fe || je || h === lt || pn || Qt || Et || typeof h == "object" && h !== null && (h.$$typeof === we || h.$$typeof === ie || h.$$typeof === _e || h.$$typeof === fe || h.$$typeof === Ue || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ae(h, C) {
        I(h) || Y("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ie,
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
      function ue() {
        var h = Ae.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ft(h) {
        var C = ue();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? Y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && Y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function We(h) {
        var C = ue();
        return C.useState(h);
      }
      function pt(h, C, M) {
        var j = ue();
        return j.useReducer(h, C, M);
      }
      function at(h) {
        var C = ue();
        return C.useRef(h);
      }
      function wn(h, C) {
        var M = ue();
        return M.useEffect(h, C);
      }
      function ln(h, C) {
        var M = ue();
        return M.useInsertionEffect(h, C);
      }
      function cn(h, C) {
        var M = ue();
        return M.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var M = ue();
        return M.useCallback(h, C);
      }
      function Ka(h, C) {
        var M = ue();
        return M.useMemo(h, C);
      }
      function At(h, C, M) {
        var j = ue();
        return j.useImperativeHandle(h, C, M);
      }
      function vn(h, C) {
        {
          var M = ue();
          return M.useDebugValue(h, C);
        }
      }
      function Xe() {
        var h = ue();
        return h.useTransition();
      }
      function fi(h) {
        var C = ue();
        return C.useDeferredValue(h);
      }
      function zi() {
        var h = ue();
        return h.useId();
      }
      function ic(h, C, M) {
        var j = ue();
        return j.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, ll, Wr, Bo, Or, Yo, lc, uc;
      function Ai() {
      }
      Ai.__reactDisabledLog = !0;
      function ul() {
        {
          if (Ui === 0) {
            ll = console.log, Wr = console.info, Bo = console.warn, Or = console.error, Yo = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
              log: Oe({}, h, {
                value: ll
              }),
              info: Oe({}, h, {
                value: Wr
              }),
              warn: Oe({}, h, {
                value: Bo
              }),
              error: Oe({}, h, {
                value: Or
              }),
              group: Oe({}, h, {
                value: Yo
              }),
              groupCollapsed: Oe({}, h, {
                value: lc
              }),
              groupEnd: Oe({}, h, {
                value: uc
              })
            });
          }
          Ui < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = mt.ReactCurrentDispatcher, ol;
      function Fu(h, C, M) {
        {
          if (ol === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              ol = j && j[1] || "";
            }
          return `
` + ol + h;
        }
      }
      var ji = !1, Gl;
      {
        var Kl = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new Kl();
      }
      function sl(h, C) {
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
        var ge;
        ge = di.current, di.current = null, ul();
        try {
          if (C) {
            var de = function() {
              throw Error();
            };
            if (Object.defineProperty(de.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(de, []);
              } catch (xn) {
                j = xn;
              }
              Reflect.construct(h, [], de);
            } else {
              try {
                de.call();
              } catch (xn) {
                j = xn;
              }
              h.call(de.prototype);
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
`), it = j.stack.split(`
`), Ft = Pe.length - 1, Kt = it.length - 1; Ft >= 1 && Kt >= 0 && Pe[Ft] !== it[Kt]; )
              Kt--;
            for (; Ft >= 1 && Kt >= 0; Ft--, Kt--)
              if (Pe[Ft] !== it[Kt]) {
                if (Ft !== 1 || Kt !== 1)
                  do
                    if (Ft--, Kt--, Kt < 0 || Pe[Ft] !== it[Kt]) {
                      var qt = `
` + Pe[Ft].replace(" at new ", " at ");
                      return h.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, qt), qt;
                    }
                  while (Ft >= 1 && Kt >= 0);
                break;
              }
          }
        } finally {
          ji = !1, di.current = ge, Gr(), Error.prepareStackTrace = Z;
        }
        var Je = h ? h.displayName || h.name : "", tn = Je ? Fu(Je) : "";
        return typeof h == "function" && Gl.set(h, tn), tn;
      }
      function Io(h, C, M) {
        return sl(h, !1);
      }
      function $o(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function xt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return sl(h, $o(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case J:
            return Fu("Suspense");
          case Fe:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ue:
              return Io(h.render);
            case ie:
              return xt(h.type, C, M);
            case we: {
              var j = h, Z = j._payload, ge = j._init;
              try {
                return xt(ge(Z), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, Hu = mt.ReactDebugCurrentFrame;
      function bt(h) {
        if (h) {
          var C = h._owner, M = xt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, M, j, Z) {
        {
          var ge = Function.call.bind(Kn);
          for (var de in h)
            if (ge(h, de)) {
              var Pe = void 0;
              try {
                if (typeof h[de] != "function") {
                  var it = Error((j || "React class") + ": " + M + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw it.name = "Invariant Violation", it;
                }
                Pe = h[de](C, de, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Pe = Ft;
              }
              Pe && !(Pe instanceof Error) && (bt(Z), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, de, typeof Pe), bt(null)), Pe instanceof Error && !(Pe.message in Qo) && (Qo[Pe.message] = !0, bt(Z), Y("Failed %s type: %s", M, Pe.message), bt(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, M = xt(h.type, h._source, C ? C.type : null);
          Mt(M);
        } else
          Mt(null);
      }
      var Ie;
      Ie = !1;
      function ql() {
        if (me.current) {
          var h = Bn(me.current.type);
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
      function Kr(h) {
        return h != null ? Zn(h.__source) : "";
      }
      var Nr = {};
      function vi(h) {
        var C = ql();
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
            h && h._owner && h._owner !== me.current && (j = " It was passed a child from " + Bn(h._owner.type) + "."), pi(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), pi(null);
          }
        }
      }
      function Gt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var M = 0; M < h.length; M++) {
              var j = h[M];
              on(j) && Sn(j, C);
            }
          else if (on(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = rt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var ge = Z.call(h), de; !(de = ge.next()).done; )
                on(de.value) && Sn(de.value, C);
          }
        }
      }
      function qa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ue || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            M = C.propTypes;
          else
            return;
          if (M) {
            var j = Bn(C);
            oc(M, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ie) {
            Ie = !0;
            var Z = Bn(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var j = C[M];
            if (j !== "children" && j !== "key") {
              pi(h), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), Y("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function Tr(h, C, M) {
        var j = I(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Kr(C);
          ge ? Z += ge : Z += ql();
          var de;
          h === null ? de = "null" : Ln(h) ? de = "array" : h !== void 0 && h.$$typeof === Be ? (de = "<" + (Bn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, Z);
        }
        var Pe = tt.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (j)
          for (var it = 2; it < arguments.length; it++)
            Gt(arguments[it], h);
        return h === St ? Da(Pe) : qa(Pe), Pe;
      }
      var Lr = !1;
      function Kf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var j = un.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Gt(arguments[Z], j.type);
        return qa(j), j;
      }
      function Xl(h, C) {
        var M = Dt.transition;
        Dt.transition = {};
        var j = Dt.transition;
        Dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Dt.transition = M, M === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
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
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ge = new MessageChannel();
              ge.port1.onmessage = Z, ge.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, Na = !1;
      function cl(h) {
        {
          var C = Oa;
          Oa++, W.current === null && (W.current = []);
          var M = W.isBatchingLegacy, j;
          try {
            if (W.isBatchingLegacy = !0, j = h(), !M && W.didScheduleLegacyUpdate) {
              var Z = W.current;
              Z !== null && (W.didScheduleLegacyUpdate = !1, Hi(Z));
            }
          } catch (Je) {
            throw Fi(C), Je;
          } finally {
            W.isBatchingLegacy = M;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var ge = j, de = !1, Pe = {
              then: function(Je, tn) {
                de = !0, ge.then(function(xn) {
                  Fi(C), Oa === 0 ? Yu(xn, Je, tn) : Je(xn);
                }, function(xn) {
                  Fi(C), tn(xn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (Na = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var it = j;
            if (Fi(C), Oa === 0) {
              var Ft = W.current;
              Ft !== null && (Hi(Ft), W.current = null);
              var Kt = {
                then: function(Je, tn) {
                  W.current === null ? (W.current = [], Yu(it, Je, tn)) : Je(it);
                }
              };
              return Kt;
            } else {
              var qt = {
                then: function(Je, tn) {
                  Je(it);
                }
              };
              return qt;
            }
          }
        }
      }
      function Fi(h) {
        h !== Oa - 1 && Y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function Yu(h, C, M) {
        {
          var j = W.current;
          if (j !== null)
            try {
              Hi(j), Zl(function() {
                j.length === 0 ? (W.current = null, C(h)) : Yu(h, C, M);
              });
            } catch (Z) {
              M(Z);
            }
          else
            C(h);
        }
      }
      var fl = !1;
      function Hi(h) {
        if (!fl) {
          fl = !0;
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
            fl = !1;
          }
        }
      }
      var Iu = Tr, Wo = Pu, La = Kf, $u = {
        map: Ni,
        forEach: Ql,
        count: $l,
        toArray: Li,
        only: Wl
      };
      oe.Children = $u, oe.Component = Qe, oe.Fragment = St, oe.Profiler = nt, oe.PureComponent = Bt, oe.StrictMode = S, oe.Suspense = J, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mt, oe.act = cl, oe.cloneElement = Wo, oe.createContext = oi, oe.createElement = Iu, oe.createFactory = La, oe.createRef = Gn, oe.forwardRef = Mi, oe.isValidElement = on, oe.lazy = ci, oe.memo = ae, oe.startTransition = Xl, oe.unstable_act = cl, oe.useCallback = Rr, oe.useContext = ft, oe.useDebugValue = vn, oe.useDeferredValue = fi, oe.useEffect = wn, oe.useId = zi, oe.useImperativeHandle = At, oe.useInsertionEffect = ln, oe.useLayoutEffect = cn, oe.useMemo = Ka, oe.useReducer = pt, oe.useRef = at, oe.useState = We, oe.useSyncExternalStore = ic, oe.useTransition = Xe, oe.version = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var ek = {};
ek.NODE_ENV === "production" ? v0.exports = Z_() : v0.exports = J_();
var Il = v0.exports;
const tk = /* @__PURE__ */ X_(Il);
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
function nk() {
  if (JR) return qp;
  JR = 1;
  var q = Il, oe = Symbol.for("react.element"), D = Symbol.for("react.fragment"), ct = Object.prototype.hasOwnProperty, Be = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function St(S, nt, _e) {
    var fe, Ue = {}, J = null, Fe = null;
    _e !== void 0 && (J = "" + _e), nt.key !== void 0 && (J = "" + nt.key), nt.ref !== void 0 && (Fe = nt.ref);
    for (fe in nt) ct.call(nt, fe) && !gt.hasOwnProperty(fe) && (Ue[fe] = nt[fe]);
    if (S && S.defaultProps) for (fe in nt = S.defaultProps, nt) Ue[fe] === void 0 && (Ue[fe] = nt[fe]);
    return { $$typeof: oe, type: S, key: J, ref: Fe, props: Ue, _owner: Be.current };
  }
  return qp.Fragment = D, qp.jsx = St, qp.jsxs = St, qp;
}
var Xp = {}, eT;
function rk() {
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
    var oe = Il, D = Symbol.for("react.element"), ct = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), gt = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), nt = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), we = Symbol.iterator, lt = "@@iterator";
    function Tn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = we && R[we] || R[lt];
      return typeof I == "function" ? I : null;
    }
    var en = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var I = arguments.length, ae = new Array(I > 1 ? I - 1 : 0), ue = 1; ue < I; ue++)
          ae[ue - 1] = arguments[ue];
        Ae("error", R, ae);
      }
    }
    function Ae(R, I, ae) {
      {
        var ue = en.ReactDebugCurrentFrame, ft = ue.getStackAddendum();
        ft !== "" && (I += "%s", ae = ae.concat([ft]));
        var We = ae.map(function(pt) {
          return String(pt);
        });
        We.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, We);
      }
    }
    var Dt = !1, W = !1, me = !1, xe = !1, Vt = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function pn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Be || R === St || Vt || R === gt || R === fe || R === Ue || xe || R === ie || Dt || W || me || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === J || R.$$typeof === S || R.$$typeof === nt || R.$$typeof === _e || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Mt || R.getModuleId !== void 0));
    }
    function Qt(R, I, ae) {
      var ue = R.displayName;
      if (ue)
        return ue;
      var ft = I.displayName || I.name || "";
      return ft !== "" ? ae + "(" + ft + ")" : ae;
    }
    function Et(R) {
      return R.displayName || "Context";
    }
    function je(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Be:
          return "Fragment";
        case ct:
          return "Portal";
        case St:
          return "Profiler";
        case gt:
          return "StrictMode";
        case fe:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case nt:
            var I = R;
            return Et(I) + ".Consumer";
          case S:
            var ae = R;
            return Et(ae._context) + ".Provider";
          case _e:
            return Qt(R, R.render, "ForwardRef");
          case J:
            var ue = R.displayName || null;
            return ue !== null ? ue : je(R.type) || "Memo";
          case Fe: {
            var ft = R, We = ft._payload, pt = ft._init;
            try {
              return je(pt(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, mt = 0, ut, Y, Se, re, _, B, Oe;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Qe() {
      {
        if (mt === 0) {
          ut = console.log, Y = console.info, Se = console.warn, re = console.error, _ = console.group, B = console.groupCollapsed, Oe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
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
        mt++;
      }
    }
    function ot() {
      {
        if (mt--, mt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: ut
            }),
            info: jt({}, R, {
              value: Y
            }),
            warn: jt({}, R, {
              value: Se
            }),
            error: jt({}, R, {
              value: re
            }),
            group: jt({}, R, {
              value: _
            }),
            groupCollapsed: jt({}, R, {
              value: B
            }),
            groupEnd: jt({}, R, {
              value: Oe
            })
          });
        }
        mt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = en.ReactCurrentDispatcher, Ke;
    function Ct(R, I, ae) {
      {
        if (Ke === void 0)
          try {
            throw Error();
          } catch (ft) {
            var ue = ft.stack.trim().match(/\n( *(at )?)/);
            Ke = ue && ue[1] || "";
          }
        return `
` + Ke + R;
      }
    }
    var Bt = !1, Nn;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      Nn = new Gn();
    }
    function ar(R, I) {
      if (!R || Bt)
        return "";
      {
        var ae = Nn.get(R);
        if (ae !== void 0)
          return ae;
      }
      var ue;
      Bt = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = wt.current, wt.current = null, Qe();
      try {
        if (I) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (vn) {
              ue = vn;
            }
            Reflect.construct(R, [], pt);
          } else {
            try {
              pt.call();
            } catch (vn) {
              ue = vn;
            }
            R.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vn) {
            ue = vn;
          }
          R();
        }
      } catch (vn) {
        if (vn && ue && typeof vn.stack == "string") {
          for (var at = vn.stack.split(`
`), wn = ue.stack.split(`
`), ln = at.length - 1, cn = wn.length - 1; ln >= 1 && cn >= 0 && at[ln] !== wn[cn]; )
            cn--;
          for (; ln >= 1 && cn >= 0; ln--, cn--)
            if (at[ln] !== wn[cn]) {
              if (ln !== 1 || cn !== 1)
                do
                  if (ln--, cn--, cn < 0 || at[ln] !== wn[cn]) {
                    var Rr = `
` + at[ln].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && Nn.set(R, Rr), Rr;
                  }
                while (ln >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        Bt = !1, wt.current = We, ot(), Error.prepareStackTrace = ft;
      }
      var Ka = R ? R.displayName || R.name : "", At = Ka ? Ct(Ka) : "";
      return typeof R == "function" && Nn.set(R, At), At;
    }
    function Ln(R, I, ae) {
      return ar(R, !1);
    }
    function Er(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Vn(R, I, ae) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ar(R, Er(R));
      if (typeof R == "string")
        return Ct(R);
      switch (R) {
        case fe:
          return Ct("Suspense");
        case Ue:
          return Ct("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case _e:
            return Ln(R.render);
          case J:
            return Vn(R.type, I, ae);
          case Fe: {
            var ue = R, ft = ue._payload, We = ue._init;
            try {
              return Vn(We(ft), I, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Mn = Object.prototype.hasOwnProperty, fa = {}, Wa = en.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var I = R._owner, ae = Vn(R.type, R._source, I ? I.type : null);
        Wa.setExtraStackFrame(ae);
      } else
        Wa.setExtraStackFrame(null);
    }
    function Bn(R, I, ae, ue, ft) {
      {
        var We = Function.call.bind(Mn);
        for (var pt in R)
          if (We(R, pt)) {
            var at = void 0;
            try {
              if (typeof R[pt] != "function") {
                var wn = Error((ue || "React class") + ": " + ae + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              at = R[pt](I, pt, ue, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              at = ln;
            }
            at && !(at instanceof Error) && (Dr(ft), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", ae, pt, typeof at), Dr(null)), at instanceof Error && !(at.message in fa) && (fa[at.message] = !0, Dr(ft), rt("Failed %s type: %s", ae, at.message), Dr(null));
          }
      }
    }
    var Kn = Array.isArray;
    function qn(R) {
      return Kn(R);
    }
    function Cr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ae = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ae;
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
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), zn(R);
    }
    var $r = en.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, ee;
    function Le(R) {
      if (Mn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (Mn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, I) {
      typeof R.ref == "string" && $r.current;
    }
    function un(R, I) {
      {
        var ae = function() {
          da || (da = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function on(R, I) {
      {
        var ae = function() {
          ee || (ee = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var sn = function(R, I, ae, ue, ft, We, pt) {
      var at = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: ae,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return at._store = {}, Object.defineProperty(at._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(at, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(at, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
    };
    function Xn(R, I, ae, ue, ft) {
      {
        var We, pt = {}, at = null, wn = null;
        ae !== void 0 && (ir(ae), at = "" + ae), tt(I) && (ir(I.key), at = "" + I.key), Le(I) && (wn = I.ref, zt(I, ft));
        for (We in I)
          Mn.call(I, We) && !Oi.hasOwnProperty(We) && (pt[We] = I[We]);
        if (R && R.defaultProps) {
          var ln = R.defaultProps;
          for (We in ln)
            pt[We] === void 0 && (pt[We] = ln[We]);
        }
        if (at || wn) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          at && un(pt, cn), wn && on(pt, cn);
        }
        return sn(R, at, wn, ft, ue, $r.current, pt);
      }
    }
    var an = en.ReactCurrentOwner, Wt = en.ReactDebugCurrentFrame;
    function Ut(R) {
      if (R) {
        var I = R._owner, ae = Vn(R.type, R._source, I ? I.type : null);
        Wt.setExtraStackFrame(ae);
      } else
        Wt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === D;
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
    function Ql(R) {
      {
        var I = ka();
        if (!I) {
          var ae = typeof R == "string" ? R : R.displayName || R.name;
          ae && (I = `

Check the top-level render call using <` + ae + ">.");
        }
        return I;
      }
    }
    function Li(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ae = Ql(I);
        if ($l[ae])
          return;
        $l[ae] = !0;
        var ue = "";
        R && R._owner && R._owner !== an.current && (ue = " It was passed a child from " + je(R._owner.type) + "."), Ut(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ue), Ut(null);
      }
    }
    function Wl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (qn(R))
          for (var ae = 0; ae < R.length; ae++) {
            var ue = R[ae];
            _a(ue) && Li(ue, I);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ft = Tn(R);
          if (typeof ft == "function" && ft !== R.entries)
            for (var We = ft.call(R), pt; !(pt = We.next()).done; )
              _a(pt.value) && Li(pt.value, I);
        }
      }
    }
    function oi(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var ae;
        if (typeof I == "function")
          ae = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === _e || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === J))
          ae = I.propTypes;
        else
          return;
        if (ae) {
          var ue = je(I);
          Bn(ae, R.props, "prop", ue, R);
        } else if (I.PropTypes !== void 0 && !pa) {
          pa = !0;
          var ft = je(I);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(R) {
      {
        for (var I = Object.keys(R.props), ae = 0; ae < I.length; ae++) {
          var ue = I[ae];
          if (ue !== "children" && ue !== "key") {
            Ut(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ut(null);
            break;
          }
        }
        R.ref !== null && (Ut(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    var lr = {};
    function ha(R, I, ae, ue, ft, We) {
      {
        var pt = pn(R);
        if (!pt) {
          var at = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Ni();
          wn ? at += wn : at += ka();
          var ln;
          R === null ? ln = "null" : qn(R) ? ln = "array" : R !== void 0 && R.$$typeof === D ? (ln = "<" + (je(R.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, at);
        }
        var cn = Xn(R, I, ae, ft, We);
        if (cn == null)
          return cn;
        if (pt) {
          var Rr = I.children;
          if (Rr !== void 0)
            if (ue)
              if (qn(Rr)) {
                for (var Ka = 0; Ka < Rr.length; Ka++)
                  Wl(Rr[Ka], R);
                Object.freeze && Object.freeze(Rr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Rr, R);
        }
        if (Mn.call(I, "key")) {
          var At = je(R), vn = Object.keys(I).filter(function(zi) {
            return zi !== "key";
          }), Xe = vn.length > 0 ? "{key: someKey, " + vn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[At + Xe]) {
            var fi = vn.length > 0 ? "{" + vn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, At, fi, At), lr[At + Xe] = !0;
          }
        }
        return R === Be ? va(cn) : oi(cn), cn;
      }
    }
    function Qr(R, I, ae) {
      return ha(R, I, ae, !0);
    }
    function si(R, I, ae) {
      return ha(R, I, ae, !1);
    }
    var ci = si, Mi = Qr;
    Xp.Fragment = Be, Xp.jsx = ci, Xp.jsxs = Mi;
  }(), Xp;
}
var ak = {};
ak.NODE_ENV === "production" ? p0.exports = nk() : p0.exports = rk();
var Re = p0.exports, ev = {}, h0 = { exports: {} }, $a = {}, Qm = { exports: {} }, f0 = {};
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
function ik() {
  return tT || (tT = 1, function(q) {
    function oe(Y, Se) {
      var re = Y.length;
      Y.push(Se);
      e: for (; 0 < re; ) {
        var _ = re - 1 >>> 1, B = Y[_];
        if (0 < Be(B, Se)) Y[_] = Se, Y[re] = B, re = _;
        else break e;
      }
    }
    function D(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function ct(Y) {
      if (Y.length === 0) return null;
      var Se = Y[0], re = Y.pop();
      if (re !== Se) {
        Y[0] = re;
        e: for (var _ = 0, B = Y.length, Oe = B >>> 1; _ < Oe; ) {
          var Ye = 2 * (_ + 1) - 1, Qe = Y[Ye], ot = Ye + 1, wt = Y[ot];
          if (0 > Be(Qe, re)) ot < B && 0 > Be(wt, Qe) ? (Y[_] = wt, Y[ot] = re, _ = ot) : (Y[_] = Qe, Y[Ye] = re, _ = Ye);
          else if (ot < B && 0 > Be(wt, re)) Y[_] = wt, Y[ot] = re, _ = ot;
          else break e;
        }
      }
      return Se;
    }
    function Be(Y, Se) {
      var re = Y.sortIndex - Se.sortIndex;
      return re !== 0 ? re : Y.id - Se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var gt = performance;
      q.unstable_now = function() {
        return gt.now();
      };
    } else {
      var St = Date, S = St.now();
      q.unstable_now = function() {
        return St.now() - S;
      };
    }
    var nt = [], _e = [], fe = 1, Ue = null, J = 3, Fe = !1, ie = !1, we = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Tn = typeof clearTimeout == "function" ? clearTimeout : null, en = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function rt(Y) {
      for (var Se = D(_e); Se !== null; ) {
        if (Se.callback === null) ct(_e);
        else if (Se.startTime <= Y) ct(_e), Se.sortIndex = Se.expirationTime, oe(nt, Se);
        else break;
        Se = D(_e);
      }
    }
    function Ae(Y) {
      if (we = !1, rt(Y), !ie) if (D(nt) !== null) ie = !0, mt(Dt);
      else {
        var Se = D(_e);
        Se !== null && ut(Ae, Se.startTime - Y);
      }
    }
    function Dt(Y, Se) {
      ie = !1, we && (we = !1, Tn(xe), xe = -1), Fe = !0;
      var re = J;
      try {
        for (rt(Se), Ue = D(nt); Ue !== null && (!(Ue.expirationTime > Se) || Y && !pn()); ) {
          var _ = Ue.callback;
          if (typeof _ == "function") {
            Ue.callback = null, J = Ue.priorityLevel;
            var B = _(Ue.expirationTime <= Se);
            Se = q.unstable_now(), typeof B == "function" ? Ue.callback = B : Ue === D(nt) && ct(nt), rt(Se);
          } else ct(nt);
          Ue = D(nt);
        }
        if (Ue !== null) var Oe = !0;
        else {
          var Ye = D(_e);
          Ye !== null && ut(Ae, Ye.startTime - Se), Oe = !1;
        }
        return Oe;
      } finally {
        Ue = null, J = re, Fe = !1;
      }
    }
    var W = !1, me = null, xe = -1, Vt = 5, Mt = -1;
    function pn() {
      return !(q.unstable_now() - Mt < Vt);
    }
    function Qt() {
      if (me !== null) {
        var Y = q.unstable_now();
        Mt = Y;
        var Se = !0;
        try {
          Se = me(!0, Y);
        } finally {
          Se ? Et() : (W = !1, me = null);
        }
      } else W = !1;
    }
    var Et;
    if (typeof en == "function") Et = function() {
      en(Qt);
    };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), jt = je.port2;
      je.port1.onmessage = Qt, Et = function() {
        jt.postMessage(null);
      };
    } else Et = function() {
      lt(Qt, 0);
    };
    function mt(Y) {
      me = Y, W || (W = !0, Et());
    }
    function ut(Y, Se) {
      xe = lt(function() {
        Y(q.unstable_now());
      }, Se);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, q.unstable_continueExecution = function() {
      ie || Fe || (ie = !0, mt(Dt));
    }, q.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vt = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, q.unstable_getFirstCallbackNode = function() {
      return D(nt);
    }, q.unstable_next = function(Y) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var Se = 3;
          break;
        default:
          Se = J;
      }
      var re = J;
      J = Se;
      try {
        return Y();
      } finally {
        J = re;
      }
    }, q.unstable_pauseExecution = function() {
    }, q.unstable_requestPaint = function() {
    }, q.unstable_runWithPriority = function(Y, Se) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var re = J;
      J = Y;
      try {
        return Se();
      } finally {
        J = re;
      }
    }, q.unstable_scheduleCallback = function(Y, Se, re) {
      var _ = q.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? _ + re : _) : re = _, Y) {
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
      return B = re + B, Y = { id: fe++, callback: Se, priorityLevel: Y, startTime: re, expirationTime: B, sortIndex: -1 }, re > _ ? (Y.sortIndex = re, oe(_e, Y), D(nt) === null && Y === D(_e) && (we ? (Tn(xe), xe = -1) : we = !0, ut(Ae, re - _))) : (Y.sortIndex = B, oe(nt, Y), ie || Fe || (ie = !0, mt(Dt))), Y;
    }, q.unstable_shouldYield = pn, q.unstable_wrapCallback = function(Y) {
      var Se = J;
      return function() {
        var re = J;
        J = Se;
        try {
          return Y.apply(this, arguments);
        } finally {
          J = re;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {}, nT;
function lk() {
  return nT || (nT = 1, function(q) {
    var oe = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    oe.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, ct = 5;
      function Be(ee, Le) {
        var tt = ee.length;
        ee.push(Le), S(ee, Le, tt);
      }
      function gt(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function St(ee) {
        if (ee.length === 0)
          return null;
        var Le = ee[0], tt = ee.pop();
        return tt !== Le && (ee[0] = tt, nt(ee, tt, 0)), Le;
      }
      function S(ee, Le, tt) {
        for (var zt = tt; zt > 0; ) {
          var un = zt - 1 >>> 1, on = ee[un];
          if (_e(on, Le) > 0)
            ee[un] = Le, ee[zt] = on, zt = un;
          else
            return;
        }
      }
      function nt(ee, Le, tt) {
        for (var zt = tt, un = ee.length, on = un >>> 1; zt < on; ) {
          var sn = (zt + 1) * 2 - 1, Xn = ee[sn], an = sn + 1, Wt = ee[an];
          if (_e(Xn, Le) < 0)
            an < un && _e(Wt, Xn) < 0 ? (ee[zt] = Wt, ee[an] = Le, zt = an) : (ee[zt] = Xn, ee[sn] = Le, zt = sn);
          else if (an < un && _e(Wt, Le) < 0)
            ee[zt] = Wt, ee[an] = Le, zt = an;
          else
            return;
        }
      }
      function _e(ee, Le) {
        var tt = ee.sortIndex - Le.sortIndex;
        return tt !== 0 ? tt : ee.id - Le.id;
      }
      var fe = 1, Ue = 2, J = 3, Fe = 4, ie = 5;
      function we(ee, Le) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var Tn = performance;
        q.unstable_now = function() {
          return Tn.now();
        };
      } else {
        var en = Date, rt = en.now();
        q.unstable_now = function() {
          return en.now() - rt;
        };
      }
      var Ae = 1073741823, Dt = -1, W = 250, me = 5e3, xe = 1e4, Vt = Ae, Mt = [], pn = [], Qt = 1, Et = null, je = J, jt = !1, mt = !1, ut = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(ee) {
        for (var Le = gt(pn); Le !== null; ) {
          if (Le.callback === null)
            St(pn);
          else if (Le.startTime <= ee)
            St(pn), Le.sortIndex = Le.expirationTime, Be(Mt, Le);
          else
            return;
          Le = gt(pn);
        }
      }
      function B(ee) {
        if (ut = !1, _(ee), !mt)
          if (gt(Mt) !== null)
            mt = !0, zn(Oe);
          else {
            var Le = gt(pn);
            Le !== null && ir(B, Le.startTime - ee);
          }
      }
      function Oe(ee, Le) {
        mt = !1, ut && (ut = !1, $r()), jt = !0;
        var tt = je;
        try {
          var zt;
          if (!D) return Ye(ee, Le);
        } finally {
          Et = null, je = tt, jt = !1;
        }
      }
      function Ye(ee, Le) {
        var tt = Le;
        for (_(tt), Et = gt(Mt); Et !== null && !(Et.expirationTime > tt && (!ee || Wa())); ) {
          var zt = Et.callback;
          if (typeof zt == "function") {
            Et.callback = null, je = Et.priorityLevel;
            var un = Et.expirationTime <= tt, on = zt(un);
            tt = q.unstable_now(), typeof on == "function" ? Et.callback = on : Et === gt(Mt) && St(Mt), _(tt);
          } else
            St(Mt);
          Et = gt(Mt);
        }
        if (Et !== null)
          return !0;
        var sn = gt(pn);
        return sn !== null && ir(B, sn.startTime - tt), !1;
      }
      function Qe(ee, Le) {
        switch (ee) {
          case fe:
          case Ue:
          case J:
          case Fe:
          case ie:
            break;
          default:
            ee = J;
        }
        var tt = je;
        je = ee;
        try {
          return Le();
        } finally {
          je = tt;
        }
      }
      function ot(ee) {
        var Le;
        switch (je) {
          case fe:
          case Ue:
          case J:
            Le = J;
            break;
          default:
            Le = je;
            break;
        }
        var tt = je;
        je = Le;
        try {
          return ee();
        } finally {
          je = tt;
        }
      }
      function wt(ee) {
        var Le = je;
        return function() {
          var tt = je;
          je = Le;
          try {
            return ee.apply(this, arguments);
          } finally {
            je = tt;
          }
        };
      }
      function Ke(ee, Le, tt) {
        var zt = q.unstable_now(), un;
        if (typeof tt == "object" && tt !== null) {
          var on = tt.delay;
          typeof on == "number" && on > 0 ? un = zt + on : un = zt;
        } else
          un = zt;
        var sn;
        switch (ee) {
          case fe:
            sn = Dt;
            break;
          case Ue:
            sn = W;
            break;
          case ie:
            sn = Vt;
            break;
          case Fe:
            sn = xe;
            break;
          case J:
          default:
            sn = me;
            break;
        }
        var Xn = un + sn, an = {
          id: Qt++,
          callback: Le,
          priorityLevel: ee,
          startTime: un,
          expirationTime: Xn,
          sortIndex: -1
        };
        return un > zt ? (an.sortIndex = un, Be(pn, an), gt(Mt) === null && an === gt(pn) && (ut ? $r() : ut = !0, ir(B, un - zt))) : (an.sortIndex = Xn, Be(Mt, an), !mt && !jt && (mt = !0, zn(Oe))), an;
      }
      function Ct() {
      }
      function Bt() {
        !mt && !jt && (mt = !0, zn(Oe));
      }
      function Nn() {
        return gt(Mt);
      }
      function Gn(ee) {
        ee.callback = null;
      }
      function ar() {
        return je;
      }
      var Ln = !1, Er = null, Vn = -1, Mn = ct, fa = -1;
      function Wa() {
        var ee = q.unstable_now() - fa;
        return !(ee < Mn);
      }
      function Dr() {
      }
      function Bn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Mn = Math.floor(1e3 / ee) : Mn = ct;
      }
      var Kn = function() {
        if (Er !== null) {
          var ee = q.unstable_now();
          fa = ee;
          var Le = !0, tt = !0;
          try {
            tt = Er(Le, ee);
          } finally {
            tt ? qn() : (Ln = !1, Er = null);
          }
        } else
          Ln = !1;
      }, qn;
      if (typeof re == "function")
        qn = function() {
          re(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = Kn, qn = function() {
          Ga.postMessage(null);
        };
      } else
        qn = function() {
          Y(Kn, 0);
        };
      function zn(ee) {
        Er = ee, Ln || (Ln = !0, qn());
      }
      function ir(ee, Le) {
        Vn = Y(function() {
          ee(q.unstable_now());
        }, Le);
      }
      function $r() {
        Se(Vn), Vn = -1;
      }
      var Oi = Dr, da = null;
      q.unstable_IdlePriority = ie, q.unstable_ImmediatePriority = fe, q.unstable_LowPriority = Fe, q.unstable_NormalPriority = J, q.unstable_Profiling = da, q.unstable_UserBlockingPriority = Ue, q.unstable_cancelCallback = Gn, q.unstable_continueExecution = Bt, q.unstable_forceFrameRate = Bn, q.unstable_getCurrentPriorityLevel = ar, q.unstable_getFirstCallbackNode = Nn, q.unstable_next = ot, q.unstable_pauseExecution = Ct, q.unstable_requestPaint = Oi, q.unstable_runWithPriority = Qe, q.unstable_scheduleCallback = Ke, q.unstable_shouldYield = Wa, q.unstable_wrapCallback = wt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rT;
function uT() {
  if (rT) return Qm.exports;
  rT = 1;
  var q = {};
  return q.NODE_ENV === "production" ? Qm.exports = ik() : Qm.exports = lk(), Qm.exports;
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
function uk() {
  if (aT) return $a;
  aT = 1;
  var q = Il, oe = uT();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ct = /* @__PURE__ */ new Set(), Be = {};
  function gt(n, r) {
    St(n, r), St(n + "Capture", r);
  }
  function St(n, r) {
    for (Be[n] = r, n = 0; n < r.length; n++) ct.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nt = Object.prototype.hasOwnProperty, _e = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, Ue = {};
  function J(n) {
    return nt.call(Ue, n) ? !0 : nt.call(fe, n) ? !1 : _e.test(n) ? Ue[n] = !0 : (fe[n] = !0, !1);
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
  function ie(n, r, l, o) {
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
  function we(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var lt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    lt[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    lt[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    lt[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    lt[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    lt[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    lt[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    lt[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    lt[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    lt[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    lt[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Tn, en);
    lt[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Tn, en);
    lt[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    lt[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), lt.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    lt[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function rt(n, r, l, o) {
    var c = lt.hasOwnProperty(r) ? lt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, l, c, o) && (l = null), o || c === null ? J(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ae = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dt = Symbol.for("react.element"), W = Symbol.for("react.portal"), me = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), Vt = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), pn = Symbol.for("react.context"), Qt = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Se(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, _;
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
  var Oe = !1;
  function Ye(n, r) {
    if (!n || Oe) return "";
    Oe = !0;
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
      Oe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Qe(n) {
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
        return n = Ye(n.type, !1), n;
      case 11:
        return n = Ye(n.type.render, !1), n;
      case 1:
        return n = Ye(n.type, !0), n;
      default:
        return "";
    }
  }
  function ot(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case me:
        return "Fragment";
      case W:
        return "Portal";
      case Vt:
        return "Profiler";
      case xe:
        return "StrictMode";
      case Et:
        return "Suspense";
      case je:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case pn:
        return (n.displayName || "Context") + ".Consumer";
      case Mt:
        return (n._context.displayName || "Context") + ".Provider";
      case Qt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case mt:
        r = n._payload, n = n._init;
        try {
          return ot(n(r));
        } catch {
        }
    }
    return null;
  }
  function wt(n) {
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
        return ot(r);
      case 8:
        return r === xe ? "StrictMode" : "Mode";
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
  function Ke(n) {
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
  function Ct(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = Ct(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    return n && (o = Ct(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ke(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  function Mn(n, r) {
    Vn(n, r);
    var l = Ke(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wa(n, r.type, Ke(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wa(n, r, l) {
    (r !== "number" || ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Bn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ke(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(D(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(D(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ke(l) };
  }
  function Cr(n, r) {
    var l = Ke(r.value), o = Ke(r.defaultValue);
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
  var ee = {
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
  }, Le = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    Le.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = tt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var un = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (un[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(D(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(D(62));
    }
  }
  function sn(n, r) {
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
  var Wt = null, Ut = null, pa = null;
  function _a(n) {
    if (n = ss(n)) {
      if (typeof Wt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = Ii(r), Wt(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Ut ? pa ? pa.push(n) : pa = [n] : Ut = n;
  }
  function Ni() {
    if (Ut) {
      var n = Ut, r = pa;
      if (pa = Ut = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
    }
  }
  function $l(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Li = !1;
  function Wl(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return $l(n, r, l);
    } finally {
      Li = !1, (Ut !== null || pa !== null) && (Ql(), Ni());
    }
  }
  function oi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Ii(l);
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
    if (l && typeof l != "function") throw Error(D(231, r, typeof l));
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
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Qr = !1, si = null, ci = !1, Mi = null, R = { onError: function(n) {
    Qr = !0, si = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    Qr = !1, si = null, ha.apply(R, arguments);
  }
  function ae(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), Qr) {
      if (Qr) {
        var U = si;
        Qr = !1, si = null;
      } else throw Error(D(198));
      ci || (ci = !0, Mi = U);
    }
  }
  function ue(n) {
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
  function ft(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function We(n) {
    if (ue(n) !== n) throw Error(D(188));
  }
  function pt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ue(n), r === null) throw Error(D(188));
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
          if (d === l) return We(c), n;
          if (d === o) return We(c), r;
          d = d.sibling;
        }
        throw Error(D(188));
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
          if (!m) throw Error(D(189));
        }
      }
      if (l.alternate !== o) throw Error(D(190));
    }
    if (l.tag !== 3) throw Error(D(188));
    return l.stateNode.current === l ? n : r;
  }
  function at(n) {
    return n = pt(n), n !== null ? wn(n) : null;
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
  var ln = oe.unstable_scheduleCallback, cn = oe.unstable_cancelCallback, Rr = oe.unstable_shouldYield, Ka = oe.unstable_requestPaint, At = oe.unstable_now, vn = oe.unstable_getCurrentPriorityLevel, Xe = oe.unstable_ImmediatePriority, fi = oe.unstable_UserBlockingPriority, zi = oe.unstable_NormalPriority, ic = oe.unstable_LowPriority, Ui = oe.unstable_IdlePriority, ll = null, Wr = null;
  function Bo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ll, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Yo = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / lc | 0) | 0;
  }
  var Ai = 64, ul = 4194304;
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
  function ol(n, r) {
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
      T === -1 ? (!(E & l) || E & o) && (c[m] = ol(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function Kl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Io(n, r) {
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
  var xt = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, bt, oc, pi, Ie, ql = !1, Zn = [], Kr = null, Nr = null, vi = null, Sn = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), qa = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
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
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && bt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Kf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kr = Lr(Kr, n, r, l, o, c), !0;
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
      var l = ue(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ft(l), r !== null) {
            n.blockedOn = r, Ie(n.priority, function() {
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
      var l = Iu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xn = o, l.target.dispatchEvent(o), Xn = null;
      } else return r = ss(l), r !== null && bt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    ql = !1, Kr !== null && Xl(Kr) && (Kr = null), Nr !== null && Xl(Nr) && (Nr = null), vi !== null && Xl(vi) && (vi = null), Sn.forEach(Vu), Gt.forEach(Vu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, Bu)));
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
    for (Kr !== null && Zl(Kr, n), Nr !== null && Zl(Nr, n), vi !== null && Zl(vi, n), Sn.forEach(r), Gt.forEach(r), l = 0; l < qa.length; l++) o = qa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qa.length && (l = qa[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && qa.shift();
  }
  var Na = Ae.ReactCurrentBatchConfig, cl = !0;
  function Fi(n, r, l, o) {
    var c = xt, d = Na.transition;
    Na.transition = null;
    try {
      xt = 1, fl(n, r, l, o);
    } finally {
      xt = c, Na.transition = d;
    }
  }
  function Yu(n, r, l, o) {
    var c = xt, d = Na.transition;
    Na.transition = null;
    try {
      xt = 4, fl(n, r, l, o);
    } finally {
      xt = c, Na.transition = d;
    }
  }
  function fl(n, r, l, o) {
    if (cl) {
      var c = Iu(n, r, l, o);
      if (c === null) od(n, r, o, Hi, l), Tr(n, o);
      else if (Kf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Hu(d), d = Iu(n, r, l, o), d === null && od(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Iu(n, r, l, o) {
    if (Hi = null, n = an(o), n = iu(n), n !== null) if (r = ue(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ft(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
  }
  function Wo(n) {
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
  function ge(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : Z, this.isPropagationStopped = Z, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var de = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pe = ge(de), it = re({}, de, { view: 0, detail: 0 }), Ft = ge(it), Kt, qt, Je, tn = re({}, it, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Je && (Je && n.type === "mousemove" ? (Kt = n.screenX - Je.screenX, qt = n.screenY - Je.screenY) : qt = Kt = 0, Je = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), xn = ge(tn), Jl = re({}, tn, { dataTransfer: 0 }), Go = ge(Jl), Pi = re({}, it, { relatedTarget: 0 }), eu = ge(Pi), Ko = re({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = ge(Ko), sc = re({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = ge(sc), tv = re({}, de, { data: 0 }), cc = ge(tv), nv = {
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
  var Km = re({}, it, { key: function(n) {
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
  } }), Zf = ge(Km), Jf = re({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = ge(Jf), qm = re({}, it, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), dc = ge(qm), iv = re({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qr = ge(iv), Vi = re({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Un = ge(Vi), Bi = [9, 13, 27, 32], qo = S && "CompositionEvent" in window, dl = null;
  S && "documentMode" in document && (dl = document.documentMode);
  var Xm = S && "TextEvent" in window && !dl, Qu = S && (!qo || dl && 8 < dl && 11 >= dl), lv = " ", uv = !1;
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
  var Wu = !1;
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
    if (Wu) return n === "compositionend" || !qo && pc(n, r) ? (n = C(), h = $u = La = null, Wu = !1, n) : null;
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
        return Qu && r.locale !== "ko" ? null : r.data;
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
      fv(r, hi, n, an(n)), Wl(ed, r);
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
      if (!nt.call(r, c) || !Za(n[c], r[c])) return !1;
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
  function pl() {
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
  function Ku(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = pl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ku(l)) {
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
  var qu = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, rd = null, Jo = null, ad = !1;
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Xu == null || Xu !== ar(o) || (o = Xu, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = ls(rd, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
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
    _v.set(n, r), gt(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], ns = ld.toLowerCase(), ry = ld[0].toUpperCase() + ld.slice(1);
    mi(ns, "on" + ry);
  }
  mi(Tv, "onAnimationEnd"), mi(wv, "onAnimationIteration"), mi(xv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(bv, "onTransitionEnd"), St("onMouseEnter", ["mouseout", "mouseover"]), St("onMouseLeave", ["mouseout", "mouseover"]), St("onPointerEnter", ["pointerout", "pointerover"]), St("onPointerLeave", ["pointerout", "pointerover"]), gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ae(o, r, void 0, n), n.currentTarget = null;
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
  function Ht(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function vl(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, ct.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || vl(l, !1, n), vl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, vl("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Wo(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Yu;
        break;
      default:
        c = fl;
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
    Wl(function() {
      var U = d, Q = an(l), G = [];
      e: {
        var $ = _v.get(n);
        if ($ !== void 0) {
          var pe = Pe, Ee = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = Zf;
              break;
            case "focusin":
              Ee = "focus", pe = eu;
              break;
            case "focusout":
              Ee = "blur", pe = eu;
              break;
            case "beforeblur":
            case "afterblur":
              pe = eu;
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
              pe = xn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = dc;
              break;
            case Tv:
            case wv:
            case xv:
              pe = qf;
              break;
            case bv:
              pe = qr;
              break;
            case "scroll":
              pe = Ft;
              break;
            case "wheel":
              pe = Un;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = fc;
          }
          var Te = (r & 4) !== 0, Dn = !Te && n === "scroll", k = Te ? $ !== null ? $ + "Capture" : null : $;
          Te = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var X = L.stateNode;
            if (L.tag === 5 && X !== null && (L = X, k !== null && (X = oi(x, k), X != null && Te.push(Ju(x, X, L)))), Dn) break;
            x = x.return;
          }
          0 < Te.length && ($ = new pe($, Ee, null, l, Q), G.push({ event: $, listeners: Te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", $ && l !== Xn && (Ee = l.relatedTarget || l.fromElement) && (iu(Ee) || Ee[Yi])) break e;
          if ((pe || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, pe ? (Ee = l.relatedTarget || l.toElement, pe = U, Ee = Ee ? iu(Ee) : null, Ee !== null && (Dn = ue(Ee), Ee !== Dn || Ee.tag !== 5 && Ee.tag !== 6) && (Ee = null)) : (pe = null, Ee = U), pe !== Ee)) {
            if (Te = xn, X = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Te = fc, X = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Dn = pe == null ? $ : ke(pe), L = Ee == null ? $ : ke(Ee), $ = new Te(X, x + "leave", pe, l, Q), $.target = Dn, $.relatedTarget = L, X = null, iu(Q) === U && (Te = new Te(k, x + "enter", Ee, l, Q), Te.target = L, Te.relatedTarget = Dn, X = Te), Dn = X, pe && Ee) t: {
              for (Te = pe, k = Ee, x = 0, L = Te; L; L = nu(L)) x++;
              for (L = 0, X = k; X; X = nu(X)) L++;
              for (; 0 < x - L; ) Te = nu(Te), x--;
              for (; 0 < L - x; ) k = nu(k), L--;
              for (; x--; ) {
                if (Te === k || k !== null && Te === k.alternate) break t;
                Te = nu(Te), k = nu(k);
              }
              Te = null;
            }
            else Te = null;
            pe !== null && gc(G, $, pe, Te, !1), Ee !== null && Dn !== null && gc(G, Dn, Ee, Te, !0);
          }
        }
        e: {
          if ($ = U ? ke(U) : window, pe = $.nodeName && $.nodeName.toLowerCase(), pe === "select" || pe === "input" && $.type === "file") var se = dv;
          else if (cv($)) if (pv) se = ny;
          else {
            se = ty;
            var Ne = ey;
          }
          else (pe = $.nodeName) && pe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (se = yv);
          if (se && (se = se(n, U))) {
            fv(G, se, l, Q);
            break e;
          }
          Ne && Ne(n, $, U), n === "focusout" && (Ne = $._wrapperState) && Ne.controlled && $.type === "number" && Wa($, "number", $.value);
        }
        switch (Ne = U ? ke(U) : window, n) {
          case "focusin":
            (cv(Ne) || Ne.contentEditable === "true") && (Xu = Ne, rd = U, Jo = null);
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
            ad = !1, Rv(G, l, Q);
            break;
          case "selectionchange":
            if (qu) break;
          case "keydown":
          case "keyup":
            Rv(G, l, Q);
        }
        var ze;
        if (qo) e: {
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
        else Wu ? pc(n, l) && ($e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Qu && l.locale !== "ko" && (Wu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Wu && (ze = C()) : (La = Q, $u = "value" in La ? La.value : La.textContent, Wu = !0)), Ne = ls(U, $e), 0 < Ne.length && ($e = new cc($e, n, null, l, Q), G.push({ event: $e, listeners: Ne }), ze ? $e.data = ze : (ze = ov(l), ze !== null && ($e.data = ze)))), (ze = Xm ? Zm(n, l) : sv(n, l)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (Q = new cc("onBeforeInput", "beforeinput", null, l, Q), G.push({ event: Q, listeners: U }), Q.data = ze));
      }
      yc(G, r);
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
    if (r = Dv(r), Dv(n) !== r && l) throw Error(D(425));
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
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, os = "__reactProps$" + no, Yi = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
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
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ke(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(D(33));
  }
  function Ii(n) {
    return n[os] || null;
  }
  var En = [], vt = -1;
  function Xr(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > vt || (n.current = En[vt], En[vt] = null, vt--);
  }
  function nn(n, r) {
    vt++, En[vt] = n.current, n.current = r;
  }
  var st = {}, hn = Xr(st), An = Xr(!1), za = st;
  function ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return st;
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
    Yt(An), Yt(hn);
  }
  function wc(n, r, l) {
    if (hn.current !== st) throw Error(D(168));
    nn(hn, r), nn(An, l);
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, wt(n) || "Unknown", c));
    return re({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || st, za = hn.current, nn(hn, n), nn(An, An.current), !0;
  }
  function xr(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = Nv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Yt(An), Yt(hn), nn(hn, n)) : Yt(An), nn(An, l);
  }
  var ei = null, cs = !1, fs = !1;
  function hl(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  function fd(n) {
    cs = !0, hl(n);
  }
  function Mr() {
    if (!fs && ei !== null) {
      fs = !0;
      var n = 0, r = xt;
      try {
        var l = ei;
        for (xt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, cs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), ln(Xe, Mr), c;
      } finally {
        xt = r, fs = !1;
      }
    }
    return null;
  }
  var ml = [], yl = 0, ao = null, gl = 0, ur = [], jn = 0, uu = null, zr = 1, gi = "";
  function Sl(n, r) {
    ml[yl++] = gl, ml[yl++] = ao, ao = n, gl = r;
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
    n.return !== null && (Sl(n, 1), Lv(n, 1, 0));
  }
  function xc(n) {
    for (; n === ao; ) ao = ml[--yl], ml[yl] = null, gl = ml[--yl], ml[yl] = null;
    for (; n === uu; ) uu = ur[--jn], ur[jn] = null, gi = ur[--jn], ur[jn] = null, zr = ur[--jn], ur[jn] = null;
  }
  var Zr = null, Jr = null, fn = !1, ti = null;
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
    if (fn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(D(418));
          r = Ja(l.nextSibling);
          var o = Zr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Zr = n);
        }
      } else {
        if (hd(n)) throw Error(D(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Zr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function bn(n) {
    if (n !== Zr) return !1;
    if (!fn) return Mv(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (hd(n)) throw zv(), Error(D(418));
      for (; r; ) pd(n, r), r = Ja(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(D(317));
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
    Jr = Zr = null, fn = !1;
  }
  function ds(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var ou = Ae.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(D(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(D(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(D(284));
      if (!l._owner) throw Error(D(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Ol(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, L, X) {
      return x === null || x.tag !== 6 ? (x = xu(L, k.mode, X), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, X) {
      var se = L.type;
      return se === me ? Q(k, x, L.props.children, X, L.key) : x !== null && (x.elementType === se || typeof se == "object" && se !== null && se.$$typeof === mt && Uv(se) === x.type) ? (X = c(x, L.props), X.ref = ps(k, x, L), X.return = k, X) : (X = ff(L.type, L.key, L.props, null, k.mode, X), X.ref = ps(k, x, L), X.return = k, X);
    }
    function U(k, x, L, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Wd(L, k.mode, X), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function Q(k, x, L, X, se) {
      return x === null || x.tag !== 7 ? (x = Nl(L, k.mode, X, se), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function G(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = xu("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Dt:
            return L = ff(x.type, x.key, x.props, null, k.mode, L), L.ref = ps(k, null, x), L.return = k, L;
          case W:
            return x = Wd(x, k.mode, L), x.return = k, x;
          case mt:
            var X = x._init;
            return G(k, X(x._payload), L);
        }
        if (Dr(x) || Se(x)) return x = Nl(x, k.mode, L, null), x.return = k, x;
        io(k, x);
      }
      return null;
    }
    function $(k, x, L, X) {
      var se = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return se !== null ? null : E(k, x, "" + L, X);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Dt:
            return L.key === se ? T(k, x, L, X) : null;
          case W:
            return L.key === se ? U(k, x, L, X) : null;
          case mt:
            return se = L._init, $(
              k,
              x,
              se(L._payload),
              X
            );
        }
        if (Dr(L) || Se(L)) return se !== null ? null : Q(k, x, L, X, null);
        io(k, L);
      }
      return null;
    }
    function pe(k, x, L, X, se) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return k = k.get(L) || null, E(x, k, "" + X, se);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Dt:
            return k = k.get(X.key === null ? L : X.key) || null, T(x, k, X, se);
          case W:
            return k = k.get(X.key === null ? L : X.key) || null, U(x, k, X, se);
          case mt:
            var Ne = X._init;
            return pe(k, x, L, Ne(X._payload), se);
        }
        if (Dr(X) || Se(X)) return k = k.get(L) || null, Q(x, k, X, se, null);
        io(x, X);
      }
      return null;
    }
    function Ee(k, x, L, X) {
      for (var se = null, Ne = null, ze = x, $e = x = 0, Qn = null; ze !== null && $e < L.length; $e++) {
        ze.index > $e ? (Qn = ze, ze = null) : Qn = ze.sibling;
        var Ot = $(k, ze, L[$e], X);
        if (Ot === null) {
          ze === null && (ze = Qn);
          break;
        }
        n && ze && Ot.alternate === null && r(k, ze), x = d(Ot, x, $e), Ne === null ? se = Ot : Ne.sibling = Ot, Ne = Ot, ze = Qn;
      }
      if ($e === L.length) return l(k, ze), fn && Sl(k, $e), se;
      if (ze === null) {
        for (; $e < L.length; $e++) ze = G(k, L[$e], X), ze !== null && (x = d(ze, x, $e), Ne === null ? se = ze : Ne.sibling = ze, Ne = ze);
        return fn && Sl(k, $e), se;
      }
      for (ze = o(k, ze); $e < L.length; $e++) Qn = pe(ze, k, $e, L[$e], X), Qn !== null && (n && Qn.alternate !== null && ze.delete(Qn.key === null ? $e : Qn.key), x = d(Qn, x, $e), Ne === null ? se = Qn : Ne.sibling = Qn, Ne = Qn);
      return n && ze.forEach(function(Ml) {
        return r(k, Ml);
      }), fn && Sl(k, $e), se;
    }
    function Te(k, x, L, X) {
      var se = Se(L);
      if (typeof se != "function") throw Error(D(150));
      if (L = se.call(L), L == null) throw Error(D(151));
      for (var Ne = se = null, ze = x, $e = x = 0, Qn = null, Ot = L.next(); ze !== null && !Ot.done; $e++, Ot = L.next()) {
        ze.index > $e ? (Qn = ze, ze = null) : Qn = ze.sibling;
        var Ml = $(k, ze, Ot.value, X);
        if (Ml === null) {
          ze === null && (ze = Qn);
          break;
        }
        n && ze && Ml.alternate === null && r(k, ze), x = d(Ml, x, $e), Ne === null ? se = Ml : Ne.sibling = Ml, Ne = Ml, ze = Qn;
      }
      if (Ot.done) return l(
        k,
        ze
      ), fn && Sl(k, $e), se;
      if (ze === null) {
        for (; !Ot.done; $e++, Ot = L.next()) Ot = G(k, Ot.value, X), Ot !== null && (x = d(Ot, x, $e), Ne === null ? se = Ot : Ne.sibling = Ot, Ne = Ot);
        return fn && Sl(k, $e), se;
      }
      for (ze = o(k, ze); !Ot.done; $e++, Ot = L.next()) Ot = pe(ze, k, $e, Ot.value, X), Ot !== null && (n && Ot.alternate !== null && ze.delete(Ot.key === null ? $e : Ot.key), x = d(Ot, x, $e), Ne === null ? se = Ot : Ne.sibling = Ot, Ne = Ot);
      return n && ze.forEach(function(Ey) {
        return r(k, Ey);
      }), fn && Sl(k, $e), se;
    }
    function Dn(k, x, L, X) {
      if (typeof L == "object" && L !== null && L.type === me && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Dt:
            e: {
              for (var se = L.key, Ne = x; Ne !== null; ) {
                if (Ne.key === se) {
                  if (se = L.type, se === me) {
                    if (Ne.tag === 7) {
                      l(k, Ne.sibling), x = c(Ne, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Ne.elementType === se || typeof se == "object" && se !== null && se.$$typeof === mt && Uv(se) === Ne.type) {
                    l(k, Ne.sibling), x = c(Ne, L.props), x.ref = ps(k, Ne, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, Ne);
                  break;
                } else r(k, Ne);
                Ne = Ne.sibling;
              }
              L.type === me ? (x = Nl(L.props.children, k.mode, X, L.key), x.return = k, k = x) : (X = ff(L.type, L.key, L.props, null, k.mode, X), X.ref = ps(k, x, L), X.return = k, k = X);
            }
            return m(k);
          case W:
            e: {
              for (Ne = L.key; x !== null; ) {
                if (x.key === Ne) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = Wd(L, k.mode, X), x.return = k, k = x;
            }
            return m(k);
          case mt:
            return Ne = L._init, Dn(k, x, Ne(L._payload), X);
        }
        if (Dr(L)) return Ee(k, x, L, X);
        if (Se(L)) return Te(k, x, L, X);
        io(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = xu(L, k.mode, X), x.return = k, k = x), m(k)) : l(k, x);
    }
    return Dn;
  }
  var ni = Av(!0), or = Av(!1), ne = Xr(null), ya = null, br = null, yd = null;
  function gd() {
    yd = br = ya = null;
  }
  function Sd(n) {
    var r = ne.current;
    Yt(ne), n._currentValue = r;
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
  function It(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, br === null) {
      if (ya === null) throw Error(D(308));
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
  function El(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Cl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ht & 2) {
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
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, Q = U = T = null, E = d;
      do {
        var $ = E.lane, pe = E.eventTime;
        if ((o & $) === $) {
          Q !== null && (Q = Q.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ee = n, Te = E;
            switch ($ = r, pe = l, Te.tag) {
              case 1:
                if (Ee = Te.payload, typeof Ee == "function") {
                  G = Ee.call(pe, G, $);
                  break e;
                }
                G = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = Te.payload, $ = typeof Ee == "function" ? Ee.call(pe, G, $) : Ee, $ == null) break e;
                G = re({}, G, $);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else pe = { eventTime: pe, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = pe, T = G) : Q = Q.next = pe, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = G), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ei = Xr(uo), vs = Xr(uo), hs = Xr(uo);
  function cu(n) {
    if (n === uo) throw Error(D(174));
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
    Yt(Ei), nn(Ei, r);
  }
  function oo() {
    Yt(Ei), Yt(vs), Yt(hs);
  }
  function wd(n) {
    cu(hs.current);
    var r = cu(Ei.current), l = ir(r, n.type);
    r !== l && (nn(vs, n), nn(Ei, l));
  }
  function xd(n) {
    vs.current === n && (Yt(Ei), Yt(vs));
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
  var De = Ae.ReactCurrentDispatcher, dt = Ae.ReactCurrentBatchConfig, Rt = 0, Ze = null, Xt = null, Yn = null, Dc = !1, ys = !1, gs = 0, _d = 0;
  function P() {
    throw Error(D(321));
  }
  function Fn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function He(n, r, l, o, c, d) {
    if (Rt = d, Ze = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, De.current = n === null || n.memoizedState === null ? Ic : $c, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(D(301));
        d += 1, Yn = Xt = null, r.updateQueue = null, De.current = Ts, n = l(o, c);
      } while (ys);
    }
    if (De.current = $t, r = Xt !== null && Xt.next !== null, Rt = 0, Yn = Xt = Ze = null, Dc = !1, r) throw Error(D(300));
    return n;
  }
  function Rl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function Jn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? Ze.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function er() {
    if (Xt === null) {
      var n = Ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Xt.next;
    var r = Yn === null ? Ze.memoizedState : Yn.next;
    if (r !== null) Yn = r, Xt = n;
    else {
      if (n === null) throw Error(D(310));
      Xt = n, n = { memoizedState: Xt.memoizedState, baseState: Xt.baseState, baseQueue: Xt.baseQueue, queue: Xt.queue, next: null }, Yn === null ? Ze.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(D(311));
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
        var Q = U.lane;
        if ((Rt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var G = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, Ze.lanes |= Q, Su |= Q;
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
  function Tl(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(D(311));
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
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Ss(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Hn === null) throw Error(D(349));
      Rt & 30 || Nc(l, r, c);
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
  function Yc(n, r, l) {
    return Rt & 21 ? (Za(l, r) || (l = Gl(), Ze.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Pv(n, r) {
    var l = xt;
    xt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = dt.transition;
    dt.transition = {};
    try {
      n(!1), r();
    } finally {
      xt = l, dt.transition = o;
    }
  }
  function po() {
    return er().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ta(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = rn();
      Ca(l, n, o, c), Bv(l, r, o);
    }
  }
  function Rs(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ta(r, c);
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
  function wl(n) {
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
  var $t = { readContext: It, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Ic = { readContext: It, useCallback: function(n, r) {
    return Jn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: Fc, useImperativeHandle: function(n, r, l) {
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
    if (fn) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Hn === null) throw Error(D(349));
      Rt & 30 || Nc(o, r, l);
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
    if (fn) {
      var l = gi, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: It,
    useCallback: Vc,
    useContext: It,
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
      return Yc(r, Xt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, Ts = { readContext: It, useCallback: Vc, useContext: It, useEffect: Ss, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: Tl, useRef: jc, useState: function() {
    return Tl(ea);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = er();
    return Xt === null ? r.memoizedState = n : Yc(r, Xt.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(ea)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ue(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = rn(), c = Ea(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = rn(), c = Ea(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = rn(), o = Ea(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Cl(n, c, o), r !== null && (Ca(r, n, o, l), bc(r, n, o));
  } };
  function Yv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Iv(n, r, l) {
    var o = !1, c = st, d = r.contextType;
    return typeof d == "object" && d !== null ? d = It(d) : (c = Cn(r) ? za : hn.current, o = r.contextTypes, d = (o = o != null) ? ma(n, c) : st), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, El(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = It(d) : (d = Cn(r) ? za : hn.current, c.context = ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Qe(o), o = o.return;
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
    l = Qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      _l || (_l = !0, Ls = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Qi(-1, l), l.tag = 3;
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
    c.has(l) || (c.add(l), n = Id.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qi(-1, 1), r.tag = 2, Cl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Ae.ReactCurrentOwner, tr = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? or(r, null, l, o) : ni(r, n.child, l, o);
  }
  function Kc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = He(n, r, l, o, d, c), l = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (fn && l && dd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function ra(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return sr(n, r, c);
    }
    return r.flags |= 1, n = Ol(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, sr(n, r, c);
    }
    return qc(n, r, l, o, c);
  }
  function et(n, r, l) {
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
  function qc(n, r, l, o, c) {
    var d = Cn(l) ? za : hn.current;
    return d = ma(r, d), lo(r, c), l = He(n, r, l, o, d, c), o = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (fn && o && dd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (Cn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Aa(n, r), Iv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = It(U) : (U = Cn(l) ? za : hn.current, U = ma(r, U));
      var Q = l.getDerivedStateFromProps, G = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Wc(r, m, o, U), Ua = !1;
      var $ = r.memoizedState;
      m.state = $, _c(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || An.current || Ua ? (typeof Q == "function" && (kd(r, l, Q, o), T = r.memoizedState), (E = Ua || Yv(r, l, E, o, $, T, U)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : na(r.type, E), m.props = U, G = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = It(T) : (T = Cn(l) ? za : hn.current, T = ma(r, T));
      var pe = l.getDerivedStateFromProps;
      (Q = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || $ !== T) && Wc(r, m, o, T), Ua = !1, $ = r.memoizedState, m.state = $, _c(r, o, m, c);
      var Ee = r.memoizedState;
      E !== G || $ !== Ee || An.current || Ua ? (typeof pe == "function" && (kd(r, l, pe, o), Ee = r.memoizedState), (U = Ua || Yv(r, l, U, o, $, Ee, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ee, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ee, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ee), m.props = o, m.state = Ee, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
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
  function Wv(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nn(mn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Nl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Zc(l), r.memoizedState = zd, n) : bs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Gv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ol(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ol(E, d) : (d = Nl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Zc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Ol(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ds(o), ni(r, n.child, null, l), n = bs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Gv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Gc(Error(D(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Nl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = Gc(d, o, void 0), Jc(n, r, m, o);
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
      return Bd(), o = Gc(Error(D(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = Ja(c.nextSibling), Zr = r, fn = !0, ti = null, n !== null && (ur[jn++] = zr, ur[jn++] = gi, ur[jn++] = uu, zr = n.id, gi = n.overflow, uu = r), r = bs(r, o.children), r.flags |= 4096, r);
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
    if (n !== null && r.child !== n.child) throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = Ol(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ol(n, n.pendingProps), l.return = r;
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
        nn(ne, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (nn(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Wv(n, r, l) : (nn(mn, mn.current & 1), n = sr(n, r, l), n !== null ? n.sibling : null);
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
        return r.lanes = 0, et(n, r, l);
    }
    return sr(n, r, l);
  }
  var ho, ga, In, Kv;
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
  }, In = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), o = Ln(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Be.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Be.hasOwnProperty(U) ? (T != null && U === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Kv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!fn) switch (n.tailMode) {
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
        return o = r.stateNode, oo(), Yt(An), Yt(hn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (As(ti), ti = null))), ga(n, r), _r(r), null;
      case 5:
        xd(r);
        var c = cu(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return _r(r), null;
          }
          if (n = cu(Ei.current), bn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Ht(rs[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Er(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                qn(o, d), Ht("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Be.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
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
              switch (m = sn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Ht(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Er(n, o), c = Ln(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  qn(n, o), c = Kn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Be.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && rt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Nn(n), fa(n, o, !1);
                  break;
                case "textarea":
                  Nn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ke(o.value));
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
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
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
        if (Yt(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Jr !== null && r.mode & 1 && !(r.flags & 128)) zv(), $i(), r.flags |= 98560, d = !1;
          else if (d = bn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
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
        if (Yt(mn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return nn(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && At() > So && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return _r(r), null;
          } else 2 * At() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = At(), r.sibling = null, l = mn.current, nn(mn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function qv(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return Cn(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Yt(An), Yt(hn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (Yt(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
          $i();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(mn), null;
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
  var mu = !1, cr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function bl(n, r) {
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
    if (ru = cl, n = pl(), Ku(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, Q = 0, G = n, $ = null;
          t: for (; ; ) {
            for (var pe; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (pe = G.firstChild) !== null; )
              $ = G, G = pe;
            for (; ; ) {
              if (G === n) break t;
              if ($ === l && ++U === c && (E = m), $ === d && ++Q === o && (T = m), (pe = G.nextSibling) !== null) break;
              G = $, $ = G.parentNode;
            }
            G = pe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, cl = !1, ye = r; ye !== null; ) if (r = ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ye = n;
    else for (; ye !== null; ) {
      r = ye;
      try {
        var Ee = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ee !== null) {
              var Te = Ee.memoizedProps, Dn = Ee.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : na(r.type, Te), Dn);
              k.__reactInternalSnapshotBeforeUpdate = x;
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
            throw Error(D(163));
        }
      } catch (X) {
        Rn(r, r.return, X);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ye = n;
        break;
      }
      ye = r.return;
    }
    return Ee = Fd, Fd = !1, Ee;
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
    for (l = l.child; l !== null; ) Wi(n, r, l), l = l.sibling;
  }
  function Wi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ll, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        cr || bl(l, r);
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
        if (!cr && (bl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
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
        if (yn === null) throw Error(D(160));
        Wi(d, m, c), yn = null, Ur = !1;
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
          } catch (Te) {
            Rn(n, n.return, Te);
          }
          try {
            mo(5, n, n.return);
          } catch (Te) {
            Rn(n, n.return, Te);
          }
        }
        break;
      case 1:
        ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return);
        break;
      case 5:
        if (ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (Te) {
            Rn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), sn(E, m);
            var U = sn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], G = T[m + 1];
              Q === "style" ? zt(c, G) : Q === "dangerouslySetInnerHTML" ? Oi(c, G) : Q === "children" ? da(c, G) : rt(c, Q, G, U);
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
                var pe = d.value;
                pe != null ? Bn(c, !!d.multiple, pe, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Bn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Bn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (Te) {
            Rn(n, n.return, Te);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            Rn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (Te) {
          Rn(n, n.return, Te);
        }
        break;
      case 4:
        ri(r, n), ai(n);
        break;
      case 13:
        ri(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = At())), o & 4 && Zv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (cr = (U = cr) || Q, ri(r, n), cr = U) : ri(r, n), ai(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1) for (ye = n, Q = n.child; Q !== null; ) {
            for (G = ye = Q; ye !== null; ) {
              switch ($ = ye, pe = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, $, $.return);
                  break;
                case 1:
                  bl($, $.return);
                  var Ee = $.stateNode;
                  if (typeof Ee.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, Ee.props = r.memoizedProps, Ee.state = r.memoizedState, Ee.componentWillUnmount();
                    } catch (Te) {
                      Rn(o, l, Te);
                    }
                  }
                  break;
                case 5:
                  bl($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    th(G);
                    continue;
                  }
              }
              pe !== null ? (pe.return = $, ye = pe) : th(G);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, G = n; ; ) {
            if (G.tag === 5) {
              if (Q === null) {
                Q = G;
                try {
                  c = G.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = tt("display", m));
                } catch (Te) {
                  Rn(n, n.return, Te);
                }
              }
            } else if (G.tag === 6) {
              if (Q === null) try {
                G.stateNode.nodeValue = U ? "" : G.memoizedProps;
              } catch (Te) {
                Rn(n, n.return, Te);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              Q === G && (Q = null), G = G.return;
            }
            Q === G && (Q = null), G.sibling.return = G.return, G = G.sibling;
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
          throw Error(D(160));
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
            throw Error(D(161));
        }
      } catch (T) {
        Rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    ye = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || cr;
          E = mu;
          var U = cr;
          if (mu = m, (cr = T) && !U) for (ye = c; ye !== null; ) m = ye, T = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : T !== null ? (T.return = m, ye = T) : Os(c);
          for (; d !== null; ) ye = d, eh(d), d = d.sibling;
          ye = c, mu = E, cr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ye = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; ye !== null; ) {
      var r = ye;
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
                  var Q = U.memoizedState;
                  if (Q !== null) {
                    var G = Q.dehydrated;
                    G !== null && Oa(G);
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
              throw Error(D(163));
          }
          cr || r.flags & 512 && rf(r);
        } catch ($) {
          Rn(r, r.return, $);
        }
      }
      if (r === n) {
        ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function th(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r === n) {
        ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Os(n) {
    for (; ye !== null; ) {
      var r = ye;
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
        ye = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ye = E;
        break;
      }
      ye = r.return;
    }
  }
  var nh = Math.ceil, lf = Ae.ReactCurrentDispatcher, yu = Ae.ReactCurrentOwner, kr = Ae.ReactCurrentBatchConfig, ht = 0, Hn = null, kn = null, fr = 0, Sa = 0, yo = Xr(0), $n = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, ia = null, Pd = 0, So = 1 / 0, Gi = null, _l = !1, Ls = null, Fa = null, uf = !1, kl = null, Ms = 0, Eo = 0, Co = null, Cu = -1, zs = 0;
  function rn() {
    return ht & 6 ? At() : Cu !== -1 ? Cu : Cu = At();
  }
  function Ea(n) {
    return n.mode & 1 ? ht & 2 && fr !== 0 ? fr & -fr : ou.transition !== null ? (zs === 0 && (zs = Gl()), zs) : (n = xt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(D(185));
    sl(n, l, o), (!(ht & 2) || n !== Hn) && (n === Hn && (!(ht & 2) && (Eu |= l), $n === 4 && Dl(n, fr)), nr(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (So = At() + 500, cs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = di(n, n === Hn ? fr : 0);
    if (o === 0) l !== null && cn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && cn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : hl(Fs.bind(null, n)), ly(function() {
        !(ht & 6) && Mr();
      }), l = null;
      else {
        switch (Qo(o)) {
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
    if (Cu = -1, zs = 0, ht & 6) throw Error(D(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = di(n, n === Hn ? fr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = ht;
      ht |= 2;
      var d = ah();
      (Hn !== n || fr !== r) && (Gi = null, So = At() + 500, Tu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      gd(), lf.current = d, ht = c, kn !== null ? r = 0 : (Hn = null, fr = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = ji(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = gu, Tu(n, 0), Dl(n, o), nr(n, At()), l;
      if (r === 6) Dl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = cf(n, o), r === 2 && (d = ji(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = gu, Tu(n, 0), Dl(n, o), nr(n, At()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            wu(n, ia, Gi);
            break;
          case 3:
            if (Dl(n, o), (o & 130023424) === o && (r = Pd + 500 - At(), 10 < r)) {
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
            if (Dl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = At() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(wu.bind(null, n, ia, Gi), o);
              break;
            }
            wu(n, ia, Gi);
            break;
          case 5:
            wu(n, ia, Gi);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return nr(n, At()), n.callbackNode === l ? rh.bind(null, n) : null;
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
  function Dl(n, r) {
    for (r &= ~Ns, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (ht & 6) throw Error(D(327));
    Ro();
    var r = di(n, 0);
    if (!(r & 1)) return nr(n, At()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ji(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Dl(n, r), nr(n, At()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, ia, Gi), nr(n, At()), null;
  }
  function of(n, r) {
    var l = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = l, ht === 0 && (So = At() + 500, cs && Mr());
    }
  }
  function Ru(n) {
    kl !== null && kl.tag === 0 && !(ht & 6) && Ro();
    var r = ht;
    ht |= 1;
    var l = kr.transition, o = xt;
    try {
      if (kr.transition = null, xt = 1, n) return n();
    } finally {
      xt = o, kr.transition = l, ht = r, !(ht & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Yt(yo);
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
          oo(), Yt(An), Yt(hn), ms();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Yt(mn);
          break;
        case 19:
          Yt(mn);
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
    if (Hn = n, kn = n = Ol(n.current, null), fr = Sa = r, $n = 0, gu = null, Ns = Eu = Su = 0, ia = go = null, su !== null) {
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
        if (Rt = 0, Yn = Xt = Ze = null, ys = !1, gs = 0, yu.current = null, l === null || l.return === null) {
          $n = 1, gu = r, kn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = fr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, Q = E, G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var pe = Ld(m);
            if (pe !== null) {
              pe.flags &= -257, Qv(pe, m, E, d, r), pe.mode & 1 && Nd(d, U, r), r = pe, T = U;
              var Ee = r.updateQueue;
              if (Ee === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(T), r.updateQueue = Te;
              } else Ee.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Bd();
                break e;
              }
              T = Error(D(426));
            }
          } else if (fn && E.mode & 1) {
            var Dn = Ld(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Qv(Dn, m, E, d, r), ds(xl(T, E));
              break e;
            }
          }
          d = T = xl(T, E), $n !== 4 && ($n = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = ws(d, T, r);
                Hv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fa === null || !Fa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = $v(d, E, r);
                  Hv(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (se) {
        r = se, kn === l && l !== null && (kn = l = l.return);
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
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Hn === null || !(Su & 268435455) && !(Eu & 268435455) || Dl(Hn, fr);
  }
  function cf(n, r) {
    var l = ht;
    ht |= 2;
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
    if (gd(), ht = l, lf.current = o, kn !== null) throw Error(D(261));
    return Hn = null, fr = 0, $n;
  }
  function fy() {
    for (; kn !== null; ) Yd(kn);
  }
  function dy() {
    for (; kn !== null && !Rr(); ) Yd(kn);
  }
  function Yd(n) {
    var r = $d(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : kn = r, yu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = qv(l, r), l !== null) {
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
    var o = xt, c = kr.transition;
    try {
      kr.transition = null, xt = 1, py(n, r, l, o);
    } finally {
      kr.transition = c, xt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Ro();
    while (kl !== null);
    if (ht & 6) throw Error(D(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(D(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Hn && (kn = Hn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(zi, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = xt;
      xt = 1;
      var E = ht;
      ht |= 4, yu.current = null, cy(n, l), Jv(l, n), Cv(us), cl = !!ru, us = ru = null, n.current = l, Ds(l), Ka(), ht = E, xt = m, kr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, kl = n, Ms = c), d = n.pendingLanes, d === 0 && (Fa = null), Bo(l.stateNode), nr(n, At()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (_l) throw _l = !1, n = Ls, Ls = null, n;
    return Ms & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (kl !== null) {
      var n = Qo(Ms), r = kr.transition, l = xt;
      try {
        if (kr.transition = null, xt = 16 > n ? 16 : n, kl === null) var o = !1;
        else {
          if (n = kl, kl = null, Ms = 0, ht & 6) throw Error(D(331));
          var c = ht;
          for (ht |= 4, ye = n.current; ye !== null; ) {
            var d = ye, m = d.child;
            if (ye.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ye = U; ye !== null; ) {
                    var Q = ye;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null) G.return = Q, ye = G;
                    else for (; ye !== null; ) {
                      Q = ye;
                      var $ = Q.sibling, pe = Q.return;
                      if (Xv(Q), Q === U) {
                        ye = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = pe, ye = $;
                        break;
                      }
                      ye = pe;
                    }
                  }
                }
                var Ee = d.alternate;
                if (Ee !== null) {
                  var Te = Ee.child;
                  if (Te !== null) {
                    Ee.child = null;
                    do {
                      var Dn = Te.sibling;
                      Te.sibling = null, Te = Dn;
                    } while (Te !== null);
                  }
                }
                ye = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ye = m;
            else e: for (; ye !== null; ) {
              if (d = ye, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ye = k;
                break e;
              }
              ye = d.return;
            }
          }
          var x = n.current;
          for (ye = x; ye !== null; ) {
            m = ye;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ye = L;
            else e: for (m = x; ye !== null; ) {
              if (E = ye, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (se) {
                Rn(E, E.return, se);
              }
              if (E === m) {
                ye = null;
                break e;
              }
              var X = E.sibling;
              if (X !== null) {
                X.return = E.return, ye = X;
                break e;
              }
              ye = E.return;
            }
          }
          if (ht = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ll, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        xt = l, kr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Cl(n, r, 1), r = rn(), n !== null && (sl(n, 1, r), nr(n, r));
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
          n = xl(l, n), n = $v(r, n, 1), r = Cl(r, n, 1), n = rn(), r !== null && (sl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = rn(), n.pingedLanes |= n.suspendedLanes & l, Hn === n && (fr & l) === l && ($n === 4 || $n === 3 && (fr & 130023424) === fr && 500 > At() - Pd ? Tu(n, 0) : Ns |= l), nr(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = rn();
    n = Si(n, r), n !== null && (sl(n, r, l), nr(n, l));
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
        throw Error(D(314));
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
    else tr = !1, fn && r.flags & 1048576 && Lv(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = ma(r, hn.current);
        lo(r, l), c = He(null, r, o, n, c, l);
        var d = Rl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Cn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, El(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && dd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = na(o, n), c) {
            case 0:
              r = qc(null, r, o, n, l);
              break e;
            case 1:
              r = oy(null, r, o, n, l);
              break e;
            case 11:
              r = Kc(null, r, o, n, l);
              break e;
            case 14:
              r = ra(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(D(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), qc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(D(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(D(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Jr = Ja(r.stateNode.containerInfo.firstChild), Zr = r, fn = !0, ti = null, l = or(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return Wv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ni(r, null, o, l) : _n(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Kc(n, r, o, c, l);
      case 7:
        return _n(n, r, r.pendingProps, l), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, nn(ne, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
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
                    T = Qi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var Q = U.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(D(341));
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
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = It(c), o = o(c), r.flags |= 1, _n(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), ra(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Aa(n, r), r.tag = 1, Cn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Iv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return aa(n, r, l);
      case 22:
        return et(n, r, l);
    }
    throw Error(D(156, r.tag));
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
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Qt) return 11;
      if (n === jt) return 14;
    }
    return 2;
  }
  function Ol(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case me:
        return Nl(l.children, c, d, r);
      case xe:
        m = 8, c |= 8;
        break;
      case Vt:
        return n = Ha(12, l, r, c | 2), n.elementType = Vt, n.lanes = d, n;
      case Et:
        return n = Ha(13, l, r, c), n.elementType = Et, n.lanes = d, n;
      case je:
        return n = Ha(19, l, r, c), n.elementType = je, n.lanes = d, n;
      case ut:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Mt:
            m = 10;
            break e;
          case pn:
            m = 9;
            break e;
          case Qt:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case mt:
            m = 16, o = null;
            break e;
        }
        throw Error(D(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nl(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = ut, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function xu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return st;
    n = n._reactInternals;
    e: {
      if (ue(n) !== n || n.tag !== 1) throw Error(D(170));
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
      throw Error(D(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Cn(l)) return Nv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = fh(null), l = n.current, o = rn(), c = Ea(l), d = Qi(o, c), d.callback = r ?? null, Cl(l, d, c), n.current.lanes = c, sl(n, c, o), nr(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = rn(), m = Ea(c);
    return l = fh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Cl(c, r, m), n !== null && (Ca(n, c, m, d), bc(n, c, m)), m;
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
  var Kd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ll(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Ll.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Ll.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        pf(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qa.length && r !== 0 && r < qa[l].priority; l++) ;
      qa.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function qd(n) {
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
      return n._reactRootContainer = m, n[Yi] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
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
    return n._reactRootContainer = T, n[Yi] = T.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
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
          l !== 0 && ($o(r, l | 1), nr(r, At()), !(ht & 6) && (So = At() + 500, Mr()));
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
  }, bt = function(n) {
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
    return xt;
  }, Ie = function(n, r) {
    var l = xt;
    try {
      return xt = n, r();
    } finally {
      xt = l;
    }
  }, Wt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Mn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(D(90));
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
  }, $l = of, Ql = Ru;
  var hh = { usingClientEntryPoint: !1, Events: [ss, ke, Ii, ka, Ni, of] }, Hs = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = at(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber) try {
      ll = Ps.inject(Sy), Wr = Ps;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(D(200));
    return ch(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!qd(n)) throw Error(D(299));
    var l = !1, o = "", c = Kd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Ll(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = at(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Ru(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(D(200));
    return gf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Kd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(D(200));
    return gf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(D(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = of, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return gf(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Qa = {}, iT;
function ok() {
  if (iT) return Qa;
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
    var oe = Il, D = uT(), ct = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Be = !1;
    function gt(e) {
      Be = e;
    }
    function St(e) {
      if (!Be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("warn", e, a);
      }
    }
    function S(e) {
      if (!Be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("error", e, a);
      }
    }
    function nt(e, t, a) {
      {
        var i = ct.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var _e = 0, fe = 1, Ue = 2, J = 3, Fe = 4, ie = 5, we = 6, lt = 7, Tn = 8, en = 9, rt = 10, Ae = 11, Dt = 12, W = 13, me = 14, xe = 15, Vt = 16, Mt = 17, pn = 18, Qt = 19, Et = 21, je = 22, jt = 23, mt = 24, ut = 25, Y = !0, Se = !1, re = !1, _ = !1, B = !1, Oe = !0, Ye = !0, Qe = !0, ot = !0, wt = /* @__PURE__ */ new Set(), Ke = {}, Ct = {};
    function Bt(e, t) {
      Nn(e, t), Nn(e + "Capture", t);
    }
    function Nn(e, t) {
      Ke[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ke[e] = t;
      {
        var a = e.toLowerCase();
        Ct[a] = e, e === "onDoubleClick" && (Ct.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        wt.add(t[i]);
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
    function Wa(e, t) {
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
    function Kn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    var qn = 0, Cr = 1, Ga = 2, zn = 3, ir = 4, $r = 5, Oi = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Le = new RegExp("^[" + da + "][" + ee + "]*$"), tt = {}, zt = {};
    function un(e) {
      return ar.call(zt, e) ? !0 : ar.call(tt, e) ? !1 : Le.test(e) ? (zt[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function on(e, t, a) {
      return t !== null ? t.type === qn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sn(e, t, a, i) {
      if (a !== null && a.type === qn)
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
      if (t === null || typeof t > "u" || sn(e, t, a, i))
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
      return Ut.hasOwnProperty(e) ? Ut[e] : null;
    }
    function Wt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === zn || t === ir, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ut = {}, pa = [
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
      Ut[e] = new Wt(
        e,
        qn,
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
      Ut[t] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[e] = new Wt(
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
      Ut[t] = new Wt(
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
      Ut[t] = new Wt(
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
      Ut[t] = new Wt(
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
      Ut[e] = new Wt(
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
    Ut[Ni] = new Wt(
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
      Ut[e] = new Wt(
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
    var $l = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function Li(e) {
      !Ql && $l.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
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
        if (!un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Mn(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = an(t);
      if (!on(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (un(t)) {
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
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), at = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, At = "@@iterator";
    function vn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[At];
      return typeof t == "function" ? t : null;
    }
    var Xe = Object.assign, fi = 0, zi, ic, Ui, ll, Wr, Bo, Or;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function lc() {
      {
        if (fi === 0) {
          zi = console.log, ic = console.info, Ui = console.warn, ll = console.error, Wr = console.group, Bo = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
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
              value: ll
            }),
            group: Xe({}, e, {
              value: Wr
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
    var Ai = ct.ReactCurrentDispatcher, ul;
    function Gr(e, t, a) {
      {
        if (ul === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ul = i && i[1] || "";
          }
        return `
` + ul + e;
      }
    }
    var di = !1, ol;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      ol = new Fu();
    }
    function ji(e, t) {
      if (!e || di)
        return "";
      {
        var a = ol.get(e);
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
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && ol.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        di = !1, Ai.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", z = w ? Gr(w) : "";
      return typeof e == "function" && ol.set(e, z), z;
    }
    function Gl(e, t, a) {
      return ji(e, !0);
    }
    function Kl(e, t, a) {
      return ji(e, !1);
    }
    function sl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ji(e, sl(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case ae:
          return Gr("Suspense");
        case ue:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Kl(e.render);
          case ft:
            return Io(e.type, t, a);
          case We: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Io(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $o(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return Gr(e.type);
        case Vt:
          return Gr("Lazy");
        case W:
          return Gr("Suspense");
        case Qt:
          return Gr("SuspenseList");
        case _e:
        case Ue:
        case xe:
          return Kl(e.type);
        case Ae:
          return Kl(e.type.render);
        case fe:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function xt(e) {
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
    function Qo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case ha:
          return "Portal";
        case ci:
          return "Profiler";
        case si:
          return "StrictMode";
        case ae:
          return "Suspense";
        case ue:
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
          case I:
            return Qo(e, e.render, "ForwardRef");
          case ft:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case We: {
            var u = e, s = u._payload, f = u._init;
            try {
              return bt(f(s));
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
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case mt:
          return "Cache";
        case en:
          var i = a;
          return pi(i) + ".Consumer";
        case rt:
          var u = a;
          return pi(u._context) + ".Provider";
        case pn:
          return "DehydratedFragment";
        case Ae:
          return oc(a, a.render, "ForwardRef");
        case lt:
          return "Fragment";
        case ie:
          return a;
        case Fe:
          return "Portal";
        case J:
          return "Root";
        case we:
          return "Text";
        case Vt:
          return bt(a);
        case Tn:
          return a === si ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case Dt:
          return "Profiler";
        case Et:
          return "Scope";
        case W:
          return "Suspense";
        case Qt:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        case fe:
        case _e:
        case Mt:
        case Ue:
        case me:
        case xe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = ct.ReactDebugCurrentFrame, Zn = null, Kr = !1;
    function Nr() {
      {
        if (Zn === null)
          return null;
        var e = Zn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function vi() {
      return Zn === null ? "" : xt(Zn);
    }
    function Sn() {
      ql.getCurrentStack = null, Zn = null, Kr = !1;
    }
    function Gt(e) {
      ql.getCurrentStack = e === null ? null : vi, Zn = e, Kr = !1;
    }
    function qa() {
      return Zn;
    }
    function Da(e) {
      Kr = e;
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
          return Kn(e), e;
        default:
          return "";
      }
    }
    var Kf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Kf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
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
    function cl(e) {
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
    var Yu = !1, fl = !1, Hi = !1, Iu = !1;
    function Wo(e) {
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
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !fl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), fl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), Yu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: Wo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Wo(t);
        !a._wrapperState.controlled && i && !Iu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Iu = !0), a._wrapperState.controlled && !i && !Hi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
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
      t.hasOwnProperty("value") ? ge(a, t.type, u) : t.hasOwnProperty("defaultValue") && ge(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
            cl(f), C(f, p);
          }
        }
      }
    }
    function ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var de = !1, Pe = !1, it = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? oe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pe || (Pe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (it || (it = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !de && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), de = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var qt = Array.isArray;
    function Je(e) {
      return qt(e);
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
            var i = Je(e[a]);
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
    function Ko(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tn = !0);
    }
    function qf(e, t) {
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
            if (Je(u)) {
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
    var Xa = "http://www.w3.org/1999/xhtml", Km = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Km;
        default:
          return Xa;
      }
    }
    function fc(e, t) {
      return e == null || e === Xa ? Jf(t) : e === Zf && t === "foreignObject" ? Xa : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = qm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Vi = 3, Un = 8, Bi = 9, qo = 11, dl = function(e, t) {
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
    }, Qu = {
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
    Object.keys(Qu).forEach(function(e) {
      uv.forEach(function(t) {
        Qu[lv(t, e)] = Qu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, Wu = /^ms-/;
    function Zm(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(Wu, "-ms-");
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
    function pl(e, t) {
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
    var Ku = {
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
    }, qu = {}, Xu = new RegExp("^(aria)-[" + ee + "]*$"), rd = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function Jo(e, t) {
      {
        if (ar.call(qu, t) && qu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), qu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), qu[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return qu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), qu[t] = !0, !0;
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
      pl(e, t) || ad(e, t);
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
      var wr = {}, ts = /^on./, Tv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + ee + "]*$"), xv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
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
        var v = an(t), y = v !== null && v.type === qn;
        if (Ku.hasOwnProperty(u)) {
          var g = Ku[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && sn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : sn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === zn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
      pl(e, t) || bv(e, t, a);
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
    var yc = null, Ht = null, vl = null;
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
      Ht ? vl ? vl.push(e) : vl = [e] : Ht = e;
    }
    function od() {
      return Ht !== null || vl !== null;
    }
    function Ju() {
      if (Ht) {
        var e = Ht, t = vl;
        if (Ht = null, vl = null, as(e), t)
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
          Rc.removeEventListener(H, Me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Me() {
          b = !0, F(), a.apply(i, le), w = !1;
        }
        var be, kt = !1, yt = !1;
        function O(N) {
          if (be = N.error, kt = !0, be === null && N.colno === 0 && N.lineno === 0 && (yt = !0), N.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Rc.addEventListener(H, Me, !1), g.initEvent(H, !1, !1), Rc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (kt ? yt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", O), !b)
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
    function Yi() {
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
    ), Ii = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), vt = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), Yt = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), st = (
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
    ), hl = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), ml = (
      /*              */
      33554432
    ), yl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      vt | za | 0
    ), ao = En | vt | Xr | Yt | An | Cn | yi, gl = vt | nn | An | yi, ur = ma | Xr, jn = hl | fd | fs, uu = ct.ReactCurrentOwner;
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
      return t.tag === J ? a : null;
    }
    function gi(e) {
      if (e.tag === W) {
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
    function Sl(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === fe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Jr(e) {
      var t = Zr(e);
      return t !== null ? fn(t) : null;
    }
    function fn(e) {
      if (e.tag === ie || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fn(t);
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
      if (e.tag === ie || e.tag === we)
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
    var vd = D.unstable_scheduleCallback, hd = D.unstable_cancelCallback, md = D.unstable_shouldYield, Mv = D.unstable_requestPaint, bn = D.unstable_now, zv = D.unstable_getCurrentPriorityLevel, $i = D.unstable_ImmediatePriority, ds = D.unstable_UserBlockingPriority, ou = D.unstable_NormalPriority, ps = D.unstable_LowPriority, io = D.unstable_IdlePriority, Uv = D.unstable_yieldValue, Av = D.unstable_setDisableYieldValue, ni = null, or = null, ne = null, ya = !1, br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ye && (e = Xe({}, e, {
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
          var a = (e.current.flags & st) === st;
          if (Qe) {
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
    function It(e) {
      if (typeof Uv == "function" && (Av(e), gt(e)), or && typeof or.setStrictMode == "function")
        try {
          or.setStrictMode(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      ne = e;
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
      ne !== null && typeof ne.markCommitStarted == "function" && ne.markCommitStarted(e);
    }
    function Si() {
      ne !== null && typeof ne.markCommitStopped == "function" && ne.markCommitStopped();
    }
    function Ua(e) {
      ne !== null && typeof ne.markComponentRenderStarted == "function" && ne.markComponentRenderStarted(e);
    }
    function El() {
      ne !== null && typeof ne.markComponentRenderStopped == "function" && ne.markComponentRenderStopped();
    }
    function Fv(e) {
      ne !== null && typeof ne.markComponentPassiveEffectMountStarted == "function" && ne.markComponentPassiveEffectMountStarted(e);
    }
    function Qi() {
      ne !== null && typeof ne.markComponentPassiveEffectMountStopped == "function" && ne.markComponentPassiveEffectMountStopped();
    }
    function Cl(e) {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStarted == "function" && ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function bc() {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStopped == "function" && ne.markComponentPassiveEffectUnmountStopped();
    }
    function Hv(e) {
      ne !== null && typeof ne.markComponentLayoutEffectMountStarted == "function" && ne.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      ne !== null && typeof ne.markComponentLayoutEffectMountStopped == "function" && ne.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStarted == "function" && ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStopped == "function" && ne.markComponentLayoutEffectUnmountStopped();
    }
    function Ei(e, t, a) {
      ne !== null && typeof ne.markComponentErrored == "function" && ne.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      ne !== null && typeof ne.markComponentSuspended == "function" && ne.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      ne !== null && typeof ne.markLayoutEffectsStarted == "function" && ne.markLayoutEffectsStarted(e);
    }
    function cu() {
      ne !== null && typeof ne.markLayoutEffectsStopped == "function" && ne.markLayoutEffectsStopped();
    }
    function Td(e) {
      ne !== null && typeof ne.markPassiveEffectsStarted == "function" && ne.markPassiveEffectsStarted(e);
    }
    function oo() {
      ne !== null && typeof ne.markPassiveEffectsStopped == "function" && ne.markPassiveEffectsStopped();
    }
    function wd(e) {
      ne !== null && typeof ne.markRenderStarted == "function" && ne.markRenderStarted(e);
    }
    function xd() {
      ne !== null && typeof ne.markRenderYielded == "function" && ne.markRenderYielded();
    }
    function mn() {
      ne !== null && typeof ne.markRenderStopped == "function" && ne.markRenderStopped();
    }
    function kc(e) {
      ne !== null && typeof ne.markRenderScheduled == "function" && ne.markRenderScheduled(e);
    }
    function bd(e, t) {
      ne !== null && typeof ne.markForceUpdateScheduled == "function" && ne.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      ne !== null && typeof ne.markStateUpdateScheduled == "function" && ne.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), Rt = (
      /*                    */
      2
    ), Ze = (
      /*               */
      8
    ), Xt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : gs, Dc = Math.log, ys = Math.LN2;
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
    ), Rl = (
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
    ), Tl = (
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
    ), Yc = (
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
    ), wl = (
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
        if (e & Rl)
          return "InputContinuousHydration";
        if (e & Jn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ta)
          return "Offscreen";
      }
    }
    var $t = -1, Ic = so, $c = pu;
    function Ts(e) {
      switch (vu(e)) {
        case He:
          return He;
        case Rl:
          return Rl;
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
          return e & Tl;
        case pu:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          return e & Es;
        case po:
          return po;
        case Rs:
          return Rs;
        case wl:
          return wl;
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
          g === ea && (b & Tl) !== P
        )
          return t;
      }
      (i & Jn) !== P && (i |= a & ea);
      var w = e.entangledLanes;
      if (w !== P)
        for (var z = e.entanglements, A = i & w; A > 0; ) {
          var F = _n(A), le = 1 << F;
          i |= z[F], A &= ~le;
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
    function Qc(e, t) {
      switch (e) {
        case He:
        case Rl:
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
        case Yc:
          return $t;
        case po:
        case Rs:
        case wl:
        case ta:
          return $t;
        default:
          return S("Should have found matching lanes. This is a bug in React."), $t;
      }
    }
    function Yv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === $t ? ((v & i) === P || (v & u) !== P) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return Ts(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & ~ta;
      return t !== P ? t : t & ta ? ta : P;
    }
    function Dd(e) {
      return (e & He) !== P;
    }
    function xl(e) {
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
      return (e & Tl) === e;
    }
    function ws(e, t) {
      var a = Rl | Jn | er | ea;
      return (t & a) !== P;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Nd(e) {
      return (e & Tl) !== P;
    }
    function Ld() {
      var e = Ic;
      return Ic <<= 1, (Ic & Tl) === P && (Ic = so), e;
    }
    function Qv() {
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
      return 31 - Yn(e);
    }
    function Kc(e) {
      return _n(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function qc(e, t) {
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
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Kc(t);
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
    function Wv(e, t) {
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
          i = Rl;
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
        case Yc:
          i = fu;
          break;
        case wl:
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
          var u = Kc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Kc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var aa = He, Aa = Jn, sr = ea, tf = wl, ho = Fn;
    function ga() {
      return ho;
    }
    function In(e) {
      ho = e;
    }
    function Kv(e, t) {
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
    function qv(e) {
      var t = vu(e);
      return Ad(aa, t) ? Ad(Aa, t) ? xl(t) ? sr : tf : Aa : aa;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var cr;
    function sy(e) {
      cr = e;
    }
    function ye(e) {
      cr(e);
    }
    var bl;
    function jd(e) {
      bl = e;
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
    var af = !1, ks = [], Ci = null, Ri = null, yn = null, Ur = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Wi = [], Zv = [
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
          p !== null && bl(p);
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
      var t = Ys(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === W) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = Sl(a);
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
      }, i = 0; i < Wi.length && Ad(t, Wi[i].priority); i++)
        ;
      Wi.splice(i, 0, a), i === 0 && Hd(a);
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
          return f !== null && bl(f), e.blockedOn = i, !1;
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
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, lf)));
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
      for (var u = 0; u < Wi.length; u++) {
        var s = Wi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wi.length > 0; ) {
        var f = Wi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Wi.shift();
      }
    }
    var ht = ct.ReactCurrentBatchConfig, Hn = !0;
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
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        In(aa), gu(e, t, a, i);
      } finally {
        In(u), ht.transition = s;
      }
    }
    function $n(e, t, a, i) {
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        In(Aa), gu(e, t, a, i);
      } finally {
        In(u), ht.transition = s;
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
          s !== null && ye(s);
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
      var u = mc(i), s = Ys(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === W) {
            var v = gi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (mu(y))
              return Sl(f);
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
    var _l = null, Ls = null, Fa = null;
    function uf(e) {
      return _l = e, Ls = Eo(), !0;
    }
    function kl() {
      _l = null, Ls = null, Fa = null;
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
      return "value" in _l ? _l.value : _l.textContent;
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
    function Dl(e) {
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
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dl(e), Us);
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
    }), Yd = rn(dy), ih = Yd, wu = {
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
    function Id(e) {
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
      getModifierState: Id,
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
      getModifierState: Id
    }), my = rn(oh), Ha = Xe({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = rn(Ha), yy = Xe({}, Fs, {
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
    }), Ol = rn(yy), ff = [9, 13, 27, 32], Nl = 229, To = Gn && "CompositionEvent" in window, xu = null;
    Gn && "documentMode" in document && (xu = document.documentMode);
    var Wd = Gn && "TextEvent" in window && !xu, sh = Gn && (!To || xu && xu > 8 && xu <= 11), df = 32, ch = String.fromCharCode(df);
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
      return e === "keydown" && t.keyCode === Nl;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Nl;
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
    function Kd(e) {
      return e.locale === "ko";
    }
    var Ll = !1;
    function mf(e, t, a, i, u) {
      var s, f;
      if (To ? s = vf(t) : Ll ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !Kd(i) && (!Ll && s === "onCompositionStart" ? Ll = uf(u) : s === "onCompositionEnd" && Ll && (f = Ms()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
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
    function qd(e, t) {
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
      if (Ll) {
        if (e === "compositionend" || !To && hf(e, t)) {
          var a = Ms();
          return kl(), Ll = !1, a;
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
          return sh && !Kd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, i, u) {
      var s;
      if (Wd ? s = qd(t, i) : s = yf(t, i), !s)
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
      if (cl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    Gn && (E = Hs("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", Q);
    }
    function U() {
      n && (n.detachEvent("onpropertychange", Q), n = null, r = null);
    }
    function Q(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (U(), T(t, a)) : e === "focusout" && U();
    }
    function $(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ee(e, t) {
      if (e === "click")
        return d(t);
    }
    function Te(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Dn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ge(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : hh(p) ? E ? v = Te : (v = $, y = G) : pe(p) && (v = Ee), v) {
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
        if (y && (Ys(y) || cp(y)))
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
          if (w = a, z = A ? Ys(A) : null, z !== null) {
            var F = zr(z);
            (z !== F || z.tag !== ie && z.tag !== we) && (z = null);
          }
        } else
          w = null, z = a;
        if (w !== z) {
          var le = of, Me = "onMouseLeave", be = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = $d, Me = "onPointerLeave", be = "onPointerEnter", kt = "pointer");
          var yt = w == null ? g : wf(w), O = z == null ? g : wf(z), H = new le(Me, kt + "leave", w, i, u);
          H.target = yt, H.relatedTarget = O;
          var N = null, K = Ys(u);
          if (K === a) {
            var he = new le(be, kt + "enter", z, i, u);
            he.target = O, he.relatedTarget = yt, N = he;
          }
          DT(e, H, N, w, z);
        }
      }
    }
    function X(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : X;
    function Ne(e, t) {
      if (se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ar.call(t, s) || !se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
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
    function Qn(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze($e(a));
      }
    }
    function Ot(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ml(e, u, s, f, p);
    }
    function Ml(e, t, a, i, u) {
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
        var y = Qn(e, f), g = Qn(e, p);
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
    function fT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function dT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
        if (dT(t))
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
    function pT() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? hT(e) : null
      };
    }
    function vT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fT(a)) {
        i !== null && Cy(a) && mT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
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
    function hT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ot(e), t || {
        start: 0,
        end: 0
      };
    }
    function mT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ey(e, t);
    }
    var yT = Gn && "documentMode" in document && document.documentMode <= 11;
    function gT() {
      Bt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Ry = null, Xd = null, Ty = !1;
    function ST(e) {
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
    function ET(e) {
      return e.window === e ? e.document : e.nodeType === Bi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = ET(a);
      if (!(Ty || Sf == null || Sf !== Fi(i))) {
        var u = ST(Sf);
        if (!Xd || !Ne(Xd, u)) {
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
    function CT(e, t, a, i, u, s, f) {
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
          if (yT)
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
    function RT() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(C0, "onAnimationEnd"), wo(R0, "onAnimationIteration"), wo(T0, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(w0, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
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
            v = Qd;
            break;
          case "scroll":
            v = rh;
            break;
          case "wheel":
            v = Ol;
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
          t === "scroll", w = _T(a, p, i.type, g, b);
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
    RT(), x(), Sy(), gT(), fh();
    function wT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (L(e, t, a, i, u), k(e, t, a, i, u), CT(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, os(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
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
        xT(s, f, a);
      }
      Yi();
    }
    function bT(e, t, a, i, u) {
      var s = mc(a), f = [];
      wT(f, e, i, a, s, t), k0(f, t);
    }
    function gn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nx(t), u = OT(e);
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
        e[gh] = !0, wt.forEach(function(a) {
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
            if (v === J || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (O0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Ys(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === ie || A === we) {
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
        return bT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, z = b.tag;
        if (z === ie && w !== null && (g = w, p !== null)) {
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
        if (p === ie && f !== null) {
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
      while (e && e.tag !== ie);
      return e || null;
    }
    function kT(e, t) {
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
        if (b === ie && g !== null) {
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
    function DT(e, t, a, i, u) {
      var s = i && u ? kT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function OT(e, t) {
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
        registrationNameDependencies: Ke,
        possibleRegistrationNames: Ct
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
    var NT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function wh(e) {
      Bn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(NT, `
`).replace(LT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Y))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Bi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function bh(e) {
      e.onclick = MT;
    }
    function zT(e, t, a, i, u) {
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
              v && dl(t, f);
            } else typeof f == "number" && dl(t, "" + f);
          else s === Eh || s === xo || s === L0 || (Ke.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && gn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function UT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === tp ? iv(e, f) : s === Vs ? dl(e, f) : va(e, s, f, i);
      }
    }
    function AT(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Xa && (p = Jf(e)), p === Xa) {
        if (u = pl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
    function jT(e, t) {
      return A0(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = pl(t, a);
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
          Ft(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), gn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), zT(t, e, i, s, u), t) {
        case "input":
          Na(e), M(e, a, !1);
          break;
        case "textarea":
          Na(e), av(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
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
          } else v === tp || v === Vs || v === Eh || v === xo || v === L0 || (Ke.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === xo || (Ke.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && gn("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function PT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = pl(a, i), f = pl(a, u);
      switch (UT(e, t, s, f), a) {
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
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Ku.hasOwnProperty(t) && Ku[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pl(t, a), Rh(t, a), t) {
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
          Ft(e, a);
          break;
        case "select":
          Ko(e, a), gn("invalid", e);
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
          else if (Ke.hasOwnProperty(A))
            F != null && (typeof F != "function" && Th(A, F), A === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Me = an(A);
            if (a[xo] !== !0) {
              if (!(A === Eh || A === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var be = e.innerHTML, kt = F ? F[Ch] : void 0;
                  if (kt != null) {
                    var yt = U0(e, kt);
                    yt !== be && np(A, be, yt);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), z0) {
                    var O = ty(F);
                    le = e.getAttribute("style"), O !== le && np(A, le, O);
                  }
                } else if (p && !B)
                  v.delete(A.toLowerCase()), le = oi(e, A, F), F !== le && np(A, le, F);
                else if (!on(A, Me, p) && !Xn(A, F, Me, p)) {
                  var H = !1;
                  if (Me !== null)
                    v.delete(Me.attributeName), le = Wl(e, A, F, Me);
                  else {
                    var N = i;
                    if (N === Xa && (N = Jf(t)), N === Xa)
                      v.delete(A.toLowerCase());
                    else {
                      var K = VT(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    le = oi(e, A, F);
                  }
                  var he = B;
                  !he && F !== le && !H && np(A, le, F);
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
    function IT(e, t, a) {
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
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
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
      ], QT = j0.concat(["button"]), WT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
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
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GT = function(e, t) {
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
            return WT.indexOf(t) === -1;
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
        var s = GT(e, u) ? null : i, f = s ? null : KT(e, a), p = s || f;
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
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", ip = "$?", lp = "$!", qT = "style", My = null, zy = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case qo: {
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
    function ZT(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pk(e) {
      return e;
    }
    function JT(e) {
      My = fr(), zy = pT();
      var t = null;
      return kn(!1), t;
    }
    function ew(e) {
      vT(zy), kn(My), My = null, zy = null;
    }
    function tw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = AT(e, t, a, s);
      return sp(u, y), By(y, t), y;
    }
    function nw(e, t) {
      e.appendChild(t);
    }
    function rw(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function aw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iw(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = jT(e, t);
      return sp(i, s), s;
    }
    function lw() {
      var e = window.event;
      return e === void 0 ? sr : go(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, uw = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, P0 = typeof Promise == "function" ? Promise : void 0, ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(sw);
    } : Ay;
    function sw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cw(e, t, a, i) {
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
    function fw(e, t, a, i, u, s) {
      PT(e, t, a, i, u), By(e, u);
    }
    function V0(e) {
      dl(e, "");
    }
    function dw(e, t, a) {
      e.nodeValue = a;
    }
    function pw(e, t) {
      e.appendChild(t);
    }
    function vw(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function hw(e, t, a) {
      e.insertBefore(t, a);
    }
    function mw(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yw(e, t) {
      e.removeChild(t);
    }
    function gw(e, t) {
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
    function Sw(e, t) {
      e.nodeType === Un ? Fy(e.parentNode, t) : e.nodeType === qr && Fy(e, t), kr(e);
    }
    function Ew(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Cw(e) {
      e.nodeValue = "";
    }
    function Rw(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function Tw(e, t) {
      e.nodeValue = t;
    }
    function ww(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function xw(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bw(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function _w(e) {
      return e.nodeType !== Un ? null : e;
    }
    function B0(e) {
      return e.data === ip;
    }
    function Hy(e) {
      return e.data === lp;
    }
    function kw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Dw(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Vi)
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
    function Ow(e) {
      return Oh(e.firstChild);
    }
    function Nw(e) {
      return Oh(e.firstChild);
    }
    function Lw(e) {
      return Oh(e.nextSibling);
    }
    function Mw(e, t, a, i, u, s, f) {
      sp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & dt) !== De;
      return BT(e, t, a, p, i, y, f);
    }
    function zw(e, t, a, i) {
      return sp(a, e), a.mode & dt, YT(e, t);
    }
    function Uw(e, t) {
      sp(t, e);
    }
    function Aw(e) {
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
    function Y0(e) {
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
    function jw(e) {
      kr(e);
    }
    function Fw(e) {
      kr(e);
    }
    function Hw(e) {
      return e !== "head" && e !== "body";
    }
    function Pw(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function Vw(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function Bw(e, t) {
      t.nodeType === qr ? Dy(e, t) : t.nodeType === Un || Oy(e, t);
    }
    function Yw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? Dy(a, t) : t.nodeType === Un || Oy(a, t));
      }
    }
    function Iw(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === qr ? Dy(a, i) : i.nodeType === Un || Oy(a, i));
    }
    function $w(e, t, a) {
      Ny(e, t);
    }
    function Qw(e, t) {
      Ly(e, t);
    }
    function Ww(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function Gw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function Kw(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function qw(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function Xw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Zw(e) {
      Jd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Py = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Vy = "__reactEvents$" + Rf, Jw = "__reactListeners$" + Rf, ex = "__reactHandles$" + Rf;
    function tx(e) {
      delete e[Tf], delete e[Py], delete e[Vy], delete e[Jw], delete e[ex];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function Nh(e, t) {
      t[op] = e;
    }
    function I0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Ys(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function bo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === ie || t.tag === we || t.tag === W || t.tag === J) ? t : null;
    }
    function wf(e) {
      if (e.tag === ie || e.tag === we)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function nx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Q0 = ct.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
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
    var Yy = [], zh;
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
      t !== zh[bu] && S("Unexpected Fiber popped."), e.current = Yy[bu], Yy[bu] = null, zh[bu] = null, bu--;
    }
    function ua(e, t, a) {
      bu++, Yy[bu] = e.current, zh[bu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ii = {};
    Object.freeze(ii);
    var _u = _o(ii), zl = _o(!1), $y = ii;
    function xf(e, t, a) {
      return a && Ul(t) ? $y : _u.current;
    }
    function W0(e, t, a) {
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
          var p = Ie(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function Uh() {
      return zl.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      la(zl, e), la(_u, e);
    }
    function Qy(e) {
      la(zl, e), la(_u, e);
    }
    function G0(e, t, a) {
      {
        if (_u.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(_u, t, e), ua(zl, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return Xe({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return $y = _u.current, ua(_u, a, e), ua(zl, zl.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, la(zl, e), la(_u, e), ua(_u, u, e), ua(zl, a, e);
        } else
          la(zl, e), ua(zl, a, e);
      }
    }
    function rx(e) {
      {
        if (!Lv(e) || e.tag !== fe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case fe: {
              var a = t.type;
              if (Ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ko = 0, Fh = 1, ku = null, Wy = !1, Gy = !1;
    function X0(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function ax(e) {
      Wy = !0, X0(e);
    }
    function Z0() {
      Wy && Do();
    }
    function Do() {
      if (!Gy && ku !== null) {
        Gy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (In(aa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Wy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vd($i, Do), s;
        } finally {
          In(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Hh = null, Ph = 0, Ti = [], wi = 0, Is = null, Du = 1, Ou = "";
    function ix(e) {
      return Qs(), (e.flags & cs) !== ke;
    }
    function lx(e) {
      return Qs(), Ph;
    }
    function ux() {
      var e = Ou, t = Du, a = t & ~ox(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), _f[kf++] = Ph, _f[kf++] = Hh, Hh = e, Ph = t;
    }
    function J0(e, t, a) {
      Qs(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Is, Is = e;
      var i = Du, u = Ou, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, z = s - y, A = Vh(t) + z, F = p << z, le = F | w, Me = b + u;
        Du = 1 << A | le, Ou = Me;
      } else {
        var be = p << s, kt = be | f, yt = u;
        Du = 1 << v | kt, Ou = yt;
      }
    }
    function Ky(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), J0(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Yn(e);
    }
    function ox(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Hh; )
        Hh = _f[--kf], _f[kf] = null, Ph = _f[--kf], _f[kf] = null;
      for (; e === Is; )
        Is = Ti[--wi], Ti[wi] = null, Ou = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null;
    }
    function sx() {
      return Qs(), Is !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function cx(e, t) {
      Qs(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Is, Du = t.id, Ou = t.overflow, Is = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, qi = !1, Ws = !1, Oo = null;
    function fx() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Ws = !0;
    }
    function dx() {
      return Ws;
    }
    function px(e) {
      var t = e.stateNode.containerInfo;
      return xi = Nw(t), Ar = e, qi = !0, Oo = null, Ws = !1, !0;
    }
    function vx(e, t, a) {
      return xi = Lw(t), Ar = e, qi = !0, Oo = null, Ws = !1, a !== null && cx(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case J: {
          Bw(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & dt) !== De;
          Iw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case W: {
          var i = e.memoizedState;
          i.dehydrated !== null && Yw(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = g_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, $w(a, i);
                break;
              case we:
                var u = t.pendingProps;
                Qw(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & dt) !== De;
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
              case we: {
                var b = t.pendingProps, w = (e.mode & dt) !== De;
                qw(
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
          case W: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case ie:
                var F = t.type;
                t.pendingProps, Ww(A, F);
                break;
              case we:
                var le = t.pendingProps;
                Gw(A, le);
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
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = xw(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Ow(i), !0) : !1;
        }
        case we: {
          var u = e.pendingProps, s = bw(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case W: {
          var f = _w(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sx(),
              retryLane: ta
            };
            e.memoizedState = p;
            var v = S_(f);
            return v.return = e, e.child = v, Ar = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & dt) !== De && (e.flags & st) === ke;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (qi) {
        var t = xi;
        if (!t) {
          Zy(e) && (Xy(Ar, e), Jy()), rE(Ar, e), qi = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Zy(e) && (Xy(Ar, e), Jy()), t = up(a);
          var i = Ar;
          if (!t || !aE(e, t)) {
            rE(Ar, e), qi = !1, Ar = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function hx(e, t, a) {
      var i = e.stateNode, u = !Ws, s = Mw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zw(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & dt) !== De;
              Pw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & dt) !== De;
              Vw(
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
    function yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Uw(a, e);
    }
    function gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Aw(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== J && t.tag !== W; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!qi)
        return iE(e), qi = !0, !1;
      if (e.tag !== J && (e.tag !== ie || Hw(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Zy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = up(t);
      }
      return iE(e), e.tag === W ? xi = gx(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function Sx() {
      return qi && xi !== null;
    }
    function lE(e) {
      for (var t = xi; t; )
        tE(e, t), t = up(t);
    }
    function Df() {
      Ar = null, xi = null, qi = !1, Ws = !1;
    }
    function uE() {
      Oo !== null && (eR(Oo), Oo = null);
    }
    function jr() {
      return qi;
    }
    function tg(e) {
      Oo === null ? Oo = [e] : Oo.push(e);
    }
    var Ex = ct.ReactCurrentBatchConfig, Cx = null;
    function Rx() {
      return Ex.transition;
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
      var Tx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ze && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ks = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ie(w) || "Component"), Ks.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ie(w) || "Component"), Ks.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ie(w) || "Component"), Ks.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ie(w) || "Component"), Ks.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ie(w) || "Component"), Ks.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ie(w) || "Component"), Ks.add(w.type);
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
          St(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          St(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Gs(u);
          St(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = Tx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), oE.add(s.type);
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
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, sE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ze || Oe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== fe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !wx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== fe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wa(i, "ref");
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
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ie(e) || "Component";
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
        for (var N = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? N.set(K.key, K) : N.set(K.index, K), K = K.sibling;
        return N;
      }
      function u(O, H) {
        var N = ac(O, H);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, H, N) {
        if (O.index = N, !e)
          return O.flags |= cs, H;
        var K = O.alternate;
        if (K !== null) {
          var he = K.index;
          return he < H ? (O.flags |= En, H) : he;
        } else
          return O.flags |= En, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= En), O;
      }
      function p(O, H, N, K) {
        if (H === null || H.tag !== we) {
          var he = t0(N, O.mode, K);
          return he.return = O, he;
        } else {
          var ce = u(H, N);
          return ce.return = O, ce;
        }
      }
      function v(O, H, N, K) {
        var he = N.type;
        if (he === Qr)
          return g(O, H, N.props.children, K, N.key);
        if (H !== null && (H.elementType === he || // Keep this check inline so it only runs on the false path:
        mR(H, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === We && cE(he) === H.type)) {
          var ce = u(H, N.props);
          return ce.ref = yp(O, H, N), ce.return = O, ce._debugSource = N._source, ce._debugOwner = N._owner, ce;
        }
        var Ve = e0(N, O.mode, K);
        return Ve.ref = yp(O, H, N), Ve.return = O, Ve;
      }
      function y(O, H, N, K) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== N.containerInfo || H.stateNode.implementation !== N.implementation) {
          var he = n0(N, O.mode, K);
          return he.return = O, he;
        } else {
          var ce = u(H, N.children || []);
          return ce.return = O, ce;
        }
      }
      function g(O, H, N, K, he) {
        if (H === null || H.tag !== lt) {
          var ce = Vo(N, O.mode, K, he);
          return ce.return = O, ce;
        } else {
          var Ve = u(H, N);
          return Ve.return = O, Ve;
        }
      }
      function b(O, H, N) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = t0("" + H, O.mode, N);
          return K.return = O, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case lr: {
              var he = e0(H, O.mode, N);
              return he.ref = yp(O, null, H), he.return = O, he;
            }
            case ha: {
              var ce = n0(H, O.mode, N);
              return ce.return = O, ce;
            }
            case We: {
              var Ve = H._payload, qe = H._init;
              return b(O, qe(Ve), N);
            }
          }
          if (Je(H) || vn(H)) {
            var Jt = Vo(H, O.mode, N, null);
            return Jt.return = O, Jt;
          }
          Ih(O, H);
        }
        return typeof H == "function" && $h(O), null;
      }
      function w(O, H, N, K) {
        var he = H !== null ? H.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return he !== null ? null : p(O, H, "" + N, K);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case lr:
              return N.key === he ? v(O, H, N, K) : null;
            case ha:
              return N.key === he ? y(O, H, N, K) : null;
            case We: {
              var ce = N._payload, Ve = N._init;
              return w(O, H, Ve(ce), K);
            }
          }
          if (Je(N) || vn(N))
            return he !== null ? null : g(O, H, N, K, null);
          Ih(O, N);
        }
        return typeof N == "function" && $h(O), null;
      }
      function z(O, H, N, K, he) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ce = O.get(N) || null;
          return p(H, ce, "" + K, he);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case lr: {
              var Ve = O.get(K.key === null ? N : K.key) || null;
              return v(H, Ve, K, he);
            }
            case ha: {
              var qe = O.get(K.key === null ? N : K.key) || null;
              return y(H, qe, K, he);
            }
            case We:
              var Jt = K._payload, Nt = K._init;
              return z(O, H, N, Nt(Jt), he);
          }
          if (Je(K) || vn(K)) {
            var Wn = O.get(N) || null;
            return g(H, Wn, K, he, null);
          }
          Ih(H, K);
        }
        return typeof K == "function" && $h(H), null;
      }
      function A(O, H, N) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case lr:
            case ha:
              sE(O, N);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case We:
              var he = O._payload, ce = O._init;
              A(ce(he), H, N);
              break;
          }
        }
        return H;
      }
      function F(O, H, N, K) {
        for (var he = null, ce = 0; ce < N.length; ce++) {
          var Ve = N[ce];
          he = A(Ve, he, O);
        }
        for (var qe = null, Jt = null, Nt = H, Wn = 0, Lt = 0, Pn = null; Nt !== null && Lt < N.length; Lt++) {
          Nt.index > Lt ? (Pn = Nt, Nt = null) : Pn = Nt.sibling;
          var sa = w(O, Nt, N[Lt], K);
          if (sa === null) {
            Nt === null && (Nt = Pn);
            break;
          }
          e && Nt && sa.alternate === null && t(O, Nt), Wn = s(sa, Wn, Lt), Jt === null ? qe = sa : Jt.sibling = sa, Jt = sa, Nt = Pn;
        }
        if (Lt === N.length) {
          if (a(O, Nt), jr()) {
            var Ir = Lt;
            $s(O, Ir);
          }
          return qe;
        }
        if (Nt === null) {
          for (; Lt < N.length; Lt++) {
            var ui = b(O, N[Lt], K);
            ui !== null && (Wn = s(ui, Wn, Lt), Jt === null ? qe = ui : Jt.sibling = ui, Jt = ui);
          }
          if (jr()) {
            var xa = Lt;
            $s(O, xa);
          }
          return qe;
        }
        for (var ba = i(O, Nt); Lt < N.length; Lt++) {
          var ca = z(ba, O, Lt, N[Lt], K);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? Lt : ca.key), Wn = s(ca, Wn, Lt), Jt === null ? qe = ca : Jt.sibling = ca, Jt = ca);
        }
        if (e && ba.forEach(function(Gf) {
          return t(O, Gf);
        }), jr()) {
          var ju = Lt;
          $s(O, ju);
        }
        return qe;
      }
      function le(O, H, N, K) {
        var he = vn(N);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), N.entries === he && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var ce = he.call(N);
          if (ce)
            for (var Ve = null, qe = ce.next(); !qe.done; qe = ce.next()) {
              var Jt = qe.value;
              Ve = A(Jt, Ve, O);
            }
        }
        var Nt = he.call(N);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Lt = null, Pn = H, sa = 0, Ir = 0, ui = null, xa = Nt.next(); Pn !== null && !xa.done; Ir++, xa = Nt.next()) {
          Pn.index > Ir ? (ui = Pn, Pn = null) : ui = Pn.sibling;
          var ba = w(O, Pn, xa.value, K);
          if (ba === null) {
            Pn === null && (Pn = ui);
            break;
          }
          e && Pn && ba.alternate === null && t(O, Pn), sa = s(ba, sa, Ir), Lt === null ? Wn = ba : Lt.sibling = ba, Lt = ba, Pn = ui;
        }
        if (xa.done) {
          if (a(O, Pn), jr()) {
            var ca = Ir;
            $s(O, ca);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !xa.done; Ir++, xa = Nt.next()) {
            var ju = b(O, xa.value, K);
            ju !== null && (sa = s(ju, sa, Ir), Lt === null ? Wn = ju : Lt.sibling = ju, Lt = ju);
          }
          if (jr()) {
            var Gf = Ir;
            $s(O, Gf);
          }
          return Wn;
        }
        for (var Kp = i(O, Pn); !xa.done; Ir++, xa = Nt.next()) {
          var Yl = z(Kp, O, Ir, xa.value, K);
          Yl !== null && (e && Yl.alternate !== null && Kp.delete(Yl.key === null ? Ir : Yl.key), sa = s(Yl, sa, Ir), Lt === null ? Wn = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && Kp.forEach(function(q_) {
          return t(O, q_);
        }), jr()) {
          var K_ = Ir;
          $s(O, K_);
        }
        return Wn;
      }
      function Me(O, H, N, K) {
        if (H !== null && H.tag === we) {
          a(O, H.sibling);
          var he = u(H, N);
          return he.return = O, he;
        }
        a(O, H);
        var ce = t0(N, O.mode, K);
        return ce.return = O, ce;
      }
      function be(O, H, N, K) {
        for (var he = N.key, ce = H; ce !== null; ) {
          if (ce.key === he) {
            var Ve = N.type;
            if (Ve === Qr) {
              if (ce.tag === lt) {
                a(O, ce.sibling);
                var qe = u(ce, N.props.children);
                return qe.return = O, qe._debugSource = N._source, qe._debugOwner = N._owner, qe;
              }
            } else if (ce.elementType === Ve || // Keep this check inline so it only runs on the false path:
            mR(ce, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === We && cE(Ve) === ce.type) {
              a(O, ce.sibling);
              var Jt = u(ce, N.props);
              return Jt.ref = yp(O, ce, N), Jt.return = O, Jt._debugSource = N._source, Jt._debugOwner = N._owner, Jt;
            }
            a(O, ce);
            break;
          } else
            t(O, ce);
          ce = ce.sibling;
        }
        if (N.type === Qr) {
          var Nt = Vo(N.props.children, O.mode, K, N.key);
          return Nt.return = O, Nt;
        } else {
          var Wn = e0(N, O.mode, K);
          return Wn.ref = yp(O, H, N), Wn.return = O, Wn;
        }
      }
      function kt(O, H, N, K) {
        for (var he = N.key, ce = H; ce !== null; ) {
          if (ce.key === he)
            if (ce.tag === Fe && ce.stateNode.containerInfo === N.containerInfo && ce.stateNode.implementation === N.implementation) {
              a(O, ce.sibling);
              var Ve = u(ce, N.children || []);
              return Ve.return = O, Ve;
            } else {
              a(O, ce);
              break;
            }
          else
            t(O, ce);
          ce = ce.sibling;
        }
        var qe = n0(N, O.mode, K);
        return qe.return = O, qe;
      }
      function yt(O, H, N, K) {
        var he = typeof N == "object" && N !== null && N.type === Qr && N.key === null;
        if (he && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case lr:
              return f(be(O, H, N, K));
            case ha:
              return f(kt(O, H, N, K));
            case We:
              var ce = N._payload, Ve = N._init;
              return yt(O, H, Ve(ce), K);
          }
          if (Je(N))
            return F(O, H, N, K);
          if (vn(N))
            return le(O, H, N, K);
          Ih(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Me(O, H, "" + N, K)) : (typeof N == "function" && $h(O), a(O, H));
      }
      return yt;
    }
    var Of = fE(!0), dE = fE(!1);
    function xx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bx(e, t) {
      for (var a = e.child; a !== null; )
        p_(a, t), a = a.sibling;
    }
    var ug = _o(null), og;
    og = {};
    var Qh = null, Nf = null, sg = null, Wh = !1;
    function Gh() {
      Qh = null, Nf = null, sg = null, Wh = !1;
    }
    function pE() {
      Wh = !0;
    }
    function vE() {
      Wh = !1;
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
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _x(e, t, a) {
      kx(e, t, a);
    }
    function kx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === fe) {
                var p = tr(a), v = Nu($t, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = et(w.lanes, a)), fg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === pn) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = et(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = et(A.lanes, a)), fg(z, a, e), u = i.sibling;
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
      Qh = e, Nf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function rr(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Qh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var qs = null;
    function dg(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function Dx() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
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
        qs = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Ox(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Nx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Va(e, t) {
      return Kh(e, t);
    }
    var Lx = Kh;
    function Kh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (En | Cn)) !== ke && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (En | Cn)) !== ke && dR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, qh = 2, pg = 3, Xh = !1, vg, Zh;
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
      if (Zh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), O1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lx(e, a);
      } else
        return Nx(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = qc(s, e.pendingLanes);
          var f = et(s, a);
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
    function Mx(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ze) {
                It(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~xr | st;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & Ze) {
                It(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : Xe({}, i, y);
        }
        case qh:
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
        var z = u.baseState, A = P, F = null, le = null, Me = null, be = s;
        do {
          var kt = be.lane, yt = be.eventTime;
          if (hu(i, kt)) {
            if (Me !== null) {
              var H = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Me = Me.next = H;
            }
            z = Mx(e, u, be, z, t, a);
            var N = be.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Fn) {
              e.flags |= nn;
              var K = u.effects;
              K === null ? u.effects = [be] : K.push(be);
            }
          } else {
            var O = {
              eventTime: yt,
              lane: kt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Me === null ? (le = Me = O, F = z) : Me = Me.next = O, A = et(A, kt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, ce = he.next;
            he.next = null, be = ce, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Me === null && (F = z), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Me;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var qe = Ve;
          do
            A = et(A, qe.lane), qe = qe.next;
          while (qe !== Ve);
        } else s === null && (u.shared.lanes = P);
        Ip(A), e.lanes = A, e.memoizedState = z;
      }
      Zh = null;
    }
    function zx(e, t) {
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
          f !== null && (s.callback = null, zx(f, a));
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
      var a = XT(t);
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
      var t = rm(Lo.current), a = ZT(t, e.type);
      t !== a && (ua(Sp, e, e), ua(Lo, a, e));
    }
    function Sg(e) {
      Sp.current === e && (la(Lo, e), la(Sp, e));
    }
    var Ux = 0, wE = 1, xE = 1, Ep = 2, Zi = _o(Ux);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function Ax(e, t) {
      return e | t;
    }
    function Mo(e, t) {
      ua(Zi, t, e);
    }
    function Uf(e) {
      la(Zi, e);
    }
    function jx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === Qt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & st) !== ke;
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
    ), Al = (
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
    function Fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = ct.ReactCurrentDispatcher, Cp = ct.ReactCurrentBatchConfig, wg, Af;
    wg = /* @__PURE__ */ new Set();
    var Xs = P, Zt = null, vr = null, hr = null, im = !1, Rp = !1, Tp = 0, Hx = 0, Px = 25, V = null, bi = null, zo = -1, xg = !1;
    function Pt() {
      {
        var e = V;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function te() {
      {
        var e = V;
        bi !== null && (zo++, bi[zo] !== e && Vx(e));
      }
    }
    function jf(e) {
      e != null && !Je(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Vx(e) {
      {
        var t = Ie(Zt);
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
        if (!se(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, Zt = t, bi = e !== null ? e._debugHookTypes : null, zo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ve.current = WE : bi !== null ? ve.current = QE : ve.current = $E;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Px)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, vr = null, hr = null, t.updateQueue = null, zo = -1, ve.current = GE, f = a(i, u);
        } while (Rp);
      }
      ve.current = gm, t._debugHookTypes = bi;
      var v = vr !== null && vr.next !== null;
      if (Xs = P, Zt = null, vr = null, hr = null, V = null, bi = null, zo = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
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
      if (ve.current = gm, im) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Xs = P, Zt = null, vr = null, hr = null, bi = null, zo = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function jl() {
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
      var i = jl(), u;
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
      var f = s.dispatch = $x.bind(null, Zt, s);
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
          var le = F.lane;
          if (hu(Xs, le)) {
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
              var kt = F.action;
              b = e(b, kt);
            }
          } else {
            var Me = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (z = A = Me, w = b) : A = A.next = Me, Zt.lanes = et(Zt.lanes, le), Ip(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? w = b : A.next = z, se(b, i.memoizedState) || Lp(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var O = yt;
        do {
          var H = O.lane;
          Zt.lanes = et(Zt.lanes, H), Ip(H), O = O.next;
        } while (O !== yt);
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
        se(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function vk(e, t, a) {
    }
    function hk(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Zt, u = jl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
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
        se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !se(p, s);
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
        return !se(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Va(e, He);
      t !== null && Sr(t, e, He, $t);
    }
    function um(e) {
      var t = jl();
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
      var t = jl();
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
      var u = jl(), s = i === void 0 ? null : i;
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
      return (Zt.mode & Xt) !== De ? xp(ml | ma | fd, Fr, e, t) : xp(ma | fd, Fr, e, t);
    }
    function bp(e, t) {
      return sm(ma, Fr, e, t);
    }
    function Ug(e, t) {
      return xp(vt, Al, e, t);
    }
    function fm(e, t) {
      return sm(vt, Al, e, t);
    }
    function Ag(e, t) {
      var a = vt;
      return a |= hl, (Zt.mode & Xt) !== De && (a |= Mr), xp(a, pr, e, t);
    }
    function dm(e, t) {
      return sm(vt, pr, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = vt;
      return u |= hl, (Zt.mode & Xt) !== De && (u |= Mr), xp(u, pr, zE.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(vt, pr, zE.bind(null, t, e), i);
    }
    function Bx(e, t) {
    }
    var vm = Bx;
    function Fg(e, t) {
      var a = jl(), i = t === void 0 ? null : t;
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
      var a = jl(), i = t === void 0 ? null : t, u = e();
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
      var t = jl();
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
        if (!se(a, t)) {
          var u = Ld();
          Zt.lanes = et(Zt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Yx(e, t, a) {
      var i = ga();
      In(_s(i, Aa)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && St("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = Yx.bind(null, a), u = jl();
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
    function Ix() {
      return PE;
    }
    function Bg() {
      var e = jl(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = ux();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = _i(), t = e.memoizedState;
      return t;
    }
    function $x(e, t, a) {
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
          Sr(s, e, i, f), YE(s, t, i);
        }
      }
      IE(e, i);
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
            p = ve.current, ve.current = Ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, se(y, v)) {
                Ox(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var b = wa();
          Sr(g, e, i, b), YE(g, t, i);
        }
      }
      IE(e, i);
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
    function YE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = qc(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, bs(e, u);
      }
    }
    function IE(e, t, a) {
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
      unstable_isNewReconciler: Se
    }, $E = null, QE = null, WE = null, GE = null, Fl = null, Ji = null, Sm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), jf(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), jf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), jf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), jf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), jf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), jf(t);
          var a = ve.current;
          ve.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = ve.current;
          ve.current = Fl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = ve.current;
          ve.current = Fl;
          try {
            return um(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Bg();
        },
        unstable_isNewReconciler: Se
      }, QE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ve.current;
          ve.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ve.current;
          ve.current = Fl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), zg(e);
        },
        useState: function(e) {
          V = "useState", te();
          var t = ve.current;
          ve.current = Fl;
          try {
            return um(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), Bg();
        },
        unstable_isNewReconciler: Se
      }, WE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: Se
      }, GE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ve.current;
          ve.current = Sm;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ve.current;
          ve.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ve.current;
          ve.current = Sm;
          try {
            return Mg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: Se
      }, Fl = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), Pt(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), Pt(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), Pt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), Pt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), Pt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), Pt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), Pt();
          var a = ve.current;
          ve.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), Pt();
          var i = ve.current;
          ve.current = Fl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), Pt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Ge(), Pt();
          var t = ve.current;
          ve.current = Fl;
          try {
            return um(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), Pt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), Pt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), Pt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Ge(), Pt(), Bg();
        },
        unstable_isNewReconciler: Se
      }, Ji = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), te(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), te(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), te();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), te();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), te(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), te();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), te(), ym();
        },
        unstable_isNewReconciler: Se
      }, Sm = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), te(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), te(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), te();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), te();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Og(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), te(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), te();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Mg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), te(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), te(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), te(), ym();
        },
        unstable_isNewReconciler: Se
      };
    }
    var Uo = D.unstable_now, KE = 0, Em = -1, _p = -1, Cm = -1, Ig = !1, Rm = !1;
    function qE() {
      return Ig;
    }
    function Wx() {
      Rm = !0;
    }
    function Gx() {
      Ig = !1, Rm = !1;
    }
    function Kx() {
      Ig = Rm, Rm = !1;
    }
    function XE() {
      return KE;
    }
    function ZE() {
      KE = Uo();
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
    function Hl(e) {
      if (Em >= 0) {
        var t = Uo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (Cm >= 0) {
        var t = Uo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Pl() {
      Em = Uo();
    }
    function Wg() {
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
    var Kg = {}, qg, Xg, Zg, Jg, eS, eC, wm, tS, nS, rS, kp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ze) {
          It(!0);
          try {
            s = a(i, u);
          } finally {
            It(!1);
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
        s.tag = qh, t != null && (wm(t, "forceUpdate"), s.callback = t);
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
            It(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              It(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ne(a, i) || !Ne(u, s) : !0;
    }
    function qx(e, t, a) {
      var i = e.stateNode;
      {
        var u = bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === De && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === De && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Je(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, ss(t, e), t._reactInternalInstance = Kg;
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", v);
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
        It(!0);
        try {
          g = new t(a, s);
        } finally {
          It(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = bt(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var le = bt(t) || "Component", Me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(le) || (Jg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Me, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && W0(e, u, s), g;
    }
    function Xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      qx(e, t, a);
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
          var p = bt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ze && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = vt;
        y |= hl, (e.mode & Xt) !== De && (y |= Mr), e.flags |= y;
      }
    }
    function Zx(e, t, a, i) {
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
          var A = vt;
          A |= hl, (e.mode & Xt) !== De && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), z = e.memoizedState);
      var F = tm() || nC(e, t, s, a, w, z, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = vt;
          le |= hl, (e.mode & Xt) !== De && (le |= Mr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Me = vt;
          Me |= hl, (e.mode & Xt) !== De && (Me |= Mr), e.flags |= Me;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, F;
    }
    function Jx(e, t, a, i, u) {
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
      var F = t.memoizedState, le = s.state = F;
      if (em(t, i, s, u), le = t.memoizedState, f === v && F === le && !Uh() && !tm() && !re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), !1;
      typeof z == "function" && (aS(t, a, z, i), le = t.memoizedState);
      var Me = tm() || nC(t, a, p, i, F, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      re;
      return Me ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Me;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: xt(t),
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
    function eb(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = eb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === fe)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
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
    var tb = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Nu($t, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        W1(u), oS(e, t);
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
        yR(e), oS(e, t), typeof u != "function" && $1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, He) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = G1.bind(null, e, t, a);
        br && $p(e, a), t.then(s, s);
      }
    }
    function nb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rb(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === De && (a === _e || a === Ae || a === xe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === W && jx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & dt) === De) {
        if (e === t)
          e.flags |= xr;
        else {
          if (e.flags |= st, a.flags |= ei, a.flags &= -52805, a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = Nu($t, He);
              f.tag = qh, No(a, f, He);
            }
          }
          a.lanes = et(a.lanes, He);
        }
        return e;
      }
      return e.flags |= xr, e.lanes = u, e;
    }
    function ab(e, t, a, i, u) {
      if (a.flags |= lu, br && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rb(a), jr() && a.mode & dt && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~hn, sC(f, t, a, e, u), f.mode & dt && uC(e, s, u), nb(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & dt) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & xr) === ke && (v.flags |= hn), sC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), j1(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= xr;
            var b = tr(u);
            y.lanes = et(y.lanes, b);
            var w = lC(y, g, b);
            mg(y, w);
            return;
          }
          case fe:
            var z = i, A = y.type, F = y.stateNode;
            if ((y.flags & st) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= xr;
              var le = tr(u);
              y.lanes = et(y.lanes, le);
              var Me = sS(y, z, le);
              mg(y, Me);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ib() {
      return null;
    }
    var Dp = ct.ReactCurrentOwner, tl = !1, cS, Op, fS, dS, pS, Js, vS, xm, Np;
    cS = {}, Op = {}, fS = {}, dS = {}, pS = {}, Js = !1, vS = {}, xm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function lb(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Lf(t, u), Ua(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & Ze) {
          It(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            It(!1);
          }
        }
        Da(!1);
      }
      return El(), e !== null && !tl ? (bE(e, t, u), Lu(e, t, u)) : (jr() && y && Ky(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (f_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = xe, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            bt(s)
          ), a.defaultProps !== void 0) {
            var v = bt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && Ki(
          b,
          i,
          // Resolved props
          "prop",
          bt(g)
        );
      }
      var w = e.child, z = TS(e, u);
      if (!z) {
        var A = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Ne, F(A, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Ii;
      var le = ac(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === We) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ne(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
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
        if ((t.mode & dt) === De) {
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
            v = et(y, a);
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
        s !== null ? (z = et(s.baseLanes, a), t.memoizedState = null) : z = a, Fm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function ub(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function ob(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function sb(e, t, a) {
      {
        t.flags |= vt;
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
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
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
          It(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            It(!1);
          }
        }
        Da(!1);
      }
      return El(), e !== null && !tl ? (bE(e, t, u), Lu(e, t, u)) : (jr() && y && Ky(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= xr;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = et(t.lanes, g);
            var b = sS(t, Zs(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Ki(
            w,
            i,
            // Resolved props
            "prop",
            bt(a)
          );
        }
      }
      var z;
      Ul(a) ? (z = !0, jh(t)) : z = !1, Lf(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), aC(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = Zx(t, a, i, u) : F = Jx(e, t, a, i, u);
      var le = mS(e, t, a, F, z, u);
      {
        var Me = t.stateNode;
        F && Me.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), Js = !0);
      }
      return le;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & st) !== ke;
      if (!i && !f)
        return u && q0(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        Ua(t);
        {
          if (Da(!0), v = p.render(), t.mode & Ze) {
            It(!0);
            try {
              p.render();
            } finally {
              It(!1);
            }
          }
          Da(!1);
        }
        El();
      }
      return t.flags |= Ii, e !== null && f ? lb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function cb(e, t, a) {
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
          px(t);
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
    function fb(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Yt), vC(e, t), Ra(e, t, f, a), t.child;
    }
    function db(e, t) {
      return e === null && eg(t), null;
    }
    function pb(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = d_(v), g = el(v, u), b;
      switch (y) {
        case _e:
          return yS(t, v), t.type = v = Wf(v), b = hS(null, t, v, g, i), b;
        case fe:
          return t.type = v = WS(v), b = hC(null, t, v, g, i), b;
        case Ae:
          return t.type = v = GS(v), b = cC(null, t, v, g, i), b;
        case me: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Ki(
              w,
              g,
              // Resolved for outer only
              "prop",
              bt(v)
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
      throw v !== null && typeof v == "object" && v.$$typeof === We && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function vb(e, t, a, i, u) {
      _m(e, t), t.tag = fe;
      var s;
      return Ul(a) ? (s = !0, jh(t)) : s = !1, Lf(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function hb(e, t, a, i) {
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
          var y = bt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Ze && Xi.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (El(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = bt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = bt(a) || "Unknown";
          Op[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Op[b] = !0);
        }
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ul(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = _e, t.mode & Ze) {
          It(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            It(!1);
          }
        }
        return jr() && v && Ky(t), Ra(null, t, p, i), yS(t, a), t.child;
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
          var f = bt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = bt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = bt(t) || "Unknown";
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
        cachePool: ib(),
        transitions: null
      };
    }
    function mb(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Ep);
    }
    function gb(e, t) {
      return xs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      __(t) && (t.flags |= st);
      var u = Zi.current, s = !1, f = (t.flags & st) !== ke;
      if (f || yb(u, e) ? (s = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (u = Ax(u, xE)), u = zf(u), Mo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Sb(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return wb(e, t, f, i, A, z, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Me = Cb(e, t, le, F, a), be = t.child, kt = e.child.memoizedState;
          return be.memoizedState = kt === null ? SS(a) : mb(kt, a), be.childLanes = gb(e, a), t.memoizedState = gS, Me;
        } else {
          var yt = i.children, O = Eb(e, t, yt, a);
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
    function Sb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & dt) === De && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Rt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vo(a, u, i, null)) : (p = CS(f, u), v = Vo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return SR(e, t, P, null);
    }
    function SC(e, t) {
      return ac(e, t);
    }
    function Eb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & dt) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Rt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
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
    function Rb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Vo(i, s, u, null);
      return v.flags |= En, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & dt) !== De && Of(t, e.child, null, u), v;
    }
    function Tb(e, t, a) {
      return (e.mode & dt) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : Hy(t) ? e.lanes = er : e.lanes = ta, null;
    }
    function wb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & hn) {
          t.flags &= ~hn;
          var O = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var H = i.children, N = i.fallback, K = Rb(e, t, H, N, f), he = t.child;
          return he.memoizedState = SS(f), t.memoizedState = gS, K;
        }
      else {
        if (fx(), (t.mode & dt) === De)
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
            var g = kw(u);
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
              var le = $t;
              Va(e, F), Sr(A, e, F, le);
            }
          }
          BS();
          var Me = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Me);
        } else if (B0(u)) {
          t.flags |= st, t.child = e.child;
          var be = K1.bind(null, e);
          return Dw(u, be), null;
        } else {
          vx(t, u, s.treeContext);
          var kt = i.children, yt = ES(t, kt);
          return yt.flags |= Cn, yt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), fg(e.return, t, a);
    }
    function xb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === W) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === Qt)
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
    function bb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _b(e) {
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
    function kb(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = Je(e), i = !a && typeof vn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Db(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Je(e)) {
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
      _b(u), kb(s, u), Db(f, u), Ra(e, t, f, a);
      var p = Zi.current, v = Eg(p, Ep);
      if (v)
        p = Cg(p, Ep), t.flags |= st;
      else {
        var y = e !== null && (e.flags & st) !== ke;
        y && xb(t, t.child, a), p = zf(p);
      }
      if (Mo(t, p), (t.mode & dt) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bb(t.child), b;
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
    function Ob(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var TC = !1;
    function Nb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (se(y, p)) {
          if (f.children === s.children && !Uh())
            return Lu(e, t, a);
        } else
          _x(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var wC = !1;
    function Lb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = rr(i);
      Ua(t);
      var p;
      return Dp.current = t, Da(!0), p = s(f), Da(!1), El(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Lp() {
      tl = !0;
    }
    function _m(e, t) {
      (t.mode & dt) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), Ip(t.lanes), ra(a, t.childLanes) ? (xx(e, t), t.child) : null;
    }
    function Mb(e, t, a) {
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
    function zb(e, t, a) {
      switch (t.tag) {
        case J:
          mC(t), t.stateNode, Df();
          break;
        case ie:
          TE(t);
          break;
        case fe: {
          var i = t.type;
          Ul(i) && jh(t);
          break;
        }
        case Fe:
          yg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case Dt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= vt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case W: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mo(t, zf(Zi.current)), t.flags |= st, null;
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
        case Qt: {
          var w = (e.flags & st) !== ke, z = ra(a, t.childLanes);
          if (w) {
            if (z)
              return RC(e, t, a);
            t.flags |= st;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Mo(t, Zi.current), z)
            break;
          return null;
        }
        case je:
        case jt:
          return t.lanes = P, pC(e, t, a);
      }
      return Lu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          tl = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === ke)
            return tl = !1, zb(e, t, a);
          (e.flags & ei) !== ke ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, jr() && ix(t)) {
        var f = t.index, p = lx();
        J0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Ue:
          return hb(e, t, t.type, a);
        case Vt: {
          var v = t.elementType;
          return pb(e, t, v, a);
        }
        case _e: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : el(y, g);
          return hS(e, t, y, b, a);
        }
        case fe: {
          var w = t.type, z = t.pendingProps, A = t.elementType === w ? z : el(w, z);
          return hC(e, t, w, A, a);
        }
        case J:
          return cb(e, t, a);
        case ie:
          return fb(e, t, a);
        case we:
          return db(e, t);
        case W:
          return gC(e, t, a);
        case Fe:
          return Ob(e, t, a);
        case Ae: {
          var F = t.type, le = t.pendingProps, Me = t.elementType === F ? le : el(F, le);
          return cC(e, t, F, Me, a);
        }
        case lt:
          return ub(e, t, a);
        case Tn:
          return ob(e, t, a);
        case Dt:
          return sb(e, t, a);
        case rt:
          return Nb(e, t, a);
        case en:
          return Lb(e, t, a);
        case me: {
          var be = t.type, kt = t.pendingProps, yt = el(be, kt);
          if (t.type !== t.elementType) {
            var O = be.propTypes;
            O && Ki(
              O,
              yt,
              // Resolved for outer only
              "prop",
              bt(be)
            );
          }
          return yt = el(be.type, yt), fC(e, t, be, yt, a);
        }
        case xe:
          return dC(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var H = t.type, N = t.pendingProps, K = t.elementType === H ? N : el(H, N);
          return vb(e, t, H, K, a);
        }
        case Qt:
          return RC(e, t, a);
        case Et:
          break;
        case je:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= vt;
    }
    function bC(e) {
      e.flags |= An, e.flags |= fs;
    }
    var _C, wS, kC, DC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === we)
          nw(e, u.stateNode);
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
        var f = t.stateNode, p = gg(), v = aw(f, a, s, i, u, p);
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
        if ((e.mode & Rt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Rt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ub(e, t, a) {
      if (Sx() && (t.mode & dt) !== De && (t.flags & st) === ke)
        return lE(t), Df(), t.flags |= hn | lu | xr, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yx(t), Hr(t), (t.mode & Rt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & st) === ke && (t.memoizedState = null), t.flags |= vt, Hr(t), (t.mode & Rt) !== De) {
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
      switch (qy(t), t.tag) {
        case Ue:
        case Vt:
        case xe:
        case _e:
        case Ae:
        case lt:
        case Tn:
        case Dt:
        case en:
        case me:
          return Hr(t), null;
        case fe: {
          var u = t.type;
          return Ul(u) && Ah(t), Hr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Mf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
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
        case ie: {
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
              hx(t, v, g) && Pf(t);
            else {
              var w = tw(y, i, v, g, t);
              _C(w, t, !1, !1), t.stateNode = w, rw(w, y, i, v) && Pf(t);
            }
            t.ref !== null && bC(t);
          }
          return Hr(t), null;
        }
        case we: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            DC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = RE(), le = gg(), Me = Bh(t);
            Me ? mx(t) && Pf(t) : t.stateNode = iw(z, F, le, t);
          }
          return Hr(t), null;
        }
        case W: {
          Uf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = Ub(e, t, be);
            if (!kt)
              return t.flags & xr ? t : null;
          }
          if ((t.flags & st) !== ke)
            return t.lanes = a, (t.mode & Rt) !== De && Gg(t), t;
          var yt = be !== null, O = e !== null && e.memoizedState !== null;
          if (yt !== O && yt) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & dt) !== De) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || Eg(Zi.current, xE) ? A1() : BS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= vt), Hr(t), (t.mode & Rt) !== De && yt) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Mf(t), wS(e, t), e === null && Zw(t.stateNode.containerInfo), Hr(t), null;
        case rt:
          var ce = t.type._context;
          return cg(ce, t), Hr(t), null;
        case Mt: {
          var Ve = t.type;
          return Ul(Ve) && Ah(t), Hr(t), null;
        }
        case Qt: {
          Uf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return Hr(t), null;
          var Jt = (t.flags & st) !== ke, Nt = qe.rendering;
          if (Nt === null)
            if (Jt)
              Mp(qe, !1);
            else {
              var Wn = F1() && (e === null || (e.flags & st) === ke);
              if (!Wn)
                for (var Lt = t.child; Lt !== null; ) {
                  var Pn = am(Lt);
                  if (Pn !== null) {
                    Jt = !0, t.flags |= st, Mp(qe, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= vt), t.subtreeFlags = ke, bx(t, a), Mo(t, Cg(Zi.current, Ep)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              qe.tail !== null && bn() > XC() && (t.flags |= st, Jt = !0, Mp(qe, !1), t.lanes = Pv);
            }
          else {
            if (!Jt) {
              var Ir = am(Nt);
              if (Ir !== null) {
                t.flags |= st, Jt = !0;
                var ui = Ir.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= vt), Mp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Nt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - qe.renderingStartTime > XC() && a !== ta && (t.flags |= st, Jt = !0, Mp(qe, !1), t.lanes = Pv);
            }
            if (qe.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var xa = qe.last;
              xa !== null ? xa.sibling = Nt : t.child = Nt, qe.last = Nt;
            }
          }
          if (qe.tail !== null) {
            var ba = qe.tail;
            qe.rendering = ba, qe.tail = ba.sibling, qe.renderingStartTime = bn(), ba.sibling = null;
            var ca = Zi.current;
            return Jt ? ca = Cg(ca, Ep) : ca = zf(ca), Mo(t, ca), ba;
          }
          return Hr(t), null;
        }
        case Et:
          break;
        case je:
        case jt: {
          VS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var Kp = e.memoizedState, Yl = Kp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= yi);
          }
          return !Gf || (t.mode & dt) === De ? Hr(t) : ra(Bl, ta) && (Hr(t), t.subtreeFlags & (En | vt) && (t.flags |= yi)), null;
        }
        case mt:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ab(e, t, a) {
      switch (qy(t), t.tag) {
        case fe: {
          var i = t.type;
          Ul(i) && Ah(t);
          var u = t.flags;
          return u & xr ? (t.flags = u & ~xr | st, (t.mode & Rt) !== De && Gg(t), t) : null;
        }
        case J: {
          t.stateNode, Mf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & xr) !== ke && (s & st) === ke ? (t.flags = s & ~xr | st, t) : null;
        }
        case ie:
          return Sg(t), null;
        case W: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & xr ? (t.flags = p & ~xr | st, (t.mode & Rt) !== De && Gg(t), t) : null;
        }
        case Qt:
          return Uf(t), null;
        case Fe:
          return Mf(t), null;
        case rt:
          var v = t.type._context;
          return cg(v, t), null;
        case je:
        case jt:
          return VS(t), null;
        case mt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (qy(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case J: {
          t.stateNode, Mf(t), Qy(t), Tg();
          break;
        }
        case ie: {
          Sg(t);
          break;
        }
        case Fe:
          Mf(t);
          break;
        case W:
          Uf(t);
          break;
        case Qt:
          Uf(t);
          break;
        case rt:
          var u = t.type._context;
          cg(u, t);
          break;
        case je:
        case jt:
          VS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var km = !1, Pr = !1, jb = typeof WeakSet == "function" ? WeakSet : Set, Ce = null, Vf = null, Bf = null;
    function Fb(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var Hb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Rt)
        try {
          Pl(), t.componentWillUnmount();
        } finally {
          Hl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Ao(pr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Hb(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function Pb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Qe && ot && e.mode & Rt)
              try {
                Pl(), i = a(null);
              } finally {
                Hl(e);
              }
            else
              i = a(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var UC = !1;
    function Vb(e, t) {
      JT(e.containerInfo), Ce = t, Bb();
      var a = UC;
      return UC = !1, a;
    }
    function Bb() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        (e.subtreeFlags & yl) !== ke && t !== null ? (t.return = e, Ce = t) : Yb();
      }
    }
    function Yb() {
      for (; Ce !== null; ) {
        var e = Ce;
        Gt(e);
        try {
          Ib(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        Sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function Ib(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== ke) {
        switch (Gt(e), e.tag) {
          case _e:
          case Ae:
          case xe:
            break;
          case fe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : el(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              ww(v.containerInfo);
            }
            break;
          }
          case ie:
          case we:
          case Fe:
          case Mt:
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
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ba ? Cl(t) : (e & pr) !== Ba && Rd(t), (e & Al) !== Ba && Qp(!0), Dm(t, a, p), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? bc() : (e & pr) !== Ba && uo());
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
            (e & Al) !== Ba && Qp(!0), s.destroy = f(), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? Qi() : (e & pr) !== Ba && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & pr) !== ke ? v = "useLayoutEffect" : (s.tag & Al) !== ke ? v = "useInsertionEffect" : v = "useEffect";
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
    function $b(e, t) {
      if ((t.flags & vt) !== ke)
        switch (t.tag) {
          case Dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Dt:
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
      if ((a.flags & gl) !== ke)
        switch (a.tag) {
          case _e:
          case Ae:
          case xe: {
            if (!Pr)
              if (a.mode & Rt)
                try {
                  Pl(), Ao(pr | dr, a);
                } finally {
                  Hl(a);
                }
              else
                Ao(pr | dr, a);
            break;
          }
          case fe: {
            var u = a.stateNode;
            if (a.flags & vt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Rt)
                  try {
                    Pl(), u.componentDidMount();
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : el(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Rt)
                  try {
                    Pl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), CE(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case fe:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & vt) {
              var b = a.type, w = a.memoizedProps;
              cw(g, b, w);
            }
            break;
          }
          case we:
            break;
          case Fe:
            break;
          case Dt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, le = a.stateNode.effectDuration, Me = XE(), be = t === null ? "mount" : "update";
              qE() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Me);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, le, Me), Y1(a);
                var kt = a.return;
                e: for (; kt !== null; ) {
                  switch (kt.tag) {
                    case J:
                      var yt = kt.stateNode;
                      yt.effectDuration += le;
                      break e;
                    case Dt:
                      var O = kt.stateNode;
                      O.effectDuration += le;
                      break e;
                  }
                  kt = kt.return;
                }
              }
            }
            break;
          }
          case W: {
            e1(e, a);
            break;
          }
          case Qt:
          case Mt:
          case Et:
          case je:
          case jt:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & An && AC(a);
    }
    function Wb(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          if (e.mode & Rt)
            try {
              Pl(), MC(e, e.return);
            } finally {
              Hl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Pb(e, e.return, t), zC(e, e.return);
          break;
        }
        case ie: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Gb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ew(u) : Rw(i.stateNode, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === we) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Cw(s) : Tw(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === jt) && i.memoizedState !== null && i !== e)) {
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
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Rt)
            try {
              Pl(), u = t(i);
            } finally {
              Hl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && tx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qb(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ie || e.tag === J || e.tag === Fe;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== we && t.tag !== pn; ) {
          if (t.flags & En || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function Xb(e) {
      var t = qb(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & Yt && (V0(a), t.flags &= ~Yt);
          var i = HC(e);
          _S(e, i, a);
          break;
        }
        case J:
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
      var i = e.tag, u = i === ie || i === we;
      if (u) {
        var s = e.stateNode;
        t ? mw(a, s, t) : vw(a, s);
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
      var i = e.tag, u = i === ie || i === we;
      if (u) {
        var s = e.stateNode;
        t ? hw(a, s, t) : pw(a, s);
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
    function Zb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ie: {
              Vr = i.stateNode, rl = !1;
              break e;
            }
            case J: {
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
        case ie:
          Pr || Yf(a, t);
        case we: {
          {
            var i = Vr, u = rl;
            Vr = null, jo(e, t, a), Vr = i, rl = u, Vr !== null && (rl ? gw(Vr, a.stateNode) : yw(Vr, a.stateNode));
          }
          return;
        }
        case pn: {
          Vr !== null && (rl ? Sw(Vr, a.stateNode) : Fy(Vr, a.stateNode));
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
        case me:
        case xe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, z = b.tag;
                  w !== void 0 && ((z & Al) !== Ba ? Dm(a, t, w) : (z & pr) !== Ba && (Rd(a), a.mode & Rt ? (Pl(), Dm(a, t, w), Hl(a)) : Dm(a, t, w), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case fe: {
          if (!Pr) {
            Yf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && xS(a, t, A);
          }
          jo(e, t, a);
          return;
        }
        case Et: {
          jo(e, t, a);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
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
    function Jb(e) {
      e.memoizedState;
    }
    function e1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Fw(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new jb()), t.forEach(function(i) {
          var u = q1.bind(null, e, i);
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
    function t1(e, t, a) {
      Vf = a, Bf = e, Gt(t), BC(t, e), Gt(t), Vf = null, Bf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zb(e, t, s);
          } catch (v) {
            dn(s, t, v);
          }
        }
      var f = qa();
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
        case me:
        case xe: {
          if (al(t, e), Vl(e), u & vt) {
            try {
              nl(Al | dr, e, e.return), Ao(Al | dr, e);
            } catch (Ve) {
              dn(e, e.return, Ve);
            }
            if (e.mode & Rt) {
              try {
                Pl(), nl(pr | dr, e, e.return);
              } catch (Ve) {
                dn(e, e.return, Ve);
              }
              Hl(e);
            } else
              try {
                nl(pr | dr, e, e.return);
              } catch (Ve) {
                dn(e, e.return, Ve);
              }
          }
          return;
        }
        case fe: {
          al(t, e), Vl(e), u & An && i !== null && Yf(i, i.return);
          return;
        }
        case ie: {
          al(t, e), Vl(e), u & An && i !== null && Yf(i, i.return);
          {
            if (e.flags & Yt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Ve) {
                dn(e, e.return, Ve);
              }
            }
            if (u & vt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fw(f, g, y, v, p, e);
                  } catch (Ve) {
                    dn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case we: {
          if (al(t, e), Vl(e), u & vt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
            try {
              dw(b, z, w);
            } catch (Ve) {
              dn(e, e.return, Ve);
            }
          }
          return;
        }
        case J: {
          if (al(t, e), Vl(e), u & vt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                jw(t.containerInfo);
              } catch (Ve) {
                dn(e, e.return, Ve);
              }
          }
          return;
        }
        case Fe: {
          al(t, e), Vl(e);
          return;
        }
        case W: {
          al(t, e), Vl(e);
          var F = e.child;
          if (F.flags & yi) {
            var le = F.stateNode, Me = F.memoizedState, be = Me !== null;
            if (le.isHidden = be, be) {
              var kt = F.alternate !== null && F.alternate.memoizedState !== null;
              kt || U1();
            }
          }
          if (u & vt) {
            try {
              Jb(e);
            } catch (Ve) {
              dn(e, e.return, Ve);
            }
            VC(e);
          }
          return;
        }
        case je: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var O = Pr;
            Pr = O || yt, al(t, e), Pr = O;
          } else
            al(t, e);
          if (Vl(e), u & yi) {
            var H = e.stateNode, N = e.memoizedState, K = N !== null, he = e;
            if (H.isHidden = K, K && !yt && (he.mode & dt) !== De) {
              Ce = he;
              for (var ce = he.child; ce !== null; )
                Ce = ce, r1(ce), ce = ce.sibling;
            }
            Gb(he, K);
          }
          return;
        }
        case Qt: {
          al(t, e), Vl(e), u & vt && VC(e);
          return;
        }
        case Et:
          return;
        default: {
          al(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          Xb(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & Cn && (e.flags &= ~Cn);
    }
    function n1(e, t, a) {
      Vf = a, Bf = t, Ce = e, YC(e, t, a), Vf = null, Bf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & dt) !== De; Ce !== null; ) {
        var u = Ce, s = u.child;
        if (u.tag === je && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, b = km, w = Pr;
            km = p, Pr = g, Pr && !w && (Ce = u, a1(u));
            for (var z = s; z !== null; )
              Ce = z, YC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Ce = u, km = b, Pr = w, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & gl) !== ke && s !== null ? (s.return = u, Ce = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & gl) !== ke) {
          var u = i.alternate;
          Gt(i);
          try {
            Qb(t, u, i, a);
          } catch (f) {
            dn(i, i.return, f);
          }
          Sn();
        }
        if (i === e) {
          Ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ce = s;
          return;
        }
        Ce = i.return;
      }
    }
    function r1(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        switch (t.tag) {
          case _e:
          case Ae:
          case me:
          case xe: {
            if (t.mode & Rt)
              try {
                Pl(), nl(pr, t, t.return);
              } finally {
                Hl(t);
              }
            else
              nl(pr, t, t.return);
            break;
          }
          case fe: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case ie: {
            Yf(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ce = a) : IC(e);
      }
    }
    function IC(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        if (t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function a1(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ce = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        Gt(t);
        try {
          Wb(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (Sn(), t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function i1(e, t, a, i) {
      Ce = t, l1(t, e, a, i);
    }
    function l1(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce, s = u.child;
        (u.subtreeFlags & ur) !== ke && s !== null ? (s.return = u, Ce = s) : u1(e, t, a, i);
      }
    }
    function u1(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce;
        if ((u.flags & ma) !== ke) {
          Gt(u);
          try {
            o1(t, u, a, i);
          } catch (f) {
            dn(u, u.return, f);
          }
          Sn();
        }
        if (u === e) {
          Ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ce = s;
          return;
        }
        Ce = u.return;
      }
    }
    function o1(e, t, a, i) {
      switch (t.tag) {
        case _e:
        case Ae:
        case xe: {
          if (t.mode & Rt) {
            Wg();
            try {
              Ao(Fr | dr, t);
            } finally {
              Qg(t);
            }
          } else
            Ao(Fr | dr, t);
          break;
        }
      }
    }
    function s1(e) {
      Ce = e, c1();
    }
    function c1() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        if ((Ce.flags & Xr) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ce = u, p1(u, e);
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
            Ce = e;
          }
        }
        (e.subtreeFlags & ur) !== ke && t !== null ? (t.return = e, Ce = t) : f1();
      }
    }
    function f1() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & ma) !== ke && (Gt(e), d1(e), Sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function d1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          e.mode & Rt ? (Wg(), nl(Fr | dr, e, e.return), Qg(e)) : nl(Fr | dr, e, e.return);
          break;
        }
      }
    }
    function p1(e, t) {
      for (; Ce !== null; ) {
        var a = Ce;
        Gt(a), h1(a, t), Sn();
        var i = a.child;
        i !== null ? (i.return = a, Ce = i) : v1(e);
      }
    }
    function v1(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ce = a;
          return;
        }
        Ce = i;
      }
    }
    function h1(e, t) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          e.mode & Rt ? (Wg(), nl(Fr, e, t), Qg(e)) : nl(Fr, e, t);
          break;
        }
      }
    }
    function m1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          try {
            Ao(pr | dr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          try {
            Ao(Fr | dr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe: {
          try {
            nl(pr | dr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case _e:
        case Ae:
        case xe:
          try {
            nl(Fr | dr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var E1 = [];
    function C1() {
      E1.forEach(function(e) {
        return e();
      });
    }
    var R1 = ct.ReactCurrentActQueue;
    function T1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && R1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var w1 = Math.ceil, DS = ct.ReactCurrentDispatcher, OS = ct.ReactCurrentOwner, Br = ct.ReactCurrentBatchConfig, il = ct.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Mu = 0, Up = 1, ec = 2, Om = 3, Ap = 4, GC = 5, NS = 6, _t = mr, Ta = null, On = null, yr = P, Bl = P, LS = _o(P), gr = Mu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ya = null, MS = 0, KC = 500, qC = 1 / 0, x1 = 500, zu = null;
    function Pp() {
      qC = bn() + x1;
    }
    function XC() {
      return qC;
    }
    var Mm = !1, zS = null, If = null, tc = !1, Fo = null, Vp = P, US = [], AS = null, b1 = 50, Bp = 0, jS = null, FS = !1, zm = !1, _1 = 50, $f = 0, Um = null, Yp = $t, Am = P, ZC = !1;
    function jm() {
      return Ta;
    }
    function wa() {
      return (_t & (Yr | ki)) !== mr ? bn() : (Yp !== $t || (Yp = bn()), Yp);
    }
    function Ho(e) {
      var t = e.mode;
      if ((t & dt) === De)
        return He;
      if ((_t & Yr) !== mr && yr !== P)
        return tr(yr);
      var a = Rx() !== Cx;
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
      var s = lw();
      return s;
    }
    function k1(e) {
      var t = e.mode;
      return (t & dt) === De ? He : Qv();
    }
    function Sr(e, t, a, i) {
      Z1(), ZC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), vo(e, a, i), (_t & Yr) !== P && e === Ta ? t_(t) : (br && Gv(e, t, a), n_(t), e === Ta && ((_t & Yr) === mr && (Fp = et(Fp, a)), gr === Ap && Po(e, yr)), Ia(e, i), a === He && _t === mr && (t.mode & dt) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !il.isBatchingLegacy && (Pp(), Z0()));
    }
    function D1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function O1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & Yr) !== mr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Yv(e, t);
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
        e.tag === ko ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), ax(tR.bind(null, e))) : X0(tR.bind(null, e)), il.current !== null ? il.current.push(Do) : ow(function() {
          (_t & (Yr | ki)) === mr && Do();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
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
        f = QS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (Gx(), Yp = $t, Am = P, (_t & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = na(e, e === Ta ? yr : P);
      if (u === P)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? P1(e, u) : Hm(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Wc(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw nc(e, P), Po(e, u), Ia(e, bn()), v;
        }
        if (f === NS)
          Po(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !L1(g)) {
            if (f = Hm(e, u), f === ec) {
              var b = Wc(e);
              b !== P && (u = b, f = HS(e, b));
            }
            if (f === Up) {
              var w = jp;
              throw nc(e, P), Po(e, u), Ia(e, bn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, N1(e, f, u);
        }
      }
      return Ia(e, bn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= hn, Xw(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== ec) {
        var s = Ya;
        Ya = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function N1(e, t, a) {
      switch (t) {
        case Mu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, zu);
          break;
        }
        case Om: {
          if (Po(e, a), Gc(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = MS + KC - bn();
            if (i > 10) {
              var u = na(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case Ap: {
          if (Po(e, a), uy(a))
            break;
          if (!hR()) {
            var f = kd(e, a), p = f, v = bn() - p, y = X1(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case GC: {
          rc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L1(e) {
      for (var t = e; ; ) {
        if (t.flags & wc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!se(f(), p))
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
      if (Kx(), (_t & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      Au();
      var t = na(e, P);
      if (!ra(t, He))
        return Ia(e, bn()), null;
      var a = Hm(e, t);
      if (e.tag !== ko && a === ec) {
        var i = Wc(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw nc(e, P), Po(e, t), Ia(e, bn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, zu), Ia(e, bn()), null;
    }
    function M1(e, t) {
      t !== P && (bs(e, et(t, He)), Ia(e, bn()), (_t & (Yr | ki)) === mr && (Pp(), Do()));
    }
    function PS(e, t) {
      var a = _t;
      _t |= WC;
      try {
        return e(t);
      } finally {
        _t = a, _t === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Pp(), Z0());
      }
    }
    function z1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(aa), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, _t === mr && Pp();
      }
    }
    function Uu(e) {
      Fo !== null && Fo.tag === ko && (_t & (Yr | ki)) === mr && Au();
      var t = _t;
      _t |= WC;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(aa), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, _t = t, (_t & (Yr | ki)) === mr && Do();
      }
    }
    function nR() {
      return (_t & (Yr | ki)) !== mr;
    }
    function Fm(e, t) {
      ua(LS, Bl, e), Bl = et(Bl, t);
    }
    function VS(e) {
      Bl = LS.current, la(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, uw(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return On = s, yr = Bl = t, gr = Mu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ya = null, Dx(), Xi.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = On;
        try {
          if (Gh(), _E(), Sn(), OS.current = null, a === null || a.return === null) {
            gr = Up, jp = t, On = null;
            return;
          }
          if (Qe && a.mode & Rt && Tm(a, !0), Ye)
            if (El(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, yr);
            } else
              Ei(a, t, yr);
          ab(e, a.return, a, t, yr), uR(a);
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
    function U1() {
      MS = bn();
    }
    function Ip(e) {
      Nm = et(e, Nm);
    }
    function A1() {
      gr === Mu && (gr = Om);
    }
    function BS() {
      (gr === Mu || gr === Om || gr === ec) && (gr = Ap), Ta !== null && (xl(Nm) || xl(Fp)) && Po(Ta, yr);
    }
    function j1(e) {
      gr !== Ap && (gr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function F1() {
      return gr === Mu;
    }
    function Hm(e, t) {
      var a = _t;
      _t |= Yr;
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
          H1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Gh(), _t = a, iR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return mn(), Ta = null, yr = P, gr;
    }
    function H1() {
      for (; On !== null; )
        lR(On);
    }
    function P1(e, t) {
      var a = _t;
      _t |= Yr;
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
          V1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Gh(), iR(i), _t = a, On !== null ? (xd(), Mu) : (mn(), Ta = null, yr = P, gr);
    }
    function V1() {
      for (; On !== null && !md(); )
        lR(On);
    }
    function lR(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & Rt) !== De ? ($g(e), a = YS(t, e, Bl), Tm(e, !0)) : a = YS(t, e, Bl), Sn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : On = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === ke) {
          Gt(t);
          var u = void 0;
          if ((t.mode & Rt) === De ? u = OC(a, t, Bl) : ($g(t), u = OC(a, t, Bl), Tm(t, !1)), Sn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Ab(a, t);
          if (s !== null) {
            s.flags &= Nv, On = s;
            return;
          }
          if ((t.mode & Rt) !== De) {
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
        Br.transition = null, In(aa), B1(e, t, a, i);
      } finally {
        Br.transition = u, In(i);
      }
      return null;
    }
    function B1(e, t, a, i) {
      do
        Au();
      while (Fo !== null);
      if (J1(), (_t & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Si(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = et(u.lanes, u.childLanes);
      Wv(e, f), e === Ta && (Ta = null, On = null, yr = P), ((u.subtreeFlags & ur) !== ke || (u.flags & ur) !== ke) && (tc || (tc = !0, AS = a, QS(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (yl | ao | gl | ur)) !== ke, v = (u.flags & (yl | ao | gl | ur)) !== ke;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(aa);
        var b = _t;
        _t |= ki, OS.current = null, Vb(e, u), ZE(), t1(e, u, s), ew(e.containerInfo), e.current = u, hs(s), n1(u, e, s), cu(), Mv(), _t = b, In(g), Br.transition = y;
      } else
        e.current = u, ZE();
      var w = tc;
      if (tc ? (tc = !1, Fo = e, Vp = s) : ($f = 0, Um = null), f = e.pendingLanes, f === P && (If = null), w || fR(e.current, !1), Sd(u.stateNode, i), br && e.memoizedUpdaters.clear(), C1(), Ia(e, bn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], le = F.stack, Me = F.digest;
          z(F.value, {
            componentStack: le,
            digest: Me
          });
        }
      if (Mm) {
        Mm = !1;
        var be = zS;
        throw zS = null, be;
      }
      return ra(Vp, He) && e.tag !== ko && Au(), f = e.pendingLanes, ra(f, He) ? (Wx(), e === jS ? Bp++ : (Bp = 0, jS = e)) : Bp = 0, Do(), Si(), null;
    }
    function Au() {
      if (Fo !== null) {
        var e = qv(Vp), t = _r(sr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, In(t), I1();
        } finally {
          In(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Y1(e) {
      US.push(e), tc || (tc = !0, QS(ou, function() {
        return Au(), null;
      }));
    }
    function I1() {
      if (Fo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Fo, a = Vp;
      if (Fo = null, Vp = P, (_t & (Yr | ki)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Td(a);
      var i = _t;
      _t |= ki, s1(t.current), i1(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $b(t, f);
        }
      }
      oo(), fR(t.current, !0), _t = i, Do(), zm ? t === Um ? $f++ : ($f = 0, Um = t) : $f = 0, FS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return If !== null && If.has(e);
    }
    function $1(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function Q1(e) {
      Mm || (Mm = !0, zS = e);
    }
    var W1 = Q1;
    function sR(e, t, a) {
      var i = Zs(a, t), u = lC(e, i, He), s = No(e, u, He), f = wa();
      s !== null && (vo(s, He, f), Ia(s, f));
    }
    function dn(e, t, a) {
      if (Fb(a), Qp(!1), e.tag === J) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          sR(i, e, a);
          return;
        } else if (i.tag === fe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = sS(i, f, He), v = No(i, p, He), y = wa();
            v !== null && (vo(v, He, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function G1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Zc(e, a), r_(e), Ta === e && hu(yr, a) && (gr === Ap || gr === Om && Gc(yr) && bn() - MS < KC ? nc(e, P) : Lm = et(Lm, a)), Ia(e, u);
    }
    function cR(e, t) {
      t === Fn && (t = k1(e));
      var a = wa(), i = Va(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function K1(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function q1(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case W:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Qt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function X1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : w1(e / 1960) * 1960;
    }
    function Z1() {
      if (Bp > b1)
        throw Bp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > _1 && ($f = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J1() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Gt(e), Pm(e, Mr, g1), t && Pm(e, ml, S1), Pm(e, Mr, m1), t && Pm(e, ml, y1), Sn();
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
        if ((_t & Yr) !== mr || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== Ue && t !== J && t !== fe && t !== _e && t !== Ae && t !== me && t !== xe)
          return;
        var a = Ie(e) || "ReactComponent";
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
    var YS;
    {
      var e_ = null;
      YS = function(e, t, a) {
        var i = ER(e_, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (dx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), _E(), NC(e, t), ER(t, i), t.mode & Rt && $g(t), Ma(null, xC, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function t_(e) {
      if (Kr && !Ix())
        switch (e.tag) {
          case _e:
          case Ae:
          case xe: {
            var t = On && Ie(On) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case fe: {
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
    function QS(e, t) {
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
    function n_(e) {
      {
        if (e.mode & dt) {
          if (!QC())
            return;
        } else if (!T1() || _t !== mr || e.tag !== _e && e.tag !== Ae && e.tag !== xe)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? Gt(e) : Sn();
          }
        }
      }
    }
    function r_(e) {
      e.tag !== ko && QC() && il.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      ZC = e;
    }
    var Di = null, Qf = null, a_ = function(e) {
      Di = e;
    };
    function Wf(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Wf(e);
    }
    function GS(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
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
          case fe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case _e: {
            (typeof i == "function" || s === We) && (u = !0);
            break;
          }
          case Ae: {
            (s === I || s === We) && (u = !0);
            break;
          }
          case me:
          case xe: {
            (s === ft || s === We) && (u = !0);
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
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var i_ = function(e, t) {
      {
        if (Di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          KS(e.current, i, a);
        });
      }
    }, l_ = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Au(), Uu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function KS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case _e:
          case xe:
          case fe:
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
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === fe ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, He);
          w !== null && Sr(w, e, He, $t);
        }
        u !== null && !g && KS(u, t, a), s !== null && KS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case _e:
          case xe:
          case fe:
            p = f;
            break;
          case Ae:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? o_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function o_(e, t) {
      {
        var a = s_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case Fe:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function s_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
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
    function c_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new c_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function f_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function d_(e) {
      if (typeof e == "function")
        return ZS(e) ? fe : _e;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Ae;
        if (t === ft)
          return me;
      }
      return Ue;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ue:
        case _e:
        case xe:
          a.type = Wf(e.type);
          break;
        case fe:
          a.type = WS(e.type);
          break;
        case Ae:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function p_(e, t) {
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
    function v_(e, t, a) {
      var i;
      return e === Fh ? (i = dt, t === !0 && (i |= Ze, i |= Xt)) : i = De, br && (i |= Rt), li(J, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Ue, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = fe, p = WS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case Qr:
            return Vo(a.children, u, s, t);
          case si:
            f = Tn, u |= Ze, (u & dt) !== De && (u |= Xt);
            break;
          case ci:
            return h_(a, u, s, t);
          case ae:
            return m_(a, u, s, t);
          case ue:
            return y_(a, u, s, t);
          case wn:
            return SR(a, u, s, t);
          case ln:
          case pt:
          case cn:
          case Rr:
          case at:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = rt;
                  break e;
                case R:
                  f = en;
                  break e;
                case I:
                  f = Ae, p = GS(p);
                  break e;
                case ft:
                  f = me;
                  break e;
                case We:
                  f = Vt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ie(i) : null;
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
      var u = li(lt, e, i, t);
      return u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(Dt, e, i, t | Rt);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function m_(e, t, a, i) {
      var u = li(W, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      var u = li(Qt, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
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
      var i = li(we, e, null, t);
      return i.lanes = a, i;
    }
    function g_() {
      var e = li(ie, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function S_(e) {
      var t = li(pn, null, null, De);
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
      return e === null && (e = li(Ue, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function E_(e, t, a, i, u) {
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
      var g = new E_(e, t, a, p, v), b = v_(t, s);
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
    function C_(e, t, a) {
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
      var t = ro(e), a = rx(t);
      if (t.tag === fe) {
        var i = t.type;
        if (Ul(i))
          return K0(t, i, a);
      }
      return a;
    }
    function R_(e, t) {
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
          var s = Ie(a) || "Component";
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
      return F.callback = t ?? null, No(w, F, A), D1(b, A, z), b;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Ho(u);
      kc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Zn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(Zn) || "Unknown"));
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
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function T_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Iv(t);
            M1(t, a);
          }
          break;
        }
        case W: {
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
    function w_(e) {
      if (e.tag === W) {
        var t = po, a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function x_(e) {
      if (e.tag === W) {
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
    function b_(e) {
      return _R(e);
    }
    var kR = function(e) {
      return !1;
    };
    function __(e) {
      return kR(e);
    }
    var DR = null, OR = null, NR = null, LR = null, MR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = Je(e) ? e.slice() : Xe({}, e);
        return a + 1 === t.length ? (Je(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = Je(e) ? e.slice() : Xe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Je(s) ? s.splice(u, 1) : delete s[u];
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
          St("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              St("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Je(e) ? e.slice() : Xe({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return BR(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
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
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
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
    function k_(e) {
      var t = Jr(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function O_() {
      return Zn;
    }
    function N_(e) {
      var t = e.findFiberByHostInstance, a = ct.ReactCurrentDispatcher;
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
        findHostInstanceByFiber: k_,
        findFiberByHostInstance: t || D_,
        // React Refresh
        findHostInstancesForRefresh: u_,
        scheduleRefresh: i_,
        scheduleRoot: l_,
        setRefreshHandler: a_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: O_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var IR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = bR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Ym.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), I0(t);
      }
    };
    function L_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? St("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Jd(p), new o0(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && th(e);
    }
    Ym.prototype.unstable_scheduleHydration = M_;
    function z_(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Nh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Fx(y, b);
        }
      return new Ym(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Bi || e.nodeType === qo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Bi || e.nodeType === qo || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = ct.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Bi ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function A_(e, t, a, i, u) {
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
          WR
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
          WR
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return Jd(b), Uu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function j_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      QR(a), j_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = A_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Bm(f);
    }
    var GR = !1;
    function F_(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = U_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : R_(e, "findDOMNode");
    }
    function H_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function P_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function V_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var KR = !1;
    function B_(e) {
      if (KR || (KR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
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
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && bo(u)), f = e.nodeType === qr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(T_), jd(w_), cy(x_), nf(ga), Xv(Kv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is(IT), Dv(PS, z1, Uu);
    function Y_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return C_(e, t, null, a);
    }
    function I_(e, t, a, i) {
      return V_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bo, wf, Lh, ud, Ju, PS]
    };
    function $_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function Q_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t, a);
    }
    function W_(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var G_ = N_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!G_ && Gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Qa.createPortal = Y_, Qa.createRoot = $_, Qa.findDOMNode = F_, Qa.flushSync = W_, Qa.hydrate = H_, Qa.hydrateRoot = Q_, Qa.render = P_, Qa.unmountComponentAtNode = B_, Qa.unstable_batchedUpdates = PS, Qa.unstable_renderSubtreeIntoContainer = I_, Qa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var oT = {};
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (oT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (q) {
      console.error(q);
    }
  }
}
oT.NODE_ENV === "production" ? (sT(), h0.exports = uk()) : h0.exports = ok();
var sk = h0.exports, ck = {}, Zp = sk;
if (ck.NODE_ENV === "production")
  ev.createRoot = Zp.createRoot, ev.hydrateRoot = Zp.hydrateRoot;
else {
  var Wm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ev.createRoot = function(q, oe) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Zp.createRoot(q, oe);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  }, ev.hydrateRoot = function(q, oe, D) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Zp.hydrateRoot(q, oe, D);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  };
}
const fk = [
  { id: "thuisbatterij", label: "Thuisbatterij", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-thuisbatterij.svg" },
  { id: "zonnepanelen", label: "Zonnepanelen", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-zonnepanelen.svg" },
  { id: "laadpaal", label: "Laadpaal", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-laadpaal.svg" },
  { id: "groepenkast", label: "Groepenkast", icon: "https://www.solarconcept.nl/images/algemeen/Icoon-groepenkast.svg" }
];
function dk() {
  const [q, oe] = Il.useState(1), [D, ct] = Il.useState({
    hasSolar: null,
    selectedProducts: [],
    postal: "",
    houseNumber: "",
    houseNumberAddition: "",
    // Optional addition
    email: "",
    phone: ""
  }), [Be, gt] = Il.useState({}), [St, S] = Il.useState(!1), [nt, _e] = Il.useState(!1), fe = q / 3 * 100, Ue = (W, me) => {
    let xe = me;
    W === "postal" && (xe = me.replace(/\s/g, "").toUpperCase()), ct((Vt) => ({ ...Vt, [W]: xe })), Be[W] && gt((Vt) => ({ ...Vt, [W]: null }));
  }, J = (W) => {
    ct((me) => {
      const xe = me.selectedProducts;
      return xe.includes(W) ? { ...me, selectedProducts: xe.filter((Vt) => Vt !== W) } : { ...me, selectedProducts: [...xe, W] };
    }), Be.selectedProducts && gt((me) => ({ ...me, selectedProducts: null }));
  }, Fe = () => D.selectedProducts.length === 0 ? (gt({ selectedProducts: "Selecteer ten minste één product." }), !1) : !0, ie = () => {
    const W = {};
    /^[0-9]{4}[A-Z]{2}$/.test(D.postal) || (W.postal = "Postcode moet 4 cijfers gevolgd door 2 letters zijn (bijv. 1234AB)."), D.houseNumber || (W.houseNumber = "Huisnummer is verplicht."), (!D.email.includes("@") || !D.email.includes(".")) && (W.email = "Ongeldig e-mailadres.");
    const xe = D.phone.replace(/[^0-9]/g, "");
    return /[^0-9+]/.test(D.phone) ? W.phone = "Telefoonnummer mag alleen cijfers en + bevatten." : xe.length < 10 ? W.phone = "Telefoonnummer moet minimaal 10 cijfers bevatten." : xe.length > 13 && (W.phone = "Telefoonnummer mag maximaal 13 cijfers bevatten."), gt(W), Object.keys(W).length === 0;
  }, we = () => {
    q === 2 && !Fe() || oe((W) => W + 1);
  }, lt = () => {
    oe((W) => W - 1);
  }, Tn = async () => {
    if (!ie()) return;
    S(!0);
    const W = {
      FlowID: "a6673227-7758-4ee0-ba07-20e41366b2bb",
      Email: D.email,
      Phonenumber: D.phone,
      EnergyUsage: {
        HasSolarPanels: D.hasSolar ? "Yes" : "No"
      },
      HouseDetails: {
        Zipcode: D.postal,
        Housenumber: D.houseNumber,
        HouseNumberAddition: D.houseNumberAddition,
        Country: "NL"
      },
      // Putting measures in Note1 as requested
      Note1: D.selectedProducts.join(", ")
    };
    console.log("Submitting Form:", W);
    try {
      const me = await fetch("https://pico-accp.homezero.nl/rest/pico/v1/assignments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "kK89meKETzU8SBVwKpt7qpBUiutEmUrh"
        },
        body: JSON.stringify(W)
      });
      if (!me.ok)
        throw (await me.json().catch(() => ({}))).error === "Could not find a building with this address" ? new Error("AddressNotFound") : new Error(`API Error: ${me.statusText}`);
      const xe = await me.json().catch(() => null);
      console.log("API Success:", xe), _e(!0);
    } catch (me) {
      console.error("Submission failed:", me), me.message === "AddressNotFound" ? alert("We konden geen gebouw vinden op dit adres. Controleer je invoer of doe een normale huisscan op onze website.") : alert("Er is iets misgegaan. Probeer het later opnieuw of doe een normale huisscan op onze website.");
    } finally {
      S(!1);
    }
  }, en = () => /* @__PURE__ */ Re.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ Re.jsx("h2", { className: "sc-title", children: "Heb je al zonnepanelen?" }),
    /* @__PURE__ */ Re.jsxs("div", { className: "sc-grid", children: [
      /* @__PURE__ */ Re.jsx(
        "div",
        {
          className: `sc-tile ${D.hasSolar === !0 ? "active" : ""}`,
          onClick: () => {
            Ue("hasSolar", !0), oe(2);
          },
          children: "Ja"
        }
      ),
      /* @__PURE__ */ Re.jsx(
        "div",
        {
          className: `sc-tile ${D.hasSolar === !1 ? "active" : ""}`,
          onClick: () => {
            Ue("hasSolar", !1), oe(2);
          },
          children: "Nee"
        }
      )
    ] })
  ] }), rt = () => {
    const W = fk.filter((me) => !(D.hasSolar === !0 && me.id === "zonnepanelen"));
    return /* @__PURE__ */ Re.jsxs("div", { className: "fade-in", children: [
      /* @__PURE__ */ Re.jsx("h2", { className: "sc-title", children: "In welke producten heb je interesse?" }),
      /* @__PURE__ */ Re.jsx("div", { className: "sc-grid", children: W.map((me) => /* @__PURE__ */ Re.jsxs(
        "div",
        {
          className: `sc-tile ${D.selectedProducts.includes(me.id) ? "active" : ""}`,
          onClick: () => J(me.id),
          children: [
            /* @__PURE__ */ Re.jsxs("div", { className: "sc-tile-content", children: [
              /* @__PURE__ */ Re.jsx("img", { src: me.icon, alt: me.label, className: "sc-tile-icon" }),
              /* @__PURE__ */ Re.jsx("span", { className: "sc-tile-label", children: me.label })
            ] }),
            D.selectedProducts.includes(me.id) && /* @__PURE__ */ Re.jsx("div", { className: "sc-check-badge", children: /* @__PURE__ */ Re.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Re.jsx("path", { d: "M10 3L4.5 8.5L2 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        },
        me.id
      )) }),
      Be.selectedProducts && /* @__PURE__ */ Re.jsx("div", { className: "sc-error-msg", style: { textAlign: "center", marginTop: "12px" }, children: Be.selectedProducts })
    ] });
  }, Ae = () => /* @__PURE__ */ Re.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ Re.jsx("h2", { className: "sc-title", children: "Waar mag je aanbod heen?" }),
    /* @__PURE__ */ Re.jsxs("div", { className: "sc-row", children: [
      /* @__PURE__ */ Re.jsx("div", { className: "sc-col", children: /* @__PURE__ */ Re.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ Re.jsx("label", { className: "sc-label", children: "Postcode" }),
        /* @__PURE__ */ Re.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Be.postal ? "error" : ""}`,
            value: D.postal,
            onChange: (W) => Ue("postal", W.target.value),
            placeholder: "1234 AB"
          }
        ),
        Be.postal && /* @__PURE__ */ Re.jsx("div", { className: "sc-error-msg", children: Be.postal })
      ] }) }),
      /* @__PURE__ */ Re.jsx("div", { className: "sc-col", children: /* @__PURE__ */ Re.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ Re.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
          /* @__PURE__ */ Re.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ Re.jsx("label", { className: "sc-label", children: "Huisnummer" }),
            /* @__PURE__ */ Re.jsx(
              "input",
              {
                type: "text",
                className: `sc-input ${Be.houseNumber ? "error" : ""}`,
                value: D.houseNumber,
                onChange: (W) => ct({ ...D, houseNumber: W.target.value }),
                placeholder: "10"
              }
            )
          ] }),
          /* @__PURE__ */ Re.jsxs("div", { style: { width: "140px" }, children: [
            /* @__PURE__ */ Re.jsx("label", { className: "sc-label", children: "Toevoeging" }),
            /* @__PURE__ */ Re.jsx(
              "input",
              {
                type: "text",
                className: "sc-input",
                value: D.houseNumberAddition,
                onChange: (W) => ct({ ...D, houseNumberAddition: W.target.value }),
                placeholder: "Optioneel"
              }
            )
          ] })
        ] }),
        Be.houseNumber && /* @__PURE__ */ Re.jsx("span", { className: "sc-error-text", children: Be.houseNumber })
      ] }) })
    ] }),
    /* @__PURE__ */ Re.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ Re.jsx("label", { className: "sc-label", children: "E-mailadres" }),
      /* @__PURE__ */ Re.jsx(
        "input",
        {
          type: "email",
          className: `sc-input ${Be.email ? "error" : ""}`,
          value: D.email,
          onChange: (W) => Ue("email", W.target.value),
          placeholder: "naam@voorbeeld.nl"
        }
      ),
      Be.email && /* @__PURE__ */ Re.jsx("div", { className: "sc-error-msg", children: Be.email })
    ] }),
    /* @__PURE__ */ Re.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ Re.jsx("label", { className: "sc-label", children: "Telefoonnummer" }),
      /* @__PURE__ */ Re.jsx(
        "input",
        {
          type: "tel",
          className: `sc-input ${Be.phone ? "error" : ""}`,
          value: D.phone,
          onChange: (W) => Ue("phone", W.target.value),
          placeholder: "06 12345678"
        }
      ),
      Be.phone && /* @__PURE__ */ Re.jsx("div", { className: "sc-error-msg", children: Be.phone })
    ] })
  ] }), Dt = () => /* @__PURE__ */ Re.jsxs("div", { className: "sc-success-screen fade-in", children: [
    /* @__PURE__ */ Re.jsx("div", { className: "sc-success-checkmark", children: /* @__PURE__ */ Re.jsxs("svg", { viewBox: "0 0 52 52", className: "sc-checkmark-svg", children: [
      /* @__PURE__ */ Re.jsx("circle", { className: "sc-checkmark-circle", cx: "26", cy: "26", r: "25", fill: "none" }),
      /* @__PURE__ */ Re.jsx("path", { className: "sc-checkmark-check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" })
    ] }) }),
    /* @__PURE__ */ Re.jsx("h2", { className: "sc-success-title", children: "Bedankt!" }),
    /* @__PURE__ */ Re.jsx("p", { className: "sc-success-message", children: "Je aanvraag is verstuurd. Binnen een paar minuten ontvang je een gratis en vrijblijvend aanbod in je mail!" })
  ] });
  return /* @__PURE__ */ Re.jsx("div", { className: "sc-widget-container", children: /* @__PURE__ */ Re.jsxs("div", { className: "sc-card", children: [
    /* @__PURE__ */ Re.jsx("div", { className: "sc-progress-bar", children: /* @__PURE__ */ Re.jsx("div", { className: "sc-progress-fill", style: { width: `${fe}%` } }) }),
    /* @__PURE__ */ Re.jsx("div", { className: "sc-content", children: nt ? Dt() : /* @__PURE__ */ Re.jsxs(Re.Fragment, { children: [
      q === 1 && en(),
      q === 2 && rt(),
      q === 3 && Ae()
    ] }) }),
    q > 1 && !nt && /* @__PURE__ */ Re.jsxs("div", { className: "sc-footer space-between", children: [
      /* @__PURE__ */ Re.jsx("button", { className: "sc-btn sc-btn-back", onClick: lt, children: "Terug" }),
      q === 2 ? /* @__PURE__ */ Re.jsx("button", { className: "sc-btn", onClick: we, children: "Volgende stap" }) : /* @__PURE__ */ Re.jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end" }, children: /* @__PURE__ */ Re.jsx("button", { className: "sc-btn", onClick: Tn, disabled: St, children: St ? "Even geduld..." : "Ontvang mijn gratis aanbod" }) })
    ] }),
    q === 3 && !nt && /* @__PURE__ */ Re.jsx("div", { style: { padding: "0 24px 24px 24px" }, children: /* @__PURE__ */ Re.jsx("p", { className: "sc-disclaimer", children: "Binnen een paar minuten gratis en vrijblijvend in je mail! Het kan zijn dat we je bellen voor meer informatie. Zo kunnen we je het beste advies geven." }) })
  ] }) });
}
const cT = "pico-widget-container", lT = document.getElementById(cT);
lT ? ev.createRoot(lT).render(
  /* @__PURE__ */ Re.jsx(tk.StrictMode, { children: /* @__PURE__ */ Re.jsx(dk, {}) })
) : console.warn(`Pico Widget: Container element #${cT} not found. Widget will not render.`);
