(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{2219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1088:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(3903).Z,n=o(5154).Z,r=l(o(2784)),u=o(4e3),a=o(7003),f=o(7858),c=o(7826),i=o(8599),s=o(2219),d=o(2484);let p={};function y(e,t,o,l){if(!e||!u.isLocalURL(t))return;Promise.resolve(e.prefetch(t,o,l)).catch(e=>{});let n=l&&void 0!==l.locale?l.locale:e&&e.locale;p[t+"%"+o+(n?"%"+n:"")]=!0}let v=r.default.forwardRef(function(e,t){let o,l;let{href:v,as:b,children:h,prefetch:C,passHref:_,replace:g,shallow:x,scroll:m,locale:L,onClick:M,onMouseEnter:R,onTouchStart:j,legacyBehavior:E=!0!==Boolean(!0)}=e,O=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=h,E&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let k=!1!==C,P=r.default.useContext(f.RouterContext),T=r.default.useContext(c.AppRouterContext);T&&(P=T);let{href:w,as:I}=r.default.useMemo(()=>{let[e,t]=u.resolveHref(P,v,!0);return{href:e,as:b?u.resolveHref(P,b):t||e}},[P,v,b]),S=r.default.useRef(w),U=r.default.useRef(I);E&&(l=r.default.Children.only(o));let A=E?l&&"object"==typeof l&&l.ref:t,[B,D,K]=i.useIntersection({rootMargin:"200px"}),N=r.default.useCallback(e=>{(U.current!==I||S.current!==w)&&(K(),U.current=I,S.current=w),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[I,A,w,K,B]);r.default.useEffect(()=>{let e=D&&k&&u.isLocalURL(w),t=void 0!==L?L:P&&P.locale,o=p[w+"%"+I+(t?"%"+t:"")];e&&!o&&y(P,w,I,{locale:t})},[I,w,D,L,k,P]);let H={ref:N,onClick(e){E||"function"!=typeof M||M(e),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),e.defaultPrevented||function(e,t,o,l,n,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[n?"replace":"push"](o,l,{shallow:a,locale:c,scroll:f}):t[n?"replace":"push"](l||o,{forceOptimisticNavigation:!s})};i?r.default.startTransition(y):y()}(e,P,w,I,g,x,m,L,Boolean(T),k)},onMouseEnter(e){E||"function"!=typeof R||R(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),!(!k&&T)&&u.isLocalURL(w)&&y(P,w,I,{priority:!0})},onTouchStart(e){E||"function"!=typeof j||j(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),!(!k&&T)&&u.isLocalURL(w)&&y(P,w,I,{priority:!0})}};if(!E||_||"a"===l.type&&!("href"in l.props)){let Z=void 0!==L?L:P&&P.locale,G=P&&P.isLocaleDomain&&s.getDomainLocale(I,Z,P.locales,P.domainLocales);H.href=G||d.addBasePath(a.addLocale(I,Z,P&&P.defaultLocale))}return E?r.default.cloneElement(l,H):r.default.createElement("a",Object.assign({},O,H),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!r,[i,s]=l.useState(!1),[d,p]=l.useState(null);l.useEffect(()=>{if(r){if(!c&&!i&&d&&d.tagName){let e=function(e,t,o){let{id:l,observer:n,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},l=a.find(e=>e.root===o.root&&e.margin===o.margin);if(l&&(t=u.get(l)))return t;let n=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:n},a.push(o),u.set(o,t),t}(o);return r.set(e,t),n.observe(e),function(){if(r.delete(e),n.unobserve(e),0===r.size){n.disconnect(),u.delete(l);let t=a.findIndex(e=>e.root===l.root&&e.margin===l.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!i){let l=n.requestIdleCallback(()=>s(!0));return()=>n.cancelIdleCallback(l)}},[d,c,o,t,i]);let y=l.useCallback(()=>{s(!1)},[]);return[p,i,y]};var l=o(2784),n=o(1424);let r="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7826:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var l=(0,o(3903).Z)(o(2784));let n=l.default.createContext(null);t.AppRouterContext=n;let r=l.default.createContext(null);t.LayoutRouterContext=r;let u=l.default.createContext(null);t.GlobalLayoutRouterContext=u;let a=l.default.createContext(null);t.TemplateContext=a},9097:function(e,t,o){e.exports=o(1088)}}]);