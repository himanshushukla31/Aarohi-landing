(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3996],{44019:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){var a=n(86340).normalizeLocalePath,u=n(57565).detectDomainLocale,l=t||a(e,o).detectedLocale,c=u(r,void 0,l);if(c){var i="http".concat(c.http?"":"s","://"),f=l===c.defaultLocale?"":"/".concat(l);return"".concat(i).concat(c.domain).concat("").concat(f).concat(e)}return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var o=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(92648).Z,a=n(17273).Z,u=r(n(67294)),l=n(64957),c=n(57995),i=n(30647),f=n(51992),d=n(90639),s=n(44019),p=n(70227),v={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){}));var r=o&&void 0!==o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,m=e.children,_=e.prefetch,b=e.passHref,g=e.replace,C=e.shallow,M=e.scroll,x=e.locale,L=e.onClick,j=e.onMouseEnter,O=e.onTouchStart,P=e.legacyBehavior,k=void 0===P?!0!==Boolean(!1):P,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!k||"string"!=typeof n&&"number"!=typeof n||(n=u.default.createElement("a",null,n));var S=!1!==_,w=u.default.useContext(i.RouterContext),R=u.default.useContext(f.AppRouterContext);R&&(w=R);var I,A=u.default.useMemo((function(){var e=l.resolveHref(w,r,!0),t=o(e,2),n=t[0],a=t[1];return{href:n,as:y?l.resolveHref(w,y):a||n}}),[w,r,y]),U=A.href,T=A.as,Z=u.default.useRef(U),H=u.default.useRef(T);k&&(I=u.default.Children.only(n));var z=k?I&&"object"==typeof I&&I.ref:t,B=d.useIntersection({rootMargin:"200px"}),D=o(B,3),N=D[0],K=D[1],q=D[2],F=u.default.useCallback((function(e){H.current===T&&Z.current===U||(q(),H.current=T,Z.current=U),N(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))}),[T,z,U,q,N]);u.default.useEffect((function(){var e=K&&S&&l.isLocalURL(U),t=void 0!==x?x:w&&w.locale,n=v[U+"%"+T+(t?"%"+t:"")];e&&!n&&h(w,U,T,{locale:t})}),[T,U,K,x,S,w]);var G={ref:F,onClick:function(e){k||"function"!=typeof L||L(e),k&&I.props&&"function"==typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,i,f,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:i,scroll:c}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!d})};f?u.default.startTransition(s):s()}}(e,w,U,T,g,C,M,x,Boolean(R),S)},onMouseEnter:function(e){k||"function"!=typeof j||j(e),k&&I.props&&"function"==typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!S&&R||l.isLocalURL(U)&&h(w,U,T,{priority:!0})},onTouchStart:function(e){k||"function"!=typeof O||O(e),k&&I.props&&"function"==typeof I.props.onTouchStart&&I.props.onTouchStart(e),!S&&R||l.isLocalURL(U)&&h(w,U,T,{priority:!0})}};if(!k||b||"a"===I.type&&!("href"in I.props)){var $=void 0!==x?x:w&&w.locale,Q=w&&w.isLocaleDomain&&s.getDomainLocale(T,$,w.locales,w.domainLocales);G.href=Q||p.addBasePath(c.addLocale(T,$,w&&w.defaultLocale))}return k?u.default.cloneElement(I,G):u.default.createElement("a",Object.assign({},E,G),n)}));t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0,t.normalizeLocalePath=function(e,t){return n(9625).normalizeLocalePath(e,t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90639:function(e,t,n){"use strict";var o=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!u,f=r.useState(!1),d=o(f,2),s=d[0],p=d[1],v=r.useState(null),h=o(v,2),y=h[0],m=h[1];r.useEffect((function(){if(u){if(i||s)return;if(y&&y.tagName)return function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},c.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,u=o.elements;return u.set(e,(function(e){return e&&p(e)})),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(y,0,{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[y,i,n,t,s]);var _=r.useCallback((function(){p(!1)}),[]);return[m,s,_]};var r=n(67294),a=n(26286),u="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=(0,n(92648).Z)(n(67294)).default.createContext({});t.AmpStateContext=o},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,u=void 0!==a&&a;return n||r&&u}},51992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(92648).Z)(n(67294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},72717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var o=n(6495).Z,r=n(92648).Z,a=(0,n(91598).Z)(n(67294)),u=r(n(11585)),l=n(78e3),c=n(15850),i=n(9470);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)}),[])):e.concat(t)}n(99475);var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(d,[]).reverse().concat(f(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0,u=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){u=!0;var l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,i=s.length;c<i;c++){var f=s[c];if(r.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var d=r.props[f],p=o[f]||new Set;"name"===f&&u||!p.has(d)?(p.add(d),o[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=o({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:r})}))}t.default=function(e){var t=e.children,n=a.useContext(l.AmpStateContext),o=a.useContext(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:p,headManager:o,inAmpMode:i.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,l=e.reduceComponentsToState;function c(){if(n&&n.mountedInstances){var t=o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(l(t,e))}}r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),c());return a((function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}})),a((function(){return n&&(n._pendingUpdate=c),function(){n&&(n._pendingUpdate=c)}})),u((function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}})),null};var o=(0,n(91598).Z)(n(67294)),r=!1,a=r?function(){}:o.useLayoutEffect,u=r?function(){}:o.useEffect},9008:function(e,t,n){e.exports=n(72717)},41664:function(e,t,n){e.exports=n(7942)}}]);