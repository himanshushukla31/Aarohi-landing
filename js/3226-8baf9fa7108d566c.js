(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3226], {
        18730: function (e, n, t) {
            var r = t(14350).Type,
                s = t(79209).envSchema,
                i = r.Object({
                    NODE_ENV: r.Enum({
                        production: "production",
                        development: "development",
                        test: "test"
                    }),
                    RPM_NPM_TOKEN: r.String(),
                    VERCEL: r.Optional(r.String()),
                    VERCEL_URL: r.String(),
                    INTERNAL_ACCESS_TOKEN: r.String(),
                    AUTOFILL_LOGIN_CODE: r.Boolean({
                        default: !1
                    }),
                    FUSIONAUTH_DEFAULT_TENANT_ID: r.String(),
                    FUSIONAUTH_CLIENT_ID: r.String(),
                    FUSIONAUTH_JWT_SIGNING_KEY: r.String(),
                    FUSIONAUTH_API_KEY: r.String(),
                    FUSIONAUTH_SECRET: r.String(),
                    FUSIONAUTH_WEBHOOK_KEY: r.String(),
                    CRON_WEBHOOK_KEY: r.String(),
                    CRON_TELEMETRY_ENABLED: r.Boolean({
                        default: !1
                    }),
                    FUSIONAUTH_DOMAIN: r.String(),
                    PARTNER_JWT_SECRET: r.String(),
                    PARTNER_JWT_SECRET_EXP: r.String({
                        default: "15s"
                    }),
                    ACCESS_TOKEN_EXP: r.String({
                        default: "15m"
                    }),
                    AVATAR_S3_REGION: r.String(),
                    AVATAR_S3_ACCESS_KEY: r.String(),
                    AVATAR_S3_SECRET_ACCESS_KEY: r.String(),
                    AVATAR_S3_FOLDER: r.String(),
                    AVATAR_S3_BUCKET_NAME: r.String(),
                    API_BASE_URL: r.String({}),
                    API_GLB_URL: r.String({}),
                    NFT_S3_BUCKET: r.String(),
                    EMAIL_TEMPLATE_CAMPAIGN_CODE: r.String(),
                    NEXT_PUBLIC_AMPLITUDE_API_KEY: r.String(),
                    DATOCMS_API_TOKEN: r.String(),
                    DATOCMS_MEDIA_ACCESSOR_TOKEN: r.String(),
                    RPM_AWS_SECRET_ACCESS_KEY: r.String(),
                    RPM_AWS_ACCESS_KEY: r.String(),
                    RPM_S3_REGION: r.String(),
                    ATLAS_URI: r.String(),
                    AIRTABLE_API_KEY: r.String(),
                    COOKIE_POLICY_URL: r.String(),
                    SERVICES_AGREEMENT_URL: r.String(),
                    TERMS_OF_SERVICE_URL: r.String(),
                    PRIVACY_POLICY_URL: r.String(),
                    BLOG_URL: r.String(),
                    RPM_DOCS_URL: r.String(),
                    COMPANY_LINK: r.String(),
                    ABOUT_US_LINK: r.String(),
                    DISCORD_LINK: r.String(),
                    TWITTER_LINK: r.String(),
                    LINKEDIN_LINK: r.String(),
                    YOUTUBE_LINK: r.String(),
                    ABSYNTH_ENDPOINT: r.String(),
                    USER_SETTINGS_MONTHS_TO_EXPIRE: r.Integer({
                        default: 3
                    }),
                    FONTS_LOADING_TIMEOUT: r.Integer({
                        default: 3e4
                    }),
                    BLOG_PREVIEW_SECRET: r.Optional(r.String()),
                    LOG_LEVEL: r.String({
                        default: "info"
                    }),
                    DEBUG_MONGO: r.Boolean({
                        default: !1
                    }),
                    WITH_REDUX_LOGGER: r.Boolean({
                        default: !1
                    }),
                    GTM_MEASUREMENT_ID: r.String({
                        default: ""
                    }),
                    GTM_KEY: r.String({
                        default: ""
                    }),
                    SOURCEMAPS: r.Boolean({
                        default: !1
                    }),
                    VERCEL_GITHUB_COMMIT_SHA: r.Optional(r.String()),
                    MAINTENANCE_MODE: r.Optional(r.Boolean({
                        default: !1
                    })),
                    INVALIDATE_ACCESS_TOKEN_AT: r.Optional(r.String({
                        format: "date-time"
                    })),
                    PHOTOBOOTH_BUCKET_NAME: r.String()
                });
            e.exports._ = s({
                schema: i
            })
        },
        87841: function (e, n, t) {
            "use strict";
            t.d(n, {
                RW: function () {
                    return T
                },
                On: function () {
                    return w
                },
                GC: function () {
                    return A
                },
                x3: function () {
                    return O
                },
                hv: function () {
                    return P
                },
                L6: function () {
                    return C
                }
            });
            var r = t(50029),
                s = t(16835),
                i = t(87794),
                a = t.n(i),
                o = t(67294),
                l = t(16517),
                c = t(92105),
                d = t.n(c),
                u = t(40782),
                m = t(82580),
                p = t(19428),
                g = t(74231),
                f = t(52626),
                x = t(18160),
                h = t(17695),
                _ = t(50151),
                v = t(41096),
                S = t(85893),
                E = g.Ry().shape({
                    email: g.Z_().email("email is invalid").required("email is required")
                }),
                b = g.Ry().shape({
                    code: g.Z_().required("code is required")
                }),
                w = function (e) {
                    var n = e.code,
                        t = e.onCodeRequested,
                        i = (0, v.Oi)(v.lL.Xl),
                        c = (0, f.iz)().logEvent,
                        g = (0, l.useSelector)(_.dy),
                        w = (0, l.useSelector)((0, h.s_)()),
                        N = (0, x.qW)(),
                        j = (0, s.Z)(N, 2),
                        A = j[0],
                        T = j[1],
                        O = T.isLoading,
                        y = T.isSuccess,
                        C = (0, x.YA)(),
                        P = (0, s.Z)(C, 2),
                        I = P[0],
                        L = P[1],
                        R = L.isLoading,
                        U = L.isSuccess,
                        k = (0, o.useState)(!1),
                        M = k[0],
                        K = k[1],
                        D = (0, o.useState)(n),
                        Z = D[0],
                        F = D[1],
                        B = (0, p.useTranslation)(["signin", "common"]).t,
                        q = (null == w ? void 0 : w.target) || "default",
                        H = B(M ? "signin:login" : "signin:start", {
                            returnObjects: !0
                        }),
                        V = (0, o.useCallback)((function (e) {
                            c("signin", {
                                "partner name": q,
                                page: "signin",
                                stage: e
                            })
                        }), [c, q]);
                    (0, f.Ar)(O, (function () {
                        return V("email submitted")
                    })), (0, f.Ar)(U, (function () {
                        return V("completed")
                    })), (0, f.Ar)(y, (function () {
                        V("code sent"), u.Am.success(B("signin:emailSentMsg")), K(!0), t()
                    }));
                    var G = (0, o.useCallback)(function () {
                        var e = (0, r.Z)(a().mark((function e(n, t) {
                            var r, s, i;
                            return a().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((r = t.setSubmitting)(!0), e.prev = 2, !M) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 6, I({
                                            code: n.code,
                                            silent: !0
                                        }).unwrap();
                                    case 6:
                                        e.next = 16;
                                        break;
                                    case 8:
                                        return e.next = 10, A({
                                            email: n.email,
                                            id: g._id,
                                            silent: !0
                                        }).unwrap();
                                    case 10:
                                        if (s = e.sent, !(i = null == s ? void 0 : s.data.code)) {
                                            e.next = 16;
                                            break
                                        }
                                        return F(i), e.next = 16, I({
                                            code: i,
                                            id: g._id,
                                            silent: !0
                                        }).unwrap();
                                    case 16:
                                        e.next = 21;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(2), u.Am.error(e.t0.message || B("common:errors.commonMessage"));
                                    case 21:
                                        r(!1);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 18]
                            ])
                        })));
                        return function (n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), [M, I, A]);
                    return (0, S.jsx)(m.J9, {
                        initialValues: {
                            email: "",
                            code: Z
                        },
                        validationSchema: M ? b : E,
                        onSubmit: G,
                        children: function (e) {
                            var n = e.isSubmitting,
                                t = e.errors,
                                r = e.resetForm,
                                s = e.submitCount,
                                a = t.email || t.code;
                            return (0, S.jsxs)(m.l0, {
                                className: "px-4 py-4 md:px-12 md:pt-8 md:pb-10",
                                children: [(0, S.jsxs)("label", {
                                    className: "block relative mb-6 mt-3 text-white",
                                    children: [H.formLabel, (0, S.jsx)(m.gN, {
                                        name: H.formName || "email",
                                        placeholder: H.formPlaceholder,
                                        className: "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border"
                                    }), a && !!s && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: a
                                    })]
                                }), (0, S.jsxs)("div", {
                                    className: "mt-6 flex gap-4 flex-col lg:flex-row lg:items-center lg:justify-between",
                                    children: [(0, S.jsx)(v.ZT.Link, {
                                        onClick: function () {
                                            r(), K(!M)
                                        },
                                        children: H.stepChangeText
                                    }), (0, S.jsx)("div", {
                                        children: (0, S.jsx)(v.zx, {
                                            size: i ? "large" : "medium",
                                            type: "primary",
                                            disabled: n,
                                            htmlType: "submit",
                                            children: R ? (0, S.jsx)(d(), {
                                                size: "8px"
                                            }) : (0, S.jsx)(S.Fragment, {
                                                children: H.formSubmitText
                                            })
                                        })
                                    })]
                                })]
                            })
                        }
                    }, Z)
                },
                N = t(41664),
                j = t.n(N),
                A = function (e) {
                    var n = e.onUseCodeLogin,
                        t = (0, v.Oi)(v.lL.Xl),
                        i = (0, f.iz)().logEvent,
                        c = (0, l.useSelector)((0, h.s_)()),
                        E = (0, l.useSelector)(_.dy),
                        b = (0, x.YA)(),
                        w = (0, s.Z)(b, 2),
                        N = w[0],
                        A = w[1],
                        T = A.isLoading,
                        O = A.isSuccess,
                        y = (0, p.useTranslation)(["signin", "common"]).t,
                        C = (null == c ? void 0 : c.target) || "default",
                        P = (0, o.useMemo)((function () {
                            return g.Ry().shape({
                                email: g.Z_().email(y("signin:errors.invalidEmail")).required(y("signin:errors.required")),
                                password: g.Z_().required(y("signin:errors.required"))
                            })
                        }), [y]),
                        I = (0, o.useCallback)((function (e) {
                            i("login", {
                                "partner name": C,
                                page: "signin",
                                stage: e
                            })
                        }), [i, C]);
                    (0, o.useEffect)((function () {
                        T && I("initiated")
                    }), [T]), (0, o.useEffect)((function () {
                        O && I("completed")
                    }), [O]);
                    var L = (0, o.useCallback)(function () {
                        var e = (0, r.Z)(a().mark((function e(n, t) {
                            var r;
                            return a().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (r = t.setSubmitting)(!0), e.prev = 2, e.next = 5, N({
                                            id: E._id,
                                            loginId: n.email,
                                            password: n.password,
                                            silent: !0
                                        }).unwrap();
                                    case 5:
                                        e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), I("unsuccessful"), u.Am.error(e.t0.message || y("signin:errors.wrongPassword"));
                                    case 11:
                                        r(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function (n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), [N]);
                    return (0, S.jsx)(m.J9, {
                        initialValues: {
                            email: "",
                            password: ""
                        },
                        validationSchema: P,
                        onSubmit: L,
                        children: function (e) {
                            var r = e.isSubmitting,
                                s = e.errors,
                                i = e.resetForm,
                                a = e.submitCount,
                                o = s.email,
                                l = s.password;
                            return r && function (e) {
                                var n = e.email,
                                    t = e.password;
                                n && I("email invalid"), t && I("password not entered")
                            }(s), (0, S.jsxs)(m.l0, {
                                className: "px-4 py-4 md:px-12 md:pt-8 md:pb-10",
                                children: [(0, S.jsxs)("label", {
                                    className: "flex flex-col mb-6 mt-3 text-white",
                                    children: [(0, S.jsx)("span", {
                                        children: y("signin:start.formLabel")
                                    }), (0, S.jsx)(m.gN, {
                                        name: "email",
                                        type: "email",
                                        "data-testid": "login-email",
                                        placeholder: y("signin:start.formPlaceholder"),
                                        className: "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border"
                                    }), o && !!a && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: o
                                    })]
                                }), (0, S.jsxs)("label", {
                                    className: "flex flex-col mb-6 mt-3 text-white",
                                    children: [(0, S.jsx)("span", {
                                        children: y("signin:start.password")
                                    }), (0, S.jsx)(m.gN, {
                                        name: "password",
                                        type: "password",
                                        "data-testid": "login-password",
                                        placeholder: y("signin:start.enterPassword"),
                                        className: "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border"
                                    }), l && !!a && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: l
                                    }), (0, S.jsx)(j(), {
                                        href: "/reset",
                                        children: (0, S.jsx)("span", {
                                            className: "text-opacity-50 hover:text-opacity-80 text-rpmLight text-sm cursor-pointer whitespace-nowrap mt-3",
                                            children: y("signin:reset.forgotPassword")
                                        })
                                    })]
                                }), (0, S.jsxs)("div", {
                                    className: "mt-6 flex gap-4 flex-col lg:flex-row lg:items-center lg:justify-between",
                                    children: [(0, S.jsx)(v.ZT.Link, {
                                        onClick: function () {
                                            i(), n()
                                        },
                                        children: y("signin:login.signInWithCode")
                                    }), (0, S.jsx)("div", {
                                        children: (0, S.jsx)(v.zx, {
                                            size: t ? "large" : "medium",
                                            type: "primary",
                                            disabled: r,
                                            htmlType: "submit",
                                            children: T ? (0, S.jsx)(d(), {
                                                size: "8px"
                                            }) : (0, S.jsx)(S.Fragment, {
                                                children: y("common:signIn")
                                            })
                                        })
                                    })]
                                })]
                            })
                        }
                    })
                },
                T = function (e) {
                    var n = e.redirectUrl,
                        t = void 0 === n ? "" : n,
                        r = e.children,
                        s = e.title,
                        i = e.subtitle,
                        a = (0, v.Oi)(v.lL.Xl),
                        o = "/hub" !== t;
                    return (0, S.jsx)(v.Zn, {
                        children: (0, S.jsxs)("div", {
                            className: "w-full lg:flex lg:justify-center",
                            children: [(0, S.jsxs)("div", {
                                className: "mx-4 my-6 flex-grow max-w-[1438px] flex flex-col gap-10 lg:gap-14",
                                children: [(0, S.jsx)(v.TR, {
                                    size: a ? 148 : 67,
                                    color: "white"
                                }), (0, S.jsx)("div", {
                                    className: "flex justify-center xl:justify-start",
                                    children: (0, S.jsxs)("div", {
                                        className: "card-bg not-hoverable rounded-xl w-full max-w-[596px]",
                                        children: [(0, S.jsxs)("div", {
                                            className: "px-4 py-4 md:px-12 md:pt-12 md:pb-10",
                                            children: [s && (0, S.jsx)(v.ZT.Title, {
                                                level: 2,
                                                children: s
                                            }), i && (0, S.jsx)(v.ZT.Title, {
                                                level: 4,
                                                className: "mt-1",
                                                children: i
                                            })]
                                        }), r]
                                    })
                                })]
                            }), a && !o && (0, S.jsx)("div", {
                                className: "absolute bottom-0 right-[5%] lg:w-[40%] 2xl:w-3/6 h-[95%]",
                                children: (0, S.jsx)("img", {
                                    src: "/images/signin-bg.png",
                                    alt: "avatar",
                                    className: "w-full h-full object-contain object-bottom"
                                })
                            })]
                        })
                    })
                },
                O = function () {
                    var e = (0, x.DS)(),
                        n = (0, s.Z)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = i.isLoading,
                        _ = i.isSuccess,
                        E = (0, l.useSelector)((0, h.s_)()),
                        b = (0, p.useTranslation)(["signin", "common"]).t,
                        w = (0, v.Oi)(v.lL.Xl),
                        N = (0, f.iz)().logEvent,
                        j = (null == E ? void 0 : E.target) || "default",
                        A = (0, o.useMemo)((function () {
                            return g.Ry().shape({
                                email: g.Z_().email(b("signin:errors.invalidEmail")).required(b("signin:errors.required"))
                            })
                        }), [b]),
                        T = (0, o.useCallback)((function (e) {
                            N("reset", {
                                "partner name": j,
                                page: "reset",
                                stage: e
                            })
                        }), [N, j]);
                    (0, o.useEffect)((function () {
                        c && T("initiated")
                    }), [c]), (0, o.useEffect)((function () {
                        _ && (T("email sent"), u.Am.success(b("signin:reset.verificationCodeSent")))
                    }), [_]);
                    var O = (0, o.useCallback)(function () {
                        var e = (0, r.Z)(a().mark((function e(n, r) {
                            var s, i, o;
                            return a().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = r.setSubmitting, i = r.resetForm, s(!0), o = n.email, e.next = 5, t({
                                            email: o
                                        });
                                    case 5:
                                        "data" in e.sent && i(), s(!1);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t]);
                    return (0, S.jsx)(m.J9, {
                        initialValues: {
                            email: ""
                        },
                        validationSchema: A,
                        onSubmit: O,
                        children: function (e) {
                            var n = e.isSubmitting,
                                t = e.errors,
                                r = e.resetForm,
                                s = e.submitCount,
                                i = t.email;
                            return i && T("email invalid"), (0, S.jsxs)(m.l0, {
                                className: "px-4 py-4 md:px-12 md:pt-8 md:pb-10",
                                children: [(0, S.jsxs)("label", {
                                    className: "block relative mb-6 mt-3 text-white",
                                    children: [b("signin:start.formLabel"), (0, S.jsx)(m.gN, {
                                        name: "email",
                                        type: "email",
                                        "data-testid": "reset-email",
                                        placeholder: b("signin:start.formPlaceholder"),
                                        className: "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border"
                                    }), i && !!s && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: i
                                    })]
                                }), (0, S.jsxs)("div", {
                                    className: "mt-6 flex gap-4 flex-row items-center justify-between",
                                    children: [(0, S.jsx)(v.ZT.Link, {
                                        onClick: function () {
                                            r()
                                        },
                                        link: "/signup",
                                        children: b("signin:createAccount")
                                    }), (0, S.jsx)("div", {
                                        children: (0, S.jsx)(v.zx, {
                                            size: w ? "large" : "medium",
                                            type: "primary",
                                            disabled: n,
                                            htmlType: "submit",
                                            children: n || c ? (0, S.jsx)(d(), {
                                                size: "8px"
                                            }) : (0, S.jsx)(S.Fragment, {
                                                children: b("common:send")
                                            })
                                        })
                                    })]
                                })]
                            })
                        }
                    })
                },
                y = t(11163),
                C = /^(?=.*[a-z])(?=.*[A-Z]).{10,}$/,
                P = function (e) {
                    var n = e.changePasswordId,
                        t = (0, x.WO)(),
                        i = (0, s.Z)(t, 2),
                        c = i[0],
                        E = i[1],
                        b = E.isLoading,
                        w = E.isSuccess,
                        N = (0, l.useSelector)((0, h.s_)()),
                        j = (0, p.useTranslation)(["signin"]).t,
                        A = (0, v.Oi)(v.lL.Xl),
                        T = (0, f.iz)().logEvent,
                        O = (0, y.useRouter)(),
                        P = (0, l.useSelector)(_.dy),
                        I = P.isLoggedIn,
                        L = P.refreshToken,
                        R = P.email,
                        U = (0, x._y)(),
                        k = (0, s.Z)(U, 1)[0],
                        M = (null == N ? void 0 : N.target) || "default",
                        K = (0, o.useMemo)((function () {
                            return g.Ry().shape({
                                password: g.Z_().min(10, j("signin:errors.passwordValidationFail")).required(j("signin:errors.required")).matches(C, j("signin:errors.passwordValidationFail")),
                                repeatPassword: g.Z_().required(j("signin:errors.required")).when("password", {
                                    is: function (e) {
                                        return e && e.length > 0
                                    },
                                    then: g.Z_().oneOf([g.iH("password")], j("signin:errors.passwordsMismatch"))
                                })
                            })
                        }), [j, C]),
                        D = (0, o.useCallback)((function (e) {
                            T("reset", {
                                "partner name": M,
                                page: "reset",
                                stage: e
                            })
                        }), [T, M]);
                    (0, o.useEffect)((function () {
                        b && D("updating password")
                    }), [b]), (0, o.useEffect)((function () {
                        w && (D("completed"), u.Am.success(j("signin:reset.passwordUpdated")), I && L ? k(L) : O.push("/signin"))
                    }), [w]);
                    var Z = (0, o.useCallback)(function () {
                            var e = (0, r.Z)(a().mark((function e(t, r) {
                                var s, i, o, l;
                                return a().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = r.setSubmitting, i = r.resetForm, s(!0), o = t.password, l = t.repeatPassword, e.next = 5, c({
                                                changePasswordId: n,
                                                password: o,
                                                repeatPassword: l,
                                                email: R
                                            });
                                        case 5:
                                            i(), s(!1);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }(), [c]),
                        F = "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border",
                        B = "block relative mb-6 mt-3 text-white";
                    return (0, S.jsx)(m.J9, {
                        initialValues: {
                            password: "",
                            repeatPassword: ""
                        },
                        validationSchema: K,
                        onSubmit: Z,
                        children: function (e) {
                            var n = e.isSubmitting,
                                t = e.errors,
                                r = e.submitCount,
                                s = t.password,
                                i = t.repeatPassword;
                            return n && function (e) {
                                var n = e.password,
                                    t = e.repeatPassword;
                                n && D("password invalid"), t && D("password mismatch")
                            }(t), (0, S.jsxs)(m.l0, {
                                className: "px-4 py-4 md:px-12 md:pt-8 md:pb-10",
                                children: [(0, S.jsxs)("label", {
                                    className: B,
                                    children: [j("signin:start.password"), (0, S.jsx)(m.gN, {
                                        name: "password",
                                        type: "password",
                                        "data-testid": "password",
                                        placeholder: j("signin:start.enterPassword"),
                                        className: F
                                    }), s && !!r && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: s
                                    })]
                                }), (0, S.jsxs)("label", {
                                    className: B,
                                    children: [j("signin:start.repeatPassword"), (0, S.jsx)(m.gN, {
                                        name: "repeatPassword",
                                        type: "password",
                                        "data-testid": "repeat-password",
                                        placeholder: j("signin:start.enterPassword"),
                                        className: F
                                    }), i && !!r && (0, S.jsx)("p", {
                                        className: "text-red-500",
                                        children: i
                                    })]
                                }), (0, S.jsx)("div", {
                                    className: "mt-6 flex flex-col items-end",
                                    children: (0, S.jsx)(v.zx, {
                                        size: A ? "large" : "medium",
                                        type: "primary",
                                        disabled: n,
                                        htmlType: "submit",
                                        children: n || b ? (0, S.jsx)(d(), {
                                            size: "8px"
                                        }) : (0, S.jsx)(S.Fragment, {
                                            children: j("signin:reset.updatePassword")
                                        })
                                    })
                                })]
                            })
                        }
                    })
                }
        },
        41487: function (e, n, t) {
            "use strict";
            t.d(n, {
                B: function () {
                    return p
                }
            });
            var r = t(59499),
                s = (t(67294), t(94184)),
                i = t.n(s),
                a = t(72576),
                o = t(41096),
                l = t(9784),
                c = t(14102),
                d = t(76230),
                u = t.n(d),
                m = t(85893),
                p = function (e) {
                    var n = e.avatar,
                        t = e.apps,
                        s = void 0 === t ? [] : t,
                        d = e.onClick,
                        p = e.onMouseEnter,
                        g = e.onMouseLeave,
                        f = e.selected,
                        x = e.children,
                        h = e.incompatible,
                        _ = void 0 !== h && h,
                        v = e.incompatibleDisclaimer,
                        S = void 0 === v ? "" : v,
                        E = (0, o.Oi)(o.lL.MD);
                    return (0, m.jsxs)("div", {
                        className: i()(u().avatarPreview, (0, r.Z)({}, u().avatarPreviewIncompatible, _), "relative rounded-lg cursor-pointer overflow-hidden min-h-[150px]"),
                        onClick: d,
                        onMouseEnter: p,
                        onMouseLeave: g,
                        "data-testid": "avatar-preview",
                        children: [_ && S && (0, m.jsx)("div", {
                            className: u().incompatibleText,
                            children: S
                        }), (0, m.jsx)(a.E, {
                            avatar: n,
                            renderSettings: "none",
                            className: "w-full h-full object-center-bottom object-cover relative z-1"
                        }), f && (0, m.jsx)(c.J, {
                            size: E ? 45 : 23,
                            className: "absolute left-3 top-3",
                            icon: "check",
                            "data-testid": "selected-icon"
                        }), (0, m.jsxs)("div", {
                            className: "absolute left-0 px-4 bottom-4 md:bottom-6 z-2 flex gap-2 w-full overflow-x-scroll no-scrollbar",
                            children: [s.map((function (e, n) {
                                return (0, m.jsx)(l.q, {
                                    className: "flex-shrink-0",
                                    src: e.image,
                                    backgroundColor: e.imageBackground,
                                    width: E ? 65 : 40,
                                    height: E ? 40 : 24
                                }, n)
                            })), x]
                        })]
                    })
                }
        },
        37854: function (e, n, t) {
            "use strict";
            t.d(n, {
                $: function () {
                    return x
                }
            });
            var r = t(59499),
                s = t(4730),
                i = t(67294),
                a = t(72679),
                o = t(74040),
                l = t(94184),
                c = t.n(l),
                d = t(13352),
                u = t.n(d),
                m = t(85893),
                p = ["loaderColor", "onLoad", "className"];

            function g(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? g(Object(t), !0).forEach((function (n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var x = function (e) {
                var n = e.loaderColor,
                    t = void 0 === n ? "#3ce1f7" : n,
                    l = e.onLoad,
                    d = e.className,
                    g = (0, s.Z)(e, p),
                    x = (0, i.useState)(!0),
                    h = x[0],
                    _ = x[1],
                    v = (0, i.useCallback)((function (e) {
                        _(!1), "function" == typeof l && l(e)
                    }), [_, l]);
                return (0, m.jsxs)(m.Fragment, {
                    children: [h && (0, m.jsx)(o.FadeLoader, {
                        color: t
                    }), (0, m.jsx)(a.LazyLoadImage, f(f({}, g), {}, {
                        placeholder: g.placeholder ? (0, m.jsx)("div", {
                            children: g.placeholder
                        }) : void 0,
                        onLoad: v,
                        className: c()(d, u().image, (0, r.Z)({}, u().hidden, h))
                    }))]
                })
            }
        },
        13226: function (e, n, t) {
            "use strict";
            t.d(n, {
                Bk: function () {
                    return y.B
                },
                jt: function () {
                    return O
                },
                dX: function () {
                    return q
                },
                VH: function () {
                    return B
                },
                mq: function () {
                    return _
                }
            });
            var r = t(16835),
                s = t(59499),
                i = t(67294),
                a = t(16517),
                o = t(18127),
                l = t(11163),
                c = t(52626),
                d = t(51403),
                u = t(50151),
                m = t(41096),
                p = t(93209),
                g = t(43952),
                f = t(85893);

            function x(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? x(Object(t), !0).forEach((function (n) {
                        (0, s.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var _ = function (e) {
                return function (n) {
                    return (0, g.S_)() ? function (t) {
                        var s = (0, a.useSelector)(u.tH).data,
                            i = v(t, e),
                            o = i.isAuthenticated,
                            g = i.isLoading || !o && !(null != e && e.inverted) || o && !(null == e || !e.inverted);
                        return function (e, n) {
                                var t = (0, l.useRouter)(),
                                    r = (null == n ? void 0 : n.redirectUrl) || e.redirectUrl || "/",
                                    s = v(e, n),
                                    i = s.isAuthenticated,
                                    o = s.isLoggingOut,
                                    d = !i && !(null != n && n.inverted) || i && !(null == n || !n.inverted),
                                    m = (0, a.useSelector)(u.tH).data,
                                    p = m.changePasswordId,
                                    g = m.settings,
                                    f = p && !(null != g && g.isPasswordUpdated),
                                    x = d && !(null != n && n.allowAnonymous) && !o || f;
                                (0, c.Ar)(!(null == n || !n.prefetch), (function () {
                                    return t.prefetch(r)
                                }), [t, r]), (0, c.Ar)(x, (function () {
                                    return t.push(f ? "/reset?code=".concat(p) : r)
                                }))
                            }(t, e),
                            function (e, n) {
                                var t = (0, d.Vf)(),
                                    s = (0, r.Z)(t, 2),
                                    i = s[0],
                                    a = s[1],
                                    o = v(e, n),
                                    l = o.isAuthenticated,
                                    u = o.isCreating,
                                    m = o.isLoggingOut,
                                    p = a.isSuccess || a.isError,
                                    g = !(l || u || p || null == n || !n.allowAnonymous || m);
                                (0, c.Ar)(g, i)
                            }(t, e),
                            function (e, n) {
                                var t = (0, l.useRouter)(),
                                    r = v(e, n),
                                    s = r.isAuthenticated,
                                    i = r.isCreating,
                                    a = r.isLoggingOut,
                                    o = !s && !i && !(null != n && n.allowAnonymous) && !(null != n && n.inverted) || a;
                                (0, c.Ar)(o, (function () {
                                    return t.push("/signin")
                                }))
                            }(t, e), g ? null != e && e.useWizardLoading ? (0, f.jsx)(p.Z, {
                                theme: t.theme
                            }) : (0, f.jsx)(m.Zn, {
                                children: (0, f.jsx)(p.t, {})
                            }) : (0, f.jsx)(n, h(h({}, t), {}, {
                                user: s
                            }))
                    } : n
                }
            };

            function v(e, n) {
                var t = (0, d.Yg)(),
                    s = (0, r.Z)(t, 2),
                    l = s[0],
                    c = s[1],
                    m = c.isLoading,
                    p = c.isUninitialized,
                    g = (0, a.useSelector)(u.tH),
                    f = g.data,
                    x = g.isCreating,
                    h = g.isLoggingOut,
                    _ = g.isRestored,
                    v = (0, i.useState)(!0),
                    S = v[0],
                    E = v[1];
                return (0, o.Z)((function () {
                    f._id && !_ && p && l({
                        id: f._id,
                        silent: !0
                    }), E(!1)
                })), (0, i.useMemo)((function () {
                    return {
                        isLoading: m || !_ && p && S,
                        isAuthenticated: (null == n ? void 0 : n.allowAnonymous) && !!f._id || f.isLoggedIn,
                        isCreating: !!x,
                        isLoggingOut: !!h
                    }
                }), [null == n ? void 0 : n.allowAnonymous, f, x, h, m, _, p, S])
            }
            var S = t(4730),
                E = t(67253),
                b = t(13104),
                w = t(20375),
                N = ["id", "imgixParams"];

            function j(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? j(Object(t), !0).forEach((function (n) {
                        (0, s.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var T = "\n  query Image($id: UploadId, $imgixParams: ImgixParams) {\n    upload(filter: { id: { eq: $id } }) {\n      responsiveImage(imgixParams: $imgixParams) {\n        ...responsiveImageFragment\n      }\n      id\n    }\n  }\n  ".concat("\n  fragment responsiveImageFragment on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n", "\n"),
                O = function (e) {
                    var n = e.id,
                        t = e.imgixParams,
                        r = (0, S.Z)(e, N),
                        s = (0, i.useState)(),
                        a = s[0],
                        l = s[1];
                    return (0, o.Z)((function () {
                        (0, w.W)({
                            token: b.vc.datoCmsMediaAccessorToken,
                            query: T,
                            variables: {
                                id: n,
                                imgixParams: A({
                                    auto: "format",
                                    fit: "max",
                                    q: 60
                                }, t)
                            }
                        }).then((function (e) {
                            var n = e.upload;
                            l(null == n ? void 0 : n.responsiveImage)
                        }))
                    })), a ? (0, f.jsx)(E.E, A({
                        data: a,
                        usePlaceholder: !1
                    }, r)) : (0, f.jsx)(f.Fragment, {})
                },
                y = t(41487),
                C = t(50029),
                P = t(87794),
                I = t.n(P),
                L = t(92105),
                R = t.n(L),
                U = t(40782),
                k = t(82580),
                M = t(19428),
                K = t(74231),
                D = t(87841),
                Z = t(18160),
                F = t(17695),
                B = function (e) {
                    var n = e.redirectUrl,
                        t = (0, Z.Bl)(),
                        s = (0, r.Z)(t, 2),
                        o = s[0],
                        l = s[1],
                        d = l.isLoading,
                        p = l.isSuccess,
                        g = (0, Z.YA)(),
                        x = (0, r.Z)(g, 2),
                        h = x[0],
                        _ = x[1],
                        v = _.isLoading,
                        S = _.isSuccess,
                        E = (0, a.useSelector)((0, F.s_)()),
                        b = (0, M.useTranslation)(["signin", "common"]).t,
                        w = (0, a.useSelector)(u.dy),
                        N = (0, m.Oi)(m.lL.Xl),
                        j = (0, c.iz)().logEvent,
                        A = "/hub" !== n,
                        T = (null == E ? void 0 : E.target) || "default",
                        O = (0, i.useMemo)((function () {
                            return K.Ry().shape({
                                email: K.Z_().email(b("signin:errors.invalidEmail")).required(b("signin:errors.required")),
                                password: K.Z_().min(10, b("signin:errors.passwordShort")).required(b("signin:errors.required")).matches(D.L6, b("signin:errors.passwordValidationFail")),
                                repeatPassword: K.Z_().required(b("signin:errors.required")).when("password", {
                                    is: function (e) {
                                        return e && e.length > 0
                                    },
                                    then: K.Z_().oneOf([K.iH("password")], b("signin:errors.passwordsMismatch"))
                                })
                            })
                        }), [b, D.L6]),
                        y = (0, i.useCallback)((function (e) {
                            j("signup", {
                                "partner name": T,
                                page: "signup",
                                stage: e
                            })
                        }), [j, T]);
                    (0, i.useEffect)((function () {
                        d && y("email and password submitted")
                    }), [d]), (0, i.useEffect)((function () {
                        p && (y("account created"), U.Am.success(b("signin:emailVerificationMsg")))
                    }), [p]), (0, i.useEffect)((function () {
                        S && y("signup completed")
                    }), [S]);
                    var P = (0, i.useCallback)(function () {
                            var e = (0, C.Z)(I().mark((function e(n, t) {
                                var r, s;
                                return I().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (r = t.setSubmitting)(!0), e.next = 4, o({
                                                email: n.email,
                                                password: n.password
                                            }).unwrap();
                                        case 4:
                                            if (null === (s = e.sent) || void 0 === s || !s.data.id) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 8, h({
                                                id: w._id,
                                                loginId: n.email,
                                                password: n.password,
                                                silent: !0
                                            });
                                        case 8:
                                            e.next = 11;
                                            break;
                                        case 10:
                                            U.Am.error(b("signin:errors.signupFailed"));
                                        case 11:
                                            r(!1);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }(), [h]),
                        L = "bg-transparent rounded-xl flex-1 w-full py-4 px-4 placeholder-gray-400 shadow-sm text-xs focus:outline-none focus:ring-2 border",
                        B = "block relative mb-6 mt-3 text-white";
                    return (0, f.jsx)(m.Zn, {
                        children: (0, f.jsxs)("div", {
                            className: "w-full lg:flex lg:justify-center",
                            children: [(0, f.jsxs)("div", {
                                className: "mx-4 my-6 flex-grow max-w-[1438px] flex flex-col gap-10 lg:gap-14",
                                children: [(0, f.jsx)(m.TR, {
                                    size: N ? 148 : 67,
                                    color: "white"
                                }), (0, f.jsx)("div", {
                                    className: "flex justify-center xl:justify-start",
                                    children: (0, f.jsxs)("div", {
                                        className: "card-bg not-hoverable rounded-xl w-full max-w-[596px]",
                                        children: [(0, f.jsx)("div", {
                                            className: "px-4 py-4 md:px-12 md:pt-12 md:pb-10",
                                            children: (0, f.jsx)(m.ZT.Title, {
                                                level: 2,
                                                children: b("signin:createAccount")
                                            })
                                        }), (0, f.jsx)(k.J9, {
                                            initialValues: {
                                                email: "",
                                                password: "",
                                                repeatPassword: ""
                                            },
                                            validationSchema: O,
                                            onSubmit: P,
                                            children: function (e) {
                                                var n = e.isSubmitting,
                                                    t = e.errors,
                                                    r = e.resetForm,
                                                    s = e.submitCount,
                                                    i = t.email,
                                                    a = t.password,
                                                    o = t.repeatPassword;
                                                return n && function (e) {
                                                    var n = e.email,
                                                        t = e.password,
                                                        r = e.repeatPassword;
                                                    n && y("email invalid"), t && y("password invalid"), r && y("password mismatch")
                                                }(t), (0, f.jsxs)(k.l0, {
                                                    className: "px-4 py-4 md:px-12 md:pt-8 md:pb-10",
                                                    children: [(0, f.jsxs)("label", {
                                                        className: B,
                                                        children: [b("signin:start.formLabel"), (0, f.jsx)(k.gN, {
                                                            name: "email",
                                                            type: "email",
                                                            placeholder: b("signin:start.formPlaceholder"),
                                                            className: L
                                                        }), i && !!s && (0, f.jsx)("p", {
                                                            className: "text-red-500",
                                                            children: i
                                                        })]
                                                    }), (0, f.jsxs)("label", {
                                                        className: B,
                                                        children: [b("signin:start.password"), (0, f.jsx)(k.gN, {
                                                            name: "password",
                                                            type: "password",
                                                            placeholder: b("signin:start.enterPassword"),
                                                            className: L
                                                        }), a && !!s && (0, f.jsx)("p", {
                                                            className: "text-red-500",
                                                            children: a
                                                        })]
                                                    }), (0, f.jsxs)("label", {
                                                        className: B,
                                                        children: [b("signin:start.repeatPassword"), (0, f.jsx)(k.gN, {
                                                            name: "repeatPassword",
                                                            type: "password",
                                                            placeholder: b("signin:start.enterPassword"),
                                                            className: L
                                                        }), o && !!s && (0, f.jsx)("p", {
                                                            className: "text-red-500",
                                                            children: o
                                                        })]
                                                    }), (0, f.jsxs)("div", {
                                                        className: "mt-6 flex gap-4 flex-row items-center justify-between",
                                                        children: [(0, f.jsx)(m.ZT.Link, {
                                                            onClick: function () {
                                                                r()
                                                            },
                                                            link: "/signin",
                                                            children: b("signin:existingAccount")
                                                        }), (0, f.jsx)("div", {
                                                            children: (0, f.jsx)(m.zx, {
                                                                size: N ? "large" : "medium",
                                                                type: "primary",
                                                                disabled: n,
                                                                htmlType: "submit",
                                                                children: n || v ? (0, f.jsx)(R(), {
                                                                    size: "8px"
                                                                }) : (0, f.jsx)(f.Fragment, {
                                                                    children: b("common:signUp")
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }
                                        })]
                                    })
                                })]
                            }), N && !A && (0, f.jsx)("div", {
                                className: "absolute bottom-0 right-[5%] lg:w-[40%] 2xl:w-3/6 h-[95%]",
                                children: (0, f.jsx)("img", {
                                    src: "/images/signin-bg.png",
                                    alt: "avatar",
                                    className: "w-full h-full object-contain object-bottom"
                                })
                            })]
                        })
                    })
                },
                q = function (e) {
                    var n = e.redirectUrl,
                        t = (0, M.useTranslation)(["signin"]).t,
                        r = (0, l.useRouter)(),
                        s = (0, i.useMemo)((function () {
                            return (0, g.Ph)(r.asPath, "code")
                        }), [r.asPath]),
                        o = !!s,
                        c = (0, a.useSelector)(u.tH).data.settings;
                    return (0, f.jsx)(D.RW, {
                        redirectUrl: n,
                        title: t(o ? "signin:reset.enterNewPassword" : "signin:reset.resetPassword"),
                        subtitle: !c || null != c && c.isPasswordUpdated ? "" : t("signin:reset.firstTimePasswordUpdate"),
                        children: o ? (0, f.jsx)(D.hv, {
                            changePasswordId: s
                        }) : (0, f.jsx)(D.x3, {})
                    })
                }
        },
        29667: function (e, n, t) {
            "use strict";
            t.d(n, {
                q: function () {
                    return a
                }
            });
            var r = t(67294),
                s = t(13104),
                i = t(75064),
                a = function (e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            withCache: !0
                        },
                        a = t.withCache,
                        o = (0, i.L)(n);
                    return (0, r.useMemo)((function () {
                        var n = "".concat(s.vc.avatarApiUrl, "/").concat(e.id, ".png"),
                            t = a ? "cacheControl=true&uat=".concat(null == e ? void 0 : e.updatedAt) : "";
                        return n + (o ? "?".concat(o, "&").concat(t) : "?".concat(t))
                    }), [e, o])
                }
        },
        75064: function (e, n, t) {
            "use strict";
            t.d(n, {
                L: function () {
                    return l
                }
            });
            var r = t(67294),
                s = t(16517),
                i = t(80129),
                a = t.n(i),
                o = t(17695),
                l = function (e) {
                    var n = (0, s.useSelector)((0, o.s_)()),
                        t = ("none" !== e && e || n).renderSettings;
                    return (0, r.useMemo)((function () {
                        if (null == t || !t.renderImage || "none" === e) return "";
                        var n = {};
                        return t.scene && (n.scene = t.scene), t.blendShapes && (n.blendShapes = t.blendShapes), a().stringify(n)
                    }), [t])
                }
        },
        72576: function (e, n, t) {
            "use strict";
            t.d(n, {
                E: function () {
                    return d
                }
            });
            var r = t(67294),
                s = t(94184),
                i = t.n(s),
                a = t(19428),
                o = t(37854),
                l = t(29667),
                c = t(85893),
                d = function (e) {
                    var n = e.avatar,
                        t = e.className,
                        s = e.withLoadingMessage,
                        d = e.renderSettings,
                        u = e.onStateChange,
                        m = (0, a.useTranslation)("hub").t,
                        p = (0, r.useState)(!0),
                        g = p[0],
                        f = p[1],
                        x = (0, l.q)(n, "none" === d ? d : d && {
                            renderSettings: d
                        });
                    return (0, r.useEffect)((function () {
                        "function" == typeof u && u(g)
                    }), [g, u]), (0, c.jsxs)("div", {
                        className: i()(t, g && "relative h-[85%]"),
                        children: [(0, c.jsx)("div", {
                            className: "justify-center items-center flex h-full",
                            children: x && (0, c.jsx)(o.$, {
                                src: x,
                                onLoad: function () {
                                    return f(!1)
                                },
                                alt: "avatar",
                                className: "h-full w-full object-bottom object-contain"
                            })
                        }), g && (0, c.jsx)("div", {
                            className: "flex items-center justify-center absolute transform translate-y-14 top-0 left-0 bottom-0 w-full h-full",
                            children: (0, c.jsx)("div", {
                                className: "m-auto text-center",
                                children: s && (0, c.jsxs)(c.Fragment, {
                                    children: [(0, c.jsx)("p", {
                                        className: "text-white",
                                        children: m("renderingAvatar")
                                    }), (0, c.jsx)("p", {
                                        className: "text-white",
                                        children: m("renderingDuration")
                                    })]
                                })
                            })
                        })]
                    })
                };
            d.defaultProps = {
                renderSettings: void 0,
                className: "",
                withLoadingMessage: !1,
                onStateChange: function () {}
            }
        },
        9784: function (e, n, t) {
            "use strict";
            t.d(n, {
                q: function () {
                    return s
                }
            });
            var r = t(85893),
                s = function (e) {
                    var n = e.alt,
                        t = void 0 === n ? "" : n,
                        s = e.objectFit,
                        i = void 0 === s ? "contain" : s,
                        a = e.transparent,
                        o = void 0 !== a && a,
                        l = e.onClick,
                        c = e.className,
                        d = e.src,
                        u = void 0 === d ? "" : d,
                        m = e.width,
                        p = e.height,
                        g = e.shape,
                        f = void 0 === g ? "square" : g,
                        x = e.backgroundColor,
                        h = void 0 === x ? "" : x,
                        _ = e.size;
                    return (0, r.jsx)("div", {
                        onClick: l,
                        style: {
                            display: "inline-block",
                            width: _ || m,
                            height: _ || p,
                            backgroundColor: h
                        },
                        className: "\n        overflow-hidden\n        hub-avatar\n        p-1\n        ".concat(c, "\n        ").concat(o ? "" : "bg-rpmDark", "\n        ").concat("square" === f ? "rounded-lg" : "rounded-full", "\n      "),
                        "data-testid": "avatar-container",
                        children: u && (0, r.jsx)("img", {
                            src: u,
                            alt: t,
                            className: "w-full h-full object-center ".concat("cover" === i ? "object-cover" : "object-contain")
                        })
                    })
                }
        },
        79209: function (e, n, t) {
            t(34155), t(930);
            var r = t(1581);
            t(5477)(new r({
                allErrors: !0,
                removeAdditional: !0,
                useDefaults: !0,
                coerceTypes: "array",
                allowUnionTypes: !0
            }), ["uuid", "date-time"]).addKeyword("kind").addKeyword("modifier"), e.exports.envSchema = function (e) {
                return {}
            }
        },
        20375: function (e, n, t) {
            "use strict";
            t.d(n, {
                W: function () {
                    return d
                }
            });
            var r = t(90398),
                s = t(28687),
                i = t(18730)._,
                a = i.NODE_ENV,
                o = "development" === a,
                l = !!i.VERCEL,
                c = {
                    env: a,
                    isDev: o,
                    isProd: "production" === a,
                    devAutofillLoginCode: o && !l && i.AUTOFILL_LOGIN_CODE,
                    vercel: l,
                    vercelUrl: i.VERCEL_URL,
                    internalAccessToken: i.INTERNAL_ACCESS_TOKEN,
                    fusionAuth: {
                        host: i.FUSIONAUTH_DOMAIN,
                        clientId: i.FUSIONAUTH_CLIENT_ID,
                        clientSecret: i.FUSIONAUTH_SECRET,
                        apiSecret: i.FUSIONAUTH_API_KEY,
                        jwtSigningKey: i.FUSIONAUTH_JWT_SIGNING_KEY,
                        accessTokenExp: i.ACCESS_TOKEN_EXP,
                        defaultTenantId: i.FUSIONAUTH_DEFAULT_TENANT_ID,
                        webhookKey: i.FUSIONAUTH_WEBHOOK_KEY,
                        cronWebhookKey: i.CRON_WEBHOOK_KEY,
                        cronTelemetryEnabled: i.CRON_TELEMETRY_ENABLED
                    },
                    partnerSigningKey: i.PARTNER_JWT_SECRET,
                    partnerSigningKeyExp: i.PARTNER_JWT_SECRET_EXP,
                    datoCmsApiToken: i.DATOCMS_API_TOKEN,
                    avatarS3: {
                        accessKeyId: i.AVATAR_S3_ACCESS_KEY,
                        secretAccessKey: i.AVATAR_S3_SECRET_ACCESS_KEY,
                        region: i.AVATAR_S3_REGION,
                        bucketName: i.AVATAR_S3_BUCKET_NAME,
                        directory: i.AVATAR_S3_FOLDER
                    },
                    imageS3: {
                        accessKeyId: i.RPM_AWS_ACCESS_KEY,
                        secretAccessKey: i.RPM_AWS_SECRET_ACCESS_KEY,
                        region: i.RPM_S3_REGION
                    },
                    nft: {
                        baseServiceURL: i.API_BASE_URL,
                        s3Bucket: i.NFT_S3_BUCKET
                    },
                    avatarServiceURL: "".concat(i.API_BASE_URL),
                    blogPreviewSecret: i.BLOG_PREVIEW_SECRET,
                    mongo: {
                        url: i.ATLAS_URI,
                        debug: i.DEBUG_MONGO
                    },
                    userSettingsMonthsToExpire: i.USER_SETTINGS_MONTHS_TO_EXPIRE,
                    absynthEndpoint: i.ABSYNTH_ENDPOINT,
                    emailTplCampaignCode: i.EMAIL_TEMPLATE_CAMPAIGN_CODE,
                    gtm: {
                        measurementId: i.GTM_MEASUREMENT_ID,
                        key: i.GTM_KEY
                    },
                    photoBooth: {
                        bucket: i.PHOTOBOOTH_BUCKET_NAME
                    }
                };

            function d(e) {
                var n = e.query,
                    t = e.variables,
                    r = e.preview,
                    i = e.token,
                    a = void 0 === i ? c.datoCmsApiToken : i,
                    o = r ? "https://graphql.datocms.com/".concat("", "preview") : "https://graphql.datocms.com/".concat("");
                return new s.GraphQLClient(o, {
                    headers: {
                        authorization: "Bearer ".concat(a)
                    }
                }).request(n, t)
            }
            new r.SiteClient(c.datoCmsApiToken)
        },
        76230: function (e) {
            e.exports = {
                avatarPreview: "AvatarPreview_avatarPreview__GpiQe",
                avatarPreviewIncompatible: "AvatarPreview_avatarPreviewIncompatible__RnJLW",
                incompatibleText: "AvatarPreview_incompatibleText__livBa"
            }
        },
        13352: function (e) {
            e.exports = {
                image: "LoadableImage_image__VOnl6",
                hidden: "LoadableImage_hidden__dxd4O"
            }
        }
    }
]);