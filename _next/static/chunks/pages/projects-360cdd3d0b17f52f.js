(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7561:function(e,r,o){"use strict";var n=o(4703),t=o(994),s=o(4793),i=o(9882);let c=n.ZP.span.withConfig({displayName:"Label",componentId:"sc-6dyj7v-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,i.U2)("fontWeights.bold"),(0,i.U2)("fontSizes.0"),(0,t.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.fg",color:"done.emphasis"},sponsors:{borderColor:"sponsors.fg",color:"sponsors.emphasis"}}}),(0,t.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),s.Z);c.defaultProps={size:"small",variant:"default"},r.Z=c},2480:function(e,r,o){"use strict";var n=o(4703),t=o(9882),s=o(4793);let i=n.ZP.span.withConfig({displayName:"Text",componentId:"sc-125xb1i-0"})(["",";",";",";"],t.l$,t.CW,s.Z);r.Z=i},1118:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return o(1583)}])},7691:function(e,r,o){"use strict";o.d(r,{Z:function(){return s}});var n=o(2322),t=o(7118);function s(e){return(0,n.jsx)(t.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...e,children:e.children})}s.Header=function(e){return(0,n.jsx)(t.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...e,children:e.children})},s.Body=function(e){return(0,n.jsx)(t.Z,{p:3,...e,children:e.children})},s.Row=function(e){return(0,n.jsx)(t.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...e,children:e.children})}},1583:function(e,r,o){"use strict";o.r(r),o.d(r,{__N_SSG:function(){return f},default:function(){return h}});var n=o(2322),t=o(7691),s=o(7118),i=o(2480),c=o(7561),d=o(2784),l=o(6234),a=o(9097),p=o.n(a);let u=(0,d.memo)(function(e){return(0,n.jsx)(p(),{href:"projects/".concat(e.project.slug),style:{textDecoration:"inherit"},children:(0,n.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,n.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"8px"},children:[(0,n.jsx)(i.Z,{as:"h4",children:e.project.title}),(0,n.jsx)(i.Z,{as:"p",children:e.project.description})]}),(0,n.jsxs)(s.Z,{display:"flex",flexDirection:"row",sx:{gap:"4px"},children:[(0,n.jsx)(s.Z,{display:"flex",flexDirection:["column","row"],alignItems:"center",sx:{gap:"4px"},children:(e.project.tags||[]).map(e=>"string"==typeof e?(0,n.jsx)(c.Z,{variant:"accent",children:e},e):(0,n.jsx)(c.Z,{variant:e.color,children:e.name},e.name))}),e.project.date&&(0,n.jsx)(s.Z,{title:e.project.date,children:l.ou.fromISO(e.project.date).toFormat("yyyy-MM-dd")})]})]})})});var f=!0;function h(e){return(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(t.Z.Header,{children:"Projects"}),(0,n.jsx)(t.Z.Body,{p:0,children:e.projects.map(e=>(0,n.jsx)(t.Z.Row,{p:3,children:(0,n.jsx)(u,{project:e})},e.slug))})]})}}},function(e){e.O(0,[97,234,774,888,179],function(){return e(e.s=1118)}),_N_E=e.O()}]);