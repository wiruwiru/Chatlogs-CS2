(()=>{var e={};e.id=731,e.ids=[220,636,731],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9633:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>f,reportWebVitals:()=>x,routeModule:()=>j,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>y});var s=r(3865),a=r(9455),o=r(671),i=r(781),d=r.n(i),u=r(6312),l=r(3532),c=e([u]);u=(c.then?(await c)():c)[0];let p=(0,o.M)(l,"default"),f=(0,o.M)(l,"getStaticProps"),m=(0,o.M)(l,"getStaticPaths"),h=(0,o.M)(l,"getServerSideProps"),g=(0,o.M)(l,"config"),x=(0,o.M)(l,"reportWebVitals"),y=(0,o.M)(l,"unstable_getStaticProps"),v=(0,o.M)(l,"unstable_getStaticPaths"),b=(0,o.M)(l,"unstable_getStaticParams"),_=(0,o.M)(l,"unstable_getServerProps"),S=(0,o.M)(l,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:a.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:u.default,Document:d()},userland:l});n()}catch(e){n(e)}})},3532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(9929),s=r(8732),a=n._(r(2015)),o=n._(r(4426)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class l extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:u.error,children:[(0,s.jsx)(o.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:u.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,s.jsx)("div",{style:u.wrap,children:(0,s.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}l.displayName="ErrorPage",l.getInitialProps=d,l.origGetInitialProps=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let n=r(9929),s=r(4588),a=r(8732),o=s._(r(2015)),i=n._(r(3309)),d=r(9811),u=r(9241),l=r(8498);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return s=>{let a=!0,o=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){o=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=s.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,o.useContext)(d.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(2015),s=()=>{},a=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},8842:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{N:()=>i});var s=r(8732),a=r(7312),o=e([a]);function i({children:e,...t}){return(0,s.jsx)(a.ThemeProvider,{...t,children:e})}a=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},1230:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Sb:()=>g,US:()=>p,aD:()=>x,eC:()=>h,tE:()=>c,y8:()=>m});var s=r(8732),a=r(2015),o=r(6235),i=r(8938),d=r(7984),u=r(824),l=e([o,i,d]);[o,i,d]=l.then?(await l)():l;let c=o.Provider,p=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.Viewport,{ref:r,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));p.displayName=o.Viewport.displayName;let f=(0,i.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=a.forwardRef(({className:e,variant:t,...r},n)=>(0,s.jsx)(o.Root,{ref:n,className:(0,d.cn)(f({variant:t}),e),...r}));m.displayName=o.Root.displayName,a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.Action,{ref:r,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=o.Action.displayName;let h=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.Close,{ref:r,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,s.jsx)(u.Cross2Icon,{className:"h-4 w-4"})}));h.displayName=o.Close.displayName;let g=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.Title,{ref:r,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",e),...t}));g.displayName=o.Title.displayName;let x=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.Description,{ref:r,className:(0,d.cn)("text-sm opacity-90",e),...t}));x.displayName=o.Description.displayName,n()}catch(e){n(e)}})},5279:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{l:()=>d});var s=r(8732),a=r(6175),o=r(1230),i=e([o]);function d(){let{toasts:e}=(0,a.dj)();return(0,s.jsxs)(o.tE,{children:[e.map(function({id:e,title:t,description:r,action:n,...a}){return(0,s.jsxs)(o.y8,{...a,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&(0,s.jsx)(o.Sb,{children:t}),r&&(0,s.jsx)(o.aD,{children:r})]}),n,(0,s.jsx)(o.eC,{})]},e)}),(0,s.jsx)(o.US,{})]})}o=(i.then?(await i)():i)[0],n()}catch(e){n(e)}})},6175:(e,t,r)=>{"use strict";r.d(t,{dj:()=>p});var n=r(2015);let s=0,a=new Map,o=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function l(e){u=i(u,e),d.forEach(e=>{e(u)})}function c({...e}){let t=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>l({type:"DISMISS_TOAST",toastId:t});return l({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function p(){let[e,t]=n.useState(u);return n.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},7984:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{cn:()=>i});var s=r(802),a=r(5979),o=e([s,a]);function i(...e){return(0,a.twMerge)((0,s.clsx)(e))}[s,a]=o.then?(await o)():o,n()}catch(e){n(e)}})},6312:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>c});var s=r(8732),a=r(2015);r(9361);var o=r(7912),i=r.n(o),d=r(8842),u=r(5279),l=e([d,u]);[d,u]=l.then?(await l)():l;let c=function({Component:e,pageProps:t}){let[r,n]=(0,a.useState)({});return(0,s.jsxs)(d.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"ChatPanel - Logs system"}),(0,s.jsx)("link",{rel:"icon",href:r.IMAGE_URL||"/favicon.ico"})]}),(0,s.jsx)(e,{...t,config:r}),(0,s.jsx)(u.l,{})]})};n()}catch(e){n(e)}})},9361:()=>{},9455:(e,t)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},9241:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.HeadManagerContext},824:e=>{"use strict";e.exports=require("@radix-ui/react-icons")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},6235:e=>{"use strict";e.exports=import("@radix-ui/react-toast")},8938:e=>{"use strict";e.exports=import("class-variance-authority")},802:e=>{"use strict";e.exports=import("clsx")},7312:e=>{"use strict";e.exports=import("next-themes")},5979:e=>{"use strict";e.exports=import("tailwind-merge")},4588:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var s={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(s,o,i):s[o]=e[o]}return s.default=e,n&&n.set(e,s),s}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[781],()=>r(9633));module.exports=n})();