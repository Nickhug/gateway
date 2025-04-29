function uc(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, 'default') ? m.default : m;
}
var Nu = { exports: {} },
  wr = {},
  zu = { exports: {} },
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
  var m = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    Q = Symbol.for('react.strict_mode'),
    W = Symbol.for('react.profiler'),
    U = Symbol.for('react.provider'),
    A = Symbol.for('react.context'),
    D = Symbol.for('react.forward_ref'),
    k = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    h = Symbol.iterator;
  function g(c) {
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
    F = Object.assign,
    z = {};
  function $(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = z), (this.updater = X || P);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (c, w) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, w, 'setState');
    }),
    ($.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function ve() {}
  ve.prototype = $.prototype;
  function ze(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = z), (this.updater = X || P);
  }
  var Le = (ze.prototype = new ve());
  (Le.constructor = ze), F(Le, $.prototype), (Le.isPureReactComponent = !0);
  var fe = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    je = { current: null },
    Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, w, X) {
    var q,
      Z = {},
      b = null,
      re = null;
    if (w != null)
      for (q in (w.ref !== void 0 && (re = w.ref), w.key !== void 0 && (b = '' + w.key), w))
        tt.call(w, q) && !Me.hasOwnProperty(q) && (Z[q] = w[q]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = X;
    else if (1 < te) {
      for (var ie = Array(te), $e = 0; $e < te; $e++) ie[$e] = arguments[$e + 2];
      Z.children = ie;
    }
    if (c && c.defaultProps)
      for (q in ((te = c.defaultProps), te)) Z[q] === void 0 && (Z[q] = te[q]);
    return { $$typeof: m, type: c, key: b, ref: re, props: Z, _owner: je.current };
  }
  function Ct(c, w) {
    return { $$typeof: m, type: c.type, key: w, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === m;
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
  function nt(c, w, X, q, Z) {
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
            case m:
            case R:
              re = !0;
          }
      }
    if (re)
      return (
        (re = c),
        (Z = Z(re)),
        (c = q === '' ? '.' + We(re, 0) : q),
        fe(Z)
          ? ((X = ''),
            c != null && (X = c.replace(ct, '$&/') + '/'),
            nt(Z, w, X, '', function ($e) {
              return $e;
            }))
          : Z != null &&
            (gt(Z) &&
              (Z = Ct(
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
    if (((re = 0), (q = q === '' ? '.' : q + ':'), fe(c)))
      for (var te = 0; te < c.length; te++) {
        b = c[te];
        var ie = q + We(b, te);
        re += nt(b, w, X, ie, Z);
      }
    else if (((ie = g(c)), typeof ie == 'function'))
      for (c = ie.call(c), te = 0; !(b = c.next()).done; )
        (b = b.value), (ie = q + We(b, te++)), (re += nt(b, w, X, ie, Z));
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
    var q = [],
      Z = 0;
    return (
      nt(c, q, '', '', function (b) {
        return w.call(X, b, Z++);
      }),
      q
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
    O = { transition: null },
    H = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: O, ReactCurrentOwner: je };
  function T() {
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
        if (!gt(c))
          throw Error('React.Children.only expected to receive a single React element child.');
        return c;
      },
    }),
    (G.Component = $),
    (G.Fragment = p),
    (G.Profiler = W),
    (G.PureComponent = ze),
    (G.StrictMode = Q),
    (G.Suspense = k),
    (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (G.act = T),
    (G.cloneElement = function (c, w, X) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var q = F({}, c.props),
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
        for (ie in w)
          tt.call(w, ie) &&
            !Me.hasOwnProperty(ie) &&
            (q[ie] = w[ie] === void 0 && te !== void 0 ? te[ie] : w[ie]);
      }
      var ie = arguments.length - 2;
      if (ie === 1) q.children = X;
      else if (1 < ie) {
        te = Array(ie);
        for (var $e = 0; $e < ie; $e++) te[$e] = arguments[$e + 2];
        q.children = te;
      }
      return { $$typeof: m, type: c.type, key: Z, ref: b, props: q, _owner: re };
    }),
    (G.createContext = function (c) {
      return (
        (c = {
          $$typeof: A,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: U, _context: c }),
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
      return { $$typeof: D, render: c };
    }),
    (G.isValidElement = gt),
    (G.lazy = function (c) {
      return { $$typeof: C, _payload: { _status: -1, _result: c }, _init: De };
    }),
    (G.memo = function (c, w) {
      return { $$typeof: E, type: c, compare: w === void 0 ? null : w };
    }),
    (G.startTransition = function (c) {
      var w = O.transition;
      O.transition = {};
      try {
        c();
      } finally {
        O.transition = w;
      }
    }),
    (G.unstable_act = T),
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
  return Aa || ((Aa = 1), (zu.exports = ud())), zu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Va;
function id() {
  if (Va) return wr;
  Va = 1;
  var m = sn(),
    R = Symbol.for('react.element'),
    p = Symbol.for('react.fragment'),
    Q = Object.prototype.hasOwnProperty,
    W = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(D, k, E) {
    var C,
      h = {},
      g = null,
      P = null;
    E !== void 0 && (g = '' + E),
      k.key !== void 0 && (g = '' + k.key),
      k.ref !== void 0 && (P = k.ref);
    for (C in k) Q.call(k, C) && !U.hasOwnProperty(C) && (h[C] = k[C]);
    if (D && D.defaultProps) for (C in ((k = D.defaultProps), k)) h[C] === void 0 && (h[C] = k[C]);
    return { $$typeof: R, type: D, key: g, ref: P, props: h, _owner: W.current };
  }
  return (wr.Fragment = p), (wr.jsx = A), (wr.jsxs = A), wr;
}
var Ba;
function sd() {
  return Ba || ((Ba = 1), (Nu.exports = id())), Nu.exports;
}
var Y = sd(),
  un = {},
  ju = { exports: {} },
  Ru,
  Wa;
function Tl() {
  if (Wa) return Ru;
  Wa = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (E, C) => {
      for (var h in C) m(E, h, { get: C[h], enumerable: !0 });
    },
    U = (E, C, h, g) => {
      if ((C && typeof C == 'object') || typeof C == 'function')
        for (let P of p(C))
          !Q.call(E, P) &&
            P !== h &&
            m(E, P, { get: () => C[P], enumerable: !(g = R(C, P)) || g.enumerable });
      return E;
    },
    A = (E) => U(m({}, '__esModule', { value: !0 }), E),
    D = {};
  W(D, { PluginChannel: () => k }), (Ru = A(D));
  var k = ((E) => (
    (E.createAssistantMessage = 'lobe-chat:create-assistant-message'),
    (E.fetchPluginMessage = 'lobe-chat:fetch-plugin-message'),
    (E.fetchPluginSettings = 'lobe-chat:fetch-plugin-settings'),
    (E.fetchPluginState = 'lobe-chat:fetch-plugin-state'),
    (E.fillStandalonePluginContent = 'lobe-chat:fill-plugin-content'),
    (E.initStandalonePlugin = 'lobe-chat:init-standalone-plugin'),
    (E.pluginReadyForRender = 'lobe-chat:plugin-ready-for-render'),
    (E.renderPlugin = 'lobe-chat:render-plugin'),
    (E.renderPluginSettings = 'lobe-chat:render-plugin-settings'),
    (E.renderPluginState = 'lobe-chat:render-plugin-state'),
    (E.triggerAIMessage = 'lobe-chat:trigger-ai-message'),
    (E.updatePluginSettings = 'lobe-chat:update-plugin-settings'),
    (E.updatePluginState = 'lobe-chat:update-plugin-state'),
    E
  ))(k || {});
  return Ru;
}
var Tu, $a;
function ic() {
  if ($a) return Tu;
  $a = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (h, g) => {
      for (var P in g) m(h, P, { get: g[P], enumerable: !0 });
    },
    U = (h, g, P, F) => {
      if ((g && typeof g == 'object') || typeof g == 'function')
        for (let z of p(g))
          !Q.call(h, z) &&
            z !== P &&
            m(h, z, { get: () => g[z], enumerable: !(F = R(g, z)) || F.enumerable });
      return h;
    },
    A = (h) => U(m({}, '__esModule', { value: !0 }), h),
    D = {};
  W(D, { lobeChat: () => C }), (Tu = A(D));
  var k = Tl(),
    E = class {
      constructor() {
        (this.getPluginPayload = () =>
          new Promise((h) => {
            if (typeof window > 'u') {
              h(void 0);
              return;
            }
            const g = setTimeout(() => {
                h(void 0), window.removeEventListener('message', P);
              }, 1e3),
              P = (F) => {
                if (F.data.type === k.PluginChannel.initStandalonePlugin) {
                  const z = F.data.payload || F.data.props,
                    $ = z.apiName,
                    ve = JSON.parse(z.arguments || '{}');
                  clearTimeout(g),
                    h({ arguments: ve, name: $, settings: F.data.settings, state: F.data.state }),
                    window.removeEventListener('message', P);
                }
              };
            window.addEventListener('message', P),
              top == null || top.postMessage({ type: k.PluginChannel.pluginReadyForRender }, '*');
          })),
          (this.getPluginSettings = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const g = (P) => {
                P.data.type === k.PluginChannel.renderPluginSettings &&
                  (h(P.data.value), window.removeEventListener('message', g));
              };
              window.addEventListener('message', g),
                top == null || top.postMessage({ type: k.PluginChannel.fetchPluginSettings }, '*');
            })),
          (this.setPluginSettings = (h) => {
            top == null ||
              top.postMessage({ type: k.PluginChannel.updatePluginSettings, value: h }, '*');
          }),
          (this.getPluginMessage = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const g = (P) => {
                if (P.data.type === k.PluginChannel.renderPlugin) {
                  const F = P.data.props;
                  h(F.content), window.removeEventListener('message', g);
                }
              };
              window.addEventListener('message', g),
                top == null || top.postMessage({ type: k.PluginChannel.fetchPluginMessage }, '*');
            })),
          (this.setPluginMessage = (h, g) => {
            top == null ||
              top.postMessage(
                {
                  content: h,
                  triggerAiMessage: g,
                  type: k.PluginChannel.fillStandalonePluginContent,
                },
                '*',
              );
          }),
          (this.getPluginState = (h) =>
            new Promise((g) => {
              if (typeof window > 'u') {
                g(void 0);
                return;
              }
              const P = (F) => {
                F.data.type === k.PluginChannel.renderPluginState &&
                  F.data.key === h &&
                  (g(F.data.value), window.removeEventListener('message', P));
              };
              window.addEventListener('message', P),
                top == null ||
                  top.postMessage({ key: h, type: k.PluginChannel.fetchPluginState }, '*');
            })),
          (this.setPluginState = (h, g) => {
            top == null ||
              top.postMessage({ key: h, type: k.PluginChannel.updatePluginState, value: g }, '*');
          }),
          (this.triggerAIMessage = (h) => {
            top == null || top.postMessage({ id: h, type: k.PluginChannel.triggerAIMessage }, '*');
          }),
          (this.createAssistantMessage = (h) => {
            top == null ||
              top.postMessage({ content: h, type: k.PluginChannel.createAssistantMessage }, '*');
          });
      }
    },
    C = new E();
  return Tu;
}
var Lu, Ha;
function ad() {
  if (Ha) return Lu;
  Ha = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = ($, ve) => {
      for (var ze in ve) m($, ze, { get: ve[ze], enumerable: !0 });
    },
    U = ($, ve, ze, Le) => {
      if ((ve && typeof ve == 'object') || typeof ve == 'function')
        for (let fe of p(ve))
          !Q.call($, fe) &&
            fe !== ze &&
            m($, fe, { get: () => ve[fe], enumerable: !(Le = R(ve, fe)) || Le.enumerable });
      return $;
    },
    A = ($) => U(m({}, '__esModule', { value: !0 }), $),
    D = {};
  W(D, {
    fetchPluginMessage: () => P,
    fetchPluginPayload: () => F,
    fetchPluginSettings: () => z,
    fetchPluginState: () => g,
    postToFillPluginContent: () => E,
    postToUpdatePluginSettings: () => h,
    postToUpdatePluginState: () => C,
  }),
    (Lu = A(D));
  var k = ic(),
    E = k.lobeChat.setPluginMessage,
    C = k.lobeChat.setPluginState,
    h = k.lobeChat.setPluginSettings,
    g = k.lobeChat.getPluginState,
    P = k.lobeChat.getPluginMessage,
    F = k.lobeChat.getPluginPayload,
    z = k.lobeChat.getPluginSettings;
  return Lu;
}
var Mu = { exports: {} },
  Du,
  Qa;
