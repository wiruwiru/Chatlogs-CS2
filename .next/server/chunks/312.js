exports.id=312,exports.ids=[312],exports.modules={8842:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(r,{N:()=>n});var o=a(8732),t=a(7312),i=e([t]);function n({children:e,...r}){return(0,o.jsx)(t.ThemeProvider,{...r,children:e})}t=(i.then?(await i)():i)[0],s()}catch(e){s(e)}})},1230:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(r,{Sb:()=>v,US:()=>m,aD:()=>S,eC:()=>h,tE:()=>u,y8:()=>p});var o=a(8732),t=a(2015),i=a(6235),n=a(8938),d=a(7984),l=a(824),c=e([i,n,d]);[i,n,d]=c.then?(await c)():c;let u=i.Provider,m=t.forwardRef(({className:e,...r},a)=>(0,o.jsx)(i.Viewport,{ref:a,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...r}));m.displayName=i.Viewport.displayName;let g=(0,n.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),p=t.forwardRef(({className:e,variant:r,...a},s)=>(0,o.jsx)(i.Root,{ref:s,className:(0,d.cn)(g({variant:r}),e),...a}));p.displayName=i.Root.displayName,t.forwardRef(({className:e,...r},a)=>(0,o.jsx)(i.Action,{ref:a,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...r})).displayName=i.Action.displayName;let h=t.forwardRef(({className:e,...r},a)=>(0,o.jsx)(i.Close,{ref:a,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...r,children:(0,o.jsx)(l.Cross2Icon,{className:"h-4 w-4"})}));h.displayName=i.Close.displayName;let v=t.forwardRef(({className:e,...r},a)=>(0,o.jsx)(i.Title,{ref:a,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",e),...r}));v.displayName=i.Title.displayName;let S=t.forwardRef(({className:e,...r},a)=>(0,o.jsx)(i.Description,{ref:a,className:(0,d.cn)("text-sm opacity-90",e),...r}));S.displayName=i.Description.displayName,s()}catch(e){s(e)}})},5279:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(r,{l:()=>d});var o=a(8732),t=a(6175),i=a(1230),n=e([i]);function d(){let{toasts:e}=(0,t.dj)();return(0,o.jsxs)(i.tE,{children:[e.map(function({id:e,title:r,description:a,action:s,...t}){return(0,o.jsxs)(i.y8,{...t,children:[(0,o.jsxs)("div",{className:"grid gap-1",children:[r&&(0,o.jsx)(i.Sb,{children:r}),a&&(0,o.jsx)(i.aD,{children:a})]}),s,(0,o.jsx)(i.eC,{})]},e)}),(0,o.jsx)(i.US,{})]})}i=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},6175:(e,r,a)=>{"use strict";a.d(r,{dj:()=>m});var s=a(2015);let o=0,t=new Map,i=e=>{if(t.has(e))return;let r=setTimeout(()=>{t.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);t.set(e,r)},n=(e,r)=>{switch(r.type){case"ADD_TOAST":return{...e,toasts:[r.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=r;return a?i(a):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===r.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)}}},d=[],l={toasts:[]};function c(e){l=n(l,e),d.forEach(e=>{e(l)})}function u({...e}){let r=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...e,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,r]=s.useState(l);return s.useEffect(()=>(d.push(r),()=>{let e=d.indexOf(r);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},9682:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(r,{A:()=>u});var o=a(3977),t=a(7843),i=a(2175),n=a(8053),d=a(1406),l=a(5034),c=e([o,t,i]);[o,t,i]=c.then?(await c)():c,o.default.use(i.default).use(t.initReactI18next).init({resources:{en:{translation:n},es:{translation:d},pt:{translation:l}},fallbackLng:"en",lng:"en",interpolation:{escapeValue:!1}});let u=o.default;s()}catch(e){s(e)}})},7984:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(r,{cn:()=>n});var o=a(802),t=a(5979),i=e([o,t]);function n(...e){return(0,t.twMerge)((0,o.clsx)(e))}[o,t]=i.then?(await i)():i,s()}catch(e){s(e)}})},6312:(e,r,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(r),a.d(r,{default:()=>g});var o=a(8732),t=a(2015);a(9361);var i=a(7912),n=a.n(i),d=a(8842),l=a(5279),c=a(7843),u=a(9682),m=e([d,l,c,u]);[d,l,c,u]=m.then?(await m)():m;let g=function({Component:e,pageProps:r}){let[a,s]=(0,t.useState)({});return(0,o.jsx)(c.I18nextProvider,{i18n:u.A,children:(0,o.jsxs)(d.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:[(0,o.jsxs)(n(),{children:[(0,o.jsx)("title",{children:"ChatPanel - Logs system"}),(0,o.jsx)("link",{rel:"icon",href:a.IMAGE_URL||"/favicon.ico"})]}),(0,o.jsx)(e,{...r,config:a}),(0,o.jsx)(l.l,{})]})})};s()}catch(e){s(e)}})},9361:()=>{},8053:e=>{"use strict";e.exports=JSON.parse('{"header":{"home":"Home","chatlogs":"Chat logs","playerSearch":"Player search","statistics":"Statistics","adminPanel":"Admin panel","toggleMenu":"Toggle menu","selectLanguage":"Select language","userAvatar":"User avatar","user":"User","logout":"Logout"},"home":{"title":"ChatPanel","playerSearch":"Player search","chatlogs":"Chat logs","statistics":"Statistics","adminPanel":"Admin panel"},"messageDisplay":{"title":"Chat Logs","refresh":"Refresh","filters":{"selectServer":"Select Server","allServers":"All Servers","selectTeam":"Select Team","allChats":"All Chats","globalMessage":"Global Message","teamMessage":"Team Message","filterBySteamID":"Filter by Steam ID, Name or IP","filterByMessage":"Filter by Message"},"teamNames":{"global":"Global","team":"Team","unknown":"Unknown"},"loading":"Loading...","error":{"fetchMessages":"Error loading messages","fetchProfiles":"Error loading Steam profiles"}},"userSearch":{"title":"Player Search","searchPlaceholder":"Search by SteamID64, Name or IP","searchButton":"Search","performSearch":"Perform a search to see results.","noResults":"No results found. Try a different search method.","error":"There was an error retrieving results. Please try again in a few minutes.","loading":"Loading...","lastSeen":"Last seen","ip":"IP"},"adminConnectionsChart":{"title":"Admin Connections","description":"Admin connections over time","dailyView":"View by day","hourlyView":"View by hour","serverList":"Server list","daysToShow":"Days to show","selectServer":"Select server","allServers":"All servers","label":"Admin Connections"},"connectionsChart":{"title":"Server Connections","description":"Player connections over time","dailyView":"View by day","hourlyView":"View by hour","serverList":"Server list","daysToShow":"Days to show","selectServer":"Select server","allServers":"All servers","label":"Server Connections"},"common":{"loading":"Loading...","error":"Error","success":"Success","redirecting":"Redirecting...","daterange":"Select a date"},"totalPlaytime":{"title":"Total Playtime"},"totalConnections":{"title":"Total Connections"},"statistics":{"title":"Statistics","serverConnections":"Server Connections","adminConnections":"Admin Connections","errors":{"serverOptions":"Error loading server options"}},"userChatLog":{"title":"User Chat Log","userProfile":{"steamId":"SteamID","ip":"IP","unknown":"Unknown"},"filters":{"showFilters":"Show filters","hideFilters":"Hide filters","selectServer":"Select Server","selectTeam":"Select Team","filterByMessage":"Filter by Message"},"messages":{"globalMessage":"Global Message","teamMessage":"Team Message","unknown":"Unknown"},"pagination":{"previous":"Previous","next":"Next"},"errors":{"failedToLoad":"Failed to load messages"}},"footer":{"copyright":"Copyright 2024","designBy":"Designed by"},"login":{"title":"Login","steamLogin":"Login with Steam","errors":{"sessionCheck":"Error checking session","authFailed":"Authentication failed","notAuthorized":"Not authorized"}},"dashboard":{"title":"Dashboard","authorizedUsers":"Authorized Users","configuration":"Configuration","noAuthorizedUsers":"No authorized users found.","addUser":"Add User","enterSteamID64":"Enter SteamID64","role":"Role","user":"User","admin":"Admin","remove":"Remove","imageUrl":"Image URL","enterImageUrl":"Enter image URL","updateImageUrl":"Update image URL","serverOptions":"Server Options","serverOptionsFormat":"Format: NAME | SERVER ID","serverName":"Server Name (e.g. RETAKE #1)","serverId":"Server ID (e.g. 1)","addServerOption":"Add Server Option","updateServerOptions":"Update Server Options","unknownUser":"Unknown User","success":{"userAdded":"User added successfully","userRemoved":"User removed successfully","userRoleUpdated":"User role updated successfully","configUpdated":"Configuration updated successfully"},"error":{"addUser":"Error adding user","removeUser":"Error removing user","updateUserRole":"Error updating user role","updateConfig":"Error updating configuration"}}}')},1406:e=>{"use strict";e.exports=JSON.parse('{"header":{"home":"Inicio","chatlogs":"Registros de chat","playerSearch":"B\xfasqueda de jugadores","statistics":"Estad\xedsticas","adminPanel":"Panel de administraci\xf3n","toggleMenu":"Alternar men\xfa","selectLanguage":"Seleccionar idioma","userAvatar":"Avatar del usuario","user":"Usuario","logout":"Cerrar sesi\xf3n"},"home":{"title":"ChatPanel","playerSearch":"B\xfasqueda de jugadores","chatlogs":"Registros de chat","statistics":"Estad\xedsticas","adminPanel":"Panel de administraci\xf3n"},"messageDisplay":{"title":"Registros de Chat","refresh":"Actualizar","filters":{"selectServer":"Seleccionar Servidor","allServers":"Todos los Servidores","selectTeam":"Seleccionar Equipo","allChats":"Todos los Chats","globalMessage":"Mensaje Global","teamMessage":"Mensaje de Equipo","filterBySteamID":"Filtrar por Steam ID, Nombre o IP","filterByMessage":"Filtrar por Mensaje"},"teamNames":{"global":"Global","team":"Equipo","unknown":"Desconocido"},"loading":"Cargando...","error":{"fetchMessages":"Error al cargar los mensajes","fetchProfiles":"Error al cargar los perfiles de Steam"}},"userSearch":{"title":"B\xfasqueda de Jugadores","searchPlaceholder":"Buscar por SteamID64, Nombre o IP","searchButton":"Buscar","performSearch":"Realice una b\xfasqueda para ver resultados.","noResults":"No se encontraron resultados. Intente un m\xe9todo de b\xfasqueda diferente.","error":"Hubo un error al recuperar los resultados. Por favor, int\xe9ntelo de nuevo en unos minutos.","loading":"Cargando...","lastSeen":"\xdaltima vez visto","ip":"IP"},"adminConnectionsChart":{"title":"Conexiones de Administradores","description":"Conexiones de administradores a lo largo del tiempo","dailyView":"Ver por d\xeda","hourlyView":"Ver por hora","serverList":"Lista de servidores","daysToShow":"D\xedas a mostrar","selectServer":"Seleccionar servidor","allServers":"Todos los servidores","label":"Conexiones de Administradores"},"connectionsChart":{"title":"Conexiones al Servidor","description":"Conexiones de jugadores a lo largo del tiempo","dailyView":"Ver por d\xeda","hourlyView":"Ver por hora","serverList":"Lista de servidores","daysToShow":"D\xedas a mostrar","selectServer":"Seleccionar servidor","allServers":"Todos los servidores","label":"Conexiones al Servidor"},"common":{"loading":"Cargando...","error":"Error","success":"\xc9xito","redirecting":"Redirigiendo...","daterange":"Seleccione una fecha"},"totalPlaytime":{"title":"Tiempo Total de Juego"},"totalConnections":{"title":"Conexiones Totales"},"statistics":{"title":"Estad\xedsticas","serverConnections":"Conexiones al Servidor","adminConnections":"Conexiones de Administradores","errors":{"serverOptions":"Error al cargar las opciones del servidor"}},"userChatLog":{"title":"Registro de Chat del Usuario","userProfile":{"steamId":"SteamID","ip":"IP","unknown":"Desconocido"},"filters":{"showFilters":"Mostrar filtros","hideFilters":"Ocultar filtros","selectServer":"Seleccionar Servidor","selectTeam":"Seleccionar Equipo","filterByMessage":"Filtrar por Mensaje"},"messages":{"globalMessage":"Mensaje Global","teamMessage":"Mensaje de Equipo","unknown":"Desconocido"},"pagination":{"previous":"Anterior","next":"Siguiente"},"errors":{"failedToLoad":"Error al cargar los mensajes"}},"footer":{"copyright":"Copyright 2024","designBy":"Dise\xf1ado por"},"login":{"title":"Iniciar sesi\xf3n","steamLogin":"Iniciar sesi\xf3n con Steam","errors":{"sessionCheck":"Error al verificar la sesi\xf3n","authFailed":"Error de autenticaci\xf3n","notAuthorized":"No autorizado"}},"dashboard":{"title":"Panel de Control","authorizedUsers":"Usuarios Autorizados","configuration":"Configuraci\xf3n","noAuthorizedUsers":"No se encontraron usuarios autorizados.","addUser":"Agregar Usuario","enterSteamID64":"Ingrese SteamID64","role":"Rol","user":"Usuario","admin":"Administrador","remove":"Eliminar","imageUrl":"URL de la imagen","enterImageUrl":"Ingrese la URL de la imagen","updateImageUrl":"Actualizar URL de la imagen","serverOptions":"Opciones de Servidor","serverOptionsFormat":"Formato: NOMBRE | ID DEL SERVIDOR","serverName":"Nombre del Servidor (ej. RETAKE #1)","serverId":"ID del Servidor (ej. 1)","addServerOption":"Agregar Opci\xf3n de Servidor","updateServerOptions":"Actualizar Opciones de Servidor","unknownUser":"Usuario Desconocido","success":{"userAdded":"Usuario agregado exitosamente","userRemoved":"Usuario eliminado exitosamente","userRoleUpdated":"Rol de usuario actualizado exitosamente","configUpdated":"Configuraci\xf3n actualizada exitosamente"},"error":{"addUser":"Error al agregar usuario","removeUser":"Error al eliminar usuario","updateUserRole":"Error al actualizar el rol del usuario","updateConfig":"Error al actualizar la configuraci\xf3n"}}}')},5034:e=>{"use strict";e.exports=JSON.parse('{"header":{"home":"In\xedcio","chatlogs":"Registros de chat","playerSearch":"Busca de jogadores","statistics":"Estat\xedsticas","adminPanel":"Painel de administra\xe7\xe3o","toggleMenu":"Alternar menu","selectLanguage":"Selecionar idioma","userAvatar":"Avatar do usu\xe1rio","user":"Usu\xe1rio","logout":"Sair"},"home":{"title":"ChatPanel","playerSearch":"Busca de jogadores","chatlogs":"Registros de chat","statistics":"Estat\xedsticas","adminPanel":"Painel de administra\xe7\xe3o"},"messageDisplay":{"title":"Registros de Chat","refresh":"Atualizar","filters":{"selectServer":"Selecionar Servidor","allServers":"Todos os Servidores","selectTeam":"Selecionar Equipe","allChats":"Todos os Chats","globalMessage":"Mensagem Global","teamMessage":"Mensagem de Equipe","filterBySteamID":"Filtrar por Steam ID, Nome ou IP","filterByMessage":"Filtrar por Mensagem"},"teamNames":{"global":"Global","team":"Equipe","unknown":"Desconhecido"},"loading":"Carregando...","error":{"fetchMessages":"Erro ao carregar mensagens","fetchProfiles":"Erro ao carregar perfis do Steam"}},"userSearch":{"title":"Busca de Jogadores","searchPlaceholder":"Buscar por SteamID64, Nome ou IP","searchButton":"Buscar","performSearch":"Realize uma busca para ver resultados.","noResults":"Nenhum resultado encontrado. Tente um m\xe9todo de busca diferente.","error":"Houve um erro ao recuperar os resultados. Por favor, tente novamente em alguns minutos.","loading":"Carregando...","lastSeen":"Visto pela \xfaltima vez","ip":"IP"},"adminConnectionsChart":{"title":"Conex\xf5es de Administradores","description":"Conex\xf5es de administradores ao longo do tempo","dailyView":"Ver por dia","hourlyView":"Ver por hora","serverList":"Lista de servidores","daysToShow":"Dias para mostrar","selectServer":"Selecionar servidor","allServers":"Todos os servidores","label":"Conex\xf5es de Administradores"},"connectionsChart":{"title":"Conex\xf5es ao Servidor","description":"Conex\xf5es de jogadores ao longo do tempo","dailyView":"Ver por dia","hourlyView":"Ver por hora","serverList":"Lista de servidores","daysToShow":"Dias para mostrar","selectServer":"Selecionar servidor","allServers":"Todos os servidores","label":"Conex\xf5es ao Servidor"},"common":{"loading":"Carregando...","error":"Erro","success":"Sucesso","redirecting":"Redirecionando...","daterange":"Selecione uma data"},"totalPlaytime":{"title":"Tempo Total de Jogo"},"totalConnections":{"title":"Conex\xf5es Totais"},"statistics":{"title":"Estat\xedsticas","serverConnections":"Conex\xf5es ao Servidor","adminConnections":"Conex\xf5es de Administradores","errors":{"serverOptions":"Erro ao carregar op\xe7\xf5es do servidor"}},"userChatLog":{"title":"Registro de Chat do Usu\xe1rio","userProfile":{"steamId":"SteamID","ip":"IP","unknown":"Desconhecido"},"filters":{"showFilters":"Mostrar filtros","hideFilters":"Ocultar filtros","selectServer":"Selecionar Servidor","selectTeam":"Selecionar Equipe","filterByMessage":"Filtrar por Mensagem"},"messages":{"globalMessage":"Mensagem Global","teamMessage":"Mensagem de Equipe","unknown":"Desconhecido"},"pagination":{"previous":"Anterior","next":"Pr\xf3ximo"},"errors":{"failedToLoad":"Falha ao carregar mensagens"}},"footer":{"copyright":"Direitos autorais 2024","designBy":"Projetado por"},"login":{"title":"Entrar","steamLogin":"Entrar com Steam","errors":{"sessionCheck":"Erro ao verificar sess\xe3o","authFailed":"Falha na autentica\xe7\xe3o","notAuthorized":"N\xe3o autorizado"}},"dashboard":{"title":"Painel de Controle","authorizedUsers":"Usu\xe1rios Autorizados","configuration":"Configura\xe7\xe3o","noAuthorizedUsers":"Nenhum usu\xe1rio autorizado encontrado.","addUser":"Adicionar Usu\xe1rio","enterSteamID64":"Digite o SteamID64","role":"Fun\xe7\xe3o","user":"Usu\xe1rio","admin":"Administrador","remove":"Remover","imageUrl":"URL da imagem","enterImageUrl":"Digite a URL da imagem","updateImageUrl":"Atualizar URL da imagem","serverOptions":"Op\xe7\xf5es do Servidor","serverOptionsFormat":"Formato: NOME | ID DO SERVIDOR","serverName":"Nome do Servidor (ex. RETAKE #1)","serverId":"ID do Servidor (ex. 1)","addServerOption":"Adicionar Op\xe7\xe3o de Servidor","updateServerOptions":"Atualizar Op\xe7\xf5es do Servidor","unknownUser":"Usu\xe1rio Desconhecido","success":{"userAdded":"Usu\xe1rio adicionado com sucesso","userRemoved":"Usu\xe1rio removido com sucesso","userRoleUpdated":"Fun\xe7\xe3o do usu\xe1rio atualizada com sucesso","configUpdated":"Configura\xe7\xe3o atualizada com sucesso"},"error":{"addUser":"Erro ao adicionar usu\xe1rio","removeUser":"Erro ao remover usu\xe1rio","updateUserRole":"Erro ao atualizar fun\xe7\xe3o do usu\xe1rio","updateConfig":"Erro ao atualizar configura\xe7\xe3o"}}}')}};