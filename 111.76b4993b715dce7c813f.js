"use strict";(self.webpackChunkulbi_course=self.webpackChunkulbi_course||[]).push([[111],{111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(2373),o=n(8709),a=n(9016),c=n(9958),i=n(1050),l=n(6568),u=n(229),s=n(8901),f=n(1895),d=n(2895),v=n(1338),h=function(e){var t;return(null===(t=e.createTodo)||void 0===t?void 0:t.title)||""},p=n(8019),y=(0,p.oM)({name:"todo",initialState:{title:"",isLoading:!1},reducers:{setTitle:function(e,t){e.title=t.payload}}}),b=y.reducer,w=y.actions,x=n(2386),m=(0,p.hg)("todo/createTodo",(function(e,t){return n=void 0,r=void 0,a=function(){var n,r,o,a;return function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(c){switch(c.label){case 0:n=t.extra,r=t.rejectWithValue,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,n.api.post("/todos",e)];case 2:if(!(o=c.sent()).data)throw new Error;return null===(a=n.navigate)||void 0===a||a.call(n,"/todo"),[2,o.data];case 3:return c.sent(),[2,r(x.a.t("Не удалось создать todo"))];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function c(e){try{l(a.next(e))}catch(e){t(e)}}function i(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,i)}l((a=a.apply(n,r||[])).next())}));var n,r,o,a})),g=function(e){var t;return null===(t=e.createTodo)||void 0===t?void 0:t.isLoading},T=function(e){var t;return null===(t=e.createTodo)||void 0===t?void 0:t.error},k=n(6648),j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)},E={createTodo:b};const I=(0,o.memo)((function(e){var t=e.className,n=e.onSuccess;(0,f.q)("createTodo",E,!0);var p=(0,a.$)().t,y=(0,l.T)(),b=(0,c.v9)(h),x=(0,c.v9)(g),I=(0,c.v9)(T),S=(0,o.useCallback)((function(e){y(w.setTitle(e))}),[y]),C=(0,o.useCallback)((function(){return e=void 0,t=void 0,o=function(){return function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(e){switch(e.label){case 0:return[4,y(m({title:b}))];case 1:return"fulfilled"===e.sent().meta.requestStatus&&(null==n||n()),[2]}}))},new((r=void 0)||(r=Promise))((function(n,a){function c(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}));var e,t,r,o}),[y,n,b]);return x?(0,r.jsx)("div",j({className:(0,i.A)(k.Z.createTodo,{},[t])},{children:(0,r.jsx)(d.a,{})})):(0,r.jsxs)("div",j({className:(0,i.A)(k.Z.createTodo,{},[t])},{children:[I&&(0,r.jsx)(v.xv,{textSize:v.yH.MEDIUM,title:p("Ошибка"),text:I}),(0,r.jsx)(v.xv,{textSize:v.yH.LARGE,title:p("Создание todo")}),(0,r.jsx)(s.I,{placeholder:p("Название todo"),onChange:S,className:k.Z.title,value:b}),(0,r.jsx)(u.zx,j({growthColor:u.Bc.PRIMARY,theme:u.UH.OUTLINE,onClick:C},{children:p("Создать")}))]}))}))},6568:(e,t,n)=>{n.d(t,{T:()=>o});var r=n(9958),o=function(){return(0,r.I0)()}},1895:(e,t,n)=>{n.d(t,{q:()=>a});var r=n(8709),o=n(9958);function a(e,t,n){var a=(0,o.oR)(),c=(0,o.I0)();(0,r.useEffect)((function(){return Object.entries(t).forEach((function(t){var n=t[0],r=t[1];a.reducerManager.add(n,r),c({type:"@INIT ".concat(e," reducer")})})),function(){n&&Object.entries(t).forEach((function(t){var n=t[0];a.reducerManager.remove(n),c({type:"@DESTROY ".concat(e," reducer")})}))}}),[c,e,t,n,a])}},8901:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(2373),o=n(8709),a=n(1050),c=n(8297),i=(0,o.memo)((function(e){var t,n=e.className,o=e.onChange,i=e.value,l=e.type,u=void 0===l?"text":l,s=e.placeholder,f=void 0===s?"":s,d=e.readonly,v=void 0!==d&&d,h=((t={})[c.Z.readonly]=v,t);return(0,r.jsx)("input",{value:i,type:u,placeholder:f,onChange:function(e){null==o||o(e.target.value)},readOnly:v,className:(0,a.A)(c.Z.input,h,[n])})}))},6648:(e,t,n)=>{n.d(t,{Z:()=>r});const r={createTodo:"PhAPo7n9"};var o=n(3067)(e.id,{locals:!0});e.hot.dispose(o)},8297:(e,t,n)=>{n.d(t,{Z:()=>r});const r={input:"LVdIPwcx",readonly:"fTN1PnWu"};var o=n(3067)(e.id,{locals:!0});e.hot.dispose(o)}}]);