function ic(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, 'default') ? g.default : g;
}
var Ni = { exports: {} },
  wr = {},
  zi = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ua;
function ud() {
  if (Ua) return G;
  Ua = 1;
  var g = Symbol.for('react.element'),
    z = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    $ = Symbol.for('react.strict_mode'),
    W = Symbol.for('react.profiler'),
    T = Symbol.for('react.provider'),
    V = Symbol.for('react.context'),
    U = Symbol.for('react.forward_ref'),
    _ = Symbol.for('react.suspense'),
    C = Symbol.for('react.memo'),
    E = Symbol.for('react.lazy'),
    h = Symbol.iterator;
  function m(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (h && c[h]) || c['@@iterator']), typeof c == 'function' ? c : null);
  }
  var P = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    O = {};
  function B(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = O), (this.updater = X || P);
  }
  (B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (c, w) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, w, 'setState');
    }),
    (B.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function ve() {}
  ve.prototype = B.prototype;
  function ze(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = O), (this.updater = X || P);
  }
  var Le = (ze.prototype = new ve());
  (Le.constructor = ze), R(Le, B.prototype), (Le.isPureReactComponent = !0);
  var fe = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    je = { current: null },
    Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, w, X) {
    var J,
      Z = {},
      b = null,
      re = null;
    if (w != null)
      for (J in (w.ref !== void 0 && (re = w.ref), w.key !== void 0 && (b = '' + w.key), w))
        tt.call(w, J) && !Me.hasOwnProperty(J) && (Z[J] = w[J]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = X;
    else if (1 < te) {
      for (var ue = Array(te), $e = 0; $e < te; $e++) ue[$e] = arguments[$e + 2];
      Z.children = ue;
    }
    if (c && c.defaultProps)
      for (J in ((te = c.defaultProps), te)) Z[J] === void 0 && (Z[J] = te[J]);
    return { $$typeof: g, type: c, key: b, ref: re, props: Z, _owner: je.current };
  }
  function Et(c, w) {
    return { $$typeof: g, type: c.type, key: w, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function mt(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === g;
  }
  function Kt(c) {
    var w = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (X) {
        return w[X];
      })
    );
  }
  var ct = /\/+/g;
  function We(c, w) {
    return typeof c == 'object' && c !== null && c.key != null ? Kt('' + c.key) : w.toString(36);
  }
  function nt(c, w, X, J, Z) {
    var b = typeof c;
    (b === 'undefined' || b === 'boolean') && (c = null);
    var re = !1;
    if (c === null) re = !0;
    else
      switch (b) {
        case 'string':
        case 'number':
          re = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case g:
            case z:
              re = !0;
          }
      }
    if (re)
      return (
        (re = c),
        (Z = Z(re)),
        (c = J === '' ? '.' + We(re, 0) : J),
        fe(Z)
          ? ((X = ''),
            c != null && (X = c.replace(ct, '$&/') + '/'),
            nt(Z, w, X, '', function ($e) {
              return $e;
            }))
          : Z != null &&
            (mt(Z) &&
              (Z = Et(
                Z,
                X +
                  (!Z.key || (re && re.key === Z.key)
                    ? ''
                    : ('' + Z.key).replace(ct, '$&/') + '/') +
                  c,
              )),
            w.push(Z)),
        1
      );
    if (((re = 0), (J = J === '' ? '.' : J + ':'), fe(c)))
      for (var te = 0; te < c.length; te++) {
        b = c[te];
        var ue = J + We(b, te);
        re += nt(b, w, X, ue, Z);
      }
    else if (((ue = m(c)), typeof ue == 'function'))
      for (c = ue.call(c), te = 0; !(b = c.next()).done; )
        (b = b.value), (ue = J + We(b, te++)), (re += nt(b, w, X, ue, Z));
    else if (b === 'object')
      throw (
        ((w = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]' ? 'object with keys {' + Object.keys(c).join(', ') + '}' : w) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return re;
  }
  function ft(c, w, X) {
    if (c == null) return c;
    var J = [],
      Z = 0;
    return (
      nt(c, J, '', '', function (b) {
        return w.call(X, b, Z++);
      }),
      J
    );
  }
  function De(c) {
    if (c._status === -1) {
      var w = c._result;
      (w = w()),
        w.then(
          function (X) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = X));
          },
          function (X) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = X));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = w));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var de = { current: null },
    N = { transition: null },
    K = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: N, ReactCurrentOwner: je };
  function M() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (G.Children = {
      map: ft,
      forEach: function (c, w, X) {
        ft(
          c,
          function () {
            w.apply(this, arguments);
          },
          X,
        );
      },
      count: function (c) {
        var w = 0;
        return (
          ft(c, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (w) {
            return w;
          }) || []
        );
      },
      only: function (c) {
        if (!mt(c))
          throw Error('React.Children.only expected to receive a single React element child.');
        return c;
      },
    }),
    (G.Component = B),
    (G.Fragment = d),
    (G.Profiler = W),
    (G.PureComponent = ze),
    (G.StrictMode = $),
    (G.Suspense = _),
    (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (G.act = M),
    (G.cloneElement = function (c, w, X) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var J = R({}, c.props),
        Z = c.key,
        b = c.ref,
        re = c._owner;
      if (w != null) {
        if (
          (w.ref !== void 0 && ((b = w.ref), (re = je.current)),
          w.key !== void 0 && (Z = '' + w.key),
          c.type && c.type.defaultProps)
        )
          var te = c.type.defaultProps;
        for (ue in w)
          tt.call(w, ue) &&
            !Me.hasOwnProperty(ue) &&
            (J[ue] = w[ue] === void 0 && te !== void 0 ? te[ue] : w[ue]);
      }
      var ue = arguments.length - 2;
      if (ue === 1) J.children = X;
      else if (1 < ue) {
        te = Array(ue);
        for (var $e = 0; $e < ue; $e++) te[$e] = arguments[$e + 2];
        J.children = te;
      }
      return { $$typeof: g, type: c.type, key: Z, ref: b, props: J, _owner: re };
    }),
    (G.createContext = function (c) {
      return (
        (c = {
          $$typeof: V,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: T, _context: c }),
        (c.Consumer = c)
      );
    }),
    (G.createElement = Xe),
    (G.createFactory = function (c) {
      var w = Xe.bind(null, c);
      return (w.type = c), w;
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (c) {
      return { $$typeof: U, render: c };
    }),
    (G.isValidElement = mt),
    (G.lazy = function (c) {
      return { $$typeof: E, _payload: { _status: -1, _result: c }, _init: De };
    }),
    (G.memo = function (c, w) {
      return { $$typeof: C, type: c, compare: w === void 0 ? null : w };
    }),
    (G.startTransition = function (c) {
      var w = N.transition;
      N.transition = {};
      try {
        c();
      } finally {
        N.transition = w;
      }
    }),
    (G.unstable_act = M),
    (G.useCallback = function (c, w) {
      return de.current.useCallback(c, w);
    }),
    (G.useContext = function (c) {
      return de.current.useContext(c);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (c) {
      return de.current.useDeferredValue(c);
    }),
    (G.useEffect = function (c, w) {
      return de.current.useEffect(c, w);
    }),
    (G.useId = function () {
      return de.current.useId();
    }),
    (G.useImperativeHandle = function (c, w, X) {
      return de.current.useImperativeHandle(c, w, X);
    }),
    (G.useInsertionEffect = function (c, w) {
      return de.current.useInsertionEffect(c, w);
    }),
    (G.useLayoutEffect = function (c, w) {
      return de.current.useLayoutEffect(c, w);
    }),
    (G.useMemo = function (c, w) {
      return de.current.useMemo(c, w);
    }),
    (G.useReducer = function (c, w, X) {
      return de.current.useReducer(c, w, X);
    }),
    (G.useRef = function (c) {
      return de.current.useRef(c);
    }),
    (G.useState = function (c) {
      return de.current.useState(c);
    }),
    (G.useSyncExternalStore = function (c, w, X) {
      return de.current.useSyncExternalStore(c, w, X);
    }),
    (G.useTransition = function () {
      return de.current.useTransition();
    }),
    (G.version = '18.3.1'),
    G
  );
}
var Aa;
function sn() {
  return Aa || ((Aa = 1), (zi.exports = ud())), zi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ba;
function sd() {
  if (Ba) return wr;
  Ba = 1;
  var g = sn(),
    z = Symbol.for('react.element'),
    d = Symbol.for('react.fragment'),
    $ = Object.prototype.hasOwnProperty,
    W = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(U, _, C) {
    var E,
      h = {},
      m = null,
      P = null;
    C !== void 0 && (m = '' + C),
      _.key !== void 0 && (m = '' + _.key),
      _.ref !== void 0 && (P = _.ref);
    for (E in _) $.call(_, E) && !T.hasOwnProperty(E) && (h[E] = _[E]);
    if (U && U.defaultProps) for (E in ((_ = U.defaultProps), _)) h[E] === void 0 && (h[E] = _[E]);
    return { $$typeof: z, type: U, key: m, ref: P, props: h, _owner: W.current };
  }
  return (wr.Fragment = d), (wr.jsx = V), (wr.jsxs = V), wr;
}
var Va;
function ad() {
  return Va || ((Va = 1), (Ni.exports = sd())), Ni.exports;
}
var I = ad(),
  un = {},
  ji = { exports: {} },
  Ri,
  Wa;
function Tl() {
  if (Wa) return Ri;
  Wa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (C, E) => {
      for (var h in E) g(C, h, { get: E[h], enumerable: !0 });
    },
    T = (C, E, h, m) => {
      if ((E && typeof E == 'object') || typeof E == 'function')
        for (let P of d(E))
          !$.call(C, P) &&
            P !== h &&
            g(C, P, { get: () => E[P], enumerable: !(m = z(E, P)) || m.enumerable });
      return C;
    },
    V = (C) => T(g({}, '__esModule', { value: !0 }), C),
    U = {};
  W(U, { PluginChannel: () => _ }), (Ri = V(U));
  var _ = ((C) => (
    (C.createAssistantMessage = 'lobe-chat:create-assistant-message'),
    (C.fetchPluginMessage = 'lobe-chat:fetch-plugin-message'),
    (C.fetchPluginSettings = 'lobe-chat:fetch-plugin-settings'),
    (C.fetchPluginState = 'lobe-chat:fetch-plugin-state'),
    (C.fillStandalonePluginContent = 'lobe-chat:fill-plugin-content'),
    (C.initStandalonePlugin = 'lobe-chat:init-standalone-plugin'),
    (C.pluginReadyForRender = 'lobe-chat:plugin-ready-for-render'),
    (C.renderPlugin = 'lobe-chat:render-plugin'),
    (C.renderPluginSettings = 'lobe-chat:render-plugin-settings'),
    (C.renderPluginState = 'lobe-chat:render-plugin-state'),
    (C.triggerAIMessage = 'lobe-chat:trigger-ai-message'),
    (C.updatePluginSettings = 'lobe-chat:update-plugin-settings'),
    (C.updatePluginState = 'lobe-chat:update-plugin-state'),
    C
  ))(_ || {});
  return Ri;
}
var Ti, $a;
function uc() {
  if ($a) return Ti;
  $a = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (h, m) => {
      for (var P in m) g(h, P, { get: m[P], enumerable: !0 });
    },
    T = (h, m, P, R) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let O of d(m))
          !$.call(h, O) &&
            O !== P &&
            g(h, O, { get: () => m[O], enumerable: !(R = z(m, O)) || R.enumerable });
      return h;
    },
    V = (h) => T(g({}, '__esModule', { value: !0 }), h),
    U = {};
  W(U, { lobeChat: () => E }), (Ti = V(U));
  var _ = Tl(),
    C = class {
      constructor() {
        (this.getPluginPayload = () =>
          new Promise((h) => {
            if (typeof window > 'u') {
              h(void 0);
              return;
            }
            const m = setTimeout(() => {
                h(void 0), window.removeEventListener('message', P);
              }, 1e3),
              P = (R) => {
                if (R.data.type === _.PluginChannel.initStandalonePlugin) {
                  const O = R.data.payload || R.data.props,
                    B = O.apiName,
                    ve = JSON.parse(O.arguments || '{}');
                  clearTimeout(m),
                    h({ arguments: ve, name: B, settings: R.data.settings, state: R.data.state }),
                    window.removeEventListener('message', P);
                }
              };
            window.addEventListener('message', P),
              top == null || top.postMessage({ type: _.PluginChannel.pluginReadyForRender }, '*');
          })),
          (this.getPluginSettings = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const m = (P) => {
                P.data.type === _.PluginChannel.renderPluginSettings &&
                  (h(P.data.value), window.removeEventListener('message', m));
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: _.PluginChannel.fetchPluginSettings }, '*');
            })),
          (this.setPluginSettings = (h) => {
            top == null ||
              top.postMessage({ type: _.PluginChannel.updatePluginSettings, value: h }, '*');
          }),
          (this.getPluginMessage = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const m = (P) => {
                if (P.data.type === _.PluginChannel.renderPlugin) {
                  const R = P.data.props;
                  h(R.content), window.removeEventListener('message', m);
                }
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: _.PluginChannel.fetchPluginMessage }, '*');
            })),
          (this.setPluginMessage = (h, m) => {
            top == null ||
              top.postMessage(
                {
                  content: h,
                  triggerAiMessage: m,
                  type: _.PluginChannel.fillStandalonePluginContent,
                },
                '*',
              );
          }),
          (this.getPluginState = (h) =>
            new Promise((m) => {
              if (typeof window > 'u') {
                m(void 0);
                return;
              }
              const P = (R) => {
                R.data.type === _.PluginChannel.renderPluginState &&
                  R.data.key === h &&
                  (m(R.data.value), window.removeEventListener('message', P));
              };
              window.addEventListener('message', P),
                top == null ||
                  top.postMessage({ key: h, type: _.PluginChannel.fetchPluginState }, '*');
            })),
          (this.setPluginState = (h, m) => {
            top == null ||
              top.postMessage({ key: h, type: _.PluginChannel.updatePluginState, value: m }, '*');
          }),
          (this.triggerAIMessage = (h) => {
            top == null || top.postMessage({ id: h, type: _.PluginChannel.triggerAIMessage }, '*');
          }),
          (this.createAssistantMessage = (h) => {
            top == null ||
              top.postMessage({ content: h, type: _.PluginChannel.createAssistantMessage }, '*');
          });
      }
    },
    E = new C();
  return Ti;
}
var Li, Ha;
function cd() {
  if (Ha) return Li;
  Ha = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (B, ve) => {
      for (var ze in ve) g(B, ze, { get: ve[ze], enumerable: !0 });
    },
    T = (B, ve, ze, Le) => {
      if ((ve && typeof ve == 'object') || typeof ve == 'function')
        for (let fe of d(ve))
          !$.call(B, fe) &&
            fe !== ze &&
            g(B, fe, { get: () => ve[fe], enumerable: !(Le = z(ve, fe)) || Le.enumerable });
      return B;
    },
    V = (B) => T(g({}, '__esModule', { value: !0 }), B),
    U = {};
  W(U, {
    fetchPluginMessage: () => P,
    fetchPluginPayload: () => R,
    fetchPluginSettings: () => O,
    fetchPluginState: () => m,
    postToFillPluginContent: () => C,
    postToUpdatePluginSettings: () => h,
    postToUpdatePluginState: () => E,
  }),
    (Li = V(U));
  var _ = uc(),
    C = _.lobeChat.setPluginMessage,
    E = _.lobeChat.setPluginState,
    h = _.lobeChat.setPluginSettings,
    m = _.lobeChat.getPluginState,
    P = _.lobeChat.getPluginMessage,
    R = _.lobeChat.getPluginPayload,
    O = _.lobeChat.getPluginSettings;
  return Li;
}
var Mi = { exports: {} },
  Di,
  Qa;
