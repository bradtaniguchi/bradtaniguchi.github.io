(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(i,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7420)}])},5e3:function(i,e,t){"use strict";t.d(e,{A:function(){return u}});var r=t(2322),n=t(7118),l=t(2480),s=t(7561),a=t(8879),c=t.n(a),d=t(9097),o=t.n(d),x=t(2784);let u=(0,x.memo)(function(i){let e=i.displayMode||"row";return(0,r.jsx)(o(),{href:"blog/dev/".concat(i.blog.id,"?slug=").concat(i.blog.slug),style:{textDecoration:"inherit"},children:(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",sx:{gap:"8px"},children:[(0,r.jsx)(l.Z,{as:"h4",margin:0,children:i.blog.title}),(0,r.jsx)(l.Z,{as:"p",children:i.blog.description})]}),(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",sx:{gap:"4px"},children:[(0,r.jsxs)(n.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"4px"},children:[(i.blog.tags||[]).map(i=>(0,r.jsx)(s.Z,{variant:"accent",children:i},i)),(0,r.jsx)(s.Z,{variant:"success",children:"dev.to"})]}),i.blog.date&&(0,r.jsx)(n.Z,{title:i.blog.date,children:c()(i.blog.date).format("YYYY-MM-DD")})]})]})})})},3362:function(i,e,t){"use strict";t.d(e,{r:function(){return u}});var r=t(2322),n=t(7118),l=t(2480),s=t(7561),a=t(8879),c=t.n(a),d=t(9097),o=t.n(d),x=t(2784);let u=(0,x.memo)(function(i){let e=i.displayMode||"row";return(0,r.jsx)(o(),{href:"blog/".concat(i.blog.slug),style:{textDecoration:"inherit"},children:(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",sx:{gap:"8px"},children:[(0,r.jsx)(l.Z,{as:"h4",margin:0,children:i.blog.title}),(0,r.jsx)(l.Z,{as:"p",children:i.blog.description})]}),(0,r.jsxs)(n.Z,{display:"flex",flexDirection:["column","column",e],alignItems:"center",sx:{gap:"4px"},children:[(0,r.jsx)(n.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"4px"},children:(i.blog.tags||[]).map(i=>(0,r.jsx)(s.Z,{variant:"accent",children:i},i))}),i.blog.date&&(0,r.jsx)(n.Z,{title:i.blog.date,children:c()(i.blog.date).format("YYYY-MM-DD")})]})]})})})},7691:function(i,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(2322),n=t(7118);function l(i){return(0,r.jsx)(n.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...i,children:i.children})}l.Header=function(i){return(0,r.jsx)(n.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...i,children:i.children})},l.Body=function(i){return(0,r.jsx)(n.Z,{p:3,...i,children:i.children})},l.Row=function(i){return(0,r.jsx)(n.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...i,children:i.children})}},4908:function(i,e,t){"use strict";t.d(e,{GJ:function(){return l}});var r=t(195);let n=r.Ry({id:r.Rx(),slug:r.Z_(),title:r.Z_(),description:r.Z_(),tags:r.G0([r.IX(r.Z_()),r.Z_()]),date:r.Z_(),source:r.i0("dev.to")}),l=i=>{if(!i)return!1;try{return n.parse(i),!0}catch(e){return!1}}},7420:function(i,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return Y},default:function(){return M}});var r=t(2322),n=t(8106),l=t(7118),s=t(9906),a=t(5633),c=t(6577),d=t.n(c),o=t(9097),x=t.n(o),u=t(8978),h=t(6636),y=t(7478),p=t(2951),j=t(6356),f=t(9138),v=t(2784),g=t(8879),m=t.n(g),b=t(2642);let Z=(0,y.Fp)({onLog(i){let{level:e,message:t}=i;"error"===e&&"string"==typeof t&&(0,b.uT)(t)}}),_=i=>(0,r.jsx)(l.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,r.jsx)(x(),{href:i.activity.actor.url,children:i.activity.actor.login})}),w=i=>(0,r.jsx)(l.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,r.jsx)(x(),{href:i.activity.repo.url,children:i.activity.repo.name})}),C=i=>(0,r.jsx)(l.Z,{as:"span",color:"fg.muted",children:(0,r.jsxs)("span",{title:i.activity.created_at,children:["on ",m()(i.activity.created_at).format("YYYY-MM-DD")]})}),D=(0,v.memo)(function(i){let e=(0,v.useContext)(Z);return(0,r.jsxs)(j.Z.Item,{children:[(0,r.jsx)(j.Z.Badge,{children:(0,r.jsx)(a.Z,{icon:n.g_Y})}),(0,r.jsx)(j.Z.Body,{children:(()=>{switch(i.activity.type){case"CreateEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},children:[(0,r.jsx)(_,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"created branch on ":"branch"===i.activity.payload.ref_type?"created tag on ":"updated ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"DeleteEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},children:[(0,r.jsx)(_,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"deleted branch on ":"branch"===i.activity.payload.ref_type?"deleted tag on ":"deleted ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"PushEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(_,{activity:i.activity}),"pushed"," ",(()=>{var e;let t=(null===(e=i.activity.payload.commits)||void 0===e?void 0:e.length)>1;return(0,r.jsx)(x(),{href:(i.activity.payload.commits[0].url||"").replace("api.github.com/repos/","github.com/").replace("/commits/","/commit/"),children:t?"commits ":"a commit "})})(),"to ","",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"PullRequestEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(_,{activity:i.activity}),"created pull request"," ",(0,r.jsx)(x(),{href:i.activity.payload.pull_request.html_url,title:i.activity.payload.pull_request.title,children:"#".concat(i.activity.payload.pull_request.number)})," ","for ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"IssuesEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(_,{activity:i.activity}),"created issue"," ",(0,r.jsx)(x(),{href:i.activity.payload.issue.html_url,title:i.activity.payload.issue.title,children:"#".concat(i.activity.payload.issue.number)})," ","for ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"WatchEvent":if("started"===i.activity.payload.action)return(0,r.jsxs)(l.Z,{sx:{display:"inline"},children:[(0,r.jsx)(_,{activity:i.activity}),"starred repo"," ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});return(0,r.jsxs)(l.Z,{sx:{display:"inline"},children:[(0,r.jsx)(_,{activity:i.activity}),"un-starred repo"," ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});case"IssueCommentEvent":return(0,r.jsxs)(l.Z,{sx:{display:"inline"},children:[(0,r.jsx)(_,{activity:i.activity}),"un-starred repo"," ",(0,r.jsx)(w,{activity:i.activity}),(0,r.jsx)(C,{activity:i.activity})]});default:return e.error("[GithubPublicActivity] unknown public-activity: ".concat(i.activity.type),i.activity),null}})()})]})}),k=(0,v.memo)(function(i){let[e,t]=(0,v.useState)(5),n=(0,y.f3)(),s=()=>t(e+5),a=e<i.activities.length;return n?i.activities.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{"data-testid":"timeline",children:i.activities.map(i=>(0,r.jsx)(D,{activity:i},i.id)).slice(0,e)}),a?(0,r.jsx)(l.Z,{sx:{margin:"8px"},children:(0,r.jsx)(f.zx,{sx:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center"},type:"button",onClick:s,children:"Show More"})}):null]}):(0,r.jsx)("div",{children:"No Timeline available"}):(0,r.jsx)(p.Z,{})});var I=t(5e3),E=t(3362),G=t(7691),T=t(4908),Y=!0;function M(i){return(0,r.jsxs)(l.Z,{display:"grid",gridGap:3,gridTemplateColumns:["1fr","1fr 1fr","1fr 1fr 1fr"],children:[(0,r.jsxs)(l.Z,{display:"flex",gridColumn:["span 1","span 2","span 1"],flexDirection:"column",sx:{gap:"3"},children:[(0,r.jsx)(G.Z,{children:(0,r.jsx)(G.Z.Body,{children:(0,r.jsxs)("aside",{children:[(0,r.jsx)("div",{className:"image-wrapper",children:(0,r.jsx)(d(),{width:260,height:260,src:"/img/github-avatar.jpg",alt:"Github profile picture"})}),(0,r.jsx)("h2",{children:(0,r.jsx)(x(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"Github profile url",children:"Brad Taniguchi"})}),(0,r.jsx)("p",{children:i.user.bio}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{children:"Socials"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(x(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn url",children:[(0,r.jsx)(u.hJX,{})," bradtaniguchi"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(x(),{href:"https://twitter.com/brad_taniguchi",target:"_blank",rel:"noreferrer","aria-label":"Twitter handle url",children:[(0,r.jsx)(u.fWC,{})," @brad_taniguchi"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(x(),{href:"https://www.linkedin.com/in/bradley-taniguchi-62a052104",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile url",children:[(0,r.jsx)(u.ltd,{})," LinkedIn"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(x(),{href:"https://www.codewars.com/users/bradtaniguchi",target:"_blank",rel:"noreferrer","aria-label":"Codewars profile url",children:[(0,r.jsx)(h.eS6,{})," Codewars"]})})]})]})]})})}),(0,r.jsxs)(G.Z,{children:[(0,r.jsxs)(G.Z.Header,{display:"flex",children:[(0,r.jsx)(l.Z,{flexGrow:"100",children:"Latest Blog Post"}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Q,{href:"/blog",children:"All Posts"})})]}),(0,r.jsx)(G.Z.Body,{children:(0,r.jsx)("section",{children:(()=>{let{latestPost:e}=i;return(0,T.GJ)(e)?(0,r.jsx)(I.A,{blog:e,displayMode:"column"}):(0,r.jsx)(E.r,{blog:e})})()})})]})]}),(0,r.jsx)(l.Z,{gridColumn:"span 2",children:(0,r.jsx)(l.Z,{gridColumn:"span 2",children:(0,r.jsxs)(l.Z,{display:"grid",gridGap:3,children:[(0,r.jsxs)(G.Z,{gridColumn:"span 2",children:[(0,r.jsx)(G.Z.Header,{display:"flex",children:"README"}),(0,r.jsx)(G.Z.Body,{children:(0,r.jsxs)("div",{children:["This website acts as my portfolio and blog. It is currently under construction and will be continually updated. This is actually the third version of my portfolio site and is used as a test-bed for developing things with new technologies. To learn more about how this project was built, checkout the"," ",(0,r.jsx)(x(),{href:"/about",children:"about"})," page."]})})]}),(0,r.jsxs)(G.Z,{gridColumn:"span 2",children:[(0,r.jsxs)(G.Z.Header,{display:"flex",children:[(0,r.jsx)(l.Z,{flexGrow:"100",children:"Github README"}),(0,r.jsx)(l.Z,{children:(0,r.jsx)("a",{href:"https://github.com/bradtaniguchi/bradtaniguchi-dev",target:"_blank",rel:"noreferrer","aria-label":"Github profile URL",children:(0,r.jsx)(a.Z,{icon:n.g_Y,size:16,sx:{mr:2}})})})]}),(0,r.jsx)(G.Z.Body,{children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:i.readme}})})]}),(0,r.jsxs)(G.Z,{gridColumn:"span 2",children:[(0,r.jsx)(G.Z.Header,{display:"flex",children:(0,r.jsx)(l.Z,{flexGrow:"100",children:"Latest Activity"})}),(0,r.jsx)(G.Z.Body,{children:(0,r.jsx)(k,{activities:i.activities})})]})]})})})]})}}},function(i){i.O(0,[525,193,97,975,454,774,888,179],function(){return i(i.s=7314)}),_N_E=i.O()}]);
//# sourceMappingURL=index-72eb9a239297fd86.js.map