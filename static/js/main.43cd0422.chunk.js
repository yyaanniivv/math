(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),o=(a(15),a(9)),i=a(1),u=a(7),m=a.n(u);a(16);var s=function(e){var t=["1","2","3","4","5","6","7","8","9","0","<"].map((function(t){return c.a.createElement("div",{className:"char",onClick:function(){return e.onClick(t)},key:t},t)}));return c.a.createElement("div",{className:"numpad"},t)},f=a(4),b=a(8);a(17);var v=function(e){var t=e.config,a=e.setConfig,l=Object(n.useState)(!1),r=Object(i.a)(l,2),o=r[0],u=r[1],m=function(e){var n=e.target,c=n.id,l=n.value;a(Object(b.a)({},t,Object(f.a)({},c,parseInt(l))))};return c.a.createElement("div",null,c.a.createElement("div",{onClick:function(){return u(!o)}},o?"\u05e1\u05d2\u05d5\u05e8 \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea ^":"\u05e4\u05ea\u05d7 \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea V"),o&&c.a.createElement("div",{className:"settings"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"action"},"Select Action"),c.a.createElement("select",{id:"action",disabled:!0},c.a.createElement("option",{value:"x"},"\u05db\u05e4\u05dc"),c.a.createElement("option",{value:"+"},"\u05d7\u05d9\u05d1\u05d5\u05e8"),c.a.createElement("option",{value:"-"},"\u05d7\u05d9\u05e1\u05d5\u05e8"))),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"aOffset"},"aOffset"),c.a.createElement("input",{id:"aOffset",type:"number",value:t.aOffset,onChange:m})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"aRange"},"aRange"),c.a.createElement("input",{id:"aRange",type:"number",value:t.aRange,onChange:m})),c.a.createElement("div",null,"a = ",t.aOffset," - ",t.aOffset+t.aRange-1)),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"bOffset"},"bOffset"),c.a.createElement("input",{id:"bOffset",type:"number",value:t.bOffset,onChange:m})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"bRange"},"bRange"),c.a.createElement("input",{id:"bRange",type:"number",value:t.bRange,onChange:m})),c.a.createElement("div",null,"b = ",t.bOffset," - ",t.bOffset+t.bRange-1))))},d=function(e){var t=e.a,a=e.b,n=e.action;return c.a.createElement("div",{key:"".concat(t).concat(n).concat(a)}," ".concat(t," ").concat(n," ").concat(a," = ? "))};a(18);var E=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],o=e.problems;return c.a.createElement("div",{onClick:function(){return r(!l)}},c.a.createElement("p",null,o.length," \u05ea\u05e8\u05d2\u05d9\u05dc\u05d9\u05dd \u05e7\u05d5\u05d3\u05de\u05d9\u05dd"),l&&c.a.createElement("div",{className:"historicProblems"},o.map((function(e){return d(e)}))))};a(19);var g=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),u=Object(i.a)(r,2),f=u[0],b=u[1],g=Object(n.useState)("x"),p=Object(i.a)(g,2),O=p[0],h=(p[1],Object(n.useState)("")),j=Object(i.a)(h,2),R=j[0],k=j[1],y=Object(n.useState)({aRange:50,aOffset:1,bRange:5,bOffset:2}),C=Object(i.a)(y,2),N=C[0],S=C[1],w=Object(n.useState)([]),I=Object(i.a)(w,2),M=I[0],B=I[1],F=function(){l(Math.floor(Math.random()*N.aRange+N.aOffset)),b(Math.floor(Math.random()*N.bRange+N.bOffset)),document.getElementById("result").value="?"},x=function(){var e=document.getElementById("result"),t=parseInt(e.value);t===a*f?(k("\u05db\u05dc \u05d4\u05db\u05d1\u05d5\u05d3"),function(e,t,a){B([{a:e,b:t,action:a}].concat(Object(o.a)(M)))}(a,f,O),F()):k(t<=a*f?"\u05e0\u05de\u05d5\u05da \u05de\u05d9\u05d3\u05d9":"\u05d2\u05d1\u05d5\u05d4 \u05de\u05d9\u05d3\u05d9"),e.value="?"};return Object(n.useEffect)((function(){F()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"\u05d7\u05e9\u05d1\u05d5\u05df \u05e4\u05e9\u05d5\u05d8"),d({a:a,b:f,action:O}),R,c.a.createElement("div",{className:"MathProblem"},c.a.createElement("input",{placeholder:"?",type:"number",id:"result"}),c.a.createElement("button",{onClick:function(){return x()}},"\u05d1\u05d3\u05d5\u05e7")),c.a.createElement(s,{onClick:function(e){!function(e){var t=document.getElementById("result");t.value="<"===e?t.value.substr(0,t.value.length-1):t.value+e}(e)}}),c.a.createElement(E,{problems:M}),c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),c.a.createElement(v,{config:N,setConfig:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.43cd0422.chunk.js.map