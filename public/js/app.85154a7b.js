(function(e){function t(t){for(var n,c,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function c(e){return u.p+"js/"+({404:"404",about:"about"}[e]||e)+"."+{404:"5a4e2fde",about:"784fbdf5"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"container"},a={class:"mt-3"};function c(e,t,r,c,u,s){var i=Object(n["v"])("Navbar"),l=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])("div",o,[Object(n["g"])(i),Object(n["g"])("div",a,[Object(n["g"])(l)])])}var u={class:"navbar navbar-dark bg-dark"},s={class:"container"},i=Object(n["f"])("API"),l=Object(n["f"])(" Login "),p=Object(n["f"])(" Signup ");function d(e,t,r,o,a,c){var d=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["d"])("nav",u,[Object(n["g"])("div",s,[Object(n["g"])(d,{to:"/",class:"navbar-brand"},{default:Object(n["C"])((function(){return[i]})),_:1}),Object(n["g"])("div",null,[o.user?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])(d,{key:0,class:"btn btn-info me-2",to:"/login"},{default:Object(n["C"])((function(){return[l]})),_:1})),o.user?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])(d,{key:1,class:"btn btn-info",to:"/signup"},{default:Object(n["C"])((function(){return[p]})),_:1})),o.user?(Object(n["q"])(),Object(n["d"])("button",{key:2,onClick:t[1]||(t[1]=function(){return o.logout&&o.logout.apply(o,arguments)}),class:"btn btn-danger"}," Logout ")):Object(n["e"])("",!0)])])])}var f=r("5c40"),b=r("5502"),m={setup:function(){var e=Object(b["b"])(),t=Object(f["d"])((function(){return e.state.moduleAuth.user})),r=function(){e.dispatch("moduleAuth/cerrarSesion")};return{logout:r,user:t}}};m.render=d;var h=m,g={components:{Navbar:h},setup:function(){}};g.render=c;var v=g,j=r("1da1"),k=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),O=r("1232"),x="https://api-prueba-200.herokuapp.com/api/user",y={namespaced:!0,state:function(){return{token:localStorage.getItem("token")||null,user:null,errors:null}},mutations:{setToken:function(e,t){if(t){var r=Object(O["a"])(t);console.log("user",r),e.user=r}else e.user=null;e.token=t},setErrors:function(e,t){e.errors=t}},actions:{verificarToken:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,fetch(x+"/validar",{method:"GET",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")}});case 4:return o=t.sent,t.next=7,o.json();case 7:if(a=t.sent,!a.errors){t.next=14;break}return console.log(a.errors),r("cerrarSesion"),t.abrupt("return",!1);case 14:return n("setToken",localStorage.getItem("token")),t.abrupt("return",!0);case 16:t.next=22;break;case 18:return t.prev=18,t.t0=t["catch"](1),console.log("error",t.t0),t.abrupt("return",!1);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})))()},acceder:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=e.dispatch,r.prev=1,r.next=4,fetch(x+t.path,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t.form)});case 4:return a=r.sent,r.next=7,a.json();case 7:if(c=r.sent,!c.errors){r.next=10;break}return r.abrupt("return",n("setErrors",c.errors));case 10:localStorage.setItem("token",c.token),n("setErrors",null),C.push("/"),r.next=19;break;case 15:r.prev=15,r.t0=r["catch"](1),console.log("error",r.t0),o("cerrarSesion");case 19:case"end":return r.stop()}}),r,null,[[1,15]])})))()},cerrarSesion:function(e){var t=e.commit;localStorage.removeItem("token"),t("setToken",null),C.push("/login")}}},w=(r("4de4"),r("d81d"),"https://api-prueba-200.herokuapp.com/api/todo"),T={namespaced:!0,state:function(){return{todos:[],errors:[]}},mutations:{setTodos:function(e,t){e.todos=t},addTodo:function(e,t){e.todos.push(t)},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e._id!==t}))},editTodo:function(e,t){e.todos=e.todos.map((function(e){return e._id===t._id?t:e}))},setErrors:function(e,t){e.errors=t}},actions:{addTodo:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,fetch(w+"/",{method:"POST",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")},body:JSON.stringify({text:t})});case 4:return o=r.sent,r.next=7,o.json();case 7:if(a=r.sent,console.log(a),!a.errors){r.next=11;break}return r.abrupt("return",n("setErrors",a.errors));case 11:n("addTodo",a.todo),n("setErrors",null),r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](1),console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[1,15]])})))()},editTodo:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,fetch(w+"/"+t._id,{method:"PUT",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")},body:JSON.stringify(t)});case 4:return o=r.sent,r.next=7,o.json();case 7:if(a=r.sent,console.log(a),!a.errors){r.next=11;break}return r.abrupt("return",n("setErrors",a.errors));case 11:n("editTodo",a.todoUpdate),n("setErrors",null),C.push("/"),r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](1),console.log(r.t0);case 19:case"end":return r.stop()}}),r,null,[[1,16]])})))()},getTodos:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,fetch(w+"/",{method:"GET",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(o=t.sent,!o.errors){t.next=10;break}return t.abrupt("return",r("setErrors",o.errors));case 10:r("setTodos",o.todos),r("setErrors",null),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))()},removeTodo:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,fetch(w+"/"+t,{method:"DELETE",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")}});case 4:return o=r.sent,r.next=7,o.json();case 7:if(a=r.sent,!a.errors){r.next=10;break}return r.abrupt("return",n("setErrors",a.errors));case 10:n("removeTodo",t),n("setErrors",null),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](1),console.log(r.t0);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))()},fetchTodo:function(e,t){return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,fetch(w+"/id/"+t,{method:"GET",headers:{"Content-type":"application/json","x-auth-token":localStorage.getItem("token")}});case 4:return o=r.sent,r.next=7,o.json();case 7:if(a=r.sent,console.log(a),!a.errors){r.next=11;break}return r.abrupt("return",n("setErrors",a.errors));case 11:return n("setErrors",null),r.abrupt("return",a.todo);case 15:r.prev=15,r.t0=r["catch"](1),console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[1,15]])})))()}}},S=Object(b["a"])({state:{},modules:{moduleAuth:y,moduleTodo:T}}),E=[{path:"/",name:"Home",component:function(){return r.e("about").then(r.bind(null,"bb51"))},meta:{requireAuth:!0}},{path:"/edit/:id",name:"Edit",component:function(){return r.e("about").then(r.bind(null,"1071"))},meta:{requireAuth:!0}},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return r.e("about").then(r.bind(null,"34c3"))}},{path:"/:pathMatch(.*)*",component:function(){return r.e("404").then(r.bind(null,"8cdb"))}}],R=Object(k["a"])({history:Object(k["b"])("/"),routes:E});R.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t.matched.some((function(e){return e.meta.requireAuth})),S.commit("moduleAuth/setErrors",null),o){e.next=4;break}return e.abrupt("return",n());case 4:if(!localStorage.getItem("token")){e.next=14;break}return e.next=7,S.dispatch("moduleAuth/verificarToken");case 7:if(!e.sent){e.next=11;break}n(),e.next=12;break;case 11:n("/login");case 12:e.next=15;break;case 14:n("/login");case 15:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var C=R;Object(n["c"])(v).use(S).use(C).mount("#app")}});
//# sourceMappingURL=app.85154a7b.js.map