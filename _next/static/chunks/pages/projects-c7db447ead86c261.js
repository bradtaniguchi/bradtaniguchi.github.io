(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7561:function(e,r,n){"use strict";var t=n(4703),o=n(994),s=n(4793),i=n(9882);let c=t.ZP.span.withConfig({displayName:"Label",componentId:"sc-6dyj7v-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,i.U2)("fontWeights.bold"),(0,i.U2)("fontSizes.0"),(0,o.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.fg",color:"done.emphasis"},sponsors:{borderColor:"sponsors.fg",color:"sponsors.emphasis"}}}),(0,o.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),s.Z);c.defaultProps={size:"small",variant:"default"},r.Z=c},2480:function(e,r,n){"use strict";var t=n(4703),o=n(9882),s=n(4793);let i=t.ZP.span.withConfig({displayName:"Text",componentId:"sc-125xb1i-0"})(["",";",";",";"],o.l$,o.CW,s.Z);r.Z=i},1118:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(1583)}])},7691:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(2322),o=n(7118);function s(e){return(0,t.jsx)(o.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...e,children:e.children})}s.Header=function(e){return(0,t.jsx)(o.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...e,children:e.children})},s.Body=function(e){return(0,t.jsx)(o.Z,{p:3,...e,children:e.children})},s.Row=function(e){return(0,t.jsx)(o.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...e,children:e.children})}},942:function(e,r,n){"use strict";n.d(r,{u:function(){return l}});var t=n(2322),o=n(8106),s=n(7118),i=n(3254),c=n(693),a=n(2784);let l=(0,a.memo)(function(e){var r,n,l,d,u,f,p,h,x,b,j,g,m;let{searchDebounce:y,onSearchChange:C,defaultSearchValue:Z}=e,[v,w]=(0,a.useState)(),[k,_]=(0,a.useState)(Z);(0,a.useEffect)(()=>{Z&&(w(!!Z),_(Z))},[Z]);let[S,D]=(r=()=>C(k),void 0===(n=null!=y?y:100)&&(n=0),j=(void 0===(l=n)&&(l=0),d=(0,a.useRef)(!1),u=(0,a.useRef)(),f=(0,a.useRef)(r),p=(0,a.useCallback)(function(){return d.current},[]),h=(0,a.useCallback)(function(){d.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout(function(){d.current=!0,f.current()},l)},[l]),x=(0,a.useCallback)(function(){d.current=null,u.current&&clearTimeout(u.current)},[]),(0,a.useEffect)(function(){f.current=r},[r]),(0,a.useEffect)(function(){return h(),x},[l]),b=[p,x,h])[0],g=b[1],m=b[2],(0,a.useEffect)(m,[k,C]),[j,g]),E=(0,a.useCallback)(e=>_(e.target.value),[]),T=(0,a.useCallback)(()=>w(!0),[w]),I=(0,a.useCallback)(()=>{S()?(w(!1),_("")):D()},[w,_,D,S]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",children:(0,t.jsx)("div",{children:v?(0,t.jsx)(i.Z,{"aria-label":"search",name:"search",placeholder:"Search",autoComplete:"off",onChange:E,value:k,trailingAction:(0,t.jsx)(i.Z.Action,{onClick:I,icon:o.b0D,"aria-label":"Clear input"})}):(0,t.jsx)(c.h,{"aria-label":"Search",icon:o.W1M,onClick:T})})})})})},1583:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return b},default:function(){return j}});var t=n(2322),o=n(3934),s=n(7118),i=n(5632),c=n(2784),a=n(7691),l=n(2480),d=n(7561),u=n(6234),f=n(9097),p=n.n(f);let h=(0,c.memo)(function(e){return(0,t.jsx)(p(),{href:"projects/".concat(e.project.slug),style:{textDecoration:"inherit"},children:(0,t.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"8px"},children:[(0,t.jsx)(l.Z,{as:"h4",children:e.project.title}),(0,t.jsx)(l.Z,{as:"p",children:e.project.description})]}),(0,t.jsxs)(s.Z,{display:"flex",flexDirection:"row",sx:{gap:"4px"},children:[(0,t.jsx)(s.Z,{display:"flex",flexDirection:["column","row"],alignItems:"center",sx:{gap:"4px"},children:(e.project.tags||[]).map(e=>"string"==typeof e?(0,t.jsx)(d.Z,{variant:"accent",children:e},e):(0,t.jsx)(d.Z,{variant:e.color,children:e.name},e.name))}),e.project.date&&(0,t.jsx)(s.Z,{title:e.project.date,children:u.ou.fromISO(e.project.date).toFormat("yyyy-MM-dd")})]})]})})});var x=n(942),b=!0;function j(e){let r=(0,i.useRouter)(),n=Array.isArray(r.query.q)?r.query.q.join(" "):r.query.q,[l,d]=(0,c.useState)(""),u=(0,c.useCallback)(e=>{d(e)},[]),{results:f}=(0,o.nB)({elements:e.projects,searchOptions:(0,c.useMemo)(()=>({keys:["name","description","tags"],distance:.8}),[]),search:l,sortBy:"date",sortDir:"dsc"});return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(a.Z.Header,{children:(0,t.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsx)("div",{children:"Projects"}),(0,t.jsx)("div",{children:(0,t.jsx)(x.u,{defaultSearchValue:n,onSearchChange:u})})]})}),(0,t.jsx)(a.Z.Body,{p:0,children:f.map(e=>(0,t.jsx)(a.Z.Row,{p:3,children:(0,t.jsx)(h,{project:e})},e.slug))})]})}}},function(e){e.O(0,[97,234,774,888,179],function(){return e(e.s=1118)}),_N_E=e.O()}]);
//# sourceMappingURL=projects-c7db447ead86c261.js.map