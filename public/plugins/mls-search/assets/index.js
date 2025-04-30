function uc(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, 'default') ? v.default : v;
}
var ji = { exports: {} },
  Sr = {},
  Ni = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a;
function ud() {
  if ($a) return J;
  $a = 1;
  var v = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    W = Symbol.for('react.strict_mode'),
    L = Symbol.for('react.profiler'),
    B = Symbol.for('react.provider'),
    V = Symbol.for('react.context'),
    P = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    O = Symbol.for('react.lazy'),
    f = Symbol.iterator;
  function m(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (f && c[f]) || c['@@iterator']), typeof c == 'function' ? c : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    j = {};
  function D(c, S, G) {
    (this.props = c), (this.context = S), (this.refs = j), (this.updater = G || _);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (c, S) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, S, 'setState');
    }),
    (D.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function Z() {}
  Z.prototype = D.prototype;
  function oe(c, S, G) {
    (this.props = c), (this.context = S), (this.refs = j), (this.updater = G || _);
  }
  var de = (oe.prototype = new Z());
  (de.constructor = oe), M(de, D.prototype), (de.isPureReactComponent = !0);
  var X = Array.isArray,
    Ee = Object.prototype.hasOwnProperty,
    _e = { current: null },
    Oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(c, S, G) {
    var q,
      ee = {},
      te = null,
      ie = null;
    if (S != null)
      for (q in (S.ref !== void 0 && (ie = S.ref), S.key !== void 0 && (te = '' + S.key), S))
        Ee.call(S, q) && !Oe.hasOwnProperty(q) && (ee[q] = S[q]);
    var re = arguments.length - 2;
    if (re === 1) ee.children = G;
    else if (1 < re) {
      for (var ce = Array(re), Qe = 0; Qe < re; Qe++) ce[Qe] = arguments[Qe + 2];
      ee.children = ce;
    }
    if (c && c.defaultProps)
      for (q in ((re = c.defaultProps), re)) ee[q] === void 0 && (ee[q] = re[q]);
    return { $$typeof: v, type: c, key: te, ref: ie, props: ee, _owner: _e.current };
  }
  function rt(c, S) {
    return { $$typeof: v, type: c.type, key: S, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function Je(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === v;
  }
  function dt(c) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (G) {
        return S[G];
      })
    );
  }
  var pt = /\/+/g;
  function He(c, S) {
    return typeof c == 'object' && c !== null && c.key != null ? dt('' + c.key) : S.toString(36);
  }
  function lt(c, S, G, q, ee) {
    var te = typeof c;
    (te === 'undefined' || te === 'boolean') && (c = null);
    var ie = !1;
    if (c === null) ie = !0;
    else
      switch (te) {
        case 'string':
        case 'number':
          ie = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case v:
            case R:
              ie = !0;
          }
      }
    if (ie)
      return (
        (ie = c),
        (ee = ee(ie)),
        (c = q === '' ? '.' + He(ie, 0) : q),
        X(ee)
          ? ((G = ''),
            c != null && (G = c.replace(pt, '$&/') + '/'),
            lt(ee, S, G, '', function (Qe) {
              return Qe;
            }))
          : ee != null &&
            (Je(ee) &&
              (ee = rt(
                ee,
                G +
                  (!ee.key || (ie && ie.key === ee.key)
                    ? ''
                    : ('' + ee.key).replace(pt, '$&/') + '/') +
                  c,
              )),
            S.push(ee)),
        1
      );
    if (((ie = 0), (q = q === '' ? '.' : q + ':'), X(c)))
      for (var re = 0; re < c.length; re++) {
        te = c[re];
        var ce = q + He(te, re);
        ie += lt(te, S, G, ce, ee);
      }
    else if (((ce = m(c)), typeof ce == 'function'))
      for (c = ce.call(c), re = 0; !(te = c.next()).done; )
        (te = te.value), (ce = q + He(te, re++)), (ie += lt(te, S, G, ce, ee));
    else if (te === 'object')
      throw (
        ((S = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]' ? 'object with keys {' + Object.keys(c).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return ie;
  }
  function vt(c, S, G) {
    if (c == null) return c;
    var q = [],
      ee = 0;
    return (
      lt(c, q, '', '', function (te) {
        return S.call(G, te, ee++);
      }),
      q
    );
  }
  function Fe(c) {
    if (c._status === -1) {
      var S = c._result;
      (S = S()),
        S.then(
          function (G) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = G));
          },
          function (G) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = G));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = S));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var he = { current: null },
    N = { transition: null },
    K = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: N, ReactCurrentOwner: _e };
  function F() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (J.Children = {
      map: vt,
      forEach: function (c, S, G) {
        vt(
          c,
          function () {
            S.apply(this, arguments);
          },
          G,
        );
      },
      count: function (c) {
        var S = 0;
        return (
          vt(c, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (c) {
        return (
          vt(c, function (S) {
            return S;
          }) || []
        );
      },
      only: function (c) {
        if (!Je(c))
          throw Error('React.Children.only expected to receive a single React element child.');
        return c;
      },
    }),
    (J.Component = D),
    (J.Fragment = h),
    (J.Profiler = L),
    (J.PureComponent = oe),
    (J.StrictMode = W),
    (J.Suspense = w),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (J.act = F),
    (J.cloneElement = function (c, S, G) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.',
        );
      var q = M({}, c.props),
        ee = c.key,
        te = c.ref,
        ie = c._owner;
      if (S != null) {
        if (
          (S.ref !== void 0 && ((te = S.ref), (ie = _e.current)),
          S.key !== void 0 && (ee = '' + S.key),
          c.type && c.type.defaultProps)
        )
          var re = c.type.defaultProps;
        for (ce in S)
          Ee.call(S, ce) &&
            !Oe.hasOwnProperty(ce) &&
            (q[ce] = S[ce] === void 0 && re !== void 0 ? re[ce] : S[ce]);
      }
      var ce = arguments.length - 2;
      if (ce === 1) q.children = G;
      else if (1 < ce) {
        re = Array(ce);
        for (var Qe = 0; Qe < ce; Qe++) re[Qe] = arguments[Qe + 2];
        q.children = re;
      }
      return { $$typeof: v, type: c.type, key: ee, ref: te, props: q, _owner: ie };
    }),
    (J.createContext = function (c) {
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
        (c.Provider = { $$typeof: B, _context: c }),
        (c.Consumer = c)
      );
    }),
    (J.createElement = Me),
    (J.createFactory = function (c) {
      var S = Me.bind(null, c);
      return (S.type = c), S;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (c) {
      return { $$typeof: P, render: c };
    }),
    (J.isValidElement = Je),
    (J.lazy = function (c) {
      return { $$typeof: O, _payload: { _status: -1, _result: c }, _init: Fe };
    }),
    (J.memo = function (c, S) {
      return { $$typeof: E, type: c, compare: S === void 0 ? null : S };
    }),
    (J.startTransition = function (c) {
      var S = N.transition;
      N.transition = {};
      try {
        c();
      } finally {
        N.transition = S;
      }
    }),
    (J.unstable_act = F),
    (J.useCallback = function (c, S) {
      return he.current.useCallback(c, S);
    }),
    (J.useContext = function (c) {
      return he.current.useContext(c);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (c) {
      return he.current.useDeferredValue(c);
    }),
    (J.useEffect = function (c, S) {
      return he.current.useEffect(c, S);
    }),
    (J.useId = function () {
      return he.current.useId();
    }),
    (J.useImperativeHandle = function (c, S, G) {
      return he.current.useImperativeHandle(c, S, G);
    }),
    (J.useInsertionEffect = function (c, S) {
      return he.current.useInsertionEffect(c, S);
    }),
    (J.useLayoutEffect = function (c, S) {
      return he.current.useLayoutEffect(c, S);
    }),
    (J.useMemo = function (c, S) {
      return he.current.useMemo(c, S);
    }),
    (J.useReducer = function (c, S, G) {
      return he.current.useReducer(c, S, G);
    }),
    (J.useRef = function (c) {
      return he.current.useRef(c);
    }),
    (J.useState = function (c) {
      return he.current.useState(c);
    }),
    (J.useSyncExternalStore = function (c, S, G) {
      return he.current.useSyncExternalStore(c, S, G);
    }),
    (J.useTransition = function () {
      return he.current.useTransition();
    }),
    (J.version = '18.3.1'),
    J
  );
}
var Ba;
function sn() {
  return Ba || ((Ba = 1), (Ni.exports = ud())), Ni.exports;
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
  var v = sn(),
    R = Symbol.for('react.element'),
    h = Symbol.for('react.fragment'),
    W = Object.prototype.hasOwnProperty,
    L = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(P, w, E) {
    var O,
      f = {},
      m = null,
      _ = null;
    E !== void 0 && (m = '' + E),
      w.key !== void 0 && (m = '' + w.key),
      w.ref !== void 0 && (_ = w.ref);
    for (O in w) W.call(w, O) && !B.hasOwnProperty(O) && (f[O] = w[O]);
    if (P && P.defaultProps) for (O in ((w = P.defaultProps), w)) f[O] === void 0 && (f[O] = w[O]);
    return { $$typeof: R, type: P, key: m, ref: _, props: f, _owner: L.current };
  }
  return (Sr.Fragment = h), (Sr.jsx = V), (Sr.jsxs = V), Sr;
}
var Wa;
function ad() {
  return Wa || ((Wa = 1), (ji.exports = sd())), ji.exports;
}
var z = ad(),
  un = {},
  Ri = { exports: {} },
  Ti,
  Ha;
function Ll() {
  if (Ha) return Ti;
  Ha = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (E, O) => {
      for (var f in O) v(E, f, { get: O[f], enumerable: !0 });
    },
    B = (E, O, f, m) => {
      if ((O && typeof O == 'object') || typeof O == 'function')
        for (let _ of h(O))
          !W.call(E, _) &&
            _ !== f &&
            v(E, _, { get: () => O[_], enumerable: !(m = R(O, _)) || m.enumerable });
      return E;
    },
    V = (E) => B(v({}, '__esModule', { value: !0 }), E),
    P = {};
  L(P, { PluginChannel: () => w }), (Ti = V(P));
  var w = ((E) => (
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
  ))(w || {});
  return Ti;
}
var Li, Qa;
function sc() {
  if (Qa) return Li;
  Qa = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (f, m) => {
      for (var _ in m) v(f, _, { get: m[_], enumerable: !0 });
    },
    B = (f, m, _, M) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of h(m))
          !W.call(f, j) &&
            j !== _ &&
            v(f, j, { get: () => m[j], enumerable: !(M = R(m, j)) || M.enumerable });
      return f;
    },
    V = (f) => B(v({}, '__esModule', { value: !0 }), f),
    P = {};
  L(P, { lobeChat: () => O }), (Li = V(P));
  var w = Ll(),
    E = class {
      constructor() {
        (this.getPluginPayload = () =>
          new Promise((f) => {
            if (typeof window > 'u') {
              f(void 0);
              return;
            }
            const m = setTimeout(() => {
                f(void 0), window.removeEventListener('message', _);
              }, 1e3),
              _ = (M) => {
                if (M.data.type === w.PluginChannel.initStandalonePlugin) {
                  const j = M.data.payload || M.data.props,
                    D = j.apiName,
                    Z = JSON.parse(j.arguments || '{}');
                  clearTimeout(m),
                    f({ arguments: Z, name: D, settings: M.data.settings, state: M.data.state }),
                    window.removeEventListener('message', _);
                }
              };
            window.addEventListener('message', _),
              top == null || top.postMessage({ type: w.PluginChannel.pluginReadyForRender }, '*');
          })),
          (this.getPluginSettings = () =>
            new Promise((f) => {
              if (typeof window > 'u') {
                f(void 0);
                return;
              }
              const m = (_) => {
                _.data.type === w.PluginChannel.renderPluginSettings &&
                  (f(_.data.value), window.removeEventListener('message', m));
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: w.PluginChannel.fetchPluginSettings }, '*');
            })),
          (this.setPluginSettings = (f) => {
            top == null ||
              top.postMessage({ type: w.PluginChannel.updatePluginSettings, value: f }, '*');
          }),
          (this.getPluginMessage = () =>
            new Promise((f) => {
              if (typeof window > 'u') {
                f(void 0);
                return;
              }
              const m = (_) => {
                if (_.data.type === w.PluginChannel.renderPlugin) {
                  const M = _.data.props;
                  f(M.content), window.removeEventListener('message', m);
                }
              };
              window.addEventListener('message', m),
                top == null || top.postMessage({ type: w.PluginChannel.fetchPluginMessage }, '*');
            })),
          (this.setPluginMessage = (f, m) => {
            top == null ||
              top.postMessage(
                {
                  content: f,
                  triggerAiMessage: m,
                  type: w.PluginChannel.fillStandalonePluginContent,
                },
                '*',
              );
          }),
          (this.getPluginState = (f) =>
            new Promise((m) => {
              if (typeof window > 'u') {
                m(void 0);
                return;
              }
              const _ = (M) => {
                M.data.type === w.PluginChannel.renderPluginState &&
                  M.data.key === f &&
                  (m(M.data.value), window.removeEventListener('message', _));
              };
              window.addEventListener('message', _),
                top == null ||
                  top.postMessage({ key: f, type: w.PluginChannel.fetchPluginState }, '*');
            })),
          (this.setPluginState = (f, m) => {
            top == null ||
              top.postMessage({ key: f, type: w.PluginChannel.updatePluginState, value: m }, '*');
          }),
          (this.triggerAIMessage = (f) => {
            top == null || top.postMessage({ id: f, type: w.PluginChannel.triggerAIMessage }, '*');
          }),
          (this.createAssistantMessage = (f) => {
            top == null ||
              top.postMessage({ content: f, type: w.PluginChannel.createAssistantMessage }, '*');
          });
      }
    },
    O = new E();
  return Li;
}
var Mi, Ka;
function cd() {
  if (Ka) return Mi;
  Ka = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (D, Z) => {
      for (var oe in Z) v(D, oe, { get: Z[oe], enumerable: !0 });
    },
    B = (D, Z, oe, de) => {
      if ((Z && typeof Z == 'object') || typeof Z == 'function')
        for (let X of h(Z))
          !W.call(D, X) &&
            X !== oe &&
            v(D, X, { get: () => Z[X], enumerable: !(de = R(Z, X)) || de.enumerable });
      return D;
    },
    V = (D) => B(v({}, '__esModule', { value: !0 }), D),
    P = {};
  L(P, {
    fetchPluginMessage: () => _,
    fetchPluginPayload: () => M,
    fetchPluginSettings: () => j,
    fetchPluginState: () => m,
    postToFillPluginContent: () => E,
    postToUpdatePluginSettings: () => f,
    postToUpdatePluginState: () => O,
  }),
    (Mi = V(P));
  var w = sc(),
    E = w.lobeChat.setPluginMessage,
    O = w.lobeChat.setPluginState,
    f = w.lobeChat.setPluginSettings,
    m = w.lobeChat.getPluginState,
    _ = w.lobeChat.getPluginMessage,
    M = w.lobeChat.getPluginPayload,
    j = w.lobeChat.getPluginSettings;
  return Mi;
}
var Di = { exports: {} },
  Ii,
  Ya;
