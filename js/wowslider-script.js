jQuery.extend(jQuery.easing, {
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInBackQ: function (e, f, a, j, i, g) {
        var h = (f /= i) * f;
        return a + j * h * (4 * f * h - 8 * h + 8 * f - 3)
    },
    easeOutBackQ: function (e, f, a, j, i, g) {
        var h = (f /= i) * f;
        return a + j * (4 * h * f * h - 12 * h * h + 16 * h * f - 13 * h + 6 * f)
    },
    easeInBackQ2: function (e, f, a, j, i, g) {
        var h = (f /= i) * f;
        return a + j * h * (1.5 * f * h - 2.5 * h + 5 * f - 3)
    },
    easeOutBackQ2: function (e, f, a, j, i, g) {
        var h = (f /= i) * f;
        return a + j * (1.5 * h * f * h - 5 * h * h + 10 * h * f - 12 * h + 6.5 * f)
    }
});

function ws_louvers(f, q, g) {
    var h = jQuery,
        m = h(this),
        a = f.cols || 10,
        F = 2.5,
        c = 2,
        t = f.perspective || 2000,
        s = g.find(".ws_list"),
        E = [],
        b = 5,
        v = {},
        n = h("<div>").addClass("ws_effect ws_louvers").appendTo(g),
        p = f.support.transform && f.support.transition && f.support.perspective,
        o = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/WOW Slider/g.test(navigator.userAgent);
    var w = [];
    n.css({
        position: "absolute",
        top: 0,
        left: 0,
        width: g.width(),
        height: g.height(),
        transform: "translate3d(0,0,0)",
        transformOrigin: (f.width / 2) + "px " + (f.height / 2) + "px 0",
        perspective: t + 2000
    }).hide();
    for (var l = 0; l < a; l++) {
        var z = l % a,
            y = Math.floor(l / a);
        var C = h("<div>").css({
                position: "absolute",
                left: 100 * z / a + "%",
                top: 0,
                outline: "1px solid transparent",
                transformStyle: o ? "flat" : "preserve-3d",
                overflow: p ? "visible" : "hidden"
            }).appendTo(n),
            x = h("<div>").css({
                transform: "scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",
                outline: "1px solid transparent",
                transformStyle: "preserve-3d"
            }).appendTo(C),
            u = h("<div>").addClass("ws_front_image").appendTo(x),
            B = p ? h("<div>").addClass("ws_back_image").appendTo(x) : 0;
        u.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)"
        }).append(h("<img>").css({
            left: -z * 100 + "%",
            top: -y * 100 + "%",
            position: "absolute",
            outline: "1px solid transparent"
        }));
        if (p) {
            B.css({
                position: "absolute",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg) translate3d(0,0," + b + "px)"
            }).append(h("<img>").css({
                left: -z * 100 + "%",
                top: -y * 100 + "%",
                position: "absolute",
                outline: "1px solid transparent"
            }))
        }
        var r = {
            position: "absolute",
            outline: "1px solid transparent"
        };
        E[l] = {
            part: x,
            front: u,
            back: B,
            wrapper: C,
            leftEdge: p ? h("<div>").addClass("ws_left_edge").css(r).appendTo(x) : 0,
            rightEdge: p ? h("<div>").addClass("ws_right_edge").css(r).appendTo(x) : 0,
            topEdge: p ? h("<div>").addClass("ws_top_edge").css(r).appendTo(x) : 0,
            bottomEdge: p ? h("<div>").addClass("ws_bottom_edge").css(r).appendTo(x) : 0
        }
    }

    function A(L) {
        var H = {},
            J = q.get(L),
            M = f.width / a,
            N = f.height;
        for (var I = 0; I < a; I++) {
            var L = I % a,
                K = Math.floor(I / a);
            H[I] = D(J, {
                x: L * M,
                y: K * N,
                w: M,
                h: N
            })
        }
        return H
    }

    function G(H, K, j, I, J) {
        for (var i in K) {
            if (typeof E[i] !== "function") {
                K[i].topEdge.css({
                    width: I,
                    height: H,
                    background: j[i],
                    transform: "rotateX(90deg) translate3d(0,-" + H / 2 + "px," + H / 2 + "px)"
                });
                K[i].bottomEdge.css({
                    width: I,
                    height: H,
                    background: j[i],
                    transform: "rotateX(90deg) translate3d(0,-" + H / 2 + "px," + (-J + H / 2) + "px)"
                });
                K[i].leftEdge.css({
                    width: H,
                    height: J,
                    background: j[i],
                    transform: "rotateY(90deg) translate3d(" + H / 2 + "px,0,-" + H / 2 + "px)"
                });
                K[i].rightEdge.css({
                    width: H,
                    height: J,
                    background: j[i],
                    transform: "rotateY(90deg) translate3d(" + H / 2 + "px,0," + (I - H / 2) + "px)"
                })
            }
        }
    }

    function e(H, I) {
        var i = 0;
        for (var j in H) {
            if (typeof H[j] !== "function") {
                (function (J, K) {
                    wowAnimate(function (M) {
                        var S, Q, R, P = "",
                            L = {};
                        if (M <= 0.5) {
                            S = h.easing.easeInBack(1, M * 2, 0, 1, 1, 1).toFixed(3);
                            Q = h.easing.easeInBackQ(1, M * 2, 0, 1, 1, 1).toFixed(3);
                            R = h.easing.easeInBackQ2(1, M * 2, 0, 1, 1, 1).toFixed(3);
                            K[J].back.css("backfaceVisibility", "hidden")
                        } else {
                            S = h.easing.easeOutBack(1, (M - 0.5) * 2, 0, 1, 1, 1).toFixed(3);
                            Q = h.easing.easeOutBackQ(1, (M - 0.5) * 2, 0, 1, 1, 1).toFixed(3);
                            R = h.easing.easeOutBackQ2(1, (M - 0.5) * 2, 0, 1, 1, 1).toFixed(3);
                            K[J].back.css("backfaceVisibility", "visible")
                        }
                        for (var N in K[J].animate[M <= 0.5 ? "half" : "end"]) {
                            var T = K[J].animate[M <= 0.5 ? "begin" : "half"][N] || 0,
                                O = K[J].animate[M <= 0.5 ? "half" : "end"][N] || 0;
                            if (typeof O !== "object") {
                                if (N === "scale" || N === "rotateX" || N === "rotateY") {
                                    O = T + (O - T) * Q
                                } else {
                                    if (N === "left" || N === "top") {
                                        O = T + (O - T) * R
                                    } else {
                                        O = T + (O - T) * S
                                    }
                                }
                            }
                            if (N === "rotateX" || N === "rotateY" || N === "rotateZ") {
                                P += N + "(" + O + "deg) "
                            } else {
                                if (N === "scale") {
                                    P += N + "(" + O + ") "
                                } else {
                                    if (N === "translate3d") {
                                        P += N + "(" + (T[0] + (O[0] - T[0]) * S).toFixed(3) + "px," + (T[1] +
                                            (O[1] - T[1]) * S).toFixed(3) + "px," + (T[2] + (O[2] - T[2]) *
                                            S).toFixed(3) + "px) "
                                    } else {
                                        L[N] = O
                                    }
                                }
                            }
                        }
                        K[J].wrapper.css({
                            transform: "translate3d(" + (L.left ? L.left : 0).toFixed(3) + "px," +
                                (L.top ? L.top : 0).toFixed(3) + "px,0)"
                        });
                        delete L.left;
                        delete L.top;
                        if (P) {
                            L.transform = P
                        }
                        K[J].part.css(L)
                    }, 0, 1, K[J].animate.duration, K[J].animate.delay, function () {
                        i++;
                        if (i == K.length && I) {
                            I()
                        }
                    })
                }(j, H))
            }
        }
    }

    function k(Y, K, L, N) {
        var V = g.width(),
            U = g.height(),
            T = V / a,
            S = U,
            J = (f.duration * 0.4) > 1000 ? 1000 : (f.duration * 0.4),
            I = f.duration * 0.6,
            O = [0, 0];
        G(b, Y, v[K], T, S);
        n.css({
            transformOrigin: (V / 2) + "px " + (U / 2) + "px 0",
            width: V,
            height: U
        });
        for (var Q in Y) {
            if (typeof Y[Q] !== "function") {
                var H = w[Q].delay * J;
                if (O[1] <= H) {
                    O[0] = Q;
                    O[1] = H
                }
                Y[Q].part[0].ws_delay = [H, 0]
            }
        }
        Y[O[0]].part[0].ws_delay[1] = 1;
        for (var Q in Y) {
            if (typeof Y[Q] !== "function") {
                var P = Y[Q],
                    X = Q % a,
                    W = Math.floor(Q / a),
                    R = V * X / a,
                    M = U * W;
                P.animate = {
                    delay: P.part[0].ws_delay[0],
                    duration: I,
                    begin: {
                        left: 0,
                        top: 0,
                        width: T,
                        height: S,
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                        translate3d: [0, 0, o ? b : 0]
                    },
                    half: {
                        left: w[Q].halfLeft * T,
                        top: w[Q].halfTop * S,
                        scale: w[Q].halfScale,
                        rotateX: w[Q].rotateX / 2,
                        rotateY: w[Q].rotateY / 2,
                        translate3d: [0, 0, (o ? 1 : 0.5) * b]
                    },
                    end: {
                        left: 0,
                        top: 0,
                        scale: 1,
                        rotateX: w[Q].rotateX,
                        rotateY: w[Q].rotateY,
                        translate3d: [0, 0, b]
                    }
                };
                P.front.find("img").css(L);
                P.back.css("backfaceVisibility", "hidden").find("img").css(L);
                P.part.css({
                    width: P.animate.begin.width,
                    height: P.animate.begin.height,
                    left: P.animate.begin.left,
                    top: P.animate.begin.top
                })
            }
        }
        e(Y, N)
    }
    var d;
    this.go = function (U, K) {
        if (d) {
            return K
        }
        n.show();
        var I = h(q.get(K));
        I = {
            width: I.width(),
            height: I.height(),
            marginTop: parseFloat(I.css("marginTop")),
            marginLeft: parseFloat(I.css("marginLeft"))
        };
        w = (function () {
            var aa = [0, 1];
            var ab = [1.2, 0.8];
            var Z = [0.2, 0, -0.2];
            var Y = [180, -180];
            aa = aa[Math.floor(Math.random() * (aa.length))];
            ab = ab[Math.floor(Math.random() * (ab.length))];
            Z = Z[Math.floor(Math.random() * (Z.length))];
            Y = Y[Math.floor(Math.random() * (Y.length))];
            var j = a;
            var i = [];
            for (var X = (aa ? 0 : j); aa ? (X <= j) : (X >= 0); aa ? (X++) : (X--)) {
                i.push({
                    zIndex: X - (aa ? j : 0),
                    rotateY: Y,
                    delay: X / j,
                    halfScale: ab,
                    halfLeft: Z
                })
            }
            return i
        }());
        if (p) {
            E[0].front.find("img").on("load", function () {
                s.hide()
            });
            for (var L in E) {
                if (typeof E[L] !== "function") {
                    E[L].front.find("img").attr("src", q.get(K).src);
                    E[L].back.find("img").attr("src", q.get(U).src)
                }
            }
            if (!v[K]) {
                v[K] = A(K)
            }
            d = new k(E, K, I, function () {
                s.show();
                m.trigger("effectEnd");
                n.hide();
                for (var i in E) {
                    if (typeof E[i] !== "function") {
                        E[i].part.css({
                            transition: "",
                            transform: "rotateX(0) rotateY(0) translate3d(0,0,0)"
                        })
                    }
                }
                d = 0
            })
        } else {
            d = true;

            function V(j, i) {
                return Math.random() * (i - j + 1) + j
            }
            var Q = g.width(),
                T = g.height(),
                P = Q / a,
                S = T,
                J = Q - P * (a - 1),
                R = T;
            n.css({
                width: Q,
                height: T
            });
            var H = 0;
            for (var L in E) {
                var O = L % a,
                    N = Math.floor(L / a);
                E[L].front.find("img").attr("src", q.get(U).src).css(I);
                var W = f.duration * (1 - Math.abs((c * F - O * N) / (2 * a)));
                var M = V(-1, 1) > 0 ? 1 : -1;
                E[L].wrapper.css({
                    width: P,
                    height: S
                });
                E[L].part.css({
                    position: "absolute",
                    top: 0,
                    left: M * P,
                    opacity: 0,
                    width: P,
                    height: S
                }).animate({
                    left: 0,
                    opacity: 1
                }, W, function () {
                    H++;
                    if (H == a) {
                        s.stop(1, 1);
                        d = false;
                        m.trigger("effectEnd")
                    }
                })
            }
        }
    };

    function D(Q, H) {
        H = H || {};
        var S = 1,
            K = H.exclude || [],
            P;
        var M = document.createElement("canvas"),
            J = M.getContext("2d"),
            I = M.width = Q.naturalWidth,
            W = M.height = Q.naturalHeight;
        J.drawImage(Q, 0, 0, Q.naturalWidth, Q.naturalHeight);
        try {
            P = J.getImageData(H.x ? H.x : 0, H.y ? H.y : 0, H.w ? H.w : Q.width, H.h ? H.h : Q.height)["data"]
        } catch (R) {
            return "#ccc"
        }
        var L = (H.w ? H.w : Q.width * H.h ? H.h : Q.height) || P.length,
            N = {},
            U = "",
            T = [],
            j = {
                dominant: {
                    name: "",
                    count: 0
                }
            };
        var O = 0;
        while (O < L) {
            T[0] = P[O];
            T[1] = P[O + 1];
            T[2] = P[O + 2];
            U = T.join(",");
            if (U in N) {
                N[U] = N[U] + 1
            } else {
                N[U] = 1
            }
            if (K.indexOf(["rgb(", U, ")"].join("")) === -1) {
                var V = N[U];
                if (V > j.dominant.count) {
                    j.dominant.name = U;
                    j.dominant.count = V
                }
            }
            O += S * 4
        }
        return ["rgb(", j.dominant.name, ")"].join("")
    }
};

