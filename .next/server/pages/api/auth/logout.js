"use strict";(()=>{var e={};e.id=506,e.ids=[506],e.modules={666:e=>{e.exports=require("cookie")},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},4613:(e,t,n)=>{n.r(t),n.d(t,{config:()=>P,default:()=>d,routeModule:()=>l});var o={};n.r(o),n.d(o,{default:()=>s});var r=n(9947),u=n(2706),i=n(6762),a=n(666);function s(e,t){"POST"===e.method?(t.setHeader("Set-Cookie",[(0,a.serialize)("session","",{maxAge:-1,path:"/"})]),t.status(200).json({message:"Logged out successfully"})):t.status(405).json({message:"Method not allowed"})}let d=(0,i.M)(o,"default"),P=(0,i.M)(o,"config"),l=new r.PagesAPIRouteModule({definition:{kind:u.A.PAGES_API,page:"/api/auth/logout",pathname:"/api/auth/logout",bundlePath:"",filename:""},userland:o})},2706:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return n}});var n=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},9947:(e,t,n)=>{e.exports=n(5600)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=4613);module.exports=n})();