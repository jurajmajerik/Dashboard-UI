!function(e,n){for(var r in n)e[r]=n[r]}(exports,function(e){function n(e){var n=require("./"+e+"."+o+".hot-update.js");!function(e,n){if(!j[e]||!g[e])return;for(var r in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--v&&0===b&&O()}(n.id,n.modules)}var r,t=!0,o="0766e95f18250cf33872",i={},c=[],s=[];function a(e){var n=D[e];if(!n)return P;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(c=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),c=[]),P(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===l&&f("prepare"),b++,P.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===l&&(m[e]||_(e),0===b&&0===v&&O())}},t.t=function(e,n){return 1&n&&(e=t(e)),P.t(e,-2&n)},t}function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:w,apply:q,status:function(e){if(!e)return l;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:i[e]};return r=void 0,n}var d=[],l="idle";function f(e){l=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var p,h,y,v=0,b=0,m={},g={},j={};function x(e){return+e+""===e?+e:e}function w(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return t=e,f("check"),function(){try{var e=require("./"+o+".hot-update.json")}catch(e){return Promise.resolve()}return Promise.resolve(e)}().then(function(e){if(!e)return f("idle"),null;g={},m={},j=e.c,y=e.h,f("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});h={};return _(0),"prepare"===l&&0===b&&0===v&&O(),n})}function _(e){j[e]?(g[e]=!0,v++,n(e)):m[e]=!0}function O(){f("ready");var e=p;if(p=null,e)if(t)Promise.resolve().then(function(){return q(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(x(r));e.resolve(n)}}function q(n){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var r,t,s,a,u;function d(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var u=a.parents[s],d=D[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===n.indexOf(u)&&(d.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),p(r[u],[i])):(delete r[u],n.push(u),t.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var v={},b=[],m={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var _;u=x(w);var O=!1,q=!1,k=!1,I="";switch((_=h[w]?d(u):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(_),q=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),k=!0;break;default:throw new Error("Unexception type "+_.type)}if(O)return f("abort"),Promise.reject(O);if(q)for(u in m[u]=h[u],p(b,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(v[u]||(v[u]=[]),p(v[u],_.outdatedDependencies[u]));k&&(p(b,[_.moduleId]),m[u]=g)}var E,H=[];for(t=0;t<b.length;t++)u=b[t],D[u]&&D[u].hot._selfAccepted&&H.push({module:u,errorHandler:D[u].hot._selfAccepted});f("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete installedChunks[e]}(e)});for(var A,M,S=b.slice();S.length>0;)if(u=S.pop(),a=D[u]){var U={},C=a.hot._disposeHandlers;for(s=0;s<C.length;s++)(r=C[s])(U);for(i[u]=U,a.hot.active=!1,delete D[u],delete v[u],s=0;s<a.children.length;s++){var T=D[a.children[s]];T&&((E=T.parents.indexOf(u))>=0&&T.parents.splice(E,1))}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(a=D[u]))for(M=v[u],s=0;s<M.length;s++)A=M[s],(E=a.children.indexOf(A))>=0&&a.children.splice(E,1);for(u in f("apply"),o=y,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var F=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(a=D[u])){M=v[u];var R=[];for(t=0;t<M.length;t++)if(A=M[t],r=a.hot._acceptedDependencies[A]){if(-1!==R.indexOf(r))continue;R.push(r)}for(t=0;t<R.length;t++){r=R[t];try{r(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:M[t],error:e}),n.ignoreErrored||F||(F=e)}}}for(t=0;t<H.length;t++){var K=H[t];u=K.module,c=[u];try{P(u)}catch(e){if("function"==typeof K.errorHandler)try{K.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:r,originalError:e}),n.ignoreErrored||F||(F=r),F||(F=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||F||(F=e)}}return F?(f("fail"),Promise.reject(F)):(f("idle"),new Promise(function(e){e(b)}))}var D={};function P(n){if(D[n])return D[n].exports;var r=D[n]={i:n,l:!1,exports:{},hot:u(n),parents:(s=c,c=[],s),children:[]};return e[n].call(r.exports,r,r.exports,a(n)),r.l=!0,r.exports}return P.m=e,P.c=D,P.d=function(e,n,r){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(P.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)P.d(r,t,function(n){return e[n]}.bind(null,t));return r},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="",P.h=function(){return o},a(4)(P.s=4)}([function(e,n){e.exports=require("path")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("cors")},function(e,n){e.exports=require("moment")},function(e,n,r){e.exports=r(25)},function(e,n,r){"use strict";r(6);var t,o=(t=r(21))&&t.__esModule?t:{default:t};o.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),o.default._babelPolyfill=!0},function(e,n,r){"use strict";r(7),r(8),r(9),r(10),r(11),r(12),r(13),r(14),r(15),r(16),r(17),r(18),r(19),r(20)},function(e,n){e.exports=require("core-js/es6")},function(e,n){e.exports=require("core-js/fn/array/includes")},function(e,n){e.exports=require("core-js/fn/array/flat-map")},function(e,n){e.exports=require("core-js/fn/string/pad-start")},function(e,n){e.exports=require("core-js/fn/string/pad-end")},function(e,n){e.exports=require("core-js/fn/string/trim-start")},function(e,n){e.exports=require("core-js/fn/string/trim-end")},function(e,n){e.exports=require("core-js/fn/symbol/async-iterator")},function(e,n){e.exports=require("core-js/fn/object/get-own-property-descriptors")},function(e,n){e.exports=require("core-js/fn/object/values")},function(e,n){e.exports=require("core-js/fn/object/entries")},function(e,n){e.exports=require("core-js/fn/promise/finally")},function(e,n){e.exports=require("core-js/web")},function(e,n){e.exports=require("regenerator-runtime/runtime")},function(e,n){e.exports=require("core-js/library/fn/global")},function(e,n){e.exports=require("rethinkdbdash")},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("socket.io")},function(e,n,r){"use strict";r.r(n);r(5);var t=r(0),o=r.n(t),i=r(1),c=r.n(i),s=r(2),a=r.n(s);function u(e){e.table("articles_new").delete().run().then(function(e){console.log(e)}).error(function(e){console.log(e)})}var d=[{title:"University finance: 'Urgent review required' over bad news",country:"United Kingdom",topics:[1]},{title:"North Yorkshire chippy to open restaurant in China",country:"China",topics:[2]},{title:"Deadly earthquake hits China's Sichuan province",country:"China",topics:[4]},{title:"Nike pulls Betsy Ross flag trainer 'after Kaepernick complaint'",country:"United States",topics:[6]},{title:"French storm: Hail batters south-east France",country:"France",topics:[4]},{title:"Mangalore: Inquiry ordered after India plane skids off runway",country:"India",topics:[4]}];var l=r(3),f=r.n(l);var p=r(22)({host:"qxopu2.stackhero-network.com",port:29015,user:"admin",password:"asdf",db:"test",ssl:!0}),h=c()(),y=r(23).createServer(h);h.use(a()()),h.use(c.a.static(o.a.join(process.env.PWD,"static"))),h.get("/api/articles",function(e,n){p.table("articles").run().then(function(e){var r,t,o=(t=1,(r=e).forEach(function(e,n){r[n].date=f()().subtract(t,"minutes"),t+=1}),r);n.json(o)}).error(function(e){console.log(e)})}),h.get("/*",function(e,n){n.sendFile(o.a.resolve("./static/index.html"),function(e){e&&n.status(500).send(e)})});var v,b=process.env.PORT||4e3,m=r(24)(y);y.listen(b,function(){console.log("Listening at ".concat(b))}),v=m,p.table("articles_new").changes({includeTypes:!0,squash:!0}).run().then(function(e){e.each(function(e,n){if(e)throw e;v.emit("new_article",n)})}).error(function(e){console.log(e)}),function(e,n){u(e),function e(n,r,t){var o=r,i=d[o];i.date=new Date,setTimeout(function(){n.table("articles_new").insert(i).run().then(function(e){}).error(function(e){console.log("error occurred ",e)}),(o+=1)<5?e(n,o,t):(u(n),t.emit("db_reset"))},2e3)}(e,0,n)}(p,m)}]));
//# sourceMappingURL=server.bundle.js.map