(this["webpackJsonpgiphy-test"]=this["webpackJsonpgiphy-test"]||[]).push([[0],{18:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(11),s=n.n(r),i=n(5),u=n(2),o=(n(18),n(7)),l=n.n(o),d=n(0),j=function(t){var e=t.children,n=t.className,c=l()("container",n);return Object(d.jsx)("div",{className:c,children:e})},b=function(t){var e=t.children;return Object(d.jsx)("header",{className:"p-3 bg-dark text-white",children:Object(d.jsx)(j,{children:Object(d.jsx)("div",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",children:e})})})},h=n(4),f=n.n(h),m=n(10),p=n(12),O=(n(21),n(8)),g=n(13),x=(n(22),function(t){var e=t.pictures,n=t.onPictureHandler;return Object(d.jsx)("div",{className:"col-sm-3 mb-3",children:Object(d.jsx)("div",{className:"picture-item",children:e.map((function(t){var e=t.tag,c=t.url,a=t.alt,r=t.width,s=t.height,i=t.id;return Object(d.jsx)("img",{onClick:function(){return n(e)},src:c,alt:a,width:r,height:s},i)}))})})}),v=["id"],y=function(t){var e,n=t.pictures,c=t.onPictureHandler;return Object(d.jsx)("div",{className:"row mb-3",children:(e=n,e.map((function(t){t.id;var e=Object(g.a)(t,v);return Object(d.jsx)(x,Object(O.a)({onPictureHandler:c},e),t.id)})))})},w=function(t){var e=t.pictures,n=t.isGroup,a=t.onPictureHandler;return 0===e.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430."}),Object(d.jsx)("p",{children:"\u0427\u0442\u043e\u0431\u044b \u0438\u0445 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0432\u0435\u0434\u0438\u0442\u044c \u0442\u0435\u0433 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c."})]}):n?Object(d.jsx)(d.Fragment,{children:Array.from(new Set(e.map((function(t){return t.tag})))).map((function(t){var n=e.filter((function(e){return e.tag===t}));return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)(y,{pictures:n,onPictureHandler:a})]},t)}))}):Object(d.jsx)(y,{pictures:e,onPictureHandler:a})},N=(n(23),function(t){var e=t.id,n=t.statys,a=t.message,r=t.onMessageDelete;Object(c.useEffect)((function(){var t=setTimeout((function(){r(e)}),1e3);return function(){clearTimeout(t)}}),[e,r]);var s=l()("toast message-item fade show",n);return Object(d.jsxs)("div",{className:s,role:"alert","aria-live":"assertive","aria-atomic":"true",children:[Object(d.jsxs)("div",{className:"message-item__header toast-header",children:[Object(d.jsx)("strong",{className:"me-auto",children:n}),Object(d.jsx)("button",{onClick:function(){return r(e)},type:"button",className:"btn-close","data-bs-dismiss":"toast","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),Object(d.jsx)("div",{className:"toast-body",children:a})]})}),k=(n(24),function(t){var e=t.messages,n=t.onMessageDelete;return Object(d.jsx)("div",{className:"toast-container message-list",children:e.map((function(t){return Object(d.jsx)(N,Object(O.a)({onMessageDelete:n},t),t.id)}))})}),P=["test","da","sort","integral","arrat","exelent","terror","master","sould"],_=new function t(){var e=this;Object(p.a)(this,t),this._apiBase="https://api.giphy.com/v1/gifs",this._apiKey="gTJAO48YcpmrADUyo4opy4ES4g7iDBxx",this.getResource=function(){var t=Object(m.a)(f.a.mark((function t(n){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e._apiBase).concat(n));case 2:if((c=t.sent).ok){t.next=7;break}throw(a=new Error("Could not fetch ".concat(n,", received ").concat(c.status))).status=c.status,a;case 7:return t.next=9,c.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getRandomePicture=Object(m.a)(f.a.mark((function t(){var n,c,a=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",c="/random?api_key=".concat(e._apiKey,"&tag=").concat(n),t.next=4,e.getResource(c);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))},C=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],l=s[1],h=Object(c.useState)(!1),f=Object(u.a)(h,2),m=f[0],p=f[1],O=Object(c.useState)(!1),g=Object(u.a)(O,2),x=g[0],v=g[1],y=Object(c.useState)([]),N=Object(u.a)(y,2),C=N[0],M=N[1],S=function(t,e){if(""!==e){var n=(new Date).getUTCMilliseconds();M((function(c){return[].concat(Object(i.a)(c),[{id:n,statys:t,message:e}])}))}},D=Object(c.useCallback)((function(t){v(!0);var e=t.split(",").map((function(t){return t.trim()})),n=e.map((function(t){return _.getRandomePicture(t)})),c={tag:t,id:"",pictures:[]};Promise.all(n).then((function(t){t.forEach((function(t,n){if(0===t.data.length)S("error","\u041f\u043e \u0442\u044d\u0433\u0443 ".concat(e[n]," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"));else{var a={id:t.data.id,tag:e[n],url:t.data.image_url,width:t.data.image_width,height:t.data.image_height,alt:t.data.title};c.id+=t.data.id,c.pictures.push(a)}})),0!==c.pictures.length&&a((function(t){return[].concat(Object(i.a)(t),[c])})),v(!1)})).catch((function(t){v(!1),S("error","\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0442\u0430\u0442\u0443\u0441 - ".concat(t.status))}))}),[]);return Object(c.useEffect)((function(){if("delay"===o){var t=setInterval((function(){var t=function(){var t=Math.floor(Math.random()*P.length);return P[t]}();D(t)}),5e3);return function(){return clearInterval(t)}}}),[o,D]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{children:Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("input",{onChange:function(t){l(t.target.value.replace(/[^a-z, ]/gi,""))},name:"tag",value:o,type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433"}),Object(d.jsx)("button",{className:"btn btn-success",disabled:x,onClick:function(){""!==o?D(o):S("warning","\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 '\u0442\u0435\u0433'")},children:x?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(d.jsx)("button",{className:"btn btn-danger",disabled:0===n.length,onClick:function(){a([]),l(""),S("succses","\u041e\u0447\u0438\u0449\u0435\u043d\u043e")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){p(!m)},children:m?"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})}),Object(d.jsx)(j,{className:"py-5",children:Object(d.jsx)(w,{pictures:n,isGroup:m,onPictureHandler:function(t){l(t)}})}),Object(d.jsx)(k,{messages:C,onMessageDelete:function(t){var e=C.findIndex((function(e){return e.id===t}));M((function(){return[].concat(Object(i.a)(C.slice(0,e)),Object(i.a)(C.slice(e+1)))}))}})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9bd8fa56.chunk.js.map