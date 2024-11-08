! function(e, s) {
    e.refTaggerCallback || (e.refTagger = s())
}(this, function() {
    var e, s, o;
    return function(n) {
        function t(e, s) {
            return C.call(e, s)
        }

        function a(e, s) {
            var o, n, t, a, r, i, l, c, d, u, p, f = s && s.split("/"),
                h = T.map,
                g = h && h["*"] || {};
            if (e && "." === e.charAt(0))
                if (s) {
                    for (f = f.slice(0, f.length - 1), e = e.split("/"), r = e.length - 1, T.nodeIdCompat && S.test(e[r]) && (e[r] = e[r].replace(S, "")), e = f.concat(e), d = 0; d < e.length; d += 1)
                        if (p = e[d], "." === p) e.splice(d, 1), d -= 1;
                        else if (".." === p) {
                        if (1 === d && (".." === e[2] || ".." === e[0])) break;
                        d > 0 && (e.splice(d - 1, 2), d -= 2)
                    }
                    e = e.join("/")
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if ((f || g) && h) {
                for (o = e.split("/"), d = o.length; d > 0; d -= 1) {
                    if (n = o.slice(0, d).join("/"), f)
                        for (u = f.length; u > 0; u -= 1)
                            if (t = h[f.slice(0, u).join("/")], t && (t = t[n])) {
                                a = t, i = d;
                                break
                            }
                    if (a) break;
                    !l && g && g[n] && (l = g[n], c = d)
                }!a && l && (a = l, i = c), a && (o.splice(0, i, a), e = o.join("/"))
            }
            return e
        }

        function r(e, s) {
            return function() {
                return f.apply(n, y.call(arguments, 0).concat([e, s]))
            }
        }

        function i(e) {
            return function(s) {
                return a(s, e)
            }
        }

        function l(e) {
            return function(s) {
                m[e] = s
            }
        }

        function c(e) {
            if (t(b, e)) {
                var s = b[e];
                delete b[e], v[e] = !0, p.apply(n, s)
            }
            if (!t(m, e) && !t(v, e)) throw new Error("No " + e);
            return m[e]
        }

        function d(e) {
            var s, o = e ? e.indexOf("!") : -1;
            return o > -1 && (s = e.substring(0, o), e = e.substring(o + 1, e.length)), [s, e]
        }

        function u(e) {
            return function() {
                return T && T.config && T.config[e] || {}
            }
        }
        var p, f, h, g, m = {},
            b = {},
            T = {},
            v = {},
            C = Object.prototype.hasOwnProperty,
            y = [].slice,
            S = /\.js$/;
        h = function(e, s) {
            var o, n = d(e),
                t = n[0];
            return e = n[1], t && (t = a(t, s), o = c(t)), t ? e = o && o.normalize ? o.normalize(e, i(s)) : a(e, s) : (e = a(e, s), n = d(e), t = n[0], e = n[1], t && (o = c(t))), {
                f: t ? t + "!" + e : e,
                n: e,
                pr: t,
                p: o
            }
        }, g = {
            require: function(e) {
                return r(e)
            },
            exports: function(e) {
                var s = m[e];
                return "undefined" != typeof s ? s : m[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: m[e],
                    config: u(e)
                }
            }
        }, p = function(e, s, o, a) {
            var i, d, u, p, f, T, C = [],
                y = typeof o;
            if (a = a || e, "undefined" === y || "function" === y) {
                for (s = !s.length && o.length ? ["require", "exports", "module"] : s, f = 0; f < s.length; f += 1)
                    if (p = h(s[f], a), d = p.f, "require" === d) C[f] = g.require(e);
                    else if ("exports" === d) C[f] = g.exports(e), T = !0;
                else if ("module" === d) i = C[f] = g.module(e);
                else if (t(m, d) || t(b, d) || t(v, d)) C[f] = c(d);
                else {
                    if (!p.p) throw new Error(e + " missing " + d);
                    p.p.load(p.n, r(a, !0), l(d), {}), C[f] = m[d]
                }
                u = o ? o.apply(m[e], C) : void 0, e && (i && i.exports !== n && i.exports !== m[e] ? m[e] = i.exports : u === n && T || (m[e] = u))
            } else e && (m[e] = o)
        }, e = s = f = function(e, s, o, t, a) {
            if ("string" == typeof e) return g[e] ? g[e](s) : c(h(e, s).f);
            if (!e.splice) {
                if (T = e, T.deps && f(T.deps, T.callback), !s) return;
                s.splice ? (e = s, s = o, o = null) : e = n
            }
            return s = s || function() {}, "function" == typeof o && (o = t, t = a), t ? p(n, e, s, o) : setTimeout(function() {
                p(n, e, s, o)
            }, 4), f
        }, f.config = function(e) {
            return f(e)
        }, e._defined = m, o = function(e, s, o) {
            s.splice || (o = s, s = []), t(m, e) || t(b, e) || (b[e] = [e, s, o])
        }, o.amd = {
            jQuery: !0
        }
    }(), o("....\node_modulesalmondalmond.js", function() {}), o("config", {
        brandSite: "https://www.logos.com/reftagger?utm_source=web&utm_medium=linktologos&utm_content=reftaggertooltip&utm_campaign=biblia",
        readers: {
            biblia: "https://biblia.com",
            "bible.faithlife": "https://bible.faithlife.com"
        },
        loggerBaseUri: "bible.logos.com/util/v2/log",
        noSearchTags: {
            applet: !0,
            hr: !0,
            head: !0,
            img: !0,
            input: !0,
            meta: !0,
            script: !0,
            select: !0,
            textarea: !0
        },
        createTooltipDelay: 250,
        removeTooltipDelay: 300,
        defaultSettings: {
            addLibronixDLSLink: !1,
            addLogosLink: !1,
            appendIconToLibLinks: !1,
            appendIconToLogosLinks: !1,
            bibleReader: "biblia",
            bibleVersion: "",
            caseInsensitive: !1,
            convertHyperlinks: !1,
            cssOverride: !1,
            enableSharingPopups: !0,
            hyperlinkTestList: [],
            libronixBibleVersion: "",
            libronixLinkIcon: null,
            linksOpenNewWindow: !0,
            logosBibleVersion: "",
            logosLinkIcon: "dark",
            noSearchClassNames: [],
            noSearchTagNames: ["h1", "h2", "h3"],
            rootNode: null,
            socialSharing: ["faithlife", "twitter", "facebook", "google"],
            tagAutomatically: !0,
            tooltipStyle: "light",
            useTooltip: !0,
            dropShadow: !0,
            roundCorners: !1,
            customStyle: null,
            tagChapters: !1
        },
        socialSharing: {
            faithlife: {
                id: "rtFaithlife",
                link: "https://faithlife.com/share?url=",
                windowSettings: "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=800,width=990",
                title: "Faithlife"
            },
            twitter: {
                id: "rtTwitter",
                link: "https://twitter.com/intent/tweet?url=",
                windowSettings: "width=420,height=488",
                title: "Twitter"
            },
            facebook: {
                id: "rtFacebook",
                link: "https://www.facebook.com/sharer/sharer.php?u=",
                windowSettings: "width=626,height=436",
                title: "Facebook"
            },
            google: {
                id: "rtGoogle",
                link: "https://plus.google.com/share?url=",
                windowSettings: "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600",
                title: "Google+"
            }
        }
    }), o("root", [], function() {
        return this
    }), o("versions", {
        bibliaVersionAbbreviations: {
            dar: "darby",
            nasb: "nasb95",
            gw: "godsword",
            kjv21: "kjv1900",
            nivuk: "niv",
            kar: "hu-bible",
            byz: "byzprsd",
            kjv: "kjv1900",
            net: "gs-netbible",
            s21: "ec-sbgbibs212007"
        },
        supportedVersions: ["AB", "ASV", "CEV", "DARBY", "DAR", "ESV", "GRMNBBLGBRSTZNG", "GW", "HCSB", "KJ21", "KJV", "LSG", "NASB", "NCV", "NET", "NIRV", "NIV", "NIVUK", "NKJV", "NLT", "NLV", "NRSV", "MESSAGE", "S21", "TNIV", "WE", "WNT", "YLT", "TNIV", "NIRV", "TNIV", "NASB", "WESTCOTT", "CHASAOT", "STEPHENS", "AV 1873", "KJV APOC", "ELZEVIR", "IT-DIODATI1649", "TISCH", "TISCHENDORF", "CS-KR1579", "TR1881", "TR1894MR", "TR1550MR", "KAR", "BYZ", "LEB", "RVR60"]
    }), o("nls/readerQueryParams", {
        culture: "es"
    }), o("passageManager", ["config", "versions", "nls/readerQueryParams"], function(e, s, o) {
        "use strict";

        function n(e, s) {
            return e + "-" + (s || "")
        }

        function t(e) {
            return e = (e || "").toLowerCase(), "default" === e && (e = ""), s.bibliaVersionAbbreviations[e] || e
        }

        function a(s) {
            return e.readers[s] || e.readers.biblia
        }

        function r(e, s, r, f) {
            var h, g, m, b, T;
            if (s = t(s), r = a(r), h = n(e, s), l.hasOwnProperty(h)) f && f(l[h]);
            else if (c.hasOwnProperty(h)) f && c[h].push(f);
            else {
                c[h] = f ? [f] : [], m = ["https:" === i.location.protocol ? "https:" : "http:", "//reftaggercdn.global.ssl.fastly.net", "/bible/", s ? encodeURIComponent(s) + "/" : "", encodeURIComponent(e), "?target=reftagger&callback=refTaggerCallback"];
                for (b in o) o.hasOwnProperty(b) && Array.prototype.push.apply(m, ["&", b, "=", encodeURIComponent(o[b])]);
                g = m.join(""), p[h] = setTimeout(function() {
                    var e, s = u[h],
                        o = c[h],
                        n = o.length;
                    for (s.parentNode.removeChild(s), e = 0; n > e; e++) o[e]();
                    delete c[h]
                }, 5e3), T = i.createElement("script"), T.src = g, d.insertBefore(T, d.firstChild), u[h] = T
            }
        }
        var i = window.document,
            l = {},
            c = {},
            d = i.getElementsByTagName("head")[0],
            u = {},
            p = {};
        return window.refTaggerCallback = function(e) {
            var s, o, t, a = e.requestedVersion,
                r = e.requestedReference,
                i = n(r, a),
                d = c[i];
            if (l[i] = e, d) {
                for (s = u[i], s.parentNode.removeChild(s), t = d.length, clearTimeout(p[i]), o = 0; t > o; o++) d[o](e);
                delete c[i]
            }
        }, {
            getPassage: r,
            getVersion: t,
            getBibleReader: a
        }
    }), o("util/classNames", {
        classNames: {
            tooltip: "rtTooltip",
            tooltipContainer: "rtContainer",
            tooltipHeader: "rtTooltipHeader",
            tooltipBody: "rtTooltipBody",
            tooltipReference: "rtTooltipReference",
            tooltipVersion: "rtTooltipVersion",
            tooltipFooter: "rtTooltipFooter",
            tooltipBrandLink: "rtTooltipBrandLink",
            tooltipMoreLink: "rtTooltipMoreLink",
            tooltipDropShadow: "rtTooltipDropShadow",
            tooltipRoundedCorners: "rtTooltipRoundedCorners",
            bibleRef: "rtBibleRef"
        }
    }), o("util/dom", ["root"], function(e) {
        "use strict";

        function s(s) {
            var o = e.document,
                n = o.body,
                t = {};
            return s ? "number" == typeof s.scrollLeft && (s.scrollLeft || s.scrollTop) ? (t.x = s.scrollLeft, t.y = s.scrollTop) : t = null : (t.x = e.pageXOffset || n.scrollLeft || o.documentElement.scrollLeft, t.y = e.pageYOffset || n.scrollTop || o.documentElement.scrollTop), t
        }

        function o(e) {
            var s = e,
                o = {
                    x: 0,
                    y: 0
                },
                n = {
                    x: 0,
                    y: 0
                };
            if ("number" == typeof e.offsetLeft) {
                for (; e;) o.x += e.offsetLeft, o.y += e.offsetTop, e = e.offsetParent;
                for (; s && s !== l && s !== i.documentElement;) n.y += s.scrollTop || 0, n.x += s.scrollLeft || 0, s = s.parentNode;
                o.x -= n.x, o.y -= n.y
            }
            return o
        }

        function n() {
            var o = s(),
                n = {
                    width: e.innerWidth || l.clientWidth || i.documentElement.clientWidth,
                    height: e.innerHeight || l.clientHeight || i.documentElement.clientHeight
                };
            return o && (n.x = o.x, n.y = o.y), n
        }

        function t(e, s) {
            s.parentNode.insertBefore(i.createTextNode(e), s)
        }

        function a(e, s) {
            var o, n = i.createElement(e);
            s = s || {};
            for (o in s) n[o] = s[o];
            return n
        }

        function r(e, s) {
            var o;
            s = s || {};
            for (o in s) "undefined" != typeof e.style[o] && (e.style[o] = s[o]);
            return e
        }
        var i = e.document,
            l = i.body;
        return {
            applyStyles: r,
            createElement: a,
            getElementAbsoluteOffset: o,
            getElementOffset: s,
            getWindowSize: n,
            insertTextNode: t
        }
    }), o("nls/resourceStrings", {
        tooltip: {
            loading: "Cargando...",
            more: "más &raquo;",
            brandMessage: "Con la tecnología de Logos Reftagger",
            // brandMessage: "",
            errorHeader: "Disculpe",
            errorBody: "Esta referencia no pudo cargarse en este momento.",
            shareOn: "Compartir en "
        },
        logosLinkTitle: "Abrir con Software Bíblico Logos (si está disponible)",
        normalizeReference: function(e) {
            return e.replace(/(\s|\r?\n)+/g, " ").replace(/:/g, ".").replace(/^(\d+)\.+/, "$1").replace("brief", "")
        }
    }), o("libs/text", ["module"], function(e) {
        "use strict";
        var o, n, t, a, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            i = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            c = "undefined" != typeof location && location.href,
            d = c && location.protocol && location.protocol.replace(/\:/, ""),
            u = c && location.hostname,
            p = c && (location.port || void 0),
            f = {},
            h = e.config && e.config() || {};
        return o = {
            version: "2.0.7",
            strip: function(e) {
                if (e) {
                    e = e.replace(i, "");
                    var s = e.match(l);
                    s && (e = s[1])
                } else e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: h.createXhr || function() {
                var e, s, o;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (s = 0; 3 > s; s += 1) {
                        o = r[s];
                        try {
                            e = new ActiveXObject(o)
                        } catch (n) {}
                        if (e) {
                            r = [o];
                            break
                        }
                    }
                return e
            },
            parseName: function(e) {
                var s, o, n, t = !1,
                    a = e.indexOf("."),
                    r = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== a && (!r || a > 1) ? (s = e.substring(0, a), o = e.substring(a + 1, e.length)) : s = e, n = o || s, a = n.indexOf("!"), -1 !== a && (t = "strip" === n.substring(a + 1), n = n.substring(0, a), o ? o = n : s = n), {
                    moduleName: s,
                    ext: o,
                    strip: t
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, s, n, t) {
                var a, r, i, l = o.xdRegExp.exec(e);
                return l ? (a = l[2], r = l[3], r = r.split(":"), i = r[1], r = r[0], !(a && a !== s || r && r.toLowerCase() !== n.toLowerCase() || (i || r) && i !== t)) : !0
            },
            finishLoad: function(e, s, n, t) {
                n = s ? o.strip(n) : n, h.isBuild && (f[e] = n), t(n)
            },
            load: function(e, s, n, t) {
                if (t.isBuild && !t.inlineText) return void n();
                h.isBuild = t.isBuild;
                var a = o.parseName(e),
                    r = a.moduleName + (a.ext ? "." + a.ext : ""),
                    i = s.toUrl(r),
                    l = h.useXhr || o.useXhr;
                !c || l(i, d, u, p) ? o.get(i, function(s) {
                    o.finishLoad(e, a.strip, s, n)
                }, function(e) {
                    n.error && n.error(e)
                }) : s([r], function(e) {
                    o.finishLoad(a.moduleName + "." + a.ext, a.strip, e, n)
                })
            },
            write: function(e, s, n, t) {
                if (f.hasOwnProperty(s)) {
                    var a = o.jsEscape(f[s]);
                    n.asModule(e + "!" + s, "define(function () { return '" + a + "';});\n")
                }
            },
            writeFile: function(e, s, n, t, a) {
                var r = o.parseName(s),
                    i = r.ext ? "." + r.ext : "",
                    l = r.moduleName + i,
                    c = n.toUrl(r.moduleName + i) + ".js";
                o.load(l, n, function(s) {
                    var n = function(e) {
                        return t(c, e)
                    };
                    n.asModule = function(e, s) {
                        return t.asModule(e, c, s)
                    }, o.write(e, l, n, a)
                }, a)
            }
        }, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node ? (n = s.nodeRequire("fs"), o.get = function(e, s, o) {
            try {
                var t = n.readFileSync(e, "utf8");
                0 === t.indexOf("\ufeff") && (t = t.substring(1)), s(t)
            } catch (a) {
                o(a)
            }
        }) : "xhr" === h.env || !h.env && o.createXhr() ? o.get = function(e, s, n, t) {
            var a, r = o.createXhr();
            if (r.open("GET", e, !0), t)
                for (a in t) t.hasOwnProperty(a) && r.setRequestHeader(a.toLowerCase(), t[a]);
            h.onXhr && h.onXhr(r, e), r.onreadystatechange = function(o) {
                var t, a;
                4 === r.readyState && (t = r.status, t > 399 && 600 > t ? (a = new Error(e + " HTTP status: " + t), a.xhr = r, n(a)) : s(r.responseText), h.onXhrComplete && h.onXhrComplete(r, e))
            }, r.send(null)
        } : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? o.get = function(e, s) {
            var o, n, t = "utf-8",
                a = new java.io.File(e),
                r = java.lang.System.getProperty("line.separator"),
                i = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), t)),
                l = "";
            try {
                for (o = new java.lang.StringBuffer, n = i.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && o.append(n); null !== (n = i.readLine());) o.append(r), o.append(n);
                l = String(o.toString())
            } finally {
                i.close()
            }
            s(l)
        } : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (t = Components.classes, a = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o.get = function(e, s) {
            var o, n, r = {},
                i = new FileUtils.File(e);
            try {
                o = t["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream), o.init(i, 1, 0, !1), n = t["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream), n.init(o, "utf-8", o.available(), a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), n.readString(o.available(), r), n.close(), o.close(), s(r.value)
            } catch (l) {
                throw new Error((i && i.path || "") + ": " + l)
            }
        }), o
    }), o("libs/text!util/tooltipTemplate", [], function() {
        return '<div class="{{tooltipContainer}}">\n	<div class="{{tooltipHeader}}">{{reference}} {{version}} {{socialContent}}</div>\n	<div class="{{tooltipBody}}">{{content}}</div>\n	<div class="{{tooltipFooter}}">\n		<div class="{{tooltipBrandLink}}">\n			<a href="{{brandSite}}" target="_blank">{{brandMessage}}</a>\n		</div>\n		{{footer}}\n	</div>\n</div>'
    }), o("tooltips", ["config", "root", "util/classNames", "util/dom", "passageManager", "nls/resourceStrings", "nls/readerQueryParams", "libs/text!util/tooltipTemplate"], function(e, s, o, n, t, a, r, i) {
        "use strict";

        function l(e, s, o, n, t) {
            var a = {
                x: s.x + o.tooltipOffsetX,
                y: s.y - t
            };
            return a.x += n, a.x > e.width + e.x - o.tooltipEdgePadding && (a.x = e.width + e.x - o.tooltipOffsetX - o.tooltipEdgePadding), a.x < 0 && (a.x = 0), a.y < e.y && (s.y + t + o.tooltipOffsetY > e.height + e.y ? a.y = e.y : a.y = s.y + o.tooltipOffsetY), a.x -= n + 3, a.x < 0 && (a.x = 0), a
        }

        function c(e, s, o) {
            var n, a, i = t.getBibleReader(o) + "/bible/",
                l = [];
            for (a in r) r.hasOwnProperty(a) && l.push(a + "=" + r[a]);
            return s = t.getVersion(s), n = [i, s ? s + "/" : "", e.replace(/:/g, ".")], l.length && n.push("?" + l.join("&")), encodeURI(n.join("").replace(/(\s|\r?\n)+/g, " "))
        }

        function d(e) {
            return y.replace("{{reference}}", e.reference || "").replace("{{version}}", e.version || "").replace("{{content}}", e.content || "").replace("{{footer}}", e.footer || "").replace("{{socialContent}}", e.socialContent || "")
        }

        function u() {
            return null !== C
        }

        function p(e, s) {
            var t = n.createElement("div", {
                className: o.classNames.tooltip + " " + e.tooltipStyle + " " + (e.includeDropShadow ? o.classNames.tooltipDropShadow : "") + " " + (e.includeRoundedCorners ? o.classNames.tooltipRoundedCorners : ""),
                onmouseover: b,
                onmouseout: g
            });
            return t.innerHTML = d(s), t
        }

        function f(t, r, i) {
            function l() {
                var o, r, l, c = i.socialSharing.length;
                for (r = 0; c > r; r++) l = i.socialSharing[r], e.socialSharing.hasOwnProperty(l) && (o = n.createElement("a", {
                    className: "rtTooltipSocialIcon",
                    id: e.socialSharing[l].id,
                    href: e.socialSharing[l].link + encodeURIComponent(t.url),
                    title: a.tooltip.shareOn + e.socialSharing[l].title,
                    target: "_blank",
                    innerHTML: " "
                }), i.enableSharingPopups && (o.setAttribute("data-window-settings", e.socialSharing[l].windowSettings), o.addEventListener && o.addEventListener("click", function() {
                    s.open(this.href, "", this.getAttribute("data-window-settings"))
                }, !1)), d.appendChild(o));
                return d.outerHTML
            }
            var d = n.createElement("div", {
                    className: "rtTooltipSocial"
                }),
                u = c(r.reference, r.version, r.bibleReader),
                p = {
                    reference: "",
                    version: "",
                    content: "",
                    footer: "",
                    socialContent: ""
                };
            return t ? (p.content = t.content, p.footer = '<a class="' + o.classNames.tooltipMoreLink + '" href="' + u + '" target="_blank">' + a.tooltip.more + "</a>", p.reference = t.reference, p.version = "(" + t.version + ")", i.socialSharing && i.socialSharing.length && (p.socialContent = l())) : (p.content = "<p>" + a.tooltip.errorBody + "</p>", p.reference = a.tooltip.errorHeader), p
        }

        function h(e, o, r) {
            var i, c, u, h, v = {
                tooltipOffsetX: 15,
                tooltipOffsetY: 25,
                tooltipEdgePadding: 10,
                elementLocation: n.getElementAbsoluteOffset(e),
                windowSize: n.getWindowSize()
            };
            if (r)
                for (i in v) r.hasOwnProperty(i) && (v[i] = r[i]);
            C && m(), c = p(r, {
                reference: a.tooltip.loading
            }), c.onmouseover = b, c.onmouseout = g, c.addEventListener && c.addEventListener("touchstart", function(e) {
                e.stopPropagation()
            }, !1), h = c.offsetHeight, s.document.body.appendChild(c), u = l(v.windowSize, v.elementLocation, v, c.offsetWidth, c.offsetHeight), c = n.applyStyles(c, {
                position: "absolute",
                top: u.y + "px",
                left: u.x + "px",
                zIndex: "9999999"
            }), t.getPassage(o.reference, o.version, o.bibleReader, function(e) {
                var s = f(e, o, r);
                c.innerHTML = d(s), c.offsetHeight > h && (u = l(v.windowSize, v.elementLocation, v, c.offsetWidth, c.offsetHeight), c = n.applyStyles(c, {
                    top: u.y + "px",
                    left: u.x + "px"
                }))
            }), C = c, T = e
        }

        function g() {
            v = setTimeout(function() {
                C && C.parentNode && C.parentNode.removeChild(C), C = null, T = null
            }, e.removeTooltipDelay)
        }

        function m() {
            s.clearTimeout(v), C && C.parentNode && C.parentNode.removeChild(C), C = null, T = null
        }

        function b() {
            s.clearTimeout(v)
        }
        var T, v = null,
            C = null,
            y = i.replace("{{tooltipContainer}}", o.classNames.tooltipContainer).replace("{{tooltipHeader}}", o.classNames.tooltipHeader).replace("{{tooltipBody}}", o.classNames.tooltipBody).replace("{{tooltipFooter}}", o.classNames.tooltipFooter).replace("{{tooltipBrandLink}}", o.classNames.tooltipBrandLink).replace("{{tooltipMoreLink}}", o.classNames.tooltipMoreLink).replace("{{brandMessage}}", a.tooltip.brandMessage).replace("{{brandSite}}", e.brandSite);
        return {
            create: h,
            remove: g,
            cancelRemove: b,
            reset: m,
            isTooltipOpen: u,
            generateLink: c,
            getTooltipDiv: p,
            getTooltipContentsFromPassage: f
        }
    }), o("nls/continuationPhrases", {
        phrases: ["y", "o", "&", "&amp;"]
    }), o("nls/referenceRegexesCore", {
        seriesBookRegExp: "(?:(a\\s(?:C(?:orintio(?:s)?|rónicas)|de\\sJuan|Esdra(?:s)?|Juan|Macabeo(?:s)?|P(?:aralipómenos|edro)|Reyes|Samuel|T(?:esalonicense(?:s)?|imoteo))|ª\\s(?:C(?:orintio(?:s)?|rónicas)|Esdra(?:s)?|Juan|Macabeo(?:s)?|P(?:aralipómenos|edro)|Reyes|Samuel|T(?:esalonicense(?:s)?|imoteo))|C(?:h(?:r(?:on(?:icles)?)?)?|o(?:r(?:int(?:hians|io(?:s)?))?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|de\\sJuan|Es(?:d(?:r(?:a(?:s)?)?)?)?|J(?:n|o(?:h(?:n)?)?|uan)|K(?:gs|i(?:n(?:gs)?)?)?|M(?:a(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)?|nd\\s(?:C(?:hronicles|orinthians)|Esdras|John|K(?:gs|ings)|Maccabees|Pe(?:dro|ter)|Samuel|T(?:hessalonians|imothy))|o\\s(?:C(?:orintio(?:s)?|rónicas)|Esdra(?:s)?|Juan|Macabeo(?:s)?|P(?:aralipómenos|edro)|Reyes|Samuel|T(?:esalonicense(?:s)?|imoteo))|º\\s(?:C(?:orintio(?:s)?|rónicas)|Esdra(?:s)?|Juan|Macabeo(?:s)?|P(?:aralipómenos|edro)|Reyes|Samuel|T(?:esalonicense(?:s)?|imoteo))|P(?:ar|e(?:d(?:ro)?|t(?:er)?)?)?|R(?:e(?:y(?:es)?)?)?|rd\\s(?:John|Maccabees)|S(?:a(?:m(?:uel)?)?|m)?|st\\s(?:C(?:hronicles|orinthians)|Esdras|John|K(?:gs|ings)|Maccabees|Peter|Samuel|T(?:hessalonians|imothy))|T(?:es(?:al(?:onicense(?:s)?)?)?|h(?:es(?:s(?:alonians)?)?)?|i(?:m(?:ot(?:eo|hy))?)?|s)|th\\sMaccabees))",
        singleChapterBookRegExp: "(?:(Ab(?:d(?:ia(?:s)?|ías)?|s)?|Ob(?:a(?:b|daiah)?)?)|(Azar(?:ia(?:h|s)|ías)|Or(?:\\sAz|aci(?:on\\s(?:Az|de\\sAzar(?:ia|ías))|ón\\s(?:Az|de\\sAzar(?:ia(?:s)?|ías))))|Pr(?:\\sAz|ayer\\sof\\sAzariah)|Song\\s(?:of\\s(?:the\\sThree\\sHoly\\sChildren|Thr(?:ee(?:\\s(?:Children|Jews|Youths))?)?)|Thr)|The\\sSong\\sof\\s(?:the\\sThree\\sHoly\\sChildren|Three\\s(?:Jews|Youths)))|(Sus(?:an(?:a|na))?)|(Bel(?:\\s(?:and\\sthe\\sDragon|y\\sel\\sDrag(?:on|ón)))?)|(O(?:Ma|r(?:\\s(?:de\\sMan|Man)|aci(?:on\\sde\\sManas(?:e(?:s)?|é(?:s)?)|ón\\sde\\sManas(?:e(?:s)?|é(?:s)?))))|P(?:Ma|r(?:\\s(?:Man|of\\sMan)|ayer\\sof\\sManasse(?:h|s))))|(Add(?:\\sPs(?:alm)?|itional\\sPsalm)|Ps(?:\\sAd|a(?:\\s151|151|lm(?:\\s151|151|s(?:\\s151|151)))|lm(?:\\s151|151)|m(?:\\s151|151)|s(?:\\s151|151))|S(?:al(?:\\s(?:151|Ad)|151|mo(?:\\s(?:151|Ad(?:icional)?)|151|s(?:\\s151|151)))|l(?:\\s(?:151|adicional)|151|m(?:\\s151|151)|s(?:\\s151|151))))|(Ep(?:\\sLaod|ist(?:\\sLaodice(?:ans|o(?:s)?)|le\\s(?:Laodiceans|to\\s(?:Laodiceans|the\\sLaodiceans))|ola\\s(?:a\\slos\\sLaodiceo|Laodiceo(?:s)?))|íst(?:\\sLaodiceo(?:s)?|ola\\s(?:a\\slos\\sLaodiceo(?:s)?|Laodiceo(?:s)?)))|Laod(?:ice(?:ans|os))?)|(F(?:il(?:em(?:on|ón)?|m)|lm|m)|Ph(?:ilem(?:on)?|m))|(2(?:\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|a\\s(?:de\\sJuan|Juan)|ª\\sJuan|J(?:n|o(?:h(?:n)?)?)|nd\\sJohn|o\\sJuan|º\\sJuan)|II\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|Se(?:cond\\sJohn|gund(?:a\\s(?:de\\sJuan|Juan)|o\\s(?:de\\sJuan|Juan))))|(3(?:\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|a\\s(?:de\\sJuan|Juan)|ª\\sJuan|J(?:n|o(?:h(?:n)?)?)|o\\sJuan|º\\sJuan|rd\\sJohn)|III\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|T(?:ercer(?:a\\s(?:de\\sJuan|Juan)|o\\s(?:de\\sJuan|Juan))|hird\\sJohn))|(J(?:d|ud(?:as|e)?)))",
        standardBookRegExp: "((G(?:e(?:n(?:esis)?)?|én(?:esis)?|n))|(Ex(?:o(?:d(?:o|us)?)?)?|Éx(?:o(?:do)?)?)|(L(?:ev(?:itic(?:o|us)|ítico)?|v))|(N(?:b|m|u(?:m(?:bers|ero(?:s)?)?)?|ú(?:m(?:eros)?)?))|(D(?:e(?:ut(?:eronom(?:io|y))?)?|t))|(J(?:os(?:h(?:ua)?|u(?:e|é))?|s(?:h)?))|(J(?:dg(?:s)?|g|u(?:dg(?:es)?|e(?:ces)?)?))|(R(?:t(?:h)?|u(?:t(?:h)?)?))|(1(?:\\sS(?:a(?:m(?:uel)?)?|m)?|a\\sSamuel|ª\\sSamuel|o\\sSamuel|º\\sSamuel|S(?:a(?:m(?:uel)?)?|m)?|st\\sSamuel)|First\\sSamuel|I\\sS(?:a(?:m(?:uel)?)?|m)?|Primer(?:a\\s(?:de\\sSamuel|Samuel)|o\\s(?:de\\sSamuel|Samuel)))|(2(?:\\sS(?:a(?:m(?:uel)?)?|m)?|a\\sSamuel|ª\\sSamuel|nd\\sSamuel|o\\sSamuel|º\\sSamuel|S(?:a(?:m(?:uel)?)?|m)?)|II\\sS(?:a(?:m(?:uel)?)?|m)?|Se(?:cond\\sSamuel|gund(?:a\\s(?:de\\sSamuel|Samuel)|o\\s(?:de\\sSamuel|Samuel))))|(1(?:\\s(?:Kings|R(?:e(?:y(?:es)?)?)?)|a\\sReyes|ª\\sReyes|K(?:gs|i(?:n(?:gs)?)?)?|o\\sReyes|º\\sReyes|R(?:e(?:y(?:es)?)?)?|st\\sK(?:gs|ings))|First\\sK(?:gs|ings)|I\\s(?:K(?:gs|i(?:ngs)?)|R(?:e(?:y(?:es)?)?)?)|Primer(?:a\\s(?:de\\sReyes|Reyes)|o\\s(?:de\\sReyes|Reyes)))|(2(?:\\s(?:K(?:gs|i(?:ngs)?)|R(?:e(?:y(?:es)?)?)?)|a\\sReyes|ª\\sReyes|K(?:gs|i(?:n(?:gs)?)?)?|nd\\sK(?:gs|ings)|o\\sReyes|º\\sReyes|R(?:e(?:y(?:es)?)?)?)|II\\s(?:K(?:gs|i(?:ngs)?)|R(?:e(?:y(?:es)?)?)?)|Se(?:cond(?:\\sKings)?|gund(?:a\\s(?:de\\sReyes|Reyes)|o\\s(?:de\\sReyes|Reyes))))|(1(?:\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|Par)|a\\s(?:Crónicas|Paralipómenos)|ª\\s(?:Crónicas|Paralipómenos)|C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|o\\s(?:Crónicas|Paralipómenos)|º\\s(?:Crónicas|Paralipómenos)|Par|st\\sChronicles)|First\\sChronicles|I\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|Par)|Primer(?:a\\s(?:Cr(?:onicas|ónicas)|de\\sCr(?:onicas|ónicas))|o\\s(?:Cr(?:onicas|ónicas)|de\\sCr(?:onicas|ónicas))))|(2(?:\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|Par)|a\\s(?:Crónicas|Paralipómenos)|ª\\s(?:Crónicas|Paralipómenos)|C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|nd\\sChronicles|o\\s(?:Crónicas|Paralipómenos)|º\\s(?:Crónicas|Paralipómenos)|Par)|II\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|r(?:on(?:icas)?|ón(?:icas)?)?)|Par)|Se(?:cond\\sChronicles|gund(?:a\\s(?:Cr(?:onicas|ónicas)|de\\sCr(?:onicas|ónicas))|o\\s(?:Cr(?:onicas|ónicas)|de\\sCr(?:onicas|ónicas)))))|(E(?:ds|sd(?:ras)?|zr(?:a)?))|(N(?:e(?:h(?:em(?:ia(?:h|s)?|ías))?)?|hs))|(Est(?:er|h(?:er)?)?)|(J(?:b|ob))|(Ps(?:a(?:lm(?:s)?)?|lm|m|s)?|S(?:a(?:l(?:mo(?:s)?)?)?|l(?:m|s)?))|(Pr(?:ov(?:erb(?:ios|s))?|v)?)|(Ec(?:cles(?:iastes)?|l(?:esiast(?:es|és))?)?|Qo(?:h(?:elet(?:h)?|élet)?)?)|(C(?:ant(?:ar(?:\\sde\\slos\\sCantares|es)?|icle(?:\\sof\\sCanticles|s))?|nt)|S(?:o(?:ng(?:\\sof\\sSo(?:lomon|ngs))?)?|OS|S))|(Is(?:a(?:ia(?:h|s)|ías)?|s)?)|(J(?:er(?:em(?:ia(?:h|s)|ías))?|r(?:s)?))|(L(?:am(?:enta(?:ciones(?:\\sde\\sJeremías)?|tions))?|m))|(Ez(?:e(?:k(?:iel)?|quiel)?|k|l|q)?)|(D(?:a(?:n(?:iel)?)?|n(?:l)?))|(Ho(?:s(?:ea)?)?|Os(?:e(?:as)?|s)?)|(J(?:l|o(?:el|l)))|(Am(?:o(?:s)?|ós|s)?)|(Ab(?:d(?:ia(?:s)?|ías)?|s)?|Ob(?:a(?:b|daiah)?)?)|(J(?:n(?:h|s)|o(?:han|n(?:as|ás)?)))|(M(?:i(?:c(?:ah)?|q(?:ueas)?)?|qs))|(N(?:a(?:h(?:u(?:m|n)|ú(?:m|n))?)?|h(?:m|n)))|(H(?:ab(?:a(?:cuc|kkuk))?|b(?:c)?))|(S(?:fs|of(?:on(?:ia(?:s)?|ías))?)|Z(?:ep(?:h(?:aniah)?)?|p))|(Ag(?:eo|o)?|H(?:ag(?:eo|gai)?|g(?:o)?))|(Z(?:ac(?:ar(?:ia(?:s)?|ías))?|c(?:s)?|ec(?:h(?:ariah)?)?))|(M(?:al(?:a(?:chi|qu(?:ia(?:s)?|ías)))?|l(?:q|s)?))|(T(?:b|ob(?:i(?:as|t)|ías)?))|(J(?:dt(?:h)?|t|ud(?:i(?:t(?:h)?)?|í)))|(A(?:dd(?:\\sEs(?:th)?|Es(?:th)?|itions\\sto\\sEsther)|Es)|Es(?:\\sAd|t(?:\\sAd|er\\scon\\sAdiciones))|Rest\\sof\\sEsther|The\\sRest\\sof\\sEsther)|(La\\sSabiduría\\sde\\sSalomón|Sab(?:\\s(?:de\\sSal|Sal)|idur(?:ia|ía(?:\\sde\\sSalomón)?))?|The\\sWisdom\\sof\\sSolomon|W(?:is(?:d(?:\\sof\\sSol|om(?:\\sof\\sSolomon)?))?|s))|(Ecl(?:esi(?:astico|ástico)|o)|Si(?:r(?:ac(?:h|ida)|ácida)?)?)|(Bar(?:u(?:c(?:h)?)?)?)|(Car(?:\\s(?:de\\sJerem(?:ia|ía(?:s)?)|Jer)|ta\\s(?:de\\sJerem(?:ia(?:s)?|ía(?:s)?)|Jer))|L(?:et(?:\\sJer|ter\\sof\\sJeremiah)|Je|tr\\sJer))|(Azar(?:ia(?:h|s)|ías)|Or(?:\\sAz|aci(?:on\\s(?:Az|de\\sAzar(?:ia|ías))|ón\\s(?:Az|de\\sAzar(?:ia(?:s)?|ías))))|Pr(?:\\sAz|ayer\\sof\\sAzariah)|Song\\s(?:of\\s(?:the\\sThree\\sHoly\\sChildren|Thr(?:ee(?:\\s(?:Children|Jews|Youths))?)?)|Thr)|The\\sSong\\sof\\s(?:the\\sThree\\sHoly\\sChildren|Three\\s(?:Jews|Youths)))|(Sus(?:an(?:a|na))?)|(Bel(?:\\s(?:and\\sthe\\sDragon|y\\sel\\sDrag(?:on|ón)))?)|(1(?:\\sM(?:a(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)?|a\\sMacabeo(?:s)?|ª\\sMacabeo(?:s)?|M(?:a(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)?|o\\sMacabeo(?:s)?|º\\sMacabeo(?:s)?|st\\sMaccabees)|First\\sMaccabees|I\\sMa(?:c(?:abeos|c(?:abees)?)?)?|Primer(?:a\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?)|o\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?)))|(2(?:\\sM(?:a(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)?|a\\sMacabeo(?:s)?|ª\\sMacabeo(?:s)?|M(?:a(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)?|nd\\sMaccabees|o\\sMacabeo(?:s)?|º\\sMacabeo(?:s)?)|II\\sMa(?:c(?:c(?:abees)?)?)?|Se(?:cond\\sMaccabees|gund(?:a\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?)|o\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?))))|(1(?:\\sEs(?:d(?:r(?:a(?:s)?)?)?)?|a\\sEsdra(?:s)?|ª\\sEsdra(?:s)?|Es(?:d(?:r(?:a(?:s)?)?)?)?|o\\sEsdra(?:s)?|º\\sEsdra(?:s)?|st\\sEsdras)|First\\sEsdras|I\\sEs(?:d(?:r(?:a(?:s)?)?)?)?|Primer(?:a\\s(?:de\\sEsdra(?:s)?|Esdra(?:s)?)|o\\s(?:de\\sEsdra(?:s)?|Esdra(?:s)?)))|(O(?:Ma|r(?:\\s(?:de\\sMan|Man)|aci(?:on\\sde\\sManas(?:e(?:s)?|é(?:s)?)|ón\\sde\\sManas(?:e(?:s)?|é(?:s)?))))|P(?:Ma|r(?:\\s(?:Man|of\\sMan)|ayer\\sof\\sManasse(?:h|s))))|(Add(?:\\sPs(?:alm)?|itional\\sPsalm)|Ps(?:\\sAd|a(?:\\s151|151|lm(?:\\s151|151|s(?:\\s151|151)))|lm(?:\\s151|151)|m(?:\\s151|151)|s(?:\\s151|151))|S(?:al(?:\\s(?:151|Ad)|151|mo(?:\\s(?:151|Ad(?:icional)?)|151|s(?:\\s151|151)))|l(?:\\s(?:151|adicional)|151|m(?:\\s151|151)|s(?:\\s151|151))))|(3(?:\\sMa(?:c(?:abeo(?:s)?|c(?:abees)?)?)?|a\\sMacabeo(?:s)?|ª\\sMacabeo(?:s)?|Ma(?:c(?:c(?:abees)?)?)?|o\\sMacabeo(?:s)?|º\\sMacabeo(?:s)?|rd\\sMaccabees)|III\\sMa(?:c(?:abeo(?:s)?|c(?:abees)?)?)?|T(?:ercer(?:a\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?)|o\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?))|hird\\sMaccabees))|(2(?:\\sEs(?:d(?:r(?:as)?)?)?|a\\sEsdra(?:s)?|ª\\sEsdra(?:s)?|Es(?:d(?:r(?:as)?)?)?|nd\\sEsdras|o\\sEsdra(?:s)?|º\\sEsdra(?:s)?)|II\\sEs(?:d(?:r(?:as)?)?)?|Se(?:cond\\sEsdras|gund(?:a\\s(?:de\\sEsdra(?:s)?|Esdra(?:s)?)|o\\s(?:de\\sEsdra(?:s)?|Esdra(?:s)?))))|(4(?:\\sMa(?:c(?:abeo(?:s)?|c(?:abees)?)?)?|a\\sMacabeo(?:s)?|ª\\sMacabeo(?:s)?|Ma(?:c(?:c(?:abees)?)?)?|o\\sMacabeo(?:s)?|º\\sMacabeo(?:s)?|th\\sMaccabees)|Cuart(?:a\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?)|o\\s(?:de\\sMacabeo(?:s)?|Macabeo(?:s)?))|Fourth\\sMaccabees|IV\\sMa(?:c(?:abeo(?:s)?|c(?:abees)?)?)?)|(Od(?:a|e))|(Ps(?:\\sSol(?:omon)?|alms\\s(?:of\\sSolomon|Solomon)|Sol)|S(?:\\sSal(?:om(?:on|ón))?|almos\\s(?:de\\sSalom(?:on|ón)|Salom(?:on|ón))|Sal))|(Ep(?:\\sLaod|ist(?:\\sLaodice(?:ans|o(?:s)?)|le\\s(?:Laodiceans|to\\s(?:Laodiceans|the\\sLaodiceans))|ola\\s(?:a\\slos\\sLaodiceo|Laodiceo(?:s)?))|íst(?:\\sLaodiceo(?:s)?|ola\\s(?:a\\slos\\sLaodiceo(?:s)?|Laodiceo(?:s)?)))|Laod(?:ice(?:ans|os))?)|(M(?:at(?:eo|t(?:hew)?)?|t))|(M(?:ar(?:co(?:s)?|k)?|c|k|r(?:c|k)?))|(L(?:c|k|u(?:c(?:as)?|k(?:e)?)?))|(J(?:n|oh(?:n)?|ua(?:n)?))|(Ac(?:t(?:s)?)?|H(?:ch|ec(?:h(?:o(?:\\sde\\slos\\sAp(?:ostoles|óstoles)|s(?:\\sde\\slos\\sAp(?:óstole(?:s)?|ostoles))?)?)?)?))|(R(?:m|o(?:m(?:an(?:o(?:s)?|s)?)?)?))|(1(?:\\sCo(?:r(?:int(?:hians|io(?:s)?))?)?|a\\sCorintio(?:s)?|ª\\sCorintio(?:s)?|Co(?:r(?:int(?:hians|io(?:s)?))?)?|o\\sCorintio(?:s)?|º\\sCorintio(?:s)?|st\\sCorinthians)|First\\sCorinthians|I\\sCo(?:r(?:int(?:hians|io(?:s)?))?)?|Primer(?:a\\s(?:Corintio(?:s)?|de\\sCorintio(?:s)?|los\\sCorintio(?:s)?)|o\\s(?:Corintio(?:s)?|de\\sCorintio(?:s)?|los\\sCorintio(?:s)?)))|(2(?:\\sCo(?:r(?:int(?:hians|ios))?)?|a\\sCorintio(?:s)?|ª\\sCorintio(?:s)?|Co(?:r(?:inthians)?)?|nd\\sCorinthians|o\\sCorintio(?:s)?|º\\sCorintio(?:s)?)|II\\sCo(?:r(?:inthians)?)?|Se(?:cond\\sCorinthians|gund(?:a\\s(?:Corintio(?:s)?|de\\sCorintio(?:s)?|los\\sCorintio(?:s)?)|o\\s(?:Corintio(?:s)?|de\\sCorintio(?:s)?|los\\sCorintio(?:s)?))))|(G(?:a(?:l(?:at(?:a(?:s)?|ians))?)?|á(?:l(?:ata(?:s)?)?)?|l))|(E(?:f(?:e(?:s(?:ios)?)?|s)?|p(?:h(?:es(?:ians)?)?)?))|(F(?:i(?:l(?:ipense(?:s)?)?)?|lp|p)|Ph(?:i(?:l(?:ippians)?)?|p))|(C(?:l|o(?:l(?:os(?:enses|sians))?)?))|(1(?:\\sT(?:es(?:alonicense(?:s)?)?|h(?:es(?:s(?:alonians)?)?)?|s)|a\\sTesalonicense(?:s)?|ª\\sTesalonicense(?:s)?|o\\sTesalonicense(?:s)?|º\\sTesalonicense(?:s)?|st\\sThessalonians|T(?:es(?:al(?:onicense(?:s)?)?)?|h(?:es(?:s(?:alonians)?)?)?|s))|First\\sThessalonians|I(?:\\sT(?:es(?:alonicense(?:s)?)?|h(?:es(?:s(?:alonians)?)?)?|s)|Tes(?:alonicense(?:s)?)?)|Primer(?:a\\s(?:a\\sTesalonicense(?:s)?|de\\sTesalonicense(?:s)?|Tesalonicense(?:s)?)|o\\s(?:a\\sTesalonicense(?:s)?|de\\sTesalonicense(?:s)?|Tesalonicense(?:s)?)))|(2(?:\\sT(?:es(?:alonicense(?:s)?)?|h(?:es(?:s(?:alonians)?)?)?|s)|a\\sTesalonicense(?:s)?|ª\\sTesalonicense(?:s)?|nd\\sThessalonians|o\\sTesalonicense(?:s)?|º\\sTesalonicense(?:s)?|T(?:es(?:al(?:onicense(?:s)?)?)?|h(?:es(?:s(?:alonians)?)?)?|s))|II(?:\\sT(?:es(?:alonicense(?:s)?)?|h(?:es(?:s(?:alonians)?)?)?)|Tes(?:alonicense(?:s)?)?)|Se(?:cond\\sThessalonians|gund(?:a\\s(?:a\\sTesalonicense(?:s)?|de\\sTesalonicense(?:s)?|Tesalonicense(?:s)?)|o\\s(?:a\\sTesalonicense(?:s)?|de\\sTesalonicense(?:s)?|Tesalonicense(?:s)?))))|(1(?:\\sTi(?:m(?:ot(?:eo|hy))?)?|a\\sTimoteo|ª\\sTimoteo|o\\sTimoteo|º\\sTimoteo|st\\sTimothy|Ti(?:m(?:ot(?:eo|hy))?)?)|First\\sTimothy|I(?:\\sTi(?:m(?:ot(?:eo|hy))?)?|Timoteo)|Primer(?:a\\s(?:a\\sTimoteo|de\\sTimoteo|Timoteo)|o\\s(?:a\\sTimoteo|de\\sTimoteo|Timoteo)))|(2(?:\\sTi(?:m(?:ot(?:eo|hy))?)?|a\\sTimoteo|ª\\sTimoteo|nd\\sTimothy|o\\sTimoteo|º\\sTimoteo|Ti(?:m(?:ot(?:eo|hy))?)?)|II(?:\\sTi(?:m(?:othy)?)?|Timoteo)|Se(?:cond\\sTimothy|gund(?:a\\s(?:a\\sTimoteo|de\\sTimoteo|Timoteo)|o\\s(?:a\\sTimoteo|de\\sTimoteo|Timoteo))))|(T(?:i(?:t(?:o|us)?)?|t))|(F(?:il(?:em(?:on|ón)?|m)|lm|m)|Ph(?:ilem(?:on)?|m))|(He(?:b(?:re(?:os|ws))?)?)|(J(?:a(?:m(?:es)?|s)|m)|S(?:ant(?:iago)?|g|tg))|(1(?:\\sP(?:e(?:d(?:ro)?|t(?:er)?)?)?|a\\sPedro|ª\\sPedro|o\\sPedro|º\\sPedro|P(?:e(?:d(?:ro)?|t(?:er)?)?)?|st\\sPeter)|First\\sPeter|I\\sPe(?:d(?:ro)?|t(?:er)?)?|Primer(?:a\\s(?:a\\sPedro|de\\sPedro|Pedro)|o\\s(?:a\\sPedro|de\\sPedro|Pedro)))|(2(?:\\sP(?:e(?:d(?:ro)?|t(?:er)?)?)?|a\\sPedro|ª\\sPedro|nd\\sPe(?:dro|ter)|o\\sPedro|º\\sPedro|P(?:e(?:d(?:ro)?|t(?:er)?)?)?)|II\\sPe(?:d(?:ro)?|t(?:er)?)?|Se(?:cond\\sPeter|gund(?:a\\s(?:a\\sPedro|de\\sPedro|Pedro)|o\\s(?:a\\sPedro|de\\sPedro|Pedro))))|(1(?:\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|a\\s(?:de\\sJuan|Juan)|ª\\sJuan|J(?:n|o(?:h(?:n)?)?)|o\\sJuan|º\\sJuan|st\\sJohn)|First\\sJohn|I\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|Primer(?:a\\s(?:de\\sJuan|Juan)|o\\s(?:de\\sJuan|Juan)))|(2(?:\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|a\\s(?:de\\sJuan|Juan)|ª\\sJuan|J(?:n|o(?:h(?:n)?)?)|nd\\sJohn|o\\sJuan|º\\sJuan)|II\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|Se(?:cond\\sJohn|gund(?:a\\s(?:de\\sJuan|Juan)|o\\s(?:de\\sJuan|Juan))))|(3(?:\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|a\\s(?:de\\sJuan|Juan)|ª\\sJuan|J(?:n|o(?:h(?:n)?)?)|o\\sJuan|º\\sJuan|rd\\sJohn)|III\\s(?:de\\sJuan|J(?:n|o(?:h(?:n)?)?|uan))|T(?:ercer(?:a\\s(?:de\\sJuan|Juan)|o\\s(?:de\\sJuan|Juan))|hird\\sJohn))|(J(?:d|ud(?:as|e)?))|(Ap(?:o(?:c(?:alipsis)?)?)?|El\\sApocalipsis|La(?:\\sRevelaci(?:on|ón)|s\\sRevelaciones)|Re(?:v(?:ela(?:ciones|tion))?)?|The\\sRevelation))",
        abbreviations: ["Gén", "Éxo", "Lev", "Núm", "Deut", "Jos", "Jue", "Rut", "1 Sam", "2 Sam", "1 Rey", "2 Rey", "1 Crón", "2 Crón", "Esd", "Neh", "Est", "Job", "Sal", "Prov", "Ecl", "Cant", "Isa", "Jer", "Lam", "Eze", "Dan", "Ose", "Joel", "Amós", "Abd", "Jon", "Miq", "Nah", "Hab", "Sof", "Hag", "Zac", "Mal", "Tob", "Jdt", "Est Ad", "Sab", "Eclo", "Baruc", "Carta Jer", "Oración Az", "Susana", "Bel", "1 Mac", "2 Mac", "1 Esdr", "Or de Man", "Sal 151", "3 Mac", "2 Esdr", "4 Mac", "Oda", "Salmos Salomón", "Laodiceos", "Mat", "Mar", "Luc", "Juan", "Hech", "Rom", "1 Cor", "2 Cor", "Gál", "Efe", "Fil", "Col", "1 Ts", "2 Ts", "1 Tim", "2 Tim", "Tit", "Film", "Heb", "Sant", "1 Ped", "2 Ped", "1 Jn", "2 Jn", "3 Jn", "Jud", "Apoc"],
        singleChapterIndexes: [30, 46, 47, 48, 52, 53, 59, 77, 83, 84, 85]
    }), o("referenceRegexes", ["versions", "nls/continuationPhrases", "nls/referenceRegexesCore"], function(e, s, o) {
        return {
            chapterReferenceRegExp: "\\b\\s\\d+(?![\\.:])\\b",
            referenceQuickTest: "((\\d{1,3})(?:(?:\\s?\\:\\s?|\\.)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?))?)|" + o.singleChapterBookRegExp,
            referenceRegExp: "(\\W|^)(" + o.standardBookRegExp + "(?:\\.?\\s*(\\d{1,3})(?:(?:\\s?\\:\\s?|\\.)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?))?(\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?((?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?(?!\\s*" + o.seriesBookRegExp + "(?:\\W)))?)|" + o.singleChapterBookRegExp + "\\s*\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)([,.]?\\s?(?:" + e.supportedVersions.join("|") + ")|[,.]?\\s?[(](?:" + e.supportedVersions.join("|") + ")[)])?",
            bookContinuationRegExp: "^((?:(?:[,;\\.]+)?\\s?(?:" + s.phrases.join("|") + ")?)\\s*(?:(?:(?:cf|Cf|CF|cp|Cp|CP)[.,]?\\s?(?:v(?:v|ss?)?[.]?)?)[.,]?\\s*)?)((\\d{1,3})(?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)?)",
            chapterContinuationRegExp: "^((?:(?:[,;\\.]+)?\\s?(?:" + s.phrases.join("|") + ")?)\\s*(?:(?:(?:cf|Cf|CF|cp|Cp|CP)[.,]?\\s?(?:v(?:v|ss?)?[.]?)?)[.,]?\\s*)?)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)(?!\\s*" + o.seriesBookRegExp + "(?=\\W|\\d|$))",
            abbreviations: o.abbreviations,
            singleChapterIndexes: o.singleChapterIndexes
        }
    }), o("util/color", {
        hexToRgb: function(e) {
            return e ? {
                r: parseInt(e.slice(1, 3), 16),
                g: parseInt(e.slice(3, 5), 16),
                b: parseInt(e.slice(5, 7), 16)
            } : null
        },
        rgbToHex: function(e) {
            function s(e) {
                var s = e.toString(16);
                return ("0" + s).substr(s.length - 1, 2)
            }
            return e ? "#" + s(e.r) + s(e.g) + s(e.b) : null
        },
        hslToRgb: function(e) {
            function s(e, s, o) {
                return 0 > o && (o += 1), o > 1 && (o -= 1), 1 / 6 > o ? e + 6 * (s - e) * o : .5 > o ? s : 2 / 3 > o ? e + (s - e) * (2 / 3 - o) * 6 : e
            }
            var o, n, t, a, r, i = e.h,
                l = e.s,
                c = e.l;
            return 0 === l ? o = n = t = c : (a = .5 > c ? c * (1 + l) : c + l - c * l, r = 2 * c - a, o = s(r, a, i + 1 / 3), n = s(r, a, i), t = s(r, a, i - 1 / 3)), {
                r: Math.round(255 * o),
                g: Math.round(255 * n),
                b: Math.round(255 * t)
            }
        },
        rgbToHsl: function(e) {
            var s, o, n = e.r / 255,
                t = e.g / 255,
                a = e.b / 255,
                r = Math.max(n, t, a),
                i = Math.min(n, t, a),
                l = (r + i) / 2;
            if (r == i) s = o = 0;
            else {
                var c = r - i;
                switch (o = l > .5 ? c / (2 - r - i) : c / (r + i), r) {
                    case n:
                        s = (t - a) / c + (a > t ? 6 : 0);
                        break;
                    case t:
                        s = (a - n) / c + 2;
                        break;
                    case a:
                        s = (n - t) / c + 4
                }
                s /= 6
            }
            return {
                h: s,
                s: o,
                l: l
            }
        }
    }), o("libs/text!css/default", [], function() {
        return ".rtTooltipHeader{font-family:Arial,Helvetica,serif}.rtTooltipBody{font-family:Helvetica,Arial,serif}.rtTooltipBody .ch-ref{font-weight:700}.rtTooltipFooter{font-family:Helvetica,Arial,serif}.rtTooltipDropShadow .rtContainer{-webkit-box-shadow:0 0 6px 0 #444;-moz-box-shadow:0 0 6px 0 #444;box-shadow:0 0 6px 0 #444}.rtTooltipRoundedCorners .rtContainer{-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;overflow:hidden}.rtTooltipFooter a{font-family:Helvetica,Arial,serif;font-weight:400}.rtTooltipBrandLink a:hover,.rtTooltipBrandLink a:link,.rtTooltipBrandLink a:visited,.rtTooltipMoreLink:hover,.rtTooltipMoreLink:link,.rtTooltipMoreLink:visited{text-decoration:none}.rtLight .rtContainer{background:#fff}.rtLight .rtTooltipHeader{background:#e7e7e7;color:#333}.rtLight .rtTooltipBody{color:#666}.rtLight .rtTooltipBrandLink a:link,.rtLight .rtTooltipBrandLink a:visited{color:#ccc}.rtLight .rtTooltipBrandLink a:hover{color:#666}.rtLight .rtTooltipMoreLink:link,.rtLight .rtTooltipMoreLink:visited{color:#0080FF}.rtLight .rtTooltipMoreLink:hover{color:#66B2FF}.rtDark .rtContainer{background:#555}.rtDark .rtTooltipHeader{background:#888;color:#eee}.rtDark .rtTooltipBody{color:#fff}.rtDark .rtTooltipBrandLink a:link,.rtDark .rtTooltipBrandLink a:visited{color:#999}.rtDark .rtTooltipBrandLink a:hover{color:#eee}.rtDark .rtTooltipMoreLink:link,.rtDark .rtTooltipMoreLink:visited{color:#fff}.rtDark .rtTooltipMoreLink:hover{color:#ccc}.rtTooltipSocialIcon{background:url(//bible.logos.com/v2/social-icons.png)}"
    }), o("libs/text!css/layout", [], function() {
        return ".rtTooltip{text-align:left;text-indent:0;width:400px;min-height:140px;z-index:99;max-width:100%}.rtTooltip div{text-align:left}.rtTooltipHeader{border:0;font-size:14px;font-weight:700;line-height:32px;height:32px;margin:0;padding:0 20px 0 15px}.rtTooltipBody{border:0;line-height:1.4;font-size:14px;margin:0;min-height:40px;padding:19px 20px 0 15px}.rtTooltipBody .ch-ref,.rtTooltipBody .verse-ref{font-size:85%;position:relative;top:-1px}.rtTooltipFooter{border:0;font-size:14px;line-height:14px;letter-spacing:normal;padding:22px 32px 12px 15px;text-align:left}.rtTooltipFooter div{text-align:right}.rtTooltipFooter .rtTooltipMoreLink{float:right}.rtTooltipFooter .rtTooltipBrandLink{display:inline-block;margin-right:20px;font-size:12px}.rtTooltipSocial{float:right}.rtTooltip .rtTooltipSocialIcon{display:inline-block;margin-top:8px;height:19px;width:21px}.rtTooltip,.rtTooltip a,.rtTooltipBody p,.rtTooltipBody span{letter-spacing:normal;margin:0;padding:0}.rtLibronix img{float:none}.libronixLinkImage{border:0;float:none;margin:0 0 0 4px;padding:0}"
    }), o("cssLoader", ["util/classNames", "util/dom", "util/color", "libs/text!css/default", "libs/text!css/layout"], function(e, s, o, n, t) {
        "use strict";
        return {
            loadCss: function(a, r) {
                function i() {
                    var e = document.getElementById("rt-tooltip-styles");
                    e && e.parentElement.removeChild(e)
                }

                function l(e) {
                    var s, o, n, t, a, r = ["rtFaithlife", "rtFacebook", "rtTwitter", "rtGoogle"],
                        i = "";
                    for (s = 0, o = r.length; o > s; s++)
                        for (n = 0; 2 > n; n++) t = 0 === n ? ":hover" : "", a = 19 * s * 4 + (e ? 38 : 0) + (t ? 19 : 0), i += ".rtTooltipSocialIcon#" + r[s] + t + "{background-position:0 -" + a + "px;}\n";
                    return i
                }

                function c(s) {
                    function n(e) {
                        return e.split(";")[0]
                    }

                    function t(e) {
                        var s = /^#(\w{3}|\w{6})$/;
                        return s.test(e) ? e.replace(/^#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") : (window.console && window.console.warn && window.console.warn("Invalid color value provided to Reftagger. Must be in hex format."), "")
                    }

                    function a(e, s, o) {
                        var t, a, r = "\n" + e + "{";
                        for (t = 0, a = o.length; a > t; t++) s[o[t]] && (r += o[t].replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + n(s[o[t]]) + " !important;");
                        return r + "}\n"
                    }

                    function r(e) {
                        var s = o.rgbToHsl(o.hexToRgb(t(e)));
                        return o.rgbToHex(o.hslToRgb({
                            h: s.h,
                            s: s.s,
                            l: Math.min(s.l + .2 * (s.l < .6 ? 1 : -1), 1)
                        }))
                    }
                    var i, l, c, d = "",
                        u = ["backgroundColor", "fontSize", "lineHeight", "fontWeight", "color", "fontFamily"];
                    return s.heading && (i = t(s.heading.backgroundColor), i && (l = o.hexToRgb(i), p = (l.r + l.g + l.b) / 3 < 170), d += a("." + e.classNames.tooltipHeader, s.heading, u)), s.body && (d += a("." + e.classNames.tooltipBody + ", ." + e.classNames.tooltipFooter, s.body, u.slice(1)), c = t(s.body.moreLink && s.body.moreLink.color), c && (d += a("." + e.classNames.tooltipMoreLink, s.body.moreLink, ["color"]), d += "\n." + e.classNames.tooltipMoreLink + ":hover{color:" + r(s.body.moreLink.color) + " !important}\n")), d
                }
                var d = s.createElement("style", {
                        id: "rt-tooltip-styles",
                        type: "text/css"
                    }),
                    u = t,
                    p = !1;
                r.cssOverride || 0 === window.location.hostname.toLowerCase().indexOf("theresurgence.com") || (u += n), r.customStyle && (u += c(r.customStyle)), u += l(p || "dark" === r.tooltipStyle), d.styleSheet ? d.styleSheet.cssText = u : d.innerHTML = u, i(), a.insertBefore(d, a.firstChild)
            }
        }
    }), o("util/version", {
        version: 2
    }), o("util/settings", {
        getSettingsOrDefaults: function(e, s) {
            var o, n = {};
            if (e = e || window.refTagger && window.refTagger.settings)
                for (o in s) s.hasOwnProperty(o) && (n[o] = void 0 !== e[o] ? e[o] : s[o]);
            return n
        }
    }), o("main", ["config", "root", "passageManager", "tooltips", "referenceRegexes", "cssLoader", "util/classNames", "util/version", "util/settings", "util/dom", "nls/resourceStrings"], function(e, s, o, n, t, a, r, i, l, c, d) {
        "use strict";

        function u(e) {
            return d.normalizeReference(e)
        }

        function p() {
            (new Image).src = [z, "://", e.loggerBaseUri, "?", "documentUrl=", encodeURIComponent(J.location), "&referenceCount=", +O.referenceCount, "&microreferenceCount=", +O.markedBibleReferenceCount, "&bibleVersion=", encodeURIComponent(V.bibleVersion), "&usesLibronixLinks=", !!V.addLogosLink, "&usesTooltips=", !!V.useTooltip, "&applicationVersion=", i.version, "&rand=", Math.random().toString().substring(10)].join("")
        }

        function f() {
            var e, s, o, n = /lbsRefTaggerPrefs=(?:((?:\w|\d){2,5})\.(true|false))/.exec(J.cookie),
                t = J.getElementById("lbsRefTaggerCP");
            if (n && (V.bibleVersion = n[1], V.addLogosLink = "true" === n[2]), null !== t) {
                for (e = J.getElementById("lbsVersion"), s = e.length, o = 0; s > o; o++)
                    if (e.options[o].outerText === (V.bibleVersion || "default").toUpperCase()) {
                        e.selectedIndex = o;
                        break
                    }
                V.addLogosLink && (J.getElementById("lbsUseLibronixLinks").checked = "true")
            }
        }

        function h(e) {
            var o;
            for (e = e || s.event, o = e.target || e.srcElement;
                "a" !== o.tagName.toLowerCase();) o = o.parentNode;
            return o
        }

        function g(e) {
            var s = h(e);
            o.getPassage(s.getAttribute("data-reference"), s.getAttribute("data-version"), V.bibleReader)
        }

        function m(s) {
            function t() {
                n.create(r, i, {
                    enableSharingPopups: V.enableSharingPopups,
                    socialSharing: V.socialSharing,
                    tooltipStyle: "dark" === V.tooltipStyle ? "rtDark" : "rtLight",
                    includeDropShadow: V.dropShadow,
                    includeRoundedCorners: V.roundCorners
                })
            }
            var a = 20,
                r = h(s),
                i = {
                    reference: r.getAttribute("data-reference").replace(/\s/g, ""),
                    version: r.getAttribute("data-version"),
                    bibleReader: V.bibleReader
                };
            N = H ? setTimeout(t, 1) : setTimeout(function() {
                o.getPassage(i.reference, i.version, i.bibleReader), N = setTimeout(t, e.createTooltipDelay - a)
            }, a)
        }

        function b() {
            H || (s.clearTimeout(N), n.remove())
        }

        function T(e, s, n, t) {
            var a;
            e = u(e), s = o.getVersion(s || V.bibleVersion), a = v(J.createElement("a"), e, s), a.innerHTML = n, t.parentNode.insertBefore(a, t), V.addLogosLink && C(t, e.replace(/(\d)\s*(?:[a-z]|ff)(\W|$)|/g, "$1$2").replace(/\s+/g, "").replace(/[‒–—―]+/g, "-")), O.referenceCount++
        }

        function v(e, s, o) {
            return F.test(e.className) || (e.className += (e.className.length ? " " : "") + r.classNames.bibleRef), e.href = n.generateLink(s, o, V.bibleReader), e.setAttribute("data-reference", s), e.setAttribute("data-version", o), e.setAttribute("data-purpose", "bible-reference"), V.linksOpenNewWindow && (e.target = "_blank"), V.useTooltip && (e.addEventListener ? (e.addEventListener("mouseover", m, !1), e.addEventListener("mouseout", b, !1), e.addEventListener("touchstart", g, !1), e.addEventListener("click", function(e) {
                H && e.target !== n.openTooltipAnchor && (e.preventDefault(), n.openTooltipAnchor || m.call(this, e))
            }, !1)) : e.attachEvent && (e.attachEvent("onmouseover", m), e.attachEvent("onmouseout", b))), e
        }

        function C(e, s) {
            var o, n, t = V.logosBibleVersion || V.libronixBibleVersion,
                a = z + "://www.logos.com/images/Corporate/LibronixLink_" + ("light" === (V.libronixLinkIcon || V.logosLinkIcon).toLowerCase() ? "light" : "dark") + ".png",
                r = c.createElement("img", {
                    src: a,
                    border: 0,
                    title: d.logosLinkTitle,
                    className: "libronixLinkImage",
                    align: "bottom"
                });
            s ? (n = "libronixdls:keylink|ref=[en]bible:" + s, t && "default" !== t.toLowerCase() && (n += "|res=LLS:" + t.toUpperCase()), o = c.createElement("a", {
                href: n,
                className: "rtLibronix"
            }), o.appendChild(r), e.parentNode.insertBefore(o, e)) : e.appendChild(r)
        }

        function y(e, s, o, n, a, r, i) {
            var l, d, p, f, h, g, m, b, C, S, L, J = !1,
                P = 0,
                I = V.bibleVersion,
                N = null,
                A = t.abbreviations,
                B = A.length;
            return o && (p = w.exec(e), p && (l = o, d = p[3], b = l + " " + p[2], g = p[1], h = e.substr(p.index + p[0].length))), n && !p && (p = E.exec(e), p && (l = o, d = n, b = r ? l + " " + p[2] : l + " " + d + ":" + p[2], J = M.test(b), g = p[1], h = e.substr(p.index + p[0].length))), !p && x.test(e) && (p = k.exec(e), p && (f = p.length, l = p[3], d = p[4 + B], b = p[2], C = p.indexOf(l, 4) - 4, S = A[C], -1 !== R.indexOf(C) ? (d = 1, J = !1) : J = M.test(b), g = e.substr(0, p.index) + p[1], h = e.substr(p.index + p[0].length), p[f - 1] && (N = p[f - 1], I = N.replace(/\W/g, "")))), p ? (m = p[0].substr((p[1] || "").length), J && !V.tagChapters ? (c.insertTextNode(g + m, s), P = y(h, s, null, null, I === V.bibleVersion ? null : I, !1)) : 155 >= d && (l = l || o, S = S || l, L = S + b.substr(l.length), i ? (I = I || V.bibleVersion, v(i, u(L), I)) : (c.insertTextNode(g, s), T(L, I, null === N ? p[2] : p[2] + N, s), P = y(h, s, l, d, I === V.bibleVersion ? null : I, J), P += V.addLogosLink ? 3 : 2))) : e !== s.nodeValue && (e && a != e && c.insertTextNode(e, s), s.parentNode.removeChild(s)), P
        }

        function S(e, s, o) {
            var n, t, a, r, i, l, c, d = (e.tagName || "").toLowerCase(),
                p = e.className && e.className.split ? e.className.split(" ") : [],
                f = e.href && e.href.toLowerCase ? e.href.toLowerCase() : "",
                h = p.length,
                g = 0,
                m = !1,
                b = /^libronixdls:/i,
                x = 0,
                k = 0;
            if (o = o || 0, o > B) return 0;
            for (a = 0; h > a; a++)
                if (D.noSearchClasses.hasOwnProperty(p[a].toLowerCase())) return x;
            if (D.noSearchTags[d]) return x;
            if (3 === e.nodeType) return x = y(e.nodeValue, e, null, null, null, !1, s);
            if (s = null, "a" === d) {
                if (b.test(e.href)) !V.appendIconToLibLinks && !V.appendIconToLogosLinks || e.lastChild && e.lastChild.tagName && "img" === e.lastChild.tagName.toLowerCase() || C(e, null);
                else if (F.test(e.className)) r = e.getAttribute("data-reference"), i = e.getAttribute("data-version"), r && v(e, u(r), i || V.bibleVersion);
                else if (/bibleref/i.test(e.className)) m = L(e, function(e, s, o) {
                    n = u(s), v(e, n, o)
                });
                else if (V.convertHyperlinks && 1 === e.childNodes.length && 3 === e.firstChild.nodeType)
                    for (V.hyperlinkTestList.length || (s = e), l = V.hyperlinkTestList.length, c = 0; l > c; c++)
                        if (-1 !== f.indexOf(V.hyperlinkTestList[c].toLowerCase())) {
                            s = e;
                            break
                        }
                if (null === s) return x
            } else "cite" === d && -1 !== e.className.toLowerCase().indexOf("bibleref") && (m = L(e, function(e, s, o) {
                T(s, o, e.innerHTML, e.firstChild), e.removeChild(e.lastChild)
            }));
            if (!m)
                for (t = e.childNodes; k > g || g < (k = t ? t.length : 0);) g += S(t[g], s, o + 1) + 1;
            return x
        }

        function L(e, s) {
            var o, n, t, a = !1;
            return O.markedBibleReferenceCount++, e.title && e.childNodes.length <= 1 && (o = /^([A-Z]{2,5})[\s:]/.exec(e.title), o ? (t = e.title.replace(o[1], "").trim(), n = o[1]) : (t = e.title, n = V.bibleVersion), s(e, t, n), a = !0), a
        }
        var x, k, w, E, M, R, J = s.document,
            P = J.body,
            I = J.getElementsByTagName("head")[0],
            N = null,
            A = !1,
            B = 200,
            O = {
                referenceCount: 0,
                markedBibleReferenceCount: 0
            },
            H = !1,
            z = "https:" === J.location.protocol ? "https" : "http",
            F = new RegExp(r.classNames.bibleRef, "i"),
            V = {},
            D = {
                lbsSavePrefs: function() {
                    var e = J.getElementById("lbsRefTaggerCP"),
                        o = J.getElementById("lbsVersion"),
                        n = J.getElementById("lbsUseLibronixLinks"),
                        t = o ? o.value : "ESV",
                        a = n ? !!n.checked : !1,
                        r = new Date;
                    if (!e) throw new Error("No Reftagger control panel found.");
                    r.setFullYear(r.getFullYear() + 10), J.cookie = "lbsRefTaggerPrefs=" + t + "." + a + ";expires=" + r.toGMTString() + ";path=/", s.location.reload()
                },
                Init: function(s, o) {
                    var r, i, c, d;
                    if (!D.Initialized || o) {
                        for (V = l.getSettingsOrDefaults(s, e.defaultSettings), J.addEventListener && J.addEventListener("touchstart", function(e) {
                                H = !0, !F.test(e.target.className) && n.isTooltipOpen() && n.reset()
                            }, !1), a.loadCss(I, V), f(), D.noSearchTags = {
                                textarea: !0,
                                input: !0
                            }, c = V.noSearchTagNames.length, r = 0; c > r; r++) d = V.noSearchTagNames[r], D.noSearchTags[d] = !0;
                        for (D.noSearchClasses = [], i = V.noSearchClassNames.length, r = 0; i > r; r++) D.noSearchClasses[V.noSearchClassNames[r].toLowerCase()] = !0;
                        x = new RegExp(t.referenceQuickTest, "i"), k = new RegExp(t.referenceRegExp, V.caseInsensitive ? "i" : ""), w = new RegExp(t.bookContinuationRegExp), E = new RegExp(t.chapterContinuationRegExp, V.caseInsensitive ? "i" : ""), M = new RegExp(t.chapterReferenceRegExp, "i"), R = t.singleChapterIndexes, D.Initialized = !0
                    }
                },
                tag: function(e) {
                    V.addLogosLink = V.addLogosLink || V.addLibronixDLSLink, D.Initialized || D.Init(), S(e || V.rootNode || P), A || (p(), A = !0)
                }
            };
        return D.init = D.Init, D.regexes = t, s.refTagger && s.refTagger.settings && s.refTagger.settings.tagAutomatically !== !1 && D.tag(), D
    }), s("main")
});