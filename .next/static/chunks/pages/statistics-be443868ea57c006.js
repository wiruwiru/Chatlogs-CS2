(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{5596:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/statistics",function(){return r(8032)}])},710:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(4848),a=r(1106),n=r.n(a);function l(){return(0,s.jsx)("footer",{className:"py-6 text-center border-t border-border",children:(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:[(0,s.jsx)(n(),{href:"/",className:"hover:text-primary transition-colors",children:"ChatPanel"})," Copyright 2024 \xa9 | Design by ",(0,s.jsx)(n(),{href:"https://lucauy.dev",target:"_blank",rel:"nofollow",className:"hover:text-primary transition-colors",children:"Luca."})]})})}},7666:(e,t,r)=>{"use strict";r.d(t,{Xi:()=>c,av:()=>d,j7:()=>o,tU:()=>i});var s=r(4848),a=r(6540),n=r(2534),l=r(9751);let i=n.bL,o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.B8,{ref:t,className:(0,l.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",r),...a})});o.displayName=n.B8.displayName;let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.l9,{ref:t,className:(0,l.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",r),...a})});c.displayName=n.l9.displayName;let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.UC,{ref:t,className:(0,l.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...a})});d.displayName=n.UC.displayName},8032:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var s=r(4848),a=r(6540),n=r(6715),l=r(2955),i=r(7666),o=r(172),c=r(949),d=r(4776),u=r(7323),m=r(1672),x=r(3087),h=r(2906),f=r(5466),g=r(1191),v=r(9751);let p={light:"",dark:".dark"},j=a.createContext(null);function y(){let e=a.useContext(j);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let b=a.forwardRef((e,t)=>{let{id:r,className:n,children:l,config:i,...o}=e,d=a.useId(),u="chart-".concat(r||d.replace(/:/g,""));return(0,s.jsx)(j.Provider,{value:{config:i},children:(0,s.jsxs)("div",{"data-chart":u,ref:t,className:(0,v.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",n),...o,children:[(0,s.jsx)(N,{id:u,config:i}),(0,s.jsx)(c.u,{children:l})]})})});b.displayName="Chart";let N=e=>{let{id:t,config:r}=e,a=Object.entries(r).filter(e=>{let[,t]=e;return t.theme||t.color});return a.length?(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(p).map(e=>{let[r,s]=e;return"\n".concat(s," [data-chart=").concat(t,"] {\n").concat(a.map(e=>{var t;let[s,a]=e,n=(null===(t=a.theme)||void 0===t?void 0:t[r])||a.color;return n?"  --color-".concat(s,": ").concat(n,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},w=f.m,k=a.forwardRef((e,t)=>{let{active:r,payload:n,className:l,indicator:i="dot",hideLabel:o=!1,hideIndicator:c=!1,label:d,labelFormatter:u,labelClassName:m,formatter:x,color:h,nameKey:f,labelKey:g}=e,{config:p}=y(),j=a.useMemo(()=>{var e;if(o||!(null==n?void 0:n.length))return null;let[t]=n,r="".concat(g||t.dataKey||t.name||"value"),a=S(p,t,r),l=g||"string"!=typeof d?null==a?void 0:a.label:(null===(e=p[d])||void 0===e?void 0:e.label)||d;return u?(0,s.jsx)("div",{className:(0,v.cn)("font-medium",m),children:u(l,n)}):l?(0,s.jsx)("div",{className:(0,v.cn)("font-medium",m),children:l}):null},[d,u,n,o,m,p,g]);if(!r||!(null==n?void 0:n.length))return null;let b=1===n.length&&"dot"!==i;return(0,s.jsxs)("div",{ref:t,className:(0,v.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",l),children:[b?null:j,(0,s.jsx)("div",{className:"grid gap-1.5",children:n.map((e,t)=>{let r="".concat(f||e.name||e.dataKey||"value"),a=S(p,e,r),n=h||e.payload.fill||e.color;return(0,s.jsx)("div",{className:(0,v.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===i&&"items-center"),children:x&&(null==e?void 0:e.value)!==void 0&&e.name?x(e.value,e.name,e,t,e.payload):(0,s.jsxs)(s.Fragment,{children:[(null==a?void 0:a.icon)?(0,s.jsx)(a.icon,{}):!c&&(0,s.jsx)("div",{className:(0,v.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===i,"w-1":"line"===i,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===i,"my-0.5":b&&"dashed"===i}),style:{"--color-bg":n,"--color-border":n}}),(0,s.jsxs)("div",{className:(0,v.cn)("flex flex-1 justify-between leading-none",b?"items-end":"items-center"),children:[(0,s.jsxs)("div",{className:"grid gap-1.5",children:[b?j:null,(0,s.jsx)("span",{className:"text-muted-foreground",children:(null==a?void 0:a.label)||e.name})]}),e.value&&(0,s.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});function S(e,t,r){if("object"!=typeof t||null===t)return;let s="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,a=r;return r in t&&"string"==typeof t[r]?a=t[r]:s&&r in s&&"string"==typeof s[r]&&(a=s[r]),a in e?e[a]:e[r]}k.displayName="ChartTooltip",g.s,a.forwardRef((e,t)=>{let{className:r,hideIcon:a=!1,payload:n,verticalAlign:l="bottom",nameKey:i}=e,{config:o}=y();return(null==n?void 0:n.length)?(0,s.jsx)("div",{ref:t,className:(0,v.cn)("flex items-center justify-center gap-4","top"===l?"pb-3":"pt-3",r),children:n.map(e=>{let t="".concat(i||e.dataKey||"value"),r=S(o,e,t);return(0,s.jsxs)("div",{className:(0,v.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==r?void 0:r.icon)&&!a?(0,s.jsx)(r.icon,{}):(0,s.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==r?void 0:r.label]},e.value)})}):null}).displayName="ChartLegend";var C=r(778),_=r(8435),E=r(6974),R=r(5920);let D=(0,r(2732).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),A=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(R.b,{ref:t,className:(0,v.cn)(D(),r),...a})});function F(e){let{serverOptions:t}=e,[r,n]=(0,a.useState)([]),[i,f]=(0,a.useState)(!0),[g,v]=(0,a.useState)("all"),[p,j]=(0,a.useState)(7),[y,N]=(0,a.useState)("7"),[S,R]=(0,a.useState)("hourly"),D=e=>{let t=parseInt(e);t>0&&(j(t),N(e))};return(0,a.useEffect)(()=>{(async function(){try{let e=new URLSearchParams({serverId:g,days:p.toString(),viewType:S}),t=await fetch("/api/statistics/connections?".concat(e)),r=await t.json();n(r)}catch(e){console.error("Error fetching connection data:",e)}finally{f(!1)}})()},[g,p,S]),(0,s.jsxs)(o.Zp,{className:"bg-background border-border",children:[(0,s.jsx)(o.aR,{children:(0,s.jsxs)("div",{className:"flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o.ZB,{className:"text-foreground",children:"Server Connections"}),(0,s.jsxs)(o.BT,{className:"text-muted-foreground",children:["hourly"===S?"Hourly":"Daily"," player connections over time"]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(E.d,{id:"view-type",checked:"daily"===S,onCheckedChange:e=>R(e?"daily":"hourly")}),(0,s.jsx)(A,{htmlFor:"view-type",className:"text-muted-foreground",children:"Daily view"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,s.jsx)(A,{htmlFor:"admin-server-select",className:"text-xs text-transparent",children:"Server list"}),(0,s.jsxs)(C.l6,{value:g,onValueChange:v,children:[(0,s.jsx)(C.bq,{className:"w-[200px] bg-secondary text-foreground border-input",children:(0,s.jsx)(C.yv,{placeholder:"Select server"})}),(0,s.jsxs)(C.gC,{className:"bg-background border-border",children:[(0,s.jsx)(C.eb,{value:"all",className:"text-foreground",children:"All Servers"}),t.map(e=>(0,s.jsx)(C.eb,{value:e.value,className:"text-foreground",children:e.label},e.value))]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,s.jsx)(A,{htmlFor:"days-input",className:"text-xs text-muted-foreground",children:"Days to show"}),(0,s.jsx)(_.p,{id:"days-input",type:"number",value:y,onChange:e=>D(e.target.value),className:"w-[110px] bg-secondary text-foreground border-input",min:"1"})]})]})]})}),(0,s.jsx)(o.Wu,{children:i?(0,s.jsx)("div",{className:"flex justify-center items-center h-[400px]",children:(0,s.jsx)(l.A,{className:"h-8 w-8 animate-spin text-primary"})}):(0,s.jsx)(b,{config:{connections:{label:"Connections",color:"hsl(var(--primary))"}},className:"h-[400px] w-full",children:(0,s.jsx)(c.u,{width:"100%",height:"100%",children:(0,s.jsxs)(d.E,{data:r,margin:{top:20,right:30,left:20,bottom:20},children:[(0,s.jsx)(u.d,{strokeDasharray:"3 3",vertical:!1,stroke:"hsl(var(--muted-foreground))",opacity:.2}),(0,s.jsx)(m.W,{dataKey:"timestamp",stroke:"hsl(var(--muted-foreground))",fontSize:12,tickMargin:8,tickFormatter:e=>{if(!e)return"";let t=new Date(e);return"hourly"===S?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString()}}),(0,s.jsx)(x.h,{stroke:"hsl(var(--muted-foreground))",fontSize:12,tickMargin:8}),(0,s.jsx)(w,{content:(0,s.jsx)(k,{}),cursor:{fill:"hsl(var(--muted))"}}),(0,s.jsx)(h.y,{dataKey:"count",fill:"hsl(var(--primary))",radius:[4,4,0,0]})]})})})})]})}function L(e){let{serverOptions:t}=e,[r,n]=(0,a.useState)([]),[i,f]=(0,a.useState)(!0),[g,v]=(0,a.useState)("all"),[p,j]=(0,a.useState)(7),[y,N]=(0,a.useState)("7"),[S,R]=(0,a.useState)("hourly"),D=e=>{let t=parseInt(e);t>0&&(j(t),N(e))};return(0,a.useEffect)(()=>{(async function(){try{let e=new URLSearchParams({serverId:g,days:p.toString(),viewType:S}),t=await fetch("/api/statistics/admin-connections?".concat(e)),r=await t.json();n(r)}catch(e){console.error("Error fetching admin connection data:",e)}finally{f(!1)}})()},[g,p,S]),(0,s.jsxs)(o.Zp,{className:"bg-background border-border",children:[(0,s.jsx)(o.aR,{children:(0,s.jsxs)("div",{className:"flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o.ZB,{className:"text-foreground",children:"Admin Connections"}),(0,s.jsxs)(o.BT,{className:"text-muted-foreground",children:["hourly"===S?"Hourly":"Daily"," admin connections over time"]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(E.d,{id:"admin-view-type",checked:"daily"===S,onCheckedChange:e=>R(e?"daily":"hourly")}),(0,s.jsx)(A,{htmlFor:"admin-view-type",className:"text-muted-foreground",children:"Daily view"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,s.jsx)(A,{htmlFor:"admin-server-select",className:"text-xs text-transparent",children:"Server list"}),(0,s.jsxs)(C.l6,{value:g,onValueChange:v,children:[(0,s.jsx)(C.bq,{className:"w-[200px] bg-secondary text-foreground border-input",children:(0,s.jsx)(C.yv,{placeholder:"Select server"})}),(0,s.jsxs)(C.gC,{className:"bg-background border-border",children:[(0,s.jsx)(C.eb,{value:"all",className:"text-foreground",children:"All Servers"}),t.map(e=>(0,s.jsx)(C.eb,{value:e.value,className:"text-foreground",children:e.label},e.value))]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,s.jsx)(A,{htmlFor:"admin-days-input",className:"text-xs text-muted-foreground",children:"Days to show"}),(0,s.jsx)(_.p,{id:"admin-days-input",type:"number",value:y,onChange:e=>D(e.target.value),className:"w-[110px] bg-secondary text-foreground border-input",min:"1"})]})]})]})}),(0,s.jsx)(o.Wu,{children:i?(0,s.jsx)("div",{className:"flex justify-center items-center h-[400px]",children:(0,s.jsx)(l.A,{className:"h-8 w-8 animate-spin text-primary"})}):(0,s.jsx)(b,{config:{adminConnections:{label:"Admin Connections",color:"hsl(var(--destructive))"}},className:"h-[400px] w-full",children:(0,s.jsx)(c.u,{width:"100%",height:"100%",children:(0,s.jsxs)(d.E,{data:r,margin:{top:20,right:30,left:20,bottom:20},children:[(0,s.jsx)(u.d,{strokeDasharray:"3 3",vertical:!1,stroke:"hsl(var(--muted-foreground))",opacity:.2}),(0,s.jsx)(m.W,{dataKey:"timestamp",stroke:"hsl(var(--muted-foreground))",fontSize:12,tickMargin:8,tickFormatter:e=>{if(!e)return"";let t=new Date(e);return"hourly"===S?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString()}}),(0,s.jsx)(x.h,{stroke:"hsl(var(--muted-foreground))",fontSize:12,tickMargin:8}),(0,s.jsx)(w,{content:(0,s.jsx)(k,{}),cursor:{fill:"hsl(var(--muted))"}}),(0,s.jsx)(h.y,{dataKey:"count",fill:"hsl(var(--primary))",radius:[4,4,0,0]})]})})})})]})}A.displayName=R.b.displayName;var T=r(4862),O=r(710),K=r(2510);function I(){let e=(0,n.useRouter)(),{toast:t}=(0,K.dj)(),[r,o]=(0,a.useState)(!0),[c,d]=(0,a.useState)(!1),[u,m]=(0,a.useState)([]),[x,h]=(0,a.useState)("connections"),f=async()=>{try{let e=await fetch("/api/admin/config"),t=await e.json(),r=JSON.parse(t.SERVER_OPTIONS||"[]");m(r)}catch(e){console.error("Error fetching server options:",e),t({title:"Error",description:"Failed to load server options",variant:"destructive"})}};return((0,a.useEffect)(()=>{(async function(){try{let t=await fetch("/api/auth/session");(await t.json()).user?(d(!0),await f()):e.push("/login")}catch(t){console.error("Error fetching user:",t),e.push("/login")}finally{o(!1)}})()},[e]),r)?(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,s.jsx)(l.A,{className:"h-8 w-8 animate-spin text-primary"})}):c?(0,s.jsxs)("div",{className:"min-h-screen bg-background text-foreground flex flex-col",children:[(0,s.jsx)(T.A,{}),(0,s.jsxs)("main",{className:"flex-1 container mx-auto px-4 py-8",children:[(0,s.jsx)("h2",{className:"text-6xl font-bold text-center mb-8",children:"Statistics"}),(0,s.jsxs)(i.tU,{defaultValue:"connections",className:"w-full",value:x,onValueChange:h,children:[(0,s.jsxs)(i.j7,{className:"grid w-full grid-cols-2 mb-6",children:[(0,s.jsx)(i.Xi,{value:"connections",children:"Server Connections"}),(0,s.jsx)(i.Xi,{value:"admins",children:"Admin Connections"})]}),(0,s.jsx)(i.av,{value:"connections",className:"mt-0",children:(0,s.jsx)(F,{serverOptions:u})}),(0,s.jsx)(i.av,{value:"admins",className:"mt-0",children:(0,s.jsx)(L,{serverOptions:u})})]})]}),(0,s.jsx)(O.A,{})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[886,136,162,912,636,593,792],()=>t(5596)),_N_E=e.O()}]);