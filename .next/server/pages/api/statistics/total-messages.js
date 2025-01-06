"use strict";(()=>{var e={};e.id=246,e.ids=[246],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},648:(e,t,s)=>{s.r(t),s.d(t,{config:()=>l,default:()=>c,routeModule:()=>d});var r={};s.r(r),s.d(r,{default:()=>u});var n=s(9947),a=s(2706),o=s(6762),i=s(4951);async function u(e,t){if("GET"!==e.method)return t.status(405).json({message:"Method not allowed"});let s=`
    SELECT COUNT(*) as totalMessages
    FROM sa_chatlogs
  `;try{let e=await i.A.getConnection(),[r]=await e.execute(s);e.release();let n=r[0].totalMessages||0;return t.status(200).json({totalMessages:n})}catch(e){return console.error("Database Error:",e),t.status(500).json({error:"Error fetching total messages data"})}}let c=(0,o.M)(r,"default"),l=(0,o.M)(r,"config"),d=new n.PagesAPIRouteModule({definition:{kind:a.A.PAGES_API,page:"/api/statistics/total-messages",pathname:"/api/statistics/total-messages",bundlePath:"",filename:""},userland:r})},4951:(e,t,s)=>{s.d(t,{A:()=>n});let r=require("mysql2/promise"),n=s.n(r)().createPool({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_NAME,waitForConnections:!0,connectionLimit:10,queueLimit:0})},2706:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return s}});var s=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},9947:(e,t,s)=>{e.exports=s(5600)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=t(t.s=648);module.exports=s})();