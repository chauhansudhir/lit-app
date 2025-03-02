const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/quote-DfV7sTR0.js",
      "assets/service-base-ihO7f0ps.js",
      "assets/users-m2rRRVjm.js",
      "assets/photos-SoI7PPRp.js",
    ])
) => i.map((i) => d[i]);
var rr = Object.defineProperty;
var tt = (r) => {
  throw TypeError(r);
};
var nr = (r, t, e) =>
  t in r
    ? rr(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (r[t] = e);
var x = (r, t, e) => nr(r, typeof t != "symbol" ? t + "" : t, e),
  xe = (r, t, e) => t.has(r) || tt("Cannot " + e);
var v = (r, t, e) => (
    xe(r, t, "read from private field"), e ? e.call(r) : t.get(r)
  ),
  P = (r, t, e) =>
    t.has(r)
      ? tt("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(r)
      : t.set(r, e),
  b = (r, t, e, n) => (
    xe(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e
  ),
  p = (r, t, e) => (xe(r, t, "access private method"), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = e(i);
    fetch(i.href, s);
  }
})();
const ir = "modulepreload",
  sr = function (r) {
    return "/" + r;
  },
  rt = {},
  _e = function (t, e, n) {
    let i = Promise.resolve();
    if (e && e.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        c =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(
        e.map((a) => {
          if (((a = sr(a)), a in rt)) return;
          rt[a] = !0;
          const u = a.endsWith(".css"),
            l = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${l}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = u ? "stylesheet" : ir),
            u || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = a),
            c && h.setAttribute("nonce", c),
            document.head.appendChild(h),
            u)
          )
            return new Promise((f, m) => {
              h.addEventListener("load", f),
                h.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    function s(o) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = o), window.dispatchEvent(c), !c.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const c of o || []) c.status === "rejected" && s(c.reason);
      return t().catch(s);
    });
  };
