"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{3465:(e,a,t)=>{t.d(a,{A:()=>_});var s=t(4848),r=t(6540),l=t(9965),n=t.n(l),d=t(1106),i=t.n(d),o=t(5126),c=t(6974),h=t(8357),f=t(1208),m=t(9893),u=t(5452),p=t(4828),x=t(7414),g=t(9776),b=t(4860),j=t(8714),v=t(990),w=t(2732),y=t(9751),N=t(7049);let k=v.bL,z=v.l9;v.bm;let M=v.ZL,C=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(v.hJ,{className:(0,y.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r,ref:a})});C.displayName=v.hJ.displayName;let L=(0,w.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),R=r.forwardRef((e,a)=>{let{side:t="right",className:r,children:l,...n}=e;return(0,s.jsxs)(M,{children:[(0,s.jsx)(C,{}),(0,s.jsxs)(v.UC,{ref:a,className:(0,y.cn)(L({side:t}),r),...n,children:[(0,s.jsxs)(v.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(N.MKb,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]}),l]})]})});R.displayName=v.UC.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(v.hE,{ref:a,className:(0,y.cn)("text-lg font-semibold text-foreground",t),...r})}).displayName=v.hE.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(v.VY,{ref:a,className:(0,y.cn)("text-sm text-muted-foreground",t),...r})}).displayName=v.VY.displayName;var A=t(778),E=t(6424),P=t(7255);let B=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 640 480",children:[(0,s.jsx)("path",{fill:"#bd3d44",d:"M0 0h640v480H0"}),(0,s.jsx)("path",{stroke:"#fff",strokeWidth:"37",d:"M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"}),(0,s.jsx)("path",{fill:"#192f5d",d:"M0 0h364.8v258.5H0"}),(0,s.jsx)("path",{fill:"#fff",d:"m14 0 9 27L0 10h28L5 27z",transform:"scale(3.9385)"})]}),S=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 640 480",children:[(0,s.jsx)("path",{fill:"#AA151B",d:"M0 0h640v480H0z"}),(0,s.jsx)("path",{fill:"#F1BF00",d:"M0 120h640v240H0z"})]}),U=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 640 480",children:[(0,s.jsx)("path",{fill:"#229e45",d:"M0 0h640v480H0z"}),(0,s.jsx)("path",{fill:"#f8e509",d:"m321.4 436 301.5-195.7L319.6 44 17.1 240.7z"}),(0,s.jsx)("path",{fill:"#2b49a3",d:"M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240"}),(0,s.jsx)("path",{fill:"#ffffef",d:"M283.3 316.3l-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3"})]}),H=()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 640 480",children:(0,s.jsxs)("g",{fillRule:"evenodd",children:[(0,s.jsx)("path",{fill:"#fff",d:"M0 0h640v480H0z"}),(0,s.jsx)("path",{fill:"#dc143c",d:"M0 240h640v240H0z"})]})});function _(){var e;let[a,t]=(0,r.useState)(null),[l,d]=(0,r.useState)(!1),{theme:v,setTheme:w}=(0,j.D)(),N=(0,E.usePathname)(),{t:M,i18n:C}=(0,P.Bd)();(0,r.useEffect)(()=>{L();let e=localStorage.getItem("i18nextLng");e&&C.changeLanguage(e)},[]);let L=async()=>{try{let e=await fetch("/api/auth/session",{credentials:"include"});if(e.ok){let a=await e.json();a.user?t(a.user):t(null)}}catch(e){console.error("Error checking login status:",e),t(null)}},_=async()=>{try{await fetch("/api/auth/logout",{method:"POST",credentials:"include"}),t(null),d(!1),window.location.reload()}catch(e){console.error("Error logging out:",e)}},D=[{href:"/home",label:"header.home",icon:h.A},{href:"/chatlog",label:"header.chatlogs",icon:f.A},{href:"/search",label:"header.playerSearch",icon:m.A},{href:"/statistics",label:"header.statistics",icon:u.A},{href:"/admin/dashboard",label:"header.adminPanel",icon:p.A}],F=()=>(0,s.jsx)(s.Fragment,{children:D.map(e=>{let{href:a,label:t,icon:r}=e;return(0,s.jsx)(i(),{href:a,children:(0,s.jsxs)(o.$,{variant:"ghost",className:(0,y.cn)("w-full justify-start gap-2",N===a&&"bg-accent text-accent-foreground"),children:[(0,s.jsx)(r,{className:"h-4 w-4"}),M(t)]})},a)})});return(0,s.jsxs)("header",{className:"sticky top-0 z-50 flex justify-between items-center p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:[(0,s.jsx)("nav",{className:"hidden md:flex items-center gap-2 flex-1",children:(0,s.jsx)(F,{})}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsxs)(k,{children:[(0,s.jsx)(z,{asChild:!0,children:(0,s.jsxs)(o.$,{variant:"outline",size:"icon",children:[(0,s.jsx)(x.A,{className:"h-[1.2rem] w-[1.2rem]"}),(0,s.jsx)("span",{className:"sr-only",children:M("header.toggleMenu")})]})}),(0,s.jsx)(R,{side:"left",children:(0,s.jsx)("nav",{className:"flex flex-col gap-2 mt-4",children:(0,s.jsx)(F,{})})})]})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(c.d,{checked:"dark"===v,onCheckedChange:()=>{w("dark"===v?"light":"dark")},size:"sm",className:"data-[state=checked]:bg-primary"}),"light"===v?(0,s.jsx)(g.A,{size:20}):(0,s.jsx)(b.A,{size:20})]}),(0,s.jsxs)(A.l6,{onValueChange:e=>{C.changeLanguage(e),localStorage.setItem("i18nextLng",e)},value:C.language,children:[(0,s.jsx)(A.bq,{className:"w-[130px]",children:(0,s.jsx)(A.yv,{placeholder:M("header.selectLanguage")})}),(0,s.jsxs)(A.gC,{children:[(0,s.jsx)(A.eb,{value:"en-US",children:(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)(B,{})," English"]})}),(0,s.jsx)(A.eb,{value:"es-ES",children:(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)(S,{})," Espa\xf1ol"]})}),(0,s.jsx)(A.eb,{value:"pt-BR",children:(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)(U,{})," Portugu\xeas"]})}),(0,s.jsx)(A.eb,{value:"pl-PL",children:(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)(H,{})," Polish"]})})]})]}),a&&(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)(o.$,{onClick:()=>{d(!l)},variant:"secondary",className:"flex items-center gap-2",children:[a.avatarUrl?(0,s.jsx)(n(),{src:a.avatarUrl,alt:M("header.userAvatar"),className:"rounded-full",width:32,height:32,unoptimized:!0}):(0,s.jsx)("div",{className:"w-8 h-8 bg-muted rounded-full flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-muted-foreground text-xs",children:(null===(e=a.displayName)||void 0===e?void 0:e.charAt(0))||"?"})}),(0,s.jsx)("span",{className:"text-foreground",children:a.displayName||M("header.user")})]}),l&&(0,s.jsx)("div",{className:"absolute right-0 mt-2 w-48 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2",children:(0,s.jsx)(o.$,{onClick:_,variant:"ghost",className:"w-full justify-start px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",children:M("header.logout")})})]})]})]})}},5126:(e,a,t)=>{t.d(a,{$:()=>o,r:()=>i});var s=t(4848),r=t(6540),l=t(3362),n=t(2732),d=t(9751);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,a)=>{let{className:t,variant:r,size:n,asChild:o=!1,...c}=e,h=o?l.DX:"button";return(0,s.jsx)(h,{className:(0,d.cn)(i({variant:r,size:n,className:t})),ref:a,...c})});o.displayName="Button"},778:(e,a,t)=>{t.d(a,{bq:()=>c,eb:()=>u,gC:()=>m,l6:()=>i,yv:()=>o});var s=t(4848),r=t(6540),l=t(5136),n=t(9751),d=t(7049);let i=l.bL;l.YJ;let o=l.WT,c=r.forwardRef((e,a)=>{let{className:t,children:r,...i}=e;return(0,s.jsxs)(l.l9,{ref:a,className:(0,n.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...i,children:[r,(0,s.jsx)(l.In,{asChild:!0,children:(0,s.jsx)(d.D3D,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=l.l9.displayName;let h=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.PP,{ref:a,className:(0,n.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(d.Mtm,{className:"h-4 w-4"})})});h.displayName=l.PP.displayName;let f=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.wn,{ref:a,className:(0,n.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(d.D3D,{className:"h-4 w-4"})})});f.displayName=l.wn.displayName;let m=r.forwardRef((e,a)=>{let{className:t,children:r,position:d="popper",...i}=e;return(0,s.jsx)(l.ZL,{children:(0,s.jsxs)(l.UC,{ref:a,className:(0,n.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===d&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:d,...i,children:[(0,s.jsx)(h,{}),(0,s.jsx)(l.LM,{className:(0,n.cn)("p-1","popper"===d&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(f,{})]})})});m.displayName=l.UC.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.JU,{ref:a,className:(0,n.cn)("px-2 py-1.5 text-sm font-semibold",t),...r})}).displayName=l.JU.displayName;let u=r.forwardRef((e,a)=>{let{className:t,children:r,...i}=e;return(0,s.jsxs)(l.q7,{ref:a,className:(0,n.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(d.Srz,{className:"h-4 w-4"})})}),(0,s.jsx)(l.p4,{children:r})]})});u.displayName=l.q7.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.wv,{ref:a,className:(0,n.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=l.wv.displayName},6974:(e,a,t)=>{t.d(a,{d:()=>d});var s=t(4848),r=t(6540),l=t(9014),n=t(9751);let d=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.bL,{className:(0,n.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...r,ref:a,children:(0,s.jsx)(l.zi,{className:(0,n.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});d.displayName=l.bL.displayName}}]);