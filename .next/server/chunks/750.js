exports.id=750,exports.ids=[750],exports.modules={291:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{A:()=>T});var r=a(8732),o=a(2015),i=a(9965),n=a.n(i),d=a(1106),c=a.n(d),l=a(7971),u=a(8899),f=a(5002),m=a(2493),h=a(7292),p=a(6911),x=a(1013),g=a(6759),v=a(9028),b=a(5177),y=a(7312),j=a(5798),w=a(7984),N=a(6424),S=e([l,u,y,j,w]);function T(){let[e,t]=(0,o.useState)(null),[a,s]=(0,o.useState)(!1),{theme:i,setTheme:d}=(0,y.useTheme)(),S=(0,N.usePathname)(),T=async()=>{try{await fetch("/api/auth/logout",{method:"POST",credentials:"include"}),t(null),s(!1),window.location.reload()}catch(e){console.error("Error logging out:",e)}},k=[{href:"/home",label:"Home",icon:f.A},{href:"/chatlog",label:"Chatlogs",icon:m.A},{href:"/search",label:"Player Search",icon:h.A},{href:"/statistics",label:"Statistics",icon:p.A},{href:"/admin/dashboard",label:"Admin Panel",icon:x.A}],A=()=>(0,r.jsx)(r.Fragment,{children:k.map(({href:e,label:t,icon:a})=>(0,r.jsx)(c(),{href:e,children:(0,r.jsxs)(l.$,{variant:"ghost",className:(0,w.cn)("w-full justify-start gap-2",S===e&&"bg-accent text-accent-foreground"),children:[(0,r.jsx)(a,{className:"h-4 w-4"}),t]})},e))});return(0,r.jsxs)("header",{className:"sticky top-0 z-50 flex justify-between items-center p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:[(0,r.jsx)("nav",{className:"hidden md:flex items-center gap-2 flex-1",children:(0,r.jsx)(A,{})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsxs)(j.cj,{children:[(0,r.jsx)(j.CG,{asChild:!0,children:(0,r.jsxs)(l.$,{variant:"outline",size:"icon",children:[(0,r.jsx)(g.A,{className:"h-[1.2rem] w-[1.2rem]"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle menu"})]})}),(0,r.jsx)(j.h,{side:"left",children:(0,r.jsx)("nav",{className:"flex flex-col gap-2 mt-4",children:(0,r.jsx)(A,{})})})]})}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(u.d,{checked:"dark"===i,onCheckedChange:()=>{d("dark"===i?"light":"dark")},size:"sm",className:"data-[state=checked]:bg-primary"}),"light"===i?(0,r.jsx)(v.A,{size:20}):(0,r.jsx)(b.A,{size:20})]}),e&&(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)(l.$,{onClick:()=>{s(!a)},variant:"secondary",className:"flex items-center gap-2",children:[e.avatarUrl?(0,r.jsx)(n(),{src:e.avatarUrl,alt:"User avatar",className:"rounded-full",width:32,height:32,unoptimized:!0}):(0,r.jsx)("div",{className:"w-8 h-8 bg-muted rounded-full flex items-center justify-center",children:(0,r.jsx)("span",{className:"text-muted-foreground text-xs",children:e.displayName?.charAt(0)||"?"})}),(0,r.jsx)("span",{className:"text-foreground",children:e.displayName||"Usuario"})]}),a&&(0,r.jsx)("div",{className:"absolute right-0 mt-2 w-48 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2",children:(0,r.jsx)(l.$,{onClick:T,variant:"ghost",className:"w-full justify-start px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",children:"Logout"})})]})]})]})}[l,u,y,j,w]=S.then?(await S)():S,s()}catch(e){s(e)}})},8842:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{N:()=>n});var r=a(8732),o=a(7312),i=e([o]);function n({children:e,...t}){return(0,r.jsx)(o.ThemeProvider,{...t,children:e})}o=(i.then?(await i)():i)[0],s()}catch(e){s(e)}})},7971:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{$:()=>u,r:()=>l});var r=a(8732),o=a(2015),i=a(9640),n=a(8938),d=a(7984),c=e([i,n,d]);[i,n,d]=c.then?(await c)():c;let l=(0,n.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef(({className:e,variant:t,size:a,asChild:s=!1,...o},n)=>{let c=s?i.Slot:"button";return(0,r.jsx)(c,{className:(0,d.cn)(l({variant:t,size:a,className:e})),ref:n,...o})});u.displayName="Button",s()}catch(e){s(e)}})},5798:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{CG:()=>f,cj:()=>u,h:()=>x});var r=a(8732),o=a(2015),i=a(3020),n=a(8938),d=a(7984),c=a(824),l=e([i,n,d]);[i,n,d]=l.then?(await l)():l;let u=i.Root,f=i.Trigger;i.Close;let m=i.Portal,h=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Overlay,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:a}));h.displayName=i.Overlay.displayName;let p=(0,n.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=o.forwardRef(({side:e="right",className:t,children:a,...s},o)=>(0,r.jsxs)(m,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)(i.Content,{ref:o,className:(0,d.cn)(p({side:e}),t),...s,children:[(0,r.jsxs)(i.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(c.Cross2Icon,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]}),a]})]}));x.displayName=i.Content.displayName,o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Title,{ref:a,className:(0,d.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=i.Title.displayName,o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Description,{ref:a,className:(0,d.cn)("text-sm text-muted-foreground",e),...t})).displayName=i.Description.displayName,s()}catch(e){s(e)}})},8899:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{d:()=>c});var r=a(8732),o=a(2015),i=a(9812),n=a(7984),d=e([i,n]);[i,n]=d.then?(await d)():d;let c=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Root,{className:(0,n.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:a,children:(0,r.jsx)(i.Thumb,{className:(0,n.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})}));c.displayName=i.Root.displayName,s()}catch(e){s(e)}})},1230:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Sb:()=>x,US:()=>f,aD:()=>g,eC:()=>p,tE:()=>u,y8:()=>h});var r=a(8732),o=a(2015),i=a(6235),n=a(8938),d=a(7984),c=a(824),l=e([i,n,d]);[i,n,d]=l.then?(await l)():l;let u=i.Provider,f=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Viewport,{ref:a,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));f.displayName=i.Viewport.displayName;let m=(0,n.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),h=o.forwardRef(({className:e,variant:t,...a},s)=>(0,r.jsx)(i.Root,{ref:s,className:(0,d.cn)(m({variant:t}),e),...a}));h.displayName=i.Root.displayName,o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Action,{ref:a,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=i.Action.displayName;let p=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Close,{ref:a,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,r.jsx)(c.Cross2Icon,{className:"h-4 w-4"})}));p.displayName=i.Close.displayName;let x=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Title,{ref:a,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",e),...t}));x.displayName=i.Title.displayName;let g=o.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Description,{ref:a,className:(0,d.cn)("text-sm opacity-90",e),...t}));g.displayName=i.Description.displayName,s()}catch(e){s(e)}})},5279:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{l:()=>d});var r=a(8732),o=a(6175),i=a(1230),n=e([i]);function d(){let{toasts:e}=(0,o.dj)();return(0,r.jsxs)(i.tE,{children:[e.map(function({id:e,title:t,description:a,action:s,...o}){return(0,r.jsxs)(i.y8,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[t&&(0,r.jsx)(i.Sb,{children:t}),a&&(0,r.jsx)(i.aD,{children:a})]}),s,(0,r.jsx)(i.eC,{})]},e)}),(0,r.jsx)(i.US,{})]})}i=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},6175:(e,t,a)=>{"use strict";a.d(t,{dj:()=>f});var s=a(2015);let r=0,o=new Map,i=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?i(a):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],c={toasts:[]};function l(e){c=n(c,e),d.forEach(e=>{e(c)})}function u({...e}){let t=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>l({type:"DISMISS_TOAST",toastId:t});return l({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||a()}}}),{id:t,dismiss:a,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function f(){let[e,t]=s.useState(c);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},7984:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{cn:()=>n});var r=a(802),o=a(5979),i=e([r,o]);function n(...e){return(0,o.twMerge)((0,r.clsx)(e))}[r,o]=i.then?(await i)():i,s()}catch(e){s(e)}})},6312:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>u});var r=a(8732),o=a(2015);a(9361);var i=a(7912),n=a.n(i),d=a(8842),c=a(5279),l=e([d,c]);[d,c]=l.then?(await l)():l;let u=function({Component:e,pageProps:t}){let[a,s]=(0,o.useState)({});return(0,r.jsxs)(d.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"ChatPanel - Logs system"}),(0,r.jsx)("link",{rel:"icon",href:a.IMAGE_URL||"/favicon.ico"})]}),(0,r.jsx)(e,{...t,config:a}),(0,r.jsx)(c.l,{})]})};s()}catch(e){s(e)}})},9361:()=>{}};