function or(r) {
  for (var t = [], e = 0; e < r.length; ) {
    var n = r[e];
    if (n === "*" || n === "+" || n === "?") {
      t.push({ type: "MODIFIER", index: e, value: r[e++] });
      continue;
    }
    if (n === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: e++, value: r[e++] });
      continue;
    }
    if (n === "{") {
      t.push({ type: "OPEN", index: e, value: r[e++] });
      continue;
    }
    if (n === "}") {
      t.push({ type: "CLOSE", index: e, value: r[e++] });
      continue;
    }
    if (n === ":") {
      for (var i = "", s = e + 1; s < r.length; ) {
        var o = r.charCodeAt(s);
        if (
          (o >= 48 && o <= 57) ||
          (o >= 65 && o <= 90) ||
          (o >= 97 && o <= 122) ||
          o === 95
        ) {
          i += r[s++];
          continue;
        }
        break;
      }
      if (!i) throw new TypeError("Missing parameter name at ".concat(e));
      t.push({ type: "NAME", index: e, value: i }), (e = s);
      continue;
    }
    if (n === "(") {
      var c = 1,
        a = "",
        s = e + 1;
      if (r[s] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(s));
      for (; s < r.length; ) {
        if (r[s] === "\\") {
          a += r[s++] + r[s++];
          continue;
        }
        if (r[s] === ")") {
          if ((c--, c === 0)) {
            s++;
            break;
          }
        } else if (r[s] === "(" && (c++, r[s + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(s));
        a += r[s++];
      }
      if (c) throw new TypeError("Unbalanced pattern at ".concat(e));
      if (!a) throw new TypeError("Missing pattern at ".concat(e));
      t.push({ type: "PATTERN", index: e, value: a }), (e = s);
      continue;
    }
    t.push({ type: "CHAR", index: e, value: r[e++] });
  }
  return t.push({ type: "END", index: e, value: "" }), t;
}
function Ge(r, t) {
  t === void 0 && (t = {});
  for (
    var e = or(r),
      n = t.prefixes,
      i = n === void 0 ? "./" : n,
      s = t.delimiter,
      o = s === void 0 ? "/#?" : s,
      c = [],
      a = 0,
      u = 0,
      l = "",
      h = function (S) {
        if (u < e.length && e[u].type === S) return e[u++].value;
      },
      f = function (S) {
        var E = h(S);
        if (E !== void 0) return E;
        var U = e[u],
          Ce = U.type,
          tr = U.index;
        throw new TypeError(
          "Unexpected ".concat(Ce, " at ").concat(tr, ", expected ").concat(S)
        );
      },
      m = function () {
        for (var S = "", E; (E = h("CHAR") || h("ESCAPED_CHAR")); ) S += E;
        return S;
      },
      _ = function (S) {
        for (var E = 0, U = o; E < U.length; E++) {
          var Ce = U[E];
          if (S.indexOf(Ce) > -1) return !0;
        }
        return !1;
      },
      y = function (S) {
        var E = c[c.length - 1],
          U = S || (E && typeof E == "string" ? E : "");
        if (E && !U)
          throw new TypeError(
            'Must have text between two parameters, missing text after "'.concat(
              E.name,
              '"'
            )
          );
        return !U || _(U)
          ? "[^".concat(N(o), "]+?")
          : "(?:(?!".concat(N(U), ")[^").concat(N(o), "])+?");
      };
    u < e.length;

  ) {
    var $ = h("CHAR"),
      w = h("NAME"),
      Z = h("PATTERN");
    if (w || Z) {
      var C = $ || "";
      i.indexOf(C) === -1 && ((l += C), (C = "")),
        l && (c.push(l), (l = "")),
        c.push({
          name: w || a++,
          prefix: C,
          suffix: "",
          pattern: Z || y(C),
          modifier: h("MODIFIER") || "",
        });
      continue;
    }
    var g = $ || h("ESCAPED_CHAR");
    if (g) {
      l += g;
      continue;
    }
    l && (c.push(l), (l = ""));
    var z = h("OPEN");
    if (z) {
      var C = m(),
        M = h("NAME") || "",
        ie = h("PATTERN") || "",
        Y = m();
      f("CLOSE"),
        c.push({
          name: M || (ie ? a++ : ""),
          pattern: M && !ie ? y(C) : ie,
          prefix: C,
          suffix: Y,
          modifier: h("MODIFIER") || "",
        });
      continue;
    }
    f("END");
  }
  return c;
}
function Pt(r, t) {
  return Ct(Ge(r, t), t);
}
function Ct(r, t) {
  t === void 0 && (t = {});
  var e = Ke(t),
    n = t.encode,
    i =
      n === void 0
        ? function (a) {
            return a;
          }
        : n,
    s = t.validate,
    o = s === void 0 ? !0 : s,
    c = r.map(function (a) {
      if (typeof a == "object")
        return new RegExp("^(?:".concat(a.pattern, ")$"), e);
    });
  return function (a) {
    for (var u = "", l = 0; l < r.length; l++) {
      var h = r[l];
      if (typeof h == "string") {
        u += h;
        continue;
      }
      var f = a ? a[h.name] : void 0,
        m = h.modifier === "?" || h.modifier === "*",
        _ = h.modifier === "*" || h.modifier === "+";
      if (Array.isArray(f)) {
        if (!_)
          throw new TypeError(
            'Expected "'.concat(h.name, '" to not repeat, but got an array')
          );
        if (f.length === 0) {
          if (m) continue;
          throw new TypeError('Expected "'.concat(h.name, '" to not be empty'));
        }
        for (var y = 0; y < f.length; y++) {
          var $ = i(f[y], h);
          if (o && !c[l].test($))
            throw new TypeError(
              'Expected all "'
                .concat(h.name, '" to match "')
                .concat(h.pattern, '", but got "')
                .concat($, '"')
            );
          u += h.prefix + $ + h.suffix;
        }
        continue;
      }
      if (typeof f == "string" || typeof f == "number") {
        var $ = i(String(f), h);
        if (o && !c[l].test($))
          throw new TypeError(
            'Expected "'
              .concat(h.name, '" to match "')
              .concat(h.pattern, '", but got "')
              .concat($, '"')
          );
        u += h.prefix + $ + h.suffix;
        continue;
      }
      if (!m) {
        var w = _ ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(h.name, '" to be ').concat(w));
      }
    }
    return u;
  };
}
function N(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ke(r) {
  return r && r.sensitive ? "" : "i";
}
function ar(r, t) {
  if (!t) return r;
  for (var e = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, i = e.exec(r.source); i; )
    t.push({
      name: i[1] || n++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: "",
    }),
      (i = e.exec(r.source));
  return r;
}
function cr(r, t, e) {
  var n = r.map(function (i) {
    return xt(i, t, e).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), Ke(e));
}
function hr(r, t, e) {
  return lr(Ge(r, e), t, e);
}
function lr(r, t, e) {
  e === void 0 && (e = {});
  for (
    var n = e.strict,
      i = n === void 0 ? !1 : n,
      s = e.start,
      o = s === void 0 ? !0 : s,
      c = e.end,
      a = c === void 0 ? !0 : c,
      u = e.encode,
      l =
        u === void 0
          ? function (E) {
              return E;
            }
          : u,
      h = e.delimiter,
      f = h === void 0 ? "/#?" : h,
      m = e.endsWith,
      _ = m === void 0 ? "" : m,
      y = "[".concat(N(_), "]|$"),
      $ = "[".concat(N(f), "]"),
      w = o ? "^" : "",
      Z = 0,
      C = r;
    Z < C.length;
    Z++
  ) {
    var g = C[Z];
    if (typeof g == "string") w += N(l(g));
    else {
      var z = N(l(g.prefix)),
        M = N(l(g.suffix));
      if (g.pattern)
        if ((t && t.push(g), z || M))
          if (g.modifier === "+" || g.modifier === "*") {
            var ie = g.modifier === "*" ? "?" : "";
            w += "(?:"
              .concat(z, "((?:")
              .concat(g.pattern, ")(?:")
              .concat(M)
              .concat(z, "(?:")
              .concat(g.pattern, "))*)")
              .concat(M, ")")
              .concat(ie);
          } else
            w += "(?:"
              .concat(z, "(")
              .concat(g.pattern, ")")
              .concat(M, ")")
              .concat(g.modifier);
        else {
          if (g.modifier === "+" || g.modifier === "*")
            throw new TypeError(
              'Can not repeat "'.concat(g.name, '" without a prefix and suffix')
            );
          w += "(".concat(g.pattern, ")").concat(g.modifier);
        }
      else w += "(?:".concat(z).concat(M, ")").concat(g.modifier);
    }
  }
  if (a)
    i || (w += "".concat($, "?")),
      (w += e.endsWith ? "(?=".concat(y, ")") : "$");
  else {
    var Y = r[r.length - 1],
      S = typeof Y == "string" ? $.indexOf(Y[Y.length - 1]) > -1 : Y === void 0;
    i || (w += "(?:".concat($, "(?=").concat(y, "))?")),
      S || (w += "(?=".concat($, "|").concat(y, ")"));
  }
  return new RegExp(w, Ke(e));
}
function xt(r, t, e) {
  return r instanceof RegExp
    ? ar(r, t)
    : Array.isArray(r)
    ? cr(r, t, e)
    : hr(r, t, e);
}
function W(r) {
  return typeof r == "object" && !!r;
}
function le(r) {
  return typeof r == "function";
}
function I(r) {
  return typeof r == "string";
}
function be(r = []) {
  return Array.isArray(r) ? r : [r];
}
function B(r) {
  return `[Vaadin.Router] ${r}`;
}
class Tt extends Error {
  constructor(e) {
    super(B(`Page not found (${e.pathname})`));
    x(this, "code");
    x(this, "context");
    (this.context = e), (this.code = 404);
  }
}
const J = Symbol("NotFoundResult");
function Ot(r) {
  return new Tt(r);
}
function Ut(r) {
  return (Array.isArray(r) ? r[0] : r) ?? "";
}
function Re(r) {
  return Ut(r == null ? void 0 : r.path);
}
function ur(r) {
  return Array.isArray(r) && r.length > 0 ? r : void 0;
}
const Ie = new Map();
Ie.set("|false", { keys: [], pattern: /(?:)/u });
function nt(r) {
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}
function dr(r, t, e = !1, n = [], i) {
  const s = `${r}|${String(e)}`,
    o = Ut(t);
  let c = Ie.get(s);
  if (!c) {
    const l = [];
    (c = { keys: l, pattern: xt(r, l, { end: e, strict: r === "" }) }),
      Ie.set(s, c);
  }
  const a = c.pattern.exec(o);
  if (!a) return null;
  const u = { ...i };
  for (let l = 1; l < a.length; l++) {
    const h = c.keys[l - 1],
      f = h.name,
      m = a[l];
    (m !== void 0 || !Object.hasOwn(u, f)) &&
      (h.modifier === "+" || h.modifier === "*"
        ? (u[f] = m ? m.split(/[/?#]/u).map(nt) : [])
        : (u[f] = m && nt(m)));
  }
  return { keys: [...n, ...c.keys], params: u, path: a[0] };
}
var fr = dr;
function Lt(r, t, e, n, i) {
  let s,
    o,
    c = 0,
    a = Re(r);
  return (
    a.startsWith("/") && (e && (a = a.substring(1)), (e = !0)),
    {
      next(u) {
        if (r === u) return { done: !0, value: void 0 };
        r.__children ?? (r.__children = ur(r.children));
        const l = r.__children ?? [],
          h = !r.__children && !r.children;
        if (!s && ((s = fr(a, t, h, n, i)), s))
          return {
            value: { keys: s.keys, params: s.params, path: s.path, route: r },
          };
        if (s && l.length > 0)
          for (; c < l.length; ) {
            if (!o) {
              const m = l[c];
              m.parent = r;
              let _ = s.path.length;
              _ > 0 && t.charAt(_) === "/" && (_ += 1),
                (o = Lt(m, t.substring(_), e, s.keys, s.params));
            }
            const f = o.next(u);
            if (!f.done) return { done: !1, value: f.value };
            (o = null), (c += 1);
          }
        return { done: !0, value: void 0 };
      },
    }
  );
}
var pr = Lt;
function mr(r) {
  if (le(r.route.action)) return r.route.action(r);
}
function vr(r, t) {
  let e = r;
  for (; e; ) if (((e = e.parent), e === t)) return !0;
  return !1;
}
function _r(r) {
  return (
    !!r &&
    typeof r == "object" &&
    "next" in r &&
    "params" in r &&
    "result" in r &&
    "route" in r
  );
}
class gr extends Error {
  constructor(e, n) {
    let i = `Path '${e.pathname}' is not properly resolved due to an error.`;
    const s = Re(e.route);
    s && (i += ` Resolution had failed on route: '${s}'`);
    super(i, n);
    x(this, "code");
    x(this, "context");
    (this.code = n == null ? void 0 : n.code), (this.context = e);
  }
  warn() {
    console.warn(this.message);
  }
}
function yr(r, t) {
  var i;
  const { path: e, route: n } = t;
  if (n && !n.__synthetic) {
    const s = { path: e, route: n };
    if (n.parent && r.chain)
      for (
        let o = r.chain.length - 1;
        o >= 0 && r.chain[o].route !== n.parent;
        o--
      )
        r.chain.pop();
    (i = r.chain) == null || i.push(s);
  }
}
var q, R;
class It {
  constructor(
    t,
    { baseUrl: e = "", context: n, errorHandler: i, resolveRoute: s = mr } = {}
  ) {
    x(this, "baseUrl");
    P(this, q);
    x(this, "errorHandler");
    x(this, "resolveRoute");
    P(this, R);
    if (Object(t) !== t) throw new TypeError("Invalid routes");
    (this.baseUrl = e),
      (this.errorHandler = i),
      (this.resolveRoute = s),
      Array.isArray(t)
        ? b(this, R, {
            __children: t,
            __synthetic: !0,
            action: () => {},
            path: "",
          })
        : b(this, R, { ...t, parent: void 0 }),
      b(this, q, {
        ...n,
        hash: "",
        async next() {
          return J;
        },
        params: {},
        pathname: "",
        resolver: this,
        route: v(this, R),
        search: "",
        chain: [],
      });
  }
  get root() {
    return v(this, R);
  }
  get context() {
    return v(this, q);
  }
  get __effectiveBaseUrl() {
    return this.baseUrl
      ? new URL(this.baseUrl, document.baseURI || document.URL).href.replace(
          /[^/]*$/u,
          ""
        )
      : "";
  }
  getRoutes() {
    return [...(v(this, R).__children ?? [])];
  }
  removeRoutes() {
    v(this, R).__children = [];
  }
  async resolve(t) {
    const e = this,
      n = { ...v(this, q), ...(I(t) ? { pathname: t } : t), next: u },
      i = pr(
        v(this, R),
        this.__normalizePathname(n.pathname) ?? n.pathname,
        !!this.baseUrl
      ),
      s = this.resolveRoute;
    let o = null,
      c = null,
      a = n;
    async function u(
      l = !1,
      h = ((m) =>
        (m = o == null ? void 0 : o.value) == null ? void 0 : m.route)(),
      f
    ) {
      var $, w;
      const _ =
        f === null
          ? ($ = o == null ? void 0 : o.value) == null
            ? void 0
            : $.route
          : void 0;
      if (
        ((o = c ?? i.next(_)),
        (c = null),
        !l && (o.done || !vr(o.value.route, h)))
      )
        return (c = o), J;
      if (o.done) throw Ot(n);
      (a = {
        ...n,
        params: o.value.params,
        route: o.value.route,
        chain: (w = a.chain) == null ? void 0 : w.slice(),
      }),
        yr(a, o.value);
      const y = await s(a);
      return y != null && y !== J
        ? ((a.result = _r(y) ? y.result : y), b(e, q, a), a)
        : await u(l, h, y);
    }
    try {
      return await u(!0, v(this, R));
    } catch (l) {
      const h = l instanceof Tt ? l : new gr(a, { code: 500, cause: l });
      if (this.errorHandler) return (a.result = this.errorHandler(h)), a;
      throw l;
    }
  }
  setRoutes(t) {
    v(this, R).__children = [...be(t)];
  }
  __normalizePathname(t) {
    if (!this.baseUrl) return t;
    const e = this.__effectiveBaseUrl,
      n = t.startsWith("/") ? new URL(e).origin + t : `./${t}`,
      i = new URL(n, e).href;
    if (i.startsWith(e)) return i.slice(e.length);
  }
  addRoutes(t) {
    return (
      (v(this, R).__children = [...(v(this, R).__children ?? []), ...be(t)]),
      this.getRoutes()
    );
  }
}
(q = new WeakMap()), (R = new WeakMap());
function Mt(r, t, e, n) {
  var s;
  const i = t.name ?? (n == null ? void 0 : n(t));
  if (
    (i && (r.has(i) ? (s = r.get(i)) == null || s.push(t) : r.set(i, [t])),
    Array.isArray(e))
  )
    for (const o of e) (o.parent = t), Mt(r, o, o.__children ?? o.children, n);
}
function it(r, t) {
  const e = r.get(t);
  if (e) {
    if (e.length > 1)
      throw new Error(
        `Duplicate route with name "${t}". Try seting unique 'name' route properties.`
      );
    return e[0];
  }
}
function $r(r, t = {}) {
  if (!(r instanceof It))
    throw new TypeError("An instance of Resolver is expected");
  const e = new Map(),
    n = new Map();
  return (i, s) => {
    let o = it(n, i);
    if (
      !o &&
      (n.clear(),
      Mt(n, r.root, r.root.__children, t.cacheKeyProvider),
      (o = it(n, i)),
      !o)
    )
      throw new Error(`Route "${i}" not found`);
    let c = o.fullPath ? e.get(o.fullPath) : void 0;
    if (!c) {
      let l = Re(o),
        h = o.parent;
      for (; h; ) {
        const _ = Re(h);
        _ && (l = `${_.replace(/\/$/u, "")}/${l.replace(/^\//u, "")}`),
          (h = h.parent);
      }
      const f = Ge(l),
        m = Object.create(null);
      for (const _ of f) I(_) || (m[_.name] = !0);
      (c = { keys: m, tokens: f }), e.set(l, c), (o.fullPath = l);
    }
    let u = Ct(c.tokens, { encode: encodeURIComponent, ...t })(s) || "/";
    if (t.stringifyQueryParams && s) {
      const l = {};
      for (const [f, m] of Object.entries(s)) !(f in c.keys) && m && (l[f] = m);
      const h = t.stringifyQueryParams(l);
      h && (u += h.startsWith("?") ? h : `?${h}`);
    }
    return u;
  };
}
var wr = $r;
const Ar =
    /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,
  ge = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function Er() {
  function r() {
    return !0;
  }
  return Ht(r);
}
function br() {
  try {
    return Rr() ? !0 : Sr() ? (ge ? !Pr() : !Er()) : !1;
  } catch {
    return !1;
  }
}
function Rr() {
  return localStorage.getItem("vaadin.developmentmode.force");
}
function Sr() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}
function Pr() {
  return !!(
    ge &&
    Object.keys(ge)
      .map((t) => ge[t])
      .filter((t) => t.productionMode).length > 0
  );
}
function Ht(r, t) {
  if (typeof r != "function") return;
  const e = Ar.exec(r.toString());
  if (e)
    try {
      r = new Function(e[1]);
    } catch (n) {
      console.log(
        "vaadin-development-mode-detector: uncommentAndRun() failed",
        n
      );
    }
  return r(t);
}
window.Vaadin = window.Vaadin || {};
const st = function (r, t) {
  if (window.Vaadin.developmentMode) return Ht(r, t);
};
window.Vaadin.developmentMode === void 0 &&
  (window.Vaadin.developmentMode = br());
function Cr() {
  /*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/
}
const xr = function () {
  if (typeof st == "function") return st(Cr);
};
function Tr(r, t = window.Vaadin ?? (window.Vaadin = {})) {
  t.registrations ?? (t.registrations = []),
    t.registrations.push({ is: "@vaadin/router", version: "2.0.0" });
}
Tr();
xr();
const Or = (r) => {
    const t = getComputedStyle(r).getPropertyValue("animation-name");
    return t && t !== "none";
  },
  Ur = (r, t) => {
    const e = () => {
      r.removeEventListener("animationend", e), t();
    };
    r.addEventListener("animationend", e);
  };
async function Lr(r, t) {
  return (
    r.classList.add(t),
    await new Promise((e) => {
      if (Or(r)) {
        const n = r.getBoundingClientRect(),
          i = `height: ${n.bottom - n.top}px; width: ${n.right - n.left}px`;
        r.setAttribute("style", `position: absolute; ${i}`),
          Ur(r, () => {
            r.classList.remove(t), r.removeAttribute("style"), e();
          });
      } else r.classList.remove(t), e();
    })
  );
}
var ot = Lr;
function Nt(r) {
  if (!r || !I(r.path))
    throw new Error(
      B(
        'Expected route config to be an object with a "path" string property, or an array of such objects'
      )
    );
  if (
    !le(r.action) &&
    !Array.isArray(r.children) &&
    !le(r.children) &&
    !I(r.component) &&
    !I(r.redirect)
  )
    throw new Error(
      B(
        `Expected route config "${r.path}" to include either "component, redirect" or "action" function but none found.`
      )
    );
  r.redirect &&
    ["bundle", "component"].forEach((t) => {
      t in r &&
        console.warn(
          B(
            `Route config "${String(
              r.path
            )}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`
          )
        );
    });
}
function at(r) {
  be(r).forEach((t) => Nt(t));
}
function Ir({ next: r, ...t }) {
  return t;
}
function ye(r, t) {
  const e = t.__effectiveBaseUrl;
  return e ? new URL(r.replace(/^\//u, ""), e).pathname : r;
}
function Dt(r) {
  return r
    .map((t) => t.path)
    .reduce(
      (t, e) =>
        e.length ? `${t.replace(/\/$/u, "")}/${e.replace(/^\//u, "")}` : t,
      ""
    );
}
function Mr(r) {
  return Dt(r.map((t) => t.route));
}
function T(
  {
    chain: r = [],
    hash: t = "",
    params: e = {},
    pathname: n = "",
    redirectFrom: i,
    resolver: s,
    search: o = "",
  },
  c
) {
  const a = r.map((u) => u.route);
  return {
    baseUrl: (s == null ? void 0 : s.baseUrl) ?? "",
    getUrl: (u = {}) => (s ? ye(Pt(Mr(r))({ ...e, ...u }), s) : ""),
    hash: t,
    params: e,
    pathname: n,
    redirectFrom: i,
    route: c ?? (Array.isArray(a) ? a.at(-1) : void 0) ?? null,
    routes: a,
    search: o,
    searchParams: new URLSearchParams(o),
  };
}
function ct(r, t) {
  const e = { ...r.params };
  return { redirect: { from: r.pathname, params: e, pathname: t } };
}
function Hr(r, t) {
  if (((t.location = T(r)), r.chain)) {
    const e = r.chain.map((n) => n.route).indexOf(r.route);
    r.chain[e].element = t;
  }
  return t;
}
function $e(r, t, ...e) {
  if (typeof r == "function") return r.apply(t, e);
}
function ht(r, t, ...e) {
  return (n) =>
    n && W(n) && ("cancel" in n || "redirect" in n)
      ? n
      : $e(t == null ? void 0 : t[r], t, ...e);
}
function Nr(r, t) {
  if (!Array.isArray(r) && !W(r))
    throw new Error(
      B(
        `Incorrect "children" value for the route ${String(
          t.path
        )}: expected array or object, but got ${String(r)}`
      )
    );
  const e = be(r);
  e.forEach((n) => Nt(n)), (t.__children = e);
}
function ae(r, t) {
  return !window.dispatchEvent(
    new CustomEvent(`vaadin-router-${r}`, { cancelable: r === "go", detail: t })
  );
}
function Dr(r) {
  if (typeof r != "object") return String(r);
  const [t = "Unknown"] = / (.*)\]$/u.exec(String(r)) ?? [];
  return t === "Object" || t === "Array" ? `${t} ${JSON.stringify(r)}` : t;
}
function Fr(r) {
  const { port: t, protocol: e } = r,
    s =
      (e === "http:" && t === "80") || (e === "https:" && t === "443")
        ? r.hostname
        : r.host;
  return `${e}//${s}`;
}
function lt(r) {
  if (r instanceof Element) return r.nodeName.toLowerCase();
}
function ut(r) {
  if (
    r.defaultPrevented ||
    r.button !== 0 ||
    r.shiftKey ||
    r.ctrlKey ||
    r.altKey ||
    r.metaKey
  )
    return;
  let t = r.target;
  const e = r instanceof MouseEvent ? r.composedPath() : r.path ?? [];
  for (let a = 0; a < e.length; a++) {
    const u = e[a];
    if ("nodeName" in u && u.nodeName.toLowerCase() === "a") {
      t = u;
      break;
    }
  }
  for (; t && t instanceof Node && lt(t) !== "a"; ) t = t.parentNode;
  if (!t || lt(t) !== "a") return;
  const n = t;
  if (
    (n.target && n.target.toLowerCase() !== "_self") ||
    n.hasAttribute("download") ||
    n.hasAttribute("router-ignore") ||
    (n.pathname === window.location.pathname && n.hash !== "") ||
    (n.origin || Fr(n)) !== window.location.origin
  )
    return;
  const { hash: s, pathname: o, search: c } = n;
  ae("go", { hash: s, pathname: o, search: c }) &&
    r instanceof MouseEvent &&
    (r.preventDefault(), r.type === "click" && window.scrollTo(0, 0));
}
const Br = {
  activate() {
    window.document.addEventListener("click", ut);
  },
  inactivate() {
    window.document.removeEventListener("click", ut);
  },
};
var Vr = Br;
function dt(r) {
  if (r.state === "vaadin-router-ignore") return;
  const { hash: t, pathname: e, search: n } = window.location;
  ae("go", { hash: t, pathname: e, search: n });
}
const zr = {
  activate() {
    window.addEventListener("popstate", dt);
  },
  inactivate() {
    window.removeEventListener("popstate", dt);
  },
};
var jr = zr;
let ft = [];
const Wr = { CLICK: Vr, POPSTATE: jr };
function pt(r = []) {
  ft.forEach((t) => t.inactivate()), r.forEach((t) => t.activate()), (ft = r);
}
const kr = 256;
function se() {
  return { cancel: !0 };
}
const mt = {
  __renderId: -1,
  params: {},
  route: { __synthetic: !0, children: [], path: "", action() {} },
  pathname: "",
  async next() {
    return J;
  },
};
var pe,
  te,
  me,
  G,
  F,
  K,
  L,
  O,
  d,
  Ft,
  Bt,
  we,
  Me,
  Vt,
  zt,
  He,
  Ne,
  De,
  H,
  Fe,
  Be,
  Ae,
  Ve,
  jt,
  Wt,
  kt,
  qt,
  Gt,
  Kt,
  ze;
class qr extends It {
  constructor(e, n) {
    const i = document.head.querySelector("base"),
      s = i == null ? void 0 : i.getAttribute("href");
    super([], {
      baseUrl: s
        ? new URL(s, document.URL).href.replace(/[^/]*$/u, "")
        : void 0,
      ...n,
      resolveRoute: async (o) => await p(this, d, Ft).call(this, o),
    });
    P(this, d);
    x(this, "location", T({ resolver: this }));
    x(this, "ready", Promise.resolve(this.location));
    P(this, pe, new WeakSet());
    P(this, te, new WeakSet());
    P(this, me, p(this, d, ze).bind(this));
    P(this, G, 0);
    P(this, F);
    x(this, "__previousContext");
    P(this, K);
    P(this, L, null);
    P(this, O, null);
    pt(Object.values(Wr)), this.setOutlet(e), this.subscribe();
  }
  setOutlet(e) {
    e && p(this, d, Be).call(this, e), b(this, F, e);
  }
  getOutlet() {
    return v(this, F);
  }
  async setRoutes(e, n = !1) {
    return (
      (this.__previousContext = void 0),
      b(this, K, void 0),
      at(e),
      super.setRoutes(e),
      n || p(this, d, ze).call(this),
      await this.ready
    );
  }
  addRoutes(e) {
    return at(e), super.addRoutes(e);
  }
  async render(e, n = !1) {
    b(this, G, v(this, G) + 1);
    const i = v(this, G),
      s = {
        ...mt,
        ...(I(e) ? { hash: "", search: "", pathname: e } : e),
        __renderId: i,
      };
    return (this.ready = p(this, d, Bt).call(this, s, n)), await this.ready;
  }
  subscribe() {
    window.addEventListener("vaadin-router-go", v(this, me));
  }
  unsubscribe() {
    window.removeEventListener("vaadin-router-go", v(this, me));
  }
  static setTriggers(...e) {
    pt(e);
  }
  urlForName(e, n) {
    return (
      v(this, K) ||
        b(
          this,
          K,
          wr(this, {
            cacheKeyProvider(i) {
              return "component" in i && typeof i.component == "string"
                ? i.component
                : void 0;
            },
          })
        ),
      ye(v(this, K).call(this, e, n ?? void 0), this)
    );
  }
  urlForPath(e, n) {
    return ye(Pt(e)(n ?? void 0), this);
  }
  static go(e) {
    const {
      pathname: n,
      search: i,
      hash: s,
    } = I(e) ? new URL(e, "http://a") : e;
    return ae("go", { pathname: n, search: i, hash: s });
  }
}
(pe = new WeakMap()),
  (te = new WeakMap()),
  (me = new WeakMap()),
  (G = new WeakMap()),
  (F = new WeakMap()),
  (K = new WeakMap()),
  (L = new WeakMap()),
  (O = new WeakMap()),
  (d = new WeakSet()),
  (Ft = async function (e) {
    const { route: n } = e;
    if (le(n.children)) {
      let s = await n.children(Ir(e));
      le(n.children) || ({ children: s } = n), Nr(s, n);
    }
    const i = {
      component: (s) => {
        const o = document.createElement(s);
        return v(this, te).add(o), o;
      },
      prevent: se,
      redirect: (s) => ct(e, s),
    };
    return await Promise.resolve()
      .then(async () => {
        if (p(this, d, H).call(this, e)) return await $e(n.action, n, e, i);
      })
      .then((s) => {
        if (
          s != null &&
          (typeof s == "object" || typeof s == "symbol") &&
          (s instanceof HTMLElement || s === J || (W(s) && "redirect" in s))
        )
          return s;
        if (I(n.redirect)) return i.redirect(n.redirect);
      })
      .then((s) => {
        if (s != null) return s;
        if (I(n.component)) return i.component(n.component);
      });
  }),
  (Bt = async function (e, n) {
    var s;
    const { __renderId: i } = e;
    try {
      const o = await this.resolve(e),
        c = await p(this, d, we).call(this, o);
      if (!p(this, d, H).call(this, c)) return this.location;
      const a = this.__previousContext;
      if (c === a) return p(this, d, Ae).call(this, a, !0), this.location;
      if (
        ((this.location = T(c)),
        n && p(this, d, Ae).call(this, c, i === 1),
        ae("location-changed", { router: this, location: this.location }),
        c.__skipAttach)
      )
        return (
          p(this, d, Ve).call(this, c, a),
          (this.__previousContext = c),
          this.location
        );
      p(this, d, jt).call(this, c, a);
      const u = p(this, d, Kt).call(this, c);
      if (
        (p(this, d, Gt).call(this, c),
        p(this, d, qt).call(this, c, a),
        await u,
        p(this, d, H).call(this, c))
      )
        return (
          p(this, d, Wt).call(this), (this.__previousContext = c), this.location
        );
    } catch (o) {
      if (i === v(this, G)) {
        n && p(this, d, Ae).call(this, this.context);
        for (const c of ((s = v(this, F)) == null ? void 0 : s.children) ?? [])
          c.remove();
        throw (
          ((this.location = T(Object.assign(e, { resolver: this }))),
          ae("error", { router: this, error: o, ...e }),
          o)
        );
      }
    }
    return this.location;
  }),
  (we = async function (e, n = e) {
    const i = await p(this, d, Me).call(this, n),
      o = i !== n ? i : e,
      a = ye(Dt(i.chain ?? []), this) === i.pathname,
      u = async (h, f = h.route, m) => {
        const _ = await h.next(!1, f, m);
        return _ === null || _ === J
          ? a
            ? h
            : f.parent != null
            ? await u(h, f.parent, _)
            : _
          : _;
      },
      l = await u(i);
    if (l == null || l === J) throw Ot(o);
    return l !== i
      ? await p(this, d, we).call(this, o, l)
      : await p(this, d, Vt).call(this, i);
  }),
  (Me = async function (e) {
    const { result: n } = e;
    if (n instanceof HTMLElement) return Hr(e, n), e;
    if (n && "redirect" in n) {
      const i = await p(this, d, Fe).call(
        this,
        n.redirect,
        e.__redirectCount,
        e.__renderId
      );
      return await p(this, d, Me).call(this, i);
    }
    throw n instanceof Error
      ? n
      : new Error(
          B(
            `Invalid route resolution result for path "${
              e.pathname
            }". Expected redirect object or HTML element, but got: "${Dr(
              n
            )}". Double check the action return value for the route.`
          )
        );
  }),
  (Vt = async function (e) {
    return await p(this, d, zt)
      .call(this, e)
      .then(async (n) =>
        n === this.__previousContext || n === e
          ? n
          : await p(this, d, we).call(this, n)
      );
  }),
  (zt = async function (e) {
    const n = this.__previousContext ?? {},
      i = n.chain ?? [],
      s = e.chain ?? [];
    let o = Promise.resolve(void 0);
    const c = (a) => ct(e, a);
    if (((e.__divergedChainIndex = 0), (e.__skipAttach = !1), i.length)) {
      for (
        let a = 0;
        a < Math.min(i.length, s.length) &&
        !(
          i[a].route !== s[a].route ||
          (i[a].path !== s[a].path && i[a].element !== s[a].element) ||
          !p(this, d, De).call(this, i[a].element, s[a].element)
        );
        e.__divergedChainIndex++, a++
      );
      if (
        ((e.__skipAttach =
          s.length === i.length &&
          e.__divergedChainIndex === s.length &&
          p(this, d, De).call(this, e.result, n.result)),
        e.__skipAttach)
      ) {
        for (let a = s.length - 1; a >= 0; a--)
          o = p(this, d, He).call(this, o, e, { prevent: se }, i[a]);
        for (let a = 0; a < s.length; a++)
          (o = p(this, d, Ne).call(
            this,
            o,
            e,
            { prevent: se, redirect: c },
            s[a]
          )),
            (i[a].element.location = T(e, i[a].route));
      } else
        for (let a = i.length - 1; a >= e.__divergedChainIndex; a--)
          o = p(this, d, He).call(this, o, e, { prevent: se }, i[a]);
    }
    if (!e.__skipAttach)
      for (let a = 0; a < s.length; a++)
        a < e.__divergedChainIndex
          ? a < i.length &&
            i[a].element &&
            (i[a].element.location = T(e, i[a].route))
          : ((o = p(this, d, Ne).call(
              this,
              o,
              e,
              { prevent: se, redirect: c },
              s[a]
            )),
            s[a].element && (s[a].element.location = T(e, s[a].route)));
    return await o.then(async (a) => {
      if (a && W(a)) {
        if ("cancel" in a && this.__previousContext)
          return (
            (this.__previousContext.__renderId = e.__renderId),
            this.__previousContext
          );
        if ("redirect" in a)
          return await p(this, d, Fe).call(
            this,
            a.redirect,
            e.__redirectCount,
            e.__renderId
          );
      }
      return e;
    });
  }),
  (He = async function (e, n, i, s) {
    const o = T(n);
    let c = await e;
    if (
      (p(this, d, H).call(this, n) &&
        (c = ht("onBeforeLeave", s.element, o, i, this)(c)),
      !(W(c) && "redirect" in c))
    )
      return c;
  }),
  (Ne = async function (e, n, i, s) {
    const o = T(n, s.route),
      c = await e;
    if (p(this, d, H).call(this, n))
      return ht("onBeforeEnter", s.element, o, i, this)(c);
  }),
  (De = function (e, n) {
    return e instanceof Element && n instanceof Element
      ? v(this, te).has(e) && v(this, te).has(n)
        ? e.localName === n.localName
        : e === n
      : !1;
  }),
  (H = function (e) {
    return e.__renderId === v(this, G);
  }),
  (Fe = async function (e, n = 0, i = 0) {
    if (n > kr)
      throw new Error(B(`Too many redirects when rendering ${e.from}`));
    return await this.resolve({
      ...mt,
      pathname: this.urlForPath(e.pathname, e.params),
      redirectFrom: e.from,
      __redirectCount: n + 1,
      __renderId: i,
    });
  }),
  (Be = function (e = v(this, F)) {
    if (!(e instanceof Element || e instanceof DocumentFragment))
      throw new TypeError(
        B(
          `Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`
        )
      );
  }),
  (Ae = function ({ pathname: e, search: n = "", hash: i = "" }, s) {
    if (
      window.location.pathname !== e ||
      window.location.search !== n ||
      window.location.hash !== i
    ) {
      const o = s ? "replaceState" : "pushState";
      window.history[o](null, document.title, e + n + i),
        window.dispatchEvent(
          new PopStateEvent("popstate", { state: "vaadin-router-ignore" })
        );
    }
  }),
  (Ve = function (e, n) {
    var s;
    let i = v(this, F);
    for (let o = 0; o < (e.__divergedChainIndex ?? 0); o++) {
      const c =
        (s = n == null ? void 0 : n.chain) == null ? void 0 : s[o].element;
      if (c)
        if (c.parentNode === i) (e.chain[o].element = c), (i = c);
        else break;
    }
    return i;
  }),
  (jt = function (e, n) {
    var o;
    p(this, d, Be).call(this), p(this, d, kt).call(this);
    const i = p(this, d, Ve).call(this, e, n);
    b(this, L, []),
      b(
        this,
        O,
        Array.from((i == null ? void 0 : i.children) ?? []).filter(
          (c) => v(this, pe).has(c) && c !== e.result
        )
      );
    let s = i;
    for (
      let c = e.__divergedChainIndex ?? 0;
      c < (((o = e.chain) == null ? void 0 : o.length) ?? 0);
      c++
    ) {
      const a = e.chain[c].element;
      a &&
        (s == null || s.appendChild(a),
        v(this, pe).add(a),
        s === i && v(this, L).push(a),
        (s = a));
    }
  }),
  (Wt = function () {
    if (v(this, O)) for (const e of v(this, O)) e.remove();
    b(this, O, null), b(this, L, null);
  }),
  (kt = function () {
    if (v(this, O) && v(this, L)) {
      for (const e of v(this, L)) e.remove();
      b(this, O, null), b(this, L, null);
    }
  }),
  (qt = function (e, n) {
    var i;
    if (!(!(n != null && n.chain) || e.__divergedChainIndex == null))
      for (
        let s = n.chain.length - 1;
        s >= e.__divergedChainIndex && p(this, d, H).call(this, e);
        s--
      ) {
        const o = n.chain[s].element;
        if (o)
          try {
            const c = T(e);
            $e(o.onAfterLeave, o, c, {}, this);
          } finally {
            if ((i = v(this, O)) != null && i.includes(o))
              for (const c of o.children) c.remove();
          }
      }
  }),
  (Gt = function (e) {
    if (!(!e.chain || e.__divergedChainIndex == null))
      for (
        let n = e.__divergedChainIndex;
        n < e.chain.length && p(this, d, H).call(this, e);
        n++
      ) {
        const i = e.chain[n].element;
        if (i) {
          const s = T(e, e.chain[n].route);
          $e(i.onAfterEnter, i, s, {}, this);
        }
      }
  }),
  (Kt = async function (e) {
    var a, u;
    const n = (a = v(this, O)) == null ? void 0 : a[0],
      i = (u = v(this, L)) == null ? void 0 : u[0],
      s = [],
      { chain: o = [] } = e;
    let c;
    for (let l = o.length - 1; l >= 0; l--)
      if (o[l].route.animate) {
        c = o[l].route.animate;
        break;
      }
    if (n && i && c) {
      const l = W(c) && c.leave ? c.leave : "leaving",
        h = W(c) && c.enter ? c.enter : "entering";
      s.push(ot(n, l)), s.push(ot(i, h));
    }
    return await Promise.all(s), e;
  }),
  (ze = function (e) {
    const {
      pathname: n,
      search: i,
      hash: s,
    } = e instanceof CustomEvent ? e.detail : window.location;
    I(this.__normalizePathname(n)) &&
      (e != null && e.preventDefault && e.preventDefault(),
      this.render({ pathname: n, search: i, hash: s }, !0));
  });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ee = globalThis,
  Je =
    Ee.ShadowRoot &&
    (Ee.ShadyCSS === void 0 || Ee.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Qe = Symbol(),
  vt = new WeakMap();
let Jt = class {
  constructor(t, e, n) {
    if (((this._$cssResult$ = !0), n !== Qe))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Je && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = vt.get(e)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          n && vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Gr = (r) => new Jt(typeof r == "string" ? r : r + "", void 0, Qe),
  Xe = (r, ...t) => {
    const e =
      r.length === 1
        ? r[0]
        : t.reduce(
            (n, i, s) =>
              n +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              r[s + 1],
            r[0]
          );
    return new Jt(e, r, Qe);
  },
  Kr = (r, t) => {
    if (Je)
      r.adoptedStyleSheets = t.map((e) =>
        e instanceof CSSStyleSheet ? e : e.styleSheet
      );
    else
      for (const e of t) {
        const n = document.createElement("style"),
          i = Ee.litNonce;
        i !== void 0 && n.setAttribute("nonce", i),
          (n.textContent = e.cssText),
          r.appendChild(n);
      }
  },
  _t = Je
    ? (r) => r
    : (r) =>
        r instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const n of t.cssRules) e += n.cssText;
              return Gr(e);
            })(r)
          : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const {
    is: Jr,
    defineProperty: Qr,
    getOwnPropertyDescriptor: Xr,
    getOwnPropertyNames: Zr,
    getOwnPropertySymbols: Yr,
    getPrototypeOf: en,
  } = Object,
  V = globalThis,
  gt = V.trustedTypes,
  tn = gt ? gt.emptyScript : "",
  Te = V.reactiveElementPolyfillSupport,
  ce = (r, t) => r,
  je = {
    toAttribute(r, t) {
      switch (t) {
        case Boolean:
          r = r ? tn : null;
          break;
        case Object:
        case Array:
          r = r == null ? r : JSON.stringify(r);
      }
      return r;
    },
    fromAttribute(r, t) {
      let e = r;
      switch (t) {
        case Boolean:
          e = r !== null;
          break;
        case Number:
          e = r === null ? null : Number(r);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(r);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  Qt = (r, t) => !Jr(r, t),
  yt = {
    attribute: !0,
    type: String,
    converter: je,
    reflect: !1,
    hasChanged: Qt,
  };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
  V.litPropertyMetadata ?? (V.litPropertyMetadata = new WeakMap());
class ee extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = yt) {
    if (
      (e.state && (e.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, e),
      !e.noAccessor)
    ) {
      const n = Symbol(),
        i = this.getPropertyDescriptor(t, n, e);
      i !== void 0 && Qr(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: i, set: s } = Xr(this.prototype, t) ?? {
      get() {
        return this[e];
      },
      set(o) {
        this[e] = o;
      },
    };
    return {
      get() {
        return i == null ? void 0 : i.call(this);
      },
      set(o) {
        const c = i == null ? void 0 : i.call(this);
        s.call(this, o), this.requestUpdate(t, c, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ce("elementProperties"))) return;
    const t = en(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(ce("finalized"))) return;
    if (
      ((this.finalized = !0),
      this._$Ei(),
      this.hasOwnProperty(ce("properties")))
    ) {
      const e = this.properties,
        n = [...Zr(e), ...Yr(e)];
      for (const i of n) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [n, i] of e) this.elementProperties.set(n, i);
    }
    this._$Eh = new Map();
    for (const [e, n] of this.elementProperties) {
      const i = this._$Eu(e, n);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const i of n) e.unshift(_t(i));
    } else t !== void 0 && e.push(_t(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1
      ? void 0
      : typeof n == "string"
      ? n
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    var t;
    (this._$ES = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = new Set())).add(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = new Map(),
      e = this.constructor.elementProperties;
    for (const n of e.keys())
      this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Kr(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$EO) == null ||
        t.forEach((e) => {
          var n;
          return (n = e.hostConnected) == null ? void 0 : n.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null ||
      t.forEach((e) => {
        var n;
        return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
      });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$EC(t, e) {
    var s;
    const n = this.constructor.elementProperties.get(t),
      i = this.constructor._$Eu(t, n);
    if (i !== void 0 && n.reflect === !0) {
      const o = (
        ((s = n.converter) == null ? void 0 : s.toAttribute) !== void 0
          ? n.converter
          : je
      ).toAttribute(e, n.type);
      (this._$Em = t),
        o == null ? this.removeAttribute(i) : this.setAttribute(i, o),
        (this._$Em = null);
    }
  }
  _$AK(t, e) {
    var s;
    const n = this.constructor,
      i = n._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = n.getPropertyOptions(i),
        c =
          typeof o.converter == "function"
            ? { fromAttribute: o.converter }
            : ((s = o.converter) == null ? void 0 : s.fromAttribute) !== void 0
            ? o.converter
            : je;
      (this._$Em = i),
        (this[i] = c.fromAttribute(e, o.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, e, n) {
    if (t !== void 0) {
      if (
        (n ?? (n = this.constructor.getPropertyOptions(t)),
        !(n.hasChanged ?? Qt)(this[t], e))
      )
        return;
      this.P(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, n) {
    this._$AL.has(t) || this._$AL.set(t, e),
      n.reflect === !0 &&
        this._$Em !== t &&
        (this._$Ej ?? (this._$Ej = new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (
        (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
        this._$Ep)
      ) {
        for (const [s, o] of this._$Ep) this[s] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [s, o] of i)
          o.wrapped !== !0 ||
            this._$AL.has(s) ||
            this[s] === void 0 ||
            this.P(s, this[s], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      (t = this.shouldUpdate(e)),
        t
          ? (this.willUpdate(e),
            (n = this._$EO) == null ||
              n.forEach((i) => {
                var s;
                return (s = i.hostUpdate) == null ? void 0 : s.call(i);
              }),
            this.update(e))
          : this._$EU();
    } catch (i) {
      throw ((t = !1), this._$EU(), i);
    }
    t && this._$AE(e);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$EO) == null ||
      e.forEach((n) => {
        var i;
        return (i = n.hostUpdated) == null ? void 0 : i.call(n);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(ee.elementStyles = []),
  (ee.shadowRootOptions = { mode: "open" }),
  (ee[ce("elementProperties")] = new Map()),
  (ee[ce("finalized")] = new Map()),
  Te == null || Te({ ReactiveElement: ee }),
  (V.reactiveElementVersions ?? (V.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const he = globalThis,
  Se = he.trustedTypes,
  $t = Se ? Se.createPolicy("lit-html", { createHTML: (r) => r }) : void 0,
  Xt = "$lit$",
  D = `lit$${Math.random().toFixed(9).slice(2)}$`,
  Zt = "?" + D,
  rn = `<${Zt}>`,
  X = document,
  ue = () => X.createComment(""),
  de = (r) => r === null || (typeof r != "object" && typeof r != "function"),
  Ze = Array.isArray,
  nn = (r) =>
    Ze(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function",
  Oe = `[ 	
\f\r]`,
  oe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  wt = /-->/g,
  At = />/g,
  j = RegExp(
    `>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  Et = /'/g,
  bt = /"/g,
  Yt = /^(?:script|style|textarea|title)$/i,
  sn =
    (r) =>
    (t, ...e) => ({ _$litType$: r, strings: t, values: e }),
  Ye = sn(1),
  re = Symbol.for("lit-noChange"),
  A = Symbol.for("lit-nothing"),
  Rt = new WeakMap(),
  k = X.createTreeWalker(X, 129);
function er(r, t) {
  if (!Ze(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return $t !== void 0 ? $t.createHTML(t) : t;
}
const on = (r, t) => {
  const e = r.length - 1,
    n = [];
  let i,
    s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "",
    o = oe;
  for (let c = 0; c < e; c++) {
    const a = r[c];
    let u,
      l,
      h = -1,
      f = 0;
    for (; f < a.length && ((o.lastIndex = f), (l = o.exec(a)), l !== null); )
      (f = o.lastIndex),
        o === oe
          ? l[1] === "!--"
            ? (o = wt)
            : l[1] !== void 0
            ? (o = At)
            : l[2] !== void 0
            ? (Yt.test(l[2]) && (i = RegExp("</" + l[2], "g")), (o = j))
            : l[3] !== void 0 && (o = j)
          : o === j
          ? l[0] === ">"
            ? ((o = i ?? oe), (h = -1))
            : l[1] === void 0
            ? (h = -2)
            : ((h = o.lastIndex - l[2].length),
              (u = l[1]),
              (o = l[3] === void 0 ? j : l[3] === '"' ? bt : Et))
          : o === bt || o === Et
          ? (o = j)
          : o === wt || o === At
          ? (o = oe)
          : ((o = j), (i = void 0));
    const m = o === j && r[c + 1].startsWith("/>") ? " " : "";
    s +=
      o === oe
        ? a + rn
        : h >= 0
        ? (n.push(u), a.slice(0, h) + Xt + a.slice(h) + D + m)
        : a + D + (h === -2 ? c : m);
  }
  return [
    er(
      r,
      s + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")
    ),
    n,
  ];
};
class fe {
  constructor({ strings: t, _$litType$: e }, n) {
    let i;
    this.parts = [];
    let s = 0,
      o = 0;
    const c = t.length - 1,
      a = this.parts,
      [u, l] = on(t, e);
    if (
      ((this.el = fe.createElement(u, n)),
      (k.currentNode = this.el.content),
      e === 2 || e === 3)
    ) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = k.nextNode()) !== null && a.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const h of i.getAttributeNames())
            if (h.endsWith(Xt)) {
              const f = l[o++],
                m = i.getAttribute(h).split(D),
                _ = /([.?@])?(.*)/.exec(f);
              a.push({
                type: 1,
                index: s,
                name: _[2],
                strings: m,
                ctor:
                  _[1] === "."
                    ? cn
                    : _[1] === "?"
                    ? hn
                    : _[1] === "@"
                    ? ln
                    : Pe,
              }),
                i.removeAttribute(h);
            } else
              h.startsWith(D) &&
                (a.push({ type: 6, index: s }), i.removeAttribute(h));
        if (Yt.test(i.tagName)) {
          const h = i.textContent.split(D),
            f = h.length - 1;
          if (f > 0) {
            i.textContent = Se ? Se.emptyScript : "";
            for (let m = 0; m < f; m++)
              i.append(h[m], ue()),
                k.nextNode(),
                a.push({ type: 2, index: ++s });
            i.append(h[f], ue());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Zt) a.push({ type: 2, index: s });
        else {
          let h = -1;
          for (; (h = i.data.indexOf(D, h + 1)) !== -1; )
            a.push({ type: 7, index: s }), (h += D.length - 1);
        }
      s++;
    }
  }
  static createElement(t, e) {
    const n = X.createElement("template");
    return (n.innerHTML = t), n;
  }
}
function ne(r, t, e = r, n) {
  var o, c;
  if (t === re) return t;
  let i = n !== void 0 ? ((o = e._$Co) == null ? void 0 : o[n]) : e._$Cl;
  const s = de(t) ? void 0 : t._$litDirective$;
  return (
    (i == null ? void 0 : i.constructor) !== s &&
      ((c = i == null ? void 0 : i._$AO) == null || c.call(i, !1),
      s === void 0 ? (i = void 0) : ((i = new s(r)), i._$AT(r, e, n)),
      n !== void 0 ? ((e._$Co ?? (e._$Co = []))[n] = i) : (e._$Cl = i)),
    i !== void 0 && (t = ne(r, i._$AS(r, t.values), i, n)),
    t
  );
}
class an {
  constructor(t, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: { content: e },
        parts: n,
      } = this._$AD,
      i = ((t == null ? void 0 : t.creationScope) ?? X).importNode(e, !0);
    k.currentNode = i;
    let s = k.nextNode(),
      o = 0,
      c = 0,
      a = n[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let u;
        a.type === 2
          ? (u = new ve(s, s.nextSibling, this, t))
          : a.type === 1
          ? (u = new a.ctor(s, a.name, a.strings, this, t))
          : a.type === 6 && (u = new un(s, this, t)),
          this._$AV.push(u),
          (a = n[++c]);
      }
      o !== (a == null ? void 0 : a.index) && ((s = k.nextNode()), o++);
    }
    return (k.currentNode = X), i;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV)
      n !== void 0 &&
        (n.strings !== void 0
          ? (n._$AI(t, n, e), (e += n.strings.length - 2))
          : n._$AI(t[e])),
        e++;
  }
}
class ve {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, i) {
    (this.type = 2),
      (this._$AH = A),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = n),
      (this.options = i),
      (this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0);
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return (
      e !== void 0 &&
        (t == null ? void 0 : t.nodeType) === 11 &&
        (t = e.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = ne(this, t, e)),
      de(t)
        ? t === A || t == null || t === ""
          ? (this._$AH !== A && this._$AR(), (this._$AH = A))
          : t !== this._$AH && t !== re && this._(t)
        : t._$litType$ !== void 0
        ? this.$(t)
        : t.nodeType !== void 0
        ? this.T(t)
        : nn(t)
        ? this.k(t)
        : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  _(t) {
    this._$AH !== A && de(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(X.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var s;
    const { values: e, _$litType$: n } = t,
      i =
        typeof n == "number"
          ? this._$AC(t)
          : (n.el === void 0 &&
              (n.el = fe.createElement(er(n.h, n.h[0]), this.options)),
            n);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === i) this._$AH.p(e);
    else {
      const o = new an(i, this),
        c = o.u(this.options);
      o.p(e), this.T(c), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = Rt.get(t.strings);
    return e === void 0 && Rt.set(t.strings, (e = new fe(t))), e;
  }
  k(t) {
    Ze(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let n,
      i = 0;
    for (const s of t)
      i === e.length
        ? e.push((n = new ve(this.O(ue()), this.O(ue()), this, this.options)))
        : (n = e[i]),
        n._$AI(s),
        i++;
    i < e.length && (this._$AR(n && n._$AB.nextSibling, i), (e.length = i));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for (
      (n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cv = t), (e = this._$AP) == null || e.call(this, t));
  }
}
class Pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, i, s) {
    (this.type = 1),
      (this._$AH = A),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = i),
      (this.options = s),
      n.length > 2 || n[0] !== "" || n[1] !== ""
        ? ((this._$AH = Array(n.length - 1).fill(new String())),
          (this.strings = n))
        : (this._$AH = A);
  }
  _$AI(t, e = this, n, i) {
    const s = this.strings;
    let o = !1;
    if (s === void 0)
      (t = ne(this, t, e, 0)),
        (o = !de(t) || (t !== this._$AH && t !== re)),
        o && (this._$AH = t);
    else {
      const c = t;
      let a, u;
      for (t = s[0], a = 0; a < s.length - 1; a++)
        (u = ne(this, c[n + a], e, a)),
          u === re && (u = this._$AH[a]),
          o || (o = !de(u) || u !== this._$AH[a]),
          u === A ? (t = A) : t !== A && (t += (u ?? "") + s[a + 1]),
          (this._$AH[a] = u);
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === A
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class cn extends Pe {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
class hn extends Pe {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== A);
  }
}
class ln extends Pe {
  constructor(t, e, n, i, s) {
    super(t, e, n, i, s), (this.type = 5);
  }
  _$AI(t, e = this) {
    if ((t = ne(this, t, e, 0) ?? A) === re) return;
    const n = this._$AH,
      i =
        (t === A && n !== A) ||
        t.capture !== n.capture ||
        t.once !== n.once ||
        t.passive !== n.passive,
      s = t !== A && (n === A || i);
    i && this.element.removeEventListener(this.name, this, n),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function"
      ? this._$AH.call(
          ((e = this.options) == null ? void 0 : e.host) ?? this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class un {
  constructor(t, e, n) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = n);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    ne(this, t);
  }
}
const Ue = he.litHtmlPolyfillSupport;
Ue == null || Ue(fe, ve),
  (he.litHtmlVersions ?? (he.litHtmlVersions = [])).push("3.2.1");
const dn = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = n._$litPart$;
  if (i === void 0) {
    const s = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = i = new ve(t.insertBefore(ue(), s), s, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Q extends ee {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (
      (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild),
      t
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = dn(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return re;
  }
}
var St;
(Q._$litElement$ = !0),
  (Q.finalized = !0),
  (St = globalThis.litElementHydrateSupport) == null ||
    St.call(globalThis, { LitElement: Q });
const Le = globalThis.litElementPolyfillSupport;
Le == null || Le({ LitElement: Q });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  "4.1.1"
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const et = (r) => (t, e) => {
  e !== void 0
    ? e.addInitializer(() => {
        customElements.define(r, t);
      })
    : customElements.define(r, t);
};
var fn = Object.getOwnPropertyDescriptor,
  pn = (r, t, e, n) => {
    for (
      var i = n > 1 ? void 0 : n ? fn(t, e) : t, s = r.length - 1, o;
      s >= 0;
      s--
    )
      (o = r[s]) && (i = o(i) || i);
    return i;
  };
let We = class extends Q {
  render() {
    return Ye`
      <div class="topnav">
        <a class="home" href="/">litjs Company</a>
      </div>
    `;
  }
};
We.styles = Xe`
    .topnav {
      height: 80px;
      background-color: var(--background-dark);
      color: var(--text-primary);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
    }
    .home {
      text-decoration: none;
      font-size: 2rem;
    }
  `;
We = pn([et("lit-header")], We);
var mn = Object.getOwnPropertyDescriptor,
  vn = (r, t, e, n) => {
    for (
      var i = n > 1 ? void 0 : n ? mn(t, e) : t, s = r.length - 1, o;
      s >= 0;
      s--
    )
      (o = r[s]) && (i = o(i) || i);
    return i;
  };
let ke = class extends Q {
  render() {
    return Ye`
      <div class="subnav">
        <a href="/lit-app/">Home</a>
        <a href="/lit-app/photos">Photos</a>
        <a href="/lit-app/users">Users</a>
        <a href="/lit-app/quote">Random Quote</a>
      </div>
    `;
  }
};
ke.styles = Xe`
    :host {
      height: 100px;
    }
    .subnav {
      height: 50px;
      background-color: var(--background-light);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 1.5rem;
      border-bottom: 1px solid var(--background-dark);
    }

    a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 1rem;
    }
  `;
ke = vn([et("lit-subnav")], ke);
var _n = Object.getOwnPropertyDescriptor,
  gn = (r, t, e, n) => {
    for (
      var i = n > 1 ? void 0 : n ? _n(t, e) : t, s = r.length - 1, o;
      s >= 0;
      s--
    )
      (o = r[s]) && (i = o(i) || i);
    return i;
  };
let qe = class extends Q {
  render() {
    return Ye`
      <lit-header></lit-header>
      <lit-subnav></lit-subnav>
      <main class="main">
        <slot></slot>
      </main>
    `;
  }
};
qe.styles = Xe`
    main {
      min-height: calc(100dvh - 100px);
      padding: 0.5rem 1rem;
    }
  `;
qe = gn([et("lit-app")], qe);
const yn = [
    {
      path: "/lit-app/",
      component: "lit-app",
      children: [
        {
          path: "/",
          component: "lit-home",
          action: async () => {
            await _e(() => import("./home-gJUf3AZJ.js"), []);
          },
        },
        {
          path: "quote",
          component: "lit-quote",
          action: async () => {
            await _e(
              () => import("./quote-DfV7sTR0.js"),
              __vite__mapDeps([0, 1])
            );
          },
        },
        {
          path: "users",
          component: "lit-users",
          action: async () => {
            await _e(
              () => import("./users-m2rRRVjm.js"),
              __vite__mapDeps([2, 1])
            );
          },
        },
        {
          path: "photos",
          component: "lit-photos",
          action: async () => {
            await _e(
              () => import("./photos-SoI7PPRp.js"),
              __vite__mapDeps([3, 1])
            );
          },
        },
      ],
    },
  ],
  $n = document.getElementById("outlet"),
  wn = new qr($n);
wn.setRoutes(yn);
export { Qt as f, Xe as i, Q as r, et as t, je as u, Ye as x };
