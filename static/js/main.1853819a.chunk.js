(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{58:function(e,t,a){e.exports=a(68)},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),l=(a(63),a(20)),o=a(31),u=a(25),d=a(14),s=(a(64),a(109)),m=a(99),f=a(100);var v=function(e){var t=e.addItem,a=Object(n.useState)(""),c=Object(d.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)(null),u=Object(d.a)(o,2),v=u[0],b=u[1],O=function(){r.trim()?(t(r.trim()),l("")):b("Title is required!")};return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"outlined",value:r,error:!!v,label:"Title",helperText:v,onChange:function(e){b(null),l(e.currentTarget.value)},onKeyUp:function(e){e.ctrlKey&&"Enter"===e.key&&O()}}),i.a.createElement(m.a,{color:"primary",onClick:O},i.a.createElement(f.a,null)))};var b=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(e.value),o=Object(d.a)(l,2),u=o[0],m=o[1];return c?i.a.createElement(s.a,{variant:"outlined",value:u,onBlur:function(){r(!1),e.changeValue(u)},autoFocus:!0,onChange:function(e){m(e.currentTarget.value)}}):i.a.createElement("span",{onDoubleClick:function(){r(!0),e.changeValue(u)}},e.value)},O=a(111),j=a(102),E=a(101);function h(e){var t=e.tasks.map((function(t){return i.a.createElement("div",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(O.a,{color:"primary",checked:t.isDone,onChange:function(a){return e.changeStatus(t.id,a.currentTarget.checked,e.id)}}),i.a.createElement(b,{value:t.title,changeValue:function(a){e.changeTaskTitle(t.id,a,e.id)}}),i.a.createElement(m.a,{onClick:function(){e.removeTask(t.id,e.id)}},i.a.createElement(E.a,null)))}));return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(b,{value:e.title,changeValue:function(t){e.changeTodoListTitle(e.id,t)}}),i.a.createElement(m.a,{onClick:function(){e.removeTodoList(e.id)}},i.a.createElement(E.a,null))),i.a.createElement(v,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("div",null,t),i.a.createElement("div",null,i.a.createElement(j.a,{size:"small",color:"all"===e.filter?"primary":"default",variant:"contained",onClick:function(){return e.changeFilter("all",e.id)}},"All"),i.a.createElement(j.a,{size:"small",color:"active"===e.filter?"primary":"default",variant:"contained",onClick:function(){return e.changeFilter("active",e.id)}},"Active"),i.a.createElement(j.a,{size:"small",color:"completed"===e.filter?"primary":"default",variant:"contained",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed")))}var g=a(110),p=a(103),k=a(104),T=a(106),D=a(107),y=a(108),C=a(69),S=a(105);var w=function(){var e,t=Object(g.a)(),a=Object(g.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),r=Object(d.a)(c,2),s=r[0],f=r[1],b=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(g.a)(),title:"HTML&CSS",isDone:!0},{id:Object(g.a)(),title:"JS",isDone:!1},{id:Object(g.a)(),title:"React",isDone:!0},{id:Object(g.a)(),title:"GraphQL",isDone:!0},{id:Object(g.a)(),title:"Rest API",isDone:!0}]),Object(u.a)(e,a,[{id:Object(g.a)(),title:"Books",isDone:!0},{id:Object(g.a)(),title:"Butter",isDone:!1},{id:Object(g.a)(),title:"Onion",isDone:!0},{id:Object(g.a)(),title:"Beer",isDone:!0},{id:Object(g.a)(),title:"Fish",isDone:!0}]),e)),O=Object(d.a)(b,2),E=O[0],w=O[1];function L(e,t){var a=E[t],n={id:Object(g.a)(),title:e,isDone:!1};E[t]=[n].concat(Object(o.a)(a)),w(Object(l.a)({},E))}function B(e,t){var a=E[t];E[t]=a.filter((function(t){return t.id!==e})),w(Object(l.a)({},E))}function F(e,t){var a=s.find((function(e){return e.id===t}));a&&(a.filter=e,f(Object(o.a)(s)))}function x(e,t,a){var n=E[a].find((function(t){return t.id===e}));n&&(n.isDone=t,w(Object(l.a)({},E)))}function I(e){f(s.filter((function(t){return t.id!==e}))),delete E[e],w(Object(l.a)({},E))}function A(e,t,a){var n=E[a].find((function(t){return t.id===e}));n&&(n.title=t,w(Object(l.a)({},E)))}function V(e,t){var a=s.find((function(t){return t.id===e}));a&&(a.title=t,f(Object(o.a)(s)))}return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{position:"static"},i.a.createElement(k.a,null,i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(S.a,null)),i.a.createElement(T.a,{variant:"h6"},"News"),i.a.createElement(j.a,{color:"inherit"},"Login"))),i.a.createElement(D.a,{fixed:!0},i.a.createElement(y.a,{container:!0,style:{padding:"20px"}},i.a.createElement(v,{addItem:function(e){var t=Object(g.a)(),a={id:t,title:e,filter:"all"};f([].concat(Object(o.a)(s),[a])),w(Object(l.a)(Object(l.a)({},E),{},Object(u.a)({},t,[])))}})),i.a.createElement(y.a,{container:!0,spacing:3},s.map((function(e){var t=E[e.id];return"active"===e.filter&&(t=E[e.id].filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(t=E[e.id].filter((function(e){return!0===e.isDone}))),i.a.createElement(y.a,{item:!0},i.a.createElement(C.a,{style:{padding:"10px"}},i.a.createElement(h,{key:e.id,id:e.id,title:e.title,tasks:t,filter:e.filter,addTask:L,removeTask:B,changeFilter:F,changeStatus:x,removeTodoList:I,changeTaskTitle:A,changeTodoListTitle:V})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.1853819a.chunk.js.map