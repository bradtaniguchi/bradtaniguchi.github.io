(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(3636)}])},1920:function(e,n,t){"use strict";t.d(n,{A:function(){return x}});var r=t(2322),l=t(7118),s=t(2480),i=t(7561),c=t(8879),a=t.n(c),o=t(9097),u=t.n(o),d=t(2784);let x=(0,d.memo)(function(e){let n=e.displayMode||"row";return(0,r.jsx)(u(),{href:"blog/dev/".concat(e.blog.id,"?slug=").concat(e.blog.slug),style:{textDecoration:"inherit"},children:(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",sx:{gap:"8px"},children:[(0,r.jsx)(s.Z,{as:"h4",margin:0,children:e.blog.title}),(0,r.jsx)(s.Z,{as:"p",children:e.blog.description})]}),(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",sx:{gap:"4px"},children:[(0,r.jsxs)(l.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"4px"},children:[(e.blog.tags||[]).map(e=>(0,r.jsx)(i.Z,{variant:"accent",children:e},e)),(0,r.jsx)(i.Z,{variant:"success",children:"dev.to"})]}),e.blog.date&&(0,r.jsx)(l.Z,{title:e.blog.date,children:a()(e.blog.date).format("YYYY-MM-DD")})]})]})})})},6551:function(e,n,t){"use strict";t.d(n,{r:function(){return x}});var r=t(2322),l=t(7118),s=t(2480),i=t(7561),c=t(8879),a=t.n(c),o=t(9097),u=t.n(o),d=t(2784);let x=(0,d.memo)(function(e){let n=e.displayMode||"row";return(0,r.jsx)(u(),{href:"blog/".concat(e.blog.slug),style:{textDecoration:"inherit"},children:(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",sx:{gap:"8px"},children:[(0,r.jsx)(s.Z,{as:"h4",margin:0,children:e.blog.title}),(0,r.jsx)(s.Z,{as:"p",children:e.blog.description})]}),(0,r.jsxs)(l.Z,{display:"flex",flexDirection:["column","column",n],alignItems:"center",sx:{gap:"4px"},children:[(0,r.jsx)(l.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"4px"},children:(e.blog.tags||[]).map(e=>(0,r.jsx)(i.Z,{variant:"accent",children:e},e))}),e.blog.date&&(0,r.jsx)(l.Z,{title:e.blog.date,children:a()(e.blog.date).format("YYYY-MM-DD")})]})]})})})},1835:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(2322),l=t(7118);function s(e){return(0,r.jsx)(l.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...e,children:e.children})}s.Header=function(e){return(0,r.jsx)(l.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...e,children:e.children})},s.Body=function(e){return(0,r.jsx)(l.Z,{p:3,...e,children:e.children})},s.Row=function(e){return(0,r.jsx)(l.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...e,children:e.children})}},5075:function(e,n,t){"use strict";t.d(n,{u:function(){return u}});var r=t(2322),l=t(8106),s=t(7118),i=t(7561),c=t(693),a=t(3254),o=t(2784);let u=(0,o.memo)(function(e){var n,t,u,d,x,f,h,g,p,b,j,m,y;let{searchDebounce:Z,onSearchChange:C,onSearchClear:v,onTagChange:k,defaultSearchValue:w,selectableTags:_,selectedTags:D,hideTagFilter:S}=e,[I,T]=(0,o.useState)(!1),[E,M]=(0,o.useState)(),[R,q]=(0,o.useState)(null!=w?w:"");(0,o.useEffect)(()=>{w&&(M(!!w),q(w))},[w]);let[Y,A]=(n=()=>{"function"==typeof C&&C(R)},void 0===(t=null!=Z?Z:100)&&(t=0),j=(void 0===(u=t)&&(u=0),d=(0,o.useRef)(!1),x=(0,o.useRef)(),f=(0,o.useRef)(n),h=(0,o.useCallback)(function(){return d.current},[]),g=(0,o.useCallback)(function(){d.current=!1,x.current&&clearTimeout(x.current),x.current=setTimeout(function(){d.current=!0,f.current()},u)},[u]),p=(0,o.useCallback)(function(){d.current=null,x.current&&clearTimeout(x.current)},[]),(0,o.useEffect)(function(){f.current=n},[n]),(0,o.useEffect)(function(){return g(),p},[u]),b=[h,p,g])[0],m=b[1],y=b[2],(0,o.useEffect)(y,[R,C]),[j,m]),N=(0,o.useCallback)(()=>{T(!I)},[I]),W=(0,o.useCallback)(e=>{if("function"!=typeof k)return;let n=e.currentTarget.value,t=(D||[]).includes(n);if(t)return k((D||[]).filter(e=>e!==n));k([...D||[],n])},[k,D]),B=(0,o.useCallback)(()=>{T(!1)},[]),G=(0,o.useCallback)(e=>q(e.target.value),[]),O=(0,o.useCallback)(()=>M(!0),[]),P=(0,o.useCallback)(()=>{Y()?(M(!1),q(""),"function"==typeof v&&v()):A()},[A,Y,v]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:2,marginLeft:"8px"},children:[!S&&(0,r.jsx)("div",{children:I?(0,r.jsxs)(s.Z,{display:"flex",sx:{gap:1},alignItems:"center",flexWrap:"wrap",children:[(_||[]).map(e=>(0,r.jsx)("button",{onClick:W,value:e,type:"button","aria-label":"toggle tag ".concat(e),children:(0,r.jsx)(i.Z,{variant:(D||[]).includes(e)?"success":"accent",children:e})},e)),(0,r.jsx)(c.h,{"aria-label":"hide tags",icon:l.b0D,onClick:B})]}):(0,r.jsxs)(s.Z,{display:"flex",sx:{gap:1},alignItems:"center",flexWrap:"wrap",children:[(D||[]).map(e=>(0,r.jsx)("button",{onClick:W,value:e,type:"button","aria-label":"disable tag ".concat(e),children:(0,r.jsx)(i.Z,{variant:"success",children:e})},e)),(0,r.jsx)(c.h,{"aria-label":"show tags",icon:l.k1n,onClick:N})]})}),(0,r.jsx)("div",{children:E?(0,r.jsx)(a.Z,{"aria-label":"search",name:"search",placeholder:"Search",autoComplete:"off",onChange:G,value:R,trailingAction:(0,r.jsx)(a.Z.Action,{onClick:P,icon:l.b0D,"aria-label":"close search"})}):(0,r.jsx)(c.h,{"aria-label":"show search",icon:l.W1M,onClick:O})})]})})})},562:function(e,n,t){"use strict";t.d(n,{GJ:function(){return s}});var r=t(195);let l=r.Ry({id:r.Rx(),slug:r.Z_(),title:r.Z_(),description:r.Z_(),tags:r.G0([r.IX(r.Z_()),r.Z_()]),date:r.Z_(),source:r.i0("dev.to")}),s=e=>{if(!e)return!1;try{return l.parse(e),!0}catch(e){return!1}}},3636:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return p},default:function(){return b}});var r=t(2322),l=t(1774),s=t(2951),i=t(7118),c=t(2480),a=t(9138),o=t(5632),u=t(2784),d=t(1920),x=t(6551),f=t(1835),h=t(5075),g=t(562),p=!0;function b(e){let n=(0,o.useRouter)(),t=(0,l.f3)(),p=Array.isArray(n.query.q)?n.query.q.join(" "):n.query.q,b=(Array.isArray(n.query.tags)?n.query.tags:[n.query.tags]).filter(e=>"string"==typeof e&&e),[j,m]=(0,u.useState)(""),[y,Z]=(0,u.useState)(5),C=(0,u.useCallback)(e=>{m(e),Z(5)},[]),v=(0,u.useCallback)(()=>{Z(5)},[]),k=()=>Z(y+5),{selectableTags:w,selectedTags:_,setSelectedTags:D}=(0,l.eY)({elements:e.posts}),S=(0,u.useMemo)(()=>[e=>!_.length||_.some(n=>(e.tags||[]).includes(n))],[_]);(0,u.useEffect)(()=>{b&&b.length&&D(b)},[b,D]);let{results:I}=(0,l.nB)({elements:e.posts,filters:S,searchOptions:(0,u.useMemo)(()=>({keys:["title","description","tags"],distance:.8}),[]),search:j,sortBy:"date",sortDir:"dsc"}),T=y<I.length;return t?(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(f.Z.Header,{children:(0,r.jsxs)(i.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(c.Z,{as:"h2",fontSize:"inherit",margin:0,children:"Posts"}),(0,r.jsx)("div",{children:(0,r.jsx)(h.u,{defaultSearchValue:p,selectableTags:w,selectedTags:_,onSearchChange:C,onSearchClear:v,onTagChange:D})})]})}),(0,r.jsxs)(f.Z.Body,{p:0,children:[(0,r.jsx)("ul",{children:I.map(e=>(0,r.jsx)(f.Z.Row,{p:3,children:(0,r.jsx)("li",{children:(0,g.GJ)(e)?(0,r.jsx)(d.A,{blog:e}):(0,r.jsx)(x.r,{blog:e})})},e.slug)).slice(0,y)}),T?(0,r.jsx)(i.Z,{sx:{margin:"8px"},children:(0,r.jsx)(a.zx,{sx:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center"},onClick:k,children:"Show More"})}):null]})]}):(0,r.jsx)(s.Z,{})}}},function(e){e.O(0,[97,975,774,888,179],function(){return e(e.s=4359)}),_N_E=e.O()}]);
//# sourceMappingURL=blog-fac0c519c6d5b345.js.map