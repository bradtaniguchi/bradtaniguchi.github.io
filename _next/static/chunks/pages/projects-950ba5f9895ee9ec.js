(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7561:function(e,t,r){"use strict";var n=r(5545),i=r(994),s=r(4793),a=r(9882);let o=n.ZP.span.withConfig({displayName:"Label",componentId:"sc-6dyj7v-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,a.U2)("fontWeights.bold"),(0,a.U2)("fontSizes.0"),(0,i.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.fg",color:"done.emphasis"},sponsors:{borderColor:"sponsors.fg",color:"sponsors.emphasis"}}}),(0,i.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),s.Z);o.defaultProps={size:"small",variant:"default"},t.Z=o},8879:function(e){var t,r,n,i,s,a,o,u,c,l,d,f,h,p,x,g,m,y,$,b,v;e.exports=(t="millisecond",r="second",n="minute",i="hour",s="week",a="month",o="quarter",u="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(x={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},g=function(e){return e instanceof b},m=function e(t,r,n){var i;if(!t)return p;if("string"==typeof t){var s=t.toLowerCase();x[s]&&(i=s),r&&(x[s]=r,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;x[o]=t,i=o}return!n&&i&&(p=i),i||!n&&p},y=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new b(r)},($={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,a),s=r-i<0,o=t.clone().add(n+(s?-1:1),a);return+(-(n+(r-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:u,w:s,d:"day",D:c,h:i,m:n,s:r,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=m,$.i=g,$.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},v=(b=function(){function e(e){this.$L=m(e.locale,null,!0),this.parse(e)}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var r=y(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return y(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<y(e)},h.$g=function(e,t,r){return $.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var o=this,l=!!$.u(t)||t,d=$.p(e),f=function(e,t){var r=$.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return l?r:r.endOf("day")},h=function(e,t){return $.w(o.toDate()[e].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},p=this.$W,x=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case u:return l?f(1,0):f(31,11);case a:return l?f(1,x):f(0,x+1);case s:var y=this.$locale().weekStart||0,b=(p<y?p+7:p)-y;return f(l?g-b:g+(6-b),x);case"day":case c:return h(m+"Hours",0);case i:return h(m+"Minutes",1);case n:return h(m+"Seconds",2);case r:return h(m+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,s){var o,l=$.p(e),d="set"+(this.$u?"UTC":""),f=((o={}).day=d+"Date",o[c]=d+"Date",o[a]=d+"Month",o[u]=d+"FullYear",o[i]=d+"Hours",o[n]=d+"Minutes",o[r]=d+"Seconds",o[t]=d+"Milliseconds",o)[l],h="day"===l?this.$D+(s-this.$W):s;if(l===a||l===u){var p=this.clone().set(c,1);p.$d[f](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[$.p(e)]()},h.add=function(e,t){var o,c=this;e=Number(e);var l=$.p(t),d=function(t){var r=y(c);return $.w(r.date(r.date()+Math.round(t*e)),c)};if(l===a)return this.set(a,this.$M+e);if(l===u)return this.set(u,this.$y+e);if("day"===l)return d(1);if(l===s)return d(7);var f=((o={})[n]=6e4,o[i]=36e5,o[r]=1e3,o)[l]||1,h=this.$d.getTime()+e*f;return $.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,d=function(e,r,i,s){return e&&(e[r]||e(t,n))||i[r].slice(0,s)},h=function(e){return $.s(s%12||12,e,"0")},p=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(r.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,u,2),ddd:d(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:$.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,a,!0),A:p(s,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(f,function(e,t){return t||x[e]||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,c){var l,d=$.p(t),f=y(e),h=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,x=$.m(this,f);return x=((l={})[u]=x/12,l[a]=x,l[o]=x/3,l[s]=(p-h)/6048e5,l.day=(p-h)/864e5,l[i]=p/36e5,l[n]=p/6e4,l[r]=p/1e3,l)[d]||p,c?x:$.a(x)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return x[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=m(e,t,!0);return n&&(r.$L=n),r},h.clone=function(){return $.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,y.prototype=v,[["$ms",t],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",a],["$y",u],["$D",c]].forEach(function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,b,y),e.$i=!0),y},y.locale=m,y.isDayjs=g,y.unix=function(e){return y(1e3*e)},y.en=x[p],y.Ls=x,y.p={},y)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(819)}])},1835:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2322),i=r(7118);function s(e){return(0,n.jsx)(i.Z,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:"8px",...e,children:e.children})}s.Header=function(e){return(0,n.jsx)(i.Z,{bg:"canvas.inset",p:3,borderRadius:"8px 8px 0 0",...e,children:e.children})},s.Body=function(e){return(0,n.jsx)(i.Z,{p:3,...e,children:e.children})},s.Row=function(e){return(0,n.jsx)(i.Z,{borderTopColor:"border.default",borderTopStyle:"solid",borderTopWidth:"1px",...e,children:e.children})}},5075:function(e,t,r){"use strict";r.d(t,{u:function(){return l}});var n=r(2322),i=r(8106),s=r(7118),a=r(7561),o=r(693),u=r(3254),c=r(2784);let l=(0,c.memo)(function(e){var t,r,l,d,f,h,p,x,g,m,y,$,b;let{searchDebounce:v,onSearchChange:j,onSearchClear:w,onTagChange:D,defaultSearchValue:S,selectableTags:C,selectedTags:M,hideTagFilter:Z}=e,[_,k]=(0,c.useState)(!1),[O,T]=(0,c.useState)(),[Y,W]=(0,c.useState)(null!=S?S:"");(0,c.useEffect)(()=>{S&&(T(!!S),W(S))},[S]);let[H,I]=(t=()=>{"function"==typeof j&&j(Y)},void 0===(r=null!=v?v:100)&&(r=0),y=(void 0===(l=r)&&(l=0),d=(0,c.useRef)(!1),f=(0,c.useRef)(),h=(0,c.useRef)(t),p=(0,c.useCallback)(function(){return d.current},[]),x=(0,c.useCallback)(function(){d.current=!1,f.current&&clearTimeout(f.current),f.current=setTimeout(function(){d.current=!0,h.current()},l)},[l]),g=(0,c.useCallback)(function(){d.current=null,f.current&&clearTimeout(f.current)},[]),(0,c.useEffect)(function(){h.current=t},[t]),(0,c.useEffect)(function(){return x(),g},[l]),m=[p,g,x])[0],$=m[1],b=m[2],(0,c.useEffect)(b,[Y,j]),[y,$]),N=(0,c.useCallback)(()=>{k(!_)},[_]),A=(0,c.useCallback)(e=>{if("function"!=typeof D)return;let t=e.currentTarget.value,r=(M||[]).includes(t);if(r)return D((M||[]).filter(e=>e!==t));D([...M||[],t])},[D,M]),L=(0,c.useCallback)(()=>{k(!1)},[]),E=(0,c.useCallback)(e=>W(e.target.value),[]),z=(0,c.useCallback)(()=>T(!0),[]),R=(0,c.useCallback)(()=>{H()?(T(!1),W(""),"function"==typeof w&&w()):I()},[I,H,w]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:2,marginLeft:"8px"},children:[!Z&&(0,n.jsx)("div",{children:_?(0,n.jsxs)(s.Z,{display:"flex",sx:{gap:1},alignItems:"center",flexWrap:"wrap",children:[(C||[]).map(e=>(0,n.jsx)("button",{onClick:A,value:e,type:"button","aria-label":"toggle tag ".concat(e),children:(0,n.jsx)(a.Z,{variant:(M||[]).includes(e)?"success":"accent",children:e})},e)),(0,n.jsx)(o.h,{"aria-label":"hide tags",icon:i.b0D,onClick:L})]}):(0,n.jsxs)(s.Z,{display:"flex",sx:{gap:1},alignItems:"center",flexWrap:"wrap",children:[(M||[]).map(e=>(0,n.jsx)("button",{onClick:A,value:e,type:"button","aria-label":"disable tag ".concat(e),children:(0,n.jsx)(a.Z,{variant:"success",children:e})},e)),(0,n.jsx)(o.h,{"aria-label":"show tags",icon:i.k1n,onClick:N})]})}),(0,n.jsx)("div",{children:O?(0,n.jsx)(u.Z,{"aria-label":"search",name:"search",placeholder:"Search",autoComplete:"off",onChange:E,value:Y,trailingAction:(0,n.jsx)(u.Z.Action,{onClick:R,icon:i.b0D,"aria-label":"close search"})}):(0,n.jsx)(o.h,{"aria-label":"show search",icon:i.W1M,onClick:z})})]})})})},819:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return $},default:function(){return b}});var n=r(2322),i=r(1774),s=r(2951),a=r(7118),o=r(2480),u=r(9138),c=r(5632),l=r(2784),d=r(1835),f=r(7561),h=r(9097),p=r.n(h),x=r(8879),g=r.n(x);let m=(0,l.memo)(function(e){return(0,n.jsx)(p(),{href:"projects/".concat(e.project.slug),style:{textDecoration:"inherit"},children:(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",sx:{gap:"8px"},children:[(0,n.jsx)(o.Z,{as:"h4",children:e.project.title}),(0,n.jsx)(o.Z,{as:"p",children:e.project.description})]}),(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"row",sx:{gap:"4px"},children:[(0,n.jsx)(a.Z,{display:"flex",flexDirection:["column","row"],alignItems:"center",sx:{gap:"4px"},children:(e.project.tags||[]).map(e=>"string"==typeof e?(0,n.jsx)(f.Z,{variant:"accent",children:e},e):(0,n.jsx)(f.Z,{variant:e.color,children:e.name},e.name))}),e.project.date&&(0,n.jsx)(a.Z,{title:e.project.date,children:g()(e.project.date).format("YYYY-MM-DD")})]})]})})});var y=r(5075),$=!0;function b(e){let t=(0,c.useRouter)(),r=(0,i.f3)(),f=Array.isArray(t.query.q)?t.query.q.join(" "):t.query.q,[h,p]=(0,l.useState)(""),[x,g]=(0,l.useState)(5),$=(0,l.useCallback)(e=>{p(e),g(5)},[]),b=(0,l.useCallback)(()=>{g(5)},[]),v=()=>g(x+5),{results:j}=(0,i.nB)({elements:e.projects,searchOptions:(0,l.useMemo)(()=>({keys:["title","description","tags"],distance:.8}),[]),search:h,sortBy:"date",sortDir:"dsc"}),w=x<j.length;return r?(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(d.Z.Header,{children:(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,n.jsx)(o.Z,{as:"h2",fontSize:"inherit",margin:0,children:"Projects"}),(0,n.jsx)("div",{children:(0,n.jsx)(y.u,{defaultSearchValue:f,onSearchChange:$,onSearchClear:b})})]})}),(0,n.jsxs)(d.Z.Body,{p:0,children:[(0,n.jsx)("ul",{children:j.map(e=>(0,n.jsx)(d.Z.Row,{p:3,children:(0,n.jsx)("li",{children:(0,n.jsx)(m,{project:e})})},e.slug)).slice(0,x)}),w?(0,n.jsx)(a.Z,{sx:{margin:"8px"},children:(0,n.jsx)(u.zx,{sx:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center"},onClick:v,children:"Show More"})}):null]})]}):(0,n.jsx)(s.Z,{})}}},function(e){e.O(0,[97,774,888,179],function(){return e(e.s=1118)}),_N_E=e.O()}]);
//# sourceMappingURL=projects-950ba5f9895ee9ec.js.map