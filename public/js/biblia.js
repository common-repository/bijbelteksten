! function(e, t) {
    e.refTaggerCallback || (e.refTagger = t())
}(this, function() {
    var e, t, o;
    return function(n) {
        function r(e, t) {
            return y.call(e, t)
        }

        function s(e, t) {
            var o, n, r, s, i, a, l, c, d, h, u, f = t && t.split("/"),
                p = T.map,
                g = p && p["*"] || {};
            if (e && "." === e.charAt(0))
                if (t) {
                    for (f = f.slice(0, f.length - 1), e = e.split("/"), i = e.length - 1, T.nodeIdCompat && x.test(e[i]) && (e[i] = e[i].replace(x, "")), e = f.concat(e), d = 0; d < e.length; d += 1)
                        if (u = e[d], "." === u) e.splice(d, 1), d -= 1;
                        else if (".." === u) {
                        if (1 === d && (".." === e[2] || ".." === e[0])) break;
                        d > 0 && (e.splice(d - 1, 2), d -= 2)
                    }
                    e = e.join("/")
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if ((f || g) && p) {
                for (o = e.split("/"), d = o.length; d > 0; d -= 1) {
                    if (n = o.slice(0, d).join("/"), f)
                        for (h = f.length; h > 0; h -= 1)
                            if (r = p[f.slice(0, h).join("/")], r && (r = r[n])) {
                                s = r, a = d;
                                break
                            }
                    if (s) break;
                    !l && g && g[n] && (l = g[n], c = d)
                }!s && l && (s = l, a = c), s && (o.splice(0, a, s), e = o.join("/"))
            }
            return e
        }

        function i(e, t) {
            return function() {
                return f.apply(n, k.call(arguments, 0).concat([e, t]))
            }
        }

        function a(e) {
            return function(t) {
                return s(t, e)
            }
        }

        function l(e) {
            return function(t) {
                m[e] = t
            }
        }

        function c(e) {
            if (r(b, e)) {
                var t = b[e];
                delete b[e], v[e] = !0, u.apply(n, t)
            }
            if (!r(m, e) && !r(v, e)) throw new Error("No " + e);
            return m[e]
        }

        function d(e) {
            var t, o = e ? e.indexOf("!") : -1;
            return o > -1 && (t = e.substring(0, o), e = e.substring(o + 1, e.length)), [t, e]
        }

        function h(e) {
            return function() {
                return T && T.config && T.config[e] || {}
            }
        }
        var u, f, p, g, m = {},
            b = {},
            T = {},
            v = {},
            y = Object.prototype.hasOwnProperty,
            k = [].slice,
            x = /\.js$/;
        p = function(e, t) {
            var o, n = d(e),
                r = n[0];
            return e = n[1], r && (r = s(r, t), o = c(r)), r ? e = o && o.normalize ? o.normalize(e, a(t)) : s(e, t) : (e = s(e, t), n = d(e), r = n[0], e = n[1], r && (o = c(r))), {
                f: r ? r + "!" + e : e,
                n: e,
                pr: r,
                p: o
            }
        }, g = {
            require: function(e) {
                return i(e)
            },
            exports: function(e) {
                var t = m[e];
                return "undefined" != typeof t ? t : m[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: m[e],
                    config: h(e)
                }
            }
        }, u = function(e, t, o, s) {
            var a, d, h, u, f, T, y = [],
                k = typeof o;
            if (s = s || e, "undefined" === k || "function" === k) {
                for (t = !t.length && o.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
                    if (u = p(t[f], s), d = u.f, "require" === d) y[f] = g.require(e);
                    else if ("exports" === d) y[f] = g.exports(e), T = !0;
                else if ("module" === d) a = y[f] = g.module(e);
                else if (r(m, d) || r(b, d) || r(v, d)) y[f] = c(d);
                else {
                    if (!u.p) throw new Error(e + " missing " + d);
                    u.p.load(u.n, i(s, !0), l(d), {}), y[f] = m[d]
                }
                h = o ? o.apply(m[e], y) : void 0, e && (a && a.exports !== n && a.exports !== m[e] ? m[e] = a.exports : h === n && T || (m[e] = h))
            } else e && (m[e] = o)
        }, e = t = f = function(e, t, o, r, s) {
            if ("string" == typeof e) return g[e] ? g[e](t) : c(p(e, t).f);
            if (!e.splice) {
                if (T = e, T.deps && f(T.deps, T.callback), !t) return;
                t.splice ? (e = t, t = o, o = null) : e = n
            }
            return t = t || function() {}, "function" == typeof o && (o = r, r = s), r ? u(n, e, t, o) : setTimeout(function() {
                u(n, e, t, o)
            }, 4), f
        }, f.config = function(e) {
            return f(e)
        }, e._defined = m, o = function(e, t, o) {
            t.splice || (o = t, t = []), r(m, e) || r(b, e) || (b[e] = [e, t, o])
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
    }), o("nls/readerQueryParams", {}), o("passageManager", ["config", "versions", "nls/readerQueryParams"], function(e, t, o) {
        "use strict";

        function n(e, t) {
            return e + "-" + (t || "")
        }

        function r(e) {
            return e = (e || "").toLowerCase(), "default" === e && (e = ""), t.bibliaVersionAbbreviations[e] || e
        }

        function s(t) {
            return e.readers[t] || e.readers.biblia
        }

        function i(e, t, i, f) {
            var p, g, m, b, T;
            if (t = r(t), i = s(i), p = n(e, t), l.hasOwnProperty(p)) f && f(l[p]);
            else if (c.hasOwnProperty(p)) f && c[p].push(f);
            else {
                c[p] = f ? [f] : [], m = ["https:" === a.location.protocol ? "https:" : "http:", "//reftaggercdn.global.ssl.fastly.net", "/bible/", t ? encodeURIComponent(t) + "/" : "", encodeURIComponent(e), "?target=reftagger&callback=refTaggerCallback"];
                for (b in o) o.hasOwnProperty(b) && Array.prototype.push.apply(m, ["&", b, "=", encodeURIComponent(o[b])]);
                g = m.join(""), u[p] = setTimeout(function() {
                    var e, t = h[p],
                        o = c[p],
                        n = o.length;
                    for (t.parentNode.removeChild(t), e = 0; n > e; e++) o[e]();
                    delete c[p]
                }, 5e3), T = a.createElement("script"), T.src = g, d.insertBefore(T, d.firstChild), h[p] = T
            }
        }
        var a = window.document,
            l = {},
            c = {},
            d = a.getElementsByTagName("head")[0],
            h = {},
            u = {};
        return window.refTaggerCallback = function(e) {
            var t, o, r, s = e.requestedVersion,
                i = e.requestedReference,
                a = n(i, s),
                d = c[a];
            if (l[a] = e, d) {
                for (t = h[a], t.parentNode.removeChild(t), r = d.length, clearTimeout(u[a]), o = 0; r > o; o++) d[o](e);
                delete c[a]
            }
        }, {
            getPassage: i,
            getVersion: r,
            getBibleReader: s
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

        function t(t) {
            var o = e.document,
                n = o.body,
                r = {};
            return t ? "number" == typeof t.scrollLeft && (t.scrollLeft || t.scrollTop) ? (r.x = t.scrollLeft, r.y = t.scrollTop) : r = null : (r.x = e.pageXOffset || n.scrollLeft || o.documentElement.scrollLeft, r.y = e.pageYOffset || n.scrollTop || o.documentElement.scrollTop), r
        }

        function o(e) {
            var t = e,
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
                for (; t && t !== l && t !== a.documentElement;) n.y += t.scrollTop || 0, n.x += t.scrollLeft || 0, t = t.parentNode;
                o.x -= n.x, o.y -= n.y
            }
            return o
        }

        function n() {
            var o = t(),
                n = {
                    width: e.innerWidth || l.clientWidth || a.documentElement.clientWidth,
                    height: e.innerHeight || l.clientHeight || a.documentElement.clientHeight
                };
            return o && (n.x = o.x, n.y = o.y), n
        }

        function r(e, t) {
            t.parentNode.insertBefore(a.createTextNode(e), t)
        }

        function s(e, t) {
            var o, n = a.createElement(e);
            t = t || {};
            for (o in t) n[o] = t[o];
            return n
        }

        function i(e, t) {
            var o;
            t = t || {};
            for (o in t) "undefined" != typeof e.style[o] && (e.style[o] = t[o]);
            return e
        }
        var a = e.document,
            l = a.body;
        return {
            applyStyles: i,
            createElement: s,
            getElementAbsoluteOffset: o,
            getElementOffset: t,
            getWindowSize: n,
            insertTextNode: r
        }
    }), o("nls/resourceStrings", {
        tooltip: {
            loading: "Loading...",
            more: "more &raquo;",
            brandMessage: "Powered by Faithlife / Logos Reftagger",
            // brandMessage: "",
            errorHeader: "Sorry",
            errorBody: "This reference could not be loaded at this time.",
            shareOn: "Share on "
        },
        logosLinkTitle: "Open in Logos Bible Software (if available)",
        normalizeReference: function(e) {
            return e.replace(/(\s|\r?\n)+/g, " ").replace(/:/g, ".").replace(/^(\d+)\.+/, "$1").replace("brief", "")
        }
    }), o("libs/text", ["module"], function(e) {
        "use strict";
        var o, n, r, s, i = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            c = "undefined" != typeof location && location.href,
            d = c && location.protocol && location.protocol.replace(/\:/, ""),
            h = c && location.hostname,
            u = c && (location.port || void 0),
            f = {},
            p = e.config && e.config() || {};
        return o = {
            version: "2.0.7",
            strip: function(e) {
                if (e) {
                    e = e.replace(a, "");
                    var t = e.match(l);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: p.createXhr || function() {
                var e, t, o;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (t = 0; 3 > t; t += 1) {
                        o = i[t];
                        try {
                            e = new ActiveXObject(o)
                        } catch (n) {}
                        if (e) {
                            i = [o];
                            break
                        }
                    }
                return e
            },
            parseName: function(e) {
                var t, o, n, r = !1,
                    s = e.indexOf("."),
                    i = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== s && (!i || s > 1) ? (t = e.substring(0, s), o = e.substring(s + 1, e.length)) : t = e, n = o || t, s = n.indexOf("!"), -1 !== s && (r = "strip" === n.substring(s + 1), n = n.substring(0, s), o ? o = n : t = n), {
                    moduleName: t,
                    ext: o,
                    strip: r
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, t, n, r) {
                var s, i, a, l = o.xdRegExp.exec(e);
                return l ? (s = l[2], i = l[3], i = i.split(":"), a = i[1], i = i[0], !(s && s !== t || i && i.toLowerCase() !== n.toLowerCase() || (a || i) && a !== r)) : !0
            },
            finishLoad: function(e, t, n, r) {
                n = t ? o.strip(n) : n, p.isBuild && (f[e] = n), r(n)
            },
            load: function(e, t, n, r) {
                if (r.isBuild && !r.inlineText) return void n();
                p.isBuild = r.isBuild;
                var s = o.parseName(e),
                    i = s.moduleName + (s.ext ? "." + s.ext : ""),
                    a = t.toUrl(i),
                    l = p.useXhr || o.useXhr;
                !c || l(a, d, h, u) ? o.get(a, function(t) {
                    o.finishLoad(e, s.strip, t, n)
                }, function(e) {
                    n.error && n.error(e)
                }) : t([i], function(e) {
                    o.finishLoad(s.moduleName + "." + s.ext, s.strip, e, n)
                })
            },
            write: function(e, t, n, r) {
                if (f.hasOwnProperty(t)) {
                    var s = o.jsEscape(f[t]);
                    n.asModule(e + "!" + t, "define(function () { return '" + s + "';});\n")
                }
            },
            writeFile: function(e, t, n, r, s) {
                var i = o.parseName(t),
                    a = i.ext ? "." + i.ext : "",
                    l = i.moduleName + a,
                    c = n.toUrl(i.moduleName + a) + ".js";
                o.load(l, n, function(t) {
                    var n = function(e) {
                        return r(c, e)
                    };
                    n.asModule = function(e, t) {
                        return r.asModule(e, c, t)
                    }, o.write(e, l, n, s)
                }, s)
            }
        }, "node" === p.env || !p.env && "undefined" != typeof process && process.versions && process.versions.node ? (n = t.nodeRequire("fs"), o.get = function(e, t, o) {
            try {
                var r = n.readFileSync(e, "utf8");
                0 === r.indexOf("\ufeff") && (r = r.substring(1)), t(r)
            } catch (s) {
                o(s)
            }
        }) : "xhr" === p.env || !p.env && o.createXhr() ? o.get = function(e, t, n, r) {
            var s, i = o.createXhr();
            if (i.open("GET", e, !0), r)
                for (s in r) r.hasOwnProperty(s) && i.setRequestHeader(s.toLowerCase(), r[s]);
            p.onXhr && p.onXhr(i, e), i.onreadystatechange = function(o) {
                var r, s;
                4 === i.readyState && (r = i.status, r > 399 && 600 > r ? (s = new Error(e + " HTTP status: " + r), s.xhr = i, n(s)) : t(i.responseText), p.onXhrComplete && p.onXhrComplete(i, e))
            }, i.send(null)
        } : "rhino" === p.env || !p.env && "undefined" != typeof Packages && "undefined" != typeof java ? o.get = function(e, t) {
            var o, n, r = "utf-8",
                s = new java.io.File(e),
                i = java.lang.System.getProperty("line.separator"),
                a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), r)),
                l = "";
            try {
                for (o = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && o.append(n); null !== (n = a.readLine());) o.append(i), o.append(n);
                l = String(o.toString())
            } finally {
                a.close()
            }
            t(l)
        } : ("xpconnect" === p.env || !p.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o.get = function(e, t) {
            var o, n, i = {},
                a = new FileUtils.File(e);
            try {
                o = r["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), o.init(a, 1, 0, !1), n = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), n.init(o, "utf-8", o.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), n.readString(o.available(), i), n.close(), o.close(), t(i.value)
            } catch (l) {
                throw new Error((a && a.path || "") + ": " + l)
            }
        }), o
    }), o("libs/text!util/tooltipTemplate", [], function() {
        return '<div class="{{tooltipContainer}}">\n	<div class="{{tooltipHeader}}">{{reference}} {{version}} {{socialContent}}</div>\n	<div class="{{tooltipBody}}">{{content}}</div>\n	<div class="{{tooltipFooter}}">\n		<div class="{{tooltipBrandLink}}">\n			<a href="{{brandSite}}" target="_blank">{{brandMessage}}</a>\n		</div>\n		{{footer}}\n	</div>\n</div>'
    }), o("tooltips", ["config", "root", "util/classNames", "util/dom", "passageManager", "nls/resourceStrings", "nls/readerQueryParams", "libs/text!util/tooltipTemplate"], function(e, t, o, n, r, s, i, a) {
        "use strict";

        function l(e, t, o, n, r) {
            var s = {
                x: t.x + o.tooltipOffsetX,
                y: t.y - r
            };
            return s.x += n, s.x > e.width + e.x - o.tooltipEdgePadding && (s.x = e.width + e.x - o.tooltipOffsetX - o.tooltipEdgePadding), s.x < 0 && (s.x = 0), s.y < e.y && (t.y + r + o.tooltipOffsetY > e.height + e.y ? s.y = e.y : s.y = t.y + o.tooltipOffsetY), s.x -= n + 3, s.x < 0 && (s.x = 0), s
        }

        function c(e, t, o) {
            var n, s, a = r.getBibleReader(o) + "/bible/",
                l = [];
            for (s in i) i.hasOwnProperty(s) && l.push(s + "=" + i[s]);
            return t = r.getVersion(t), n = [a, t ? t + "/" : "", e.replace(/:/g, ".")], l.length && n.push("?" + l.join("&")), encodeURI(n.join("").replace(/(\s|\r?\n)+/g, " "))
        }

        function d(e) {
            return k.replace("{{reference}}", e.reference || "").replace("{{version}}", e.version || "").replace("{{content}}", e.content || "").replace("{{footer}}", e.footer || "").replace("{{socialContent}}", e.socialContent || "")
        }

        function h() {
            return null !== y
        }

        function u(e, t) {
            var r = n.createElement("div", {
                className: o.classNames.tooltip + " " + e.tooltipStyle + " " + (e.includeDropShadow ? o.classNames.tooltipDropShadow : "") + " " + (e.includeRoundedCorners ? o.classNames.tooltipRoundedCorners : ""),
                onmouseover: b,
                onmouseout: g
            });
            return r.innerHTML = d(t), r
        }

        function f(r, i, a) {
            function l() {
                var o, i, l, c = a.socialSharing.length;
                for (i = 0; c > i; i++) l = a.socialSharing[i], e.socialSharing.hasOwnProperty(l) && (o = n.createElement("a", {
                    className: "rtTooltipSocialIcon",
                    id: e.socialSharing[l].id,
                    href: e.socialSharing[l].link + encodeURIComponent(r.url),
                    title: s.tooltip.shareOn + e.socialSharing[l].title,
                    target: "_blank",
                    innerHTML: " "
                }), a.enableSharingPopups && (o.setAttribute("data-window-settings", e.socialSharing[l].windowSettings), o.addEventListener && o.addEventListener("click", function() {
                    t.open(this.href, "", this.getAttribute("data-window-settings"))
                }, !1)), d.appendChild(o));
                return d.outerHTML
            }
            var d = n.createElement("div", {
                    className: "rtTooltipSocial"
                }),
                h = c(i.reference, i.version, i.bibleReader),
                u = {
                    reference: "",
                    version: "",
                    content: "",
                    footer: "",
                    socialContent: ""
                };
            return r ? (u.content = r.content, u.footer = '<a class="' + o.classNames.tooltipMoreLink + '" href="' + h + '" target="_blank">' + s.tooltip.more + "</a>", u.reference = r.reference, u.version = "(" + r.version + ")", a.socialSharing && a.socialSharing.length && (u.socialContent = l())) : (u.content = "<p>" + s.tooltip.errorBody + "</p>", u.reference = s.tooltip.errorHeader), u
        }

        function p(e, o, i) {
            var a, c, h, p, v = {
                tooltipOffsetX: 15,
                tooltipOffsetY: 25,
                tooltipEdgePadding: 10,
                elementLocation: n.getElementAbsoluteOffset(e),
                windowSize: n.getWindowSize()
            };
            if (i)
                for (a in v) i.hasOwnProperty(a) && (v[a] = i[a]);
            y && m(), c = u(i, {
                reference: s.tooltip.loading
            }), c.onmouseover = b, c.onmouseout = g, c.addEventListener && c.addEventListener("touchstart", function(e) {
                e.stopPropagation()
            }, !1), p = c.offsetHeight, t.document.body.appendChild(c), h = l(v.windowSize, v.elementLocation, v, c.offsetWidth, c.offsetHeight), c = n.applyStyles(c, {
                position: "absolute",
                top: h.y + "px",
                left: h.x + "px",
                zIndex: "9999999"
            }), r.getPassage(o.reference, o.version, o.bibleReader, function(e) {
                var t = f(e, o, i);
                c.innerHTML = d(t), c.offsetHeight > p && (h = l(v.windowSize, v.elementLocation, v, c.offsetWidth, c.offsetHeight), c = n.applyStyles(c, {
                    top: h.y + "px",
                    left: h.x + "px"
                }))
            }), y = c, T = e
        }

        function g() {
            v = setTimeout(function() {
                y && y.parentNode && y.parentNode.removeChild(y), y = null, T = null
            }, e.removeTooltipDelay)
        }

        function m() {
            t.clearTimeout(v), y && y.parentNode && y.parentNode.removeChild(y), y = null, T = null
        }

        function b() {
            t.clearTimeout(v)
        }
        var T, v = null,
            y = null,
            k = a.replace("{{tooltipContainer}}", o.classNames.tooltipContainer).replace("{{tooltipHeader}}", o.classNames.tooltipHeader).replace("{{tooltipBody}}", o.classNames.tooltipBody).replace("{{tooltipFooter}}", o.classNames.tooltipFooter).replace("{{tooltipBrandLink}}", o.classNames.tooltipBrandLink).replace("{{tooltipMoreLink}}", o.classNames.tooltipMoreLink).replace("{{brandMessage}}", s.tooltip.brandMessage).replace("{{brandSite}}", e.brandSite);
        return {
            create: p,
            remove: g,
            cancelRemove: b,
            reset: m,
            isTooltipOpen: h,
            generateLink: c,
            getTooltipDiv: u,
            getTooltipContentsFromPassage: f
        }
    }), o("nls/continuationPhrases", {
        phrases: ["and", "or", "&", "&amp;"]
    }), o("nls/referenceRegexesCore", {
        seriesBookRegExp: "(?:(C(?:h(?:r(?:on(?:icles)?)?)?|o(?:r(?:inthians)?)?)|E(?:s(?:d(?:r(?:as)?)?)?|z(?:r(?:a)?)?)|J(?:hn|n|o(?:h(?:n)?)?)?|K(?:efa|g(?:dms|s)|i(?:n(?:g(?:doms|s))?)?)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|nd\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|o(?:r(?:inthians)?)?)|Es(?:d(?:r(?:as)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?|K(?:gs|i(?:n(?:gs)?)?)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|P(?:e(?:t(?:er)?)?|t)?|S(?:a(?:m(?:uel)?)?|m)?|T(?:h(?:es(?:s(?:alonians)?)?)?|i(?:m(?:othy)?)?))|P(?:e(?:t(?:er)?)?|t)?|rd\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)|S(?:a(?:m(?:uel)?)?|m)?|st\\s(?:C(?:h(?:r(?:on(?:icles)?)?)?|o(?:r(?:inthians)?)?)|Es(?:d(?:r(?:as)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?|K(?:gs|i(?:n(?:gs)?)?)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|P(?:e(?:t(?:er)?)?|t)?|S(?:a(?:m(?:uel)?)?|m)?|T(?:h(?:es(?:s(?:alonians)?)?)?|i(?:m(?:othy)?)?))|T(?:h(?:es(?:s(?:alonians)?)?)?|i(?:m(?:othy)?)?)|th\\s(?:Ez(?:r(?:a)?)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)|Yochanan))",
        singleChapterBookRegExp: "(?:(‘Ovadyah|Ob(?:ad(?:iah)?)?|'Ovadyah|ʿOvadyah)|(Azariah|Pr(?:\\sAz|ayer\\sof\\sAzariah|Azar)|S(?:gThree|ong(?:\\s(?:of\\s(?:the\\sThree\\sHoly\\sChildren|Thr(?:ee(?:\\s(?:Children|Jews|Youths))?)?)|Thr)|Thr))|The\\sSong\\sof\\s(?:the\\sThree\\sHoly\\sChildren|Three\\s(?:Jews|Youths)))|(Sus(?:anna)?)|(Bel(?:\\sand\\sthe\\sDragon)?)|(P(?:Ma|r(?:\\s(?:Man|of\\sMan)|ayer\\sof\\sManasse(?:h|s)|Man)))|(Add(?:\\sPs(?:alm)?|itional\\sPsalm)|Ps(?:\\s151|151|a(?:\\s151|151|lm(?:\\s151|151|s(?:\\s151|151)))|lm(?:\\s151|151)|m(?:\\s151|151)|s(?:\\s151|151))|ψ(?:\\s151|151))|(Ep(?:\\sLao(?:d)?|ist(?:\\sLaodiceans|le\\s(?:Laodiceans|to\\s(?:Laodiceans|the\\sLaodiceans)))|Lao)|Laod(?:iceans)?)|(P(?:h(?:ile(?:m(?:on)?)?|lm|m)|m))|(2(?:\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|Yochanan)|J(?:hn|n|o(?:h(?:n)?)?)?|nd\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|II(?:\\sJ(?:hn|n|o(?:h(?:n)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?)|Second\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|(3(?:\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|Yochanan)|J(?:hn|n|o(?:h(?:n)?)?)?|rd\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|III(?:\\sJ(?:hn|n|o(?:h(?:n)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?)|Third\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|(J(?:d|ud(?:e)?)|Y(?:’hudah|'hudah|ʾhudah)))",
        standardBookRegExp: "((B(?:’resheet|'resheet|ʾresheet)|G(?:e(?:n(?:esis)?)?|n))|(Ex(?:o(?:d(?:us)?)?)?|Sh(?:’mot|'mot|ʾmot))|(L(?:e(?:v(?:iticus)?)?|v)|Vayikra)|(B(?:’midbar|'midbar|ʾmidbar)|N(?:b|m|u(?:m(?:b(?:ers)?)?)?))|(D(?:’varim|e(?:ut(?:eronomy)?)?|t|'varim|ʾvarim))|(J(?:os(?:h(?:ua)?)?|sh)|Y(?:’hoshua|'hoshua|ʾhoshua))|(J(?:dg(?:s)?|g|udg(?:es)?)|Shof(?:’tim|'tim|ʾtim))|(R(?:th|u(?:t(?:h)?)?))|(1(?:\\s(?:K(?:gdms|ingdoms)|S(?:a(?:m(?:uel)?)?|m)?)|S(?:a(?:m(?:uel)?)?|m)?|st\\sS(?:a(?:m(?:uel)?)?|m)?)|First\\s(?:Kingdoms|S(?:a(?:m(?:uel)?)?|m)?)|I(?:\\s(?:Kingdoms|S(?:a(?:m(?:uel)?)?|m)?)|S(?:am(?:uel)?|m))|Sh(?:’mu’el\\sAlef|'mu'el\\sAlef|ʾmuʾel\\sAlef))|(2(?:\\s(?:K(?:gdms|ingdoms)|S(?:a(?:m(?:uel)?)?|m)?)|nd\\sS(?:a(?:m(?:uel)?)?|m)?|S(?:a(?:m(?:uel)?)?|m)?)|II(?:\\s(?:Kingdoms|S(?:a(?:m(?:uel)?)?|m)?)|S(?:a(?:m(?:uel)?)?|m)?)|S(?:econd\\s(?:Kingdoms|S(?:a(?:m(?:uel)?)?|m)?)|h(?:’mu’el\\sBet|'mu'el\\sBet|ʾmuʾel\\sBet)))|(1(?:\\sK(?:gs|i(?:n(?:gs)?)?)?|K(?:gs|i(?:n(?:gs)?)?)?|st\\sK(?:gs|i(?:n(?:gs)?)?)?)|3\\sK(?:gdms|ingdoms)|First\\sK(?:gs|i(?:n(?:gs)?)?)?|I(?:\\sK(?:gs|i(?:n(?:gs)?)?)?|II\\sKingdoms|K(?:gs|i(?:n(?:gs)?)?)?)|M(?:’lakhim\\sAlef|'lakhim\\sAlef|ʾlakhim\\sAlef)|Third\\sKingdoms)|(2(?:\\sK(?:gs|i(?:n(?:gs)?)?)?|K(?:gs|i(?:n(?:gs)?)?)?|nd\\sK(?:gs|i(?:n(?:gs)?)?)?)|4\\sK(?:gdms|ingdoms)|Fourth\\sKingdoms|I(?:I(?:\\sK(?:gs|i(?:n(?:gs)?)?)?|II\\sKingdoms|K(?:gs|i(?:n(?:gs)?)?)?)|V\\sKingdoms)|M(?:’lakhim\\sBet|'lakhim\\sBet|ʾlakhim\\sBet)|Second\\sK(?:gs|i(?:n(?:gs)?)?)?)|(1(?:\\sCh(?:r(?:on(?:icles)?)?)?|Ch(?:r(?:on(?:icles)?)?)?|st\\sCh(?:r(?:on(?:icles)?)?)?)|Divrei-HaYamim\\sAlef|First\\sCh(?:r(?:on(?:icles)?)?)?|I(?:\\sCh(?:r(?:on(?:icles)?)?)?|Ch(?:r(?:on(?:icles)?)?)?))|(2(?:\\sCh(?:r(?:on(?:icles)?)?)?|Ch(?:r(?:on(?:icles)?)?)?|nd\\sCh(?:r(?:on(?:icles)?)?)?)|Divrei-HaYamim\\sBet|II(?:\\sCh(?:r(?:on(?:icles)?)?)?|Ch(?:r(?:on(?:icles)?)?)?)|Second\\sCh(?:r(?:on(?:icles)?)?)?)|(‘Ezra|Ez(?:r(?:a)?)?|'Ezra|ʿEzra)|(Ne(?:chemyah|h(?:em(?:iah)?)?)?)|(Es(?:t(?:er|h(?:er)?)?)?)|(Iyov|J(?:b|ob))|(Ps(?:a(?:lm(?:s)?)?|lm|m|s)?|Tehillim|ψ)|(Mishlei|Pr(?:o(?:v(?:erbs)?)?|v)?)|(Ec(?:c(?:l(?:es(?:iastes)?)?)?)?|Kohelet|Qoh(?:eleth)?)|(Cant(?:\\.|icle(?:\\sof\\sCanticles|s))?|S(?:hir-HaShirim|o(?:ng(?:\\sof\\sSo(?:l(?:omon)?|ngs))?)?|OS|S))|(Is(?:a(?:i(?:ah)?)?)?|Yesha(?:‘yahu|'yahu|ʿyahu))|(J(?:e(?:r(?:em(?:iah)?)?)?|r)|Yirmeyahu)|(Eikhah|La(?:m(?:entations)?)?)|(Ez(?:e(?:k(?:iel)?)?|k)|Yechezk(?:’el|'el|ʾel))|(D(?:a(?:n(?:i(?:’el|el|'el|ʾel))?)?|n))|(Ho(?:s(?:ea|hea)?)?)|(J(?:l|oe(?:l)?)|Yo(?:’el|'el|ʾel))|(‘Amos|Am(?:os)?|'Amos|ʿAmos)|(‘Ovadyah|Ob(?:ad(?:iah)?)?|'Ovadyah|ʿOvadyah)|(J(?:nh|on(?:ah)?)|Yonah)|(M(?:c|i(?:c(?:ah)?|khah)))|(Na(?:chum|h(?:um)?)?)|(H(?:a(?:b(?:akkuk)?|vakuk)|b))|(Tz(?:’fanyah|'fanyah|ʾfanyah)|Z(?:ep(?:h(?:aniah)?)?|p))|(H(?:ag(?:ai|gai)?|g))|(Z(?:’kharyah|c|ec(?:h(?:ariah)?)?|'kharyah|ʾkharyah))|(M(?:al(?:’akhi|achi|'akhi|ʾakhi)?|l))|(T(?:b|ob(?:it)?))|(J(?:dt(?:h)?|th|udith))|(A(?:dd(?:\\sEs(?:th)?|\\.\\sEs(?:th)?|Esth|itions\\sto\\sEsther)|Es)|G(?:k(?:\\sEs(?:th)?|Es)|reek\\sEsther)|Rest\\sof\\sEsther|The\\sRest\\sof\\sEsther)|(W(?:is(?:d(?:\\sof\\sSol|\\.\\sof\\sSol|om(?:\\sof\\sSolomon)?))?|s))|(Ben\\sSira(?:h)?|Eccl(?:esiasticus|us)|Sir(?:a(?:ch|h)?)?|Wisdom\\sof\\sBen\\sSira(?:h)?)|(Bar(?:uch)?)|(Ep(?:\\sJer|ist(?:\\sJer|le\\s(?:Jeremiah|of\\sJeremiah))|Jer)|L(?:et(?:\\sJer|Jer|ter\\sof\\sJeremiah)|Je|tr\\sJer))|(Azariah|Pr(?:\\sAz|ayer\\sof\\sAzariah|Azar)|S(?:gThree|ong(?:\\s(?:of\\s(?:the\\sThree\\sHoly\\sChildren|Thr(?:ee(?:\\s(?:Children|Jews|Youths))?)?)|Thr)|Thr))|The\\sSong\\sof\\s(?:the\\sThree\\sHoly\\sChildren|Three\\s(?:Jews|Youths)))|(Sus(?:anna)?)|(Bel(?:\\sand\\sthe\\sDragon)?)|(1(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|st\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|First\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|I(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?))|(2(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|nd\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|II(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)|Second\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|(1(?:\\sEs(?:d(?:r(?:as)?)?)?|Es(?:d(?:r(?:as)?)?)?|st\\sEs(?:d(?:r(?:as)?)?)?)|First\\sEs(?:d(?:r(?:as)?)?)?|I(?:\\sEs(?:d(?:r(?:as)?)?)?|Es(?:d(?:r(?:as)?)?)?))|(P(?:Ma|r(?:\\s(?:Man|of\\sMan)|ayer\\sof\\sManasse(?:h|s)|Man)))|(Add(?:\\sPs(?:alm)?|itional\\sPsalm)|Ps(?:\\s151|151|a(?:\\s151|151|lm(?:\\s151|151|s(?:\\s151|151)))|lm(?:\\s151|151)|m(?:\\s151|151)|s(?:\\s151|151))|ψ(?:\\s151|151))|(3(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|rd\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|III(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)|Third\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|(2(?:\\sEs(?:d(?:r(?:as)?)?)?|Es(?:d(?:r(?:as)?)?)?|nd\\sEs(?:d(?:r(?:as)?)?)?)|4(?:\\sEz(?:r(?:a)?)?|Ez(?:r(?:a)?)?|th\\sEz(?:r(?:a)?)?)|Fourth\\sEz(?:r(?:a)?)?|I(?:I(?:\\sEs(?:d(?:r(?:as)?)?)?|Es(?:d(?:r(?:as)?)?)?|II(?:\\sEz(?:r(?:a)?)?|Ez(?:r(?:a)?)?))|V(?:\\sEz(?:r(?:a)?)?|Ez(?:r(?:a)?)?))|Second\\sEs(?:d(?:r(?:as)?)?)?)|(4(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?|th\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?)|Fourth\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|I(?:III(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)|V(?:\\sM(?:a(?:c(?:c(?:abees)?)?)?|c)?|M(?:a(?:c(?:c(?:abees)?)?)?|c)?)))|(Ode(?:s)?)|(Ps(?:\\sSol(?:\\.|omon)?|\\.\\sSol(?:\\.|omon)?|alms\\sof\\sSol(?:\\.|omon)?|s(?:\\sSol(?:\\.|omon)?|\\.\\sSol(?:omon)?|Sol)|Sol)|The\\sPsalms\\sof\\sSolomon)|(Ep(?:\\sLao(?:d)?|ist(?:\\sLaodiceans|le\\s(?:Laodiceans|to\\s(?:Laodiceans|the\\sLaodiceans)))|Lao)|Laod(?:iceans)?)|(M(?:at(?:\\.|t(?:h(?:ew)?|ityahu)?)?|t))|(M(?:ar(?:k)?|k|r(?:k)?))|(L(?:k(?:e)?|u(?:k(?:e)?)?))|(J(?:hn|n(?:o)?|oh(?:n)?)|Yochanan)|(Ac(?:t(?:s)?)?)|(R(?:m|o(?:m(?:ans)?)?))|(1(?:\\sCo(?:r(?:inthians)?)?|Co(?:r(?:inthians)?)?|st\\sCo(?:r(?:inthians)?)?)|First\\sCo(?:r(?:inthians)?)?|I(?:\\sCo(?:r(?:inthians)?)?|Co(?:r(?:inthians)?)?))|(2(?:\\sCo(?:r(?:inthians)?)?|Co(?:r(?:inthians)?)?|nd\\sCo(?:r(?:inthians)?)?)|II(?:\\sCo(?:r(?:inthians)?)?|Co(?:r(?:inthians)?)?)|Second\\sCo(?:r(?:inthians)?)?)|(Ga(?:l(?:atians)?)?)|(Ep(?:h(?:es(?:ians)?)?)?)|(P(?:h(?:il(?:ippians)?|p)|p))|(Co(?:l(?:ossians)?)?)|(1(?:\\sTh(?:es(?:s(?:alonians)?)?)?|st\\sTh(?:es(?:s(?:alonians)?)?)?|Th(?:es(?:s(?:alonians)?)?)?)|First\\sTh(?:es(?:s(?:alonians)?)?)?|I(?:\\sTh(?:es(?:s(?:alonians)?)?)?|Th(?:es(?:s(?:alonians)?)?)?))|(2(?:\\sTh(?:es(?:s(?:alonians)?)?)?|nd\\sTh(?:es(?:s(?:alonians)?)?)?|Th(?:es(?:s(?:alonians)?)?)?)|II(?:\\sTh(?:es(?:s(?:alonians)?)?)?|Th(?:es(?:s(?:alonians)?)?)?)|Second\\sTh(?:es(?:s(?:alonians)?)?)?)|(1(?:\\sTi(?:m(?:othy)?)?|st\\sTi(?:m(?:othy)?)?|Ti(?:m(?:othy)?)?)|First\\sTi(?:m(?:othy)?)?|I(?:\\sTi(?:m(?:othy)?)?|Ti(?:m(?:othy)?)?))|(2(?:\\sTi(?:m(?:othy)?)?|nd\\sTi(?:m(?:othy)?)?|Ti(?:m(?:othy)?)?)|II(?:\\sTi(?:m(?:othy)?)?|Ti(?:m(?:othy)?)?)|Second\\sTi(?:m(?:othy)?)?)|(T(?:i(?:t(?:us)?)?|t))|(P(?:h(?:ile(?:m(?:on)?)?|lm|m)|m))|(He(?:b(?:r(?:ews)?)?)?|Messianic\\sJews)|(J(?:a(?:m(?:es)?|s)|m)|Ya(?:‘akov|'akov|ʿakov))|(1(?:\\s(?:Kefa|P(?:e(?:t(?:er)?)?|t)?)|P(?:e(?:t(?:er)?)?|t)?|st\\sP(?:e(?:t(?:er)?)?|t)?)|First\\sP(?:e(?:t(?:er)?)?|t)?|I(?:\\sP(?:e(?:t(?:er)?)?|t)?|P(?:e(?:t(?:er)?)?|t)?))|(2(?:\\s(?:Kefa|P(?:e(?:t(?:er)?)?|t)?)|nd\\sP(?:e(?:t(?:er)?)?|t)?|P(?:e(?:t(?:er)?)?|t)?)|II(?:\\sP(?:e(?:t(?:er)?)?|t)?|P(?:e(?:t(?:er)?)?|t)?)|Second\\sP(?:e(?:t(?:er)?)?|t)?)|(1(?:\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|Yochanan)|J(?:hn|n|o(?:h(?:n)?)?)?|st\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|First\\sJ(?:hn|n|o(?:h(?:n)?)?)?|I(?:\\sJ(?:hn|n|o(?:h(?:n)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?))|(2(?:\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|Yochanan)|J(?:hn|n|o(?:h(?:n)?)?)?|nd\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|II(?:\\sJ(?:hn|n|o(?:h(?:n)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?)|Second\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|(3(?:\\s(?:J(?:hn|n|o(?:h(?:n)?)?)?|Yochanan)|J(?:hn|n|o(?:h(?:n)?)?)?|rd\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|III(?:\\sJ(?:hn|n|o(?:h(?:n)?)?)?|J(?:hn|n|o(?:h(?:n)?)?)?)|Third\\sJ(?:hn|n|o(?:h(?:n)?)?)?)|(J(?:d|ud(?:e)?)|Y(?:’hudah|'hudah|ʾhudah))|(R(?:e(?:v(?:elation)?)?|v)|The\\sRevelation))",
        abbreviations: ["Gen", "Exod", "Lev", "Num", "Deut", "Josh", "Judg", "Ruth", "1 Sam", "2 Sam", "1 Kings", "2 Kings", "1 Chron", "2 Chron", "Ezra", "Neh", "Esther", "Job", "Ps", "Prov", "Eccles", "Song", "Isa", "Jer", "Lam", "Ezek", "Dan", "Hos", "Joel", "Amos", "Obad", "Jonah", "Micah", "Nah", "Hab", "Zeph", "Haggai", "Zech", "Mal", "Tobit", "Jdth", "Gk Esth", "Wis", "Sirach", "Baruch", "Let Jer", "Song of Three", "Susanna", "Bel", "1 Macc", "2 Macc", "1 Esdr", "Pr of Man", "Ps 151", "3 Macc", "2 Esdr", "4 Macc", "Odes", "Ps Solomon", "Laodiceans", "Matt", "Mark", "Luke", "John", "Acts", "Rom", "1 Cor", "2 Cor", "Gal", "Eph", "Phil", "Col", "1 Thess", "2 Thess", "1 Tim", "2 Tim", "Titus", "Philem", "Heb", "James", "1 Pet", "2 Pet", "1 John", "2 John", "3 John", "Jude", "Rev"],
        singleChapterIndexes: [30, 46, 47, 48, 52, 53, 59, 77, 83, 84, 85]
    }), o("referenceRegexes", ["versions", "nls/continuationPhrases", "nls/referenceRegexesCore"], function(e, t, o) {
        return {
            chapterReferenceRegExp: "\\b\\s\\d+(?![\\.:])\\b",
            referenceQuickTest: "((\\d{1,3})(?:(?:\\s?\\:\\s?|\\.)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?))?)|" + o.singleChapterBookRegExp,
            referenceRegExp: "(\\W|^)(" + o.standardBookRegExp + "(?:\\.?\\s*(\\d{1,3})(?:(?:\\s?\\:\\s?|\\.)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?))?(\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?((?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?(?!\\s*" + o.seriesBookRegExp + "(?:\\W)))?)|" + o.singleChapterBookRegExp + "\\s*\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)([,.]?\\s?(?:" + e.supportedVersions.join("|") + ")|[,.]?\\s?[(](?:" + e.supportedVersions.join("|") + ")[)])?",
            bookContinuationRegExp: "^((?:(?:[,;\\.]+)?\\s?(?:" + t.phrases.join("|") + ")?)\\s*(?:(?:(?:cf|Cf|CF|cp|Cp|CP)[.,]?\\s?(?:v(?:v|ss?)?[.]?)?)[.,]?\\s*)?)((\\d{1,3})(?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:\\s?\\:\\s?|\\.)\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)?)",
            chapterContinuationRegExp: "^((?:(?:[,;\\.]+)?\\s?(?:" + t.phrases.join("|") + ")?)\\s*(?:(?:(?:cf|Cf|CF|cp|Cp|CP)[.,]?\\s?(?:v(?:v|ss?)?[.]?)?)[.,]?\\s*)?)(\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?(?:\\s?(?:-|--|\\u2013|\\u2014)\\s?\\d{1,3}(?:(?:[a-z]|ff)(?=\\W|$))?)?)(?!\\s*" + o.seriesBookRegExp + "(?=\\W|\\d|$))",
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
            function t(e) {
                var t = e.toString(16);
                return ("0" + t).substr(t.length - 1, 2)
            }
            return e ? "#" + t(e.r) + t(e.g) + t(e.b) : null
        },
        hslToRgb: function(e) {
            function t(e, t, o) {
                return 0 > o && (o += 1), o > 1 && (o -= 1), 1 / 6 > o ? e + 6 * (t - e) * o : .5 > o ? t : 2 / 3 > o ? e + (t - e) * (2 / 3 - o) * 6 : e
            }
            var o, n, r, s, i, a = e.h,
                l = e.s,
                c = e.l;
            return 0 === l ? o = n = r = c : (s = .5 > c ? c * (1 + l) : c + l - c * l, i = 2 * c - s, o = t(i, s, a + 1 / 3), n = t(i, s, a), r = t(i, s, a - 1 / 3)), {
                r: Math.round(255 * o),
                g: Math.round(255 * n),
                b: Math.round(255 * r)
            }
        },
        rgbToHsl: function(e) {
            var t, o, n = e.r / 255,
                r = e.g / 255,
                s = e.b / 255,
                i = Math.max(n, r, s),
                a = Math.min(n, r, s),
                l = (i + a) / 2;
            if (i == a) t = o = 0;
            else {
                var c = i - a;
                switch (o = l > .5 ? c / (2 - i - a) : c / (i + a), i) {
                    case n:
                        t = (r - s) / c + (s > r ? 6 : 0);
                        break;
                    case r:
                        t = (s - n) / c + 2;
                        break;
                    case s:
                        t = (n - r) / c + 4
                }
                t /= 6
            }
            return {
                h: t,
                s: o,
                l: l
            }
        }
    }), o("libs/text!css/default", [], function() {
        return ".rtTooltipHeader{font-family:Arial,Helvetica,serif}.rtTooltipBody{font-family:Helvetica,Arial,serif}.rtTooltipBody .ch-ref{font-weight:700}.rtTooltipFooter{font-family:Helvetica,Arial,serif}.rtTooltipDropShadow .rtContainer{-webkit-box-shadow:0 0 6px 0 #444;-moz-box-shadow:0 0 6px 0 #444;box-shadow:0 0 6px 0 #444}.rtTooltipRoundedCorners .rtContainer{-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;overflow:hidden}.rtTooltipFooter a{font-family:Helvetica,Arial,serif;font-weight:400}.rtTooltipBrandLink a:hover,.rtTooltipBrandLink a:link,.rtTooltipBrandLink a:visited,.rtTooltipMoreLink:hover,.rtTooltipMoreLink:link,.rtTooltipMoreLink:visited{text-decoration:none}.rtLight .rtContainer{background:#fff}.rtLight .rtTooltipHeader{background:#e7e7e7;color:#333}.rtLight .rtTooltipBody{color:#666}.rtLight .rtTooltipBrandLink a:link,.rtLight .rtTooltipBrandLink a:visited{color:#ccc}.rtLight .rtTooltipBrandLink a:hover{color:#666}.rtLight .rtTooltipMoreLink:link,.rtLight .rtTooltipMoreLink:visited{color:#0080FF}.rtLight .rtTooltipMoreLink:hover{color:#66B2FF}.rtDark .rtContainer{background:#555}.rtDark .rtTooltipHeader{background:#888;color:#eee}.rtDark .rtTooltipBody{color:#fff}.rtDark .rtTooltipBrandLink a:link,.rtDark .rtTooltipBrandLink a:visited{color:#999}.rtDark .rtTooltipBrandLink a:hover{color:#eee}.rtDark .rtTooltipMoreLink:link,.rtDark .rtTooltipMoreLink:visited{color:#fff}.rtDark .rtTooltipMoreLink:hover{color:#ccc}.rtTooltipSocialIcon{background:url(//bible.logos.com/v2/social-icons.png)}";
    }), o("libs/text!css/layout", [], function() {
        return ".rtTooltip{text-align:left;text-indent:0;width:400px;min-height:140px;z-index:99;max-width:100%}.rtTooltip div{text-align:left}.rtTooltipHeader{border:0;font-size:14px;font-weight:700;line-height:32px;height:32px;margin:0;padding:0 20px 0 15px}.rtTooltipBody{border:0;line-height:1.4;font-size:14px;margin:0;min-height:40px;padding:19px 20px 0 15px}.rtTooltipBody .ch-ref,.rtTooltipBody .verse-ref{font-size:85%;position:relative;top:-1px}.rtTooltipFooter{border:0;font-size:14px;line-height:14px;letter-spacing:normal;padding:22px 32px 12px 15px;text-align:left}.rtTooltipFooter div{text-align:right}.rtTooltipFooter .rtTooltipMoreLink{float:right}.rtTooltipFooter .rtTooltipBrandLink{display:inline-block;margin-right:20px;font-size:12px}.rtTooltipSocial{float:right}.rtTooltip .rtTooltipSocialIcon{display:inline-block;margin-top:8px;height:19px;width:21px}.rtTooltip,.rtTooltip a,.rtTooltipBody p,.rtTooltipBody span{letter-spacing:normal;margin:0;padding:0}.rtLibronix img{float:none}.libronixLinkImage{border:0;float:none;margin:0 0 0 4px;padding:0}"
    }), o("cssLoader", ["util/classNames", "util/dom", "util/color", "libs/text!css/default", "libs/text!css/layout"], function(e, t, o, n, r) {
        "use strict";
        return {
            loadCss: function(s, i) {
                function a() {
                    var e = document.getElementById("rt-tooltip-styles");
                    e && e.parentElement.removeChild(e)
                }

                function l(e) {
                    var t, o, n, r, s, i = ["rtFaithlife", "rtFacebook", "rtTwitter", "rtGoogle"],
                        a = "";
                    for (t = 0, o = i.length; o > t; t++)
                        for (n = 0; 2 > n; n++) r = 0 === n ? ":hover" : "", s = 19 * t * 4 + (e ? 38 : 0) + (r ? 19 : 0), a += ".rtTooltipSocialIcon#" + i[t] + r + "{background-position:0 -" + s + "px;}\n";
                    return a
                }

                function c(t) {
                    function n(e) {
                        return e.split(";")[0]
                    }

                    function r(e) {
                        var t = /^#(\w{3}|\w{6})$/;
                        return t.test(e) ? e.replace(/^#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") : (window.console && window.console.warn && window.console.warn("Invalid color value provided to Reftagger. Must be in hex format."), "")
                    }

                    function s(e, t, o) {
                        var r, s, i = "\n" + e + "{";
                        for (r = 0, s = o.length; s > r; r++) t[o[r]] && (i += o[r].replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + n(t[o[r]]) + " !important;");
                        return i + "}\n"
                    }

                    function i(e) {
                        var t = o.rgbToHsl(o.hexToRgb(r(e)));
                        return o.rgbToHex(o.hslToRgb({
                            h: t.h,
                            s: t.s,
                            l: Math.min(t.l + .2 * (t.l < .6 ? 1 : -1), 1)
                        }))
                    }
                    var a, l, c, d = "",
                        h = ["backgroundColor", "fontSize", "lineHeight", "fontWeight", "color", "fontFamily"];
                    return t.heading && (a = r(t.heading.backgroundColor), a && (l = o.hexToRgb(a), u = (l.r + l.g + l.b) / 3 < 170), d += s("." + e.classNames.tooltipHeader, t.heading, h)), t.body && (d += s("." + e.classNames.tooltipBody + ", ." + e.classNames.tooltipFooter, t.body, h.slice(1)), c = r(t.body.moreLink && t.body.moreLink.color), c && (d += s("." + e.classNames.tooltipMoreLink, t.body.moreLink, ["color"]), d += "\n." + e.classNames.tooltipMoreLink + ":hover{color:" + i(t.body.moreLink.color) + " !important}\n")), d
                }
                var d = t.createElement("style", {
                        id: "rt-tooltip-styles",
                        type: "text/css"
                    }),
                    h = r,
                    u = !1;
                i.cssOverride || 0 === window.location.hostname.toLowerCase().indexOf("theresurgence.com") || (h += n), i.customStyle && (h += c(i.customStyle)), h += l(u || "dark" === i.tooltipStyle), d.styleSheet ? d.styleSheet.cssText = h : d.innerHTML = h, a(), s.insertBefore(d, s.firstChild)
            }
        }
    }), o("util/version", {
        version: 2
    }), o("util/settings", {
        getSettingsOrDefaults: function(e, t) {
            var o, n = {};
            if (e = e || window.refTagger && window.refTagger.settings)
                for (o in t) t.hasOwnProperty(o) && (n[o] = void 0 !== e[o] ? e[o] : t[o]);
            return n
        }
    }), o("main", ["config", "root", "passageManager", "tooltips", "referenceRegexes", "cssLoader", "util/classNames", "util/version", "util/settings", "util/dom", "nls/resourceStrings"], function(e, t, o, n, r, s, i, a, l, c, d) {
        "use strict";

        function h(e) {
            return d.normalizeReference(e)
        }

        function u() {
            (new Image).src = [O, "://", e.loggerBaseUri, "?", "documentUrl=", encodeURIComponent(R.location), "&referenceCount=", +z.referenceCount, "&microreferenceCount=", +z.markedBibleReferenceCount, "&bibleVersion=", encodeURIComponent(F.bibleVersion), "&usesLibronixLinks=", !!F.addLogosLink, "&usesTooltips=", !!F.useTooltip, "&applicationVersion=", a.version, "&rand=", Math.random().toString().substring(10)].join("")
        }

        function f() {
            var e, t, o, n = /lbsRefTaggerPrefs=(?:((?:\w|\d){2,5})\.(true|false))/.exec(R.cookie),
                r = R.getElementById("lbsRefTaggerCP");
            if (n && (F.bibleVersion = n[1], F.addLogosLink = "true" === n[2]), null !== r) {
                for (e = R.getElementById("lbsVersion"), t = e.length, o = 0; t > o; o++)
                    if (e.options[o].outerText === (F.bibleVersion || "default").toUpperCase()) {
                        e.selectedIndex = o;
                        break
                    }
                F.addLogosLink && (R.getElementById("lbsUseLibronixLinks").checked = "true")
            }
        }

        function p(e) {
            var o;
            for (e = e || t.event, o = e.target || e.srcElement;
                "a" !== o.tagName.toLowerCase();) o = o.parentNode;
            return o
        }

        function g(e) {
            var t = p(e);
            o.getPassage(t.getAttribute("data-reference"), t.getAttribute("data-version"), F.bibleReader)
        }

        function m(t) {
            function r() {
                n.create(i, a, {
                    enableSharingPopups: F.enableSharingPopups,
                    socialSharing: F.socialSharing,
                    tooltipStyle: "dark" === F.tooltipStyle ? "rtDark" : "rtLight",
                    includeDropShadow: F.dropShadow,
                    includeRoundedCorners: F.roundCorners
                })
            }
            var s = 20,
                i = p(t),
                a = {
                    reference: i.getAttribute("data-reference").replace(/\s/g, ""),
                    version: i.getAttribute("data-version"),
                    bibleReader: F.bibleReader
                };
            P = H ? setTimeout(r, 1) : setTimeout(function() {
                o.getPassage(a.reference, a.version, a.bibleReader), P = setTimeout(r, e.createTooltipDelay - s)
            }, s)
        }

        function b() {
            H || (t.clearTimeout(P), n.remove())
        }

        function T(e, t, n, r) {
            var s;
            e = h(e), t = o.getVersion(t || F.bibleVersion), s = v(R.createElement("a"), e, t), s.innerHTML = n, r.parentNode.insertBefore(s, r), F.addLogosLink && y(r, e.replace(/(\d)\s*(?:[a-z]|ff)(\W|$)|/g, "$1$2").replace(/\s+/g, "").replace(/[‒–—―]+/g, "-")), z.referenceCount++
        }

        function v(e, t, o) {
            return V.test(e.className) || (e.className += (e.className.length ? " " : "") + i.classNames.bibleRef), e.href = n.generateLink(t, o, F.bibleReader), e.setAttribute("data-reference", t), e.setAttribute("data-version", o), e.setAttribute("data-purpose", "bible-reference"), F.linksOpenNewWindow && (e.target = "_blank"), F.useTooltip && (e.addEventListener ? (e.addEventListener("mouseover", m, !1), e.addEventListener("mouseout", b, !1), e.addEventListener("touchstart", g, !1), e.addEventListener("click", function(e) {
                H && e.target !== n.openTooltipAnchor && (e.preventDefault(), n.openTooltipAnchor || m.call(this, e))
            }, !1)) : e.attachEvent && (e.attachEvent("onmouseover", m), e.attachEvent("onmouseout", b))), e
        }

        function y(e, t) {
            var o, n, r = F.logosBibleVersion || F.libronixBibleVersion,
                s = O + "://www.logos.com/images/Corporate/LibronixLink_" + ("light" === (F.libronixLinkIcon || F.logosLinkIcon).toLowerCase() ? "light" : "dark") + ".png",
                i = c.createElement("img", {
                    src: s,
                    border: 0,
                    title: d.logosLinkTitle,
                    className: "libronixLinkImage",
                    align: "bottom"
                });
            t ? (n = "libronixdls:keylink|ref=[en]bible:" + t, r && "default" !== r.toLowerCase() && (n += "|res=LLS:" + r.toUpperCase()), o = c.createElement("a", {
                href: n,
                className: "rtLibronix"
            }), o.appendChild(i), e.parentNode.insertBefore(o, e)) : e.appendChild(i)
        }

        function k(e, t, o, n, s, i, a) {
            var l, d, u, f, p, g, m, b, y, x, L, R = !1,
                N = 0,
                B = F.bibleVersion,
                P = null,
                J = r.abbreviations,
                A = J.length;
            return o && (u = w.exec(e), u && (l = o, d = u[3], b = l + " " + u[2], g = u[1], p = e.substr(u.index + u[0].length))), n && !u && (u = E.exec(e), u && (l = o, d = n, b = i ? l + " " + u[2] : l + " " + d + ":" + u[2], R = I.test(b), g = u[1], p = e.substr(u.index + u[0].length))), !u && S.test(e) && (u = C.exec(e), u && (f = u.length, l = u[3], d = u[4 + A], b = u[2], y = u.indexOf(l, 4) - 4, x = J[y], -1 !== M.indexOf(y) ? (d = 1, R = !1) : R = I.test(b), g = e.substr(0, u.index) + u[1], p = e.substr(u.index + u[0].length), u[f - 1] && (P = u[f - 1], B = P.replace(/\W/g, "")))), u ? (m = u[0].substr((u[1] || "").length), R && !F.tagChapters ? (c.insertTextNode(g + m, t), N = k(p, t, null, null, B === F.bibleVersion ? null : B, !1)) : 155 >= d && (l = l || o, x = x || l, L = x + b.substr(l.length), a ? (B = B || F.bibleVersion, v(a, h(L), B)) : (c.insertTextNode(g, t), T(L, B, null === P ? u[2] : u[2] + P, t), N = k(p, t, l, d, B === F.bibleVersion ? null : B, R), N += F.addLogosLink ? 3 : 2))) : e !== t.nodeValue && (e && s != e && c.insertTextNode(e, t), t.parentNode.removeChild(t)), N
        }

        function x(e, t, o) {
            var n, r, s, i, a, l, c, d = (e.tagName || "").toLowerCase(),
                u = e.className && e.className.split ? e.className.split(" ") : [],
                f = e.href && e.href.toLowerCase ? e.href.toLowerCase() : "",
                p = u.length,
                g = 0,
                m = !1,
                b = /^libronixdls:/i,
                S = 0,
                C = 0;
            if (o = o || 0, o > A) return 0;
            for (s = 0; p > s; s++)
                if (D.noSearchClasses.hasOwnProperty(u[s].toLowerCase())) return S;
            if (D.noSearchTags[d]) return S;
            if (3 === e.nodeType) return S = k(e.nodeValue, e, null, null, null, !1, t);
            if (t = null, "a" === d) {
                if (b.test(e.href)) !F.appendIconToLibLinks && !F.appendIconToLogosLinks || e.lastChild && e.lastChild.tagName && "img" === e.lastChild.tagName.toLowerCase() || y(e, null);
                else if (V.test(e.className)) i = e.getAttribute("data-reference"), a = e.getAttribute("data-version"), i && v(e, h(i), a || F.bibleVersion);
                else if (/bibleref/i.test(e.className)) m = L(e, function(e, t, o) {
                    n = h(t), v(e, n, o)
                });
                else if (F.convertHyperlinks && 1 === e.childNodes.length && 3 === e.firstChild.nodeType)
                    for (F.hyperlinkTestList.length || (t = e), l = F.hyperlinkTestList.length, c = 0; l > c; c++)
                        if (-1 !== f.indexOf(F.hyperlinkTestList[c].toLowerCase())) {
                            t = e;
                            break
                        }
                if (null === t) return S
            } else "cite" === d && -1 !== e.className.toLowerCase().indexOf("bibleref") && (m = L(e, function(e, t, o) {
                T(t, o, e.innerHTML, e.firstChild), e.removeChild(e.lastChild)
            }));
            if (!m)
                for (r = e.childNodes; C > g || g < (C = r ? r.length : 0);) g += x(r[g], t, o + 1) + 1;
            return S
        }

        function L(e, t) {
            var o, n, r, s = !1;
            return z.markedBibleReferenceCount++, e.title && e.childNodes.length <= 1 && (o = /^([A-Z]{2,5})[\s:]/.exec(e.title), o ? (r = e.title.replace(o[1], "").trim(), n = o[1]) : (r = e.title, n = F.bibleVersion), t(e, r, n), s = !0), s
        }
        var S, C, w, E, I, M, R = t.document,
            N = R.body,
            B = R.getElementsByTagName("head")[0],
            P = null,
            J = !1,
            A = 200,
            z = {
                referenceCount: 0,
                markedBibleReferenceCount: 0
            },
            H = !1,
            O = "https:" === R.location.protocol ? "https" : "http",
            V = new RegExp(i.classNames.bibleRef, "i"),
            F = {},
            D = {
                lbsSavePrefs: function() {
                    var e = R.getElementById("lbsRefTaggerCP"),
                        o = R.getElementById("lbsVersion"),
                        n = R.getElementById("lbsUseLibronixLinks"),
                        r = o ? o.value : "ESV",
                        s = n ? !!n.checked : !1,
                        i = new Date;
                    if (!e) throw new Error("No Reftagger control panel found.");
                    i.setFullYear(i.getFullYear() + 10), R.cookie = "lbsRefTaggerPrefs=" + r + "." + s + ";expires=" + i.toGMTString() + ";path=/", t.location.reload()
                },
                Init: function(t, o) {
                    var i, a, c, d;
                    if (!D.Initialized || o) {
                        for (F = l.getSettingsOrDefaults(t, e.defaultSettings), R.addEventListener && R.addEventListener("touchstart", function(e) {
                                H = !0, !V.test(e.target.className) && n.isTooltipOpen() && n.reset()
                            }, !1), s.loadCss(B, F), f(), D.noSearchTags = {
                                textarea: !0,
                                input: !0
                            }, c = F.noSearchTagNames.length, i = 0; c > i; i++) d = F.noSearchTagNames[i], D.noSearchTags[d] = !0;
                        for (D.noSearchClasses = [], a = F.noSearchClassNames.length, i = 0; a > i; i++) D.noSearchClasses[F.noSearchClassNames[i].toLowerCase()] = !0;
                        S = new RegExp(r.referenceQuickTest, "i"), C = new RegExp(r.referenceRegExp, F.caseInsensitive ? "i" : ""), w = new RegExp(r.bookContinuationRegExp), E = new RegExp(r.chapterContinuationRegExp, F.caseInsensitive ? "i" : ""), I = new RegExp(r.chapterReferenceRegExp, "i"), M = r.singleChapterIndexes, D.Initialized = !0
                    }
                },
                tag: function(e) {
                    F.addLogosLink = F.addLogosLink || F.addLibronixDLSLink, D.Initialized || D.Init(), x(e || F.rootNode || N), J || (u(), J = !0)
                }
            };
        return D.init = D.Init, D.regexes = r, t.refTagger && t.refTagger.settings && t.refTagger.settings.tagAutomatically !== !1 && D.tag(), D
    }), t("main")
});