function ws_glass_parallax(d, l, m) {
    var f = jQuery;
    var i = f(this);
    var j = d.parallax || 0.25;
    var k = f("<div>").css({
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }).addClass("ws_effect ws_glass_parallax").appendTo(m);
    var h = !d.noCanvas && !window.opera && !!document.createElement("canvas").getContext;
    if (h) {
        try {
            document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1)
        } catch (q) {
            h = 0
        }
    }

    function t(e) {
        return Math.round(e * 1000) / 1000
    }
    var u = f("<div>").css({
        position: "absolute",
        left: 0,
        top: 0,
        overflow: "hidden",
        width: "100%",
        height: "100%",
        transform: "translate3d(0,0,0)",
        zIndex: 1
    }).appendTo(k);
    var s = u.clone().appendTo(k);
    var r = u.clone().css({
        width: "20%"
    }).appendTo(k);
    var c;
    var p = u.clone().appendTo(k).css({
        zIndex: 0
    });
    this.go = function (C, A, x) {
        var e = f(l.get(A));
        e = {
            position: "absolute",
            width: e.width(),
            height: e.height(),
            marginTop: e.css("marginTop"),
            marginLeft: e.css("marginLeft")
        };
        x = x ? 1 : -1;
        var E = f(l.get(A)).clone().css(e).appendTo(u);
        var z = f(l.get(C)).clone().css(e).appendTo(s);
        var v = f(l.get(C)).clone().css(e).appendTo(r);
        if (x == -1) {
            r.css({
                left: "auto",
                right: 0
            });
            v.css({
                left: "auto",
                right: 0
            })
        } else {
            r.css({
                left: 0,
                right: "auto"
            });
            v.css({
                left: 0,
                right: "auto"
            })
        }
        var D = (m.width() || d.width) * 1.3;
        var B = m.height() || d.height;
        var y;
        if (h) {
            if (!c) {
                c = f("<canvas>").css({
                    position: "absolute",
                    left: 0,
                    top: 0
                }).attr({
                    width: e.width,
                    height: e.height
                }).appendTo(p)
            }
            c.css(e).attr({
                width: e.width,
                height: e.height
            });
            y = o(f(l.get(C)), e, 10, c.get(0))
        }
        if (!h || !y) {
            h = 0
        }
        wowAnimate(function (G) {
            G = f.easing.swing(G);
            var L = t(x * G * D),
                F = t(x * (-D + G * D - (1 - G) * D * 0.2)),
                J = t(x * (-D * 1.4 + G * (D * 1.4 + D / 1.3))),
                w = t(-x * D * j * G),
                H = t(x * D * j * (1 - G)),
                I = t(-x * D * (j + 0.2) * G),
                K = t(x * (-D * 0.2 + G * D * 0.4));
            if (d.support.transform) {
                u.css("transform", "translate3d(" + L + "px,0,0)");
                E.css("transform", "translate3d(" + w + "px,0,0)");
                s.css("transform", "translate3d(" + F + "px,0,0)");
                z.css("transform", "translate3d(" + H + "px,0,0)");
                r.css("transform", "translate3d(" + J + "px,0,0)");
                v.css("transform", "scale(1.6) translate3d(" + I + "px,0,0)");
                p.css("transform", "translate3d(" + K + "px,0,0)")
            } else {
                u.css("left", L);
                E.css("margin-left", w);
                s.css("left", F);
                z.css("margin-left", H);
                r.css("left", J);
                v.css("margin-left", I);
                p.css("left", K)
            }
        }, 0, 1, d.duration, function () {
            k.hide();
            E.remove();
            z.remove();
            v.remove();
            i.trigger("effectEnd")
        })
    };

    function o(C, A, B, v) {
        var F = (parseInt(C.parent().css("z-index")) || 0) + 1;
        if (h) {
            var I = v.getContext("2d");
            I.drawImage(C.get(0), 0, 0, A.width, A.height);
            if (!a(I, 0, 0, v.width, v.height, B)) {
                return 0
            }
            return f(v)
        }
        var J = f("<div></div>").css({
            position: "absolute",
            "z-index": F,
            left: 0,
            top: 0
        }).css(A).appendTo(v);
        var H = (Math.sqrt(5) + 1) / 2;
        var w = 1 - H / 2;
        for (var z = 0; w * z < B; z++) {
            var D = Math.PI * H * z;
            var e = (w * z + 1);
            var G = e * Math.cos(D);
            var E = e * Math.sin(D);
            f(document.createElement("img")).attr("src", C.attr("src")).css({
                opacity: 1 / (z / 1.8 + 1),
                position: "absolute",
                "z-index": F,
                left: Math.round(G) + "px",
                top: Math.round(E) + "px",
                width: "100%",
                height: "100%"
            }).appendTo(J)
        }
        return J
    }
    var g = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298,
        271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
        284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265,
        512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
        291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
        374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
        261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389,
        383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
        294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470,
        465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
        377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315,
        312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
        263, 261, 259];
    var n = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18,
        18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

    function a(am, U, S, v, w, ad) {
        if (isNaN(ad) || ad < 1) {
            return
        }
        ad |= 0;
        var ah;
        try {
            ah = am.getImageData(U, S, v, w)
        } catch (al) {
            return false
        }
        var C = ah.data;
        var ab, aa, aj, ag, J, M, G, A, B, R, H, T, P, X, ac, K, F, L, N, W;
        var ak = ad + ad + 1;
        var Y = v << 2;
        var I = v - 1;
        var af = w - 1;
        var E = ad + 1;
        var ae = E * (E + 1) / 2;
        var V = new b();
        var Q = V;
        for (aj = 1; aj < ak; aj++) {
            Q = Q.next = new b();
            if (aj == E) {
                var D = Q
            }
        }
        Q.next = V;
        var ai = null;
        var Z = null;
        G = M = 0;
        var O = g[ad];
        var z = n[ad];
        for (aa = 0; aa < w; aa++) {
            X = ac = K = A = B = R = 0;
            H = E * (F = C[M]);
            T = E * (L = C[M + 1]);
            P = E * (N = C[M + 2]);
            A += ae * F;
            B += ae * L;
            R += ae * N;
            Q = V;
            for (aj = 0; aj < E; aj++) {
                Q.r = F;
                Q.g = L;
                Q.b = N;
                Q = Q.next
            }
            for (aj = 1; aj < E; aj++) {
                ag = M + ((I < aj ? I : aj) << 2);
                A += (Q.r = (F = C[ag])) * (W = E - aj);
                B += (Q.g = (L = C[ag + 1])) * W;
                R += (Q.b = (N = C[ag + 2])) * W;
                X += F;
                ac += L;
                K += N;
                Q = Q.next
            }
            ai = V;
            Z = D;
            for (ab = 0; ab < v; ab++) {
                C[M] = (A * O) >> z;
                C[M + 1] = (B * O) >> z;
                C[M + 2] = (R * O) >> z;
                A -= H;
                B -= T;
                R -= P;
                H -= ai.r;
                T -= ai.g;
                P -= ai.b;
                ag = (G + ((ag = ab + ad + 1) < I ? ag : I)) << 2;
                X += (ai.r = C[ag]);
                ac += (ai.g = C[ag + 1]);
                K += (ai.b = C[ag + 2]);
                A += X;
                B += ac;
                R += K;
                ai = ai.next;
                H += (F = Z.r);
                T += (L = Z.g);
                P += (N = Z.b);
                X -= F;
                ac -= L;
                K -= N;
                Z = Z.next;
                M += 4
            }
            G += v
        }
        for (ab = 0; ab < v; ab++) {
            ac = K = X = B = R = A = 0;
            M = ab << 2;
            H = E * (F = C[M]);
            T = E * (L = C[M + 1]);
            P = E * (N = C[M + 2]);
            A += ae * F;
            B += ae * L;
            R += ae * N;
            Q = V;
            for (aj = 0; aj < E; aj++) {
                Q.r = F;
                Q.g = L;
                Q.b = N;
                Q = Q.next
            }
            J = v;
            for (aj = 1; aj <= ad; aj++) {
                M = (J + ab) << 2;
                A += (Q.r = (F = C[M])) * (W = E - aj);
                B += (Q.g = (L = C[M + 1])) * W;
                R += (Q.b = (N = C[M + 2])) * W;
                X += F;
                ac += L;
                K += N;
                Q = Q.next;
                if (aj < af) {
                    J += v
                }
            }
            M = ab;
            ai = V;
            Z = D;
            for (aa = 0; aa < w; aa++) {
                ag = M << 2;
                C[ag] = (A * O) >> z;
                C[ag + 1] = (B * O) >> z;
                C[ag + 2] = (R * O) >> z;
                A -= H;
                B -= T;
                R -= P;
                H -= ai.r;
                T -= ai.g;
                P -= ai.b;
                ag = (ab + (((ag = aa + E) < af ? ag : af) * v)) << 2;
                A += (X += (ai.r = C[ag]));
                B += (ac += (ai.g = C[ag + 1]));
                R += (K += (ai.b = C[ag + 2]));
                ai = ai.next;
                H += (F = Z.r);
                T += (L = Z.g);
                P += (N = Z.b);
                X -= F;
                ac -= L;
                K -= N;
                Z = Z.next;
                M += v
            }
        }
        am.putImageData(ah, U, S);
        return true
    }

    function b() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null
    }
};

