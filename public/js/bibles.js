window.BIBLESEARCH = window.BIBLESEARCH || {};
BIBLESEARCH.jQuire = BIBLESEARCH.jQuire || function(b) {
    function l(c, d) {
        typeof c === "function" && c.call(window, d)
    }

    function q(c) {
        var d = false;
        if (a.rejectIf) d = a.rejectIf.call({}, c);
        return !d
    }

    function r(c, d, e) {
        function f(s, t) {
            for (var i = s.split("."), j = t.split("."), g = 0; g < i.length; ++g) {
                var m = parseInt(i[g], 10),
                    n = parseInt(j[g], 10);
                if (j.length == g) return -1;
                if (m != n) return m > n ? 1 : -1
            }
            if (i.length != j.length) return 1;
            return 0
        }
        var o = false;
        if (typeof e === "function" && e.fn) {
            e = e.fn.jquery;
            c = [c, e, d];
            o = c.join("|") === c.sort(f).join("|")
        }
        return o
    }

    function u(c, d) {
        var e = false,
            f = document.createElement("script");
        f.src = c;
        f.onload = f.onreadystatechange = function() {
            if (!e && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                e = true;
                d.call();
                f.onload = f.onreadystatechange = null
            }
        };
        document.getElementsByTagName("head")[0].appendChild(f)
    }
    
    // Get Wordpres Site URL
	var bversedomain = bverse_vars.wpinstalldir;
    
    var a = {
            loadFrom: bversedomain+"/wp-includes/js/jquery/jquery.js?ver=1.12.4",
            onLoad: null,
            atLeast: null,
            atMost: "1",
            rejectIf: null,
            test: null
        },
        h = [window.jQuery, BIBLESEARCH.jQuery],
        p = false;
    if (typeof b === "function") a.onLoad =
        b;
    else
        for (var k in b)
            if (b.hasOwnProperty(k)) a[k] = b[k];
    a.loadFrom = a.loadFrom.replace("#{v}", a.atMost);
    a.test && h.push(a.test);
    for (b = 0; b < h.length; b++)
        if (q(h[b]) && r(a.atLeast, a.atMost, h[b])) {
            l(a.onLoad, h[b]);
            p = true;
            break
        }
    p || u(a.loadFrom, function() {
        BIBLESEARCH.jQuery = BIBLESEARCH.$ = window.jQuery.noConflict(true);
        l(a.onLoad, BIBLESEARCH.$)
    })
};
var BIBLESEARCH = BIBLESEARCH || {};
BIBLESEARCH.defineFancybox = BIBLESEARCH.defineFancybox || function(O) {
    O.fn.fancybox || function(A, J, f, B) {
        var P = f("html"),
            n = f(A),
            o = f(J),
            b = f.fancybox = function() {
                b.open.apply(this, arguments)
            },
            L = navigator.userAgent.match(/msie/i),
            G = null,
            r = J.createTouch !== B,
            D = function(a) {
                return a && a.hasOwnProperty && a instanceof f
            },
            u = function(a) {
                return a && f.type(a) === "string"
            },
            C = function(a) {
                return u(a) && a.indexOf("%") > 0
            },
            l = function(a, d) {
                var e = parseInt(a, 10) || 0;
                if (d && C(a)) e = b.getViewport()[d] / 100 * e;
                return Math.ceil(e)
            },
            s = function(a,
                d) {
                return l(a, d) + "px"
            };
        f.extend(b, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: true,
                autoHeight: false,
                autoWidth: false,
                autoResize: true,
                autoCenter: !r,
                fitToView: true,
                aspectRatio: false,
                topRatio: 0.5,
                leftRatio: 0.5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: true,
                closeBtn: true,
                closeClick: false,
                nextClick: false,
                mouseWheel: true,
                autoPlay: false,
                playSpeed: 3E3,
                preload: 3,
                modal: false,
                loop: true,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": true
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: true
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: true,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (L ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: true,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: true,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: true,
                    title: true
                },
                onCancel: f.noop,
                beforeLoad: f.noop,
                afterLoad: f.noop,
                beforeShow: f.noop,
                afterShow: f.noop,
                beforeChange: f.noop,
                beforeClose: f.noop,
                afterClose: f.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: false,
            isOpen: false,
            isOpened: false,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: false
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(a, d) {
                if (a) {
                    f.isPlainObject(d) || (d = {});
                    if (false !== b.close(true)) {
                        f.isArray(a) || (a = D(a) ? f(a).get() : [a]);
                        f.each(a, function(e, c) {
                            var g = {},
                                h, i, j, k, m;
                            if (f.type(c) ===
                                "object") {
                                if (c.nodeType) c = f(c);
                                if (D(c)) {
                                    g = {
                                        href: c.data("fancybox-href") || c.attr("href"),
                                        title: c.data("fancybox-title") || c.attr("title"),
                                        isDom: true,
                                        element: c
                                    };
                                    f.metadata && f.extend(true, g, c.metadata())
                                } else g = c
                            }
                            h = d.href || g.href || (u(c) ? c : null);
                            i = d.title !== B ? d.title : g.title || "";
                            k = (j = d.content || g.content) ? "html" : d.type || g.type;
                            if (!k && g.isDom) {
                                k = c.data("fancybox-type");
                                if (!k) k = (k = c.prop("class").match(/fancybox\.(\w+)/)) ? k[1] : null
                            }
                            if (u(h)) {
                                if (!k)
                                    if (b.isImage(h)) k = "image";
                                    else if (b.isSWF(h)) k = "swf";
                                else if (h.charAt(0) ===
                                    "#") k = "inline";
                                else if (u(c)) {
                                    k = "html";
                                    j = c
                                }
                                if (k === "ajax") {
                                    m = h.split(/\s+/, 2);
                                    h = m.shift();
                                    m = m.shift()
                                }
                            }
                            if (!j)
                                if (k === "inline")
                                    if (h) j = f(u(h) ? h.replace(/.*(?=#[^\s]+$)/, "") : h);
                                    else {
                                        if (g.isDom) j = c
                                    }
                            else if (k === "html") j = h;
                            else if (!k && !h && g.isDom) {
                                k = "inline";
                                j = c
                            }
                            f.extend(g, {
                                href: h,
                                type: k,
                                content: j,
                                title: i,
                                selector: m
                            });
                            a[e] = g
                        });
                        b.opts = f.extend(true, {}, b.defaults, d);
                        if (d.keys !== B) b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : false;
                        b.group = a;
                        return b._start(b.opts.index)
                    }
                }
            },
            cancel: function() {
                var a = b.coming;
                if (!(!a || false === b.trigger("onCancel"))) {
                    b.hideLoading();
                    b.ajaxLoad && b.ajaxLoad.abort();
                    b.ajaxLoad = null;
                    if (b.imgPreload) b.imgPreload.onload = b.imgPreload.onerror = null;
                    a.wrap && a.wrap.stop(true, true).trigger("onReset").remove();
                    b.coming = null;
                    b.current || b._afterZoomOut(a)
                }
            },
            close: function(a) {
                b.cancel();
                if (false !== b.trigger("beforeClose")) {
                    b.unbindEvents();
                    if (b.isActive)
                        if (!b.isOpen || a === true) {
                            f(".fancybox-wrap").stop(true).trigger("onReset").remove();
                            b._afterZoomOut()
                        } else {
                            b.isOpen = b.isOpened = false;
                            b.isClosing =
                                true;
                            f(".fancybox-item, .fancybox-nav").remove();
                            b.wrap.stop(true, true).removeClass("fancybox-opened");
                            b.transitions[b.current.closeMethod]()
                        }
                }
            },
            play: function(a) {
                var d = function() {
                        clearTimeout(b.player.timer)
                    },
                    e = function() {
                        d();
                        if (b.current && b.player.isActive) b.player.timer = setTimeout(b.next, b.current.playSpeed)
                    },
                    c = function() {
                        d();
                        o.unbind(".player");
                        b.player.isActive = false;
                        b.trigger("onPlayEnd")
                    };
                if (a === true || !b.player.isActive && a !== false) {
                    if (b.current && (b.current.loop || b.current.index < b.group.length -
                            1)) {
                        b.player.isActive = true;
                        o.bind({
                            "onCancel.player beforeClose.player": c,
                            "onUpdate.player": e,
                            "beforeLoad.player": d
                        });
                        e();
                        b.trigger("onPlayStart")
                    }
                } else c()
            },
            next: function(a) {
                var d = b.current;
                if (d) {
                    if (!u(a)) a = d.direction.next;
                    b.jumpto(d.index + 1, a, "next")
                }
            },
            prev: function(a) {
                var d = b.current;
                if (d) {
                    if (!u(a)) a = d.direction.prev;
                    b.jumpto(d.index - 1, a, "prev")
                }
            },
            jumpto: function(a, d, e) {
                var c = b.current;
                if (c) {
                    a = l(a);
                    b.direction = d || c.direction[a >= c.index ? "next" : "prev"];
                    b.router = e || "jumpto";
                    if (c.loop) {
                        if (a < 0) a = c.group.length +
                            a % c.group.length;
                        a %= c.group.length
                    }
                    if (c.group[a] !== B) {
                        b.cancel();
                        b._start(a)
                    }
                }
            },
            reposition: function(a, d) {
                var e = b.current,
                    c = e ? e.wrap : null,
                    g;
                if (c) {
                    g = b._getPosition(d);
                    if (a && a.type === "scroll") {
                        delete g.position;
                        c.stop(true, true).animate(g, 200)
                    } else {
                        c.css(g);
                        e.pos = f.extend({}, e.dim, g)
                    }
                }
            },
            update: function(a) {
                var d = a && a.type,
                    e = !d || d === "orientationchange";
                if (e) {
                    clearTimeout(G);
                    G = null
                }!b.isOpen || G || (G = setTimeout(function() {
                    var c = b.current;
                    if (!(!c || b.isClosing)) {
                        b.wrap.removeClass("fancybox-tmp");
                        if (e || d ===
                            "load" || d === "resize" && c.autoResize) b._setDimension();
                        d === "scroll" && c.canShrink || b.reposition(a);
                        b.trigger("onUpdate");
                        G = null
                    }
                }, e && !r ? 0 : 300))
            },
            toggle: function(a) {
                if (b.isOpen) {
                    b.current.fitToView = f.type(a) === "boolean" ? a : !b.current.fitToView;
                    if (r) {
                        b.wrap.removeAttr("style").addClass("fancybox-tmp");
                        b.trigger("onUpdate")
                    }
                    b.update()
                }
            },
            hideLoading: function() {
                o.unbind(".loading");
                f("#fancybox-loading").remove()
            },
            showLoading: function() {
                var a, d;
                b.hideLoading();
                a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
                o.bind("keydown.loading", function(e) {
                    if ((e.which || e.keyCode) === 27) {
                        e.preventDefault();
                        b.cancel()
                    }
                });
                if (!b.defaults.fixed) {
                    d = b.getViewport();
                    a.css({
                        position: "absolute",
                        top: d.h * 0.5 + d.y,
                        left: d.w * 0.5 + d.x
                    })
                }
            },
            getViewport: function() {
                var a = b.current && b.current.locked || false,
                    d = {
                        x: n.scrollLeft(),
                        y: n.scrollTop()
                    };
                if (a) {
                    d.w = a[0].clientWidth;
                    d.h = a[0].clientHeight
                } else {
                    d.w = r && A.innerWidth ? A.innerWidth : n.width();
                    d.h = r && A.innerHeight ? A.innerHeight : n.height()
                }
                return d
            },
            unbindEvents: function() {
                b.wrap && D(b.wrap) &&
                    b.wrap.unbind(".fb");
                o.unbind(".fb");
                n.unbind(".fb")
            },
            bindEvents: function() {
                var a = b.current,
                    d;
                if (a) {
                    n.bind("orientationchange.fb" + (r ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update);
                    (d = a.keys) && o.bind("keydown.fb", function(e) {
                        var c = e.which || e.keyCode,
                            g = e.target || e.srcElement;
                        if (c === 27 && b.coming) return false;
                        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(g && (g.type || f(g).is("[contenteditable]")))) f.each(d, function(h, i) {
                            if (a.group.length > 1 && i[c] !== B) {
                                b[h](i[c]);
                                e.preventDefault();
                                return false
                            }
                            if (f.inArray(c, i) > -1) {
                                b[h]();
                                e.preventDefault();
                                return false
                            }
                        })
                    });
                    f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(e, c, g, h) {
                        for (var i = f(e.target || null), j = false; i.length;) {
                            if (j || i.is(".fancybox-skin") || i.is(".fancybox-wrap")) break;
                            j = i[0] && !(i[0].style.overflow && i[0].style.overflow === "hidden") && (i[0].clientWidth && i[0].scrollWidth > i[0].clientWidth || i[0].clientHeight && i[0].scrollHeight > i[0].clientHeight);
                            i = f(i).parent()
                        }
                        if (c !== 0 && !j)
                            if (b.group.length > 1 && !a.canShrink) {
                                if (h >
                                    0 || g > 0) b.prev(h > 0 ? "down" : "left");
                                else if (h < 0 || g < 0) b.next(h < 0 ? "up" : "right");
                                e.preventDefault()
                            }
                    })
                }
            },
            trigger: function(a, d) {
                var e, c = d || b.coming || b.current;
                if (c) {
                    if (f.isFunction(c[a])) e = c[a].apply(c, Array.prototype.slice.call(arguments, 1));
                    if (e === false) return false;
                    c.helpers && f.each(c.helpers, function(g, h) {
                        h && b.helpers[g] && f.isFunction(b.helpers[g][a]) && b.helpers[g][a](f.extend(true, {}, b.helpers[g].defaults, h), c)
                    });
                    o.trigger(a)
                }
            },
            isImage: function(a) {
                return u(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(a) {
                return u(a) && a.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(a) {
                var d = {},
                    e, c;
                a = l(a);
                e = b.group[a] || null;
                if (!e) return false;
                d = f.extend(true, {}, b.opts, e);
                e = d.margin;
                c = d.padding;
                if (f.type(e) === "number") d.margin = [e, e, e, e];
                if (f.type(c) === "number") d.padding = [c, c, c, c];
                d.modal && f.extend(true, d, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
                if (d.autoSize) d.autoWidth = d.autoHeight = true;
                if (d.width === "auto") d.autoWidth =
                    true;
                if (d.height === "auto") d.autoHeight = true;
                d.group = b.group;
                d.index = a;
                b.coming = d;
                if (false === b.trigger("beforeLoad")) b.coming = null;
                else {
                    c = d.type;
                    e = d.href;
                    if (!c) {
                        b.coming = null;
                        if (b.current && b.router && b.router !== "jumpto") {
                            b.current.index = a;
                            return b[b.router](b.direction)
                        }
                        return false
                    }
                    b.isActive = true;
                    if (c === "image" || c === "swf") {
                        d.autoHeight = d.autoWidth = false;
                        d.scrolling = "visible"
                    }
                    if (c === "image") d.aspectRatio = true;
                    if (c === "iframe" && r) d.scrolling = "scroll";
                    d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (r ? "mobile" :
                        "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                    f.extend(d, {
                        skin: f(".fancybox-skin", d.wrap),
                        outer: f(".fancybox-outer", d.wrap),
                        inner: f(".fancybox-inner", d.wrap)
                    });
                    f.each(["Top", "Right", "Bottom", "Left"], function(g, h) {
                        d.skin.css("padding" + h, s(d.padding[g]))
                    });
                    b.trigger("onReady");
                    if (c === "inline" || c === "html") {
                        if (!d.content || !d.content.length) return b._error("content")
                    } else if (!e) return b._error("href");
                    if (c === "image") b._loadImage();
                    else if (c === "ajax") b._loadAjax();
                    else c === "iframe" ? b._loadIframe() : b._afterLoad()
                }
            },
            _error: function(a) {
                f.extend(b.coming, {
                    type: "html",
                    autoWidth: true,
                    autoHeight: true,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: a,
                    content: b.coming.tpl.error
                });
                b._afterLoad()
            },
            _loadImage: function() {
                var a = b.imgPreload = new Image;
                a.onload = function() {
                    this.onload = this.onerror = null;
                    b.coming.width = this.width / b.opts.pixelRatio;
                    b.coming.height = this.height / b.opts.pixelRatio;
                    b._afterLoad()
                };
                a.onerror = function() {
                    this.onload = this.onerror = null;
                    b._error("image")
                };
                a.src = b.coming.href;
                a.complete !== true && b.showLoading()
            },
            _loadAjax: function() {
                var a = b.coming;
                b.showLoading();
                b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                    url: a.href,
                    error: function(d, e) {
                        b.coming && e !== "abort" ? b._error("ajax", d) : b.hideLoading()
                    },
                    success: function(d, e) {
                        if (e === "success") {
                            a.content = d;
                            b._afterLoad()
                        }
                    }
                }))
            },
            _loadIframe: function() {
                var a = b.coming,
                    d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", r ? "auto" : a.iframe.scrolling).attr("src", a.href);
                f(a.wrap).bind("onReset", function() {
                    try {
                        f(this).find("iframe").hide().attr("src",
                            "//about:blank").end().empty()
                    } catch (e) {}
                });
                if (a.iframe.preload) {
                    b.showLoading();
                    d.one("load", function() {
                        f(this).data("ready", 1);
                        r || f(this).bind("load.fb", b.update);
                        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                        b._afterLoad()
                    })
                }
                a.content = d.appendTo(a.inner);
                a.iframe.preload || b._afterLoad()
            },
            _preloadImages: function() {
                var a = b.group,
                    d = b.current,
                    e = a.length,
                    c = d.preload ? Math.min(d.preload, e - 1) : 0,
                    g, h;
                for (h = 1; h <= c; h += 1) {
                    g = a[(d.index + h) % e];
                    if (g.type === "image" && g.href)(new Image).src =
                        g.href
                }
            },
            _afterLoad: function() {
                var a = b.coming,
                    d = b.current,
                    e, c, g, h, i;
                b.hideLoading();
                if (!(!a || b.isActive === false))
                    if (false === b.trigger("afterLoad", a, d)) {
                        a.wrap.stop(true).trigger("onReset").remove();
                        b.coming = null
                    } else {
                        if (d) {
                            b.trigger("beforeChange", d);
                            d.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
                        }
                        b.unbindEvents();
                        e = a.content;
                        c = a.type;
                        g = a.scrolling;
                        f.extend(b, {
                            wrap: a.wrap,
                            skin: a.skin,
                            outer: a.outer,
                            inner: a.inner,
                            current: a,
                            previous: d
                        });
                        h = a.href;
                        switch (c) {
                            case "inline":
                            case "ajax":
                            case "html":
                                if (a.selector) e =
                                    f("<div>").html(e).find(a.selector);
                                else if (D(e)) {
                                    e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide());
                                    e = e.show().detach();
                                    a.wrap.bind("onReset", function() {
                                        f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", false)
                                    })
                                }
                                break;
                            case "image":
                                e = a.tpl.image.replace("{href}", h);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                                    h + '"></param>';
                                i = "";
                                f.each(a.swf, function(j, k) {
                                    e += '<param name="' + j + '" value="' + k + '"></param>';
                                    i += " " + j + '="' + k + '"'
                                });
                                e += '<embed src="' + h + '" type="application/x-shockwave-flash" width="100%" height="100%"' + i + "></embed></object>"
                        }
                        D(e) && e.parent().is(a.inner) || a.inner.append(e);
                        b.trigger("beforeShow");
                        a.inner.css("overflow", g === "yes" ? "scroll" : g === "no" ? "hidden" : g);
                        b._setDimension();
                        b.reposition();
                        b.isOpen = false;
                        b.coming = null;
                        b.bindEvents();
                        if (b.isOpened) d.prevMethod && b.transitions[d.prevMethod]();
                        else f(".fancybox-wrap").not(a.wrap).stop(true).trigger("onReset").remove();
                        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                        b._preloadImages()
                    }
            },
            _setDimension: function() {
                var a = b.getViewport(),
                    d = 0,
                    e = false,
                    c = false;
                e = b.wrap;
                var g = b.skin,
                    h = b.inner,
                    i = b.current;
                c = i.width;
                var j = i.height,
                    k = i.minWidth,
                    m = i.minHeight,
                    p = i.maxWidth,
                    q = i.maxHeight,
                    Q = i.scrolling,
                    K = i.scrollOutside ? i.scrollbarWidth : 0,
                    t = i.margin,
                    v = l(t[1] + t[3]),
                    E = l(t[0] + t[2]),
                    M, w, H, y, x, F, N, z, I;
                e.add(g).add(h).width("auto").height("auto").removeClass("fancybox-tmp");
                t = l(g.outerWidth(true) - g.width());
                M = l(g.outerHeight(true) -
                    g.height());
                w = v + t;
                H = E + M;
                y = C(c) ? (a.w - w) * l(c) / 100 : c;
                x = C(j) ? (a.h - H) * l(j) / 100 : j;
                if (i.type === "iframe") {
                    I = i.content;
                    if (i.autoHeight && I.data("ready") === 1) try {
                        if (I[0].contentWindow.document.location) {
                            h.width(y).height(9999);
                            F = I.contents().find("body");
                            K && F.css("overflow-x", "hidden");
                            x = F.outerHeight(true)
                        }
                    } catch (R) {}
                } else if (i.autoWidth || i.autoHeight) {
                    h.addClass("fancybox-tmp");
                    i.autoWidth || h.width(y);
                    i.autoHeight || h.height(x);
                    if (i.autoWidth) y = h.width();
                    if (i.autoHeight) x = h.height();
                    h.removeClass("fancybox-tmp")
                }
                c =
                    l(y);
                j = l(x);
                z = y / x;
                k = l(C(k) ? l(k, "w") - w : k);
                p = l(C(p) ? l(p, "w") - w : p);
                m = l(C(m) ? l(m, "h") - H : m);
                q = l(C(q) ? l(q, "h") - H : q);
                F = p;
                N = q;
                if (i.fitToView) {
                    p = Math.min(a.w - w, p);
                    q = Math.min(a.h - H, q)
                }
                w = a.w - v;
                E = a.h - E;
                if (i.aspectRatio) {
                    if (c > p) {
                        c = p;
                        j = l(c / z)
                    }
                    if (j > q) {
                        j = q;
                        c = l(j * z)
                    }
                    if (c < k) {
                        c = k;
                        j = l(c / z)
                    }
                    if (j < m) {
                        j = m;
                        c = l(j * z)
                    }
                } else {
                    c = Math.max(k, Math.min(c, p));
                    if (i.autoHeight && i.type !== "iframe") {
                        h.width(c);
                        j = h.height()
                    }
                    j = Math.max(m, Math.min(j, q))
                }
                if (i.fitToView) {
                    h.width(c).height(j);
                    e.width(c + t);
                    a = e.width();
                    v = e.height();
                    if (i.aspectRatio)
                        for (;
                            (a >
                                w || v > E) && c > k && j > m;) {
                            if (d++ > 19) break;
                            j = Math.max(m, Math.min(q, j - 10));
                            c = l(j * z);
                            if (c < k) {
                                c = k;
                                j = l(c / z)
                            }
                            if (c > p) {
                                c = p;
                                j = l(c / z)
                            }
                            h.width(c).height(j);
                            e.width(c + t);
                            a = e.width();
                            v = e.height()
                        } else {
                            c = Math.max(k, Math.min(c, c - (a - w)));
                            j = Math.max(m, Math.min(j, j - (v - E)))
                        }
                }
                if (K && Q === "auto" && j < x && c + t + K < w) c += K;
                h.width(c).height(j);
                e.width(c + t);
                a = e.width();
                v = e.height();
                e = (a > w || v > E) && c > k && j > m;
                c = i.aspectRatio ? c < F && j < N && c < y && j < x : (c < F || j < N) && (c < y || j < x);
                f.extend(i, {
                    dim: {
                        width: s(a),
                        height: s(v)
                    },
                    origWidth: y,
                    origHeight: x,
                    canShrink: e,
                    canExpand: c,
                    wPadding: t,
                    hPadding: M,
                    wrapSpace: v - g.outerHeight(true),
                    skinSpace: g.height() - j
                });
                !I && i.autoHeight && j > m && j < q && !c && h.height("auto")
            },
            _getPosition: function(a) {
                var d = b.current,
                    e = b.getViewport(),
                    c = d.margin,
                    g = b.wrap.width() + c[1] + c[3],
                    h = b.wrap.height() + c[0] + c[2];
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
                if (d.autoCenter && d.fixed && !a && h <= e.h && g <= e.w) c.position = "fixed";
                else if (!d.locked) {
                    c.top += e.y;
                    c.left += e.x
                }
                c.top = s(Math.max(c.top, c.top + (e.h - h) * d.topRatio));
                c.left = s(Math.max(c.left, c.left + (e.w -
                    g) * d.leftRatio));
                return c
            },
            _afterZoomIn: function() {
                var a = b.current;
                if (a) {
                    b.isOpen = b.isOpened = true;
                    b.wrap.css("overflow", "visible").addClass("fancybox-opened");
                    b.update();
                    if (a.closeClick || a.nextClick && b.group.length > 1) b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                        if (!f(d.target).is("a") && !f(d.target).parent().is("a")) {
                            d.preventDefault();
                            b[a.closeClick ? "close" : "next"]()
                        }
                    });
                    a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(d) {
                        d.preventDefault();
                        b.close()
                    });
                    if (a.arrows &&
                        b.group.length > 1) {
                        if (a.loop || a.index > 0) f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev);
                        if (a.loop || a.index < b.group.length - 1) f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)
                    }
                    b.trigger("afterShow");
                    if (!a.loop && a.index === a.group.length - 1) b.play(false);
                    else if (b.opts.autoPlay && !b.player.isActive) {
                        b.opts.autoPlay = false;
                        b.play()
                    }
                }
            },
            _afterZoomOut: function(a) {
                a = a || b.current;
                f(".fancybox-wrap").trigger("onReset").remove();
                f.extend(b, {
                    group: {},
                    opts: {},
                    router: false,
                    current: null,
                    isActive: false,
                    isOpened: false,
                    isOpen: false,
                    isClosing: false,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                });
                b.trigger("afterClose", a)
            }
        });
        b.transitions = {
            getOrigPosition: function() {
                var a = b.current,
                    d = a.element,
                    e = a.orig,
                    c = {},
                    g = 50,
                    h = 50,
                    i = a.hPadding,
                    j = a.wPadding,
                    k = b.getViewport();
                if (!e && a.isDom && d.is(":visible")) {
                    e = d.find("img:first");
                    e.length || (e = d)
                }
                if (D(e)) {
                    c = e.offset();
                    if (e.is("img")) {
                        g = e.outerWidth();
                        h = e.outerHeight()
                    }
                } else {
                    c.top = k.y + (k.h - h) * a.topRatio;
                    c.left = k.x + (k.w - g) * a.leftRatio
                }
                if (b.wrap.css("position") === "fixed" ||
                    a.locked) {
                    c.top -= k.y;
                    c.left -= k.x
                }
                return c = {
                    top: s(c.top - i * a.topRatio),
                    left: s(c.left - j * a.leftRatio),
                    width: s(g + j),
                    height: s(h + i)
                }
            },
            step: function(a, d) {
                var e, c, g = d.prop;
                c = b.current;
                var h = c.wrapSpace,
                    i = c.skinSpace;
                if (g === "width" || g === "height") {
                    e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start);
                    if (b.isClosing) e = 1 - e;
                    c = g === "width" ? c.wPadding : c.hPadding;
                    c = a - c;
                    b.skin[g](l(g === "width" ? c : c - h * e));
                    b.inner[g](l(g === "width" ? c : c - h * e - i * e))
                }
            },
            zoomIn: function() {
                var a = b.current,
                    d = a.pos,
                    e = a.openEffect,
                    c = e === "elastic",
                    g = f.extend({
                            opacity: 1
                        },
                        d);
                delete g.position;
                if (c) {
                    d = this.getOrigPosition();
                    if (a.openOpacity) d.opacity = 0.1
                } else if (e === "fade") d.opacity = 0.1;
                b.wrap.css(d).animate(g, {
                    duration: e === "none" ? 0 : a.openSpeed,
                    easing: a.openEasing,
                    step: c ? this.step : null,
                    complete: b._afterZoomIn
                })
            },
            zoomOut: function() {
                var a = b.current,
                    d = a.closeEffect,
                    e = d === "elastic",
                    c = {
                        opacity: 0.1
                    };
                if (e) {
                    c = this.getOrigPosition();
                    if (a.closeOpacity) c.opacity = 0.1
                }
                b.wrap.animate(c, {
                    duration: d === "none" ? 0 : a.closeSpeed,
                    easing: a.closeEasing,
                    step: e ? this.step : null,
                    complete: b._afterZoomOut
                })
            },
            changeIn: function() {
                var a = b.current,
                    d = a.nextEffect,
                    e = a.pos,
                    c = {
                        opacity: 1
                    },
                    g = b.direction,
                    h;
                e.opacity = 0.1;
                if (d === "elastic") {
                    h = g === "down" || g === "up" ? "top" : "left";
                    if (g === "down" || g === "right") {
                        e[h] = s(l(e[h]) - 200);
                        c[h] = "+=200px"
                    } else {
                        e[h] = s(l(e[h]) + 200);
                        c[h] = "-=200px"
                    }
                }
                d === "none" ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                    duration: a.nextSpeed,
                    easing: a.nextEasing,
                    complete: b._afterZoomIn
                })
            },
            changeOut: function() {
                var a = b.previous,
                    d = a.prevEffect,
                    e = {
                        opacity: 0.1
                    },
                    c = b.direction;
                if (d === "elastic") e[c === "down" || c === "up" ?
                    "top" : "left"] = (c === "up" || c === "left" ? "-" : "+") + "=200px";
                a.wrap.animate(e, {
                    duration: d === "none" ? 0 : a.prevSpeed,
                    easing: a.prevEasing,
                    complete: function() {
                        f(this).trigger("onReset").remove()
                    }
                })
            }
        };
        b.helpers.overlay = {
            defaults: {
                closeClick: true,
                speedOut: 200,
                showEarly: true,
                css: {},
                locked: !r,
                fixed: true
            },
            overlay: null,
            fixed: false,
            el: f("html"),
            create: function(a) {
                a = f.extend({}, this.defaults, a);
                this.overlay && this.close();
                this.overlay = f('<div class="fancybox-overlay" style="z-index: 99999;"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
                this.fixed = false;
                if (a.fixed && b.defaults.fixed) {
                    this.overlay.addClass("fancybox-overlay-fixed");
                    this.fixed = true
                }
            },
            open: function(a) {
                var d = this;
                a = f.extend({}, this.defaults, a);
                this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
                if (!this.fixed) {
                    n.bind("resize.overlay", f.proxy(this.update, this));
                    this.update()
                }
                a.closeClick && this.overlay.bind("click.overlay", function(e) {
                    if (f(e.target).hasClass("fancybox-overlay")) {
                        b.isActive ? b.close() : d.close();
                        return false
                    }
                });
                this.overlay.css(a.css).show()
            },
            close: function() {
                var a, d;
                n.unbind("resize.overlay");
                if (this.el.hasClass("fancybox-lock")) {
                    f(".fancybox-margin").removeClass("fancybox-margin");
                    a = n.scrollTop();
                    d = n.scrollLeft();
                    this.el.removeClass("fancybox-lock");
                    n.scrollTop(a).scrollLeft(d)
                }
                f(".fancybox-overlay").remove().hide();
                f.extend(this, {
                    overlay: null,
                    fixed: false
                })
            },
            update: function() {
                var a = "100%",
                    d;
                this.overlay.width(a).height("100%");
                if (L) {
                    d = Math.max(J.documentElement.offsetWidth, J.body.offsetWidth);
                    if (o.width() > d) a = o.width()
                } else if (o.width() >
                    n.width()) a = o.width();
                this.overlay.width(a).height(o.height())
            },
            onReady: function(a, d) {
                var e = this.overlay;
                f(".fancybox-overlay").stop(true, true);
                e || this.create(a);
                if (a.locked && this.fixed && d.fixed) {
                    if (!e) this.margin = o.height() > n.height() ? f("html").css("margin-right").replace("px", "") : false;
                    d.locked = this.overlay.append(d.wrap);
                    d.fixed = false
                }
                a.showEarly === true && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(a, d) {
                var e, c;
                if (d.locked) {
                    if (this.margin !== false) {
                        f("*").filter(function() {
                            return f(this).css("position") ===
                                "fixed" && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
                        }).addClass("fancybox-margin");
                        this.el.addClass("fancybox-margin")
                    }
                    e = n.scrollTop();
                    c = n.scrollLeft();
                    this.el.addClass("fancybox-lock");
                    n.scrollTop(e).scrollLeft(c)
                }
                this.open(a)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(a) {
                this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
            }
        };
        b.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(a) {
                var d =
                    b.current,
                    e = d.title,
                    c = a.type;
                if (f.isFunction(e)) e = e.call(d.element, d);
                if (!(!u(e) || f.trim(e) === "")) {
                    d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                    switch (c) {
                        case "inside":
                            c = b.skin;
                            break;
                        case "outside":
                            c = b.wrap;
                            break;
                        case "over":
                            c = b.inner;
                            break;
                        default:
                            c = b.skin;
                            d.appendTo("body");
                            L && d.width(d.width());
                            d.wrapInner('<span class="child"></span>');
                            b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                    }
                    d[a.position === "top" ? "prependTo" : "appendTo"](c)
                }
            }
        };
        f.fn.fancybox = function(a) {
            var d,
                e = f(this),
                c = this.selector || "",
                g = function(h) {
                    var i = f(this).blur(),
                        j = d,
                        k, m;
                    if (!(h.ctrlKey || h.altKey || h.shiftKey || h.metaKey) && !i.is(".fancybox-wrap")) {
                        k = a.groupAttr || "data-fancybox-group";
                        m = i.attr(k);
                        if (!m) {
                            k = "rel";
                            m = i.get(0)[k]
                        }
                        if (m && m !== "" && m !== "nofollow") {
                            i = c.length ? f(c) : e;
                            i = i.filter("[" + k + '="' + m + '"]');
                            j = i.index(this)
                        }
                        a.index = j;
                        b.open(i, a) !== false && h.preventDefault()
                    }
                };
            a = a || {};
            d = a.index || 0;
            !c || a.live === false ? e.unbind("click.fb-start").bind("click.fb-start", g) : o.undelegate(c, "click.fb-start").delegate(c +
                ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", g);
            this.filter("[data-fancybox-start=1]").trigger("click");
            return this
        };
        o.ready(function() {
            var a, d;
            if (f.scrollbarWidth === B) f.scrollbarWidth = function() {
                var e = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    c = e.children();
                c = c.innerWidth() - c.height(99).innerWidth();
                e.remove();
                return c
            };
            if (f.support.fixedPosition === B) f.support.fixedPosition = function() {
                var e = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    c = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                e.remove();
                return c
            }();
            f.extend(b.defaults, {
                scrollbarWidth: f.scrollbarWidth(),
                fixed: f.support.fixedPosition,
                parent: f("body")
            });
            a = f(A).width();
            P.addClass("fancybox-lock-test");
            d = f(A).width();
            P.removeClass("fancybox-lock-test");
            f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
        })
    }(window, document, O)
};
window.BIBLESEARCH = window.BIBLESEARCH || {};
window.BIBLESEARCH.highlighterVersions = {   
	 "nld-NBG51": "NBG51",
	 "eng-ESV": "ESV",
	 "eng-WMB": "WMB"
};
window.BIBLESEARCH = window.BIBLESEARCH || {};
window.BIBLESEARCH.highlighterBooks = {
    "Gen": "gen,genesis,gn,génesis",
    "Exod": "exo,exod,exodus,ex,éxodo",
    "Lev": "lev,leviticus,lv,levítico",
    "Num": "num,numbers,nu,números,numeri",
    "Deut": "deut,deuteronomy,deu,dt,deuteronomio,deuteronomium",
    "Josh": "josh,joshua,jos,js,josué,joz,jozua",
    "Judg": "judg,judges,jg,jdg,jueces,rechters,richteren,recht,richt,re,ri",
    "Ruth": "rut,ruth,ru",
    "1Sam": "1sam,isam,1sa,isa,1 samuel,i samuel,1 s,i s",
    "2Sam": "2sam,iisam,2sa,iisa,2 samuel,ii samuel,2 s,ii s",
    "1Kgs": "1kgs,ikgs,1ki,iki,1 kings,i kings,1 k,i k,1rey,irey,1ye,ire,1 reyes,i reyes,1 r,1 koningen,1koningen1kon,1 kon",
    "2Kgs": "2kgs,iikgs,2ki,iiki,2 kings,ii kings,2 k,ii k,2rey,iirey,2ye,iire,2 reyes,ii reyes,2 r,2 koningen,2koningen, 2kon,2 kon",
    "1Chr": "1chr,ichr,1ch,ich,1 chronicles,i chronicles,1 ch,i ch,1cro,icro,1cr,icro,1 crónicas,i crónicas,1 cr, i cr,1 kronieken,1kronieken,1kron,1kr,1 kron,1 kr",
    "2Chr": "2chr,iichr,2ch,iich,2 chronicles,ii chronicles,2 ch,ii ch,2cro,iicro,2cr,iicr,2 crónicas,ii crónicas,2 cr, ii cr,2 kronieken,2kronieken,2kron,2kr,2 kron,2 kr",
    "Ezra": "ezra,ezr,esdras,esd",
    "Neh": "neh,nehemiah,ne,nehemías,nehe",
    "Esth": "est,esth,esther,es,ester",
    "Job": "job",
    "Ps": "ps,psa,psalm,psalms,sa,sal,salmo,salmos,psalmen",
    "Prov": "pro,prov,proverbs,pr,proverbios,spreuken,spr,sp",
    "Eccl": "eccl,ecc,ecclesiastes,ec,ecl,eclesiastés,prediker,pr,pred",
    "Song": "song,sng,sgs,song of songs,song of solomon,can,cant,cantares,hooglied,hoogl,hgl",
    "Isa": "isa,isaiah,is,isaías,jesaja,jes,js",
    "Jer": "jer,jeremiah,jr,jeremías,jeremia",
    "Lam": "lam,lamentations,lm,lamentaciones,klaagliederen,klg,klaagl,klgld",
    "Ezek": "ezek,ezk,ezekiel,ez,eze,ezequiel,ezechiel",
    "Dan": "dan,daniel,dn",
    "Hos": "hos,hosea,ho,os,oseas",
    "Joel": "joel,jol,jl",
    "Amos": "amos,am,amo,amós",
    "Obad": "obad,obadiah,ob,oba,ab,abd,abdías",
    "Jonah": "jonah,jon,jonás,jona",
    "Mic": "mic,micah,miq,miqueas,micha",
    "Nah": "nah,nahum,nam,nh,nahúm",
    "Hab": "hab,habakkuk,hb,habacuc",
    "Zeph": "zeph,zep,zephaniah,sof,sofo,sofonías,zefanja,zef",
    "Hag": "hag,haggai,hg,hageo",
    "Zech": "zech,zechariah,zec,zac,zacarías,zacharia",
    "Mal": "mal,malachi,ml,malaquías,maleachi",
    "Matt": "matt,matthew,mat,mt,mat,mateo,mattheus",
    "Mark": "mark,mrk,mk,marc,marcos,markus",
    "Luke": "luke,luk,lk,luc,lucas",
    "John": "john,jhn,jn,ju,juan,johannes,joh",
    "Acts": "acts,act,ac,he,hch,hechos,hand,handelingen,hnd",
    "Rom": "romans,rom,ro,romanos,romeinen",
    "1Cor": "1cor,icor,1co,ico,1 corinthians,i corinthians,1 co,i co,1 corintios,i corintios,1kor,1 korinthe,1 kor",
    "2Cor": "2cor,iicor,2co,iico,2 corinthians,ii corinthians,2 co,ii co,2 corintios,ii corintios,2kor,2 korinthe,2 kor",
    "Gal": "gal,galatians,ga,galatas,galaten",
    "Eph": "eph,ephesians,ef,efesios,efeze,efe",
    "Phil": "philippians,php,phil,filipenses,fil,fili,filip,filipenzen",
    "Col": "col,colossians,colosenses,kolosenzen,kol",
    "1Thess": "1thess,ithess,1th,ith,1 thessalonians,i thessalonians,1 th,i th,1tes,ites,1te,ite,tes,1 tesalonicenses,i tesalonicenses,1 te,i te,1 thessalonicenzen",
    "2Thess": "2thess,iithess,2th,iith,2 thessalonians,ii thessalonians,2 th,ii th,2tes,iites,2te,iite,tes,2 tesalonicenses,2 tesalonicenses,2 te,ii te,2 thessalonizen",
    "1Tim": "1tim,itim,1ti,iti,1 timothy,i timothy,1 ti,i ti,timoteo, 1 timoteo,1 timotheus",
    "2Tim": "2tim,iitim,2ti,iiti,2 timothy,ii timothy,2 ti,ii ti,timoteo, 2 timoteo,2 timotheus",
    "Titus": "tit,titus,tito",
    "Phlm": "phlm,philemon,phm,fil,file,filemón",
    "Heb": "heb,hebrews,he,hebreos,hebreeen,hebr",
    "Jas": "jas,james,stgo,santiago,jac,jacobus,jak,jakobus,jk",
    "1Pet": "1pet,ipet,1pe,ipe,1 peter,i peter,1 p,i p,1ped,iped,1 pedro,i predro,1 petrus,1petrus,1pet,1 pet",
    "2Pet": "2pet,iipet,2pe,iipe,2 peter,ii peter,2 p,ii p,2ped,iiped,2 pedro,ii predro,2 petrus,2petrus,2pet,2 pet",
    "1John": "1john,ijohn,1jn,ijn,1 john,i john,1 jn,i jn,1juan,ijuan,1 juan,i juan,1johannes,1 johannes,1joh,1 joh,1jh",
    "2John": "2john,iijohn,2jn,iijn,2 john,ii john,2 jn,ii jn,2juan,iijuan,2 juan,ii juan,2johannes,2 johannes,2joh,2 joh,2jh",
    "3John": "3john,iiijohn,3jn,iiijn,3 john,iii john,3 jn,iii jn,3juan,iiijuan,3 juan,iii juan,3johannes,3 johannes,3joh,3 joh,3jh",
    "Jude": "jude,jud,jd,judas,jud",
    "Rev": "rev,revelation,ap,apo,apoc,apocalipsis,openb,op,opb,openbaring,openbaringen",
    "Bar": "bar,baruch,ba",
    "Bel": "bel,bel and the dragon",
    "Sus": "sus,su,susanna",
    "1Esd": "1esd,iesd,1es,ies,1 esdras,i esdras,1 esd,i esd",
    "2Esd": "2esd,iiesd,2es,iies,2 esdras,ii esdras,2 esd,ii esd",
    "AddEsth": "addesth,esg,esther (greek version),esther,gk est",
    "EpJer": "epjer,lje,letter of jeremiah,let jer",
    "Jdt": "jdt,judith",
    "1Macc": "1macc,imacc,1ma,ima,1 maccabees,i maccabees,1 macc,i macc",
    "2Macc": "2macc,iimacc,2ma,iima,2 maccabees,ii maccabees,2 macc,ii macc",
    "3Macc": "3macc,iiimacc,3ma,iiima,3 maccabees,iii maccabees,3 macc,iii macc",
    "4Macc": "4macc,ivmacc,4ma,ivma,4 maccabees,iv maccabees,4 macc,iv macc",
    "PrMan": "prman,man,prayer of manasseh",
    "Sir": "sir,sirach,si",
    "Tob": "tob,tobit,tb",
    "Wis": "wis,ws,wisdom of solomon"
};
(function(p, n, B) {
    function C() {
        var a = null;
        h.iframe && D(h);
        if (h.autoparse) a = setTimeout(function() {
            q(n.getElementsByTagName("body")[0])
        }, 0);
        q.push = function() {
            clearTimeout(a);
            q.apply({}, arguments)
        };
        if (p._bhparse && p._bhparse.length) {
            clearTimeout(a);
            q.apply({}, p._bhparse)
        }
        p._bhparse = q
    }

    function D(a) {
        function d() {
            j("iframe").filter(function() {
                return this.src.match(/youtube\.com/) && !this.src.match(/wmode=opaque/)
            }).each(function() {
                var g = this.src;
                this.src = g + (g.match(/\?/) ? "&" : "?") + "wmode=opaque"
            })
        }
        
        // Get Wordpres Site URL
		var bversedomain = bverse_vars.wpinstalldir;
        var b = {
                __linker__: "1",
                "disp[]": "1"
            },
            // e = ["https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.css"].join(""),
            e = [bversedomain+"/wp-content/plugins/bijbelteksten/public/css/jquery.fancybox.css"].join(""),
            c = {
                type: "iframe",
                aspectRatio: false,
                width: "90%",
                height: "90%",
                maxWidth: 900,
                maxHeight: 900,
                autoSize: false,
                padding: 0,
                margin: 0,
                scrolling: "no",
                openEffect: "none",
                closeEffect: "none",
                iframe: {
                    scrolling: "yes"
                },
                helpers: {
                    title: null,
                    overlay: {
                        css: {
                            background: "rgba(0,0,0,0.5)"
                        }
                    }
                }
            };
        j.each(["languages", "versions"], function(g, f) {
            if ("string" === j.type(a[f]) && a[f].match(/^[a-z0-9\-,]+$/i)) b["disp[" + f + "]"] = a[f]
        });
        b["disp[versionChooser]"] =
            a.versionChooser ? 1 : 0;
        a.fixYoutube && d();
        BIBLESEARCH.defineFancybox(j);
        j("<link>").attr({
            rel: "stylesheet",
            media: "screen",
            href: e
        }).appendTo("head");
        j("body").delegate("a." + a.linkClass, "click", function(g) {
            g.preventDefault();
            g = j(this);
            var f = g.attr("href"),
                k;
            if ("undefined" === typeof g.data("fancybox-href")) {
                k = f.split("#");
                f = k[0] + (k[0].match(/\?/) ? "&" : "?") + j.param(b);
                if (k[1]) f += "#" + k[1];
                g.data("fancybox-href", f)
            }
            j.fancybox(j.extend({}, c, {
                href: g.data("fancybox-href")
            }))
        })
    }

    function q() {
        var a = Array.prototype.slice.call(arguments),
            d, b;
        if (a.length)
            for (b = 0; b < a.length; b++) {
                d = a[b];
                if (u(d)) d = n.getElementById(d.replace("#", ""));
                w(d)
            }
    }

    function w(a, d) {
        var b;
        b = null;
        var e, c;
        if (a && a.nodeType) {
            e = (a.tagName || "").toLowerCase();
            c = a.className || "";
            d = d || 0;
            if (d > h.maxdepth + 1) return b;
            else if (3 === a.nodeType) b = x(a.nodeValue, a);
            else if (h.ignoreClassMatch.exec(c)) return b;
            else if (("cite" === e || "span" === e) && /bibleref/.exec(c.toLowerCase())) {
                if (e = a.title.match(h.matchFirst)) {
                    b = y(z(e)[0], a.innerHTML);
                    a.innerHTML = "";
                    a.appendChild(b);
                    b = 0
                }
            } else if ("a" ===
                e) {
                if (h.existingLinkMatch.exec(a.href) && !h.linkClassMatch.exec(c)) a.className = A(c + " " + h.linkClass);
                b = 0
            }
            if (null === b) {
                b = a.childNodes;
                for (e = 0; e < b.length;) e += w(b[e], d + 1) + 1;
                b = 0
            }
            return b
        }
    }

    function x(a, d, b, e) {
        var c, g, f, k, l;
        b = b || [];
        if (!c && e && (c = h.matchNext.exec(a))) {
            b.push(c[1]);
            k = c[2];
            l = RegExp.rightContext;
            if (e.verse && !c[4]) {
                f = e.chapter;
                g = c[6] ? c[3] + "-" + c[6] : c[3]
            } else if (e.verse && c[4]) {
                f = c[3];
                g = c[6] ? c[4] + "-" + c[6] : c[4]
            } else if (!e.verse && !c[4]) {
                f = c[3];
                if (c[5]) {
                    k = c[3];
                    l = c[5] + c[6]
                }
                g = B
            } else if (!e.verse && c[4]) {
                f =
                    c[3];
                g = c[4]
            }
            b.push({
                book: e.book,
                chapter: f,
                verse: g,
                text: k,
                version: c[8]
            })
        }
        if (!c && (c = h.matchFirst.exec(a))) {
            e = z(c);
            b.push(RegExp.leftContext);
            b.push(e[0]);
            l = e[1] + RegExp.rightContext
        }
        if (c) return x(l, d, b, b[b.length - 1]);
        else if (!c && b.length > 0) {
            b.push(a);
            a = b;
            var i;
            for (c = a.length - 1; c >= 0; c--)
                if (a[c] === Object(a[c])) {
                    if (a[c].version) i = a[c].version;
                    if (i && !a[c].version) a[c].version = i
                }
            for (c = 0; c < a.length; c++)
                if (a[c] === Object(a[c])) {
                    i = d;
                    e = y(a[c]);
                    i.parentNode.insertBefore(e, i)
                } else {
                    i = d;
                    e = n.createTextNode(a[c]);
                    i.parentNode.insertBefore(e,
                        i)
                }
            d.parentNode.removeChild(d);
            return b.length - 1
        } else return 0
    }

    function z(a) {
        var d = a[0],
            b = "";
        if (a[1] && a[5]) {
            b = a[5];
            d = d.replace(a[5], "")
        }
        return [{
            book: a[2],
            chapter: a[3],
            verse: a[4],
            text: d,
            version: a[1] || a[6] || null
        }, b]
    }

    function y(a, d) {
        var b = n.createElement("a");
        b.href = [h.protocol, "//", h.host, "/", h.version2url[(a.version || h.version).toLowerCase()], "/", h.book2url[a.book.toLowerCase()], "/", a.chapter, "/", a.verse].join("");
        // b.className = h.linkClass;
        
        if(bverse_vars.bVerseNewWindow == 1) {
	        b.target = "_blank";
	    }
	    
        if(bverse_vars.bVersePopOver == 1) {
	        b.className = h.linkClass;
	    }
        
        b.title = h.linkTitle.replace("%s", [a.book, " ", a.chapter, a.verse ?
            ":" + a.verse : "", " (", h.version2url[(a.version || h.version).toLowerCase()], ")"
        ].join(""));
        b.innerHTML = d || a.text;
        return b
    }

    function u(a) {
        return {}.toString.call(a) === "[object String]"
    }

    function r(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    var o = {
            host: "bibles.org",
            confID: "bw-highlighter-config",
            srcID: "bw-highlighter-src",
            linkClass: "biblesearch-linker"
        },
        E = {
            fixYoutube: true,
            versionChooser: false,
            maxdepth: 10,
            version: "nld-NBG51",
            iframe: true,
            autoparse: true,
            linkTitle: "Lees %s",
            ignore: "highlighter-skip",
            ssl: "match"
        },
        h = {},
        j, A;
    BIBLESEARCH.jQuire({
        atLeast: "1.7.0",
        atMost: "1.8.3",
        rejectIf: function(a) {
            return a !== BIBLESEARCH.jQuery && typeof a.fn.fancybox !== "undefined"
        },
        onLoad: function(a) {
            j = a;
            var d = p.ABS_LINKER,
                b = {},
                e = BIBLESEARCH.highlighterBooks || {},
                c = BIBLESEARCH.highlighterVersions || {},
                g = [],
                f = [],
                k = [],
                l, i = {
                    book2url: {},
                    version2url: {}
                },
                v = {},
                m, s, t;
            for (s in e)
                if (e.hasOwnProperty(s)) {
                    l = r(e[s]).split(",");
                    g.push.apply(g, l);
                    for (t = 0; t < l.length; t++) i.book2url[l[t].toLowerCase()] = s
                }
            for (m in c)
                if (c.hasOwnProperty(m)) {
                    v[m] =
                        true;
                    f.push(r(m));
                    k.push(m);
                    i.version2url[m.toLowerCase()] = m;
                    e = c[m];
                    if (typeof v[e] === "undefined") {
                        v[e] = true;
                        f.push(r(e));
                        i.version2url[e.toLowerCase()] = m
                    }
                }
            f = f.join("|");
            c = "(\\s*[\\[(]?\\b(" + f + ")\\b[\\])]?)?";
            i.matchFirst = RegExp(["(?:(" + f + "):)?", "\\b(" + g.join("|") + ")\\b", "(?:\\s+|\\.)\\s*(\\d+)(?:\\s*[:,\\.]\\s*(\\d+(?:-\\d+)?))?", c].join(""), "i");
            i.matchNext = RegExp(["^(\\s*[\\.;,\\-]\\s*)((\\d+)(?::(\\d+))?(?:(\\s*-\\s*)(\\d+))?", c, ")"].join(""), "i");
            i.allOsisIDs = k;
            f = n.getElementById(o.srcID);
            g = n.getElementById(o.confID);
            if (f)
                if ((f = f.src.match(/^(?:https?:)?\/\/([^\/]+)/)) && f[1]) o.host = f[1];
            if (g) b = j(g).data();
            else if (d && d === Object(d)) b = d;
            b.version && !i.version2url[b.version.toLowerCase()] && delete b.version;
            if (b.hasOwnProperty("maxdepth")) {
                b.maxdepth = parseInt(b.maxdepth, 10);
                b.maxdepth <= 0 && delete b.maxdepth
            }
            if (b.hasOwnProperty("ignore"))
                if (u(b.ignore)) b.ignore = b.ignore.replace(/^\./, "");
                else delete b.ignore;
            if (b.hasOwnProperty("ssl"))
                if (u(b.ssl) && b.ssl.match(/^(?:on|off|match)$/i)) b.ssl = b.ssl.toLowerCase();
                else delete b.ssl;
            o.linkClassMatch = RegExp("\\b" + r(o.linkClass) + "\\b", "i");
            o.existingLinkMatch = RegExp("^https?://" + o.host + "/(?:" + i.allOsisIDs.join("|") + ")/", "i");
            d = j.extend(E || {}, b, o, i);
            d.ignoreClassMatch = RegExp("\\b" + r(d.ignore) + "\\b", "i");
            d.protocol = d.ssl === "match" && n.location.protocol.match(/^http/) ? n.location.protocol : ["http", d.ssl === "on" ? "s" : "", ":"].join("");
            h = d;
            a(C)
        }
    });
    A = function() {
        return "".trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^\s+/, "").replace(/\s+$/, "")
        }
    }()
})(window, document);