function fd() {
  if (Qa) return Di;
  Qa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (h, m) => {
      for (var P in m) g(h, P, { get: m[P], enumerable: !0 });
    },
    T = (h, m, P, R) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let O of d(m))
          !$.call(h, O) &&
            O !== P &&
            g(h, O, { get: () => m[O], enumerable: !(R = z(m, O)) || R.enumerable });
      return h;
    },
    V = (h) => T(g({}, '__esModule', { value: !0 }), h),
    U = {};
  W(U, { useOnStandalonePluginInit: () => E }), (Di = V(U));
  var _ = sn(),
    C = Ll(),
    E = (h) => {
      (0, _.useEffect)(() => {
        C.lobeChat.getPluginPayload().then((m) => {
          m && h(m);
        });
      }, []);
    };
  return Di;
}
var Ii, Ka;
function dd() {
  if (Ka) return Ii;
  Ka = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (h, m) => {
      for (var P in m) g(h, P, { get: m[P], enumerable: !0 });
    },
    T = (h, m, P, R) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let O of d(m))
          !$.call(h, O) &&
            O !== P &&
            g(h, O, { get: () => m[O], enumerable: !(R = z(m, O)) || R.enumerable });
      return h;
    },
    V = (h) => T(g({}, '__esModule', { value: !0 }), h),
    U = {};
  W(U, { usePluginSettings: () => E }), (Ii = V(U));
  var _ = sn(),
    C = Ll(),
    E = (h) => {
      const [m, P] = (0, _.useState)(h);
      (0, _.useEffect)(() => {
        C.lobeChat.getPluginSettings().then((O) => {
          O && P(O);
        });
      }, []);
      const R = (0, _.useCallback)((O) => {
        P(O), C.lobeChat.setPluginSettings(O);
      }, []);
      return [m, R];
    };
  return Ii;
}
var Fi, Ya;
function pd() {
  if (Ya) return Fi;
  Ya = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (h, m) => {
      for (var P in m) g(h, P, { get: m[P], enumerable: !0 });
    },
    T = (h, m, P, R) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let O of d(m))
          !$.call(h, O) &&
            O !== P &&
            g(h, O, { get: () => m[O], enumerable: !(R = z(m, O)) || R.enumerable });
      return h;
    },
    V = (h) => T(g({}, '__esModule', { value: !0 }), h),
    U = {};
  W(U, { usePluginState: () => E }), (Fi = V(U));
  var _ = sn(),
    C = Ll(),
    E = (h, m) => {
      const [P, R] = (0, _.useState)(m);
      (0, _.useEffect)(() => {
        C.lobeChat.getPluginState(h).then((B) => {
          B && R(B);
        });
      }, [h]);
      const O = (0, _.useCallback)(
        (B) => {
          R(B), C.lobeChat.setPluginState(h, B);
        },
        [h],
      );
      return [P, O];
    };
  return Fi;
}
var Ui, Xa;
function vd() {
  if (Xa) return Ui;
  Xa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (E, h) => {
      for (var m in h) g(E, m, { get: h[m], enumerable: !0 });
    },
    T = (E, h, m, P) => {
      if ((h && typeof h == 'object') || typeof h == 'function')
        for (let R of d(h))
          !$.call(E, R) &&
            R !== m &&
            g(E, R, { get: () => h[R], enumerable: !(P = z(h, R)) || P.enumerable });
      return E;
    },
    V = (E) => T(g({}, '__esModule', { value: !0 }), E),
    U = {};
  W(U, { onReceiveData: () => C }), (Ui = V(U));
  var _ = Tl(),
    C = (E, h) => {
      if (E.data.type === _.PluginChannel.renderPlugin) {
        const m = E.data.props;
        h(m);
      }
    };
  return Ui;
}
var Ai, Ga;
function hd() {
  if (Ga) return Ai;
  Ga = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (m, P) => {
      for (var R in P) g(m, R, { get: P[R], enumerable: !0 });
    },
    T = (m, P, R, O) => {
      if ((P && typeof P == 'object') || typeof P == 'function')
        for (let B of d(P))
          !$.call(m, B) &&
            B !== R &&
            g(m, B, { get: () => P[B], enumerable: !(O = z(P, B)) || O.enumerable });
      return m;
    },
    V = (m) => T(g({}, '__esModule', { value: !0 }), m),
    U = {};
  W(U, { useWatchPluginMessage: () => h }), (Ai = V(U));
  var _ = sn(),
    C = Tl(),
    E = vd(),
    h = () => {
      const [m, P] = (0, _.useState)({ data: void 0, loading: !0 }),
        R = (O) => {
          (0, E.onReceiveData)(O, (B) => {
            P({ data: B.content, loading: !1 });
          });
        };
      return (
        (0, _.useEffect)(
          () => (
            window == null || window.addEventListener('message', R),
            top == null || top.postMessage({ type: C.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window == null || window.removeEventListener('message', R);
            }
          ),
          [],
        ),
        m
      );
    };
  return Ai;
}
var Ja;
function gd() {
  return (
    Ja ||
      ((Ja = 1),
      (function (g) {
        var z = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          $ = Object.getOwnPropertyNames,
          W = Object.prototype.hasOwnProperty,
          T = (C, E, h, m) => {
            if ((E && typeof E == 'object') || typeof E == 'function')
              for (let P of $(E))
                !W.call(C, P) &&
                  P !== h &&
                  z(C, P, { get: () => E[P], enumerable: !(m = d(E, P)) || m.enumerable });
            return C;
          },
          V = (C, E, h) => (T(C, E, 'default'), h && T(h, E, 'default')),
          U = (C) => T(z({}, '__esModule', { value: !0 }), C),
          _ = {};
        (g.exports = U(_)),
          V(_, fd(), g.exports),
          V(_, dd(), g.exports),
          V(_, pd(), g.exports),
          V(_, hd(), g.exports);
      })(Mi)),
    Mi.exports
  );
}
var Bi, qa;
function md() {
  if (qa) return Bi;
  qa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    W = (U, _, C, E) => {
      if ((_ && typeof _ == 'object') || typeof _ == 'function')
        for (let h of d(_))
          !$.call(U, h) &&
            h !== C &&
            g(U, h, { get: () => _[h], enumerable: !(E = z(_, h)) || E.enumerable });
      return U;
    },
    T = (U) => W(g({}, '__esModule', { value: !0 }), U),
    V = {};
  return (Bi = T(V)), Bi;
}
var Za;
function Ll() {
  return (
    Za ||
      ((Za = 1),
      (function (g) {
        var z = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          $ = Object.getOwnPropertyNames,
          W = Object.prototype.hasOwnProperty,
          T = (C, E, h, m) => {
            if ((E && typeof E == 'object') || typeof E == 'function')
              for (let P of $(E))
                !W.call(C, P) &&
                  P !== h &&
                  z(C, P, { get: () => E[P], enumerable: !(m = d(E, P)) || m.enumerable });
            return C;
          },
          V = (C, E, h) => (T(C, E, 'default'), h && T(h, E, 'default')),
          U = (C) => T(z({}, '__esModule', { value: !0 }), C),
          _ = {};
        (g.exports = U(_)),
          V(_, Tl(), g.exports),
          V(_, cd(), g.exports),
          V(_, gd(), g.exports),
          V(_, uc(), g.exports),
          V(_, md(), g.exports);
      })(ji)),
    ji.exports
  );
}
var ba;
function yd() {
  return (
    ba ||
      ((ba = 1),
      (function (g) {
        var z =
            (un && un.__createBinding) ||
            (Object.create
              ? function ($, W, T, V) {
                  V === void 0 && (V = T);
                  var U = Object.getOwnPropertyDescriptor(W, T);
                  (!U || ('get' in U ? !W.__esModule : U.writable || U.configurable)) &&
                    (U = {
                      enumerable: !0,
                      get: function () {
                        return W[T];
                      },
                    }),
                    Object.defineProperty($, V, U);
                }
              : function ($, W, T, V) {
                  V === void 0 && (V = T), ($[V] = W[T]);
                }),
          d =
            (un && un.__exportStar) ||
            function ($, W) {
              for (var T in $)
                T !== 'default' && !Object.prototype.hasOwnProperty.call(W, T) && z(W, $, T);
            };
        Object.defineProperty(g, '__esModule', { value: !0 }), d(Ll(), g);
      })(un)),
    un
  );
}
var ec = yd(),
  Rl = sn();
const sc = ic(Rl);
var jl = {},
  Vi = { exports: {} },
  Ve = {},
  Wi = { exports: {} },
  $i = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tc;
function wd() {
  return (
    tc ||
      ((tc = 1),
      (function (g) {
        function z(N, K) {
          var M = N.length;
          N.push(K);
          e: for (; 0 < M; ) {
            var c = (M - 1) >>> 1,
              w = N[c];
            if (0 < W(w, K)) (N[c] = K), (N[M] = w), (M = c);
            else break e;
          }
        }
        function d(N) {
          return N.length === 0 ? null : N[0];
        }
        function $(N) {
          if (N.length === 0) return null;
          var K = N[0],
            M = N.pop();
          if (M !== K) {
            N[0] = M;
            e: for (var c = 0, w = N.length, X = w >>> 1; c < X; ) {
              var J = 2 * (c + 1) - 1,
                Z = N[J],
                b = J + 1,
                re = N[b];
              if (0 > W(Z, M))
                b < w && 0 > W(re, Z)
                  ? ((N[c] = re), (N[b] = M), (c = b))
                  : ((N[c] = Z), (N[J] = M), (c = J));
              else if (b < w && 0 > W(re, M)) (N[c] = re), (N[b] = M), (c = b);
              else break e;
            }
          }
          return K;
        }
        function W(N, K) {
          var M = N.sortIndex - K.sortIndex;
          return M !== 0 ? M : N.id - K.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var T = performance;
          g.unstable_now = function () {
            return T.now();
          };
        } else {
          var V = Date,
            U = V.now();
          g.unstable_now = function () {
            return V.now() - U;
          };
        }
        var _ = [],
          C = [],
          E = 1,
          h = null,
          m = 3,
          P = !1,
          R = !1,
          O = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          ve = typeof clearTimeout == 'function' ? clearTimeout : null,
          ze = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Le(N) {
          for (var K = d(C); K !== null; ) {
            if (K.callback === null) $(C);
            else if (K.startTime <= N) $(C), (K.sortIndex = K.expirationTime), z(_, K);
            else break;
            K = d(C);
          }
        }
        function fe(N) {
          if (((O = !1), Le(N), !R))
            if (d(_) !== null) (R = !0), De(tt);
            else {
              var K = d(C);
              K !== null && de(fe, K.startTime - N);
            }
        }
        function tt(N, K) {
          (R = !1), O && ((O = !1), ve(Xe), (Xe = -1)), (P = !0);
          var M = m;
          try {
            for (Le(K), h = d(_); h !== null && (!(h.expirationTime > K) || (N && !Kt())); ) {
              var c = h.callback;
              if (typeof c == 'function') {
                (h.callback = null), (m = h.priorityLevel);
                var w = c(h.expirationTime <= K);
                (K = g.unstable_now()),
                  typeof w == 'function' ? (h.callback = w) : h === d(_) && $(_),
                  Le(K);
              } else $(_);
              h = d(_);
            }
            if (h !== null) var X = !0;
            else {
              var J = d(C);
              J !== null && de(fe, J.startTime - K), (X = !1);
            }
            return X;
          } finally {
            (h = null), (m = M), (P = !1);
          }
        }
        var je = !1,
          Me = null,
          Xe = -1,
          Et = 5,
          mt = -1;
        function Kt() {
          return !(g.unstable_now() - mt < Et);
        }
        function ct() {
          if (Me !== null) {
            var N = g.unstable_now();
            mt = N;
            var K = !0;
            try {
              K = Me(!0, N);
            } finally {
              K ? We() : ((je = !1), (Me = null));
            }
          } else je = !1;
        }
        var We;
        if (typeof ze == 'function')
          We = function () {
            ze(ct);
          };
        else if (typeof MessageChannel < 'u') {
          var nt = new MessageChannel(),
            ft = nt.port2;
          (nt.port1.onmessage = ct),
            (We = function () {
              ft.postMessage(null);
            });
        } else
          We = function () {
            B(ct, 0);
          };
        function De(N) {
          (Me = N), je || ((je = !0), We());
        }
        function de(N, K) {
          Xe = B(function () {
            N(g.unstable_now());
          }, K);
        }
        (g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            R || P || ((R = !0), De(tt));
          }),
          (g.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Et = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return d(_);
          }),
          (g.unstable_next = function (N) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = m;
            }
            var M = m;
            m = K;
            try {
              return N();
            } finally {
              m = M;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (N, K) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var M = m;
            m = N;
            try {
              return K();
            } finally {
              m = M;
            }
          }),
          (g.unstable_scheduleCallback = function (N, K, M) {
            var c = g.unstable_now();
            switch (
              (typeof M == 'object' && M !== null
                ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? c + M : c))
                : (M = c),
              N)
            ) {
              case 1:
                var w = -1;
                break;
              case 2:
                w = 250;
                break;
              case 5:
                w = 1073741823;
                break;
              case 4:
                w = 1e4;
                break;
              default:
                w = 5e3;
            }
            return (
              (w = M + w),
              (N = {
                id: E++,
                callback: K,
                priorityLevel: N,
                startTime: M,
                expirationTime: w,
                sortIndex: -1,
              }),
              M > c
                ? ((N.sortIndex = M),
                  z(C, N),
                  d(_) === null &&
                    N === d(C) &&
                    (O ? (ve(Xe), (Xe = -1)) : (O = !0), de(fe, M - c)))
                : ((N.sortIndex = w), z(_, N), R || P || ((R = !0), De(tt))),
              N
            );
          }),
          (g.unstable_shouldYield = Kt),
          (g.unstable_wrapCallback = function (N) {
            var K = m;
            return function () {
              var M = m;
              m = K;
              try {
                return N.apply(this, arguments);
              } finally {
                m = M;
              }
            };
          });
      })($i)),
    $i
  );
}
var nc;
function Sd() {
  return nc || ((nc = 1), (Wi.exports = wd())), Wi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc;
function xd() {
  if (rc) return Ve;
  rc = 1;
  var g = sn(),
    z = Sd();
  function d(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var $ = new Set(),
    W = {};
  function T(e, t) {
    V(e, t), V(e + 'Capture', t);
  }
  function V(e, t) {
    for (W[e] = t, e = 0; e < t.length; e++) $.add(t[e]);
  }
  var U = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    _ = Object.prototype.hasOwnProperty,
    C =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    E = {},
    h = {};
  function m(e) {
    return _.call(h, e) ? !0 : _.call(E, e) ? !1 : C.test(e) ? (h[e] = !0) : ((E[e] = !0), !1);
  }
  function P(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function R(e, t, n, r) {
    if (t === null || typeof t > 'u' || P(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function O(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var B = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      B[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      B[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      B[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        B[e] = new O(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        B[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      B[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      B[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      B[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      B[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ve = /[\-:]([a-z])/g;
  function ze(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ve, ze);
      B[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(ve, ze);
        B[t] = new O(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(ve, ze);
      B[t] = new O(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      B[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (B.xlinkHref = new O('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      B[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Le(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (R(t, n, l, r) && (n = null),
      r || l === null
        ? m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var fe = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    je = Symbol.for('react.portal'),
    Me = Symbol.for('react.fragment'),
    Xe = Symbol.for('react.strict_mode'),
    Et = Symbol.for('react.profiler'),
    mt = Symbol.for('react.provider'),
    Kt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    We = Symbol.for('react.suspense'),
    nt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    De = Symbol.for('react.lazy'),
    de = Symbol.for('react.offscreen'),
    N = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (N && e[N]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var M = Object.assign,
    c;
  function w(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || '';
      }
    return (
      `
` +
      c +
      e
    );
  }
  var X = !1;
  function J(e, t) {
    if (!e || X) return '';
    X = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (v) {
            var r = v;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (v) {
            r = v;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (v) {
          r = v;
        }
        e();
      }
    } catch (v) {
      if (v && r && typeof v.stack == 'string') {
        for (
          var l = v.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];

        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var s =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (X = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? w(e) : '';
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return w(e.type);
      case 16:
        return w('Lazy');
      case 13:
        return w('Suspense');
      case 19:
        return w('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = J(e.type, !1)), e;
      case 11:
        return (e = J(e.type.render, !1)), e;
      case 1:
        return (e = J(e.type, !0)), e;
      default:
        return '';
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Me:
        return 'Fragment';
      case je:
        return 'Portal';
      case Et:
        return 'Profiler';
      case Xe:
        return 'StrictMode';
      case We:
        return 'Suspense';
      case nt:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Kt:
          return (e.displayName || 'Context') + '.Consumer';
        case mt:
          return (e._context.displayName || 'Context') + '.Provider';
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ft:
          return (t = e.displayName || null), t !== null ? t : b(e.type) || 'Memo';
        case De:
          (t = e._payload), (e = e._init);
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  function re(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return b(t);
      case 8:
        return t === Xe ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function $e(e) {
    var t = ue(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = '' + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Hi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ue(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function xr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Qi(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = te(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function Ki(e, t) {
    (t = t.checked), t != null && Le(e, 'checked', t, !1);
  }
  function Dl(e, t) {
    Ki(e, t);
    var n = te(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Il(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Il(e, t.type, te(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Yi(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== 'number' || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Mn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Xi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(d(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Gi(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Ji(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function qi(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ul(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? qi(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var _r,
    Zi = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          _r = _r || document.createElement('div'),
            _r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = _r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
      strokeWidth: !0,
    },
    cc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(In).forEach(function (e) {
    cc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
    });
  });
  function bi(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function eu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = bi(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var fc = M(
    { menuitem: !0 },
    {
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
      wbr: !0,
    },
  );
  function Al(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(d(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(d(62));
    }
  }
  function Bl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Vl = null;
  function Wl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    cn = null,
    fn = null;
  function tu(e) {
    if ((e = lr(e))) {
      if (typeof $l != 'function') throw Error(d(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function nu(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function ru() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), tu(e), t)) for (e = 0; e < t.length; e++) tu(t[e]);
    }
  }
  function lu(e, t) {
    return e(t);
  }
  function ou() {}
  var Hl = !1;
  function iu(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return lu(e, t, n);
    } finally {
      (Hl = !1), (cn !== null || fn !== null) && (ou(), ru());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(d(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if (U)
    try {
      var Un = {};
      Object.defineProperty(Un, 'passive', {
        get: function () {
          Ql = !0;
        },
      }),
        window.addEventListener('test', Un, Un),
        window.removeEventListener('test', Un, Un);
    } catch {
      Ql = !1;
    }
  function dc(e, t, n, r, l, o, i, u, s) {
    var v = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, v);
    } catch (S) {
      this.onError(S);
    }
  }
  var An = !1,
    kr = null,
    Pr = !1,
    Kl = null,
    pc = {
      onError: function (e) {
        (An = !0), (kr = e);
      },
    };
  function vc(e, t, n, r, l, o, i, u, s) {
    (An = !1), (kr = null), dc.apply(pc, arguments);
  }
  function hc(e, t, n, r, l, o, i, u, s) {
    if ((vc.apply(this, arguments), An)) {
      if (An) {
        var v = kr;
        (An = !1), (kr = null);
      } else throw Error(d(198));
      Pr || ((Pr = !0), (Kl = v));
    }
  }
  function Yt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function uu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function su(e) {
    if (Yt(e) !== e) throw Error(d(188));
  }
  function gc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return su(l), e;
          if (o === r) return su(l), t;
          o = o.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              (i = !0), (n = o), (r = l);
              break;
            }
            if (u === r) {
              (i = !0), (r = o), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function au(e) {
    return (e = gc(e)), e !== null ? cu(e) : null;
  }
  function cu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = cu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var fu = z.unstable_scheduleCallback,
    du = z.unstable_cancelCallback,
    mc = z.unstable_shouldYield,
    yc = z.unstable_requestPaint,
    he = z.unstable_now,
    wc = z.unstable_getCurrentPriorityLevel,
    Yl = z.unstable_ImmediatePriority,
    pu = z.unstable_UserBlockingPriority,
    Cr = z.unstable_NormalPriority,
    Sc = z.unstable_LowPriority,
    vu = z.unstable_IdlePriority,
    Er = null,
    dt = null;
  function xc(e) {
    if (dt && typeof dt.onCommitFiberRoot == 'function')
      try {
        dt.onCommitFiberRoot(Er, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : Pc,
    _c = Math.log,
    kc = Math.LN2;
  function Pc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / kc) | 0)) | 0;
  }
  var Or = 64,
    Nr = 4194304;
  function Bn(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Bn(u)) : ((o &= i), o !== 0 && (r = Bn(o)));
    } else (i = n & ~l), i !== 0 ? (r = Bn(i)) : o !== 0 && (r = Bn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Cc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function Ec(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - rt(o),
        u = 1 << i,
        s = l[i];
      s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Cc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (o &= ~u);
    }
  }
  function Xl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function hu() {
    var e = Or;
    return (Or <<= 1), (Or & 4194240) === 0 && (Or = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n);
  }
  function Oc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - rt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Jl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ne = 0;
  function gu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var mu,
    ql,
    yu,
    wu,
    Su,
    Zl = !1,
    jr = [],
    Ot = null,
    Nt = null,
    zt = null,
    Wn = new Map(),
    $n = new Map(),
    jt = [],
    Nc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function xu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ot = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Nt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        zt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Wn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        $n.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && ql(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (Ot = Hn(Ot, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Nt = Hn(Nt, e, t, n, r, l)), !0;
      case 'mouseover':
        return (zt = Hn(zt, e, t, n, r, l)), !0;
      case 'pointerover':
        var o = l.pointerId;
        return Wn.set(o, Hn(Wn.get(o) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (o = l.pointerId), $n.set(o, Hn($n.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function _u(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = uu(n)), t !== null)) {
            (e.blockedOn = t),
              Su(e.priority, function () {
                yu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Vl = r), n.target.dispatchEvent(r), (Vl = null);
      } else return (t = lr(n)), t !== null && ql(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function jc() {
    (Zl = !1),
      Ot !== null && Rr(Ot) && (Ot = null),
      Nt !== null && Rr(Nt) && (Nt = null),
      zt !== null && Rr(zt) && (zt = null),
      Wn.forEach(ku),
      $n.forEach(ku);
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), z.unstable_scheduleCallback(z.unstable_NormalPriority, jc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < jr.length) {
      Qn(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ot !== null && Qn(Ot, e),
        Nt !== null && Qn(Nt, e),
        zt !== null && Qn(zt, e),
        Wn.forEach(t),
        $n.forEach(t),
        n = 0;
      n < jt.length;
      n++
    )
      (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
      _u(n), n.blockedOn === null && jt.shift();
  }
  var dn = fe.ReactCurrentBatchConfig,
    Tr = !0;
  function Rc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      (ne = 1), bl(e, t, n, r);
    } finally {
      (ne = l), (dn.transition = o);
    }
  }
  function Tc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      (ne = 4), bl(e, t, n, r);
    } finally {
      (ne = l), (dn.transition = o);
    }
  }
  function bl(e, t, n, r) {
    if (Tr) {
      var l = eo(e, t, n, r);
      if (l === null) yo(e, t, r, Lr, n), xu(e, r);
      else if (zc(l, e, t, n, r)) r.stopPropagation();
      else if ((xu(e, r), t & 4 && -1 < Nc.indexOf(e))) {
        for (; l !== null; ) {
          var o = lr(l);
          if (
            (o !== null && mu(o), (o = eo(e, t, n, r)), o === null && yo(e, t, r, Lr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else yo(e, t, r, null, n);
    }
  }
  var Lr = null;
  function eo(e, t, n, r) {
    if (((Lr = null), (e = Wl(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = uu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Lr = e), null;
  }
  function Pu(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (wc()) {
          case Yl:
            return 1;
          case pu:
            return 4;
          case Cr:
          case Sc:
            return 16;
          case vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    to = null,
    Mr = null;
  function Cu() {
    if (Mr) return Mr;
    var e,
      t = to,
      n = t.length,
      r,
      l = 'value' in Rt ? Rt.value : Rt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ir() {
    return !0;
  }
  function Eu() {
    return !1;
  }
  function He(e) {
    function t(n, r, l, o, i) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ir
          : Eu),
        (this.isPropagationStopped = Eu),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ir));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ir));
        },
        persist: function () {},
        isPersistent: Ir,
      }),
      t
    );
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    no = He(pn),
    Yn = M({}, pn, { view: 0, detail: 0 }),
    Lc = He(Yn),
    ro,
    lo,
    Xn,
    Fr = M({}, Yn, {
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
      getModifierState: io,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Xn &&
              (Xn && e.type === 'mousemove'
                ? ((ro = e.screenX - Xn.screenX), (lo = e.screenY - Xn.screenY))
                : (lo = ro = 0),
              (Xn = e)),
            ro);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : lo;
      },
    }),
    Ou = He(Fr),
    Mc = M({}, Fr, { dataTransfer: 0 }),
    Dc = He(Mc),
    Ic = M({}, Yn, { relatedTarget: 0 }),
    oo = He(Ic),
    Fc = M({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = He(Fc),
    Ac = M({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bc = He(Ac),
    Vc = M({}, pn, { data: 0 }),
    Nu = He(Vc),
    Wc = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    $c = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Hc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Qc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hc[e]) ? !!t[e] : !1;
  }
  function io() {
    return Qc;
  }
  var Kc = M({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Wc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $c[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: io,
      charCode: function (e) {
        return e.type === 'keypress' ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Dr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Yc = He(Kc),
    Xc = M({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zu = He(Xc),
    Gc = M({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: io,
    }),
    Jc = He(Gc),
    qc = M({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zc = He(qc),
    bc = M({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ef = He(bc),
    tf = [9, 13, 27, 32],
    uo = U && 'CompositionEvent' in window,
    Gn = null;
  U && 'documentMode' in document && (Gn = document.documentMode);
  var nf = U && 'TextEvent' in window && !Gn,
    ju = U && (!uo || (Gn && 8 < Gn && 11 >= Gn)),
    Ru = ' ',
    Tu = !1;
  function Lu(e, t) {
    switch (e) {
      case 'keyup':
        return tf.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Mu(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var vn = !1;
  function rf(e, t) {
    switch (e) {
      case 'compositionend':
        return Mu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Tu = !0), Ru);
      case 'textInput':
        return (e = t.data), e === Ru && Tu ? null : e;
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (vn)
      return e === 'compositionend' || (!uo && Lu(e, t))
        ? ((e = Cu()), (Mr = to = Rt = null), (vn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return ju && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var of = {
    'color': !0,
    'date': !0,
    'datetime': !0,
    'datetime-local': !0,
    'email': !0,
    'month': !0,
    'number': !0,
    'password': !0,
    'range': !0,
    'search': !0,
    'tel': !0,
    'text': !0,
    'time': !0,
    'url': !0,
    'week': !0,
  };
  function Du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!of[e.type] : t === 'textarea';
  }
  function Iu(e, t, n, r) {
    nu(r),
      (t = Wr(t, 'onChange')),
      0 < t.length &&
        ((n = new no('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var Jn = null,
    qn = null;
  function uf(e) {
    es(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Hi(t)) return e;
  }
  function sf(e, t) {
    if (e === 'change') return t;
  }
  var Fu = !1;
  if (U) {
    var so;
    if (U) {
      var ao = 'oninput' in document;
      if (!ao) {
        var Uu = document.createElement('div');
        Uu.setAttribute('oninput', 'return;'), (ao = typeof Uu.oninput == 'function');
      }
      so = ao;
    } else so = !1;
    Fu = so && (!document.documentMode || 9 < document.documentMode);
  }
  function Au() {
    Jn && (Jn.detachEvent('onpropertychange', Bu), (qn = Jn = null));
  }
  function Bu(e) {
    if (e.propertyName === 'value' && Ur(qn)) {
      var t = [];
      Iu(t, qn, e, Wl(e)), iu(uf, t);
    }
  }
  function af(e, t, n) {
    e === 'focusin'
      ? (Au(), (Jn = t), (qn = n), Jn.attachEvent('onpropertychange', Bu))
      : e === 'focusout' && Au();
  }
  function cf(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ur(qn);
  }
  function ff(e, t) {
    if (e === 'click') return Ur(t);
  }
  function df(e, t) {
    if (e === 'input' || e === 'change') return Ur(t);
  }
  function pf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == 'function' ? Object.is : pf;
  function Zn(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!_.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wu(e, t) {
    var n = Vu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Vu(n);
    }
  }
  function $u(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? $u(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Hu() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function vf(e) {
    var t = Hu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $u(n.ownerDocument.documentElement, n)) {
      if (r !== null && co(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Wu(n, o));
          var i = Wu(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var hf = U && 'documentMode' in document && 11 >= document.documentMode,
    hn = null,
    fo = null,
    bn = null,
    po = !1;
  function Qu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    po ||
      hn == null ||
      hn !== xr(r) ||
      ((r = hn),
      'selectionStart' in r && co(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && Zn(bn, r)) ||
        ((bn = r),
        (r = Wr(fo, 'onSelect')),
        0 < r.length &&
          ((t = new no('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function Ar(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var gn = {
      animationend: Ar('Animation', 'AnimationEnd'),
      animationiteration: Ar('Animation', 'AnimationIteration'),
      animationstart: Ar('Animation', 'AnimationStart'),
      transitionend: Ar('Transition', 'TransitionEnd'),
    },
    vo = {},
    Ku = {};
  U &&
    ((Ku = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    'TransitionEvent' in window || delete gn.transitionend.transition);
  function Br(e) {
    if (vo[e]) return vo[e];
    if (!gn[e]) return e;
    var t = gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ku) return (vo[e] = t[n]);
    return e;
  }
  var Yu = Br('animationend'),
    Xu = Br('animationiteration'),
    Gu = Br('animationstart'),
    Ju = Br('transitionend'),
    qu = new Map(),
    Zu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Tt(e, t) {
    qu.set(e, t), T(t, [e]);
  }
  for (var ho = 0; ho < Zu.length; ho++) {
    var go = Zu[ho],
      gf = go.toLowerCase(),
      mf = go[0].toUpperCase() + go.slice(1);
    Tt(gf, 'on' + mf);
  }
  Tt(Yu, 'onAnimationEnd'),
    Tt(Xu, 'onAnimationIteration'),
    Tt(Gu, 'onAnimationStart'),
    Tt('dblclick', 'onDoubleClick'),
    Tt('focusin', 'onFocus'),
    Tt('focusout', 'onBlur'),
    Tt(Ju, 'onTransitionEnd'),
    V('onMouseEnter', ['mouseout', 'mouseover']),
    V('onMouseLeave', ['mouseout', 'mouseover']),
    V('onPointerEnter', ['pointerout', 'pointerover']),
    V('onPointerLeave', ['pointerout', 'pointerover']),
    T('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    T(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    T('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    T('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    T(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    T(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var er =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(er));
  function bu(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), hc(r, t, void 0, e), (e.currentTarget = null);
  }
  function es(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              s = u.instance,
              v = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
            bu(l, u, v), (o = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (v = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            bu(l, u, v), (o = s);
          }
      }
    }
    if (Pr) throw ((e = Kl), (Pr = !1), (Kl = null), e);
  }
  function oe(e, t) {
    var n = t[Po];
    n === void 0 && (n = t[Po] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ts(t, e, 2, !1), n.add(r));
  }
  function mo(e, t, n) {
    var r = 0;
    t && (r |= 4), ts(n, e, r, t);
  }
  var Vr = '_reactListening' + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Vr]) {
      (e[Vr] = !0),
        $.forEach(function (n) {
          n !== 'selectionchange' && (yf.has(n) || mo(n, !1, e), mo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), mo('selectionchange', !1, t));
    }
  }
  function ts(e, t, n, r) {
    switch (Pu(t)) {
      case 1:
        var l = Rc;
        break;
      case 4:
        l = Tc;
        break;
      default:
        l = bl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ql || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function yo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = Xt(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    iu(function () {
      var v = o,
        S = Wl(n),
        x = [];
      e: {
        var y = qu.get(e);
        if (y !== void 0) {
          var j = no,
            D = e;
          switch (e) {
            case 'keypress':
              if (Dr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              j = Yc;
              break;
            case 'focusin':
              (D = 'focus'), (j = oo);
              break;
            case 'focusout':
              (D = 'blur'), (j = oo);
              break;
            case 'beforeblur':
            case 'afterblur':
              j = oo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              j = Ou;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              j = Dc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              j = Jc;
              break;
            case Yu:
            case Xu:
            case Gu:
              j = Uc;
              break;
            case Ju:
              j = Zc;
              break;
            case 'scroll':
              j = Lc;
              break;
            case 'wheel':
              j = ef;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              j = Bc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              j = zu;
          }
          var F = (t & 4) !== 0,
            ge = !F && e === 'scroll',
            f = F ? (y !== null ? y + 'Capture' : null) : y;
          F = [];
          for (var a = v, p; a !== null; ) {
            p = a;
            var k = p.stateNode;
            if (
              (p.tag === 5 &&
                k !== null &&
                ((p = k), f !== null && ((k = Fn(a, f)), k != null && F.push(nr(a, k, p)))),
              ge)
            )
              break;
            a = a.return;
          }
          0 < F.length && ((y = new j(y, D, null, n, S)), x.push({ event: y, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (j = e === 'mouseout' || e === 'pointerout'),
            y && n !== Vl && (D = n.relatedTarget || n.fromElement) && (Xt(D) || D[yt]))
          )
            break e;
          if (
            (j || y) &&
            ((y =
              S.window === S
                ? S
                : (y = S.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            j
              ? ((D = n.relatedTarget || n.toElement),
                (j = v),
                (D = D ? Xt(D) : null),
                D !== null &&
                  ((ge = Yt(D)), D !== ge || (D.tag !== 5 && D.tag !== 6)) &&
                  (D = null))
              : ((j = null), (D = v)),
            j !== D)
          ) {
            if (
              ((F = Ou),
              (k = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((F = zu), (k = 'onPointerLeave'), (f = 'onPointerEnter'), (a = 'pointer')),
              (ge = j == null ? y : wn(j)),
              (p = D == null ? y : wn(D)),
              (y = new F(k, a + 'leave', j, n, S)),
              (y.target = ge),
              (y.relatedTarget = p),
              (k = null),
              Xt(S) === v &&
                ((F = new F(f, a + 'enter', D, n, S)),
                (F.target = p),
                (F.relatedTarget = ge),
                (k = F)),
              (ge = k),
              j && D)
            )
              t: {
                for (F = j, f = D, a = 0, p = F; p; p = mn(p)) a++;
                for (p = 0, k = f; k; k = mn(k)) p++;
                for (; 0 < a - p; ) (F = mn(F)), a--;
                for (; 0 < p - a; ) (f = mn(f)), p--;
                for (; a--; ) {
                  if (F === f || (f !== null && F === f.alternate)) break t;
                  (F = mn(F)), (f = mn(f));
                }
                F = null;
              }
            else F = null;
            j !== null && ns(x, y, j, F, !1), D !== null && ge !== null && ns(x, ge, D, F, !0);
          }
        }
        e: {
          if (
            ((y = v ? wn(v) : window),
            (j = y.nodeName && y.nodeName.toLowerCase()),
            j === 'select' || (j === 'input' && y.type === 'file'))
          )
            var A = sf;
          else if (Du(y))
            if (Fu) A = df;
            else {
              A = cf;
              var H = af;
            }
          else
            (j = y.nodeName) &&
              j.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (A = ff);
          if (A && (A = A(e, v))) {
            Iu(x, A, n, S);
            break e;
          }
          H && H(e, y, v),
            e === 'focusout' &&
              (H = y._wrapperState) &&
              H.controlled &&
              y.type === 'number' &&
              Il(y, 'number', y.value);
        }
        switch (((H = v ? wn(v) : window), e)) {
          case 'focusin':
            (Du(H) || H.contentEditable === 'true') && ((hn = H), (fo = v), (bn = null));
            break;
          case 'focusout':
            bn = fo = hn = null;
            break;
          case 'mousedown':
            po = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (po = !1), Qu(x, n, S);
            break;
          case 'selectionchange':
            if (hf) break;
          case 'keydown':
          case 'keyup':
            Qu(x, n, S);
        }
        var Q;
        if (uo)
          e: {
            switch (e) {
              case 'compositionstart':
                var Y = 'onCompositionStart';
                break e;
              case 'compositionend':
                Y = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Y = 'onCompositionUpdate';
                break e;
            }
            Y = void 0;
          }
        else
          vn
            ? Lu(e, n) && (Y = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Y = 'onCompositionStart');
        Y &&
          (ju &&
            n.locale !== 'ko' &&
            (vn || Y !== 'onCompositionStart'
              ? Y === 'onCompositionEnd' && vn && (Q = Cu())
              : ((Rt = S), (to = 'value' in Rt ? Rt.value : Rt.textContent), (vn = !0))),
          (H = Wr(v, Y)),
          0 < H.length &&
            ((Y = new Nu(Y, e, null, n, S)),
            x.push({ event: Y, listeners: H }),
            Q ? (Y.data = Q) : ((Q = Mu(n)), Q !== null && (Y.data = Q)))),
          (Q = nf ? rf(e, n) : lf(e, n)) &&
            ((v = Wr(v, 'onBeforeInput')),
            0 < v.length &&
              ((S = new Nu('onBeforeInput', 'beforeinput', null, n, S)),
              x.push({ event: S, listeners: v }),
              (S.data = Q)));
      }
      es(x, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Fn(e, n)),
        o != null && r.unshift(nr(e, o, l)),
        (o = Fn(e, t)),
        o != null && r.push(nr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function mn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ns(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        v = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        v !== null &&
        ((u = v),
        l
          ? ((s = Fn(n, o)), s != null && i.unshift(nr(n, s, u)))
          : l || ((s = Fn(n, o)), s != null && i.push(nr(n, s, u)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var wf = /\r\n?/g,
    Sf = /\u0000|\uFFFD/g;
  function rs(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wf,
        `
`,
      )
      .replace(Sf, '');
  }
  function $r(e, t, n) {
    if (((t = rs(t)), rs(e) !== t && n)) throw Error(d(425));
  }
  function Hr() {}
  var wo = null,
    So = null;
  function xo(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _o = typeof setTimeout == 'function' ? setTimeout : void 0,
    xf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ls = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ls < 'u'
          ? function (e) {
              return ls.resolve(null).then(e).catch(kf);
            }
          : _o;
  function kf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ko(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), Kn(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function os(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2),
    pt = '__reactFiber$' + yn,
    rr = '__reactProps$' + yn,
    yt = '__reactContainer$' + yn,
    Po = '__reactEvents$' + yn,
    Pf = '__reactListeners$' + yn,
    Cf = '__reactHandles$' + yn;
  function Xt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[yt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = os(e); e !== null; ) {
            if ((n = e[pt])) return n;
            e = os(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[yt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Co = [],
    Sn = -1;
  function Mt(e) {
    return { current: e };
  }
  function ie(e) {
    0 > Sn || ((e.current = Co[Sn]), (Co[Sn] = null), Sn--);
  }
  function le(e, t) {
    Sn++, (Co[Sn] = e.current), (e.current = t);
  }
  var Dt = {},
    Ce = Mt(Dt),
    Ie = Mt(!1),
    Gt = Dt;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Fe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Kr() {
    ie(Ie), ie(Ce);
  }
  function is(e, t, n) {
    if (Ce.current !== Dt) throw Error(d(168));
    le(Ce, t), le(Ie, n);
  }
  function us(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, re(e) || 'Unknown', l));
    return M({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Gt = Ce.current),
      le(Ce, e),
      le(Ie, Ie.current),
      !0
    );
  }
  function ss(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n
      ? ((e = us(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ie(Ie),
        ie(Ce),
        le(Ce, e))
      : ie(Ie),
      le(Ie, n);
  }
  var wt = null,
    Xr = !1,
    Eo = !1;
  function as(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function Ef(e) {
    (Xr = !0), as(e);
  }
  function It() {
    if (!Eo && wt !== null) {
      Eo = !0;
      var e = 0,
        t = ne;
      try {
        var n = wt;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (wt = null), (Xr = !1);
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), fu(Yl, It), l);
      } finally {
        (ne = t), (Eo = !1);
      }
    }
    return null;
  }
  var _n = [],
    kn = 0,
    Gr = null,
    Jr = 0,
    Ge = [],
    Je = 0,
    Jt = null,
    St = 1,
    xt = '';
  function qt(e, t) {
    (_n[kn++] = Jr), (_n[kn++] = Gr), (Gr = e), (Jr = t);
  }
  function cs(e, t, n) {
    (Ge[Je++] = St), (Ge[Je++] = xt), (Ge[Je++] = Jt), (Jt = e);
    var r = St;
    e = xt;
    var l = 32 - rt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - rt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (St = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (xt = o + e);
    } else (St = (1 << o) | (n << l) | r), (xt = e);
  }
  function Oo(e) {
    e.return !== null && (qt(e, 1), cs(e, 1, 0));
  }
  function No(e) {
    for (; e === Gr; ) (Gr = _n[--kn]), (_n[kn] = null), (Jr = _n[--kn]), (_n[kn] = null);
    for (; e === Jt; )
      (Jt = Ge[--Je]),
        (Ge[Je] = null),
        (xt = Ge[--Je]),
        (Ge[Je] = null),
        (St = Ge[--Je]),
        (Ge[Je] = null);
  }
  var Qe = null,
    Ke = null,
    se = !1,
    ot = null;
  function fs(e, t) {
    var n = et(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ds(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Qe = e), (Ke = Lt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Qe = e), (Ke = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = et(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Qe = e),
              (Ke = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jo(e) {
    if (se) {
      var t = Ke;
      if (t) {
        var n = t;
        if (!ds(e, t)) {
          if (zo(e)) throw Error(d(418));
          t = Lt(n.nextSibling);
          var r = Qe;
          t && ds(e, t) ? fs(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e));
        }
      } else {
        if (zo(e)) throw Error(d(418));
        (e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e);
      }
    }
  }
  function ps(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qe = e;
  }
  function qr(e) {
    if (e !== Qe) return !1;
    if (!se) return ps(e), (se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !xo(e.type, e.memoizedProps))),
      t && (t = Ke))
    ) {
      if (zo(e)) throw (vs(), Error(d(418)));
      for (; t; ) fs(e, t), (t = Lt(t.nextSibling));
    }
    if ((ps(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Ke = Lt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Ke = null;
      }
    } else Ke = Qe ? Lt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vs() {
    for (var e = Ke; e; ) e = Lt(e.nextSibling);
  }
  function Pn() {
    (Ke = Qe = null), (se = !1);
  }
  function Ro(e) {
    ot === null ? (ot = [e]) : ot.push(e);
  }
  var Of = fe.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function Zr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        d(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      ))
    );
  }
  function hs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function gs(e) {
    function t(f, a) {
      if (e) {
        var p = f.deletions;
        p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Ht(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, p, k) {
      return a === null || a.tag !== 6
        ? ((a = _i(p, f.mode, k)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function s(f, a, p, k) {
      var A = p.type;
      return A === Me
        ? S(f, a, p.props.children, k, p.key)
        : a !== null &&
            (a.elementType === A ||
              (typeof A == 'object' && A !== null && A.$$typeof === De && hs(A) === a.type))
          ? ((k = l(a, p.props)), (k.ref = or(f, a, p)), (k.return = f), k)
          : ((k = _l(p.type, p.key, p.props, null, f.mode, k)),
            (k.ref = or(f, a, p)),
            (k.return = f),
            k);
    }
    function v(f, a, p, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = ki(p, f.mode, k)), (a.return = f), a)
        : ((a = l(a, p.children || [])), (a.return = f), a);
    }
    function S(f, a, p, k, A) {
      return a === null || a.tag !== 7
        ? ((a = on(p, f.mode, k, A)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function x(f, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = _i('' + a, f.mode, p)), (a.return = f), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case tt:
            return (
              (p = _l(a.type, a.key, a.props, null, f.mode, p)),
              (p.ref = or(f, null, a)),
              (p.return = f),
              p
            );
          case je:
            return (a = ki(a, f.mode, p)), (a.return = f), a;
          case De:
            var k = a._init;
            return x(f, k(a._payload), p);
        }
        if (Mn(a) || K(a)) return (a = on(a, f.mode, p, null)), (a.return = f), a;
        Zr(f, a);
      }
      return null;
    }
    function y(f, a, p, k) {
      var A = a !== null ? a.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return A !== null ? null : u(f, a, '' + p, k);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case tt:
            return p.key === A ? s(f, a, p, k) : null;
          case je:
            return p.key === A ? v(f, a, p, k) : null;
          case De:
            return (A = p._init), y(f, a, A(p._payload), k);
        }
        if (Mn(p) || K(p)) return A !== null ? null : S(f, a, p, k, null);
        Zr(f, p);
      }
      return null;
    }
    function j(f, a, p, k, A) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (f = f.get(p) || null), u(a, f, '' + k, A);
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case tt:
            return (f = f.get(k.key === null ? p : k.key) || null), s(a, f, k, A);
          case je:
            return (f = f.get(k.key === null ? p : k.key) || null), v(a, f, k, A);
          case De:
            var H = k._init;
            return j(f, a, p, H(k._payload), A);
        }
        if (Mn(k) || K(k)) return (f = f.get(p) || null), S(a, f, k, A, null);
        Zr(a, k);
      }
      return null;
    }
    function D(f, a, p, k) {
      for (var A = null, H = null, Q = a, Y = (a = 0), _e = null; Q !== null && Y < p.length; Y++) {
        Q.index > Y ? ((_e = Q), (Q = null)) : (_e = Q.sibling);
        var ee = y(f, Q, p[Y], k);
        if (ee === null) {
          Q === null && (Q = _e);
          break;
        }
        e && Q && ee.alternate === null && t(f, Q),
          (a = o(ee, a, Y)),
          H === null ? (A = ee) : (H.sibling = ee),
          (H = ee),
          (Q = _e);
      }
      if (Y === p.length) return n(f, Q), se && qt(f, Y), A;
      if (Q === null) {
        for (; Y < p.length; Y++)
          (Q = x(f, p[Y], k)),
            Q !== null && ((a = o(Q, a, Y)), H === null ? (A = Q) : (H.sibling = Q), (H = Q));
        return se && qt(f, Y), A;
      }
      for (Q = r(f, Q); Y < p.length; Y++)
        (_e = j(Q, f, Y, p[Y], k)),
          _e !== null &&
            (e && _e.alternate !== null && Q.delete(_e.key === null ? Y : _e.key),
            (a = o(_e, a, Y)),
            H === null ? (A = _e) : (H.sibling = _e),
            (H = _e));
      return (
        e &&
          Q.forEach(function (Qt) {
            return t(f, Qt);
          }),
        se && qt(f, Y),
        A
      );
    }
    function F(f, a, p, k) {
      var A = K(p);
      if (typeof A != 'function') throw Error(d(150));
      if (((p = A.call(p)), p == null)) throw Error(d(151));
      for (
        var H = (A = null), Q = a, Y = (a = 0), _e = null, ee = p.next();
        Q !== null && !ee.done;
        Y++, ee = p.next()
      ) {
        Q.index > Y ? ((_e = Q), (Q = null)) : (_e = Q.sibling);
        var Qt = y(f, Q, ee.value, k);
        if (Qt === null) {
          Q === null && (Q = _e);
          break;
        }
        e && Q && Qt.alternate === null && t(f, Q),
          (a = o(Qt, a, Y)),
          H === null ? (A = Qt) : (H.sibling = Qt),
          (H = Qt),
          (Q = _e);
      }
      if (ee.done) return n(f, Q), se && qt(f, Y), A;
      if (Q === null) {
        for (; !ee.done; Y++, ee = p.next())
          (ee = x(f, ee.value, k)),
            ee !== null && ((a = o(ee, a, Y)), H === null ? (A = ee) : (H.sibling = ee), (H = ee));
        return se && qt(f, Y), A;
      }
      for (Q = r(f, Q); !ee.done; Y++, ee = p.next())
        (ee = j(Q, f, Y, ee.value, k)),
          ee !== null &&
            (e && ee.alternate !== null && Q.delete(ee.key === null ? Y : ee.key),
            (a = o(ee, a, Y)),
            H === null ? (A = ee) : (H.sibling = ee),
            (H = ee));
      return (
        e &&
          Q.forEach(function (id) {
            return t(f, id);
          }),
        se && qt(f, Y),
        A
      );
    }
    function ge(f, a, p, k) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === Me &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case tt:
            e: {
              for (var A = p.key, H = a; H !== null; ) {
                if (H.key === A) {
                  if (((A = p.type), A === Me)) {
                    if (H.tag === 7) {
                      n(f, H.sibling), (a = l(H, p.props.children)), (a.return = f), (f = a);
                      break e;
                    }
                  } else if (
                    H.elementType === A ||
                    (typeof A == 'object' && A !== null && A.$$typeof === De && hs(A) === H.type)
                  ) {
                    n(f, H.sibling),
                      (a = l(H, p.props)),
                      (a.ref = or(f, H, p)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, H);
                  break;
                } else t(f, H);
                H = H.sibling;
              }
              p.type === Me
                ? ((a = on(p.props.children, f.mode, k, p.key)), (a.return = f), (f = a))
                : ((k = _l(p.type, p.key, p.props, null, f.mode, k)),
                  (k.ref = or(f, a, p)),
                  (k.return = f),
                  (f = k));
            }
            return i(f);
          case je:
            e: {
              for (H = p.key; a !== null; ) {
                if (a.key === H)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    n(f, a.sibling), (a = l(a, p.children || [])), (a.return = f), (f = a);
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              (a = ki(p, f.mode, k)), (a.return = f), (f = a);
            }
            return i(f);
          case De:
            return (H = p._init), ge(f, a, H(p._payload), k);
        }
        if (Mn(p)) return D(f, a, p, k);
        if (K(p)) return F(f, a, p, k);
        Zr(f, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a))
            : (n(f, a), (a = _i(p, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return ge;
  }
  var Cn = gs(!0),
    ms = gs(!1),
    br = Mt(null),
    el = null,
    En = null,
    To = null;
  function Lo() {
    To = En = el = null;
  }
  function Mo(e) {
    var t = br.current;
    ie(br), (e._currentValue = t);
  }
  function Do(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function On(e, t) {
    (el = e),
      (To = En = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ue = !0), (e.firstContext = null));
  }
  function qe(e) {
    var t = e._currentValue;
    if (To !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), En === null)) {
        if (el === null) throw Error(d(308));
        (En = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else En = En.next = e;
    return t;
  }
  var Zt = null;
  function Io(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function ys(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Io(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      _t(e, r)
    );
  }
  function _t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ft = !1;
  function Fo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ws(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function kt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (q & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), _t(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Io(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      _t(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
    }
  }
  function Ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        v = s.next;
      (s.next = null), i === null ? (o = v) : (i.next = v), (i = s);
      var S = e.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (u = S.lastBaseUpdate),
        u !== i && (u === null ? (S.firstBaseUpdate = v) : (u.next = v), (S.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var x = l.baseState;
      (i = 0), (S = v = s = null), (u = o);
      do {
        var y = u.lane,
          j = u.eventTime;
        if ((r & y) === y) {
          S !== null &&
            (S = S.next =
              {
                eventTime: j,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var D = e,
              F = u;
            switch (((y = t), (j = n), F.tag)) {
              case 1:
                if (((D = F.payload), typeof D == 'function')) {
                  x = D.call(j, x, y);
                  break e;
                }
                x = D;
                break e;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = F.payload), (y = typeof D == 'function' ? D.call(j, x, y) : D), y == null)
                )
                  break e;
                x = M({}, x, y);
                break e;
              case 2:
                Ft = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          (j = {
            eventTime: j,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            S === null ? ((v = S = j), (s = x)) : (S = S.next = j),
            (i |= y);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (y = u), (u = y.next), (y.next = null), (l.lastBaseUpdate = y), (l.shared.pending = null);
        }
      } while (!0);
      if (
        (S === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = v),
        (l.lastBaseUpdate = S),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (tn |= i), (e.lanes = i), (e.memoizedState = x);
    }
  }
  function xs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(d(191, l));
          l.call(r);
        }
      }
  }
  var ir = {},
    vt = Mt(ir),
    ur = Mt(ir),
    sr = Mt(ir);
  function bt(e) {
    if (e === ir) throw Error(d(174));
    return e;
  }
  function Uo(e, t) {
    switch ((le(sr, t), le(ur, e), le(vt, ir), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ul(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ul(t, e));
    }
    ie(vt), le(vt, t);
  }
  function Nn() {
    ie(vt), ie(ur), ie(sr);
  }
  function _s(e) {
    bt(sr.current);
    var t = bt(vt.current),
      n = Ul(t, e.type);
    t !== n && (le(ur, e), le(vt, n));
  }
  function Ao(e) {
    ur.current === e && (ie(vt), ie(ur));
  }
  var ae = Mt(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Bo = [];
  function Vo() {
    for (var e = 0; e < Bo.length; e++) Bo[e]._workInProgressVersionPrimary = null;
    Bo.length = 0;
  }
  var ll = fe.ReactCurrentDispatcher,
    Wo = fe.ReactCurrentBatchConfig,
    en = 0,
    ce = null,
    ye = null,
    Se = null,
    ol = !1,
    ar = !1,
    cr = 0,
    Nf = 0;
  function Ee() {
    throw Error(d(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Ho(e, t, n, r, l, o) {
    if (
      ((en = o),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? Tf : Lf),
      (e = n(r, l)),
      ar)
    ) {
      o = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= o)) throw Error(d(301));
        (o += 1), (Se = ye = null), (t.updateQueue = null), (ll.current = Mf), (e = n(r, l));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = ye !== null && ye.next !== null),
      (en = 0),
      (Se = ye = ce = null),
      (ol = !1),
      t)
    )
      throw Error(d(300));
    return e;
  }
  function Qo() {
    var e = cr !== 0;
    return (cr = 0), e;
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e), Se;
  }
  function Ze() {
    if (ye === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ye.next;
    var t = Se === null ? ce.memoizedState : Se.next;
    if (t !== null) (Se = t), (ye = e);
    else {
      if (e === null) throw Error(d(310));
      (ye = e),
        (e = {
          memoizedState: ye.memoizedState,
          baseState: ye.baseState,
          baseQueue: ye.baseQueue,
          queue: ye.queue,
          next: null,
        }),
        Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e);
    }
    return Se;
  }
  function fr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ko(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = ye,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = o.next), (o.next = i);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var u = (i = null),
        s = null,
        v = o;
      do {
        var S = v.lane;
        if ((en & S) === S)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null,
              }),
            (r = v.hasEagerState ? v.eagerState : e(r, v.action));
        else {
          var x = {
            lane: S,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          };
          s === null ? ((u = s = x), (i = r)) : (s = s.next = x), (ce.lanes |= S), (tn |= S);
        }
        v = v.next;
      } while (v !== null && v !== o);
      s === null ? (i = r) : (s.next = u),
        lt(r, t.memoizedState) || (Ue = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ce.lanes |= o), (tn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yo(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      lt(o, t.memoizedState) || (Ue = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function ks() {}
  function Ps(e, t) {
    var n = ce,
      r = Ze(),
      l = t(),
      o = !lt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ue = !0)),
      (r = r.queue),
      Xo(Os.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, Es.bind(null, n, r, l, t), void 0, null), xe === null))
        throw Error(d(349));
      (en & 30) !== 0 || Cs(n, t, l);
    }
    return l;
  }
  function Cs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Es(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ns(t) && zs(e);
  }
  function Os(e, t, n) {
    return n(function () {
      Ns(t) && zs(e);
    });
  }
  function Ns(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function zs(e) {
    var t = _t(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function js(e) {
    var t = ht();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Rf.bind(null, ce, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Rs() {
    return Ze().memoizedState;
  }
  function il(e, t, n, r) {
    var l = ht();
    (ce.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ul(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var i = ye.memoizedState;
      if (((o = i.destroy), r !== null && $o(r, i.deps))) {
        l.memoizedState = dr(t, n, o, r);
        return;
      }
    }
    (ce.flags |= e), (l.memoizedState = dr(1 | t, n, o, r));
  }
  function Ts(e, t) {
    return il(8390656, 8, e, t);
  }
  function Xo(e, t) {
    return ul(2048, 8, e, t);
  }
  function Ls(e, t) {
    return ul(4, 2, e, t);
  }
  function Ms(e, t) {
    return ul(4, 4, e, t);
  }
  function Ds(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Is(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ul(4, 4, Ds.bind(null, t, e), n);
  }
  function Go() {}
  function Fs(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Us(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function As(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n))
      : (lt(n, t) || ((n = hu()), (ce.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function zf(e, t) {
    var n = ne;
    (ne = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Wo.transition;
    Wo.transition = {};
    try {
      e(!1), t();
    } finally {
      (ne = n), (Wo.transition = r);
    }
  }
  function Bs() {
    return Ze().memoizedState;
  }
  function jf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Vs(e)))
      Ws(t, n);
    else if (((n = ys(e, t, n, r)), n !== null)) {
      var l = Te();
      at(n, e, r, l), $s(n, t, r);
    }
  }
  function Rf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Vs(e)) Ws(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), lt(u, i))) {
            var s = t.interleaved;
            s === null ? ((l.next = l), Io(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ys(e, t, l, r)), n !== null && ((l = Te()), at(n, e, r, l), $s(n, t, r));
    }
  }
  function Vs(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function Ws(e, t) {
    ar = ol = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function $s(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
    }
  }
  var sl = {
      readContext: qe,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    Tf = {
      readContext: qe,
      useCallback: function (e, t) {
        return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: qe,
      useEffect: Ts,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), il(4194308, 4, Ds.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ht();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = ht();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = jf.bind(null, ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: js,
      useDebugValue: Go,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = js(!1),
          t = e[0];
        return (e = zf.bind(null, e[1])), (ht().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ce,
          l = ht();
        if (se) {
          if (n === void 0) throw Error(d(407));
          n = n();
        } else {
          if (((n = t()), xe === null)) throw Error(d(349));
          (en & 30) !== 0 || Cs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ts(Os.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          dr(9, Es.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = xe.identifierPrefix;
        if (se) {
          var n = xt,
            r = St;
          (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = cr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = Nf++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Lf = {
      readContext: qe,
      useCallback: Fs,
      useContext: qe,
      useEffect: Xo,
      useImperativeHandle: Is,
      useInsertionEffect: Ls,
      useLayoutEffect: Ms,
      useMemo: Us,
      useReducer: Ko,
      useRef: Rs,
      useState: function () {
        return Ko(fr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = Ze();
        return As(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Ko(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: Ps,
      useId: Bs,
      unstable_isNewReconciler: !1,
    },
    Mf = {
      readContext: qe,
      useCallback: Fs,
      useContext: qe,
      useEffect: Xo,
      useImperativeHandle: Is,
      useInsertionEffect: Ls,
      useLayoutEffect: Ms,
      useMemo: Us,
      useReducer: Yo,
      useRef: Rs,
      useState: function () {
        return Yo(fr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = Ze();
        return ye === null ? (t.memoizedState = e) : As(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: Ps,
      useId: Bs,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      (t = M({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Jo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Wt(e),
        o = kt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (at(t, e, l, r), tl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Wt(e),
        o = kt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (at(t, e, l, r), tl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Te(),
        r = Wt(e),
        l = kt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (at(t, e, r, n), tl(t, e, r));
    },
  };
  function Hs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Zn(n, r) || !Zn(l, o)
          : !0
    );
  }
  function Qs(e, t, n) {
    var r = !1,
      l = Dt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = qe(o))
        : ((l = Fe(t) ? Gt : Ce.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? xn(e, l) : Dt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ks(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function qo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fo(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = qe(o))
      : ((o = Fe(t) ? Gt : Ce.current), (l.context = xn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (Jo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += Z(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Df = typeof WeakMap == 'function' ? WeakMap : Map;
  function Ys(e, t, n) {
    (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        gl || ((gl = !0), (vi = r)), bo(e, t);
      }),
      n
    );
  }
  function Xs(e, t, n) {
    (n = kt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          bo(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          bo(e, t), typeof r != 'function' && (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function Gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Df();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Gf.bind(null, e, t, n)), t.then(e, e));
  }
  function Js(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = kt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var If = fe.ReactCurrentOwner,
    Ue = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? ms(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Zs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = Ho(e, t, n, r, o, l)),
      (n = Qo()),
      e !== null && !Ue
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (se && n && Oo(t), (t.flags |= 1), Re(e, t, r, l), t.child)
    );
  }
  function bs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !xi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ea(e, t, o, r, l))
        : ((e = _l(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref))
        return Pt(e, t, l);
    }
    return (t.flags |= 1), (e = Ht(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function ea(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zn(o, r) && e.ref === t.ref)
        if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else return (t.lanes = e.lanes), Pt(e, t, l);
    }
    return ei(e, t, n, r, l);
  }
  function ta(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          le(Rn, Ye),
          (Ye |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            le(Rn, Ye),
            (Ye |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          le(Rn, Ye),
          (Ye |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        le(Rn, Ye),
        (Ye |= r);
    return Re(e, t, l, n), t.child;
  }
  function na(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ei(e, t, n, r, l) {
    var o = Fe(n) ? Gt : Ce.current;
    return (
      (o = xn(t, o)),
      On(t, l),
      (n = Ho(e, t, n, r, o, l)),
      (r = Qo()),
      e !== null && !Ue
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (se && r && Oo(t), (t.flags |= 1), Re(e, t, n, l), t.child)
    );
  }
  function ra(e, t, n, r, l) {
    if (Fe(n)) {
      var o = !0;
      Yr(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null)) fl(e, t), Qs(t, n, r), qo(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        v = n.contextType;
      typeof v == 'object' && v !== null
        ? (v = qe(v))
        : ((v = Fe(n) ? Gt : Ce.current), (v = xn(t, v)));
      var S = n.getDerivedStateFromProps,
        x = typeof S == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      x ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== v) && Ks(t, i, r, v)),
        (Ft = !1);
      var y = t.memoizedState;
      (i.state = y),
        nl(t, r, i, l),
        (s = t.memoizedState),
        u !== r || y !== s || Ie.current || Ft
          ? (typeof S == 'function' && (Jo(t, n, S, r), (s = t.memoizedState)),
            (u = Ft || Hs(t, n, u, r, y, s, v))
              ? (x ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = v),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (i = t.stateNode),
        ws(e, t),
        (u = t.memoizedProps),
        (v = t.type === t.elementType ? u : it(t.type, u)),
        (i.props = v),
        (x = t.pendingProps),
        (y = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = qe(s))
          : ((s = Fe(n) ? Gt : Ce.current), (s = xn(t, s)));
      var j = n.getDerivedStateFromProps;
      (S = typeof j == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== x || y !== s) && Ks(t, i, r, s)),
        (Ft = !1),
        (y = t.memoizedState),
        (i.state = y),
        nl(t, r, i, l);
      var D = t.memoizedState;
      u !== x || y !== D || Ie.current || Ft
        ? (typeof j == 'function' && (Jo(t, n, j, r), (D = t.memoizedState)),
          (v = Ft || Hs(t, n, v, r, y, D, s) || !1)
            ? (S ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, D, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, D, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = D)),
          (i.props = r),
          (i.state = D),
          (i.context = s),
          (r = v))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ti(e, t, n, r, o, l);
  }
  function ti(e, t, n, r, l, o) {
    na(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ss(t, n, !1), Pt(e, t, o);
    (r = t.stateNode), (If.current = t);
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, u, o)))
        : Re(e, t, u, o),
      (t.memoizedState = r.state),
      l && ss(t, n, !0),
      t.child
    );
  }
  function la(e) {
    var t = e.stateNode;
    t.pendingContext
      ? is(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && is(e, t.context, !1),
      Uo(e, t.containerInfo);
  }
  function oa(e, t, n, r, l) {
    return Pn(), Ro(l), (t.flags |= 256), Re(e, t, n, r), t.child;
  }
  var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ia(e, t, n) {
    var r = t.pendingProps,
      l = ae.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      le(ae, l & 1),
      e === null)
    )
      return (
        jo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: 'hidden', children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = kl(i, r, 0, null)),
                (e = on(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ri(n)),
                (t.memoizedState = ni),
                e)
              : li(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Ff(e, t, i, r, u, l, n);
    if (o) {
      (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
      var s = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = Ht(u, o)) : ((o = on(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? ri(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ni),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Ht(o, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function li(e, t) {
    return (
      (t = kl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Ro(r),
      Cn(t, e.child, null, n),
      (e = li(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zo(Error(d(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = kl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = on(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, i),
            (t.child.memoizedState = ri(i)),
            (t.memoizedState = ni),
            o);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (r = u), (o = Error(d(419))), (r = Zo(o, r, void 0)), cl(e, t, i, r);
    }
    if (((u = (i & e.childLanes) !== 0), Ue || u)) {
      if (((r = xe), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), _t(e, l), at(r, e, l, -1));
      }
      return Si(), (r = Zo(Error(d(421)))), cl(e, t, i, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Jf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Ke = Lt(l.nextSibling)),
        (Qe = t),
        (se = !0),
        (ot = null),
        e !== null &&
          ((Ge[Je++] = St),
          (Ge[Je++] = xt),
          (Ge[Je++] = Jt),
          (St = e.id),
          (xt = e.overflow),
          (Jt = t)),
        (t = li(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ua(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Do(e.return, t, n);
  }
  function oi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function sa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Re(e, t, r.children, n), (r = ae.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
          else if (e.tag === 19) ua(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((le(ae, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling);
          (n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            oi(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          oi(t, !0, n, null, o);
          break;
        case 'together':
          oi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (tn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Uf(e, t, n) {
    switch (t.tag) {
      case 3:
        la(t), Pn();
        break;
      case 5:
        _s(t);
        break;
      case 1:
        Fe(t.type) && Yr(t);
        break;
      case 4:
        Uo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        le(br, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (le(ae, ae.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ia(e, t, n)
              : (le(ae, ae.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
        le(ae, ae.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return sa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          le(ae, ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ta(e, t, n);
    }
    return Pt(e, t, n);
  }
  var aa, ii, ca, fa;
  (aa = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ii = function () {}),
    (ca = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), bt(vt.current);
        var o = null;
        switch (n) {
          case 'input':
            (l = Ml(e, l)), (r = Ml(e, r)), (o = []);
            break;
          case 'select':
            (l = M({}, l, { value: void 0 })), (r = M({}, r, { value: void 0 })), (o = []);
            break;
          case 'textarea':
            (l = Fl(e, l)), (r = Fl(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Hr);
        }
        Al(n, r);
        var i;
        n = null;
        for (v in l)
          if (!r.hasOwnProperty(v) && l.hasOwnProperty(v) && l[v] != null)
            if (v === 'style') {
              var u = l[v];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              v !== 'dangerouslySetInnerHTML' &&
                v !== 'children' &&
                v !== 'suppressContentEditableWarning' &&
                v !== 'suppressHydrationWarning' &&
                v !== 'autoFocus' &&
                (W.hasOwnProperty(v) ? o || (o = []) : (o = o || []).push(v, null));
        for (v in r) {
          var s = r[v];
          if (
            ((u = l != null ? l[v] : void 0),
            r.hasOwnProperty(v) && s !== u && (s != null || u != null))
          )
            if (v === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else n || (o || (o = []), o.push(v, n)), (n = s);
            else
              v === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (o = o || []).push(v, s))
                : v === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') || (o = o || []).push(v, '' + s)
                  : v !== 'suppressContentEditableWarning' &&
                    v !== 'suppressHydrationWarning' &&
                    (W.hasOwnProperty(v)
                      ? (s != null && v === 'onScroll' && oe('scroll', e), o || u === s || (o = []))
                      : (o = o || []).push(v, s));
        }
        n && (o = o || []).push('style', n);
        var v = o;
        (t.updateQueue = v) && (t.flags |= 4);
      }
    }),
    (fa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function pr(e, t) {
    if (!se)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Af(e, t, n) {
    var r = t.pendingProps;
    switch ((No(t), t.tag)) {
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
        return Oe(t), null;
      case 1:
        return Fe(t.type) && Kr(), Oe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Nn(),
          ie(Ie),
          ie(Ce),
          Vo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ot !== null && (mi(ot), (ot = null)))),
          ii(e, t),
          Oe(t),
          null
        );
      case 5:
        Ao(t);
        var l = bt(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ca(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Oe(t), null;
          }
          if (((e = bt(vt.current)), qr(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                oe('cancel', r), oe('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < er.length; l++) oe(er[l], r);
                break;
              case 'source':
                oe('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', r), oe('load', r);
                break;
              case 'details':
                oe('toggle', r);
                break;
              case 'input':
                Qi(r, o), oe('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), oe('invalid', r);
                break;
              case 'textarea':
                Xi(r, o), oe('invalid', r);
            }
            Al(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && $r(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : W.hasOwnProperty(i) && u != null && i === 'onScroll' && oe('scroll', r);
              }
            switch (n) {
              case 'input':
                Sr(r), Yi(r, o, !0);
                break;
              case 'textarea':
                Sr(r), Ji(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Hr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = qi(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === 'select' &&
                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              aa(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = Bl(n, r)), n)) {
                case 'dialog':
                  oe('cancel', e), oe('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  oe('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < er.length; l++) oe(er[l], e);
                  l = r;
                  break;
                case 'source':
                  oe('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  oe('error', e), oe('load', e), (l = r);
                  break;
                case 'details':
                  oe('toggle', e), (l = r);
                  break;
                case 'input':
                  Qi(e, r), (l = Ml(e, r)), oe('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = M({}, r, { value: void 0 })),
                    oe('invalid', e);
                  break;
                case 'textarea':
                  Xi(e, r), (l = Fl(e, r)), oe('invalid', e);
                  break;
                default:
                  l = r;
              }
              Al(n, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === 'style'
                    ? eu(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Zi(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && Dn(e, s)
                          : typeof s == 'number' && Dn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (W.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && oe('scroll', e)
                            : s != null && Le(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  Sr(e), Yi(e, r, !1);
                  break;
                case 'textarea':
                  Sr(e), Ji(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + te(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? an(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Hr);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null) fa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(d(166));
          if (((n = bt(sr.current)), bt(vt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (o = r.nodeValue !== n) && ((e = Qe), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r);
        }
        return Oe(t), null;
      case 13:
        if (
          (ie(ae),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ke !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            vs(), Pn(), (t.flags |= 98560), (o = !1);
          else if (((o = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(d(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(d(317));
              o[pt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Oe(t), (o = !1);
          } else ot !== null && (mi(ot), (ot = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ae.current & 1) !== 0 ? we === 0 && (we = 3) : Si())),
            t.updateQueue !== null && (t.flags |= 4),
            Oe(t),
            null);
      case 4:
        return Nn(), ii(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Mo(t.type._context), Oe(t), null;
      case 17:
        return Fe(t.type) && Kr(), Oe(t), null;
      case 19:
        if ((ie(ae), (o = t.memoizedState), o === null)) return Oe(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) pr(o, !1);
          else {
            if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      pr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling);
                  return le(ae, (ae.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              he() > Tn &&
              ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !se)
              )
                return Oe(t), null;
            } else
              2 * he() - o.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = he()),
            (t.sibling = null),
            (n = ae.current),
            le(ae, r ? (n & 1) | 2 : n & 1),
            t)
          : (Oe(t), null);
      case 22:
      case 23:
        return (
          wi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ye & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Oe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function Bf(e, t) {
    switch ((No(t), t.tag)) {
      case 1:
        return (
          Fe(t.type) && Kr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          ie(Ie),
          ie(Ce),
          Vo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ao(t), null;
      case 13:
        if ((ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(d(340));
          Pn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ie(ae), null;
      case 4:
        return Nn(), null;
      case 10:
        return Mo(t.type._context), null;
      case 22:
      case 23:
        return wi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Ne = !1,
    Vf = typeof WeakSet == 'function' ? WeakSet : Set,
    L = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          pe(e, t, r);
        }
      else n.current = null;
  }
  function ui(e, t, n) {
    try {
      n();
    } catch (r) {
      pe(e, t, r);
    }
  }
  var da = !1;
  function Wf(e, t) {
    if (((wo = Tr), (e = Hu()), co(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              s = -1,
              v = 0,
              S = 0,
              x = e,
              y = null;
            t: for (;;) {
              for (
                var j;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = i + l),
                  x !== o || (r !== 0 && x.nodeType !== 3) || (s = i + r),
                  x.nodeType === 3 && (i += x.nodeValue.length),
                  (j = x.firstChild) !== null;

              )
                (y = x), (x = j);
              for (;;) {
                if (x === e) break t;
                if (
                  (y === n && ++v === l && (u = i),
                  y === o && ++S === r && (s = i),
                  (j = x.nextSibling) !== null)
                )
                  break;
                (x = y), (y = x.parentNode);
              }
              x = j;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (So = { focusedElem: e, selectionRange: n }, Tr = !1, L = t; L !== null; )
      if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (L = e);
      else
        for (; L !== null; ) {
          t = L;
          try {
            var D = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (D !== null) {
                    var F = D.memoizedProps,
                      ge = D.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? F : it(t.type, F),
                        ge,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = '')
                    : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (k) {
            pe(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (L = e);
            break;
          }
          L = t.return;
        }
    return (D = da), (da = !1), D;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && ui(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function si(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function pa(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), pa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[rr], delete t[Po], delete t[Pf], delete t[Cf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ha(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || va(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), (e = e.sibling);
  }
  function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
  }
  var ke = null,
    ut = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) ga(e, t, n), (n = n.sibling);
  }
  function ga(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == 'function')
      try {
        dt.onCommitFiberUnmount(Er, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ne || jn(n, t);
      case 6:
        var r = ke,
          l = ut;
        (ke = null),
          At(e, t, n),
          (ke = r),
          (ut = l),
          ke !== null &&
            (ut
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ke.removeChild(n.stateNode));
        break;
      case 18:
        ke !== null &&
          (ut
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n),
              Kn(e))
            : ko(ke, n.stateNode));
        break;
      case 4:
        (r = ke),
          (l = ut),
          (ke = n.stateNode.containerInfo),
          (ut = !0),
          At(e, t, n),
          (ke = r),
          (ut = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ne && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ui(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!Ne && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (u) {
            pe(n, t, u);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ne = (r = Ne) || n.memoizedState !== null), At(e, t, n), (Ne = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ma(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Vf()),
        t.forEach(function (r) {
          var l = qf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function st(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (ke = u.stateNode), (ut = !1);
                break e;
              case 3:
                (ke = u.stateNode.containerInfo), (ut = !0);
                break e;
              case 4:
                (ke = u.stateNode.containerInfo), (ut = !0);
                break e;
            }
            u = u.return;
          }
          if (ke === null) throw Error(d(160));
          ga(o, i, l), (ke = null), (ut = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (v) {
          pe(l, t, v);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ya(t, e), (t = t.sibling);
  }
  function ya(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((st(t, e), gt(e), r & 4)) {
          try {
            vr(3, e, e.return), pl(3, e);
          } catch (F) {
            pe(e, e.return, F);
          }
          try {
            vr(5, e, e.return);
          } catch (F) {
            pe(e, e.return, F);
          }
        }
        break;
      case 1:
        st(t, e), gt(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if ((st(t, e), gt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, '');
          } catch (F) {
            pe(e, e.return, F);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === 'input' && o.type === 'radio' && o.name != null && Ki(l, o), Bl(u, i);
              var v = Bl(u, o);
              for (i = 0; i < s.length; i += 2) {
                var S = s[i],
                  x = s[i + 1];
                S === 'style'
                  ? eu(l, x)
                  : S === 'dangerouslySetInnerHTML'
                    ? Zi(l, x)
                    : S === 'children'
                      ? Dn(l, x)
                      : Le(l, S, x, v);
              }
              switch (u) {
                case 'input':
                  Dl(l, o);
                  break;
                case 'textarea':
                  Gi(l, o);
                  break;
                case 'select':
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var j = o.value;
                  j != null
                    ? an(l, !!o.multiple, j, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? an(l, !!o.multiple, o.defaultValue, !0)
                        : an(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[rr] = o;
            } catch (F) {
              pe(e, e.return, F);
            }
        }
        break;
      case 6:
        if ((st(t, e), gt(e), r & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (F) {
            pe(e, e.return, F);
          }
        }
        break;
      case 3:
        if ((st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (F) {
            pe(e, e.return, F);
          }
        break;
      case 4:
        st(t, e), gt(e);
        break;
      case 13:
        st(t, e),
          gt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (pi = he())),
          r & 4 && ma(e);
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ne = (v = Ne) || S), st(t, e), (Ne = v)) : st(t, e),
          gt(e),
          r & 8192)
        ) {
          if (
            ((v = e.memoizedState !== null), (e.stateNode.isHidden = v) && !S && (e.mode & 1) !== 0)
          )
            for (L = e, S = e.child; S !== null; ) {
              for (x = L = S; L !== null; ) {
                switch (((y = L), (j = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, y, y.return);
                    break;
                  case 1:
                    jn(y, y.return);
                    var D = y.stateNode;
                    if (typeof D.componentWillUnmount == 'function') {
                      (r = y), (n = y.return);
                      try {
                        (t = r),
                          (D.props = t.memoizedProps),
                          (D.state = t.memoizedState),
                          D.componentWillUnmount();
                      } catch (F) {
                        pe(r, n, F);
                      }
                    }
                    break;
                  case 5:
                    jn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      xa(x);
                      continue;
                    }
                }
                j !== null ? ((j.return = y), (L = j)) : xa(x);
              }
              S = S.sibling;
            }
          e: for (S = null, x = e; ; ) {
            if (x.tag === 5) {
              if (S === null) {
                S = x;
                try {
                  (l = x.stateNode),
                    v
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = x.stateNode),
                        (s = x.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (u.style.display = bi('display', i)));
                } catch (F) {
                  pe(e, e.return, F);
                }
              }
            } else if (x.tag === 6) {
              if (S === null)
                try {
                  x.stateNode.nodeValue = v ? '' : x.memoizedProps;
                } catch (F) {
                  pe(e, e.return, F);
                }
            } else if (
              ((x.tag !== 22 && x.tag !== 23) || x.memoizedState === null || x === e) &&
              x.child !== null
            ) {
              (x.child.return = x), (x = x.child);
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              S === x && (S = null), (x = x.return);
            }
            S === x && (S = null), (x.sibling.return = x.return), (x = x.sibling);
          }
        }
        break;
      case 19:
        st(t, e), gt(e), r & 4 && ma(e);
        break;
      case 21:
        break;
      default:
        st(t, e), gt(e);
    }
  }
  function gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (va(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ''), (r.flags &= -33));
            var o = ha(e);
            ci(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ha(e);
            ai(e, u, i);
            break;
          default:
            throw Error(d(161));
        }
      } catch (s) {
        pe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $f(e, t, n) {
    (L = e), wa(e);
  }
  function wa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
      var l = L,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ne;
          u = dl;
          var v = Ne;
          if (((dl = i), (Ne = s) && !v))
            for (L = l; L !== null; )
              (i = L),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? _a(l)
                  : s !== null
                    ? ((s.return = i), (L = s))
                    : _a(l);
          for (; o !== null; ) (L = o), wa(o), (o = o.sibling);
          (L = l), (dl = u), (Ne = v);
        }
        Sa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (L = o)) : Sa(e);
    }
  }
  function Sa(e) {
    for (; L !== null; ) {
      var t = L;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ne || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ne)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && xs(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  xs(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus();
                      break;
                    case 'img':
                      s.src && (n.src = s.src);
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
                if (t.memoizedState === null) {
                  var v = t.alternate;
                  if (v !== null) {
                    var S = v.memoizedState;
                    if (S !== null) {
                      var x = S.dehydrated;
                      x !== null && Kn(x);
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
                throw Error(d(163));
            }
          Ne || (t.flags & 512 && si(t));
        } catch (y) {
          pe(t, t.return, y);
        }
      }
      if (t === e) {
        L = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (L = n);
        break;
      }
      L = t.return;
    }
  }
  function xa(e) {
    for (; L !== null; ) {
      var t = L;
      if (t === e) {
        L = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (L = n);
        break;
      }
      L = t.return;
    }
  }
  function _a(e) {
    for (; L !== null; ) {
      var t = L;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              pe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                pe(t, l, s);
              }
            }
            var o = t.return;
            try {
              si(t);
            } catch (s) {
              pe(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              si(t);
            } catch (s) {
              pe(t, i, s);
            }
        }
      } catch (s) {
        pe(t, t.return, s);
      }
      if (t === e) {
        L = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (L = u);
        break;
      }
      L = t.return;
    }
  }
  var Hf = Math.ceil,
    vl = fe.ReactCurrentDispatcher,
    fi = fe.ReactCurrentOwner,
    be = fe.ReactCurrentBatchConfig,
    q = 0,
    xe = null,
    me = null,
    Pe = 0,
    Ye = 0,
    Rn = Mt(0),
    we = 0,
    hr = null,
    tn = 0,
    hl = 0,
    di = 0,
    gr = null,
    Ae = null,
    pi = 0,
    Tn = 1 / 0,
    Ct = null,
    gl = !1,
    vi = null,
    Bt = null,
    ml = !1,
    Vt = null,
    yl = 0,
    mr = 0,
    hi = null,
    wl = -1,
    Sl = 0;
  function Te() {
    return (q & 6) !== 0 ? he() : wl !== -1 ? wl : (wl = he());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (q & 2) !== 0 && Pe !== 0
        ? Pe & -Pe
        : Of.transition !== null
          ? (Sl === 0 && (Sl = hu()), Sl)
          : ((e = ne), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pu(e.type))), e);
  }
  function at(e, t, n, r) {
    if (50 < mr) throw ((mr = 0), (hi = null), Error(d(185)));
    Vn(e, n, r),
      ((q & 2) === 0 || e !== xe) &&
        (e === xe && ((q & 2) === 0 && (hl |= n), we === 4 && $t(e, Pe)),
        Be(e, r),
        n === 1 && q === 0 && (t.mode & 1) === 0 && ((Tn = he() + 500), Xr && It()));
  }
  function Be(e, t) {
    var n = e.callbackNode;
    Ec(e, t);
    var r = zr(e, e === xe ? Pe : 0);
    if (r === 0) n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && du(n), t === 1))
        e.tag === 0 ? Ef(Pa.bind(null, e)) : as(Pa.bind(null, e)),
          _f(function () {
            (q & 6) === 0 && It();
          }),
          (n = null);
      else {
        switch (gu(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = pu;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = vu;
            break;
          default:
            n = Cr;
        }
        n = Ta(n, ka.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ka(e, t) {
    if (((wl = -1), (Sl = 0), (q & 6) !== 0)) throw Error(d(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = zr(e, e === xe ? Pe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var o = Ea();
      (xe !== e || Pe !== t) && ((Ct = null), (Tn = he() + 500), rn(e, t));
      do
        try {
          Yf();
          break;
        } catch (u) {
          Ca(e, u);
        }
      while (!0);
      Lo(), (vl.current = o), (q = l), me !== null ? (t = 0) : ((xe = null), (Pe = 0), (t = we));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = gi(e, l)))), t === 1))
        throw ((n = hr), rn(e, 0), $t(e, r), Be(e, he()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Qf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = gi(e, o)))),
            t === 1))
        )
          throw ((n = hr), rn(e, 0), $t(e, r), Be(e, he()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            ln(e, Ae, Ct);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = pi + 500 - he()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Te(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = _o(ln.bind(null, e, Ae, Ct), t);
              break;
            }
            ln(e, Ae, Ct);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - rt(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = he() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Hf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = _o(ln.bind(null, e, Ae, Ct), r);
              break;
            }
            ln(e, Ae, Ct);
            break;
          case 5:
            ln(e, Ae, Ct);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Be(e, he()), e.callbackNode === n ? ka.bind(null, e) : null;
  }
  function gi(e, t) {
    var n = gr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = Ae), (Ae = n), t !== null && mi(t)),
      e
    );
  }
  function mi(e) {
    Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
  }
  function Qf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!lt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function $t(e, t) {
    for (
      t &= ~di, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Pa(e) {
    if ((q & 6) !== 0) throw Error(d(327));
    Ln();
    var t = zr(e, 0);
    if ((t & 1) === 0) return Be(e, he()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = gi(e, r)));
    }
    if (n === 1) throw ((n = hr), rn(e, 0), $t(e, t), Be(e, he()), n);
    if (n === 6) throw Error(d(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Ae, Ct),
      Be(e, he()),
      null
    );
  }
  function yi(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      (q = n), q === 0 && ((Tn = he() + 500), Xr && It());
    }
  }
  function nn(e) {
    Vt !== null && Vt.tag === 0 && (q & 6) === 0 && Ln();
    var t = q;
    q |= 1;
    var n = be.transition,
      r = ne;
    try {
      if (((be.transition = null), (ne = 1), e)) return e();
    } finally {
      (ne = r), (be.transition = n), (q = t), (q & 6) === 0 && It();
    }
  }
  function wi() {
    (Ye = Rn.current), ie(Rn);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), xf(n)), me !== null))
      for (n = me.return; n !== null; ) {
        var r = n;
        switch ((No(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Kr();
            break;
          case 3:
            Nn(), ie(Ie), ie(Ce), Vo();
            break;
          case 5:
            Ao(r);
            break;
          case 4:
            Nn();
            break;
          case 13:
            ie(ae);
            break;
          case 19:
            ie(ae);
            break;
          case 10:
            Mo(r.type._context);
            break;
          case 22:
          case 23:
            wi();
        }
        n = n.return;
      }
    if (
      ((xe = e),
      (me = e = Ht(e.current, null)),
      (Pe = Ye = t),
      (we = 0),
      (hr = null),
      (di = hl = tn = 0),
      (Ae = gr = null),
      Zt !== null)
    ) {
      for (t = 0; t < Zt.length; t++)
        if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = l), (r.next = i);
          }
          n.pending = r;
        }
      Zt = null;
    }
    return e;
  }
  function Ca(e, t) {
    do {
      var n = me;
      try {
        if ((Lo(), (ll.current = sl), ol)) {
          for (var r = ce.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ol = !1;
        }
        if (
          ((en = 0),
          (Se = ye = ce = null),
          (ar = !1),
          (cr = 0),
          (fi.current = null),
          n === null || n.return === null)
        ) {
          (we = 1), (hr = t), (me = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = Pe),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var v = s,
              S = u,
              x = S.tag;
            if ((S.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var y = S.alternate;
              y
                ? ((S.updateQueue = y.updateQueue),
                  (S.memoizedState = y.memoizedState),
                  (S.lanes = y.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var j = Js(i);
            if (j !== null) {
              (j.flags &= -257), qs(j, i, u, o, t), j.mode & 1 && Gs(o, v, t), (t = j), (s = v);
              var D = t.updateQueue;
              if (D === null) {
                var F = new Set();
                F.add(s), (t.updateQueue = F);
              } else D.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Gs(o, v, t), Si();
                break e;
              }
              s = Error(d(426));
            }
          } else if (se && u.mode & 1) {
            var ge = Js(i);
            if (ge !== null) {
              (ge.flags & 65536) === 0 && (ge.flags |= 256), qs(ge, i, u, o, t), Ro(zn(s, u));
              break e;
            }
          }
          (o = s = zn(s, u)), we !== 4 && (we = 2), gr === null ? (gr = [o]) : gr.push(o), (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Ys(o, s, t);
                Ss(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  p = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Bt === null || !Bt.has(p))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var k = Xs(o, u, t);
                  Ss(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Na(n);
      } catch (A) {
        (t = A), me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ea() {
    var e = vl.current;
    return (vl.current = sl), e === null ? sl : e;
  }
  function Si() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
      xe === null || ((tn & 268435455) === 0 && (hl & 268435455) === 0) || $t(xe, Pe);
  }
  function xl(e, t) {
    var n = q;
    q |= 2;
    var r = Ea();
    (xe !== e || Pe !== t) && ((Ct = null), rn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        Ca(e, l);
      }
    while (!0);
    if ((Lo(), (q = n), (vl.current = r), me !== null)) throw Error(d(261));
    return (xe = null), (Pe = 0), we;
  }
  function Kf() {
    for (; me !== null; ) Oa(me);
  }
  function Yf() {
    for (; me !== null && !mc(); ) Oa(me);
  }
  function Oa(e) {
    var t = Ra(e.alternate, e, Ye);
    (e.memoizedProps = e.pendingProps), t === null ? Na(e) : (me = t), (fi.current = null);
  }
  function Na(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Af(n, t, Ye)), n !== null)) {
          me = n;
          return;
        }
      } else {
        if (((n = Bf(n, t)), n !== null)) {
          (n.flags &= 32767), (me = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (we = 6), (me = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function ln(e, t, n) {
    var r = ne,
      l = be.transition;
    try {
      (be.transition = null), (ne = 1), Xf(e, t, n, r);
    } finally {
      (be.transition = l), (ne = r);
    }
    return null;
  }
  function Xf(e, t, n, r) {
    do Ln();
    while (Vt !== null);
    if ((q & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(d(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Oc(e, o),
      e === xe && ((me = xe = null), (Pe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        ml ||
        ((ml = !0),
        Ta(Cr, function () {
          return Ln(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = be.transition), (be.transition = null);
      var i = ne;
      ne = 1;
      var u = q;
      (q |= 4),
        (fi.current = null),
        Wf(e, n),
        ya(n, e),
        vf(So),
        (Tr = !!wo),
        (So = wo = null),
        (e.current = n),
        $f(n),
        yc(),
        (q = u),
        (ne = i),
        (be.transition = o);
    } else e.current = n;
    if (
      (ml && ((ml = !1), (Vt = e), (yl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      xc(n.stateNode),
      Be(e, he()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (gl) throw ((gl = !1), (e = vi), (vi = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && Ln(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === hi ? mr++ : ((mr = 0), (hi = e))) : (mr = 0),
      It(),
      null
    );
  }
  function Ln() {
    if (Vt !== null) {
      var e = gu(yl),
        t = be.transition,
        n = ne;
      try {
        if (((be.transition = null), (ne = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (yl = 0), (q & 6) !== 0)) throw Error(d(331));
          var l = q;
          for (q |= 4, L = e.current; L !== null; ) {
            var o = L,
              i = o.child;
            if ((L.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var v = u[s];
                  for (L = v; L !== null; ) {
                    var S = L;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, S, o);
                    }
                    var x = S.child;
                    if (x !== null) (x.return = S), (L = x);
                    else
                      for (; L !== null; ) {
                        S = L;
                        var y = S.sibling,
                          j = S.return;
                        if ((pa(S), S === v)) {
                          L = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = j), (L = y);
                          break;
                        }
                        L = j;
                      }
                  }
                }
                var D = o.alternate;
                if (D !== null) {
                  var F = D.child;
                  if (F !== null) {
                    D.child = null;
                    do {
                      var ge = F.sibling;
                      (F.sibling = null), (F = ge);
                    } while (F !== null);
                  }
                }
                L = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) (i.return = o), (L = i);
            else
              e: for (; L !== null; ) {
                if (((o = L), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (L = f);
                  break e;
                }
                L = o.return;
              }
          }
          var a = e.current;
          for (L = a; L !== null; ) {
            i = L;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null) (p.return = i), (L = p);
            else
              e: for (i = a; L !== null; ) {
                if (((u = L), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, u);
                    }
                  } catch (A) {
                    pe(u, u.return, A);
                  }
                if (u === i) {
                  L = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  (k.return = u.return), (L = k);
                  break e;
                }
                L = u.return;
              }
          }
          if (((q = l), It(), dt && typeof dt.onPostCommitFiberRoot == 'function'))
            try {
              dt.onPostCommitFiberRoot(Er, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ne = n), (be.transition = t);
      }
    }
    return !1;
  }
  function za(e, t, n) {
    (t = zn(n, t)),
      (t = Ys(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Te()),
      e !== null && (Vn(e, 1, t), Be(e, t));
  }
  function pe(e, t, n) {
    if (e.tag === 3) za(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          za(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Bt === null || !Bt.has(r)))
          ) {
            (e = zn(n, e)),
              (e = Xs(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Te()),
              t !== null && (Vn(t, 1, e), Be(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Te()),
      (e.pingedLanes |= e.suspendedLanes & n),
      xe === e &&
        (Pe & n) === n &&
        (we === 4 || (we === 3 && (Pe & 130023424) === Pe && 500 > he() - pi)
          ? rn(e, 0)
          : (di |= n)),
      Be(e, t);
  }
  function ja(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Nr), (Nr <<= 1), (Nr & 130023424) === 0 && (Nr = 4194304)));
    var n = Te();
    (e = _t(e, t)), e !== null && (Vn(e, t, n), Be(e, n));
  }
  function Jf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ja(e, n);
  }
  function qf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    r !== null && r.delete(t), ja(e, n);
  }
  var Ra;
  Ra = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) Ue = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Ue = !1), Uf(e, t, n);
        Ue = (e.flags & 131072) !== 0;
      }
    else (Ue = !1), se && (t.flags & 1048576) !== 0 && cs(t, Jr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        fl(e, t), (e = t.pendingProps);
        var l = xn(t, Ce.current);
        On(t, n), (l = Ho(null, t, r, e, l, n));
        var o = Qo();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Fe(r) ? ((o = !0), Yr(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Fo(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              qo(t, r, e, n),
              (t = ti(null, t, r, !0, o, n)))
            : ((t.tag = 0), se && o && Oo(t), Re(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = bf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = ei(null, t, r, e, n);
              break e;
            case 1:
              t = ra(null, t, r, e, n);
              break e;
            case 11:
              t = Zs(null, t, r, e, n);
              break e;
            case 14:
              t = bs(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(d(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          ei(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          ra(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((la(t), e === null)) throw Error(d(387));
          (r = t.pendingProps), (o = t.memoizedState), (l = o.element), ws(e, t), nl(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = zn(Error(d(423)), t)), (t = oa(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = zn(Error(d(424)), t)), (t = oa(e, t, r, n, l));
              break e;
            } else
              for (
                Ke = Lt(t.stateNode.containerInfo.firstChild),
                  Qe = t,
                  se = !0,
                  ot = null,
                  n = ms(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            Re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          _s(t),
          e === null && jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          xo(r, l) ? (i = null) : o !== null && xo(r, o) && (t.flags |= 32),
          na(e, t),
          Re(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && jo(t), null;
      case 13:
        return ia(e, t, n);
      case 4:
        return (
          Uo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Re(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Zs(e, t, r, l, n)
        );
      case 7:
        return Re(e, t, t.pendingProps, n), t.child;
      case 8:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            le(br, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (lt(o.value, i)) {
              if (o.children === l.children && !Ie.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = kt(-1, n & -n)), (s.tag = 2);
                        var v = o.updateQueue;
                        if (v !== null) {
                          v = v.shared;
                          var S = v.pending;
                          S === null ? (s.next = s) : ((s.next = S.next), (S.next = s)),
                            (v.pending = s);
                        }
                      }
                      (o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        Do(o.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(d(341));
                  (i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Do(i, n, t),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          Re(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = qe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Re(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), bs(e, t, r, l, n);
      case 15:
        return ea(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          fl(e, t),
          (t.tag = 1),
          Fe(r) ? ((e = !0), Yr(t)) : (e = !1),
          On(t, n),
          Qs(t, r, l),
          qo(t, r, l, n),
          ti(null, t, r, !0, e, n)
        );
      case 19:
        return sa(e, t, n);
      case 22:
        return ta(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function Ta(e, t) {
    return fu(e, t);
  }
  function Zf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function et(e, t, n, r) {
    return new Zf(e, t, n, r);
  }
  function xi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function bf(e) {
    if (typeof e == 'function') return xi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Ht(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function _l(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) xi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Me:
          return on(n.children, l, o, t);
        case Xe:
          (i = 8), (l |= 8);
          break;
        case Et:
          return (e = et(12, n, t, l | 2)), (e.elementType = Et), (e.lanes = o), e;
        case We:
          return (e = et(13, n, t, l)), (e.elementType = We), (e.lanes = o), e;
        case nt:
          return (e = et(19, n, t, l)), (e.elementType = nt), (e.lanes = o), e;
        case de:
          return kl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case mt:
                i = 10;
                break e;
              case Kt:
                i = 9;
                break e;
              case ct:
                i = 11;
                break e;
              case ft:
                i = 14;
                break e;
              case De:
                (i = 16), (r = null);
                break e;
            }
          throw Error(d(130, e == null ? e : typeof e, ''));
      }
    return (t = et(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
  }
  function on(e, t, n, r) {
    return (e = et(7, e, r, t)), (e.lanes = n), e;
  }
  function kl(e, t, n, r) {
    return (
      (e = et(22, e, r, t)),
      (e.elementType = de),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function _i(e, t, n) {
    return (e = et(6, e, null, t)), (e.lanes = n), e;
  }
  function ki(e, t, n) {
    return (
      (t = et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ed(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Pi(e, t, n, r, l, o, i, u, s) {
    return (
      (e = new ed(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = et(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fo(o),
      e
    );
  }
  function td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: je,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function La(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Fe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Fe(n)) return us(e, n, t);
    }
    return t;
  }
  function Ma(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Pi(n, r, !0, e, l, o, i, u, s)),
      (e.context = La(null)),
      (n = e.current),
      (r = Te()),
      (l = Wt(n)),
      (o = kt(r, l)),
      (o.callback = t ?? null),
      Ut(n, o, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Be(e, r),
      e
    );
  }
  function Pl(e, t, n, r) {
    var l = t.current,
      o = Te(),
      i = Wt(l);
    return (
      (n = La(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = kt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, i)),
      e !== null && (at(e, l, i, o), tl(e, l, i)),
      i
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Da(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ci(e, t) {
    Da(e, t), (e = e.alternate) && Da(e, t);
  }
  function nd() {
    return null;
  }
  var Ia =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  (El.prototype.render = Ei.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      Pl(e, t, null, null);
    }),
    (El.prototype.unmount = Ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nn(function () {
            Pl(null, e, null, null);
          }),
            (t[yt] = null);
        }
      });
  function El(e) {
    this._internalRoot = e;
  }
  El.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
      jt.splice(n, 0, e), n === 0 && _u(e);
    }
  };
  function Oi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ol(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Fa() {}
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var v = Cl(i);
          o.call(v);
        };
      }
      var i = Ma(t, r, e, 0, null, !1, !1, '', Fa);
      return (
        (e._reactRootContainer = i),
        (e[yt] = i.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var v = Cl(s);
        u.call(v);
      };
    }
    var s = Pi(e, 0, !1, null, null, !1, !1, '', Fa);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        Pl(t, s, n, r);
      }),
      s
    );
  }
  function Nl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var s = Cl(i);
          u.call(s);
        };
      }
      Pl(t, i, e, l);
    } else i = rd(n, t, e, l, r);
    return Cl(i);
  }
  (mu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Jl(t, n | 1), Be(t, he()), (q & 6) === 0 && ((Tn = he() + 500), It()));
        }
        break;
      case 13:
        nn(function () {
          var r = _t(e, 1);
          if (r !== null) {
            var l = Te();
            at(r, e, 1, l);
          }
        }),
          Ci(e, 1);
    }
  }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Te();
          at(t, e, 134217728, n);
        }
        Ci(e, 134217728);
      }
    }),
    (yu = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = _t(e, t);
        if (n !== null) {
          var r = Te();
          at(n, e, t, r);
        }
        Ci(e, t);
      }
    }),
    (wu = function () {
      return ne;
    }),
    (Su = function (e, t) {
      var n = ne;
      try {
        return (ne = e), t();
      } finally {
        ne = n;
      }
    }),
    ($l = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Dl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Qr(r);
                if (!l) throw Error(d(90));
                Hi(r), Dl(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Gi(e, n);
          break;
        case 'select':
          (t = n.value), t != null && an(e, !!n.multiple, t, !1);
      }
    }),
    (lu = yi),
    (ou = nn);
  var ld = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, nu, ru, yi] },
    yr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    od = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: fe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = au(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || nd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (Er = zl.inject(od)), (dt = zl);
      } catch {}
  }
  return (
    (Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld),
    (Ve.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Oi(t)) throw Error(d(200));
      return td(e, t, null, n);
    }),
    (Ve.createRoot = function (e, t) {
      if (!Oi(e)) throw Error(d(299));
      var n = !1,
        r = '',
        l = Ia;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Pi(e, 1, !1, null, null, n, !1, r, l)),
        (e[yt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Ei(t)
      );
    }),
    (Ve.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(d(188))
          : ((e = Object.keys(e).join(',')), Error(d(268, e)));
      return (e = au(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ve.flushSync = function (e) {
      return nn(e);
    }),
    (Ve.hydrate = function (e, t, n) {
      if (!Ol(t)) throw Error(d(200));
      return Nl(null, e, t, !0, n);
    }),
    (Ve.hydrateRoot = function (e, t, n) {
      if (!Oi(e)) throw Error(d(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Ia;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ma(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[yt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new El(t);
    }),
    (Ve.render = function (e, t, n) {
      if (!Ol(t)) throw Error(d(200));
      return Nl(null, e, t, !1, n);
    }),
    (Ve.unmountComponentAtNode = function (e) {
      if (!Ol(e)) throw Error(d(40));
      return e._reactRootContainer
        ? (nn(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ve.unstable_batchedUpdates = yi),
    (Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ol(n)) throw Error(d(200));
      if (e == null || e._reactInternals === void 0) throw Error(d(38));
      return Nl(e, t, n, !1, r);
    }),
    (Ve.version = '18.3.1-next-f1338f8080-20240426'),
    Ve
  );
}
var lc;
function _d() {
  if (lc) return Vi.exports;
  lc = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (z) {
        console.error(z);
      }
  }
  return g(), (Vi.exports = xd()), Vi.exports;
}
var oc;
function kd() {
  if (oc) return jl;
  oc = 1;
  var g = _d();
  return (jl.createRoot = g.createRoot), (jl.hydrateRoot = g.hydrateRoot), jl;
}
var Pd = kd();
const Cd = ic(Pd),
  Ed = (g, z = !1) => {
    const d = { currency: 'USD', maximumFractionDigits: 0, style: 'currency' };
    g >= 1e4 && ((d.notation = 'compact'), (d.maximumFractionDigits = 1));
    const $ = new Intl.NumberFormat('en-US', d).format(g);
    return z
      ? I.jsxs('span', {
          style: { whiteSpace: 'nowrap' },
          children: [
            $,
            I.jsx('span', {
              style: { color: '#CCCCCC', fontSize: '0.8em', marginLeft: '4px' },
              children: '/month',
            }),
          ],
        })
      : $;
  },
  Od = (g) => {
    if (g == null || g <= 0) return 'N/A';
    const z = g / 43560,
      d = z < 0.1 ? 3 : z < 10 ? 2 : 1;
    return `${z.toFixed(d)} acres`;
  },
  ac = ({ property: g }) => {
    if (!g) return;
    const z = g.address || {},
      d = g.listing || {},
      $ = g.agent || {},
      W = g.media || {},
      T = g.property || {},
      V = W.photos || [],
      U =
        d.status === 'For Rent' ||
        (T.propertyType && T.propertyType.toLowerCase().includes('rental')) ||
        T.propertyType === 'Residential Lease',
      _ = d.livingArea || T.livingArea,
      C = d.bedrooms || T.bedrooms,
      E = d.bathrooms || T.bathrooms,
      h = T.lotSize,
      m = 'var(--color-bg-container, #fff)',
      P = 'var(--color-border-secondary, #eaeaea)',
      R = 'var(--color-text-2, #666)',
      O = 'var(--color-text-3, #999)';
    return I.jsxs('div', {
      style: {
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        backgroundColor: m,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        border: `1px solid ${P}`,
      },
      onMouseOver: (B) => {
        (B.currentTarget.style.transform = 'translateY(-4px)'),
          (B.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)');
      },
      onMouseOut: (B) => {
        (B.currentTarget.style.transform = 'translateY(0)'),
          (B.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)');
      },
      children: [
        I.jsxs('div', {
          style: {
            backgroundColor: '#f0f2f5',
            paddingTop: '60%',
            position: 'relative',
            width: '100%',
          },
          children: [
            V && V.length > 0
              ? I.jsx('img', {
                  alt: `${z.full || 'Property'}`,
                  src: V[0],
                  style: {
                    height: '100%',
                    left: 0,
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  },
                })
              : I.jsx('div', {
                  style: {
                    alignItems: 'center',
                    color: O,
                    display: 'flex',
                    fontSize: '14px',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  },
                  children: 'No image available',
                }),
            d.status &&
              I.jsx('div', {
                style: {
                  backgroundColor:
                    d.status === 'Active'
                      ? '#10b981'
                      : d.status === 'Pending'
                        ? '#f59e0b'
                        : '#6366f1',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: '600',
                  left: '12px',
                  padding: '2px 8px',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  top: '12px',
                },
                children: d.status,
              }),
            I.jsx('div', {
              style: {
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                bottom: 0,
                height: '50%',
                left: 0,
                position: 'absolute',
                right: 0,
              },
            }),
            d.price &&
              I.jsx('div', {
                style: {
                  bottom: '10px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '700',
                  left: '12px',
                  position: 'absolute',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                },
                children: Ed(d.price, U),
              }),
          ],
        }),
        I.jsxs('div', {
          style: { display: 'flex', flex: '1', flexDirection: 'column', padding: '12px' },
          children: [
            I.jsx('h3', {
              style: {
                color: '#1a1a1a',
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 6px 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              children:
                z.full || `${z.street || ''}, ${z.city || ''}, ${z.state || ''} ${z.zipCode || ''}`,
            }),
            I.jsxs('div', {
              style: { display: 'flex', gap: '10px', marginBottom: '8px' },
              children: [
                C !== void 0 &&
                  I.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      I.jsx('span', { style: { color: R, fontSize: '13px' }, children: C }),
                      I.jsx('span', { style: { color: O, fontSize: '12px' }, children: 'beds' }),
                    ],
                  }),
                E !== void 0 &&
                  I.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      I.jsx('span', { style: { color: R, fontSize: '13px' }, children: E }),
                      I.jsx('span', { style: { color: O, fontSize: '12px' }, children: 'baths' }),
                    ],
                  }),
                _ &&
                  I.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      I.jsx('span', {
                        style: { color: R, fontSize: '13px' },
                        children: _.toLocaleString(),
                      }),
                      I.jsx('span', { style: { color: O, fontSize: '12px' }, children: 'sqft' }),
                    ],
                  }),
              ],
            }),
            I.jsx('div', {
              style: { flex: '1', marginBottom: '8px' },
              children: I.jsxs('div', {
                style: { display: 'flex', flexWrap: 'wrap', gap: '8px 16px' },
                children: [
                  h &&
                    h > 0 &&
                    I.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        I.jsx('span', { style: { color: R, fontSize: '12px' }, children: 'Lot:' }),
                        I.jsx('span', { style: { color: R, fontSize: '12px' }, children: Od(h) }),
                      ],
                    }),
                  T.yearBuilt &&
                    I.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        I.jsx('span', {
                          style: { color: R, fontSize: '12px' },
                          children: 'Built:',
                        }),
                        I.jsx('span', {
                          style: { color: R, fontSize: '12px' },
                          children: T.yearBuilt,
                        }),
                      ],
                    }),
                  d.daysOnMarket !== void 0 &&
                    I.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        I.jsx('span', { style: { color: R, fontSize: '12px' }, children: 'DOM:' }),
                        I.jsxs('span', {
                          style: { color: R, fontSize: '12px' },
                          children: [d.daysOnMarket, ' days'],
                        }),
                      ],
                    }),
                  T.propertyType &&
                    I.jsx('div', {
                      style: {
                        backgroundColor: '#f5f5f7',
                        borderRadius: '4px',
                        color: R,
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: T.propertyType,
                    }),
                  T.pool &&
                    I.jsx('div', {
                      style: {
                        backgroundColor: '#e6f7ff',
                        borderRadius: '4px',
                        color: '#0091ff',
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: 'Pool',
                    }),
                  T.waterfront &&
                    I.jsx('div', {
                      style: {
                        backgroundColor: '#e6f7ff',
                        borderRadius: '4px',
                        color: '#0091ff',
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: 'Waterfront',
                    }),
                ],
              }),
            }),
            $.name &&
              I.jsxs('div', {
                style: {
                  alignItems: 'center',
                  borderTop: '1px solid #f0f0f0',
                  color: O,
                  display: 'flex',
                  fontSize: '11px',
                  overflow: 'hidden',
                  paddingTop: '8px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
                children: [
                  I.jsx('span', { style: { marginRight: '3px' }, children: '👤' }),
                  I.jsxs('span', {
                    style: { overflow: 'hidden', textOverflow: 'ellipsis' },
                    children: [$.name, $.office && ` • ${$.office}`],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Nd = ({ properties: g }) => {
    const z = sc.useRef(null);
    if (!g || g.length === 0) return;
    const d = () => {
        z.current && z.current.scrollBy({ left: -500, behavior: 'smooth' });
      },
      $ = () => {
        z.current && z.current.scrollBy({ left: 500, behavior: 'smooth' });
      };
    return I.jsxs('div', {
      style: { position: 'relative', width: '100%' },
      children: [
        I.jsx('div', {
          onClick: d,
          style: {
            alignItems: 'center',
            backdropFilter: 'blur(4px)',
            backgroundColor: 'var(--color-bg-container, rgba(255, 255, 255, 0.7))',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            color: 'var(--color-text-0, #1a1a1a)',
            cursor: 'pointer',
            display: 'flex',
            height: '32px',
            justifyContent: 'center',
            left: '0',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '32px',
            zIndex: 2,
          },
          children: I.jsx('span', { style: { fontSize: '18px' }, children: '←' }),
        }),
        I.jsx('div', {
          onClick: $,
          style: {
            alignItems: 'center',
            backdropFilter: 'blur(4px)',
            backgroundColor: 'var(--color-bg-container, rgba(255, 255, 255, 0.7))',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            color: 'var(--color-text-0, #1a1a1a)',
            cursor: 'pointer',
            display: 'flex',
            height: '32px',
            justifyContent: 'center',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '32px',
            zIndex: 2,
          },
          children: I.jsx('span', { style: { fontSize: '18px' }, children: '→' }),
        }),
        I.jsx('div', {
          ref: z,
          style: {
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '8px',
            margin: '0 16px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          },
          children: I.jsx('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              gap: '14px',
              minWidth: 'min-content',
              paddingLeft: '24px',
              paddingRight: '24px',
            },
            children: g.map((W, T) =>
              I.jsx(
                'div',
                { style: { flexShrink: 0, width: '240px' }, children: I.jsx(ac, { property: W }) },
                T,
              ),
            ),
          }),
        }),
      ],
    });
  },
  zd = () => {
    const [g, z] = Rl.useState(),
      { data: d, loading: $ } = ec.useWatchPluginMessage();
    return (
      Rl.useEffect(() => {
        ec.lobeChat
          .getPluginMessage()
          .then((W) => {
            console.log('Plugin received data:', W), z(W);
          })
          .catch((W) => {
            console.error('Error getting plugin message:', W);
          });
      }, []),
      Rl.useEffect(() => {
        d && (console.log('Received watch data:', d), z(d));
      }, [d]),
      $
        ? I.jsxs('div', {
            style: {
              color: '#666',
              fontFamily:
                'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              padding: '20px',
              textAlign: 'center',
            },
            children: [
              I.jsx('div', {
                style: {
                  animation: 'spin 1s linear infinite',
                  border: '2px solid #f3f3f3',
                  borderRadius: '50%',
                  borderTop: '2px solid #3498db',
                  display: 'inline-block',
                  height: '24px',
                  marginBottom: '12px',
                  width: '24px',
                },
              }),
              I.jsx('style', {
                children: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
              }),
              I.jsx('p', { children: 'Loading property listings...' }),
            ],
          })
        : I.jsx('div', {
            style: {
              boxSizing: 'border-box',
              fontFamily:
                'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              overflow: 'hidden',
              padding: '12px',
              width: '100%',
              backgroundColor: 'transparent',
              height: '100%',
            },
            children:
              g != null && g.data
                ? I.jsxs(I.Fragment, {
                    children: [
                      I.jsx('h2', {
                        style: {
                          color: 'var(--color-text-0, #1a1a1a)',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '12px',
                          paddingLeft: '4px',
                          marginTop: '0',
                        },
                        children: 'Property Results',
                      }),
                      Array.isArray(g.data)
                        ? I.jsx(Nd, { properties: g.data })
                        : I.jsx('div', {
                            style: { margin: '0 auto', maxWidth: '400px' },
                            children: I.jsx(ac, { property: g.data }),
                          }),
                    ],
                  })
                : I.jsxs('div', {
                    style: {
                      color: 'var(--color-text-2, #666)',
                      padding: '24px 16px',
                      textAlign: 'center',
                    },
                    children: [
                      I.jsx('p', {
                        style: { fontSize: '15px', marginBottom: '10px' },
                        children:
                          'Waiting for property data... Try searching for properties in Miami, FL.',
                      }),
                      I.jsx('p', {
                        style: { color: 'var(--color-text-3, #888)', fontSize: '13px' },
                        children: 'Example: "Find 3-bedroom houses in Miami under $1M"',
                      }),
                    ],
                  }),
          })
    );
  },
  jd = Cd.createRoot(document.querySelector('#root'));
jd.render(I.jsx(sc.StrictMode, { children: I.jsx(zd, {}) }));
