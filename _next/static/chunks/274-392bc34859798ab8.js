(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{6356:function(e,t,i){"use strict";var r=i(2779),o=i.n(r),n=i(2784),a=i(4703),l=i(7118),s=i(9882),c=i(4793);let d=a.ZP.div.withConfig({displayName:"Timeline",componentId:"sc-1u6eyef-0"})(["display:flex;flex-direction:column;"," ",";"],e=>e.clipSidebar&&(0,a.iv)([".Timeline-Item:first-child{padding-top:0;}.Timeline-Item:last-child{padding-bottom:0;}"]),c.Z),u=a.ZP.div.attrs(e=>({className:o()("Timeline-Item",e.className)})).withConfig({displayName:"Timeline__TimelineItem",componentId:"sc-1u6eyef-1"})(["display:flex;position:relative;padding:"," 0;margin-left:",";&::before{position:absolute;top:0;bottom:0;left:0;display:block;width:2px;content:'';background-color:",";}"," ",";"],(0,s.U2)("space.3"),(0,s.U2)("space.3"),(0,s.U2)("colors.border.muted"),e=>e.condensed&&(0,a.iv)(["padding-top:",";padding-bottom:0;&:last-child{padding-bottom:",";}.TimelineItem-Badge{height:16px;margin-top:",";margin-bottom:",";color:",";background-color:",";border:0;}"],(0,s.U2)("space.1"),(0,s.U2)("space.3"),(0,s.U2)("space.2"),(0,s.U2)("space.2"),(0,s.U2)("colors.fg.muted"),(0,s.U2)("colors.canvas.default")),c.Z),f=e=>n.createElement(l.Z,{position:"relative",zIndex:1},n.createElement(l.Z,{display:"flex",className:"TimelineItem-Badge",flexShrink:0,borderRadius:"50%",borderWidth:"2px",borderStyle:"solid",borderColor:"canvas.default",overflow:"hidden",color:"fg.muted",bg:"timeline.badgeBg",width:"32px",height:"32px",mr:2,ml:"-15px",alignItems:"center",justifyContent:"center",sx:e.sx},e.children));f.displayName="TimelineBadge";let m=a.ZP.div.withConfig({displayName:"Timeline__TimelineBody",componentId:"sc-1u6eyef-2"})(["min-width:0;max-width:100%;margin-top:",";color:",";flex:auto;font-size:",";",";"],(0,s.U2)("space.1"),(0,s.U2)("colors.fg.muted"),(0,s.U2)("fontSizes.1"),c.Z),g=a.ZP.div.withConfig({displayName:"Timeline__TimelineBreak",componentId:"sc-1u6eyef-3"})(["position:relative z-index:1;height:24px;margin:0;margin-bottom:-",";margin-left:0;background-color:",";border:0;border-top:"," solid ",";",";"],(0,s.U2)("space.3"),(0,s.U2)("colors.canvas.default"),(0,s.U2)("space.1"),(0,s.U2)("colors.border.default"),c.Z);u.displayName="Timeline.Item",f.displayName="Timeline.Badge",m.displayName="Timeline.Body",g.displayName="Timeline.Break",t.Z=Object.assign(d,{Item:u,Badge:f,Body:m,Break:g})},6239:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,i;var o,{src:n,sizes:h,unoptimized:v=!1,priority:y=!1,loading:w,className:x,quality:E,width:C,height:S,fill:_,style:I,onLoad:j,onLoadingComplete:z,placeholder:N="empty",blurDataURL:O}=e,k=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let P=l.useContext(u.ImageConfigContext),T=l.useMemo(()=>{let e=m||P||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[P]),U=k,B=U.loader||f.default;if(delete U.loader,"__next_img_default"in B){if("custom"===T.loader)throw Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=B;B=e=>{let{config:t}=e,i=a(e,["config"]);return Z(i)}}let R="",L=p(C),A=p(S);if("object"==typeof(o=n)&&(g(o)||void 0!==o.src)){let M=g(n)?n.default:n;if(!M.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(!M.height||!M.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)));if(t=M.blurWidth,i=M.blurHeight,O=O||M.blurDataURL,R=M.src,!_){if(L||A){if(L&&!A){let D=L/M.width;A=Math.round(M.height*D)}else if(!L&&A){let W=A/M.height;L=Math.round(M.width*W)}}else L=M.width,A=M.height}}let q=!y&&("lazy"===w||void 0===w);((n="string"==typeof n?n:R).startsWith("data:")||n.startsWith("blob:"))&&(v=!0,q=!1),T.unoptimized&&(v=!0);let[F,G]=l.useState(!1),[V,J]=l.useState(!1),H=p(E),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},V?{}:{color:"transparent"},I),K="blur"===N&&O&&!F?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:L,heightInt:A,blurWidth:t,blurHeight:i,blurDataURL:O}),'")')}:{},Q=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=n.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:n,width:s[d]})}}({config:T,src:n,unoptimized:v,width:L,quality:H,sizes:h,loader:B}),X=n,Y="imagesrcset",ee="imagesizes";Y="imageSrcSet",ee="imageSizes";let et={[Y]:Q.srcSet,[ee]:Q.sizes,crossOrigin:U.crossOrigin},ei=l.useRef(j);l.useEffect(()=>{ei.current=j},[j]);let er=l.useRef(z);l.useEffect(()=>{er.current=z},[z]);let eo=r({isLazy:q,imgAttributes:Q,heightInt:A,widthInt:L,qualityInt:H,className:x,imgStyle:$,blurStyle:K,loading:w,config:T,fill:_,unoptimized:v,placeholder:N,loader:B,srcString:X,onLoadRef:ei,onLoadingCompleteRef:er,setBlurComplete:G,setShowAltText:J},U);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},eo)),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src},et))):null)};var r=i(9419).Z,o=i(3903).Z,n=i(199).Z,a=i(5154).Z,l=n(i(2784)),s=o(i(7016)),c=i(8575),d=i(5515),u=i(3581);i(8993);var f=o(i(1354));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,i,o,n,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let b=e=>{var{imgAttributes:t,heightInt:i,widthInt:o,qualityInt:n,className:s,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:m,loading:g,srcString:p,config:b,unoptimized:v,loader:y,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:E,setShowAltText:C,onLoad:S,onError:_}=e,I=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=u?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},I,t,{width:o,height:i,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:g,style:r({},c,d),ref:l.useCallback(e=>{e&&(_&&(e.src=e.src),e.complete&&h(e,p,m,w,x,E))},[p,m,w,x,E,_]),onLoad(e){let t=e.currentTarget;h(t,p,m,w,x,E)},onError(e){C(!0),"blur"===m&&E(!0),_&&_(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8575:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n}=e,a=r||t,l=o||i,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},1354:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},6577:function(e,t,i){e.exports=i(6239)},8281:function(e,t,i){"use strict";i.d(t,{w_:function(){return s}});var r=i(2784),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]]);return i};function s(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,i){return r.createElement(t.tag,a({key:i},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var i,o=e.attr,n=e.size,s=e.title,c=l(e,["attr","size","title"]),d=n||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:i,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==n?r.createElement(n.Consumer,null,function(e){return t(e)}):t(o)}}}]);