function cd() {
  if (Qa) return Du;
  Qa = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (h, g) => {
      for (var P in g) m(h, P, { get: g[P], enumerable: !0 });
    },
    U = (h, g, P, F) => {
      if ((g && typeof g == 'object') || typeof g == 'function')
        for (let z of p(g))
          !Q.call(h, z) &&
            z !== P &&
            m(h, z, { get: () => g[z], enumerable: !(F = R(g, z)) || F.enumerable });
      return h;
    },
    A = (h) => U(m({}, '__esModule', { value: !0 }), h),
    D = {};
  W(D, { useOnStandalonePluginInit: () => C }), (Du = A(D));
  var k = sn(),
    E = Ll(),
    C = (h) => {
      (0, k.useEffect)(() => {
        E.lobeChat.getPluginPayload().then((g) => {
          g && h(g);
        });
      }, []);
    };
  return Du;
}
var Iu, Ka;
function fd() {
  if (Ka) return Iu;
  Ka = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (h, g) => {
      for (var P in g) m(h, P, { get: g[P], enumerable: !0 });
    },
    U = (h, g, P, F) => {
      if ((g && typeof g == 'object') || typeof g == 'function')
        for (let z of p(g))
          !Q.call(h, z) &&
            z !== P &&
            m(h, z, { get: () => g[z], enumerable: !(F = R(g, z)) || F.enumerable });
      return h;
    },
    A = (h) => U(m({}, '__esModule', { value: !0 }), h),
    D = {};
  W(D, { usePluginSettings: () => C }), (Iu = A(D));
  var k = sn(),
    E = Ll(),
    C = (h) => {
      const [g, P] = (0, k.useState)(h);
      (0, k.useEffect)(() => {
        E.lobeChat.getPluginSettings().then((z) => {
          z && P(z);
        });
      }, []);
      const F = (0, k.useCallback)((z) => {
        P(z), E.lobeChat.setPluginSettings(z);
      }, []);
      return [g, F];
    };
  return Iu;
}
var Fu, Ya;
function dd() {
  if (Ya) return Fu;
  Ya = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (h, g) => {
      for (var P in g) m(h, P, { get: g[P], enumerable: !0 });
    },
    U = (h, g, P, F) => {
      if ((g && typeof g == 'object') || typeof g == 'function')
        for (let z of p(g))
          !Q.call(h, z) &&
            z !== P &&
            m(h, z, { get: () => g[z], enumerable: !(F = R(g, z)) || F.enumerable });
      return h;
    },
    A = (h) => U(m({}, '__esModule', { value: !0 }), h),
    D = {};
  W(D, { usePluginState: () => C }), (Fu = A(D));
  var k = sn(),
    E = Ll(),
    C = (h, g) => {
      const [P, F] = (0, k.useState)(g);
      (0, k.useEffect)(() => {
        E.lobeChat.getPluginState(h).then(($) => {
          $ && F($);
        });
      }, [h]);
      const z = (0, k.useCallback)(
        ($) => {
          F($), E.lobeChat.setPluginState(h, $);
        },
        [h],
      );
      return [P, z];
    };
  return Fu;
}
var Uu, Xa;
function pd() {
  if (Xa) return Uu;
  Xa = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (C, h) => {
      for (var g in h) m(C, g, { get: h[g], enumerable: !0 });
    },
    U = (C, h, g, P) => {
      if ((h && typeof h == 'object') || typeof h == 'function')
        for (let F of p(h))
          !Q.call(C, F) &&
            F !== g &&
            m(C, F, { get: () => h[F], enumerable: !(P = R(h, F)) || P.enumerable });
      return C;
    },
    A = (C) => U(m({}, '__esModule', { value: !0 }), C),
    D = {};
  W(D, { onReceiveData: () => E }), (Uu = A(D));
  var k = Tl(),
    E = (C, h) => {
      if (C.data.type === k.PluginChannel.renderPlugin) {
        const g = C.data.props;
        h(g);
      }
    };
  return Uu;
}
var Au, Ga;
function vd() {
  if (Ga) return Au;
  Ga = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (g, P) => {
      for (var F in P) m(g, F, { get: P[F], enumerable: !0 });
    },
    U = (g, P, F, z) => {
      if ((P && typeof P == 'object') || typeof P == 'function')
        for (let $ of p(P))
          !Q.call(g, $) &&
            $ !== F &&
            m(g, $, { get: () => P[$], enumerable: !(z = R(P, $)) || z.enumerable });
      return g;
    },
    A = (g) => U(m({}, '__esModule', { value: !0 }), g),
    D = {};
  W(D, { useWatchPluginMessage: () => h }), (Au = A(D));
  var k = sn(),
    E = Tl(),
    C = pd(),
    h = () => {
      const [g, P] = (0, k.useState)({ data: void 0, loading: !0 }),
        F = (z) => {
          (0, C.onReceiveData)(z, ($) => {
            P({ data: $.content, loading: !1 });
          });
        };
      return (
        (0, k.useEffect)(
          () => (
            window == null || window.addEventListener('message', F),
            top == null || top.postMessage({ type: E.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window == null || window.removeEventListener('message', F);
            }
          ),
          [],
        ),
        g
      );
    };
  return Au;
}
var qa;
function hd() {
  return (
    qa ||
      ((qa = 1),
      (function (m) {
        var R = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          Q = Object.getOwnPropertyNames,
          W = Object.prototype.hasOwnProperty,
          U = (E, C, h, g) => {
            if ((C && typeof C == 'object') || typeof C == 'function')
              for (let P of Q(C))
                !W.call(E, P) &&
                  P !== h &&
                  R(E, P, { get: () => C[P], enumerable: !(g = p(C, P)) || g.enumerable });
            return E;
          },
          A = (E, C, h) => (U(E, C, 'default'), h && U(h, C, 'default')),
          D = (E) => U(R({}, '__esModule', { value: !0 }), E),
          k = {};
        (m.exports = D(k)),
          A(k, cd(), m.exports),
          A(k, fd(), m.exports),
          A(k, dd(), m.exports),
          A(k, vd(), m.exports);
      })(Mu)),
    Mu.exports
  );
}
var Vu, Ja;
function md() {
  if (Ja) return Vu;
  Ja = 1;
  var m = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    Q = Object.prototype.hasOwnProperty,
    W = (D, k, E, C) => {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (let h of p(k))
          !Q.call(D, h) &&
            h !== E &&
            m(D, h, { get: () => k[h], enumerable: !(C = R(k, h)) || C.enumerable });
      return D;
    },
    U = (D) => W(m({}, '__esModule', { value: !0 }), D),
    A = {};
  return (Vu = U(A)), Vu;
}
var Za;
function Ll() {
  return (
    Za ||
      ((Za = 1),
      (function (m) {
        var R = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          Q = Object.getOwnPropertyNames,
          W = Object.prototype.hasOwnProperty,
          U = (E, C, h, g) => {
            if ((C && typeof C == 'object') || typeof C == 'function')
              for (let P of Q(C))
                !W.call(E, P) &&
                  P !== h &&
                  R(E, P, { get: () => C[P], enumerable: !(g = p(C, P)) || g.enumerable });
            return E;
          },
          A = (E, C, h) => (U(E, C, 'default'), h && U(h, C, 'default')),
          D = (E) => U(R({}, '__esModule', { value: !0 }), E),
          k = {};
        (m.exports = D(k)),
          A(k, Tl(), m.exports),
          A(k, ad(), m.exports),
          A(k, hd(), m.exports),
          A(k, ic(), m.exports),
          A(k, md(), m.exports);
      })(ju)),
    ju.exports
  );
}
var ba;
function gd() {
  return (
    ba ||
      ((ba = 1),
      (function (m) {
        var R =
            (un && un.__createBinding) ||
            (Object.create
              ? function (Q, W, U, A) {
                  A === void 0 && (A = U);
                  var D = Object.getOwnPropertyDescriptor(W, U);
                  (!D || ('get' in D ? !W.__esModule : D.writable || D.configurable)) &&
                    (D = {
                      enumerable: !0,
                      get: function () {
                        return W[U];
                      },
                    }),
                    Object.defineProperty(Q, A, D);
                }
              : function (Q, W, U, A) {
                  A === void 0 && (A = U), (Q[A] = W[U]);
                }),
          p =
            (un && un.__exportStar) ||
            function (Q, W) {
              for (var U in Q)
                U !== 'default' && !Object.prototype.hasOwnProperty.call(W, U) && R(W, Q, U);
            };
        Object.defineProperty(m, '__esModule', { value: !0 }), p(Ll(), m);
      })(un)),
    un
  );
}
var ec = gd(),
  Rl = sn();
const yd = uc(Rl);
var jl = {},
  Bu = { exports: {} },
  Be = {},
  Wu = { exports: {} },
  $u = {};
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
      (function (m) {
        function R(O, H) {
          var T = O.length;
          O.push(H);
          e: for (; 0 < T; ) {
            var c = (T - 1) >>> 1,
              w = O[c];
            if (0 < W(w, H)) (O[c] = H), (O[T] = w), (T = c);
            else break e;
          }
        }
        function p(O) {
          return O.length === 0 ? null : O[0];
        }
        function Q(O) {
          if (O.length === 0) return null;
          var H = O[0],
            T = O.pop();
          if (T !== H) {
            O[0] = T;
            e: for (var c = 0, w = O.length, X = w >>> 1; c < X; ) {
              var q = 2 * (c + 1) - 1,
                Z = O[q],
                b = q + 1,
                re = O[b];
              if (0 > W(Z, T))
                b < w && 0 > W(re, Z)
                  ? ((O[c] = re), (O[b] = T), (c = b))
                  : ((O[c] = Z), (O[q] = T), (c = q));
              else if (b < w && 0 > W(re, T)) (O[c] = re), (O[b] = T), (c = b);
              else break e;
            }
          }
          return H;
        }
        function W(O, H) {
          var T = O.sortIndex - H.sortIndex;
          return T !== 0 ? T : O.id - H.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var U = performance;
          m.unstable_now = function () {
            return U.now();
          };
        } else {
          var A = Date,
            D = A.now();
          m.unstable_now = function () {
            return A.now() - D;
          };
        }
        var k = [],
          E = [],
          C = 1,
          h = null,
          g = 3,
          P = !1,
          F = !1,
          z = !1,
          $ = typeof setTimeout == 'function' ? setTimeout : null,
          ve = typeof clearTimeout == 'function' ? clearTimeout : null,
          ze = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Le(O) {
          for (var H = p(E); H !== null; ) {
            if (H.callback === null) Q(E);
            else if (H.startTime <= O) Q(E), (H.sortIndex = H.expirationTime), R(k, H);
            else break;
            H = p(E);
          }
        }
        function fe(O) {
          if (((z = !1), Le(O), !F))
            if (p(k) !== null) (F = !0), De(tt);
            else {
              var H = p(E);
              H !== null && de(fe, H.startTime - O);
            }
        }
        function tt(O, H) {
          (F = !1), z && ((z = !1), ve(Xe), (Xe = -1)), (P = !0);
          var T = g;
          try {
            for (Le(H), h = p(k); h !== null && (!(h.expirationTime > H) || (O && !Kt())); ) {
              var c = h.callback;
              if (typeof c == 'function') {
                (h.callback = null), (g = h.priorityLevel);
                var w = c(h.expirationTime <= H);
                (H = m.unstable_now()),
                  typeof w == 'function' ? (h.callback = w) : h === p(k) && Q(k),
                  Le(H);
              } else Q(k);
              h = p(k);
            }
            if (h !== null) var X = !0;
            else {
              var q = p(E);
              q !== null && de(fe, q.startTime - H), (X = !1);
            }
            return X;
          } finally {
            (h = null), (g = T), (P = !1);
          }
        }
        var je = !1,
          Me = null,
          Xe = -1,
          Ct = 5,
          gt = -1;
        function Kt() {
          return !(m.unstable_now() - gt < Ct);
        }
        function ct() {
          if (Me !== null) {
            var O = m.unstable_now();
            gt = O;
            var H = !0;
            try {
              H = Me(!0, O);
            } finally {
              H ? We() : ((je = !1), (Me = null));
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
            $(ct, 0);
          };
        function De(O) {
          (Me = O), je || ((je = !0), We());
        }
        function de(O, H) {
          Xe = $(function () {
            O(m.unstable_now());
          }, H);
        }
        (m.unstable_IdlePriority = 5),
          (m.unstable_ImmediatePriority = 1),
          (m.unstable_LowPriority = 4),
          (m.unstable_NormalPriority = 3),
          (m.unstable_Profiling = null),
          (m.unstable_UserBlockingPriority = 2),
          (m.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (m.unstable_continueExecution = function () {
            F || P || ((F = !0), De(tt));
          }),
          (m.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Ct = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (m.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (m.unstable_getFirstCallbackNode = function () {
            return p(k);
          }),
          (m.unstable_next = function (O) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = g;
            }
            var T = g;
            g = H;
            try {
              return O();
            } finally {
              g = T;
            }
          }),
          (m.unstable_pauseExecution = function () {}),
          (m.unstable_requestPaint = function () {}),
          (m.unstable_runWithPriority = function (O, H) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var T = g;
            g = O;
            try {
              return H();
            } finally {
              g = T;
            }
          }),
          (m.unstable_scheduleCallback = function (O, H, T) {
            var c = m.unstable_now();
            switch (
              (typeof T == 'object' && T !== null
                ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? c + T : c))
                : (T = c),
              O)
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
              (w = T + w),
              (O = {
                id: C++,
                callback: H,
                priorityLevel: O,
                startTime: T,
                expirationTime: w,
                sortIndex: -1,
              }),
              T > c
                ? ((O.sortIndex = T),
                  R(E, O),
                  p(k) === null &&
                    O === p(E) &&
                    (z ? (ve(Xe), (Xe = -1)) : (z = !0), de(fe, T - c)))
                : ((O.sortIndex = w), R(k, O), F || P || ((F = !0), De(tt))),
              O
            );
          }),
          (m.unstable_shouldYield = Kt),
          (m.unstable_wrapCallback = function (O) {
            var H = g;
            return function () {
              var T = g;
              g = H;
              try {
                return O.apply(this, arguments);
              } finally {
                g = T;
              }
            };
          });
      })($u)),
    $u
  );
}
var nc;
function Sd() {
  return nc || ((nc = 1), (Wu.exports = wd())), Wu.exports;
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
function _d() {
  if (rc) return Be;
  rc = 1;
  var m = sn(),
    R = Sd();
  function p(e) {
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
  var Q = new Set(),
    W = {};
  function U(e, t) {
    A(e, t), A(e + 'Capture', t);
  }
  function A(e, t) {
    for (W[e] = t, e = 0; e < t.length; e++) Q.add(t[e]);
  }
  var D = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    k = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    h = {};
  function g(e) {
    return k.call(h, e) ? !0 : k.call(C, e) ? !1 : E.test(e) ? (h[e] = !0) : ((C[e] = !0), !1);
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
  function F(e, t, n, r) {
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
  function z(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var $ = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      $[e] = new z(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new z(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      $[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        $[e] = new z(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        $[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      $[e] = new z(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      $[e] = new z(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      $[e] = new z(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      $[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ve = /[\-:]([a-z])/g;
  function ze(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ve, ze);
      $[t] = new z(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(ve, ze);
        $[t] = new z(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(ve, ze);
      $[t] = new z(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      $[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new z('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      $[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Le(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (F(t, n, l, r) && (n = null),
      r || l === null
        ? g(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var fe = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    je = Symbol.for('react.portal'),
    Me = Symbol.for('react.fragment'),
    Xe = Symbol.for('react.strict_mode'),
    Ct = Symbol.for('react.profiler'),
    gt = Symbol.for('react.provider'),
    Kt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    We = Symbol.for('react.suspense'),
    nt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    De = Symbol.for('react.lazy'),
    de = Symbol.for('react.offscreen'),
    O = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (O && e[O]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var T = Object.assign,
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
  function q(e, t) {
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
            u = l.length - 1,
            i = o.length - 1;
          1 <= u && 0 <= i && l[u] !== o[i];

        )
          i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (l[u] !== o[i]) {
            if (u !== 1 || i !== 1)
              do
                if ((u--, i--, 0 > i || l[u] !== o[i])) {
                  var s =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= i);
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
        return (e = q(e.type, !1)), e;
      case 11:
        return (e = q(e.type.render, !1)), e;
      case 1:
        return (e = q(e.type, !0)), e;
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
      case Ct:
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
        case gt:
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
  function ie(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function $e(e) {
    var t = ie(e) ? 'checked' : 'value',
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
          set: function (u) {
            (r = '' + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
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
  function Hu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ie(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function _r(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return T({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Qu(e, t) {
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
  function Ku(e, t) {
    (t = t.checked), t != null && Le(e, 'checked', t, !1);
  }
  function Dl(e, t) {
    Ku(e, t);
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
  function Yu(e, t, n) {
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
    (t !== 'number' || _r(e.ownerDocument) !== e) &&
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
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return T({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Xu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Gu(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function qu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Ju(e) {
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
      ? Ju(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var kr,
    Zu = (function (e) {
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
          kr = kr || document.createElement('div'),
            kr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = kr.firstChild;
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
    ac = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(In).forEach(function (e) {
    ac.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
    });
  });
  function bu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function ei(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = bu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var cc = T(
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
      if (cc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(p(62));
    }
  }
  function Vl(e, t) {
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
  var Bl = null;
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
  function ti(e) {
    if ((e = lr(e))) {
      if (typeof $l != 'function') throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function ni(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function ri() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), ti(e), t)) for (e = 0; e < t.length; e++) ti(t[e]);
    }
  }
  function li(e, t) {
    return e(t);
  }
  function oi() {}
  var Hl = !1;
  function ui(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return li(e, t, n);
    } finally {
      (Hl = !1), (cn !== null || fn !== null) && (oi(), ri());
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
    if (n && typeof n != 'function') throw Error(p(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if (D)
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
  function fc(e, t, n, r, l, o, u, i, s) {
    var v = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, v);
    } catch (S) {
      this.onError(S);
    }
  }
  var An = !1,
    xr = null,
    Pr = !1,
    Kl = null,
    dc = {
      onError: function (e) {
        (An = !0), (xr = e);
      },
    };
  function pc(e, t, n, r, l, o, u, i, s) {
    (An = !1), (xr = null), fc.apply(dc, arguments);
  }
  function vc(e, t, n, r, l, o, u, i, s) {
    if ((pc.apply(this, arguments), An)) {
      if (An) {
        var v = xr;
        (An = !1), (xr = null);
      } else throw Error(p(198));
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
  function ii(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function si(e) {
    if (Yt(e) !== e) throw Error(p(188));
  }
  function hc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(p(188));
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
          if (o === n) return si(l), e;
          if (o === r) return si(l), t;
          o = o.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (i === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (i === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function ai(e) {
    return (e = hc(e)), e !== null ? ci(e) : null;
  }
  function ci(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ci(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var fi = R.unstable_scheduleCallback,
    di = R.unstable_cancelCallback,
    mc = R.unstable_shouldYield,
    gc = R.unstable_requestPaint,
    he = R.unstable_now,
    yc = R.unstable_getCurrentPriorityLevel,
    Yl = R.unstable_ImmediatePriority,
    pi = R.unstable_UserBlockingPriority,
    Er = R.unstable_NormalPriority,
    wc = R.unstable_LowPriority,
    vi = R.unstable_IdlePriority,
    Cr = null,
    dt = null;
  function Sc(e) {
    if (dt && typeof dt.onCommitFiberRoot == 'function')
      try {
        dt.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : xc,
    _c = Math.log,
    kc = Math.LN2;
  function xc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / kc) | 0)) | 0;
  }
  var Or = 64,
    Nr = 4194304;
  function Vn(e) {
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
      u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? (r = Vn(i)) : ((o &= u), o !== 0 && (r = Vn(o)));
    } else (u = n & ~l), u !== 0 ? (r = Vn(u)) : o !== 0 && (r = Vn(o));
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
  function Pc(e, t) {
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
      var u = 31 - rt(o),
        i = 1 << u,
        s = l[u];
      s === -1
        ? ((i & n) === 0 || (i & r) !== 0) && (l[u] = Pc(i, t))
        : s <= t && (e.expiredLanes |= i),
        (o &= ~i);
    }
  }
  function Xl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function hi() {
    var e = Or;
    return (Or <<= 1), (Or & 4194240) === 0 && (Or = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n);
  }
  function Cc(e, t) {
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
  function ql(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ne = 0;
  function mi(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var gi,
    Jl,
    yi,
    wi,
    Si,
    Zl = !1,
    jr = [],
    Ot = null,
    Nt = null,
    zt = null,
    Wn = new Map(),
    $n = new Map(),
    jt = [],
    Oc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function _i(e, t) {
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
        t !== null && ((t = lr(t)), t !== null && Jl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Nc(e, t, n, r, l) {
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
  function ki(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ii(n)), t !== null)) {
            (e.blockedOn = t),
              Si(e.priority, function () {
                yi(n);
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
        (Bl = r), n.target.dispatchEvent(r), (Bl = null);
      } else return (t = lr(n)), t !== null && Jl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function xi(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function zc() {
    (Zl = !1),
      Ot !== null && Rr(Ot) && (Ot = null),
      Nt !== null && Rr(Nt) && (Nt = null),
      zt !== null && Rr(zt) && (zt = null),
      Wn.forEach(xi),
      $n.forEach(xi);
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), R.unstable_scheduleCallback(R.unstable_NormalPriority, zc)));
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
      ki(n), n.blockedOn === null && jt.shift();
  }
  var dn = fe.ReactCurrentBatchConfig,
    Tr = !0;
  function jc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      (ne = 1), bl(e, t, n, r);
    } finally {
      (ne = l), (dn.transition = o);
    }
  }
  function Rc(e, t, n, r) {
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
      if (l === null) yo(e, t, r, Lr, n), _i(e, r);
      else if (Nc(l, e, t, n, r)) r.stopPropagation();
      else if ((_i(e, r), t & 4 && -1 < Oc.indexOf(e))) {
        for (; l !== null; ) {
          var o = lr(l);
          if (
            (o !== null && gi(o), (o = eo(e, t, n, r)), o === null && yo(e, t, r, Lr, n), o === l)
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
        if (((e = ii(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Lr = e), null;
  }
  function Pi(e) {
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
        switch (yc()) {
          case Yl:
            return 1;
          case pi:
            return 4;
          case Er:
          case wc:
            return 16;
          case vi:
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
  function Ei() {
    if (Mr) return Mr;
    var e,
      t = to,
      n = t.length,
      r,
      l = 'value' in Rt ? Rt.value : Rt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
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
  function Ci() {
    return !1;
  }
  function He(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var i in e) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ir
          : Ci),
        (this.isPropagationStopped = Ci),
        this
      );
    }
    return (
      T(t.prototype, {
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
    Yn = T({}, pn, { view: 0, detail: 0 }),
    Tc = He(Yn),
    ro,
    lo,
    Xn,
    Fr = T({}, Yn, {
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
      getModifierState: uo,
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
    Oi = He(Fr),
    Lc = T({}, Fr, { dataTransfer: 0 }),
    Mc = He(Lc),
    Dc = T({}, Yn, { relatedTarget: 0 }),
    oo = He(Dc),
    Ic = T({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fc = He(Ic),
    Uc = T({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ac = He(Uc),
    Vc = T({}, pn, { data: 0 }),
    Ni = He(Vc),
    Bc = {
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
    Wc = {
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
    $c = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Hc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $c[e]) ? !!t[e] : !1;
  }
  function uo() {
    return Hc;
  }
  var Qc = T({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Bc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Wc[e.keyCode] || 'Unidentified'
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
      getModifierState: uo,
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
    Kc = He(Qc),
    Yc = T({}, Fr, {
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
    zi = He(Yc),
    Xc = T({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Gc = He(Xc),
    qc = T({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jc = He(qc),
    Zc = T({}, Fr, {
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
    bc = He(Zc),
    ef = [9, 13, 27, 32],
    io = D && 'CompositionEvent' in window,
    Gn = null;
  D && 'documentMode' in document && (Gn = document.documentMode);
  var tf = D && 'TextEvent' in window && !Gn,
    ji = D && (!io || (Gn && 8 < Gn && 11 >= Gn)),
    Ri = ' ',
    Ti = !1;
  function Li(e, t) {
    switch (e) {
      case 'keyup':
        return ef.indexOf(t.keyCode) !== -1;
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
  function Mi(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var vn = !1;
  function nf(e, t) {
    switch (e) {
      case 'compositionend':
        return Mi(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ti = !0), Ri);
      case 'textInput':
        return (e = t.data), e === Ri && Ti ? null : e;
      default:
        return null;
    }
  }
  function rf(e, t) {
    if (vn)
      return e === 'compositionend' || (!io && Li(e, t))
        ? ((e = Ei()), (Mr = to = Rt = null), (vn = !1), e)
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
        return ji && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var lf = {
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
  function Di(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!lf[e.type] : t === 'textarea';
  }
  function Ii(e, t, n, r) {
    ni(r),
      (t = Wr(t, 'onChange')),
      0 < t.length &&
        ((n = new no('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var qn = null,
    Jn = null;
  function of(e) {
    es(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Hu(t)) return e;
  }
  function uf(e, t) {
    if (e === 'change') return t;
  }
  var Fi = !1;
  if (D) {
    var so;
    if (D) {
      var ao = 'oninput' in document;
      if (!ao) {
        var Ui = document.createElement('div');
        Ui.setAttribute('oninput', 'return;'), (ao = typeof Ui.oninput == 'function');
      }
      so = ao;
    } else so = !1;
    Fi = so && (!document.documentMode || 9 < document.documentMode);
  }
  function Ai() {
    qn && (qn.detachEvent('onpropertychange', Vi), (Jn = qn = null));
  }
  function Vi(e) {
    if (e.propertyName === 'value' && Ur(Jn)) {
      var t = [];
      Ii(t, Jn, e, Wl(e)), ui(of, t);
    }
  }
  function sf(e, t, n) {
    e === 'focusin'
      ? (Ai(), (qn = t), (Jn = n), qn.attachEvent('onpropertychange', Vi))
      : e === 'focusout' && Ai();
  }
  function af(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ur(Jn);
  }
  function cf(e, t) {
    if (e === 'click') return Ur(t);
  }
  function ff(e, t) {
    if (e === 'input' || e === 'change') return Ur(t);
  }
  function df(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == 'function' ? Object.is : df;
  function Zn(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Bi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wi(e, t) {
    var n = Bi(e);
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
      n = Bi(n);
    }
  }
  function $i(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? $i(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Hi() {
    for (var e = window, t = _r(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = _r(e.document);
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
  function pf(e) {
    var t = Hi(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $i(n.ownerDocument.documentElement, n)) {
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
            (l = Wi(n, o));
          var u = Wi(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var vf = D && 'documentMode' in document && 11 >= document.documentMode,
    hn = null,
    fo = null,
    bn = null,
    po = !1;
  function Qi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    po ||
      hn == null ||
      hn !== _r(r) ||
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
  var mn = {
      animationend: Ar('Animation', 'AnimationEnd'),
      animationiteration: Ar('Animation', 'AnimationIteration'),
      animationstart: Ar('Animation', 'AnimationStart'),
      transitionend: Ar('Transition', 'TransitionEnd'),
    },
    vo = {},
    Ki = {};
  D &&
    ((Ki = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete mn.animationend.animation,
      delete mn.animationiteration.animation,
      delete mn.animationstart.animation),
    'TransitionEvent' in window || delete mn.transitionend.transition);
  function Vr(e) {
    if (vo[e]) return vo[e];
    if (!mn[e]) return e;
    var t = mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ki) return (vo[e] = t[n]);
    return e;
  }
  var Yi = Vr('animationend'),
    Xi = Vr('animationiteration'),
    Gi = Vr('animationstart'),
    qi = Vr('transitionend'),
    Ji = new Map(),
    Zi =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Tt(e, t) {
    Ji.set(e, t), U(t, [e]);
  }
  for (var ho = 0; ho < Zi.length; ho++) {
    var mo = Zi[ho],
      hf = mo.toLowerCase(),
      mf = mo[0].toUpperCase() + mo.slice(1);
    Tt(hf, 'on' + mf);
  }
  Tt(Yi, 'onAnimationEnd'),
    Tt(Xi, 'onAnimationIteration'),
    Tt(Gi, 'onAnimationStart'),
    Tt('dblclick', 'onDoubleClick'),
    Tt('focusin', 'onFocus'),
    Tt('focusout', 'onBlur'),
    Tt(qi, 'onTransitionEnd'),
    A('onMouseEnter', ['mouseout', 'mouseover']),
    A('onMouseLeave', ['mouseout', 'mouseover']),
    A('onPointerEnter', ['pointerout', 'pointerover']),
    A('onPointerLeave', ['pointerout', 'pointerover']),
    U('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    U(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    U('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    U('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    U(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    U(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var er =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    gf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(er));
  function bi(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), vc(r, t, void 0, e), (e.currentTarget = null);
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
          for (var u = r.length - 1; 0 <= u; u--) {
            var i = r[u],
              s = i.instance,
              v = i.currentTarget;
            if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
            bi(l, i, v), (o = s);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((i = r[u]),
              (s = i.instance),
              (v = i.currentTarget),
              (i = i.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            bi(l, i, v), (o = s);
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
  function go(e, t, n) {
    var r = 0;
    t && (r |= 4), ts(n, e, r, t);
  }
  var Br = '_reactListening' + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        Q.forEach(function (n) {
          n !== 'selectionchange' && (gf.has(n) || go(n, !1, e), go(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), go('selectionchange', !1, t));
    }
  }
  function ts(e, t, n, r) {
    switch (Pi(t)) {
      case 1:
        var l = jc;
        break;
      case 4:
        l = Rc;
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
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; i !== null; ) {
            if (((u = Xt(i)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    ui(function () {
      var v = o,
        S = Wl(n),
        _ = [];
      e: {
        var y = Ji.get(e);
        if (y !== void 0) {
          var N = no,
            L = e;
          switch (e) {
            case 'keypress':
              if (Dr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              N = Kc;
              break;
            case 'focusin':
              (L = 'focus'), (N = oo);
              break;
            case 'focusout':
              (L = 'blur'), (N = oo);
              break;
            case 'beforeblur':
            case 'afterblur':
              N = oo;
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
              N = Oi;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              N = Mc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              N = Gc;
              break;
            case Yi:
            case Xi:
            case Gi:
              N = Fc;
              break;
            case qi:
              N = Jc;
              break;
            case 'scroll':
              N = Tc;
              break;
            case 'wheel':
              N = bc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              N = Ac;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              N = zi;
          }
          var M = (t & 4) !== 0,
            me = !M && e === 'scroll',
            f = M ? (y !== null ? y + 'Capture' : null) : y;
          M = [];
          for (var a = v, d; a !== null; ) {
            d = a;
            var x = d.stateNode;
            if (
              (d.tag === 5 &&
                x !== null &&
                ((d = x), f !== null && ((x = Fn(a, f)), x != null && M.push(nr(a, x, d)))),
              me)
            )
              break;
            a = a.return;
          }
          0 < M.length && ((y = new N(y, L, null, n, S)), _.push({ event: y, listeners: M }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (N = e === 'mouseout' || e === 'pointerout'),
            y && n !== Bl && (L = n.relatedTarget || n.fromElement) && (Xt(L) || L[yt]))
          )
            break e;
          if (
            (N || y) &&
            ((y =
              S.window === S
                ? S
                : (y = S.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            N
              ? ((L = n.relatedTarget || n.toElement),
                (N = v),
                (L = L ? Xt(L) : null),
                L !== null &&
                  ((me = Yt(L)), L !== me || (L.tag !== 5 && L.tag !== 6)) &&
                  (L = null))
              : ((N = null), (L = v)),
            N !== L)
          ) {
            if (
              ((M = Oi),
              (x = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((M = zi), (x = 'onPointerLeave'), (f = 'onPointerEnter'), (a = 'pointer')),
              (me = N == null ? y : wn(N)),
              (d = L == null ? y : wn(L)),
              (y = new M(x, a + 'leave', N, n, S)),
              (y.target = me),
              (y.relatedTarget = d),
              (x = null),
              Xt(S) === v &&
                ((M = new M(f, a + 'enter', L, n, S)),
                (M.target = d),
                (M.relatedTarget = me),
                (x = M)),
              (me = x),
              N && L)
            )
              t: {
                for (M = N, f = L, a = 0, d = M; d; d = gn(d)) a++;
                for (d = 0, x = f; x; x = gn(x)) d++;
                for (; 0 < a - d; ) (M = gn(M)), a--;
                for (; 0 < d - a; ) (f = gn(f)), d--;
                for (; a--; ) {
                  if (M === f || (f !== null && M === f.alternate)) break t;
                  (M = gn(M)), (f = gn(f));
                }
                M = null;
              }
            else M = null;
            N !== null && ns(_, y, N, M, !1), L !== null && me !== null && ns(_, me, L, M, !0);
          }
        }
        e: {
          if (
            ((y = v ? wn(v) : window),
            (N = y.nodeName && y.nodeName.toLowerCase()),
            N === 'select' || (N === 'input' && y.type === 'file'))
          )
            var I = uf;
          else if (Di(y))
            if (Fi) I = ff;
            else {
              I = af;
              var V = sf;
            }
          else
            (N = y.nodeName) &&
              N.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (I = cf);
          if (I && (I = I(e, v))) {
            Ii(_, I, n, S);
            break e;
          }
          V && V(e, y, v),
            e === 'focusout' &&
              (V = y._wrapperState) &&
              V.controlled &&
              y.type === 'number' &&
              Il(y, 'number', y.value);
        }
        switch (((V = v ? wn(v) : window), e)) {
          case 'focusin':
            (Di(V) || V.contentEditable === 'true') && ((hn = V), (fo = v), (bn = null));
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
            (po = !1), Qi(_, n, S);
            break;
          case 'selectionchange':
            if (vf) break;
          case 'keydown':
          case 'keyup':
            Qi(_, n, S);
        }
        var B;
        if (io)
          e: {
            switch (e) {
              case 'compositionstart':
                var K = 'onCompositionStart';
                break e;
              case 'compositionend':
                K = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                K = 'onCompositionUpdate';
                break e;
            }
            K = void 0;
          }
        else
          vn
            ? Li(e, n) && (K = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (K = 'onCompositionStart');
        K &&
          (ji &&
            n.locale !== 'ko' &&
            (vn || K !== 'onCompositionStart'
              ? K === 'onCompositionEnd' && vn && (B = Ei())
              : ((Rt = S), (to = 'value' in Rt ? Rt.value : Rt.textContent), (vn = !0))),
          (V = Wr(v, K)),
          0 < V.length &&
            ((K = new Ni(K, e, null, n, S)),
            _.push({ event: K, listeners: V }),
            B ? (K.data = B) : ((B = Mi(n)), B !== null && (K.data = B)))),
          (B = tf ? nf(e, n) : rf(e, n)) &&
            ((v = Wr(v, 'onBeforeInput')),
            0 < v.length &&
              ((S = new Ni('onBeforeInput', 'beforeinput', null, n, S)),
              _.push({ event: S, listeners: v }),
              (S.data = B)));
      }
      es(_, t);
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
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ns(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n,
        s = i.alternate,
        v = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 &&
        v !== null &&
        ((i = v),
        l
          ? ((s = Fn(n, o)), s != null && u.unshift(nr(n, s, i)))
          : l || ((s = Fn(n, o)), s != null && u.push(nr(n, s, i)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var yf = /\r\n?/g,
    wf = /\u0000|\uFFFD/g;
  function rs(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        yf,
        `
`,
      )
      .replace(wf, '');
  }
  function $r(e, t, n) {
    if (((t = rs(t)), rs(e) !== t && n)) throw Error(p(425));
  }
  function Hr() {}
  var wo = null,
    So = null;
  function _o(e, t) {
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
  var ko = typeof setTimeout == 'function' ? setTimeout : void 0,
    Sf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ls = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ls < 'u'
          ? function (e) {
              return ls.resolve(null).then(e).catch(kf);
            }
          : ko;
  function kf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xo(e, t) {
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
    xf = '__reactListeners$' + yn,
    Pf = '__reactHandles$' + yn;
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
    throw Error(p(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Eo = [],
    Sn = -1;
  function Mt(e) {
    return { current: e };
  }
  function ue(e) {
    0 > Sn || ((e.current = Eo[Sn]), (Eo[Sn] = null), Sn--);
  }
  function le(e, t) {
    Sn++, (Eo[Sn] = e.current), (e.current = t);
  }
  var Dt = {},
    Ee = Mt(Dt),
    Ie = Mt(!1),
    Gt = Dt;
  function _n(e, t) {
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
    ue(Ie), ue(Ee);
  }
  function us(e, t, n) {
    if (Ee.current !== Dt) throw Error(p(168));
    le(Ee, t), le(Ie, n);
  }
  function is(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, re(e) || 'Unknown', l));
    return T({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Gt = Ee.current),
      le(Ee, e),
      le(Ie, Ie.current),
      !0
    );
  }
  function ss(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n
      ? ((e = is(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ue(Ie),
        ue(Ee),
        le(Ee, e))
      : ue(Ie),
      le(Ie, n);
  }
  var wt = null,
    Xr = !1,
    Co = !1;
  function as(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function Ef(e) {
    (Xr = !0), as(e);
  }
  function It() {
    if (!Co && wt !== null) {
      Co = !0;
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
        throw (wt !== null && (wt = wt.slice(e + 1)), fi(Yl, It), l);
      } finally {
        (ne = t), (Co = !1);
      }
    }
    return null;
  }
  var kn = [],
    xn = 0,
    Gr = null,
    qr = 0,
    Ge = [],
    qe = 0,
    qt = null,
    St = 1,
    _t = '';
  function Jt(e, t) {
    (kn[xn++] = qr), (kn[xn++] = Gr), (Gr = e), (qr = t);
  }
  function cs(e, t, n) {
    (Ge[qe++] = St), (Ge[qe++] = _t), (Ge[qe++] = qt), (qt = e);
    var r = St;
    e = _t;
    var l = 32 - rt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - rt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (St = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (_t = o + e);
    } else (St = (1 << o) | (n << l) | r), (_t = e);
  }
  function Oo(e) {
    e.return !== null && (Jt(e, 1), cs(e, 1, 0));
  }
  function No(e) {
    for (; e === Gr; ) (Gr = kn[--xn]), (kn[xn] = null), (qr = kn[--xn]), (kn[xn] = null);
    for (; e === qt; )
      (qt = Ge[--qe]),
        (Ge[qe] = null),
        (_t = Ge[--qe]),
        (Ge[qe] = null),
        (St = Ge[--qe]),
        (Ge[qe] = null);
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
            ? ((n = qt !== null ? { id: St, overflow: _t } : null),
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
          if (zo(e)) throw Error(p(418));
          t = Lt(n.nextSibling);
          var r = Qe;
          t && ds(e, t) ? fs(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e));
        }
      } else {
        if (zo(e)) throw Error(p(418));
        (e.flags = (e.flags & -4097) | 2), (se = !1), (Qe = e);
      }
    }
  }
  function ps(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qe = e;
  }
  function Jr(e) {
    if (e !== Qe) return !1;
    if (!se) return ps(e), (se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !_o(e.type, e.memoizedProps))),
      t && (t = Ke))
    ) {
      if (zo(e)) throw (vs(), Error(p(418)));
      for (; t; ) fs(e, t), (t = Lt(t.nextSibling));
    }
    if ((ps(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
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
  var Cf = fe.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var i = l.refs;
              u === null ? delete i[o] : (i[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function Zr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        p(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      ))
    );
  }
  function hs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ms(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
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
    function o(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, x) {
      return a === null || a.tag !== 6
        ? ((a = ku(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, x) {
      var I = d.type;
      return I === Me
        ? S(f, a, d.props.children, x, d.key)
        : a !== null &&
            (a.elementType === I ||
              (typeof I == 'object' && I !== null && I.$$typeof === De && hs(I) === a.type))
          ? ((x = l(a, d.props)), (x.ref = or(f, a, d)), (x.return = f), x)
          : ((x = kl(d.type, d.key, d.props, null, f.mode, x)),
            (x.ref = or(f, a, d)),
            (x.return = f),
            x);
    }
    function v(f, a, d, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xu(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function S(f, a, d, x, I) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, x, I)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function _(f, a, d) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = ku('' + a, f.mode, d)), (a.return = f), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case tt:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = or(f, null, a)),
              (d.return = f),
              d
            );
          case je:
            return (a = xu(a, f.mode, d)), (a.return = f), a;
          case De:
            var x = a._init;
            return _(f, x(a._payload), d);
        }
        if (Mn(a) || H(a)) return (a = on(a, f.mode, d, null)), (a.return = f), a;
        Zr(f, a);
      }
      return null;
    }
    function y(f, a, d, x) {
      var I = a !== null ? a.key : null;
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return I !== null ? null : i(f, a, '' + d, x);
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case tt:
            return d.key === I ? s(f, a, d, x) : null;
          case je:
            return d.key === I ? v(f, a, d, x) : null;
          case De:
            return (I = d._init), y(f, a, I(d._payload), x);
        }
        if (Mn(d) || H(d)) return I !== null ? null : S(f, a, d, x, null);
        Zr(f, d);
      }
      return null;
    }
    function N(f, a, d, x, I) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (f = f.get(d) || null), i(a, f, '' + x, I);
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case tt:
            return (f = f.get(x.key === null ? d : x.key) || null), s(a, f, x, I);
          case je:
            return (f = f.get(x.key === null ? d : x.key) || null), v(a, f, x, I);
          case De:
            var V = x._init;
            return N(f, a, d, V(x._payload), I);
        }
        if (Mn(x) || H(x)) return (f = f.get(d) || null), S(a, f, x, I, null);
        Zr(a, x);
      }
      return null;
    }
    function L(f, a, d, x) {
      for (var I = null, V = null, B = a, K = (a = 0), ke = null; B !== null && K < d.length; K++) {
        B.index > K ? ((ke = B), (B = null)) : (ke = B.sibling);
        var ee = y(f, B, d[K], x);
        if (ee === null) {
          B === null && (B = ke);
          break;
        }
        e && B && ee.alternate === null && t(f, B),
          (a = o(ee, a, K)),
          V === null ? (I = ee) : (V.sibling = ee),
          (V = ee),
          (B = ke);
      }
      if (K === d.length) return n(f, B), se && Jt(f, K), I;
      if (B === null) {
        for (; K < d.length; K++)
          (B = _(f, d[K], x)),
            B !== null && ((a = o(B, a, K)), V === null ? (I = B) : (V.sibling = B), (V = B));
        return se && Jt(f, K), I;
      }
      for (B = r(f, B); K < d.length; K++)
        (ke = N(B, f, K, d[K], x)),
          ke !== null &&
            (e && ke.alternate !== null && B.delete(ke.key === null ? K : ke.key),
            (a = o(ke, a, K)),
            V === null ? (I = ke) : (V.sibling = ke),
            (V = ke));
      return (
        e &&
          B.forEach(function (Qt) {
            return t(f, Qt);
          }),
        se && Jt(f, K),
        I
      );
    }
    function M(f, a, d, x) {
      var I = H(d);
      if (typeof I != 'function') throw Error(p(150));
      if (((d = I.call(d)), d == null)) throw Error(p(151));
      for (
        var V = (I = null), B = a, K = (a = 0), ke = null, ee = d.next();
        B !== null && !ee.done;
        K++, ee = d.next()
      ) {
        B.index > K ? ((ke = B), (B = null)) : (ke = B.sibling);
        var Qt = y(f, B, ee.value, x);
        if (Qt === null) {
          B === null && (B = ke);
          break;
        }
        e && B && Qt.alternate === null && t(f, B),
          (a = o(Qt, a, K)),
          V === null ? (I = Qt) : (V.sibling = Qt),
          (V = Qt),
          (B = ke);
      }
      if (ee.done) return n(f, B), se && Jt(f, K), I;
      if (B === null) {
        for (; !ee.done; K++, ee = d.next())
          (ee = _(f, ee.value, x)),
            ee !== null && ((a = o(ee, a, K)), V === null ? (I = ee) : (V.sibling = ee), (V = ee));
        return se && Jt(f, K), I;
      }
      for (B = r(f, B); !ee.done; K++, ee = d.next())
        (ee = N(B, f, K, ee.value, x)),
          ee !== null &&
            (e && ee.alternate !== null && B.delete(ee.key === null ? K : ee.key),
            (a = o(ee, a, K)),
            V === null ? (I = ee) : (V.sibling = ee),
            (V = ee));
      return (
        e &&
          B.forEach(function (od) {
            return t(f, od);
          }),
        se && Jt(f, K),
        I
      );
    }
    function me(f, a, d, x) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === Me &&
          d.key === null &&
          (d = d.props.children),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case tt:
            e: {
              for (var I = d.key, V = a; V !== null; ) {
                if (V.key === I) {
                  if (((I = d.type), I === Me)) {
                    if (V.tag === 7) {
                      n(f, V.sibling), (a = l(V, d.props.children)), (a.return = f), (f = a);
                      break e;
                    }
                  } else if (
                    V.elementType === I ||
                    (typeof I == 'object' && I !== null && I.$$typeof === De && hs(I) === V.type)
                  ) {
                    n(f, V.sibling),
                      (a = l(V, d.props)),
                      (a.ref = or(f, V, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, V);
                  break;
                } else t(f, V);
                V = V.sibling;
              }
              d.type === Me
                ? ((a = on(d.props.children, f.mode, x, d.key)), (a.return = f), (f = a))
                : ((x = kl(d.type, d.key, d.props, null, f.mode, x)),
                  (x.ref = or(f, a, d)),
                  (x.return = f),
                  (f = x));
            }
            return u(f);
          case je:
            e: {
              for (V = d.key; a !== null; ) {
                if (a.key === V)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a);
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              (a = xu(d, f.mode, x)), (a.return = f), (f = a);
            }
            return u(f);
          case De:
            return (V = d._init), me(f, a, V(d._payload), x);
        }
        if (Mn(d)) return L(f, a, d, x);
        if (H(d)) return M(f, a, d, x);
        Zr(f, d);
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number'
        ? ((d = '' + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ku(d, f.mode, x)), (a.return = f), (f = a)),
          u(f))
        : n(f, a);
    }
    return me;
  }
  var En = ms(!0),
    gs = ms(!1),
    br = Mt(null),
    el = null,
    Cn = null,
    To = null;
  function Lo() {
    To = Cn = el = null;
  }
  function Mo(e) {
    var t = br.current;
    ue(br), (e._currentValue = t);
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
      (To = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ue = !0), (e.firstContext = null));
  }
  function Je(e) {
    var t = e._currentValue;
    if (To !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (el === null) throw Error(p(308));
        (Cn = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else Cn = Cn.next = e;
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
      kt(e, r)
    );
  }
  function kt(e, t) {
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
  function xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (J & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), kt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Io(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      kt(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
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
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
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
      u = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        v = s.next;
      (s.next = null), u === null ? (o = v) : (u.next = v), (u = s);
      var S = e.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (i = S.lastBaseUpdate),
        i !== u && (i === null ? (S.firstBaseUpdate = v) : (i.next = v), (S.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var _ = l.baseState;
      (u = 0), (S = v = s = null), (i = o);
      do {
        var y = i.lane,
          N = i.eventTime;
        if ((r & y) === y) {
          S !== null &&
            (S = S.next =
              {
                eventTime: N,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var L = e,
              M = i;
            switch (((y = t), (N = n), M.tag)) {
              case 1:
                if (((L = M.payload), typeof L == 'function')) {
                  _ = L.call(N, _, y);
                  break e;
                }
                _ = L;
                break e;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = M.payload), (y = typeof L == 'function' ? L.call(N, _, y) : L), y == null)
                )
                  break e;
                _ = T({}, _, y);
                break e;
              case 2:
                Ft = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [i]) : y.push(i));
        } else
          (N = {
            eventTime: N,
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            S === null ? ((v = S = N), (s = _)) : (S = S.next = N),
            (u |= y);
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          (y = i), (i = y.next), (y.next = null), (l.lastBaseUpdate = y), (l.shared.pending = null);
        }
      } while (!0);
      if (
        (S === null && (s = _),
        (l.baseState = s),
        (l.firstBaseUpdate = v),
        (l.lastBaseUpdate = S),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (tn |= u), (e.lanes = u), (e.memoizedState = _);
    }
  }
  function _s(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    vt = Mt(ur),
    ir = Mt(ur),
    sr = Mt(ur);
  function bt(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Uo(e, t) {
    switch ((le(sr, t), le(ir, e), le(vt, ur), (e = t.nodeType), e)) {
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
    ue(vt), le(vt, t);
  }
  function Nn() {
    ue(vt), ue(ir), ue(sr);
  }
  function ks(e) {
    bt(sr.current);
    var t = bt(vt.current),
      n = Ul(t, e.type);
    t !== n && (le(ir, e), le(vt, n));
  }
  function Ao(e) {
    ir.current === e && (ue(vt), ue(ir));
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
  var Vo = [];
  function Bo() {
    for (var e = 0; e < Vo.length; e++) Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0;
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
    Of = 0;
  function Ce() {
    throw Error(p(321));
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
      (ll.current = e === null || e.memoizedState === null ? Rf : Tf),
      (e = n(r, l)),
      ar)
    ) {
      o = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= o)) throw Error(p(301));
        (o += 1), (Se = ye = null), (t.updateQueue = null), (ll.current = Lf), (e = n(r, l));
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
      throw Error(p(300));
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
      if (e === null) throw Error(p(310));
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
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = ye,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var i = (u = null),
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
          var _ = {
            lane: S,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          };
          s === null ? ((i = s = _), (u = r)) : (s = s.next = _), (ce.lanes |= S), (tn |= S);
        }
        v = v.next;
      } while (v !== null && v !== o);
      s === null ? (u = r) : (s.next = i),
        lt(r, t.memoizedState) || (Ue = !0),
        (t.memoizedState = r),
        (t.baseState = u),
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
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      lt(o, t.memoizedState) || (Ue = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function xs() {}
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
      if (((n.flags |= 2048), dr(9, Cs.bind(null, n, r, l, t), void 0, null), _e === null))
        throw Error(p(349));
      (en & 30) !== 0 || Es(n, t, l);
    }
    return l;
  }
  function Es(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Cs(e, t, n, r) {
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
    var t = kt(e, 1);
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
      (e = e.dispatch = jf.bind(null, ce, e)),
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
  function ul(e, t, n, r) {
    var l = ht();
    (ce.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function il(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var u = ye.memoizedState;
      if (((o = u.destroy), r !== null && $o(r, u.deps))) {
        l.memoizedState = dr(t, n, o, r);
        return;
      }
    }
    (ce.flags |= e), (l.memoizedState = dr(1 | t, n, o, r));
  }
  function Ts(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Xo(e, t) {
    return il(2048, 8, e, t);
  }
  function Ls(e, t) {
    return il(4, 2, e, t);
  }
  function Ms(e, t) {
    return il(4, 4, e, t);
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
    return (n = n != null ? n.concat([e]) : null), il(4, 4, Ds.bind(null, t, e), n);
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
      : (lt(n, t) || ((n = hi()), (ce.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function Nf(e, t) {
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
  function Vs() {
    return Ze().memoizedState;
  }
  function zf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Bs(e)))
      Ws(t, n);
    else if (((n = ys(e, t, n, r)), n !== null)) {
      var l = Te();
      at(n, e, r, l), $s(n, t, r);
    }
  }
  function jf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Bs(e)) Ws(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            i = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = i), lt(i, u))) {
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
  function Bs(e) {
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
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
    }
  }
  var sl = {
      readContext: Je,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    Rf = {
      readContext: Je,
      useCallback: function (e, t) {
        return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Je,
      useEffect: Ts,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), ul(4194308, 4, Ds.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
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
          (e = e.dispatch = zf.bind(null, ce, e)),
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
        return (e = Nf.bind(null, e[1])), (ht().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ce,
          l = ht();
        if (se) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), _e === null)) throw Error(p(349));
          (en & 30) !== 0 || Es(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ts(Os.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          dr(9, Cs.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = _e.identifierPrefix;
        if (se) {
          var n = _t,
            r = St;
          (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = cr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = Of++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Tf = {
      readContext: Je,
      useCallback: Fs,
      useContext: Je,
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
      useMutableSource: xs,
      useSyncExternalStore: Ps,
      useId: Vs,
      unstable_isNewReconciler: !1,
    },
    Lf = {
      readContext: Je,
      useCallback: Fs,
      useContext: Je,
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
      useMutableSource: xs,
      useSyncExternalStore: Ps,
      useId: Vs,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      (t = T({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : T({}, t, n)),
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
        o = xt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (at(t, e, l, r), tl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Wt(e),
        o = xt(r, l);
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
        l = xt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (at(t, e, r, n), tl(t, e, r));
    },
  };
  function Hs(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, u)
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
        ? (o = Je(o))
        : ((l = Fe(t) ? Gt : Ee.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? _n(e, l) : Dt)),
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
  function Jo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fo(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = Je(o))
      : ((o = Fe(t) ? Gt : Ee.current), (l.context = _n(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (qo(e, t, o, n), (l.state = e.memoizedState)),
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
  var Mf = typeof WeakMap == 'function' ? WeakMap : Map;
  function Ys(e, t, n) {
    (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        ml || ((ml = !0), (vu = r)), bo(e, t);
      }),
      n
    );
  }
  function Xs(e, t, n) {
    (n = xt(-1, n)), (n.tag = 3);
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
          bo(e, t), typeof r != 'function' && (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' });
        }),
      n
    );
  }
  function Gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Mf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Xf.bind(null, e, t, n)), t.then(e, e));
  }
  function qs(e) {
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
  function Js(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = xt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Df = fe.ReactCurrentOwner,
    Ue = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? gs(t, null, n, r) : En(t, e.child, n, r);
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
        !_u(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ea(e, t, o, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Zn), n(u, r) && e.ref === t.ref))
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
    return eu(e, t, n, r, l);
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
  function eu(e, t, n, r, l) {
    var o = Fe(n) ? Gt : Ee.current;
    return (
      (o = _n(t, o)),
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
    if ((On(t, l), t.stateNode === null)) fl(e, t), Qs(t, n, r), Jo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        i = t.memoizedProps;
      u.props = i;
      var s = u.context,
        v = n.contextType;
      typeof v == 'object' && v !== null
        ? (v = Je(v))
        : ((v = Fe(n) ? Gt : Ee.current), (v = _n(t, v)));
      var S = n.getDerivedStateFromProps,
        _ = typeof S == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
      _ ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== r || s !== v) && Ks(t, u, r, v)),
        (Ft = !1);
      var y = t.memoizedState;
      (u.state = y),
        nl(t, r, u, l),
        (s = t.memoizedState),
        i !== r || y !== s || Ie.current || Ft
          ? (typeof S == 'function' && (qo(t, n, S, r), (s = t.memoizedState)),
            (i = Ft || Hs(t, n, i, r, y, s, v))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = v),
            (r = i))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (u = t.stateNode),
        ws(e, t),
        (i = t.memoizedProps),
        (v = t.type === t.elementType ? i : ut(t.type, i)),
        (u.props = v),
        (_ = t.pendingProps),
        (y = u.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = Je(s))
          : ((s = Fe(n) ? Gt : Ee.current), (s = _n(t, s)));
      var N = n.getDerivedStateFromProps;
      (S = typeof N == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== _ || y !== s) && Ks(t, u, r, s)),
        (Ft = !1),
        (y = t.memoizedState),
        (u.state = y),
        nl(t, r, u, l);
      var L = t.memoizedState;
      i !== _ || y !== L || Ie.current || Ft
        ? (typeof N == 'function' && (qo(t, n, N, r), (L = t.memoizedState)),
          (v = Ft || Hs(t, n, v, r, y, L, s) || !1)
            ? (S ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(r, L, s),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, L, s)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (i === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (i === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = L)),
          (u.props = r),
          (u.state = L),
          (u.context = s),
          (r = v))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return tu(e, t, n, r, o, l);
  }
  function tu(e, t, n, r, l, o) {
    na(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && ss(t, n, !1), Pt(e, t, o);
    (r = t.stateNode), (Df.current = t);
    var i = u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = En(t, e.child, null, o)), (t.child = En(t, null, i, o)))
        : Re(e, t, i, o),
      (t.memoizedState = r.state),
      l && ss(t, n, !0),
      t.child
    );
  }
  function la(e) {
    var t = e.stateNode;
    t.pendingContext
      ? us(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && us(e, t.context, !1),
      Uo(e, t.containerInfo);
  }
  function oa(e, t, n, r, l) {
    return Pn(), Ro(l), (t.flags |= 256), Re(e, t, n, r), t.child;
  }
  var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ua(e, t, n) {
    var r = t.pendingProps,
      l = ae.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
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
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: 'hidden', children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = xl(u, r, 0, null)),
                (e = on(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ru(n)),
                (t.memoizedState = nu),
                e)
              : lu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return If(e, t, u, r, i, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling);
      var s = { mode: 'hidden', children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (o = Ht(i, o)) : ((o = on(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? ru(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = nu),
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
  function lu(e, t) {
    return (
      (t = xl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Ro(r),
      En(t, e.child, null, n),
      (e = lu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function If(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zo(Error(p(422)))), cl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = xl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = on(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, u),
            (t.child.memoizedState = ru(u)),
            (t.memoizedState = nu),
            o);
    if ((t.mode & 1) === 0) return cl(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return (r = i), (o = Error(p(419))), (r = Zo(o, r, void 0)), cl(e, t, u, r);
    }
    if (((i = (u & e.childLanes) !== 0), Ue || i)) {
      if (((r = _e), r !== null)) {
        switch (u & -u) {
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
        (l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), kt(e, l), at(r, e, l, -1));
      }
      return Su(), (r = Zo(Error(p(421)))), cl(e, t, u, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Gf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Ke = Lt(l.nextSibling)),
        (Qe = t),
        (se = !0),
        (ot = null),
        e !== null &&
          ((Ge[qe++] = St),
          (Ge[qe++] = _t),
          (Ge[qe++] = qt),
          (St = e.id),
          (_t = e.overflow),
          (qt = t)),
        (t = lu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ia(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Do(e.return, t, n);
  }
  function ou(e, t, n, r, l) {
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
          if (e.tag === 13) e.memoizedState !== null && ia(e, n, t);
          else if (e.tag === 19) ia(e, n, t);
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
            ou(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          ou(t, !0, n, null, o);
          break;
        case 'together':
          ou(t, !1, null, null, void 0);
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
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ff(e, t, n) {
    switch (t.tag) {
      case 3:
        la(t), Pn();
        break;
      case 5:
        ks(t);
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
              ? ua(e, t, n)
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
  var aa, uu, ca, fa;
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
    (uu = function () {}),
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
            (l = T({}, l, { value: void 0 })), (r = T({}, r, { value: void 0 })), (o = []);
            break;
          case 'textarea':
            (l = Fl(e, l)), (r = Fl(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Hr);
        }
        Al(n, r);
        var u;
        n = null;
        for (v in l)
          if (!r.hasOwnProperty(v) && l.hasOwnProperty(v) && l[v] != null)
            if (v === 'style') {
              var i = l[v];
              for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
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
            ((i = l != null ? l[v] : void 0),
            r.hasOwnProperty(v) && s !== i && (s != null || i != null))
          )
            if (v === 'style')
              if (i) {
                for (u in i)
                  !i.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), (n[u] = s[u]));
              } else n || (o || (o = []), o.push(v, n)), (n = s);
            else
              v === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (o = o || []).push(v, s))
                : v === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') || (o = o || []).push(v, '' + s)
                  : v !== 'suppressContentEditableWarning' &&
                    v !== 'suppressHydrationWarning' &&
                    (W.hasOwnProperty(v)
                      ? (s != null && v === 'onScroll' && oe('scroll', e), o || i === s || (o = []))
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
  function Uf(e, t, n) {
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
          ue(Ie),
          ue(Ee),
          Bo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ot !== null && (gu(ot), (ot = null)))),
          uu(e, t),
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
            if (t.stateNode === null) throw Error(p(166));
            return Oe(t), null;
          }
          if (((e = bt(vt.current)), Jr(t))) {
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
                Qu(r, o), oe('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), oe('invalid', r);
                break;
              case 'textarea':
                Xu(r, o), oe('invalid', r);
            }
            Al(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var i = o[u];
                u === 'children'
                  ? typeof i == 'string'
                    ? r.textContent !== i &&
                      (o.suppressHydrationWarning !== !0 && $r(r.textContent, i, e),
                      (l = ['children', i]))
                    : typeof i == 'number' &&
                      r.textContent !== '' + i &&
                      (o.suppressHydrationWarning !== !0 && $r(r.textContent, i, e),
                      (l = ['children', '' + i]))
                  : W.hasOwnProperty(u) && i != null && u === 'onScroll' && oe('scroll', r);
              }
            switch (n) {
              case 'input':
                Sr(r), Yu(r, o, !0);
                break;
              case 'textarea':
                Sr(r), qu(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Hr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Ju(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              aa(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = Vl(n, r)), n)) {
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
                  Qu(e, r), (l = Ml(e, r)), oe('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = T({}, r, { value: void 0 })),
                    oe('invalid', e);
                  break;
                case 'textarea':
                  Xu(e, r), (l = Fl(e, r)), oe('invalid', e);
                  break;
                default:
                  l = r;
              }
              Al(n, l), (i = l);
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var s = i[o];
                  o === 'style'
                    ? ei(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Zu(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && Dn(e, s)
                          : typeof s == 'number' && Dn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (W.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && oe('scroll', e)
                            : s != null && Le(e, o, s, u));
                }
              switch (n) {
                case 'input':
                  Sr(e), Yu(e, r, !1);
                  break;
                case 'textarea':
                  Sr(e), qu(e);
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
          if (typeof r != 'string' && t.stateNode === null) throw Error(p(166));
          if (((n = bt(sr.current)), bt(vt.current), Jr(t))) {
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
          (ue(ae),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ke !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            vs(), Pn(), (t.flags |= 98560), (o = !1);
          else if (((o = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(p(317));
              o[pt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Oe(t), (o = !1);
          } else ot !== null && (gu(ot), (ot = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ae.current & 1) !== 0 ? we === 0 && (we = 3) : Su())),
            t.updateQueue !== null && (t.flags |= 4),
            Oe(t),
            null);
      case 4:
        return Nn(), uu(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Mo(t.type._context), Oe(t), null;
      case 17:
        return Fe(t.type) && Kr(), Oe(t), null;
      case 19:
        if ((ue(ae), (o = t.memoizedState), o === null)) return Oe(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) pr(o, !1);
          else {
            if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = rl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      pr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
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
            if (((e = rl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !u.alternate && !se)
              )
                return Oe(t), null;
            } else
              2 * he() - o.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last), n !== null ? (n.sibling = u) : (t.child = u), (o.last = u));
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
          wu(),
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
    throw Error(p(156, t.tag));
  }
  function Af(e, t) {
    switch ((No(t), t.tag)) {
      case 1:
        return (
          Fe(t.type) && Kr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          ue(Ie),
          ue(Ee),
          Bo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ao(t), null;
      case 13:
        if ((ue(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          Pn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ue(ae), null;
      case 4:
        return Nn(), null;
      case 10:
        return Mo(t.type._context), null;
      case 22:
      case 23:
        return wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Ne = !1,
    Vf = typeof WeakSet == 'function' ? WeakSet : Set,
    j = null;
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
  function iu(e, t, n) {
    try {
      n();
    } catch (r) {
      pe(e, t, r);
    }
  }
  var da = !1;
  function Bf(e, t) {
    if (((wo = Tr), (e = Hi()), co(e))) {
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
            var u = 0,
              i = -1,
              s = -1,
              v = 0,
              S = 0,
              _ = e,
              y = null;
            t: for (;;) {
              for (
                var N;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (i = u + l),
                  _ !== o || (r !== 0 && _.nodeType !== 3) || (s = u + r),
                  _.nodeType === 3 && (u += _.nodeValue.length),
                  (N = _.firstChild) !== null;

              )
                (y = _), (_ = N);
              for (;;) {
                if (_ === e) break t;
                if (
                  (y === n && ++v === l && (i = u),
                  y === o && ++S === r && (s = u),
                  (N = _.nextSibling) !== null)
                )
                  break;
                (_ = y), (y = _.parentNode);
              }
              _ = N;
            }
            n = i === -1 || s === -1 ? null : { start: i, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (So = { focusedElem: e, selectionRange: n }, Tr = !1, j = t; j !== null; )
      if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (j = e);
      else
        for (; j !== null; ) {
          t = j;
          try {
            var L = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (L !== null) {
                    var M = L.memoizedProps,
                      me = L.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? M : ut(t.type, M),
                        me,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = '')
                    : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (x) {
            pe(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (j = e);
            break;
          }
          j = t.return;
        }
    return (L = da), (da = !1), L;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && iu(t, n, o);
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
  function su(e) {
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
        t !== null && (delete t[pt], delete t[rr], delete t[Po], delete t[xf], delete t[Pf])),
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
  function au(e, t, n) {
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
      for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling);
  }
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
  }
  var xe = null,
    it = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) ma(e, t, n), (n = n.sibling);
  }
  function ma(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == 'function')
      try {
        dt.onCommitFiberUnmount(Cr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ne || jn(n, t);
      case 6:
        var r = xe,
          l = it;
        (xe = null),
          At(e, t, n),
          (xe = r),
          (it = l),
          xe !== null &&
            (it
              ? ((e = xe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : xe.removeChild(n.stateNode));
        break;
      case 18:
        xe !== null &&
          (it
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? xo(e.parentNode, n) : e.nodeType === 1 && xo(e, n),
              Kn(e))
            : xo(xe, n.stateNode));
        break;
      case 4:
        (r = xe),
          (l = it),
          (xe = n.stateNode.containerInfo),
          (it = !0),
          At(e, t, n),
          (xe = r),
          (it = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ne && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && iu(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!Ne && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (i) {
            pe(n, t, i);
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
  function ga(e) {
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
            u = t,
            i = u;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                (xe = i.stateNode), (it = !1);
                break e;
              case 3:
                (xe = i.stateNode.containerInfo), (it = !0);
                break e;
              case 4:
                (xe = i.stateNode.containerInfo), (it = !0);
                break e;
            }
            i = i.return;
          }
          if (xe === null) throw Error(p(160));
          ma(o, u, l), (xe = null), (it = !1);
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
        if ((st(t, e), mt(e), r & 4)) {
          try {
            vr(3, e, e.return), pl(3, e);
          } catch (M) {
            pe(e, e.return, M);
          }
          try {
            vr(5, e, e.return);
          } catch (M) {
            pe(e, e.return, M);
          }
        }
        break;
      case 1:
        st(t, e), mt(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if ((st(t, e), mt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, '');
          } catch (M) {
            pe(e, e.return, M);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              i === 'input' && o.type === 'radio' && o.name != null && Ku(l, o), Vl(i, u);
              var v = Vl(i, o);
              for (u = 0; u < s.length; u += 2) {
                var S = s[u],
                  _ = s[u + 1];
                S === 'style'
                  ? ei(l, _)
                  : S === 'dangerouslySetInnerHTML'
                    ? Zu(l, _)
                    : S === 'children'
                      ? Dn(l, _)
                      : Le(l, S, _, v);
              }
              switch (i) {
                case 'input':
                  Dl(l, o);
                  break;
                case 'textarea':
                  Gu(l, o);
                  break;
                case 'select':
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var N = o.value;
                  N != null
                    ? an(l, !!o.multiple, N, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? an(l, !!o.multiple, o.defaultValue, !0)
                        : an(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[rr] = o;
            } catch (M) {
              pe(e, e.return, M);
            }
        }
        break;
      case 6:
        if ((st(t, e), mt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (M) {
            pe(e, e.return, M);
          }
        }
        break;
      case 3:
        if ((st(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (M) {
            pe(e, e.return, M);
          }
        break;
      case 4:
        st(t, e), mt(e);
        break;
      case 13:
        st(t, e),
          mt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (pu = he())),
          r & 4 && ga(e);
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ne = (v = Ne) || S), st(t, e), (Ne = v)) : st(t, e),
          mt(e),
          r & 8192)
        ) {
          if (
            ((v = e.memoizedState !== null), (e.stateNode.isHidden = v) && !S && (e.mode & 1) !== 0)
          )
            for (j = e, S = e.child; S !== null; ) {
              for (_ = j = S; j !== null; ) {
                switch (((y = j), (N = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, y, y.return);
                    break;
                  case 1:
                    jn(y, y.return);
                    var L = y.stateNode;
                    if (typeof L.componentWillUnmount == 'function') {
                      (r = y), (n = y.return);
                      try {
                        (t = r),
                          (L.props = t.memoizedProps),
                          (L.state = t.memoizedState),
                          L.componentWillUnmount();
                      } catch (M) {
                        pe(r, n, M);
                      }
                    }
                    break;
                  case 5:
                    jn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      _a(_);
                      continue;
                    }
                }
                N !== null ? ((N.return = y), (j = N)) : _a(_);
              }
              S = S.sibling;
            }
          e: for (S = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (S === null) {
                S = _;
                try {
                  (l = _.stateNode),
                    v
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((i = _.stateNode),
                        (s = _.memoizedProps.style),
                        (u = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (i.style.display = bu('display', u)));
                } catch (M) {
                  pe(e, e.return, M);
                }
              }
            } else if (_.tag === 6) {
              if (S === null)
                try {
                  _.stateNode.nodeValue = v ? '' : _.memoizedProps;
                } catch (M) {
                  pe(e, e.return, M);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) || _.memoizedState === null || _ === e) &&
              _.child !== null
            ) {
              (_.child.return = _), (_ = _.child);
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              S === _ && (S = null), (_ = _.return);
            }
            S === _ && (S = null), (_.sibling.return = _.return), (_ = _.sibling);
          }
        }
        break;
      case 19:
        st(t, e), mt(e), r & 4 && ga(e);
        break;
      case 21:
        break;
      default:
        st(t, e), mt(e);
    }
  }
  function mt(e) {
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
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ''), (r.flags &= -33));
            var o = ha(e);
            cu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              i = ha(e);
            au(e, i, u);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        pe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wf(e, t, n) {
    (j = e), wa(e);
  }
  function wa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
      var l = j,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || dl;
        if (!u) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || Ne;
          i = dl;
          var v = Ne;
          if (((dl = u), (Ne = s) && !v))
            for (j = l; j !== null; )
              (u = j),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ka(l)
                  : s !== null
                    ? ((s.return = u), (j = s))
                    : ka(l);
          for (; o !== null; ) (j = o), wa(o), (o = o.sibling);
          (j = l), (dl = i), (Ne = v);
        }
        Sa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (j = o)) : Sa(e);
    }
  }
  function Sa(e) {
    for (; j !== null; ) {
      var t = j;
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
                      t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && _s(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  _s(t, u, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
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
                      var _ = S.dehydrated;
                      _ !== null && Kn(_);
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
                throw Error(p(163));
            }
          Ne || (t.flags & 512 && su(t));
        } catch (y) {
          pe(t, t.return, y);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (j = n);
        break;
      }
      j = t.return;
    }
  }
  function _a(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (j = n);
        break;
      }
      j = t.return;
    }
  }
  function ka(e) {
    for (; j !== null; ) {
      var t = j;
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
              su(t);
            } catch (s) {
              pe(t, o, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              su(t);
            } catch (s) {
              pe(t, u, s);
            }
        }
      } catch (s) {
        pe(t, t.return, s);
      }
      if (t === e) {
        j = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (j = i);
        break;
      }
      j = t.return;
    }
  }
  var $f = Math.ceil,
    vl = fe.ReactCurrentDispatcher,
    fu = fe.ReactCurrentOwner,
    be = fe.ReactCurrentBatchConfig,
    J = 0,
    _e = null,
    ge = null,
    Pe = 0,
    Ye = 0,
    Rn = Mt(0),
    we = 0,
    hr = null,
    tn = 0,
    hl = 0,
    du = 0,
    mr = null,
    Ae = null,
    pu = 0,
    Tn = 1 / 0,
    Et = null,
    ml = !1,
    vu = null,
    Vt = null,
    gl = !1,
    Bt = null,
    yl = 0,
    gr = 0,
    hu = null,
    wl = -1,
    Sl = 0;
  function Te() {
    return (J & 6) !== 0 ? he() : wl !== -1 ? wl : (wl = he());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (J & 2) !== 0 && Pe !== 0
        ? Pe & -Pe
        : Cf.transition !== null
          ? (Sl === 0 && (Sl = hi()), Sl)
          : ((e = ne), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pi(e.type))), e);
  }
  function at(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (hu = null), Error(p(185)));
    Bn(e, n, r),
      ((J & 2) === 0 || e !== _e) &&
        (e === _e && ((J & 2) === 0 && (hl |= n), we === 4 && $t(e, Pe)),
        Ve(e, r),
        n === 1 && J === 0 && (t.mode & 1) === 0 && ((Tn = he() + 500), Xr && It()));
  }
  function Ve(e, t) {
    var n = e.callbackNode;
    Ec(e, t);
    var r = zr(e, e === _e ? Pe : 0);
    if (r === 0) n !== null && di(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && di(n), t === 1))
        e.tag === 0 ? Ef(Pa.bind(null, e)) : as(Pa.bind(null, e)),
          _f(function () {
            (J & 6) === 0 && It();
          }),
          (n = null);
      else {
        switch (mi(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = pi;
            break;
          case 16:
            n = Er;
            break;
          case 536870912:
            n = vi;
            break;
          default:
            n = Er;
        }
        n = Ta(n, xa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function xa(e, t) {
    if (((wl = -1), (Sl = 0), (J & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = zr(e, e === _e ? Pe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = _l(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var o = Ca();
      (_e !== e || Pe !== t) && ((Et = null), (Tn = he() + 500), rn(e, t));
      do
        try {
          Kf();
          break;
        } catch (i) {
          Ea(e, i);
        }
      while (!0);
      Lo(), (vl.current = o), (J = l), ge !== null ? (t = 0) : ((_e = null), (Pe = 0), (t = we));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = mu(e, l)))), t === 1))
        throw ((n = hr), rn(e, 0), $t(e, r), Ve(e, he()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Hf(l) &&
            ((t = _l(e, r)),
            t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = mu(e, o)))),
            t === 1))
        )
          throw ((n = hr), rn(e, 0), $t(e, r), Ve(e, he()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            ln(e, Ae, Et);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = pu + 500 - he()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Te(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ko(ln.bind(null, e, Ae, Et), t);
              break;
            }
            ln(e, Ae, Et);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - rt(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
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
                            : 1960 * $f(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ko(ln.bind(null, e, Ae, Et), r);
              break;
            }
            ln(e, Ae, Et);
            break;
          case 5:
            ln(e, Ae, Et);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Ve(e, he()), e.callbackNode === n ? xa.bind(null, e) : null;
  }
  function mu(e, t) {
    var n = mr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = _l(e, t)),
      e !== 2 && ((t = Ae), (Ae = n), t !== null && gu(t)),
      e
    );
  }
  function gu(e) {
    Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
  }
  function Hf(e) {
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
      t &= ~du, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Pa(e) {
    if ((J & 6) !== 0) throw Error(p(327));
    Ln();
    var t = zr(e, 0);
    if ((t & 1) === 0) return Ve(e, he()), null;
    var n = _l(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = mu(e, r)));
    }
    if (n === 1) throw ((n = hr), rn(e, 0), $t(e, t), Ve(e, he()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Ae, Et),
      Ve(e, he()),
      null
    );
  }
  function yu(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      (J = n), J === 0 && ((Tn = he() + 500), Xr && It());
    }
  }
  function nn(e) {
    Bt !== null && Bt.tag === 0 && (J & 6) === 0 && Ln();
    var t = J;
    J |= 1;
    var n = be.transition,
      r = ne;
    try {
      if (((be.transition = null), (ne = 1), e)) return e();
    } finally {
      (ne = r), (be.transition = n), (J = t), (J & 6) === 0 && It();
    }
  }
  function wu() {
    (Ye = Rn.current), ue(Rn);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Sf(n)), ge !== null))
      for (n = ge.return; n !== null; ) {
        var r = n;
        switch ((No(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Kr();
            break;
          case 3:
            Nn(), ue(Ie), ue(Ee), Bo();
            break;
          case 5:
            Ao(r);
            break;
          case 4:
            Nn();
            break;
          case 13:
            ue(ae);
            break;
          case 19:
            ue(ae);
            break;
          case 10:
            Mo(r.type._context);
            break;
          case 22:
          case 23:
            wu();
        }
        n = n.return;
      }
    if (
      ((_e = e),
      (ge = e = Ht(e.current, null)),
      (Pe = Ye = t),
      (we = 0),
      (hr = null),
      (du = hl = tn = 0),
      (Ae = mr = null),
      Zt !== null)
    ) {
      for (t = 0; t < Zt.length; t++)
        if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      Zt = null;
    }
    return e;
  }
  function Ea(e, t) {
    do {
      var n = ge;
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
          (fu.current = null),
          n === null || n.return === null)
        ) {
          (we = 1), (hr = t), (ge = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            i = n,
            s = t;
          if (
            ((t = Pe),
            (i.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var v = s,
              S = i,
              _ = S.tag;
            if ((S.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var y = S.alternate;
              y
                ? ((S.updateQueue = y.updateQueue),
                  (S.memoizedState = y.memoizedState),
                  (S.lanes = y.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var N = qs(u);
            if (N !== null) {
              (N.flags &= -257), Js(N, u, i, o, t), N.mode & 1 && Gs(o, v, t), (t = N), (s = v);
              var L = t.updateQueue;
              if (L === null) {
                var M = new Set();
                M.add(s), (t.updateQueue = M);
              } else L.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Gs(o, v, t), Su();
                break e;
              }
              s = Error(p(426));
            }
          } else if (se && i.mode & 1) {
            var me = qs(u);
            if (me !== null) {
              (me.flags & 65536) === 0 && (me.flags |= 256), Js(me, u, i, o, t), Ro(zn(s, i));
              break e;
            }
          }
          (o = s = zn(s, i)), we !== 4 && (we = 2), mr === null ? (mr = [o]) : mr.push(o), (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Ys(o, s, t);
                Ss(o, f);
                break e;
              case 1:
                i = s;
                var a = o.type,
                  d = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (d !== null &&
                      typeof d.componentDidCatch == 'function' &&
                      (Vt === null || !Vt.has(d))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var x = Xs(o, i, t);
                  Ss(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Na(n);
      } catch (I) {
        (t = I), ge === n && n !== null && (ge = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ca() {
    var e = vl.current;
    return (vl.current = sl), e === null ? sl : e;
  }
  function Su() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
      _e === null || ((tn & 268435455) === 0 && (hl & 268435455) === 0) || $t(_e, Pe);
  }
  function _l(e, t) {
    var n = J;
    J |= 2;
    var r = Ca();
    (_e !== e || Pe !== t) && ((Et = null), rn(e, t));
    do
      try {
        Qf();
        break;
      } catch (l) {
        Ea(e, l);
      }
    while (!0);
    if ((Lo(), (J = n), (vl.current = r), ge !== null)) throw Error(p(261));
    return (_e = null), (Pe = 0), we;
  }
  function Qf() {
    for (; ge !== null; ) Oa(ge);
  }
  function Kf() {
    for (; ge !== null && !mc(); ) Oa(ge);
  }
  function Oa(e) {
    var t = Ra(e.alternate, e, Ye);
    (e.memoizedProps = e.pendingProps), t === null ? Na(e) : (ge = t), (fu.current = null);
  }
  function Na(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Uf(n, t, Ye)), n !== null)) {
          ge = n;
          return;
        }
      } else {
        if (((n = Af(n, t)), n !== null)) {
          (n.flags &= 32767), (ge = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (we = 6), (ge = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function ln(e, t, n) {
    var r = ne,
      l = be.transition;
    try {
      (be.transition = null), (ne = 1), Yf(e, t, n, r);
    } finally {
      (be.transition = l), (ne = r);
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do Ln();
    while (Bt !== null);
    if ((J & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Cc(e, o),
      e === _e && ((ge = _e = null), (Pe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        Ta(Er, function () {
          return Ln(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = be.transition), (be.transition = null);
      var u = ne;
      ne = 1;
      var i = J;
      (J |= 4),
        (fu.current = null),
        Bf(e, n),
        ya(n, e),
        pf(So),
        (Tr = !!wo),
        (So = wo = null),
        (e.current = n),
        Wf(n),
        gc(),
        (J = i),
        (ne = u),
        (be.transition = o);
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Bt = e), (yl = l)),
      (o = e.pendingLanes),
      o === 0 && (Vt = null),
      Sc(n.stateNode),
      Ve(e, he()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ((ml = !1), (e = vu), (vu = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && Ln(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === hu ? gr++ : ((gr = 0), (hu = e))) : (gr = 0),
      It(),
      null
    );
  }
  function Ln() {
    if (Bt !== null) {
      var e = mi(yl),
        t = be.transition,
        n = ne;
      try {
        if (((be.transition = null), (ne = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (yl = 0), (J & 6) !== 0)) throw Error(p(331));
          var l = J;
          for (J |= 4, j = e.current; j !== null; ) {
            var o = j,
              u = o.child;
            if ((j.flags & 16) !== 0) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var v = i[s];
                  for (j = v; j !== null; ) {
                    var S = j;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, S, o);
                    }
                    var _ = S.child;
                    if (_ !== null) (_.return = S), (j = _);
                    else
                      for (; j !== null; ) {
                        S = j;
                        var y = S.sibling,
                          N = S.return;
                        if ((pa(S), S === v)) {
                          j = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = N), (j = y);
                          break;
                        }
                        j = N;
                      }
                  }
                }
                var L = o.alternate;
                if (L !== null) {
                  var M = L.child;
                  if (M !== null) {
                    L.child = null;
                    do {
                      var me = M.sibling;
                      (M.sibling = null), (M = me);
                    } while (M !== null);
                  }
                }
                j = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) (u.return = o), (j = u);
            else
              e: for (; j !== null; ) {
                if (((o = j), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (j = f);
                  break e;
                }
                j = o.return;
              }
          }
          var a = e.current;
          for (j = a; j !== null; ) {
            u = j;
            var d = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && d !== null) (d.return = u), (j = d);
            else
              e: for (u = a; j !== null; ) {
                if (((i = j), (i.flags & 2048) !== 0))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, i);
                    }
                  } catch (I) {
                    pe(i, i.return, I);
                  }
                if (i === u) {
                  j = null;
                  break e;
                }
                var x = i.sibling;
                if (x !== null) {
                  (x.return = i.return), (j = x);
                  break e;
                }
                j = i.return;
              }
          }
          if (((J = l), It(), dt && typeof dt.onPostCommitFiberRoot == 'function'))
            try {
              dt.onPostCommitFiberRoot(Cr, e);
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
      e !== null && (Bn(e, 1, t), Ve(e, t));
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
            (typeof r.componentDidCatch == 'function' && (Vt === null || !Vt.has(r)))
          ) {
            (e = zn(n, e)),
              (e = Xs(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Te()),
              t !== null && (Bn(t, 1, e), Ve(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Te()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _e === e &&
        (Pe & n) === n &&
        (we === 4 || (we === 3 && (Pe & 130023424) === Pe && 500 > he() - pu)
          ? rn(e, 0)
          : (du |= n)),
      Ve(e, t);
  }
  function ja(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Nr), (Nr <<= 1), (Nr & 130023424) === 0 && (Nr = 4194304)));
    var n = Te();
    (e = kt(e, t)), e !== null && (Bn(e, t, n), Ve(e, n));
  }
  function Gf(e) {
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
        throw Error(p(314));
    }
    r !== null && r.delete(t), ja(e, n);
  }
  var Ra;
  Ra = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) Ue = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Ue = !1), Ff(e, t, n);
        Ue = (e.flags & 131072) !== 0;
      }
    else (Ue = !1), se && (t.flags & 1048576) !== 0 && cs(t, qr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        fl(e, t), (e = t.pendingProps);
        var l = _n(t, Ee.current);
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
              Jo(t, r, e, n),
              (t = tu(null, t, r, !0, o, n)))
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
            (l = t.tag = Zf(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = eu(null, t, r, e, n);
              break e;
            case 1:
              t = ra(null, t, r, e, n);
              break e;
            case 11:
              t = Zs(null, t, r, e, n);
              break e;
            case 14:
              t = bs(null, t, r, ut(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          eu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          ra(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((la(t), e === null)) throw Error(p(387));
          (r = t.pendingProps), (o = t.memoizedState), (l = o.element), ws(e, t), nl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = zn(Error(p(423)), t)), (t = oa(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = zn(Error(p(424)), t)), (t = oa(e, t, r, n, l));
              break e;
            } else
              for (
                Ke = Lt(t.stateNode.containerInfo.firstChild),
                  Qe = t,
                  se = !0,
                  ot = null,
                  n = gs(t, null, r, n),
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
          ks(t),
          e === null && jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          _o(r, l) ? (u = null) : o !== null && _o(r, o) && (t.flags |= 32),
          na(e, t),
          Re(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && jo(t), null;
      case 13:
        return ua(e, t, n);
      case 4:
        return (
          Uo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Re(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
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
            (u = l.value),
            le(br, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (lt(o.value, u)) {
              if (o.children === l.children && !Ie.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = xt(-1, n & -n)), (s.tag = 2);
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
                        (i.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(p(341));
                  (u.lanes |= n),
                    (i = u.alternate),
                    i !== null && (i.lanes |= n),
                    Do(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Re(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = Je(l)),
          (r = r(l)),
          (t.flags |= 1),
          Re(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), bs(e, t, r, l, n);
      case 15:
        return ea(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          fl(e, t),
          (t.tag = 1),
          Fe(r) ? ((e = !0), Yr(t)) : (e = !1),
          On(t, n),
          Qs(t, r, l),
          Jo(t, r, l, n),
          tu(null, t, r, !0, e, n)
        );
      case 19:
        return sa(e, t, n);
      case 22:
        return ta(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Ta(e, t) {
    return fi(e, t);
  }
  function Jf(e, t, n, r) {
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
    return new Jf(e, t, n, r);
  }
  function _u(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Zf(e) {
    if (typeof e == 'function') return _u(e) ? 1 : 0;
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
  function kl(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == 'function')) _u(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case Me:
          return on(n.children, l, o, t);
        case Xe:
          (u = 8), (l |= 8);
          break;
        case Ct:
          return (e = et(12, n, t, l | 2)), (e.elementType = Ct), (e.lanes = o), e;
        case We:
          return (e = et(13, n, t, l)), (e.elementType = We), (e.lanes = o), e;
        case nt:
          return (e = et(19, n, t, l)), (e.elementType = nt), (e.lanes = o), e;
        case de:
          return xl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case gt:
                u = 10;
                break e;
              case Kt:
                u = 9;
                break e;
              case ct:
                u = 11;
                break e;
              case ft:
                u = 14;
                break e;
              case De:
                (u = 16), (r = null);
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ''));
      }
    return (t = et(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
  }
  function on(e, t, n, r) {
    return (e = et(7, e, r, t)), (e.lanes = n), e;
  }
  function xl(e, t, n, r) {
    return (
      (e = et(22, e, r, t)),
      (e.elementType = de),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ku(e, t, n) {
    return (e = et(6, e, null, t)), (e.lanes = n), e;
  }
  function xu(e, t, n) {
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
  function bf(e, t, n, r, l) {
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
  function Pu(e, t, n, r, l, o, u, i, s) {
    return (
      (e = new bf(e, t, n, i, s)),
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
  function ed(e, t, n) {
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
      if (Yt(e) !== e || e.tag !== 1) throw Error(p(170));
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
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Fe(n)) return is(e, n, t);
    }
    return t;
  }
  function Ma(e, t, n, r, l, o, u, i, s) {
    return (
      (e = Pu(n, r, !0, e, l, o, u, i, s)),
      (e.context = La(null)),
      (n = e.current),
      (r = Te()),
      (l = Wt(n)),
      (o = xt(r, l)),
      (o.callback = t ?? null),
      Ut(n, o, l),
      (e.current.lanes = l),
      Bn(e, l, r),
      Ve(e, r),
      e
    );
  }
  function Pl(e, t, n, r) {
    var l = t.current,
      o = Te(),
      u = Wt(l);
    return (
      (n = La(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = xt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, u)),
      e !== null && (at(e, l, u, o), tl(e, l, u)),
      u
    );
  }
  function El(e) {
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
  function Eu(e, t) {
    Da(e, t), (e = e.alternate) && Da(e, t);
  }
  function td() {
    return null;
  }
  var Ia =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Cu(e) {
    this._internalRoot = e;
  }
  (Cl.prototype.render = Cu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Pl(e, t, null, null);
    }),
    (Cl.prototype.unmount = Cu.prototype.unmount =
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
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
      jt.splice(n, 0, e), n === 0 && ki(e);
    }
  };
  function Ou(e) {
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
  function nd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var v = El(u);
          o.call(v);
        };
      }
      var u = Ma(t, r, e, 0, null, !1, !1, '', Fa);
      return (
        (e._reactRootContainer = u),
        (e[yt] = u.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var v = El(s);
        i.call(v);
      };
    }
    var s = Pu(e, 0, !1, null, null, !1, !1, '', Fa);
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
      var u = o;
      if (typeof l == 'function') {
        var i = l;
        l = function () {
          var s = El(u);
          i.call(s);
        };
      }
      Pl(t, u, e, l);
    } else u = nd(n, t, e, l, r);
    return El(u);
  }
  (gi = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), Ve(t, he()), (J & 6) === 0 && ((Tn = he() + 500), It()));
        }
        break;
      case 13:
        nn(function () {
          var r = kt(e, 1);
          if (r !== null) {
            var l = Te();
            at(r, e, 1, l);
          }
        }),
          Eu(e, 1);
    }
  }),
    (Jl = function (e) {
      if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
          var n = Te();
          at(t, e, 134217728, n);
        }
        Eu(e, 134217728);
      }
    }),
    (yi = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = kt(e, t);
        if (n !== null) {
          var r = Te();
          at(n, e, t, r);
        }
        Eu(e, t);
      }
    }),
    (wi = function () {
      return ne;
    }),
    (Si = function (e, t) {
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
                if (!l) throw Error(p(90));
                Hu(r), Dl(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Gu(e, n);
          break;
        case 'select':
          (t = n.value), t != null && an(e, !!n.multiple, t, !1);
      }
    }),
    (li = yu),
    (oi = nn);
  var rd = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, ni, ri, yu] },
    yr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    ld = {
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
        return (e = ai(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || td,
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
        (Cr = zl.inject(ld)), (dt = zl);
      } catch {}
  }
  return (
    (Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rd),
    (Be.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ou(t)) throw Error(p(200));
      return ed(e, t, null, n);
    }),
    (Be.createRoot = function (e, t) {
      if (!Ou(e)) throw Error(p(299));
      var n = !1,
        r = '',
        l = Ia;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Pu(e, 1, !1, null, null, n, !1, r, l)),
        (e[yt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Cu(t)
      );
    }),
    (Be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(p(188))
          : ((e = Object.keys(e).join(',')), Error(p(268, e)));
      return (e = ai(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Be.flushSync = function (e) {
      return nn(e);
    }),
    (Be.hydrate = function (e, t, n) {
      if (!Ol(t)) throw Error(p(200));
      return Nl(null, e, t, !0, n);
    }),
    (Be.hydrateRoot = function (e, t, n) {
      if (!Ou(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        u = Ia;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ma(t, null, e, 1, n ?? null, l, !1, o, u)),
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
      return new Cl(t);
    }),
    (Be.render = function (e, t, n) {
      if (!Ol(t)) throw Error(p(200));
      return Nl(null, e, t, !1, n);
    }),
    (Be.unmountComponentAtNode = function (e) {
      if (!Ol(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (nn(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Be.unstable_batchedUpdates = yu),
    (Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ol(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Nl(e, t, n, !1, r);
    }),
    (Be.version = '18.3.1-next-f1338f8080-20240426'),
    Be
  );
}
var lc;
function kd() {
  if (lc) return Bu.exports;
  lc = 1;
  function m() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (R) {
        console.error(R);
      }
  }
  return m(), (Bu.exports = _d()), Bu.exports;
}
var oc;
function xd() {
  if (oc) return jl;
  oc = 1;
  var m = kd();
  return (jl.createRoot = m.createRoot), (jl.hydrateRoot = m.hydrateRoot), jl;
}
var Pd = xd();
const Ed = uc(Pd),
  Cd = (m) => {
    const R = { style: 'currency', currency: 'USD', maximumFractionDigits: 0 };
    return (
      m >= 1e4 && ((R.notation = 'compact'), (R.maximumFractionDigits = 1)),
      new Intl.NumberFormat('en-US', R).format(m)
    );
  },
  sc = ({ property: m }) => {
    if (!m) return;
    const R = m.address || {},
      p = m.listing || {},
      Q = m.agent || {},
      U = (m.media || {}).photos || [],
      A = '#fff',
      D = '#eaeaea',
      k = '#666',
      E = '#999';
    return Y.jsxs('div', {
      style: {
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        backgroundColor: A,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        border: `1px solid ${D}`,
      },
      onMouseOver: (C) => {
        (C.currentTarget.style.transform = 'translateY(-4px)'),
          (C.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)');
      },
      onMouseOut: (C) => {
        (C.currentTarget.style.transform = 'translateY(0)'),
          (C.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)');
      },
      children: [
        Y.jsxs('div', {
          style: {
            position: 'relative',
            width: '100%',
            paddingTop: '60%',
            backgroundColor: '#f0f2f5',
          },
          children: [
            U && U.length > 0
              ? Y.jsx('img', {
                  src: U[0],
                  alt: `${R.full || 'Property'}`,
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                })
              : Y.jsx('div', {
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: E,
                    fontSize: '14px',
                  },
                  children: 'No image available',
                }),
            p.status &&
              Y.jsx('div', {
                style: {
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor:
                    p.status === 'Active'
                      ? '#10b981'
                      : p.status === 'Pending'
                        ? '#f59e0b'
                        : '#6366f1',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                },
                children: p.status,
              }),
            Y.jsx('div', {
              style: {
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                bottom: 0,
                height: '50%',
                left: 0,
                position: 'absolute',
                right: 0,
              },
            }),
            p.price &&
              Y.jsx('div', {
                style: {
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '700',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                },
                children: Cd(p.price),
              }),
          ],
        }),
        Y.jsxs('div', {
          style: { padding: '12px', flex: '1', display: 'flex', flexDirection: 'column' },
          children: [
            Y.jsx('h3', {
              style: {
                margin: '0 0 6px 0',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a1a1a',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              children:
                R.full || `${R.street || ''}, ${R.city || ''}, ${R.state || ''} ${R.zipCode || ''}`,
            }),
            Y.jsxs('div', {
              style: { display: 'flex', gap: '10px', marginBottom: '8px' },
              children: [
                p.bedrooms !== void 0 &&
                  Y.jsxs('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '4px' },
                    children: [
                      Y.jsx('span', {
                        style: { color: k, fontSize: '13px' },
                        children: p.bedrooms,
                      }),
                      Y.jsx('span', { style: { color: E, fontSize: '12px' }, children: 'beds' }),
                    ],
                  }),
                p.bathrooms !== void 0 &&
                  Y.jsxs('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '4px' },
                    children: [
                      Y.jsx('span', {
                        style: { color: k, fontSize: '13px' },
                        children: p.bathrooms,
                      }),
                      Y.jsx('span', { style: { color: E, fontSize: '12px' }, children: 'baths' }),
                    ],
                  }),
                p.livingArea &&
                  Y.jsxs('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '4px' },
                    children: [
                      Y.jsx('span', {
                        style: { color: k, fontSize: '13px' },
                        children: p.livingArea.toLocaleString(),
                      }),
                      Y.jsx('span', { style: { color: E, fontSize: '12px' }, children: 'sqft' }),
                    ],
                  }),
              ],
            }),
            p.remarks &&
              Y.jsx('p', {
                style: {
                  margin: '0 0 8px 0',
                  fontSize: '12px',
                  color: k,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: '1.3',
                  flex: '1',
                },
                children: p.remarks,
              }),
            Q.name &&
              Y.jsxs('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '11px',
                  color: E,
                  paddingTop: '8px',
                  borderTop: '1px solid #f0f0f0',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
                children: [
                  Y.jsx('span', { style: { marginRight: '3px' }, children: '👤' }),
                  Y.jsxs('span', {
                    style: { overflow: 'hidden', textOverflow: 'ellipsis' },
                    children: [Q.name, Q.office && ` • ${Q.office}`],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Od = ({ properties: m }) => {
    if (!(!m || m.length === 0))
      return Y.jsx('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          width: '100%',
          overflowX: 'auto',
        },
        children: m.map((R, p) => Y.jsx(sc, { property: R }, p)),
      });
  },
  Nd = () => {
    const [m, R] = Rl.useState(),
      { data: p, loading: Q } = ec.useWatchPluginMessage();
    return (
      Rl.useEffect(() => {
        ec.lobeChat
          .getPluginMessage()
          .then((W) => {
            console.log('Plugin received data:', W), R(W);
          })
          .catch((W) => {
            console.error('Error getting plugin message:', W);
          });
      }, []),
      Rl.useEffect(() => {
        p && (console.log('Received watch data:', p), R(p));
      }, [p]),
      Q
        ? Y.jsxs('div', {
            style: {
              fontFamily:
                'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              padding: '20px',
              textAlign: 'center',
              color: '#666',
            },
            children: [
              Y.jsx('div', {
                style: {
                  display: 'inline-block',
                  width: '24px',
                  height: '24px',
                  border: '2px solid #f3f3f3',
                  borderTop: '2px solid #3498db',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginBottom: '12px',
                },
              }),
              Y.jsx('style', {
                children: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
              }),
              Y.jsx('p', { children: 'Loading property listings...' }),
            ],
          })
        : Y.jsx('div', {
            style: {
              fontFamily:
                'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              padding: '16px',
              maxWidth: '100%',
              overflowX: 'hidden',
            },
            children:
              m != null && m.data
                ? Y.jsxs(Y.Fragment, {
                    children: [
                      Y.jsx('h2', {
                        style: {
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '14px',
                          color: '#1a1a1a',
                        },
                        children: 'Property Results',
                      }),
                      Array.isArray(m.data)
                        ? Y.jsx(Od, { properties: m.data })
                        : Y.jsx('div', {
                            style: { maxWidth: '400px', margin: '0 auto' },
                            children: Y.jsx(sc, { property: m.data }),
                          }),
                    ],
                  })
                : Y.jsxs('div', {
                    style: { textAlign: 'center', color: '#666', padding: '24px 16px' },
                    children: [
                      Y.jsx('p', {
                        style: { fontSize: '15px', marginBottom: '10px' },
                        children:
                          'Waiting for property data... Try searching for properties in Miami, FL.',
                      }),
                      Y.jsx('p', {
                        style: { fontSize: '13px', color: '#888' },
                        children: 'Example: "Find 3-bedroom houses in Miami under $1M"',
                      }),
                    ],
                  }),
          })
    );
  },
  zd = Ed.createRoot(document.querySelector('#root'));
zd.render(Y.jsx(yd.StrictMode, { children: Y.jsx(Nd, {}) }));
