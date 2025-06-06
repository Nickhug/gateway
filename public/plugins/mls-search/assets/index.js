function uc(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, 'default') ? g.default : g;
}
var zi = { exports: {} },
  Sr = {},
  ji = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Aa;
function ud() {
  if (Aa) return G;
  Aa = 1;
  var g = Symbol.for('react.element'),
    z = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    W = Symbol.for('react.strict_mode'),
    L = Symbol.for('react.profiler'),
    U = Symbol.for('react.provider'),
    $ = Symbol.for('react.context'),
    P = Symbol.for('react.forward_ref'),
    x = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    h = Symbol.iterator;
  function m(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (h && c[h]) || c['@@iterator']), typeof c == 'function' ? c : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    T = {};
  function A(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = T), (this.updater = X || k);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (c, w) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, w, 'setState');
    }),
    (A.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function le() {}
  le.prototype = A.prototype;
  function me(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = T), (this.updater = X || k);
  }
  var Pe = (me.prototype = new le());
  (Pe.constructor = me), F(Pe, A.prototype), (Pe.isPureReactComponent = !0);
  var q = Array.isArray,
    Le = Object.prototype.hasOwnProperty,
    Re = { current: null },
    De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(c, w, X) {
    var J,
      b = {},
      ee = null,
      oe = null;
    if (w != null)
      for (J in (w.ref !== void 0 && (oe = w.ref), w.key !== void 0 && (ee = '' + w.key), w))
        Le.call(w, J) && !De.hasOwnProperty(J) && (b[J] = w[J]);
    var ne = arguments.length - 2;
    if (ne === 1) b.children = X;
    else if (1 < ne) {
      for (var ae = Array(ne), He = 0; He < ne; He++) ae[He] = arguments[He + 2];
      b.children = ae;
    }
    if (c && c.defaultProps)
      for (J in ((ne = c.defaultProps), ne)) b[J] === void 0 && (b[J] = ne[J]);
    return { $$typeof: g, type: c, key: ee, ref: oe, props: b, _owner: Re.current };
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
  function $e(c, w) {
    return typeof c == 'object' && c !== null && c.key != null ? Kt('' + c.key) : w.toString(36);
  }
  function nt(c, w, X, J, b) {
    var ee = typeof c;
    (ee === 'undefined' || ee === 'boolean') && (c = null);
    var oe = !1;
    if (c === null) oe = !0;
    else
      switch (ee) {
        case 'string':
        case 'number':
          oe = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case g:
            case z:
              oe = !0;
          }
      }
    if (oe)
      return (
        (oe = c),
        (b = b(oe)),
        (c = J === '' ? '.' + $e(oe, 0) : J),
        q(b)
          ? ((X = ''),
            c != null && (X = c.replace(ct, '$&/') + '/'),
            nt(b, w, X, '', function (He) {
              return He;
            }))
          : b != null &&
            (mt(b) &&
              (b = Et(
                b,
                X +
                  (!b.key || (oe && oe.key === b.key)
                    ? ''
                    : ('' + b.key).replace(ct, '$&/') + '/') +
                  c,
              )),
            w.push(b)),
        1
      );
    if (((oe = 0), (J = J === '' ? '.' : J + ':'), q(c)))
      for (var ne = 0; ne < c.length; ne++) {
        ee = c[ne];
        var ae = J + $e(ee, ne);
        oe += nt(ee, w, X, ae, b);
      }
    else if (((ae = m(c)), typeof ae == 'function'))
      for (c = ae.call(c), ne = 0; !(ee = c.next()).done; )
        (ee = ee.value), (ae = J + $e(ee, ne++)), (oe += nt(ee, w, X, ae, b));
    else if (ee === 'object')
      throw (
        ((w = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]' ? 'object with keys {' + Object.keys(c).join(', ') + '}' : w) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return oe;
  }
  function ft(c, w, X) {
    if (c == null) return c;
    var J = [],
      b = 0;
    return (
      nt(c, J, '', '', function (ee) {
        return w.call(X, ee, b++);
      }),
      J
    );
  }
  function Ie(c) {
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
  var pe = { current: null },
    j = { transition: null },
    K = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: j, ReactCurrentOwner: Re };
  function D() {
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
    (G.Component = A),
    (G.Fragment = p),
    (G.Profiler = L),
    (G.PureComponent = me),
    (G.StrictMode = W),
    (G.Suspense = x),
    (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (G.act = D),
    (G.cloneElement = function (c, w, X) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var J = F({}, c.props),
        b = c.key,
        ee = c.ref,
        oe = c._owner;
      if (w != null) {
        if (
          (w.ref !== void 0 && ((ee = w.ref), (oe = Re.current)),
          w.key !== void 0 && (b = '' + w.key),
          c.type && c.type.defaultProps)
        )
          var ne = c.type.defaultProps;
        for (ae in w)
          Le.call(w, ae) &&
            !De.hasOwnProperty(ae) &&
            (J[ae] = w[ae] === void 0 && ne !== void 0 ? ne[ae] : w[ae]);
      }
      var ae = arguments.length - 2;
      if (ae === 1) J.children = X;
      else if (1 < ae) {
        ne = Array(ae);
        for (var He = 0; He < ae; He++) ne[He] = arguments[He + 2];
        J.children = ne;
      }
      return { $$typeof: g, type: c.type, key: b, ref: ee, props: J, _owner: oe };
    }),
    (G.createContext = function (c) {
      return (
        (c = {
          $$typeof: $,
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
    (G.createElement = Ge),
    (G.createFactory = function (c) {
      var w = Ge.bind(null, c);
      return (w.type = c), w;
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (c) {
      return { $$typeof: P, render: c };
    }),
    (G.isValidElement = mt),
    (G.lazy = function (c) {
      return { $$typeof: O, _payload: { _status: -1, _result: c }, _init: Ie };
    }),
    (G.memo = function (c, w) {
      return { $$typeof: E, type: c, compare: w === void 0 ? null : w };
    }),
    (G.startTransition = function (c) {
      var w = j.transition;
      j.transition = {};
      try {
        c();
      } finally {
        j.transition = w;
      }
    }),
    (G.unstable_act = D),
    (G.useCallback = function (c, w) {
      return pe.current.useCallback(c, w);
    }),
    (G.useContext = function (c) {
      return pe.current.useContext(c);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (c) {
      return pe.current.useDeferredValue(c);
    }),
    (G.useEffect = function (c, w) {
      return pe.current.useEffect(c, w);
    }),
    (G.useId = function () {
      return pe.current.useId();
    }),
    (G.useImperativeHandle = function (c, w, X) {
      return pe.current.useImperativeHandle(c, w, X);
    }),
    (G.useInsertionEffect = function (c, w) {
      return pe.current.useInsertionEffect(c, w);
    }),
    (G.useLayoutEffect = function (c, w) {
      return pe.current.useLayoutEffect(c, w);
    }),
    (G.useMemo = function (c, w) {
      return pe.current.useMemo(c, w);
    }),
    (G.useReducer = function (c, w, X) {
      return pe.current.useReducer(c, w, X);
    }),
    (G.useRef = function (c) {
      return pe.current.useRef(c);
    }),
    (G.useState = function (c) {
      return pe.current.useState(c);
    }),
    (G.useSyncExternalStore = function (c, w, X) {
      return pe.current.useSyncExternalStore(c, w, X);
    }),
    (G.useTransition = function () {
      return pe.current.useTransition();
    }),
    (G.version = '18.3.1'),
    G
  );
}
var Ba;
function sn() {
  return Ba || ((Ba = 1), (ji.exports = ud())), ji.exports;
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
function sd() {
  if (Va) return Sr;
  Va = 1;
  var g = sn(),
    z = Symbol.for('react.element'),
    p = Symbol.for('react.fragment'),
    W = Object.prototype.hasOwnProperty,
    L = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(P, x, E) {
    var O,
      h = {},
      m = null,
      k = null;
    E !== void 0 && (m = '' + E),
      x.key !== void 0 && (m = '' + x.key),
      x.ref !== void 0 && (k = x.ref);
    for (O in x) W.call(x, O) && !U.hasOwnProperty(O) && (h[O] = x[O]);
    if (P && P.defaultProps) for (O in ((x = P.defaultProps), x)) h[O] === void 0 && (h[O] = x[O]);
    return { $$typeof: z, type: P, key: m, ref: k, props: h, _owner: L.current };
  }
  return (Sr.Fragment = p), (Sr.jsx = $), (Sr.jsxs = $), Sr;
}
var Wa;
function ad() {
  return Wa || ((Wa = 1), (zi.exports = sd())), zi.exports;
}
var N = ad(),
  un = {},
  Li = { exports: {} },
  Ri,
  $a;
function Tl() {
  if ($a) return Ri;
  $a = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (E, O) => {
      for (var h in O) g(E, h, { get: O[h], enumerable: !0 });
    },
    U = (E, O, h, m) => {
      if ((O && typeof O == 'object') || typeof O == 'function')
        for (let k of p(O))
          !W.call(E, k) &&
            k !== h &&
            g(E, k, { get: () => O[k], enumerable: !(m = z(O, k)) || m.enumerable });
      return E;
    },
    $ = (E) => U(g({}, '__esModule', { value: !0 }), E),
    P = {};
  L(P, { PluginChannel: () => x }), (Ri = $(P));
  var x = ((E) => (
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
  ))(x || {});
  return Ri;
}
var Ti, Ha;
function sc() {
  if (Ha) return Ti;
  Ha = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    U = (h, m, k, F) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let T of p(m))
          !W.call(h, T) &&
            T !== k &&
            g(h, T, { get: () => m[T], enumerable: !(F = z(m, T)) || F.enumerable });
      return h;
    },
    $ = (h) => U(g({}, '__esModule', { value: !0 }), h),
    P = {};
  L(P, { lobeChat: () => O }), (Ti = $(P));
  var x = Tl(),
    E = class {
      constructor() {
        (this.getPluginPayload = () =>
          new Promise((h) => {
            if (typeof window > 'u') {
              h(void 0);
              return;
            }
            const m = setTimeout(() => {
                h(void 0), window.removeEventListener('message', k);
              }, 1e3),
              k = (F) => {
                if (F.data.type === x.PluginChannel.initStandalonePlugin) {
                  const T = F.data.payload || F.data.props,
                    A = T.apiName,
                    le = JSON.parse(T.arguments || '{}');
                  clearTimeout(m),
                    h({ arguments: le, name: A, settings: F.data.settings, state: F.data.state }),
                    window.removeEventListener('message', k);
                }
              };
            window.addEventListener('message', k),
              top == null || top.postMessage({ type: x.PluginChannel.pluginReadyForRender }, '*');
          })),
          (this.getPluginSettings = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const m = (k) => {
                k.data.type === x.PluginChannel.renderPluginSettings &&
                  (h(k.data.value), window.removeEventListener('message', m));
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: x.PluginChannel.fetchPluginSettings }, '*');
            })),
          (this.setPluginSettings = (h) => {
            top == null ||
              top.postMessage({ type: x.PluginChannel.updatePluginSettings, value: h }, '*');
          }),
          (this.getPluginMessage = () =>
            new Promise((h) => {
              if (typeof window > 'u') {
                h(void 0);
                return;
              }
              const m = (k) => {
                if (k.data.type === x.PluginChannel.renderPlugin) {
                  const F = k.data.props;
                  h(F.content), window.removeEventListener('message', m);
                }
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: x.PluginChannel.fetchPluginMessage }, '*');
            })),
          (this.setPluginMessage = (h, m) => {
            top == null ||
              top.postMessage(
                {
                  content: h,
                  triggerAiMessage: m,
                  type: x.PluginChannel.fillStandalonePluginContent,
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
              const k = (F) => {
                F.data.type === x.PluginChannel.renderPluginState &&
                  F.data.key === h &&
                  (m(F.data.value), window.removeEventListener('message', k));
              };
              window.addEventListener('message', k),
                top == null ||
                  top.postMessage({ key: h, type: x.PluginChannel.fetchPluginState }, '*');
            })),
          (this.setPluginState = (h, m) => {
            top == null ||
              top.postMessage({ key: h, type: x.PluginChannel.updatePluginState, value: m }, '*');
          }),
          (this.triggerAIMessage = (h) => {
            top == null || top.postMessage({ id: h, type: x.PluginChannel.triggerAIMessage }, '*');
          }),
          (this.createAssistantMessage = (h) => {
            top == null ||
              top.postMessage({ content: h, type: x.PluginChannel.createAssistantMessage }, '*');
          });
      }
    },
    O = new E();
  return Ti;
}
var Mi, Qa;
function cd() {
  if (Qa) return Mi;
  Qa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (A, le) => {
      for (var me in le) g(A, me, { get: le[me], enumerable: !0 });
    },
    U = (A, le, me, Pe) => {
      if ((le && typeof le == 'object') || typeof le == 'function')
        for (let q of p(le))
          !W.call(A, q) &&
            q !== me &&
            g(A, q, { get: () => le[q], enumerable: !(Pe = z(le, q)) || Pe.enumerable });
      return A;
    },
    $ = (A) => U(g({}, '__esModule', { value: !0 }), A),
    P = {};
  L(P, {
    fetchPluginMessage: () => k,
    fetchPluginPayload: () => F,
    fetchPluginSettings: () => T,
    fetchPluginState: () => m,
    postToFillPluginContent: () => E,
    postToUpdatePluginSettings: () => h,
    postToUpdatePluginState: () => O,
  }),
    (Mi = $(P));
  var x = sc(),
    E = x.lobeChat.setPluginMessage,
    O = x.lobeChat.setPluginState,
    h = x.lobeChat.setPluginSettings,
    m = x.lobeChat.getPluginState,
    k = x.lobeChat.getPluginMessage,
    F = x.lobeChat.getPluginPayload,
    T = x.lobeChat.getPluginSettings;
  return Mi;
}
var Di = { exports: {} },
  Ii,
  Ka;
function fd() {
  if (Ka) return Ii;
  Ka = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    U = (h, m, k, F) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let T of p(m))
          !W.call(h, T) &&
            T !== k &&
            g(h, T, { get: () => m[T], enumerable: !(F = z(m, T)) || F.enumerable });
      return h;
    },
    $ = (h) => U(g({}, '__esModule', { value: !0 }), h),
    P = {};
  L(P, { useOnStandalonePluginInit: () => O }), (Ii = $(P));
  var x = sn(),
    E = Ml(),
    O = (h) => {
      (0, x.useEffect)(() => {
        E.lobeChat.getPluginPayload().then((m) => {
          m && h(m);
        });
      }, []);
    };
  return Ii;
}
var Fi, Ya;
function dd() {
  if (Ya) return Fi;
  Ya = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    U = (h, m, k, F) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let T of p(m))
          !W.call(h, T) &&
            T !== k &&
            g(h, T, { get: () => m[T], enumerable: !(F = z(m, T)) || F.enumerable });
      return h;
    },
    $ = (h) => U(g({}, '__esModule', { value: !0 }), h),
    P = {};
  L(P, { usePluginSettings: () => O }), (Fi = $(P));
  var x = sn(),
    E = Ml(),
    O = (h) => {
      const [m, k] = (0, x.useState)(h);
      (0, x.useEffect)(() => {
        E.lobeChat.getPluginSettings().then((T) => {
          T && k(T);
        });
      }, []);
      const F = (0, x.useCallback)((T) => {
        k(T), E.lobeChat.setPluginSettings(T);
      }, []);
      return [m, F];
    };
  return Fi;
}
var Ui, Xa;
function pd() {
  if (Xa) return Ui;
  Xa = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    U = (h, m, k, F) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let T of p(m))
          !W.call(h, T) &&
            T !== k &&
            g(h, T, { get: () => m[T], enumerable: !(F = z(m, T)) || F.enumerable });
      return h;
    },
    $ = (h) => U(g({}, '__esModule', { value: !0 }), h),
    P = {};
  L(P, { usePluginState: () => O }), (Ui = $(P));
  var x = sn(),
    E = Ml(),
    O = (h, m) => {
      const [k, F] = (0, x.useState)(m);
      (0, x.useEffect)(() => {
        E.lobeChat.getPluginState(h).then((A) => {
          A && F(A);
        });
      }, [h]);
      const T = (0, x.useCallback)(
        (A) => {
          F(A), E.lobeChat.setPluginState(h, A);
        },
        [h],
      );
      return [k, T];
    };
  return Ui;
}
var Ai, Ga;
function vd() {
  if (Ga) return Ai;
  Ga = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (O, h) => {
      for (var m in h) g(O, m, { get: h[m], enumerable: !0 });
    },
    U = (O, h, m, k) => {
      if ((h && typeof h == 'object') || typeof h == 'function')
        for (let F of p(h))
          !W.call(O, F) &&
            F !== m &&
            g(O, F, { get: () => h[F], enumerable: !(k = z(h, F)) || k.enumerable });
      return O;
    },
    $ = (O) => U(g({}, '__esModule', { value: !0 }), O),
    P = {};
  L(P, { onReceiveData: () => E }), (Ai = $(P));
  var x = Tl(),
    E = (O, h) => {
      if (O.data.type === x.PluginChannel.renderPlugin) {
        const m = O.data.props;
        h(m);
      }
    };
  return Ai;
}
var Bi, Ja;
function gd() {
  if (Ja) return Bi;
  Ja = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (m, k) => {
      for (var F in k) g(m, F, { get: k[F], enumerable: !0 });
    },
    U = (m, k, F, T) => {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (let A of p(k))
          !W.call(m, A) &&
            A !== F &&
            g(m, A, { get: () => k[A], enumerable: !(T = z(k, A)) || T.enumerable });
      return m;
    },
    $ = (m) => U(g({}, '__esModule', { value: !0 }), m),
    P = {};
  L(P, { useWatchPluginMessage: () => h }), (Bi = $(P));
  var x = sn(),
    E = Tl(),
    O = vd(),
    h = () => {
      const [m, k] = (0, x.useState)({ data: void 0, loading: !0 }),
        F = (T) => {
          (0, O.onReceiveData)(T, (A) => {
            k({ data: A.content, loading: !1 });
          });
        };
      return (
        (0, x.useEffect)(
          () => (
            window == null || window.addEventListener('message', F),
            top == null || top.postMessage({ type: E.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window == null || window.removeEventListener('message', F);
            }
          ),
          [],
        ),
        m
      );
    };
  return Bi;
}
var qa;
function hd() {
  return (
    qa ||
      ((qa = 1),
      (function (g) {
        var z = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          W = Object.getOwnPropertyNames,
          L = Object.prototype.hasOwnProperty,
          U = (E, O, h, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let k of W(O))
                !L.call(E, k) &&
                  k !== h &&
                  z(E, k, { get: () => O[k], enumerable: !(m = p(O, k)) || m.enumerable });
            return E;
          },
          $ = (E, O, h) => (U(E, O, 'default'), h && U(h, O, 'default')),
          P = (E) => U(z({}, '__esModule', { value: !0 }), E),
          x = {};
        (g.exports = P(x)),
          $(x, fd(), g.exports),
          $(x, dd(), g.exports),
          $(x, pd(), g.exports),
          $(x, gd(), g.exports);
      })(Di)),
    Di.exports
  );
}
var Vi, Za;
function md() {
  if (Za) return Vi;
  Za = 1;
  var g = Object.defineProperty,
    z = Object.getOwnPropertyDescriptor,
    p = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (P, x, E, O) => {
      if ((x && typeof x == 'object') || typeof x == 'function')
        for (let h of p(x))
          !W.call(P, h) &&
            h !== E &&
            g(P, h, { get: () => x[h], enumerable: !(O = z(x, h)) || O.enumerable });
      return P;
    },
    U = (P) => L(g({}, '__esModule', { value: !0 }), P),
    $ = {};
  return (Vi = U($)), Vi;
}
var ba;
function Ml() {
  return (
    ba ||
      ((ba = 1),
      (function (g) {
        var z = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          W = Object.getOwnPropertyNames,
          L = Object.prototype.hasOwnProperty,
          U = (E, O, h, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let k of W(O))
                !L.call(E, k) &&
                  k !== h &&
                  z(E, k, { get: () => O[k], enumerable: !(m = p(O, k)) || m.enumerable });
            return E;
          },
          $ = (E, O, h) => (U(E, O, 'default'), h && U(h, O, 'default')),
          P = (E) => U(z({}, '__esModule', { value: !0 }), E),
          x = {};
        (g.exports = P(x)),
          $(x, Tl(), g.exports),
          $(x, cd(), g.exports),
          $(x, hd(), g.exports),
          $(x, sc(), g.exports),
          $(x, md(), g.exports);
      })(Li)),
    Li.exports
  );
}
var ec;
function yd() {
  return (
    ec ||
      ((ec = 1),
      (function (g) {
        var z =
            (un && un.__createBinding) ||
            (Object.create
              ? function (W, L, U, $) {
                  $ === void 0 && ($ = U);
                  var P = Object.getOwnPropertyDescriptor(L, U);
                  (!P || ('get' in P ? !L.__esModule : P.writable || P.configurable)) &&
                    (P = {
                      enumerable: !0,
                      get: function () {
                        return L[U];
                      },
                    }),
                    Object.defineProperty(W, $, P);
                }
              : function (W, L, U, $) {
                  $ === void 0 && ($ = U), (W[$] = L[U]);
                }),
          p =
            (un && un.__exportStar) ||
            function (W, L) {
              for (var U in W)
                U !== 'default' && !Object.prototype.hasOwnProperty.call(L, U) && z(L, W, U);
            };
        Object.defineProperty(g, '__esModule', { value: !0 }), p(Ml(), g);
      })(un)),
    un
  );
}
var tc = yd(),
  Rl = sn();