function ws_seven(m, A, o) {
    var p = jQuery;
    var w = p(this);
    var n = m.distance || 5;
    var d = m.cols;
    var z = m.rows;
    var a = m.duration * 2;
    var q = m.blur || 50;
    var E = o.find(".ws_list");
    var x = p("<div>").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    });
    var c = x.clone().css("overflow", "hidden");
    x.addClass("ws_effect ws_seven");
    var t = !m.noCanvas && !window.opera && !!document.createElement("canvas").getContext;
    var l;
    var e = p("<div>").addClass("ws_parts").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: 8,
        transform: "translate3d(0,0,0)"
    });
    var B = p("<div>").addClass("ws_zoom").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 2,
        transform: "translate3d(0,0,0)"
    });
    x.append(e, B, c).appendTo(o);
    var f = {
        t: p(window).scrollTop(),
        l: p(window).scrollLeft(),
        w: p(window).width(),
        h: p(window).height()
    };
    var D = Math.max((m.width || e.width()) / (m.height || e.height()) || 3, 3);
    d = d || Math.round(D < 1 ? 3 : 3 * D);
    z = z || Math.round(D < 1 ? 3 / D : 3);
    var J = [];
    var y = [];
    for (var v = 0; v < d * z; v++) {
        var H = v % d;
        var G = Math.floor(v / d);
        p(J[v] = p("<div>")[0]).css({
            position: "absolute",
            overflow: "hidden",
            transform: "translate3d(0,0,0)"
        }).appendTo(e).append(p("<img>").css({
            position: "absolute",
            transform: "translate3d(0,0,0)"
        }));
        p(y[v] = p("<div>")[0]).css({
            position: "absolute",
            overflow: "hidden",
            transform: "translate3d(0,0,0)"
        }).appendTo(B).append(p("<img>").css({
            position: "absolute",
            transform: "translate3d(0,0,0)"
        }))
    }
    J = p(J);
    y = p(y);
    jQuery.extend(jQuery.easing, {
        easeOutQuart: function (j, K, i, M, L) {
            return -M * ((K = K / L - 1) * K * K * K - 1) + i
        },
        easeInExpo: function (j, K, i, M, L) {
            return (K == 0) ? i : M * Math.pow(2, 10 * (K / L - 1)) + i
        },
        easeInCirc: function (j, K, i, M, L) {
            return -M * (Math.sqrt(1 - (K /= L) * K) - 1) + i
        }
    });

    function s(j, i) {
        return Math.abs((i % 2 ? 1 : 0) + ((i - i % 2) / 2) - j) / i
    }

    function I(M, L, N, i) {
        var K = (L >= i) ? (i) / (L) : 1;
        var j = (M >= N) ? (N) / (M) : 1;
        return {
            l: j,
            t: K,
            m: Math.min(j, K)
        }
    }

    function k(j, L) {
        var K = 0;
        for (var i in j) {
            (function (N, O) {
                var M = O[N];
                wowAnimate(M.item, M.begin, M.end, M.duration, M.delay, M.easing, function () {
                    if (M.callback) {
                        M.callback()
                    }
                    K++;
                    if (K == O.length && L) {
                        L()
                    }
                })
            }(i, j))
        }
    }

    function u(U, i, j, M, W) {
        var Q = e.width(),
            S = e.height(),
            T = n * Q / d,
            O = n * S / z,
            P = a * (M ? 4 : 5) / (d * z),
            L = M ? "easeInExpo" : "easeOutQuart";
        var K = f.h + f.t - S / z,
            R = f.w + f.l - Q / d,
            X = e.offset().top + e.height(),
            N = e.offset().left + e.width();
        if (K < X) {
            K = X
        }
        if (R < N) {
            R = N
        }
        var V = [];
        p(U).each(function (af) {
            var ac = af % d,
                Z = Math.floor(af / d),
                ad = a * 0.2 * (s(ac, d) * 45 + Z * 4) / (d * z),
                ab = e.offset().left + f.l + T * ac - Q * n / 2 + T,
                ae = e.offset().top + f.t + O * Z - S * n / 2 + O,
                Y = I(ab, ae, R, K);
            if (m.support.transform) {
                var ag = {
                        opacity: 1,
                        translate: [Q * ac / d, S * Z / z, 0],
                        scale: 1,
                        width: Q / d,
                        height: S / z,
                        zIndex: Math.ceil(100 - s(ac, d) * 100)
                    },
                    aj = {
                        opacity: 0,
                        translate: [(T * ac - Q * n / 2.115) * Y.l, (O * Z - S * n / 2.115) * Y.t, 0],
                        scale: n * Y.m,
                        width: Q / d,
                        height: S / z,
                        zIndex: Math.ceil(100 - s(ac, d) * 100)
                    };
                p(this).find("img").css({
                    transform: "translate3d(" + (-Q * ac / d + j.marginLeft) + "px," + (-S * Z / z + j.marginTop) +
                        "px,0px)",
                    width: j.width,
                    height: j.height
                })
            } else {
                var ag = {
                        opacity: 1,
                        left: Q * ac / d,
                        top: S * Z / z,
                        width: Q / d,
                        height: S / z,
                        zIndex: Math.ceil(100 - s(ac, d) * 100)
                    },
                    aj = {
                        opacity: 0,
                        left: (T * ac - Q * n / 2) * Y.l,
                        top: (O * Z - S * n / 2) * Y.t,
                        width: T * Y.m,
                        height: O * Y.m
                    },
                    ai = {
                        left: -(Q * ac / d) + j.marginLeft,
                        top: -(S * Z / z) + j.marginTop,
                        width: j.width,
                        height: j.height
                    },
                    ah = {
                        left: -n * (Q / d * ac - j.marginLeft) * Y.m,
                        top: -n * (S / z * Z - j.marginTop) * Y.m,
                        width: n * j.width * Y.m,
                        height: n * j.height * Y.m
                    }
            }
            if (!M) {
                var aa = ag;
                ag = aj;
                aj = aa;
                aa = ai;
                ai = ah;
                ah = aa
            }
            V.push({
                item: p(this).show(),
                begin: ag,
                end: aj,
                easing: L,
                delay: ad,
                duration: P,
                callback: M ? function () {
                    this.item.hide()
                } : 0
            });
            if (ai) {
                V.push({
                    item: p(this).find("img"),
                    begin: ai,
                    end: ah,
                    easing: L,
                    delay: ad,
                    duration: P
                })
            }
        });
        if (M) {
            p(i).each(function (ac) {
                var Z = ac % d;
                var Y = Math.floor(ac / d);
                var aa = a * 0.2 + a * 0.15 * (s(Z, d) * 35 + Y * 4) / (d * z);
                var ab = a * 4 / (d * z);
                if (m.support.transform) {
                    var ad = {
                            opacity: 0,
                            translate: [Q / 2, S / 2, 0],
                            scale: 0,
                            width: Q / d,
                            height: S / z,
                            zIndex: Math.ceil(100 - s(Z, d) * 100)
                        },
                        af = {
                            opacity: 1,
                            translate: [Q * Z / d, S * Y / z, 0],
                            scale: 1,
                            width: Q / d,
                            height: S / z,
                            zIndex: Math.ceil(100 - s(Z, d) * 100)
                        };
                    p(this).find("img").css({
                        transform: "translate3d(" + (-Q * Z / d + j.marginLeft) + "px," + (-S * Y / z +
                            j.marginTop) + "px,0px)",
                        width: j.width,
                        height: j.height
                    })
                } else {
                    var ad = {
                            left: Q / 2,
                            top: S / 2,
                            width: 0,
                            height: 0,
                            zIndex: Math.ceil(100 - s(Z, d) * 100)
                        },
                        af = {
                            left: Q * Z / d,
                            top: S * Y / z,
                            width: Q / d,
                            height: S / z
                        },
                        ag = {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        },
                        ae = {
                            left: -Q * Z / d + j.marginLeft,
                            top: -S * Y / z + j.marginTop,
                            width: j.width,
                            height: j.height
                        }
                }
                V.push({
                    item: p(this),
                    begin: ad,
                    end: af,
                    easing: "easeOutBack",
                    delay: aa,
                    duration: ab
                });
                if (ag) {
                    V.push({
                        item: p(this).find("img"),
                        begin: ag,
                        end: ae,
                        easing: "easeOutBack",
                        delay: aa,
                        duration: ab
                    })
                }
            });
            B.delay(a * 0.1).animate({
                opacity: 1
            }, a * 0.2, "easeInCirc")
        }
        k(V, W);
        return {
            stop: function () {
                W()
            }
        }
    }
    var h;
    this.go = function (i, j, M) {
        if (h) {
            return j
        }
        if (M == undefined) {
            M = (j == 0 && i != j + 1) || (i == j - 1) ? false : true
        }
        f.t = p(window).scrollTop();
        f.l = p(window).scrollLeft();
        f.w = p(window).width();
        f.h = p(window).height();
        var N = p(A.get(j));
        N = {
            width: N.width(),
            height: N.height(),
            marginTop: parseFloat(N.css("marginTop")),
            marginLeft: parseFloat(N.css("marginLeft"))
        };
        J.find("img").attr("src", A.get(M ? j : i).src);
        y.find("img").attr("src", A.get(i).src);
        e.show();
        if (M) {
            B.show()
        }
        var L = 0;
        if (M) {
            if (t) {
                try {
                    document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1)
                } catch (K) {
                    t = 0
                }
                l = '<canvas width="' + x.width + '" height="' + x.height + '"/>';
                l = p(l).css({
                    "z-index": 1,
                    position: "absolute",
                    left: 0,
                    top: 0
                }).css(N).appendTo(c);
                L = F(p(A.get(j)), N, q, l.get(0))
            }
            if (!t || !L) {
                t = 0;
                L = F(p(A.get(j)), N, 8);
                if (l) {
                    l.remove();
                    l = 0
                }
            }
        }
        h = new u(J, y, N, M, function () {
            w.trigger("effectEnd");
            e.hide();
            B.hide();
            if (l) {
                l.remove()
            } else {
                if (L) {
                    L.remove()
                }
            }
            h = 0
        })
    };

    function F(P, K, O, L) {
        var S = (parseInt(P.parent().css("z-index")) || 0) + 1;
        if (t) {
            var V = L.getContext("2d");
            V.drawImage(P.get(0), 0, 0, K.width, K.height);
            if (!b(V, 0, 0, L.width, L.height, O)) {
                return 0
            }
            return p(L)
        }
        var W = p("<div></div>").css({
            position: "absolute",
            "z-index": S,
            left: 0,
            top: 0,
            overflow: "hidden"
        }).css(K).appendTo(c);
        var U = (Math.sqrt(5) + 1) / 2;
        var M = 1 - U / 2;
        for (var N = 0; M * N < O; N++) {
            var Q = Math.PI * U * N;
            var j = (M * N + 1);
            var T = j * Math.cos(Q);
            var R = j * Math.sin(Q);
            p(document.createElement("img")).attr("src", P.attr("src")).css({
                opacity: 1 / (N / 1.8 + 1),
                position: "absolute",
                "z-index": S,
                left: Math.round(T) + "px",
                top: Math.round(R) + "px",
                width: "100%",
                height: "100%"
            }).appendTo(W)
        }
        return W
    }
    var r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298,
        271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
        284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265,
        512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
        291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
        374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
        261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389,
        383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
        294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470,
        465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
        377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315,
        312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
        263, 261, 259];
    var C = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18,
        18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

    function b(az, ag, ae, j, K, ap) {
        if (isNaN(ap) || ap < 1) {
            return
        }
        ap |= 0;
        var au;
        try {
            au = az.getImageData(ag, ae, j, K)
        } catch (ay) {
            return false
        }
        var O = au.data;
        var an, am, aw, at, V, Y, S, M, N, ad, T, af, ab, aj, ao, W, R, X, Z, ai;
        var ax = ap + ap + 1;
        var ak = j << 2;
        var U = j - 1;
        var ar = K - 1;
        var Q = ap + 1;
        var aq = Q * (Q + 1) / 2;
        var ah = new g();
        var ac = ah;
        for (aw = 1; aw < ax; aw++) {
            ac = ac.next = new g();
            if (aw == Q) {
                var P = ac
            }
        }
        ac.next = ah;
        var av = null;
        var al = null;
        S = Y = 0;
        var aa = r[ap];
        var L = C[ap];
        for (am = 0; am < K; am++) {
            aj = ao = W = M = N = ad = 0;
            T = Q * (R = O[Y]);
            af = Q * (X = O[Y + 1]);
            ab = Q * (Z = O[Y + 2]);
            M += aq * R;
            N += aq * X;
            ad += aq * Z;
            ac = ah;
            for (aw = 0; aw < Q; aw++) {
                ac.r = R;
                ac.g = X;
                ac.b = Z;
                ac = ac.next
            }
            for (aw = 1; aw < Q; aw++) {
                at = Y + ((U < aw ? U : aw) << 2);
                M += (ac.r = (R = O[at])) * (ai = Q - aw);
                N += (ac.g = (X = O[at + 1])) * ai;
                ad += (ac.b = (Z = O[at + 2])) * ai;
                aj += R;
                ao += X;
                W += Z;
                ac = ac.next
            }
            av = ah;
            al = P;
            for (an = 0; an < j; an++) {
                O[Y] = (M * aa) >> L;
                O[Y + 1] = (N * aa) >> L;
                O[Y + 2] = (ad * aa) >> L;
                M -= T;
                N -= af;
                ad -= ab;
                T -= av.r;
                af -= av.g;
                ab -= av.b;
                at = (S + ((at = an + ap + 1) < U ? at : U)) << 2;
                aj += (av.r = O[at]);
                ao += (av.g = O[at + 1]);
                W += (av.b = O[at + 2]);
                M += aj;
                N += ao;
                ad += W;
                av = av.next;
                T += (R = al.r);
                af += (X = al.g);
                ab += (Z = al.b);
                aj -= R;
                ao -= X;
                W -= Z;
                al = al.next;
                Y += 4
            }
            S += j
        }
        for (an = 0; an < j; an++) {
            ao = W = aj = N = ad = M = 0;
            Y = an << 2;
            T = Q * (R = O[Y]);
            af = Q * (X = O[Y + 1]);
            ab = Q * (Z = O[Y + 2]);
            M += aq * R;
            N += aq * X;
            ad += aq * Z;
            ac = ah;
            for (aw = 0; aw < Q; aw++) {
                ac.r = R;
                ac.g = X;
                ac.b = Z;
                ac = ac.next
            }
            V = j;
            for (aw = 1; aw <= ap; aw++) {
                Y = (V + an) << 2;
                M += (ac.r = (R = O[Y])) * (ai = Q - aw);
                N += (ac.g = (X = O[Y + 1])) * ai;
                ad += (ac.b = (Z = O[Y + 2])) * ai;
                aj += R;
                ao += X;
                W += Z;
                ac = ac.next;
                if (aw < ar) {
                    V += j
                }
            }
            Y = an;
            av = ah;
            al = P;
            for (am = 0; am < K; am++) {
                at = Y << 2;
                O[at] = (M * aa) >> L;
                O[at + 1] = (N * aa) >> L;
                O[at + 2] = (ad * aa) >> L;
                M -= T;
                N -= af;
                ad -= ab;
                T -= av.r;
                af -= av.g;
                ab -= av.b;
                at = (an + (((at = am + Q) < ar ? at : ar) * j)) << 2;
                M += (aj += (av.r = O[at]));
                N += (ao += (av.g = O[at + 1]));
                ad += (W += (av.b = O[at + 2]));
                av = av.next;
                T += (R = al.r);
                af += (X = al.g);
                ab += (Z = al.b);
                aj -= R;
                ao -= X;
                W -= Z;
                al = al.next;
                Y += j
            }
        }
        az.putImageData(au, ag, ae);
        return true
    }

    function g() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null
    }
};

