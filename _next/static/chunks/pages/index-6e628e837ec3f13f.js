(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(7420)}])},7691:function(i,t,e){"use strict";e.d(t,{Z:function(){return n}});var r=e(2322),a=e(7118);function n(i){return(0,r.jsx)(a.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...i,children:i.children})}n.Header=function(i){return(0,r.jsx)(a.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...i,children:i.children})},n.Body=function(i){return(0,r.jsx)(a.Z,{p:3,...i,children:i.children})},n.Row=function(i){return(0,r.jsx)(a.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...i,children:i.children})}},7420:function(i,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return C},default:function(){return k}});var r=e(2322),a=e(8106),n=e(7118),s=e(5633),l=e(8421),c=e.n(l),d=e(9097),o=e.n(d),h=e(8978),u=e(6636),y=e(6356),x=e(2784),v=e(6234),j=e(7399),p=e(2642);let f=(0,j.Fp)({onLog(i){let{level:t,message:e}=i;"error"===t&&"string"==typeof e&&(0,p.uT)(e)}}),b=i=>(0,r.jsx)(n.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,r.jsx)(o(),{href:i.activity.actor.url,children:i.activity.actor.login})}),g=i=>(0,r.jsx)(n.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,r.jsx)(o(),{href:i.activity.repo.url,children:i.activity.repo.name})}),m=i=>(0,r.jsx)(n.Z,{as:"span",color:"fg.muted",children:(0,r.jsxs)("span",{title:i.activity.created_at,children:["on ",v.ou.fromISO(i.activity.created_at).toFormat("yyyy-MM-dd")]})}),Z=(0,x.memo)(function(i){let t=(0,x.useContext)(f);return(0,r.jsxs)(y.Z.Item,{children:[(0,r.jsx)(y.Z.Badge,{children:(0,r.jsx)(s.Z,{icon:a.g_Y})}),(0,r.jsx)(y.Z.Body,{children:(()=>{switch(i.activity.type){case"CreateEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},children:[(0,r.jsx)(b,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"created branch on ":"branch"===i.activity.payload.ref_type?"created tag on ":"updated ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"DeleteEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},children:[(0,r.jsx)(b,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"deleted branch on ":"branch"===i.activity.payload.ref_type?"deleted tag on ":"deleted ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"PushEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(b,{activity:i.activity}),"pushed"," ",(()=>{var t;let e=(null===(t=i.activity.payload.commits)||void 0===t?void 0:t.length)>1;return(0,r.jsx)(o(),{href:(i.activity.payload.commits[0].url||"").replace("api.github.com/repos/","github.com/").replace("/commits/","/commit/"),children:e?"commits ":"a commit "})})(),"to ","",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"PullRequestEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(b,{activity:i.activity}),"created pull request"," ",(0,r.jsx)(o(),{href:i.activity.payload.pull_request.html_url,title:i.activity.payload.pull_request.title,children:"#".concat(i.activity.payload.pull_request.number)})," ","for ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"IssuesEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,r.jsx)(b,{activity:i.activity}),"created issue"," ",(0,r.jsx)(o(),{href:i.activity.payload.issue.html_url,title:i.activity.payload.issue.title,children:"#".concat(i.activity.payload.issue.number)})," ","for ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"WatchEvent":if("started"===i.activity.payload.action)return(0,r.jsxs)(n.Z,{sx:{display:"inline"},children:[(0,r.jsx)(b,{activity:i.activity}),"starred repo"," ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});return(0,r.jsxs)(n.Z,{sx:{display:"inline"},children:[(0,r.jsx)(b,{activity:i.activity}),"un-starred repo"," ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});case"IssueCommentEvent":return(0,r.jsxs)(n.Z,{sx:{display:"inline"},children:[(0,r.jsx)(b,{activity:i.activity}),"un-starred repo"," ",(0,r.jsx)(g,{activity:i.activity}),(0,r.jsx)(m,{activity:i.activity})]});default:return t.error("[GithubPublicActivity] unknown public-activity: ".concat(i.activity.type),i.activity),null}})()})]})}),_=(0,x.memo)(function(i){return i.activities.length?(0,r.jsx)(y.Z,{children:i.activities.map(i=>(0,r.jsx)(Z,{activity:i},i.id))}):(0,r.jsx)("div",{children:"No Timeline available"})});var w=e(7691),C=!0;function k(i){return(0,r.jsxs)(n.Z,{display:"grid",gridGap:3,gridTemplateColumns:["1fr","1fr 1fr","1fr 1fr 1fr"],children:[(0,r.jsx)(n.Z,{gridColumn:["span 1","span 2","span 1"],children:(0,r.jsx)(w.Z,{children:(0,r.jsx)(w.Z.Body,{children:(0,r.jsxs)("aside",{children:[(0,r.jsx)("div",{className:"image-wrapper",children:(0,r.jsx)(c(),{width:260,height:260,src:i.user.avatar_url,alt:"Github profile picture"})}),(0,r.jsx)("h2",{children:(0,r.jsx)(o(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"Github profile url",children:"Brad Taniguchi"})}),(0,r.jsx)("p",{children:i.user.bio}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{children:"Socials"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(o(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn url",children:[(0,r.jsx)(h.hJX,{})," bradtaniguchi"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(o(),{href:"https://twitter.com/brad_taniguchi",target:"_blank",rel:"noreferrer","aria-label":"Twitter handle url",children:[(0,r.jsx)(h.fWC,{})," @brad_taniguchi"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(o(),{href:"https://www.linkedin.com/in/bradley-taniguchi-62a052104",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile url",children:[(0,r.jsx)(h.ltd,{})," LinkedIn"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(o(),{href:"https://www.codewars.com/users/bradtaniguchi",target:"_blank",rel:"noreferrer","aria-label":"Codewars profile url",children:[(0,r.jsx)(u.eS6,{})," Codewars"]})})]})]})]})})})}),(0,r.jsx)(n.Z,{gridColumn:"span 2",children:(0,r.jsx)(n.Z,{gridColumn:"span 2",children:(0,r.jsxs)(n.Z,{display:"grid",gridGap:3,children:[(0,r.jsxs)(w.Z,{gridColumn:"span 2",children:[(0,r.jsx)(w.Z.Header,{display:"flex",children:"README"}),(0,r.jsx)(w.Z.Body,{children:(0,r.jsxs)("p",{children:["This website acts as my portfolio and blog. It is currently under construction and will be continually updated. This is actually the third version of my portfolio site and is used as a test-bed for developing things with new technologies. To learn more about how this project was built, checkout the"," ",(0,r.jsx)(o(),{href:"/about",children:"about"})," page."]})})]}),(0,r.jsxs)(w.Z,{gridColumn:"span 2",children:[(0,r.jsxs)(w.Z.Header,{display:"flex",children:[(0,r.jsx)(n.Z,{flexGrow:"100",children:"Github README"}),(0,r.jsx)(n.Z,{children:(0,r.jsx)("a",{href:"https://github.com/bradtaniguchi/bradtaniguchi-dev",target:"_blank",rel:"noreferrer","aria-label":"Github profile URL",children:(0,r.jsx)(s.Z,{icon:a.g_Y,size:16,sx:{mr:2}})})})]}),(0,r.jsx)(w.Z.Body,{children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:i.readme}})})]}),(0,r.jsxs)(w.Z,{gridColumn:"span 2",children:[(0,r.jsx)(w.Z.Header,{display:"flex",children:(0,r.jsx)(n.Z,{flexGrow:"100",children:"Latest Activity"})}),(0,r.jsx)(w.Z.Body,{children:(0,r.jsx)(_,{activities:i.activities})})]})]})})})]})}}},function(i){i.O(0,[525,193,97,234,312,774,888,179],function(){return i(i.s=7314)}),_N_E=i.O()}]);