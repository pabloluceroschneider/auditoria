(this.webpackJsonpauditandoeticas=this.webpackJsonpauditandoeticas||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/simbolo0.c9592cb8.png"},function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),l=t.n(o),c=(t(10),t(1)),i=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},e.children)))},s=function(e){var a=e.handle,t=e.title;return r.a.createElement("div",{className:"App-link",onClick:function(){return a()}},t)},u=function(e){var a=e.backProps,t=e.nextProps;return r.a.createElement("div",{className:"two-columns"},a.has?r.a.createElement(s,a):null,t.has?r.a.createElement(s,t):null)},d=function(e){var a=e.handle,t=e.item.title;return r.a.createElement("div",{className:"option",onClick:function(){return a()}},r.a.createElement("div",null,t))},m=function(e){var a=e.optionA,t=e.optionB;return r.a.createElement("div",{className:"decision"},r.a.createElement(d,a),r.a.createElement(d,t))},p=function(e){var a=e.type,t=e.content;switch(a){case"string":return r.a.createElement("p",{className:"item.content"},t);case"video":return r.a.createElement("div",{class:"video"},r.a.createElement("iframe",{class:"responsive-iframe",src:t,frameborder:"0",title:"Youtube video",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}));default:return}},b=function(){var e=Object(n.useState)([{page:{current:1,next:2},title:"Auditando tu \xc9tica",body:{type:"string",content:"Introducci\xf3n: Esta aplicaci\xf3n web fue desarrollada para realizar la presentaci\xf3n final de la materia de una manera distinta.."}},{page:{current:2,back:1,next:3},title:"Auditar... \xbfQu\xe9 es?",body:{type:"string",content:"\u201cLa auditor\xeda es el procedimiento en el que una persona o entidad ajena a la organizaci\xf3n u objeto auditado, recopila informaci\xf3n y evidencia sobre el elemento auditado, con el objetivo de comparar el estado actual con los objetivos predefinidos. Con la auditor\xeda podemos conseguir certificaciones que agregan valor a la empresa en t\xe9rminos de confianza con los clientes y con empresas, pero adem\xe1s, nos permite medir la forma en la que estamos trabajando.\u201d"}},{page:{current:3,back:2,next:4},title:"\xbfY la \xe9tica?",body:{type:"string",content:"Seg\xfan Plat\xf3n, la \xe9tica est\xe1 basada en la virtud del h\xe1bito de obrar bien, por la disposici\xf3n constante del alma o las acciones conformes o la ley moral."}},{page:{current:4,back:3,next:5},title:"\xbfEn qu\xe9 momento estos pueden encontrarse?",body:{type:"string",content:"Como en todas las \xe1reas de la vida, todos los d\xedas se deben tomar decisiones \xe9ticas."}},{page:{current:5,back:4,next:6},title:"Situaci\xf3n:",body:{type:"string",content:"Estudiaremos la Deodontolog\xeda del Auditor Interno a trav\xe9s de un juego."}},{page:{current:6,back:5,next:7},title:"Situaci\xf3n:",body:{type:"string",content:""}},{page:{current:7,next:8},title:"Video",body:{type:"video",content:"https://www.youtube.com/embed/i6pwCBrmN8Q"}},{page:{current:8,next:-1},title:"Decision",decision:{opA:{title:"Ser Honesto",go:4},opB:{title:"Robar",go:5}}}]),a=Object(c.a)(e,1)[0],t=Object(n.useState)(a[0]),o=Object(c.a)(t,2),l=o[0],s=o[1],d=function(e){-1===e&&document.location.reload();var t=a.find((function(a){return a.page.current===e}));s(t)};return r.a.createElement(i,null,r.a.createElement("div",{className:"container.content"},r.a.createElement("h1",null,l.title),l.body?r.a.createElement(p,l.body):r.a.createElement(m,{optionA:{item:l.decision.opA,handle:function(){return d(l.decision.opA.go)}},optionB:{item:l.decision.opB,handle:function(){return d(l.decision.opB.go)}}}),r.a.createElement(u,{backProps:{title:"Anterior",has:l.page.back,handle:function(){return d(l.page.back)}},nextProps:{title:"Siguiente",has:l.page.next,handle:function(){return d(l.page.next)}}})))},E=t(4),g=t.n(E);var f=function(){var e=Object(n.useState)(!0),a=Object(c.a)(e,2),t=a[0],o=a[1];return t?r.a.createElement(i,null,r.a.createElement("div",{className:"firstPage"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("h3",null,"AUDITANDO \xc9TICAS"),r.a.createElement("span",null,"Universidad Tecnol\xf3gica Nacional"),r.a.createElement("br",null),r.a.createElement("span",null,"Facultad Regional C\xf3rdoba"),r.a.createElement("br",null),r.a.createElement("span",null,"Catedra Auditor\xeda - "),r.a.createElement("span",null,"Curso 5K3_"),r.a.createElement("br",null),r.a.createElement("div",{className:"caratula"},r.a.createElement("span",null,"Profesores:"),r.a.createElement("br",null),r.a.createElement("span",{className:"integrante"},"Juan Carlos "),r.a.createElement("br",null),r.a.createElement("span",{className:"integrante"},"Daniela Oyola"),r.a.createElement("br",null),r.a.createElement("span",null,"Integrantes:"),r.a.createElement("br",null),r.a.createElement("span",{className:"integrante"},"Damian Fari\xf1a"),r.a.createElement("br",null),r.a.createElement("span",{className:"integrante"},"Pablo Lucero Schneider"),r.a.createElement("br",null)))),r.a.createElement(s,{handle:o,title:"Siguiente"})):r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1beee400.chunk.js.map