function fd() {
  if (Ya) return Ii;
  Ya = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (f, m) => {
      for (var _ in m) v(f, _, { get: m[_], enumerable: !0 });
    },
    B = (f, m, _, M) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of h(m))
          !W.call(f, j) &&
            j !== _ &&
            v(f, j, { get: () => m[j], enumerable: !(M = R(m, j)) || M.enumerable });
      return f;
    },
    V = (f) => B(v({}, '__esModule', { value: !0 }), f),
    P = {};
  L(P, { useOnStandalonePluginInit: () => O }), (Ii = V(P));
  var w = sn(),
    E = Ml(),
    O = (f) => {
      (0, w.useEffect)(() => {
        E.lobeChat.getPluginPayload().then((m) => {
          m && f(m);
        });
      }, []);
    };
  return Ii;
}
var Fi, Xa;
function dd() {
  if (Xa) return Fi;
  Xa = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (f, m) => {
      for (var _ in m) v(f, _, { get: m[_], enumerable: !0 });
    },
    B = (f, m, _, M) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of h(m))
          !W.call(f, j) &&
            j !== _ &&
            v(f, j, { get: () => m[j], enumerable: !(M = R(m, j)) || M.enumerable });
      return f;
    },
    V = (f) => B(v({}, '__esModule', { value: !0 }), f),
    P = {};
  L(P, { usePluginSettings: () => O }), (Fi = V(P));
  var w = sn(),
    E = Ml(),
    O = (f) => {
      const [m, _] = (0, w.useState)(f);
      (0, w.useEffect)(() => {
        E.lobeChat.getPluginSettings().then((j) => {
          j && _(j);
        });
      }, []);
      const M = (0, w.useCallback)((j) => {
        _(j), E.lobeChat.setPluginSettings(j);
      }, []);
      return [m, M];
    };
  return Fi;
}
var Ui, Ga;
function pd() {
  if (Ga) return Ui;
  Ga = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (f, m) => {
      for (var _ in m) v(f, _, { get: m[_], enumerable: !0 });
    },
    B = (f, m, _, M) => {
      if ((m && typeof m == 'object') || typeof m == 'function')
        for (let j of h(m))
          !W.call(f, j) &&
            j !== _ &&
            v(f, j, { get: () => m[j], enumerable: !(M = R(m, j)) || M.enumerable });
      return f;
    },
    V = (f) => B(v({}, '__esModule', { value: !0 }), f),
    P = {};
  L(P, { usePluginState: () => O }), (Ui = V(P));
  var w = sn(),
    E = Ml(),
    O = (f, m) => {
      const [_, M] = (0, w.useState)(m);
      (0, w.useEffect)(() => {
        E.lobeChat.getPluginState(f).then((D) => {
          D && M(D);
        });
      }, [f]);
      const j = (0, w.useCallback)(
        (D) => {
          M(D), E.lobeChat.setPluginState(f, D);
        },
        [f],
      );
      return [_, j];
    };
  return Ui;
}
var Ai, Ja;
function vd() {
  if (Ja) return Ai;
  Ja = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (O, f) => {
      for (var m in f) v(O, m, { get: f[m], enumerable: !0 });
    },
    B = (O, f, m, _) => {
      if ((f && typeof f == 'object') || typeof f == 'function')
        for (let M of h(f))
          !W.call(O, M) &&
            M !== m &&
            v(O, M, { get: () => f[M], enumerable: !(_ = R(f, M)) || _.enumerable });
      return O;
    },
    V = (O) => B(v({}, '__esModule', { value: !0 }), O),
    P = {};
  L(P, { onReceiveData: () => E }), (Ai = V(P));
  var w = Ll(),
    E = (O, f) => {
      if (O.data.type === w.PluginChannel.renderPlugin) {
        const m = O.data.props;
        f(m);
      }
    };
  return Ai;
}
var $i, qa;
function hd() {
  if (qa) return $i;
  qa = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (m, _) => {
      for (var M in _) v(m, M, { get: _[M], enumerable: !0 });
    },
    B = (m, _, M, j) => {
      if ((_ && typeof _ == 'object') || typeof _ == 'function')
        for (let D of h(_))
          !W.call(m, D) &&
            D !== M &&
            v(m, D, { get: () => _[D], enumerable: !(j = R(_, D)) || j.enumerable });
      return m;
    },
    V = (m) => B(v({}, '__esModule', { value: !0 }), m),
    P = {};
  L(P, { useWatchPluginMessage: () => f }), ($i = V(P));
  var w = sn(),
    E = Ll(),
    O = vd(),
    f = () => {
      const [m, _] = (0, w.useState)({ data: void 0, loading: !0 }),
        M = (j) => {
          (0, O.onReceiveData)(j, (D) => {
            _({ data: D.content, loading: !1 });
          });
        };
      return (
        (0, w.useEffect)(
          () => (
            window == null || window.addEventListener('message', M),
            top == null || top.postMessage({ type: E.PluginChannel.pluginReadyForRender }, '*'),
            () => {
              window == null || window.removeEventListener('message', M);
            }
          ),
          [],
        ),
        m
      );
    };
  return $i;
}
var Za;
function gd() {
  return (
    Za ||
      ((Za = 1),
      (function (v) {
        var R = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          W = Object.getOwnPropertyNames,
          L = Object.prototype.hasOwnProperty,
          B = (E, O, f, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let _ of W(O))
                !L.call(E, _) &&
                  _ !== f &&
                  R(E, _, { get: () => O[_], enumerable: !(m = h(O, _)) || m.enumerable });
            return E;
          },
          V = (E, O, f) => (B(E, O, 'default'), f && B(f, O, 'default')),
          P = (E) => B(R({}, '__esModule', { value: !0 }), E),
          w = {};
        (v.exports = P(w)),
          V(w, fd(), v.exports),
          V(w, dd(), v.exports),
          V(w, pd(), v.exports),
          V(w, hd(), v.exports);
      })(Di)),
    Di.exports
  );
}
var Bi, ba;
function md() {
  if (ba) return Bi;
  ba = 1;
  var v = Object.defineProperty,
    R = Object.getOwnPropertyDescriptor,
    h = Object.getOwnPropertyNames,
    W = Object.prototype.hasOwnProperty,
    L = (P, w, E, O) => {
      if ((w && typeof w == 'object') || typeof w == 'function')
        for (let f of h(w))
          !W.call(P, f) &&
            f !== E &&
            v(P, f, { get: () => w[f], enumerable: !(O = R(w, f)) || O.enumerable });
      return P;
    },
    B = (P) => L(v({}, '__esModule', { value: !0 }), P),
    V = {};
  return (Bi = B(V)), Bi;
}
var ec;
function Ml() {
  return (
    ec ||
      ((ec = 1),
      (function (v) {
        var R = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          W = Object.getOwnPropertyNames,
          L = Object.prototype.hasOwnProperty,
          B = (E, O, f, m) => {
            if ((O && typeof O == 'object') || typeof O == 'function')
              for (let _ of W(O))
                !L.call(E, _) &&
                  _ !== f &&
                  R(E, _, { get: () => O[_], enumerable: !(m = h(O, _)) || m.enumerable });
            return E;
          },
          V = (E, O, f) => (B(E, O, 'default'), f && B(f, O, 'default')),
          P = (E) => B(R({}, '__esModule', { value: !0 }), E),
          w = {};
        (v.exports = P(w)),
          V(w, Ll(), v.exports),
          V(w, cd(), v.exports),
          V(w, gd(), v.exports),
          V(w, sc(), v.exports),
          V(w, md(), v.exports);
      })(Ri)),
    Ri.exports
  );
}
var tc;
function yd() {
  return (
    tc ||
      ((tc = 1),
      (function (v) {
        var R =
            (un && un.__createBinding) ||
            (Object.create
              ? function (W, L, B, V) {
                  V === void 0 && (V = B);
                  var P = Object.getOwnPropertyDescriptor(L, B);
                  (!P || ('get' in P ? !L.__esModule : P.writable || P.configurable)) &&
                    (P = {
                      enumerable: !0,
                      get: function () {
                        return L[B];
                      },
                    }),
                    Object.defineProperty(W, V, P);
                }
              : function (W, L, B, V) {
                  V === void 0 && (V = B), (W[V] = L[B]);
                }),
          h =
            (un && un.__exportStar) ||
            function (W, L) {
              for (var B in W)
                B !== 'default' && !Object.prototype.hasOwnProperty.call(L, B) && R(L, W, B);
            };
        Object.defineProperty(v, '__esModule', { value: !0 }), h(Ml(), v);
      })(un)),
    un
  );
}
var Vi = yd(),
  xr = sn();
