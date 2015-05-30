/*! Copyright (C) Neave Interactive, neave.com */ ! function (a, b, c, d, e, f, g) {
    a.GoogleAnalyticsObject = e, a[e] = a[e] || function () {
        (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "", "auto"), ga("send", "pageview"),
    function () {
        "use strict";

        function a(a) {
            a.preventDefault()
        }

        function b(a) {
            a.stopImmediatePropagation()
        }

        function c(a) {
            var b = new Image;
            b.src = "/assets/images/" + a
        }
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            setTimeout(a, 1e3 / 60)
        }, window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
            clearTimeout(a)
        }, window.on = window.addEventListener, window.AudioContext = window.AudioContext || window.webkitAudioContext, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        try {
            0 !== window.orientation && (window.orientation = 0)
        } catch (d) {}
        try {
            var e = document.querySelector.bind(document),
                f = document.querySelectorAll.bind(document),
                g = document.addEventListener.bind(document);
            Element.prototype.get = Element.prototype.querySelector, Element.prototype.getAll = Element.prototype.querySelectorAll, Element.prototype.on = Element.prototype.addEventListener, Element.prototype.off = Element.prototype.removeEventListener, Element.prototype.onScope = function (a, b, c, d) {
                this.on(b, function (b) {
                    c.call(a, b)
                }, !!d)
            }, Element.prototype.show = function () {
                this.style.display = "block"
            }, Element.prototype.hide = function () {
                this.style.display = "none"
            }
        } catch (d) {}
        Math.clamp = function (a, b, c) {
            return Math.max(b, Math.min(a, c))
        };
        var h = function () {
                function a() {
                    l.fitBalls(), i.width = window.innerWidth, i.height = window.innerHeight, l.fitBalls()
                }

                function b() {
                    document.hidden || document.webkitHidden || document.mozHidden ? l.pause() : i.isEnabled() && (a(), l.play())
                }

                function c(a) {
                    a && a.acceleration && void 0 !== a.acceleration.x && void 0 !== a.acceleration.y && (n.x = a.acceleration.x / 2, n.y = a.acceleration.y / 2)
                }

                function d(a) {
                    if (a && void 0 !== m.pitch && void 0 !== m.roll) {
                        var b = a.beta,
                            c = a.gamma;
                        if (!j.isMobile && 0 === b && 0 === c) return;
                        j.isMobile || (b = 90), b > 80 ? j.isMobile && (c = 0) : c > 90 ? c = 180 - c : -90 > c && (c = -180 - c), m.roll += (c / 90 * h - m.roll) / 4, m.pitch = b / 90 * h
                    }
                }

                function e() {
                    i.width = window.innerWidth, i.height = window.innerHeight, window.scrollTo(0, 0), a()
                }

                function f() {
                    var a, b = document.createElement("p"),
                        c = {
                            webkitTransform: "-webkit-transform",
                            transform: "transform"
                        };
                    document.body.insertBefore(b, null);
                    console.log(c)
                    for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
                    return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
                }
                var h, j = {},
                    k = !1,
                    m = {
                        pitch: 0,
                        roll: 0
                    },
                    n = {
                        x: 0,
                        y: 0
                    };
                return j.getForces = function () {
                    var a, b;
                    switch ((window.orientation + 360) % 360) {
                    case 90:
                        a = -n.y + m.pitch, b = -n.x - m.roll;
                        break;
                    case 180:
                        a = -n.x - m.roll, b = -n.y - m.pitch;
                        break;
                    case 270:
                        a = n.y - m.pitch, b = n.x + m.roll;
                        break;
                    default:
                        a = n.x + m.roll, b = -n.y + m.pitch
                    }
                    return {
                        x: a,
                        y: b
                    }
                }, j.getRoll = function () {
                    return -90 * m.roll / h - window.orientation % 180
                }, j.getGravity = function () {
                    return h
                }, j.setGravity = function (a) {
                    h = j.isMobile && i.getSquareSize() < 600 ? a / 2 : a, j.isMobile || (m.pitch = h)
                }, j.init = function () {
                    if (k || !document.body.classList || !f()) return !1;
                    if (k = !0, j.isMobile = document.body.classList.contains("mobile"), g("webkitvisibilitychange", b, !1), window.on("devicemotion", c, !1), window.on("deviceorientation", d, !1), j.isMobile) {
                        if (window.screen) {
                            var h = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
                            h && h("portrait-primary")
                        }
                        window.on("orientationchange", e, !1)
                    } else window.on("resize", a, !1);
                    return a(), navigator.standalone && document.body.classList.add("app"), !0
                }, j
            }(),
            i = function () {
                function b() {
                    this.x = 0, this.y = 0, this.dx = 0, this.dy = 0, this.offsetX = 0, this.offsetY = 0, this.down = !1, this.size = 120
                }

                function c(b) {
                    j.pointer.down = !0, j.pointer.updateSize(), l.bounceBalls(120), a(b)
                }

                function d(a) {
                    j.pointer.move(a.clientX, a.clientY)
                }

                function f() {
                    j.pointer.down = !1, l.releaseBalls()
                }

                function g(b) {
                    b.touches && 1 === b.touches.length && (j.pointer.down = !0, j.pointer.updateSize(), j.pointer.move(b.touches[0].clientX, b.touches[0].clientY)), a(b)
                }

                function h(a) {
                    a.touches && 1 === a.touches.length && j.pointer.move(a.touches[0].clientX, a.touches[0].clientY)
                }
                var i, j = {},
                    k = !1,
                    m = !1;
                return b.prototype.move = function (a, b) {
                    this.dx = a - this.x, this.dy = b - this.y, this.x = a, this.y = b
                }, b.prototype.setOffset = function (a, b, c) {
                    var d = c / 180 * Math.PI,
                        e = Math.sin(d),
                        f = Math.cos(d);
                    this.offsetX = f * a - e * b, this.offsetY = e * a + f * b
                }, b.prototype.updateSize = function () {
                    this.size = j.getSquareSize() < 600 ? 50 : 120
                }, j.pointer = new b, j.width = 0, j.height = 0, j.error = !1, j.getSquareSize = function () {
                    return Math.sqrt(j.width * j.height)
                }, j.swapMode = function (a, b) {
                    i && (i.classList.remove(b), i.classList.add(a))
                }, j.add = function (a) {
                    i && i.appendChild(a)
                }, j.enable = function () {
                    i && (i.classList.add("grab"), m = !0)
                }, j.isEnabled = function () {
                    return m
                }, j.hide = function () {
                    e && (e(".stage").style.display = "none")
                }, j.init = function () {
                    k || (k = !0, i = e(".stage"), i && (i.on("mousedown", c, !1), i.on("mousemove", d, !1), i.on("mouseup", f, !1), i.on("mouseleave", f, !1), i.on("contextmenu", a, !1), i.on("touchstart", g, !1), i.on("touchmove", h, !1), i.on("touchend", f, !1), i.on("touchcancel", f, !1)))
                }, j
            }(),
            j = function () {
                function c(a, b, c, d, e, f) {
                    this.x = a, this.y = b, this.px = c, this.py = d, this.radius = e, this.id = f, this.draggable = !1, this.drag = !1, this.roll = !1, this.angle = 0, this.el = null
                }

                function d(a) {
                    a && (this.draggable ? (this.drag = !0, i.pointer.setOffset((a.offsetX || a.layerX) + parseFloat(this.el.style.left), (a.offsetY || a.layerY) + parseFloat(this.el.style.top), this.angle)) : l.popBubble(this), b(a))
                }

                function e(c) {
                    if (c) {
                        if (c.touches && 1 === c.touches.length) {
                            this.drag = !0;
                            var d = c.touches[0].clientX,
                                e = c.touches[0].clientY;
                            i.pointer.x = d, i.pointer.y = e, i.pointer.setOffset(d - this.x, e - this.y, 0)
                        }
                        a(c), b(c)
                    }
                }

                function f(a) {
                    var b = document.createElement("div");
                    return b.onScope(a, "mousedown", d), b.onScope(a, "mouseup", a.release), b.onScope(a, "touchstart", e), b.onScope(a, "touchend", a.release), b.onScope(a, "touchcancel", a.release), b
                }
                var g = ["white", "purple", "yellow", "pink", "green", "red", "orange", "blue", "cyan", "black"],
                    j = ["blue", "green", "brown", "gray", "pink", "purple", "yellow"];
                return c.prototype.setRadius = function (a) {
                    this.radius = a, this.el.style.width = this.el.style.height = 2 * this.radius + "px", this.el.style.left = this.el.style.top = -this.radius + "px"
                }, c.prototype.setMode = function (a) {
                    switch (this.el = this.el || f(this), this.el.innerHTML = "", this.el.style.backgroundPosition = "", this.el.className = "ball", this.roll = !1, this.drag = !1, this.draggable = !0, this.angle = 0, a) {
                    case "plastic":
                        this.el.classList.add(g[this.id % g.length]);
                        break;
                    case "emoji":
                        this.el.style.backgroundPosition = this.id % 5 * 25 + "% " + Math.floor(this.id / 5) % 5 * 25 + "%", this.roll = !0;
                        break;
                    case "bubbles":
                        this.draggable = h.isMobile;
                        break;
                    case "eyes":
                        this.el.innerHTML = '<div class="iris"></div>', this.el.classList.add(j[this.id % j.length]), this.roll = !0
                    }
                    this.setRadius(this.radius), this.move()
                }, c.prototype.force = function (a, b) {
                    this.x += a, this.y += b, this.roll && (this.angle += (this.x - this.px) / this.radius * 36);
                    var c = 2 * this.x - this.px,
                        d = 2 * this.y - this.py;
                    this.px = this.x, this.py = this.y, this.x = c, this.y = d
                }, c.prototype.release = function () {
                    this.drag && (this.drag = !1, this.px = this.x - .3 * i.pointer.dx, this.py = this.y - .3 * i.pointer.dy)
                }, c.prototype.move = function (a) {
                    var b = "translate3d(" + this.x + "px," + this.y + "px,0)";
                    this.roll || (this.angle = a), this.angle && (b += "rotateZ(" + this.angle + "deg)"), this.el.style.webkitTransform = this.el.style.transform = b
                }, c
            }(),
            k = function () {
                function a() {
                    b[1].className = "bg", b[1].hide()
                }
                var b, c = {},
                    d = !1;
                return c.show = function (c, d) {
                    b[0].classList.add(c), b[1].classList.add("fade"), b[1].style.opacity = 0, d || a()
                }, c.swap = function (a) {
                    b[1].show(), b[1].classList.add(a), b[1].style.opacity = 1, b[0].classList.remove(a)
                }, c.init = function () {
                    d || (d = !0, b = f(".bg"), b[1].on("transitionend", a, !1))
                }, c
            }(),
            l = function () {
                function a(a, b) {
                    i.swapMode(a, y), k.show(a, b), y = a, s(b), E = !0, o.enable(), o.setMode(a)
                }

                function b(a) {
                    B = F ? .1 : a, A = Math.pow(B / P, 2)
                }

                function d() {
                    for (var a = K; a--;) {
                        var b, c, d, e, f = G[a];
                        i.pointer.down && (b = f.x - i.pointer.x, c = f.y - i.pointer.y, d = Math.sqrt(b * b + c * c), d > 0 ? (e = d - f.radius - i.pointer.size, 0 > e && (f.x -= b * e / d / 2, f.y -= c * e / d / 2)) : (f.x += Math.random(), f.y -= Math.random()));
                        for (var g = K; g--;)
                            if (g !== a) {
                                var h = G[g];
                                if (b = f.x - h.x, c = f.y - h.y, d = Math.sqrt(b * b + c * c), d > 0) {
                                    if (e = d - f.radius - h.radius, 0 > e) {
                                        var j = b * e / d / 2,
                                            k = c * e / d / 2;
                                        f.x -= j, f.y -= k, h.x += j, h.y += k
                                    }
                                } else f.x += Math.random(), f.y -= Math.random()
                            }
                    }
                }

                function e() {
                    for (var b = h.getGravity() < 0, c = 0, d = K; d--;) {
                        var e = G[d];
                        if (!e.drag) {
                            var f = e.px - e.x,
                                g = e.py - e.y;
                            e.x < e.radius ? (e.x = e.radius, e.px = e.x - f * O) : e.x > i.width - e.radius && (e.x = i.width - e.radius, e.px = e.x - f * O), (h.isMobile || b) && e.y < e.radius ? E ? (e.y = e.radius, e.py = e.y - g * O) : e.y < -2 * e.radius && c++ : e.y < -2 * i.height - e.radius ? (e.y = -2 * i.height - e.radius, e.py = e.y - g * O) : (h.isMobile || !b) && e.y > i.height - e.radius ? E ? (e.y = i.height - e.radius, e.py = e.y - g * O) : e.y > i.height + 2 * e.radius && c++ : e.y > 3 * i.height - e.radius && (e.y = 3 * i.height - e.radius)
                        }
                    }!E && c > K - 1 && a(z, !0)
                }

                function f(a, b, c) {
                    for (var d = K; d--;) {
                        var e = G[d],
                            f = e.x - a,
                            g = e.y - b,
                            h = Math.sqrt(f * f + g * g);
                        if (h < e.radius + c) return !0
                    }
                    return !1
                }

                function g() {
                    for (var a = N; a--;) {
                        var b = new j(-200, -200, -200, -200, 50, G.length);
                        b.setMode(y), G.push(b), i.add(b.el)
                    }
                }

                function l(a) {
                    var b = G[a];
                    b.x = b.y = b.px = b.py = -200, b.setRadius(50), b.move()
                }

                function p(a, b, c) {
                  
                    c = c && !h.isMobile;
                    for (var d = 50; d;) {
                        var e = Math.random() * (i.width - 2 * b) + b,
                            g = Math.random() * (i.height * (c ? 2 : 1) - 2 * b) + b;
                        if (c && (g += i.height * (h.getGravity() < 0 ? 1 : -2)), !f(e, g, b) && !n.hitTest(e, g, b)) {
                            var j = G[a];
                            return j.x = e, j.y = g, j.px = e + 2 * (Math.random() - .5) * B, j.py = g + (Math.random() - .5) * B, j.setRadius(b), j.setMode(y), !0
                        }
                        d--
                    }
                    return !1
                }

                function q(a) {
                    return Math.ceil(Math.clamp(a, M, r()))
                }

                function r() {
                    return Math.clamp(25 * Math.ceil(i.getSquareSize() / 120) - M, 2 * M, N)
                }

                function s(a) {
                    
                    L && (K = q(L));
                console.log(K)
                    var b, c = Math.ceil(i.getSquareSize()),
                        d = 3,
                        e = 0;
                    console.log(c)
                    switch (y) {
                    case "plastic":
                        L || (K = q(c / 12)), H.min = 600 > c ? 6 : 4, H.max = Math.clamp(K / 1.2, 45, 80), h.setGravity(2);
                        break;
                    case "emoji":
                        L || (K = q(800 > c ? 25 : c / 16)), H.min = H.max = 800 > c ? 25 : 35, h.setGravity(1.5);
                        break;
                    case "bubbles":
                        L || (K = q(c / 12)), H.min = 4, H.max = Math.clamp(K / 1.1, 60, 100), h.setGravity(-.75), d = 4;
                        break;
                    case "eyes":
                        L || (K = q(c / 14)), H.min = 15, H.max = Math.clamp(K / 1.3, 35, 80), h.setGravity(2), d = 2
                    }
        console.log(b)
                    for (b = N; b--;) l(b);
                    for (b = N; b--;)
                        if (K > b) {
                            var f = Math.pow(b, d) / (Math.pow(K, d) / (H.max - H.min)) + H.min;
                            p(e, f, a) ? e++ : K--
                        }
                    console.log(K)
                    
                    o.setTotal(K, r())
                }

                function t() {
                    for (var a = h.getForces(), b = K; b--;) {
                        var c = G[b];
                        c.drag ? (c.x = i.pointer.x - i.pointer.offsetX, c.y = i.pointer.y - i.pointer.offsetY) : c.force(a.x * A, a.y * A)
                    }
                }

                function u() {
                    for (var a = h.getRoll(), b = K; b--;) G[b].move(a)
                }

                function v() {
                    return window.performance ? performance.now() : Date.now()
                }

                function w() {
                    J += (1e3 / (v() - I) - J) / 4, I = v(), b(60 / Math.clamp(J, 30, 60)), m.volume > 0 && C.bounceBalls(Math.sqrt(m.volume * m.volume));
                    for (var a = P; a--;) t(), d(), e();
                    u(), x = requestAnimationFrame(w)
                }
                var x, y, z, A, B, C = {},
                    D = !1,
                    E = !0,
                    F = !1,
                    G = [],
                    H = {
                        min: 0,
                        max: 0
                    },
                    I = 0,
                    J = 0,
                    K = 0,
                    L = 0,
                    M = 25,
                    N = 250,
                    O = .8,
                    P = 3;
                return C.useSlowSpeed = function (a) {
                    F = a, b(1), o.useSlowSpeed(F)
                }, C.swapMode = function (b) {
                    C.useSlowSpeed(!1), y && E ? (C.bounceBalls(20 * h.getGravity()), z = b, L = 0, E = h.isMobile, k.swap(y), h.isMobile && setTimeout(a, 20, b, !0)) : a(b, !1)
                }, C.setTotal = function (a) {
                    console.log(a)
                    C.swapMode(y), L = a
                }, C.bounceBalls = function (a) {
                    if (a && E) {
                        a = Math.abs(a) / B * A;
                        for (var b = K; b--;) {
                            var c = G[b];
                            h.getGravity() < 0 && c.y < 2 * c.radius ? c.force(0, a + Math.random()) : c.y > i.height - 2 * c.radius && c.force(0, -a - Math.random())
                        }
                    }
                }, C.fitBalls = function () {
                    if (!i.error && i.width && i.height) {
                        for (var a, b = window.innerHeight - i.height || 0, c = window.innerWidth - i.width || 0, f = K; f--;) a = G[f], i.isEnabled() ? (0 > c || 0 > b) && (a.x += c, a.y += b) : (a.x += c / 2, a.y += b / 2);
                        for (f = P; f--;) d(), e();
                        for (f = K; f--;) a = G[f], a.px = a.x, a.py = a.y;
                        u(), o.setTotal(K, r())
                    }
                }, C.releaseBalls = function () {
                    for (var a = K; a--;) {
                        var b = G[a];
                        b && b.release()
                    }
                }, C.popBubble = function (a) {
                    "bubbles" === y && (p(a.id, a.radius, !0), a.py = a.y - 20 * Math.random())
                }, C.pause = function () {
                    cancelAnimationFrame(x)
                }, C.play = function () {
                    i.error || (i.enable(), cancelAnimationFrame(x), J = 60, w())
                }, C.init = function (b) {
                    if (!D) {
                        D = !0, h.isMobile && (N = 100), C.useSlowSpeed(!1), k.init(), g(), a(b, !1);
                        var d = window.devicePixelRatio >= 1.3;
                        c("emoji" + (d ? "-2x" : "") + ".jpg"), c("underwater.jpg")
                    }
                }, C
            }(),
            m = function () {
                function a() {
                    h && h.getByteFrequencyData(j);
                    for (var a = 0, b = j.length; b--;) a += j[b];
                    l.volume = a / j.length
                }

                function b(b) {
                    if (window.AudioContext) {
                        e = b;
                        var d = e.getAudioTracks();
                        d.length > 0 && (f = d[0], f.addEventListener && f.addEventListener("ended", c, !1), k = new AudioContext, h = k.createAnalyser(), h.fftSize = 1024, h.smoothingTimeConstant = .3, j = new Uint8Array(h.frequencyBinCount), g = k.createMediaStreamSource(e), g.connect(h), i = k.createScriptProcessor(1024, 1, 1), i.addEventListener("audioprocess", a, !1), i.connect(k.destination), m = !0, o.useMic(!0))
                    }
                }

                function c() {
                    g && g.disconnect(0), i && (i.removeEventListener("audioprocess", a), i.disconnect(0)), n = m = !1, o.useMic(!1), l.volume = 0
                }

                function d() {
                    return navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.Promise
                }
                var e, f, g, h, i, j, k, l = {},
                    m = !1,
                    n = !1;
                return l.volume = 0, l.isCapable = function () {
                    return !!navigator.getUserMedia || d()
                }, l.help = function () {
                    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) ? alert("Sorry, Bouncy Balls cannot access the microphone on your device.") : alert("Please use Google Chrome to bounce the balls with your microphone!")
                }, l.toggle = function () {
                    !l.isCapable() || m || n ? f && (f.stop ? f.stop() : e && e.stop && e.stop(), c(), n = !1) : (d() ? navigator.mediaDevices.getUserMedia({
                        video: !1,
                        audio: !0
                    }).then(b)["catch"](c) : navigator.getUserMedia({
                        video: !1,
                        audio: !0
                    }, b, c), n = !0)
                }, l
            }(),
            n = function () {
                function b() {
                    g.parentNode.removeChild(g)
                }

                function c(a) {
                    a && "top" === a.propertyName && (h.off("transitionend", c), b())
                }

                function d(e) {
                    return a(e), window.location !== window.top.location ? (window.top.location.href = window.location.href, void 0) : (j.off("click", d), j.off("touchstart", a), j.off("touchend", d), "none" === getComputedStyle(f).display ? b() : (h.classList.remove("fade-in"), h.classList.add("drop"), h.style.top = "125%", h.style.opacity = 0, h.on("transitionend", c, !1), j.parentNode.removeChild(j)), f.parentNode.removeChild(f), o.fadeIn(250), o.show(500), l.play(), void 0)
                }
                var f, g, h, j, k = {},
                    m = !1;
                return k.hitTest = function (a, b) {
                    if (i.isEnabled() || i.width < 601 || i.height < 481) return !1;
                    var c = i.width / 2,
                        d = i.height / 2,
                        e = 380,
                        f = 190;
                    return a > c - e && c + e > a && b > d - f && d + f > b ? !0 : !1
                }, k.error = function () {
                    if (i.hide(), ga("send", "event", "Error", navigator.userAgent), document.querySelector) {
                        document.querySelector(".intro-text").style.display = "none";
                        var a = document.querySelector(".intro-text.error");
                        a && (a.style.display = "block", a.classList ? (a.classList.add("fade"), setTimeout(function () {
                            a.style.opacity = 1
                        }, 20)) : a.style.opacity = 1)
                    }
                }, k.init = function () {
                    if (!m) {
                        m = !0, g = e(".intro-main"), g.style.opacity = 0, g.show(), g.classList.add("fade"), f = e(".intro-text"), f.classList.add("fade"), setTimeout(function () {
                            f.style.opacity = g.style.opacity = 1
                        }, 20), h = g.get("h1"), h.on("touchstart", a, !1);
                       /* var b = e(".intro-text.noscript");
                        console.log(b)
                        b.parentNode.removeChild(b);*/
                       /* var c = e(".intro-text.error");
                        c.parentNode.removeChild(c),*/
                            j = g.get(".button"), j.on("click", d, !1), j.on("touchstart", a, !1), j.on("touchend", d, !1)
                            j.click();
                       
                        /*var emoji = document.getElementById('emoji');
                        emoji.click();*/
                        
                            
                       
                    }
                }, k
            }(),
            o = function () {
                function b() {
                    return I - H
                }

                function d(a) {
                    B && (B.style.webkitTransform = B.style.transform = "translate3d(" + Math.clamp(Math.round(a || 0), 0, b()) + "px,0,0)")
                }

                function f(a) {
                    K = Math.clamp(Math.round(a), J, L), z && (z.innerHTML = M ? K : A)
                }

                function i(a) {
                    console.log(a)
                    M = !0, j(a)
                }

                function j(a) {
                    console
                    if (M && y) {
                        var c = y.getBoundingClientRect();
                        if (c && c.left) {
                            var e = a.clientX - c.left - H / 2;
                            d(e), f(e / b() * (L - J) + J)
                        }
                    }
                }

                function k() {
                    M && (M = !1, l.setTotal(K), E.disable())
                }

                function n(b) {
                    a(b), l.swapMode(b.target.id || b.target.getAttribute("for")), E.disable()
                }

                function o() {
                    document.exitFullscreen ? document.exitFullscreen() : document.exitFullScreen ? document.exitFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozExitFullScreen ? document.mozExitFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
                }

                function p(a) {
                    a && (a.requestFullscreen ? a.requestFullscreen() : a.requestFullScreen ? a.requestFullScreen() : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen && a.mozRequestFullScreen())
                }

                function q() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled
                }

                function r() {
                    return document.fullscreenElement || document.fullScreenElement || document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreenElement || document.mozFullScreen
                }

                function s() {
                    r() ? o() : p(document.body)
                }

                function t() {
                    D.checked = r()
                }

                function u() {
                    l.useSlowSpeed(C.checked)
                }
                var v, w, x, y, z, A, B, C, D, E = {},
                    F = !1,
                    G = !1,
                    H = 16,
                    I = 120,
                    J = 25,
                    K = 100,
                    L = 250,
                    M = !1;
                return E.setTotal = function (a, c) {
                    J > a || (L = c, f(a), d((a - J) / (L - J) * b()), ga("send", "event", "Total", a))
                }, E.setMode = function (a) {
                    var b = e('.menu-mode input[id="' + a + '"]');
                    b && (b.checked = !0), ga("send", "event", "Mode", a)
                }, E.useSlowSpeed = function (a) {
                    C && (C.checked = a), ga("send", "event", "Speed", a ? "slow" : "normal")
                }, E.useMic = function (a) {
                    x && (a ? (x.classList.remove("off"), x.classList.add("on")) : (x.classList.remove("on"), x.classList.add("off"))), ga("send", "event", "Microphone", a ? "on" : "off")
                }, E.enable = function () {
                    w && (w.disabled = !1)
                }, E.disable = function () {
                    w && (w.disabled = !0)
                }, E.fadeIn = function (a) {
                    v && (v.style.opacity = 0, v.show(), v.classList.add("fade"), setTimeout(function () {
                        v.style.opacity = 1
                    }, a || 20))
                }, E.show = function (a) {
                    v && setTimeout(function () {
                        v.classList.remove("hidden"), v.classList.add("visible"), G = !0
                    }, a || 20)
                }, E.hide = function () {
                    v && (v.classList.remove("visible"), v.classList.add("hidden"), G = !1)
                }, E.init = function () {
                    if (!F) {
                        F = !0, v = e(".menu"), w = v.get(".menu fieldset"), x = e(".mic"), m.isCapable() ? (c("microphone-on.svg"), x.on("click", m.toggle, !1)) : (h.isMobile && e(".menu-mic").hide(), x.on("click", m.help, !1)), z = v.get(".menu-total h2"), A = z.innerHTML, y = v.get(".range"), B = y.get(".thumb"), y.on("mousedown", i, !1), v.on("mousemove", j, !1), document.body.on("mouseup", k, !1), document.body.on("mouseleave", k, !1), e(".menu-mode").on("touchstart", a, !1);
                        for (var b = v.getAll(".menu-mode input"), d = v.getAll(".menu-mode label"), f = b.length; f--;) b[f].on("change", n, !1), d[f].on("touchstart", n, !1);
                        C = e("#speed"), C.on("click", u, !1), D = e("#fullscreen"), q() ? (D.on("click", s, !1), g("webkitfullscreenchange", t, !1), g("mozfullscreenchange", t, !1), g("fullscreenchange", t, !1), t()) : e(".menu-fullscreen").hide()
                    }
                }, E
            }();
        g ? g("DOMContentLoaded", function () {
            h.init() ? (i.init(), o.init(), l.init("emoji"), window.on("load", n.init, !1)) : n.error()
        }, !1) : n.error();
        var p = window.applicationCache;
        p && (p.onupdateready = function () {
            p.status === p.UPDATEREADY && (p.swapCache(), location.reload())
        })
    }();