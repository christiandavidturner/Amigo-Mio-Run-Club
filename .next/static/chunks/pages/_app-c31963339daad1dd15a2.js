_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"1TCz":function(e,n,t){"use strict";t.r(n);var r=t("nKUr");function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t("vOnD"),i=c.a.div.withConfig({displayName:"Footer__FooterSection",componentId:"sc-1tgiv0a-0"})(["background:#000;color:#fff;height:60px;display:flex;justify-content:center;align-items:center;"]),a=function(){return Object(r.jsx)(i,{children:Object(r.jsx)("p",{children:"Amigo Mio Run Club, Ltd. \u2022 2021 \u2022 All Rights Reserved."})})},l=t("q1tI"),s=t("YFqc"),u=t.n(s),f=t("lI74"),d=t.n(f),p=Object(l.createContext)({user:null,login:function(){},logout:function(){},authReady:!1}),b=function(e){var n=e.children,t=Object(l.useState)(null),o=t[0],c=t[1];Object(l.useEffect)((function(){d.a.on("login",(function(e){c(e),d.a.close(),console.log("login event")})),d.a.init()}),[]);var i={user:o,login:function(){d.a.open()}};return Object(r.jsx)(p.Provider,{value:i,children:n})},j=p,h=c.a.nav.withConfig({displayName:"Navbar__Nav",componentId:"prfwg4-0"})(["height:80px;background:#000;color:#fff;display:flex;justify-content:space-between;align-items:center;list"]),v=c.a.a.withConfig({displayName:"Navbar__StyledLink",componentId:"prfwg4-1"})(["padding:0rem 2rem;"]),O=c.a.li.withConfig({displayName:"Navbar__LoginButton",componentId:"prfwg4-2"})(["padding:0rem 2rem;list-style-type:none;cursor:pointer;"]);function g(){var e=Object(l.useContext)(j),n=e.user,t=e.login;return console.log(n),Object(r.jsxs)(h,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{href:"/",passHref:!0,children:Object(r.jsx)(v,{children:"AMRC"})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(u.a,{href:"/",passHref:!0,children:Object(r.jsx)(v,{children:"Home"})}),Object(r.jsx)(u.a,{href:"/about",passHref:!0,children:Object(r.jsx)(v,{children:"About"})}),Object(r.jsx)(u.a,{href:"/contact",passHref:!0,children:Object(r.jsx)(v,{children:"Contact"})}),Object(r.jsx)(u.a,{href:"/runs",passHref:!0,children:Object(r.jsx)(v,{children:"Runs"})})]}),Object(r.jsx)(O,{children:Object(r.jsx)("li",{onClick:t,children:"Login"})})]})}function y(e){var n=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{}),n,Object(r.jsx)(a,{})]})}t("zPlV");function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return Object(r.jsx)(b,{children:Object(r.jsxs)(y,{children:[Object(r.jsx)(n,m({},t)),";"]})})}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),i=t("elyg"),a=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,j=e.replace,h=e.shallow,v=e.scroll,O=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var g=c.Children.only(b),y=g&&"object"===typeof g&&g.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),m=r(x,2),w=m[0],_=m[1],C=c.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,c.useEffect)((function(){var e=_&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof O?O:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,_,O,n,t]);var E={ref:C,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:l,scroll:a}))}(e,t,d,p,j,h,v,O)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof O?O:t&&t.locale,N=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);E.href=N||(0,i.addBasePath)((0,i.addLocale)(p,L,t&&t.defaultLocale))}return c.default.cloneElement(g,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),i="undefined"!==typeof IntersectionObserver;var a=new Map},zPlV:function(e,n,t){}},[[0,0,1,4,2,3]]]);