const Mn = uc(xr);
var Tl = {},
  Wi = { exports: {} },
  We = {},
  Hi = { exports: {} },
  Qi = {};
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
      (function (v) {
        function R(N, K) {
          var F = N.length;
          N.push(K);
          e: for (; 0 < F; ) {
            var c = (F - 1) >>> 1,
              S = N[c];
            if (0 < L(S, K)) (N[c] = K), (N[F] = S), (F = c);
            else break e;
          }
        }
        function h(N) {
          return N.length === 0 ? null : N[0];
        }
        function W(N) {
          if (N.length === 0) return null;
          var K = N[0],
            F = N.pop();
          if (F !== K) {
            N[0] = F;
            e: for (var c = 0, S = N.length, G = S >>> 1; c < G; ) {
              var q = 2 * (c + 1) - 1,
                ee = N[q],
                te = q + 1,
                ie = N[te];
              if (0 > L(ee, F))
                te < S && 0 > L(ie, ee)
                  ? ((N[c] = ie), (N[te] = F), (c = te))
                  : ((N[c] = ee), (N[q] = F), (c = q));
              else if (te < S && 0 > L(ie, F)) (N[c] = ie), (N[te] = F), (c = te);
              else break e;
            }
          }
          return K;
        }
        function L(N, K) {
          var F = N.sortIndex - K.sortIndex;
          return F !== 0 ? F : N.id - K.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var B = performance;
          v.unstable_now = function () {
            return B.now();
          };
        } else {
          var V = Date,
            P = V.now();
          v.unstable_now = function () {
            return V.now() - P;
          };
        }
        var w = [],
          E = [],
          O = 1,
          f = null,
          m = 3,
          _ = !1,
          M = !1,
          j = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          Z = typeof clearTimeout == 'function' ? clearTimeout : null,
          oe = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function de(N) {
          for (var K = h(E); K !== null; ) {
            if (K.callback === null) W(E);
            else if (K.startTime <= N) W(E), (K.sortIndex = K.expirationTime), R(w, K);
            else break;
            K = h(E);
          }
        }
        function X(N) {
          if (((j = !1), de(N), !M))
            if (h(w) !== null) (M = !0), Fe(Ee);
            else {
              var K = h(E);
              K !== null && he(X, K.startTime - N);
            }
        }
        function Ee(N, K) {
          (M = !1), j && ((j = !1), Z(Me), (Me = -1)), (_ = !0);
          var F = m;
          try {
            for (de(K), f = h(w); f !== null && (!(f.expirationTime > K) || (N && !dt())); ) {
              var c = f.callback;
              if (typeof c == 'function') {
                (f.callback = null), (m = f.priorityLevel);
                var S = c(f.expirationTime <= K);
                (K = v.unstable_now()),
                  typeof S == 'function' ? (f.callback = S) : f === h(w) && W(w),
                  de(K);
              } else W(w);
              f = h(w);
            }
            if (f !== null) var G = !0;
            else {
              var q = h(E);
              q !== null && he(X, q.startTime - K), (G = !1);
            }
            return G;
          } finally {
            (f = null), (m = F), (_ = !1);
          }
        }
        var _e = !1,
          Oe = null,
          Me = -1,
          rt = 5,
          Je = -1;
        function dt() {
          return !(v.unstable_now() - Je < rt);
        }
        function pt() {
          if (Oe !== null) {
            var N = v.unstable_now();
            Je = N;
            var K = !0;
            try {
              K = Oe(!0, N);
            } finally {
              K ? He() : ((_e = !1), (Oe = null));
            }
          } else _e = !1;
        }
        var He;
        if (typeof oe == 'function')
          He = function () {
            oe(pt);
          };
        else if (typeof MessageChannel < 'u') {
          var lt = new MessageChannel(),
            vt = lt.port2;
          (lt.port1.onmessage = pt),
            (He = function () {
              vt.postMessage(null);
            });
        } else
          He = function () {
            D(pt, 0);
          };
        function Fe(N) {
          (Oe = N), _e || ((_e = !0), He());
        }
        function he(N, K) {
          Me = D(function () {
            N(v.unstable_now());
          }, K);
        }
        (v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            M || _ || ((M = !0), Fe(Ee));
          }),
          (v.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (rt = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return h(w);
          }),
          (v.unstable_next = function (N) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = m;
            }
            var F = m;
            m = K;
            try {
              return N();
            } finally {
              m = F;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (N, K) {
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
            var F = m;
            m = N;
            try {
              return K();
            } finally {
              m = F;
            }
          }),
          (v.unstable_scheduleCallback = function (N, K, F) {
            var c = v.unstable_now();
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? c + F : c))
                : (F = c),
              N)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = F + S),
              (N = {
                id: O++,
                callback: K,
                priorityLevel: N,
                startTime: F,
                expirationTime: S,
                sortIndex: -1,
              }),
              F > c
                ? ((N.sortIndex = F),
                  R(E, N),
                  h(w) === null && N === h(E) && (j ? (Z(Me), (Me = -1)) : (j = !0), he(X, F - c)))
                : ((N.sortIndex = S), R(w, N), M || _ || ((M = !0), Fe(Ee))),
              N
            );
          }),
          (v.unstable_shouldYield = dt),
          (v.unstable_wrapCallback = function (N) {
            var K = m;
            return function () {
              var F = m;
              m = K;
              try {
                return N.apply(this, arguments);
              } finally {
                m = F;
              }
            };
          });
      })(Qi)),
    Qi
  );
}
var rc;
function Sd() {
  return rc || ((rc = 1), (Hi.exports = wd())), Hi.exports;
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
  var v = sn(),
    R = Sd();
  function h(e) {
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
  function B(e, t) {
    V(e, t), V(e + 'Capture', t);
  }
  function V(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) W.add(t[e]);
  }
  var P = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    w = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    f = {};
  function m(e) {
    return w.call(f, e) ? !0 : w.call(O, e) ? !1 : E.test(e) ? (f[e] = !0) : ((O[e] = !0), !1);
  }
  function _(e, t, n, r) {
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
  function M(e, t, n, r) {
    if (t === null || typeof t > 'u' || _(e, t, n, r)) return !0;
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
  var D = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      D[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      D[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        D[e] = new j(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        D[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      D[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      D[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      D[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      D[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Z = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Z, oe);
      D[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(Z, oe);
        D[t] = new j(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Z, oe);
      D[t] = new j(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      D[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new j('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      D[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function de(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (M(t, n, l, r) && (n = null),
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
  var X = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ee = Symbol.for('react.element'),
    _e = Symbol.for('react.portal'),
    Oe = Symbol.for('react.fragment'),
    Me = Symbol.for('react.strict_mode'),
    rt = Symbol.for('react.profiler'),
    Je = Symbol.for('react.provider'),
    dt = Symbol.for('react.context'),
    pt = Symbol.for('react.forward_ref'),
    He = Symbol.for('react.suspense'),
    lt = Symbol.for('react.suspense_list'),
    vt = Symbol.for('react.memo'),
    Fe = Symbol.for('react.lazy'),
    he = Symbol.for('react.offscreen'),
    N = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (N && e[N]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var F = Object.assign,
    c;
  function S(e) {
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
  var G = !1;
  function q(e, t) {
    if (!e || G) return '';
    G = !0;
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
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == 'string') {
        for (
          var l = g.stack.split(`
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
      (G = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? S(e) : '';
  }
  function ee(e) {
    switch (e.tag) {
      case 5:
        return S(e.type);
      case 16:
        return S('Lazy');
      case 13:
        return S('Suspense');
      case 19:
        return S('SuspenseList');
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
  function te(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Oe:
        return 'Fragment';
      case _e:
        return 'Portal';
      case rt:
        return 'Profiler';
      case Me:
        return 'StrictMode';
      case He:
        return 'Suspense';
      case lt:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case dt:
          return (e.displayName || 'Context') + '.Consumer';
        case Je:
          return (e._context.displayName || 'Context') + '.Provider';
        case pt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case vt:
          return (t = e.displayName || null), t !== null ? t : te(e.type) || 'Memo';
        case Fe:
          (t = e._payload), (e = e._init);
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  function ie(e) {
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
        return te(t);
      case 8:
        return t === Me ? 'StrictMode' : 'Mode';
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
  function re(e) {
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
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Qe(e) {
    var t = ce(e) ? 'checked' : 'value',
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
  function _r(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function Ki(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ce(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Dl(e, t) {
    var n = t.checked;
    return F({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Yi(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = re(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function Xi(e, t) {
    (t = t.checked), t != null && de(e, 'checked', t, !1);
  }
  function Il(e, t) {
    Xi(e, t);
    var n = re(t.value),
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
      : t.hasOwnProperty('defaultValue') && Fl(e, t.type, re(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Gi(e, t, n) {
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
    (t !== 'number' || kr(e.ownerDocument) !== e) &&
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
      for (n = '' + re(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return F({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Ji(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(h(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function qi(e, t) {
    var n = re(t.value),
      r = re(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Zi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function bi(e) {
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
      ? bi(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Pr,
    eu = (function (e) {
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
          Pr = Pr || document.createElement('div'),
            Pr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Pr.firstChild;
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
  function tu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function nu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = tu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var fc = F(
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
  function $l(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(h(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(h(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(h(62));
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
  var Hl = null,
    cn = null,
    fn = null;
  function ru(e) {
    if ((e = or(e))) {
      if (typeof Hl != 'function') throw Error(h(280));
      var t = e.stateNode;
      t && ((t = Yr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function lu(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function ou() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), ru(e), t)) for (e = 0; e < t.length; e++) ru(t[e]);
    }
  }
  function iu(e, t) {
    return e(t);
  }
  function uu() {}
  var Ql = !1;
  function su(e, t, n) {
    if (Ql) return e(t, n);
    Ql = !0;
    try {
      return iu(e, t, n);
    } finally {
      (Ql = !1), (cn !== null || fn !== null) && (uu(), ou());
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
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
    if (n && typeof n != 'function') throw Error(h(231, t, typeof n));
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
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (x) {
      this.onError(x);
    }
  }
  var $n = !1,
    Cr = null,
    Er = !1,
    Yl = null,
    pc = {
      onError: function (e) {
        ($n = !0), (Cr = e);
      },
    };
  function vc(e, t, n, r, l, o, i, u, s) {
    ($n = !1), (Cr = null), dc.apply(pc, arguments);
  }
  function hc(e, t, n, r, l, o, i, u, s) {
    if ((vc.apply(this, arguments), $n)) {
      if ($n) {
        var g = Cr;
        ($n = !1), (Cr = null);
      } else throw Error(h(198));
      Er || ((Er = !0), (Yl = g));
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
  function au(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function cu(e) {
    if (Yt(e) !== e) throw Error(h(188));
  }
  function gc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(h(188));
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
          if (o === n) return cu(l), e;
          if (o === r) return cu(l), t;
          o = o.sibling;
        }
        throw Error(h(188));
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
          if (!i) throw Error(h(189));
        }
      }
      if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function fu(e) {
    return (e = gc(e)), e !== null ? du(e) : null;
  }
  function du(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = du(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var pu = R.unstable_scheduleCallback,
    vu = R.unstable_cancelCallback,
    mc = R.unstable_shouldYield,
    yc = R.unstable_requestPaint,
    me = R.unstable_now,
    wc = R.unstable_getCurrentPriorityLevel,
    Xl = R.unstable_ImmediatePriority,
    hu = R.unstable_UserBlockingPriority,
    Or = R.unstable_NormalPriority,
    Sc = R.unstable_LowPriority,
    gu = R.unstable_IdlePriority,
    zr = null,
    ht = null;
  function xc(e) {
    if (ht && typeof ht.onCommitFiberRoot == 'function')
      try {
        ht.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ot = Math.clz32 ? Math.clz32 : Pc,
    _c = Math.log,
    kc = Math.LN2;
  function Pc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / kc) | 0)) | 0;
  }
  var jr = 64,
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
  function Rr(e, t) {
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
        (n = 31 - ot(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
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
      var i = 31 - ot(o),
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
  function mu() {
    var e = jr;
    return (jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e;
  }
  function Jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ot(t)),
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
      var l = 31 - ot(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function ql(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ot(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var le = 0;
  function yu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var wu,
    Zl,
    Su,
    xu,
    _u,
    bl = !1,
    Tr = [],
    zt = null,
    jt = null,
    Nt = null,
    Wn = new Map(),
    Hn = new Map(),
    Rt = [],
    zc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function ku(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        zt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        jt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Nt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Wn.delete(t.pointerId);
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
  function jc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (zt = Qn(zt, e, t, n, r, l)), !0;
      case 'dragenter':
        return (jt = Qn(jt, e, t, n, r, l)), !0;
      case 'mouseover':
        return (Nt = Qn(Nt, e, t, n, r, l)), !0;
      case 'pointerover':
        var o = l.pointerId;
        return Wn.set(o, Qn(Wn.get(o) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (o = l.pointerId), Hn.set(o, Qn(Hn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Pu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = au(n)), t !== null)) {
            (e.blockedOn = t),
              _u(e.priority, function () {
                Su(n);
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
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Vl = r), n.target.dispatchEvent(r), (Vl = null);
      } else return (t = or(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Cu(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function Nc() {
    (bl = !1),
      zt !== null && Lr(zt) && (zt = null),
      jt !== null && Lr(jt) && (jt = null),
      Nt !== null && Lr(Nt) && (Nt = null),
      Wn.forEach(Cu),
      Hn.forEach(Cu);
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bl || ((bl = !0), R.unstable_scheduleCallback(R.unstable_NormalPriority, Nc)));
  }
  function Yn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Tr.length) {
      Kn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Kn(zt, e),
        jt !== null && Kn(jt, e),
        Nt !== null && Kn(Nt, e),
        Wn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
      Pu(n), n.blockedOn === null && Rt.shift();
  }
  var dn = X.ReactCurrentBatchConfig,
    Mr = !0;
  function Rc(e, t, n, r) {
    var l = le,
      o = dn.transition;
    dn.transition = null;
    try {
      (le = 1), eo(e, t, n, r);
    } finally {
      (le = l), (dn.transition = o);
    }
  }
  function Tc(e, t, n, r) {
    var l = le,
      o = dn.transition;
    dn.transition = null;
    try {
      (le = 4), eo(e, t, n, r);
    } finally {
      (le = l), (dn.transition = o);
    }
  }
  function eo(e, t, n, r) {
    if (Mr) {
      var l = to(e, t, n, r);
      if (l === null) wo(e, t, r, Dr, n), ku(e, r);
      else if (jc(l, e, t, n, r)) r.stopPropagation();
      else if ((ku(e, r), t & 4 && -1 < zc.indexOf(e))) {
        for (; l !== null; ) {
          var o = or(l);
          if (
            (o !== null && wu(o), (o = to(e, t, n, r)), o === null && wo(e, t, r, Dr, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else wo(e, t, r, null, n);
    }
  }
  var Dr = null;
  function to(e, t, n, r) {
    if (((Dr = null), (e = Wl(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = au(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Dr = e), null;
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
          case hu:
            return 4;
          case Or:
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
  var Tt = null,
    no = null,
    Ir = null;
  function Ou() {
    if (Ir) return Ir;
    var e,
      t = no,
      n = t.length,
      r,
      l = 'value' in Tt ? Tt.value : Tt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ur() {
    return !0;
  }
  function zu() {
    return !1;
  }
  function Ke(e) {
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
          ? Ur
          : zu),
        (this.isPropagationStopped = zu),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ur));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ur));
        },
        persist: function () {},
        isPersistent: Ur,
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
    ro = Ke(pn),
    Xn = F({}, pn, { view: 0, detail: 0 }),
    Lc = Ke(Xn),
    lo,
    oo,
    Gn,
    Ar = F({}, Xn, {
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
    ju = Ke(Ar),
    Mc = F({}, Ar, { dataTransfer: 0 }),
    Dc = Ke(Mc),
    Ic = F({}, Xn, { relatedTarget: 0 }),
    io = Ke(Ic),
    Fc = F({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = Ke(Fc),
    Ac = F({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $c = Ke(Ac),
    Bc = F({}, pn, { data: 0 }),
    Nu = Ke(Bc),
    Vc = {
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
    Hc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Qc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hc[e]) ? !!t[e] : !1;
  }
  function uo() {
    return Qc;
  }
  var Kc = F({}, Xn, {
      key: function (e) {
        if (e.key) {
          var t = Vc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Fr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
        return e.type === 'keypress' ? Fr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Fr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Yc = Ke(Kc),
    Xc = F({}, Ar, {
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
    Ru = Ke(Xc),
    Gc = F({}, Xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Jc = Ke(Gc),
    qc = F({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zc = Ke(qc),
    bc = F({}, Ar, {
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
    ef = Ke(bc),
    tf = [9, 13, 27, 32],
    so = P && 'CompositionEvent' in window,
    Jn = null;
  P && 'documentMode' in document && (Jn = document.documentMode);
  var nf = P && 'TextEvent' in window && !Jn,
    Tu = P && (!so || (Jn && 8 < Jn && 11 >= Jn)),
    Lu = ' ',
    Mu = !1;
  function Du(e, t) {
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
  function Iu(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var vn = !1;
  function rf(e, t) {
    switch (e) {
      case 'compositionend':
        return Iu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Mu = !0), Lu);
      case 'textInput':
        return (e = t.data), e === Lu && Mu ? null : e;
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (vn)
      return e === 'compositionend' || (!so && Du(e, t))
        ? ((e = Ou()), (Ir = no = Tt = null), (vn = !1), e)
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
        return Tu && t.locale !== 'ko' ? null : t.data;
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
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!of[e.type] : t === 'textarea';
  }
  function Uu(e, t, n, r) {
    lu(r),
      (t = Hr(t, 'onChange')),
      0 < t.length &&
        ((n = new ro('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var qn = null,
    Zn = null;
  function uf(e) {
    ns(e, 0);
  }
  function $r(e) {
    var t = wn(e);
    if (Ki(t)) return e;
  }
  function sf(e, t) {
    if (e === 'change') return t;
  }
  var Au = !1;
  if (P) {
    var ao;
    if (P) {
      var co = 'oninput' in document;
      if (!co) {
        var $u = document.createElement('div');
        $u.setAttribute('oninput', 'return;'), (co = typeof $u.oninput == 'function');
      }
      ao = co;
    } else ao = !1;
    Au = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function Bu() {
    qn && (qn.detachEvent('onpropertychange', Vu), (Zn = qn = null));
  }
  function Vu(e) {
    if (e.propertyName === 'value' && $r(Zn)) {
      var t = [];
      Uu(t, Zn, e, Wl(e)), su(uf, t);
    }
  }
  function af(e, t, n) {
    e === 'focusin'
      ? (Bu(), (qn = t), (Zn = n), qn.attachEvent('onpropertychange', Vu))
      : e === 'focusout' && Bu();
  }
  function cf(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return $r(Zn);
  }
  function ff(e, t) {
    if (e === 'click') return $r(t);
  }
  function df(e, t) {
    if (e === 'input' || e === 'change') return $r(t);
  }
  function pf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var it = typeof Object.is == 'function' ? Object.is : pf;
  function bn(e, t) {
    if (it(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !it(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hu(e, t) {
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
  function Qu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Qu(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ku() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
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
    var t = Ku(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qu(n.ownerDocument.documentElement, n)) {
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
            (l = Hu(n, o));
          var i = Hu(n, r);
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
  var hf = P && 'documentMode' in document && 11 >= document.documentMode,
    hn = null,
    po = null,
    er = null,
    vo = !1;
  function Yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo ||
      hn == null ||
      hn !== kr(r) ||
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
      (er && bn(er, r)) ||
        ((er = r),
        (r = Hr(po, 'onSelect')),
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
    Xu = {};
  P &&
    ((Xu = document.createElement('div').style),
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
    for (n in t) if (t.hasOwnProperty(n) && n in Xu) return (ho[e] = t[n]);
    return e;
  }
  var Gu = Vr('animationend'),
    Ju = Vr('animationiteration'),
    qu = Vr('animationstart'),
    Zu = Vr('transitionend'),
    bu = new Map(),
    es =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Lt(e, t) {
    bu.set(e, t), B(t, [e]);
  }
  for (var go = 0; go < es.length; go++) {
    var mo = es[go],
      gf = mo.toLowerCase(),
      mf = mo[0].toUpperCase() + mo.slice(1);
    Lt(gf, 'on' + mf);
  }
  Lt(Gu, 'onAnimationEnd'),
    Lt(Ju, 'onAnimationIteration'),
    Lt(qu, 'onAnimationStart'),
    Lt('dblclick', 'onDoubleClick'),
    Lt('focusin', 'onFocus'),
    Lt('focusout', 'onBlur'),
    Lt(Zu, 'onTransitionEnd'),
    V('onMouseEnter', ['mouseout', 'mouseover']),
    V('onMouseLeave', ['mouseout', 'mouseover']),
    V('onPointerEnter', ['pointerout', 'pointerover']),
    V('onPointerLeave', ['pointerout', 'pointerover']),
    B('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    B(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    B('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    B('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    B(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    B(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var tr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(tr));
  function ts(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), hc(r, t, void 0, e), (e.currentTarget = null);
  }
  function ns(e, t) {
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
              g = u.currentTarget;
            if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
            ts(l, u, g), (o = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (s = u.instance),
              (g = u.currentTarget),
              (u = u.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            ts(l, u, g), (o = s);
          }
      }
    }
    if (Er) throw ((e = Yl), (Er = !1), (Yl = null), e);
  }
  function se(e, t) {
    var n = t[Co];
    n === void 0 && (n = t[Co] = new Set());
    var r = e + '__bubble';
    n.has(r) || (rs(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), rs(n, e, r, t);
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
  function rs(e, t, n, r) {
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
    su(function () {
      var g = o,
        x = Wl(n),
        k = [];
      e: {
        var y = bu.get(e);
        if (y !== void 0) {
          var T = ro,
            U = e;
          switch (e) {
            case 'keypress':
              if (Fr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              T = Yc;
              break;
            case 'focusin':
              (U = 'focus'), (T = io);
              break;
            case 'focusout':
              (U = 'blur'), (T = io);
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
              T = ju;
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
            case Gu:
            case Ju:
            case qu:
              T = Uc;
              break;
            case Zu:
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
              T = $c;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              T = Ru;
          }
          var A = (t & 4) !== 0,
            ye = !A && e === 'scroll',
            d = A ? (y !== null ? y + 'Capture' : null) : y;
          A = [];
          for (var a = g, p; a !== null; ) {
            p = a;
            var C = p.stateNode;
            if (
              (p.tag === 5 &&
                C !== null &&
                ((p = C), d !== null && ((C = Un(a, d)), C != null && A.push(rr(a, C, p)))),
              ye)
            )
              break;
            a = a.return;
          }
          0 < A.length && ((y = new T(y, U, null, n, x)), k.push({ event: y, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === 'mouseover' || e === 'pointerover'),
            (T = e === 'mouseout' || e === 'pointerout'),
            y && n !== Vl && (U = n.relatedTarget || n.fromElement) && (Xt(U) || U[St]))
          )
            break e;
          if (
            (T || y) &&
            ((y =
              x.window === x
                ? x
                : (y = x.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            T
              ? ((U = n.relatedTarget || n.toElement),
                (T = g),
                (U = U ? Xt(U) : null),
                U !== null &&
                  ((ye = Yt(U)), U !== ye || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : ((T = null), (U = g)),
            T !== U)
          ) {
            if (
              ((A = ju),
              (C = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((A = Ru), (C = 'onPointerLeave'), (d = 'onPointerEnter'), (a = 'pointer')),
              (ye = T == null ? y : wn(T)),
              (p = U == null ? y : wn(U)),
              (y = new A(C, a + 'leave', T, n, x)),
              (y.target = ye),
              (y.relatedTarget = p),
              (C = null),
              Xt(x) === g &&
                ((A = new A(d, a + 'enter', U, n, x)),
                (A.target = p),
                (A.relatedTarget = ye),
                (C = A)),
              (ye = C),
              T && U)
            )
              t: {
                for (A = T, d = U, a = 0, p = A; p; p = mn(p)) a++;
                for (p = 0, C = d; C; C = mn(C)) p++;
                for (; 0 < a - p; ) (A = mn(A)), a--;
                for (; 0 < p - a; ) (d = mn(d)), p--;
                for (; a--; ) {
                  if (A === d || (d !== null && A === d.alternate)) break t;
                  (A = mn(A)), (d = mn(d));
                }
                A = null;
              }
            else A = null;
            T !== null && ls(k, y, T, A, !1), U !== null && ye !== null && ls(k, ye, U, A, !0);
          }
        }
        e: {
          if (
            ((y = g ? wn(g) : window),
            (T = y.nodeName && y.nodeName.toLowerCase()),
            T === 'select' || (T === 'input' && y.type === 'file'))
          )
            var $ = sf;
          else if (Fu(y))
            if (Au) $ = df;
            else {
              $ = cf;
              var H = af;
            }
          else
            (T = y.nodeName) &&
              T.toLowerCase() === 'input' &&
              (y.type === 'checkbox' || y.type === 'radio') &&
              ($ = ff);
          if ($ && ($ = $(e, g))) {
            Uu(k, $, n, x);
            break e;
          }
          H && H(e, y, g),
            e === 'focusout' &&
              (H = y._wrapperState) &&
              H.controlled &&
              y.type === 'number' &&
              Fl(y, 'number', y.value);
        }
        switch (((H = g ? wn(g) : window), e)) {
          case 'focusin':
            (Fu(H) || H.contentEditable === 'true') && ((hn = H), (po = g), (er = null));
            break;
          case 'focusout':
            er = po = hn = null;
            break;
          case 'mousedown':
            vo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (vo = !1), Yu(k, n, x);
            break;
          case 'selectionchange':
            if (hf) break;
          case 'keydown':
          case 'keyup':
            Yu(k, n, x);
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
            ? Du(e, n) && (Y = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Y = 'onCompositionStart');
        Y &&
          (Tu &&
            n.locale !== 'ko' &&
            (vn || Y !== 'onCompositionStart'
              ? Y === 'onCompositionEnd' && vn && (Q = Ou())
              : ((Tt = x), (no = 'value' in Tt ? Tt.value : Tt.textContent), (vn = !0))),
          (H = Hr(g, Y)),
          0 < H.length &&
            ((Y = new Nu(Y, e, null, n, x)),
            k.push({ event: Y, listeners: H }),
            Q ? (Y.data = Q) : ((Q = Iu(n)), Q !== null && (Y.data = Q)))),
          (Q = nf ? rf(e, n) : lf(e, n)) &&
            ((g = Hr(g, 'onBeforeInput')),
            0 < g.length &&
              ((x = new Nu('onBeforeInput', 'beforeinput', null, n, x)),
              k.push({ event: x, listeners: g }),
              (x.data = Q)));
      }
      ns(k, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
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
  function ls(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        g = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        g !== null &&
        ((u = g),
        l
          ? ((s = Un(n, o)), s != null && i.unshift(rr(n, s, u)))
          : l || ((s = Un(n, o)), s != null && i.push(rr(n, s, u)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var wf = /\r\n?/g,
    Sf = /\u0000|\uFFFD/g;
  function os(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        wf,
        `
`,
      )
      .replace(Sf, '');
  }
  function Qr(e, t, n) {
    if (((t = os(t)), os(e) !== t && n)) throw Error(h(425));
  }
  function Kr() {}
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
    is = typeof Promise == 'function' ? Promise : void 0,
    _f =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof is < 'u'
          ? function (e) {
              return is.resolve(null).then(e).catch(kf);
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
  function Mt(e) {
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
  function us(e) {
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
    gt = '__reactFiber$' + yn,
    lr = '__reactProps$' + yn,
    St = '__reactContainer$' + yn,
    Co = '__reactEvents$' + yn,
    Pf = '__reactListeners$' + yn,
    Cf = '__reactHandles$' + yn;
  function Xt(e) {
    var t = e[gt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[gt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = us(e); e !== null; ) {
            if ((n = e[gt])) return n;
            e = us(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[gt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
  }
  function Yr(e) {
    return e[lr] || null;
  }
  var Eo = [],
    Sn = -1;
  function Dt(e) {
    return { current: e };
  }
  function ae(e) {
    0 > Sn || ((e.current = Eo[Sn]), (Eo[Sn] = null), Sn--);
  }
  function ue(e, t) {
    Sn++, (Eo[Sn] = e.current), (e.current = t);
  }
  var It = {},
    Ne = Dt(It),
    Ue = Dt(!1),
    Gt = It;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
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
  function Ae(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xr() {
    ae(Ue), ae(Ne);
  }
  function ss(e, t, n) {
    if (Ne.current !== It) throw Error(h(168));
    ue(Ne, t), ue(Ue, n);
  }
  function as(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(h(108, ie(e) || 'Unknown', l));
    return F({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Gt = Ne.current),
      ue(Ne, e),
      ue(Ue, Ue.current),
      !0
    );
  }
  function cs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    n
      ? ((e = as(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ae(Ue),
        ae(Ne),
        ue(Ne, e))
      : ae(Ue),
      ue(Ue, n);
  }
  var xt = null,
    Jr = !1,
    Oo = !1;
  function fs(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function Ef(e) {
    (Jr = !0), fs(e);
  }
  function Ft() {
    if (!Oo && xt !== null) {
      Oo = !0;
      var e = 0,
        t = le;
      try {
        var n = xt;
        for (le = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (xt = null), (Jr = !1);
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), pu(Xl, Ft), l);
      } finally {
        (le = t), (Oo = !1);
      }
    }
    return null;
  }
  var _n = [],
    kn = 0,
    qr = null,
    Zr = 0,
    qe = [],
    Ze = 0,
    Jt = null,
    _t = 1,
    kt = '';
  function qt(e, t) {
    (_n[kn++] = Zr), (_n[kn++] = qr), (qr = e), (Zr = t);
  }
  function ds(e, t, n) {
    (qe[Ze++] = _t), (qe[Ze++] = kt), (qe[Ze++] = Jt), (Jt = e);
    var r = _t;
    e = kt;
    var l = 32 - ot(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ot(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (_t = (1 << (32 - ot(t) + l)) | (n << l) | r),
        (kt = o + e);
    } else (_t = (1 << o) | (n << l) | r), (kt = e);
  }
  function zo(e) {
    e.return !== null && (qt(e, 1), ds(e, 1, 0));
  }
  function jo(e) {
    for (; e === qr; ) (qr = _n[--kn]), (_n[kn] = null), (Zr = _n[--kn]), (_n[kn] = null);
    for (; e === Jt; )
      (Jt = qe[--Ze]),
        (qe[Ze] = null),
        (kt = qe[--Ze]),
        (qe[Ze] = null),
        (_t = qe[--Ze]),
        (qe[Ze] = null);
  }
  var Ye = null,
    Xe = null,
    fe = !1,
    ut = null;
  function ps(e, t) {
    var n = nt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function vs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Xe = Mt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Xe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: _t, overflow: kt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = nt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ye = e),
              (Xe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function No(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ro(e) {
    if (fe) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!vs(e, t)) {
          if (No(e)) throw Error(h(418));
          t = Mt(n.nextSibling);
          var r = Ye;
          t && vs(e, t) ? ps(r, n) : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (Ye = e));
        }
      } else {
        if (No(e)) throw Error(h(418));
        (e.flags = (e.flags & -4097) | 2), (fe = !1), (Ye = e);
      }
    }
  }
  function hs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ye = e;
  }
  function br(e) {
    if (e !== Ye) return !1;
    if (!fe) return hs(e), (fe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !_o(e.type, e.memoizedProps))),
      t && (t = Xe))
    ) {
      if (No(e)) throw (gs(), Error(h(418)));
      for (; t; ) ps(e, t), (t = Mt(t.nextSibling));
    }
    if ((hs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Xe = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Xe = null;
      }
    } else Xe = Ye ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gs() {
    for (var e = Xe; e; ) e = Mt(e.nextSibling);
  }
  function Pn() {
    (Xe = Ye = null), (fe = !1);
  }
  function To(e) {
    ut === null ? (ut = [e]) : ut.push(e);
  }
  var Of = X.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(h(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(h(147, e));
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
      if (typeof e != 'string') throw Error(h(284));
      if (!n._owner) throw Error(h(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        h(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      ))
    );
  }
  function ms(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ys(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), (a = a.sibling);
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
      return d;
    }
    function l(d, a) {
      return (d = Qt(d, a)), (d.index = 0), (d.sibling = null), d;
    }
    function o(d, a, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p) : ((d.flags |= 2), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function i(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, a, p, C) {
      return a === null || a.tag !== 6
        ? ((a = ki(p, d.mode, C)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function s(d, a, p, C) {
      var $ = p.type;
      return $ === Oe
        ? x(d, a, p.props.children, C, p.key)
        : a !== null &&
            (a.elementType === $ ||
              (typeof $ == 'object' && $ !== null && $.$$typeof === Fe && ms($) === a.type))
          ? ((C = l(a, p.props)), (C.ref = ir(d, a, p)), (C.return = d), C)
          : ((C = Pl(p.type, p.key, p.props, null, d.mode, C)),
            (C.ref = ir(d, a, p)),
            (C.return = d),
            C);
    }
    function g(d, a, p, C) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== p.containerInfo ||
        a.stateNode.implementation !== p.implementation
        ? ((a = Pi(p, d.mode, C)), (a.return = d), a)
        : ((a = l(a, p.children || [])), (a.return = d), a);
    }
    function x(d, a, p, C, $) {
      return a === null || a.tag !== 7
        ? ((a = on(p, d.mode, C, $)), (a.return = d), a)
        : ((a = l(a, p)), (a.return = d), a);
    }
    function k(d, a, p) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = ki('' + a, d.mode, p)), (a.return = d), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case Ee:
            return (
              (p = Pl(a.type, a.key, a.props, null, d.mode, p)),
              (p.ref = ir(d, null, a)),
              (p.return = d),
              p
            );
          case _e:
            return (a = Pi(a, d.mode, p)), (a.return = d), a;
          case Fe:
            var C = a._init;
            return k(d, C(a._payload), p);
        }
        if (Dn(a) || K(a)) return (a = on(a, d.mode, p, null)), (a.return = d), a;
        el(d, a);
      }
      return null;
    }
    function y(d, a, p, C) {
      var $ = a !== null ? a.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return $ !== null ? null : u(d, a, '' + p, C);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case Ee:
            return p.key === $ ? s(d, a, p, C) : null;
          case _e:
            return p.key === $ ? g(d, a, p, C) : null;
          case Fe:
            return ($ = p._init), y(d, a, $(p._payload), C);
        }
        if (Dn(p) || K(p)) return $ !== null ? null : x(d, a, p, C, null);
        el(d, p);
      }
      return null;
    }
    function T(d, a, p, C, $) {
      if ((typeof C == 'string' && C !== '') || typeof C == 'number')
        return (d = d.get(p) || null), u(a, d, '' + C, $);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case Ee:
            return (d = d.get(C.key === null ? p : C.key) || null), s(a, d, C, $);
          case _e:
            return (d = d.get(C.key === null ? p : C.key) || null), g(a, d, C, $);
          case Fe:
            var H = C._init;
            return T(d, a, p, H(C._payload), $);
        }
        if (Dn(C) || K(C)) return (d = d.get(p) || null), x(a, d, C, $, null);
        el(a, C);
      }
      return null;
    }
    function U(d, a, p, C) {
      for (var $ = null, H = null, Q = a, Y = (a = 0), Ce = null; Q !== null && Y < p.length; Y++) {
        Q.index > Y ? ((Ce = Q), (Q = null)) : (Ce = Q.sibling);
        var ne = y(d, Q, p[Y], C);
        if (ne === null) {
          Q === null && (Q = Ce);
          break;
        }
        e && Q && ne.alternate === null && t(d, Q),
          (a = o(ne, a, Y)),
          H === null ? ($ = ne) : (H.sibling = ne),
          (H = ne),
          (Q = Ce);
      }
      if (Y === p.length) return n(d, Q), fe && qt(d, Y), $;
      if (Q === null) {
        for (; Y < p.length; Y++)
          (Q = k(d, p[Y], C)),
            Q !== null && ((a = o(Q, a, Y)), H === null ? ($ = Q) : (H.sibling = Q), (H = Q));
        return fe && qt(d, Y), $;
      }
      for (Q = r(d, Q); Y < p.length; Y++)
        (Ce = T(Q, d, Y, p[Y], C)),
          Ce !== null &&
            (e && Ce.alternate !== null && Q.delete(Ce.key === null ? Y : Ce.key),
            (a = o(Ce, a, Y)),
            H === null ? ($ = Ce) : (H.sibling = Ce),
            (H = Ce));
      return (
        e &&
          Q.forEach(function (Kt) {
            return t(d, Kt);
          }),
        fe && qt(d, Y),
        $
      );
    }
    function A(d, a, p, C) {
      var $ = K(p);
      if (typeof $ != 'function') throw Error(h(150));
      if (((p = $.call(p)), p == null)) throw Error(h(151));
      for (
        var H = ($ = null), Q = a, Y = (a = 0), Ce = null, ne = p.next();
        Q !== null && !ne.done;
        Y++, ne = p.next()
      ) {
        Q.index > Y ? ((Ce = Q), (Q = null)) : (Ce = Q.sibling);
        var Kt = y(d, Q, ne.value, C);
        if (Kt === null) {
          Q === null && (Q = Ce);
          break;
        }
        e && Q && Kt.alternate === null && t(d, Q),
          (a = o(Kt, a, Y)),
          H === null ? ($ = Kt) : (H.sibling = Kt),
          (H = Kt),
          (Q = Ce);
      }
      if (ne.done) return n(d, Q), fe && qt(d, Y), $;
      if (Q === null) {
        for (; !ne.done; Y++, ne = p.next())
          (ne = k(d, ne.value, C)),
            ne !== null && ((a = o(ne, a, Y)), H === null ? ($ = ne) : (H.sibling = ne), (H = ne));
        return fe && qt(d, Y), $;
      }
      for (Q = r(d, Q); !ne.done; Y++, ne = p.next())
        (ne = T(Q, d, Y, ne.value, C)),
          ne !== null &&
            (e && ne.alternate !== null && Q.delete(ne.key === null ? Y : ne.key),
            (a = o(ne, a, Y)),
            H === null ? ($ = ne) : (H.sibling = ne),
            (H = ne));
      return (
        e &&
          Q.forEach(function (id) {
            return t(d, id);
          }),
        fe && qt(d, Y),
        $
      );
    }
    function ye(d, a, p, C) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === Oe &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case Ee:
            e: {
              for (var $ = p.key, H = a; H !== null; ) {
                if (H.key === $) {
                  if ((($ = p.type), $ === Oe)) {
                    if (H.tag === 7) {
                      n(d, H.sibling), (a = l(H, p.props.children)), (a.return = d), (d = a);
                      break e;
                    }
                  } else if (
                    H.elementType === $ ||
                    (typeof $ == 'object' && $ !== null && $.$$typeof === Fe && ms($) === H.type)
                  ) {
                    n(d, H.sibling),
                      (a = l(H, p.props)),
                      (a.ref = ir(d, H, p)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                  n(d, H);
                  break;
                } else t(d, H);
                H = H.sibling;
              }
              p.type === Oe
                ? ((a = on(p.props.children, d.mode, C, p.key)), (a.return = d), (d = a))
                : ((C = Pl(p.type, p.key, p.props, null, d.mode, C)),
                  (C.ref = ir(d, a, p)),
                  (C.return = d),
                  (d = C));
            }
            return i(d);
          case _e:
            e: {
              for (H = p.key; a !== null; ) {
                if (a.key === H)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === p.containerInfo &&
                    a.stateNode.implementation === p.implementation
                  ) {
                    n(d, a.sibling), (a = l(a, p.children || [])), (a.return = d), (d = a);
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              (a = Pi(p, d.mode, C)), (a.return = d), (d = a);
            }
            return i(d);
          case Fe:
            return (H = p._init), ye(d, a, H(p._payload), C);
        }
        if (Dn(p)) return U(d, a, p, C);
        if (K(p)) return A(d, a, p, C);
        el(d, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
            : (n(d, a), (a = ki(p, d.mode, C)), (a.return = d), (d = a)),
          i(d))
        : n(d, a);
    }
    return ye;
  }
  var Cn = ys(!0),
    ws = ys(!1),
    tl = Dt(null),
    nl = null,
    En = null,
    Lo = null;
  function Mo() {
    Lo = En = nl = null;
  }
  function Do(e) {
    var t = tl.current;
    ae(tl), (e._currentValue = t);
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
    (nl = e),
      (Lo = En = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && ($e = !0), (e.firstContext = null));
  }
  function be(e) {
    var t = e._currentValue;
    if (Lo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), En === null)) {
        if (nl === null) throw Error(h(308));
        (En = e), (nl.dependencies = { lanes: 0, firstContext: e });
      } else En = En.next = e;
    return t;
  }
  var Zt = null;
  function Fo(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function Ss(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Fo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Pt(e, r)
    );
  }
  function Pt(e, t) {
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
  var Ut = !1;
  function Uo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function xs(e, t) {
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
  function Ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (b & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Pt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Fo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Pt(e, n)
    );
  }
  function rl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
    }
  }
  function _s(e, t) {
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
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        g = s.next;
      (s.next = null), i === null ? (o = g) : (i.next = g), (i = s);
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (u = x.lastBaseUpdate),
        u !== i && (u === null ? (x.firstBaseUpdate = g) : (u.next = g), (x.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var k = l.baseState;
      (i = 0), (x = g = s = null), (u = o);
      do {
        var y = u.lane,
          T = u.eventTime;
        if ((r & y) === y) {
          x !== null &&
            (x = x.next =
              {
                eventTime: T,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var U = e,
              A = u;
            switch (((y = t), (T = n), A.tag)) {
              case 1:
                if (((U = A.payload), typeof U == 'function')) {
                  k = U.call(T, k, y);
                  break e;
                }
                k = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = A.payload), (y = typeof U == 'function' ? U.call(T, k, y) : U), y == null)
                )
                  break e;
                k = F({}, k, y);
                break e;
              case 2:
                Ut = !0;
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
            x === null ? ((g = x = T), (s = k)) : (x = x.next = T),
            (i |= y);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (y = u), (u = y.next), (y.next = null), (l.lastBaseUpdate = y), (l.shared.pending = null);
        }
      } while (!0);
      if (
        (x === null && (s = k),
        (l.baseState = s),
        (l.firstBaseUpdate = g),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (i |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (tn |= i), (e.lanes = i), (e.memoizedState = k);
    }
  }
  function ks(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(h(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    mt = Dt(ur),
    sr = Dt(ur),
    ar = Dt(ur);
  function bt(e) {
    if (e === ur) throw Error(h(174));
    return e;
  }
  function Ao(e, t) {
    switch ((ue(ar, t), ue(sr, e), ue(mt, ur), (e = t.nodeType), e)) {
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
    ae(mt), ue(mt, t);
  }
  function zn() {
    ae(mt), ae(sr), ae(ar);
  }
  function Ps(e) {
    bt(ar.current);
    var t = bt(mt.current),
      n = Al(t, e.type);
    t !== n && (ue(sr, e), ue(mt, n));
  }
  function $o(e) {
    sr.current === e && (ae(mt), ae(sr));
  }
  var pe = Dt(0);
  function ol(e) {
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
  var il = X.ReactCurrentDispatcher,
    Wo = X.ReactCurrentBatchConfig,
    en = 0,
    ve = null,
    Se = null,
    ke = null,
    ul = !1,
    cr = !1,
    fr = 0,
    zf = 0;
  function Re() {
    throw Error(h(321));
  }
  function Ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!it(e[n], t[n])) return !1;
    return !0;
  }
  function Qo(e, t, n, r, l, o) {
    if (
      ((en = o),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? Tf : Lf),
      (e = n(r, l)),
      cr)
    ) {
      o = 0;
      do {
        if (((cr = !1), (fr = 0), 25 <= o)) throw Error(h(301));
        (o += 1), (ke = Se = null), (t.updateQueue = null), (il.current = Mf), (e = n(r, l));
      } while (cr);
    }
    if (
      ((il.current = cl),
      (t = Se !== null && Se.next !== null),
      (en = 0),
      (ke = Se = ve = null),
      (ul = !1),
      t)
    )
      throw Error(h(300));
    return e;
  }
  function Ko() {
    var e = fr !== 0;
    return (fr = 0), e;
  }
  function yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ke === null ? (ve.memoizedState = ke = e) : (ke = ke.next = e), ke;
  }
  function et() {
    if (Se === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = ke === null ? ve.memoizedState : ke.next;
    if (t !== null) (ke = t), (Se = e);
    else {
      if (e === null) throw Error(h(310));
      (Se = e),
        (e = {
          memoizedState: Se.memoizedState,
          baseState: Se.baseState,
          baseQueue: Se.baseQueue,
          queue: Se.queue,
          next: null,
        }),
        ke === null ? (ve.memoizedState = ke = e) : (ke = ke.next = e);
    }
    return ke;
  }
  function dr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Yo(e) {
    var t = et(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = Se,
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
        g = o;
      do {
        var x = g.lane;
        if ((en & x) === x)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action));
        else {
          var k = {
            lane: x,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          s === null ? ((u = s = k), (i = r)) : (s = s.next = k), (ve.lanes |= x), (tn |= x);
        }
        g = g.next;
      } while (g !== null && g !== o);
      s === null ? (i = r) : (s.next = u),
        it(r, t.memoizedState) || ($e = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ve.lanes |= o), (tn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xo(e) {
    var t = et(),
      n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== l);
      it(o, t.memoizedState) || ($e = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Cs() {}
  function Es(e, t) {
    var n = ve,
      r = et(),
      l = t(),
      o = !it(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), ($e = !0)),
      (r = r.queue),
      Go(js.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), pr(9, zs.bind(null, n, r, l, t), void 0, null), Pe === null))
        throw Error(h(349));
      (en & 30) !== 0 || Os(n, t, l);
    }
    return l;
  }
  function Os(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function zs(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ns(t) && Rs(e);
  }
  function js(e, t, n) {
    return n(function () {
      Ns(t) && Rs(e);
    });
  }
  function Ns(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !it(e, n);
    } catch {
      return !0;
    }
  }
  function Rs(e) {
    var t = Pt(e, 1);
    t !== null && ft(t, e, 1, -1);
  }
  function Ts(e) {
    var t = yt();
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
      (e = e.dispatch = Rf.bind(null, ve, e)),
      [t.memoizedState, e]
    );
  }
  function pr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ls() {
    return et().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = yt();
    (ve.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function al(e, t, n, r) {
    var l = et();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Se !== null) {
      var i = Se.memoizedState;
      if (((o = i.destroy), r !== null && Ho(r, i.deps))) {
        l.memoizedState = pr(t, n, o, r);
        return;
      }
    }
    (ve.flags |= e), (l.memoizedState = pr(1 | t, n, o, r));
  }
  function Ms(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Go(e, t) {
    return al(2048, 8, e, t);
  }
  function Ds(e, t) {
    return al(4, 2, e, t);
  }
  function Is(e, t) {
    return al(4, 4, e, t);
  }
  function Fs(e, t) {
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
  function Us(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), al(4, 4, Fs.bind(null, t, e), n);
  }
  function Jo() {}
  function As(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function $s(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Bs(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n))
      : (it(n, t) || ((n = mu()), (ve.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function jf(e, t) {
    var n = le;
    (le = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Wo.transition;
    Wo.transition = {};
    try {
      e(!1), t();
    } finally {
      (le = n), (Wo.transition = r);
    }
  }
  function Vs() {
    return et().memoizedState;
  }
  function Nf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ws(e)))
      Hs(t, n);
    else if (((n = Ss(e, t, n, r)), n !== null)) {
      var l = Ie();
      ft(n, e, r, l), Qs(n, t, r);
    }
  }
  function Rf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ws(e)) Hs(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = u), it(u, i))) {
            var s = t.interleaved;
            s === null ? ((l.next = l), Fo(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ss(e, t, l, r)), n !== null && ((l = Ie()), ft(n, e, r, l), Qs(n, t, r));
    }
  }
  function Ws(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function Hs(e, t) {
    cr = ul = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function Qs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n);
    }
  }
  var cl = {
      readContext: be,
      useCallback: Re,
      useContext: Re,
      useEffect: Re,
      useImperativeHandle: Re,
      useInsertionEffect: Re,
      useLayoutEffect: Re,
      useMemo: Re,
      useReducer: Re,
      useRef: Re,
      useState: Re,
      useDebugValue: Re,
      useDeferredValue: Re,
      useTransition: Re,
      useMutableSource: Re,
      useSyncExternalStore: Re,
      useId: Re,
      unstable_isNewReconciler: !1,
    },
    Tf = {
      readContext: be,
      useCallback: function (e, t) {
        return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: be,
      useEffect: Ms,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), sl(4194308, 4, Fs.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = yt();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = yt();
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
          (e = e.dispatch = Nf.bind(null, ve, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ts,
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        return (yt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ts(!1),
          t = e[0];
        return (e = jf.bind(null, e[1])), (yt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ve,
          l = yt();
        if (fe) {
          if (n === void 0) throw Error(h(407));
          n = n();
        } else {
          if (((n = t()), Pe === null)) throw Error(h(349));
          (en & 30) !== 0 || Os(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ms(js.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          pr(9, zs.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = yt(),
          t = Pe.identifierPrefix;
        if (fe) {
          var n = kt,
            r = _t;
          (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = fr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = zf++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Lf = {
      readContext: be,
      useCallback: As,
      useContext: be,
      useEffect: Go,
      useImperativeHandle: Us,
      useInsertionEffect: Ds,
      useLayoutEffect: Is,
      useMemo: $s,
      useReducer: Yo,
      useRef: Ls,
      useState: function () {
        return Yo(dr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = et();
        return Bs(t, Se.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(dr)[0],
          t = et().memoizedState;
        return [e, t];
      },
      useMutableSource: Cs,
      useSyncExternalStore: Es,
      useId: Vs,
      unstable_isNewReconciler: !1,
    },
    Mf = {
      readContext: be,
      useCallback: As,
      useContext: be,
      useEffect: Go,
      useImperativeHandle: Us,
      useInsertionEffect: Ds,
      useLayoutEffect: Is,
      useMemo: $s,
      useReducer: Xo,
      useRef: Ls,
      useState: function () {
        return Xo(dr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = et();
        return Se === null ? (t.memoizedState = e) : Bs(t, Se.memoizedState, e);
      },
      useTransition: function () {
        var e = Xo(dr)[0],
          t = et().memoizedState;
        return [e, t];
      },
      useMutableSource: Cs,
      useSyncExternalStore: Es,
      useId: Vs,
      unstable_isNewReconciler: !1,
    };
  function st(e, t) {
    if (e && e.defaultProps) {
      (t = F({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : F({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ie(),
        l = Wt(e),
        o = Ct(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = At(e, o, l)),
        t !== null && (ft(t, e, l, r), rl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ie(),
        l = Wt(e),
        o = Ct(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = At(e, o, l)),
        t !== null && (ft(t, e, l, r), rl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ie(),
        r = Wt(e),
        l = Ct(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ft(t, e, r, n), rl(t, e, r));
    },
  };
  function Ks(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !bn(n, r) || !bn(l, o)
          : !0
    );
  }
  function Ys(e, t, n) {
    var r = !1,
      l = It,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = be(o))
        : ((l = Ae(t) ? Gt : Ne.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? xn(e, l) : It)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Xs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function Zo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Uo(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = be(o))
      : ((o = Ae(t) ? Gt : Ne.current), (l.context = xn(e, o))),
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
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function jn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += ee(r)), (r = r.return);
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
  function Gs(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        yl || ((yl = !0), (hi = r)), ei(e, t);
      }),
      n
    );
  }
  function Js(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3);
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
  function qs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Df();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Gf.bind(null, e, t, n)), t.then(e, e));
  }
  function Zs(e) {
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
  function bs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var If = X.ReactCurrentOwner,
    $e = !1;
  function De(e, t, n, r) {
    t.child = e === null ? ws(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function ea(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = Qo(e, t, n, r, o, l)),
      (n = Ko()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Et(e, t, l))
        : (fe && n && zo(t), (t.flags |= 1), De(e, t, r, l), t.child)
    );
  }
  function ta(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !_i(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), na(e, t, o, r, l))
        : ((e = Pl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref))
        return Et(e, t, l);
    }
    return (t.flags |= 1), (e = Qt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function na(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (bn(o, r) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return (t.lanes = e.lanes), Et(e, t, l);
    }
    return ti(e, t, n, r, l);
  }
  function ra(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ue(Rn, Ge),
          (Ge |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ue(Rn, Ge),
            (Ge |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          ue(Rn, Ge),
          (Ge |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ue(Rn, Ge),
        (Ge |= r);
    return De(e, t, l, n), t.child;
  }
  function la(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ti(e, t, n, r, l) {
    var o = Ae(n) ? Gt : Ne.current;
    return (
      (o = xn(t, o)),
      On(t, l),
      (n = Qo(e, t, n, r, o, l)),
      (r = Ko()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Et(e, t, l))
        : (fe && r && zo(t), (t.flags |= 1), De(e, t, n, l), t.child)
    );
  }
  function oa(e, t, n, r, l) {
    if (Ae(n)) {
      var o = !0;
      Gr(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null)) pl(e, t), Ys(t, n, r), Zo(t, n, r, l), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var s = i.context,
        g = n.contextType;
      typeof g == 'object' && g !== null
        ? (g = be(g))
        : ((g = Ae(n) ? Gt : Ne.current), (g = xn(t, g)));
      var x = n.getDerivedStateFromProps,
        k = typeof x == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      k ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== g) && Xs(t, i, r, g)),
        (Ut = !1);
      var y = t.memoizedState;
      (i.state = y),
        ll(t, r, i, l),
        (s = t.memoizedState),
        u !== r || y !== s || Ue.current || Ut
          ? (typeof x == 'function' && (qo(t, n, x, r), (s = t.memoizedState)),
            (u = Ut || Ks(t, n, u, r, y, s, g))
              ? (k ||
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
            (i.context = g),
            (r = u))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (i = t.stateNode),
        xs(e, t),
        (u = t.memoizedProps),
        (g = t.type === t.elementType ? u : st(t.type, u)),
        (i.props = g),
        (k = t.pendingProps),
        (y = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = be(s))
          : ((s = Ae(n) ? Gt : Ne.current), (s = xn(t, s)));
      var T = n.getDerivedStateFromProps;
      (x = typeof T == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((u !== k || y !== s) && Xs(t, i, r, s)),
        (Ut = !1),
        (y = t.memoizedState),
        (i.state = y),
        ll(t, r, i, l);
      var U = t.memoizedState;
      u !== k || y !== U || Ue.current || Ut
        ? (typeof T == 'function' && (qo(t, n, T, r), (U = t.memoizedState)),
          (g = Ut || Ks(t, n, g, r, y, U, s) || !1)
            ? (x ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, U, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, U, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = U)),
          (i.props = r),
          (i.state = U),
          (i.context = s),
          (r = g))
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
    la(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && cs(t, n, !1), Et(e, t, o);
    (r = t.stateNode), (If.current = t);
    var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, u, o)))
        : De(e, t, u, o),
      (t.memoizedState = r.state),
      l && cs(t, n, !0),
      t.child
    );
  }
  function ia(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ss(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ss(e, t.context, !1),
      Ao(e, t.containerInfo);
  }
  function ua(e, t, n, r, l) {
    return Pn(), To(l), (t.flags |= 256), De(e, t, n, r), t.child;
  }
  var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function sa(e, t, n) {
    var r = t.pendingProps,
      l = pe.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ue(pe, l & 1),
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
                  : (o = Cl(i, r, 0, null)),
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
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = Qt(u, o)) : ((o = on(o, i, n, null)), (o.flags |= 2)),
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
      (r = Qt(o, { mode: 'visible', children: r.children })),
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
      (t = Cl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && To(r),
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
        ? ((t.flags &= -257), (r = bo(Error(h(422)))), dl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: 'visible', children: r.children }, l, 0, null)),
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
    if ((t.mode & 1) === 0) return dl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (r = u), (o = Error(h(419))), (r = bo(o, r, void 0)), dl(e, t, i, r);
    }
    if (((u = (i & e.childLanes) !== 0), $e || u)) {
      if (((r = Pe), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Pt(e, l), ft(r, e, l, -1));
      }
      return xi(), (r = bo(Error(h(421)))), dl(e, t, i, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Jf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Xe = Mt(l.nextSibling)),
        (Ye = t),
        (fe = !0),
        (ut = null),
        e !== null &&
          ((qe[Ze++] = _t),
          (qe[Ze++] = kt),
          (qe[Ze++] = Jt),
          (_t = e.id),
          (kt = e.overflow),
          (Jt = t)),
        (t = oi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function aa(e, t, n) {
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
  function ca(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((De(e, t, r.children, n), (r = pe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
          else if (e.tag === 19) aa(e, n, t);
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
    if ((ue(pe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate), e !== null && ol(e) === null && (l = n), (n = n.sibling);
          (n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ii(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ol(e) === null)) {
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
  function pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Et(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (tn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Uf(e, t, n) {
    switch (t.tag) {
      case 3:
        ia(t), Pn();
        break;
      case 5:
        Ps(t);
        break;
      case 1:
        Ae(t.type) && Gr(t);
        break;
      case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ue(tl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ue(pe, pe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? sa(e, t, n)
              : (ue(pe, pe.current & 1), (e = Et(e, t, n)), e !== null ? e.sibling : null);
        ue(pe, pe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ca(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ue(pe, pe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ra(e, t, n);
    }
    return Et(e, t, n);
  }
  var fa, ui, da, pa;
  (fa = function (e, t) {
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
    (da = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), bt(mt.current);
        var o = null;
        switch (n) {
          case 'input':
            (l = Dl(e, l)), (r = Dl(e, r)), (o = []);
            break;
          case 'select':
            (l = F({}, l, { value: void 0 })), (r = F({}, r, { value: void 0 })), (o = []);
            break;
          case 'textarea':
            (l = Ul(e, l)), (r = Ul(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Kr);
        }
        $l(n, r);
        var i;
        n = null;
        for (g in l)
          if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
            if (g === 'style') {
              var u = l[g];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              g !== 'dangerouslySetInnerHTML' &&
                g !== 'children' &&
                g !== 'suppressContentEditableWarning' &&
                g !== 'suppressHydrationWarning' &&
                g !== 'autoFocus' &&
                (L.hasOwnProperty(g) ? o || (o = []) : (o = o || []).push(g, null));
        for (g in r) {
          var s = r[g];
          if (
            ((u = l != null ? l[g] : void 0),
            r.hasOwnProperty(g) && s !== u && (s != null || u != null))
          )
            if (g === 'style')
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else n || (o || (o = []), o.push(g, n)), (n = s);
            else
              g === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (o = o || []).push(g, s))
                : g === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') || (o = o || []).push(g, '' + s)
                  : g !== 'suppressContentEditableWarning' &&
                    g !== 'suppressHydrationWarning' &&
                    (L.hasOwnProperty(g)
                      ? (s != null && g === 'onScroll' && se('scroll', e), o || u === s || (o = []))
                      : (o = o || []).push(g, s));
        }
        n && (o = o || []).push('style', n);
        var g = o;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (pa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function vr(e, t) {
    if (!fe)
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
  function Te(e) {
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
    switch ((jo(t), t.tag)) {
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
        return Te(t), null;
      case 1:
        return Ae(t.type) && Xr(), Te(t), null;
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          ae(Ue),
          ae(Ne),
          Vo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ut !== null && (yi(ut), (ut = null)))),
          ui(e, t),
          Te(t),
          null
        );
      case 5:
        $o(t);
        var l = bt(ar.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          da(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166));
            return Te(t), null;
          }
          if (((e = bt(mt.current)), br(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[gt] = t), (r[lr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                se('cancel', r), se('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                se('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < tr.length; l++) se(tr[l], r);
                break;
              case 'source':
                se('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                se('error', r), se('load', r);
                break;
              case 'details':
                se('toggle', r);
                break;
              case 'input':
                Yi(r, o), se('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), se('invalid', r);
                break;
              case 'textarea':
                Ji(r, o), se('invalid', r);
            }
            $l(n, o), (l = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (o.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : L.hasOwnProperty(i) && u != null && i === 'onScroll' && se('scroll', r);
              }
            switch (n) {
              case 'input':
                _r(r), Gi(r, o, !0);
                break;
              case 'textarea':
                _r(r), Zi(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Kr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = bi(n)),
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
              (e[gt] = t),
              (e[lr] = r),
              fa(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = Bl(n, r)), n)) {
                case 'dialog':
                  se('cancel', e), se('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  se('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < tr.length; l++) se(tr[l], e);
                  l = r;
                  break;
                case 'source':
                  se('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  se('error', e), se('load', e), (l = r);
                  break;
                case 'details':
                  se('toggle', e), (l = r);
                  break;
                case 'input':
                  Yi(e, r), (l = Dl(e, r)), se('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = F({}, r, { value: void 0 })),
                    se('invalid', e);
                  break;
                case 'textarea':
                  Ji(e, r), (l = Ul(e, r)), se('invalid', e);
                  break;
                default:
                  l = r;
              }
              $l(n, l), (u = l);
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === 'style'
                    ? nu(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && eu(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && In(e, s)
                          : typeof s == 'number' && In(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (L.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && se('scroll', e)
                            : s != null && de(e, o, s, i));
                }
              switch (n) {
                case 'input':
                  _r(e), Gi(e, r, !1);
                  break;
                case 'textarea':
                  _r(e), Zi(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + re(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? an(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Kr);
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
        return Te(t), null;
      case 6:
        if (e && t.stateNode != null) pa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(h(166));
          if (((n = bt(ar.current)), bt(mt.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[gt] = t),
              (o = r.nodeValue !== n) && ((e = Ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[gt] = t),
              (t.stateNode = r);
        }
        return Te(t), null;
      case 13:
        if (
          (ae(pe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (fe && Xe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            gs(), Pn(), (t.flags |= 98560), (o = !1);
          else if (((o = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(h(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(h(317));
              o[gt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Te(t), (o = !1);
          } else ut !== null && (yi(ut), (ut = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (pe.current & 1) !== 0 ? xe === 0 && (xe = 3) : xi())),
            t.updateQueue !== null && (t.flags |= 4),
            Te(t),
            null);
      case 4:
        return zn(), ui(e, t), e === null && nr(t.stateNode.containerInfo), Te(t), null;
      case 10:
        return Do(t.type._context), Te(t), null;
      case 17:
        return Ae(t.type) && Xr(), Te(t), null;
      case 19:
        if ((ae(pe), (o = t.memoizedState), o === null)) return Te(t), null;
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) vr(o, !1);
          else {
            if (xe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ol(e)), i !== null)) {
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
                  return ue(pe, (pe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              me() > Tn &&
              ((t.flags |= 128), (r = !0), vr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ol(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                vr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !i.alternate && !fe)
              )
                return Te(t), null;
            } else
              2 * me() - o.renderingStartTime > Tn &&
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
            (o.renderingStartTime = me()),
            (t.sibling = null),
            (n = pe.current),
            ue(pe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          Si(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ge & 1073741824) !== 0 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $f(e, t) {
    switch ((jo(t), t.tag)) {
      case 1:
        return (
          Ae(t.type) && Xr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          ae(Ue),
          ae(Ne),
          Vo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return $o(t), null;
      case 13:
        if ((ae(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          Pn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ae(pe), null;
      case 4:
        return zn(), null;
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
  var vl = !1,
    Le = !1,
    Bf = typeof WeakSet == 'function' ? WeakSet : Set,
    I = null;
  function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          ge(e, t, r);
        }
      else n.current = null;
  }
  function si(e, t, n) {
    try {
      n();
    } catch (r) {
      ge(e, t, r);
    }
  }
  var va = !1;
  function Vf(e, t) {
    if (((So = Mr), (e = Ku()), fo(e))) {
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
              g = 0,
              x = 0,
              k = e,
              y = null;
            t: for (;;) {
              for (
                var T;
                k !== n || (l !== 0 && k.nodeType !== 3) || (u = i + l),
                  k !== o || (r !== 0 && k.nodeType !== 3) || (s = i + r),
                  k.nodeType === 3 && (i += k.nodeValue.length),
                  (T = k.firstChild) !== null;

              )
                (y = k), (k = T);
              for (;;) {
                if (k === e) break t;
                if (
                  (y === n && ++g === l && (u = i),
                  y === o && ++x === r && (s = i),
                  (T = k.nextSibling) !== null)
                )
                  break;
                (k = y), (y = k.parentNode);
              }
              k = T;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: e, selectionRange: n }, Mr = !1, I = t; I !== null; )
      if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (I = e);
      else
        for (; I !== null; ) {
          t = I;
          try {
            var U = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var A = U.memoizedProps,
                      ye = U.memoizedState,
                      d = t.stateNode,
                      a = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? A : st(t.type, A),
                        ye,
                      );
                    d.__reactInternalSnapshotBeforeUpdate = a;
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
                  throw Error(h(163));
              }
          } catch (C) {
            ge(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (I = e);
            break;
          }
          I = t.return;
        }
    return (U = va), (va = !1), U;
  }
  function hr(e, t, n) {
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
  function hl(e, t) {
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
  function ha(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ha(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[gt], delete t[lr], delete t[Co], delete t[Pf], delete t[Cf])),
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
  function ma(e) {
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
            n != null || t.onclick !== null || (t.onclick = Kr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
  }
  function fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (fi(e, t, n), e = e.sibling; e !== null; ) fi(e, t, n), (e = e.sibling);
  }
  var ze = null,
    at = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) ya(e, t, n), (n = n.sibling);
  }
  function ya(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == 'function')
      try {
        ht.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Le || Nn(n, t);
      case 6:
        var r = ze,
          l = at;
        (ze = null),
          $t(e, t, n),
          (ze = r),
          (at = l),
          ze !== null &&
            (at
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (at
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? Po(e.parentNode, n) : e.nodeType === 1 && Po(e, n),
              Yn(e))
            : Po(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = at),
          (ze = n.stateNode.containerInfo),
          (at = !0),
          $t(e, t, n),
          (ze = r),
          (at = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Le && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && si(n, t, i),
              (l = l.next);
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!Le && (Nn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (u) {
            ge(n, t, u);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Le = (r = Le) || n.memoizedState !== null), $t(e, t, n), (Le = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function wa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bf()),
        t.forEach(function (r) {
          var l = qf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ct(e, t) {
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
                (ze = u.stateNode), (at = !1);
                break e;
              case 3:
                (ze = u.stateNode.containerInfo), (at = !0);
                break e;
              case 4:
                (ze = u.stateNode.containerInfo), (at = !0);
                break e;
            }
            u = u.return;
          }
          if (ze === null) throw Error(h(160));
          ya(o, i, l), (ze = null), (at = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (g) {
          ge(l, t, g);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Sa(t, e), (t = t.sibling);
  }
  function Sa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ct(t, e), wt(e), r & 4)) {
          try {
            hr(3, e, e.return), hl(3, e);
          } catch (A) {
            ge(e, e.return, A);
          }
          try {
            hr(5, e, e.return);
          } catch (A) {
            ge(e, e.return, A);
          }
        }
        break;
      case 1:
        ct(t, e), wt(e), r & 512 && n !== null && Nn(n, n.return);
        break;
      case 5:
        if ((ct(t, e), wt(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            In(l, '');
          } catch (A) {
            ge(e, e.return, A);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === 'input' && o.type === 'radio' && o.name != null && Xi(l, o), Bl(u, i);
              var g = Bl(u, o);
              for (i = 0; i < s.length; i += 2) {
                var x = s[i],
                  k = s[i + 1];
                x === 'style'
                  ? nu(l, k)
                  : x === 'dangerouslySetInnerHTML'
                    ? eu(l, k)
                    : x === 'children'
                      ? In(l, k)
                      : de(l, x, k, g);
              }
              switch (u) {
                case 'input':
                  Il(l, o);
                  break;
                case 'textarea':
                  qi(l, o);
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
              l[lr] = o;
            } catch (A) {
              ge(e, e.return, A);
            }
        }
        break;
      case 6:
        if ((ct(t, e), wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (A) {
            ge(e, e.return, A);
          }
        }
        break;
      case 3:
        if ((ct(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Yn(t.containerInfo);
          } catch (A) {
            ge(e, e.return, A);
          }
        break;
      case 4:
        ct(t, e), wt(e);
        break;
      case 13:
        ct(t, e),
          wt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (vi = me())),
          r & 4 && wa(e);
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Le = (g = Le) || x), ct(t, e), (Le = g)) : ct(t, e),
          wt(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null), (e.stateNode.isHidden = g) && !x && (e.mode & 1) !== 0)
          )
            for (I = e, x = e.child; x !== null; ) {
              for (k = I = x; I !== null; ) {
                switch (((y = I), (T = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, y, y.return);
                    break;
                  case 1:
                    Nn(y, y.return);
                    var U = y.stateNode;
                    if (typeof U.componentWillUnmount == 'function') {
                      (r = y), (n = y.return);
                      try {
                        (t = r),
                          (U.props = t.memoizedProps),
                          (U.state = t.memoizedState),
                          U.componentWillUnmount();
                      } catch (A) {
                        ge(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    Nn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      ka(k);
                      continue;
                    }
                }
                T !== null ? ((T.return = y), (I = T)) : ka(k);
              }
              x = x.sibling;
            }
          e: for (x = null, k = e; ; ) {
            if (k.tag === 5) {
              if (x === null) {
                x = k;
                try {
                  (l = k.stateNode),
                    g
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((u = k.stateNode),
                        (s = k.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                        (u.style.display = tu('display', i)));
                } catch (A) {
                  ge(e, e.return, A);
                }
              }
            } else if (k.tag === 6) {
              if (x === null)
                try {
                  k.stateNode.nodeValue = g ? '' : k.memoizedProps;
                } catch (A) {
                  ge(e, e.return, A);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) || k.memoizedState === null || k === e) &&
              k.child !== null
            ) {
              (k.child.return = k), (k = k.child);
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              x === k && (x = null), (k = k.return);
            }
            x === k && (x = null), (k.sibling.return = k.return), (k = k.sibling);
          }
        }
        break;
      case 19:
        ct(t, e), wt(e), r & 4 && wa(e);
        break;
      case 21:
        break;
      default:
        ct(t, e), wt(e);
    }
  }
  function wt(e) {
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
          throw Error(h(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ''), (r.flags &= -33));
            var o = ma(e);
            fi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = ma(e);
            ci(e, u, i);
            break;
          default:
            throw Error(h(161));
        }
      } catch (s) {
        ge(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wf(e, t, n) {
    (I = e), xa(e);
  }
  function xa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
      var l = I,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || vl;
        if (!i) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Le;
          u = vl;
          var g = Le;
          if (((vl = i), (Le = s) && !g))
            for (I = l; I !== null; )
              (i = I),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Pa(l)
                  : s !== null
                    ? ((s.return = i), (I = s))
                    : Pa(l);
          for (; o !== null; ) (I = o), xa(o), (o = o.sibling);
          (I = l), (vl = u), (Le = g);
        }
        _a(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (I = o)) : _a(e);
    }
  }
  function _a(e) {
    for (; I !== null; ) {
      var t = I;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Le || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Le)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && ks(t, o, r);
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
                  ks(t, i, n);
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
                  var g = t.alternate;
                  if (g !== null) {
                    var x = g.memoizedState;
                    if (x !== null) {
                      var k = x.dehydrated;
                      k !== null && Yn(k);
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
                throw Error(h(163));
            }
          Le || (t.flags & 512 && ai(t));
        } catch (y) {
          ge(t, t.return, y);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function ka(e) {
    for (; I !== null; ) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function Pa(e) {
    for (; I !== null; ) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (s) {
              ge(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ge(t, l, s);
              }
            }
            var o = t.return;
            try {
              ai(t);
            } catch (s) {
              ge(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ai(t);
            } catch (s) {
              ge(t, i, s);
            }
        }
      } catch (s) {
        ge(t, t.return, s);
      }
      if (t === e) {
        I = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (I = u);
        break;
      }
      I = t.return;
    }
  }
  var Hf = Math.ceil,
    gl = X.ReactCurrentDispatcher,
    di = X.ReactCurrentOwner,
    tt = X.ReactCurrentBatchConfig,
    b = 0,
    Pe = null,
    we = null,
    je = 0,
    Ge = 0,
    Rn = Dt(0),
    xe = 0,
    gr = null,
    tn = 0,
    ml = 0,
    pi = 0,
    mr = null,
    Be = null,
    vi = 0,
    Tn = 1 / 0,
    Ot = null,
    yl = !1,
    hi = null,
    Bt = null,
    wl = !1,
    Vt = null,
    Sl = 0,
    yr = 0,
    gi = null,
    xl = -1,
    _l = 0;
  function Ie() {
    return (b & 6) !== 0 ? me() : xl !== -1 ? xl : (xl = me());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (b & 2) !== 0 && je !== 0
        ? je & -je
        : Of.transition !== null
          ? (_l === 0 && (_l = mu()), _l)
          : ((e = le), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eu(e.type))), e);
  }
  function ft(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (gi = null), Error(h(185)));
    Vn(e, n, r),
      ((b & 2) === 0 || e !== Pe) &&
        (e === Pe && ((b & 2) === 0 && (ml |= n), xe === 4 && Ht(e, je)),
        Ve(e, r),
        n === 1 && b === 0 && (t.mode & 1) === 0 && ((Tn = me() + 500), Jr && Ft()));
  }
  function Ve(e, t) {
    var n = e.callbackNode;
    Ec(e, t);
    var r = Rr(e, e === Pe ? je : 0);
    if (r === 0) n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && vu(n), t === 1))
        e.tag === 0 ? Ef(Ea.bind(null, e)) : fs(Ea.bind(null, e)),
          _f(function () {
            (b & 6) === 0 && Ft();
          }),
          (n = null);
      else {
        switch (yu(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = hu;
            break;
          case 16:
            n = Or;
            break;
          case 536870912:
            n = gu;
            break;
          default:
            n = Or;
        }
        n = Ma(n, Ca.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ca(e, t) {
    if (((xl = -1), (_l = 0), (b & 6) !== 0)) throw Error(h(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = Rr(e, e === Pe ? je : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = b;
      b |= 2;
      var o = za();
      (Pe !== e || je !== t) && ((Ot = null), (Tn = me() + 500), rn(e, t));
      do
        try {
          Yf();
          break;
        } catch (u) {
          Oa(e, u);
        }
      while (!0);
      Mo(), (gl.current = o), (b = l), we !== null ? (t = 0) : ((Pe = null), (je = 0), (t = xe));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Gl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = gr), rn(e, 0), Ht(e, r), Ve(e, me()), n);
      if (t === 6) Ht(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Qf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((o = Gl(e)), o !== 0 && ((r = o), (t = mi(e, o)))),
            t === 1))
        )
          throw ((n = gr), rn(e, 0), Ht(e, r), Ve(e, me()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            ln(e, Be, Ot);
            break;
          case 3:
            if ((Ht(e, r), (r & 130023424) === r && ((t = vi + 500 - me()), 10 < t))) {
              if (Rr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ie(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ko(ln.bind(null, e, Be, Ot), t);
              break;
            }
            ln(e, Be, Ot);
            break;
          case 4:
            if ((Ht(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - ot(r);
              (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
            }
            if (
              ((r = l),
              (r = me() - r),
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
              e.timeoutHandle = ko(ln.bind(null, e, Be, Ot), r);
              break;
            }
            ln(e, Be, Ot);
            break;
          case 5:
            ln(e, Be, Ot);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return Ve(e, me()), e.callbackNode === n ? Ca.bind(null, e) : null;
  }
  function mi(e, t) {
    var n = mr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = kl(e, t)),
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
              if (!it(o(), l)) return !1;
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
  function Ht(e, t) {
    for (
      t &= ~pi, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ot(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ea(e) {
    if ((b & 6) !== 0) throw Error(h(327));
    Ln();
    var t = Rr(e, 0);
    if ((t & 1) === 0) return Ve(e, me()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = gr), rn(e, 0), Ht(e, t), Ve(e, me()), n);
    if (n === 6) throw Error(h(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Be, Ot),
      Ve(e, me()),
      null
    );
  }
  function wi(e, t) {
    var n = b;
    b |= 1;
    try {
      return e(t);
    } finally {
      (b = n), b === 0 && ((Tn = me() + 500), Jr && Ft());
    }
  }
  function nn(e) {
    Vt !== null && Vt.tag === 0 && (b & 6) === 0 && Ln();
    var t = b;
    b |= 1;
    var n = tt.transition,
      r = le;
    try {
      if (((tt.transition = null), (le = 1), e)) return e();
    } finally {
      (le = r), (tt.transition = n), (b = t), (b & 6) === 0 && Ft();
    }
  }
  function Si() {
    (Ge = Rn.current), ae(Rn);
  }
  function rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), xf(n)), we !== null))
      for (n = we.return; n !== null; ) {
        var r = n;
        switch ((jo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Xr();
            break;
          case 3:
            zn(), ae(Ue), ae(Ne), Vo();
            break;
          case 5:
            $o(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            ae(pe);
            break;
          case 19:
            ae(pe);
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
      ((Pe = e),
      (we = e = Qt(e.current, null)),
      (je = Ge = t),
      (xe = 0),
      (gr = null),
      (pi = ml = tn = 0),
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
  function Oa(e, t) {
    do {
      var n = we;
      try {
        if ((Mo(), (il.current = cl), ul)) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ul = !1;
        }
        if (
          ((en = 0),
          (ke = Se = ve = null),
          (cr = !1),
          (fr = 0),
          (di.current = null),
          n === null || n.return === null)
        ) {
          (xe = 1), (gr = t), (we = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            s = t;
          if (
            ((t = je),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var g = s,
              x = u,
              k = x.tag;
            if ((x.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = x.alternate;
              y
                ? ((x.updateQueue = y.updateQueue),
                  (x.memoizedState = y.memoizedState),
                  (x.lanes = y.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var T = Zs(i);
            if (T !== null) {
              (T.flags &= -257), bs(T, i, u, o, t), T.mode & 1 && qs(o, g, t), (t = T), (s = g);
              var U = t.updateQueue;
              if (U === null) {
                var A = new Set();
                A.add(s), (t.updateQueue = A);
              } else U.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                qs(o, g, t), xi();
                break e;
              }
              s = Error(h(426));
            }
          } else if (fe && u.mode & 1) {
            var ye = Zs(i);
            if (ye !== null) {
              (ye.flags & 65536) === 0 && (ye.flags |= 256), bs(ye, i, u, o, t), To(jn(s, u));
              break e;
            }
          }
          (o = s = jn(s, u)), xe !== 4 && (xe = 2), mr === null ? (mr = [o]) : mr.push(o), (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var d = Gs(o, s, t);
                _s(o, d);
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
                  var C = Js(o, u, t);
                  _s(o, C);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Na(n);
      } catch ($) {
        (t = $), we === n && n !== null && (we = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function za() {
    var e = gl.current;
    return (gl.current = cl), e === null ? cl : e;
  }
  function xi() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
      Pe === null || ((tn & 268435455) === 0 && (ml & 268435455) === 0) || Ht(Pe, je);
  }
  function kl(e, t) {
    var n = b;
    b |= 2;
    var r = za();
    (Pe !== e || je !== t) && ((Ot = null), rn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        Oa(e, l);
      }
    while (!0);
    if ((Mo(), (b = n), (gl.current = r), we !== null)) throw Error(h(261));
    return (Pe = null), (je = 0), xe;
  }
  function Kf() {
    for (; we !== null; ) ja(we);
  }
  function Yf() {
    for (; we !== null && !mc(); ) ja(we);
  }
  function ja(e) {
    var t = La(e.alternate, e, Ge);
    (e.memoizedProps = e.pendingProps), t === null ? Na(e) : (we = t), (di.current = null);
  }
  function Na(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Af(n, t, Ge)), n !== null)) {
          we = n;
          return;
        }
      } else {
        if (((n = $f(n, t)), n !== null)) {
          (n.flags &= 32767), (we = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (xe = 6), (we = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    xe === 0 && (xe = 5);
  }
  function ln(e, t, n) {
    var r = le,
      l = tt.transition;
    try {
      (tt.transition = null), (le = 1), Xf(e, t, n, r);
    } finally {
      (tt.transition = l), (le = r);
    }
    return null;
  }
  function Xf(e, t, n, r) {
    do Ln();
    while (Vt !== null);
    if ((b & 6) !== 0) throw Error(h(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(h(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Oc(e, o),
      e === Pe && ((we = Pe = null), (je = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wl ||
        ((wl = !0),
        Ma(Or, function () {
          return Ln(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = tt.transition), (tt.transition = null);
      var i = le;
      le = 1;
      var u = b;
      (b |= 4),
        (di.current = null),
        Vf(e, n),
        Sa(n, e),
        vf(xo),
        (Mr = !!So),
        (xo = So = null),
        (e.current = n),
        Wf(n),
        yc(),
        (b = u),
        (le = i),
        (tt.transition = o);
    } else e.current = n;
    if (
      (wl && ((wl = !1), (Vt = e), (Sl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      xc(n.stateNode),
      Ve(e, me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (yl) throw ((yl = !1), (e = hi), (hi = null), e);
    return (
      (Sl & 1) !== 0 && e.tag !== 0 && Ln(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === gi ? yr++ : ((yr = 0), (gi = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function Ln() {
    if (Vt !== null) {
      var e = yu(Sl),
        t = tt.transition,
        n = le;
      try {
        if (((tt.transition = null), (le = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (Sl = 0), (b & 6) !== 0)) throw Error(h(331));
          var l = b;
          for (b |= 4, I = e.current; I !== null; ) {
            var o = I,
              i = o.child;
            if ((I.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var g = u[s];
                  for (I = g; I !== null; ) {
                    var x = I;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, x, o);
                    }
                    var k = x.child;
                    if (k !== null) (k.return = x), (I = k);
                    else
                      for (; I !== null; ) {
                        x = I;
                        var y = x.sibling,
                          T = x.return;
                        if ((ha(x), x === g)) {
                          I = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = T), (I = y);
                          break;
                        }
                        I = T;
                      }
                  }
                }
                var U = o.alternate;
                if (U !== null) {
                  var A = U.child;
                  if (A !== null) {
                    U.child = null;
                    do {
                      var ye = A.sibling;
                      (A.sibling = null), (A = ye);
                    } while (A !== null);
                  }
                }
                I = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) (i.return = o), (I = i);
            else
              e: for (; I !== null; ) {
                if (((o = I), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  (d.return = o.return), (I = d);
                  break e;
                }
                I = o.return;
              }
          }
          var a = e.current;
          for (I = a; I !== null; ) {
            i = I;
            var p = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && p !== null) (p.return = i), (I = p);
            else
              e: for (i = a; I !== null; ) {
                if (((u = I), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, u);
                    }
                  } catch ($) {
                    ge(u, u.return, $);
                  }
                if (u === i) {
                  I = null;
                  break e;
                }
                var C = u.sibling;
                if (C !== null) {
                  (C.return = u.return), (I = C);
                  break e;
                }
                I = u.return;
              }
          }
          if (((b = l), Ft(), ht && typeof ht.onPostCommitFiberRoot == 'function'))
            try {
              ht.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (le = n), (tt.transition = t);
      }
    }
    return !1;
  }
  function Ra(e, t, n) {
    (t = jn(n, t)),
      (t = Gs(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Ie()),
      e !== null && (Vn(e, 1, t), Ve(e, t));
  }
  function ge(e, t, n) {
    if (e.tag === 3) Ra(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ra(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Bt === null || !Bt.has(r)))
          ) {
            (e = jn(n, e)),
              (e = Js(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Ie()),
              t !== null && (Vn(t, 1, e), Ve(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ie()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Pe === e &&
        (je & n) === n &&
        (xe === 4 || (xe === 3 && (je & 130023424) === je && 500 > me() - vi)
          ? rn(e, 0)
          : (pi |= n)),
      Ve(e, t);
  }
  function Ta(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Nr), (Nr <<= 1), (Nr & 130023424) === 0 && (Nr = 4194304)));
    var n = Ie();
    (e = Pt(e, t)), e !== null && (Vn(e, t, n), Ve(e, n));
  }
  function Jf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ta(e, n);
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
        throw Error(h(314));
    }
    r !== null && r.delete(t), Ta(e, n);
  }
  var La;
  La = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current) $e = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ($e = !1), Uf(e, t, n);
        $e = (e.flags & 131072) !== 0;
      }
    else ($e = !1), fe && (t.flags & 1048576) !== 0 && ds(t, Zr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        pl(e, t), (e = t.pendingProps);
        var l = xn(t, Ne.current);
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
              Ae(r) ? ((o = !0), Gr(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Uo(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Zo(t, r, e, n),
              (t = ni(null, t, r, !0, o, n)))
            : ((t.tag = 0), fe && o && zo(t), De(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = bf(r)),
            (e = st(r, e)),
            l)
          ) {
            case 0:
              t = ti(null, t, r, e, n);
              break e;
            case 1:
              t = oa(null, t, r, e, n);
              break e;
            case 11:
              t = ea(null, t, r, e, n);
              break e;
            case 14:
              t = ta(null, t, r, st(r.type, e), n);
              break e;
          }
          throw Error(h(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          ti(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          oa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ia(t), e === null)) throw Error(h(387));
          (r = t.pendingProps), (o = t.memoizedState), (l = o.element), xs(e, t), ll(t, r, null, n);
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
              (l = jn(Error(h(423)), t)), (t = ua(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = jn(Error(h(424)), t)), (t = ua(e, t, r, n, l));
              break e;
            } else
              for (
                Xe = Mt(t.stateNode.containerInfo.firstChild),
                  Ye = t,
                  fe = !0,
                  ut = null,
                  n = ws(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pn(), r === l)) {
              t = Et(e, t, n);
              break e;
            }
            De(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ps(t),
          e === null && Ro(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          _o(r, l) ? (i = null) : o !== null && _o(r, o) && (t.flags |= 32),
          la(e, t),
          De(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && Ro(t), null;
      case 13:
        return sa(e, t, n);
      case 4:
        return (
          Ao(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : De(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          ea(e, t, r, l, n)
        );
      case 7:
        return De(e, t, t.pendingProps, n), t.child;
      case 8:
        return De(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return De(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ue(tl, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (it(o.value, i)) {
              if (o.children === l.children && !Ue.current) {
                t = Et(e, t, n);
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
                        (s = Ct(-1, n & -n)), (s.tag = 2);
                        var g = o.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var x = g.pending;
                          x === null ? (s.next = s) : ((s.next = x.next), (x.next = s)),
                            (g.pending = s);
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
                  if (((i = o.return), i === null)) throw Error(h(341));
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
          De(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = be(l)),
          (r = r(l)),
          (t.flags |= 1),
          De(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (l = st(r, t.pendingProps)), (l = st(r.type, l)), ta(e, t, r, l, n);
      case 15:
        return na(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : st(r, l)),
          pl(e, t),
          (t.tag = 1),
          Ae(r) ? ((e = !0), Gr(t)) : (e = !1),
          On(t, n),
          Ys(t, r, l),
          Zo(t, r, l, n),
          ni(null, t, r, !0, e, n)
        );
      case 19:
        return ca(e, t, n);
      case 22:
        return ra(e, t, n);
    }
    throw Error(h(156, t.tag));
  };
  function Ma(e, t) {
    return pu(e, t);
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
  function nt(e, t, n, r) {
    return new Zf(e, t, n, r);
  }
  function _i(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function bf(e) {
    if (typeof e == 'function') return _i(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pt)) return 11;
      if (e === vt) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = nt(e.tag, t, e.key, e.mode)),
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
  function Pl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) _i(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Oe:
          return on(n.children, l, o, t);
        case Me:
          (i = 8), (l |= 8);
          break;
        case rt:
          return (e = nt(12, n, t, l | 2)), (e.elementType = rt), (e.lanes = o), e;
        case He:
          return (e = nt(13, n, t, l)), (e.elementType = He), (e.lanes = o), e;
        case lt:
          return (e = nt(19, n, t, l)), (e.elementType = lt), (e.lanes = o), e;
        case he:
          return Cl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Je:
                i = 10;
                break e;
              case dt:
                i = 9;
                break e;
              case pt:
                i = 11;
                break e;
              case vt:
                i = 14;
                break e;
              case Fe:
                (i = 16), (r = null);
                break e;
            }
          throw Error(h(130, e == null ? e : typeof e, ''));
      }
    return (t = nt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
  }
  function on(e, t, n, r) {
    return (e = nt(7, e, r, t)), (e.lanes = n), e;
  }
  function Cl(e, t, n, r) {
    return (
      (e = nt(22, e, r, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return (e = nt(6, e, null, t)), (e.lanes = n), e;
  }
  function Pi(e, t, n) {
    return (
      (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
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
      (o = nt(3, null, null, t)),
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
      $$typeof: _e,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Da(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(h(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ae(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ae(n)) return as(e, n, t);
    }
    return t;
  }
  function Ia(e, t, n, r, l, o, i, u, s) {
    return (
      (e = Ci(n, r, !0, e, l, o, i, u, s)),
      (e.context = Da(null)),
      (n = e.current),
      (r = Ie()),
      (l = Wt(n)),
      (o = Ct(r, l)),
      (o.callback = t ?? null),
      At(n, o, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Ve(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      o = Ie(),
      i = Wt(l);
    return (
      (n = Da(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (ft(e, l, i, o), rl(e, l, i)),
      i
    );
  }
  function Ol(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    Fa(e, t), (e = e.alternate) && Fa(e, t);
  }
  function nd() {
    return null;
  }
  var Ua =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Oi(e) {
    this._internalRoot = e;
  }
  (zl.prototype.render = Oi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      El(e, t, null, null);
    }),
    (zl.prototype.unmount = Oi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nn(function () {
            El(null, e, null, null);
          }),
            (t[St] = null);
        }
      });
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = xu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      Rt.splice(n, 0, e), n === 0 && Pu(e);
    }
  };
  function zi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function jl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Aa() {}
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var g = Ol(i);
          o.call(g);
        };
      }
      var i = Ia(t, r, e, 0, null, !1, !1, '', Aa);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        nr(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var u = r;
      r = function () {
        var g = Ol(s);
        u.call(g);
      };
    }
    var s = Ci(e, 0, !1, null, null, !1, !1, '', Aa);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        El(t, s, n, r);
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
          var s = Ol(i);
          u.call(s);
        };
      }
      El(t, i, e, l);
    } else i = rd(n, t, e, l, r);
    return Ol(i);
  }
  (wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), Ve(t, me()), (b & 6) === 0 && ((Tn = me() + 500), Ft()));
        }
        break;
      case 13:
        nn(function () {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Ie();
            ft(r, e, 1, l);
          }
        }),
          Ei(e, 1);
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
          var n = Ie();
          ft(t, e, 134217728, n);
        }
        Ei(e, 134217728);
      }
    }),
    (Su = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Pt(e, t);
        if (n !== null) {
          var r = Ie();
          ft(n, e, t, r);
        }
        Ei(e, t);
      }
    }),
    (xu = function () {
      return le;
    }),
    (_u = function (e, t) {
      var n = le;
      try {
        return (le = e), t();
      } finally {
        le = n;
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
                var l = Yr(r);
                if (!l) throw Error(h(90));
                Ki(r), Il(r, l);
              }
            }
          }
          break;
        case 'textarea':
          qi(e, n);
          break;
        case 'select':
          (t = n.value), t != null && an(e, !!n.multiple, t, !1);
      }
    }),
    (iu = wi),
    (uu = nn);
  var ld = { usingClientEntryPoint: !1, Events: [or, wn, Yr, lu, ou, wi] },
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
      currentDispatcherRef: X.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = fu(e)), e === null ? null : e.stateNode;
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
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        (zr = Rl.inject(od)), (ht = Rl);
      } catch {}
  }
  return (
    (We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld),
    (We.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zi(t)) throw Error(h(200));
      return td(e, t, null, n);
    }),
    (We.createRoot = function (e, t) {
      if (!zi(e)) throw Error(h(299));
      var n = !1,
        r = '',
        l = Ua;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ci(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
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
          ? Error(h(188))
          : ((e = Object.keys(e).join(',')), Error(h(268, e)));
      return (e = fu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (We.flushSync = function (e) {
      return nn(e);
    }),
    (We.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(h(200));
      return Nl(null, e, t, !0, n);
    }),
    (We.hydrateRoot = function (e, t, n) {
      if (!zi(e)) throw Error(h(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = Ua;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ia(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[St] = t.current),
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
      return new zl(t);
    }),
    (We.render = function (e, t, n) {
      if (!jl(t)) throw Error(h(200));
      return Nl(null, e, t, !1, n);
    }),
    (We.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(h(40));
      return e._reactRootContainer
        ? (nn(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[St] = null);
            });
          }),
          !0)
        : !1;
    }),
    (We.unstable_batchedUpdates = wi),
    (We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(h(200));
      if (e == null || e._reactInternals === void 0) throw Error(h(38));
      return Nl(e, t, n, !1, r);
    }),
    (We.version = '18.3.1-next-f1338f8080-20240426'),
    We
  );
}
var oc;
function _d() {
  if (oc) return Wi.exports;
  oc = 1;
  function v() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (R) {
        console.error(R);
      }
  }
  return v(), (Wi.exports = xd()), Wi.exports;
}
var ic;
function kd() {
  if (ic) return Tl;
  ic = 1;
  var v = _d();
  return (Tl.createRoot = v.createRoot), (Tl.hydrateRoot = v.hydrateRoot), Tl;
}
var Pd = kd();
const Cd = uc(Pd),
  Ed = (v, R = !1) => {
    const h = { currency: 'USD', maximumFractionDigits: 0, style: 'currency' };
    v >= 1e4 && ((h.notation = 'compact'), (h.maximumFractionDigits = 1));
    const W = new Intl.NumberFormat('en-US', h).format(v);
    return R
      ? z.jsxs('span', {
          style: { whiteSpace: 'nowrap' },
          children: [
            W,
            z.jsx('span', {
              style: { color: '#CCCCCC', fontSize: '0.8em', marginLeft: '4px' },
              children: '/month',
            }),
          ],
        })
      : W;
  },
  Od = (v) => {
    if (v == null || v <= 0) return 'N/A';
    const R = v / 43560,
      h = R < 0.1 ? 3 : R < 10 ? 2 : 1;
    return `${R.toFixed(h)} acres`;
  },
  ac = ({ property: v }) => {
    const [R, h] = Mn.useState(!1);
    if (!v) return;
    const W = v.address || {},
      L = v.listing || {},
      B = v.agent || {},
      V = v.media || {},
      P = v.property || {},
      w = V.photos || [],
      E =
        L.status === 'For Rent' ||
        (P.propertyType && P.propertyType.toLowerCase().includes('rental')) ||
        P.propertyType === 'Residential Lease',
      O = L.livingArea || P.livingArea,
      f = L.bedrooms || P.bedrooms,
      m = L.bathrooms || P.bathrooms,
      _ = P.lotSize,
      M = 'var(--color-bg-container, #fff)',
      j = 'var(--color-border-secondary, #eaeaea)',
      D = 'var(--color-text-2, #666)',
      Z = 'var(--color-text-3, #999)',
      oe = 'var(--color-primary, #0077ff)',
      de = 'var(--color-error, #ff4d4f)';
    return z.jsxs('div', {
      onMouseOut: (X) => {
        (X.currentTarget.style.transform = 'translateY(0)'),
          (X.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)');
      },
      onMouseOver: (X) => {
        (X.currentTarget.style.transform = 'translateY(-4px)'),
          (X.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)');
      },
      style: {
        backgroundColor: M,
        border: `1px solid ${j}`,
        borderRadius: '10px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      },
      children: [
        z.jsxs('div', {
          style: {
            backgroundColor: 'var(--color-bg-tertiary, #f0f2f5)',
            paddingTop: '53%',
            position: 'relative',
            width: '100%',
          },
          children: [
            w && w.length > 0
              ? z.jsx('img', {
                  alt: `${W.full || 'Property'}`,
                  src: w[0],
                  style: {
                    height: '100%',
                    left: 0,
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  },
                })
              : z.jsx('div', {
                  style: {
                    alignItems: 'center',
                    color: Z,
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
              z.jsx('div', {
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
            z.jsx('div', {
              onClick: (X) => {
                X.stopPropagation(), h(!R);
              },
              style: {
                alignItems: 'center',
                backdropFilter: 'blur(4px)',
                backgroundColor: 'var(--color-bg-mask, rgba(255, 255, 255, 0.7))',
                borderRadius: '50%',
                color: R ? de : 'var(--color-text-1, #333)',
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
              children: R
                ? z.jsx('svg', {
                    fill: de,
                    height: '16',
                    viewBox: '0 0 24 24',
                    width: '16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: z.jsx('path', {
                      d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
                    }),
                  })
                : z.jsx('svg', {
                    fill: 'none',
                    height: '16',
                    stroke: 'currentColor',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    viewBox: '0 0 24 24',
                    width: '16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: z.jsx('path', {
                      d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
                    }),
                  }),
            }),
            z.jsx('div', {
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
              z.jsx('div', {
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
        z.jsxs('div', {
          style: { display: 'flex', flex: '1', flexDirection: 'column', padding: '10px' },
          children: [
            z.jsx('h3', {
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
            z.jsxs('div', {
              style: { display: 'flex', gap: '8px', marginBottom: '6px' },
              children: [
                f !== void 0 &&
                  z.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      z.jsx('span', { style: { color: D, fontSize: '11px' }, children: f }),
                      z.jsx('span', { style: { color: Z, fontSize: '10px' }, children: 'beds' }),
                    ],
                  }),
                m !== void 0 &&
                  z.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      z.jsx('span', { style: { color: D, fontSize: '11px' }, children: m }),
                      z.jsx('span', { style: { color: Z, fontSize: '10px' }, children: 'baths' }),
                    ],
                  }),
                O &&
                  z.jsxs('div', {
                    style: { alignItems: 'center', display: 'flex', gap: '3px' },
                    children: [
                      z.jsx('span', {
                        style: { color: D, fontSize: '11px' },
                        children: O.toLocaleString(),
                      }),
                      z.jsx('span', { style: { color: Z, fontSize: '10px' }, children: 'sqft' }),
                    ],
                  }),
              ],
            }),
            z.jsx('div', {
              style: { flex: '1', marginBottom: '6px' },
              children: z.jsxs('div', {
                style: { display: 'flex', flexWrap: 'wrap', gap: '6px 14px' },
                children: [
                  _ &&
                    _ > 0 &&
                    z.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        z.jsx('span', { style: { color: D, fontSize: '10px' }, children: 'Lot:' }),
                        z.jsx('span', { style: { color: D, fontSize: '10px' }, children: Od(_) }),
                      ],
                    }),
                  P.yearBuilt &&
                    z.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        z.jsx('span', {
                          style: { color: D, fontSize: '10px' },
                          children: 'Built:',
                        }),
                        z.jsx('span', {
                          style: { color: D, fontSize: '10px' },
                          children: P.yearBuilt,
                        }),
                      ],
                    }),
                  L.daysOnMarket !== void 0 &&
                    z.jsxs('div', {
                      style: { alignItems: 'center', display: 'flex', gap: '3px' },
                      children: [
                        z.jsx('span', { style: { color: D, fontSize: '10px' }, children: 'DOM:' }),
                        z.jsxs('span', {
                          style: { color: D, fontSize: '10px' },
                          children: [L.daysOnMarket, ' days'],
                        }),
                      ],
                    }),
                  P.propertyType &&
                    z.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-tertiary, #f5f5f7)',
                        borderRadius: '3px',
                        color: D,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: P.propertyType,
                    }),
                  P.pool &&
                    z.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '3px',
                        color: oe,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: 'Pool',
                    }),
                  P.waterfront &&
                    z.jsx('div', {
                      style: {
                        backgroundColor: 'var(--color-bg-primary-light, #e6f7ff)',
                        borderRadius: '3px',
                        color: oe,
                        fontSize: '10px',
                        padding: '1px 5px',
                      },
                      children: 'Waterfront',
                    }),
                ],
              }),
            }),
            z.jsxs('div', {
              style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' },
              children: [
                L.url &&
                  z.jsx('div', {
                    children: z.jsxs('a', {
                      href: L.url,
                      rel: 'noopener noreferrer',
                      style: {
                        alignItems: 'center',
                        color: oe,
                        display: 'flex',
                        fontSize: '10px',
                        gap: '3px',
                        textDecoration: 'none',
                      },
                      target: '_blank',
                      children: [z.jsx('span', { children: '🔗' }), ' Original Listing'],
                    }),
                  }),
                z.jsxs('div', {
                  onClick: (X) => {
                    X.stopPropagation(), alert(`Saving property: ${v.listingId || v.id}`);
                  },
                  onMouseOut: (X) => {
                    X.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary, #f5f5f7)';
                  },
                  onMouseOver: (X) => {
                    X.currentTarget.style.backgroundColor =
                      'var(--color-bg-primary-light, #e6f7ff)';
                  },
                  style: {
                    alignItems: 'center',
                    backgroundColor: 'var(--color-bg-tertiary, #f5f5f7)',
                    borderRadius: '3px',
                    color: oe,
                    cursor: 'pointer',
                    display: 'flex',
                    fontSize: '10px',
                    gap: '3px',
                    padding: '2px 6px',
                    transition: 'all 0.2s ease',
                  },
                  children: [z.jsx('span', { children: '+' }), ' Save'],
                }),
              ],
            }),
            B.name &&
              z.jsxs('div', {
                style: {
                  alignItems: 'center',
                  borderTop: '1px solid var(--color-border-secondary, #f0f0f0)',
                  color: Z,
                  display: 'flex',
                  fontSize: '10px',
                  overflow: 'hidden',
                  paddingTop: '6px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
                children: [
                  z.jsx('span', { style: { marginRight: '2px' }, children: '👤' }),
                  z.jsxs('span', {
                    style: { overflow: 'hidden', textOverflow: 'ellipsis' },
                    children: [B.name, B.office && ` • ${B.office}`],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  zd = ({ properties: v }) => {
    const R = Mn.useRef(null),
      [h, W] = Mn.useState({ isAtEnd: !1, isAtStart: !0 }),
      L = Mn.useCallback(() => {
        if (!R.current) return;
        const { scrollLeft: P, scrollWidth: w, clientWidth: E } = R.current,
          O = w > E,
          f = 1,
          m = !O || P <= f,
          _ = !O || P + E >= w - f;
        W((M) => (M.isAtStart !== m || M.isAtEnd !== _ ? { isAtEnd: _, isAtStart: m } : M));
      }, []);
    if (
      (Mn.useEffect(() => {
        if (!v || v.length === 0) {
          W({ isAtEnd: !0, isAtStart: !0 });
          return;
        }
        L();
        const P = R.current;
        if (P) {
          P.addEventListener('scroll', L, { passive: !0 });
          const w = new ResizeObserver(L);
          w.observe(P);
          const E = setTimeout(L, 150);
          return () => {
            P.removeEventListener('scroll', L), w.disconnect(), clearTimeout(E);
          };
        }
      }, [v, L]),
      !v || v.length === 0)
    )
      return null;
    const B = () => {
        R.current && R.current.scrollBy({ behavior: 'smooth', left: -500 });
      },
      V = () => {
        R.current && R.current.scrollBy({ behavior: 'smooth', left: 500 });
      };
    return z.jsxs('div', {
      style: { position: 'relative', width: '100%' },
      children: [
        !h.isAtStart &&
          z.jsx('div', {
            onClick: B,
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
            children: z.jsx('span', { style: { fontSize: '16px' }, children: '←' }),
          }),
        !h.isAtEnd &&
          z.jsx('div', {
            onClick: V,
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
            children: z.jsx('span', { style: { fontSize: '16px' }, children: '→' }),
          }),
        z.jsx('div', {
          ref: R,
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
          children: z.jsx('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              minWidth: 'min-content',
              paddingLeft: '0',
              paddingRight: '24px',
            },
            children: v.map((P, w) =>
              z.jsx(
                'div',
                { style: { flexShrink: 0, width: '210px' }, children: z.jsx(ac, { property: P }) },
                w,
              ),
            ),
          }),
        }),
      ],
    });
  },
  jd = () => {
    const [v, R] = xr.useState(),
      { data: h, loading: W } = Vi.useWatchPluginMessage(),
      [L, B] = xr.useState(-1);
    xr.useEffect(() => {
      Vi.lobeChat
        .getPluginMessage()
        .then((f) => {
          console.log('Plugin received data:', f), R(f);
        })
        .catch((f) => {
          console.error('Error getting plugin message:', f);
        });
    }, []),
      xr.useEffect(() => {
        h && (console.log('Received watch data:', h), R(h));
      }, [h]);
    const V = () =>
        v != null && v.data ? (Array.isArray(v.data) ? v.data.length.toString() : '1') : '0',
      P = (f) => {
        var _, M, j, D, Z, oe, de, X, Ee, _e, Oe, Me, rt, Je, dt;
        const m = {
          type: 'CALCULATOR_PREFILL',
          data: {
            property_price: ((_ = f.listing) == null ? void 0 : _.price) || 0,
            property_address:
              ((M = f.address) == null ? void 0 : M.full) ||
              `${((j = f.address) == null ? void 0 : j.street) || ''}, ${((D = f.address) == null ? void 0 : D.city) || ''}, ${((Z = f.address) == null ? void 0 : Z.state) || ''} ${((oe = f.address) == null ? void 0 : oe.zipCode) || ''}`,
            property_id: f.listingId || f.id || '',
            square_feet:
              ((de = f.listing) == null ? void 0 : de.livingArea) ||
              ((X = f.property) == null ? void 0 : X.livingArea) ||
              0,
            bedrooms:
              ((Ee = f.listing) == null ? void 0 : Ee.bedrooms) ||
              ((_e = f.property) == null ? void 0 : _e.bedrooms) ||
              0,
            bathrooms:
              ((Oe = f.listing) == null ? void 0 : Oe.bathrooms) ||
              ((Me = f.property) == null ? void 0 : Me.bathrooms) ||
              0,
            year_built: ((rt = f.property) == null ? void 0 : rt.yearBuilt) || 0,
            property_type: ((Je = f.property) == null ? void 0 : Je.propertyType) || '',
            lot_size: ((dt = f.property) == null ? void 0 : dt.lotSize) || 0,
          },
        };
        Vi.lobeChat.setPluginMessage(m),
          alert(`Property data sent to calculator: ${m.data.property_address}`);
      },
      w = () =>
        v != null && v.data
          ? (Array.isArray(v.data) ? v.data : [v.data]).map((m, _) => {
              var D, Z, oe, de, X, Ee;
              const M =
                  ((D = m.address) == null ? void 0 : D.full) ||
                  `${((Z = m.address) == null ? void 0 : Z.street) || ''}, ${((oe = m.address) == null ? void 0 : oe.city) || ''}, ${((de = m.address) == null ? void 0 : de.state) || ''} ${((X = m.address) == null ? void 0 : X.zipCode) || ''}`,
                j =
                  (Ee = m.listing) != null && Ee.price
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }).format(m.listing.price)
                    : 'N/A';
              return { label: `${M} - ${j}`, value: _, property: m };
            })
          : [],
      E = (f) => {
        if ((B(f), f >= 0)) {
          const m = Array.isArray(v == null ? void 0 : v.data)
            ? v == null
              ? void 0
              : v.data
            : [v == null ? void 0 : v.data];
          m && m[f] && P(m[f]);
        }
      };
    if (W)
      return z.jsxs('div', {
        style: {
          color: 'var(--color-text-2, #666)',
          fontFamily:
            'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
          padding: '20px',
          textAlign: 'center',
        },
        children: [
          z.jsx('div', {
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
          z.jsx('style', {
            children: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
          }),
          z.jsx('p', { children: 'Loading property listings...' }),
        ],
      });
    const O = w();
    return z.jsxs('div', {
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
        z.jsx('style', {
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
          
          .property-select {
            width: 100%;
            padding: 8px 10px;
            margin-bottom: 12px;
            border: 1px solid var(--color-border-secondary, #eaeaea);
            border-radius: 6px;
            background-color: var(--color-bg-container, #fff);
            color: var(--color-text-0, #1a1a1a);
            font-size: 14px;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 16px;
          }
          
          .property-select:focus {
            outline: none;
            border-color: var(--color-primary, #0077ff);
          }
          
          .calculator-button {
            background-color: var(--color-bg-tertiary, #f5f5f7);
            border: none;
            border-radius: 6px;
            color: var(--color-primary, #0077ff);
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            padding: 8px 12px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
          }
          
          .calculator-button:hover {
            background-color: var(--color-bg-primary-light, #e6f7ff);
          }
        `,
        }),
        v != null && v.data
          ? z.jsxs(z.Fragment, {
              children: [
                z.jsxs('div', {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '12px',
                  },
                  children: [
                    z.jsxs('h2', {
                      style: {
                        color: 'var(--color-text-0, #1a1a1a)',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '4px',
                        marginTop: '0',
                        paddingLeft: '4px',
                      },
                      children: [
                        'Showing ',
                        V(),
                        ' ',
                        Number.parseInt(V()) === 1 ? 'result' : 'results',
                      ],
                    }),
                    O.length > 0 &&
                      z.jsxs('div', {
                        style: { display: 'flex', flexDirection: 'column', gap: '8px' },
                        children: [
                          z.jsx('label', {
                            htmlFor: 'property-select',
                            style: {
                              color: 'var(--color-text-2, #666)',
                              fontSize: '13px',
                              paddingLeft: '4px',
                            },
                            children: 'Use property data in calculator:',
                          }),
                          z.jsxs('select', {
                            id: 'property-select',
                            className: 'property-select',
                            value: L,
                            onChange: (f) => E(Number(f.target.value)),
                            children: [
                              z.jsx('option', { value: '-1', children: 'Select a property...' }),
                              O.map((f, m) =>
                                z.jsx('option', { value: f.value, children: f.label }, m),
                              ),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                Array.isArray(v.data)
                  ? z.jsx(zd, { properties: v.data })
                  : z.jsx('div', {
                      style: { margin: '0 auto', maxWidth: '400px' },
                      children: z.jsx(ac, { property: v.data }),
                    }),
              ],
            })
          : z.jsxs('div', {
              style: {
                color: 'var(--color-text-2, #666)',
                padding: '24px 16px',
                textAlign: 'center',
              },
              children: [
                z.jsx('p', {
                  style: { fontSize: '15px', marginBottom: '10px' },
                  children:
                    'Waiting for property data... Try searching for properties in Miami, FL.',
                }),
                z.jsx('p', {
                  style: { color: 'var(--color-text-3, #888)', fontSize: '13px' },
                  children: 'Example: "Find 3-bedroom houses in Miami under $1M"',
                }),
              ],
            }),
      ],
    });
  },
  Nd = Cd.createRoot(document.querySelector('#root'));
Nd.render(z.jsx(Mn.StrictMode, { children: z.jsx(jd, {}) }));
