(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7561:function(e,r,n){"use strict";var t=n(4703),o=n(994),s=n(4793),i=n(9882);let l=t.ZP.span.withConfig({displayName:"Label",componentId:"sc-6dyj7v-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,i.U2)("fontWeights.bold"),(0,i.U2)("fontSizes.0"),(0,o.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.fg",color:"done.emphasis"},sponsors:{borderColor:"sponsors.fg",color:"sponsors.emphasis"}}}),(0,o.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),s.Z);l.defaultProps={size:"small",variant:"default"},r.Z=l},4359:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(7983)}])},7691:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(2322),o=n(7118);function s(e){return(0,t.jsx)(o.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...e,children:e.children})}s.Header=function(e){return(0,t.jsx)(o.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...e,children:e.children})},s.Body=function(e){return(0,t.jsx)(o.Z,{p:3,...e,children:e.children})},s.Row=function(e){return(0,t.jsx)(o.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...e,children:e.children})}},942:function(e,r,n){"use strict";n.d(r,{u:function(){return c}});var t=n(2322),o=n(8106),s=n(7118),i=n(3254),l=n(693),a=n(2784);let c=(0,a.memo)(function(e){var r,n,c,d,u,f,h,p,x,b,g,m,j;let{searchDebounce:y,onSearchChange:C,defaultSearchValue:Z}=e,[v,w]=(0,a.useState)(),[k,S]=(0,a.useState)(Z);(0,a.useEffect)(()=>{Z&&(w(!!Z),S(Z))},[Z]);let[_,D]=(r=()=>C(k),void 0===(n=null!=y?y:100)&&(n=0),g=(void 0===(c=n)&&(c=0),d=(0,a.useRef)(!1),u=(0,a.useRef)(),f=(0,a.useRef)(r),h=(0,a.useCallback)(function(){return d.current},[]),p=(0,a.useCallback)(function(){d.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout(function(){d.current=!0,f.current()},c)},[c]),x=(0,a.useCallback)(function(){d.current=null,u.current&&clearTimeout(u.current)},[]),(0,a.useEffect)(function(){f.current=r},[r]),(0,a.useEffect)(function(){return p(),x},[c]),b=[h,x,p])[0],m=b[1],j=b[2],(0,a.useEffect)(j,[k,C]),[g,m]),E=(0,a.useCallback)(e=>S(e.target.value),[]),R=(0,a.useCallback)(()=>w(!0),[w]),T=(0,a.useCallback)(()=>{_()?(w(!1),S("")):D()},[w,S,D,_]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",children:(0,t.jsx)("div",{children:v?(0,t.jsx)(i.Z,{"aria-label":"search",name:"search",placeholder:"Search",autoComplete:"off",onChange:E,value:k,trailingAction:(0,t.jsx)(i.Z.Action,{onClick:T,icon:o.b0D,"aria-label":"Clear input"})}):(0,t.jsx)(l.h,{"aria-label":"Search",icon:o.W1M,onClick:R})})})})})},7983:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return m},default:function(){return j}});var t=n(2322),o=n(3934),s=n(2951),i=n(7118),l=n(2599),a=n(5632),c=n(2784),d=n(2480),u=n(7561),f=n(6234),h=n(9097),p=n.n(h);let x=(0,c.memo)(function(e){return(0,t.jsx)(p(),{href:"blog/".concat(e.blog.slug),style:{textDecoration:"inherit"},children:(0,t.jsxs)(i.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsxs)(i.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"8px"},children:[(0,t.jsx)(d.Z,{as:"h4",children:e.blog.title}),(0,t.jsx)(d.Z,{as:"p",children:e.blog.description})]}),(0,t.jsxs)(i.Z,{display:"flex",flexDirection:"row",sx:{gap:"4px"},children:[(0,t.jsx)(i.Z,{display:"flex",flexDirection:["column","row"],alignItems:"center",sx:{gap:"4px"},children:(e.blog.tags||[]).map(e=>(0,t.jsx)(u.Z,{variant:"accent",children:e},e))}),e.blog.date&&(0,t.jsx)(i.Z,{title:e.blog.date,children:f.ou.fromISO(e.blog.date).toFormat("yyyy-MM-dd")})]})]})})});var b=n(7691),g=n(942),m=!0;function j(e){let r=(0,a.useRouter)(),n=(0,o.f3)(),d=Array.isArray(r.query.q)?r.query.q.join(" "):r.query.q,[u,f]=(0,c.useState)(""),[h,p]=(0,c.useState)(5),m=(0,c.useCallback)(e=>{f(e)},[]),j=()=>p(h+5),y=h<e.posts.length,{results:C}=(0,o.nB)({elements:e.posts,searchOptions:(0,c.useMemo)(()=>({keys:["title","description","tags"],distance:.8}),[]),search:u,sortBy:"date",sortDir:"dsc",limit:h});return n?(0,t.jsxs)(b.Z,{children:[(0,t.jsx)(b.Z.Header,{children:(0,t.jsxs)(i.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsx)("div",{children:"Posts"}),(0,t.jsx)("div",{children:(0,t.jsx)(g.u,{defaultSearchValue:d,onSearchChange:m})})]})}),(0,t.jsxs)(b.Z.Body,{p:0,children:[C.map(e=>(0,t.jsx)(b.Z.Row,{p:3,children:(0,t.jsx)(x,{blog:e})},e.slug)),y?(0,t.jsx)(i.Z,{sx:{margin:"8px"},children:(0,t.jsx)(l.zx,{sx:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center"},onClick:j,children:(0,t.jsx)(i.Z,{children:"Show More"})})}):null]})]}):(0,t.jsx)(s.Z,{})}}},function(e){e.O(0,[97,234,774,888,179],function(){return e(e.s=4359)}),_N_E=e.O()}]);
//# sourceMappingURL=blog-37af0a674025f798.js.map