function ws_cube(p, k, b) {
    var e = jQuery,
        j = e(this),
        a = /WOW Slider/g.test(navigator.userAgent),
        l = !(/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent) && !a,
        g = e(".ws_list", b),
        c = p.perspective || 2000,
        d = {
            position: "absolute",
            backgroundSize: "cover",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        };
    var o = {
        domPrefixes: " Webkit Moz ms O Khtml".split(" "),
        testDom: function (r) {
            var q = this.domPrefixes.length;
            while (q--) {
                if (typeof document.body.style[this.domPrefixes[q] + r] !== "undefined") {
                    return true
                }
            }
            return false
        },
        cssTransitions: function () {
            return this.testDom("Transition")
        },
        cssTransforms3d: function () {
            var r = (typeof document.body.style.perspectiveProperty !== "undefined") || this.testDom(
                "Perspective");
            if (r && /AppleWebKit/.test(navigator.userAgent)) {
                var t = document.createElement("div"),
                    q = document.createElement("style"),
                    s = "Test3d" + Math.round(Math.random() * 99999);
                q.textContent = "@media (-webkit-transform-3d){#" + s + "{height:3px}}";
                document.getElementsByTagName("head")[0].appendChild(q);
                t.id = s;
                document.body.appendChild(t);
                r = t.offsetHeight === 3;
                q.parentNode.removeChild(q);
                t.parentNode.removeChild(t)
            }
            return r
        },
        webkit: function () {
            return /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
        }
    };
    var f = (o.cssTransitions() && o.cssTransforms3d()),
        m = o.webkit();
    var i = e("<div>").css(d).css({
        transformStyle: "preserve-3d",
        perspective: (m && !a ? "none" : c),
        zIndex: 8
    });
    e("<div>").addClass("ws_effect ws_cube").css(d).append(i).appendTo(b);
    if (!f && p.fallback) {
        return new p.fallback(p, k, b)
    }

    function n(q, r, t, s) {
        return "inset " + (-s * q * 1.2 / 90) + "px " + (t * r * 1.2 / 90) + "px " + (q + r) / 20 + "px rgba(" + ((t <
            s) ? "0,0,0,.6" : (t > s) ? "255,255,255,0.8" : "0,0,0,.0") + ")"
    }
    var h;
    this.go = function (B, y) {
        var t = e(k[y]);
        t = {
            width: t.width(),
            height: t.height(),
            marginTop: parseFloat(t.css("marginTop")),
            marginLeft: parseFloat(t.css("marginLeft"))
        };

        function s(S, F, H, I, G, E, Q, R, P, O) {
            S.parent().css("perspective", c);
            var N = S.width(),
                K = S.height();
            F.front.css({
                transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"
            });
            F.back.css({
                opacity: 1,
                transform: "translate3d(0,0,0) rotateY(" + Q + "deg) rotateX(" + E + "deg)"
            });
            if (l) {
                var J = e("<div>").css(d).css("boxShadow", n(N, K, 0, 0)).appendTo(F.front);
                var M = e("<div>").css(d).css("boxShadow", n(N, K, E, Q)).appendTo(F.back)
            }
            if (m && !/WOW Slider/g.test(navigator.userAgent)) {
                S.css({
                    transform: "translateZ(-" + H + "px)"
                })
            }
            var L = setTimeout(function () {
                var w = "all " + p.duration + "ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";
                F.front.css({
                    transition: w,
                    boxShadow: l ? n(N, K, R, P) : "",
                    transform: "rotateX(" + R + "deg) rotateY(" + P + "deg)",
                    zIndex: 0
                });
                F.back.css({
                    transition: w,
                    boxShadow: l ? n(N, K, 0, 0) : "",
                    transform: "rotateY(0deg) rotateX(0deg)",
                    zIndex: 20
                });
                if (l) {
                    J.css({
                        transition: w,
                        boxShadow: n(N, K, R, P)
                    });
                    M.css({
                        transition: w,
                        boxShadow: n(N, K, 0, 0)
                    })
                }
                L = setTimeout(O, p.duration)
            }, 20);
            return {
                stop: function () {
                    clearTimeout(L);
                    O()
                }
            }
        }
        if (f) {
            if (h) {
                h.stop()
            }
            var C = b.width(),
                z = b.height();
            var x = {
                left: [C / 2, C / 2, 0, 0, 90, 0, -90],
                right: [C / 2, -C / 2, 0, 0, -90, 0, 90],
                down: [z / 2, 0, -z / 2, 90, 0, -90, 0],
                up: [z / 2, 0, z / 2, -90, 0, 90, 0]
            } [p.direction || ["left", "right", "down", "up"][Math.floor(Math.random() * 4)]];
            var D = e("<img>").css(t),
                v = e("<img>").css(t).attr("src", k.get(B).src);
            var q = e("<div>").css({
                overflow: "hidden",
                transformOrigin: "50% 50% -" + x[0] + "px",
                zIndex: 20
            }).css(d).append(D).appendTo(i);
            var r = e("<div>").css({
                overflow: "hidden",
                transformOrigin: "50% 50% -" + x[0] + "px",
                zIndex: 0
            }).css(d).append(v).appendTo(i);
            D.on("load", function () {
                g.hide()
            });
            D.attr("src", k.get(y).src).load();
            i.parent().show();
            h = new s(i, {
                front: q,
                back: r
            }, x[0], x[1], x[2], x[3], x[4], x[5], x[6], function () {
                j.trigger("effectEnd");
                i.empty().parent().hide();
                h = 0
            })
        } else {
            i.css({
                position: "absolute",
                display: "none",
                zIndex: 2,
                width: "100%",
                height: "100%"
            });
            i.stop(1, 1);
            var u = (!!((B - y + 1) % k.length) ^ p.revers ? "left" : "right");
            var q = e("<div>").css({
                position: "absolute",
                left: "0%",
                right: "auto",
                top: 0,
                width: "100%",
                height: "100%"
            }).css(u, 0).append(e(k[y]).clone().css({
                width: 100 * t.width / b.width() + "%",
                height: 100 * t.height / b.height() + "%",
                marginLeft: 100 * t.marginLeft / b.width() + "%"
            })).appendTo(i);
            var A = e("<div>").css({
                position: "absolute",
                left: "100%",
                right: "auto",
                top: 0,
                width: "0%",
                height: "100%"
            }).append(e(k[B]).clone().css({
                width: 100 * t.width / b.width() + "%",
                height: 100 * t.height / b.height() + "%",
                marginLeft: 100 * t.marginLeft / b.width() + "%"
            })).appendTo(i);
            i.css({
                left: "auto",
                right: "auto",
                top: 0
            }).css(u, 0).show();
            i.show();
            g.hide();
            A.animate({
                width: "100%",
                left: 0
            }, p.duration, "easeInOutExpo", function () {
                e(this).remove()
            });
            q.animate({
                width: 0
            }, p.duration, "easeInOutExpo", function () {
                j.trigger("effectEnd");
                i.empty().hide()
            })
        }
    }
};

