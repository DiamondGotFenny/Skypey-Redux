(this["webpackJsonpskypey-redux"]=this["webpackJsonpskypey-redux"]||[]).push([[0],{1106:function(e,t,n){},1107:function(e,t,n){},1108:function(e,t,n){},1109:function(e,t,n){},1110:function(e,t,n){},1111:function(e,t,n){},1112:function(e,t,n){},1113:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),s=(n(35),n(36),n(37),n(38),n(12)),i=n(9);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var u,m=n(39),f=n(48),p=n(53),d=n(6),v=(u=10,Array.from({length:u},(function(){return y()}))),g=d.mapKeys(v,"user_id"),h=function(e){var t={};return d.forEach(v,(function(n){var a;t[n.user_id]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d.mapKeys((a=e,Array.from({length:a},(function(e,t){return{number:t,text:f.sentence(),is_user_msg:p.random.boolean()}}))),"number"))})),t};y(),h(10);function y(){return{name:p.name.findName(),email:p.internet.email(),profile_pic:p.internet.avatar(),status:f.sentence(),user_id:m.generate()}}var E="SET_ACTIVE_USER_ID",b="SET_CHAT_MESSAGES",_="SET_TYPING_VALUE",w="SEND_MESSAGE",O="SET_ACTIVE_USER";var S=n(6),j=n.n(S);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=Object(s.a)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;arguments.length>1&&arguments[1];return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y(),t=arguments.length>1?arguments[1]:void 0;return t.type===O?t.payload:e},activUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===E?t.payload:e},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h(10),t=arguments.length>1?arguments[1]:void 0;if(t.type===b)return t.payload;if(t.type===w){var n=t.payload,a=n.message,r=n.userId,o=e[r],c=+j.a.keys(o).pop()+1;return N({},e,Object(i.a)({},r,N({},o,Object(i.a)({},c,{number:c,text:a,is_user_msg:!0}))))}return e},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===_?t.payload:t.type===w?"":e}}),R=Object(s.b)(k),U=function(e,t){R.dispatch(function(e){return{type:E,payload:e}}(e)),R.dispatch(function(e){return{type:O,payload:e}}(t))},P=function(e){var t=e.contact,n=t.name,a=t.profile_pic,o=t.status,c=t.user_id;return r.a.createElement("div",{className:"User",onClick:function(){return U(c,t)}},r.a.createElement("img",{src:a,alt:n,className:"User_pic"}),r.a.createElement("div",{className:"User_details"},r.a.createElement("p",{className:"User_details-name"},n),r.a.createElement("p",{className:"User_details-status"},o)))},I=n(7),A=function(e){var t=e.contacts;return r.a.createElement("aside",{className:"Sidebar"},t.map((function(e){return r.a.createElement(I.b,{to:"/"},r.a.createElement(P,{contact:e,key:e.user_id}))})))},T=(n(1106),n(1107),function(){return r.a.createElement("div",{className:"Empty"},r.a.createElement("h1",null,"Want to Talk? Your Friends Are Waiting for You!"))}),D=(n(1108),function(e){var t=e.user,n=(e.activUserId,t.name),a=t.profile_pic,o=t.status,c=n.split(" ")[0];return r.a.createElement("div",{className:"StartChat"},r.a.createElement("h1",{className:"StartChat__name"},c),r.a.createElement("img",{className:"StartChat__img",src:a,alt:n}),r.a.createElement("p",{className:"StartChat__status"},r.a.createElement("b",null,"Status: "),o),r.a.createElement(I.b,{to:"/ChatWindow"},r.a.createElement("button",{className:"StartChat__btn"},"Start A Conversation")),r.a.createElement("p",{className:"StartChat__info"}," ","Search for someone to start chatting with or go to Contacts to see who is available"))}),W=n(5),M=(n(1109),function(e){var t=e.user,n=t.name,a=t.status;return r.a.createElement("div",{className:"ChatRoomHeader"},r.a.createElement("h1",{className:"ChatRoomHeader__name"},n),r.a.createElement("p",{className:"ChatRoomHeader__status"},a))}),x=n(25),B=n(26),H=n(28),F=n(27),G=n(29),L=(n(1110),function(e){var t=e.message,n=t.text,a=t.is_user_msg;return r.a.createElement("span",{className:"Chat ".concat(a?"is-user-msg":"")},n)}),V=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(H.a)(this,Object(F.a)(t).call(this,e))).scrollToBottom=function(){n.ChatRoomMsgsRef.current.scrollTop=n.ChatRoomMsgsRef.current.scrollHeight},n.ChatRoomMsgsRef=r.a.createRef(),n}return Object(G.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=j.a.map(this.props.messages,(function(e){return e}));return r.a.createElement("div",{className:"ChatRoomMsgs",ref:this.ChatRoomMsgsRef},e.map((function(e){return r.a.createElement(L,{message:e,key:e.number})})))}}]),t}(a.Component),Y=(n(1111),n(1112),function(e){var t=e.value,n=R.getState();return r.a.createElement("form",{className:"MessageInput",onSubmit:function(e){e.preventDefault();var t=n.typing,a=n.activUserId;R.dispatch({type:w,payload:{message:t,userId:a}})}},r.a.createElement("input",{className:"MessageInput__input",onChange:function(e){R.dispatch(function(e){return{type:_,payload:e}}(e.target.value))},value:t,placeholder:"writing a message"}))}),J=function(e){var t=e.activUserId,n=R.getState();console.log(n);var a=n.contacts[t],o=n.messages[t],c=n.typing;return r.a.createElement("div",{className:"ChatWindow"},r.a.createElement(M,{user:a}),r.a.createElement(V,{messages:o}),r.a.createElement(Y,{value:c}))},K=function(e){var t=e.user,n=e.activUserId;return r.a.createElement("main",{className:"Main"},n?r.a.createElement(W.c,null,r.a.createElement(W.a,{exact:!0,path:"/"},r.a.createElement(D,{user:t,activUserId:n})),r.a.createElement(W.a,{path:"/ChatWindow"},r.a.createElement(J,{activUserId:n}))):r.a.createElement(T,null))};var $=function(){var e=R.getState(),t=e.contacts,n=e.user,a=e.activUserId;return r.a.createElement("div",{className:"App"},r.a.createElement(A,{contacts:j.a.values(t)}),r.a.createElement(K,{user:n,activUserId:a}))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(){return console.log("%c Rendered with \ud83d\udc49 \ud83d\udc49\ud83d\udc47","background: purple; color: #FFF"),console.log(R.getState()),c.a.render(r.a.createElement(I.a,null,r.a.createElement($,null)),document.getElementById("root"))};Q(),R.subscribe(Q),function(e){if("serviceWorker"in navigator){if(new URL("/Skypey-Redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Skypey-Redux","/service-worker.js");q?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()},30:function(e,t,n){e.exports=n(1113)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.1d5e0c06.chunk.js.map