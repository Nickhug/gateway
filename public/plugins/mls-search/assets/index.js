function uc(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, 'default') ? g.default : g;
}
var zi = { exports: {} },
  wr = {},
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
    N = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    $ = Symbol.for('react.strict_mode'),
    B = Symbol.for('react.profiler'),
    M = Symbol.for('react.provider'),
    V = Symbol.for('react.context'),
    C = Symbol.for('react.forward_ref'),
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
    z = Object.assign,
    j = {};
  function W(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = j), (this.updater = X || k);
  }
  (W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (c, w) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, w, 'setState');
    }),
    (W.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function re() {}
  re.prototype = W.prototype;
  function ze(c, w, X) {
    (this.props = c), (this.context = w), (this.refs = j), (this.updater = X || k);
  }
  var Le = (ze.prototype = new re());
  (Le.constructor = ze), z(Le, W.prototype), (Le.isPureReactComponent = !0);
  var de = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    je = { current: null },
    Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, w, X) {
    var J,
      Z = {},
      b = null,
      le = null;
    if (w != null)
      for (J in (w.ref !== void 0 && (le = w.ref), w.key !== void 0 && (b = '' + w.key), w))
        tt.call(w, J) && !Me.hasOwnProperty(J) && (Z[J] = w[J]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = X;
    else if (1 < te) {
      for (var se = Array(te), $e = 0; $e < te; $e++) se[$e] = arguments[$e + 2];
      Z.children = se;
    }
    if (c && c.defaultProps)
      for (J in ((te = c.defaultProps), te)) Z[J] === void 0 && (Z[J] = te[J]);
    return { $$typeof: g, type: c, key: b, ref: le, props: Z, _owner: je.current };
  }
  function Ct(c, w) {
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
    var le = !1;
    if (c === null) le = !0;
    else
      switch (b) {
        case 'string':
        case 'number':
          le = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case g:
            case N:
              le = !0;
          }
      }
    if (le)
      return (
        (le = c),
        (Z = Z(le)),
        (c = J === '' ? '.' + We(le, 0) : J),
        de(Z)
          ? ((X = ''),
            c != null && (X = c.replace(ct, '$&/') + '/'),
            nt(Z, w, X, '', function ($e) {
              return $e;
            }))
          : Z != null &&
            (mt(Z) &&
              (Z = Ct(
                Z,
                X +
                  (!Z.key || (le && le.key === Z.key)
                    ? ''
                    : ('' + Z.key).replace(ct, '$&/') + '/') +
                  c,
              )),
            w.push(Z)),
        1
      );
    if (((le = 0), (J = J === '' ? '.' : J + ':'), de(c)))
      for (var te = 0; te < c.length; te++) {
        b = c[te];
        var se = J + We(b, te);
        le += nt(b, w, X, se, Z);
      }
    else if (((se = m(c)), typeof se == 'function'))
      for (c = se.call(c), te = 0; !(b = c.next()).done; )
        (b = b.value), (se = J + We(b, te++)), (le += nt(b, w, X, se, Z));
    else if (b === 'object')
      throw (
        ((w = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]' ? 'object with keys {' + Object.keys(c).join(', ') + '}' : w) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return le;
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
  var pe = { current: null },
    R = { transition: null },
    K = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: R, ReactCurrentOwner: je };
  function I() {
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
    (G.Component = W),
    (G.Fragment = d),
    (G.Profiler = B),
    (G.PureComponent = ze),
    (G.StrictMode = $),
    (G.Suspense = x),
    (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (G.act = I),
    (G.cloneElement = function (c, w, X) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var J = z({}, c.props),
        Z = c.key,
        b = c.ref,
        le = c._owner;
      if (w != null) {
        if (
          (w.ref !== void 0 && ((b = w.ref), (le = je.current)),
          w.key !== void 0 && (Z = '' + w.key),
          c.type && c.type.defaultProps)
        )
          var te = c.type.defaultProps;
        for (se in w)
          tt.call(w, se) &&
            !Me.hasOwnProperty(se) &&
            (J[se] = w[se] === void 0 && te !== void 0 ? te[se] : w[se]);
      }
      var se = arguments.length - 2;
      if (se === 1) J.children = X;
      else if (1 < se) {
        te = Array(se);
        for (var $e = 0; $e < se; $e++) te[$e] = arguments[$e + 2];
        J.children = te;
      }
      return { $$typeof: g, type: c.type, key: Z, ref: b, props: J, _owner: le };
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
        (c.Provider = { $$typeof: M, _context: c }),
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
      return { $$typeof: C, render: c };
    }),
    (G.isValidElement = mt),
    (G.lazy = function (c) {
      return { $$typeof: O, _payload: { _status: -1, _result: c }, _init: De };
    }),
    (G.memo = function (c, w) {
      return { $$typeof: E, type: c, compare: w === void 0 ? null : w };
    }),
    (G.startTransition = function (c) {
      var w = R.transition;
      R.transition = {};
      try {
        c();
      } finally {
        R.transition = w;
      }
    }),
    (G.unstable_act = I),
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
  if (Va) return wr;
  Va = 1;
  var g = sn(),
    N = Symbol.for('react.element'),
    d = Symbol.for('react.fragment'),
    $ = Object.prototype.hasOwnProperty,
    B = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(C, x, E) {
    var O,
      h = {},
      m = null,
      k = null;
    E !== void 0 && (m = '' + E),
      x.key !== void 0 && (m = '' + x.key),
      x.ref !== void 0 && (k = x.ref);
    for (O in x) $.call(x, O) && !M.hasOwnProperty(O) && (h[O] = x[O]);
    if (C && C.defaultProps) for (O in ((x = C.defaultProps), x)) h[O] === void 0 && (h[O] = x[O]);
    return { $$typeof: N, type: C, key: m, ref: k, props: h, _owner: B.current };
  }
  return (wr.Fragment = d), (wr.jsx = V), (wr.jsxs = V), wr;
}
var Wa;
function ad() {
  return Wa || ((Wa = 1), (zi.exports = sd())), zi.exports;
}
var L = ad(),
  un = {},
  Ri = { exports: {} },
  Ti,
  $a;
function Ll() {
  if ($a) return Ti;
  $a = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (E, O) => {
      for (var h in O) g(E, h, { get: O[h], enumerable: !0 });
    },
    M = (E, O, h, m) => {
      if ((O && typeof O == 'object') || typeof O == 'function')
        for (let k of d(O))
          !$.call(E, k) &&
            k !== h &&
            g(E, k, { get: () => O[k], enumerable: !(m = N(O, k)) || m.enumerable });
      return E;
    },
    V = (E) => M(g({}, '__esModule', { value: !0 }), E),
    C = {};
  B(C, { PluginChannel: () => x }), (Ti = V(C));
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
  return Ti;
}
var Li, Ha;
function sc() {
  if (Ha) return Li;
  Ha = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    M = (h, m, k, z) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of d(m))
          !$.call(h, j) &&
            j !== k &&
            g(h, j, { get: () => m[j], enumerable: !(z = N(m, j)) || z.enumerable });
      return h;
    },
    V = (h) => M(g({}, '__esModule', { value: !0 }), h),
    C = {};
  B(C, { lobeChat: () => O }), (Li = V(C));
  var x = Ll(),
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
              k = (z) => {
                if (z.data.type === x.PluginChannel.initStandalonePlugin) {
                  const j = z.data.payload || z.data.props,
                    W = j.apiName,
                    re = JSON.parse(j.arguments || '{}');
                  clearTimeout(m),
                    h({ arguments: re, name: W, settings: z.data.settings, state: z.data.state }),
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
                  const z = k.data.props;
                  h(z.content), window.removeEventListener('message', m);
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
              const k = (z) => {
                z.data.type === x.PluginChannel.renderPluginState &&
                  z.data.key === h &&
                  (m(z.data.value), window.removeEventListener('message', k));
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
  return Li;
}
var Mi, Qa;
function cd() {
  if (Qa) return Mi;
  Qa = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (W, re) => {
      for (var ze in re) g(W, ze, { get: re[ze], enumerable: !0 });
    },
    M = (W, re, ze, Le) => {
      if ((re && typeof re == 'object') || typeof re == 'function')
        for (let de of d(re))
          !$.call(W, de) &&
            de !== ze &&
            g(W, de, { get: () => re[de], enumerable: !(Le = N(re, de)) || Le.enumerable });
      return W;
    },
    V = (W) => M(g({}, '__esModule', { value: !0 }), W),
    C = {};
  B(C, {
    fetchPluginMessage: () => k,
    fetchPluginPayload: () => z,
    fetchPluginSettings: () => j,
    fetchPluginState: () => m,
    postToFillPluginContent: () => E,
    postToUpdatePluginSettings: () => h,
    postToUpdatePluginState: () => O,
  }),
    (Mi = V(C));
  var x = sc(),
    E = x.lobeChat.setPluginMessage,
    O = x.lobeChat.setPluginState,
    h = x.lobeChat.setPluginSettings,
    m = x.lobeChat.getPluginState,
    k = x.lobeChat.getPluginMessage,
    z = x.lobeChat.getPluginPayload,
    j = x.lobeChat.getPluginSettings;
  return Mi;
}
var Di = { exports: {} },
  Ii,
  Ka;
function fd() {
  if (Ka) return Ii;
  Ka = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    M = (h, m, k, z) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of d(m))
          !$.call(h, j) &&
            j !== k &&
            g(h, j, { get: () => m[j], enumerable: !(z = N(m, j)) || z.enumerable });
      return h;
    },
    V = (h) => M(g({}, '__esModule', { value: !0 }), h),
    C = {};
  B(C, { useOnStandalonePluginInit: () => O }), (Ii = V(C));
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
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    M = (h, m, k, z) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of d(m))
          !$.call(h, j) &&
            j !== k &&
            g(h, j, { get: () => m[j], enumerable: !(z = N(m, j)) || z.enumerable });
      return h;
    },
    V = (h) => M(g({}, '__esModule', { value: !0 }), h),
    C = {};
  B(C, { usePluginSettings: () => O }), (Fi = V(C));
  var x = sn(),
    E = Ml(),
    O = (h) => {
      const [m, k] = (0, x.useState)(h);
      (0, x.useEffect)(() => {
        E.lobeChat.getPluginSettings().then((j) => {
          j && k(j);
        });
      }, []);
      const z = (0, x.useCallback)((j) => {
        k(j), E.lobeChat.setPluginSettings(j);
      }, []);
      return [m, z];
    };
  return Fi;
}
var Ui, Xa;
function pd() {
  if (Xa) return Ui;
  Xa = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (h, m) => {
      for (var k in m) g(h, k, { get: m[k], enumerable: !0 });
    },
    M = (h, m, k, z) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of d(m))
          !$.call(h, j) &&
            j !== k &&
            g(h, j, { get: () => m[j], enumerable: !(z = N(m, j)) || z.enumerable });
      return h;
    },
    V = (h) => M(g({}, '__esModule', { value: !0 }), h),
    C = {};
  B(C, { usePluginState: () => O }), (Ui = V(C));
  var x = sn(),
    E = Ml(),
    O = (h, m) => {
      const [k, z] = (0, x.useState)(m);
      (0, x.useEffect)(() => {
        E.lobeChat.getPluginState(h).then((W) => {
          W && z(W);
        });
      }, [h]);
      const j = (0, x.useCallback)(
        (W) => {
          z(W), E.lobeChat.setPluginState(h, W);
        },
        [h],
      );
      return [k, j];
    };
  return Ui;
}
var Ai, Ga;
function vd() {
  if (Ga) return Ai;
  Ga = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (O, h) => {
      for (var m in h) g(O, m, { get: h[m], enumerable: !0 });
    },
    M = (O, h, m, k) => {
      if ((h && typeof h == 'object') || typeof h == 'function')
        for (let z of d(h))
          !$.call(O, z) &&
            z !== m &&
            g(O, z, { get: () => h[z], enumerable: !(k = N(h, z)) || k.enumerable });
      return O;
    },
    V = (O) => M(g({}, '__esModule', { value: !0 }), O),
    C = {};
  B(C, { onReceiveData: () => E }), (Ai = V(C));
  var x = Ll(),
    E = (O, h) => {
      if (O.data.type === x.PluginChannel.renderPlugin) {
        const m = O.data.props;
        h(m);
      }
    };
  return Ai;
}
var Bi, Ja;
function hd() {
  if (Ja) return Bi;
  Ja = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (m, k) => {
      for (var z in k) g(m, z, { get: k[z], enumerable: !0 });
    },
    M = (m, k, z, j) => {
      if ((k && typeof k == 'object') || typeof k == 'function')
        for (let W of d(k))
          !$.call(m, W) &&
            W !== z &&
            g(m, W, { get: () => k[W], enumerable: !(j = N(k, W)) || j.enumerable });
      return m;
    },
    V = (m) => M(g({}, '__esModule', { value: !0 }), m),
    C = {};
  B(C, { useWatchPluginMessage: () => h }), (Bi = V(C));
  var x = sn(),
    E = Ll(),
    O = vd(),
    h = () => {
      const [m, k] = (0, x.useState)({ data: void 0, loading: !0 }),
        z = (j) => {
          (0, O.onReceiveData)(j, (W) => {
            k({ data: W.content, loading: !1 });
          });
        };
      return (
        (0, x.useEffect)(
          () => (
            window == null || window.addEventListener('message', z),
            top == null || top.postMessage({ type: E.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window == null || window.removeEventListener('message', z);
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
function gd() {
  return (
    qa ||
      ((qa = 1),
      (function (g) {
        var N = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          $ = Object.getOwnPropertyNames,
          B = Object.prototype.hasOwnProperty,
          M = (E, O, h, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let k of $(O))
                !B.call(E, k) &&
                  k !== h &&
                  N(E, k, { get: () => O[k], enumerable: !(m = d(O, k)) || m.enumerable });
            return E;
          },
          V = (E, O, h) => (M(E, O, 'default'), h && M(h, O, 'default')),
          C = (E) => M(N({}, '__esModule', { value: !0 }), E),
          x = {};
        (g.exports = C(x)),
          V(x, fd(), g.exports),
          V(x, dd(), g.exports),
          V(x, pd(), g.exports),
          V(x, hd(), g.exports);
      })(Di)),
    Di.exports
  );
}
var Vi, Za;
function md() {
  if (Za) return Vi;
  Za = 1;
  var g = Object.defineProperty,
    N = Object.getOwnPropertyDescriptor,
    d = Object.getOwnPropertyNames,
    $ = Object.prototype.hasOwnProperty,
    B = (C, x, E, O) => {
      if ((x && typeof x == 'object') || typeof x == 'function')
        for (let h of d(x))
          !$.call(C, h) &&
            h !== E &&
            g(C, h, { get: () => x[h], enumerable: !(O = N(x, h)) || O.enumerable });
      return C;
    },
    M = (C) => B(g({}, '__esModule', { value: !0 }), C),
    V = {};
  return (Vi = M(V)), Vi;
}
var ba;
function Ml() {
  return (
    ba ||
      ((ba = 1),
      (function (g) {
        var N = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          $ = Object.getOwnPropertyNames,
          B = Object.prototype.hasOwnProperty,
          M = (E, O, h, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let k of $(O))
                !B.call(E, k) &&
                  k !== h &&
                  N(E, k, { get: () => O[k], enumerable: !(m = d(O, k)) || m.enumerable });
            return E;
          },
          V = (E, O, h) => (M(E, O, 'default'), h && M(h, O, 'default')),
          C = (E) => M(N({}, '__esModule', { value: !0 }), E),
          x = {};
        (g.exports = C(x)),
          V(x, Ll(), g.exports),
          V(x, cd(), g.exports),
          V(x, gd(), g.exports),
          V(x, sc(), g.exports),
          V(x, md(), g.exports);
      })(Ri)),
    Ri.exports
  );
}
var ec;
function yd() {
  return (
    ec ||
      ((ec = 1),
      (function (g) {
        var N =
            (un && un.__createBinding) ||
            (Object.create
              ? function ($, B, M, V) {
                  V === void 0 && (V = M);
                  var C = Object.getOwnPropertyDescriptor(B, M);
                  (!C || ('get' in C ? !B.__esModule : C.writable || C.configurable)) &&
                    (C = {
                      enumerable: !0,
                      get: function () {
                        return B[M];
                      },
                    }),
                    Object.defineProperty($, V, C);
                }
              : function ($, B, M, V) {
                  V === void 0 && (V = M), ($[V] = B[M]);
                }),
          d =
            (un && un.__exportStar) ||
            function ($, B) {
              for (var M in $)
                M !== 'default' && !Object.prototype.hasOwnProperty.call(B, M) && N(B, $, M);
            };
        Object.defineProperty(g, '__esModule', { value: !0 }), d(Ml(), g);
      })(un)),
    un
  );
}
var tc = yd(),
  Tl = sn();
const Sr = uc(Tl);
var Rl = {},
  Wi = { exports: {} },
  Ve = {},
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
        function N(R, K) {
          var I = R.length;
          R.push(K);
          e: for (; 0 < I; ) {
            var c = (I - 1) >>> 1,
              w = R[c];
            if (0 < B(w, K)) (R[c] = K), (R[I] = w), (I = c);
            else break e;
          }
        }
        function d(R) {
          return R.length === 0 ? null : R[0];
        }
        function $(R) {
          if (R.length === 0) return null;
          var K = R[0],
            I = R.pop();
          if (I !== K) {
            R[0] = I;
            e: for (var c = 0, w = R.length, X = w >>> 1; c < X; ) {
              var J = 2 * (c + 1) - 1,
                Z = R[J],
                b = J + 1,
                le = R[b];
              if (0 > B(Z, I))
                b < w && 0 > B(le, Z)
                  ? ((R[c] = le), (R[b] = I), (c = b))
                  : ((R[c] = Z), (R[J] = I), (c = J));
              else if (b < w && 0 > B(le, I)) (R[c] = le), (R[b] = I), (c = b);
              else break e;
            }
          }
          return K;
        }
        function B(R, K) {
          var I = R.sortIndex - K.sortIndex;
          return I !== 0 ? I : R.id - K.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var M = performance;
          g.unstable_now = function () {
            return M.now();
          };
        } else {
          var V = Date,
            C = V.now();
          g.unstable_now = function () {
            return V.now() - C;
          };
        }
        var x = [],
          E = [],
          O = 1,
          h = null,
          m = 3,
          k = !1,
          z = !1,
          j = !1,
          W = typeof setTimeout == 'function' ? setTimeout : null,
          re = typeof clearTimeout == 'function' ? clearTimeout : null,
          ze = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Le(R) {
          for (var K = d(E); K !== null; ) {
            if (K.callback === null) $(E);
            else if (K.startTime <= R) $(E), (K.sortIndex = K.expirationTime), N(x, K);
            else break;
            K = d(E);
          }
        }
        function de(R) {
          if (((j = !1), Le(R), !z))
            if (d(x) !== null) (z = !0), De(tt);
            else {
              var K = d(E);
              K !== null && pe(de, K.startTime - R);
            }
        }
        function tt(R, K) {
          (z = !1), j && ((j = !1), re(Xe), (Xe = -1)), (k = !0);
          var I = m;
          try {
            for (Le(K), h = d(x); h !== null && (!(h.expirationTime > K) || (R && !Kt())); ) {
              var c = h.callback;
              if (typeof c == 'function') {
                (h.callback = null), (m = h.priorityLevel);
                var w = c(h.expirationTime <= K);
                (K = g.unstable_now()),
                  typeof w == 'function' ? (h.callback = w) : h === d(x) && $(x),
                  Le(K);
              } else $(x);
              h = d(x);
            }
            if (h !== null) var X = !0;
            else {
              var J = d(E);
              J !== null && pe(de, J.startTime - K), (X = !1);
            }
            return X;
          } finally {
            (h = null), (m = I), (k = !1);
          }
        }
        var je = !1,
          Me = null,
          Xe = -1,
          Ct = 5,
          mt = -1;
        function Kt() {
          return !(g.unstable_now() - mt < Ct);
        }
        function ct() {
          if (Me !== null) {
            var R = g.unstable_now();
            mt = R;
            var K = !0;
            try {
              K = Me(!0, R);
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
            W(ct, 0);
          };
        function De(R) {
          (Me = R), je || ((je = !0), We());
        }
        function pe(R, K) {
          Xe = W(function () {
            R(g.unstable_now());
          }, K);
        }
        (g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            z || k || ((z = !0), De(tt));
          }),
          (g.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Ct = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return d(x);
          }),
          (g.unstable_next = function (R) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = m;
            }
            var I = m;
            m = K;
            try {
              return R();
            } finally {
              m = I;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (R, K) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var I = m;
            m = R;
            try {
              return K();
            } finally {
              m = I;
            }
          }),
          (g.unstable_scheduleCallback = function (R, K, I) {
            var c = g.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? c + I : c))
                : (I = c),
              R)
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
              (w = I + w),
              (R = {
                id: O++,
                callback: K,
                priorityLevel: R,
                startTime: I,
                expirationTime: w,
                sortIndex: -1,
              }),
              I > c
                ? ((R.sortIndex = I),
                  N(E, R),
                  d(x) === null &&
                    R === d(E) &&
                    (j ? (re(Xe), (Xe = -1)) : (j = !0), pe(de, I - c)))
                : ((R.sortIndex = w), N(x, R), z || k || ((z = !0), De(tt))),
              R
            );
          }),
          (g.unstable_shouldYield = Kt),
          (g.unstable_wrapCallback = function (R) {
            var K = m;
            return function () {
              var I = m;
              m = K;
              try {
                return R.apply(this, arguments);
              } finally {
                m = I;
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
  if (lc) return Ve;
  lc = 1;
  var g = sn(),
    N = Sd();
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
    B = {};
  function M(e, t) {
    V(e, t), V(e + 'Capture', t);
  }
  function V(e, t) {
    for (B[e] = t, e = 0; e < t.length; e++) $.add(t[e]);
  }
  var C = !(
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
  function z(e, t, n, r) {
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
  function j(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var W = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      W[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      W[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      W[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        W[e] = new j(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        W[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      W[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      W[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      W[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      W[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var re = /[\-:]([a-z])/g;
  function ze(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(re, ze);
      W[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(re, ze);
        W[t] = new j(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(re, ze);
      W[t] = new j(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      W[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (W.xlinkHref = new j('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      W[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Le(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (z(t, n, l, r) && (n = null),
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
  var de = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    je = Symbol.for('react.portal'),
    Me = Symbol.for('react.fragment'),
    Xe = Symbol.for('react.strict_mode'),
    Ct = Symbol.for('react.profiler'),
    mt = Symbol.for('react.provider'),
    Kt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    We = Symbol.for('react.suspense'),
    nt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    De = Symbol.for('react.lazy'),
    pe = Symbol.for('react.offscreen'),
    R = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (R && e[R]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var I = Object.assign,
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
  function le(e) {
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
  function se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function $e(e) {
    var t = se(e) ? 'checked' : 'value',
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
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Qi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = se(e) ? (e.checked ? 'true' : 'false') : e.value),
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
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ki(e, t) {
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
  function Yi(e, t) {
    (t = t.checked), t != null && Le(e, 'checked', t, !1);
  }
  function Il(e, t) {
    Yi(e, t);
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
      ? Fl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Fl(e, t.type, te(t.defaultValue)),
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
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Gi(e, t) {
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
  function Ji(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
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
  function eu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (In.hasOwnProperty(e) && In[e])
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
  var fc = I(
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
    if ((e = lr(e))) {
      if (typeof Hl != 'function') throw Error(d(280));
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
  function Fn(e, t) {
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
    if (n && typeof n != 'function') throw Error(d(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (C)
    try {
      var Un = {};
      Object.defineProperty(Un, 'passive', {
        get: function () {
          Kl = !0;
        },
      }),
        window.addEventListener('test', Un, Un),
        window.removeEventListener('test', Un, Un);
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
  var An = !1,
    Pr = null,
    Er = !1,
    Yl = null,
    pc = {
      onError: function (e) {
        (An = !0), (Pr = e);
      },
    };
  function vc(e, t, n, r, l, o, i, u, s) {
    (An = !1), (Pr = null), dc.apply(pc, arguments);
  }
  function hc(e, t, n, r, l, o, i, u, s) {
    if ((vc.apply(this, arguments), An)) {
      if (An) {
        var v = Pr;
        (An = !1), (Pr = null);
      } else throw Error(d(198));
      Er || ((Er = !0), (Yl = v));
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
          if (o === n) return au(l), e;
          if (o === r) return au(l), t;
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
  function cu(e) {
    return (e = gc(e)), e !== null ? fu(e) : null;
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
  var du = N.unstable_scheduleCallback,
    pu = N.unstable_cancelCallback,
    mc = N.unstable_shouldYield,
    yc = N.unstable_requestPaint,
    he = N.unstable_now,
    wc = N.unstable_getCurrentPriorityLevel,
    Xl = N.unstable_ImmediatePriority,
    vu = N.unstable_UserBlockingPriority,
    Cr = N.unstable_NormalPriority,
    Sc = N.unstable_LowPriority,
    hu = N.unstable_IdlePriority,
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
  function jr(e, t) {
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
  function Ec(e, t) {
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
  function Cc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - rt(o),
        u = 1 << i,
        s = l[i];
      s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Ec(u, t))
        : s <= t && (e.expiredLanes |= u),
        (o &= ~u);
    }
  }
  function Gl(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function gu() {
    var e = Nr;
    return (Nr <<= 1), (Nr & 4194240) === 0 && (Nr = 64), e;
  }
  function Jl(e) {
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
  function ql(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ne = 0;
  function mu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var yu,
    Zl,
    wu,
    Su,
    xu,
    bl = !1,
    Rr = [],
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
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
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
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Wl = r), n.target.dispatchEvent(r), (Wl = null);
      } else return (t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Pu(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function jc() {
    (bl = !1),
      Ot !== null && Tr(Ot) && (Ot = null),
      Nt !== null && Tr(Nt) && (Nt = null),
      zt !== null && Tr(zt) && (zt = null),
      Wn.forEach(Pu),
      $n.forEach(Pu);
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bl || ((bl = !0), N.unstable_scheduleCallback(N.unstable_NormalPriority, jc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Rr.length) {
      Qn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
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
      ku(n), n.blockedOn === null && jt.shift();
  }
  var dn = de.ReactCurrentBatchConfig,
    Lr = !0;
  function Rc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      (ne = 1), eo(e, t, n, r);
    } finally {
      (ne = l), (dn.transition = o);
    }
  }
  function Tc(e, t, n, r) {
    var l = ne,
      o = dn.transition;
    dn.transition = null;
    try {
      (ne = 4), eo(e, t, n, r);
    } finally {
      (ne = l), (dn.transition = o);
    }
  }
  function eo(e, t, n, r) {
    if (Lr) {
      var l = to(e, t, n, r);
      if (l === null) wo(e, t, r, Mr, n), _u(e, r);
      else if (zc(l, e, t, n, r)) r.stopPropagation();
      else if ((_u(e, r), t & 4 && -1 < Nc.indexOf(e))) {
        for (; l !== null; ) {
          var o = lr(l);
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
  function Eu(e) {
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
          case Cr:
          case Sc:
            return 16;
          case hu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    no = null,
    Dr = null;
  function Cu() {
    if (Dr) return Dr;
    var e,
      t = no,
      n = t.length,
      r,
      l = 'value' in Rt ? Rt.value : Rt.textContent,
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
          ? Fr
          : Ou),
        (this.isPropagationStopped = Ou),
        this
      );
    }
    return (
      I(t.prototype, {
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
    ro = He(pn),
    Yn = I({}, pn, { view: 0, detail: 0 }),
    Lc = He(Yn),
    lo,
    oo,
    Xn,
    Ur = I({}, Yn, {
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
                ? ((lo = e.screenX - Xn.screenX), (oo = e.screenY - Xn.screenY))
                : (oo = lo = 0),
              (Xn = e)),
            lo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : oo;
      },
    }),
    Nu = He(Ur),
    Mc = I({}, Ur, { dataTransfer: 0 }),
    Dc = He(Mc),
    Ic = I({}, Yn, { relatedTarget: 0 }),
    io = He(Ic),
    Fc = I({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = He(Fc),
    Ac = I({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bc = He(Ac),
    Vc = I({}, pn, { data: 0 }),
    zu = He(Vc),
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
  var Kc = I({}, Yn, {
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
    Yc = He(Kc),
    Xc = I({}, Ur, {
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
    ju = He(Xc),
    Gc = I({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Jc = He(Gc),
    qc = I({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zc = He(qc),
    bc = I({}, Ur, {
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
    so = C && 'CompositionEvent' in window,
    Gn = null;
  C && 'documentMode' in document && (Gn = document.documentMode);
  var nf = C && 'TextEvent' in window && !Gn,
    Ru = C && (!so || (Gn && 8 < Gn && 11 >= Gn)),
    Tu = ' ',
    Lu = !1;
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
        return t.which !== 32 ? null : ((Lu = !0), Tu);
      case 'textInput':
        return (e = t.data), e === Tu && Lu ? null : e;
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (vn)
      return e === 'compositionend' || (!so && Mu(e, t))
        ? ((e = Cu()), (Dr = no = Rt = null), (vn = !1), e)
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
        return Ru && t.locale !== 'ko' ? null : t.data;
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
  var Jn = null,
    qn = null;
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
  if (C) {
    var ao;
    if (C) {
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
    Jn && (Jn.detachEvent('onpropertychange', Vu), (qn = Jn = null));
  }
  function Vu(e) {
    if (e.propertyName === 'value' && Ar(qn)) {
      var t = [];
      Fu(t, qn, e, $l(e)), uu(uf, t);
    }
  }
  function af(e, t, n) {
    e === 'focusin'
      ? (Bu(), (Jn = t), (qn = n), Jn.attachEvent('onpropertychange', Vu))
      : e === 'focusout' && Bu();
  }
  function cf(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ar(qn);
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
  function Zn(e, t) {
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
  var hf = C && 'documentMode' in document && 11 >= document.documentMode,
    hn = null,
    po = null,
    bn = null,
    vo = !1;
  function Ku(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo ||
      hn == null ||
      hn !== _r(r) ||
      ((r = hn),
      'selectionStart' in r && fo(r)
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
        (r = $r(po, 'onSelect')),
        0 < r.length &&
          ((t = new ro('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
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
  var gn = {
      animationend: Br('Animation', 'AnimationEnd'),
      animationiteration: Br('Animation', 'AnimationIteration'),
      animationstart: Br('Animation', 'AnimationStart'),
      transitionend: Br('Transition', 'TransitionEnd'),
    },
    ho = {},
    Yu = {};
  C &&
    ((Yu = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    'TransitionEvent' in window || delete gn.transitionend.transition);
  function Vr(e) {
    if (ho[e]) return ho[e];
    if (!gn[e]) return e;
    var t = gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Yu) return (ho[e] = t[n]);
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
  function Tt(e, t) {
    Zu.set(e, t), M(t, [e]);
  }
  for (var go = 0; go < bu.length; go++) {
    var mo = bu[go],
      gf = mo.toLowerCase(),
      mf = mo[0].toUpperCase() + mo.slice(1);
    Tt(gf, 'on' + mf);
  }
  Tt(Xu, 'onAnimationEnd'),
    Tt(Gu, 'onAnimationIteration'),
    Tt(Ju, 'onAnimationStart'),
    Tt('dblclick', 'onDoubleClick'),
    Tt('focusin', 'onFocus'),
    Tt('focusout', 'onBlur'),
    Tt(qu, 'onTransitionEnd'),
    V('onMouseEnter', ['mouseout', 'mouseover']),
    V('onMouseLeave', ['mouseout', 'mouseover']),
    V('onPointerEnter', ['pointerout', 'pointerover']),
    V('onPointerLeave', ['pointerout', 'pointerover']),
    M('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    M(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    M('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    M('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    M(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    M(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var er =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(er));
  function es(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), hc(r, t, void 0, e), (e.currentTarget = null);
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
    if (Er) throw ((e = Yl), (Er = !1), (Yl = null), e);
  }
  function ie(e, t) {
    var n = t[Eo];
    n === void 0 && (n = t[Eo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ns(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), ns(n, e, r, t);
  }
  var Wr = '_reactListening' + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Wr]) {
      (e[Wr] = !0),
        $.forEach(function (n) {
          n !== 'selectionchange' && (yf.has(n) || yo(n, !1, e), yo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || ((t[Wr] = !0), yo('selectionchange', !1, t));
    }
  }
  function ns(e, t, n, r) {
    switch (Eu(t)) {
      case 1:
        var l = Rc;
        break;
      case 4:
        l = Tc;
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
          var T = ro,
            F = e;
          switch (e) {
            case 'keypress':
              if (Ir(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              T = Yc;
              break;
            case 'focusin':
              (F = 'focus'), (T = io);
              break;
            case 'focusout':
              (F = 'blur'), (T = io);
              break;
            case 'beforeblur':
            case 'afterblur':
              T = io;
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
              T = Nu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              T = Dc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              T = Jc;
              break;
            case Xu:
            case Gu:
            case Ju:
              T = Uc;
              break;
            case qu:
              T = Zc;
              break;
            case 'scroll':
              T = Lc;
              break;
            case 'wheel':
              T = ef;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              T = Bc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              T = ju;
          }
          var U = (t & 4) !== 0,
            ge = !U && e === 'scroll',
            f = U ? (y !== null ? y + 'Capture' : null) : y;
          U = [];
          for (var a = v, p; a !== null; ) {
            p = a;
            var P = p.stateNode;
            if (
              (p.tag === 5 &&
                P !== null &&
                ((p = P), f !== null && ((P = Fn(a, f)), P != null && U.push(nr(a, P, p)))),
              ge)
            )
              break;
            a = a.return;
          }
          0 < U.length && ((y = new T(y, F, null, n, S)), _.push({ event: y, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (T = e === 'mouseout' || e === 'pointerout'),
            y && n !== Wl && (F = n.relatedTarget || n.fromElement) && (Xt(F) || F[yt]))
          )
            break e;
          if (
            (T || y) &&
            ((y =
              S.window === S
                ? S
                : (y = S.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            T
              ? ((F = n.relatedTarget || n.toElement),
                (T = v),
                (F = F ? Xt(F) : null),
                F !== null &&
                  ((ge = Yt(F)), F !== ge || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((T = null), (F = v)),
            T !== F)
          ) {
            if (
              ((U = Nu),
              (P = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((U = ju), (P = 'onPointerLeave'), (f = 'onPointerEnter'), (a = 'pointer')),
              (ge = T == null ? y : wn(T)),
              (p = F == null ? y : wn(F)),
              (y = new U(P, a + 'leave', T, n, S)),
              (y.target = ge),
              (y.relatedTarget = p),
              (P = null),
              Xt(S) === v &&
                ((U = new U(f, a + 'enter', F, n, S)),
                (U.target = p),
                (U.relatedTarget = ge),
                (P = U)),
              (ge = P),
              T && F)
            )
              t: {
                for (U = T, f = F, a = 0, p = U; p; p = mn(p)) a++;
                for (p = 0, P = f; P; P = mn(P)) p++;
                for (; 0 < a - p; ) (U = mn(U)), a--;
                for (; 0 < p - a; ) (f = mn(f)), p--;
                for (; a--; ) {
                  if (U === f || (f !== null && U === f.alternate)) break t;
                  (U = mn(U)), (f = mn(f));
                }
                U = null;
              }
            else U = null;
            T !== null && rs(_, y, T, U, !1), F !== null && ge !== null && rs(_, ge, F, U, !0);
          }
        }
        e: {
          if (
            ((y = v ? wn(v) : window),
            (T = y.nodeName && y.nodeName.toLowerCase()),
            T === 'select' || (T === 'input' && y.type === 'file'))
          )
            var A = sf;
          else if (Iu(y))
            if (Uu) A = df;
            else {
              A = cf;
              var H = af;
            }
          else
            (T = y.nodeName) &&
              T.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              (A = ff);
          if (A && (A = A(e, v))) {
            Fu(_, A, n, S);
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
            (Iu(H) || H.contentEditable === 'true') && ((hn = H), (po = v), (bn = null));
            break;
          case 'focusout':
            bn = po = hn = null;
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
            if (hf) break;
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
          (Ru &&
            n.locale !== 'ko' &&
            (vn || Y !== 'onCompositionStart'
              ? Y === 'onCompositionEnd' && vn && (Q = Cu())
              : ((Rt = S), (no = 'value' in Rt ? Rt.value : Rt.textContent), (vn = !0))),
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
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
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
          ? ((s = Fn(n, o)), s != null && i.unshift(nr(n, s, u)))
          : l || ((s = Fn(n, o)), s != null && i.push(nr(n, s, u)))),
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
    if (((t = ls(t)), ls(e) !== t && n)) throw Error(d(425));
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
    rr = '__reactProps$' + yn,
    yt = '__reactContainer$' + yn,
    Eo = '__reactEvents$' + yn,
    Pf = '__reactListeners$' + yn,
    Ef = '__reactHandles$' + yn;
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
  function Kr(e) {
    return e[rr] || null;
  }
  var Co = [],
    Sn = -1;
  function Mt(e) {
    return { current: e };
  }
  function ue(e) {
    0 > Sn || ((e.current = Co[Sn]), (Co[Sn] = null), Sn--);
  }
  function oe(e, t) {
    Sn++, (Co[Sn] = e.current), (e.current = t);
  }
  var Dt = {},
    Ee = Mt(Dt),
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
  function Yr() {
    ue(Ie), ue(Ee);
  }
  function us(e, t, n) {
    if (Ee.current !== Dt) throw Error(d(168));
    oe(Ee, t), oe(Ie, n);
  }
  function ss(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, le(e) || 'Unknown', l));
    return I({}, n, r);
  }
  function Xr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Gt = Ee.current),
      oe(Ee, e),
      oe(Ie, Ie.current),
      !0
    );
  }
  function as(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n
      ? ((e = ss(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ue(Ie),
        ue(Ee),
        oe(Ee, e))
      : ue(Ie),
      oe(Ie, n);
  }
  var wt = null,
    Gr = !1,
    Oo = !1;
  function cs(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function Cf(e) {
    (Gr = !0), cs(e);
  }
  function It() {
    if (!Oo && wt !== null) {
      Oo = !0;
      var e = 0,
        t = ne;
      try {
        var n = wt;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (wt = null), (Gr = !1);
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), du(Xl, It), l);
      } finally {
        (ne = t), (Oo = !1);
      }
    }
    return null;
  }
  var _n = [],
    kn = 0,
    Jr = null,
    qr = 0,
    Ge = [],
    Je = 0,
    Jt = null,
    St = 1,
    xt = '';
  function qt(e, t) {
    (_n[kn++] = qr), (_n[kn++] = Jr), (Jr = e), (qr = t);
  }
  function fs(e, t, n) {
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
  function No(e) {
    e.return !== null && (qt(e, 1), fs(e, 1, 0));
  }
  function zo(e) {
    for (; e === Jr; ) (Jr = _n[--kn]), (_n[kn] = null), (qr = _n[--kn]), (_n[kn] = null);
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
    ae = !1,
    ot = null;
  function ds(e, t) {
    var n = et(5, null, null, 0);
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
  function jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ro(e) {
    if (ae) {
      var t = Ke;
      if (t) {
        var n = t;
        if (!ps(e, t)) {
          if (jo(e)) throw Error(d(418));
          t = Lt(n.nextSibling);
          var r = Qe;
          t && ps(e, t) ? ds(r, n) : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Qe = e));
        }
      } else {
        if (jo(e)) throw Error(d(418));
        (e.flags = (e.flags & -4097) | 2), (ae = !1), (Qe = e);
      }
    }
  }
  function vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qe = e;
  }
  function Zr(e) {
    if (e !== Qe) return !1;
    if (!ae) return vs(e), (ae = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !_o(e.type, e.memoizedProps))),
      t && (t = Ke))
    ) {
      if (jo(e)) throw (hs(), Error(d(418)));
      for (; t; ) ds(e, t), (t = Lt(t.nextSibling));
    }
    if ((vs(e), e.tag === 13)) {
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
  function hs() {
    for (var e = Ke; e; ) e = Lt(e.nextSibling);
  }
  function Pn() {
    (Ke = Qe = null), (ae = !1);
  }
  function To(e) {
    ot === null ? (ot = [e]) : ot.push(e);
  }
  var Of = de.ReactCurrentBatchConfig;
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
  function br(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        d(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      ))
    );
  }
  function gs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ms(e) {
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
    function u(f, a, p, P) {
      return a === null || a.tag !== 6
        ? ((a = ki(p, f.mode, P)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function s(f, a, p, P) {
      var A = p.type;
      return A === Me
        ? S(f, a, p.props.children, P, p.key)
        : a !== null &&
            (a.elementType === A ||
              (typeof A == 'object' && A !== null && A.$$typeof === De && gs(A) === a.type))
          ? ((P = l(a, p.props)), (P.ref = or(f, a, p)), (P.return = f), P)
          : ((P = kl(p.type, p.key, p.props, null, f.mode, P)),
            (P.ref = or(f, a, p)),
            (P.return = f),
            P);
    }
    function v(f, a, p, P) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = Pi(p, f.mode, P)), (a.return = f), a)
        : ((a = l(a, p.children || [])), (a.return = f), a);
    }
    function S(f, a, p, P, A) {
      return a === null || a.tag !== 7
        ? ((a = on(p, f.mode, P, A)), (a.return = f), a)
        : ((a = l(a, p)), (a.return = f), a);
    }
    function _(f, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = ki('' + a, f.mode, p)), (a.return = f), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case tt:
            return (
              (p = kl(a.type, a.key, a.props, null, f.mode, p)),
              (p.ref = or(f, null, a)),
              (p.return = f),
              p
            );
          case je:
            return (a = Pi(a, f.mode, p)), (a.return = f), a;
          case De:
            var P = a._init;
            return _(f, P(a._payload), p);
        }
        if (Mn(a) || K(a)) return (a = on(a, f.mode, p, null)), (a.return = f), a;
        br(f, a);
      }
      return null;
    }
    function y(f, a, p, P) {
      var A = a !== null ? a.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return A !== null ? null : u(f, a, '' + p, P);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case tt:
            return p.key === A ? s(f, a, p, P) : null;
          case je:
            return p.key === A ? v(f, a, p, P) : null;
          case De:
            return (A = p._init), y(f, a, A(p._payload), P);
        }
        if (Mn(p) || K(p)) return A !== null ? null : S(f, a, p, P, null);
        br(f, p);
      }
      return null;
    }
    function T(f, a, p, P, A) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number')
        return (f = f.get(p) || null), u(a, f, '' + P, A);
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case tt:
            return (f = f.get(P.key === null ? p : P.key) || null), s(a, f, P, A);
          case je:
            return (f = f.get(P.key === null ? p : P.key) || null), v(a, f, P, A);
          case De:
            var H = P._init;
            return T(f, a, p, H(P._payload), A);
        }
        if (Mn(P) || K(P)) return (f = f.get(p) || null), S(a, f, P, A, null);
        br(a, P);
      }
      return null;
    }
    function F(f, a, p, P) {
      for (var A = null, H = null, Q = a, Y = (a = 0), _e = null; Q !== null && Y < p.length; Y++) {
        Q.index > Y ? ((_e = Q), (Q = null)) : (_e = Q.sibling);
        var ee = y(f, Q, p[Y], P);
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
      if (Y === p.length) return n(f, Q), ae && qt(f, Y), A;
      if (Q === null) {
        for (; Y < p.length; Y++)
          (Q = _(f, p[Y], P)),
            Q !== null && ((a = o(Q, a, Y)), H === null ? (A = Q) : (H.sibling = Q), (H = Q));
        return ae && qt(f, Y), A;
      }
      for (Q = r(f, Q); Y < p.length; Y++)
        (_e = T(Q, f, Y, p[Y], P)),
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
        ae && qt(f, Y),
        A
      );
    }
    function U(f, a, p, P) {
      var A = K(p);
      if (typeof A != 'function') throw Error(d(150));
      if (((p = A.call(p)), p == null)) throw Error(d(151));
      for (
        var H = (A = null), Q = a, Y = (a = 0), _e = null, ee = p.next();
        Q !== null && !ee.done;
        Y++, ee = p.next()
      ) {
        Q.index > Y ? ((_e = Q), (Q = null)) : (_e = Q.sibling);
        var Qt = y(f, Q, ee.value, P);
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
      if (ee.done) return n(f, Q), ae && qt(f, Y), A;
      if (Q === null) {
        for (; !ee.done; Y++, ee = p.next())
          (ee = _(f, ee.value, P)),
            ee !== null && ((a = o(ee, a, Y)), H === null ? (A = ee) : (H.sibling = ee), (H = ee));
        return ae && qt(f, Y), A;
      }
      for (Q = r(f, Q); !ee.done; Y++, ee = p.next())
        (ee = T(Q, f, Y, ee.value, P)),
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
        ae && qt(f, Y),
        A
      );
    }
    function ge(f, a, p, P) {
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
                    (typeof A == 'object' && A !== null && A.$$typeof === De && gs(A) === H.type)
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
                ? ((a = on(p.props.children, f.mode, P, p.key)), (a.return = f), (f = a))
                : ((P = kl(p.type, p.key, p.props, null, f.mode, P)),
                  (P.ref = or(f, a, p)),
                  (P.return = f),
                  (f = P));
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
              (a = Pi(p, f.mode, P)), (a.return = f), (f = a);
            }
            return i(f);
          case De:
            return (H = p._init), ge(f, a, H(p._payload), P);
        }
        if (Mn(p)) return F(f, a, p, P);
        if (K(p)) return U(f, a, p, P);
        br(f, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a))
            : (n(f, a), (a = ki(p, f.mode, P)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return ge;
  }
  var En = ms(!0),
    ys = ms(!1),
    el = Mt(null),
    tl = null,
    Cn = null,
    Lo = null;
  function Mo() {
    Lo = Cn = tl = null;
  }
  function Do(e) {
    var t = el.current;
    ue(el), (e._currentValue = t);
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
      (Lo = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ue = !0), (e.firstContext = null));
  }
  function qe(e) {
    var t = e._currentValue;
    if (Lo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (tl === null) throw Error(d(308));
        (Cn = e), (tl.dependencies = { lanes: 0, firstContext: e });
      } else Cn = Cn.next = e;
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
    if (((r = r.shared), (q & 2) !== 0)) {
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
          T = u.eventTime;
        if ((r & y) === y) {
          S !== null &&
            (S = S.next =
              {
                eventTime: T,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var F = e,
              U = u;
            switch (((y = t), (T = n), U.tag)) {
              case 1:
                if (((F = U.payload), typeof F == 'function')) {
                  _ = F.call(T, _, y);
                  break e;
                }
                _ = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = U.payload), (y = typeof F == 'function' ? F.call(T, _, y) : F), y == null)
                )
                  break e;
                _ = I({}, _, y);
                break e;
              case 2:
                Ft = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          (T = {
            eventTime: T,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            S === null ? ((v = S = T), (s = _)) : (S = S.next = T),
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
  function Ao(e, t) {
    switch ((oe(sr, t), oe(ur, e), oe(vt, ir), (e = t.nodeType), e)) {
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
    ue(vt), oe(vt, t);
  }
  function Nn() {
    ue(vt), ue(ur), ue(sr);
  }
  function ks(e) {
    bt(sr.current);
    var t = bt(vt.current),
      n = Al(t, e.type);
    t !== n && (oe(ur, e), oe(vt, n));
  }
  function Bo(e) {
    ur.current === e && (ue(vt), ue(ur));
  }
  var ce = Mt(0);
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
  var ol = de.ReactCurrentDispatcher,
    $o = de.ReactCurrentBatchConfig,
    en = 0,
    fe = null,
    ye = null,
    Se = null,
    il = !1,
    ar = !1,
    cr = 0,
    Nf = 0;
  function Ce() {
    throw Error(d(321));
  }
  function Ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Qo(e, t, n, r, l, o) {
    if (
      ((en = o),
      (fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? Tf : Lf),
      (e = n(r, l)),
      ar)
    ) {
      o = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= o)) throw Error(d(301));
        (o += 1), (Se = ye = null), (t.updateQueue = null), (ol.current = Mf), (e = n(r, l));
      } while (ar);
    }
    if (
      ((ol.current = al),
      (t = ye !== null && ye.next !== null),
      (en = 0),
      (Se = ye = fe = null),
      (il = !1),
      t)
    )
      throw Error(d(300));
    return e;
  }
  function Ko() {
    var e = cr !== 0;
    return (cr = 0), e;
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e), Se;
  }
  function Ze() {
    if (ye === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ye.next;
    var t = Se === null ? fe.memoizedState : Se.next;
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
        Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e);
    }
    return Se;
  }
  function fr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Yo(e) {
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
          var _ = {
            lane: S,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          };
          s === null ? ((u = s = _), (i = r)) : (s = s.next = _), (fe.lanes |= S), (tn |= S);
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
      do (o = l.lane), (fe.lanes |= o), (tn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xo(e) {
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
  function Ps() {}
  function Es(e, t) {
    var n = fe,
      r = Ze(),
      l = t(),
      o = !lt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ue = !0)),
      (r = r.queue),
      Go(Ns.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, Os.bind(null, n, r, l, t), void 0, null), xe === null))
        throw Error(d(349));
      (en & 30) !== 0 || Cs(n, t, l);
    }
    return l;
  }
  function Cs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.stores = [e]))
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
  function Rs(e) {
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
      (e = e.dispatch = Rf.bind(null, fe, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ts() {
    return Ze().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = ht();
    (fe.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function sl(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
      var i = ye.memoizedState;
      if (((o = i.destroy), r !== null && Ho(r, i.deps))) {
        l.memoizedState = dr(t, n, o, r);
        return;
      }
    }
    (fe.flags |= e), (l.memoizedState = dr(1 | t, n, o, r));
  }
  function Ls(e, t) {
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
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function As(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Bs(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n))
      : (lt(n, t) || ((n = gu()), (fe.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function zf(e, t) {
    var n = ne;
    (ne = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $o.transition;
    $o.transition = {};
    try {
      e(!1), t();
    } finally {
      (ne = n), ($o.transition = r);
    }
  }
  function Vs() {
    return Ze().memoizedState;
  }
  function jf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ws(e)))
      $s(t, n);
    else if (((n = ws(e, t, n, r)), n !== null)) {
      var l = Te();
      at(n, e, r, l), Hs(n, t, r);
    }
  }
  function Rf(e, t, n) {
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
      (n = ws(e, t, l, r)), n !== null && ((l = Te()), at(n, e, r, l), Hs(n, t, r));
    }
  }
  function Ws(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
  }
  function $s(e, t) {
    ar = il = !0;
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
      readContext: qe,
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
    Tf = {
      readContext: qe,
      useCallback: function (e, t) {
        return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: qe,
      useEffect: Ls,
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
          (e = e.dispatch = jf.bind(null, fe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Rs,
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Rs(!1),
          t = e[0];
        return (e = zf.bind(null, e[1])), (ht().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = fe,
          l = ht();
        if (ae) {
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
          Ls(Ns.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          dr(9, Os.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = xe.identifierPrefix;
        if (ae) {
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
      useCallback: Us,
      useContext: qe,
      useEffect: Go,
      useImperativeHandle: Fs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: As,
      useReducer: Yo,
      useRef: Ts,
      useState: function () {
        return Yo(fr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = Ze();
        return Bs(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: Ps,
      useSyncExternalStore: Es,
      useId: Vs,
      unstable_isNewReconciler: !1,
    },
    Mf = {
      readContext: qe,
      useCallback: Us,
      useContext: qe,
      useEffect: Go,
      useImperativeHandle: Fs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: As,
      useReducer: Xo,
      useRef: Ts,
      useState: function () {
        return Xo(fr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = Ze();
        return ye === null ? (t.memoizedState = e) : Bs(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Xo(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: Ps,
      useSyncExternalStore: Es,
      useId: Vs,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      (t = I({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : I({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var cl = {
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
        t !== null && (at(t, e, l, r), nl(t, e, l));
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
        t !== null && (at(t, e, l, r), nl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Te(),
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
          ? !Zn(n, r) || !Zn(l, o)
          : !0
    );
  }
  function Ks(e, t, n) {
    var r = !1,
      l = Dt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = qe(o))
        : ((l = Fe(t) ? Gt : Ee.current),
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
      ? (l.context = qe(o))
      : ((o = Fe(t) ? Gt : Ee.current), (l.context = xn(e, o))),
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
        ml || ((ml = !0), (hi = r)), ei(e, t);
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
  var If = de.ReactCurrentOwner,
    Ue = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? ys(t, null, n, r) : En(t, e.child, n, r);
  }
  function bs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = Qo(e, t, n, r, o, l)),
      (n = Ko()),
      e !== null && !Ue
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ae && n && No(t), (t.flags |= 1), Re(e, t, r, l), t.child)
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
      if (((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref))
        return Pt(e, t, l);
    }
    return (t.flags |= 1), (e = Ht(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function ta(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zn(o, r) && e.ref === t.ref)
        if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ue = !0);
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
          oe(Rn, Ye),
          (Ye |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            oe(Rn, Ye),
            (Ye |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          oe(Rn, Ye),
          (Ye |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        oe(Rn, Ye),
        (Ye |= r);
    return Re(e, t, l, n), t.child;
  }
  function ra(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ti(e, t, n, r, l) {
    var o = Fe(n) ? Gt : Ee.current;
    return (
      (o = xn(t, o)),
      On(t, l),
      (n = Qo(e, t, n, r, o, l)),
      (r = Ko()),
      e !== null && !Ue
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Pt(e, t, l))
        : (ae && r && No(t), (t.flags |= 1), Re(e, t, n, l), t.child)
    );
  }
  function la(e, t, n, r, l) {
    if (Fe(n)) {
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
        ? (v = qe(v))
        : ((v = Fe(n) ? Gt : Ee.current), (v = xn(t, v)));
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
        u !== r || y !== s || Ie.current || Ft
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
          ? (s = qe(s))
          : ((s = Fe(n) ? Gt : Ee.current), (s = xn(t, s)));
      var T = n.getDerivedStateFromProps;
      (S = typeof T == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== _ || y !== s) && Ys(t, i, r, s)),
        (Ft = !1),
        (y = t.memoizedState),
        (i.state = y),
        rl(t, r, i, l);
      var F = t.memoizedState;
      u !== _ || y !== F || Ie.current || Ft
        ? (typeof T == 'function' && (qo(t, n, T, r), (F = t.memoizedState)),
          (v = Ft || Qs(t, n, v, r, y, F, s) || !1)
            ? (S ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, F, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, F, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (i.props = r),
          (i.state = F),
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
        ? ((t.child = En(t, e.child, null, o)), (t.child = En(t, null, u, o)))
        : Re(e, t, u, o),
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
    return Pn(), To(l), (t.flags |= 256), Re(e, t, n, r), t.child;
  }
  var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ua(e, t, n) {
    var r = t.pendingProps,
      l = ce.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      oe(ce, l & 1),
      e === null)
    )
      return (
        Ro(t),
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
      r !== null && To(r),
      En(t, e.child, null, n),
      (e = oi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = bo(Error(d(422)))), fl(e, t, i, r))
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
            (t.mode & 1) !== 0 && En(t, e.child, null, i),
            (t.child.memoizedState = li(i)),
            (t.memoizedState = ri),
            o);
    if ((t.mode & 1) === 0) return fl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (r = u), (o = Error(d(419))), (r = bo(o, r, void 0)), fl(e, t, i, r);
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
      return xi(), (r = bo(Error(d(421)))), fl(e, t, i, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Jf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Ke = Lt(l.nextSibling)),
        (Qe = t),
        (ae = !0),
        (ot = null),
        e !== null &&
          ((Ge[Je++] = St),
          (Ge[Je++] = xt),
          (Ge[Je++] = Jt),
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
    if ((Re(e, t, r.children, n), (r = ce.current), (r & 2) !== 0))
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
    if ((oe(ce, r), (t.mode & 1) === 0)) t.memoizedState = null;
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
        oa(t), Pn();
        break;
      case 5:
        ks(t);
        break;
      case 1:
        Fe(t.type) && Xr(t);
        break;
      case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        oe(el, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (oe(ce, ce.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ua(e, t, n)
              : (oe(ce, ce.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
        oe(ce, ce.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return aa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          oe(ce, ce.current),
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
            (l = I({}, l, { value: void 0 })), (r = I({}, r, { value: void 0 })), (o = []);
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
                (B.hasOwnProperty(v) ? o || (o = []) : (o = o || []).push(v, null));
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
                    (B.hasOwnProperty(v)
                      ? (s != null && v === 'onScroll' && ie('scroll', e), o || u === s || (o = []))
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
  function pr(e, t) {
    if (!ae)
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
        return Oe(t), null;
      case 1:
        return Fe(t.type) && Yr(), Oe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Nn(),
          ue(Ie),
          ue(Ee),
          Wo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ot !== null && (yi(ot), (ot = null)))),
          ui(e, t),
          Oe(t),
          null
        );
      case 5:
        Bo(t);
        var l = bt(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          fa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Oe(t), null;
          }
          if (((e = bt(vt.current)), Zr(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                ie('cancel', r), ie('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < er.length; l++) ie(er[l], r);
                break;
              case 'source':
                ie('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ie('error', r), ie('load', r);
                break;
              case 'details':
                ie('toggle', r);
                break;
              case 'input':
                Ki(r, o), ie('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), ie('invalid', r);
                break;
              case 'textarea':
                Gi(r, o), ie('invalid', r);
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
                  : B.hasOwnProperty(i) && u != null && i === 'onScroll' && ie('scroll', r);
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
              (e[rr] = r),
              ca(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = Vl(n, r)), n)) {
                case 'dialog':
                  ie('cancel', e), ie('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  ie('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < er.length; l++) ie(er[l], e);
                  l = r;
                  break;
                case 'source':
                  ie('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  ie('error', e), ie('load', e), (l = r);
                  break;
                case 'details':
                  ie('toggle', e), (l = r);
                  break;
                case 'input':
                  Ki(e, r), (l = Dl(e, r)), ie('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = I({}, r, { value: void 0 })),
                    ie('invalid', e);
                  break;
                case 'textarea':
                  Gi(e, r), (l = Ul(e, r)), ie('invalid', e);
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
                          ? (n !== 'textarea' || s !== '') && Dn(e, s)
                          : typeof s == 'number' && Dn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (B.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && ie('scroll', e)
                            : s != null && Le(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  xr(e), Xi(e, r, !1);
                  break;
                case 'textarea':
                  xr(e), qi(e);
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
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null) da(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(d(166));
          if (((n = bt(sr.current)), bt(vt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (o = r.nodeValue !== n) && ((e = Qe), e !== null))
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
        return Oe(t), null;
      case 13:
        if (
          (ue(ce),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ae && Ke !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            hs(), Pn(), (t.flags |= 98560), (o = !1);
          else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(d(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(d(317));
              o[pt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Oe(t), (o = !1);
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
                (e === null || (ce.current & 1) !== 0 ? we === 0 && (we = 3) : xi())),
            t.updateQueue !== null && (t.flags |= 4),
            Oe(t),
            null);
      case 4:
        return Nn(), ui(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Do(t.type._context), Oe(t), null;
      case 17:
        return Fe(t.type) && Yr(), Oe(t), null;
      case 19:
        if ((ue(ce), (o = t.memoizedState), o === null)) return Oe(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) pr(o, !1);
          else {
            if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ll(e)), i !== null)) {
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
                  return oe(ce, (ce.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              he() > Tn &&
              ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ae)
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
            (n = ce.current),
            oe(ce, r ? (n & 1) | 2 : n & 1),
            t)
          : (Oe(t), null);
      case 22:
      case 23:
        return (
          Si(),
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
    switch ((zo(t), t.tag)) {
      case 1:
        return (
          Fe(t.type) && Yr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          ue(Ie),
          ue(Ee),
          Wo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Bo(t), null;
      case 13:
        if ((ue(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(d(340));
          Pn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ue(ce), null;
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
    Ne = !1,
    Vf = typeof WeakSet == 'function' ? WeakSet : Set,
    D = null;
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
    if (((So = Lr), (e = Qu()), fo(e))) {
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
                var T;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (u = i + l),
                  _ !== o || (r !== 0 && _.nodeType !== 3) || (s = i + r),
                  _.nodeType === 3 && (i += _.nodeValue.length),
                  (T = _.firstChild) !== null;

              )
                (y = _), (_ = T);
              for (;;) {
                if (_ === e) break t;
                if (
                  (y === n && ++v === l && (u = i),
                  y === o && ++S === r && (s = i),
                  (T = _.nextSibling) !== null)
                )
                  break;
                (_ = y), (y = _.parentNode);
              }
              _ = T;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: e, selectionRange: n }, Lr = !1, D = t; D !== null; )
      if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (D = e);
      else
        for (; D !== null; ) {
          t = D;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var U = F.memoizedProps,
                      ge = F.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? U : it(t.type, U),
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
          } catch (P) {
            ve(t, t.return, P);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (D = e);
            break;
          }
          D = t.return;
        }
    return (F = pa), (pa = !1), F;
  }
  function vr(e, t, n) {
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
        t !== null && (delete t[pt], delete t[rr], delete t[Eo], delete t[Pf], delete t[Ef])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ha(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ga(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ha(e.return)) return null;
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
  var ke = null,
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
              e.nodeType === 8 ? Po(e.parentNode, n) : e.nodeType === 1 && Po(e, n),
              Kn(e))
            : Po(ke, n.stateNode));
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
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && si(n, t, i),
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
            ve(n, t, u);
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
          ma(o, i, l), (ke = null), (ut = !1);
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
        if ((st(t, e), gt(e), r & 4)) {
          try {
            vr(3, e, e.return), vl(3, e);
          } catch (U) {
            ve(e, e.return, U);
          }
          try {
            vr(5, e, e.return);
          } catch (U) {
            ve(e, e.return, U);
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
          } catch (U) {
            ve(e, e.return, U);
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
                      ? Dn(l, _)
                      : Le(l, S, _, v);
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
                  var T = o.value;
                  T != null
                    ? an(l, !!o.multiple, T, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? an(l, !!o.multiple, o.defaultValue, !0)
                        : an(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[rr] = o;
            } catch (U) {
              ve(e, e.return, U);
            }
        }
        break;
      case 6:
        if ((st(t, e), gt(e), r & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (U) {
            ve(e, e.return, U);
          }
        }
        break;
      case 3:
        if ((st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (U) {
            ve(e, e.return, U);
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
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (vi = he())),
          r & 4 && ya(e);
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
            for (D = e, S = e.child; S !== null; ) {
              for (_ = D = S; D !== null; ) {
                switch (((y = D), (T = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, y, y.return);
                    break;
                  case 1:
                    jn(y, y.return);
                    var F = y.stateNode;
                    if (typeof F.componentWillUnmount == 'function') {
                      (r = y), (n = y.return);
                      try {
                        (t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount();
                      } catch (U) {
                        ve(r, n, U);
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
                T !== null ? ((T.return = y), (D = T)) : _a(_);
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
                } catch (U) {
                  ve(e, e.return, U);
                }
              }
            } else if (_.tag === 6) {
              if (S === null)
                try {
                  _.stateNode.nodeValue = v ? '' : _.memoizedProps;
                } catch (U) {
                  ve(e, e.return, U);
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
        st(t, e), gt(e), r & 4 && ya(e);
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
            if (ha(n)) {
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
            var o = ga(e);
            fi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ga(e);
            ci(e, u, i);
            break;
          default:
            throw Error(d(161));
        }
      } catch (s) {
        ve(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $f(e, t, n) {
    (D = e), Sa(e);
  }
  function Sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var l = D,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ne;
          u = pl;
          var v = Ne;
          if (((pl = i), (Ne = s) && !v))
            for (D = l; D !== null; )
              (i = D),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? ka(l)
                  : s !== null
                    ? ((s.return = i), (D = s))
                    : ka(l);
          for (; o !== null; ) (D = o), Sa(o), (o = o.sibling);
          (D = l), (pl = u), (Ne = v);
        }
        xa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (D = o)) : xa(e);
    }
  }
  function xa(e) {
    for (; D !== null; ) {
      var t = D;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ne || vl(5, t);
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
                throw Error(d(163));
            }
          Ne || (t.flags & 512 && ai(t));
        } catch (y) {
          ve(t, t.return, y);
        }
      }
      if (t === e) {
        D = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function _a(e) {
    for (; D !== null; ) {
      var t = D;
      if (t === e) {
        D = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function ka(e) {
    for (; D !== null; ) {
      var t = D;
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
        D = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (D = u);
        break;
      }
      D = t.return;
    }
  }
  var Hf = Math.ceil,
    hl = de.ReactCurrentDispatcher,
    di = de.ReactCurrentOwner,
    be = de.ReactCurrentBatchConfig,
    q = 0,
    xe = null,
    me = null,
    Pe = 0,
    Ye = 0,
    Rn = Mt(0),
    we = 0,
    hr = null,
    tn = 0,
    gl = 0,
    pi = 0,
    gr = null,
    Ae = null,
    vi = 0,
    Tn = 1 / 0,
    Et = null,
    ml = !1,
    hi = null,
    Bt = null,
    yl = !1,
    Vt = null,
    wl = 0,
    mr = 0,
    gi = null,
    Sl = -1,
    xl = 0;
  function Te() {
    return (q & 6) !== 0 ? he() : Sl !== -1 ? Sl : (Sl = he());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (q & 2) !== 0 && Pe !== 0
        ? Pe & -Pe
        : Of.transition !== null
          ? (xl === 0 && (xl = gu()), xl)
          : ((e = ne), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eu(e.type))), e);
  }
  function at(e, t, n, r) {
    if (50 < mr) throw ((mr = 0), (gi = null), Error(d(185)));
    Vn(e, n, r),
      ((q & 2) === 0 || e !== xe) &&
        (e === xe && ((q & 2) === 0 && (gl |= n), we === 4 && $t(e, Pe)),
        Be(e, r),
        n === 1 && q === 0 && (t.mode & 1) === 0 && ((Tn = he() + 500), Gr && It()));
  }
  function Be(e, t) {
    var n = e.callbackNode;
    Cc(e, t);
    var r = jr(e, e === xe ? Pe : 0);
    if (r === 0) n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && pu(n), t === 1))
        e.tag === 0 ? Cf(Ea.bind(null, e)) : cs(Ea.bind(null, e)),
          _f(function () {
            (q & 6) === 0 && It();
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
            n = Cr;
            break;
          case 536870912:
            n = hu;
            break;
          default:
            n = Cr;
        }
        n = La(n, Pa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Pa(e, t) {
    if (((Sl = -1), (xl = 0), (q & 6) !== 0)) throw Error(d(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = jr(e, e === xe ? Pe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = _l(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var o = Oa();
      (xe !== e || Pe !== t) && ((Et = null), (Tn = he() + 500), rn(e, t));
      do
        try {
          Yf();
          break;
        } catch (u) {
          Ca(e, u);
        }
      while (!0);
      Mo(), (hl.current = o), (q = l), me !== null ? (t = 0) : ((xe = null), (Pe = 0), (t = we));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Gl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = hr), rn(e, 0), $t(e, r), Be(e, he()), n);
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
          throw ((n = hr), rn(e, 0), $t(e, r), Be(e, he()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            ln(e, Ae, Et);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = vi + 500 - he()), 10 < t))) {
              if (jr(e, 0) !== 0) break;
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
              e.timeoutHandle = ko(ln.bind(null, e, Ae, Et), r);
              break;
            }
            ln(e, Ae, Et);
            break;
          case 5:
            ln(e, Ae, Et);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Be(e, he()), e.callbackNode === n ? Pa.bind(null, e) : null;
  }
  function mi(e, t) {
    var n = gr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = _l(e, t)),
      e !== 2 && ((t = Ae), (Ae = n), t !== null && yi(t)),
      e
    );
  }
  function yi(e) {
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
      t &= ~pi, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ea(e) {
    if ((q & 6) !== 0) throw Error(d(327));
    Ln();
    var t = jr(e, 0);
    if ((t & 1) === 0) return Be(e, he()), null;
    var n = _l(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = hr), rn(e, 0), $t(e, t), Be(e, he()), n);
    if (n === 6) throw Error(d(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Ae, Et),
      Be(e, he()),
      null
    );
  }
  function wi(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      (q = n), q === 0 && ((Tn = he() + 500), Gr && It());
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
  function Si() {
    (Ye = Rn.current), ue(Rn);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), xf(n)), me !== null))
      for (n = me.return; n !== null; ) {
        var r = n;
        switch ((zo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Yr();
            break;
          case 3:
            Nn(), ue(Ie), ue(Ee), Wo();
            break;
          case 5:
            Bo(r);
            break;
          case 4:
            Nn();
            break;
          case 13:
            ue(ce);
            break;
          case 19:
            ue(ce);
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
      ((xe = e),
      (me = e = Ht(e.current, null)),
      (Pe = Ye = t),
      (we = 0),
      (hr = null),
      (pi = gl = tn = 0),
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
        if ((Mo(), (ol.current = al), il)) {
          for (var r = fe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          il = !1;
        }
        if (
          ((en = 0),
          (Se = ye = fe = null),
          (ar = !1),
          (cr = 0),
          (di.current = null),
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
              _ = S.tag;
            if ((S.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var y = S.alternate;
              y
                ? ((S.updateQueue = y.updateQueue),
                  (S.memoizedState = y.memoizedState),
                  (S.lanes = y.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var T = qs(i);
            if (T !== null) {
              (T.flags &= -257), Zs(T, i, u, o, t), T.mode & 1 && Js(o, v, t), (t = T), (s = v);
              var F = t.updateQueue;
              if (F === null) {
                var U = new Set();
                U.add(s), (t.updateQueue = U);
              } else F.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Js(o, v, t), xi();
                break e;
              }
              s = Error(d(426));
            }
          } else if (ae && u.mode & 1) {
            var ge = qs(i);
            if (ge !== null) {
              (ge.flags & 65536) === 0 && (ge.flags |= 256), Zs(ge, i, u, o, t), To(zn(s, u));
              break e;
            }
          }
          (o = s = zn(s, u)), we !== 4 && (we = 2), gr === null ? (gr = [o]) : gr.push(o), (o = i);
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
                  p = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Bt === null || !Bt.has(p))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var P = Gs(o, u, t);
                  xs(o, P);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        za(n);
      } catch (A) {
        (t = A), me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oa() {
    var e = hl.current;
    return (hl.current = al), e === null ? al : e;
  }
  function xi() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
      xe === null || ((tn & 268435455) === 0 && (gl & 268435455) === 0) || $t(xe, Pe);
  }
  function _l(e, t) {
    var n = q;
    q |= 2;
    var r = Oa();
    (xe !== e || Pe !== t) && ((Et = null), rn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        Ca(e, l);
      }
    while (!0);
    if ((Mo(), (q = n), (hl.current = r), me !== null)) throw Error(d(261));
    return (xe = null), (Pe = 0), we;
  }
  function Kf() {
    for (; me !== null; ) Na(me);
  }
  function Yf() {
    for (; me !== null && !mc(); ) Na(me);
  }
  function Na(e) {
    var t = Ta(e.alternate, e, Ye);
    (e.memoizedProps = e.pendingProps), t === null ? za(e) : (me = t), (di.current = null);
  }
  function za(e) {
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
        yl ||
        ((yl = !0),
        La(Cr, function () {
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
        (di.current = null),
        Wf(e, n),
        wa(n, e),
        vf(xo),
        (Lr = !!So),
        (xo = So = null),
        (e.current = n),
        $f(n),
        yc(),
        (q = u),
        (ne = i),
        (be.transition = o);
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Vt = e), (wl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      xc(n.stateNode),
      Be(e, he()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ((ml = !1), (e = hi), (hi = null), e);
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Ln(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === gi ? mr++ : ((mr = 0), (gi = e))) : (mr = 0),
      It(),
      null
    );
  }
  function Ln() {
    if (Vt !== null) {
      var e = mu(wl),
        t = be.transition,
        n = ne;
      try {
        if (((be.transition = null), (ne = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (wl = 0), (q & 6) !== 0)) throw Error(d(331));
          var l = q;
          for (q |= 4, D = e.current; D !== null; ) {
            var o = D,
              i = o.child;
            if ((D.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var v = u[s];
                  for (D = v; D !== null; ) {
                    var S = D;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, S, o);
                    }
                    var _ = S.child;
                    if (_ !== null) (_.return = S), (D = _);
                    else
                      for (; D !== null; ) {
                        S = D;
                        var y = S.sibling,
                          T = S.return;
                        if ((va(S), S === v)) {
                          D = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = T), (D = y);
                          break;
                        }
                        D = T;
                      }
                  }
                }
                var F = o.alternate;
                if (F !== null) {
                  var U = F.child;
                  if (U !== null) {
                    F.child = null;
                    do {
                      var ge = U.sibling;
                      (U.sibling = null), (U = ge);
                    } while (U !== null);
                  }
                }
                D = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) (i.return = o), (D = i);
            else
              e: for (; D !== null; ) {
                if (((o = D), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (D = f);
                  break e;
                }
                D = o.return;
              }
          }
          var a = e.current;
          for (D = a; D !== null; ) {
            i = D;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null) (p.return = i), (D = p);
            else
              e: for (i = a; D !== null; ) {
                if (((u = D), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vl(9, u);
                    }
                  } catch (A) {
                    ve(u, u.return, A);
                  }
                if (u === i) {
                  D = null;
                  break e;
                }
                var P = u.sibling;
                if (P !== null) {
                  (P.return = u.return), (D = P);
                  break e;
                }
                D = u.return;
              }
          }
          if (((q = l), It(), dt && typeof dt.onPostCommitFiberRoot == 'function'))
            try {
              dt.onPostCommitFiberRoot(Or, e);
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
  function ja(e, t, n) {
    (t = zn(n, t)),
      (t = Xs(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Te()),
      e !== null && (Vn(e, 1, t), Be(e, t));
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
        (we === 4 || (we === 3 && (Pe & 130023424) === Pe && 500 > he() - vi)
          ? rn(e, 0)
          : (pi |= n)),
      Be(e, t);
  }
  function Ra(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Te();
    (e = _t(e, t)), e !== null && (Vn(e, t, n), Be(e, n));
  }
  function Jf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ra(e, n);
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
    r !== null && r.delete(t), Ra(e, n);
  }
  var Ta;
  Ta = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ie.current) Ue = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Ue = !1), Uf(e, t, n);
        Ue = (e.flags & 131072) !== 0;
      }
    else (Ue = !1), ae && (t.flags & 1048576) !== 0 && fs(t, qr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        dl(e, t), (e = t.pendingProps);
        var l = xn(t, Ee.current);
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
              Fe(r) ? ((o = !0), Xr(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Uo(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Zo(t, r, e, n),
              (t = ni(null, t, r, !0, o, n)))
            : ((t.tag = 0), ae && o && No(t), Re(null, t, l, n), (t = t.child)),
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
          throw Error(d(306, r, ''));
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
          if ((oa(t), e === null)) throw Error(d(387));
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
              (l = zn(Error(d(423)), t)), (t = ia(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = zn(Error(d(424)), t)), (t = ia(e, t, r, n, l));
              break e;
            } else
              for (
                Ke = Lt(t.stateNode.containerInfo.firstChild),
                  Qe = t,
                  ae = !0,
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
            Re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ks(t),
          e === null && Ro(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          _o(r, l) ? (i = null) : o !== null && _o(r, o) && (t.flags |= 32),
          ra(e, t),
          Re(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Ro(t), null;
      case 13:
        return ua(e, t, n);
      case 4:
        return (
          Ao(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Re(e, t, r, n),
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
            oe(el, r._currentValue),
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
                        Io(o.return, n, t),
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
          Fe(r) ? ((e = !0), Xr(t)) : (e = !1),
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
    throw Error(d(156, t.tag));
  };
  function La(e, t) {
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
  function et(e, t, n, r) {
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
    var i = 2;
    if (((r = e), typeof e == 'function')) _i(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Me:
          return on(n.children, l, o, t);
        case Xe:
          (i = 8), (l |= 8);
          break;
        case Ct:
          return (e = et(12, n, t, l | 2)), (e.elementType = Ct), (e.lanes = o), e;
        case We:
          return (e = et(13, n, t, l)), (e.elementType = We), (e.lanes = o), e;
        case nt:
          return (e = et(19, n, t, l)), (e.elementType = nt), (e.lanes = o), e;
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
  function Pl(e, t, n, r) {
    return (
      (e = et(22, e, r, t)),
      (e.elementType = pe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return (e = et(6, e, null, t)), (e.lanes = n), e;
  }
  function Pi(e, t, n) {
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
  function Ei(e, t, n, r, l, o, i, u, s) {
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
      Uo(o),
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
  function Ma(e) {
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
      if (Fe(n)) return ss(e, n, t);
    }
    return t;
  }
  function Da(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Ei(n, r, !0, e, l, o, i, u, s)),
      (e.context = Ma(null)),
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
  function El(e, t, n, r) {
    var l = t.current,
      o = Te(),
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
  function Cl(e) {
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
  function Ci(e, t) {
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
      if (t === null) throw Error(d(409));
      El(e, t, null, null);
    }),
    (Ol.prototype.unmount = Oi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nn(function () {
            El(null, e, null, null);
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
          var v = Cl(i);
          o.call(v);
        };
      }
      var i = Da(t, r, e, 0, null, !1, !1, '', Ua);
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
    var s = Ei(e, 0, !1, null, null, !1, !1, '', Ua);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        El(t, s, n, r);
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
          var s = Cl(i);
          u.call(s);
        };
      }
      El(t, i, e, l);
    } else i = rd(n, t, e, l, r);
    return Cl(i);
  }
  (yu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), Be(t, he()), (q & 6) === 0 && ((Tn = he() + 500), It()));
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
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Te();
          at(t, e, 134217728, n);
        }
        Ci(e, 134217728);
      }
    }),
    (wu = function (e) {
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
    (Su = function () {
      return ne;
    }),
    (xu = function (e, t) {
      var n = ne;
      try {
        return (ne = e), t();
      } finally {
        ne = n;
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
                if (!l) throw Error(d(90));
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
  var ld = { usingClientEntryPoint: !1, Events: [lr, wn, Kr, ru, lu, wi] },
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
      currentDispatcherRef: de.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = cu(e)), e === null ? null : e.stateNode;
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
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber)
      try {
        (Or = jl.inject(od)), (dt = jl);
      } catch {}
  }
  return (
    (Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld),
    (Ve.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ni(t)) throw Error(d(200));
      return td(e, t, null, n);
    }),
    (Ve.createRoot = function (e, t) {
      if (!Ni(e)) throw Error(d(299));
      var n = !1,
        r = '',
        l = Fa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ei(e, 1, !1, null, null, n, !1, r, l)),
        (e[yt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Oi(t)
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
      return (e = cu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ve.flushSync = function (e) {
      return nn(e);
    }),
    (Ve.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(d(200));
      return zl(null, e, t, !0, n);
    }),
    (Ve.hydrateRoot = function (e, t, n) {
      if (!Ni(e)) throw Error(d(405));
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
      return new Ol(t);
    }),
    (Ve.render = function (e, t, n) {
      if (!Nl(t)) throw Error(d(200));
      return zl(null, e, t, !1, n);
    }),
    (Ve.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(d(40));
      return e._reactRootContainer
        ? (nn(function () {
            zl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ve.unstable_batchedUpdates = wi),
    (Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(d(200));
      if (e == null || e._reactInternals === void 0) throw Error(d(38));
      return zl(e, t, n, !1, r);
    }),
    (Ve.version = '18.3.1-next-f1338f8080-20240426'),
    Ve
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
      } catch (N) {
        console.error(N);
      }
  }
  return g(), (Wi.exports = xd()), Wi.exports;
}
var ic;
function kd() {
  if (ic) return Rl;
  ic = 1;
  var g = _d();
  return (Rl.createRoot = g.createRoot), (Rl.hydrateRoot = g.hydrateRoot), Rl;
}
var Pd = kd();
const Ed = uc(Pd),
  Cd = (g, N = !1) => {
    const d = { currency: 'USD', maximumFractionDigits: 0, style: 'currency' };
    g >= 1e4 && ((d.notation = 'compact'), (d.maximumFractionDigits = 1));
    const $ = new Intl.NumberFormat('en-US', d).format(g);
    return N
      ? L.jsxs('span', {
          style: { whiteSpace: 'nowrap' },
          children: [
            $,
            L.jsx('span', {
              style: { color: '#CCCCCC', fontSize: '0.8em', marginLeft: '4px' },
              children: '/month',
            }),
          ],
        })
      : $;
  },
  Od = (g) => {
    if (g == null || g <= 0) return 'N/A';
    const N = g / 43560,
      d = N < 0.1 ? 3 : N < 10 ? 2 : 1;
    return `${N.toFixed(d)} acres`;
  },
  ac = ({ property: g }) => {
    if (!g) return;
    const N = g.address || {},
      d = g.listing || {},
      $ = g.agent || {},
      B = g.media || {},
      M = g.property || {},
      V = B.photos || [],
      C =
        d.status === 'For Rent' ||
        (M.propertyType && M.propertyType.toLowerCase().includes('rental')) ||
        M.propertyType === 'Residential Lease',
      x = d.livingArea || M.livingArea,
      E = d.bedrooms || M.bedrooms,
      O = d.bathrooms || M.bathrooms,
      h = M.lotSize,
      m = 'var(--color-bg-container, #fff)',
      k = 'var(--color-border-secondary, #eaeaea)',
      z = 'var(--color-text-2, #666)',
      j = 'var(--color-text-3, #999)',
      W = 'var(--color-primary, #0077ff)';
    return L.jsxs('div', {
      onMouseOut: (re) => {
        (re.currentTarget.style.transform = 'translateY(0)'),
          (re.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)');
      },
      onMouseOver: (re) => {
        (re.currentTarget.style.transform = 'translateY(-4px)'),
          (re.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)');
      },
      style: {
        backgroundColor: m,
        border: `1px solid ${k}`,
        borderRadius: '12px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      },
      children: [
        L.jsxs('div', {
          style: {
            backgroundColor: '#f0f2f5',
            paddingTop: '60%',
            position: 'relative',
            width: '100%',
          },
          children: [
            V && V.length > 0
              ? L.jsx('img', {
                  alt: `${N.full || 'Property'}`,
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
              : L.jsx('div', {
                  style: {
                    alignItems: 'center',
                    color: j,
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
              L.jsx('div', {
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
            L.jsx('div', {
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
              L.jsx('div', {
                style: {
                  bottom: '10px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '700',
                  left: '12px',
                  position: 'absolute',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                },
                children: Cd(d.price, C),
              }),
          ],
        }),
        L.jsxs('div', {
          style: { display: 'flex', flex: '1', flexDirection: 'column', padding: '12px' },
          children: [
            L.jsx('h3', {
              style: {
                color: 'var(--color-text-0, #1a1a1a)',
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 6px 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              children:
                N.full || `${N.street || ''}, ${N.city || ''}, ${N.state || ''} ${N.zipCode || ''}`,
            }),
            L.jsxs('div', {
              style: { display: 'flex', gap: '10px', marginBottom: '8px' },
              children: [
                E !== void 0 &&
                  L.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      L.jsx('span', { style: { color: z, fontSize: '13px' }, children: E }),
                      L.jsx('span', { style: { color: j, fontSize: '12px' }, children: 'beds' }),
                    ],
                  }),
                O !== void 0 &&
                  L.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      L.jsx('span', { style: { color: z, fontSize: '13px' }, children: O }),
                      L.jsx('span', { style: { color: j, fontSize: '12px' }, children: 'baths' }),
                    ],
                  }),
                x &&
                  L.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '4px' },
                    children: [
                      L.jsx('span', {
                        style: { color: z, fontSize: '13px' },
                        children: x.toLocaleString(),
                      }),
                      L.jsx('span', { style: { color: j, fontSize: '12px' }, children: 'sqft' }),
                    ],
                  }),
              ],
            }),
            L.jsx('div', {
              style: { flex: '1', marginBottom: '8px' },
              children: L.jsxs('div', {
                style: { display: 'flex', flexWrap: 'wrap', gap: '8px 16px' },
                children: [
                  h &&
                    h > 0 &&
                    L.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        L.jsx('span', { style: { color: z, fontSize: '12px' }, children: 'Lot:' }),
                        L.jsx('span', { style: { color: z, fontSize: '12px' }, children: Od(h) }),
                      ],
                    }),
                  M.yearBuilt &&
                    L.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        L.jsx('span', {
                          style: { color: z, fontSize: '12px' },
                          children: 'Built:',
                        }),
                        L.jsx('span', {
                          style: { color: z, fontSize: '12px' },
                          children: M.yearBuilt,
                        }),
                      ],
                    }),
                  d.daysOnMarket !== void 0 &&
                    L.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '4px' },
                      children: [
                        L.jsx('span', { style: { color: z, fontSize: '12px' }, children: 'DOM:' }),
                        L.jsxs('span', {
                          style: { color: z, fontSize: '12px' },
                          children: [d.daysOnMarket, ' days'],
                        }),
                      ],
                    }),
                  M.propertyType &&
                    L.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-tertiary, #f5f5f7)',
                        borderRadius: '4px',
                        color: z,
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: M.propertyType,
                    }),
                  M.pool &&
                    L.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '4px',
                        color: W,
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: 'Pool',
                    }),
                  M.waterfront &&
                    L.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '4px',
                        color: W,
                        fontSize: '11px',
                        padding: '2px 6px',
                      },
                      children: 'Waterfront',
                    }),
                ],
              }),
            }),
            d.url &&
              L.jsx('div', {
                style: { marginBottom: '8px' },
                children: L.jsxs('a', {
                  href: d.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  style: {
                    color: W,
                    fontSize: '12px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  },
                  children: [L.jsx('span', { children: '🔗' }), ' Original Listing'],
                }),
              }),
            $.name &&
              L.jsxs('div', {
                style: {
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-secondary, #f0f0f0)',
                  color: j,
                  display: 'flex',
                  fontSize: '11px',
                  overflow: 'hidden',
                  paddingTop: '8px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
                children: [
                  L.jsx('span', { style: { marginRight: '3px' }, children: '👤' }),
                  L.jsxs('span', {
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
    const N = Sr.useRef(null),
      [d, $] = Sr.useState({ isAtEnd: !1, isAtStart: !0 }),
      B = Sr.useCallback(() => {
        if (!N.current) return;
        const { scrollLeft: C, scrollWidth: x, clientWidth: E } = N.current,
          O = x > E,
          h = 1,
          m = !O || C <= h,
          k = !O || C + E >= x - h;
        $((z) => (z.isAtStart !== m || z.isAtEnd !== k ? { isAtEnd: k, isAtStart: m } : z));
      }, []);
    if (
      (Sr.useEffect(() => {
        if (!g || g.length === 0) {
          $({ isAtEnd: !0, isAtStart: !0 });
          return;
        }
        B();
        const C = N.current;
        if (C) {
          C.addEventListener('scroll', B, { passive: !0 });
          const x = new ResizeObserver(B);
          x.observe(C);
          const E = setTimeout(B, 150);
          return () => {
            C.removeEventListener('scroll', B), x.disconnect(), clearTimeout(E);
          };
        }
      }, [g, B]),
      !g || g.length === 0)
    )
      return null;
    const M = () => {
        N.current && N.current.scrollBy({ behavior: 'smooth', left: -500 });
      },
      V = () => {
        N.current && N.current.scrollBy({ behavior: 'smooth', left: 500 });
      };
    return L.jsxs('div', {
      style: { position: 'relative', width: '100%' },
      children: [
        !d.isAtStart &&
          L.jsx('div', {
            onClick: M,
            style: {
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'var(--color-arrow-bg, rgba(255, 255, 255, 0.5))',
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
              opacity: 0.7,
              transition: 'opacity 0.2s ease',
            },
            onMouseOver: (C) => {
              C.currentTarget.style.opacity = '1';
            },
            onMouseOut: (C) => {
              C.currentTarget.style.opacity = '0.7';
            },
            children: L.jsx('span', { style: { fontSize: '18px' }, children: '←' }),
          }),
        !d.isAtEnd &&
          L.jsx('div', {
            onClick: V,
            style: {
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'var(--color-arrow-bg, rgba(255, 255, 255, 0.5))',
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
              opacity: 0.7,
              transition: 'opacity 0.2s ease',
            },
            onMouseOver: (C) => {
              C.currentTarget.style.opacity = '1';
            },
            onMouseOut: (C) => {
              C.currentTarget.style.opacity = '0.7';
            },
            children: L.jsx('span', { style: { fontSize: '18px' }, children: '→' }),
          }),
        L.jsx('div', {
          ref: N,
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
          children: L.jsx('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              gap: '14px',
              minWidth: 'min-content',
              paddingLeft: '0',
              paddingRight: '24px',
            },
            children: g.map((C, x) =>
              L.jsx(
                'div',
                { style: { flexShrink: 0, width: '240px' }, children: L.jsx(ac, { property: C }) },
                x,
              ),
            ),
          }),
        }),
      ],
    });
  },
  zd = () => {
    const [g, N] = Tl.useState(),
      { data: d, loading: $ } = tc.useWatchPluginMessage();
    return (
      Tl.useEffect(() => {
        tc.lobeChat
          .getPluginMessage()
          .then((B) => {
            console.log('Plugin received data:', B), N(B);
          })
          .catch((B) => {
            console.error('Error getting plugin message:', B);
          });
      }, []),
      Tl.useEffect(() => {
        d && (console.log('Received watch data:', d), N(d));
      }, [d]),
      $
        ? L.jsxs('div', {
            style: {
              color: '#666',
              fontFamily:
                'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              padding: '20px',
              textAlign: 'center',
            },
            children: [
              L.jsx('div', {
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
              L.jsx('style', {
                children: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
              }),
              L.jsx('p', { children: 'Loading property listings...' }),
            ],
          })
        : L.jsxs('div', {
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
              L.jsx('style', {
                children: `
          :root {
            --color-arrow-bg: rgba(255, 255, 255, 0.5);
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --color-arrow-bg: rgba(50, 50, 50, 0.5);
            }
          }
        `,
              }),
              g != null && g.data
                ? L.jsxs(L.Fragment, {
                    children: [
                      L.jsx('h2', {
                        style: {
                          color: 'var(--color-text-0, #1a1a1a)',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '12px',
                          marginTop: '0',
                          paddingLeft: '4px',
                        },
                        children: 'Property Results',
                      }),
                      Array.isArray(g.data)
                        ? L.jsx(Nd, { properties: g.data })
                        : L.jsx('div', {
                            style: { margin: '0 auto', maxWidth: '400px' },
                            children: L.jsx(ac, { property: g.data }),
                          }),
                    ],
                  })
                : L.jsxs('div', {
                    style: {
                      color: 'var(--color-text-2, #666)',
                      padding: '24px 16px',
                      textAlign: 'center',
                    },
                    children: [
                      L.jsx('p', {
                        style: { fontSize: '15px', marginBottom: '10px' },
                        children:
                          'Waiting for property data... Try searching for properties in Miami, FL.',
                      }),
                      L.jsx('p', {
                        style: { color: 'var(--color-text-3, #888)', fontSize: '13px' },
                        children: 'Example: "Find 3-bedroom houses in Miami under $1M"',
                      }),
                    ],
                  }),
            ],
          })
    );
  },
  jd = Ed.createRoot(document.querySelector('#root'));
jd.render(L.jsx(Sr.StrictMode, { children: L.jsx(zd, {}) }));