function ws_blast(q, j, m) {
    var e = jQuery;
    var i = e(this);
    var f = m.find(".ws_list");
    var a = q.distance || 1;
    var g = e("<div>").addClass("ws_effect ws_blast");
    var c = e("<div>").addClass("ws_zoom").appendTo(g);
    var k = e("<div>").addClass("ws_parts").appendTo(g);
    m.css({
        overflow: "visible"
    }).append(g);
    g.css({
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        "z-index": 8
    });
    var d = q.cols;
    var p = q.rows;
    var l = [];
    var b = [];

    function h(u, r, s, t) {
        if (q.support.transform && q.support.transition) {
            if (typeof r.left === "number" || typeof r.top === "number") {
                r.transform = "translate3d(" + (typeof r.left === "number" ? r.left : 0) + "px," + (typeof r.top ===
                    "number" ? r.top : 0) + "px,0)"
            }
            delete r.left;
            delete r.top;
            if (s) {
                r.transition = "all " + s + "ms ease-in-out"
            } else {
                r.transition = ""
            }
            u.css(r);
            if (t) {
                u.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    t();
                    u.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")
                })
            }
        } else {
            delete r.transfrom;
            delete r.transition;
            if (s) {
                u.animate(r, {
                    queue: false,
                    duration: q.duration,
                    complete: t ? t : 0
                })
            } else {
                u.stop(1).css(r)
            }
        }
    }

    function n(r) {
        var w = Math.max((q.width || g.width()) / (q.height || g.height()) || 3, 3);
        d = d || Math.round(w < 1 ? 3 : 3 * w);
        p = p || Math.round(w < 1 ? 3 / w : 3);
        for (var u = 0; u < d * p; u++) {
            var v = u % d;
            var t = Math.floor(u / d);
            e([b[u] = document.createElement("div"), l[u] = document.createElement("div")]).css({
                position: "absolute",
                overflow: "hidden"
            }).appendTo(k).append(e("<img>").css({
                position: "absolute"
            }))
        }
        l = e(l);
        b = e(b);
        o(l, r);
        o(b, r, true);
        var s = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        };
        c.css(s).append(e("<img>").css(s))
    }

    function o(t, u, s, r, w, z) {
        var v = g.width();
        var x = g.height();
        var y = {
            left: e(window).scrollLeft(),
            top: e(window).scrollTop(),
            width: e(window).width(),
            height: e(window).height()
        };
        e(t).each(function (F) {
            var E = F % d;
            var C = Math.floor(F / d);
            if (s) {
                var I = a * v * (2 * Math.random() - 1) + v / 2;
                var G = a * x * (2 * Math.random() - 1) + x / 2;
                var H = g.offset();
                H.left += I;
                H.top += G;
                if (H.left < y.left) {
                    I -= H.left + y.left
                }
                if (H.top < y.top) {
                    G -= H.top + y.top
                }
                var D = (y.left + y.width) - H.left - v / d;
                if (0 > D) {
                    I += D
                }
                var B = (y.top + y.height) - H.top - x / p;
                if (0 > B) {
                    G += B
                }
            } else {
                var I = v * E / d;
                var G = x * C / p
            }
            e(this).find("img").css({
                left: -(v * E / d) + u.marginLeft,
                top: -(x * C / p) + u.marginTop,
                width: u.width,
                height: u.height
            });
            var A = {
                left: I,
                top: G,
                width: v / d,
                height: x / p
            };
            if (w) {
                e.extend(A, w)
            }
            if (r) {
                h(e(this), A, q.duration, (F === 0 && z) ? z : 0)
            } else {
                h(e(this), A)
            }
        })
    }
    this.go = function (s, u) {
        var v = e(j[u]),
            r = {
                width: v.width(),
                height: v.height(),
                marginTop: parseFloat(v.css("marginTop")),
                marginLeft: parseFloat(v.css("marginLeft"))
            };
        if (!l.length) {
            n(r)
        }
        l.find("img").attr("src", j.get(u).src);
        h(l, {
            opacity: 1,
            zIndex: 3
        });
        b.find("img").attr("src", j.get(s).src);
        h(b, {
            opacity: 0,
            zIndex: 2
        });
        c.find("img").attr("src", j.get(u).src);
        h(c.find("img"), {
            transform: "scale(1)"
        });
        g.show();
        f.hide();
        o(b, r, false, true, {
            opacity: 1
        });
        o(l, r, true, true, {
            opacity: 0
        }, function () {
            i.trigger("effectEnd");
            g.hide()
        });
        h(c.find("img"), {
            transform: "scale(2)"
        }, q.duration, 0);
        var t = b;
        b = l;
        l = t
    }
};