const Mn = uc(Rl);
var Ll = {},
  Wi = { exports: {} },
  We = {},
  $i = { exports: {} },
  Hi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc;
function wd() {
  return (
    nc ||
      ((nc = 1),
      (function (g) {
        function z(j, K) {
          var D = j.length;
          j.push(K);
          e: for (; 0 < D; ) {
            var c = (D - 1) >>> 1,
              w = j[c];
            if (0 < L(w, K)) (j[c] = K), (j[D] = w), (D = c);
            else break e;
          }
        }
        function p(j) {
          return j.length === 0 ? null : j[0];
        }
        function W(j) {
          if (j.length === 0) return null;
          var K = j[0],
            D = j.pop();
          if (D !== K) {
            j[0] = D;
            e: for (var c = 0, w = j.length, X = w >>> 1; c < X; ) {
              var J = 2 * (c + 1) - 1,
                b = j[J],
                ee = J + 1,
                oe = j[ee];
              if (0 > L(b, D))
                ee < w && 0 > L(oe, b)
                  ? ((j[c] = oe), (j[ee] = D), (c = ee))
                  : ((j[c] = b), (j[J] = D), (c = J));
              else if (ee < w && 0 > L(oe, D)) (j[c] = oe), (j[ee] = D), (c = ee);
              else break e;
            }
          }
          return K;
        }
        function L(j, K) {
          var D = j.sortIndex - K.sortIndex;
          return D !== 0 ? D : j.id - K.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var U = performance;
          g.unstable_now = function () {
            return U.now();
          };
        } else {
          var $ = Date,
            P = $.now();
          g.unstable_now = function () {
            return $.now() - P;
          };
        }
        var x = [],
          E = [],
          O = 1,
          h = null,
          m = 3,
          k = !1,
          F = !1,
          T = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          le = typeof clearTimeout == 'function' ? clearTimeout : null,
          me = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Pe(j) {
          for (var K = p(E); K !== null; ) {
            if (K.callback === null) W(E);
            else if (K.startTime <= j) W(E), (K.sortIndex = K.expirationTime), z(x, K);
            else break;
            K = p(E);
          }
        }
        function q(j) {
          if (((T = !1), Pe(j), !F))
            if (p(x) !== null) (F = !0), Ie(Le);
            else {
              var K = p(E);
              K !== null && pe(q, K.startTime - j);
            }
        }
        function Le(j, K) {
          (F = !1), T && ((T = !1), le(Ge), (Ge = -1)), (k = !0);
          var D = m;
          try {
            for (Pe(K), h = p(x); h !== null && (!(h.expirationTime > K) || (j && !Kt())); ) {
              var c = h.callback;
              if (typeof c == 'function') {
                (h.callback = null), (m = h.priorityLevel);
                var w = c(h.expirationTime <= K);
                (K = g.unstable_now()),
                  typeof w == 'function' ? (h.callback = w) : h === p(x) && W(x),
                  Pe(K);
              } else W(x);
              h = p(x);
            }
            if (h !== null) var X = !0;
            else {
              var J = p(E);
              J !== null && pe(q, J.startTime - K), (X = !1);
            }
            return X;
          } finally {
            (h = null), (m = D), (k = !1);
          }
        }
        var Re = !1,
          De = null,
          Ge = -1,
          Et = 5,
          mt = -1;
        function Kt() {
          return !(g.unstable_now() - mt < Et);
        }
        function ct() {
          if (De !== null) {
            var j = g.unstable_now();
            mt = j;
            var K = !0;
            try {
              K = De(!0, j);
            } finally {
              K ? $e() : ((Re = !1), (De = null));
            }
          } else Re = !1;
        }
        var $e;
        if (typeof me == 'function')
          $e = function () {
            me(ct);
          };
        else if (typeof MessageChannel < 'u') {
          var nt = new MessageChannel(),
            ft = nt.port2;
          (nt.port1.onmessage = ct),
            ($e = function () {
              ft.postMessage(null);
            });
        } else
          $e = function () {
            A(ct, 0);
          };
        function Ie(j) {
          (De = j), Re || ((Re = !0), $e());
        }
        function pe(j, K) {
          Ge = A(function () {
            j(g.unstable_now());
          }, K);
        }
        (g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            F || k || ((F = !0), Ie(Le));
          }),
          (g.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Et = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return p(x);
          }),
          (g.unstable_next = function (j) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = m;
            }
            var D = m;
            m = K;
            try {
              return j();
            } finally {
              m = D;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (j, K) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var D = m;
            m = j;
            try {
              return K();
            } finally {
              m = D;
            }
          }),
          (g.unstable_scheduleCallback = function (j, K, D) {
            var c = g.unstable_now();
            switch (
              (typeof D == 'object' && D !== null
                ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? c + D : c))
                : (D = c),
              j)
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
              (w = D + w),
              (j = {
                id: O++,
                callback: K,
                priorityLevel: j,
                startTime: D,
                expirationTime: w,
                sortIndex: -1,
              }),
              D > c
                ? ((j.sortIndex = D),
                  z(E, j),
                  p(x) === null && j === p(E) && (T ? (le(Ge), (Ge = -1)) : (T = !0), pe(q, D - c)))
                : ((j.sortIndex = w), z(x, j), F || k || ((F = !0), Ie(Le))),
              j
            );
          }),
          (g.unstable_shouldYield = Kt),
          (g.unstable_wrapCallback = function (j) {
            var K = m;
            return function () {
              var D = m;
              m = K;
              try {
                return j.apply(this, arguments);
              } finally {
                m = D;
              }
            };
          });
      })(Hi)),
    Hi
  );
}
var rc;
function Sd() {
  return rc || ((rc = 1), ($i.exports = wd())), $i.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function xd() {
  if (lc) return We;
  lc = 1;
  var g = sn(),
    z = Sd();
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
  var W = new Set(),
    L = {};
  function U(e, t) {
    $(e, t), $(e + 'Capture', t);
  }
  function $(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) W.add(t[e]);
  }
  var P = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    x = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    h = {};
  function m(e) {
    return x.call(h, e) ? !0 : x.call(O, e) ? !1 : E.test(e) ? (h[e] = !0) : ((O[e] = !0), !1);
  }
  function k(e, t, n, r) {
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
    if (t === null || typeof t > 'u' || k(e, t, n, r)) return !0;
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
  function T(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var A = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      A[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      A[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        A[e] = new T(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        A[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      A[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      A[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      A[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      A[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var le = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(le, me);
      A[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(le, me);
        A[t] = new T(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(le, me);
      A[t] = new T(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      A[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new T('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      A[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Pe(e, t, n, r) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (F(t, n, l, r) && (n = null),
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
  var q = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Le = Symbol.for('react.element'),
    Re = Symbol.for('react.portal'),
    De = Symbol.for('react.fragment'),
    Ge = Symbol.for('react.strict_mode'),
    Et = Symbol.for('react.profiler'),
    mt = Symbol.for('react.provider'),
    Kt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    $e = Symbol.for('react.suspense'),
    nt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    Ie = Symbol.for('react.lazy'),
    pe = Symbol.for('react.offscreen'),
    j = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (j && e[j]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var D = Object.assign,
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
  function b(e) {
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
  function ee(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case De:
        return 'Fragment';
      case Re:
        return 'Portal';
      case Et:
        return 'Profiler';
      case Ge:
        return 'StrictMode';
      case $e:
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
          return (t = e.displayName || null), t !== null ? t : ee(e.type) || 'Memo';
        case Ie:
          (t = e._payload), (e = e._init);
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  function oe(e) {
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
        return ee(t);
      case 8:
        return t === Ge ? 'StrictMode' : 'Mode';
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
  function ne(e) {
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
  function ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function He(e) {
    var t = ae(e) ? 'checked' : 'value',
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
  function xr(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function Qi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ae(e) ? (e.checked ? 'true' : 'false') : e.value),
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
  function Dl(e, t) {
    var n = t.checked;
    return D({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ki(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ne(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function Yi(e, t) {
    (t = t.checked), t != null && Pe(e, 'checked', t, !1);
  }
  function Il(e, t) {
    Yi(e, t);
    var n = ne(t.value),
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
      ? Fl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Fl(e, t.type, ne(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xi(e, t, n) {
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
  function Fl(e, t, n) {
    (t !== 'number' || _r(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + ne(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return D({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Gi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: ne(n) };
  }
  function Ji(e, t) {
    var n = ne(t.value),
      r = ne(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function qi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Zi(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Al(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Zi(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var kr,
    bi = (function (e) {
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
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fn = {
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
  Object.keys(Fn).forEach(function (e) {
    cc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
    });
  });
  function eu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function tu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = eu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var fc = D(
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
  function Bl(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Wl = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hl = null,
    cn = null,
    fn = null;
  function nu(e) {
    if ((e = or(e))) {
      if (typeof Hl != 'function') throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function ru(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function lu() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), nu(e), t)) for (e = 0; e < t.length; e++) nu(t[e]);
    }
  }
  function ou(e, t) {
    return e(t);
  }
  function iu() {}
  var Ql = !1;
  function uu(e, t, n) {
    if (Ql) return e(t, n);
    Ql = !0;
    try {
      return ou(e, t, n);
    } finally {
      (Ql = !1), (cn !== null || fn !== null) && (iu(), lu());
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
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
  var Kl = !1;
  if (P)
    try {
      var An = {};
      Object.defineProperty(An, 'passive', {
        get: function () {
          Kl = !0;
        },
      }),
        window.addEventListener('test', An, An),
        window.removeEventListener('test', An, An);
    } catch {
      Kl = !1;
    }
  function dc(e, t, n, r, l, o, i, u, s) {
    var v = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, v);
    } catch (S) {
      this.onError(S);
    }
  }
  var Bn = !1,
    Pr = null,
    Cr = !1,
    Yl = null,
    pc = {
      onError: function (e) {
        (Bn = !0), (Pr = e);
      },
    };
  function vc(e, t, n, r, l, o, i, u, s) {
    (Bn = !1), (Pr = null), dc.apply(pc, arguments);
  }
  function gc(e, t, n, r, l, o, i, u, s) {
    if ((vc.apply(this, arguments), Bn)) {
      if (Bn) {
        var v = Pr;
        (Bn = !1), (Pr = null);
      } else throw Error(p(198));
      Cr || ((Cr = !0), (Yl = v));
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
  function su(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function au(e) {
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
          if (o === n) return au(l), e;
          if (o === r) return au(l), t;
          o = o.sibling;
        }
        throw Error(p(188));
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
          if (!i) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function cu(e) {
    return (e = hc(e)), e !== null ? fu(e) : null;
  }
  function fu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = fu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var du = z.unstable_scheduleCallback,
    pu = z.unstable_cancelCallback,
    mc = z.unstable_shouldYield,
    yc = z.unstable_requestPaint,
    ge = z.unstable_now,
    wc = z.unstable_getCurrentPriorityLevel,
    Xl = z.unstable_ImmediatePriority,
    vu = z.unstable_UserBlockingPriority,
    Er = z.unstable_NormalPriority,
    Sc = z.unstable_LowPriority,
    gu = z.unstable_IdlePriority,
    Or = null,
    dt = null;
  function xc(e) {
    if (dt && typeof dt.onCommitFiberRoot == 'function')
      try {
        dt.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : Pc,
    _c = Math.log,
    kc = Math.LN2;
  function Pc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / kc) | 0)) | 0;
  }
  var Nr = 64,
    zr = 4194304;
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
  function jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Vn(u)) : ((o &= i), o !== 0 && (r = Vn(o)));
    } else (i = n & ~l), i !== 0 ? (r = Vn(i)) : o !== 0 && (r = Vn(o));
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
  function Gl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function hu() {
    var e = Nr;
    return (Nr <<= 1), (Nr & 4194240) === 0 && (Nr = 64), e;
  }
  function Jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
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
  function ql(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var re = 0;
  function mu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var yu,
    Zl,
    wu,
    Su,
    xu,
    bl = !1,
    Lr = [],
    Ot = null,
    Nt = null,
    zt = null,
    $n = new Map(),
    Hn = new Map(),
    jt = [],
    Nc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function _u(e, t) {
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
        $n.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Hn.delete(t.pointerId);
    }
  }
  function Qn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = or(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (Ot = Qn(Ot, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Nt = Qn(Nt, e, t, n, r, l)), !0;
      case 'mouseover':
        return (zt = Qn(zt, e, t, n, r, l)), !0;
      case 'pointerover':
        var o = l.pointerId;
        return $n.set(o, Qn($n.get(o) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (o = l.pointerId), Hn.set(o, Qn(Hn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function ku(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = su(n)), t !== null)) {
            (e.blockedOn = t),
              xu(e.priority, function () {
                wu(n);
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
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Wl = r), n.target.dispatchEvent(r), (Wl = null);
      } else return (t = or(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Pu(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function jc() {
    (bl = !1),
      Ot !== null && Rr(Ot) && (Ot = null),
      Nt !== null && Rr(Nt) && (Nt = null),
      zt !== null && Rr(zt) && (zt = null),
      $n.forEach(Pu),
      Hn.forEach(Pu);
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bl || ((bl = !0), z.unstable_scheduleCallback(z.unstable_NormalPriority, jc)));
  }
  function Yn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Lr.length) {
      Kn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ot !== null && Kn(Ot, e),
        Nt !== null && Kn(Nt, e),
        zt !== null && Kn(zt, e),
        $n.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < jt.length;
      n++
    )
      (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
      ku(n), n.blockedOn === null && jt.shift();
  }
  var dn = q.ReactCurrentBatchConfig,
    Tr = !0;
  function Lc(e, t, n, r) {
    var l = re,
      o = dn.transition;
    dn.transition = null;
    try {
      (re = 1), eo(e, t, n, r);
    } finally {
      (re = l), (dn.transition = o);
    }
  }
  function Rc(e, t, n, r) {
    var l = re,
      o = dn.transition;
    dn.transition = null;
    try {
      (re = 4), eo(e, t, n, r);
    } finally {
      (re = l), (dn.transition = o);
    }
  }
  function eo(e, t, n, r) {
    if (Tr) {
      var l = to(e, t, n, r);
      if (l === null) wo(e, t, r, Mr, n), _u(e, r);
      else if (zc(l, e, t, n, r)) r.stopPropagation();
      else if ((_u(e, r), t & 4 && -1 < Nc.indexOf(e))) {
        for (; l !== null; ) {
          var o = or(l);
          if (
            (o !== null && yu(o), (o = to(e, t, n, r)), o === null && wo(e, t, r, Mr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else wo(e, t, r, null, n);
    }
  }
  var Mr = null;
  function to(e, t, n, r) {
    if (((Mr = null), (e = $l(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = su(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Mr = e), null;
  }
  function Cu(e) {
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
          case Xl:
            return 1;
          case vu:
            return 4;
          case Er:
          case Sc:
            return 16;
          case gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null,
    no = null,
    Dr = null;
  function Eu() {
    if (Dr) return Dr;
    var e,
      t = no,
      n = t.length,
      r,
      l = 'value' in Lt ? Lt.value : Lt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function Ou() {
    return !1;
  }
  function Qe(e) {
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
          ? Fr
          : Ou),
        (this.isPropagationStopped = Ou),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
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
    ro = Qe(pn),
    Xn = D({}, pn, { view: 0, detail: 0 }),
    Tc = Qe(Xn),
    lo,
    oo,
    Gn,
    Ur = D({}, Xn, {
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
          : (e !== Gn &&
              (Gn && e.type === 'mousemove'
                ? ((lo = e.screenX - Gn.screenX), (oo = e.screenY - Gn.screenY))
                : (oo = lo = 0),
              (Gn = e)),
            lo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : oo;
      },
    }),
    Nu = Qe(Ur),
    Mc = D({}, Ur, { dataTransfer: 0 }),
    Dc = Qe(Mc),
    Ic = D({}, Xn, { relatedTarget: 0 }),
    io = Qe(Ic),
    Fc = D({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = Qe(Fc),
    Ac = D({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bc = Qe(Ac),
    Vc = D({}, pn, { data: 0 }),
    zu = Qe(Vc),
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
  function uo() {
    return Qc;
  }
  var Kc = D({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Wc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ir(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
      getModifierState: uo,
      charCode: function (e) {
        return e.type === 'keypress' ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ir(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Yc = Qe(Kc),
    Xc = D({}, Ur, {
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
    ju = Qe(Xc),
    Gc = D({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Jc = Qe(Gc),
    qc = D({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zc = Qe(qc),
    bc = D({}, Ur, {
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
    ef = Qe(bc),
    tf = [9, 13, 27, 32],
    so = P && 'CompositionEvent' in window,
    Jn = null;
  P && 'documentMode' in document && (Jn = document.documentMode);
  var nf = P && 'TextEvent' in window && !Jn,
    Lu = P && (!so || (Jn && 8 < Jn && 11 >= Jn)),
    Ru = ' ',
    Tu = !1;
  function Mu(e, t) {
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
  function Du(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var vn = !1;
  function rf(e, t) {
    switch (e) {
      case 'compositionend':
        return Du(t);
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
      return e === 'compositionend' || (!so && Mu(e, t))
        ? ((e = Eu()), (Dr = no = Lt = null), (vn = !1), e)
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
        return Lu && t.locale !== 'ko' ? null : t.data;
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
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!of[e.type] : t === 'textarea';
  }
  function Fu(e, t, n, r) {
    ru(r),
      (t = $r(t, 'onChange')),
      0 < t.length &&
        ((n = new ro('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var qn = null,
    Zn = null;
  function uf(e) {
    ts(e, 0);
  }
  function Ar(e) {
    var t = wn(e);
    if (Qi(t)) return e;
  }
  function sf(e, t) {
    if (e === 'change') return t;
  }
  var Uu = !1;
  if (P) {
    var ao;
    if (P) {
      var co = 'oninput' in document;
      if (!co) {
        var Au = document.createElement('div');
        Au.setAttribute('oninput', 'return;'), (co = typeof Au.oninput == 'function');
      }
      ao = co;
    } else ao = !1;
    Uu = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function Bu() {
    qn && (qn.detachEvent('onpropertychange', Vu), (Zn = qn = null));
  }
  function Vu(e) {
    if (e.propertyName === 'value' && Ar(Zn)) {
      var t = [];
      Fu(t, Zn, e, $l(e)), uu(uf, t);
    }
  }
  function af(e, t, n) {
    e === 'focusin'
      ? (Bu(), (qn = t), (Zn = n), qn.attachEvent('onpropertychange', Vu))
      : e === 'focusout' && Bu();
  }
  function cf(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ar(Zn);
  }
  function ff(e, t) {
    if (e === 'click') return Ar(t);
  }
  function df(e, t) {
    if (e === 'input' || e === 'change') return Ar(t);
  }
  function pf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == 'function' ? Object.is : pf;
  function bn(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!x.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $u(e, t) {
    var n = Wu(e);
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
      n = Wu(n);
    }
  }
  function Hu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Qu() {
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
  function fo(e) {
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
    var t = Qu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Hu(n.ownerDocument.documentElement, n)) {
      if (r !== null && fo(n)) {
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
            (l = $u(n, o));
          var i = $u(n, r);
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
  var gf = P && 'documentMode' in document && 11 >= document.documentMode,
    gn = null,
    po = null,
    er = null,
    vo = !1;
  function Ku(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo ||
      gn == null ||
      gn !== _r(r) ||
      ((r = gn),
      'selectionStart' in r && fo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (er && bn(er, r)) ||
        ((er = r),
        (r = $r(po, 'onSelect')),
        0 < r.length &&
          ((t = new ro('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = gn))));
  }
  function Br(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var hn = {
      animationend: Br('Animation', 'AnimationEnd'),
      animationiteration: Br('Animation', 'AnimationIteration'),
      animationstart: Br('Animation', 'AnimationStart'),
      transitionend: Br('Transition', 'TransitionEnd'),
    },
    go = {},
    Yu = {};
  P &&
    ((Yu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    'TransitionEvent' in window || delete hn.transitionend.transition);
  function Vr(e) {
    if (go[e]) return go[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Yu) return (go[e] = t[n]);
    return e;
  }
  var Xu = Vr('animationend'),
    Gu = Vr('animationiteration'),
    Ju = Vr('animationstart'),
    qu = Vr('transitionend'),
    Zu = new Map(),
    bu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Rt(e, t) {
    Zu.set(e, t), U(t, [e]);
  }
  for (var ho = 0; ho < bu.length; ho++) {
    var mo = bu[ho],
      hf = mo.toLowerCase(),
      mf = mo[0].toUpperCase() + mo.slice(1);
    Rt(hf, 'on' + mf);
  }
  Rt(Xu, 'onAnimationEnd'),
    Rt(Gu, 'onAnimationIteration'),
    Rt(Ju, 'onAnimationStart'),
    Rt('dblclick', 'onDoubleClick'),
    Rt('focusin', 'onFocus'),
    Rt('focusout', 'onBlur'),
    Rt(qu, 'onTransitionEnd'),
    $('onMouseEnter', ['mouseout', 'mouseover']),
    $('onMouseLeave', ['mouseout', 'mouseover']),
    $('onPointerEnter', ['pointerout', 'pointerover']),
    $('onPointerLeave', ['pointerout', 'pointerover']),
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
  var tr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(tr));
  function es(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), gc(r, t, void 0, e), (e.currentTarget = null);
  }
  function ts(e, t) {
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
            es(l, u, v), (o = s);
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
            es(l, u, v), (o = s);
          }
      }
    }
    if (Cr) throw ((e = Yl), (Cr = !1), (Yl = null), e);
  }
  function ue(e, t) {
    var n = t[Co];
    n === void 0 && (n = t[Co] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ns(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), ns(n, e, r, t);
  }
  var Wr = '_reactListening' + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Wr]) {
      (e[Wr] = !0),
        W.forEach(function (n) {
          n !== 'selectionchange' && (yf.has(n) || yo(n, !1, e), yo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || ((t[Wr] = !0), yo('selectionchange', !1, t));
    }
  }
  function ns(e, t, n, r) {
    switch (Cu(t)) {
      case 1:
        var l = Lc;
        break;
      case 4:
        l = Rc;
        break;
      default:
        l = eo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Kl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function wo(e, t, n, r, l) {
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
    uu(function () {
      var v = o,
        S = $l(n),
        _ = [];
      e: {
        var y = Zu.get(e);
        if (y !== void 0) {
          var R = ro,
            I = e;
          switch (e) {
            case 'keypress':
              if (Ir(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              R = Yc;
              break;
            case 'focusin':
              (I = 'focus'), (R = io);
              break;
            case 'focusout':
              (I = 'blur'), (R = io);
              break;
            case 'beforeblur':
            case 'afterblur':
              R = io;
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
              R = Nu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              R = Dc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              R = Jc;
              break;
            case Xu:
            case Gu:
            case Ju:
              R = Uc;
              break;
            case qu:
              R = Zc;
              break;
            case 'scroll':
              R = Tc;
              break;
            case 'wheel':
              R = ef;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              R = Bc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              R = ju;
          }
          var B = (t & 4) !== 0,
            he = !B && e === 'scroll',
            f = B ? (y !== null ? y + 'Capture' : null) : y;
          B = [];
          for (var a = v, d; a !== null; ) {
            d = a;
            var C = d.stateNode;
            if (
              (d.tag === 5 &&
                C !== null &&
                ((d = C), f !== null && ((C = Un(a, f)), C != null && B.push(rr(a, C, d)))),
              he)
            )
              break;
            a = a.return;
          }
          0 < B.length && ((y = new R(y, I, null, n, S)), _.push({ event: y, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (R = e === 'mouseout' || e === 'pointerout'),
            y && n !== Wl && (I = n.relatedTarget || n.fromElement) && (Xt(I) || I[yt]))
          )
            break e;
          if (
            (R || y) &&
            ((y =
              S.window === S
                ? S
                : (y = S.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            R
              ? ((I = n.relatedTarget || n.toElement),
                (R = v),
                (I = I ? Xt(I) : null),
                I !== null &&
                  ((he = Yt(I)), I !== he || (I.tag !== 5 && I.tag !== 6)) &&
                  (I = null))
              : ((R = null), (I = v)),
            R !== I)
          ) {
            if (
              ((B = Nu),
              (C = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((B = ju), (C = 'onPointerLeave'), (f = 'onPointerEnter'), (a = 'pointer')),
              (he = R == null ? y : wn(R)),
              (d = I == null ? y : wn(I)),
              (y = new B(C, a + 'leave', R, n, S)),
              (y.target = he),
              (y.relatedTarget = d),
              (C = null),
              Xt(S) === v &&
                ((B = new B(f, a + 'enter', I, n, S)),
                (B.target = d),
                (B.relatedTarget = he),
                (C = B)),
              (he = C),
              R && I)
            )
              t: {
                for (B = R, f = I, a = 0, d = B; d; d = mn(d)) a++;
                for (d = 0, C = f; C; C = mn(C)) d++;
                for (; 0 < a - d; ) (B = mn(B)), a--;
                for (; 0 < d - a; ) (f = mn(f)), d--;
                for (; a--; ) {
                  if (B === f || (f !== null && B === f.alternate)) break t;
                  (B = mn(B)), (f = mn(f));
                }
                B = null;
              }
            else B = null;
            R !== null && rs(_, y, R, B, !1), I !== null && he !== null && rs(_, he, I, B, !0);
          }
        }
        e: {
          if (
            ((y = v ? wn(v) : window),
            (R = y.nodeName && y.nodeName.toLowerCase()),
            R === 'select' || (R === 'input' && y.type === 'file'))
          )
            var V = sf;
          else if (Iu(y))
            if (Uu) V = df;
            else {
              V = cf;
              var H = af;
            }
          else
            (R = y.nodeName) &&
              R.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (V = ff);
          if (V && (V = V(e, v))) {
            Fu(_, V, n, S);
            break e;
          }
          H && H(e, y, v),
            e === 'focusout' &&
              (H = y._wrapperState) &&
              H.controlled &&
              y.type === 'number' &&
              Fl(y, 'number', y.value);
        }
        switch (((H = v ? wn(v) : window), e)) {
          case 'focusin':
            (Iu(H) || H.contentEditable === 'true') && ((gn = H), (po = v), (er = null));
            break;
          case 'focusout':
            er = po = gn = null;
            break;
          case 'mousedown':
            vo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (vo = !1), Ku(_, n, S);
            break;
          case 'selectionchange':
            if (gf) break;
          case 'keydown':
          case 'keyup':
            Ku(_, n, S);
        }
        var Q;
        if (so)
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
            ? Mu(e, n) && (Y = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Y = 'onCompositionStart');
        Y &&
          (Lu &&
            n.locale !== 'ko' &&
            (vn || Y !== 'onCompositionStart'
              ? Y === 'onCompositionEnd' && vn && (Q = Eu())
              : ((Lt = S), (no = 'value' in Lt ? Lt.value : Lt.textContent), (vn = !0))),
          (H = $r(v, Y)),
          0 < H.length &&
            ((Y = new zu(Y, e, null, n, S)),
            _.push({ event: Y, listeners: H }),
            Q ? (Y.data = Q) : ((Q = Du(n)), Q !== null && (Y.data = Q)))),
          (Q = nf ? rf(e, n) : lf(e, n)) &&
            ((v = $r(v, 'onBeforeInput')),
            0 < v.length &&
              ((S = new zu('onBeforeInput', 'beforeinput', null, n, S)),
              _.push({ event: S, listeners: v }),
              (S.data = Q)));
      }
      ts(_, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Un(e, n)),
        o != null && r.unshift(rr(e, o, l)),
        (o = Un(e, t)),
        o != null && r.push(rr(e, o, l))),
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
  function rs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        v = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        v !== null &&
        ((u = v),
        l
          ? ((s = Un(n, o)), s != null && i.unshift(rr(n, s, u)))
          : l || ((s = Un(n, o)), s != null && i.push(rr(n, s, u)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var wf = /\r\n?/g,
    Sf = /\u0000|\uFFFD/g;
  function ls(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wf,
        `
`,
      )
      .replace(Sf, '');
  }
  function Hr(e, t, n) {
    if (((t = ls(t)), ls(e) !== t && n)) throw Error(p(425));
  }
  function Qr() {}
  var So = null,
    xo = null;
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
    xf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    os = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof os < 'u'
          ? function (e) {
              return os.resolve(null).then(e).catch(kf);
            }
          : ko;
  function kf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Po(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), Yn(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Yn(t);
  }
  function Tt(e) {
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
  function is(e) {
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
    lr = '__reactProps$' + yn,
    yt = '__reactContainer$' + yn,
    Co = '__reactEvents$' + yn,
    Pf = '__reactListeners$' + yn,
    Cf = '__reactHandles$' + yn;
  function Xt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[yt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = is(e); e !== null; ) {
            if ((n = e[pt])) return n;
            e = is(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[pt] || e[yt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Kr(e) {
    return e[lr] || null;
  }
  var Eo = [],
    Sn = -1;
  function Mt(e) {
    return { current: e };
  }
  function se(e) {
    0 > Sn || ((e.current = Eo[Sn]), (Eo[Sn] = null), Sn--);
  }
  function ie(e, t) {
    Sn++, (Eo[Sn] = e.current), (e.current = t);
  }
  var Dt = {},
    Oe = Mt(Dt),
    Fe = Mt(!1),
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
  function Ue(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yr() {
    se(Fe), se(Oe);
  }
  function us(e, t, n) {
    if (Oe.current !== Dt) throw Error(p(168));
    ie(Oe, t), ie(Fe, n);
  }
  function ss(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, oe(e) || 'Unknown', l));
    return D({}, n, r);
  }
  function Xr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Gt = Oe.current),
      ie(Oe, e),
      ie(Fe, Fe.current),
      !0
    );
  }
  function as(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n
      ? ((e = ss(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        se(Fe),
        se(Oe),
        ie(Oe, e))
      : se(Fe),
      ie(Fe, n);
  }
  var wt = null,
    Gr = !1,
    Oo = !1;
  function cs(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function Ef(e) {
    (Gr = !0), cs(e);
  }
  function It() {
    if (!Oo && wt !== null) {
      Oo = !0;
      var e = 0,
        t = re;
      try {
        var n = wt;
        for (re = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (wt = null), (Gr = !1);
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), du(Xl, It), l);
      } finally {
        (re = t), (Oo = !1);
      }
    }
    return null;
  }
  var _n = [],
    kn = 0,
    Jr = null,
    qr = 0,
    Je = [],
    qe = 0,
    Jt = null,
    St = 1,
    xt = '';
  function qt(e, t) {
    (_n[kn++] = qr), (_n[kn++] = Jr), (Jr = e), (qr = t);
  }
  function fs(e, t, n) {
    (Je[qe++] = St), (Je[qe++] = xt), (Je[qe++] = Jt), (Jt = e);
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
  function No(e) {
    e.return !== null && (qt(e, 1), fs(e, 1, 0));
  }
  function zo(e) {
    for (; e === Jr; ) (Jr = _n[--kn]), (_n[kn] = null), (qr = _n[--kn]), (_n[kn] = null);
    for (; e === Jt; )
      (Jt = Je[--qe]),
        (Je[qe] = null),
        (xt = Je[--qe]),
        (Je[qe] = null),
        (St = Je[--qe]),
        (Je[qe] = null);
  }
  var Ke = null,
    Ye = null,
    ce = !1,
    ot = null;
  function ds(e, t) {
    var n = tt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ps(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ke = e), (Ye = Tt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ke = e), (Ye = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = tt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ke = e),
              (Ye = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (ce) {
      var t = Ye;
      if (t) {
        var n = t;
        if (!ps(e, t)) {
          if (jo(e)) throw Error(p(418));
          t = Tt(n.nextSibling);
          var r = Ke;
          t && ps(e, t) ? ds(r, n) : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Ke = e));
        }
      } else {
        if (jo(e)) throw Error(p(418));
        (e.flags = (e.flags & -4097) | 2), (ce = !1), (Ke = e);
      }
    }
  }
  function vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ke = e;
  }
  function Zr(e) {
    if (e !== Ke) return !1;
    if (!ce) return vs(e), (ce = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !_o(e.type, e.memoizedProps))),
      t && (t = Ye))
    ) {
      if (jo(e)) throw (gs(), Error(p(418)));
      for (; t; ) ds(e, t), (t = Tt(t.nextSibling));
    }
    if ((vs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Ye = Tt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ke ? Tt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gs() {
    for (var e = Ye; e; ) e = Tt(e.nextSibling);
  }
  function Pn() {
    (Ye = Ke = null), (ce = !1);
  }
  function Ro(e) {
    ot === null ? (ot = [e]) : ot.push(e);
  }
  var Of = q.ReactCurrentBatchConfig;
  function ir(e, t, n) {
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
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function br(e, t) {
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
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, C) {
      return a === null || a.tag !== 6
        ? ((a = ki(d, f.mode, C)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, C) {
      var V = d.type;
      return V === De
        ? S(f, a, d.props.children, C, d.key)
        : a !== null &&
            (a.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === Ie && hs(V) === a.type))
          ? ((C = l(a, d.props)), (C.ref = ir(f, a, d)), (C.return = f), C)
          : ((C = kl(d.type, d.key, d.props, null, f.mode, C)),
            (C.ref = ir(f, a, d)),
            (C.return = f),
            C);
    }
    function v(f, a, d, C) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Pi(d, f.mode, C)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function S(f, a, d, C, V) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, C, V)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function _(f, a, d) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = ki('' + a, f.mode, d)), (a.return = f), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case Le:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case Re:
            return (a = Pi(a, f.mode, d)), (a.return = f), a;
          case Ie:
            var C = a._init;
            return _(f, C(a._payload), d);
        }
        if (Dn(a) || K(a)) return (a = on(a, f.mode, d, null)), (a.return = f), a;
        br(f, a);
      }
      return null;
    }
    function y(f, a, d, C) {
      var V = a !== null ? a.key : null;
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return V !== null ? null : u(f, a, '' + d, C);
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case Le:
            return d.key === V ? s(f, a, d, C) : null;
          case Re:
            return d.key === V ? v(f, a, d, C) : null;
          case Ie:
            return (V = d._init), y(f, a, V(d._payload), C);
        }
        if (Dn(d) || K(d)) return V !== null ? null : S(f, a, d, C, null);
        br(f, d);
      }
      return null;
    }
    function R(f, a, d, C, V) {
      if ((typeof C == 'string' && C !== '') || typeof C == 'number')
        return (f = f.get(d) || null), u(a, f, '' + C, V);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case Le:
            return (f = f.get(C.key === null ? d : C.key) || null), s(a, f, C, V);
          case Re:
            return (f = f.get(C.key === null ? d : C.key) || null), v(a, f, C, V);
          case Ie:
            var H = C._init;
            return R(f, a, d, H(C._payload), V);
        }
        if (Dn(C) || K(C)) return (f = f.get(d) || null), S(a, f, C, V, null);
        br(a, C);
      }
      return null;
    }
    function I(f, a, d, C) {
      for (var V = null, H = null, Q = a, Y = (a = 0), ke = null; Q !== null && Y < d.length; Y++) {
        Q.index > Y ? ((ke = Q), (Q = null)) : (ke = Q.sibling);
        var te = y(f, Q, d[Y], C);
        if (te === null) {
          Q === null && (Q = ke);
          break;
        }
        e && Q && te.alternate === null && t(f, Q),
          (a = o(te, a, Y)),
          H === null ? (V = te) : (H.sibling = te),
          (H = te),
          (Q = ke);
      }
      if (Y === d.length) return n(f, Q), ce && qt(f, Y), V;
      if (Q === null) {
        for (; Y < d.length; Y++)
          (Q = _(f, d[Y], C)),
            Q !== null && ((a = o(Q, a, Y)), H === null ? (V = Q) : (H.sibling = Q), (H = Q));
        return ce && qt(f, Y), V;
      }
      for (Q = r(f, Q); Y < d.length; Y++)
        (ke = R(Q, f, Y, d[Y], C)),
          ke !== null &&
            (e && ke.alternate !== null && Q.delete(ke.key === null ? Y : ke.key),
            (a = o(ke, a, Y)),
            H === null ? (V = ke) : (H.sibling = ke),
            (H = ke));
      return (
        e &&
          Q.forEach(function (Qt) {
            return t(f, Qt);
          }),
        ce && qt(f, Y),
        V
      );
    }
    function B(f, a, d, C) {
      var V = K(d);
      if (typeof V != 'function') throw Error(p(150));
      if (((d = V.call(d)), d == null)) throw Error(p(151));
      for (
        var H = (V = null), Q = a, Y = (a = 0), ke = null, te = d.next();
        Q !== null && !te.done;
        Y++, te = d.next()
      ) {
        Q.index > Y ? ((ke = Q), (Q = null)) : (ke = Q.sibling);
        var Qt = y(f, Q, te.value, C);
        if (Qt === null) {
          Q === null && (Q = ke);
          break;
        }
        e && Q && Qt.alternate === null && t(f, Q),
          (a = o(Qt, a, Y)),
          H === null ? (V = Qt) : (H.sibling = Qt),
          (H = Qt),
          (Q = ke);
      }
      if (te.done) return n(f, Q), ce && qt(f, Y), V;
      if (Q === null) {
        for (; !te.done; Y++, te = d.next())
          (te = _(f, te.value, C)),
            te !== null && ((a = o(te, a, Y)), H === null ? (V = te) : (H.sibling = te), (H = te));
        return ce && qt(f, Y), V;
      }
      for (Q = r(f, Q); !te.done; Y++, te = d.next())
        (te = R(Q, f, Y, te.value, C)),
          te !== null &&
            (e && te.alternate !== null && Q.delete(te.key === null ? Y : te.key),
            (a = o(te, a, Y)),
            H === null ? (V = te) : (H.sibling = te),
            (H = te));
      return (
        e &&
          Q.forEach(function (id) {
            return t(f, id);
          }),
        ce && qt(f, Y),
        V
      );
    }
    function he(f, a, d, C) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === De &&
          d.key === null &&
          (d = d.props.children),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case Le:
            e: {
              for (var V = d.key, H = a; H !== null; ) {
                if (H.key === V) {
                  if (((V = d.type), V === De)) {
                    if (H.tag === 7) {
                      n(f, H.sibling), (a = l(H, d.props.children)), (a.return = f), (f = a);
                      break e;
                    }
                  } else if (
                    H.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === Ie && hs(V) === H.type)
                  ) {
                    n(f, H.sibling),
                      (a = l(H, d.props)),
                      (a.ref = ir(f, H, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, H);
                  break;
                } else t(f, H);
                H = H.sibling;
              }
              d.type === De
                ? ((a = on(d.props.children, f.mode, C, d.key)), (a.return = f), (f = a))
                : ((C = kl(d.type, d.key, d.props, null, f.mode, C)),
                  (C.ref = ir(f, a, d)),
                  (C.return = f),
                  (f = C));
            }
            return i(f);
          case Re:
            e: {
              for (H = d.key; a !== null; ) {
                if (a.key === H)
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
              (a = Pi(d, f.mode, C)), (a.return = f), (f = a);
            }
            return i(f);
          case Ie:
            return (H = d._init), he(f, a, H(d._payload), C);
        }
        if (Dn(d)) return I(f, a, d, C);
        if (K(d)) return B(f, a, d, C);
        br(f, d);
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number'
        ? ((d = '' + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ki(d, f.mode, C)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return he;
  }
  var Cn = ms(!0),
    ys = ms(!1),
    el = Mt(null),
    tl = null,
    En = null,
    To = null;
  function Mo() {
    To = En = tl = null;
  }
  function Do(e) {
    var t = el.current;
    se(el), (e._currentValue = t);
  }
  function Io(e, t, n) {
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
    (tl = e),
      (To = En = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ae = !0), (e.firstContext = null));
  }
  function Ze(e) {
    var t = e._currentValue;
    if (To !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), En === null)) {
        if (tl === null) throw Error(p(308));
        (En = e), (tl.dependencies = { lanes: 0, firstContext: e });
      } else En = En.next = e;
    return t;
  }
  var Zt = null;
  function Fo(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function ws(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Fo(t)) : ((n.next = l.next), (l.next = n)),
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
  function Uo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ss(e, t) {
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
    if (((r = r.shared), (Z & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), _t(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Fo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      _t(e, n)
    );
  }
  function nl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
    }
  }
  function xs(e, t) {
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
  function rl(e, t, n, r) {
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
      var _ = l.baseState;
      (i = 0), (S = v = s = null), (u = o);
      do {
        var y = u.lane,
          R = u.eventTime;
        if ((r & y) === y) {
          S !== null &&
            (S = S.next =
              {
                eventTime: R,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var I = e,
              B = u;
            switch (((y = t), (R = n), B.tag)) {
              case 1:
                if (((I = B.payload), typeof I == 'function')) {
                  _ = I.call(R, _, y);
                  break e;
                }
                _ = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = B.payload), (y = typeof I == 'function' ? I.call(R, _, y) : I), y == null)
                )
                  break e;
                _ = D({}, _, y);
                break e;
              case 2:
                Ft = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          (R = {
            eventTime: R,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            S === null ? ((v = S = R), (s = _)) : (S = S.next = R),
            (i |= y);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (y = u), (u = y.next), (y.next = null), (l.lastBaseUpdate = y), (l.shared.pending = null);
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
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (tn |= i), (e.lanes = i), (e.memoizedState = _);
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
    sr = Mt(ur),
    ar = Mt(ur);
  function bt(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Ao(e, t) {
    switch ((ie(ar, t), ie(sr, e), ie(vt, ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Al(t, e));
    }
    se(vt), ie(vt, t);
  }
  function Nn() {
    se(vt), se(sr), se(ar);
  }
  function ks(e) {
    bt(ar.current);
    var t = bt(vt.current),
      n = Al(t, e.type);
    t !== n && (ie(sr, e), ie(vt, n));
  }
  function Bo(e) {
    sr.current === e && (se(vt), se(sr));
  }
  var fe = Mt(0);
  function ll(e) {
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
  function Wo() {
    for (var e = 0; e < Vo.length; e++) Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0;
  }
  var ol = q.ReactCurrentDispatcher,
    $o = q.ReactCurrentBatchConfig,
    en = 0,
    de = null,
    we = null,
    xe = null,
    il = !1,
    cr = !1,
    fr = 0,
    Nf = 0;
  function Ne() {
    throw Error(p(321));
  }
  function Ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Qo(e, t, n, r, l, o) {
    if (
      ((en = o),
      (de = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? Rf : Tf),
      (e = n(r, l)),
      cr)
    ) {
      o = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= o)) throw Error(p(301));
        (o += 1), (xe = we = null), (t.updateQueue = null), (ol.current = Mf), (e = n(r, l));
      } while (cr);
    }
    if (
      ((ol.current = al),
      (t = we !== null && we.next !== null),
      (en = 0),
      (xe = we = de = null),
      (il = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Ko() {
    var e = fr !== 0;
    return (fr = 0), e;
  }
  function gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? (de.memoizedState = xe = e) : (xe = xe.next = e), xe;
  }
  function be() {
    if (we === null) {
      var e = de.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = xe === null ? de.memoizedState : xe.next;
    if (t !== null) (xe = t), (we = e);
    else {
      if (e === null) throw Error(p(310));
      (we = e),
        (e = {
          memoizedState: we.memoizedState,
          baseState: we.baseState,
          baseQueue: we.baseQueue,
          queue: we.queue,
          next: null,
        }),
        xe === null ? (de.memoizedState = xe = e) : (xe = xe.next = e);
    }
    return xe;
  }
  function dr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Yo(e) {
    var t = be(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = we,
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
          var _ = {
            lane: S,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          };
          s === null ? ((u = s = _), (i = r)) : (s = s.next = _), (de.lanes |= S), (tn |= S);
        }
        v = v.next;
      } while (v !== null && v !== o);
      s === null ? (i = r) : (s.next = u),
        lt(r, t.memoizedState) || (Ae = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (de.lanes |= o), (tn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xo(e) {
    var t = be(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      lt(o, t.memoizedState) || (Ae = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Ps() {}
  function Cs(e, t) {
    var n = de,
      r = be(),
      l = t(),
      o = !lt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ae = !0)),
      (r = r.queue),
      Go(Ns.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, Os.bind(null, n, r, l, t), void 0, null), _e === null))
        throw Error(p(349));
      (en & 30) !== 0 || Es(n, t, l);
    }
    return l;
  }
  function Es(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = de.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Os(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), zs(t) && js(e);
  }
  function Ns(e, t, n) {
    return n(function () {
      zs(t) && js(e);
    });
  }
  function zs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function js(e) {
    var t = _t(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function Ls(e) {
    var t = gt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Lf.bind(null, de, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = de.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (de.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Rs() {
    return be().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = gt();
    (de.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function sl(e, t, n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (we !== null) {
      var i = we.memoizedState;
      if (((o = i.destroy), r !== null && Ho(r, i.deps))) {
        l.memoizedState = pr(t, n, o, r);
        return;
      }
    }
    (de.flags |= e), (l.memoizedState = pr(1 | t, n, o, r));
  }
  function Ts(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Go(e, t) {
    return sl(2048, 8, e, t);
  }
  function Ms(e, t) {
    return sl(4, 2, e, t);
  }
  function Ds(e, t) {
    return sl(4, 4, e, t);
  }
  function Is(e, t) {
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
  function Fs(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), sl(4, 4, Is.bind(null, t, e), n);
  }
  function Jo() {}
  function Us(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function As(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Bs(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n))
      : (lt(n, t) || ((n = hu()), (de.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function zf(e, t) {
    var n = re;
    (re = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $o.transition;
    $o.transition = {};
    try {
      e(!1), t();
    } finally {
      (re = n), ($o.transition = r);
    }
  }
  function Vs() {
    return be().memoizedState;
  }
  function jf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ws(e)))
      $s(t, n);
    else if (((n = ws(e, t, n, r)), n !== null)) {
      var l = Me();
      at(n, e, r, l), Hs(n, t, r);
    }
  }
  function Lf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ws(e)) $s(t, l);
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
            s === null ? ((l.next = l), Fo(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ws(e, t, l, r)), n !== null && ((l = Me()), at(n, e, r, l), Hs(n, t, r));
    }
  }
  function Ws(e) {
    var t = e.alternate;
    return e === de || (t !== null && t === de);
  }
  function $s(e, t) {
    cr = il = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function Hs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
    }
  }
  var al = {
      readContext: Ze,
      useCallback: Ne,
      useContext: Ne,
      useEffect: Ne,
      useImperativeHandle: Ne,
      useInsertionEffect: Ne,
      useLayoutEffect: Ne,
      useMemo: Ne,
      useReducer: Ne,
      useRef: Ne,
      useState: Ne,
      useDebugValue: Ne,
      useDeferredValue: Ne,
      useTransition: Ne,
      useMutableSource: Ne,
      useSyncExternalStore: Ne,
      useId: Ne,
      unstable_isNewReconciler: !1,
    },
    Rf = {
      readContext: Ze,
      useCallback: function (e, t) {
        return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ze,
      useEffect: Ts,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), ul(4194308, 4, Is.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = gt();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = gt();
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
          (e = e.dispatch = jf.bind(null, de, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = gt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ls,
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        return (gt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ls(!1),
          t = e[0];
        return (e = zf.bind(null, e[1])), (gt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = de,
          l = gt();
        if (ce) {
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
          Ts(Ns.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          pr(9, Os.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = gt(),
          t = _e.identifierPrefix;
        if (ce) {
          var n = xt,
            r = St;
          (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = fr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = Nf++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Tf = {
      readContext: Ze,
      useCallback: Us,
      useContext: Ze,
      useEffect: Go,
      useImperativeHandle: Fs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: As,
      useReducer: Yo,
      useRef: Rs,
      useState: function () {
        return Yo(dr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = be();
        return Bs(t, we.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(dr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: Ps,
      useSyncExternalStore: Cs,
      useId: Vs,
      unstable_isNewReconciler: !1,
    },
    Mf = {
      readContext: Ze,
      useCallback: Us,
      useContext: Ze,
      useEffect: Go,
      useImperativeHandle: Fs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: As,
      useReducer: Xo,
      useRef: Rs,
      useState: function () {
        return Xo(dr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = be();
        return we === null ? (t.memoizedState = e) : Bs(t, we.memoizedState, e);
      },
      useTransition: function () {
        var e = Xo(dr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: Ps,
      useSyncExternalStore: Cs,
      useId: Vs,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      (t = D({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : D({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Me(),
        l = Wt(e),
        o = kt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (at(t, e, l, r), nl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Me(),
        l = Wt(e),
        o = kt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Ut(e, o, l)),
        t !== null && (at(t, e, l, r), nl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Me(),
        r = Wt(e),
        l = kt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (at(t, e, r, n), nl(t, e, r));
    },
  };
  function Qs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bn(n, r) || !bn(l, o)
          : !0
    );
  }
  function Ks(e, t, n) {
    var r = !1,
      l = Dt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = Ze(o))
        : ((l = Ue(t) ? Gt : Oe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? xn(e, l) : Dt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ys(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null);
  }
  function Zo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Uo(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = Ze(o))
      : ((o = Ue(t) ? Gt : Oe.current), (l.context = xn(e, o))),
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
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += b(r)), (r = r.return);
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
  function bo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ei(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Df = typeof WeakMap == 'function' ? WeakMap : Map;
  function Xs(e, t, n) {
    (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        ml || ((ml = !0), (gi = r)), ei(e, t);
      }),
      n
    );
  }
  function Gs(e, t, n) {
    (n = kt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ei(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          ei(e, t), typeof r != 'function' && (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function Js(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Df();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Gf.bind(null, e, t, n)), t.then(e, e));
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
  function Zs(e, t, n, r, l) {
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
  var If = q.ReactCurrentOwner,
    Ae = !1;
  function Te(e, t, n, r) {
    t.child = e === null ? ys(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function bs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = Qo(e, t, n, r, o, l)),
      (n = Ko()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ce && n && No(t), (t.flags |= 1), Te(e, t, r, l), t.child)
    );
  }
  function ea(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !_i(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ta(e, t, o, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref))
        return Pt(e, t, l);
    }
    return (t.flags |= 1), (e = Ht(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function ta(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (bn(o, r) && e.ref === t.ref)
        if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ae = !0);
        else return (t.lanes = e.lanes), Pt(e, t, l);
    }
    return ti(e, t, n, r, l);
  }
  function na(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ie(Ln, Xe),
          (Xe |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ie(Ln, Xe),
            (Xe |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ie(Ln, Xe),
          (Xe |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ie(Ln, Xe),
        (Xe |= r);
    return Te(e, t, l, n), t.child;
  }
  function ra(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ti(e, t, n, r, l) {
    var o = Ue(n) ? Gt : Oe.current;
    return (
      (o = xn(t, o)),
      On(t, l),
      (n = Qo(e, t, n, r, o, l)),
      (r = Ko()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ce && r && No(t), (t.flags |= 1), Te(e, t, n, l), t.child)
    );
  }
  function la(e, t, n, r, l) {
    if (Ue(n)) {
      var o = !0;
      Xr(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null)) dl(e, t), Ks(t, n, r), Zo(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        v = n.contextType;
      typeof v == 'object' && v !== null
        ? (v = Ze(v))
        : ((v = Ue(n) ? Gt : Oe.current), (v = xn(t, v)));
      var S = n.getDerivedStateFromProps,
        _ = typeof S == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      _ ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== v) && Ys(t, i, r, v)),
        (Ft = !1);
      var y = t.memoizedState;
      (i.state = y),
        rl(t, r, i, l),
        (s = t.memoizedState),
        u !== r || y !== s || Fe.current || Ft
          ? (typeof S == 'function' && (qo(t, n, S, r), (s = t.memoizedState)),
            (u = Ft || Qs(t, n, u, r, y, s, v))
              ? (_ ||
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
        Ss(e, t),
        (u = t.memoizedProps),
        (v = t.type === t.elementType ? u : it(t.type, u)),
        (i.props = v),
        (_ = t.pendingProps),
        (y = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = Ze(s))
          : ((s = Ue(n) ? Gt : Oe.current), (s = xn(t, s)));
      var R = n.getDerivedStateFromProps;
      (S = typeof R == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== _ || y !== s) && Ys(t, i, r, s)),
        (Ft = !1),
        (y = t.memoizedState),
        (i.state = y),
        rl(t, r, i, l);
      var I = t.memoizedState;
      u !== _ || y !== I || Fe.current || Ft
        ? (typeof R == 'function' && (qo(t, n, R, r), (I = t.memoizedState)),
          (v = Ft || Qs(t, n, v, r, y, I, s) || !1)
            ? (S ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, I, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, I, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = I)),
          (i.props = r),
          (i.state = I),
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
    return ni(e, t, n, r, o, l);
  }
  function ni(e, t, n, r, l, o) {
    ra(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && as(t, n, !1), Pt(e, t, o);
    (r = t.stateNode), (If.current = t);
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, u, o)))
        : Te(e, t, u, o),
      (t.memoizedState = r.state),
      l && as(t, n, !0),
      t.child
    );
  }
  function oa(e) {
    var t = e.stateNode;
    t.pendingContext
      ? us(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && us(e, t.context, !1),
      Ao(e, t.containerInfo);
  }
  function ia(e, t, n, r, l) {
    return Pn(), Ro(l), (t.flags |= 256), Te(e, t, n, r), t.child;
  }
  var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ua(e, t, n) {
    var r = t.pendingProps,
      l = fe.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ie(fe, l & 1),
      e === null)
    )
      return (
        Lo(t),
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
                  : (o = Pl(i, r, 0, null)),
                (e = on(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = li(n)),
                (t.memoizedState = ri),
                e)
              : oi(t, i))
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
            ? li(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ri),
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
  function oi(e, t) {
    return (
      (t = Pl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && Ro(r),
      Cn(t, e.child, null, n),
      (e = oi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = bo(Error(p(422)))), fl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Pl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = on(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, i),
            (t.child.memoizedState = li(i)),
            (t.memoizedState = ri),
            o);
    if ((t.mode & 1) === 0) return fl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (r = u), (o = Error(p(419))), (r = bo(o, r, void 0)), fl(e, t, i, r);
    }
    if (((u = (i & e.childLanes) !== 0), Ae || u)) {
      if (((r = _e), r !== null)) {
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
      return xi(), (r = bo(Error(p(421)))), fl(e, t, i, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Jf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Ye = Tt(l.nextSibling)),
        (Ke = t),
        (ce = !0),
        (ot = null),
        e !== null &&
          ((Je[qe++] = St),
          (Je[qe++] = xt),
          (Je[qe++] = Jt),
          (St = e.id),
          (xt = e.overflow),
          (Jt = t)),
        (t = oi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function sa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Io(e.return, t, n);
  }
  function ii(e, t, n, r, l) {
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
  function aa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Te(e, t, r.children, n), (r = fe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
          else if (e.tag === 19) sa(e, n, t);
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
    if ((ie(fe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate), e !== null && ll(e) === null && (l = n), (n = n.sibling);
          (n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ii(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          ii(t, !0, n, null, o);
          break;
        case 'together':
          ii(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
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
  function Uf(e, t, n) {
    switch (t.tag) {
      case 3:
        oa(t), Pn();
        break;
      case 5:
        ks(t);
        break;
      case 1:
        Ue(t.type) && Xr(t);
        break;
      case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ie(el, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ua(e, t, n)
              : (ie(fe, fe.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
        ie(fe, fe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return aa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ie(fe, fe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), na(e, t, n);
    }
    return Pt(e, t, n);
  }
  var ca, ui, fa, da;
  (ca = function (e, t) {
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
    (ui = function () {}),
    (fa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), bt(vt.current);
        var o = null;
        switch (n) {
          case 'input':
            (l = Dl(e, l)), (r = Dl(e, r)), (o = []);
            break;
          case 'select':
            (l = D({}, l, { value: void 0 })), (r = D({}, r, { value: void 0 })), (o = []);
            break;
          case 'textarea':
            (l = Ul(e, l)), (r = Ul(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Qr);
        }
        Bl(n, r);
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
                (L.hasOwnProperty(v) ? o || (o = []) : (o = o || []).push(v, null));
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
                    (L.hasOwnProperty(v)
                      ? (s != null && v === 'onScroll' && ue('scroll', e), o || u === s || (o = []))
                      : (o = o || []).push(v, s));
        }
        n && (o = o || []).push('style', n);
        var v = o;
        (t.updateQueue = v) && (t.flags |= 4);
      }
    }),
    (da = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function vr(e, t) {
    if (!ce)
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
  function ze(e) {
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
    switch ((zo(t), t.tag)) {
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
        return ze(t), null;
      case 1:
        return Ue(t.type) && Yr(), ze(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Nn(),
          se(Fe),
          se(Oe),
          Wo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ot !== null && (yi(ot), (ot = null)))),
          ui(e, t),
          ze(t),
          null
        );
      case 5:
        Bo(t);
        var l = bt(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          fa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return ze(t), null;
          }
          if (((e = bt(vt.current)), Zr(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[pt] = t), (r[lr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                ue('cancel', r), ue('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < tr.length; l++) ue(tr[l], r);
                break;
              case 'source':
                ue('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ue('error', r), ue('load', r);
                break;
              case 'details':
                ue('toggle', r);
                break;
              case 'input':
                Ki(r, o), ue('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), ue('invalid', r);
                break;
              case 'textarea':
                Gi(r, o), ue('invalid', r);
            }
            Bl(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : L.hasOwnProperty(i) && u != null && i === 'onScroll' && ue('scroll', r);
              }
            switch (n) {
              case 'input':
                xr(r), Xi(r, o, !0);
                break;
              case 'textarea':
                xr(r), qi(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Qr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Zi(n)),
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
              (e[lr] = r),
              ca(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = Vl(n, r)), n)) {
                case 'dialog':
                  ue('cancel', e), ue('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  ue('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < tr.length; l++) ue(tr[l], e);
                  l = r;
                  break;
                case 'source':
                  ue('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  ue('error', e), ue('load', e), (l = r);
                  break;
                case 'details':
                  ue('toggle', e), (l = r);
                  break;
                case 'input':
                  Ki(e, r), (l = Dl(e, r)), ue('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = D({}, r, { value: void 0 })),
                    ue('invalid', e);
                  break;
                case 'textarea':
                  Gi(e, r), (l = Ul(e, r)), ue('invalid', e);
                  break;
                default:
                  l = r;
              }
              Bl(n, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === 'style'
                    ? tu(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && bi(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && In(e, s)
                          : typeof s == 'number' && In(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (L.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && ue('scroll', e)
                            : s != null && Pe(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  xr(e), Xi(e, r, !1);
                  break;
                case 'textarea':
                  xr(e), qi(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ne(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? an(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Qr);
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
        return ze(t), null;
      case 6:
        if (e && t.stateNode != null) da(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(p(166));
          if (((n = bt(ar.current)), bt(vt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (o = r.nodeValue !== n) && ((e = Ke), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r);
        }
        return ze(t), null;
      case 13:
        if (
          (se(fe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ce && Ye !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            gs(), Pn(), (t.flags |= 98560), (o = !1);
          else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(p(317));
              o[pt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            ze(t), (o = !1);
          } else ot !== null && (yi(ot), (ot = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (fe.current & 1) !== 0 ? Se === 0 && (Se = 3) : xi())),
            t.updateQueue !== null && (t.flags |= 4),
            ze(t),
            null);
      case 4:
        return Nn(), ui(e, t), e === null && nr(t.stateNode.containerInfo), ze(t), null;
      case 10:
        return Do(t.type._context), ze(t), null;
      case 17:
        return Ue(t.type) && Yr(), ze(t), null;
      case 19:
        if ((se(fe), (o = t.memoizedState), o === null)) return ze(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) vr(o, !1);
          else {
            if (Se !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ll(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      vr(o, !1),
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
                  return ie(fe, (fe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ge() > Rn &&
              ((t.flags |= 128), (r = !0), vr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                vr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ce)
              )
                return ze(t), null;
            } else
              2 * ge() - o.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), vr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ge()),
            (t.sibling = null),
            (n = fe.current),
            ie(fe, r ? (n & 1) | 2 : n & 1),
            t)
          : (ze(t), null);
      case 22:
      case 23:
        return (
          Si(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Xe & 1073741824) !== 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function Bf(e, t) {
    switch ((zo(t), t.tag)) {
      case 1:
        return (
          Ue(t.type) && Yr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          se(Fe),
          se(Oe),
          Wo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Bo(t), null;
      case 13:
        if ((se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          Pn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return se(fe), null;
      case 4:
        return Nn(), null;
      case 10:
        return Do(t.type._context), null;
      case 22:
      case 23:
        return Si(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    je = !1,
    Vf = typeof WeakSet == 'function' ? WeakSet : Set,
    M = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          ve(e, t, r);
        }
      else n.current = null;
  }
  function si(e, t, n) {
    try {
      n();
    } catch (r) {
      ve(e, t, r);
    }
  }
  var pa = !1;
  function Wf(e, t) {
    if (((So = Tr), (e = Qu()), fo(e))) {
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
              _ = e,
              y = null;
            t: for (;;) {
              for (
                var R;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (u = i + l),
                  _ !== o || (r !== 0 && _.nodeType !== 3) || (s = i + r),
                  _.nodeType === 3 && (i += _.nodeValue.length),
                  (R = _.firstChild) !== null;

              )
                (y = _), (_ = R);
              for (;;) {
                if (_ === e) break t;
                if (
                  (y === n && ++v === l && (u = i),
                  y === o && ++S === r && (s = i),
                  (R = _.nextSibling) !== null)
                )
                  break;
                (_ = y), (y = _.parentNode);
              }
              _ = R;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: e, selectionRange: n }, Tr = !1, M = t; M !== null; )
      if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (M = e);
      else
        for (; M !== null; ) {
          t = M;
          try {
            var I = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (I !== null) {
                    var B = I.memoizedProps,
                      he = I.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : it(t.type, B),
                        he,
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
          } catch (C) {
            ve(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (M = e);
            break;
          }
          M = t.return;
        }
    return (I = pa), (pa = !1), I;
  }
  function gr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && si(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vl(e, t) {
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
  function ai(e) {
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
  function va(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), va(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[lr], delete t[Co], delete t[Pf], delete t[Cf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ha(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ga(e.return)) return null;
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
  function ci(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
  }
  function fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (fi(e, t, n), e = e.sibling; e !== null; ) fi(e, t, n), (e = e.sibling);
  }
  var Ce = null,
    ut = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) ma(e, t, n), (n = n.sibling);
  }
  function ma(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == 'function')
      try {
        dt.onCommitFiberUnmount(Or, n);
      } catch {}
    switch (n.tag) {
      case 5:
        je || jn(n, t);
      case 6:
        var r = Ce,
          l = ut;
        (Ce = null),
          At(e, t, n),
          (Ce = r),
          (ut = l),
          Ce !== null &&
            (ut
              ? ((e = Ce),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ce.removeChild(n.stateNode));
        break;
      case 18:
        Ce !== null &&
          (ut
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? Po(e.parentNode, n) : e.nodeType === 1 && Po(e, n),
              Yn(e))
            : Po(Ce, n.stateNode));
        break;
      case 4:
        (r = Ce),
          (l = ut),
          (Ce = n.stateNode.containerInfo),
          (ut = !0),
          At(e, t, n),
          (Ce = r),
          (ut = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && si(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!je && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (u) {
            ve(n, t, u);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((je = (r = je) || n.memoizedState !== null), At(e, t, n), (je = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ya(e) {
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
                (Ce = u.stateNode), (ut = !1);
                break e;
              case 3:
                (Ce = u.stateNode.containerInfo), (ut = !0);
                break e;
              case 4:
                (Ce = u.stateNode.containerInfo), (ut = !0);
                break e;
            }
            u = u.return;
          }
          if (Ce === null) throw Error(p(160));
          ma(o, i, l), (Ce = null), (ut = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (v) {
          ve(l, t, v);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wa(t, e), (t = t.sibling);
  }
  function wa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((st(t, e), ht(e), r & 4)) {
          try {
            gr(3, e, e.return), vl(3, e);
          } catch (B) {
            ve(e, e.return, B);
          }
          try {
            gr(5, e, e.return);
          } catch (B) {
            ve(e, e.return, B);
          }
        }
        break;
      case 1:
        st(t, e), ht(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if ((st(t, e), ht(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            In(l, '');
          } catch (B) {
            ve(e, e.return, B);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === 'input' && o.type === 'radio' && o.name != null && Yi(l, o), Vl(u, i);
              var v = Vl(u, o);
              for (i = 0; i < s.length; i += 2) {
                var S = s[i],
                  _ = s[i + 1];
                S === 'style'
                  ? tu(l, _)
                  : S === 'dangerouslySetInnerHTML'
                    ? bi(l, _)
                    : S === 'children'
                      ? In(l, _)
                      : Pe(l, S, _, v);
              }
              switch (u) {
                case 'input':
                  Il(l, o);
                  break;
                case 'textarea':
                  Ji(l, o);
                  break;
                case 'select':
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var R = o.value;
                  R != null
                    ? an(l, !!o.multiple, R, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? an(l, !!o.multiple, o.defaultValue, !0)
                        : an(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[lr] = o;
            } catch (B) {
              ve(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((st(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (B) {
            ve(e, e.return, B);
          }
        }
        break;
      case 3:
        if ((st(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Yn(t.containerInfo);
          } catch (B) {
            ve(e, e.return, B);
          }
        break;
      case 4:
        st(t, e), ht(e);
        break;
      case 13:
        st(t, e),
          ht(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (vi = ge())),
          r & 4 && ya(e);
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((je = (v = je) || S), st(t, e), (je = v)) : st(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((v = e.memoizedState !== null), (e.stateNode.isHidden = v) && !S && (e.mode & 1) !== 0)
          )
            for (M = e, S = e.child; S !== null; ) {
              for (_ = M = S; M !== null; ) {
                switch (((y = M), (R = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    gr(4, y, y.return);
                    break;
                  case 1:
                    jn(y, y.return);
                    var I = y.stateNode;
                    if (typeof I.componentWillUnmount == 'function') {
                      (r = y), (n = y.return);
                      try {
                        (t = r),
                          (I.props = t.memoizedProps),
                          (I.state = t.memoizedState),
                          I.componentWillUnmount();
                      } catch (B) {
                        ve(r, n, B);
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
                R !== null ? ((R.return = y), (M = R)) : _a(_);
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
                      : ((u = _.stateNode),
                        (s = _.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (u.style.display = eu('display', i)));
                } catch (B) {
                  ve(e, e.return, B);
                }
              }
            } else if (_.tag === 6) {
              if (S === null)
                try {
                  _.stateNode.nodeValue = v ? '' : _.memoizedProps;
                } catch (B) {
                  ve(e, e.return, B);
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
        st(t, e), ht(e), r & 4 && ya(e);
        break;
      case 21:
        break;
      default:
        st(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ga(n)) {
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
            r.flags & 32 && (In(l, ''), (r.flags &= -33));
            var o = ha(e);
            fi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ha(e);
            ci(e, u, i);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ve(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $f(e, t, n) {
    (M = e), Sa(e);
  }
  function Sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
      var l = M,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || je;
          u = pl;
          var v = je;
          if (((pl = i), (je = s) && !v))
            for (M = l; M !== null; )
              (i = M),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? ka(l)
                  : s !== null
                    ? ((s.return = i), (M = s))
                    : ka(l);
          for (; o !== null; ) (M = o), Sa(o), (o = o.sibling);
          (M = l), (pl = u), (je = v);
        }
        xa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (M = o)) : xa(e);
    }
  }
  function xa(e) {
    for (; M !== null; ) {
      var t = M;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                je || vl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && _s(t, o, r);
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
                  _s(t, i, n);
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
                      var _ = S.dehydrated;
                      _ !== null && Yn(_);
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
          je || (t.flags & 512 && ai(t));
        } catch (y) {
          ve(t, t.return, y);
        }
      }
      if (t === e) {
        M = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function _a(e) {
    for (; M !== null; ) {
      var t = M;
      if (t === e) {
        M = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (M = n);
        break;
      }
      M = t.return;
    }
  }
  function ka(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
            } catch (s) {
              ve(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ve(t, l, s);
              }
            }
            var o = t.return;
            try {
              ai(t);
            } catch (s) {
              ve(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ai(t);
            } catch (s) {
              ve(t, i, s);
            }
        }
      } catch (s) {
        ve(t, t.return, s);
      }
      if (t === e) {
        M = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (M = u);
        break;
      }
      M = t.return;
    }
  }
  var Hf = Math.ceil,
    gl = q.ReactCurrentDispatcher,
    di = q.ReactCurrentOwner,
    et = q.ReactCurrentBatchConfig,
    Z = 0,
    _e = null,
    ye = null,
    Ee = 0,
    Xe = 0,
    Ln = Mt(0),
    Se = 0,
    hr = null,
    tn = 0,
    hl = 0,
    pi = 0,
    mr = null,
    Be = null,
    vi = 0,
    Rn = 1 / 0,
    Ct = null,
    ml = !1,
    gi = null,
    Bt = null,
    yl = !1,
    Vt = null,
    wl = 0,
    yr = 0,
    hi = null,
    Sl = -1,
    xl = 0;
  function Me() {
    return (Z & 6) !== 0 ? ge() : Sl !== -1 ? Sl : (Sl = ge());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Z & 2) !== 0 && Ee !== 0
        ? Ee & -Ee
        : Of.transition !== null
          ? (xl === 0 && (xl = hu()), xl)
          : ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cu(e.type))), e);
  }
  function at(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (hi = null), Error(p(185)));
    Wn(e, n, r),
      ((Z & 2) === 0 || e !== _e) &&
        (e === _e && ((Z & 2) === 0 && (hl |= n), Se === 4 && $t(e, Ee)),
        Ve(e, r),
        n === 1 && Z === 0 && (t.mode & 1) === 0 && ((Rn = ge() + 500), Gr && It()));
  }
  function Ve(e, t) {
    var n = e.callbackNode;
    Ec(e, t);
    var r = jr(e, e === _e ? Ee : 0);
    if (r === 0) n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && pu(n), t === 1))
        e.tag === 0 ? Ef(Ca.bind(null, e)) : cs(Ca.bind(null, e)),
          _f(function () {
            (Z & 6) === 0 && It();
          }),
          (n = null);
      else {
        switch (mu(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = vu;
            break;
          case 16:
            n = Er;
            break;
          case 536870912:
            n = gu;
            break;
          default:
            n = Er;
        }
        n = Ta(n, Pa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Pa(e, t) {
    if (((Sl = -1), (xl = 0), (Z & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = jr(e, e === _e ? Ee : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = _l(e, r);
    else {
      t = r;
      var l = Z;
      Z |= 2;
      var o = Oa();
      (_e !== e || Ee !== t) && ((Ct = null), (Rn = ge() + 500), rn(e, t));
      do
        try {
          Yf();
          break;
        } catch (u) {
          Ea(e, u);
        }
      while (!0);
      Mo(), (gl.current = o), (Z = l), ye !== null ? (t = 0) : ((_e = null), (Ee = 0), (t = Se));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Gl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = hr), rn(e, 0), $t(e, r), Ve(e, ge()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Qf(l) &&
            ((t = _l(e, r)),
            t === 2 && ((o = Gl(e)), o !== 0 && ((r = o), (t = mi(e, o)))),
            t === 1))
        )
          throw ((n = hr), rn(e, 0), $t(e, r), Ve(e, ge()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            ln(e, Be, Ct);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = vi + 500 - ge()), 10 < t))) {
              if (jr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Me(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ko(ln.bind(null, e, Be, Ct), t);
              break;
            }
            ln(e, Be, Ct);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - rt(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = ge() - r),
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
              e.timeoutHandle = ko(ln.bind(null, e, Be, Ct), r);
              break;
            }
            ln(e, Be, Ct);
            break;
          case 5:
            ln(e, Be, Ct);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Ve(e, ge()), e.callbackNode === n ? Pa.bind(null, e) : null;
  }
  function mi(e, t) {
    var n = mr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = _l(e, t)),
      e !== 2 && ((t = Be), (Be = n), t !== null && yi(t)),
      e
    );
  }
  function yi(e) {
    Be === null ? (Be = e) : Be.push.apply(Be, e);
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
      t &= ~pi, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ca(e) {
    if ((Z & 6) !== 0) throw Error(p(327));
    Tn();
    var t = jr(e, 0);
    if ((t & 1) === 0) return Ve(e, ge()), null;
    var n = _l(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = hr), rn(e, 0), $t(e, t), Ve(e, ge()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Be, Ct),
      Ve(e, ge()),
      null
    );
  }
  function wi(e, t) {
    var n = Z;
    Z |= 1;
    try {
      return e(t);
    } finally {
      (Z = n), Z === 0 && ((Rn = ge() + 500), Gr && It());
    }
  }
  function nn(e) {
    Vt !== null && Vt.tag === 0 && (Z & 6) === 0 && Tn();
    var t = Z;
    Z |= 1;
    var n = et.transition,
      r = re;
    try {
      if (((et.transition = null), (re = 1), e)) return e();
    } finally {
      (re = r), (et.transition = n), (Z = t), (Z & 6) === 0 && It();
    }
  }
  function Si() {
    (Xe = Ln.current), se(Ln);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), xf(n)), ye !== null))
      for (n = ye.return; n !== null; ) {
        var r = n;
        switch ((zo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Yr();
            break;
          case 3:
            Nn(), se(Fe), se(Oe), Wo();
            break;
          case 5:
            Bo(r);
            break;
          case 4:
            Nn();
            break;
          case 13:
            se(fe);
            break;
          case 19:
            se(fe);
            break;
          case 10:
            Do(r.type._context);
            break;
          case 22:
          case 23:
            Si();
        }
        n = n.return;
      }
    if (
      ((_e = e),
      (ye = e = Ht(e.current, null)),
      (Ee = Xe = t),
      (Se = 0),
      (hr = null),
      (pi = hl = tn = 0),
      (Be = mr = null),
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
  function Ea(e, t) {
    do {
      var n = ye;
      try {
        if ((Mo(), (ol.current = al), il)) {
          for (var r = de.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          il = !1;
        }
        if (
          ((en = 0),
          (xe = we = de = null),
          (cr = !1),
          (fr = 0),
          (di.current = null),
          n === null || n.return === null)
        ) {
          (Se = 1), (hr = t), (ye = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = Ee),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var v = s,
              S = u,
              _ = S.tag;
            if ((S.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var y = S.alternate;
              y
                ? ((S.updateQueue = y.updateQueue),
                  (S.memoizedState = y.memoizedState),
                  (S.lanes = y.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var R = qs(i);
            if (R !== null) {
              (R.flags &= -257), Zs(R, i, u, o, t), R.mode & 1 && Js(o, v, t), (t = R), (s = v);
              var I = t.updateQueue;
              if (I === null) {
                var B = new Set();
                B.add(s), (t.updateQueue = B);
              } else I.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Js(o, v, t), xi();
                break e;
              }
              s = Error(p(426));
            }
          } else if (ce && u.mode & 1) {
            var he = qs(i);
            if (he !== null) {
              (he.flags & 65536) === 0 && (he.flags |= 256), Zs(he, i, u, o, t), Ro(zn(s, u));
              break e;
            }
          }
          (o = s = zn(s, u)), Se !== 4 && (Se = 2), mr === null ? (mr = [o]) : mr.push(o), (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Xs(o, s, t);
                xs(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type,
                  d = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (d !== null &&
                      typeof d.componentDidCatch == 'function' &&
                      (Bt === null || !Bt.has(d))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var C = Gs(o, u, t);
                  xs(o, C);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        za(n);
      } catch (V) {
        (t = V), ye === n && n !== null && (ye = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oa() {
    var e = gl.current;
    return (gl.current = al), e === null ? al : e;
  }
  function xi() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
      _e === null || ((tn & 268435455) === 0 && (hl & 268435455) === 0) || $t(_e, Ee);
  }
  function _l(e, t) {
    var n = Z;
    Z |= 2;
    var r = Oa();
    (_e !== e || Ee !== t) && ((Ct = null), rn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        Ea(e, l);
      }
    while (!0);
    if ((Mo(), (Z = n), (gl.current = r), ye !== null)) throw Error(p(261));
    return (_e = null), (Ee = 0), Se;
  }
  function Kf() {
    for (; ye !== null; ) Na(ye);
  }
  function Yf() {
    for (; ye !== null && !mc(); ) Na(ye);
  }
  function Na(e) {
    var t = Ra(e.alternate, e, Xe);
    (e.memoizedProps = e.pendingProps), t === null ? za(e) : (ye = t), (di.current = null);
  }
  function za(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Af(n, t, Xe)), n !== null)) {
          ye = n;
          return;
        }
      } else {
        if (((n = Bf(n, t)), n !== null)) {
          (n.flags &= 32767), (ye = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Se = 6), (ye = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function ln(e, t, n) {
    var r = re,
      l = et.transition;
    try {
      (et.transition = null), (re = 1), Xf(e, t, n, r);
    } finally {
      (et.transition = l), (re = r);
    }
    return null;
  }
  function Xf(e, t, n, r) {
    do Tn();
    while (Vt !== null);
    if ((Z & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Oc(e, o),
      e === _e && ((ye = _e = null), (Ee = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ta(Er, function () {
          return Tn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = et.transition), (et.transition = null);
      var i = re;
      re = 1;
      var u = Z;
      (Z |= 4),
        (di.current = null),
        Wf(e, n),
        wa(n, e),
        vf(xo),
        (Tr = !!So),
        (xo = So = null),
        (e.current = n),
        $f(n),
        yc(),
        (Z = u),
        (re = i),
        (et.transition = o);
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Vt = e), (wl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      xc(n.stateNode),
      Ve(e, ge()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ((ml = !1), (e = gi), (gi = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Tn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === hi ? yr++ : ((yr = 0), (hi = e))) : (yr = 0),
      It(),
      null
    );
  }
  function Tn() {
    if (Vt !== null) {
      var e = mu(wl),
        t = et.transition,
        n = re;
      try {
        if (((et.transition = null), (re = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (wl = 0), (Z & 6) !== 0)) throw Error(p(331));
          var l = Z;
          for (Z |= 4, M = e.current; M !== null; ) {
            var o = M,
              i = o.child;
            if ((M.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var v = u[s];
                  for (M = v; M !== null; ) {
                    var S = M;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gr(8, S, o);
                    }
                    var _ = S.child;
                    if (_ !== null) (_.return = S), (M = _);
                    else
                      for (; M !== null; ) {
                        S = M;
                        var y = S.sibling,
                          R = S.return;
                        if ((va(S), S === v)) {
                          M = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = R), (M = y);
                          break;
                        }
                        M = R;
                      }
                  }
                }
                var I = o.alternate;
                if (I !== null) {
                  var B = I.child;
                  if (B !== null) {
                    I.child = null;
                    do {
                      var he = B.sibling;
                      (B.sibling = null), (B = he);
                    } while (B !== null);
                  }
                }
                M = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) (i.return = o), (M = i);
            else
              e: for (; M !== null; ) {
                if (((o = M), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (M = f);
                  break e;
                }
                M = o.return;
              }
          }
          var a = e.current;
          for (M = a; M !== null; ) {
            i = M;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) (d.return = i), (M = d);
            else
              e: for (i = a; M !== null; ) {
                if (((u = M), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vl(9, u);
                    }
                  } catch (V) {
                    ve(u, u.return, V);
                  }
                if (u === i) {
                  M = null;
                  break e;
                }
                var C = u.sibling;
                if (C !== null) {
                  (C.return = u.return), (M = C);
                  break e;
                }
                M = u.return;
              }
          }
          if (((Z = l), It(), dt && typeof dt.onPostCommitFiberRoot == 'function'))
            try {
              dt.onPostCommitFiberRoot(Or, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (re = n), (et.transition = t);
      }
    }
    return !1;
  }
  function ja(e, t, n) {
    (t = zn(n, t)),
      (t = Xs(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Me()),
      e !== null && (Wn(e, 1, t), Ve(e, t));
  }
  function ve(e, t, n) {
    if (e.tag === 3) ja(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ja(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Bt === null || !Bt.has(r)))
          ) {
            (e = zn(n, e)),
              (e = Gs(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Me()),
              t !== null && (Wn(t, 1, e), Ve(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Me()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _e === e &&
        (Ee & n) === n &&
        (Se === 4 || (Se === 3 && (Ee & 130023424) === Ee && 500 > ge() - vi)
          ? rn(e, 0)
          : (pi |= n)),
      Ve(e, t);
  }
  function La(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Me();
    (e = _t(e, t)), e !== null && (Wn(e, t, n), Ve(e, n));
  }
  function Jf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), La(e, n);
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
    r !== null && r.delete(t), La(e, n);
  }
  var Ra;
  Ra = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Ae = !1), Uf(e, t, n);
        Ae = (e.flags & 131072) !== 0;
      }
    else (Ae = !1), ce && (t.flags & 1048576) !== 0 && fs(t, qr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        dl(e, t), (e = t.pendingProps);
        var l = xn(t, Oe.current);
        On(t, n), (l = Qo(null, t, r, e, l, n));
        var o = Ko();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ue(r) ? ((o = !0), Xr(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Uo(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Zo(t, r, e, n),
              (t = ni(null, t, r, !0, o, n)))
            : ((t.tag = 0), ce && o && No(t), Te(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = bf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = ti(null, t, r, e, n);
              break e;
            case 1:
              t = la(null, t, r, e, n);
              break e;
            case 11:
              t = bs(null, t, r, e, n);
              break e;
            case 14:
              t = ea(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          ti(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          la(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((oa(t), e === null)) throw Error(p(387));
          (r = t.pendingProps), (o = t.memoizedState), (l = o.element), Ss(e, t), rl(t, r, null, n);
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
              (l = zn(Error(p(423)), t)), (t = ia(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = zn(Error(p(424)), t)), (t = ia(e, t, r, n, l));
              break e;
            } else
              for (
                Ye = Tt(t.stateNode.containerInfo.firstChild),
                  Ke = t,
                  ce = !0,
                  ot = null,
                  n = ys(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            Te(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ks(t),
          e === null && Lo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          _o(r, l) ? (i = null) : o !== null && _o(r, o) && (t.flags |= 32),
          ra(e, t),
          Te(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Lo(t), null;
      case 13:
        return ua(e, t, n);
      case 4:
        return (
          Ao(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Te(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          bs(e, t, r, l, n)
        );
      case 7:
        return Te(e, t, t.pendingProps, n), t.child;
      case 8:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ie(el, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (lt(o.value, i)) {
              if (o.children === l.children && !Fe.current) {
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
                        Io(o.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(p(341));
                  (i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Io(i, n, t),
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
          Te(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = Ze(l)),
          (r = r(l)),
          (t.flags |= 1),
          Te(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), ea(e, t, r, l, n);
      case 15:
        return ta(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          dl(e, t),
          (t.tag = 1),
          Ue(r) ? ((e = !0), Xr(t)) : (e = !1),
          On(t, n),
          Ks(t, r, l),
          Zo(t, r, l, n),
          ni(null, t, r, !0, e, n)
        );
      case 19:
        return aa(e, t, n);
      case 22:
        return na(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Ta(e, t) {
    return du(e, t);
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
  function tt(e, t, n, r) {
    return new Zf(e, t, n, r);
  }
  function _i(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function bf(e) {
    if (typeof e == 'function') return _i(e) ? 1 : 0;
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
        ? ((n = tt(e.tag, t, e.key, e.mode)),
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
    var i = 2;
    if (((r = e), typeof e == 'function')) _i(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case De:
          return on(n.children, l, o, t);
        case Ge:
          (i = 8), (l |= 8);
          break;
        case Et:
          return (e = tt(12, n, t, l | 2)), (e.elementType = Et), (e.lanes = o), e;
        case $e:
          return (e = tt(13, n, t, l)), (e.elementType = $e), (e.lanes = o), e;
        case nt:
          return (e = tt(19, n, t, l)), (e.elementType = nt), (e.lanes = o), e;
        case pe:
          return Pl(n, l, o, t);
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
              case Ie:
                (i = 16), (r = null);
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ''));
      }
    return (t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
  }
  function on(e, t, n, r) {
    return (e = tt(7, e, r, t)), (e.lanes = n), e;
  }
  function Pl(e, t, n, r) {
    return (
      (e = tt(22, e, r, t)),
      (e.elementType = pe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return (e = tt(6, e, null, t)), (e.lanes = n), e;
  }
  function Pi(e, t, n) {
    return (
      (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
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
      (this.eventTimes = Jl(0)),
      (this.expirationTimes = Jl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ci(e, t, n, r, l, o, i, u, s) {
    return (
      (e = new ed(e, t, n, u, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = tt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Uo(o),
      e
    );
  }
  function td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Re,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ma(e) {
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
            if (Ue(t.type)) {
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
      if (Ue(n)) return ss(e, n, t);
    }
    return t;
  }
  function Da(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Ci(n, r, !0, e, l, o, i, u, s)),
      (e.context = Ma(null)),
      (n = e.current),
      (r = Me()),
      (l = Wt(n)),
      (o = kt(r, l)),
      (o.callback = t ?? null),
      Ut(n, o, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      Ve(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      o = Me(),
      i = Wt(l);
    return (
      (n = Ma(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = kt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, i)),
      e !== null && (at(e, l, i, o), nl(e, l, i)),
      i
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
  function Ia(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    Ia(e, t), (e = e.alternate) && Ia(e, t);
  }
  function nd() {
    return null;
  }
  var Fa =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Oi(e) {
    this._internalRoot = e;
  }
  (Ol.prototype.render = Oi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Cl(e, t, null, null);
    }),
    (Ol.prototype.unmount = Oi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nn(function () {
            Cl(null, e, null, null);
          }),
            (t[yt] = null);
        }
      });
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Su();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
      jt.splice(n, 0, e), n === 0 && ku(e);
    }
  };
  function Ni(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Ua() {}
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var v = El(i);
          o.call(v);
        };
      }
      var i = Da(t, r, e, 0, null, !1, !1, '', Ua);
      return (
        (e._reactRootContainer = i),
        (e[yt] = i.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var v = El(s);
        u.call(v);
      };
    }
    var s = Ci(e, 0, !1, null, null, !1, !1, '', Ua);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        Cl(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var s = El(i);
          u.call(s);
        };
      }
      Cl(t, i, e, l);
    } else i = rd(n, t, e, l, r);
    return El(i);
  }
  (yu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), Ve(t, ge()), (Z & 6) === 0 && ((Rn = ge() + 500), It()));
        }
        break;
      case 13:
        nn(function () {
          var r = _t(e, 1);
          if (r !== null) {
            var l = Me();
            at(r, e, 1, l);
          }
        }),
          Ei(e, 1);
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Me();
          at(t, e, 134217728, n);
        }
        Ei(e, 134217728);
      }
    }),
    (wu = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = _t(e, t);
        if (n !== null) {
          var r = Me();
          at(n, e, t, r);
        }
        Ei(e, t);
      }
    }),
    (Su = function () {
      return re;
    }),
    (xu = function (e, t) {
      var n = re;
      try {
        return (re = e), t();
      } finally {
        re = n;
      }
    }),
    (Hl = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Il(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(p(90));
                Qi(r), Il(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Ji(e, n);
          break;
        case 'select':
          (t = n.value), t != null && an(e, !!n.multiple, t, !1);
      }
    }),
    (ou = wi),
    (iu = nn);
  var ld = { usingClientEntryPoint: !1, Events: [or, wn, Kr, ru, lu, wi] },
    wr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    od = {
      bundleType: wr.bundleType,
      version: wr.version,
      rendererPackageName: wr.rendererPackageName,
      rendererConfig: wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = cu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || nd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber)
      try {
        (Or = jl.inject(od)), (dt = jl);
      } catch {}
  }
  return (
    (We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld),
    (We.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ni(t)) throw Error(p(200));
      return td(e, t, null, n);
    }),
    (We.createRoot = function (e, t) {
      if (!Ni(e)) throw Error(p(299));
      var n = !1,
        r = '',
        l = Fa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ci(e, 1, !1, null, null, n, !1, r, l)),
        (e[yt] = t.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        new Oi(t)
      );
    }),
    (We.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(p(188))
          : ((e = Object.keys(e).join(',')), Error(p(268, e)));
      return (e = cu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (We.flushSync = function (e) {
      return nn(e);
    }),
    (We.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(p(200));
      return zl(null, e, t, !0, n);
    }),
    (We.hydrateRoot = function (e, t, n) {
      if (!Ni(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Fa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Da(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[yt] = t.current),
        nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ol(t);
    }),
    (We.render = function (e, t, n) {
      if (!Nl(t)) throw Error(p(200));
      return zl(null, e, t, !1, n);
    }),
    (We.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (nn(function () {
            zl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (We.unstable_batchedUpdates = wi),
    (We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return zl(e, t, n, !1, r);
    }),
    (We.version = '18.3.1-next-f1338f8080-20240426'),
    We
  );
}
var oc;
function _d() {
  if (oc) return Wi.exports;
  oc = 1;
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
  return g(), (Wi.exports = xd()), Wi.exports;
}
var ic;
function kd() {
  if (ic) return Ll;
  ic = 1;
  var g = _d();
  return (Ll.createRoot = g.createRoot), (Ll.hydrateRoot = g.hydrateRoot), Ll;
}
var Pd = kd();
const Cd = uc(Pd),
  Ed = (g, z = !1) => {
    const p = { currency: 'USD', maximumFractionDigits: 0, style: 'currency' };
    g >= 1e4 && ((p.notation = 'compact'), (p.maximumFractionDigits = 1));
    const W = new Intl.NumberFormat('en-US', p).format(g);
    return z
      ? N.jsxs('span', {
          style: { whiteSpace: 'nowrap' },
          children: [
            W,
            N.jsx('span', {
              style: { color: '#CCCCCC', fontSize: '0.8em', marginLeft: '4px' },
              children: '/month',
            }),
          ],
        })
      : W;
  },
  Od = (g) => {
    if (g == null || g <= 0) return 'N/A';
    const z = g / 43560,
      p = z < 0.1 ? 3 : z < 10 ? 2 : 1;
    return `${z.toFixed(p)} acres`;
  },
  ac = ({ property: g }) => {
    const [z, p] = Mn.useState(!1);
    if (!g) return;
    const W = g.address || {},
      L = g.listing || {},
      U = g.agent || {},
      $ = g.media || {},
      P = g.property || {},
      x = $.photos || [],
      E =
        L.status === 'For Rent' ||
        (P.propertyType && P.propertyType.toLowerCase().includes('rental')) ||
        P.propertyType === 'Residential Lease',
      O = L.livingArea || P.livingArea,
      h = L.bedrooms || P.bedrooms,
      m = L.bathrooms || P.bathrooms,
      k = P.lotSize,
      F = 'var(--color-bg-container, #fff)',
      T = 'var(--color-border-secondary, #eaeaea)',
      A = 'var(--color-text-2, #666)',
      le = 'var(--color-text-3, #999)',
      me = 'var(--color-primary, #0077ff)',
      Pe = 'var(--color-error, #ff4d4f)';
    return N.jsxs('div', {
      onMouseOut: (q) => {
        (q.currentTarget.style.transform = 'translateY(0)'),
          (q.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)');
      },
      onMouseOver: (q) => {
        (q.currentTarget.style.transform = 'translateY(-4px)'),
          (q.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)');
      },
      style: {
        backgroundColor: F,
        border: `1px solid ${T}`,
        borderRadius: '10px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      },
      children: [
        N.jsxs('div', {
          style: {
            backgroundColor: 'var(--color-bg-tertiary, #f0f2f5)',
            paddingTop: '53%',
            position: 'relative',
            width: '100%',
          },
          children: [
            x && x.length > 0
              ? N.jsx('img', {
                  alt: `${W.full || 'Property'}`,
                  src: x[0],
                  style: {
                    height: '100%',
                    left: 0,
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  },
                })
              : N.jsx('div', {
                  style: {
                    alignItems: 'center',
                    color: le,
                    display: 'flex',
                    fontSize: '12px',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  },
                  children: 'No image available',
                }),
            L.status &&
              N.jsx('div', {
                style: {
                  backgroundColor:
                    L.status === 'Active'
                      ? 'var(--color-success, #10b981)'
                      : L.status === 'Pending'
                        ? 'var(--color-warning, #f59e0b)'
                        : 'var(--color-info, #6366f1)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: '600',
                  left: '10px',
                  padding: '2px 6px',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  top: '10px',
                },
                children: L.status,
              }),
            N.jsx('div', {
              onClick: (q) => {
                q.stopPropagation(),
                  console.log('[MLS-Plugin] Favorite button clicked for property:', g.id),
                  console.log('[MLS-Plugin] Current favorite state:', z);
                try {
                  window.parent && window.parent !== window
                    ? (console.log('[MLS-Plugin] Sending postMessage to parent'),
                      window.parent.postMessage(
                        {
                          action: z ? 'unfavorite' : 'favorite',
                          property: g,
                          type: 'mls-plugin-favorite',
                        },
                        '*',
                      ))
                    : console.log('[MLS-Plugin] No parent window detected');
                } catch (Le) {
                  console.error('[MLS-Plugin] Error sending postMessage:', Le);
                }
                p(!z);
              },
              style: {
                alignItems: 'center',
                backdropFilter: 'blur(4px)',
                backgroundColor: 'var(--color-bg-mask, rgba(255, 255, 255, 0.7))',
                borderRadius: '50%',
                color: z ? Pe : 'var(--color-text-1, #333)',
                cursor: 'pointer',
                display: 'flex',
                height: '28px',
                justifyContent: 'center',
                position: 'absolute',
                right: '10px',
                top: '10px',
                transition: 'all 0.2s ease',
                width: '28px',
                zIndex: 2,
              },
              children: z
                ? N.jsx('svg', {
                    fill: Pe,
                    height: '16',
                    viewBox: '0 0 24 24',
                    width: '16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: N.jsx('path', {
                      d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
                    }),
                  })
                : N.jsx('svg', {
                    fill: 'none',
                    height: '16',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    viewBox: '0 0 24 24',
                    width: '16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: N.jsx('path', {
                      d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
                    }),
                  }),
            }),
            N.jsx('div', {
              style: {
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                bottom: 0,
                height: '50%',
                left: 0,
                position: 'absolute',
                right: 0,
              },
            }),
            L.price &&
              N.jsx('div', {
                style: {
                  bottom: '9px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '700',
                  left: '10px',
                  position: 'absolute',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                },
                children: Ed(L.price, E),
              }),
          ],
        }),
        N.jsxs('div', {
          style: { display: 'flex', flex: '1', flexDirection: 'column', padding: '10px' },
          children: [
            N.jsx('h3', {
              style: {
                color: 'var(--color-text-0, #1a1a1a)',
                fontSize: '12px',
                fontWeight: '600',
                margin: '0 0 5px 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              children:
                W.full || `${W.street || ''}, ${W.city || ''}, ${W.state || ''} ${W.zipCode || ''}`,
            }),
            N.jsxs('div', {
              style: { display: 'flex', gap: '8px', marginBottom: '6px' },
              children: [
                h !== void 0 &&
                  N.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      N.jsx('span', { style: { color: A, fontSize: '11px' }, children: h }),
                      N.jsx('span', { style: { color: le, fontSize: '10px' }, children: 'beds' }),
                    ],
                  }),
                m !== void 0 &&
                  N.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      N.jsx('span', { style: { color: A, fontSize: '11px' }, children: m }),
                      N.jsx('span', { style: { color: le, fontSize: '10px' }, children: 'baths' }),
                    ],
                  }),
                O &&
                  N.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      N.jsx('span', {
                        style: { color: A, fontSize: '11px' },
                        children: O.toLocaleString(),
                      }),
                      N.jsx('span', { style: { color: le, fontSize: '10px' }, children: 'sqft' }),
                    ],
                  }),
              ],
            }),
            N.jsx('div', {
              style: { flex: '1', marginBottom: '6px' },
              children: N.jsxs('div', {
                style: { display: 'flex', flexWrap: 'wrap', gap: '6px 14px' },
                children: [
                  k &&
                    k > 0 &&
                    N.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        N.jsx('span', { style: { color: A, fontSize: '10px' }, children: 'Lot:' }),
                        N.jsx('span', { style: { color: A, fontSize: '10px' }, children: Od(k) }),
                      ],
                    }),
                  P.yearBuilt &&
                    N.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        N.jsx('span', {
                          style: { color: A, fontSize: '10px' },
                          children: 'Built:',
                        }),
                        N.jsx('span', {
                          style: { color: A, fontSize: '10px' },
                          children: P.yearBuilt,
                        }),
                      ],
                    }),
                  L.daysOnMarket !== void 0 &&
                    N.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        N.jsx('span', { style: { color: A, fontSize: '10px' }, children: 'DOM:' }),
                        N.jsxs('span', {
                          style: { color: A, fontSize: '10px' },
                          children: [L.daysOnMarket, ' days'],
                        }),
                      ],
                    }),
                  P.propertyType &&
                    N.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-tertiary, #f5f5f7)',
                        borderRadius: '3px',
                        color: A,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: P.propertyType,
                    }),
                  P.pool &&
                    N.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '3px',
                        color: me,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: 'Pool',
                    }),
                  P.waterfront &&
                    N.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '3px',
                        color: me,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: 'Waterfront',
                    }),
                ],
              }),
            }),
            N.jsxs('div', {
              style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' },
              children: [
                L.url &&
                  N.jsx('div', {
                    children: N.jsxs('a', {
                      href: L.url,
                      rel: 'noopener noreferrer',
                      style: {
                        alignItems: 'center',
                        color: me,
                        display: 'flex',
                        fontSize: '10px',
                        gap: '3px',
                        textDecoration: 'none',
                      },
                      target: '_blank',
                      children: [N.jsx('span', { children: '🔗' }), ' Original Listing'],
                    }),
                  }),
                N.jsxs('div', {
                  onClick: (q) => {
                    q.stopPropagation(),
                      console.log('[MLS-Plugin] Save button clicked for property:', g.id);
                    try {
                      window.parent && window.parent !== window
                        ? (console.log('[MLS-Plugin] Sending postMessage to parent for save'),
                          window.parent.postMessage(
                            { action: 'save', property: g, type: 'mls-plugin-save' },
                            '*',
                          ))
                        : (console.log('[MLS-Plugin] No parent window detected for save button'),
                          alert(`Saving property: ${g.listingId || g.id}`));
                    } catch (Le) {
                      console.error('[MLS-Plugin] Error sending save postMessage:', Le),
                        alert(`Saving property: ${g.listingId || g.id}`);
                    }
                  },
                  onMouseOut: (q) => {
                    q.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary, #f5f5f7)';
                  },
                  onMouseOver: (q) => {
                    q.currentTarget.style.backgroundColor =
                      'var(--color-bg-primary-light, #e6f7ff)';
                  },
                  style: {
                    alignItems: 'center',
                    backgroundColor: 'var(--color-bg-tertiary, #f5f5f7)',
                    borderRadius: '3px',
                    color: me,
                    cursor: 'pointer',
                    display: 'flex',
                    fontSize: '10px',
                    gap: '3px',
                    padding: '2px 6px',
                    transition: 'all 0.2s ease',
                  },
                  children: [N.jsx('span', { children: '+' }), ' Save'],
                }),
              ],
            }),
            U.name &&
              N.jsxs('div', {
                style: {
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-secondary, #f0f0f0)',
                  color: le,
                  display: 'flex',
                  fontSize: '10px',
                  overflow: 'hidden',
                  paddingTop: '6px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
                children: [
                  N.jsx('span', { style: { marginRight: '2px' }, children: '👤' }),
                  N.jsxs('span', {
                    style: { overflow: 'hidden', textOverflow: 'ellipsis' },
                    children: [U.name, U.office && ` • ${U.office}`],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Nd = ({ properties: g }) => {
    const z = Mn.useRef(null),
      [p, W] = Mn.useState({ isAtEnd: !1, isAtStart: !0 }),
      L = Mn.useCallback(() => {
        if (!z.current) return;
        const { scrollLeft: P, scrollWidth: x, clientWidth: E } = z.current,
          O = x > E,
          h = 1,
          m = !O || P <= h,
          k = !O || P + E >= x - h;
        W((F) => (F.isAtStart !== m || F.isAtEnd !== k ? { isAtEnd: k, isAtStart: m } : F));
      }, []);
    if (
      (Mn.useEffect(() => {
        if (!g || g.length === 0) {
          W({ isAtEnd: !0, isAtStart: !0 });
          return;
        }
        L();
        const P = z.current;
        if (P) {
          P.addEventListener('scroll', L, { passive: !0 });
          const x = new ResizeObserver(L);
          x.observe(P);
          const E = setTimeout(L, 150);
          return () => {
            P.removeEventListener('scroll', L), x.disconnect(), clearTimeout(E);
          };
        }
      }, [g, L]),
      !g || g.length === 0)
    )
      return null;
    const U = () => {
        z.current && z.current.scrollBy({ behavior: 'smooth', left: -500 });
      },
      $ = () => {
        z.current && z.current.scrollBy({ behavior: 'smooth', left: 500 });
      };
    return N.jsxs('div', {
      style: { position: 'relative', width: '100%' },
      children: [
        !p.isAtStart &&
          N.jsx('div', {
            onClick: U,
            onMouseOut: (P) => {
              P.currentTarget.style.opacity = '0.7';
            },
            onMouseOver: (P) => {
              P.currentTarget.style.opacity = '1';
            },
            style: {
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'var(--color-arrow-bg, rgba(255, 255, 255, 0.5))',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              color: 'var(--color-text-0, #1a1a1a)',
              cursor: 'pointer',
              display: 'flex',
              height: '28px',
              justifyContent: 'center',
              left: '0',
              opacity: 0.7,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              transition: 'opacity 0.2s ease',
              width: '28px',
              zIndex: 2,
            },
            children: N.jsx('span', { style: { fontSize: '16px' }, children: '←' }),
          }),
        !p.isAtEnd &&
          N.jsx('div', {
            onClick: $,
            onMouseOut: (P) => {
              P.currentTarget.style.opacity = '0.7';
            },
            onMouseOver: (P) => {
              P.currentTarget.style.opacity = '1';
            },
            style: {
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'var(--color-arrow-bg, rgba(255, 255, 255, 0.5))',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              color: 'var(--color-text-0, #1a1a1a)',
              cursor: 'pointer',
              display: 'flex',
              height: '28px',
              justifyContent: 'center',
              opacity: 0.7,
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              transition: 'opacity 0.2s ease',
              width: '28px',
              zIndex: 2,
            },
            children: N.jsx('span', { style: { fontSize: '16px' }, children: '→' }),
          }),
        N.jsx('div', {
          ref: z,
          style: {
            WebkitOverflowScrolling: 'touch',
            margin: '0',
            msOverflowStyle: 'none',
            overflowX: 'auto',
            overflowY: 'hidden',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            width: '100%',
          },
          children: N.jsx('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              minWidth: 'min-content',
              paddingLeft: '0',
              paddingRight: '24px',
            },
            children: g.map((P, x) =>
              N.jsx(
                'div',
                { style: { flexShrink: 0, width: '210px' }, children: N.jsx(ac, { property: P }) },
                x,
              ),
            ),
          }),
        }),
      ],
    });
  },
  zd = () => {
    const [g, z] = Rl.useState(),
      { data: p, loading: W } = tc.useWatchPluginMessage();
    Rl.useEffect(() => {
      tc.lobeChat
        .getPluginMessage()
        .then((U) => {
          console.log('Plugin received data:', U), z(U);
        })
        .catch((U) => {
          console.error('Error getting plugin message:', U);
        });
    }, []),
      Rl.useEffect(() => {
        p && (console.log('Received watch data:', p), z(p));
      }, [p]);
    const L = () =>
      g != null && g.data ? (Array.isArray(g.data) ? g.data.length.toString() : '1') : '0';
    return W
      ? N.jsxs('div', {
          style: {
            color: 'var(--color-text-2, #666)',
            fontFamily:
              'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
            padding: '20px',
            textAlign: 'center',
          },
          children: [
            N.jsx('div', {
              style: {
                animation: 'spin 1s linear infinite',
                border: '2px solid var(--color-border-secondary, #f3f3f3)',
                borderRadius: '50%',
                borderTop: '2px solid var(--color-primary, #3498db)',
                display: 'inline-block',
                height: '24px',
                marginBottom: '12px',
                width: '24px',
              },
            }),
            N.jsx('style', {
              children: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
            }),
            N.jsx('p', { children: 'Loading property listings...' }),
          ],
        })
      : N.jsxs('div', {
          style: {
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            fontFamily:
              'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
            height: '100%',
            overflow: 'hidden',
            padding: '12px',
            width: '100%',
          },
          children: [
            N.jsx('style', {
              children: `
          :root {
            --color-arrow-bg: rgba(255, 255, 255, 0.5);
            --color-bg-mask: rgba(255, 255, 255, 0.7);
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --color-arrow-bg: rgba(50, 50, 50, 0.5);
              --color-bg-mask: rgba(30, 30, 30, 0.7);
              --color-bg-container: #1a1a1a;
              --color-bg-elevated: #2a2a2a;
              --color-border-secondary: #333;
              --color-text-0: #ffffff;
              --color-text-1: #eeeeee;
              --color-text-2: #bbbbbb;
              --color-text-3: #999999;
              --color-bg-tertiary: #333333;
              --color-bg-primary-light: #113466;
            }
          }
        `,
            }),
            g != null && g.data
              ? N.jsxs(N.Fragment, {
                  children: [
                    N.jsxs('h2', {
                      style: {
                        color: 'var(--color-text-0, #1a1a1a)',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '10px',
                        marginTop: '0',
                        paddingLeft: '4px',
                      },
                      children: [
                        'Showing ',
                        L(),
                        ' ',
                        Number.parseInt(L()) === 1 ? 'result' : 'results',
                      ],
                    }),
                    Array.isArray(g.data)
                      ? N.jsx(Nd, { properties: g.data })
                      : N.jsx('div', {
                          style: { margin: '0 auto', maxWidth: '400px' },
                          children: N.jsx(ac, { property: g.data }),
                        }),
                  ],
                })
              : N.jsxs('div', {
                  style: {
                    color: 'var(--color-text-2, #666)',
                    padding: '24px 16px',
                    textAlign: 'center',
                  },
                  children: [
                    N.jsx('p', {
                      style: { fontSize: '15px', marginBottom: '10px' },
                      children:
                        'Waiting for property data... Try searching for properties in Miami, FL.',
                    }),
                    N.jsx('p', {
                      style: { color: 'var(--color-text-3, #888)', fontSize: '13px' },
                      children: 'Example: "Find 3-bedroom houses in Miami under $1M"',
                    }),
                  ],
                }),
          ],
        });
  },
  jd = Cd.createRoot(document.querySelector('#root'));
jd.render(N.jsx(Mn.StrictMode, { children: N.jsx(zd, {}) }));
