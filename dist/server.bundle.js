!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){function t(e){var t=require("./"+e+"."+o+".hot-update.js");!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===v&&D()}(t.id,t.modules)}var n,r=!0,o="82ce08e8193fdbb56c24",i={},c=[],s=[];function a(e){var t=k[e];if(!t)return q;var r=function(r){return t.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),q(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return q[e]},set:function(t){q[e]=t}}};for(var i in q)Object.prototype.hasOwnProperty.call(q,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&p("prepare"),v++,q.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===d&&(b[e]||_(e),0===v&&0===m&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),q.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:O,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:i[e]};return n=void 0,t}var u=[],d="idle";function p(e){d=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,h,y,m=0,v=0,b={},g={},w={};function x(e){return+e+""===e?+e:e}function j(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(){try{var e=require("./"+o+".hot-update.json")}catch(e){return Promise.resolve()}return Promise.resolve(e)}().then(function(e){if(!e)return p("idle"),null;g={},b={},w=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});h={};return _(0),"prepare"===d&&0===v&&0===m&&D(),t})}function _(e){w[e]?(g[e]=!0,m++,t(e)):b[e]=!0}function D(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return O(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(x(n));e.resolve(t)}}function O(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,s,a,l;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=k[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=k[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),f(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var _;l=x(j);var D=!1,O=!1,P=!1,I="";switch((_=h[j]?u(l):{type:"disposed",moduleId:j}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(_),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return p("abort"),Promise.reject(D);if(O)for(l in b[l]=h[l],f(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(m[l]||(m[l]=[]),f(m[l],_.outdatedDependencies[l]));P&&(f(v,[_.moduleId]),b[l]=g)}var B,U=[];for(r=0;r<v.length;r++)l=v[r],k[l]&&k[l].hot._selfAccepted&&U.push({module:l,errorHandler:k[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,S,E=v.slice();E.length>0;)if(l=E.pop(),a=k[l]){var C={},T=a.hot._disposeHandlers;for(s=0;s<T.length;s++)(n=T[s])(C);for(i[l]=C,a.hot.active=!1,delete k[l],delete m[l],s=0;s<a.children.length;s++){var H=k[a.children[s]];H&&((B=H.parents.indexOf(l))>=0&&H.parents.splice(B,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=k[l]))for(S=m[l],s=0;s<S.length;s++)M=S[s],(B=a.children.indexOf(M))>=0&&a.children.splice(B,1);for(l in p("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var G=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(a=k[l])){S=m[l];var R=[];for(r=0;r<S.length;r++)if(M=S[r],n=a.hot._acceptedDependencies[M]){if(-1!==R.indexOf(n))continue;R.push(n)}for(r=0;r<R.length;r++){n=R[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:e}),t.ignoreErrored||G||(G=e)}}}for(r=0;r<U.length;r++){var F=U[r];l=F.module,c=[l];try{q(l)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||G||(G=n),G||(G=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||G||(G=e)}}return G?(p("fail"),Promise.reject(G)):(p("idle"),new Promise(function(e){e(v)}))}var k={};function q(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:l(t),parents:(s=c,c=[],s),children:[]};return e[t].call(n.exports,n,n.exports,a(t)),n.l=!0,n.exports}return q.m=e,q.c=k,q.d=function(e,t,n){q.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},q.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},q.t=function(e,t){if(1&t&&(e=q(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(q.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)q.d(n,r,function(t){return e[t]}.bind(null,r));return n},q.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return q.d(t,"a",t),t},q.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},q.p="",q.h=function(){return o},a(5)(q.s=5)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("moment")},function(e,t,n){e.exports=n(26)},function(e,t,n){"use strict";n(7);var r,o=(r=n(22))&&r.__esModule?r:{default:r};o.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),o.default._babelPolyfill=!0},function(e,t,n){"use strict";n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21)},function(e,t){e.exports=require("core-js/es6")},function(e,t){e.exports=require("core-js/fn/array/includes")},function(e,t){e.exports=require("core-js/fn/array/flat-map")},function(e,t){e.exports=require("core-js/fn/string/pad-start")},function(e,t){e.exports=require("core-js/fn/string/pad-end")},function(e,t){e.exports=require("core-js/fn/string/trim-start")},function(e,t){e.exports=require("core-js/fn/string/trim-end")},function(e,t){e.exports=require("core-js/fn/symbol/async-iterator")},function(e,t){e.exports=require("core-js/fn/object/get-own-property-descriptors")},function(e,t){e.exports=require("core-js/fn/object/values")},function(e,t){e.exports=require("core-js/fn/object/entries")},function(e,t){e.exports=require("core-js/fn/promise/finally")},function(e,t){e.exports=require("core-js/web")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("core-js/library/fn/global")},function(e,t){e.exports=require("rethinkdbdash")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t,n){"use strict";n.r(t);n(6);var r=n(0),o=n.n(r),i=n(1),c=n.n(i),s=n(2),a=n.n(s),l=n(3);n.n(l).a.config();var u={host:process.env.DB_HOST,port:process.env.DB_PORT,user:process.env.DB_USER,password:process.env.DB_PASSWORD,db:process.env.DB_DB,ssl:!0};function d(e){e.table("articles_new").delete().run().then(function(e){console.log(e)}).error(function(e){console.log(e)})}var p=[{title:"Russia to release whales from 'jail' in far east after outcry",topics:[5],country:"Russia"},{title:"Why is there a Little Germany in Bradford?",topics:[5],country:"Germany"},{title:"EU Commission: France and Germany differ on Brussels' top job",topics:[1],country:"Germany"},{title:"Colonia Dignidad: Germany to compensate Chile commune victims",topics:[1],country:"Germany"},{title:"Germany sex trafficking: Thai forced prostitution trial begins",topics:[7],country:"Germany"},{title:"Cornwall man charged with UK and US bomb threat hoaxes",topics:[4,7],country:"United States"},{title:"Tan France: Queer Eye star 'bleached skin as a child'",topics:[5],country:"France"},{title:"GE to cut over 1,000 jobs in France",topics:[3],country:"France"},{title:"China rains: Thousands stranded in southern China",topics:[4],country:"China"},{title:"US-Mexico talks: Trump hails deal on migrants to avoid tariffs",topics:[1],country:"Mexico"},{title:"New York Pride: Bumper crowds attend LGBT march",topics:[5],country:"United States"},{title:"Brazil violence: Gunmen kill 11 people in bar in Belém",topics:[4,7],country:"Brazil"},{title:"First autogyro round-the-world trip completed by Larne pilot",topics:[8],country:"United States"},{title:"British soldier L/Cpl Darren Jones 'drowns in France'",topics:[4],country:"France"},{title:"What is India's caste system?",topics:[5],country:"India"},{title:"Queen's former Malta home Villa Guardamangia on sale",topics:[3],country:"United Kingdom"},{title:"D-Day veteran, 95, parachutes into France to mark anniversary",topics:[5],country:"France"},{title:"Jeremy Hunt would not allow UK break-up",topics:[1],country:"United Kingdom"},{title:"France's MeToo creator on trial for defaming man she accused",topics:[5],country:"France"},{title:"Brazil's Barão de Cocais waits as dam nearby at risk of collapse",topics:[4],country:"Brazil"},{title:"Venezuela crisis: US announces sanctions against Maduro's son",topics:[1,3],country:"United States"},{title:"Being black in Nazi Germany",topics:[5],country:"Germany"},{title:"US and Russia clash over power grid 'hack attacks'",topics:[1],country:"Russia"},{title:"Italy migrants: Rescue ship reaches Lampedusa despite warnings",topics:[4],country:"Netherlands"},{title:"French police under fire over man missing at Nantes party",topics:[4],country:"Netherlands"},{title:"Ex-Interpol chief pleads guilty to corruption, China says",topics:[7],country:"China"},{title:"Conservative leadership: Ruth Davidson now backing Jeremy Hunt",topics:[1],country:"United Kingdom"},{title:"Trump offers 'anything' to help Canada in rift with China",topics:[1,3],country:"China"},{title:"The death of a Tunisian poet and the hidden story of Arab mental health",topics:[5],country:"Netherlands"},{title:"Italy migrants: Pressure builds over Lampedusa rescue ship",topics:[1,4],country:"Netherlands"},{title:"UK's special forces set for new Russia mission",topics:[4],country:"Russia"},{title:"Republicans clash with Trump over Mexico tariffs",topics:[1,3],country:"Mexico"},{title:"Viewpoint: How the British reshaped India's caste system",topics:[1,5],country:"India"},{title:"Aliny Godinho stabbing: Mum 'murdered on school run'",topics:[7],country:"Brazil"},{title:"India encephalitis death toll rises to 103",topics:[4],country:"India"},{title:"Brexit: Survival of UK in doubt, Gordon Brown warns",topics:[1,3],country:"United Kingdom"},{title:"Russia Golunov case: Putin sacks top Moscow police officials",topics:[1],country:"Russia"},{title:"Mexico dismantles three synthetic drug labs in Sinaloa",topics:[7],country:"Mexico"},{title:"Mexico City drops gender-specific school uniforms",topics:[5],country:"Mexico"},{title:"Fears for elephants facing 1,900 mile train journey in India",topics:[5],country:"India"},{title:"Canada resettled more refugees than any other country in 2018",topics:[4],country:"United States"},{title:"Xi Jinping visits N Korea to boost China's ties with Kim",topics:[1],country:"China"},{title:"US-Mexico talks: Agreement to avoid tariffs reached, says Trump",topics:[1,2],country:"Mexico"},{title:"China’s history of extraordinary rendition",topics:[5],country:"China"},{title:"What is the G20 summit, and what do world leaders talk about?",topics:[1,3],country:"United Kingdom"},{title:"India to Wales: The trafficked children rescued from the circus",topics:[7],country:"India"},{title:"Majority in Brazil's top court to make homophobia and transphobia crimes",topics:[7],country:"Brazil"},{title:"Brazil jail violence: Forty inmates found dead at separate prisons",topics:[4,7],country:"Brazil"},{title:"Ukraine's landmines endangering children",topics:[4],country:"Russia"},{title:"Endgame nears for British Steel bids",topics:[3],country:"Netherlands"}];var f=n(4),h=n.n(f);var y=n(23)(u),m=c()(),v=n(24).createServer(m);m.use(a()()),m.use(c.a.static(o.a.join(process.env.PWD,"static"))),m.get("/api/articles",function(e,t){y.table("articles").run().then(function(e){var n,r,o=(r=1,(n=e).forEach(function(e,t){n[t].date=h()().subtract(r,"minutes"),r+=1}),n);t.json(o)}).error(function(e){console.log(e)})}),m.get("/*",function(e,t){t.sendFile(o.a.resolve("./static/index.html"),function(e){e&&t.status(500).send(e)})});var b,g=process.env.PORT||4e3,w=n(25)(v);v.listen(g,function(){console.log("Listening at ".concat(g))}),b=w,y.table("articles_new").changes({includeTypes:!0,squash:!0}).run().then(function(e){e.each(function(e,t){if(e)throw e;b.emit("new_article",t)})}).error(function(e){console.log(e)}),function(e,t){d(e),function e(t,n,r){var o=n,i=p[o];i.date=new Date,setTimeout(function(){t.table("articles_new").insert(i).run().then(function(){}).error(function(e){console.log("error occurred ",e)}),(o+=1)<p.length?e(t,o,r):(d(t),r.emit("db_reset"),e(t,0,r))},2e3)}(e,0,t)}(y,w)}]));
//# sourceMappingURL=server.bundle.js.map