function ws_blinds(m, l, a) {
    var g = jQuery;
    var k = g(this);
    var c = m.parts || 3;
    var j = g(".ws_list", a);
    var h = g("<div>").addClass("ws_effect ws_blinds").css({
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        "z-index": 8
    }).hide().appendTo(a);
    var d = g("<div>").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }).appendTo(h);
    var e = [];
    var b = document.addEventListener;
    for (var f = 0; f < c; f++) {
        e[f] = g("<div>").css({
            position: b ? "relative" : "absolute",
            display: b ? "inline-block" : "block",
            height: "100%",
            width: (100 / c + 0.001).toFixed(3) + "%",
            border: "none",
            margin: 0,
            overflow: "hidden",
            top: 0,
            left: b ? 0 : ((100 * f / c).toFixed(3) + "%")
        }).appendTo(h)
    }
    this.go = function (r, p, o) {
        if (o == undefined) {
            o = p > r ? 1 : 0
        }
        h.find("img").stop(true, true);
        h.show();
        var s = g(l[p]);
        var t = {
            width: s.width() || m.width,
            height: s.height() || m.height
        };
        var u = s.clone().css(t).appendTo(d);
        u.from = {
            left: 0
        };
        u.to = {
            left: (!o ? 1 : -1) * u.width() * 0.5
        };
        if (m.support.transform) {
            u.from = {
                translate: [u.from.left, 0, 0]
            };
            u.to = {
                translate: [u.to.left, 0, 0]
            }
        }
        j.hide();
        wowAnimate(u, u.from, u.to, m.duration, m.duration * 0.1, "swing");
        for (var q = 0; q < e.length; q++) {
            var n = e[q];
            var v = g(l[r]).clone().css({
                position: "absolute",
                top: 0
            }).css(t).appendTo(n);
            v.from = {
                left: (!o ? -1 : 1) * v.width() - n.position().left
            };
            v.to = {
                left: -n.position().left
            };
            if (m.support.transform) {
                v.from = {
                    translate: [v.from.left, 0, 0]
                };
                v.to = {
                    translate: [v.to.left, 0, 0]
                }
            }
            wowAnimate(v, v.from, v.to, (m.duration / (e.length + 1)) * (o ? (e.length - q + 1) : (q + 2)), "swing",
                ((!o && q == e.length - 1 || o && !q) ? function () {
                    k.trigger("effectEnd");
                    h.hide().find("img").remove();
                    u.remove()
                } : false))
        }
    }
};
jQuery("#wowslider-container").wowSlider({
    effect: "louvers,glass_parallax,seven,cube,blast,blinds",
    prev: "",
    next: "",
    duration: 30 * 100,
    delay: 30 * 100,
    width: 640,
    height: 360,
    autoPlay: true,
    autoPlayVideo: false,
    playPause: false,
    stopOnHover: false,
    loop: false,
    bullets: 0,
    caption: false,
    captionEffect: "parallax",
    controls: false,
    controlsThumb: false,
    responsive: 3,
    fullScreen: false,
    gestures: 1,
    onBeforeStep: function (i, c) {
        return (i + 1 + Math.floor((c - 1) * Math.random()))
    },
    images: 0
});
