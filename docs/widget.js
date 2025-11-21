(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--sc-primary: #ffdb00;--sc-primary-hover: #e6c600;--sc-footer-bg: #fff9c4;--sc-text: #1a1a1a;--sc-border: #e5e7eb;--sc-border-active: #ffdb00;--sc-radius: 8px;--sc-transition: all .3s ease}.sc-widget-container{font-family:inherit;color:var(--sc-text);width:100%;box-sizing:border-box}.sc-widget-container *{box-sizing:border-box}.sc-card{background:#fff;border-radius:var(--sc-radius);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;overflow:hidden;display:flex;flex-direction:column}.sc-progress-bar{height:4px;background:#f3f4f6;width:100%}.sc-progress-fill{height:100%;background:var(--sc-primary);transition:width .5s ease}.sc-content{padding:24px;flex:1;min-height:480px;display:flex;flex-direction:column}.sc-title{font-size:1.25rem;font-weight:600;margin-bottom:24px;text-align:center;line-height:1.4}.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.sc-tile{background:#fff;border:2px solid var(--sc-border);border-radius:var(--sc-radius);padding:16px;cursor:pointer;text-align:center;font-weight:500;transition:var(--sc-transition);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:140px;position:relative}.sc-tile:hover{border-color:var(--sc-primary)}.sc-tile.active{border-color:var(--sc-primary);background-color:#fffdf0;box-shadow:0 0 0 1px var(--sc-primary)}.sc-tile-content{display:flex;flex-direction:column;align-items:center;gap:12px}.sc-tile-icon{width:48px;height:48px;object-fit:contain}.sc-tile-label{font-weight:600;font-size:.95rem}.sc-check-badge{position:absolute;top:8px;right:8px;width:20px;height:20px;background-color:var(--sc-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;animation:popIn .2s cubic-bezier(.175,.885,.32,1.275)}@keyframes popIn{0%{transform:scale(0)}to{transform:scale(1)}}.sc-form-group{margin-bottom:16px}.sc-label{display:block;font-size:.875rem;font-weight:500;margin-bottom:6px}.sc-input{width:100%;padding:12px;border:1px solid var(--sc-border);border-radius:var(--sc-radius);font-size:1rem;transition:var(--sc-transition)}.sc-input:focus{outline:none;border-color:var(--sc-primary);box-shadow:0 0 0 3px #ffdb0033}.sc-input.error{border-color:#ef4444}.sc-error-msg{color:#ef4444;font-size:.75rem;margin-top:4px}.sc-row{display:flex;gap:16px}.sc-col{flex:1}.sc-footer{background-color:var(--sc-footer-bg);padding:16px 24px;display:flex;justify-content:flex-end;align-items:center;border-top:1px solid rgba(0,0,0,.05)}.sc-footer.space-between{justify-content:space-between}.sc-btn{background-color:var(--sc-primary);color:var(--sc-text);border:none;padding:12px 24px;border-radius:var(--sc-radius);font-weight:600;cursor:pointer;transition:var(--sc-transition);font-size:1rem}.sc-btn:hover:not(:disabled){background-color:var(--sc-primary-hover)}.sc-btn:disabled{opacity:.5;cursor:not-allowed;background-color:#e5e7eb;color:#9ca3af}.sc-btn-back{background:transparent;color:#6b7280;padding:12px 16px}.sc-btn-back:hover{background:#0000000d;color:var(--sc-text)}.sc-disclaimer{font-size:.75rem;color:#6b7280;text-align:center;margin-top:12px;line-height:1.4}.fade-in{animation:fadeIn .4s ease-out}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 600px){.sc-grid{grid-template-columns:1fr}.sc-content{padding:16px;min-height:auto}.sc-footer{padding:16px;flex-direction:column-reverse;gap:12px}.sc-footer.space-between{flex-direction:row}.sc-tile{min-height:100px;flex-direction:row;justify-content:flex-start;padding:12px;gap:16px}.sc-tile-content{flex-direction:row;gap:16px}.sc-tile-icon{width:32px;height:32px}.sc-check-badge{top:50%;transform:translateY(-50%);right:16px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function K_(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var p0 = { exports: {} }, Xp = {}, v0 = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function Z_() {
  if (KR) return wt;
  KR = 1;
  var q = Symbol.for("react.element"), oe = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), St = Symbol.for("react.provider"), Et = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), Re = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Pe = Symbol.iterator;
  function Z(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Pe && _[Pe] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, xe = {};
  function it(_, B, De) {
    this.props = _, this.context = B, this.refs = xe, this.updater = De || Ue;
  }
  it.prototype.isReactComponent = {}, it.prototype.setState = function(_, B) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, B, "setState");
  }, it.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Rn() {
  }
  Rn.prototype = it.prototype;
  function Jt(_, B, De) {
    this.props = _, this.context = B, this.refs = xe, this.updater = De || Ue;
  }
  var te = Jt.prototype = new Rn();
  te.constructor = Jt, ie(te, it.prototype), te.isPureReactComponent = !0;
  var ye = Array.isArray, tt = Object.prototype.hasOwnProperty, Te = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(_, B, De) {
    var Ye, Qe = {}, ut = null, xt = null;
    if (B != null) for (Ye in B.ref !== void 0 && (xt = B.ref), B.key !== void 0 && (ut = "" + B.key), B) tt.call(B, Ye) && !dt.hasOwnProperty(Ye) && (Qe[Ye] = B[Ye]);
    var qe = arguments.length - 2;
    if (qe === 1) Qe.children = De;
    else if (1 < qe) {
      for (var Rt = Array(qe), Vt = 0; Vt < qe; Vt++) Rt[Vt] = arguments[Vt + 2];
      Qe.children = Rt;
    }
    if (_ && _.defaultProps) for (Ye in qe = _.defaultProps, qe) Qe[Ye] === void 0 && (Qe[Ye] = qe[Ye]);
    return { $$typeof: q, type: _, key: ut, ref: xt, props: Qe, _owner: Te.current };
  }
  function Tn(_, B) {
    return { $$typeof: q, type: _.type, key: B, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Mt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === q;
  }
  function dn(_) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(De) {
      return B[De];
    });
  }
  var $t = /\/+/g;
  function Ct(_, B) {
    return typeof _ == "object" && _ !== null && _.key != null ? dn("" + _.key) : B.toString(36);
  }
  function ze(_, B, De, Ye, Qe) {
    var ut = typeof _;
    (ut === "undefined" || ut === "boolean") && (_ = null);
    var xt = !1;
    if (_ === null) xt = !0;
    else switch (ut) {
      case "string":
      case "number":
        xt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case q:
          case oe:
            xt = !0;
        }
    }
    if (xt) return xt = _, Qe = Qe(xt), _ = Ye === "" ? "." + Ct(xt, 0) : Ye, ye(Qe) ? (De = "", _ != null && (De = _.replace($t, "$&/") + "/"), ze(Qe, B, De, "", function(Vt) {
      return Vt;
    })) : Qe != null && (Mt(Qe) && (Qe = Tn(Qe, De + (!Qe.key || xt && xt.key === Qe.key ? "" : ("" + Qe.key).replace($t, "$&/") + "/") + _)), B.push(Qe)), 1;
    if (xt = 0, Ye = Ye === "" ? "." : Ye + ":", ye(_)) for (var qe = 0; qe < _.length; qe++) {
      ut = _[qe];
      var Rt = Ye + Ct(ut, qe);
      xt += ze(ut, B, De, Rt, Qe);
    }
    else if (Rt = Z(_), typeof Rt == "function") for (_ = Rt.call(_), qe = 0; !(ut = _.next()).done; ) ut = ut.value, Rt = Ye + Ct(ut, qe++), xt += ze(ut, B, De, Rt, Qe);
    else if (ut === "object") throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return xt;
  }
  function jt(_, B, De) {
    if (_ == null) return _;
    var Ye = [], Qe = 0;
    return ze(_, Ye, "", "", function(ut) {
      return B.call(De, ut, Qe++);
    }), Ye;
  }
  function yt(_) {
    if (_._status === -1) {
      var B = _._result;
      B = B(), B.then(function(De) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = De);
      }, function(De) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = De);
      }), _._status === -1 && (_._status = 0, _._result = B);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var lt = { current: null }, Y = { transition: null }, Se = { ReactCurrentDispatcher: lt, ReactCurrentBatchConfig: Y, ReactCurrentOwner: Te };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: jt, forEach: function(_, B, De) {
    jt(_, function() {
      B.apply(this, arguments);
    }, De);
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
  } }, wt.Component = it, wt.Fragment = L, wt.Profiler = Ve, wt.PureComponent = Jt, wt.StrictMode = mt, wt.Suspense = st, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, wt.act = re, wt.cloneElement = function(_, B, De) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ye = ie({}, _.props), Qe = _.key, ut = _.ref, xt = _._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ut = B.ref, xt = Te.current), B.key !== void 0 && (Qe = "" + B.key), _.type && _.type.defaultProps) var qe = _.type.defaultProps;
      for (Rt in B) tt.call(B, Rt) && !dt.hasOwnProperty(Rt) && (Ye[Rt] = B[Rt] === void 0 && qe !== void 0 ? qe[Rt] : B[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) Ye.children = De;
    else if (1 < Rt) {
      qe = Array(Rt);
      for (var Vt = 0; Vt < Rt; Vt++) qe[Vt] = arguments[Vt + 2];
      Ye.children = qe;
    }
    return { $$typeof: q, type: _.type, key: Qe, ref: ut, props: Ye, _owner: xt };
  }, wt.createContext = function(_) {
    return _ = { $$typeof: Et, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: St, _context: _ }, _.Consumer = _;
  }, wt.createElement = Be, wt.createFactory = function(_) {
    var B = Be.bind(null, _);
    return B.type = _, B;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(_) {
    return { $$typeof: S, render: _ };
  }, wt.isValidElement = Mt, wt.lazy = function(_) {
    return { $$typeof: fe, _payload: { _status: -1, _result: _ }, _init: yt };
  }, wt.memo = function(_, B) {
    return { $$typeof: Re, type: _, compare: B === void 0 ? null : B };
  }, wt.startTransition = function(_) {
    var B = Y.transition;
    Y.transition = {};
    try {
      _();
    } finally {
      Y.transition = B;
    }
  }, wt.unstable_act = re, wt.useCallback = function(_, B) {
    return lt.current.useCallback(_, B);
  }, wt.useContext = function(_) {
    return lt.current.useContext(_);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(_) {
    return lt.current.useDeferredValue(_);
  }, wt.useEffect = function(_, B) {
    return lt.current.useEffect(_, B);
  }, wt.useId = function() {
    return lt.current.useId();
  }, wt.useImperativeHandle = function(_, B, De) {
    return lt.current.useImperativeHandle(_, B, De);
  }, wt.useInsertionEffect = function(_, B) {
    return lt.current.useInsertionEffect(_, B);
  }, wt.useLayoutEffect = function(_, B) {
    return lt.current.useLayoutEffect(_, B);
  }, wt.useMemo = function(_, B) {
    return lt.current.useMemo(_, B);
  }, wt.useReducer = function(_, B, De) {
    return lt.current.useReducer(_, B, De);
  }, wt.useRef = function(_) {
    return lt.current.useRef(_);
  }, wt.useState = function(_) {
    return lt.current.useState(_);
  }, wt.useSyncExternalStore = function(_, B, De) {
    return lt.current.useSyncExternalStore(_, B, De);
  }, wt.useTransition = function() {
    return lt.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Jp = { exports: {} };
Jp.exports;
var ZR;
function J_() {
  return ZR || (ZR = 1, function(q, oe) {
    var L = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    L.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var mt = "18.3.1", Ve = Symbol.for("react.element"), St = Symbol.for("react.portal"), Et = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), Re = Symbol.for("react.provider"), fe = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), Rn = Symbol.iterator, Jt = "@@iterator";
      function te(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Rn && h[Rn] || h[Jt];
        return typeof C == "function" ? C : null;
      }
      var ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, tt = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, Tn = null;
      function Mt(h) {
        Tn = h;
      }
      Be.setExtraStackFrame = function(h) {
        Tn = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        Tn && (h += Tn);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var dn = !1, $t = !1, Ct = !1, ze = !1, jt = !1, yt = {
        ReactCurrentDispatcher: ye,
        ReactCurrentBatchConfig: tt,
        ReactCurrentOwner: dt
      };
      yt.ReactDebugCurrentFrame = Be, yt.ReactCurrentActQueue = Te;
      function lt(h) {
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
          var j = yt.ReactDebugCurrentFrame, K = j.getStackAddendum();
          K !== "" && (C += "%s", M = M.concat([K]));
          var ge = M.map(function(de) {
            return String(de);
          });
          ge.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ge);
        }
      }
      var re = {};
      function _(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", K = j + "." + C;
          if (re[K])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), re[K] = !0;
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
      }, De = Object.assign, Ye = {};
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
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, xt = function(h, C) {
          Object.defineProperty(Qe.prototype, h, {
            get: function() {
              lt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var qe in ut)
          ut.hasOwnProperty(qe) && xt(qe, ut[qe]);
      }
      function Rt() {
      }
      Rt.prototype = Qe.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = M || B;
      }
      var Nn = Vt.prototype = new Rt();
      Nn.constructor = Vt, De(Nn, Qe.prototype), Nn.isPureReactComponent = !0;
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
        var K = C.displayName || C.name || "";
        return K !== "" ? M + "(" + K + ")" : M;
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
          case Et:
            return "Fragment";
          case St:
            return "Portal";
          case st:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case Ue:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case fe:
              var C = h;
              return Dr(C) + ".Consumer";
            case Re:
              var M = h;
              return Dr(M._context) + ".Provider";
            case Pe:
              return Wa(h, h.render, "ForwardRef");
            case ie:
              var j = h.displayName || null;
              return j !== null ? j : Bn(h.type) || "Memo";
            case xe: {
              var K = h, ge = K._payload, de = K._init;
              try {
                return Bn(de(ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qn = Object.prototype.hasOwnProperty, Xn = {
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
      function J(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = Bn(dt.current.type);
          zn[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), zn[C] = !0);
        }
      }
      var Ne = function(h, C, M, j, K, ge, de) {
        var je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ve,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: de,
          // Record the component responsible for creating this element.
          _owner: ge
        };
        return je._store = {}, Object.defineProperty(je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
      };
      function nt(h, C, M) {
        var j, K = {}, ge = null, de = null, je = null, at = null;
        if (C != null) {
          ir(C) && (de = C.ref, J(C)), $r(C) && (fa(C.key), ge = "" + C.key), je = C.__self === void 0 ? null : C.__self, at = C.__source === void 0 ? null : C.__source;
          for (j in C)
            qn.call(C, j) && !Xn.hasOwnProperty(j) && (K[j] = C[j]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          K.children = M;
        else if (Ft > 1) {
          for (var Gt = Array(Ft), qt = 0; qt < Ft; qt++)
            Gt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Gt), K.children = Gt;
        }
        if (h && h.defaultProps) {
          var Je = h.defaultProps;
          for (j in Je)
            K[j] === void 0 && (K[j] = Je[j]);
        }
        if (ge || de) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ge && Oi(K, en), de && da(K, en);
        }
        return Ne(h, ge, de, je, at, dt.current, K);
      }
      function zt(h, C) {
        var M = Ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function ln(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, K = De({}, h.props), ge = h.key, de = h.ref, je = h._self, at = h._source, Ft = h._owner;
        if (C != null) {
          ir(C) && (de = C.ref, Ft = dt.current), $r(C) && (fa(C.key), ge = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (j in C)
            qn.call(C, j) && !Xn.hasOwnProperty(j) && (C[j] === void 0 && Gt !== void 0 ? K[j] = Gt[j] : K[j] = C[j]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          K.children = M;
        else if (qt > 1) {
          for (var Je = Array(qt), en = 0; en < qt; en++)
            Je[en] = arguments[en + 2];
          K.children = Je;
        }
        return Ne(h.type, ge, de, je, at, Ft, K);
      }
      function un(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ve;
      }
      var on = ".", Kn = ":";
      function rn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(K) {
          return M[K];
        });
        return "$" + j;
      }
      var Qt = !1, Ut = /\/+/g;
      function pa(h) {
        return h.replace(Ut, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (fa(h.key), rn("" + h.key)) : C.toString(36);
      }
      function ka(h, C, M, j, K) {
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
                case Ve:
                case St:
                  de = !0;
              }
          }
        if (de) {
          var je = h, at = K(je), Ft = j === "" ? on + _a(je, 0) : j;
          if (Ln(at)) {
            var Gt = "";
            Ft != null && (Gt = pa(Ft) + "/"), ka(at, C, Gt, "", function(Kf) {
              return Kf;
            });
          } else at != null && (un(at) && (at.key && (!je || je.key !== at.key) && fa(at.key), at = zt(
            at,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (at.key && (!je || je.key !== at.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + at.key) + "/"
            ) : "") + Ft
          )), C.push(at));
          return 1;
        }
        var qt, Je, en = 0, xn = j === "" ? on : j + Kn;
        if (Ln(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            qt = h[Zl], Je = xn + _a(qt, Zl), en += ka(qt, C, M, Je, K);
        else {
          var Go = te(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (Qt || lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Jl = Go.call(Pi), qo, Xf = 0; !(qo = Jl.next()).done; )
              qt = qo.value, Je = xn + _a(qt, Xf++), en += ka(qt, C, M, Je, K);
          } else if (ge === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Ni(h, C, M) {
        if (h == null)
          return h;
        var j = [], K = 0;
        return ka(h, j, "", "", function(ge) {
          return C.call(M, ge, K++);
        }), j;
      }
      function Il(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function $l(h, C, M) {
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
        if (!un(h))
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
          $$typeof: Re,
          _context: C
        };
        var M = !1, j = !1, K = !1;
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
                K || (lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), K = !0);
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
          var K = h._result;
          return K === void 0 && Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
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
          var j, K;
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
                return K;
              },
              set: function(ge) {
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = ge, Object.defineProperty(M, "propTypes", {
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
          $$typeof: Pe,
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
        return !!(typeof h == "string" || typeof h == "function" || h === Et || h === st || jt || h === S || h === Z || h === Ue || ze || h === it || dn || $t || Ct || typeof h == "object" && h !== null && (h.$$typeof === xe || h.$$typeof === ie || h.$$typeof === Re || h.$$typeof === fe || h.$$typeof === Pe || // This needs to include all possible module reference object
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
            set: function(K) {
              j = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return M;
      }
      function ue() {
        var h = ye.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ct(h) {
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
      function rt(h) {
        var C = ue();
        return C.useRef(h);
      }
      function wn(h, C) {
        var M = ue();
        return M.useEffect(h, C);
      }
      function an(h, C) {
        var M = ue();
        return M.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var M = ue();
        return M.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var M = ue();
        return M.useCallback(h, C);
      }
      function qa(h, C) {
        var M = ue();
        return M.useMemo(h, C);
      }
      function At(h, C, M) {
        var j = ue();
        return j.useImperativeHandle(h, C, M);
      }
      function pn(h, C) {
        {
          var M = ue();
          return M.useDebugValue(h, C);
        }
      }
      function Ke() {
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
              log: De({}, h, {
                value: ll
              }),
              info: De({}, h, {
                value: Wr
              }),
              warn: De({}, h, {
                value: Bo
              }),
              error: De({}, h, {
                value: Or
              }),
              group: De({}, h, {
                value: Yo
              }),
              groupCollapsed: De({}, h, {
                value: lc
              }),
              groupEnd: De({}, h, {
                value: uc
              })
            });
          }
          Ui < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = yt.ReactCurrentDispatcher, ol;
      function Fu(h, C, M) {
        {
          if (ol === void 0)
            try {
              throw Error();
            } catch (K) {
              var j = K.stack.trim().match(/\n( *(at )?)/);
              ol = j && j[1] || "";
            }
          return `
` + ol + h;
        }
      }
      var ji = !1, Wl;
      {
        var Gl = typeof WeakMap == "function" ? WeakMap : Map;
        Wl = new Gl();
      }
      function sl(h, C) {
        if (!h || ji)
          return "";
        {
          var M = Wl.get(h);
          if (M !== void 0)
            return M;
        }
        var j;
        ji = !0;
        var K = Error.prepareStackTrace;
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
            for (var je = xn.stack.split(`
`), at = j.stack.split(`
`), Ft = je.length - 1, Gt = at.length - 1; Ft >= 1 && Gt >= 0 && je[Ft] !== at[Gt]; )
              Gt--;
            for (; Ft >= 1 && Gt >= 0; Ft--, Gt--)
              if (je[Ft] !== at[Gt]) {
                if (Ft !== 1 || Gt !== 1)
                  do
                    if (Ft--, Gt--, Gt < 0 || je[Ft] !== at[Gt]) {
                      var qt = `
` + je[Ft].replace(" at new ", " at ");
                      return h.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", h.displayName)), typeof h == "function" && Wl.set(h, qt), qt;
                    }
                  while (Ft >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          ji = !1, di.current = ge, Gr(), Error.prepareStackTrace = K;
        }
        var Je = h ? h.displayName || h.name : "", en = Je ? Fu(Je) : "";
        return typeof h == "function" && Wl.set(h, en), en;
      }
      function Io(h, C, M) {
        return sl(h, !1);
      }
      function $o(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function bt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return sl(h, $o(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case Z:
            return Fu("Suspense");
          case Ue:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Pe:
              return Io(h.render);
            case ie:
              return bt(h.type, C, M);
            case xe: {
              var j = h, K = j._payload, ge = j._init;
              try {
                return bt(ge(K), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, Hu = yt.ReactDebugCurrentFrame;
      function _t(h) {
        if (h) {
          var C = h._owner, M = bt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, M, j, K) {
        {
          var ge = Function.call.bind(qn);
          for (var de in h)
            if (ge(h, de)) {
              var je = void 0;
              try {
                if (typeof h[de] != "function") {
                  var at = Error((j || "React class") + ": " + M + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw at.name = "Invariant Violation", at;
                }
                je = h[de](C, de, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                je = Ft;
              }
              je && !(je instanceof Error) && (_t(K), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, de, typeof je), _t(null)), je instanceof Error && !(je.message in Qo) && (Qo[je.message] = !0, _t(K), Y("Failed %s type: %s", M, je.message), _t(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, M = bt(h.type, h._source, C ? C.type : null);
          Mt(M);
        } else
          Mt(null);
      }
      var Ie;
      Ie = !1;
      function ql() {
        if (dt.current) {
          var h = Bn(dt.current.type);
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
        var C = ql();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function gn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = vi(C);
          if (!Nr[M]) {
            Nr[M] = !0;
            var j = "";
            h && h._owner && h._owner !== dt.current && (j = " It was passed a child from " + Bn(h._owner.type) + "."), pi(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), pi(null);
          }
        }
      }
      function Wt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var M = 0; M < h.length; M++) {
              var j = h[M];
              un(j) && gn(j, C);
            }
          else if (un(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = te(h);
            if (typeof K == "function" && K !== h.entries)
              for (var ge = K.call(h), de; !(de = ge.next()).done; )
                un(de.value) && gn(de.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Pe || // Note: Memo only checks outer props here.
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
            var K = Bn(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
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
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = qr(C);
          ge ? K += ge : K += ql();
          var de;
          h === null ? de = "null" : Ln(h) ? de = "array" : h !== void 0 && h.$$typeof === Ve ? (de = "<" + (Bn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, K);
        }
        var je = nt.apply(this, arguments);
        if (je == null)
          return je;
        if (j)
          for (var at = 2; at < arguments.length; at++)
            Wt(arguments[at], h);
        return h === Et ? Da(je) : Xa(je), je;
      }
      var Lr = !1;
      function qf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var j = ln.apply(this, arguments), K = 2; K < arguments.length; K++)
          Wt(arguments[K], j.type);
        return Xa(j), j;
      }
      function Xl(h, C) {
        var M = tt.transition;
        tt.transition = {};
        var j = tt.transition;
        tt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (tt.transition = M, M === null && j._updatedFibers) {
            var K = j._updatedFibers.size;
            K > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Kl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = q && q[C];
            Bu = M.call(q, "timers").setImmediate;
          } catch {
            Bu = function(K) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ge = new MessageChannel();
              ge.port1.onmessage = K, ge.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, Na = !1;
      function cl(h) {
        {
          var C = Oa;
          Oa++, Te.current === null && (Te.current = []);
          var M = Te.isBatchingLegacy, j;
          try {
            if (Te.isBatchingLegacy = !0, j = h(), !M && Te.didScheduleLegacyUpdate) {
              var K = Te.current;
              K !== null && (Te.didScheduleLegacyUpdate = !1, Hi(K));
            }
          } catch (Je) {
            throw Fi(C), Je;
          } finally {
            Te.isBatchingLegacy = M;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var ge = j, de = !1, je = {
              then: function(Je, en) {
                de = !0, ge.then(function(xn) {
                  Fi(C), Oa === 0 ? Yu(xn, Je, en) : Je(xn);
                }, function(xn) {
                  Fi(C), en(xn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (Na = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), je;
          } else {
            var at = j;
            if (Fi(C), Oa === 0) {
              var Ft = Te.current;
              Ft !== null && (Hi(Ft), Te.current = null);
              var Gt = {
                then: function(Je, en) {
                  Te.current === null ? (Te.current = [], Yu(at, Je, en)) : Je(at);
                }
              };
              return Gt;
            } else {
              var qt = {
                then: function(Je, en) {
                  Je(at);
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
          var j = Te.current;
          if (j !== null)
            try {
              Hi(j), Kl(function() {
                j.length === 0 ? (Te.current = null, C(h)) : Yu(h, C, M);
              });
            } catch (K) {
              M(K);
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
      var Iu = Tr, Wo = Pu, La = qf, $u = {
        map: Ni,
        forEach: $l,
        count: Il,
        toArray: Li,
        only: Ql
      };
      oe.Children = $u, oe.Component = Qe, oe.Fragment = Et, oe.Profiler = st, oe.PureComponent = Vt, oe.StrictMode = S, oe.Suspense = Z, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yt, oe.act = cl, oe.cloneElement = Wo, oe.createContext = oi, oe.createElement = Iu, oe.createFactory = La, oe.createRef = Gn, oe.forwardRef = Mi, oe.isValidElement = un, oe.lazy = ci, oe.memo = ae, oe.startTransition = Xl, oe.unstable_act = cl, oe.useCallback = Rr, oe.useContext = ct, oe.useDebugValue = pn, oe.useDeferredValue = fi, oe.useEffect = wn, oe.useId = zi, oe.useImperativeHandle = At, oe.useInsertionEffect = an, oe.useLayoutEffect = sn, oe.useMemo = qa, oe.useReducer = pt, oe.useRef = rt, oe.useState = We, oe.useSyncExternalStore = ic, oe.useTransition = Ke, oe.version = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var ek = {};
ek.NODE_ENV === "production" ? v0.exports = Z_() : v0.exports = J_();
var ju = v0.exports;
const tk = /* @__PURE__ */ K_(ju);
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
  if (JR) return Xp;
  JR = 1;
  var q = ju, oe = Symbol.for("react.element"), L = Symbol.for("react.fragment"), mt = Object.prototype.hasOwnProperty, Ve = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, St = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Et(S, st, Re) {
    var fe, Pe = {}, Z = null, Ue = null;
    Re !== void 0 && (Z = "" + Re), st.key !== void 0 && (Z = "" + st.key), st.ref !== void 0 && (Ue = st.ref);
    for (fe in st) mt.call(st, fe) && !St.hasOwnProperty(fe) && (Pe[fe] = st[fe]);
    if (S && S.defaultProps) for (fe in st = S.defaultProps, st) Pe[fe] === void 0 && (Pe[fe] = st[fe]);
    return { $$typeof: oe, type: S, key: Z, ref: Ue, props: Pe, _owner: Ve.current };
  }
  return Xp.Fragment = L, Xp.jsx = Et, Xp.jsxs = Et, Xp;
}
var Kp = {}, eT;
function rk() {
  if (eT) return Kp;
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
    var oe = ju, L = Symbol.for("react.element"), mt = Symbol.for("react.portal"), Ve = Symbol.for("react.fragment"), St = Symbol.for("react.strict_mode"), Et = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), st = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), xe = Symbol.iterator, it = "@@iterator";
    function Rn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = xe && R[xe] || R[it];
      return typeof I == "function" ? I : null;
    }
    var Jt = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function te(R) {
      {
        for (var I = arguments.length, ae = new Array(I > 1 ? I - 1 : 0), ue = 1; ue < I; ue++)
          ae[ue - 1] = arguments[ue];
        ye("error", R, ae);
      }
    }
    function ye(R, I, ae) {
      {
        var ue = Jt.ReactDebugCurrentFrame, ct = ue.getStackAddendum();
        ct !== "" && (I += "%s", ae = ae.concat([ct]));
        var We = ae.map(function(pt) {
          return String(pt);
        });
        We.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, We);
      }
    }
    var tt = !1, Te = !1, dt = !1, Be = !1, Tn = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function dn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ve || R === Et || Tn || R === St || R === fe || R === Pe || Be || R === ie || tt || Te || dt || typeof R == "object" && R !== null && (R.$$typeof === Ue || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === st || R.$$typeof === Re || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Mt || R.getModuleId !== void 0));
    }
    function $t(R, I, ae) {
      var ue = R.displayName;
      if (ue)
        return ue;
      var ct = I.displayName || I.name || "";
      return ct !== "" ? ae + "(" + ct + ")" : ae;
    }
    function Ct(R) {
      return R.displayName || "Context";
    }
    function ze(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ve:
          return "Fragment";
        case mt:
          return "Portal";
        case Et:
          return "Profiler";
        case St:
          return "StrictMode";
        case fe:
          return "Suspense";
        case Pe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case st:
            var I = R;
            return Ct(I) + ".Consumer";
          case S:
            var ae = R;
            return Ct(ae._context) + ".Provider";
          case Re:
            return $t(R, R.render, "ForwardRef");
          case Z:
            var ue = R.displayName || null;
            return ue !== null ? ue : ze(R.type) || "Memo";
          case Ue: {
            var ct = R, We = ct._payload, pt = ct._init;
            try {
              return ze(pt(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, yt = 0, lt, Y, Se, re, _, B, De;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Qe() {
      {
        if (yt === 0) {
          lt = console.log, Y = console.info, Se = console.warn, re = console.error, _ = console.group, B = console.groupCollapsed, De = console.groupEnd;
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
        yt++;
      }
    }
    function ut() {
      {
        if (yt--, yt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: lt
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
              value: De
            })
          });
        }
        yt < 0 && te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = Jt.ReactCurrentDispatcher, qe;
    function Rt(R, I, ae) {
      {
        if (qe === void 0)
          try {
            throw Error();
          } catch (ct) {
            var ue = ct.stack.trim().match(/\n( *(at )?)/);
            qe = ue && ue[1] || "";
          }
        return `
` + qe + R;
      }
    }
    var Vt = !1, Nn;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      Nn = new Gn();
    }
    function ar(R, I) {
      if (!R || Vt)
        return "";
      {
        var ae = Nn.get(R);
        if (ae !== void 0)
          return ae;
      }
      var ue;
      Vt = !0;
      var ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = xt.current, xt.current = null, Qe();
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
            } catch (pn) {
              ue = pn;
            }
            Reflect.construct(R, [], pt);
          } else {
            try {
              pt.call();
            } catch (pn) {
              ue = pn;
            }
            R.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pn) {
            ue = pn;
          }
          R();
        }
      } catch (pn) {
        if (pn && ue && typeof pn.stack == "string") {
          for (var rt = pn.stack.split(`
`), wn = ue.stack.split(`
`), an = rt.length - 1, sn = wn.length - 1; an >= 1 && sn >= 0 && rt[an] !== wn[sn]; )
            sn--;
          for (; an >= 1 && sn >= 0; an--, sn--)
            if (rt[an] !== wn[sn]) {
              if (an !== 1 || sn !== 1)
                do
                  if (an--, sn--, sn < 0 || rt[an] !== wn[sn]) {
                    var Rr = `
` + rt[an].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && Nn.set(R, Rr), Rr;
                  }
                while (an >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, xt.current = We, ut(), Error.prepareStackTrace = ct;
      }
      var qa = R ? R.displayName || R.name : "", At = qa ? Rt(qa) : "";
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
        return Rt(R);
      switch (R) {
        case fe:
          return Rt("Suspense");
        case Pe:
          return Rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Re:
            return Ln(R.render);
          case Z:
            return Vn(R.type, I, ae);
          case Ue: {
            var ue = R, ct = ue._payload, We = ue._init;
            try {
              return Vn(We(ct), I, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Mn = Object.prototype.hasOwnProperty, fa = {}, Wa = Jt.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var I = R._owner, ae = Vn(R.type, R._source, I ? I.type : null);
        Wa.setExtraStackFrame(ae);
      } else
        Wa.setExtraStackFrame(null);
    }
    function Bn(R, I, ae, ue, ct) {
      {
        var We = Function.call.bind(Mn);
        for (var pt in R)
          if (We(R, pt)) {
            var rt = void 0;
            try {
              if (typeof R[pt] != "function") {
                var wn = Error((ue || "React class") + ": " + ae + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              rt = R[pt](I, pt, ue, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              rt = an;
            }
            rt && !(rt instanceof Error) && (Dr(ct), te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", ae, pt, typeof rt), Dr(null)), rt instanceof Error && !(rt.message in fa) && (fa[rt.message] = !0, Dr(ct), te("Failed %s type: %s", ae, rt.message), Dr(null));
          }
      }
    }
    var qn = Array.isArray;
    function Xn(R) {
      return qn(R);
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
        return te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), zn(R);
    }
    var $r = Jt.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, J;
    function Ne(R) {
      if (Mn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function nt(R) {
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
    function ln(R, I) {
      {
        var ae = function() {
          da || (da = !0, te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function un(R, I) {
      {
        var ae = function() {
          J || (J = !0, te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var on = function(R, I, ae, ue, ct, We, pt) {
      var rt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: L,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: ae,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return rt._store = {}, Object.defineProperty(rt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(rt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(rt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ct
      }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
    };
    function Kn(R, I, ae, ue, ct) {
      {
        var We, pt = {}, rt = null, wn = null;
        ae !== void 0 && (ir(ae), rt = "" + ae), nt(I) && (ir(I.key), rt = "" + I.key), Ne(I) && (wn = I.ref, zt(I, ct));
        for (We in I)
          Mn.call(I, We) && !Oi.hasOwnProperty(We) && (pt[We] = I[We]);
        if (R && R.defaultProps) {
          var an = R.defaultProps;
          for (We in an)
            pt[We] === void 0 && (pt[We] = an[We]);
        }
        if (rt || wn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          rt && ln(pt, sn), wn && un(pt, sn);
        }
        return on(R, rt, wn, ct, ue, $r.current, pt);
      }
    }
    var rn = Jt.ReactCurrentOwner, Qt = Jt.ReactDebugCurrentFrame;
    function Ut(R) {
      if (R) {
        var I = R._owner, ae = Vn(R.type, R._source, I ? I.type : null);
        Qt.setExtraStackFrame(ae);
      } else
        Qt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === L;
    }
    function ka() {
      {
        if (rn.current) {
          var R = ze(rn.current.type);
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
    var Il = {};
    function $l(R) {
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
        var ae = $l(I);
        if (Il[ae])
          return;
        Il[ae] = !0;
        var ue = "";
        R && R._owner && R._owner !== rn.current && (ue = " It was passed a child from " + ze(R._owner.type) + "."), Ut(R), te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ue), Ut(null);
      }
    }
    function Ql(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Xn(R))
          for (var ae = 0; ae < R.length; ae++) {
            var ue = R[ae];
            _a(ue) && Li(ue, I);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ct = Rn(R);
          if (typeof ct == "function" && ct !== R.entries)
            for (var We = ct.call(R), pt; !(pt = We.next()).done; )
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
        else if (typeof I == "object" && (I.$$typeof === Re || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === Z))
          ae = I.propTypes;
        else
          return;
        if (ae) {
          var ue = ze(I);
          Bn(ae, R.props, "prop", ue, R);
        } else if (I.PropTypes !== void 0 && !pa) {
          pa = !0;
          var ct = ze(I);
          te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ct || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(R) {
      {
        for (var I = Object.keys(R.props), ae = 0; ae < I.length; ae++) {
          var ue = I[ae];
          if (ue !== "children" && ue !== "key") {
            Ut(R), te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ut(null);
            break;
          }
        }
        R.ref !== null && (Ut(R), te("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    var lr = {};
    function ha(R, I, ae, ue, ct, We) {
      {
        var pt = dn(R);
        if (!pt) {
          var rt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (rt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Ni();
          wn ? rt += wn : rt += ka();
          var an;
          R === null ? an = "null" : Xn(R) ? an = "array" : R !== void 0 && R.$$typeof === L ? (an = "<" + (ze(R.type) || "Unknown") + " />", rt = " Did you accidentally export a JSX literal instead of a component?") : an = typeof R, te("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, rt);
        }
        var sn = Kn(R, I, ae, ct, We);
        if (sn == null)
          return sn;
        if (pt) {
          var Rr = I.children;
          if (Rr !== void 0)
            if (ue)
              if (Xn(Rr)) {
                for (var qa = 0; qa < Rr.length; qa++)
                  Ql(Rr[qa], R);
                Object.freeze && Object.freeze(Rr);
              } else
                te("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(Rr, R);
        }
        if (Mn.call(I, "key")) {
          var At = ze(R), pn = Object.keys(I).filter(function(zi) {
            return zi !== "key";
          }), Ke = pn.length > 0 ? "{key: someKey, " + pn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[At + Ke]) {
            var fi = pn.length > 0 ? "{" + pn.join(": ..., ") + ": ...}" : "{}";
            te(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, At, fi, At), lr[At + Ke] = !0;
          }
        }
        return R === Ve ? va(sn) : oi(sn), sn;
      }
    }
    function Qr(R, I, ae) {
      return ha(R, I, ae, !0);
    }
    function si(R, I, ae) {
      return ha(R, I, ae, !1);
    }
    var ci = si, Mi = Qr;
    Kp.Fragment = Ve, Kp.jsx = ci, Kp.jsxs = Mi;
  }(), Kp;
}
var ak = {};
ak.NODE_ENV === "production" ? p0.exports = nk() : p0.exports = rk();
var He = p0.exports, ev = {}, h0 = { exports: {} }, $a = {}, Qm = { exports: {} }, f0 = {};
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
        if (0 < Ve(B, Se)) Y[_] = Se, Y[re] = B, re = _;
        else break e;
      }
    }
    function L(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function mt(Y) {
      if (Y.length === 0) return null;
      var Se = Y[0], re = Y.pop();
      if (re !== Se) {
        Y[0] = re;
        e: for (var _ = 0, B = Y.length, De = B >>> 1; _ < De; ) {
          var Ye = 2 * (_ + 1) - 1, Qe = Y[Ye], ut = Ye + 1, xt = Y[ut];
          if (0 > Ve(Qe, re)) ut < B && 0 > Ve(xt, Qe) ? (Y[_] = xt, Y[ut] = re, _ = ut) : (Y[_] = Qe, Y[Ye] = re, _ = Ye);
          else if (ut < B && 0 > Ve(xt, re)) Y[_] = xt, Y[ut] = re, _ = ut;
          else break e;
        }
      }
      return Se;
    }
    function Ve(Y, Se) {
      var re = Y.sortIndex - Se.sortIndex;
      return re !== 0 ? re : Y.id - Se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var St = performance;
      q.unstable_now = function() {
        return St.now();
      };
    } else {
      var Et = Date, S = Et.now();
      q.unstable_now = function() {
        return Et.now() - S;
      };
    }
    var st = [], Re = [], fe = 1, Pe = null, Z = 3, Ue = !1, ie = !1, xe = !1, it = typeof setTimeout == "function" ? setTimeout : null, Rn = typeof clearTimeout == "function" ? clearTimeout : null, Jt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function te(Y) {
      for (var Se = L(Re); Se !== null; ) {
        if (Se.callback === null) mt(Re);
        else if (Se.startTime <= Y) mt(Re), Se.sortIndex = Se.expirationTime, oe(st, Se);
        else break;
        Se = L(Re);
      }
    }
    function ye(Y) {
      if (xe = !1, te(Y), !ie) if (L(st) !== null) ie = !0, yt(tt);
      else {
        var Se = L(Re);
        Se !== null && lt(ye, Se.startTime - Y);
      }
    }
    function tt(Y, Se) {
      ie = !1, xe && (xe = !1, Rn(Be), Be = -1), Ue = !0;
      var re = Z;
      try {
        for (te(Se), Pe = L(st); Pe !== null && (!(Pe.expirationTime > Se) || Y && !dn()); ) {
          var _ = Pe.callback;
          if (typeof _ == "function") {
            Pe.callback = null, Z = Pe.priorityLevel;
            var B = _(Pe.expirationTime <= Se);
            Se = q.unstable_now(), typeof B == "function" ? Pe.callback = B : Pe === L(st) && mt(st), te(Se);
          } else mt(st);
          Pe = L(st);
        }
        if (Pe !== null) var De = !0;
        else {
          var Ye = L(Re);
          Ye !== null && lt(ye, Ye.startTime - Se), De = !1;
        }
        return De;
      } finally {
        Pe = null, Z = re, Ue = !1;
      }
    }
    var Te = !1, dt = null, Be = -1, Tn = 5, Mt = -1;
    function dn() {
      return !(q.unstable_now() - Mt < Tn);
    }
    function $t() {
      if (dt !== null) {
        var Y = q.unstable_now();
        Mt = Y;
        var Se = !0;
        try {
          Se = dt(!0, Y);
        } finally {
          Se ? Ct() : (Te = !1, dt = null);
        }
      } else Te = !1;
    }
    var Ct;
    if (typeof Jt == "function") Ct = function() {
      Jt($t);
    };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), jt = ze.port2;
      ze.port1.onmessage = $t, Ct = function() {
        jt.postMessage(null);
      };
    } else Ct = function() {
      it($t, 0);
    };
    function yt(Y) {
      dt = Y, Te || (Te = !0, Ct());
    }
    function lt(Y, Se) {
      Be = it(function() {
        Y(q.unstable_now());
      }, Se);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, q.unstable_continueExecution = function() {
      ie || Ue || (ie = !0, yt(tt));
    }, q.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, q.unstable_getFirstCallbackNode = function() {
      return L(st);
    }, q.unstable_next = function(Y) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var Se = 3;
          break;
        default:
          Se = Z;
      }
      var re = Z;
      Z = Se;
      try {
        return Y();
      } finally {
        Z = re;
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
      var re = Z;
      Z = Y;
      try {
        return Se();
      } finally {
        Z = re;
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
      return B = re + B, Y = { id: fe++, callback: Se, priorityLevel: Y, startTime: re, expirationTime: B, sortIndex: -1 }, re > _ ? (Y.sortIndex = re, oe(Re, Y), L(st) === null && Y === L(Re) && (xe ? (Rn(Be), Be = -1) : xe = !0, lt(ye, re - _))) : (Y.sortIndex = B, oe(st, Y), ie || Ue || (ie = !0, yt(tt))), Y;
    }, q.unstable_shouldYield = dn, q.unstable_wrapCallback = function(Y) {
      var Se = Z;
      return function() {
        var re = Z;
        Z = Se;
        try {
          return Y.apply(this, arguments);
        } finally {
          Z = re;
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
      var L = !1, mt = 5;
      function Ve(J, Ne) {
        var nt = J.length;
        J.push(Ne), S(J, Ne, nt);
      }
      function St(J) {
        return J.length === 0 ? null : J[0];
      }
      function Et(J) {
        if (J.length === 0)
          return null;
        var Ne = J[0], nt = J.pop();
        return nt !== Ne && (J[0] = nt, st(J, nt, 0)), Ne;
      }
      function S(J, Ne, nt) {
        for (var zt = nt; zt > 0; ) {
          var ln = zt - 1 >>> 1, un = J[ln];
          if (Re(un, Ne) > 0)
            J[ln] = Ne, J[zt] = un, zt = ln;
          else
            return;
        }
      }
      function st(J, Ne, nt) {
        for (var zt = nt, ln = J.length, un = ln >>> 1; zt < un; ) {
          var on = (zt + 1) * 2 - 1, Kn = J[on], rn = on + 1, Qt = J[rn];
          if (Re(Kn, Ne) < 0)
            rn < ln && Re(Qt, Kn) < 0 ? (J[zt] = Qt, J[rn] = Ne, zt = rn) : (J[zt] = Kn, J[on] = Ne, zt = on);
          else if (rn < ln && Re(Qt, Ne) < 0)
            J[zt] = Qt, J[rn] = Ne, zt = rn;
          else
            return;
        }
      }
      function Re(J, Ne) {
        var nt = J.sortIndex - Ne.sortIndex;
        return nt !== 0 ? nt : J.id - Ne.id;
      }
      var fe = 1, Pe = 2, Z = 3, Ue = 4, ie = 5;
      function xe(J, Ne) {
      }
      var it = typeof performance == "object" && typeof performance.now == "function";
      if (it) {
        var Rn = performance;
        q.unstable_now = function() {
          return Rn.now();
        };
      } else {
        var Jt = Date, te = Jt.now();
        q.unstable_now = function() {
          return Jt.now() - te;
        };
      }
      var ye = 1073741823, tt = -1, Te = 250, dt = 5e3, Be = 1e4, Tn = ye, Mt = [], dn = [], $t = 1, Ct = null, ze = Z, jt = !1, yt = !1, lt = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(J) {
        for (var Ne = St(dn); Ne !== null; ) {
          if (Ne.callback === null)
            Et(dn);
          else if (Ne.startTime <= J)
            Et(dn), Ne.sortIndex = Ne.expirationTime, Ve(Mt, Ne);
          else
            return;
          Ne = St(dn);
        }
      }
      function B(J) {
        if (lt = !1, _(J), !yt)
          if (St(Mt) !== null)
            yt = !0, zn(De);
          else {
            var Ne = St(dn);
            Ne !== null && ir(B, Ne.startTime - J);
          }
      }
      function De(J, Ne) {
        yt = !1, lt && (lt = !1, $r()), jt = !0;
        var nt = ze;
        try {
          var zt;
          if (!L) return Ye(J, Ne);
        } finally {
          Ct = null, ze = nt, jt = !1;
        }
      }
      function Ye(J, Ne) {
        var nt = Ne;
        for (_(nt), Ct = St(Mt); Ct !== null && !(Ct.expirationTime > nt && (!J || Wa())); ) {
          var zt = Ct.callback;
          if (typeof zt == "function") {
            Ct.callback = null, ze = Ct.priorityLevel;
            var ln = Ct.expirationTime <= nt, un = zt(ln);
            nt = q.unstable_now(), typeof un == "function" ? Ct.callback = un : Ct === St(Mt) && Et(Mt), _(nt);
          } else
            Et(Mt);
          Ct = St(Mt);
        }
        if (Ct !== null)
          return !0;
        var on = St(dn);
        return on !== null && ir(B, on.startTime - nt), !1;
      }
      function Qe(J, Ne) {
        switch (J) {
          case fe:
          case Pe:
          case Z:
          case Ue:
          case ie:
            break;
          default:
            J = Z;
        }
        var nt = ze;
        ze = J;
        try {
          return Ne();
        } finally {
          ze = nt;
        }
      }
      function ut(J) {
        var Ne;
        switch (ze) {
          case fe:
          case Pe:
          case Z:
            Ne = Z;
            break;
          default:
            Ne = ze;
            break;
        }
        var nt = ze;
        ze = Ne;
        try {
          return J();
        } finally {
          ze = nt;
        }
      }
      function xt(J) {
        var Ne = ze;
        return function() {
          var nt = ze;
          ze = Ne;
          try {
            return J.apply(this, arguments);
          } finally {
            ze = nt;
          }
        };
      }
      function qe(J, Ne, nt) {
        var zt = q.unstable_now(), ln;
        if (typeof nt == "object" && nt !== null) {
          var un = nt.delay;
          typeof un == "number" && un > 0 ? ln = zt + un : ln = zt;
        } else
          ln = zt;
        var on;
        switch (J) {
          case fe:
            on = tt;
            break;
          case Pe:
            on = Te;
            break;
          case ie:
            on = Tn;
            break;
          case Ue:
            on = Be;
            break;
          case Z:
          default:
            on = dt;
            break;
        }
        var Kn = ln + on, rn = {
          id: $t++,
          callback: Ne,
          priorityLevel: J,
          startTime: ln,
          expirationTime: Kn,
          sortIndex: -1
        };
        return ln > zt ? (rn.sortIndex = ln, Ve(dn, rn), St(Mt) === null && rn === St(dn) && (lt ? $r() : lt = !0, ir(B, ln - zt))) : (rn.sortIndex = Kn, Ve(Mt, rn), !yt && !jt && (yt = !0, zn(De))), rn;
      }
      function Rt() {
      }
      function Vt() {
        !yt && !jt && (yt = !0, zn(De));
      }
      function Nn() {
        return St(Mt);
      }
      function Gn(J) {
        J.callback = null;
      }
      function ar() {
        return ze;
      }
      var Ln = !1, Er = null, Vn = -1, Mn = mt, fa = -1;
      function Wa() {
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
        J > 0 ? Mn = Math.floor(1e3 / J) : Mn = mt;
      }
      var qn = function() {
        if (Er !== null) {
          var J = q.unstable_now();
          fa = J;
          var Ne = !0, nt = !0;
          try {
            nt = Er(Ne, J);
          } finally {
            nt ? Xn() : (Ln = !1, Er = null);
          }
        } else
          Ln = !1;
      }, Xn;
      if (typeof re == "function")
        Xn = function() {
          re(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = qn, Xn = function() {
          Ga.postMessage(null);
        };
      } else
        Xn = function() {
          Y(qn, 0);
        };
      function zn(J) {
        Er = J, Ln || (Ln = !0, Xn());
      }
      function ir(J, Ne) {
        Vn = Y(function() {
          J(q.unstable_now());
        }, Ne);
      }
      function $r() {
        Se(Vn), Vn = -1;
      }
      var Oi = Dr, da = null;
      q.unstable_IdlePriority = ie, q.unstable_ImmediatePriority = fe, q.unstable_LowPriority = Ue, q.unstable_NormalPriority = Z, q.unstable_Profiling = da, q.unstable_UserBlockingPriority = Pe, q.unstable_cancelCallback = Gn, q.unstable_continueExecution = Vt, q.unstable_forceFrameRate = Bn, q.unstable_getCurrentPriorityLevel = ar, q.unstable_getFirstCallbackNode = Nn, q.unstable_next = ut, q.unstable_pauseExecution = Rt, q.unstable_requestPaint = Oi, q.unstable_runWithPriority = Qe, q.unstable_scheduleCallback = qe, q.unstable_shouldYield = Wa, q.unstable_wrapCallback = xt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
  var q = ju, oe = uT();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var mt = /* @__PURE__ */ new Set(), Ve = {};
  function St(n, r) {
    Et(n, r), Et(n + "Capture", r);
  }
  function Et(n, r) {
    for (Ve[n] = r, n = 0; n < r.length; n++) mt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), st = Object.prototype.hasOwnProperty, Re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, Pe = {};
  function Z(n) {
    return st.call(Pe, n) ? !0 : st.call(fe, n) ? !1 : Re.test(n) ? Pe[n] = !0 : (fe[n] = !0, !1);
  }
  function Ue(n, r, l, o) {
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
    if (r === null || typeof r > "u" || Ue(n, r, l, o)) return !0;
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
  var it = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    it[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    it[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    it[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    it[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    it[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    it[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    it[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    it[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    it[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Rn = /[\-:]([a-z])/g;
  function Jt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Rn,
      Jt
    );
    it[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Rn, Jt);
    it[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Rn, Jt);
    it[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    it[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), it.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    it[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function te(n, r, l, o) {
    var c = it.hasOwnProperty(r) ? it[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ye = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tt = Symbol.for("react.element"), Te = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), Tn = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), dn = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), Ct = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), Y = Symbol.iterator;
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
  var De = !1;
  function Ye(n, r) {
    if (!n || De) return "";
    De = !0;
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
      De = !1, Error.prepareStackTrace = l;
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
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case dt:
        return "Fragment";
      case Te:
        return "Portal";
      case Tn:
        return "Profiler";
      case Be:
        return "StrictMode";
      case Ct:
        return "Suspense";
      case ze:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case dn:
        return (n.displayName || "Context") + ".Consumer";
      case Mt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case yt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function xt(n) {
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
        return ut(r);
      case 8:
        return r === Be ? "StrictMode" : "Mode";
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
  function Rt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = Rt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Gn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Rt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    l = qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && te(n, "checked", r, !1);
  }
  function Mn(n, r) {
    Vn(n, r);
    var l = qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wa(n, r.type, qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
    if (r.dangerouslySetInnerHTML != null) throw Error(L(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(L(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(L(93));
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
  }, Ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    Ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function nt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = nt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var ln = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(L(62));
    }
  }
  function on(n, r) {
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
  var Kn = null;
  function rn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Qt = null, Ut = null, pa = null;
  function _a(n) {
    if (n = ss(n)) {
      if (typeof Qt != "function") throw Error(L(280));
      var r = n.stateNode;
      r && (r = Ii(r), Qt(n.stateNode, n.type, r));
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
  function Il(n, r) {
    return n(r);
  }
  function $l() {
  }
  var Li = !1;
  function Ql(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return Il(n, r, l);
    } finally {
      Li = !1, (Ut !== null || pa !== null) && ($l(), Ni());
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
    if (l && typeof l != "function") throw Error(L(231, r, typeof l));
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
      } else throw Error(L(198));
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
  function ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function We(n) {
    if (ue(n) !== n) throw Error(L(188));
  }
  function pt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ue(n), r === null) throw Error(L(188));
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
        throw Error(L(188));
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
          if (!m) throw Error(L(189));
        }
      }
      if (l.alternate !== o) throw Error(L(190));
    }
    if (l.tag !== 3) throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function rt(n) {
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
  var an = oe.unstable_scheduleCallback, sn = oe.unstable_cancelCallback, Rr = oe.unstable_shouldYield, qa = oe.unstable_requestPaint, At = oe.unstable_now, pn = oe.unstable_getCurrentPriorityLevel, Ke = oe.unstable_ImmediatePriority, fi = oe.unstable_UserBlockingPriority, zi = oe.unstable_NormalPriority, ic = oe.unstable_LowPriority, Ui = oe.unstable_IdlePriority, ll = null, Wr = null;
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
  function Wl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function Gl(n) {
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
  var bt = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, _t, oc, pi, Ie, ql = !1, Zn = [], qr = null, Nr = null, vi = null, gn = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), Xa = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        gn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wt.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && _t(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
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
        return gn.set(d, Lr(gn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Wt.set(d, Lr(Wt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = au(n.target);
    if (r !== null) {
      var l = ue(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ct(l), r !== null) {
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
        Kn = o, l.target.dispatchEvent(o), Kn = null;
      } else return r = ss(l), r !== null && _t(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    ql = !1, qr !== null && Xl(qr) && (qr = null), Nr !== null && Xl(Nr) && (Nr = null), vi !== null && Xl(vi) && (vi = null), gn.forEach(Vu), Wt.forEach(Vu);
  }
  function Kl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Kl(c, n);
    }
    if (0 < Zn.length) {
      Kl(Zn[0], n);
      for (var l = 1; l < Zn.length; l++) {
        var o = Zn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qr !== null && Kl(qr, n), Nr !== null && Kl(Nr, n), vi !== null && Kl(vi, n), gn.forEach(r), Wt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Xa.shift();
  }
  var Na = ye.ReactCurrentBatchConfig, cl = !0;
  function Fi(n, r, l, o) {
    var c = bt, d = Na.transition;
    Na.transition = null;
    try {
      bt = 1, fl(n, r, l, o);
    } finally {
      bt = c, Na.transition = d;
    }
  }
  function Yu(n, r, l, o) {
    var c = bt, d = Na.transition;
    Na.transition = null;
    try {
      bt = 4, fl(n, r, l, o);
    } finally {
      bt = c, Na.transition = d;
    }
  }
  function fl(n, r, l, o) {
    if (cl) {
      var c = Iu(n, r, l, o);
      if (c === null) od(n, r, o, Hi, l), Tr(n, o);
      else if (qf(c, n, r, l, o)) o.stopPropagation();
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
    if (Hi = null, n = rn(o), n = au(n), n !== null) if (r = ue(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ct(r), n !== null) return n;
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
        switch (pn()) {
          case Ke:
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
  function K() {
    return !1;
  }
  function ge(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : K, this.isPropagationStopped = K, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, je = ge(de), at = re({}, de, { view: 0, detail: 0 }), Ft = ge(at), Gt, qt, Je, en = re({}, at, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ka, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Je && (Je && n.type === "mousemove" ? (Gt = n.screenX - Je.screenX, qt = n.screenY - Je.screenY) : qt = Gt = 0, Je = n), Gt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), xn = ge(en), Zl = re({}, en, { dataTransfer: 0 }), Go = ge(Zl), Pi = re({}, at, { relatedTarget: 0 }), Jl = ge(Pi), qo = re({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = ge(qo), sc = re({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Kf = ge(sc), tv = re({}, de, { data: 0 }), cc = ge(tv), nv = {
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
  function Ka() {
    return Gm;
  }
  var qm = re({}, at, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ka, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = ge(qm), Jf = re({}, en, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = ge(Jf), Xm = re({}, at, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ka }), dc = ge(Xm), iv = re({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = ge(iv), Vi = re({}, en, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Un = ge(Vi), Bi = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, dl = null;
  S && "documentMode" in document && (dl = document.documentMode);
  var Km = S && "TextEvent" in window && !dl, Qu = S && (!Xo || dl && 8 < dl && 11 >= dl), lv = " ", uv = !1;
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
    if (Wu) return n === "compositionend" || !Xo && pc(n, r) ? (n = C(), h = $u = La = null, Wu = !1, n) : null;
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
    ka(o), r = ls(r, "onChange"), 0 < r.length && (l = new je("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, hi = null;
  function ed(n) {
    yc(n, 0);
  }
  function Ko(n) {
    var r = _e(n);
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
    if (n.propertyName === "value" && Ko(hi)) {
      var r = [];
      fv(r, hi, n, rn(n)), Ql(ed, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (hv(), Gu = r, hi = l, Gu.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ko(hi);
  }
  function yv(n, r) {
    if (n === "click") return Ko(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return Ko(r);
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
      if (!st.call(r, c) || !Za(n[c], r[c])) return !1;
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
  function qu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = pl(), l = n.focusedElem, o = n.selectionRange;
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
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, rd = null, Jo = null, ad = !1;
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Ku == null || Ku !== ar(o) || (o = Ku, "selectionStart" in o && qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = ls(rd, "onSelect"), 0 < o.length && (r = new je("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
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
    _v.set(n, r), St(r, [n]);
  }
  for (var eu = 0; eu < id.length; eu++) {
    var ld = id[eu], ns = ld.toLowerCase(), ry = ld[0].toUpperCase() + ld.slice(1);
    mi(ns, "on" + ry);
  }
  mi(Tv, "onAnimationEnd"), mi(wv, "onAnimationIteration"), mi(xv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(bv, "onTransitionEnd"), Et("onMouseEnter", ["mouseout", "mouseover"]), Et("onMouseLeave", ["mouseout", "mouseover"]), Et("onPointerEnter", ["pointerout", "pointerover"]), Et("onPointerLeave", ["pointerout", "pointerover"]), St("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), St("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), St("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), St("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
      n[as] = !0, mt.forEach(function(l) {
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
          if (m = au(E), m === null) return;
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
      var U = d, Q = rn(l), W = [];
      e: {
        var $ = _v.get(n);
        if ($ !== void 0) {
          var pe = je, Ee = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = Zf;
              break;
            case "focusin":
              Ee = "focus", pe = Jl;
              break;
            case "focusout":
              Ee = "blur", pe = Jl;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Jl;
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
              pe = Xf;
              break;
            case bv:
              pe = Xr;
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
              pe = Kf;
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
          var we = (r & 4) !== 0, Dn = !we && n === "scroll", k = we ? $ !== null ? $ + "Capture" : null : $;
          we = [];
          for (var x = U, N; x !== null; ) {
            N = x;
            var X = N.stateNode;
            if (N.tag === 5 && X !== null && (N = X, k !== null && (X = oi(x, k), X != null && we.push(Ju(x, X, N)))), Dn) break;
            x = x.return;
          }
          0 < we.length && ($ = new pe($, Ee, null, l, Q), W.push({ event: $, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", $ && l !== Kn && (Ee = l.relatedTarget || l.fromElement) && (au(Ee) || Ee[Yi])) break e;
          if ((pe || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, pe ? (Ee = l.relatedTarget || l.toElement, pe = U, Ee = Ee ? au(Ee) : null, Ee !== null && (Dn = ue(Ee), Ee !== Dn || Ee.tag !== 5 && Ee.tag !== 6) && (Ee = null)) : (pe = null, Ee = U), pe !== Ee)) {
            if (we = xn, X = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (we = fc, X = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Dn = pe == null ? $ : _e(pe), N = Ee == null ? $ : _e(Ee), $ = new we(X, x + "leave", pe, l, Q), $.target = Dn, $.relatedTarget = N, X = null, au(Q) === U && (we = new we(k, x + "enter", Ee, l, Q), we.target = N, we.relatedTarget = Dn, X = we), Dn = X, pe && Ee) t: {
              for (we = pe, k = Ee, x = 0, N = we; N; N = tu(N)) x++;
              for (N = 0, X = k; X; X = tu(X)) N++;
              for (; 0 < x - N; ) we = tu(we), x--;
              for (; 0 < N - x; ) k = tu(k), N--;
              for (; x--; ) {
                if (we === k || k !== null && we === k.alternate) break t;
                we = tu(we), k = tu(k);
              }
              we = null;
            }
            else we = null;
            pe !== null && gc(W, $, pe, we, !1), Ee !== null && Dn !== null && gc(W, Dn, Ee, we, !0);
          }
        }
        e: {
          if ($ = U ? _e(U) : window, pe = $.nodeName && $.nodeName.toLowerCase(), pe === "select" || pe === "input" && $.type === "file") var se = dv;
          else if (cv($)) if (pv) se = ny;
          else {
            se = ty;
            var Oe = ey;
          }
          else (pe = $.nodeName) && pe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (se = yv);
          if (se && (se = se(n, U))) {
            fv(W, se, l, Q);
            break e;
          }
          Oe && Oe(n, $, U), n === "focusout" && (Oe = $._wrapperState) && Oe.controlled && $.type === "number" && Wa($, "number", $.value);
        }
        switch (Oe = U ? _e(U) : window, n) {
          case "focusin":
            (cv(Oe) || Oe.contentEditable === "true") && (Ku = Oe, rd = U, Jo = null);
            break;
          case "focusout":
            Jo = rd = Ku = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Rv(W, l, Q);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Rv(W, l, Q);
        }
        var Me;
        if (Xo) e: {
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
        $e && (Qu && l.locale !== "ko" && (Wu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Wu && (Me = C()) : (La = Q, $u = "value" in La ? La.value : La.textContent, Wu = !0)), Oe = ls(U, $e), 0 < Oe.length && ($e = new cc($e, n, null, l, Q), W.push({ event: $e, listeners: Oe }), Me ? $e.data = Me : (Me = ov(l), Me !== null && ($e.data = Me)))), (Me = Km ? Zm(n, l) : sv(n, l)) && (U = ls(U, "onBeforeInput"), 0 < U.length && (Q = new cc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: U }), Q.data = Me));
      }
      yc(W, r);
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
  function tu(n) {
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
    if (r = Dv(r), Dv(n) !== r && l) throw Error(L(425));
  }
  function Ec() {
  }
  var nu = null, us = null;
  function ru(n, r) {
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
  function au(n) {
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
  function _e(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(L(33));
  }
  function Ii(n) {
    return n[os] || null;
  }
  var Sn = [], vt = -1;
  function Kr(n) {
    return { current: n };
  }
  function Bt(n) {
    0 > vt || (n.current = Sn[vt], Sn[vt] = null, vt--);
  }
  function tn(n, r) {
    vt++, Sn[vt] = n.current, n.current = r;
  }
  var ot = {}, vn = Kr(ot), An = Kr(!1), za = ot;
  function ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ot;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function En(n) {
    return n = n.childContextTypes, n != null;
  }
  function yi() {
    Bt(An), Bt(vn);
  }
  function wc(n, r, l) {
    if (vn.current !== ot) throw Error(L(168));
    tn(vn, r), tn(An, l);
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(L(108, xt(n) || "Unknown", c));
    return re({}, l, o);
  }
  function iu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ot, za = vn.current, tn(vn, n), tn(An, An.current), !0;
  }
  function xr(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(L(169));
    l ? (n = Nv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Bt(An), Bt(vn), tn(vn, n)) : Bt(An), tn(An, l);
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
      var n = 0, r = bt;
      try {
        var l = ei;
        for (bt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, cs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), an(Ke, Mr), c;
      } finally {
        bt = r, fs = !1;
      }
    }
    return null;
  }
  var ml = [], yl = 0, ao = null, gl = 0, ur = [], jn = 0, lu = null, zr = 1, gi = "";
  function Sl(n, r) {
    ml[yl++] = gl, ml[yl++] = ao, ao = n, gl = r;
  }
  function Lv(n, r, l) {
    ur[jn++] = zr, ur[jn++] = gi, ur[jn++] = lu, lu = n;
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
    for (; n === lu; ) lu = ur[--jn], ur[jn] = null, gi = ur[--jn], ur[jn] = null, zr = ur[--jn], ur[jn] = null;
  }
  var Zr = null, Jr = null, cn = !1, ti = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = lu !== null ? { id: zr, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (cn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(L(418));
          r = Ja(l.nextSibling);
          var o = Zr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, cn = !1, Zr = n);
        }
      } else {
        if (hd(n)) throw Error(L(418));
        n.flags = n.flags & -4097 | 2, cn = !1, Zr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function bn(n) {
    if (n !== Zr) return !1;
    if (!cn) return Mv(n), cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ru(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (hd(n)) throw zv(), Error(L(418));
      for (; r; ) pd(n, r), r = Ja(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(L(317));
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
    Jr = Zr = null, cn = !1;
  }
  function ds(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var uu = ye.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(L(284));
      if (!l._owner) throw Error(L(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(k, x) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [x], k.flags |= 16) : N.push(x);
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
    function d(k, x, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < x ? (k.flags |= 2, x) : N) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, N, X) {
      return x === null || x.tag !== 6 ? (x = wu(N, k.mode, X), x.return = k, x) : (x = c(x, N), x.return = k, x);
    }
    function T(k, x, N, X) {
      var se = N.type;
      return se === dt ? Q(k, x, N.props.children, X, N.key) : x !== null && (x.elementType === se || typeof se == "object" && se !== null && se.$$typeof === yt && Uv(se) === x.type) ? (X = c(x, N.props), X.ref = ps(k, x, N), X.return = k, X) : (X = ff(N.type, N.key, N.props, null, k.mode, X), X.ref = ps(k, x, N), X.return = k, X);
    }
    function U(k, x, N, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = Wd(N, k.mode, X), x.return = k, x) : (x = c(x, N.children || []), x.return = k, x);
    }
    function Q(k, x, N, X, se) {
      return x === null || x.tag !== 7 ? (x = Nl(N, k.mode, X, se), x.return = k, x) : (x = c(x, N), x.return = k, x);
    }
    function W(k, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = wu("" + x, k.mode, N), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case tt:
            return N = ff(x.type, x.key, x.props, null, k.mode, N), N.ref = ps(k, null, x), N.return = k, N;
          case Te:
            return x = Wd(x, k.mode, N), x.return = k, x;
          case yt:
            var X = x._init;
            return W(k, X(x._payload), N);
        }
        if (Dr(x) || Se(x)) return x = Nl(x, k.mode, N, null), x.return = k, x;
        io(k, x);
      }
      return null;
    }
    function $(k, x, N, X) {
      var se = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return se !== null ? null : E(k, x, "" + N, X);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case tt:
            return N.key === se ? T(k, x, N, X) : null;
          case Te:
            return N.key === se ? U(k, x, N, X) : null;
          case yt:
            return se = N._init, $(
              k,
              x,
              se(N._payload),
              X
            );
        }
        if (Dr(N) || Se(N)) return se !== null ? null : Q(k, x, N, X, null);
        io(k, N);
      }
      return null;
    }
    function pe(k, x, N, X, se) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return k = k.get(N) || null, E(x, k, "" + X, se);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case tt:
            return k = k.get(X.key === null ? N : X.key) || null, T(x, k, X, se);
          case Te:
            return k = k.get(X.key === null ? N : X.key) || null, U(x, k, X, se);
          case yt:
            var Oe = X._init;
            return pe(k, x, N, Oe(X._payload), se);
        }
        if (Dr(X) || Se(X)) return k = k.get(N) || null, Q(x, k, X, se, null);
        io(x, X);
      }
      return null;
    }
    function Ee(k, x, N, X) {
      for (var se = null, Oe = null, Me = x, $e = x = 0, Qn = null; Me !== null && $e < N.length; $e++) {
        Me.index > $e ? (Qn = Me, Me = null) : Qn = Me.sibling;
        var Ot = $(k, Me, N[$e], X);
        if (Ot === null) {
          Me === null && (Me = Qn);
          break;
        }
        n && Me && Ot.alternate === null && r(k, Me), x = d(Ot, x, $e), Oe === null ? se = Ot : Oe.sibling = Ot, Oe = Ot, Me = Qn;
      }
      if ($e === N.length) return l(k, Me), cn && Sl(k, $e), se;
      if (Me === null) {
        for (; $e < N.length; $e++) Me = W(k, N[$e], X), Me !== null && (x = d(Me, x, $e), Oe === null ? se = Me : Oe.sibling = Me, Oe = Me);
        return cn && Sl(k, $e), se;
      }
      for (Me = o(k, Me); $e < N.length; $e++) Qn = pe(Me, k, $e, N[$e], X), Qn !== null && (n && Qn.alternate !== null && Me.delete(Qn.key === null ? $e : Qn.key), x = d(Qn, x, $e), Oe === null ? se = Qn : Oe.sibling = Qn, Oe = Qn);
      return n && Me.forEach(function(Ml) {
        return r(k, Ml);
      }), cn && Sl(k, $e), se;
    }
    function we(k, x, N, X) {
      var se = Se(N);
      if (typeof se != "function") throw Error(L(150));
      if (N = se.call(N), N == null) throw Error(L(151));
      for (var Oe = se = null, Me = x, $e = x = 0, Qn = null, Ot = N.next(); Me !== null && !Ot.done; $e++, Ot = N.next()) {
        Me.index > $e ? (Qn = Me, Me = null) : Qn = Me.sibling;
        var Ml = $(k, Me, Ot.value, X);
        if (Ml === null) {
          Me === null && (Me = Qn);
          break;
        }
        n && Me && Ml.alternate === null && r(k, Me), x = d(Ml, x, $e), Oe === null ? se = Ml : Oe.sibling = Ml, Oe = Ml, Me = Qn;
      }
      if (Ot.done) return l(
        k,
        Me
      ), cn && Sl(k, $e), se;
      if (Me === null) {
        for (; !Ot.done; $e++, Ot = N.next()) Ot = W(k, Ot.value, X), Ot !== null && (x = d(Ot, x, $e), Oe === null ? se = Ot : Oe.sibling = Ot, Oe = Ot);
        return cn && Sl(k, $e), se;
      }
      for (Me = o(k, Me); !Ot.done; $e++, Ot = N.next()) Ot = pe(Me, k, $e, Ot.value, X), Ot !== null && (n && Ot.alternate !== null && Me.delete(Ot.key === null ? $e : Ot.key), x = d(Ot, x, $e), Oe === null ? se = Ot : Oe.sibling = Ot, Oe = Ot);
      return n && Me.forEach(function(Ey) {
        return r(k, Ey);
      }), cn && Sl(k, $e), se;
    }
    function Dn(k, x, N, X) {
      if (typeof N == "object" && N !== null && N.type === dt && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case tt:
            e: {
              for (var se = N.key, Oe = x; Oe !== null; ) {
                if (Oe.key === se) {
                  if (se = N.type, se === dt) {
                    if (Oe.tag === 7) {
                      l(k, Oe.sibling), x = c(Oe, N.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Oe.elementType === se || typeof se == "object" && se !== null && se.$$typeof === yt && Uv(se) === Oe.type) {
                    l(k, Oe.sibling), x = c(Oe, N.props), x.ref = ps(k, Oe, N), x.return = k, k = x;
                    break e;
                  }
                  l(k, Oe);
                  break;
                } else r(k, Oe);
                Oe = Oe.sibling;
              }
              N.type === dt ? (x = Nl(N.props.children, k.mode, X, N.key), x.return = k, k = x) : (X = ff(N.type, N.key, N.props, null, k.mode, X), X.ref = ps(k, x, N), X.return = k, k = X);
            }
            return m(k);
          case Te:
            e: {
              for (Oe = N.key; x !== null; ) {
                if (x.key === Oe) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(k, x.sibling), x = c(x, N.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = Wd(N, k.mode, X), x.return = k, k = x;
            }
            return m(k);
          case yt:
            return Oe = N._init, Dn(k, x, Oe(N._payload), X);
        }
        if (Dr(N)) return Ee(k, x, N, X);
        if (Se(N)) return we(k, x, N, X);
        io(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, N), x.return = k, k = x) : (l(k, x), x = wu(N, k.mode, X), x.return = k, k = x), m(k)) : l(k, x);
    }
    return Dn;
  }
  var ni = Av(!0), or = Av(!1), ne = Kr(null), ya = null, br = null, yd = null;
  function gd() {
    yd = br = ya = null;
  }
  function Sd(n) {
    var r = ne.current;
    Bt(ne), n._currentValue = r;
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
      if (ya === null) throw Error(L(308));
      br = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else br = br.next = n;
    return r;
  }
  var ou = null;
  function Cd(n) {
    ou === null ? ou = [n] : ou.push(n);
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
      var W = c.baseState;
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
            var Ee = n, we = E;
            switch ($ = r, pe = l, we.tag) {
              case 1:
                if (Ee = we.payload, typeof Ee == "function") {
                  W = Ee.call(pe, W, $);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = we.payload, $ = typeof Ee == "function" ? Ee.call(pe, W, $) : Ee, $ == null) break e;
                W = re({}, W, $);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else pe = { eventTime: pe, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = pe, T = W) : Q = Q.next = pe, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = W), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      gu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(L(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ei = Kr(uo), vs = Kr(uo), hs = Kr(uo);
  function su(n) {
    if (n === uo) throw Error(L(174));
    return n;
  }
  function Td(n, r) {
    switch (tn(hs, r), tn(vs, n), tn(Ei, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ir(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ir(r, n);
    }
    Bt(Ei), tn(Ei, r);
  }
  function oo() {
    Bt(Ei), Bt(vs), Bt(hs);
  }
  function wd(n) {
    su(hs.current);
    var r = su(Ei.current), l = ir(r, n.type);
    r !== l && (tn(vs, n), tn(Ei, l));
  }
  function xd(n) {
    vs.current === n && (Bt(Ei), Bt(vs));
  }
  var hn = Kr(0);
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
  var ke = ye.ReactCurrentDispatcher, ft = ye.ReactCurrentBatchConfig, Tt = 0, Ze = null, Xt = null, Yn = null, Dc = !1, ys = !1, gs = 0, _d = 0;
  function P() {
    throw Error(L(321));
  }
  function Fn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function Ae(n, r, l, o, c, d) {
    if (Tt = d, Ze = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ke.current = n === null || n.memoizedState === null ? Ic : $c, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(L(301));
        d += 1, Yn = Xt = null, r.updateQueue = null, ke.current = Ts, n = l(o, c);
      } while (ys);
    }
    if (ke.current = It, r = Xt !== null && Xt.next !== null, Tt = 0, Yn = Xt = Ze = null, Dc = !1, r) throw Error(L(300));
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
      if (n === null) throw Error(L(310));
      Xt = n, n = { memoizedState: Xt.memoizedState, baseState: Xt.baseState, baseQueue: Xt.baseQueue, queue: Xt.queue, next: null }, Yn === null ? Ze.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(L(311));
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
        if ((Tt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var W = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, Ze.lanes |= Q, gu |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ze.lanes |= d, gu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tl(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(L(311));
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
      if (l.flags |= 2048, fu(9, Lc.bind(null, l, o, c, r), void 0, null), Hn === null) throw Error(L(349));
      Tt & 30 || Nc(l, r, c);
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
  function fu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ze.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return er().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Jn();
    Ze.flags |= n, c.memoizedState = fu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Xt !== null) {
      var m = Xt.memoizedState;
      if (d = m.destroy, o !== null && Fn(o, m.deps)) {
        c.memoizedState = fu(r, l, d, o);
        return;
      }
    }
    Ze.flags |= n, c.memoizedState = fu(1 | r, l, d, o);
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
  function du(n, r, l) {
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
    return Tt & 21 ? (Za(l, r) || (l = Wl(), Ze.lanes |= l, gu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Pv(n, r) {
    var l = bt;
    bt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ft.transition;
    ft.transition = {};
    try {
      n(!1), r();
    } finally {
      bt = l, ft.transition = o;
    }
  }
  function po() {
    return er().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ta(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = nn();
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
      l = jv(n, r, c, o), l !== null && (c = nn(), Ca(l, n, o, c), Bv(l, r, o));
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
  var It = { readContext: Yt, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Ic = { readContext: Yt, useCallback: function(n, r) {
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
    if (cn) {
      if (l === void 0) throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Hn === null) throw Error(L(349));
      Tt & 30 || Nc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fu(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Jn(), r = Hn.identifierPrefix;
    if (cn) {
      var l = gi, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: Yt,
    useCallback: Vc,
    useContext: Yt,
    useEffect: Ss,
    useImperativeHandle: du,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: cu,
    useRef: jc,
    useState: function() {
      return cu(ea);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = er();
      return Yc(r, Xt.memoizedState, n);
    },
    useTransition: function() {
      var n = cu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, Ts = { readContext: Yt, useCallback: Vc, useContext: Yt, useEffect: Ss, useImperativeHandle: du, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: Tl, useRef: jc, useState: function() {
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
    var o = nn(), c = Ea(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = nn(), c = Ea(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nn(), o = Ea(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Cl(n, c, o), r !== null && (Ca(r, n, o, l), bc(r, n, o));
  } };
  function Yv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Iv(n, r, l) {
    var o = !1, c = ot, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Yt(d) : (c = En(r) ? za : vn.current, o = r.contextTypes, d = (o = o != null) ? ma(n, c) : ot), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, El(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Yt(d) : (d = En(r) ? za : vn.current, c.context = ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
  var pu = ye.ReactCurrentOwner, tr = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? or(r, null, l, o) : ni(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Ae(n, r, l, o, d, c), l = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (cn && l && dd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function ra(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, vu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return sr(n, r, c);
    }
    return r.flags |= 1, n = Ol(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, sr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function et(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, tn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, tn(yo, Sa), Sa |= o;
    return _n(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xc(n, r, l, o, c) {
    var d = En(l) ? za : vn.current;
    return d = ma(r, d), lo(r, c), l = Ae(n, r, l, o, d, c), o = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (cn && o && dd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (En(l)) {
      var d = !0;
      iu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Aa(n, r), Iv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Yt(U) : (U = En(l) ? za : vn.current, U = ma(r, U));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Wc(r, m, o, U), Ua = !1;
      var $ = r.memoizedState;
      m.state = $, _c(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || An.current || Ua ? (typeof Q == "function" && (kd(r, l, Q, o), T = r.memoizedState), (E = Ua || Yv(r, l, E, o, $, T, U)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : na(r.type, E), m.props = U, W = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Yt(T) : (T = En(l) ? za : vn.current, T = ma(r, T));
      var pe = l.getDerivedStateFromProps;
      (Q = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || $ !== T) && Wc(r, m, o, T), Ua = !1, $ = r.memoizedState, m.state = $, _c(r, o, m, c);
      var Ee = r.memoizedState;
      E !== W || $ !== Ee || An.current || Ua ? (typeof pe == "function" && (kd(r, l, pe, o), Ee = r.memoizedState), (U = Ua || Yv(r, l, U, o, $, Ee, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ee, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ee, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ee), m.props = o, m.state = Ee, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xr(r, l, !1), sr(n, r, d);
    o = r.stateNode, pu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ni(r, n.child, null, d), r.child = ni(r, null, E, d)) : _n(n, r, E, d), r.memoizedState = o.state, c && xr(r, l, !0), r.child;
  }
  function Kc(n) {
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
    var o = r.pendingProps, c = hn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tn(hn, c & 1), n === null)
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
      return r.flags & 256 ? (r.flags &= -257, o = Gc(Error(L(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Nl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(L(419)), o = Gc(d, o, void 0), Jc(n, r, m, o);
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
      return Bd(), o = Gc(Error(L(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = Ja(c.nextSibling), Zr = r, cn = !0, ti = null, n !== null && (ur[jn++] = zr, ur[jn++] = gi, ur[jn++] = lu, zr = n.id, gi = n.overflow, lu = r), r = bs(r, o.children), r.flags |= 4096, r);
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
    if (_n(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (tn(hn, o), !(r.mode & 1)) r.memoizedState = null;
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
    if (n !== null && (r.dependencies = n.dependencies), gu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Ol(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ol(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Kc(r), $i();
        break;
      case 5:
        wd(r);
        break;
      case 1:
        En(r.type) && iu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        tn(ne, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (tn(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Wv(n, r, l) : (tn(hn, hn.current & 1), n = sr(n, r, l), n !== null ? n.sibling : null);
        tn(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return aa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tn(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, et(n, r, l);
    }
    return sr(n, r, l);
  }
  var ho, ga, In, qv;
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
      n = r.stateNode, su(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), o = Ln(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qn(n, c), o = qn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      un(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ve.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ve.hasOwnProperty(U) ? (T != null && U === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!cn) switch (n.tailMode) {
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
        return En(r.type) && yi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), Bt(An), Bt(vn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (As(ti), ti = null))), ga(n, r), _r(r), null;
      case 5:
        xd(r);
        var c = su(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(L(166));
            return _r(r), null;
          }
          if (n = su(Ei.current), bn(r)) {
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
                Xn(o, d), Ht("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ve.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
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
              switch (m = on(l, o), l) {
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
                  Xn(n, o), c = qn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ve.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && te(n, d, T, m));
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
          if (typeof o != "string" && r.stateNode === null) throw Error(L(166));
          if (l = su(hs.current), su(Ei.current), bn(r)) {
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
        if (Bt(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (cn && Jr !== null && r.mode & 1 && !(r.flags & 128)) zv(), $i(), r.flags |= 98560, d = !1;
          else if (d = bn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(L(317));
              d[Ma] = r;
            } else $i(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ti !== null && (As(ti), ti = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? $n === 0 && ($n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ga(n, r), n === null && is(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return En(r.type) && yi(), _r(r), null;
      case 19:
        if (Bt(hn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return tn(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && At() > So && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !cn) return _r(r), null;
          } else 2 * At() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = At(), r.sibling = null, l = hn.current, tn(hn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function Xv(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return En(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Bt(An), Bt(vn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (Bt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(L(340));
          $i();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Bt(hn), null;
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
  var hu = !1, cr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function bl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Cn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      Cn(n, r, o);
    }
  }
  var Fd = !1;
  function cy(n, r) {
    if (nu = cl, n = pl(), qu(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, Q = 0, W = n, $ = null;
          t: for (; ; ) {
            for (var pe; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (pe = W.firstChild) !== null; )
              $ = W, W = pe;
            for (; ; ) {
              if (W === n) break t;
              if ($ === l && ++U === c && (E = m), $ === d && ++Q === o && (T = m), (pe = W.nextSibling) !== null) break;
              W = $, $ = W.parentNode;
            }
            W = pe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, cl = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var Ee = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ee !== null) {
              var we = Ee.memoizedProps, Dn = Ee.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? we : na(r.type, we), Dn);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(L(163));
        }
      } catch (X) {
        Cn(r, r.return, X);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
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
  function Kv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[os], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  var mn = null, Ur = !1;
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
        var o = mn, c = Ur;
        mn = null, ja(n, r, l), mn = o, Ur = c, mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(mn, l.stateNode));
        break;
      case 4:
        o = mn, c = Ur, mn = l.stateNode.containerInfo, Ur = !0, ja(n, r, l), mn = o, Ur = c;
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
          Cn(l, r, E);
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
              mn = E.stateNode, Ur = !1;
              break e;
            case 3:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (mn === null) throw Error(L(160));
        Wi(d, m, c), mn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        Cn(c, r, U);
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
            Cn(n, n.return, we);
          }
          try {
            mo(5, n, n.return);
          } catch (we) {
            Cn(n, n.return, we);
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
          } catch (we) {
            Cn(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), on(E, m);
            var U = on(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? zt(c, W) : Q === "dangerouslySetInnerHTML" ? Oi(c, W) : Q === "children" ? da(c, W) : te(c, Q, W, U);
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
          } catch (we) {
            Cn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            Cn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (we) {
          Cn(n, n.return, we);
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
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1) for (me = n, Q = n.child; Q !== null; ) {
            for (W = me = Q; me !== null; ) {
              switch ($ = me, pe = $.child, $.tag) {
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
                    } catch (we) {
                      Cn(o, l, we);
                    }
                  }
                  break;
                case 5:
                  bl($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    th(W);
                    continue;
                  }
              }
              pe !== null ? (pe.return = $, me = pe) : th(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = nt("display", m));
                } catch (we) {
                  Cn(n, n.return, we);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = U ? "" : W.memoizedProps;
              } catch (we) {
                Cn(n, n.return, we);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
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
          throw Error(L(160));
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
            throw Error(L(161));
        }
      } catch (T) {
        Cn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    me = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || hu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || cr;
          E = hu;
          var U = cr;
          if (hu = m, (cr = T) && !U) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : T !== null ? (T.return = m, me = T) : Os(c);
          for (; d !== null; ) me = d, eh(d), d = d.sibling;
          me = c, hu = E, cr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; me !== null; ) {
      var r = me;
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
                    var W = Q.dehydrated;
                    W !== null && Oa(W);
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
              throw Error(L(163));
          }
          cr || r.flags & 512 && rf(r);
        } catch ($) {
          Cn(r, r.return, $);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function th(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Os(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (T) {
              Cn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Cn(r, c, T);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (T) {
              Cn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (T) {
              Cn(r, m, T);
            }
        }
      } catch (T) {
        Cn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var nh = Math.ceil, lf = ye.ReactCurrentDispatcher, mu = ye.ReactCurrentOwner, kr = ye.ReactCurrentBatchConfig, ht = 0, Hn = null, kn = null, fr = 0, Sa = 0, yo = Kr(0), $n = 0, yu = null, gu = 0, Su = 0, Ns = 0, go = null, ia = null, Pd = 0, So = 1 / 0, Gi = null, _l = !1, Ls = null, Fa = null, uf = !1, kl = null, Ms = 0, Eo = 0, Co = null, Eu = -1, zs = 0;
  function nn() {
    return ht & 6 ? At() : Eu !== -1 ? Eu : Eu = At();
  }
  function Ea(n) {
    return n.mode & 1 ? ht & 2 && fr !== 0 ? fr & -fr : uu.transition !== null ? (zs === 0 && (zs = Wl()), zs) : (n = bt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(L(185));
    sl(n, l, o), (!(ht & 2) || n !== Hn) && (n === Hn && (!(ht & 2) && (Su |= l), $n === 4 && Dl(n, fr)), nr(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (So = At() + 500, cs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = di(n, n === Hn ? fr : 0);
    if (o === 0) l !== null && sn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && sn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : hl(Fs.bind(null, n)), ly(function() {
        !(ht & 6) && Mr();
      }), l = null;
      else {
        switch (Qo(o)) {
          case 1:
            l = Ke;
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
    if (Eu = -1, zs = 0, ht & 6) throw Error(L(327));
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
      (Hn !== n || fr !== r) && (Gi = null, So = At() + 500, Ru(n, r));
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
      if (r === 2 && (c = ji(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = yu, Ru(n, 0), Dl(n, o), nr(n, At()), l;
      if (r === 6) Dl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = cf(n, o), r === 2 && (d = ji(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = yu, Ru(n, 0), Dl(n, o), nr(n, At()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            Tu(n, ia, Gi);
            break;
          case 3:
            if (Dl(n, o), (o & 130023424) === o && (r = Pd + 500 - At(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(Tu.bind(null, n, ia, Gi), r);
              break;
            }
            Tu(n, ia, Gi);
            break;
          case 4:
            if (Dl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = At() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(Tu.bind(null, n, ia, Gi), o);
              break;
            }
            Tu(n, ia, Gi);
            break;
          case 5:
            Tu(n, ia, Gi);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return nr(n, At()), n.callbackNode === l ? rh.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ia, ia = l, r !== null && As(r)), n;
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
    for (r &= ~Ns, r &= ~Su, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (ht & 6) throw Error(L(327));
    Ro();
    var r = di(n, 0);
    if (!(r & 1)) return nr(n, At()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ji(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = yu, Ru(n, 0), Dl(n, r), nr(n, At()), l;
    if (l === 6) throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, ia, Gi), nr(n, At()), null;
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
  function Cu(n) {
    kl !== null && kl.tag === 0 && !(ht & 6) && Ro();
    var r = ht;
    ht |= 1;
    var l = kr.transition, o = bt;
    try {
      if (kr.transition = null, bt = 1, n) return n();
    } finally {
      bt = o, kr.transition = l, ht = r, !(ht & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Bt(yo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ov(l)), kn !== null) for (l = kn.return; l !== null; ) {
      var o = l;
      switch (xc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yi();
          break;
        case 3:
          oo(), Bt(An), Bt(vn), ms();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Bt(hn);
          break;
        case 19:
          Bt(hn);
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
    if (Hn = n, kn = n = Ol(n.current, null), fr = Sa = r, $n = 0, yu = null, Ns = Su = gu = 0, ia = go = null, ou !== null) {
      for (r = 0; r < ou.length; r++) if (l = ou[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      ou = null;
    }
    return n;
  }
  function sf(n, r) {
    do {
      var l = kn;
      try {
        if (gd(), ke.current = It, Dc) {
          for (var o = Ze.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (Tt = 0, Yn = Xt = Ze = null, ys = !1, gs = 0, mu.current = null, l === null || l.return === null) {
          $n = 1, yu = r, kn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = fr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var pe = Ld(m);
            if (pe !== null) {
              pe.flags &= -257, Qv(pe, m, E, d, r), pe.mode & 1 && Nd(d, U, r), r = pe, T = U;
              var Ee = r.updateQueue;
              if (Ee === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(T), r.updateQueue = we;
              } else Ee.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Bd();
                break e;
              }
              T = Error(L(426));
            }
          } else if (cn && E.mode & 1) {
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
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Fa === null || !Fa.has(N)))) {
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
    return lf.current = It, n === null ? It : n;
  }
  function Bd() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Hn === null || !(gu & 268435455) && !(Su & 268435455) || Dl(Hn, fr);
  }
  function cf(n, r) {
    var l = ht;
    ht |= 2;
    var o = ah();
    (Hn !== n || fr !== r) && (Gi = null, Ru(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (gd(), ht = l, lf.current = o, kn !== null) throw Error(L(261));
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
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : kn = r, mu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Xv(l, r), l !== null) {
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
  function Tu(n, r, l) {
    var o = bt, c = kr.transition;
    try {
      kr.transition = null, bt = 1, py(n, r, l, o);
    } finally {
      kr.transition = c, bt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Ro();
    while (kl !== null);
    if (ht & 6) throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Hn && (kn = Hn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(zi, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = bt;
      bt = 1;
      var E = ht;
      ht |= 4, mu.current = null, cy(n, l), Jv(l, n), Cv(us), cl = !!nu, us = nu = null, n.current = l, Ds(l), qa(), ht = E, bt = m, kr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, kl = n, Ms = c), d = n.pendingLanes, d === 0 && (Fa = null), Bo(l.stateNode), nr(n, At()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (_l) throw _l = !1, n = Ls, Ls = null, n;
    return Ms & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (kl !== null) {
      var n = Qo(Ms), r = kr.transition, l = bt;
      try {
        if (kr.transition = null, bt = 16 > n ? 16 : n, kl === null) var o = !1;
        else {
          if (n = kl, kl = null, Ms = 0, ht & 6) throw Error(L(331));
          var c = ht;
          for (ht |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (me = U; me !== null; ) {
                    var Q = me;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, me = W;
                    else for (; me !== null; ) {
                      Q = me;
                      var $ = Q.sibling, pe = Q.return;
                      if (Kv(Q), Q === U) {
                        me = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = pe, me = $;
                        break;
                      }
                      me = pe;
                    }
                  }
                }
                var Ee = d.alternate;
                if (Ee !== null) {
                  var we = Ee.child;
                  if (we !== null) {
                    Ee.child = null;
                    do {
                      var Dn = we.sibling;
                      we.sibling = null, we = Dn;
                    } while (we !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, me = k;
                break e;
              }
              me = d.return;
            }
          }
          var x = n.current;
          for (me = x; me !== null; ) {
            m = me;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, me = N;
            else e: for (m = x; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (se) {
                Cn(E, E.return, se);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var X = E.sibling;
              if (X !== null) {
                X.return = E.return, me = X;
                break e;
              }
              me = E.return;
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
        bt = l, kr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Cl(n, r, 1), r = nn(), n !== null && (sl(n, 1, r), nr(n, r));
  }
  function Cn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fa === null || !Fa.has(o))) {
          n = xl(l, n), n = $v(r, n, 1), r = Cl(r, n, 1), n = nn(), r !== null && (sl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nn(), n.pingedLanes |= n.suspendedLanes & l, Hn === n && (fr & l) === l && ($n === 4 || $n === 3 && (fr & 130023424) === fr && 500 > At() - Pd ? Ru(n, 0) : Ns |= l), nr(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = nn();
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
        throw Error(L(314));
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
    else tr = !1, cn && r.flags & 1048576 && Lv(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = ma(r, vn.current);
        lo(r, l), c = Ae(null, r, o, n, c, l);
        var d = Rl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, En(o) ? (d = !0, iu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, El(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, cn && d && dd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = na(o, n), c) {
            case 0:
              r = Xc(null, r, o, n, l);
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
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Xc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (Kc(r), n === null) throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(L(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(L(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Jr = Ja(r.stateNode.containerInfo.firstChild), Zr = r, cn = !0, ti = null, l = or(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return wd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ru(o, c) ? m = null : d !== null && ru(o, d) && (r.flags |= 32), xs(n, r), _n(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Wv(n, r, l);
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, tn(ne, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
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
              if (m = d.return, m === null) throw Error(L(341));
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
        return vu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Aa(n, r), r.tag = 1, En(o) ? (n = !0, iu(r)) : n = !1, lo(r, l), Iv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return aa(n, r, l);
      case 22:
        return et(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function oh(n, r) {
    return an(n, r);
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
      if (n = n.$$typeof, n === $t) return 11;
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
      case dt:
        return Nl(l.children, c, d, r);
      case Be:
        m = 8, c |= 8;
        break;
      case Tn:
        return n = Ha(12, l, r, c | 2), n.elementType = Tn, n.lanes = d, n;
      case Ct:
        return n = Ha(13, l, r, c), n.elementType = Ct, n.lanes = d, n;
      case ze:
        return n = Ha(19, l, r, c), n.elementType = ze, n.lanes = d, n;
      case lt:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Mt:
            m = 10;
            break e;
          case dn:
            m = 9;
            break e;
          case $t:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case yt:
            m = 16, o = null;
            break e;
        }
        throw Error(L(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nl(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = lt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return ot;
    n = n._reactInternals;
    e: {
      if (ue(n) !== n || n.tag !== 1) throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (En(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (En(l)) return Nv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = fh(null), l = n.current, o = nn(), c = Ea(l), d = Qi(o, c), d.callback = r ?? null, Cl(l, d, c), n.current.lanes = c, sl(n, c, o), nr(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = nn(), m = Ea(c);
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
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ll(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Ll.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(L(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Ll.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Cu(function() {
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
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function Xd(n) {
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
      return n._reactRootContainer = m, n[Yi] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(), m;
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
    return n._reactRootContainer = T, n[Yi] = T.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(function() {
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
        Cu(function() {
          var o = Si(n, 1);
          if (o !== null) {
            var c = nn();
            Ca(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, _t = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var l = nn();
        Ca(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Si(n, r);
      if (l !== null) {
        var o = nn();
        Ca(l, n, r, o);
      }
      hf(n, r);
    }
  }, pi = function() {
    return bt;
  }, Ie = function(n, r) {
    var l = bt;
    try {
      return bt = n, r();
    } finally {
      bt = l;
    }
  }, Qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Mn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(L(90));
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
  }, Il = of, $l = Cu;
  var hh = { usingClientEntryPoint: !1, Events: [ss, _e, Ii, ka, Ni, of] }, Hs = { findFiberByHostInstance: au, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = rt(n), n === null ? null : n.stateNode;
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
    if (!Xd(r)) throw Error(L(200));
    return ch(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(L(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Ll(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = rt(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Cu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(L(200));
    return gf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(L(200));
    return gf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(L(40));
    return n._reactRootContainer ? (Cu(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = of, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(L(200));
    if (n == null || n._reactInternals === void 0) throw Error(L(38));
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
    var oe = ju, L = uT(), mt = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = !1;
    function St(e) {
      Ve = e;
    }
    function Et(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("warn", e, a);
      }
    }
    function S(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("error", e, a);
      }
    }
    function st(e, t, a) {
      {
        var i = mt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Re = 0, fe = 1, Pe = 2, Z = 3, Ue = 4, ie = 5, xe = 6, it = 7, Rn = 8, Jt = 9, te = 10, ye = 11, tt = 12, Te = 13, dt = 14, Be = 15, Tn = 16, Mt = 17, dn = 18, $t = 19, Ct = 21, ze = 22, jt = 23, yt = 24, lt = 25, Y = !0, Se = !1, re = !1, _ = !1, B = !1, De = !0, Ye = !0, Qe = !0, ut = !0, xt = /* @__PURE__ */ new Set(), qe = {}, Rt = {};
    function Vt(e, t) {
      Nn(e, t), Nn(e + "Capture", t);
    }
    function Nn(e, t) {
      qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), qe[e] = t;
      {
        var a = e.toLowerCase();
        Rt[a] = e, e === "onDoubleClick" && (Rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        xt.add(t[i]);
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
    function qn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    var Xn = 0, Cr = 1, Ga = 2, zn = 3, ir = 4, $r = 5, Oi = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ne = new RegExp("^[" + da + "][" + J + "]*$"), nt = {}, zt = {};
    function ln(e) {
      return ar.call(zt, e) ? !0 : ar.call(nt, e) ? !1 : Ne.test(e) ? (zt[e] = !0, !0) : (nt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function un(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === Xn)
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
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
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
    function rn(e) {
      return Ut.hasOwnProperty(e) ? Ut[e] : null;
    }
    function Qt(e, t, a, i, u, s, f) {
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
      Ut[e] = new Qt(
        e,
        Xn,
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
      Ut[t] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[e] = new Qt(
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
      Ut[t] = new Qt(
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
      Ut[t] = new Qt(
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
      Ut[t] = new Qt(
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
      Ut[e] = new Qt(
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
    Ut[Ni] = new Qt(
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
      Ut[e] = new Qt(
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
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $l = !1;
    function Li(e) {
      !$l && Il.test(e) && ($l = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === zn)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Mn(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = rn(t);
      if (!un(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (ln(t)) {
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
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), rt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, At = "@@iterator";
    function pn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[At];
      return typeof t == "function" ? t : null;
    }
    var Ke = Object.assign, fi = 0, zi, ic, Ui, ll, Wr, Bo, Or;
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
            log: Ke({}, e, {
              value: zi
            }),
            info: Ke({}, e, {
              value: ic
            }),
            warn: Ke({}, e, {
              value: Ui
            }),
            error: Ke({}, e, {
              value: ll
            }),
            group: Ke({}, e, {
              value: Wr
            }),
            groupCollapsed: Ke({}, e, {
              value: Bo
            }),
            groupEnd: Ke({}, e, {
              value: Or
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = mt.ReactCurrentDispatcher, ul;
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
    function Wl(e, t, a) {
      return ji(e, !0);
    }
    function Gl(e, t, a) {
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
            return Gl(e.render);
          case ct:
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
        case Tn:
          return Gr("Lazy");
        case Te:
          return Gr("Suspense");
        case $t:
          return Gr("SuspenseList");
        case Re:
        case Pe:
        case Be:
          return Gl(e.type);
        case ye:
          return Gl(e.type.render);
        case fe:
          return Wl(e.type);
        default:
          return "";
      }
    }
    function bt(e) {
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
    function _t(e) {
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
          case ct:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case We: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
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
        case yt:
          return "Cache";
        case Jt:
          var i = a;
          return pi(i) + ".Consumer";
        case te:
          var u = a;
          return pi(u._context) + ".Provider";
        case dn:
          return "DehydratedFragment";
        case ye:
          return oc(a, a.render, "ForwardRef");
        case it:
          return "Fragment";
        case ie:
          return a;
        case Ue:
          return "Portal";
        case Z:
          return "Root";
        case xe:
          return "Text";
        case Tn:
          return _t(a);
        case Rn:
          return a === si ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case tt:
          return "Profiler";
        case Ct:
          return "Scope";
        case Te:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case lt:
          return "TracingMarker";
        case fe:
        case Re:
        case Mt:
        case Pe:
        case dt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = mt.ReactDebugCurrentFrame, Zn = null, qr = !1;
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
      return Zn === null ? "" : bt(Zn);
    }
    function gn() {
      ql.getCurrentStack = null, Zn = null, qr = !1;
    }
    function Wt(e) {
      ql.getCurrentStack = e === null ? null : vi, Zn = e, qr = !1;
    }
    function Xa() {
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
    function Kl(e) {
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
    function cl(e) {
      if (!e)
        return !1;
      var t = Vu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Kl(e);
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
      var a = e, i = t.checked, u = Ke({}, t, {
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
      C(a, t), K(a, t);
    }
    function K(e, t) {
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
    var de = !1, je = !1, at = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? oe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || je || (je = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (at || (at = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !de && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), de = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var qt = Array.isArray;
    function Je(e) {
      return qt(e);
    }
    var en;
    en = !1;
    function xn() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Go(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
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
    function Jl(e, t) {
      return Ke({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !en && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), en = !0);
    }
    function Xf(e, t) {
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
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ke({}, t, {
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
    var Ka = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return qm;
        default:
          return Ka;
      }
    }
    function fc(e, t) {
      return e == null || e === Ka ? Jf(t) : e === Zf && t === "foreignObject" ? Ka : e;
    }
    var Xm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = Xm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Vi = 3, Un = 8, Bi = 9, Xo = 11, dl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Km = {
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
      var Jm = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, fv = /-(.)/g, Gu = /;\s*$/, hi = {}, ed = {}, Ko = !1, dv = !1, pv = function(e) {
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
        Ko || (Ko = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
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
        for (var i = Km[a] || [a], u = 0; u < i.length; u++)
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
    }, Sv = Ke({
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
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + J + "]*$"), rd = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function Jo(e, t) {
      {
        if (ar.call(Xu, t) && Xu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
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
        var v = rn(t), y = v !== null && v.type === Xn;
        if (qu.hasOwnProperty(u)) {
          var g = qu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === zn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
    var id = 1, mi = 2, eu = 4, ld = id | mi | eu, ns = null;
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
    }, tu = function() {
    }, gc = !1;
    function iy() {
      var e = od();
      e && (tu(), Ju());
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
      ls = e, tu = a;
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
    function nu(e, t) {
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
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
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
          Rc.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, le), w = !1;
        }
        var be, Dt = !1, gt = !1;
        function D(O) {
          if (be = O.error, Dt = !0, be === null && O.colno === 0 && O.lineno === 0 && (gt = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Rc.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), Rc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (Dt ? gt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", D), !b)
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
    function au(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), Sn = (
      /*                    */
      2
    ), vt = (
      /*                       */
      4
    ), Kr = (
      /*                */
      16
    ), Bt = (
      /*                 */
      32
    ), tn = (
      /*                     */
      64
    ), ot = (
      /*                   */
      128
    ), vn = (
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
    ), En = (
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
    ), iu = (
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
    ), ao = Sn | vt | Kr | Bt | An | En | yi, gl = vt | tn | An | yi, ur = ma | Kr, jn = hl | fd | fs, lu = mt.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Sn | En)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
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
    function Sl(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = lu.current;
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
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Jr(e) {
      var t = Zr(e);
      return t !== null ? cn(t) : null;
    }
    function cn(e) {
      if (e.tag === ie || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = cn(t);
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
      if (e.tag === ie || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ue) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = L.unstable_scheduleCallback, hd = L.unstable_cancelCallback, md = L.unstable_shouldYield, Mv = L.unstable_requestPaint, bn = L.unstable_now, zv = L.unstable_getCurrentPriorityLevel, $i = L.unstable_ImmediatePriority, ds = L.unstable_UserBlockingPriority, uu = L.unstable_NormalPriority, ps = L.unstable_LowPriority, io = L.unstable_IdlePriority, Uv = L.unstable_yieldValue, Av = L.unstable_setDisableYieldValue, ni = null, or = null, ne = null, ya = !1, br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ye && (e = Ke({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: ou
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
          var a = (e.current.flags & ot) === ot;
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
                i = uu;
                break;
              case tf:
                i = io;
                break;
              default:
                i = uu;
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
      if (typeof Uv == "function" && (Av(e), St(e)), or && typeof or.setStrictMode == "function")
        try {
          or.setStrictMode(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ou(e) {
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
    function su() {
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
    function hn() {
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
    var ke = (
      /*                         */
      0
    ), ft = (
      /*                 */
      1
    ), Tt = (
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
    ), Ae = (
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
    ), cu = (
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
    ), fu = (
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
    ), du = (
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
    ), Pv = du, po = (
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
        if (e & Ae)
          return "Sync";
        if (e & Rl)
          return "InputContinuousHydration";
        if (e & Jn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & cu)
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
    var It = -1, Ic = so, $c = du;
    function Ts(e) {
      switch (pu(e)) {
        case Ae:
          return Ae;
        case Rl:
          return Rl;
        case Jn:
          return Jn;
        case er:
          return er;
        case ea:
          return ea;
        case cu:
          return cu;
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case fu:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return e & Tl;
        case du:
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
        var g = pu(i), b = pu(t);
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
      for (var a = e.eventTimes, i = It; t > 0; ) {
        var u = _n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case Ae:
        case Rl:
        case Jn:
          return t + 250;
        case er:
        case ea:
        case cu:
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case fu:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return t + 5e3;
        case du:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          return It;
        case po:
        case Rs:
        case wl:
        case ta:
          return It;
        default:
          return S("Should have found matching lanes. This is a bug in React."), It;
      }
    }
    function Yv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === It ? ((v & i) === P || (v & u) !== P) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
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
      return (e & Ae) !== P;
    }
    function xl(e) {
      return (e & Vv) !== P;
    }
    function Gc(e) {
      return (e & Es) === e;
    }
    function Od(e) {
      var t = Ae | Jn | ea;
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
      return $c <<= 1, ($c & Es) === P && ($c = du), e;
    }
    function pu(e) {
      return e & -e;
    }
    function tr(e) {
      return pu(e);
    }
    function _n(e) {
      return 31 - Yn(e);
    }
    function qc(e) {
      return _n(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function vu(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _n(i), s = 1 << u;
        a[u] = It, i &= ~s;
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
        i[p] = P, u[p] = It, s[p] = It, f &= ~v;
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
      var a = pu(t), i;
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
        case fu:
        case jc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
        case du:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          i = cu;
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
    var aa = Ae, Aa = Jn, sr = ea, tf = wl, ho = Fn;
    function ga() {
      return ho;
    }
    function In(e) {
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
    function Xv(e) {
      var t = pu(e);
      return Ad(aa, t) ? Ad(Aa, t) ? xl(t) ? sr : tf : Aa : aa;
    }
    function hu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var cr;
    function sy(e) {
      cr = e;
    }
    function me(e) {
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
    function Kv(e) {
      rf = e;
    }
    var af = !1, ks = [], Ci = null, Ri = null, mn = null, Ur = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Wi = [], Zv = [
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
          mn = null;
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
          return mn = Ds(mn, e, t, a, i, p), !0;
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
          if (i === Te) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (hu(s)) {
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
      af = !1, Ci !== null && Os(Ci) && (Ci = null), Ri !== null && Os(Ri) && (Ri = null), mn !== null && Os(mn) && (mn = null), Ur.forEach(nh), ja.forEach(nh);
    }
    function mu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, L.unstable_scheduleCallback(L.unstable_NormalPriority, lf)));
    }
    function kr(e) {
      if (ks.length > 0) {
        mu(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ci !== null && mu(Ci, e), Ri !== null && mu(Ri, e), mn !== null && mu(mn, e);
      var i = function(p) {
        return mu(p, e);
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
    var ht = mt.ReactCurrentBatchConfig, Hn = !0;
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
          u = yu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        In(aa), yu(e, t, a, i);
      } finally {
        In(u), ht.transition = s;
      }
    }
    function $n(e, t, a, i) {
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        In(Aa), yu(e, t, a, i);
      } finally {
        In(u), ht.transition = s;
      }
    }
    function yu(e, t, a, i) {
      Hn && gu(e, t, a, i);
    }
    function gu(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Su, a), ai(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ai(e, i), t & eu && ri(e)) {
        for (; u !== null; ) {
          var s = bo(u);
          s !== null && me(s);
          var f = Ns(e, t, a, i);
          if (f === null && _y(e, t, i, Su, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Su = null;
    function Ns(e, t, a, i) {
      Su = null;
      var u = mc(i), s = Ys(u);
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
          } else if (p === Z) {
            var y = f.stateNode;
            if (hu(y))
              return Sl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Su = s, null;
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
            case uu:
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
    function Eu() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function nn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Eu : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return Ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Eu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Eu);
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
        isPersistent: Eu
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
    }, Ca = nn(Ea), nr = Ke({}, Ea, {
      view: 0,
      detail: 0
    }), rh = nn(nr), Us, As, js;
    function Dl(e) {
      e !== js && (js && e.type === "mousemove" ? (Us = e.screenX - js.screenX, As = e.screenY - js.screenY) : (Us = 0, As = 0), js = e);
    }
    var Fs = Ke({}, nr, {
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
    }), of = nn(Fs), Cu = Ke({}, Fs, {
      dataTransfer: 0
    }), Vd = nn(Cu), Ru = Ke({}, nr, {
      relatedTarget: 0
    }), sf = nn(Ru), ah = Ke({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = nn(ah), cf = Ke({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = nn(cf), dy = Ke({}, Ea, {
      data: 0
    }), Yd = nn(dy), ih = Yd, Tu = {
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
        var t = Tu[e.key] || e.key;
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
    function Cn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = lh[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return Cn;
    }
    var uh = Ke({}, nr, {
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
    }), vy = nn(uh), hy = Ke({}, Fs, {
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
    }), $d = nn(hy), oh = Ke({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), my = nn(oh), Ha = Ke({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = nn(Ha), yy = Ke({}, Fs, {
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
    }), Ol = nn(yy), ff = [9, 13, 27, 32], Nl = 229, To = Gn && "CompositionEvent" in window, wu = null;
    Gn && "documentMode" in document && (wu = document.documentMode);
    var Wd = Gn && "TextEvent" in window && !wu, sh = Gn && (!To || wu && wu > 8 && wu <= 11), df = 32, ch = String.fromCharCode(df);
    function fh() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function qd(e) {
      return e.locale === "ko";
    }
    var Ll = !1;
    function mf(e, t, a, i, u) {
      var s, f;
      if (To ? s = vf(t) : Ll ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !qd(i) && (!Ll && s === "onCompositionStart" ? Ll = uf(u) : s === "onCompositionEnd" && Ll && (f = Ms()));
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
    function Xd(e, t) {
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
          return sh && !qd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, i, u) {
      var s;
      if (Wd ? s = Xd(t, i) : s = yf(t, i), !s)
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
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
    function W(e, t, a) {
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
    function we(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Dn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ge(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : hh(p) ? E ? v = we : (v = $, y = W) : pe(p) && (v = Ee), v) {
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
    function N(e, t, a, i, u, s, f) {
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
            (z !== F || z.tag !== ie && z.tag !== xe) && (z = null);
          }
        } else
          w = null, z = a;
        if (w !== z) {
          var le = of, Le = "onMouseLeave", be = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = $d, Le = "onPointerLeave", be = "onPointerEnter", Dt = "pointer");
          var gt = w == null ? g : wf(w), D = z == null ? g : wf(z), H = new le(Le, Dt + "leave", w, i, u);
          H.target = gt, H.relatedTarget = D;
          var O = null, G = Ys(u);
          if (G === a) {
            var he = new le(be, Dt + "enter", z, i, u);
            he.target = D, he.relatedTarget = gt, O = he;
          }
          DT(e, H, O, w, z);
        }
      }
    }
    function X(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : X;
    function Oe(e, t) {
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
    function Me(e) {
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
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me($e(a));
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
          s.nodeType === Xr && u.push({
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
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Ry = null, Kd = null, Ty = !1;
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
        if (!Kd || !Oe(Kd, u)) {
          Kd = u;
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
          (hh(p) || p.contentEditable === "true") && (Sf = p, Ry = a, Kd = null);
          break;
        case "focusout":
          Sf = null, Ry = null, Kd = null;
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
      x0.set(e, t), Vt(t, [e]);
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
        var g = (s & eu) !== 0;
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
      p && (N(e, t, a, i, u), k(e, t, a, i, u), CT(e, t, a, i, u), gy(e, t, a, i, u));
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
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      Yi();
    }
    function bT(e, t, a, i, u) {
      var s = mc(a), f = [];
      wT(f, e, i, a, s, t), k0(f, t);
    }
    function yn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nx(t), u = OT(e);
      i.has(u) || (D0(t, e, mi, a), i.add(u));
    }
    function by(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), D0(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[gh]) {
        e[gh] = !0, xt.forEach(function(a) {
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
            if (v === Z || v === Ue) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Ue)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === Z || b === Ue) {
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
                if (A === ie || A === xe) {
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
          var A = nu(y, p);
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
          var v = f, y = nu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = nu(u, t);
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
            var z = nu(p, s);
            z != null && f.unshift(ep(p, z, w));
          } else if (!u) {
            var A = nu(p, s);
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
        registrationNameDependencies: qe,
        possibleRegistrationNames: Rt
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
      var a = e.namespaceURI === Ka ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
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
          else s === Eh || s === xo || s === L0 || (qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && yn("scroll", t)) : f != null && va(t, s, f, u));
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
      if (p === Ka && (p = Jf(e)), p === Ka) {
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
      return p === Ka && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ar.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
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
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            yn(Zd[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          $u(e, a), s = La(e, a), yn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = Jl(e, a), yn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), yn("invalid", e);
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
          Gt(e, a);
          break;
        case "select":
          Xf(e, a);
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
          f = Jl(e, a), p = Jl(e, i), s = [];
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
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === xo || (qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && yn("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(v, w));
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
        return qu.hasOwnProperty(t) && qu[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pl(t, a), Rh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            yn(Zd[y], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          $u(e, a), yn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          qo(e, a), yn("invalid", e);
          break;
        case "textarea":
          nv(e, a), yn("invalid", e);
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
            F != null && (typeof F != "function" && Th(A, F), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Le = rn(A);
            if (a[xo] !== !0) {
              if (!(A === Eh || A === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var be = e.innerHTML, Dt = F ? F[Ch] : void 0;
                  if (Dt != null) {
                    var gt = U0(e, Dt);
                    gt !== be && np(A, be, gt);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), z0) {
                    var D = ty(F);
                    le = e.getAttribute("style"), D !== le && np(A, le, D);
                  }
                } else if (p && !B)
                  v.delete(A.toLowerCase()), le = oi(e, A, F), F !== le && np(A, le, F);
                else if (!un(A, Le, p) && !Kn(A, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), le = Ql(e, A, F, Le);
                  else {
                    var O = i;
                    if (O === Ka && (O = Jf(t)), O === Ka)
                      v.delete(A.toLowerCase());
                    else {
                      var G = VT(A);
                      G !== null && G !== A && (H = !0, v.delete(G)), v.delete(A);
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
          Kf(e, a);
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
        var a = Ke({}, e || F0), i = {
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
      }, qT = function(e, t) {
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
        var s = GT(e, u) ? null : i, f = s ? null : qT(e, a), p = s || f;
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
    function KT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case Xo: {
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
      e.nodeType === Un ? Fy(e.parentNode, t) : e.nodeType === Xr && Fy(e, t), kr(e);
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
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function Tw(e, t) {
      e.nodeValue = t;
    }
    function ww(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function xw(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
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
        if (t === Xr || t === Vi)
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
      var y = (s.mode & ft) !== ke;
      return BT(e, t, a, p, i, y, f);
    }
    function zw(e, t, a, i) {
      return sp(a, e), a.mode & ft, YT(e, t);
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
      t.nodeType === Xr ? Dy(e, t) : t.nodeType === Un || Oy(e, t);
    }
    function Yw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? Dy(a, t) : t.nodeType === Un || Oy(a, t));
      }
    }
    function Iw(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Xr ? Dy(a, i) : i.nodeType === Un || Oy(a, i));
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
    function qw(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function Xw(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function Kw(e) {
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
      return t && (t.tag === ie || t.tag === xe || t.tag === Te || t.tag === Z) ? t : null;
    }
    function wf(e) {
      if (e.tag === ie || e.tag === xe)
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
    var $0 = {}, Q0 = mt.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
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
    var Yy = [], zh;
    zh = [];
    var xu = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[xu] && S("Unexpected Fiber popped."), e.current = Yy[xu], Yy[xu] = null, zh[xu] = null, xu--;
    }
    function ua(e, t, a) {
      xu++, Yy[xu] = e.current, zh[xu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ii = {};
    Object.freeze(ii);
    var bu = _o(ii), zl = _o(!1), $y = ii;
    function xf(e, t, a) {
      return a && Ul(t) ? $y : bu.current;
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
          qi(i, s, "context", p);
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
      la(zl, e), la(bu, e);
    }
    function Qy(e) {
      la(zl, e), la(bu, e);
    }
    function G0(e, t, a) {
      {
        if (bu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(bu, t, e), ua(zl, a, e);
      }
    }
    function q0(e, t, a) {
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
          qi(u, f, "child context", v);
        }
        return Ke({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return $y = bu.current, ua(bu, a, e), ua(zl, zl.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, la(zl, e), la(bu, e), ua(bu, u, e), ua(zl, a, e);
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
            case Z:
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
    var ko = 0, Fh = 1, _u = null, Wy = !1, Gy = !1;
    function K0(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    function ax(e) {
      Wy = !0, K0(e);
    }
    function Z0() {
      Wy && Do();
    }
    function Do() {
      if (!Gy && _u !== null) {
        Gy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = _u;
          for (In(aa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          _u = null, Wy = !1;
        } catch (s) {
          throw _u !== null && (_u = _u.slice(e + 1)), vd($i, Do), s;
        } finally {
          In(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Hh = null, Ph = 0, Ti = [], wi = 0, Is = null, ku = 1, Du = "";
    function ix(e) {
      return Qs(), (e.flags & cs) !== _e;
    }
    function lx(e) {
      return Qs(), Ph;
    }
    function ux() {
      var e = Du, t = ku, a = t & ~ox(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), _f[kf++] = Ph, _f[kf++] = Hh, Hh = e, Ph = t;
    }
    function J0(e, t, a) {
      Qs(), Ti[wi++] = ku, Ti[wi++] = Du, Ti[wi++] = Is, Is = e;
      var i = ku, u = Du, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, z = s - y, A = Vh(t) + z, F = p << z, le = F | w, Le = b + u;
        ku = 1 << A | le, Du = Le;
      } else {
        var be = p << s, Dt = be | f, gt = u;
        ku = 1 << v | Dt, Du = gt;
      }
    }
    function qy(e) {
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
    function Xy(e) {
      for (; e === Hh; )
        Hh = _f[--kf], _f[kf] = null, Ph = _f[--kf], _f[kf] = null;
      for (; e === Is; )
        Is = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null, ku = Ti[--wi], Ti[wi] = null;
    }
    function sx() {
      return Qs(), Is !== null ? {
        id: ku,
        overflow: Du
      } : null;
    }
    function cx(e, t) {
      Qs(), Ti[wi++] = ku, Ti[wi++] = Du, Ti[wi++] = Is, ku = t.id, Du = t.overflow, Is = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, Xi = !1, Ws = !1, Oo = null;
    function fx() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Ws = !0;
    }
    function dx() {
      return Ws;
    }
    function px(e) {
      var t = e.stateNode.containerInfo;
      return xi = Nw(t), Ar = e, Xi = !0, Oo = null, Ws = !1, !0;
    }
    function vx(e, t, a) {
      return xi = Lw(t), Ar = e, Xi = !0, Oo = null, Ws = !1, a !== null && cx(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case Z: {
          Bw(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ft) !== ke;
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
        case Te: {
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
      i === null ? (e.deletions = [a], e.flags |= Kr) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, $w(a, i);
                break;
              case xe:
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
                var v = t.type, y = t.pendingProps, g = (e.mode & ft) !== ke;
                qw(
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
                var b = t.pendingProps, w = (e.mode & ft) !== ke;
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
              case ie:
                var F = t.type;
                t.pendingProps, Ww(A, F);
                break;
              case xe:
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
      t.flags = t.flags & ~En | Sn, Ky(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = xw(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Ow(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = bw(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case Te: {
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
      return (e.mode & ft) !== ke && (e.flags & ot) === _e;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Xi) {
        var t = xi;
        if (!t) {
          Zy(e) && (Ky(Ar, e), Jy()), rE(Ar, e), Xi = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Zy(e) && (Ky(Ar, e), Jy()), t = up(a);
          var i = Ar;
          if (!t || !aE(e, t)) {
            rE(Ar, e), Xi = !1, Ar = e;
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
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & ft) !== ke;
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
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ft) !== ke;
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
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== Z && t.tag !== Te; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!Xi)
        return iE(e), Xi = !0, !1;
      if (e.tag !== Z && (e.tag !== ie || Hw(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Zy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = up(t);
      }
      return iE(e), e.tag === Te ? xi = gx(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function Sx() {
      return Xi && xi !== null;
    }
    function lE(e) {
      for (var t = xi; t; )
        tE(e, t), t = up(t);
    }
    function Df() {
      Ar = null, xi = null, Xi = !1, Ws = !1;
    }
    function uE() {
      Oo !== null && (eR(Oo), Oo = null);
    }
    function jr() {
      return Xi;
    }
    function tg(e) {
      Oo === null ? Oo = [e] : Oo.push(e);
    }
    var Ex = mt.ReactCurrentBatchConfig, Cx = null;
    function Rx() {
      return Ex.transition;
    }
    var Ki = {
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
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Ki.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Ze && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Ki.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ie(w) || "Component"), qs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ie(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ie(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ie(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ie(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ie(w) || "Component"), qs.add(w.type);
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
          Et(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          Et(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Gs(u);
          Et(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Ki.recordLegacyContextWarning = function(e, t) {
        var a = Tx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, Ki.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), oE.add(s.type);
            });
            var u = Gs(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              gn();
            }
          }
        });
      }, Ki.discardPendingWarnings = function() {
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
        if ((e.mode & Ze || De) && // We warn in ReactElement.js if owner and self are equal for string refs
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
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Kr) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(D, H) {
        var O = ac(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= cs, H;
        var G = D.alternate;
        if (G !== null) {
          var he = G.index;
          return he < H ? (D.flags |= Sn, H) : he;
        } else
          return D.flags |= Sn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Sn), D;
      }
      function p(D, H, O, G) {
        if (H === null || H.tag !== xe) {
          var he = t0(O, D.mode, G);
          return he.return = D, he;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, G) {
        var he = O.type;
        if (he === Qr)
          return g(D, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === he || // Keep this check inline so it only runs on the false path:
        mR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === We && cE(he) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = yp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var Fe = e0(O, D.mode, G);
        return Fe.ref = yp(D, H, O), Fe.return = D, Fe;
      }
      function y(D, H, O, G) {
        if (H === null || H.tag !== Ue || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var he = n0(O, D.mode, G);
          return he.return = D, he;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, G, he) {
        if (H === null || H.tag !== it) {
          var ce = Vo(O, D.mode, G, he);
          return ce.return = D, ce;
        } else {
          var Fe = u(H, O);
          return Fe.return = D, Fe;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = t0("" + H, D.mode, O);
          return G.return = D, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case lr: {
              var he = e0(H, D.mode, O);
              return he.ref = yp(D, null, H), he.return = D, he;
            }
            case ha: {
              var ce = n0(H, D.mode, O);
              return ce.return = D, ce;
            }
            case We: {
              var Fe = H._payload, Xe = H._init;
              return b(D, Xe(Fe), O);
            }
          }
          if (Je(H) || pn(H)) {
            var Zt = Vo(H, D.mode, O, null);
            return Zt.return = D, Zt;
          }
          Ih(D, H);
        }
        return typeof H == "function" && $h(D), null;
      }
      function w(D, H, O, G) {
        var he = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return he !== null ? null : p(D, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case lr:
              return O.key === he ? v(D, H, O, G) : null;
            case ha:
              return O.key === he ? y(D, H, O, G) : null;
            case We: {
              var ce = O._payload, Fe = O._init;
              return w(D, H, Fe(ce), G);
            }
          }
          if (Je(O) || pn(O))
            return he !== null ? null : g(D, H, O, G, null);
          Ih(D, O);
        }
        return typeof O == "function" && $h(D), null;
      }
      function z(D, H, O, G, he) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + G, he);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case lr: {
              var Fe = D.get(G.key === null ? O : G.key) || null;
              return v(H, Fe, G, he);
            }
            case ha: {
              var Xe = D.get(G.key === null ? O : G.key) || null;
              return y(H, Xe, G, he);
            }
            case We:
              var Zt = G._payload, Nt = G._init;
              return z(D, H, O, Nt(Zt), he);
          }
          if (Je(G) || pn(G)) {
            var Wn = D.get(O) || null;
            return g(H, Wn, G, he, null);
          }
          Ih(H, G);
        }
        return typeof G == "function" && $h(H), null;
      }
      function A(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case lr:
            case ha:
              sE(D, O);
              var G = D.key;
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
            case We:
              var he = D._payload, ce = D._init;
              A(ce(he), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, G) {
        for (var he = null, ce = 0; ce < O.length; ce++) {
          var Fe = O[ce];
          he = A(Fe, he, D);
        }
        for (var Xe = null, Zt = null, Nt = H, Wn = 0, Lt = 0, Pn = null; Nt !== null && Lt < O.length; Lt++) {
          Nt.index > Lt ? (Pn = Nt, Nt = null) : Pn = Nt.sibling;
          var sa = w(D, Nt, O[Lt], G);
          if (sa === null) {
            Nt === null && (Nt = Pn);
            break;
          }
          e && Nt && sa.alternate === null && t(D, Nt), Wn = s(sa, Wn, Lt), Zt === null ? Xe = sa : Zt.sibling = sa, Zt = sa, Nt = Pn;
        }
        if (Lt === O.length) {
          if (a(D, Nt), jr()) {
            var Ir = Lt;
            $s(D, Ir);
          }
          return Xe;
        }
        if (Nt === null) {
          for (; Lt < O.length; Lt++) {
            var ui = b(D, O[Lt], G);
            ui !== null && (Wn = s(ui, Wn, Lt), Zt === null ? Xe = ui : Zt.sibling = ui, Zt = ui);
          }
          if (jr()) {
            var xa = Lt;
            $s(D, xa);
          }
          return Xe;
        }
        for (var ba = i(D, Nt); Lt < O.length; Lt++) {
          var ca = z(ba, D, Lt, O[Lt], G);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? Lt : ca.key), Wn = s(ca, Wn, Lt), Zt === null ? Xe = ca : Zt.sibling = ca, Zt = ca);
        }
        if (e && ba.forEach(function(Gf) {
          return t(D, Gf);
        }), jr()) {
          var Au = Lt;
          $s(D, Au);
        }
        return Xe;
      }
      function le(D, H, O, G) {
        var he = pn(O);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === he && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var ce = he.call(O);
          if (ce)
            for (var Fe = null, Xe = ce.next(); !Xe.done; Xe = ce.next()) {
              var Zt = Xe.value;
              Fe = A(Zt, Fe, D);
            }
        }
        var Nt = he.call(O);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Lt = null, Pn = H, sa = 0, Ir = 0, ui = null, xa = Nt.next(); Pn !== null && !xa.done; Ir++, xa = Nt.next()) {
          Pn.index > Ir ? (ui = Pn, Pn = null) : ui = Pn.sibling;
          var ba = w(D, Pn, xa.value, G);
          if (ba === null) {
            Pn === null && (Pn = ui);
            break;
          }
          e && Pn && ba.alternate === null && t(D, Pn), sa = s(ba, sa, Ir), Lt === null ? Wn = ba : Lt.sibling = ba, Lt = ba, Pn = ui;
        }
        if (xa.done) {
          if (a(D, Pn), jr()) {
            var ca = Ir;
            $s(D, ca);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !xa.done; Ir++, xa = Nt.next()) {
            var Au = b(D, xa.value, G);
            Au !== null && (sa = s(Au, sa, Ir), Lt === null ? Wn = Au : Lt.sibling = Au, Lt = Au);
          }
          if (jr()) {
            var Gf = Ir;
            $s(D, Gf);
          }
          return Wn;
        }
        for (var qp = i(D, Pn); !xa.done; Ir++, xa = Nt.next()) {
          var Yl = z(qp, D, Ir, xa.value, G);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Ir : Yl.key), sa = s(Yl, sa, Ir), Lt === null ? Wn = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && qp.forEach(function(X_) {
          return t(D, X_);
        }), jr()) {
          var q_ = Ir;
          $s(D, q_);
        }
        return Wn;
      }
      function Le(D, H, O, G) {
        if (H !== null && H.tag === xe) {
          a(D, H.sibling);
          var he = u(H, O);
          return he.return = D, he;
        }
        a(D, H);
        var ce = t0(O, D.mode, G);
        return ce.return = D, ce;
      }
      function be(D, H, O, G) {
        for (var he = O.key, ce = H; ce !== null; ) {
          if (ce.key === he) {
            var Fe = O.type;
            if (Fe === Qr) {
              if (ce.tag === it) {
                a(D, ce.sibling);
                var Xe = u(ce, O.props.children);
                return Xe.return = D, Xe._debugSource = O._source, Xe._debugOwner = O._owner, Xe;
              }
            } else if (ce.elementType === Fe || // Keep this check inline so it only runs on the false path:
            mR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Fe == "object" && Fe !== null && Fe.$$typeof === We && cE(Fe) === ce.type) {
              a(D, ce.sibling);
              var Zt = u(ce, O.props);
              return Zt.ref = yp(D, ce, O), Zt.return = D, Zt._debugSource = O._source, Zt._debugOwner = O._owner, Zt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === Qr) {
          var Nt = Vo(O.props.children, D.mode, G, O.key);
          return Nt.return = D, Nt;
        } else {
          var Wn = e0(O, D.mode, G);
          return Wn.ref = yp(D, H, O), Wn.return = D, Wn;
        }
      }
      function Dt(D, H, O, G) {
        for (var he = O.key, ce = H; ce !== null; ) {
          if (ce.key === he)
            if (ce.tag === Ue && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var Fe = u(ce, O.children || []);
              return Fe.return = D, Fe;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Xe = n0(O, D.mode, G);
        return Xe.return = D, Xe;
      }
      function gt(D, H, O, G) {
        var he = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (he && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case lr:
              return f(be(D, H, O, G));
            case ha:
              return f(Dt(D, H, O, G));
            case We:
              var ce = O._payload, Fe = O._init;
              return gt(D, H, Fe(ce), G);
          }
          if (Je(O))
            return F(D, H, O, G);
          if (pn(O))
            return le(D, H, O, G);
          Ih(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, G)) : (typeof O == "function" && $h(D), a(D, H));
      }
      return gt;
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
        if (vu(i.childLanes, t) ? u !== null && !vu(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
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
                var p = tr(a), v = Ou(It, p);
                v.tag = Xh;
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
        } else if (i.tag === te)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === dn) {
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
    var Xs = null;
    function dg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Dx() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
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
        Xs = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Ox(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Nx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Va(e, t) {
      return qh(e, t);
    }
    var Lx = qh;
    function qh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (Sn | En)) !== _e && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (Sn | En)) !== _e && dR(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Xh = 2, pg = 3, Kh = !1, vg, Zh;
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
    function Ou(e, t) {
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
          s = Xc(s, e.pendingLanes);
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
          e.flags = e.flags & ~xr | ot;
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
          return y == null ? i : Ke({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Zh = u.shared;
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
        var z = u.baseState, A = P, F = null, le = null, Le = null, be = s;
        do {
          var Dt = be.lane, gt = be.eventTime;
          if (vu(i, Dt)) {
            if (Le !== null) {
              var H = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Le = Le.next = H;
            }
            z = Mx(e, u, be, z, t, a);
            var O = be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Fn) {
              e.flags |= tn;
              var G = u.effects;
              G === null ? u.effects = [be] : G.push(be);
            }
          } else {
            var D = {
              eventTime: gt,
              lane: Dt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Le === null ? (le = Le = D, F = z) : Le = Le.next = D, A = et(A, Dt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, ce = he.next;
            he.next = null, be = ce, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = z), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Le;
        var Fe = u.shared.interleaved;
        if (Fe !== null) {
          var Xe = Fe;
          do
            A = et(A, Xe.lane), Xe = Xe.next;
          while (Xe !== Fe);
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
      Kh = !1;
    }
    function tm() {
      return Kh;
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
      var a = KT(t);
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
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ot) !== _e;
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
    var ve = mt.ReactCurrentDispatcher, Cp = mt.ReactCurrentBatchConfig, wg, Af;
    wg = /* @__PURE__ */ new Set();
    var Ks = P, Kt = null, vr = null, hr = null, im = !1, Rp = !1, Tp = 0, Hx = 0, Px = 25, V = null, bi = null, zo = -1, xg = !1;
    function Pt() {
      {
        var e = V;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function ee() {
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
        var t = Ie(Kt);
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
      Ks = s, Kt = t, bi = e !== null ? e._debugHookTypes : null, zo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ve.current = WE : bi !== null ? ve.current = QE : ve.current = $E;
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
      if (Ks = P, Kt = null, vr = null, hr = null, V = null, bi = null, zo = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ft) !== ke && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xt) !== ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function _E() {
      if (ve.current = gm, im) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Ks = P, Kt = null, vr = null, hr = null, bi = null, zo = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Kt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function _i() {
      var e;
      if (vr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = Kt.memoizedState : a = hr.next, a !== null)
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
        hr === null ? Kt.memoizedState = hr = i : hr = hr.next = i;
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
      var f = s.dispatch = $x.bind(null, Kt, s);
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
          if (vu(Ks, le)) {
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
              var Dt = F.action;
              b = e(b, Dt);
            }
          } else {
            var Le = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (z = A = Le, w = b) : A = A.next = Le, Kt.lanes = et(Kt.lanes, le), Ip(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? w = b : A.next = z, se(b, i.memoizedState) || Lp(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var D = gt;
        do {
          var H = D.lane;
          Kt.lanes = et(Kt.lanes, H), Ip(H), D = D.next;
        } while (D !== gt);
      } else f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
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
      var i = Kt, u = jl(), s, f = jr();
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
        ws(v, Ks) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(NE.bind(null, i, y, e), [e]), i.flags |= ma, wp(dr | Fr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Kt, u = _i(), s = t();
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
        ws(g, Ks) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= wc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Kt.updateQueue;
      if (u === null)
        u = kE(), Kt.updateQueue = u, u.stores = [i];
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
      var t = Va(e, Ae);
      t !== null && Sr(t, e, Ae, It);
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
      var i = a.dispatch = Qx.bind(null, Kt, a);
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
      }, s = Kt.updateQueue;
      if (s === null)
        s = kE(), Kt.updateQueue = s, s.lastEffect = u.next = u;
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
      Kt.flags |= e, u.memoizedState = wp(dr | t, a, void 0, s);
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
      Kt.flags |= e, u.memoizedState = wp(dr | t, a, f, s);
    }
    function cm(e, t) {
      return (Kt.mode & Xt) !== ke ? xp(ml | ma | fd, Fr, e, t) : xp(ma | fd, Fr, e, t);
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
      return a |= hl, (Kt.mode & Xt) !== ke && (a |= Mr), xp(a, pr, e, t);
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
      return u |= hl, (Kt.mode & Xt) !== ke && (u |= Mr), xp(u, pr, zE.bind(null, t, e), i);
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
      var i = !Od(Ks);
      if (i) {
        if (!se(a, t)) {
          var u = Ld();
          Kt.lanes = et(Kt.lanes, u), Ip(u), e.baseState = !0;
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
          f > 10 && Et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
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
      return e === Kt || t !== null && t === Kt;
    }
    function BE(e, t) {
      Rp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
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
          return V = "useCallback", ee(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ve.current;
          ve.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ve.current;
          ve.current = Fl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), zg(e);
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ve.current;
          ve.current = Fl;
          try {
            return um(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", ee(), Bg();
        },
        unstable_isNewReconciler: Se
      }, WE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), om();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ee(), ym();
        },
        unstable_isNewReconciler: Se
      }, GE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ve.current;
          ve.current = Sm;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ve.current;
          ve.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), om();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ve.current;
          ve.current = Sm;
          try {
            return Mg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ee(), ym();
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
          return V = "useCallback", Ge(), ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), ee();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), ee();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), ee(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), ee();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), ee(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), ee(), ym();
        },
        unstable_isNewReconciler: Se
      }, Sm = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), ee();
          var a = ve.current;
          ve.current = Ji;
          try {
            return mm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), ee();
          var i = ve.current;
          ve.current = Ji;
          try {
            return Og(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), ee(), om();
        },
        useState: function(e) {
          V = "useState", Ge(), ee();
          var t = ve.current;
          ve.current = Ji;
          try {
            return Mg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), ee(), ym();
        },
        unstable_isNewReconciler: Se
      };
    }
    var Uo = L.unstable_now, qE = 0, Em = -1, _p = -1, Cm = -1, Ig = !1, Rm = !1;
    function XE() {
      return Ig;
    }
    function Wx() {
      Rm = !0;
    }
    function Gx() {
      Ig = !1, Rm = !1;
    }
    function qx() {
      Ig = Rm, Rm = !1;
    }
    function KE() {
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
    function Hl(e) {
      if (Em >= 0) {
        var t = Uo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case tt:
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
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case tt:
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
        var a = Ke({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, eC, wm, tS, nS, rS, kp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
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
      var f = s == null ? u : Ke({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Ou(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Sr(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Ou(u, s);
        f.tag = gE, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Sr(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = wa(), u = Ho(a), s = Ou(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Oe(a, i) || !Oe(u, s) : !0;
    }
    function Xx(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === ke && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ze) === ke && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Je(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
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
          var w = _t(t) || "Component";
          Kg.has(w) || (Kg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var le = _t(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(le) || (Jg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Le, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && W0(e, u, s), g;
    }
    function Kx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
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
          var p = _t(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ze && Ki.recordLegacyContextWarning(e, u), Ki.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Kx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = vt;
        y |= hl, (e.mode & Xt) !== ke && (y |= Mr), e.flags |= y;
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
          A |= hl, (e.mode & Xt) !== ke && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), z = e.memoizedState);
      var F = tm() || nC(e, t, s, a, w, z, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = vt;
          le |= hl, (e.mode & Xt) !== ke && (le |= Mr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = vt;
          Le |= hl, (e.mode & Xt) !== ke && (Le |= Mr), e.flags |= Le;
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
      var Le = tm() || nC(t, a, p, i, F, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      re;
      return Le ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: bt(t),
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
        if (e.tag === Z)
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
      var i = Ou(It, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        W1(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Ou(It, a);
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
        }), typeof u != "function" && (ra(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
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
      if ((e.mode & ft) === ke && (a === Re || a === ye || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Te && jx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & ft) === ke) {
        if (e === t)
          e.flags |= xr;
        else {
          if (e.flags |= ot, a.flags |= ei, a.flags &= -52805, a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = Ou(It, Ae);
              f.tag = Xh, No(a, f, Ae);
            }
          }
          a.lanes = et(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= xr, e.lanes = u, e;
    }
    function ab(e, t, a, i, u) {
      if (a.flags |= iu, br && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rb(a), jr() && a.mode & ft && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~vn, sC(f, t, a, e, u), f.mode & ft && uC(e, s, u), nb(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & ft) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & xr) === _e && (v.flags |= vn), sC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), j1(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
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
            if ((y.flags & ot) === _e && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= xr;
              var le = tr(u);
              y.lanes = et(y.lanes, le);
              var Le = sS(y, z, le);
              mg(y, Le);
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
    var Dp = mt.ReactCurrentOwner, tl = !1, cS, Op, fS, dS, pS, Js, vS, xm, Np;
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
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
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
      return El(), e !== null && !tl ? (bE(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (f_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Be, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && qi(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          ), a.defaultProps !== void 0) {
            var v = _t(s) || "Unknown";
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
          _t(g)
        );
      }
      var w = e.child, z = TS(e, u);
      if (!z) {
        var A = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Oe, F(A, i) && e.ref === t.ref)
          return Nu(e, t, u);
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
          y && qi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Oe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (tl = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & ei) !== _e && (tl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & ft) === ke) {
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
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
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
      return El(), e !== null && !tl ? (bE(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
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
            t.flags |= ot, t.flags |= xr;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = et(t.lanes, g);
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
            _t(a)
          );
        }
      }
      var z;
      Ul(a) ? (z = !0, jh(t)) : z = !1, Lf(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), aC(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = Zx(t, a, i, u) : F = Jx(e, t, a, i, u);
      var le = mS(e, t, a, F, z, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), Js = !0);
      }
      return le;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & ot) !== _e;
      if (!i && !f)
        return u && X0(t, a, !1), Nu(e, t, s);
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
        El();
      }
      return t.flags |= Ii, e !== null && f ? lb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
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
        if (y.baseState = v, t.memoizedState = v, t.flags & vn) {
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
            z.flags = z.flags & ~Sn | En, z = z.sibling;
        }
      } else {
        if (Df(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return Df(), tg(u), t.flags |= vn, Ra(e, t, a, i), t.child;
    }
    function fb(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Bt), vC(e, t), Ra(e, t, f, a), t.child;
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
        case Re:
          return yS(t, v), t.type = v = Wf(v), b = hS(null, t, v, g, i), b;
        case fe:
          return t.type = v = WS(v), b = hC(null, t, v, g, i), b;
        case ye:
          return t.type = v = GS(v), b = cC(null, t, v, g, i), b;
        case dt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && qi(
              w,
              g,
              // Resolved for outer only
              "prop",
              _t(v)
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
          var y = _t(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Ze && Ki.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (El(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = _t(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = _t(a) || "Unknown";
          Op[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Op[b] = !0);
        }
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ul(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Re, t.mode & Ze) {
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
          var f = _t(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = _t(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = _t(t) || "Unknown";
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
      __(t) && (t.flags |= ot);
      var u = Zi.current, s = !1, f = (t.flags & ot) !== _e;
      if (f || yb(u, e) ? (s = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (u = Ax(u, xE)), u = zf(u), Mo(t, u), e === null) {
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
          var F = i.fallback, le = i.children, Le = Cb(e, t, le, F, a), be = t.child, Dt = e.child.memoizedState;
          return be.memoizedState = Dt === null ? SS(a) : mb(Dt, a), be.childLanes = gb(e, a), t.memoizedState = gS, Le;
        } else {
          var gt = i.children, D = Eb(e, t, gt, a);
          return t.memoizedState = null, D;
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
      return (u & ft) === ke && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Tt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vo(a, u, i, null)) : (p = CS(f, u), v = Vo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
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
      if ((t.mode & ft) === ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Kr) : p.push(s);
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
        (s & ft) === ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Tt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & jn;
      var b;
      return p !== null ? b = ac(p, i) : (b = Vo(i, s, u, null), b.flags |= Sn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= Sn, t.memoizedState = null, f;
    }
    function Rb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Vo(i, s, u, null);
      return v.flags |= Sn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ft) !== ke && Of(t, e.child, null, u), v;
    }
    function Tb(e, t, a) {
      return (e.mode & ft) === ke ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Hy(t) ? e.lanes = er : e.lanes = ta, null;
    }
    function wb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & vn) {
          t.flags &= ~vn;
          var D = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var H = i.children, O = i.fallback, G = Rb(e, t, H, O, f), he = t.child;
          return he.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (fx(), (t.mode & ft) === ke)
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
              var le = It;
              Va(e, F), Sr(A, e, F, le);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (B0(u)) {
          t.flags |= ot, t.child = e.child;
          var be = q1.bind(null, e);
          return Dw(u, be), null;
        } else {
          vx(t, u, s.treeContext);
          var Dt = i.children, gt = ES(t, Dt);
          return gt.flags |= En, gt;
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
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === $t)
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
        var a = Je(e), i = !a && typeof pn(e) == "function";
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
          var i = pn(e);
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
        p = Cg(p, Ep), t.flags |= ot;
      else {
        var y = e !== null && (e.flags & ot) !== _e;
        y && xb(t, t.child, a), p = zf(p);
      }
      if (Mo(t, p), (t.mode & ft) === ke)
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
        v && qi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (se(y, p)) {
          if (f.children === s.children && !Uh())
            return Nu(e, t, a);
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
      (t.mode & ft) === ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Nu(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Kr) : s.push(e), a.flags |= Sn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function zb(e, t, a) {
      switch (t.tag) {
        case Z:
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
        case Ue:
          yg(t, t.stateNode.containerInfo);
          break;
        case te: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case tt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= vt);
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
              return Mo(t, zf(Zi.current)), t.flags |= ot, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return gC(e, t, a);
            Mo(t, zf(Zi.current));
            var b = Nu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Mo(t, zf(Zi.current));
          break;
        }
        case $t: {
          var w = (e.flags & ot) !== _e, z = ra(a, t.childLanes);
          if (w) {
            if (z)
              return RC(e, t, a);
            t.flags |= ot;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Mo(t, Zi.current), z)
            break;
          return null;
        }
        case ze:
        case jt:
          return t.lanes = P, pC(e, t, a);
      }
      return Nu(e, t, a);
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
          (t.flags & ot) === _e)
            return tl = !1, zb(e, t, a);
          (e.flags & ei) !== _e ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, jr() && ix(t)) {
        var f = t.index, p = lx();
        J0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Pe:
          return hb(e, t, t.type, a);
        case Tn: {
          var v = t.elementType;
          return pb(e, t, v, a);
        }
        case Re: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : el(y, g);
          return hS(e, t, y, b, a);
        }
        case fe: {
          var w = t.type, z = t.pendingProps, A = t.elementType === w ? z : el(w, z);
          return hC(e, t, w, A, a);
        }
        case Z:
          return cb(e, t, a);
        case ie:
          return fb(e, t, a);
        case xe:
          return db(e, t);
        case Te:
          return gC(e, t, a);
        case Ue:
          return Ob(e, t, a);
        case ye: {
          var F = t.type, le = t.pendingProps, Le = t.elementType === F ? le : el(F, le);
          return cC(e, t, F, Le, a);
        }
        case it:
          return ub(e, t, a);
        case Rn:
          return ob(e, t, a);
        case tt:
          return sb(e, t, a);
        case te:
          return Nb(e, t, a);
        case Jt:
          return Lb(e, t, a);
        case dt: {
          var be = t.type, Dt = t.pendingProps, gt = el(be, Dt);
          if (t.type !== t.elementType) {
            var D = be.propTypes;
            D && qi(
              D,
              gt,
              // Resolved for outer only
              "prop",
              _t(be)
            );
          }
          return gt = el(be.type, gt), fC(e, t, be, gt, a);
        }
        case Be:
          return dC(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : el(H, O);
          return vb(e, t, H, G, a);
        }
        case $t:
          return RC(e, t, a);
        case Ct:
          break;
        case ze:
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
        if (u.tag === ie || u.tag === xe)
          nw(e, u.stateNode);
        else if (u.tag !== Ue) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = _e;
      if (t) {
        if ((e.mode & Tt) !== ke) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Tt) !== ke) {
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
      if (Sx() && (t.mode & ft) !== ke && (t.flags & ot) === _e)
        return lE(t), Df(), t.flags |= vn | iu | xr, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yx(t), Hr(t), (t.mode & Tt) !== ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & ot) === _e && (t.memoizedState = null), t.flags |= vt, Hr(t), (t.mode & Tt) !== ke) {
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
      switch (Xy(t), t.tag) {
        case Pe:
        case Tn:
        case Be:
        case Re:
        case ye:
        case it:
        case Rn:
        case tt:
        case Jt:
        case dt:
          return Hr(t), null;
        case fe: {
          var u = t.type;
          return Ul(u) && Ah(t), Hr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Mf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & vn) !== _e) && (t.flags |= za, uE());
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
        case xe: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            DC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = RE(), le = gg(), Le = Bh(t);
            Le ? mx(t) && Pf(t) : t.stateNode = iw(z, F, le, t);
          }
          return Hr(t), null;
        }
        case Te: {
          Uf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = Ub(e, t, be);
            if (!Dt)
              return t.flags & xr ? t : null;
          }
          if ((t.flags & ot) !== _e)
            return t.lanes = a, (t.mode & Tt) !== ke && Gg(t), t;
          var gt = be !== null, D = e !== null && e.memoizedState !== null;
          if (gt !== D && gt) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & ft) !== ke) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(Zi.current, xE) ? A1() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= vt), Hr(t), (t.mode & Tt) !== ke && gt) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case Ue:
          return Mf(t), wS(e, t), e === null && Zw(t.stateNode.containerInfo), Hr(t), null;
        case te:
          var ce = t.type._context;
          return cg(ce, t), Hr(t), null;
        case Mt: {
          var Fe = t.type;
          return Ul(Fe) && Ah(t), Hr(t), null;
        }
        case $t: {
          Uf(t);
          var Xe = t.memoizedState;
          if (Xe === null)
            return Hr(t), null;
          var Zt = (t.flags & ot) !== _e, Nt = Xe.rendering;
          if (Nt === null)
            if (Zt)
              Mp(Xe, !1);
            else {
              var Wn = F1() && (e === null || (e.flags & ot) === _e);
              if (!Wn)
                for (var Lt = t.child; Lt !== null; ) {
                  var Pn = am(Lt);
                  if (Pn !== null) {
                    Zt = !0, t.flags |= ot, Mp(Xe, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= vt), t.subtreeFlags = _e, bx(t, a), Mo(t, Cg(Zi.current, Ep)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              Xe.tail !== null && bn() > KC() && (t.flags |= ot, Zt = !0, Mp(Xe, !1), t.lanes = Pv);
            }
          else {
            if (!Zt) {
              var Ir = am(Nt);
              if (Ir !== null) {
                t.flags |= ot, Zt = !0;
                var ui = Ir.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= vt), Mp(Xe, !0), Xe.tail === null && Xe.tailMode === "hidden" && !Nt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - Xe.renderingStartTime > KC() && a !== ta && (t.flags |= ot, Zt = !0, Mp(Xe, !1), t.lanes = Pv);
            }
            if (Xe.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var xa = Xe.last;
              xa !== null ? xa.sibling = Nt : t.child = Nt, Xe.last = Nt;
            }
          }
          if (Xe.tail !== null) {
            var ba = Xe.tail;
            Xe.rendering = ba, Xe.tail = ba.sibling, Xe.renderingStartTime = bn(), ba.sibling = null;
            var ca = Zi.current;
            return Zt ? ca = Cg(ca, Ep) : ca = zf(ca), Mo(t, ca), ba;
          }
          return Hr(t), null;
        }
        case Ct:
          break;
        case ze:
        case jt: {
          VS(t);
          var Au = t.memoizedState, Gf = Au !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= yi);
          }
          return !Gf || (t.mode & ft) === ke ? Hr(t) : ra(Bl, ta) && (Hr(t), t.subtreeFlags & (Sn | vt) && (t.flags |= yi)), null;
        }
        case yt:
          return null;
        case lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ab(e, t, a) {
      switch (Xy(t), t.tag) {
        case fe: {
          var i = t.type;
          Ul(i) && Ah(t);
          var u = t.flags;
          return u & xr ? (t.flags = u & ~xr | ot, (t.mode & Tt) !== ke && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Mf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & xr) !== _e && (s & ot) === _e ? (t.flags = s & ~xr | ot, t) : null;
        }
        case ie:
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
          return p & xr ? (t.flags = p & ~xr | ot, (t.mode & Tt) !== ke && Gg(t), t) : null;
        }
        case $t:
          return Uf(t), null;
        case Ue:
          return Mf(t), null;
        case te:
          var v = t.type._context;
          return cg(v, t), null;
        case ze:
        case jt:
          return VS(t), null;
        case yt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Xy(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case Z: {
          t.stateNode, Mf(t), Qy(t), Tg();
          break;
        }
        case ie: {
          Sg(t);
          break;
        }
        case Ue:
          Mf(t);
          break;
        case Te:
          Uf(t);
          break;
        case $t:
          Uf(t);
          break;
        case te:
          var u = t.type._context;
          cg(u, t);
          break;
        case ze:
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
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Tt)
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
        fn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Hb(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Pb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Qe && ut && e.mode & Tt)
              try {
                Pl(), i = a(null);
              } finally {
                Hl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
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
        (e.subtreeFlags & yl) !== _e && t !== null ? (t.return = e, Ce = t) : Yb();
      }
    }
    function Yb() {
      for (; Ce !== null; ) {
        var e = Ce;
        Wt(e);
        try {
          Ib(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        gn();
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
      if ((a & za) !== _e) {
        switch (Wt(e), e.tag) {
          case Re:
          case ye:
          case Be:
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
          case Z: {
            {
              var v = e.stateNode;
              ww(v.containerInfo);
            }
            break;
          }
          case ie:
          case xe:
          case Ue:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
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
                (s.tag & pr) !== _e ? v = "useLayoutEffect" : (s.tag & Al) !== _e ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & vt) !== _e)
        switch (t.tag) {
          case tt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KE(), p = t.alternate === null ? "mount" : "update";
            XE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case tt:
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
      if ((a.flags & gl) !== _e)
        switch (a.tag) {
          case Re:
          case ye:
          case Be: {
            if (!Pr)
              if (a.mode & Tt)
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
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Tt)
                  try {
                    Pl(), u.componentDidMount();
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : el(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Tt)
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
          case Z: {
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
          case xe:
            break;
          case Ue:
            break;
          case tt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, le = a.stateNode.effectDuration, Le = KE(), be = t === null ? "mount" : "update";
              XE() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, le, Le), Y1(a);
                var Dt = a.return;
                e: for (; Dt !== null; ) {
                  switch (Dt.tag) {
                    case Z:
                      var gt = Dt.stateNode;
                      gt.effectDuration += le;
                      break e;
                    case tt:
                      var D = Dt.stateNode;
                      D.effectDuration += le;
                      break e;
                  }
                  Dt = Dt.return;
                }
              }
            }
            break;
          }
          case Te: {
            e1(e, a);
            break;
          }
          case $t:
          case Mt:
          case Ct:
          case ze:
          case jt:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & An && AC(a);
    }
    function Wb(e) {
      switch (e.tag) {
        case Re:
        case ye:
        case Be: {
          if (e.mode & Tt)
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
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Cw(s) : Tw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === jt) && i.memoizedState !== null && i !== e)) {
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
          if (e.mode & Tt)
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
    function qb(e) {
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
    function Xb(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ie || e.tag === Z || e.tag === Ue;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== xe && t.tag !== dn; ) {
          if (t.flags & Sn || t.child === null || t.tag === Ue)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function Kb(e) {
      var t = Xb(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & Bt && (V0(a), t.flags &= ~Bt);
          var i = HC(e);
          _S(e, i, a);
          break;
        }
        case Z:
        case Ue: {
          var u = t.stateNode.containerInfo, s = HC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ie || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? mw(a, s, t) : vw(a, s);
      } else if (i !== Ue) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ie || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? hw(a, s, t) : pw(a, s);
      } else if (i !== Ue) {
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
            case Z: {
              Vr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
            case Ue: {
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
      qb(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (lo(a), a.tag) {
        case ie:
          Pr || Yf(a, t);
        case xe: {
          {
            var i = Vr, u = rl;
            Vr = null, jo(e, t, a), Vr = i, rl = u, Vr !== null && (rl ? gw(Vr, a.stateNode) : yw(Vr, a.stateNode));
          }
          return;
        }
        case dn: {
          Vr !== null && (rl ? Sw(Vr, a.stateNode) : Fy(Vr, a.stateNode));
          return;
        }
        case Ue: {
          {
            var s = Vr, f = rl;
            Vr = a.stateNode.containerInfo, rl = !0, jo(e, t, a), Vr = s, rl = f;
          }
          return;
        }
        case Re:
        case ye:
        case dt:
        case Be: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, z = b.tag;
                  w !== void 0 && ((z & Al) !== Ba ? Dm(a, t, w) : (z & pr) !== Ba && (Rd(a), a.mode & Tt ? (Pl(), Dm(a, t, w), Hl(a)) : Dm(a, t, w), uo())), g = g.next;
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
        case Ct: {
          jo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & ft
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
    function t1(e, t, a) {
      Vf = a, Bf = e, Wt(t), BC(t, e), Wt(t), Vf = null, Bf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zb(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Wt(p), BC(p, e), p = p.sibling;
      Wt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Re:
        case ye:
        case dt:
        case Be: {
          if (al(t, e), Vl(e), u & vt) {
            try {
              nl(Al | dr, e, e.return), Ao(Al | dr, e);
            } catch (Fe) {
              fn(e, e.return, Fe);
            }
            if (e.mode & Tt) {
              try {
                Pl(), nl(pr | dr, e, e.return);
              } catch (Fe) {
                fn(e, e.return, Fe);
              }
              Hl(e);
            } else
              try {
                nl(pr | dr, e, e.return);
              } catch (Fe) {
                fn(e, e.return, Fe);
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
            if (e.flags & Bt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Fe) {
                fn(e, e.return, Fe);
              }
            }
            if (u & vt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fw(f, g, y, v, p, e);
                  } catch (Fe) {
                    fn(e, e.return, Fe);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (al(t, e), Vl(e), u & vt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
            try {
              dw(b, z, w);
            } catch (Fe) {
              fn(e, e.return, Fe);
            }
          }
          return;
        }
        case Z: {
          if (al(t, e), Vl(e), u & vt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                jw(t.containerInfo);
              } catch (Fe) {
                fn(e, e.return, Fe);
              }
          }
          return;
        }
        case Ue: {
          al(t, e), Vl(e);
          return;
        }
        case Te: {
          al(t, e), Vl(e);
          var F = e.child;
          if (F.flags & yi) {
            var le = F.stateNode, Le = F.memoizedState, be = Le !== null;
            if (le.isHidden = be, be) {
              var Dt = F.alternate !== null && F.alternate.memoizedState !== null;
              Dt || U1();
            }
          }
          if (u & vt) {
            try {
              Jb(e);
            } catch (Fe) {
              fn(e, e.return, Fe);
            }
            VC(e);
          }
          return;
        }
        case ze: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ft
          ) {
            var D = Pr;
            Pr = D || gt, al(t, e), Pr = D;
          } else
            al(t, e);
          if (Vl(e), u & yi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, he = e;
            if (H.isHidden = G, G && !gt && (he.mode & ft) !== ke) {
              Ce = he;
              for (var ce = he.child; ce !== null; )
                Ce = ce, r1(ce), ce = ce.sibling;
            }
            Gb(he, G);
          }
          return;
        }
        case $t: {
          al(t, e), Vl(e), u & vt && VC(e);
          return;
        }
        case Ct:
          return;
        default: {
          al(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & Sn) {
        try {
          Kb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & En && (e.flags &= ~En);
    }
    function n1(e, t, a) {
      Vf = a, Bf = t, Ce = e, YC(e, t, a), Vf = null, Bf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & ft) !== ke; Ce !== null; ) {
        var u = Ce, s = u.child;
        if (u.tag === ze && i) {
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
        (u.subtreeFlags & gl) !== _e && s !== null ? (s.return = u, Ce = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & gl) !== _e) {
          var u = i.alternate;
          Wt(i);
          try {
            Qb(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          gn();
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
          case Re:
          case ye:
          case dt:
          case Be: {
            if (t.mode & Tt)
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
          case ze: {
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
        if (t.tag === ze) {
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
        Wt(t);
        try {
          Wb(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (gn(), t === e) {
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
        (u.subtreeFlags & ur) !== _e && s !== null ? (s.return = u, Ce = s) : u1(e, t, a, i);
      }
    }
    function u1(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce;
        if ((u.flags & ma) !== _e) {
          Wt(u);
          try {
            o1(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          gn();
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
        case Re:
        case ye:
        case Be: {
          if (t.mode & Tt) {
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
        if ((Ce.flags & Kr) !== _e) {
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
        (e.subtreeFlags & ur) !== _e && t !== null ? (t.return = e, Ce = t) : f1();
      }
    }
    function f1() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & ma) !== _e && (Wt(e), d1(e), gn());
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
        case Re:
        case ye:
        case Be: {
          e.mode & Tt ? (Wg(), nl(Fr | dr, e, e.return), Qg(e)) : nl(Fr | dr, e, e.return);
          break;
        }
      }
    }
    function p1(e, t) {
      for (; Ce !== null; ) {
        var a = Ce;
        Wt(a), h1(a, t), gn();
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
        case Re:
        case ye:
        case Be: {
          e.mode & Tt ? (Wg(), nl(Fr, e, t), Qg(e)) : nl(Fr, e, t);
          break;
        }
      }
    }
    function m1(e) {
      switch (e.tag) {
        case Re:
        case ye:
        case Be: {
          try {
            Ao(pr | dr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case Re:
        case ye:
        case Be: {
          try {
            Ao(Fr | dr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case Re:
        case ye:
        case Be: {
          try {
            nl(pr | dr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
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
        case Re:
        case ye:
        case Be:
          try {
            nl(Fr | dr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
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
    var R1 = mt.ReactCurrentActQueue;
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
    var w1 = Math.ceil, DS = mt.ReactCurrentDispatcher, OS = mt.ReactCurrentOwner, Br = mt.ReactCurrentBatchConfig, il = mt.ReactCurrentActQueue, mr = (
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
    ), Lu = 0, Up = 1, ec = 2, Om = 3, Ap = 4, GC = 5, NS = 6, kt = mr, Ta = null, On = null, yr = P, Bl = P, LS = _o(P), gr = Lu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ya = null, MS = 0, qC = 500, XC = 1 / 0, x1 = 500, Mu = null;
    function Pp() {
      XC = bn() + x1;
    }
    function KC() {
      return XC;
    }
    var Mm = !1, zS = null, If = null, tc = !1, Fo = null, Vp = P, US = [], AS = null, b1 = 50, Bp = 0, jS = null, FS = !1, zm = !1, _1 = 50, $f = 0, Um = null, Yp = It, Am = P, ZC = !1;
    function jm() {
      return Ta;
    }
    function wa() {
      return (kt & (Yr | ki)) !== mr ? bn() : (Yp !== It || (Yp = bn()), Yp);
    }
    function Ho(e) {
      var t = e.mode;
      if ((t & ft) === ke)
        return Ae;
      if ((kt & Yr) !== mr && yr !== P)
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
      return (t & ft) === ke ? Ae : Qv();
    }
    function Sr(e, t, a, i) {
      Z1(), ZC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), vo(e, a, i), (kt & Yr) !== P && e === Ta ? t_(t) : (br && Gv(e, t, a), n_(t), e === Ta && ((kt & Yr) === mr && (Fp = et(Fp, a)), gr === Ap && Po(e, yr)), Ia(e, i), a === Ae && kt === mr && (t.mode & ft) === ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
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
        (kt & Yr) !== mr
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
      var u = pu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(il.current !== null && a !== $S)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === Ae)
        e.tag === ko ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), ax(tR.bind(null, e))) : K0(tR.bind(null, e)), il.current !== null ? il.current.push(Do) : ow(function() {
          (kt & (Yr | ki)) === mr && Do();
        }), f = null;
      else {
        var p;
        switch (Xv(i)) {
          case aa:
            p = $i;
            break;
          case Aa:
            p = ds;
            break;
          case sr:
            p = uu;
            break;
          case tf:
            p = io;
            break;
          default:
            p = uu;
            break;
        }
        f = QS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (Gx(), Yp = It, Am = P, (kt & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Uu();
      if (i && e.callbackNode !== a)
        return null;
      var u = na(e, e === Ta ? yr : P);
      if (u === P)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? P1(e, u) : Hm(e, u);
      if (f !== Lu) {
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
      if (hu(e)) {
        var i = nc(e, t);
        i.flags |= vn, Kw(e.containerInfo);
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
        case Lu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, Mu);
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
              if (!vu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, Mu), i);
              break;
            }
          }
          rc(e, Ya, Mu);
          break;
        }
        case Ap: {
          if (Po(e, a), uy(a))
            break;
          if (!hR()) {
            var f = kd(e, a), p = f, v = bn() - p, y = K1(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, Mu), y);
              break;
            }
          }
          rc(e, Ya, Mu);
          break;
        }
        case GC: {
          rc(e, Ya, Mu);
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
      if (qx(), (kt & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      Uu();
      var t = na(e, P);
      if (!ra(t, Ae))
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
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, Mu), Ia(e, bn()), null;
    }
    function M1(e, t) {
      t !== P && (bs(e, et(t, Ae)), Ia(e, bn()), (kt & (Yr | ki)) === mr && (Pp(), Do()));
    }
    function PS(e, t) {
      var a = kt;
      kt |= WC;
      try {
        return e(t);
      } finally {
        kt = a, kt === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Pp(), Z0());
      }
    }
    function z1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(aa), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, kt === mr && Pp();
      }
    }
    function zu(e) {
      Fo !== null && Fo.tag === ko && (kt & (Yr | ki)) === mr && Uu();
      var t = kt;
      kt |= WC;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(aa), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, kt = t, (kt & (Yr | ki)) === mr && Do();
      }
    }
    function nR() {
      return (kt & (Yr | ki)) !== mr;
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
      return On = s, yr = Bl = t, gr = Lu, jp = null, Nm = P, Fp = P, Lm = P, Hp = null, Ya = null, Dx(), Ki.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = On;
        try {
          if (Gh(), _E(), gn(), OS.current = null, a === null || a.return === null) {
            gr = Up, jp = t, On = null;
            return;
          }
          if (Qe && a.mode & Tt && Tm(a, !0), Ye)
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
      gr === Lu && (gr = Om);
    }
    function BS() {
      (gr === Lu || gr === Om || gr === ec) && (gr = Ap), Ta !== null && (xl(Nm) || xl(Fp)) && Po(Ta, yr);
    }
    function j1(e) {
      gr !== Ap && (gr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function F1() {
      return gr === Lu;
    }
    function Hm(e, t) {
      var a = kt;
      kt |= Yr;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        Mu = ef(), nc(e, t);
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
      if (Gh(), kt = a, iR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hn(), Ta = null, yr = P, gr;
    }
    function H1() {
      for (; On !== null; )
        lR(On);
    }
    function P1(e, t) {
      var a = kt;
      kt |= Yr;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        Mu = ef(), Pp(), nc(e, t);
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
      return Gh(), iR(i), kt = a, On !== null ? (xd(), Lu) : (hn(), Ta = null, yr = P, gr);
    }
    function V1() {
      for (; On !== null && !md(); )
        lR(On);
    }
    function lR(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Tt) !== ke ? ($g(e), a = YS(t, e, Bl), Tm(e, !0)) : a = YS(t, e, Bl), gn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : On = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & iu) === _e) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Tt) === ke ? u = OC(a, t, Bl) : ($g(t), u = OC(a, t, Bl), Tm(t, !1)), gn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Ab(a, t);
          if (s !== null) {
            s.flags &= Nv, On = s;
            return;
          }
          if ((t.mode & Tt) !== ke) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= iu, i.subtreeFlags = _e, i.deletions = null;
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
      gr === Lu && (gr = GC);
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
        Uu();
      while (Fo !== null);
      if (J1(), (kt & (Yr | ki)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Si(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = et(u.lanes, u.childLanes);
      Wv(e, f), e === Ta && (Ta = null, On = null, yr = P), ((u.subtreeFlags & ur) !== _e || (u.flags & ur) !== _e) && (tc || (tc = !0, AS = a, QS(uu, function() {
        return Uu(), null;
      })));
      var p = (u.subtreeFlags & (yl | ao | gl | ur)) !== _e, v = (u.flags & (yl | ao | gl | ur)) !== _e;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(aa);
        var b = kt;
        kt |= ki, OS.current = null, Vb(e, u), ZE(), t1(e, u, s), ew(e.containerInfo), e.current = u, hs(s), n1(u, e, s), su(), Mv(), kt = b, In(g), Br.transition = y;
      } else
        e.current = u, ZE();
      var w = tc;
      if (tc ? (tc = !1, Fo = e, Vp = s) : ($f = 0, Um = null), f = e.pendingLanes, f === P && (If = null), w || fR(e.current, !1), Sd(u.stateNode, i), br && e.memoizedUpdaters.clear(), C1(), Ia(e, bn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], le = F.stack, Le = F.digest;
          z(F.value, {
            componentStack: le,
            digest: Le
          });
        }
      if (Mm) {
        Mm = !1;
        var be = zS;
        throw zS = null, be;
      }
      return ra(Vp, Ae) && e.tag !== ko && Uu(), f = e.pendingLanes, ra(f, Ae) ? (Wx(), e === jS ? Bp++ : (Bp = 0, jS = e)) : Bp = 0, Do(), Si(), null;
    }
    function Uu() {
      if (Fo !== null) {
        var e = Xv(Vp), t = _r(sr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, In(t), I1();
        } finally {
          In(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Y1(e) {
      US.push(e), tc || (tc = !0, QS(uu, function() {
        return Uu(), null;
      }));
    }
    function I1() {
      if (Fo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Fo, a = Vp;
      if (Fo = null, Vp = P, (kt & (Yr | ki)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Td(a);
      var i = kt;
      kt |= ki, s1(t.current), i1(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $b(t, f);
        }
      }
      oo(), fR(t.current, !0), kt = i, Do(), zm ? t === Um ? $f++ : ($f = 0, Um = t) : $f = 0, FS = !1, zm = !1, Ed(t);
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
      var i = Zs(a, t), u = lC(e, i, Ae), s = No(e, u, Ae), f = wa();
      s !== null && (vo(s, Ae, f), Ia(s, f));
    }
    function fn(e, t, a) {
      if (Fb(a), Qp(!1), e.tag === Z) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          sR(i, e, a);
          return;
        } else if (i.tag === fe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = sS(i, f, Ae), v = No(i, p, Ae), y = wa();
            v !== null && (vo(v, Ae, y), Ia(v, y));
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
      Zc(e, a), r_(e), Ta === e && vu(yr, a) && (gr === Ap || gr === Om && Gc(yr) && bn() - MS < qC ? nc(e, P) : Lm = et(Lm, a)), Ia(e, u);
    }
    function cR(e, t) {
      t === Fn && (t = k1(e));
      var a = wa(), i = Va(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function q1(e) {
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
        case $t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function K1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : w1(e / 1960) * 1960;
    }
    function Z1() {
      if (Bp > b1)
        throw Bp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > _1 && ($f = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J1() {
      Ki.flushLegacyContextWarning(), Ki.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Wt(e), Pm(e, Mr, g1), t && Pm(e, ml, S1), Pm(e, Mr, m1), t && Pm(e, ml, y1), gn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((kt & Yr) !== mr || !(e.mode & ft))
          return;
        var t = e.tag;
        if (t !== Pe && t !== Z && t !== fe && t !== Re && t !== ye && t !== dt && t !== Be)
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
          Wt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : gn();
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
          if (Gh(), _E(), NC(e, t), ER(t, i), t.mode & Tt && $g(t), Ma(null, xC, null, e, t, a), sd()) {
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
      if (qr && !Ix())
        switch (e.tag) {
          case Re:
          case ye:
          case Be: {
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
        if (e.mode & ft) {
          if (!QC())
            return;
        } else if (!T1() || kt !== mr || e.tag !== Re && e.tag !== ye && e.tag !== Be)
          return;
        if (il.current === null) {
          var t = Zn;
          try {
            Wt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? Wt(e) : gn();
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
          case Re: {
            (typeof i == "function" || s === We) && (u = !0);
            break;
          }
          case ye: {
            (s === I || s === We) && (u = !0);
            break;
          }
          case dt:
          case Be: {
            (s === ct || s === We) && (u = !0);
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
        Uu(), zu(function() {
          qS(e.current, i, a);
        });
      }
    }, l_ = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Uu(), zu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Re:
          case Be:
          case fe:
            v = p;
            break;
          case ye:
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
          var w = Va(e, Ae);
          w !== null && Sr(w, e, Ae, It);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Re:
          case Be:
          case fe:
            p = f;
            break;
          case ye:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? o_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
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
            case Ue:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
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
    var KS;
    {
      KS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function c_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return ZS(e) ? fe : Re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return ye;
        if (t === ct)
          return dt;
      }
      return Pe;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Pe:
        case Re:
        case Be:
          a.type = Wf(e.type);
          break;
        case fe:
          a.type = WS(e.type);
          break;
        case ye:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function p_(e, t) {
      e.flags &= jn | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === Fh ? (i = ft, t === !0 && (i |= Ze, i |= Xt)) : i = ke, br && (i |= Tt), li(Z, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Pe, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = fe, p = WS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case Qr:
            return Vo(a.children, u, s, t);
          case si:
            f = Rn, u |= Ze, (u & ft) !== ke && (u |= Xt);
            break;
          case ci:
            return h_(a, u, s, t);
          case ae:
            return m_(a, u, s, t);
          case ue:
            return y_(a, u, s, t);
          case wn:
            return SR(a, u, s, t);
          case an:
          case pt:
          case sn:
          case Rr:
          case rt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = te;
                  break e;
                case R:
                  f = Jt;
                  break e;
                case I:
                  f = ye, p = GS(p);
                  break e;
                case ct:
                  f = dt;
                  break e;
                case We:
                  f = Tn, p = null;
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
      var u = li(it, e, i, t);
      return u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(tt, e, i, t | Tt);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function m_(e, t, a, i) {
      var u = li(Te, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      var u = li($t, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = li(ze, e, i, t);
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
    function g_() {
      var e = li(ie, null, null, ke);
      return e.elementType = "DELETED", e;
    }
    function S_(e) {
      var t = li(dn, null, null, ke);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Ue, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = li(Pe, null, null, ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function E_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Kc(P), this.expirationTimes = Kc(It), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Kc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
          return q0(t, i, a);
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
              Wt(u), a.mode & Ze ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : gn();
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
      var w = b.current, z = wa(), A = Ho(w), F = Ou(z, A);
      return F.callback = t ?? null, No(w, F, A), D1(b, A, z), b;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Ho(u);
      kc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Zn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(Zn) || "Unknown"));
      var v = Ou(s, f);
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
        case Z: {
          var t = e.stateNode;
          if (hu(t)) {
            var a = Iv(t);
            M1(t, a);
          }
          break;
        }
        case Te: {
          zu(function() {
            var u = Va(e, Ae);
            if (u !== null) {
              var s = wa();
              Sr(u, e, Ae, s);
            }
          });
          var i = Ae;
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
      if (e.tag === Te) {
        var t = po, a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function x_(e) {
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
        var i = t[a], u = Je(e) ? e.slice() : Ke({}, e);
        return a + 1 === t.length ? (Je(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = Je(e) ? e.slice() : Ke({}, e);
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
          Et("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Et("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Je(e) ? e.slice() : Ke({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Va(e, Ae);
          f !== null && Sr(f, e, Ae, It);
        }
      }, OR = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ke({}, e.memoizedProps);
          var s = Va(e, Ae);
          s !== null && Sr(s, e, Ae, It);
        }
      }, NR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Va(e, Ae);
          f !== null && Sr(f, e, Ae, It);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ae);
        i !== null && Sr(i, e, Ae, It);
      }, MR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, Ae);
        a !== null && Sr(a, e, Ae, It);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ae);
        i !== null && Sr(i, e, Ae, It);
      }, UR = function(e) {
        var t = Va(e, Ae);
        t !== null && Sr(t, e, Ae, It);
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
      var t = e.findFiberByHostInstance, a = mt.ReactCurrentDispatcher;
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
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zu(function() {
          Wp(null, e, null, null);
        }), I0(t);
      }
    };
    function L_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? Et("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

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
      return !!(e && (e.nodeType === Xr || e.nodeType === Bi || e.nodeType === Xo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Bi || e.nodeType === Xo || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = mt.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
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
        return Jd(p), zu(), f;
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
        return Jd(b), zu(function() {
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
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : R_(e, "findDOMNode");
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
      if (e == null || !au(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var qR = !1;
    function B_(e) {
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
        return zu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && bo(u)), f = e.nodeType === Xr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(T_), jd(w_), cy(x_), nf(ga), Kv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is(IT), Dv(PS, z1, zu);
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
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zu(e);
    }
    var G_ = N_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!G_ && Gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
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
  }, ev.hydrateRoot = function(q, oe, L) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Zp.hydrateRoot(q, oe, L);
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
  const [q, oe] = ju.useState(1), [L, mt] = ju.useState({
    hasSolar: null,
    selectedProducts: [],
    postal: "",
    houseNumber: "",
    email: "",
    phone: ""
  }), [Ve, St] = ju.useState({}), [Et, S] = ju.useState(!1), st = q / 3 * 100, Re = (te, ye) => {
    mt((tt) => ({ ...tt, [te]: ye })), Ve[te] && St((tt) => ({ ...tt, [te]: null }));
  }, fe = (te) => {
    mt((ye) => {
      const tt = ye.selectedProducts;
      return tt.includes(te) ? { ...ye, selectedProducts: tt.filter((Te) => Te !== te) } : { ...ye, selectedProducts: [...tt, te] };
    }), Ve.selectedProducts && St((ye) => ({ ...ye, selectedProducts: null }));
  }, Pe = () => L.selectedProducts.length === 0 ? (St({ selectedProducts: "Selecteer ten minste één product." }), !1) : !0, Z = () => {
    const te = {};
    return L.postal.length < 4 && (te.postal = "Postcode moet minimaal 4 tekens bevatten."), L.houseNumber || (te.houseNumber = "Huisnummer is verplicht."), (!L.email.includes("@") || !L.email.includes(".")) && (te.email = "Ongeldig e-mailadres."), L.phone.replace(/[^0-9+]/g, "").length < 8 && (te.phone = "Telefoonnummer moet minimaal 8 cijfers bevatten."), St(te), Object.keys(te).length === 0;
  }, Ue = () => {
    q === 2 && !Pe() || oe((te) => te + 1);
  }, ie = () => {
    oe((te) => te - 1);
  }, xe = async () => {
    if (!Z()) return;
    S(!0);
    const te = {
      FlowID: "a6673227-7758-4ee0-ba07-20e41366b2bb",
      Email: L.email,
      Phonenumber: L.phone,
      EnergyUsage: {
        HasSolarPanels: L.hasSolar ? "Yes" : "No"
      },
      HouseDetails: {
        Zipcode: L.postal,
        Housenumber: L.houseNumber,
        Country: "NL"
      },
      // Putting measures in Note1 as requested
      Note1: L.selectedProducts.join(", ")
    };
    console.log("Submitting Form:", te);
    try {
      const ye = await fetch("https://pico-accp.homezero.nl/rest/pico/v1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(te)
      });
      if (!ye.ok)
        throw new Error(`API Error: ${ye.statusText}`);
      const tt = await ye.json();
      console.log("API Success:", tt), alert("Bedankt! Je aanvraag is verstuurd.");
    } catch (ye) {
      console.error("Submission failed:", ye), alert("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      S(!1);
    }
  }, it = () => /* @__PURE__ */ He.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ He.jsx("h2", { className: "sc-title", children: "Heb je al zonnepanelen?" }),
    /* @__PURE__ */ He.jsxs("div", { className: "sc-grid", children: [
      /* @__PURE__ */ He.jsx(
        "div",
        {
          className: `sc-tile ${L.hasSolar === !0 ? "active" : ""}`,
          onClick: () => {
            Re("hasSolar", !0), oe(2);
          },
          children: "Ja"
        }
      ),
      /* @__PURE__ */ He.jsx(
        "div",
        {
          className: `sc-tile ${L.hasSolar === !1 ? "active" : ""}`,
          onClick: () => {
            Re("hasSolar", !1), oe(2);
          },
          children: "Nee"
        }
      )
    ] })
  ] }), Rn = () => /* @__PURE__ */ He.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ He.jsx("h2", { className: "sc-title", children: "In welke producten heb je interesse?" }),
    /* @__PURE__ */ He.jsx("div", { className: "sc-grid", children: fk.map((te) => /* @__PURE__ */ He.jsxs(
      "div",
      {
        className: `sc-tile ${L.selectedProducts.includes(te.id) ? "active" : ""}`,
        onClick: () => fe(te.id),
        children: [
          /* @__PURE__ */ He.jsxs("div", { className: "sc-tile-content", children: [
            /* @__PURE__ */ He.jsx("img", { src: te.icon, alt: te.label, className: "sc-tile-icon" }),
            /* @__PURE__ */ He.jsx("span", { className: "sc-tile-label", children: te.label })
          ] }),
          L.selectedProducts.includes(te.id) && /* @__PURE__ */ He.jsx("div", { className: "sc-check-badge", children: /* @__PURE__ */ He.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ He.jsx("path", { d: "M10 3L4.5 8.5L2 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ]
      },
      te.id
    )) }),
    Ve.selectedProducts && /* @__PURE__ */ He.jsx("div", { className: "sc-error-msg", style: { textAlign: "center", marginTop: "12px" }, children: Ve.selectedProducts })
  ] }), Jt = () => /* @__PURE__ */ He.jsxs("div", { className: "fade-in", children: [
    /* @__PURE__ */ He.jsx("h2", { className: "sc-title", children: "Waar mag je gratis aanbod naartoe?" }),
    /* @__PURE__ */ He.jsxs("div", { className: "sc-row", children: [
      /* @__PURE__ */ He.jsx("div", { className: "sc-col", children: /* @__PURE__ */ He.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ He.jsx("label", { className: "sc-label", children: "Postcode" }),
        /* @__PURE__ */ He.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Ve.postal ? "error" : ""}`,
            value: L.postal,
            onChange: (te) => Re("postal", te.target.value),
            placeholder: "1234 AB"
          }
        ),
        Ve.postal && /* @__PURE__ */ He.jsx("div", { className: "sc-error-msg", children: Ve.postal })
      ] }) }),
      /* @__PURE__ */ He.jsx("div", { className: "sc-col", children: /* @__PURE__ */ He.jsxs("div", { className: "sc-form-group", children: [
        /* @__PURE__ */ He.jsx("label", { className: "sc-label", children: "Huisnummer" }),
        /* @__PURE__ */ He.jsx(
          "input",
          {
            type: "text",
            className: `sc-input ${Ve.houseNumber ? "error" : ""}`,
            value: L.houseNumber,
            onChange: (te) => Re("houseNumber", te.target.value),
            placeholder: "10"
          }
        ),
        Ve.houseNumber && /* @__PURE__ */ He.jsx("div", { className: "sc-error-msg", children: Ve.houseNumber })
      ] }) })
    ] }),
    /* @__PURE__ */ He.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ He.jsx("label", { className: "sc-label", children: "E-mailadres" }),
      /* @__PURE__ */ He.jsx(
        "input",
        {
          type: "email",
          className: `sc-input ${Ve.email ? "error" : ""}`,
          value: L.email,
          onChange: (te) => Re("email", te.target.value),
          placeholder: "naam@voorbeeld.nl"
        }
      ),
      Ve.email && /* @__PURE__ */ He.jsx("div", { className: "sc-error-msg", children: Ve.email })
    ] }),
    /* @__PURE__ */ He.jsxs("div", { className: "sc-form-group", children: [
      /* @__PURE__ */ He.jsx("label", { className: "sc-label", children: "Telefoonnummer" }),
      /* @__PURE__ */ He.jsx(
        "input",
        {
          type: "tel",
          className: `sc-input ${Ve.phone ? "error" : ""}`,
          value: L.phone,
          onChange: (te) => Re("phone", te.target.value),
          placeholder: "06 12345678"
        }
      ),
      Ve.phone && /* @__PURE__ */ He.jsx("div", { className: "sc-error-msg", children: Ve.phone })
    ] })
  ] });
  return /* @__PURE__ */ He.jsx("div", { className: "sc-widget-container", children: /* @__PURE__ */ He.jsxs("div", { className: "sc-card", children: [
    /* @__PURE__ */ He.jsx("div", { className: "sc-progress-bar", children: /* @__PURE__ */ He.jsx("div", { className: "sc-progress-fill", style: { width: `${st}%` } }) }),
    /* @__PURE__ */ He.jsxs("div", { className: "sc-content", children: [
      q === 1 && it(),
      q === 2 && Rn(),
      q === 3 && Jt()
    ] }),
    q > 1 && /* @__PURE__ */ He.jsxs("div", { className: "sc-footer space-between", children: [
      /* @__PURE__ */ He.jsx("button", { className: "sc-btn sc-btn-back", onClick: ie, children: "Terug" }),
      q === 2 ? /* @__PURE__ */ He.jsx("button", { className: "sc-btn", onClick: Ue, children: "Volgende stap" }) : /* @__PURE__ */ He.jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end" }, children: /* @__PURE__ */ He.jsx("button", { className: "sc-btn", onClick: xe, disabled: Et, children: Et ? "Even geduld..." : "Ontvang mijn gratis aanbod" }) })
    ] }),
    q === 3 && /* @__PURE__ */ He.jsx("div", { style: { padding: "0 24px 24px 24px", backgroundColor: "var(--sc-footer-bg)" }, children: /* @__PURE__ */ He.jsx("p", { className: "sc-disclaimer", children: "Binnen een paar minuten gratis en vrijblijvend in je mail! Het kan zijn dat we je bellen voor meer informatie. Zo kunnen we je het beste advies geven." }) })
  ] }) });
}
const cT = "pico-widget-container", lT = document.getElementById(cT);
lT ? ev.createRoot(lT).render(
  /* @__PURE__ */ He.jsx(tk.StrictMode, { children: /* @__PURE__ */ He.jsx(dk, {}) })
) : console.warn(`Pico Widget: Container element #${cT} not found. Widget will not render.`);
