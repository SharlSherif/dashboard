(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{378:function(e,t,n){e.exports=n(693)},383:function(e,t,n){},693:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(27),c=n.n(o),i=(n(383),n(701)),s=n(700),u=n(108),l=n(207),d=n(139),f=n(698),m=n(49),p=function(e,t,n){var a=f.a.fetchJson,r=function(e,t,n){switch(console.log(e,t,n),e){case d.d:return{url:"".concat("/api","/").concat(t)};case d.g:return{url:"".concat("/api","/").concat(t,"/").concat(n.id)};case d.e:var a={filter:JSON.stringify({id:n.ids})};return{url:"".concat("/api","/").concat(t,"?").concat(Object(m.stringify)(a))};case d.f:var r=n.pagination,o=r.page,c=r.perPage,i=n.sort,s=i.field,f=i.order,p={sort:JSON.stringify([s,f]),range:JSON.stringify([(o-1)*c,o*c-1]),filter:JSON.stringify(Object(l.a)({},n.filter,Object(u.a)({},n.target,n.id)))};return{url:"".concat("/api","/").concat(t,"?").concat(Object(m.stringify)(p))};case d.h:return{url:"".concat("/api","/").concat(t,"/").concat(n.id),options:{method:"PUT",body:JSON.stringify(n.data)}};case d.a:return{url:"".concat("/api","/").concat(t),options:{method:"POST",body:JSON.stringify(n.data)}};case d.b:return{url:"".concat("/api","/").concat(t,"/").concat(n.id),options:{method:"DELETE"}};default:throw new Error("Unsupported fetch action type ".concat(e))}}(e,t,n);return a(r.url,r.options).then(function(t){return function(e,t,n,a){var r=e.headers,o=e.json;switch(console.log(o,r),t){case d.d:return{data:o.map(function(e){return e}),total:1};case d.a:return{data:Object(l.a)({},a.data,{id:o.id})};default:return{data:o}}}(t,e,0,n)})},g=n(152),h=function(e,t){if(e===g.d&&console.log(g.d),e===g.e&&console.log(g.e),e===g.b&&console.log(g.b),e===g.a)return localStorage.getItem("token")?Promise.resolve():Promise.reject();if(e===g.d){var n=t.username,a=t.password,r=new Request("".concat("/api","/login"),{method:"POST",body:JSON.stringify({username:n,password:a}),headers:new Headers({"Content-Type":"application/json"})});return fetch(r).then(function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()}).then(function(e){var t=e.token;localStorage.setItem("token",t)})}return e===g.e?(localStorage.removeItem("token"),Promise.resolve()):void 0},w=n(702),E=n(705),v=n(708),y=n(706),O=n(703),b=n(704),S=function(e){var t=e.record;return r.a.createElement("span",null,"Post ",t?'"'.concat(t.id,'"'):"")},j=function(e){return r.a.createElement(w.a,e,r.a.createElement(E.a,{rowClick:"edit"},r.a.createElement(v.a,{source:"id"}),r.a.createElement(v.a,{source:"description"}),r.a.createElement(v.a,{source:"url"})))},J=function(e){return r.a.createElement(y.a,Object.assign({title:r.a.createElement(S,null)},e),r.a.createElement(O.a,null,r.a.createElement(b.a,{source:"description"}),r.a.createElement(b.a,{source:"url"})))},P=function(){return r.a.createElement(i.a,{dataProvider:p,authProvider:h},r.a.createElement(s.a,{name:"videos",list:j,edit:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[378,2,1]]]);
//# sourceMappingURL=main.dad0a670.chunk.js.map