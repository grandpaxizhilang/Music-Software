
window = global;

document = {}
navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
}
location = {
    "ancestorOrigins": {},
    "href": "https://y.qq.com/n/ryqq/player",
    "origin": "https://y.qq.com",
    "protocol": "https:",
    "host": "y.qq.com",
    "hostname": "y.qq.com",
    "port": "",
    "pathname": "/n/ryqq/player",
    "search": "",
    "hash": ""
}

var xl;


!function(e) {
    function t(t) {

        for (var n, a, f = t[0], c = t[1], i = t[2], l = 0, b = []; l < f.length; l++)
            a = f[l],
            Object.prototype.hasOwnProperty.call(o, a) && o[a] && b.push(o[a][0]),
            o[a] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (u && u(t); b.length; )
            b.shift()();
        return d.push.apply(d, i || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < d.length; t++) {
            for (var r = d[t], n = !0, a = 1; a < r.length; a++) {
                var c = r[a];
                0 !== o[c] && (n = !1)
            }
            n && (d.splice(t--, 1),
            e = f(f.s = r[0]))
        }
        return e
    }

    var n = {}
      , a = {
        20: 0
    }
      , o = {
        20: 0
    }
      , d = [];
    function f(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {

            i: t,
            l: !1,
            exports: {}
        };

        return e[t].call(r.exports, r, r.exports, f),
        r.l = !0,
        r.exports
    }

    f.e = function(e) {
        var t = [];
        a[e] ? t.push(a[e]) : 0 !== a[e] && {
            1: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1
        }[e] && t.push(a[e] = new Promise((function(t, r) {
            for (var n = "css/" + ({
                1: "common",
                3: "album",
                4: "albumDetail",
                5: "album_mall",
                6: "category",
                7: "cmtpage",
                8: "index",
                9: "msg_center",
                10: "mv",
                11: "mvList",
                12: "mv_toplist",
                13: "notfound",
                14: "player",
                15: "player_radio",
                16: "playlist",
                17: "playlist_edit",
                18: "profile",
                19: "radio",
                21: "search",
                22: "singer",
                23: "singer_list",
                24: "songDetail",
                25: "toplist"
            }[e] || e) + "." + {
                1: "2e3d715e72682303d35b",
                3: "5cf0d69eaf29bcab23d2",
                4: "798353db5b0eb05d5358",
                5: "df4c243f917604263e58",
                6: "20d532d798099a44bc88",
                7: "e3bedf2b5810f8db0684",
                8: "ea0adb959fef9011fc25",
                9: "020422608fe8bfb1719a",
                10: "8bdb1df6c5436b790baa",
                11: "47ce9300786df1b70584",
                12: "4aee33230ba2d6b81dce",
                13: "e6f63b0cf57dd029fbd6",
                14: "1d2dbefbea113438324a",
                15: "d893492de07ce97d8048",
                16: "9484fde660fe93d9f9f0",
                17: "67fb85e7f96455763c83",
                18: "5e8c651e74b13244f7cf",
                19: "3befd83c10b19893ec66",
                21: "b2d11f89ea6a512a2302",
                22: "c7a38353c5f4ebb47491",
                23: "df0961952a2d3f022894",
                24: "4c080567e394fd45608b",
                25: "8edb142553f97482e00f"
            }[e] + ".chunk.css?max_age=2592000", o = f.p + n, d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                var i = (u = d[c]).getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (i === n || i === o))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                var u;
                if ((i = (u = l[c]).getAttribute("data-href")) === n || i === o)
                    return t()
            }
            var b = document.createElement("link");
            b.rel = "stylesheet",
            b.type = "text/css",
            b.onload = t,
            b.onerror = function(t) {
                var n = t && t.target && t.target.src || o
                  , d = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED",
                d.request = n,
                delete a[e],
                b.parentNode.removeChild(b),
                r(d)
            }
            ,
            b.href = o,
            0 !== b.href.indexOf(window.location.origin + "/") && (b.crossOrigin = "anonymous"),
            document.getElementsByTagName("head")[0].appendChild(b)
        }
        )).then((function() {
            a[e] = 0
        }
        )));
        var r = o[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var n = new Promise((function(t, n) {
                    r = o[e] = [t, n]
                }
                ));
                t.push(r[2] = n);
                var d, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                f.nc && c.setAttribute("nonce", f.nc),
                c.src = function(e) {
                    return f.p + "js/" + ({
                        1: "common",
                        3: "album",
                        4: "albumDetail",
                        5: "album_mall",
                        6: "category",
                        7: "cmtpage",
                        8: "index",
                        9: "msg_center",
                        10: "mv",
                        11: "mvList",
                        12: "mv_toplist",
                        13: "notfound",
                        14: "player",
                        15: "player_radio",
                        16: "playlist",
                        17: "playlist_edit",
                        18: "profile",
                        19: "radio",
                        21: "search",
                        22: "singer",
                        23: "singer_list",
                        24: "songDetail",
                        25: "toplist"
                    }[e] || e) + ".chunk." + {
                        1: "980f2070e7573755d59c",
                        3: "6f355307b2cd93d84763",
                        4: "fa75412685d138dcee03",
                        5: "ba904bcfb557caf1e2d5",
                        6: "f6698bcdfe688972088b",
                        7: "9163bde468afbb8d391d",
                        8: "9982204a0cc5e3c91c08",
                        9: "d0a14e5e1117e13d5fdb",
                        10: "b1b11110edb8763c18b8",
                        11: "ebcbc289f8de994bead2",
                        12: "f9c874d47d9bf469977f",
                        13: "e0d4e37a3bc8d2858707",
                        14: "59d55f320606138bce79",
                        15: "fe70d872eae2f4f00170",
                        16: "3de74dd547c7a2651f27",
                        17: "a0bab70e9cfcd1d8a344",
                        18: "801a044c8ea659ae2e8c",
                        19: "ed7e91726ce90f0711eb",
                        21: "85caee30f1963ce0fa97",
                        22: "50f54c7a599df2216aed",
                        23: "195d10ae915dea5fe9d8",
                        24: "4ec2b0002905ee3f5f02",
                        25: "854d3dd0bf0eb2a4f78b"
                    }[e] + ".js?max_age=2592000"
                }(e),
                0 !== c.src.indexOf(window.location.origin + "/") && (c.crossOrigin = "anonymous");
                var i = new Error;
                d = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(l);
                    var r = o[e];
                    if (0 !== r) {
                        if (r) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , a = t && t.target && t.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
                            i.name = "ChunkLoadError",
                            i.type = n,
                            i.request = a,
                            r[1](i)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    d({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = d,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    f.m = e,
    f.c = n,
    f.d = function(e, t, r) {
        f.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    f.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    f.t = function(e, t) {
        if (1 & t && (e = f(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (f.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                f.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return f.d(t, "a", t),
        t
    }
    ,
    f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    f.p = "/ryqq/",
    f.oe = function(e) {
        throw e
    }
    ;
    var c = window.webpackJsonp = window.webpackJsonp || []
      , i = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var l = 0; l < c.length; l++)
        t(c[l]);
    var u = i;
    // r()

    xl = f;

}({
    0 : function(e, t, n) {
    "use strict";
    n.r(t),
    function(e) {
        var n = "undefined" !== typeof e ? e : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : void 0;
        var r = function() {
            function e(t, n, r, o, i, a, u, c) {
                var l = !o;
                t = +t,
                n = n || [0],
                o = o || [[this], [{}]],
                i = i || {};
                var s, f = [], p = null;
                Function.prototype.bind || (s = [].slice,
                Function.prototype.bind = function(e) {
                    if ("function" != typeof this)
                        throw new TypeError("bind101");
                    var t = s.call(arguments, 1)
                      , n = t.length
                      , r = this
                      , o = function() {}
                      , i = function() {
                        return t.length = n,
                        t.push.apply(t, arguments),
                        r.apply(o.prototype.isPrototypeOf(this) ? this : e, t)
                    };
                    return this.prototype && (o.prototype = this.prototype),
                    i.prototype = new o,
                    i
                }
                );
                for (var d = [function() {
                    o[o.length - 2] = o[o.length - 2] + o.pop()
                }
                , function() {
                    for (var a = n[t++], u = [], c = n[t++], l = n[t++], s = [], f = 0; f < c; f++)
                        u[n[t++]] = o[n[t++]];
                    for (f = 0; f < l; f++)
                        s[f] = n[t++];
                    o.push((function t() {
                        var o = u.slice(0);
                        o[0] = [this],
                        o[1] = [arguments],
                        o[2] = [t];
                        for (var c = 0; c < s.length && c < arguments.length; c++)
                            0 < s[c] && (o[s[c]] = [arguments[c]]);
                        return e(a, n, r, o, i)
                    }
                    ))
                }
                , function() {
                    o[o.length - 2] = o[o.length - 2] | o.pop()
                }
                , function() {
                    o.push(o[n[t++]][0])
                }
                , function() {
                    var e = n[t++]
                      , r = o[o.length - 2 - e];
                    o[o.length - 2 - e] = o.pop(),
                    o.push(r)
                }
                , , function() {
                    var e = n[t++]
                      , r = e ? o.slice(-e) : [];
                    o.length -= e,
                    e = o.pop(),
                    o.push(e[0][e[1]].apply(e[0], r))
                }
                , , , function() {
                    var e = n[t++];
                    o[o.length - 1] && (t = e)
                }
                , function() {
                    var e = n[t++]
                      , r = e ? o.slice(-e) : [];
                    o.length -= e,
                    r.unshift(null),
                    o.push(function() {
                        return function(e, t, n) {
                            return new (Function.bind.apply(e, t))
                        }
                        .apply(null, arguments)
                    }(o.pop(), r))
                }
                , function() {
                    o[o.length - 2] = o[o.length - 2] - o.pop()
                }
                , function() {
                    var e = o[o.length - 2];
                    e[0][e[1]] = o[o.length - 1]
                }
                , , function() {
                    var e = n[t++];
                    o[e] = void 0 === o[e] ? [] : o[e]
                }
                , , function() {
                    o.push(!o.pop())
                }
                , , , , function() {
                    o.push([n[t++]])
                }
                , function() {
                    o[o.length - 1] = r[o[o.length - 1]]
                }
                , , function() {
                    o.push("")
                }
                , , function() {
                    o[o.length - 2] = o[o.length - 2] << o.pop()
                }
                , , function() {
                    var e = o.pop();
                    o.push([o[o.pop()][0], e])
                }
                , function() {
                    o.push(o[o.pop()[0]][0])
                }
                , , function() {
                    o[o.length - 1] = n[t++]
                }
                , function() {
                    o[o.length - 2] = o[o.length - 2] >> o.pop()
                }
                , , function() {
                    o.push(!1)
                }
                , function() {
                    o[o.length - 2] = o[o.length - 2] > o.pop()
                }
                , , function() {
                    o[o.length - 2] = o[o.length - 2] ^ o.pop()
                }
                , function() {
                    o.push([o.pop(), o.pop()].reverse())
                }
                , function() {
                    o.pop()
                }
                , function() {
                    o[o[o.length - 2][0]][0] = o[o.length - 1]
                }
                , , , , function() {
                    o.push(o[o.length - 1])
                }
                , , function() {
                    return !0
                }
                , function() {
                    o.push([r, o.pop()])
                }
                , function() {
                    var e = n[t++]
                      , i = e ? o.slice(-e) : [];
                    o.length -= e,
                    o.push(o.pop().apply(r, i))
                }
                , function() {
                    o[o.length - 2] = o[o.length - 2] >= o.pop()
                }
                , , , function() {
                    o.length = n[t++]
                }
                , , function() {
                    var e = o.pop()
                      , t = o.pop();
                    o.push([t[0][t[1]], e])
                }
                , , function() {
                    o[o.length - 2] = o[o.length - 2] & o.pop()
                }
                , function() {
                    t = n[t++]
                }
                , , function() {
                    o[o.length - 1] += String.fromCharCode(n[t++])
                }
                , , , function() {
                    o[o.length - 2] = o[o.length - 2] === o.pop()
                }
                , function() {
                    o.push(void 0)
                }
                , function() {
                    var e = o.pop();
                    o.push(e[0][e[1]])
                }
                , , function() {
                    o.push(!0)
                }
                , , function() {
                    o[o.length - 2] = o[o.length - 2] * o.pop()
                }
                , function() {
                    o.push(n[t++])
                }
                , function() {
                    o.push(typeof o.pop())
                }
                ]; ; )
                    try {
                        for (var h = !1; !h; )
                            h = d[n[t++]]();
                        if (p)
                            throw p;
                        return l ? (o.pop(),
                        o.slice(3 + e.v)) : o.pop()
                    } catch (m) {
                        var v = f.pop();
                        if (void 0 === v)
                            throw m;
                        p = m,
                        t = v[0],
                        o.length = v[1],
                        v[2] && (o[v[2]][0] = p)
                    }
            }
            return e.v = 5,
            e(0, function(e) {
                var t = e[1]
                  , n = []
                  , r = function(e) {
                    for (var t, n, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""), o = String(e).replace(/[=]+$/, ""), i = 0, a = 0, u = ""; n = o.charAt(a++); ~n && (t = i % 4 ? 64 * t + n : n,
                    i++ % 4) && (u += String.fromCharCode(255 & t >> (-2 * i & 6))))
                        n = function(e, t, n) {
                            if ("function" == typeof Array.prototype.indexOf)
                                return Array.prototype.indexOf.call(e, t, n);
                            var r;
                            if (null == e)
                                throw new TypeError('"array" is null or not defined');
                            var o = Object(e)
                              , i = o.length >>> 0;
                            if (0 == i)
                                return -1;
                            if (i <= (n |= 0))
                                return -1;
                            for (r = Math.max(0 <= n ? n : i - Math.abs(n), 0); r < i; r++)
                                if (r in o && o[r] === t)
                                    return r;
                            return -1
                        }(r, n);
                    return u
                }(e[0])
                  , o = t.shift()
                  , i = t.shift()
                  , a = 0;
                function u() {
                    for (; a === o; )
                        n.push(i),
                        a++,
                        o = t.shift(),
                        i = t.shift()
                }
                for (var c = 0; c < r.length; c++) {
                    var l = r.charAt(c).charCodeAt(0);
                    u(),
                    n.push(l),
                    a++
                }
                return u(),
                n
            }(["MwgOAg4DDgQOBQ4GDgc4fzozCQ4CDgMOBA4FDgYOBw4IFzpkOmU6ZjppOm46ZRVFFzpmOnU6bjpjOnQ6aTpvOm49CUc4XzomFzpkOmU6ZjppOm46ZS4XOmE6bTpkNT8JaSYDAy8AOHwJJhc6ZDplOmY6aTpuOmUuAwMGASY+LQERAAEDOAMzCg4CDgMOBA4FDgYOBw4IDgkUCDg8MwgOAg4DDgQOBQ4GDgcXOmc6bDpvOmI6YTpsFUUXOnU6bjpkOmU6ZjppOm46ZTpkPRAJ1iY45gQmFzpnOmw6bzpiOmE6bBUtFzp3Omk6bjpkOm86dxVFFzp1Om46ZDplOmY6aTpuOmU6ZD0QCSY4BiYXOnc6aTpuOmQ6bzp3FS0XOnM6ZTpsOmYVRRc6dTpuOmQ6ZTpmOmk6bjplOmQ9EAkmOAEmFzpzOmU6bDpmFS0+LQGeAAAvACcmJhQJOA0zIg4CDgMOBA4FDgYOBw4IDgkOCg4LDgwODQ4ODg8OEA4RDhIOEw4UDhUOFg4XDhgOGQ4aDhsOHA4dDh4OHw4gFAkXOk86YjpqOmU6Yzp0FQoAKxc6MCVEAAwmJisXOjElRAEMJiYrFzoyJUQCDCYmKxc6MyVEAwwmJisXOjQlRAQMJiYrFzo1JUQFDCYmKxc6NiVEBgwmJisXOjclRAcMJiYrFzo4JUQIDCYmKxc6OSVECQwmJisXOkElRAoMJiYrFzpCJUQLDCYmKxc6QyVEDAwmJisXOkQlRA0MJiYrFzpFJUQODCYmKxc6RiVEI0QUCwwmJicmJhQKFzpBOkI6QzpEOkU6RjpHOkg6STpKOks6TDpNOk46TzpQOlE6UjpTOlQ6VTpWOlc6WDpZOlo6YTpiOmM6ZDplOmY6ZzpoOmk6ajprOmw6bTpuOm86cDpxOnI6czp0OnU6djp3Ong6eTp6OjA6MToyOjM6NDo1OjY6Nzo4Ojk6KzovOj0nJiYUCxQhFzpfOl86czppOmc6bjpfOmg6YTpzOmg6XzoyOjA6MjowOjA6MzowOjUbPwk4MyYhFCEXOl86XzpzOmk6ZzpuOl86aDphOnM6aDpfOjI6MDoyOjA6MDozOjA6NRsDAwYBBAAmFzp0Om86VTpwOnA6ZTpyOkM6YTpzOmUlBgAnJiYUDBc6dzppOm46ZDpvOncVRRc6bzpiOmo6ZTpjOnQ9CTgBJhc6bjphOnY6aTpnOmE6dDpvOnIVRRc6bzpiOmo6ZTpjOnQ9CTgDJhc6bDpvOmM6YTp0Omk6bzpuFUUXOm86YjpqOmU6Yzp0PScmJhQNAwwJOAomFzpSOmU6ZzpFOng6cBUXOkg6ZTphOmQ6bDplOnM6cxc6aS8CFzp0OmU6czp0JRc6bjphOnY6aTpnOmE6dDpvOnIuFzp1OnM6ZTpyOkE6ZzplOm46dDU/BgEnJiYUDhQhFzpfOl86cTptOmY6ZTpfOnM6aTpnOm46XzpjOmg6ZTpjOmsbP0QBPQkmAwwJOAkmAw0QCTg4Jhc6bDpvOmM6YTp0Omk6bzpuLhc6aDpvOnM6dDUXOmk6bjpkOmU6eDpPOmY1FzpxOnE6LjpjOm86bQYBRABEAQsiJyYmFA9BFzpBOnI6cjphOnkVCgArRAAlRC5EGQsMJiYrRAElRAQMJiYrRAIlRAkMJiYrRAMlRDVEGwsMJiYrRAQlRANEDQAMJiYrRAUlRABEFAAMJiYrRAYlRC9EFAsMJiYrRAclRC9EEQsMJiYXOm06YTpwJTgBMwsOAg4DDgQOBQ4GDgcOCBQJAwoJJgMDRAEAOAomAwMbPy0BAgEJCwoOAwYBFzpqOm86aTpuJQQAJhcGAScmJhQQFzpBOnI6cjphOnkVCgArRAAlRAZEDAAMJiYrRAElRAsMJiYrRAIlRAMMJiYrRAMlRAIMJiYrRAQlRAEMJiYrRAUlRAcMJiYrRAYlRAYMJiYrRAclRDlEIAsMJiYXOm06YTpwJTgxMwsOAg4DDgQOBQ4GDgcOCBQJAwoJJgMDRAEAOAEmAwMbPy0BAgEJCwoOAwYBFzpqOm86aTpuJRcGAScmJhQRFzpBOnI6cjphOnkVCgArRAAlRAhEEUQMQwAMJiYrRAElRAtEIgAMJiYrRAIlRDREHAAMJiYrRAMlRDxECAAMJiYrRAQlRA1EDkQNQwAMJiYrRAUlRAdEDEQNQwAMJiYrRAYlRAdEDUQMQwAMJiYrRAclRAtEEEQMQwAMJiYrRAglRAVECEQTQwAMJiYrRAklRApEDkQPQwAMJiYrRAolRBBEEUQOQwAMJiYrRAslRB1EPgAMJiYrRAwlRAxEEUMMJiYrRA0lRApERQAMJiYrRA4lRAdEYQAMJiYrRDxELQslRAYMJiYnJiYDDhAJJjgeJhQRFzpBOnI6cjphOnkVCgArRAAlRBVEBAAMJiYrRAElRBtEJwAMJiYrRAIlRAEMJiYrRAMlRDhEAgAMJiYrRAQlRANEVwAMJiYrRAUlRDVEGQAMJiYrRAYlRDlEQgAMJiYrRAclRBpELQAMJiYrRAglRCVEBAsMJiYrRAklRAwMJiYrRAolRAhECkQRQwAMJiYrRAslRDJEKwAMJiYrRAwlRCFEBwAMJiYrRA0lRApEDEQNQwAMJiYrRA4lRC5EEAAMJiYrRBFEAgslRAhED0QPQwAMJiYnJiYUEhc6QTpyOnI6YTp5FQoAJyYmFBNEACcmJhQTHEQTRAMLMBAJJjgUJhQUFAkUCwMTRAJDGz8bP0Q2RCYLQxQJFAsDE0QCQ0QBABs/Gz8AJyYmFBUUEQMTGz8nJiYUEhc6cDp1OnM6aBsDFAMVJAYBJhQTKxwrBAEEAEQBACcmHgAEAAImOEQUERQLFAkhJwQAJicEACYnJiYUHRcnJiYUHkQAJyYmFB4cRAUwEAkmOBQmFBYUEgMeRANDGz8nJiYUFxQSAx5EA0NEAQAbPycmJhQYFBIDHkQDQ0QCABs/JyYmFBkDFkQCHycmJhQaAxZEAzdEBBkDF0QEHwInJiYUGwMXRAVECgA3RAIZAxhEBh8CJyYmFBwDGEQ1RAoANycmJhQdAx0UCgMZGz8AFAoDGhs/ABQKAxsbPwAUCgMcGz8AJyYmFB4rHCsEAQQARAEAJyYeAAQAAiY4LxQdAx0UChQSRAhEBwAbP0QCHxs/ABQKFBJEC0QEABs/RAM3RAQZGz8AJyYmFBIhJyYmFB8UHRc6cjplOnA6bDphOmM6ZRsXOlI6ZTpnOkU6eDpwFRc6WzpcOi86KzpdFzpnLwIXBgInJiYUIBc6ejp6OmIDDwADHwADEAAnJiYUDxQQFB8UHRQKIScEACYnBAAmJwQAJicEACYnJiYUIBc6dDpvOkw6bzp3OmU6cjpDOmE6czplGwYALQEBASEIAycmJhQIFzpfOmc6ZTp0OlM6ZTpjOnU6cjppOnQ6eTpTOmk6ZzpuGwMJDCYmPi0BhwAALwEmPi0=", [133, 2628, 156, 340, 267, 272, 270, 288, 321, 326, 324, 338, 352, 2575, 786, 790, 788, 869, 904, 908, 906, 944, 945, 949, 947, 983, 991, 995, 993, 1085, 1133, 1217, 1138, 1142, 1140, 1146, 1147, 1151, 1149, 1217, 1336, 1375, 1359, 1369, 1367, 1372, 1376, 1338, 1508, 1547, 1531, 1541, 1539, 1544, 1548, 1510, 1813, 1818, 1816, 2036, 2073, 2078, 2076, 2174, 2172, 2062, 2213, 2218, 2216, 2389, 2387, 2205, 2576, 354]]), n)
        }();
        r.g = function() {
            return r.shift()[0]
        }
        ,
        n.__sign_hash_20200305 = function(e) {
            function t(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function n(e, n, r, o, i, a) {
                return t((u = t(t(n, e), t(o, a))) << (c = i) | u >>> 32 - c, r);
                var u, c
            }
            function r(e, t, r, o, i, a, u) {
                return n(t & r | ~t & o, e, t, i, a, u)
            }
            function o(e, t, r, o, i, a, u) {
                return n(t & o | r & ~o, e, t, i, a, u)
            }
            function i(e, t, r, o, i, a, u) {
                return n(t ^ r ^ o, e, t, i, a, u)
            }
            function a(e, t, r, o, i, a, u) {
                return n(r ^ (t | ~o), e, t, i, a, u)
            }
            function u(e) {
                return function(e) {
                    var t, n = "";
                    for (t = 0; t < 32 * e.length; t += 8)
                        n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }(function(e, n) {
                    e[n >> 5] |= 128 << n % 32,
                    e[14 + (n + 64 >>> 9 << 4)] = n;
                    var u, c, l, s, f, p = 1732584193, d = -271733879, h = -1732584194, v = 271733878;
                    for (u = 0; u < e.length; u += 16)
                        c = p,
                        l = d,
                        s = h,
                        f = v,
                        p = r(p, d, h, v, e[u], 7, -680876936),
                        v = r(v, p, d, h, e[u + 1], 12, -389564586),
                        h = r(h, v, p, d, e[u + 2], 17, 606105819),
                        d = r(d, h, v, p, e[u + 3], 22, -1044525330),
                        p = r(p, d, h, v, e[u + 4], 7, -176418897),
                        v = r(v, p, d, h, e[u + 5], 12, 1200080426),
                        h = r(h, v, p, d, e[u + 6], 17, -1473231341),
                        d = r(d, h, v, p, e[u + 7], 22, -45705983),
                        p = r(p, d, h, v, e[u + 8], 7, 1770035416),
                        v = r(v, p, d, h, e[u + 9], 12, -1958414417),
                        h = r(h, v, p, d, e[u + 10], 17, -42063),
                        d = r(d, h, v, p, e[u + 11], 22, -1990404162),
                        p = r(p, d, h, v, e[u + 12], 7, 1804603682),
                        v = r(v, p, d, h, e[u + 13], 12, -40341101),
                        h = r(h, v, p, d, e[u + 14], 17, -1502002290),
                        p = o(p, d = r(d, h, v, p, e[u + 15], 22, 1236535329), h, v, e[u + 1], 5, -165796510),
                        v = o(v, p, d, h, e[u + 6], 9, -1069501632),
                        h = o(h, v, p, d, e[u + 11], 14, 643717713),
                        d = o(d, h, v, p, e[u], 20, -373897302),
                        p = o(p, d, h, v, e[u + 5], 5, -701558691),
                        v = o(v, p, d, h, e[u + 10], 9, 38016083),
                        h = o(h, v, p, d, e[u + 15], 14, -660478335),
                        d = o(d, h, v, p, e[u + 4], 20, -405537848),
                        p = o(p, d, h, v, e[u + 9], 5, 568446438),
                        v = o(v, p, d, h, e[u + 14], 9, -1019803690),
                        h = o(h, v, p, d, e[u + 3], 14, -187363961),
                        d = o(d, h, v, p, e[u + 8], 20, 1163531501),
                        p = o(p, d, h, v, e[u + 13], 5, -1444681467),
                        v = o(v, p, d, h, e[u + 2], 9, -51403784),
                        h = o(h, v, p, d, e[u + 7], 14, 1735328473),
                        p = i(p, d = o(d, h, v, p, e[u + 12], 20, -1926607734), h, v, e[u + 5], 4, -378558),
                        v = i(v, p, d, h, e[u + 8], 11, -2022574463),
                        h = i(h, v, p, d, e[u + 11], 16, 1839030562),
                        d = i(d, h, v, p, e[u + 14], 23, -35309556),
                        p = i(p, d, h, v, e[u + 1], 4, -1530992060),
                        v = i(v, p, d, h, e[u + 4], 11, 1272893353),
                        h = i(h, v, p, d, e[u + 7], 16, -155497632),
                        d = i(d, h, v, p, e[u + 10], 23, -1094730640),
                        p = i(p, d, h, v, e[u + 13], 4, 681279174),
                        v = i(v, p, d, h, e[u], 11, -358537222),
                        h = i(h, v, p, d, e[u + 3], 16, -722521979),
                        d = i(d, h, v, p, e[u + 6], 23, 76029189),
                        p = i(p, d, h, v, e[u + 9], 4, -640364487),
                        v = i(v, p, d, h, e[u + 12], 11, -421815835),
                        h = i(h, v, p, d, e[u + 15], 16, 530742520),
                        p = a(p, d = i(d, h, v, p, e[u + 2], 23, -995338651), h, v, e[u], 6, -198630844),
                        v = a(v, p, d, h, e[u + 7], 10, 1126891415),
                        h = a(h, v, p, d, e[u + 14], 15, -1416354905),
                        d = a(d, h, v, p, e[u + 5], 21, -57434055),
                        p = a(p, d, h, v, e[u + 12], 6, 1700485571),
                        v = a(v, p, d, h, e[u + 3], 10, -1894986606),
                        h = a(h, v, p, d, e[u + 10], 15, -1051523),
                        d = a(d, h, v, p, e[u + 1], 21, -2054922799),
                        p = a(p, d, h, v, e[u + 8], 6, 1873313359),
                        v = a(v, p, d, h, e[u + 15], 10, -30611744),
                        h = a(h, v, p, d, e[u + 6], 15, -1560198380),
                        d = a(d, h, v, p, e[u + 13], 21, 1309151649),
                        p = a(p, d, h, v, e[u + 4], 6, -145523070),
                        v = a(v, p, d, h, e[u + 11], 10, -1120210379),
                        h = a(h, v, p, d, e[u + 2], 15, 718787259),
                        d = a(d, h, v, p, e[u + 9], 21, -343485551),
                        p = t(p, c),
                        d = t(d, l),
                        h = t(h, s),
                        v = t(v, f);
                    return [p, d, h, v]
                }(function(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0,
                    t = 0; t < n.length; t += 1)
                        n[t] = 0;
                    for (t = 0; t < 8 * e.length; t += 8)
                        n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }(e), 8 * e.length))
            }
            function c(e) {
                return u(unescape(encodeURIComponent(e)))
            }
            return function(e) {
                var t, n, r = "";
                for (n = 0; n < e.length; n += 1)
                    t = e.charCodeAt(n),
                    r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                return r
            }(c(e))
        }
        ;
        var o = n._getSecuritySign;
        delete n._getSecuritySign,
        t.default = o
    }
    .call(this, n(80))
},
    80 : function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (r) {
        "object" === typeof window && (n = window)
    }
    e.exports = n
}

});


data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":1328382895,"g_tk_new_20200303":1781623782,"g_tk":1781623782},"req_1":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6120418400","songmid":["001pHzdz29aG1Z","001vMQja4Vy5l8","003aAYrm3GE0Ac"],"songtype":[0,0,0],"uin":"1328382895","loginflag":1,"platform":"20"}},"req_2":{"module":"music.musicasset.SongFavRead","method":"IsSongFanByMid","param":{"v_songMid":["001pHzdz29aG1Z","001vMQja4Vy5l8","003aAYrm3GE0Ac"]}},"req_3":{"module":"music.musichallSong.PlayLyricInfo","method":"GetPlayLyricInfo","param":{"songMID":"001pHzdz29aG1Z","songID":100893820}},"req_4":{"method":"GetCommentCount","module":"music.globalComment.GlobalCommentRead","param":{"request_list":[{"biz_type":1,"biz_id":"100893820","biz_sub_type":0}]}},"req_5":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":"000VMnoi2Lgt44"}},"req_6":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"5596476652","songmid":["001pHzdz29aG1Z"],"songtype":[0],"uin":"1328382895","loginflag":1,"platform":"20"}},"req_7":{"module":"music.trackInfo.UniformRuleCtrl","method":"CgiGetTrackInfo","param":{"ids":[100893820,108753450,449205],"types":[0,0,0]}}}'



console.log(xl(0).default(data))















