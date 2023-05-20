(function (E, w) {
  typeof exports == "object" && typeof module != "undefined"
    ? w(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], w)
    : ((E = typeof globalThis != "undefined" ? globalThis : E || self),
      w((E.quickv = {})));
})(this, function (E) {
  "use strict";
  var pt = Object.defineProperty;
  var Se = Object.getOwnPropertySymbols;
  var gt = Object.prototype.hasOwnProperty,
    vt = Object.prototype.propertyIsEnumerable;
  var Ae = (E, w, S) =>
      w in E
        ? pt(E, w, { enumerable: !0, configurable: !0, writable: !0, value: S })
        : (E[w] = S),
    C = (E, w) => {
      for (var S in w || (w = {})) gt.call(w, S) && Ae(E, S, w[S]);
      if (Se) for (var S of Se(w)) vt.call(w, S) && Ae(E, S, w[S]);
      return E;
    };
  var w =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function S(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var ce = { exports: {} };
  (function (t, e) {
    (function (s, i) {
      t.exports = i();
    })(w, function () {
      var s = 1e3,
        i = 6e4,
        r = 36e5,
        l = "millisecond",
        u = "second",
        m = "minute",
        y = "hour",
        A = "day",
        O = "week",
        L = "month",
        Me = "quarter",
        x = "year",
        G = "date",
        $e = "Invalid Date",
        dt =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        ct =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        ft = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (h) {
            var o = ["th", "st", "nd", "rd"],
              n = h % 100;
            return "[" + h + (o[(n - 20) % 10] || o[n] || o[0]) + "]";
          },
        },
        ue = function (h, o, n) {
          var d = String(h);
          return !d || d.length >= o
            ? h
            : "" + Array(o + 1 - d.length).join(n) + h;
        },
        mt = {
          s: ue,
          z: function (h) {
            var o = -h.utcOffset(),
              n = Math.abs(o),
              d = Math.floor(n / 60),
              a = n % 60;
            return (o <= 0 ? "+" : "-") + ue(d, 2, "0") + ":" + ue(a, 2, "0");
          },
          m: function h(o, n) {
            if (o.date() < n.date()) return -h(n, o);
            var d = 12 * (n.year() - o.year()) + (n.month() - o.month()),
              a = o.clone().add(d, L),
              f = n - a < 0,
              c = o.clone().add(d + (f ? -1 : 1), L);
            return +(-(d + (n - a) / (f ? a - c : c - a)) || 0);
          },
          a: function (h) {
            return h < 0 ? Math.ceil(h) || 0 : Math.floor(h);
          },
          p: function (h) {
            return (
              { M: L, y: x, w: O, d: A, D: G, h: y, m, s: u, ms: l, Q: Me }[
                h
              ] ||
              String(h || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (h) {
            return h === void 0;
          },
        },
        P = "en",
        j = {};
      j[P] = ft;
      var he = function (h) {
          return h instanceof te;
        },
        ee = function h(o, n, d) {
          var a;
          if (!o) return P;
          if (typeof o == "string") {
            var f = o.toLowerCase();
            j[f] && (a = f), n && ((j[f] = n), (a = f));
            var c = o.split("-");
            if (!a && c.length > 1) return h(c[0]);
          } else {
            var p = o.name;
            (j[p] = o), (a = p);
          }
          return !d && a && (P = a), a || (!d && P);
        },
        _ = function (h, o) {
          if (he(h)) return h.clone();
          var n = typeof o == "object" ? o : {};
          return (n.date = h), (n.args = arguments), new te(n);
        },
        g = mt;
      (g.l = ee),
        (g.i = he),
        (g.w = function (h, o) {
          return _(h, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
        });
      var te = (function () {
          function h(n) {
            (this.$L = ee(n.locale, null, !0)), this.parse(n);
          }
          var o = h.prototype;
          return (
            (o.parse = function (n) {
              (this.$d = (function (d) {
                var a = d.date,
                  f = d.utc;
                if (a === null) return new Date(NaN);
                if (g.u(a)) return new Date();
                if (a instanceof Date) return new Date(a);
                if (typeof a == "string" && !/Z$/i.test(a)) {
                  var c = a.match(dt);
                  if (c) {
                    var p = c[2] - 1 || 0,
                      b = (c[7] || "0").substring(0, 3);
                    return f
                      ? new Date(
                          Date.UTC(
                            c[1],
                            p,
                            c[3] || 1,
                            c[4] || 0,
                            c[5] || 0,
                            c[6] || 0,
                            b
                          )
                        )
                      : new Date(
                          c[1],
                          p,
                          c[3] || 1,
                          c[4] || 0,
                          c[5] || 0,
                          c[6] || 0,
                          b
                        );
                  }
                }
                return new Date(a);
              })(n)),
                (this.$x = n.x || {}),
                this.init();
            }),
            (o.init = function () {
              var n = this.$d;
              (this.$y = n.getFullYear()),
                (this.$M = n.getMonth()),
                (this.$D = n.getDate()),
                (this.$W = n.getDay()),
                (this.$H = n.getHours()),
                (this.$m = n.getMinutes()),
                (this.$s = n.getSeconds()),
                (this.$ms = n.getMilliseconds());
            }),
            (o.$utils = function () {
              return g;
            }),
            (o.isValid = function () {
              return this.$d.toString() !== $e;
            }),
            (o.isSame = function (n, d) {
              var a = _(n);
              return this.startOf(d) <= a && a <= this.endOf(d);
            }),
            (o.isAfter = function (n, d) {
              return _(n) < this.startOf(d);
            }),
            (o.isBefore = function (n, d) {
              return this.endOf(d) < _(n);
            }),
            (o.$g = function (n, d, a) {
              return g.u(n) ? this[d] : this.set(a, n);
            }),
            (o.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (o.valueOf = function () {
              return this.$d.getTime();
            }),
            (o.startOf = function (n, d) {
              var a = this,
                f = !!g.u(d) || d,
                c = g.p(n),
                p = function (H, q) {
                  var R = g.w(
                    a.$u ? Date.UTC(a.$y, q, H) : new Date(a.$y, q, H),
                    a
                  );
                  return f ? R : R.endOf(A);
                },
                b = function (H, q) {
                  return g.w(
                    a
                      .toDate()
                      [H].apply(
                        a.toDate("s"),
                        (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)
                      ),
                    a
                  );
                },
                v = this.$W,
                M = this.$M,
                I = this.$D,
                N = "set" + (this.$u ? "UTC" : "");
              switch (c) {
                case x:
                  return f ? p(1, 0) : p(31, 11);
                case L:
                  return f ? p(1, M) : p(0, M + 1);
                case O:
                  var Y = this.$locale().weekStart || 0,
                    Z = (v < Y ? v + 7 : v) - Y;
                  return p(f ? I - Z : I + (6 - Z), M);
                case A:
                case G:
                  return b(N + "Hours", 0);
                case y:
                  return b(N + "Minutes", 1);
                case m:
                  return b(N + "Seconds", 2);
                case u:
                  return b(N + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (o.endOf = function (n) {
              return this.startOf(n, !1);
            }),
            (o.$set = function (n, d) {
              var a,
                f = g.p(n),
                c = "set" + (this.$u ? "UTC" : ""),
                p = ((a = {}),
                (a[A] = c + "Date"),
                (a[G] = c + "Date"),
                (a[L] = c + "Month"),
                (a[x] = c + "FullYear"),
                (a[y] = c + "Hours"),
                (a[m] = c + "Minutes"),
                (a[u] = c + "Seconds"),
                (a[l] = c + "Milliseconds"),
                a)[f],
                b = f === A ? this.$D + (d - this.$W) : d;
              if (f === L || f === x) {
                var v = this.clone().set(G, 1);
                v.$d[p](b),
                  v.init(),
                  (this.$d = v.set(G, Math.min(this.$D, v.daysInMonth())).$d);
              } else p && this.$d[p](b);
              return this.init(), this;
            }),
            (o.set = function (n, d) {
              return this.clone().$set(n, d);
            }),
            (o.get = function (n) {
              return this[g.p(n)]();
            }),
            (o.add = function (n, d) {
              var a,
                f = this;
              n = Number(n);
              var c = g.p(d),
                p = function (M) {
                  var I = _(f);
                  return g.w(I.date(I.date() + Math.round(M * n)), f);
                };
              if (c === L) return this.set(L, this.$M + n);
              if (c === x) return this.set(x, this.$y + n);
              if (c === A) return p(1);
              if (c === O) return p(7);
              var b = ((a = {}), (a[m] = i), (a[y] = r), (a[u] = s), a)[c] || 1,
                v = this.$d.getTime() + n * b;
              return g.w(v, this);
            }),
            (o.subtract = function (n, d) {
              return this.add(-1 * n, d);
            }),
            (o.format = function (n) {
              var d = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || $e;
              var f = n || "YYYY-MM-DDTHH:mm:ssZ",
                c = g.z(this),
                p = this.$H,
                b = this.$m,
                v = this.$M,
                M = a.weekdays,
                I = a.months,
                N = function (q, R, de, se) {
                  return (q && (q[R] || q(d, f))) || de[R].slice(0, se);
                },
                Y = function (q) {
                  return g.s(p % 12 || 12, q, "0");
                },
                Z =
                  a.meridiem ||
                  function (q, R, de) {
                    var se = q < 12 ? "AM" : "PM";
                    return de ? se.toLowerCase() : se;
                  },
                H = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: v + 1,
                  MM: g.s(v + 1, 2, "0"),
                  MMM: N(a.monthsShort, v, I, 3),
                  MMMM: N(I, v),
                  D: this.$D,
                  DD: g.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: N(a.weekdaysMin, this.$W, M, 2),
                  ddd: N(a.weekdaysShort, this.$W, M, 3),
                  dddd: M[this.$W],
                  H: String(p),
                  HH: g.s(p, 2, "0"),
                  h: Y(1),
                  hh: Y(2),
                  a: Z(p, b, !0),
                  A: Z(p, b, !1),
                  m: String(b),
                  mm: g.s(b, 2, "0"),
                  s: String(this.$s),
                  ss: g.s(this.$s, 2, "0"),
                  SSS: g.s(this.$ms, 3, "0"),
                  Z: c,
                };
              return f.replace(ct, function (q, R) {
                return R || H[q] || c.replace(":", "");
              });
            }),
            (o.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (o.diff = function (n, d, a) {
              var f,
                c = g.p(d),
                p = _(n),
                b = (p.utcOffset() - this.utcOffset()) * i,
                v = this - p,
                M = g.m(this, p);
              return (
                (M =
                  ((f = {}),
                  (f[x] = M / 12),
                  (f[L] = M),
                  (f[Me] = M / 3),
                  (f[O] = (v - b) / 6048e5),
                  (f[A] = (v - b) / 864e5),
                  (f[y] = v / r),
                  (f[m] = v / i),
                  (f[u] = v / s),
                  f)[c] || v),
                a ? M : g.a(M)
              );
            }),
            (o.daysInMonth = function () {
              return this.endOf(L).$D;
            }),
            (o.$locale = function () {
              return j[this.$L];
            }),
            (o.locale = function (n, d) {
              if (!n) return this.$L;
              var a = this.clone(),
                f = ee(n, d, !0);
              return f && (a.$L = f), a;
            }),
            (o.clone = function () {
              return g.w(this.$d, this);
            }),
            (o.toDate = function () {
              return new Date(this.valueOf());
            }),
            (o.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (o.toISOString = function () {
              return this.$d.toISOString();
            }),
            (o.toString = function () {
              return this.$d.toUTCString();
            }),
            h
          );
        })(),
        qe = te.prototype;
      return (
        (_.prototype = qe),
        [
          ["$ms", l],
          ["$s", u],
          ["$m", m],
          ["$H", y],
          ["$W", A],
          ["$M", L],
          ["$y", x],
          ["$D", G],
        ].forEach(function (h) {
          qe[h[1]] = function (o) {
            return this.$g(o, h[0], h[1]);
          };
        }),
        (_.extend = function (h, o) {
          return h.$i || (h(o, te, _), (h.$i = !0)), _;
        }),
        (_.locale = ee),
        (_.isDayjs = he),
        (_.unix = function (h) {
          return _(1e3 * h);
        }),
        (_.en = j[P]),
        (_.Ls = j),
        (_.p = {}),
        _
      );
    });
  })(ce);
  var Le = ce.exports;
  const ie = S(Le),
    Te = (t) => ie(t, void 0, !0).isValid(),
    fe = (t, e) => (e == "now" && (e = Ee()), ie(t).isBefore(e)),
    me = (t, e) => (e == "now" && (e = Ee()), ie(t).isAfter(e)),
    Ve = (t, e) => {
      e || U("dateBetween");
      const [s, i] = V(e != null ? e : "");
      return me(t, s) && fe(t, i);
    },
    Ne = (t) => /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(t),
    K = (t, ...e) => !!t && t !== "",
    Ce = (t) => !0,
    Be = (t, e) => (e || U("in"), V(e).includes(t)),
    De = (t, e) => (B(t) ? J(t, e) : ne(t, e)),
    re = (t) =>
      typeof t == "boolean"
        ? !0
        : ((t = String(t).toLowerCase()),
          t === "true" ||
            t === "false" ||
            t === "0" ||
            t === "1" ||
            t === "yes" ||
            t === "no"),
    Fe = (t, e) => {
      var [s, i] = V(e != null ? e : "");
      return B(t)
        ? J(t, i) && ae(t, s)
        : !$(t) && !B(t)
        ? Ve(t, e)
        : ((s = Number(s)),
          (i = Number(i)),
          t !== void 0 && t !== Number && t !== "" && $(s) && $(i)
            ? ((t = Number(t)), $(t) ? ye(t, i) && be(t, s) : !1)
            : !1);
    },
    xe = (t, e) => {
      if (!e) throw new Error("The regex rule argument must not be empty");
      return new RegExp(e).test(t);
    },
    Ie = (t) => (re(t) ? oe(t) : !1),
    Re = (t, ...e) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        t
      ),
    pe = (t, e) => (t && T(t) ? t.length >= Number(e) : !1),
    ge = (t, e) => (t ? (T(t) ? t.length <= Number(e) : !1) : !0),
    T = (t) => typeof t == "string",
    We = (t) => /^(ftp|http|https):\/\/[^ "]+$/.test(t),
    ze = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[A-Z]/.test(t),
    Oe = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[a-z]/.test(t),
    je = (t, e) => {
      e || U("startWith");
      const s = V(e != null ? e : "");
      return T(t) ? s.some((i) => t.startsWith(i)) : !1;
    },
    Qe = (t, e) => {
      e || U("endWith");
      const s = V(e != null ? e : "");
      return T(t) ? s.some((i) => t.endsWith(i)) : !1;
    },
    ve = (t, e) => {
      e || U("contains");
      const s = V(e != null ? e : "");
      return T(t) ? s.every((i) => t.includes(i)) : !1;
    },
    ne = (t, e) => {
      if (!$(e)) throw new Error("The length rule argument must be an integer");
      return (
        (e = parseInt(e)),
        typeof t == "string" || typeof t == "number"
          ? (t = t.toString().split(""))
          : typeof t == "object" && t !== null && t !== void 0 && (t = []),
        Array.isArray(t) ? t.length === e : !1
      );
    },
    Ge = (t) => {
      const s = /[A-Z]/.test(t),
        i = /[a-z]/.test(t),
        r = /\d/.test(t),
        l = /[!@#$%^&*(),.?":{}|<>]/.test(t);
      return !(t.length < 8 || !s || !i || !r || !l);
    },
    He = (t) => (!T(t) || t.length === 0 ? !1 : /^[a-zA-Z]/.test(t)),
    Ue = (t) => (typeof t != "string" ? !1 : /[a-zA-Z]/.test(t)),
    ke = (t, e) => !ve(t, e),
    Pe = (t, e) => t === t.toLocaleUpperCase(),
    Ye = (t, e) => t === t.toLocaleLowerCase(),
    B = (t) => t instanceof File || t instanceof Blob,
    J = (t, e) => {
      if (B(t)) {
        const i = t.size;
        let r;
        const l =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!l)
          throw new Error(
            "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const u = parseFloat(l[1]),
          m = l[3].toUpperCase();
        return (
          m === "KB"
            ? (r = u * 1024)
            : m === "MB"
            ? (r = u * 1024 * 1024)
            : m === "GB"
            ? (r = u * 1024 * 1024 * 1024)
            : (r = u),
          i <= r
        );
      } else return !1;
    },
    ae = (t, e) => {
      if (B(t)) {
        const i = t.size;
        let r;
        const l =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!l)
          throw new Error(
            "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const u = parseFloat(l[1]),
          m = l[3].toUpperCase();
        return (
          m === "KB"
            ? (r = u * 1024)
            : m === "MB"
            ? (r = u * 1024 * 1024)
            : m === "GB"
            ? (r = u * 1024 * 1024 * 1024)
            : (r = u),
          i >= r
        );
      } else return !1;
    },
    be = (t, e) => {
      if (B(t)) return ae(t, e);
      if ((t == null && (t = 0), !$(e)))
        throw new Error("Min rule parameter must be an integer");
      return $(t) ? Number(t) >= Number(e) : pe(t, e);
    },
    ye = (t, e) => {
      if (B(t)) return J(t, e);
      if (!$(e)) throw new Error("Min rule parameter must be an integer");
      return t == null && (t = 0), $(t) ? Number(t) <= Number(e) : ge(t, e);
    },
    _e = (t) => ($(t) ? Number.isInteger(Number(t)) : !1),
    $ = (t) =>
      t === "" || t === null
        ? !1
        : t === "0" || t === 0 || t === "1" || t === 1
        ? !0
        : !isNaN(Number(t)) && typeof t != "boolean" && typeof t != "object",
    Ze = (t, e) => {
      if (!$(t)) return !1;
      const s = Number(t);
      if (!$(e)) throw new Error("Modulo rule parameter must be a number");
      return s % e === 0;
    };
  class Ke {
    constructor(e, s) {
      (this.value = e), (this.code = s);
    }
    validateTG() {
      return /^(\+228|00228)\d{8}$/.test(this.escapeValue());
    }
    validateNE() {
      return /^(\+227|00227)\d{8}$/.test(this.escapeValue());
    }
    validateGW() {
      return /^(\+245|00245)\d{7,8}$/.test(this.escapeValue());
    }
    validateTD() {
      return /^(\+235|00235)\d{8}$/.test(this.escapeValue());
    }
    validateCM() {
      return /^(\+237|00237)\d{8}$/.test(this.escapeValue());
    }
    validateBF() {
      return /^(\+226|00226|226)?\d{8}$/.test(this.escapeValue());
    }
    validateAO() {
      return /^(\+244|00244|244)?[9,2][1-9]\d{7}$/.test(this.escapeValue());
    }
    validateBJ() {
      return /^(\+229|00229)\d{8}$/.test(this.escapeValue());
    }
    validateFR() {
      return /^(?:(?:\+|00)33|0)[1-9]\d{3}\d{2}$/.test(this.escapeValue());
    }
    validateUS() {
      return /^(?:(?:\+|00)1)\([0-9]{3}\)[0-9]{3}[0-9]{4}$/.test(
        this.escapeValue()
      );
    }
    validate() {
      const e = [],
        s = this.code.split(",").map((i) => i.toUpperCase());
      for (const i of s) {
        const r = `validate${i}`,
          l = this;
        if (typeof l[r] == "function") e.push(l[r]());
        else throw new Error(`Validator method '${r}' does not exist.`);
      }
      return e.some((i) => i);
    }
    escapeValue() {
      return this.value.replace(/[\s\-\.]/g, "");
    }
  }
  class Je {
    constructor(e, s) {
      (this._phone = e),
        (this._code = s),
        (this._regex = /^(?:\+[1-9][0-9]{0,2})?[0-9]{3,13}$/);
    }
    passes() {
      return typeof this._code == "string" && this._code.length
        ? new Ke(this._phone, this._code).validate()
        : this._regex.test(this._phone.replace(/[\s\-\.]/g, ""));
    }
  }
  const X = (t) => {
      const e = /^(\w+):(.+)$/,
        s = t.match(e);
      if (s) {
        const i = s[1];
        let r = s[2];
        return { ruleName: i, params: r };
      } else {
        const [i, r] = t.split(":");
        return { ruleName: i, params: r };
      }
    },
    V = (t, e = ",") =>
      typeof t != "string" ? [] : t.split(e).map((s) => s.trim()),
    U = (t) => {
      throw new Error(`Please provide <<${t}>> rule arguments`);
    };
  function oe(t) {
    return re(t)
      ? typeof t == "boolean"
        ? t
        : ((t = String(t).toLowerCase()),
          t === "true" || t.toString() === "1" || t === "yes")
      : !1;
  }
  function Ee() {
    return new Date().toISOString();
  }
  class Xe {
    constructor(e) {
      this.messages = F.allMessages(e);
    }
    getRulesMessages(e) {
      const s = [];
      for (const i of e)
        this.messages[i] ? s.push(this.messages[i]) : s.push("Invalid input");
      return s;
    }
    parseMessage(e, s, i, r) {
      let l = [e, ...V(r != null ? r : "")],
        u = i;
      return (
        u.includes(":field") || (l = l.slice(1)), (u = this.replace(i, u, l)), u
      );
    }
    setMessages(e) {
      return (this.messages = e), this;
    }
    replace(e, s, i) {
      var l;
      const r = e.match(/:[a-zA-Z]+/g);
      if (r)
        for (let u = 0; u < r.length; u++) {
          const m = (l = i[u]) != null ? l : "";
          s = s.replace(r[u], m);
        }
      return s;
    }
  }
  class et {
    constructor(e, s) {
      (this.rules = e),
        (this.messages = s),
        this.compensateMessages(),
        this.sanitizeMessage();
    }
    compensateMessages() {
      var s;
      const e = this.rules.length;
      if (this.messages.length !== e)
        for (let i = 0; i < this.rules.length; i++) {
          const r = this.convertAcoladeGroupToArray(
            (s = this.messages[i]) != null ? s : ""
          );
          for (const l of r) this.messages[l] = this.messages[i];
        }
    }
    sanitizeMessage() {
      const e = /{(\d+(?:,\s*\d+)*)}/g;
      this.messages = this.messages.map((s) => s.replace(e, ""));
    }
    convertAcoladeGroupToArray(e) {
      var r;
      const s = /{(\d+(?:,\s*\d+)*)}/g;
      return (r = [...e.matchAll(s)].map((l) =>
        l[1].split(",").map((u) => parseInt(u.trim()))
      )[0]) != null
        ? r
        : [];
    }
    getMessages() {
      return this.messages;
    }
  }
  const Q = {
    invalidClass: "is-invalid",
    validClass: "",
    autoValidate: !0,
    local: { lang: "en" },
  };
  class tt {
    constructor(e) {
      (this.element = e),
        (this._nativeRules = [
          "min",
          "max",
          "minlength",
          "maxlength",
          "pattern",
          "step",
          "required",
        ]),
        (this._parseMap = { pattern: "regex", step: "modulo" }),
        (this._rulesPassed = []),
        this._setParseRules();
    }
    getRules() {
      return this._rulesPassed;
    }
    _setParseRules() {
      this.element.getAttributeNames().forEach((e) => {
        var s;
        if (this._nativeRules.includes(e)) {
          const i = (s = this.element.getAttribute(e)) != null ? s : void 0;
          let l = `${e in this._parseMap ? this._parseMap[e] : e}`;
          i !== void 0 && (l = l.concat(`:${i}`)), this._rulesPassed.push(l);
        }
      });
    }
  }
  class st {
    constructor(e, s, i) {
      (this.options = {
        feedbackElement: null,
        rules: [],
        messages: {},
        name: "",
        events: ["blur", "input", "change"],
        showMessage: "first",
        autoValidate: !0,
        emitEvent: !0,
        invalidClass: "is-invalid",
      }),
        (this.config = Q),
        (this._errors = []),
        (this.showMessages = ["first", "full", "last"]),
        i != null &&
          typeof i == "object" &&
          (this.options = C(C({}, this.options), i)),
        this.setConfig(s),
        this.setInputElement(e),
        this.setRules(),
        this.setInputName(),
        this.setFeedbackElement(),
        this.displayMessageWay(),
        this.setInvalidClass(),
        this.setValidClass(),
        this.getElementQvMessages(),
        this.setEvent(),
        this.setAutoValidate();
    }
    setRules(e) {
      var l, u;
      let s =
          (l = e != null ? e : this.inputElement.dataset.qvRules) != null
            ? l
            : "",
        i = Array.isArray(s) ? s : s.split("|");
      const r = new tt(this.inputElement);
      if (i.length) {
        i = [...r.getRules(), ...i];
        for (const m of i)
          if (m && m.length)
            if (F.hasRule(X(m).ruleName))
              (u = this.options.rules) == null || u.push(m);
            else
              throw new Error(
                `The validation rule ${m} is not supported by QuickV`
              );
      }
      return (
        this.inputElement.dataset.qvRules ||
          this.inputElement.setAttribute("data-qv-rules", ""),
        this
      );
    }
    setEvent(e) {
      var i;
      let s = (i = this.inputElement.dataset.qvEvents) != null ? i : e;
      s && typeof s == "string" && (this.options.events = s.split("|")),
        Array.isArray(e) && (this.options.events = e);
    }
    setInputElement(e) {
      if (!(e instanceof HTMLElement)) {
        const s = document.querySelector(e);
        s && (e = s);
      }
      if (!(e instanceof HTMLElement))
        throw new Error(
          "The 'inputElement' parameter must be of type HTMLElement."
        );
      (this.inputElement = e), (this.options.type = this.inputElement.type);
    }
    setInputName(e) {
      if (
        ((e = e != null ? e : this.inputElement.name),
        this.inputElement.dataset.qvName &&
          (e = this.inputElement.dataset.qvName),
        e == null || (typeof e == "string" && e.length < 0))
      )
        throw new Error("The input name could not be empty or null");
      this.options.name = e;
    }
    set errors(e) {
      e && (this._errors = e != null ? e : []), this.displayErrors();
    }
    setFeedbackElement(e = null) {
      let i = this.inputElement.parentElement;
      if (typeof this.options != "undefined")
        for (e = e != null ? e : this.options.feedbackElement; i && !e; )
          (e = i.querySelector(`[data-qv-feedback='${this.options.name}']`)),
            (i = i.parentElement);
      this.options.feedbackElement = e;
    }
    displayErrors() {
      if (this.options.feedbackElement instanceof HTMLElement) {
        let e = "";
        Array.isArray(this._errors) &&
          ((e = this._errors[0]),
          this.options.showMessage == "full"
            ? (e = this._errors.join("<br>"))
            : this.options.showMessage == "last" &&
              this._errors.length > 0 &&
              (e = this._errors[this._errors.length - 1])),
          (this.options.feedbackElement.innerHTML = e != null ? e : "");
      }
    }
    displayMessageWay(e) {
      var s;
      this.options.feedbackElement &&
        ((this.options.showMessage =
          (s = e != null ? e : this.options.feedbackElement.dataset.qvShow) !=
          null
            ? s
            : "first"),
        (this.options.showMessage = this.showMessages.includes(
          this.options.showMessage
        )
          ? this.options.showMessage
          : "first"));
    }
    setInvalidClass(e) {
      var s;
      (this.options.invalidClass =
        (s = this.inputElement.dataset.qvInvalidClass) != null
          ? s
          : this.config.invalidClass),
        (this.options.invalidClass = e != null ? e : this.options.invalidClass);
    }
    setValidClass(e) {
      var s;
      (this.options.validClass =
        (s = this.inputElement.dataset.qvValidClass) != null
          ? s
          : this.config.validClass),
        (this.options.validClass = e != null ? e : this.options.validClass);
    }
    setValidationClass(e) {
      var r, l, u, m;
      const s = (y) => {
          y.length > 0 && this.inputElement.classList.remove(y);
        },
        i = (y) => {
          y.length > 0 && this.inputElement.classList.add(y);
        };
      e
        ? ((r = this.options.invalidClass) == null || r.split(" ").forEach(s),
          (l = this.options.validClass) == null || l.split(" ").forEach(i),
          this.inputElement.setAttribute("data-qv-valid", "1"))
        : ((u = this.options.validClass) == null || u.split(" ").forEach(s),
          (m = this.options.invalidClass) == null || m.split(" ").forEach(i),
          this.inputElement.setAttribute("data-qv-valid", "0"));
    }
    getElementQvMessages() {
      var r, l;
      const e = this.inputElement.dataset.qvMessages;
      let s = {},
        i = this.options.rules;
      for (let u = 0; u < i.length; u++) {
        let m =
          (r = e == null ? void 0 : e.split("|").map((O) => O.trim())) != null
            ? r
            : [];
        m && (m = new et(i, m).getMessages());
        const y = m !== void 0 ? m[u] : "",
          A = X(i[u]).ruleName;
        typeof y == "string" && y.length > 0
          ? (s[A] = y)
          : (s[A] = F.getMessage(
              A,
              (l = this.config.local) == null ? void 0 : l.lang
            ));
      }
      this.options.messages = s;
    }
    setConfig(e) {
      (this.config = Q),
        e && typeof e == "object" && (this.config = C(C({}, this.config), e));
    }
    setAutoValidate(e = !0) {
      this.options.autoValidate = e;
      const s = this.inputElement.dataset.qvAutoValidate;
      s != null && (this.options.autoValidate = oe(s));
    }
  }
  const it = {
      required: "The :field field is required",
      email: "Please enter a valid email address",
      maxlength: "The maximum number of characters allowed has been exceeded",
      minlength:
        "The minimum number of characters allowed has not been reached",
      min: "The :field field must be greater than or equal to ':min'",
      max: "The :field field must be less than or equal to ':max'",
      string: "Please enter a string of characters",
      between: "This field value must be in ':min' and ':max'",
      startWith: "The :field field must be started with ':startWith'",
      endWith: "The :field field must be ended with ':endWith'",
      contains: "The :field field must contain the value ':contains'",
      in: "Please choose a correct value for the :field field",
      integer: "The :field field must an integer",
      int: "The :field field must an integer",
      number: "This field must be a number",
      numeric: "This field must be a number",
      file: "This field must be a file",
      url: "This field must be a valid url",
      length: "The size of this must be :size",
      len: "The size of this must be :size",
      maxFileSize: "The file size must be smaller than :maxFileSize.",
      minFileSize: "The file size must be larger than :minFileSize.",
      size: "This field's size should be less than or equal to :size ",
      boolean: "This field must be a boolean (yes or no) included",
      startWithUpper: "This field must be started with capitale letter",
      startWithLower: "This field must be started with capitale letter",
      nullable: "",
      password:
        "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.",
      date: "This field must be a valid date",
      before: "The date must be before (:beforeDate)",
      after: "The date must be after (:afterDate)",
      startWithLetter: "The :field field must be started with a letter",
      containsLetter: "The :field field must contain a letter",
      excludes: "This field can't contain :excludes",
      regex: "This field is invalid",
      upper: "The :field input must be upper",
      lower: "The :field input must be lower",
      time: "The :field must be a valid time",
      modulo: "The :field must be multiple of ':modulo'",
      phone: "The :field must be a valid phone number",
      accepted: "You must accept the :field",
      same: "This field must be same as :same field value",
      requiredIf:
        "The :field is required once the :other have the current value",
      requiredWhen: "The :field is required when :otherFields are present",
    },
    rt = {
      required: "Le champ :field est obligatoire",
      email: "Veuillez entrer une adresse e-mail valide",
      maxlength: "Le nombre maximal de caractères autorisés a été dépassé",
      minlength:
        "Le nombre minimal de caractères autorisés n'a pas été atteint",
      min: "Le champ :field doit être supérieur ou égal à ':min'",
      max: "Le champ :field doit être inférieur ou égal à ':max'",
      string: "Veuillez entrer une chaîne de caractères",
      between: "La valeur de ce champ doit être entre ':min' et ':max'",
      startWith: "Le champ :field doit commencer par ':startWith'",
      endWith: "Le champ :field doit se terminer par ':endWith'",
      contains: "Le champ :field doit contenir la valeur ':contains'",
      in: "Veuillez choisir une valeur correcte pour le champ :field",
      integer: "Le champ :field doit être un entier",
      int: "Le champ :field doit être un entier",
      number: "Ce champ doit être un nombre",
      numeric: "Ce champ doit être un nombre",
      file: "Ce champ doit être un fichier",
      url: "Ce champ doit être une URL valide",
      length: "La taille de ce champ doit être :size",
      len: "La taille de ce champ doit être :size",
      maxFileSize: "La taille du fichier doit être inférieure à :maxFileSize.",
      minFileSize: "La taille du fichier doit être supérieure à :minFileSize.",
      size: "La taille de ce champ doit être inférieure ou égale à :size",
      boolean: "Ce champ doit être un booléen (oui ou non) inclus",
      startWithUpper: "Ce champ doit commencer par une lettre majuscule",
      startWithLower: "Ce champ doit commencer par une lettre minuscule",
      nullable: "",
      password:
        "Le mot de passe doit comporter au moins 8 caractères et inclure une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
      date: "Ce champ doit être une date valide",
      before: "La date doit être antérieure à (:beforeDate)",
      after: "La date doit être postérieure à (:afterDate)",
      startWithLetter: "Le champ :field doit commencer par une lettre",
      containsLetter: "Le champ :field doit contenir une lettre",
      excludes: "Ce champ ne peut pas contenir :excludes",
      regex: "Ce champ est invalide",
      upper: "La saisie du champ :field doit être en majuscule",
      lower: "La saisie du champ :field doit être en minuscule",
      time: "Le champ :field doit être une heure valide",
      modulo: "Le champ :field doit être un multiple de ':modulo'",
      phone: "Le champ :field doit être un numéro de téléphone valide",
      accepted: "Vous devez accepter le champs :field",
      same: "Ce champ doit être identique à la valeur du champ :same",
      requiredIf:
        "Le champ :field est requis une fois que le champs :other a la valeur actuelle",
      requiredWhen: "Le :field est requis lorsque :otherFields est présent",
    },
    W = class {
      static getLocal(t) {
        return t != null ? t : W.DEFAULT_LANG;
      }
      static getlocalMessages(t) {
        return (t = t in W.MESSAGES ? t : W.DEFAULT_LANG), W.MESSAGES[t];
      }
      static addlocalMessage(t, e, s) {
        const i = W.MESSAGES[t];
        return (i[e] = s), (W.MESSAGES[t] = i), i;
      }
    };
  let z = W;
  (z.DEFAULT_LANG = "en"), (z.MESSAGES = { en: it, fr: rt });
  const nt = (t, e) => new Je(t, e).passes(),
    D = class {
      static rule(t, e, s, i) {
        D.addRule(t, e),
          D.addMessage(t, s != null ? s : "This input is invalide", i);
      }
      static addRule(t, e) {
        D._rules[t] = e;
      }
      static addMessage(t, e, s = "en") {
        z.addlocalMessage(s, t, e);
      }
      static hasRule(t) {
        return t in D._rules;
      }
      static getRule(t) {
        return D._rules[t];
      }
      static getMessage(t, e = "en") {
        return D.allMessages(z.getLocal(e))[t];
      }
      static allRules() {
        return D._rules;
      }
      static allMessages(t) {
        return z.getlocalMessages(z.getLocal(t));
      }
    };
  let F = D;
  F._rules = {
    required: K,
    email: Re,
    maxlength: ge,
    minlength: pe,
    min: be,
    max: ye,
    string: T,
    between: Fe,
    startWith: je,
    endWith: Qe,
    contains: ve,
    in: Be,
    integer: _e,
    int: _e,
    number: $,
    numeric: $,
    url: We,
    length: ne,
    len: ne,
    file: B,
    maxFileSize: J,
    minFileSize: ae,
    size: De,
    boolean: re,
    startWithUpper: ze,
    nullable: Ce,
    startWithLower: Oe,
    password: Ge,
    date: Te,
    before: fe,
    after: me,
    startWithLetter: He,
    containsLetter: Ue,
    excludes: ke,
    regex: xe,
    upper: Pe,
    lower: Ye,
    time: Ne,
    modulo: Ze,
    phone: nt,
    accepted: Ie,
  };
  class at {
    constructor(e, s) {
      var i, r, l;
      (this._rulesExecuted = []),
        (this._lang = z.DEFAULT_LANG),
        (this._name = ""),
        (this._attr = ""),
        (this._type = "text"),
        (this._rules = []),
        (this._previousValue = ""),
        (this._isDirty = !1),
        (this._passe_all_rules = !1),
        (this._errors = {}),
        (this._name = (i = e.name) != null ? i : ""),
        (this._qvmessages = e.messages),
        this.setValue(s),
        (this._rules = (r = e.rules) != null ? r : []),
        (this._type = (l = e.type) != null ? l : this._type),
        (this._passe_all_rules = e.showMessage === "full");
    }
    set value(e) {
      (this._previousValue = this._value),
        (this._value = e),
        (this._isDirty = !0),
        Object.keys(this._rulesExecuted).length
          ? this._isDirty && this._previousValue !== this._value && this.run()
          : this.run();
    }
    localLang(e) {
      this._lang = e != null ? e : this._lang;
    }
    get value() {
      return this._value;
    }
    run() {
      const e = F.allRules();
      let s = [];
      if (((this._errors = {}), !Array.isArray(this._rules)))
        throw new Error("The rule provided must be an array of Rule");
      for (const i of this._rules) {
        const { ruleName: r, params: l } = X(i),
          u = e[r];
        if (!u) throw new Error(`The rule ${r} is not defined`);
        const m = X(i);
        if (
          (s.push({ rule: r, passed: u(this.value, l), params: m.params }),
          !this._passe_all_rules && s.some((y) => !y.passed))
        )
          break;
      }
      (this._rulesExecuted = s), this._setErrorMessages(s);
    }
    _addMessage(e) {
      const s = new Xe(this._lang).setMessages(this._qvmessages);
      let i = "";
      const r = e.params;
      (i = s.parseMessage(
        this._name,
        e.ruleName,
        s.getRulesMessages([e.ruleName])[0],
        r
      )),
        (this._errors[e.ruleName] = i);
    }
    _removeMessage(e) {
      delete this._errors[e];
    }
    getMessages() {
      return Object.values(this._errors);
    }
    setValue(e) {
      this.value = e;
    }
    passes() {
      return Object.keys(this._errors).length === 0;
    }
    getErrors() {
      return this._errors;
    }
    _setErrorMessages(e) {
      for (const s of e)
        s.passed
          ? this._removeMessage(s.rule)
          : this._addMessage({ ruleName: s.rule, params: s.params });
    }
  }
  class ot extends st {
    constructor(e, s, i) {
      super(e, s, i), (this.validator = new at(this.options, this.getValue()));
    }
    init() {
      var e, s;
      this.validator.localLang(
        (e = this.config.local) == null ? void 0 : e.lang
      ),
        this.options.autoValidate &&
          ((s = this.options.events) == null ||
            s.forEach((i) => {
              this.inputElement.addEventListener(i, () => {
                this.validate();
              });
            }));
    }
    validate() {
      const e = this.valid();
      return (
        this.setValidationClass(e),
        (this.errors = this.validator.getMessages()),
        this.emitChangeEvent(),
        e
      );
    }
    getRules() {
      return this.options.rules;
    }
    hasRules() {
      const e = this.options.rules;
      return Array.isArray(e) ? e.length > 0 : !1;
    }
    getMessages() {
      return this.options.messages;
    }
    valid(e = !0) {
      if (e) {
        const s = {};
        return (
          (s[this.options.name] = this.options.rules),
          this.validator.setValue(this.getValue()),
          this.validator.passes()
        );
      }
      return this.inputElement.getAttribute("data-qv-valid") == "1";
    }
    emitChangeEvent(e = !0) {
      if (((this.options.emitEvent = e), this.options.emitEvent)) {
        const s = {};
        (s[this.getName()] = this.getValue()),
          this.inputElement.dispatchEvent(
            new CustomEvent("qv.input.validated", {
              detail: {
                rules: this.options.rules,
                input: s,
                element: this.inputElement,
              },
              bubbles: !0,
            })
          );
      }
    }
    getErrors() {
      return this._errors;
    }
    fails() {
      return !this.valid();
    }
    getName() {
      return this.options.name;
    }
    getValue() {
      return this.inputElement.type.toLowerCase() == "file"
        ? this.inputElement.files
          ? this.inputElement.files[0]
          : null
        : this.inputElement.value;
    }
    syncMessages() {
      this.inputElement.getAttribute("data-qv-valid") == "0" &&
        (this.setValidationClass(this.valid()),
        (this.errors = this.validator.getMessages()));
    }
    validateWithoutEmitEvent() {
      return this.emitChangeEvent(!1), this.validate();
    }
  }
  class lt {
    constructor(e) {
      (this.form = e), (this.formRules = []);
    }
    getInputByName(e) {
      return this.form.querySelector(`[name=${e}]`);
    }
    getInputValueByName(e) {
      const s = this.getInputByName(e);
      return s ? s.value : void 0;
    }
    getFormRules() {
      return this.formRules;
    }
  }
  class ut extends lt {
    constructor(e) {
      super(e), this.register();
    }
    register() {
      this.formRules = [
        { ruleName: "same", call: this.same },
        { ruleName: "requiredIf", call: this.requiredIf },
        { ruleName: "requiredWhen", call: this.requiredWhen },
      ];
    }
    same(e, s) {
      return s ? e === this.getInputValueByName(s) : !1;
    }
    requiredIf(e, s) {
      const [i, ...r] = V(s != null ? s : "");
      if (i && r.length > 0) {
        const l = this.getInputValueByName(i);
        return r.includes(l) ? K(e) : !0;
      }
      return !1;
    }
    requiredWhen(e, s) {
      const [i, ...r] = V(s != null ? s : "");
      return i && r.length > 0
        ? r.some((u) => (console.log(u), K(this.getInputValueByName(u))))
          ? K(e)
          : !0
        : !1;
    }
  }
  class ht {
    constructor(e, s) {
      (this.buttonElement = e),
        (this.formNames = s),
        (this.forms = []),
        (this.forms = this.formNames.map((i) =>
          document.querySelector(`[data-qv-form=${i}]`)
        ));
    }
    enableValidFormButton(e) {
      if (e) {
        if (!this.hasFormName(e)) return;
        this.formAreValid() && this.buttonElement.removeAttribute("disabled");
      } else this.buttonElement.removeAttribute("disabled");
    }
    disableValidFormButton(e) {
      if (e) {
        if (!this.hasFormName(e)) return;
        this.formAreValid() ||
          this.buttonElement.setAttribute("disabled", "disabled");
      } else this.buttonElement.setAttribute("disabled", "disabled");
    }
    hasFormName(e) {
      return this.formNames.includes(e);
    }
    disable(e) {
      this.disableValidFormButton(e);
    }
    enable(e) {
      this.enableValidFormButton(e);
    }
    formAreValid() {
      return this.forms.every(
        (e) => (e == null ? void 0 : e.dataset.qvFormValid) === "1"
      );
    }
    on(e, s) {
      Array.isArray(e) &&
        e.forEach((i) => {
          this.buttonElement.addEventListener(i, s);
        });
    }
  }
  class k {
    constructor(e) {
      (this.formElements = [
        "input",
        "textarea",
        "select",
        "button",
        "datalist",
        "fieldset",
        "label",
        "legend",
        "meter",
        "optgroup",
        "option",
        "output",
        "progress",
        "keygen",
      ]),
        (this._isFirstTime = !0),
        (this._qvInputs = []),
        (this._submitButton = null),
        (this._disabledBtns = []),
        (this.autoValidate = !0),
        (this.config = Q),
        this.setContainer(e),
        (this.formValidator = new ut(this._container));
    }
    setContainer(e) {
      if (!(e instanceof HTMLElement)) {
        const s = document.querySelector(e);
        s && (e = s);
      }
      if (!(e instanceof HTMLElement))
        throw new Error("The 'container' is not defined");
      (this._container = e), this.setFormName(), this.setSubmitButton();
    }
    init(e) {
      this.setConfig(e),
        this.setDisabledBtns(),
        this.disableButton(),
        this.syncFormRules();
      const s = this._container.dataset.qvAutoValidate;
      s != null && (this.autoValidate = oe(s)),
        this.setQvInputs(),
        this.onInputChange(),
        this.validateOnSubmit(),
        this.onFails(),
        this.onPasses(),
        this.validateByGroup(),
        this._oberseveChanges();
    }
    disableButton() {
      this._submitButton && this._submitButton.setAttribute("disabled", "true"),
        this._disabledBtns.forEach((e) => e.disable(this.formName));
    }
    enableButton() {
      this._submitButton && this._submitButton.removeAttribute("disabled"),
        this._disabledBtns.forEach((e) => e.enable(this.formName));
    }
    onInputChange(e) {
      ["change", "qv.input.validated"].forEach((s) => {
        this.on(s, (i) => {
          this.isValid()
            ? this.emit("qv.form.validated", !1, this._container)
            : this.emit("qv.form.invalidated", !1, this._container),
            this.clearMessages(),
            typeof e == "function" && e(i);
        });
      });
    }
    isValid() {
      return this._qvInputs.every((e) => e.valid());
    }
    validateOnFirstTime(e) {
      this._isFirstTime &&
        (this.emit("qv.input.validated"),
        (this._isFirstTime = !1),
        typeof e == "function" && e(this));
    }
    validateWithoutEmitEvent() {
      let e = [];
      return (
        this._qvInputs.forEach((s) => {
          e.push(s.validateWithoutEmitEvent());
        }),
        e.every((s) => s)
      );
    }
    validateOnSubmit() {
      this._container.addEventListener("submit", (e) => {
        this.validateWithoutEmitEvent() || e.preventDefault();
      });
    }
    rule(e, s, i) {
      F.rule(e, s, i);
    }
    setConfig(e) {
      var i;
      this.config = Q;
      let s;
      e &&
        typeof e == "object" &&
        ((this.config = C(C({}, this.config), e)),
        (s = (i = e.local) == null ? void 0 : i.lang)),
        this.setLang(s);
    }
    syncFormRules() {
      for (const e of this.formValidator.getFormRules())
        this.rule(e.ruleName, e.call.bind(this.formValidator));
    }
    setQvInputs() {
      this._qvInputs = Array.from(
        this._container.querySelectorAll("[data-qv-rules]")
      ).map((e) => {
        const s = new le(e, this.config);
        return s.setAutoValidate(this.autoValidate), s.init(), s;
      });
    }
    setSubmitButton(e) {
      e
        ? (e = this._container.querySelector(e))
        : (e =
            this._container.querySelector("[data-qv-submit=form]") ||
            this._container.querySelector("[data-qv-submit]")),
        e && (this._submitButton = e);
    }
    clearMessages() {
      this._qvInputs.forEach((e) => {
        e.syncMessages();
      });
    }
    setDisabledBtns() {
      var s;
      const e = document.querySelectorAll("[data-qv-disabled]");
      T(this.formName) &&
        (s = this.formName) != null &&
        s.length &&
        e.forEach((i) => {
          const r = i.dataset.qvDisabled;
          if (T(r) && r) {
            const l = r.split("&");
            this._disabledBtns.push(new ht(i, l));
          }
        });
    }
    validateByGroup(e) {
      e &&
        this._container.querySelectorAll(e).forEach((s) => {
          new k(s).init();
        });
    }
    setFormName() {
      this.formName = this._container.dataset.qvForm;
    }
    onFails(e) {
      this.on("qv.form.invalidated", (s) => {
        (this._container.dataset.qvFormValid = "0"),
          this.disableButton(),
          typeof e == "function" && e(s);
      });
    }
    onPasses(e) {
      this.on("qv.form.validated", (s) => {
        (this._container.dataset.qvFormValid = "1"),
          this.enableButton(),
          typeof e == "function" && e(s);
      });
    }
    on(e, s) {
      this._container.addEventListener(e, s);
    }
    _oberseveChanges() {
      this.on("qv.form.fresh", (e) => {
        this.setContainer(this._container),
          this.setDisabledBtns(),
          this.setQvInputs(),
          this.emit("qv.input.validated");
      });
    }
    emit(e, s = !0, i) {
      let r = s ? new Event(e, i) : new CustomEvent(e, i);
      this._container.dispatchEvent(r);
    }
    observeDisabledButtons(e = ["mouseover"]) {
      this._disabledBtns.forEach((s) => {
        s.on(e, (i) => {
          this.emit("qv.input.validated");
        });
      });
    }
    setLang(e) {
      var l;
      let s = (l = this.config.local) == null ? void 0 : l.lang;
      const i = document.querySelector("html");
      i != null && i.hasAttribute("lang") && (s = i.getAttribute("lang")),
        i != null &&
          i.hasAttribute("data-qv-lang") &&
          (s = i.getAttribute("data-qv-lang")),
        this._container.hasAttribute("data-qv-lang") &&
          (s = this._container.getAttribute("data-qv-lang")),
        (s = e != null ? e : s);
      let r = this.config.local;
      r && r.lang && (r.lang = s), (this.config.local = r);
    }
  }
  class we {
    constructor() {
      this.config = Q;
    }
    init(e) {
      this.setConfig(e),
        document.querySelectorAll("form").forEach((s) => {
          new k(s).init(this.config);
        });
    }
    rule(e, s, i) {
      F.rule(e, s, i);
    }
    setConfig(e) {
      (this.config = Q),
        e && typeof e == "object" && (this.config = C(C({}, this.config), e));
    }
  }
  class le extends ot {
    constructor(e, s, i) {
      super(e, s, i);
    }
    rule(e, s, i) {
      F.rule(e, s, i);
    }
  }
  typeof window != "undefined" &&
    ((window.QvInput = le), (window.QvForm = k), (window.Quickv = we)),
    (E.Quickv = we),
    (E.QvForm = k),
    (E.QvInput = le),
    Object.defineProperty(E, Symbol.toStringTag, { value: "Module" });
});
