(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(8181)}])},7691:function(i,t,e){"use strict";e.d(t,{Z:function(){return n}});var r=e(2322),a=e(7118);function n(i){return(0,r.jsx)(a.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...i,children:i.children})}n.Header=function(i){return(0,r.jsx)(a.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...i,children:i.children})},n.Body=function(i){return(0,r.jsx)(a.Z,{p:3,...i,children:i.children})},n.Row=function(i){return(0,r.jsx)(a.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...i,children:i.children})}},8181:function(i,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return E},default:function(){return T}});var r,a=e(2322),n=e(8106),s=e(7118),c=e(5633),l=e(8421),d=e.n(l),o=e(9097),h=e.n(o),u=e(8978),y=e(6636),x=e(6356),p=e(2784),v=e(6234),j=e(7399),f=e(2642);let b=(0,j.Fp)({onLog(i){let{level:t,message:e}=i;"error"===t&&"string"==typeof e&&(0,f.uT)(e)}}),m=i=>(0,a.jsx)(s.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,a.jsx)(h(),{href:i.activity.actor.url,children:i.activity.actor.login})}),g=i=>(0,a.jsx)(s.Z,{as:"span",sx:{fontWeight:"bold",color:"fg.default",mr:1},children:(0,a.jsx)(h(),{href:i.activity.repo.url,children:i.activity.repo.name})}),Z=i=>(0,a.jsx)(s.Z,{as:"span",color:"fg.muted",children:(0,a.jsxs)("span",{title:i.activity.created_at,children:["on"," ",v.ou.fromISO(i.activity.created_at).toFormat("yyyy-MM-dd")]})}),_=(0,p.memo)(function(i){let t=(0,p.useContext)(b);return(0,a.jsxs)(x.Z.Item,{children:[(0,a.jsx)(x.Z.Badge,{children:(0,a.jsx)(c.Z,{icon:n.g_Y})}),(0,a.jsx)(x.Z.Body,{children:(()=>{switch(i.activity.type){case"CreateEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},children:[(0,a.jsx)(m,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"created branch on ":"branch"===i.activity.payload.ref_type?"created tag on ":"updated ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"DeleteEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},children:[(0,a.jsx)(m,{activity:i.activity}),"branch"===i.activity.payload.ref_type?"deleted branch on ":"branch"===i.activity.payload.ref_type?"deleted tag on ":"deleted ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"PushEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,a.jsx)(m,{activity:i.activity}),"pushed"," ",(()=>{var t;let e=(null===(t=i.activity.payload.commits)||void 0===t?void 0:t.length)>1;return(0,a.jsx)(h(),{href:(i.activity.payload.commits[0].url||"").replace("api.github.com/repos/","github.com/").replace("/commits/","/commit/"),children:e?"commits ":"a commit "})})(),"to ","",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"PullRequestEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,a.jsx)(m,{activity:i.activity}),"created pull request"," ",(0,a.jsx)(h(),{href:i.activity.payload.pull_request.html_url,title:i.activity.payload.pull_request.title,children:"#".concat(i.activity.payload.pull_request.number)})," ","for ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"IssuesEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},title:JSON.stringify(i.activity,null,2),children:[(0,a.jsx)(m,{activity:i.activity}),"created issue"," ",(0,a.jsx)(h(),{href:i.activity.payload.issue.html_url,title:i.activity.payload.issue.title,children:"#".concat(i.activity.payload.issue.number)})," ","for ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"WatchEvent":if("started"===i.activity.payload.action)return(0,a.jsxs)(s.Z,{sx:{display:"inline"},children:[(0,a.jsx)(m,{activity:i.activity}),"starred repo"," ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});return(0,a.jsxs)(s.Z,{sx:{display:"inline"},children:[(0,a.jsx)(m,{activity:i.activity}),"un-starred repo"," ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});case"IssueCommentEvent":return(0,a.jsxs)(s.Z,{sx:{display:"inline"},children:[(0,a.jsx)(m,{activity:i.activity}),"un-starred repo"," ",(0,a.jsx)(g,{activity:i.activity}),(0,a.jsx)(Z,{activity:i.activity})]});default:return t.error("[GithubPublicActivity] unknown public-activity: ".concat(i.activity.type),i.activity),null}})()})]})}),w=(0,p.memo)(function(i){return i.activities.length?(0,a.jsx)(x.Z,{children:i.activities.map(i=>(0,a.jsx)(_,{activity:i},i.id))}):(0,a.jsx)("div",{children:"No Timeline available"})});var C=e(7691);class k extends(r=p.Component){componentDidCatch(i,t){this.setState({error:"".concat(i.name,": ").concat(i.message),errorInfo:t})}render(){let i=this.context,{error:t,errorInfo:e}=this.state;return(i.error(t,e),t)?(0,a.jsx)("div",{children:t}):(0,a.jsx)(a.Fragment,{children:this.props.children})}constructor(i){super(i),this.state={}}}k.contextType=b;var E=!0;function T(i){return(0,a.jsx)(k,{children:(0,a.jsxs)(s.Z,{display:"grid",gridGap:3,gridTemplateColumns:["1fr","1fr 1fr","1fr 1fr 1fr"],children:[(0,a.jsx)(s.Z,{gridColumn:["span 1","span 2","span 1"],children:(0,a.jsx)(C.Z,{children:(0,a.jsx)(C.Z.Body,{children:(0,a.jsxs)("aside",{children:[(0,a.jsx)("div",{className:"image-wrapper",children:(0,a.jsx)(d(),{width:260,height:260,src:i.user.avatar_url,alt:"Github profile picture"})}),(0,a.jsx)("h2",{children:(0,a.jsx)(h(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"Github profile url",children:"Brad Taniguchi"})}),(0,a.jsx)("p",{children:i.user.bio}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h4",{children:"Socials"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(h(),{href:i.user.html_url,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn url",children:[(0,a.jsx)(u.hJX,{})," bradtaniguchi"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(h(),{href:"https://twitter.com/brad_taniguchi",target:"_blank",rel:"noreferrer","aria-label":"Twitter handle url",children:[(0,a.jsx)(u.fWC,{})," @brad_taniguchi"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(h(),{href:"https://www.linkedin.com/in/bradley-taniguchi-62a052104",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile url",children:[(0,a.jsx)(u.ltd,{})," LinkedIn"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(h(),{href:"https://www.codewars.com/users/bradtaniguchi",target:"_blank",rel:"noreferrer","aria-label":"Codewars profile url",children:[(0,a.jsx)(y.eS6,{})," Codewars"]})})]})]})]})})})}),(0,a.jsx)(s.Z,{gridColumn:"span 2",children:(0,a.jsx)(s.Z,{gridColumn:"span 2",children:(0,a.jsxs)(s.Z,{display:"grid",gridGap:3,children:[(0,a.jsxs)(C.Z,{gridColumn:"span 2",children:[(0,a.jsx)(C.Z.Header,{display:"flex",children:"README"}),(0,a.jsx)(C.Z.Body,{children:(0,a.jsxs)("p",{children:["This website acts as my portfolio and blog. It is currently under construction and will be continually updated. This is actually the third version of my portfolio site and is used as a test-bed for developing things with new technologies. To learn more about how this project was built, checkout the"," ",(0,a.jsx)(h(),{href:"/about",children:"about"})," page."]})})]}),(0,a.jsxs)(C.Z,{gridColumn:"span 2",children:[(0,a.jsxs)(C.Z.Header,{display:"flex",children:[(0,a.jsx)(s.Z,{flexGrow:"100",children:"Github README"}),(0,a.jsx)(s.Z,{children:(0,a.jsx)("a",{href:"https://github.com/bradtaniguchi/bradtaniguchi-dev",target:"_blank",rel:"noreferrer","aria-label":"Github profile URL",children:(0,a.jsx)(c.Z,{icon:n.g_Y,size:16,sx:{mr:2}})})})]}),(0,a.jsx)(C.Z.Body,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i.readme}})})]}),(0,a.jsxs)(C.Z,{gridColumn:"span 2",children:[(0,a.jsx)(C.Z.Header,{display:"flex",children:(0,a.jsx)(s.Z,{flexGrow:"100",children:"Latest Activity"})}),(0,a.jsx)(C.Z.Body,{children:(0,a.jsx)(w,{activities:i.activities})})]})]})})})]})})}}},function(i){i.O(0,[525,193,97,234,312,774,888,179],function(){return i(i.s=7314)}),_N_E=i.O()}]);