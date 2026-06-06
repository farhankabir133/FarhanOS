(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rf={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Qb(){if(Gg)return Po;Gg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var jg;function Jb(){return jg||(jg=1,rf.exports=Qb()),rf.exports}var d=Jb(),of={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function $b(){if(Vg)return gt;Vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;function E(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function y(A,k,de){this.props=A,this.context=k,this.refs=M,this.updater=de||w}y.prototype.isReactComponent={},y.prototype.setState=function(A,k){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,k,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function N(){}N.prototype=y.prototype;function I(A,k,de){this.props=A,this.context=k,this.refs=M,this.updater=de||w}var z=I.prototype=new N;z.constructor=I,D(z,y.prototype),z.isPureReactComponent=!0;var V=Array.isArray;function O(){}var H={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function F(A,k,de){var ye=de.ref;return{$$typeof:o,type:A,key:k,ref:ye!==void 0?ye:null,props:de}}function J(A,k){return F(A.type,k,A.props)}function G(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function $(A){var k={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(de){return k[de]})}var ce=/\/+/g;function fe(A,k){return typeof A=="object"&&A!==null&&A.key!=null?$(""+A.key):k.toString(36)}function q(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(O,O):(A.status="pending",A.then(function(k){A.status==="pending"&&(A.status="fulfilled",A.value=k)},function(k){A.status==="pending"&&(A.status="rejected",A.reason=k)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function U(A,k,de,ye,we){var te=typeof A;(te==="undefined"||te==="boolean")&&(A=null);var Ee=!1;if(A===null)Ee=!0;else switch(te){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(A.$$typeof){case o:case t:Ee=!0;break;case S:return Ee=A._init,U(Ee(A._payload),k,de,ye,we)}}if(Ee)return we=we(A),Ee=ye===""?"."+fe(A,0):ye,V(we)?(de="",Ee!=null&&(de=Ee.replace(ce,"$&/")+"/"),U(we,k,de,"",function(Qe){return Qe})):we!=null&&(G(we)&&(we=J(we,de+(we.key==null||A&&A.key===we.key?"":(""+we.key).replace(ce,"$&/")+"/")+Ee)),k.push(we)),1;Ee=0;var Se=ye===""?".":ye+":";if(V(A))for(var He=0;He<A.length;He++)ye=A[He],te=Se+fe(ye,He),Ee+=U(ye,k,de,te,we);else if(He=E(A),typeof He=="function")for(A=He.call(A),He=0;!(ye=A.next()).done;)ye=ye.value,te=Se+fe(ye,He++),Ee+=U(ye,k,de,te,we);else if(te==="object"){if(typeof A.then=="function")return U(q(A),k,de,ye,we);throw k=String(A),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function B(A,k,de){if(A==null)return A;var ye=[],we=0;return U(A,ye,"","",function(te){return k.call(de,te,we++)}),ye}function le(A){if(A._status===-1){var k=A._result;k=k(),k.then(function(de){(A._status===0||A._status===-1)&&(A._status=1,A._result=de)},function(de){(A._status===0||A._status===-1)&&(A._status=2,A._result=de)}),A._status===-1&&(A._status=0,A._result=k)}if(A._status===1)return A._result.default;throw A._result}var ge=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},ae={map:B,forEach:function(A,k,de){B(A,function(){k.apply(this,arguments)},de)},count:function(A){var k=0;return B(A,function(){k++}),k},toArray:function(A){return B(A,function(k){return k})||[]},only:function(A){if(!G(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return gt.Activity=b,gt.Children=ae,gt.Component=y,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=I,gt.StrictMode=s,gt.Suspense=g,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,gt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return H.H.useMemoCache(A)}},gt.cache=function(A){return function(){return A.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(A,k,de){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ye=D({},A.props),we=A.key;if(k!=null)for(te in k.key!==void 0&&(we=""+k.key),k)!R.call(k,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&k.ref===void 0||(ye[te]=k[te]);var te=arguments.length-2;if(te===1)ye.children=de;else if(1<te){for(var Ee=Array(te),Se=0;Se<te;Se++)Ee[Se]=arguments[Se+2];ye.children=Ee}return F(A.type,we,ye)},gt.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},gt.createElement=function(A,k,de){var ye,we={},te=null;if(k!=null)for(ye in k.key!==void 0&&(te=""+k.key),k)R.call(k,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(we[ye]=k[ye]);var Ee=arguments.length-2;if(Ee===1)we.children=de;else if(1<Ee){for(var Se=Array(Ee),He=0;He<Ee;He++)Se[He]=arguments[He+2];we.children=Se}if(A&&A.defaultProps)for(ye in Ee=A.defaultProps,Ee)we[ye]===void 0&&(we[ye]=Ee[ye]);return F(A,te,we)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(A){return{$$typeof:m,render:A}},gt.isValidElement=G,gt.lazy=function(A){return{$$typeof:S,_payload:{_status:-1,_result:A},_init:le}},gt.memo=function(A,k){return{$$typeof:p,type:A,compare:k===void 0?null:k}},gt.startTransition=function(A){var k=H.T,de={};H.T=de;try{var ye=A(),we=H.S;we!==null&&we(de,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(O,ge)}catch(te){ge(te)}finally{k!==null&&de.types!==null&&(k.types=de.types),H.T=k}},gt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},gt.use=function(A){return H.H.use(A)},gt.useActionState=function(A,k,de){return H.H.useActionState(A,k,de)},gt.useCallback=function(A,k){return H.H.useCallback(A,k)},gt.useContext=function(A){return H.H.useContext(A)},gt.useDebugValue=function(){},gt.useDeferredValue=function(A,k){return H.H.useDeferredValue(A,k)},gt.useEffect=function(A,k){return H.H.useEffect(A,k)},gt.useEffectEvent=function(A){return H.H.useEffectEvent(A)},gt.useId=function(){return H.H.useId()},gt.useImperativeHandle=function(A,k,de){return H.H.useImperativeHandle(A,k,de)},gt.useInsertionEffect=function(A,k){return H.H.useInsertionEffect(A,k)},gt.useLayoutEffect=function(A,k){return H.H.useLayoutEffect(A,k)},gt.useMemo=function(A,k){return H.H.useMemo(A,k)},gt.useOptimistic=function(A,k){return H.H.useOptimistic(A,k)},gt.useReducer=function(A,k,de){return H.H.useReducer(A,k,de)},gt.useRef=function(A){return H.H.useRef(A)},gt.useState=function(A){return H.H.useState(A)},gt.useSyncExternalStore=function(A,k,de){return H.H.useSyncExternalStore(A,k,de)},gt.useTransition=function(){return H.H.useTransition()},gt.version="19.2.7",gt}var Xg;function Vh(){return Xg||(Xg=1,of.exports=$b()),of.exports}var Ue=Vh(),lf={exports:{}},Io={},cf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function ey(){return Wg||(Wg=1,(function(o){function t(U,B){var le=U.length;U.push(B);e:for(;0<le;){var ge=le-1>>>1,ae=U[ge];if(0<l(ae,B))U[ge]=B,U[le]=ae,le=ge;else break e}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],le=U.pop();if(le!==B){U[0]=le;e:for(var ge=0,ae=U.length,A=ae>>>1;ge<A;){var k=2*(ge+1)-1,de=U[k],ye=k+1,we=U[ye];if(0>l(de,le))ye<ae&&0>l(we,de)?(U[ge]=we,U[ye]=le,ge=ye):(U[ge]=de,U[k]=le,ge=k);else if(ye<ae&&0>l(we,le))U[ge]=we,U[ye]=le,ge=ye;else break e}}return B}function l(U,B){var le=U.sortIndex-B.sortIndex;return le!==0?le:U.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();o.unstable_now=function(){return h.now()-m}}var g=[],p=[],S=1,b=null,x=3,E=!1,w=!1,D=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function z(U){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=U)s(p),B.sortIndex=B.expirationTime,t(g,B);else break;B=i(p)}}function V(U){if(D=!1,z(U),!w)if(i(g)!==null)w=!0,O||(O=!0,$());else{var B=i(p);B!==null&&q(V,B.startTime-U)}}var O=!1,H=-1,R=5,F=-1;function J(){return M?!0:!(o.unstable_now()-F<R)}function G(){if(M=!1,O){var U=o.unstable_now();F=U;var B=!0;try{e:{w=!1,D&&(D=!1,N(H),H=-1),E=!0;var le=x;try{t:{for(z(U),b=i(g);b!==null&&!(b.expirationTime>U&&J());){var ge=b.callback;if(typeof ge=="function"){b.callback=null,x=b.priorityLevel;var ae=ge(b.expirationTime<=U);if(U=o.unstable_now(),typeof ae=="function"){b.callback=ae,z(U),B=!0;break t}b===i(g)&&s(g),z(U)}else s(g);b=i(g)}if(b!==null)B=!0;else{var A=i(p);A!==null&&q(V,A.startTime-U),B=!1}}break e}finally{b=null,x=le,E=!1}B=void 0}}finally{B?$():O=!1}}}var $;if(typeof I=="function")$=function(){I(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=G,$=function(){fe.postMessage(null)}}else $=function(){y(G,0)};function q(U,B){H=y(function(){U(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(U){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var le=x;x=B;try{return U()}finally{x=le}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var le=x;x=U;try{return B()}finally{x=le}},o.unstable_scheduleCallback=function(U,B,le){var ge=o.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ge+le:ge):le=ge,U){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=le+ae,U={id:S++,callback:B,priorityLevel:U,startTime:le,expirationTime:ae,sortIndex:-1},le>ge?(U.sortIndex=le,t(p,U),i(g)===null&&U===i(p)&&(D?(N(H),H=-1):D=!0,q(V,le-ge))):(U.sortIndex=ae,t(g,U),w||E||(w=!0,O||(O=!0,$()))),U},o.unstable_shouldYield=J,o.unstable_wrapCallback=function(U){var B=x;return function(){var le=x;x=B;try{return U.apply(this,arguments)}finally{x=le}}}})(uf)),uf}var qg;function ty(){return qg||(qg=1,cf.exports=ey()),cf.exports}var df={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function ny(){if(Yg)return Fn;Yg=1;var o=Vh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,S){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:g,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(g,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(g,p,null,S)},Fn.flushSync=function(g){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=S,s.d.f()}},Fn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Fn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Fn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var S=p.as,b=m(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:E}):S==="script"&&s.d.X(g,{crossOrigin:b,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Fn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,b=m(S,p.crossOrigin);s.d.L(g,S,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(g,p){if(typeof g=="string")if(p){var S=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Fn.requestFormReset=function(g){s.d.r(g)},Fn.unstable_batchedUpdates=function(g,p){return g(p)},Fn.useFormState=function(g,p,S){return h.H.useFormState(g,p,S)},Fn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Fn.version="19.2.7",Fn}var Zg;function iy(){if(Zg)return df.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),df.exports=ny(),df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function ay(){if(Kg)return Io;Kg=1;var o=ty(),t=Vh(),i=iy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,r=f;break}if(C===r){_=!0,r=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,r=u;break}if(C===r){_=!0,r=f,a=u;break}C=C.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),I=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case I:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case R:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}var q=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ge=[],ae=-1;function A(e){return{current:e}}function k(e){0>ae||(e.current=ge[ae],ge[ae]=null,ae--)}function de(e,n){ae++,ge[ae]=e.current,e.current=n}var ye=A(null),we=A(null),te=A(null),Ee=A(null);function Se(e,n){switch(de(te,n),de(we,e),de(ye,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dg(n),e=fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(ye),de(ye,e)}function He(){k(ye),k(we),k(te)}function Qe(e){e.memoizedState!==null&&de(Ee,e);var n=ye.current,a=fg(n,e.type);n!==a&&(de(we,e),de(ye,a))}function Ke(e){we.current===e&&(k(ye),k(we)),Ee.current===e&&(k(Ee),Lo._currentValue=le)}var ht,at;function tt(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+at}var Mt=!1;function ut(e,n){if(!e||Mt)return"";Mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(he){var ue=he}Reflect.construct(e,[],Me)}else{try{Me.call()}catch(he){ue=he}e.call(Me.prototype)}}else{try{throw Error()}catch(he){ue=he}(Me=e())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(he){if(he&&ue&&typeof he.stack=="string")return[he.stack,ue.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var j=_.split(`
`),oe=C.split(`
`);for(u=r=0;r<j.length&&!j[r].includes("DetermineComponentFrameRoot");)r++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(r===j.length||u===oe.length)for(r=j.length-1,u=oe.length-1;1<=r&&0<=u&&j[r]!==oe[u];)u--;for(;1<=r&&0<=u;r--,u--)if(j[r]!==oe[u]){if(r!==1||u!==1)do if(r--,u--,0>u||j[r]!==oe[u]){var ve=`
`+j[r].replace(" at new "," at ");return e.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",e.displayName)),ve}while(1<=r&&0<=u);break}}}finally{Mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tt(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return e.child!==n&&n!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return ut(e.type,!1);case 11:return ut(e.type.render,!1);case 1:return ut(e.type,!0);case 31:return tt("Activity");default:return""}}function it(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var _t=Object.prototype.hasOwnProperty,W=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,et=o.unstable_shouldYield,yt=o.unstable_requestPaint,De=o.unstable_now,Zt=o.unstable_getCurrentPriorityLevel,L=o.unstable_ImmediatePriority,T=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,_e=o.unstable_LowPriority,Te=o.unstable_IdlePriority,ze=o.log,Ce=o.unstable_setDisableYieldValue,pe=null,me=null;function Fe(e){if(typeof ze=="function"&&Ce(e),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,e)}catch{}}var Be=Math.clz32?Math.clz32:rt,Pe=Math.log,Oe=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(Pe(e)/Oe|0)|0}var ot=256,mt=262144,Y=4194304;function Ne(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?u=Ne(r):(_&=C,_!==0?u=Ne(_):a||(a=C&~e,a!==0&&(u=Ne(a))))):(C=r&~f,C!==0?u=Ne(C):_!==0?u=Ne(_):a||(a=r&~e,a!==0&&(u=Ne(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ge(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function qe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function lt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function We(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,j=e.expirationTimes,oe=e.hiddenUpdates;for(a=_&~a;0<a;){var ve=31-Be(a),Me=1<<ve;C[ve]=0,j[ve]=-1;var ue=oe[ve];if(ue!==null)for(oe[ve]=null,ve=0;ve<ue.length;ve++){var he=ue[ve];he!==null&&(he.lane&=-536870913)}a&=~Me}r!==0&&Lt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Lt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Be(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Nn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Be(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Dn(e,n){var a=n&-n;return a=(a&42)!==0?1:pi(a),(a&(e.suspendedLanes|n))!==0?0:a}function pi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function za(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function Oa(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var kt=Math.random().toString(36).slice(2),ln="__reactFiber$"+kt,mn="__reactProps$"+kt,Ci="__reactContainer$"+kt,Gn="__reactEvents$"+kt,Vi="__reactListeners$"+kt,sa="__reactHandles$"+kt,gs="__reactResources$"+kt,Ni="__reactMarker$"+kt;function xs(e){delete e[ln],delete e[mn],delete e[Gn],delete e[Vi],delete e[sa]}function Xi(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_g(e);e!==null;){if(a=e[ln])return a;e=_g(e)}return n}e=a,a=e.parentNode}return null}function ra(e){if(e=e[ln]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Di(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function mi(e){var n=e[gs];return n||(n=e[gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[Ni]=!0}var gn=new Set,v={};function P(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(v[e]=n,e=0;e<n.length;e++)gn.add(n[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Ie={};function je(e){return _t.call(Ie,e)?!0:_t.call(ee,e)?!1:K.test(e)?Ie[e]=!0:(ee[e]=!0,!1)}function Q(e,n,a){if(je(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ke(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ft(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zt(e){if(!e._valueTracker){var n=ft(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function sn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ft(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Gt(e){return e.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,r,u,f,_,C){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ye(n)):e.value!==""+Ye(n)&&(e.value=""+Ye(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Et(e,_,Ye(n)):a!=null?Et(e,_,Ye(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ye(C):e.removeAttribute("name")}function In(e,n,a,r,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){zt(e);return}a=a!=null?""+Ye(a):"",n=n!=null?""+Ye(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),zt(e)}function Et(e,n,a){n==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ii(e,n,a){if(n!=null&&(n=""+Ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ye(a):""}function Li(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(q(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ye(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),zt(e)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||jt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ui(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&rn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&rn(e,f,n[f])}function Bt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function up(e){var n=ra(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[mn]||null;if(!u)throw Error(s(90));Xe(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&sn(r)}break e;case"textarea":ii(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(e,!!a.multiple,n,!1)}}}var au=!1;function dp(e,n,a){if(au)return e(n,a);au=!0;try{var r=e(n);return r}finally{if(au=!1,(Ys!==null||Zs!==null)&&(Hl(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,up(n),e)))for(n=0;n<e.length;n++)up(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[mn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(la)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{su=!1}var Ia=null,ru=null,tl=null;function fp(){if(tl)return tl;var e,n=ru,a=n.length,r,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return tl=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function hp(){return!1}function Wn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:hp,this.isPropagationStopped=hp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Wn(_s),Kr=b({},_s,{view:0,detail:0}),Zv=Wn(Kr),ou,lu,Qr,sl=b({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(ou=e.screenX-Qr.screenX,lu=e.screenY-Qr.screenY):lu=ou=0,Qr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),pp=Wn(sl),Kv=b({},sl,{dataTransfer:0}),Qv=Wn(Kv),Jv=b({},Kr,{relatedTarget:0}),cu=Wn(Jv),$v=b({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=Wn($v),t_=b({},_s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n_=Wn(t_),i_=b({},_s,{data:0}),mp=Wn(i_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=r_[e])?!!n[e]:!1}function uu(){return o_}var l_=b({},Kr,{key:function(e){if(e.key){var n=a_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c_=Wn(l_),u_=b({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Wn(u_),d_=b({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),f_=Wn(d_),h_=b({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=Wn(h_),m_=b({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=Wn(m_),x_=b({},_s,{newState:0,oldState:0}),v_=Wn(x_),__=[9,13,27,32],du=la&&"CompositionEvent"in window,Jr=null;la&&"documentMode"in document&&(Jr=document.documentMode);var b_=la&&"TextEvent"in window&&!Jr,xp=la&&(!du||Jr&&8<Jr&&11>=Jr),vp=" ",_p=!1;function bp(e,n){switch(e){case"keyup":return __.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function y_(e,n){switch(e){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(_p=!0,vp);case"textInput":return e=n.data,e===vp&&_p?null:e;default:return null}}function S_(e,n){if(Ks)return e==="compositionend"||!du&&bp(e,n)?(e=fp(),tl=ru=Ia=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!M_[e.type]:n==="textarea"}function Mp(e,n,a,r){Ys?Zs?Zs.push(r):Zs=[r]:Ys=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var $r=null,eo=null;function E_(e){sg(e,0)}function rl(e){var n=Di(e);if(sn(n))return e}function Ep(e,n){if(e==="change")return n}var Tp=!1;if(la){var fu;if(la){var hu="oninput"in document;if(!hu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),hu=typeof Ap.oninput=="function"}fu=hu}else fu=!1;Tp=fu&&(!document.documentMode||9<document.documentMode)}function wp(){$r&&($r.detachEvent("onpropertychange",Rp),eo=$r=null)}function Rp(e){if(e.propertyName==="value"&&rl(eo)){var n=[];Mp(n,eo,e,iu(e)),dp(E_,n)}}function T_(e,n,a){e==="focusin"?(wp(),$r=n,eo=a,$r.attachEvent("onpropertychange",Rp)):e==="focusout"&&wp()}function A_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(eo)}function w_(e,n){if(e==="click")return rl(n)}function R_(e,n){if(e==="input"||e==="change")return rl(n)}function C_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:C_;function to(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!_t.call(n,u)||!si(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var a=Cp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$t(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$t(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var N_=la&&"documentMode"in document&&11>=document.documentMode,Qs=null,mu=null,no=null,gu=!1;function Up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Qs==null||Qs!==$t(r)||(r=Qs,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&to(no,r)||(no=r,r=Yl(mu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Qs)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},xu={},zp={};la&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ys(e){if(xu[e])return xu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return xu[e]=n[a];return e}var Op=ys("animationend"),Pp=ys("animationiteration"),Ip=ys("animationstart"),D_=ys("transitionrun"),L_=ys("transitionstart"),U_=ys("transitioncancel"),Fp=ys("transitionend"),Bp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function zi(e,n){Bp.set(e,n),P(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],$s=0,_u=0;function ll(){for(var e=$s,n=_u=$s=0;n<e;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&kp(a,u,f)}}function cl(e,n,a,r){gi[$s++]=e,gi[$s++]=n,gi[$s++]=a,gi[$s++]=r,_u|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bu(e,n,a,r){return cl(e,n,a,r),ul(e)}function Ss(e,n){return cl(e,null,null,n),ul(e)}function kp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Be(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<To)throw To=0,Cd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function z_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,r){return new z_(e,n,a,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")yu(e)&&(_=1);else if(typeof e=="string")_=Bb(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=ri(31,a,n,u),e.elementType=F,e.lanes=f,e;case D:return Ms(a.children,u,f,n);case M:_=8,u|=24;break;case y:return e=ri(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case V:return e=ri(13,a,n,u),e.elementType=V,e.lanes=f,e;case O:return e=ri(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:_=10;break e;case N:_=9;break e;case z:_=11;break e;case H:_=14;break e;case R:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ri(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Ms(e,n,a,r){return e=ri(7,e,r,n),e.lanes=a,e}function Su(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function Gp(e){var n=ri(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jp=new WeakMap;function xi(e,n){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:it(n)},jp.set(e,n),n)}return{value:e,source:n,stack:it(n)}}var tr=[],nr=0,fl=null,io=0,vi=[],_i=0,Fa=null,qi=1,Yi="";function ua(e,n){tr[nr++]=io,tr[nr++]=fl,fl=e,io=n}function Vp(e,n,a){vi[_i++]=qi,vi[_i++]=Yi,vi[_i++]=Fa,Fa=e;var r=qi;e=Yi;var u=32-Be(r)-1;r&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,qi=1<<32-Be(n)+u|a<<u|r,Yi=f+e}else qi=1<<f|a<<u|r,Yi=e}function Eu(e){e.return!==null&&(ua(e,1),Vp(e,1,0))}function Tu(e){for(;e===fl;)fl=tr[--nr],tr[nr]=null,io=tr[--nr],tr[nr]=null;for(;e===Fa;)Fa=vi[--_i],vi[_i]=null,Yi=vi[--_i],vi[_i]=null,qi=vi[--_i],vi[_i]=null}function Xp(e,n){vi[_i++]=qi,vi[_i++]=Yi,vi[_i++]=Fa,qi=n.id,Yi=n.overflow,Fa=e}var Ln=null,nn=null,Ct=!1,Ba=null,bi=!1,Au=Error(s(519));function ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(xi(n,e)),Au}function Wp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[mn]=r,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)At(wo[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),In(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Li(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||cg(n.textContent,a)?(r.popover!=null&&(At("beforetoggle",n),At("toggle",n)),r.onScroll!=null&&At("scroll",n),r.onScrollEnd!=null&&At("scrollend",n),r.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||ka(e,!0)}function qp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Ln=Ln.return}}function ir(e){if(e!==Ln)return!1;if(!Ct)return qp(e),Ct=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vd(e.type,e.memoizedProps)),a=!a),a&&nn&&ka(e),qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=vg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=vg(e)}else n===27?(n=nn,es(e.type)?(e=Zd,Zd=null,nn=e):nn=n):nn=Ln?Si(e.stateNode.nextSibling):null;return!0}function Es(){nn=Ln=null,Ct=!1}function wu(){var e=Ba;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ba=null),e}function ao(e){Ba===null?Ba=[e]:Ba.push(e)}var Ru=A(null),Ts=null,da=null;function Ha(e,n,a){de(Ru,n._currentValue),n._currentValue=a}function fa(e){e._currentValue=Ru.current,k(Ru)}function Cu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var j=0;j<n.length;j++)if(C.context===n[j]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Cu(f.return,a,e),r||(_=null);break e}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Cu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var C=u.type;si(u.pendingProps.value,_.value)||(e!==null?e.push(C):e=[C])}}else if(u===Ee.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Nu(n,e,a,r),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Yp(Ts,e)}function pl(e,n){return Ts===null&&As(e),Yp(e,n)}function Yp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(e===null)throw Error(s(308));da=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else da=da.next=n;return a}var O_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},P_=o.unstable_scheduleCallback,I_=o.unstable_NormalPriority,xn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new O_,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&P_(I_,function(){e.controller.abort()})}var ro=null,Lu=0,sr=0,rr=null;function F_(e,n){if(ro===null){var a=ro=[];Lu=0,sr=Od(),rr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(Zp,Zp),n}function Zp(){if(--Lu===0&&ro!==null){rr!==null&&(rr.status="fulfilled");var e=ro;ro=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function B_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Kp=U.S;U.S=function(e,n){U0=De(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&F_(e,n),Kp!==null&&Kp(e,n)};var ws=A(null);function Uu(){var e=ws.current;return e!==null?e:en.pooledCache}function ml(e,n){n===null?de(ws,ws.current):de(ws,n.pool)}function Qp(){var e=Uu();return e===null?null:{parent:xn._currentValue,pool:e}}var or=Error(s(460)),zu=Error(s(474)),gl=Error(s(542)),xl={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw Cs=n,or}}function Rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,or):a}}var Cs=null;function em(){if(Cs===null)throw Error(s(459));var e=Cs;return Cs=null,e}function tm(e){if(e===or||e===gl)throw Error(s(483))}var lr=null,oo=0;function vl(e){var n=oo;return oo+=1,lr===null&&(lr=[]),$p(lr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nm(e){function n(ne,Z){if(e){var se=ne.deletions;se===null?(ne.deletions=[Z],ne.flags|=16):se.push(Z)}}function a(ne,Z){if(!e)return null;for(;Z!==null;)n(ne,Z),Z=Z.sibling;return null}function r(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=ca(ne,Z),ne.index=0,ne.sibling=null,ne}function f(ne,Z,se){return ne.index=se,e?(se=ne.alternate,se!==null?(se=se.index,se<Z?(ne.flags|=67108866,Z):se):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function _(ne){return e&&ne.alternate===null&&(ne.flags|=67108866),ne}function C(ne,Z,se,be){return Z===null||Z.tag!==6?(Z=Su(se,ne.mode,be),Z.return=ne,Z):(Z=u(Z,se),Z.return=ne,Z)}function j(ne,Z,se,be){var nt=se.type;return nt===D?ve(ne,Z,se.props.children,be,se.key):Z!==null&&(Z.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===R&&Rs(nt)===Z.type)?(Z=u(Z,se.props),lo(Z,se),Z.return=ne,Z):(Z=dl(se.type,se.key,se.props,null,ne.mode,be),lo(Z,se),Z.return=ne,Z)}function oe(ne,Z,se,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==se.containerInfo||Z.stateNode.implementation!==se.implementation?(Z=Mu(se,ne.mode,be),Z.return=ne,Z):(Z=u(Z,se.children||[]),Z.return=ne,Z)}function ve(ne,Z,se,be,nt){return Z===null||Z.tag!==7?(Z=Ms(se,ne.mode,be,nt),Z.return=ne,Z):(Z=u(Z,se),Z.return=ne,Z)}function Me(ne,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Su(""+Z,ne.mode,se),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return se=dl(Z.type,Z.key,Z.props,null,ne.mode,se),lo(se,Z),se.return=ne,se;case w:return Z=Mu(Z,ne.mode,se),Z.return=ne,Z;case R:return Z=Rs(Z),Me(ne,Z,se)}if(q(Z)||$(Z))return Z=Ms(Z,ne.mode,se,null),Z.return=ne,Z;if(typeof Z.then=="function")return Me(ne,vl(Z),se);if(Z.$$typeof===I)return Me(ne,pl(ne,Z),se);_l(ne,Z)}return null}function ue(ne,Z,se,be){var nt=Z!==null?Z.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:C(ne,Z,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case E:return se.key===nt?j(ne,Z,se,be):null;case w:return se.key===nt?oe(ne,Z,se,be):null;case R:return se=Rs(se),ue(ne,Z,se,be)}if(q(se)||$(se))return nt!==null?null:ve(ne,Z,se,be,null);if(typeof se.then=="function")return ue(ne,Z,vl(se),be);if(se.$$typeof===I)return ue(ne,Z,pl(ne,se),be);_l(ne,se)}return null}function he(ne,Z,se,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ne=ne.get(se)||null,C(Z,ne,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case E:return ne=ne.get(be.key===null?se:be.key)||null,j(Z,ne,be,nt);case w:return ne=ne.get(be.key===null?se:be.key)||null,oe(Z,ne,be,nt);case R:return be=Rs(be),he(ne,Z,se,be,nt)}if(q(be)||$(be))return ne=ne.get(se)||null,ve(Z,ne,be,nt,null);if(typeof be.then=="function")return he(ne,Z,se,vl(be),nt);if(be.$$typeof===I)return he(ne,Z,se,pl(Z,be),nt);_l(Z,be)}return null}function Ze(ne,Z,se,be){for(var nt=null,Ot=null,Je=Z,bt=Z=0,Rt=null;Je!==null&&bt<se.length;bt++){Je.index>bt?(Rt=Je,Je=null):Rt=Je.sibling;var Pt=ue(ne,Je,se[bt],be);if(Pt===null){Je===null&&(Je=Rt);break}e&&Je&&Pt.alternate===null&&n(ne,Je),Z=f(Pt,Z,bt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt,Je=Rt}if(bt===se.length)return a(ne,Je),Ct&&ua(ne,bt),nt;if(Je===null){for(;bt<se.length;bt++)Je=Me(ne,se[bt],be),Je!==null&&(Z=f(Je,Z,bt),Ot===null?nt=Je:Ot.sibling=Je,Ot=Je);return Ct&&ua(ne,bt),nt}for(Je=r(Je);bt<se.length;bt++)Rt=he(Je,ne,bt,se[bt],be),Rt!==null&&(e&&Rt.alternate!==null&&Je.delete(Rt.key===null?bt:Rt.key),Z=f(Rt,Z,bt),Ot===null?nt=Rt:Ot.sibling=Rt,Ot=Rt);return e&&Je.forEach(function(ss){return n(ne,ss)}),Ct&&ua(ne,bt),nt}function ct(ne,Z,se,be){if(se==null)throw Error(s(151));for(var nt=null,Ot=null,Je=Z,bt=Z=0,Rt=null,Pt=se.next();Je!==null&&!Pt.done;bt++,Pt=se.next()){Je.index>bt?(Rt=Je,Je=null):Rt=Je.sibling;var ss=ue(ne,Je,Pt.value,be);if(ss===null){Je===null&&(Je=Rt);break}e&&Je&&ss.alternate===null&&n(ne,Je),Z=f(ss,Z,bt),Ot===null?nt=ss:Ot.sibling=ss,Ot=ss,Je=Rt}if(Pt.done)return a(ne,Je),Ct&&ua(ne,bt),nt;if(Je===null){for(;!Pt.done;bt++,Pt=se.next())Pt=Me(ne,Pt.value,be),Pt!==null&&(Z=f(Pt,Z,bt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return Ct&&ua(ne,bt),nt}for(Je=r(Je);!Pt.done;bt++,Pt=se.next())Pt=he(Je,ne,bt,Pt.value,be),Pt!==null&&(e&&Pt.alternate!==null&&Je.delete(Pt.key===null?bt:Pt.key),Z=f(Pt,Z,bt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return e&&Je.forEach(function(Kb){return n(ne,Kb)}),Ct&&ua(ne,bt),nt}function Jt(ne,Z,se,be){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case E:e:{for(var nt=se.key;Z!==null;){if(Z.key===nt){if(nt=se.type,nt===D){if(Z.tag===7){a(ne,Z.sibling),be=u(Z,se.props.children),be.return=ne,ne=be;break e}}else if(Z.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===R&&Rs(nt)===Z.type){a(ne,Z.sibling),be=u(Z,se.props),lo(be,se),be.return=ne,ne=be;break e}a(ne,Z);break}else n(ne,Z);Z=Z.sibling}se.type===D?(be=Ms(se.props.children,ne.mode,be,se.key),be.return=ne,ne=be):(be=dl(se.type,se.key,se.props,null,ne.mode,be),lo(be,se),be.return=ne,ne=be)}return _(ne);case w:e:{for(nt=se.key;Z!==null;){if(Z.key===nt)if(Z.tag===4&&Z.stateNode.containerInfo===se.containerInfo&&Z.stateNode.implementation===se.implementation){a(ne,Z.sibling),be=u(Z,se.children||[]),be.return=ne,ne=be;break e}else{a(ne,Z);break}else n(ne,Z);Z=Z.sibling}be=Mu(se,ne.mode,be),be.return=ne,ne=be}return _(ne);case R:return se=Rs(se),Jt(ne,Z,se,be)}if(q(se))return Ze(ne,Z,se,be);if($(se)){if(nt=$(se),typeof nt!="function")throw Error(s(150));return se=nt.call(se),ct(ne,Z,se,be)}if(typeof se.then=="function")return Jt(ne,Z,vl(se),be);if(se.$$typeof===I)return Jt(ne,Z,pl(ne,se),be);_l(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Z!==null&&Z.tag===6?(a(ne,Z.sibling),be=u(Z,se),be.return=ne,ne=be):(a(ne,Z),be=Su(se,ne.mode,be),be.return=ne,ne=be),_(ne)):a(ne,Z)}return function(ne,Z,se,be){try{oo=0;var nt=Jt(ne,Z,se,be);return lr=null,nt}catch(Je){if(Je===or||Je===gl)throw Je;var Ot=ri(29,Je,null,ne.mode);return Ot.lanes=be,Ot.return=ne,Ot}finally{}}}var Ns=nm(!0),im=nm(!1),Ga=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ft&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),kp(e,null,a),n}return cl(e,r,n,a),ul(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Nn(e,a)}}function Iu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function uo(){if(Fu){var e=rr;if(e!==null)throw e}}function fo(e,n,a,r){Fu=!1;var u=e.updateQueue;Ga=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var j=C,oe=j.next;j.next=null,_===null?f=oe:_.next=oe,_=j;var ve=e.alternate;ve!==null&&(ve=ve.updateQueue,C=ve.lastBaseUpdate,C!==_&&(C===null?ve.firstBaseUpdate=oe:C.next=oe,ve.lastBaseUpdate=j))}if(f!==null){var Me=u.baseState;_=0,ve=oe=j=null,C=f;do{var ue=C.lane&-536870913,he=ue!==C.lane;if(he?(wt&ue)===ue:(r&ue)===ue){ue!==0&&ue===sr&&(Fu=!0),ve!==null&&(ve=ve.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=e,ct=C;ue=n;var Jt=a;switch(ct.tag){case 1:if(Ze=ct.payload,typeof Ze=="function"){Me=Ze.call(Jt,Me,ue);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=ct.payload,ue=typeof Ze=="function"?Ze.call(Jt,Me,ue):Ze,ue==null)break e;Me=b({},Me,ue);break e;case 2:Ga=!0}}ue=C.callback,ue!==null&&(e.flags|=64,he&&(e.flags|=8192),he=u.callbacks,he===null?u.callbacks=[ue]:he.push(ue))}else he={lane:ue,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ve===null?(oe=ve=he,j=Me):ve=ve.next=he,_|=ue;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;he=C,C=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ve===null&&(j=Me),u.baseState=j,u.firstBaseUpdate=oe,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Za|=_,e.lanes=_,e.memoizedState=Me}}function am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)am(a[e],n)}var cr=A(null),bl=A(0);function rm(e,n){e=ya,de(bl,e),de(cr,n),ya=e|n.baseLanes}function Bu(){de(bl,ya),de(cr,cr.current)}function ku(){ya=bl.current,k(cr),k(bl)}var oi=A(null),yi=null;function Xa(e){var n=e.alternate;de(fn,fn.current&1),de(oi,e),yi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(yi=e)}function Hu(e){de(fn,fn.current),de(oi,e),yi===null&&(yi=e)}function om(e){e.tag===22?(de(fn,fn.current),de(oi,e),yi===null&&(yi=e)):Wa()}function Wa(){de(fn,fn.current),de(oi,oi.current)}function li(e){k(oi),yi===e&&(yi=null),k(fn)}var fn=A(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qd(a)||Yd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,vt=null,Kt=null,vn=null,Sl=!1,ur=!1,Ds=!1,Ml=0,ho=0,dr=null,k_=0;function cn(){throw Error(s(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function ju(e,n,a,r,u,f){return ha=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Vm:ad,Ds=!1,f=a(r,u),Ds=!1,ur&&(f=cm(n,a,r,u)),lm(e),f}function lm(e){U.H=go;var n=Kt!==null&&Kt.next!==null;if(ha=0,vn=Kt=vt=null,Sl=!1,ho=0,dr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&hl(e)&&(_n=!0))}function cm(e,n,a,r){vt=e;var u=0;do{if(ur&&(dr=null),ho=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,vn=Kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Xm,f=n(a,r)}while(ur);return f}function H_(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(vt.flags|=1024),n}function Vu(){var e=Ml!==0;return Ml=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}ha=0,vn=Kt=vt=null,ur=!1,ho=Ml=0,dr=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?vt.memoizedState=vn=e:vn=vn.next=e,vn}function hn(){if(Kt===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var n=vn===null?vt.memoizedState:vn.next;if(n!==null)vn=n,Kt=e;else{if(e===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},vn===null?vt.memoizedState=vn=e:vn=vn.next=e}return vn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,dr===null&&(dr=[]),e=$p(dr,e,n),n=vt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Vm:ad),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===I)return Un(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=vt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=J;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=hn();return Yu(n,Kt,e)}function Yu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=_=null,j=null,oe=n,ve=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(wt&Me)===Me:(ha&Me)===Me){var ue=oe.revertLane;if(ue===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===sr&&(ve=!0);else if((ha&ue)===ue){oe=oe.next,ue===sr&&(ve=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},j===null?(C=j=Me,_=f):j=j.next=Me,vt.lanes|=ue,Za|=ue;Me=oe.action,Ds&&a(f,Me),f=oe.hasEagerState?oe.eagerState:a(f,Me)}else ue={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},j===null?(C=j=ue,_=f):j=j.next=ue,vt.lanes|=Me,Za|=Me;oe=oe.next}while(oe!==null&&oe!==n);if(j===null?_=f:j.next=C,!si(f,e.memoizedState)&&(_n=!0,ve&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=j,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zu(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);si(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function um(e,n,a){var r=vt,u=hn(),f=Ct;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!si((Kt||u).memoizedState,a);if(_&&(u.memoizedState=a,_n=!0),u=u.queue,Ju(hm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||vn!==null&&vn.memoizedState.tag&1){if(r.flags|=2048,fr(9,{destroy:void 0},fm.bind(null,r,u,a,n),null),en===null)throw Error(s(349));f||(ha&127)!==0||dm(r,n,a)}return a}function dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=El(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,r){n.value=a,n.getSnapshot=r,pm(n)&&mm(e)}function hm(e,n,a){return a(function(){pm(n)&&mm(e)})}function pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function mm(e){var n=Ss(e,2);n!==null&&Qn(n,e,2)}function Ku(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),Ds){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function gm(e,n,a,r){return e.baseState=a,Yu(e,Kt,typeof r=="function"?r:pa)}function G_(e,n,a,r,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var C=a(u,r),j=U.S;j!==null&&j(_,C),vm(e,n,C)}catch(oe){Qu(e,n,oe)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(u,r),vm(e,n,f)}catch(oe){Qu(e,n,oe)}}function vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){_m(e,n,r)},function(r){return Qu(e,n,r)}):_m(e,n,a)}function _m(e,n,a){n.status="fulfilled",n.value=a,bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xm(e,a)))}function Qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==r)}e.action=null}function bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Sm(e,n){if(Ct){var a=en.formState;if(a!==null){e:{var r=vt;if(Ct){if(nn){t:{for(var u=nn,f=bi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=Si(u.nextSibling),r=u.data==="F!";break e}}ka(r)}r=!1}r&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=r,a=Hm.bind(null,vt,r),r.dispatch=a,r=Ku(!1),f=id.bind(null,vt,!1,r.queue),r=jn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=G_.bind(null,vt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Mm(e){var n=hn();return Em(n,Kt,e)}function Em(e,n,a){if(n=Yu(e,n,ym)[0],e=Al(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=po(n)}catch(_){throw _===or?gl:_}else r=n;n=hn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,fr(9,{destroy:void 0},j_.bind(null,u,a),null)),[r,f,e]}function j_(e,n){e.action=n}function Tm(e){var n=hn(),a=Kt;if(a!==null)return Em(n,a,e);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function fr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=vt.updateQueue,n===null&&(n=El(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Am(){return hn().memoizedState}function wl(e,n,a,r){var u=jn();vt.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var u=hn();r=r===void 0?null:r;var f=u.memoizedState.inst;Kt!==null&&r!==null&&Gu(r,Kt.memoizedState.deps)?u.memoizedState=fr(n,f,a,r):(vt.flags|=e,u.memoizedState=fr(1|n,f,a,r))}function wm(e,n){wl(8390656,8,e,n)}function Ju(e,n){Rl(2048,8,e,n)}function V_(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=El(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=hn().memoizedState;return V_({ref:n,nextImpl:e}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Rl(4,2,e,n)}function Nm(e,n){return Rl(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,Dm.bind(null,n,e),a)}function $u(){}function Um(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Gu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function zm(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Gu(n,r[1]))return r[0];if(r=e(),Ds){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r}function ed(e,n,a){return a===void 0||(ha&1073741824)!==0&&(wt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=O0(),vt.lanes|=e,Za|=e,a)}function Om(e,n,a,r){return si(a,n)?a:cr.current!==null?(e=ed(e,a,r),si(e,n)||(_n=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(wt&261930)===0?(_n=!0,e.memoizedState=a):(e=O0(),vt.lanes|=e,Za|=e,n)}function Pm(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=U.T,C={};U.T=C,id(e,!1,n,a);try{var j=u(),oe=U.S;if(oe!==null&&oe(C,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var ve=B_(j,r);mo(e,n,ve,di(e))}else mo(e,n,r,di(e))}catch(Me){mo(e,n,{then:function(){},status:"rejected",reason:Me},di())}finally{B.p=f,_!==null&&C.types!==null&&(_.types=C.types),U.T=_}}function X_(){}function td(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Im(e).queue;Pm(e,u,n,le,a===null?X_:function(){return Fm(e),a(r)})}function Im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fm(e){var n=Im(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},di())}function nd(){return Un(Lo)}function Bm(){return hn().memoizedState}function km(){return hn().memoizedState}function W_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=ja(a);var r=Va(n,e,a);r!==null&&(Qn(r,n,a),co(r,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function q_(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Gm(n,a):(a=bu(e,n,a,r),a!==null&&(Qn(a,e,r),jm(a,n,r)))}function Hm(e,n,a){var r=di();mo(e,n,a,r)}function mo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,si(C,_))return cl(e,n,u,0),en===null&&ll(),!1}catch{}finally{}if(a=bu(e,n,u,r),a!==null)return Qn(a,e,r),jm(a,n,r),!0}return!1}function id(e,n,a,r){if(r={lane:2,revertLane:Od(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=bu(e,a,r,2),n!==null&&Qn(n,e,2)}function Cl(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function Gm(e,n){ur=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Nn(e,a)}}var go={readContext:Un,use:Tl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};go.useEffectEvent=cn;var Vm={readContext:Un,use:Tl,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var r=e();if(Ds){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=jn();if(a!==void 0){var u=a(n);if(Ds){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=q_.bind(null,vt,e),[r.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=Hm.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=jn();return ed(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Pm.bind(null,vt,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=vt,u=jn();if(Ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(wt&127)!==0||dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wm(hm.bind(null,r,f,e),[e]),r.flags|=2048,fr(9,{destroy:void 0},fm.bind(null,r,f,a,n),null),a},useId:function(){var e=jn(),n=en.identifierPrefix;if(Ct){var a=Yi,r=qi;a=(r&~(1<<32-Be(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=k_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nd,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=id.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return jn().memoizedState=W_.bind(null,vt)},useEffectEvent:function(e){var n=jn(),a={impl:e};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ad={readContext:Un,use:Tl,useCallback:Um,useContext:Un,useEffect:Ju,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:Nm,useMemo:zm,useReducer:Al,useRef:Am,useState:function(){return Al(pa)},useDebugValue:$u,useDeferredValue:function(e,n){var a=hn();return Om(a,Kt.memoizedState,e,n)},useTransition:function(){var e=Al(pa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:um,useId:Bm,useHostTransitionStatus:nd,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=hn();return gm(a,Kt,e,n)},useMemoCache:qu,useCacheRefresh:km};ad.useEffectEvent=Rm;var Xm={readContext:Un,use:Tl,useCallback:Um,useContext:Un,useEffect:Ju,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:Nm,useMemo:zm,useReducer:Zu,useRef:Am,useState:function(){return Zu(pa)},useDebugValue:$u,useDeferredValue:function(e,n){var a=hn();return Kt===null?ed(a,e,n):Om(a,Kt.memoizedState,e,n)},useTransition:function(){var e=Zu(pa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:um,useId:Bm,useHostTransitionStatus:nd,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=hn();return Kt!==null?gm(a,Kt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:km};Xm.useEffectEvent=Rm;function sd(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),u=ja(r);u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,r),n!==null&&(Qn(n,e,r),co(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),u=ja(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,r),n!==null&&(Qn(n,e,r),co(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=ja(a);r.tag=2,n!=null&&(r.callback=n),n=Va(e,r,a),n!==null&&(Qn(n,e,a),co(n,e,a))}};function Wm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function qm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&rd.enqueueReplaceState(n,n.state,null)}function Ls(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ym(e){ol(e)}function Zm(e){console.error(e)}function Km(e){ol(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Qm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function od(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function Jm(e){return e=ja(e),e.tag=3,e}function $m(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Qm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Qm(n,a,r),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function Y_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Gl():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ld(e,r,u)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ld(e,r,u)),!1}throw Error(s(435,a.tag))}return Ld(e,r,u),Gl(),!1}if(Ct)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Au&&(e=Error(s(422),{cause:r}),ao(xi(e,a)))):(r!==Au&&(n=Error(s(423),{cause:r}),ao(xi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=xi(r,a),u=od(e.stateNode,r,u),Iu(e,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=xi(f,a),Eo===null?Eo=[f]:Eo.push(f),un!==4&&(un=2),n===null)return!0;r=xi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=od(a.stateNode,r,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jm(u),$m(u,e,a,r),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var ld=Error(s(461)),_n=!1;function zn(e,n,a,r){n.child=e===null?im(n,null,a,r):Ns(n,e.child,a,r)}function e0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var C in r)C!=="ref"&&(_[C]=r[C])}else _=r;return As(n),r=ju(e,n,a,_,f,u),C=Vu(),e!==null&&!_n?(Xu(e,n,u),ma(e,n,u)):(Ct&&C&&Eu(n),n.flags|=1,zn(e,n,r,u),n.child)}function t0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,n0(e,n,f,r,u)):(e=dl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gd(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,r)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(f,r),e.ref=n.ref,e.return=n,n.child=e}function n0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(to(f,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=f,gd(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ma(e,n,u)}return cd(e,n,a,r,u)}function i0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return a0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?rm(n,f):Bu(),om(n);else return r=n.lanes=536870912,a0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),rm(n,f),Wa(),n.memoizedState=null):(e!==null&&ml(n,null),Bu(),Wa());return zn(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function a0(e,n,a,r,u){var f=Uu();return f=f===null?null:{parent:xn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Bu(),om(n),e!==null&&ar(e,n,r,!0),n.childLanes=u,null}function Dl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function s0(e,n,a){return Ns(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,li(n),n.memoizedState=null,e}function Z_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ct){if(r.mode==="hidden")return e=Dl(n,r),n.lanes=536870912,xo(null,e);if(Hu(n),(e=nn)?(e=xg(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Ln=n,nn=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return Dl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=s0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||ar(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(r=en,r!==null&&(_=Dn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ss(e,_),Qn(r,e,_),ld;Gl(),n=s0(e,n,a)}else e=f.treeContext,nn=Si(_.nextSibling),Ln=n,Ct=!0,Ba=null,bi=!1,e!==null&&Xp(n,e),n=Dl(n,r),n.flags|=4096;return n}return e=ca(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cd(e,n,a,r,u){return As(n),a=ju(e,n,a,r,void 0,u),r=Vu(),e!==null&&!_n?(Xu(e,n,u),ma(e,n,u)):(Ct&&r&&Eu(n),n.flags|=1,zn(e,n,a,u),n.child)}function r0(e,n,a,r,u,f){return As(n),n.updateQueue=null,a=cm(n,r,a,u),lm(e),r=Vu(),e!==null&&!_n?(Xu(e,n,f),ma(e,n,f)):(Ct&&r&&Eu(n),n.flags|=1,zn(e,n,a,f),n.child)}function o0(e,n,a,r,u){if(As(n),n.stateNode===null){var f=er,_=a.contextType;typeof _=="object"&&_!==null&&(f=Un(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ou(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Un(_):er,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sd(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&rd.enqueueReplaceState(f,f.state,null),fo(n,r,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,j=Ls(a,C);f.props=j;var oe=f.context,ve=a.contextType;_=er,typeof ve=="object"&&ve!==null&&(_=Un(ve));var Me=a.getDerivedStateFromProps;ve=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||oe!==_)&&qm(n,f,r,_),Ga=!1;var ue=n.memoizedState;f.state=ue,fo(n,r,f,u),uo(),oe=n.memoizedState,C||ue!==oe||Ga?(typeof Me=="function"&&(sd(n,a,Me,r),oe=n.memoizedState),(j=Ga||Wm(n,a,j,r,ue,oe,_))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=oe),f.props=r,f.state=oe,f.context=_,r=j):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pu(e,n),_=n.memoizedProps,ve=Ls(a,_),f.props=ve,Me=n.pendingProps,ue=f.context,oe=a.contextType,j=er,typeof oe=="object"&&oe!==null&&(j=Un(oe)),C=a.getDerivedStateFromProps,(oe=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Me||ue!==j)&&qm(n,f,r,j),Ga=!1,ue=n.memoizedState,f.state=ue,fo(n,r,f,u),uo();var he=n.memoizedState;_!==Me||ue!==he||Ga||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof C=="function"&&(sd(n,a,C,r),he=n.memoizedState),(ve=Ga||Wm(n,a,ve,r,ue,he,j)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,he,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,he,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ue===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ue===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=he),f.props=r,f.state=he,f.context=j,r=ve):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ue===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ue===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):zn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ma(e,n,u),e}function l0(e,n,a,r){return Es(),n.flags|=256,zn(e,n,a,r),n.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(e){return{baseLanes:e,cachePool:Qp()}}function fd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function c0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ct){if(u?Xa(n):Wa(),(e=nn)?(e=xg(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Ln=n,nn=null)):e=null,e===null)throw ka(n);return Yd(e)?n.lanes=32:n.lanes=536870912,null}var C=r.children;return r=r.fallback,u?(Wa(),u=n.mode,C=Ul({mode:"hidden",children:C},u),r=Ms(r,u,a,null),C.return=n,r.return=n,C.sibling=r,n.child=C,r=n.child,r.memoizedState=dd(a),r.childLanes=fd(e,_,a),n.memoizedState=ud,xo(null,r)):(Xa(n),hd(n,C))}var j=e.memoizedState;if(j!==null&&(C=j.dehydrated,C!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=pd(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),C=r.fallback,u=n.mode,r=Ul({mode:"visible",children:r.children},u),C=Ms(C,u,a,null),C.flags|=2,r.return=n,C.return=n,r.sibling=C,n.child=r,Ns(n,e.child,null,a),r=n.child,r.memoizedState=dd(a),r.childLanes=fd(e,_,a),n.memoizedState=ud,n=xo(null,r));else if(Xa(n),Yd(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var oe=_.dgst;_=oe,r=Error(s(419)),r.stack="",r.digest=_,ao({value:r,source:null,stack:null}),n=pd(e,n,a)}else if(_n||ar(e,n,a,!1),_=(a&e.childLanes)!==0,_n||_){if(_=en,_!==null&&(r=Dn(_,a),r!==0&&r!==j.retryLane))throw j.retryLane=r,Ss(e,r),Qn(_,e,r),ld;qd(C)||Gl(),n=pd(e,n,a)}else qd(C)?(n.flags|=192,n.child=e.child,n=null):(e=j.treeContext,nn=Si(C.nextSibling),Ln=n,Ct=!0,Ba=null,bi=!1,e!==null&&Xp(n,e),n=hd(n,r.children),n.flags|=4096);return n}return u?(Wa(),C=r.fallback,u=n.mode,j=e.child,oe=j.sibling,r=ca(j,{mode:"hidden",children:r.children}),r.subtreeFlags=j.subtreeFlags&65011712,oe!==null?C=ca(oe,C):(C=Ms(C,u,a,null),C.flags|=2),C.return=n,r.return=n,r.sibling=C,n.child=r,xo(null,r),r=n.child,C=e.child.memoizedState,C===null?C=dd(a):(u=C.cachePool,u!==null?(j=xn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=Qp(),C={baseLanes:C.baseLanes|a,cachePool:u}),r.memoizedState=C,r.childLanes=fd(e,_,a),n.memoizedState=ud,xo(e.child,r)):(Xa(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function hd(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=ri(22,e,null,n),e.lanes=0,e}function pd(e,n,a){return Ns(n,e.child,null,a),e=hd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function u0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Cu(e.return,n,a)}function md(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function d0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=fn.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,de(fn,_),zn(e,n,r,a),r=Ct?io:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u0(e,a,n);else if(e.tag===19)u0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),md(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}md(n,!0,a,null,f,r);break;case"together":md(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function K_(e,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Ha(n,xn,e.memoizedState.cache),Es();break;case 27:case 5:Qe(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?c0(e,n,a):(Xa(n),e=ma(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ar(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return d0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),de(fn,fn.current),r)break;return null;case 22:return n.lanes=0,i0(e,n,a,n.pendingProps);case 24:Ha(n,xn,e.memoizedState.cache)}return ma(e,n,a)}function f0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!gd(e,a)&&(n.flags&128)===0)return _n=!1,K_(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ct&&(n.flags&1048576)!==0&&Vp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Rs(n.elementType),n.type=e,typeof e=="function")yu(e)?(r=Ls(e,r),n.tag=1,n=o0(null,n,e,r,a)):(n.tag=0,n=cd(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=e0(null,n,e,r,a);break e}else if(u===H){n.tag=14,n=t0(null,n,e,r,a);break e}}throw n=fe(e)||e,Error(s(306,n,""))}}return n;case 0:return cd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ls(r,n.pendingProps),o0(e,n,r,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),fo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ha(n,xn,r),r!==f.cache&&Nu(n,[xn],a,!0),uo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=l0(e,n,r,a);break e}else if(r!==u){u=xi(Error(s(424)),n),ao(u),n=l0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Si(e.firstChild),Ln=n,Ct=!0,Ba=null,bi=!0,a=im(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),r===u){n=ma(e,n,a);break e}zn(e,n,r,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,e=n.pendingProps,r=Zl(te.current).createElement(a),r[ln]=n,r[mn]=e,On(r,a,e),dn(r),n.stateNode=r):n.memoizedState=Mg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qe(n),e===null&&Ct&&(r=n.stateNode=bg(n.type,n.pendingProps,te.current),Ln=n,bi=!0,u=nn,es(n.type)?(Zd=u,nn=Si(r.firstChild)):nn=u),zn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ct&&((u=r=nn)&&(r=Ab(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,Ln=n,nn=Si(r.firstChild),bi=!1,u=!0):u=!1),u||ka(n)),Qe(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Vd(u,f)?r=null:_!==null&&Vd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,H_,null,null,a),Lo._currentValue=u),Ll(e,n),zn(e,n,r,a),n.child;case 6:return e===null&&Ct&&((e=a=nn)&&(a=wb(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Ln=n,nn=null,e=!0):e=!1),e||ka(n)),null;case 13:return c0(e,n,a);case 4:return Se(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ns(n,null,r,a):zn(e,n,r,a),n.child;case 11:return e0(e,n,n.type,n.pendingProps,a);case 7:return zn(e,n,n.pendingProps,a),n.child;case 8:return zn(e,n,n.pendingProps.children,a),n.child;case 12:return zn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ha(n,n.type,r.value),zn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,As(n),u=Un(u),r=r(u),n.flags|=1,zn(e,n,r,a),n.child;case 14:return t0(e,n,n.type,n.pendingProps,a);case 15:return n0(e,n,n.type,n.pendingProps,a);case 19:return d0(e,n,a);case 31:return Z_(e,n,a);case 22:return i0(e,n,a,n.pendingProps);case 24:return As(n),r=Un(xn),e===null?(u=Uu(),u===null&&(u=en,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ou(n),Ha(n,xn,u)):((e.lanes&a)!==0&&(Pu(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,xn,r)):(r=f.cache,Ha(n,xn,r),r!==u.cache&&Nu(n,[xn],a,!0))),zn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(e){e.flags|=4}function xd(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(B0())e.flags|=8192;else throw Cs=xl,zu}else e.flags&=-16777217}function h0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rg(n))if(B0())e.flags|=8192;else throw Cs=xl,zu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ae():536870912,e.lanes|=n,gr|=n)}function vo(e,n){if(!Ct)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Q_(e,n,a){var r=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(xn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ga(n),f!==null?(an(n),h0(n,f)):(an(n),xd(n,u,null,r,a))):f?f!==e.memoizedState?(ga(n),an(n),h0(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ga(n),an(n),xd(n,u,e,r,a)),null;case 27:if(Ke(n),a=te.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}e=ye.current,ir(n)?Wp(n):(e=bg(u,r,a),n.stateNode=e,ga(n))}return an(n),null;case 5:if(Ke(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=ye.current,ir(n))Wp(n);else{var _=Zl(te.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[mn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(On(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ga(n)}}return an(n),xd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||cg(e.nodeValue,a)),e||ka(n,!0)}else e=Zl(e).createTextNode(r),e[ln]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=ir(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),an(n),null);case 4:return He(),e===null&&Bd(n.stateNode.containerInfo),an(n),null;case 10:return fa(n.type),an(n),null;case 19:if(k(fn),r=n.memoizedState,r===null)return an(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)vo(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,vo(r,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return de(fn,fn.current&1|2),Ct&&ua(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&De()>Bl&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304)}else{if(!u)if(e=yl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),vo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ct)return an(n),null}else 2*De()-r.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,a=fn.current,de(fn,u?a&1|2:a&1),Ct&&ua(n,r.treeForkCount),e):(an(n),null);case 22:case 23:return li(n),ku(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&k(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(xn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function J_(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fa(xn),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(li(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(fn),null;case 4:return He(),null;case 10:return fa(n.type),null;case 22:case 23:return li(n),ku(),e!==null&&k(ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return fa(xn),null;case 25:return null;default:return null}}function p0(e,n){switch(Tu(n),n.tag){case 3:fa(xn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:k(fn);break;case 10:fa(n.type);break;case 22:case 23:li(n),ku(),e!==null&&k(ws);break;case 24:fa(xn)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(C){Xt(n,n.return,C)}}function qa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var j=a,oe=C;try{oe()}catch(ve){Xt(u,j,ve)}}}r=r.next}while(r!==f)}}catch(ve){Xt(n,n.return,ve)}}function m0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(r){Xt(e,e.return,r)}}}function g0(e,n,a){a.props=Ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xt(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Xt(e,n,u)}}function Zi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Xt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(e,n,u)}else a.current=null}function x0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Xt(e,e.return,u)}}function vd(e,n,a){try{var r=e.stateNode;bb(r,e.type,a,n),r[mn]=n}catch(u){Xt(e,e.return,u)}}function v0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bd(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bd(e,n,a),e=e.sibling;e!==null;)bd(e,n,a),e=e.sibling}function Ol(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function _0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,r,a),n[ln]=e,n[mn]=a}catch(f){Xt(e,e.return,f)}}var xa=!1,bn=!1,yd=!1,b0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function $_(e,n){if(e=e.containerInfo,Gd=nc,e=Lp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,C=-1,j=-1,oe=0,ve=0,Me=e,ue=null;t:for(;;){for(var he;Me!==a||u!==0&&Me.nodeType!==3||(C=_+u),Me!==f||r!==0&&Me.nodeType!==3||(j=_+r),Me.nodeType===3&&(_+=Me.nodeValue.length),(he=Me.firstChild)!==null;)ue=Me,Me=he;for(;;){if(Me===e)break t;if(ue===a&&++oe===u&&(C=_),ue===f&&++ve===r&&(j=_),(he=Me.nextSibling)!==null)break;Me=ue,ue=Me.parentNode}Me=he}a=C===-1||j===-1?null:{start:C,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(jd={focusedElem:e,selectionRange:a},nc=!1,wn=n;wn!==null;)if(n=wn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,wn=e;else for(;wn!==null;){switch(n=wn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ze=Ls(a.type,u);e=r.getSnapshotBeforeUpdate(Ze,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ct){Xt(a,a.return,ct)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,wn=e;break}wn=n.return}}function y0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),r&4&&_o(5,a);break;case 1:if(_a(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Xt(a,a.return,_)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Xt(a,a.return,_)}}r&64&&m0(a),r&512&&bo(a,a.return);break;case 3:if(_a(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(_){Xt(a,a.return,_)}}break;case 27:n===null&&r&4&&_0(a);case 26:case 5:_a(e,a),n===null&&r&4&&x0(a),r&512&&bo(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),r&4&&E0(e,a);break;case 13:_a(e,a),r&4&&T0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lb.bind(null,a),Rb(e,a))));break;case 22:if(r=a.memoizedState!==null||xa,!r){n=n!==null&&n.memoizedState!==null||bn,u=xa;var f=bn;xa=r,(bn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),xa=u,bn=f}break;case 30:break;default:_a(e,a)}}function S0(e){var n=e.alternate;n!==null&&(e.alternate=null,S0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,qn=!1;function va(e,n,a){for(a=a.child;a!==null;)M0(e,n,a),a=a.sibling}function M0(e,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:bn||Zi(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Zi(a,n);var r=on,u=qn;es(a.type)&&(on=a.stateNode,qn=!1),va(e,n,a),Co(a.stateNode),on=r,qn=u;break;case 5:bn||Zi(a,n);case 6:if(r=on,u=qn,on=null,va(e,n,a),on=r,qn=u,on!==null)if(qn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Xt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Xt(a,n,f)}break;case 18:on!==null&&(qn?(e=on,mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):mg(on,a.stateNode));break;case 4:r=on,u=qn,on=a.stateNode.containerInfo,qn=!0,va(e,n,a),on=r,qn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),bn||qa(4,a,n),va(e,n,a);break;case 1:bn||(Zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&g0(a,n,r)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:bn=(r=bn)||a.memoizedState!==null,va(e,n,a),bn=r;break;default:va(e,n,a)}}function E0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Xt(n,n.return,a)}}}function T0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Xt(n,n.return,a)}}function eb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new b0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new b0),n;default:throw Error(s(435,e.tag))}}function Pl(e,n){var a=eb(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=cb.bind(null,e,r);r.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(es(C.type)){on=C.stateNode,qn=!1;break e}break;case 5:on=C.stateNode,qn=!1;break e;case 3:case 4:on=C.stateNode.containerInfo,qn=!0;break e}C=C.return}if(on===null)throw Error(s(160));M0(f,_,u),on=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)A0(n,e),n=n.sibling}var Oi=null;function A0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),r&4&&(qa(3,e,e.return),_o(3,e),qa(5,e,e.return));break;case 1:Yn(n,e),Zn(e),r&512&&(bn||a===null||Zi(a,a.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Oi;if(Yn(n,e),Zn(e),r&512&&(bn||a===null||Zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ni]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),On(f,r,a),f[ln]=e,dn(f),r=f;break e;case"link":var _=Ag("link","href",u).get(r+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}f=u.createElement(r),On(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Ag("meta","content",u).get(r+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}f=u.createElement(r),On(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,dn(f),r=f}e.stateNode=r}else wg(u,e.type,e.stateNode);else e.stateNode=Tg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?wg(u,e.type,e.stateNode):Tg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&vd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),r&512&&(bn||a===null||Zi(a,a.return)),a!==null&&r&4&&vd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),r&512&&(bn||a===null||Zi(a,a.return)),e.flags&32){u=e.stateNode;try{ai(u,"")}catch(Ze){Xt(e,e.return,Ze)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,vd(e,u,a!==null?a.memoizedProps:u)),r&1024&&(yd=!0);break;case 6:if(Yn(n,e),Zn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ze){Xt(e,e.return,Ze)}}break;case 3:if(Jl=null,u=Oi,Oi=Kl(n.containerInfo),Yn(n,e),Oi=u,Zn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Ze){Xt(e,e.return,Ze)}yd&&(yd=!1,w0(e));break;case 4:r=Oi,Oi=Kl(e.stateNode.containerInfo),Yn(n,e),Zn(e),Oi=r;break;case 12:Yn(n,e),Zn(e);break;case 31:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 22:u=e.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,oe=xa,ve=bn;if(xa=oe||u,bn=ve||j,Yn(n,e),bn=ve,xa=oe,Zn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||xa||bn||Us(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(f=j.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=j.stateNode;var Me=j.memoizedProps.style,ue=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;C.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ze){Xt(j,j.return,Ze)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Ze){Xt(j,j.return,Ze)}}}else if(n.tag===18){if(a===null){j=n;try{var he=j.stateNode;u?gg(he,!0):gg(j.stateNode,!1)}catch(Ze){Xt(j,j.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(e,a))));break;case 19:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(v0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_d(e);Ol(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ai(_,""),a.flags&=-33);var C=_d(e);Ol(e,C,_);break;case 3:case 4:var j=a.stateNode.containerInfo,oe=_d(e);bd(e,oe,j);break;default:throw Error(s(161))}}catch(ve){Xt(e,e.return,ve)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(e,n.alternate,n),n=n.sibling}function Us(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Us(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&g0(n,n.return,a),Us(n);break;case 27:Co(n.stateNode);case 26:case 5:Zi(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),_o(4,f);break;case 1:if(ba(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Xt(r,r.return,oe)}if(r=f,u=r.updateQueue,u!==null){var C=r.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)am(j[u],C)}catch(oe){Xt(r,r.return,oe)}}a&&_&64&&m0(f),bo(f,f.return);break;case 27:_0(f);case 26:case 5:ba(u,f,a),a&&r===null&&_&4&&x0(f),bo(f,f.return);break;case 12:ba(u,f,a);break;case 31:ba(u,f,a),a&&_&4&&E0(u,f);break;case 13:ba(u,f,a),a&&_&4&&T0(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),bo(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Sd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Pi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)R0(e,n,a,r),n=n.sibling}function R0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,r),u&2048&&_o(9,n);break;case 1:Pi(e,n,a,r);break;case 3:Pi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Pi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Xt(n,n.return,j)}}else Pi(e,n,a,r);break;case 31:Pi(e,n,a,r);break;case 13:Pi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Pi(e,n,a,r):yo(e,n):f._visibility&2?Pi(e,n,a,r):(f._visibility|=2,hr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sd(_,n);break;case 24:Pi(e,n,a,r),u&2048&&Md(n.alternate,n);break;default:Pi(e,n,a,r)}}function hr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,C=a,j=r,oe=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,C,j,u),_o(8,_);break;case 23:break;case 22:var ve=_.stateNode;_.memoizedState!==null?ve._visibility&2?hr(f,_,C,j,u):yo(f,_):(ve._visibility|=2,hr(f,_,C,j,u)),u&&oe&2048&&Sd(_.alternate,_);break;case 24:hr(f,_,C,j,u),u&&oe&2048&&Md(_.alternate,_);break;default:hr(f,_,C,j,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&Sd(r.alternate,r);break;case 24:yo(a,r),u&2048&&Md(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var So=8192;function pr(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)C0(e,n,a),e=e.sibling}function C0(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&So&&e.memoizedState!==null&&kb(a,Oi,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var r=Oi;Oi=Kl(e.stateNode.containerInfo),pr(e,n,a),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,pr(e,n,a),So=r):pr(e,n,a));break;default:pr(e,n,a)}}function N0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];wn=r,L0(r,e)}N0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)D0(e),e=e.sibling}function D0(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):Mo(e);break;default:Mo(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];wn=r,L0(r,e)}N0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function L0(e,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:so(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,wn=r;else e:for(a=e;wn!==null;){r=wn;var u=r.sibling,f=r.return;if(S0(r),r===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var tb={getCacheForType:function(e){var n=Un(xn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(xn).controller.signal}},nb=typeof WeakMap=="function"?WeakMap:Map,Ft=0,en=null,Tt=null,wt=0,Vt=0,ci=null,Ya=!1,mr=!1,Ed=!1,ya=0,un=0,Za=0,zs=0,Td=0,ui=0,gr=0,Eo=null,Kn=null,Ad=!1,Fl=0,U0=0,Bl=1/0,kl=null,Ka=null,En=0,Qa=null,xr=null,Sa=0,wd=0,Rd=null,z0=null,To=0,Cd=null;function di(){return(Ft&2)!==0&&wt!==0?wt&-wt:U.T!==null?Od():za()}function O0(){if(ui===0)if((wt&536870912)===0||Ct){var e=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),ui=e}else ui=536870912;return e=oi.current,e!==null&&(e.flags|=32),ui}function Qn(e,n,a){(e===en&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ja(e,wt,ui,!1)),lt(e,a),((Ft&2)===0||e!==en)&&(e===en&&((Ft&2)===0&&(zs|=a),un===4&&Ja(e,wt,ui,!1)),Ki(e))}function P0(e,n,a){if((Ft&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ge(e,n),u=r?sb(e,n):Dd(e,n,!0),f=r;do{if(u===0){mr&&!r&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ib(a)){u=Dd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=e;u=Eo;var j=C.current.memoizedState.isDehydrated;if(j&&(vr(C,_).flags|=256),_=Dd(C,_,!1),_!==2){if(Ed&&!j){C.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ja(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(r,n,ui,!Ya);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-De(),10<u)){if(Ja(r,n,ui,!Ya),xe(r,0,!0)!==0)break e;Sa=n,r.timeoutHandle=hg(I0.bind(null,r,a,Kn,kl,Ad,n,ui,zs,gr,Ya,f,"Throttled",-0,0),u);break e}I0(r,a,Kn,kl,Ad,n,ui,zs,gr,Ya,f,null,-0,0)}}break}while(!0);Ki(e)}function I0(e,n,a,r,u,f,_,C,j,oe,ve,Me,ue,he){if(e.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},C0(n,f,Me);var Ze=(f&62914560)===f?Fl-De():(f&4194048)===f?U0-De():0;if(Ze=Hb(Me,Ze),Ze!==null){Sa=f,e.cancelPendingCommit=Ze(X0.bind(null,e,n,f,a,r,u,_,C,j,ve,Me,null,ue,he)),Ja(e,f,_,!oe);return}}X0(e,n,f,a,r,u,_,C,j)}function ib(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,r){n&=~Td,n&=~zs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Lt(e,a,n)}function Hl(){return(Ft&6)===0?(Ao(0),!1):!0}function Nd(){if(Tt!==null){if(Vt===0)var e=Tt.return;else e=Tt,da=Ts=null,Wu(e),lr=null,oo=0,e=Tt;for(;e!==null;)p0(e.alternate,e),e=e.return;Tt=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Mb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Nd(),en=e,Tt=a=ca(e.current,null),wt=n,Vt=0,ci=null,Ya=!1,mr=Ge(e,n),Ed=!1,gr=ui=Td=zs=Za=un=0,Kn=Eo=null,Ad=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Be(r),f=1<<u;n|=e[u],r&=~f}return ya=n,ll(),a}function F0(e,n){vt=null,U.H=go,n===or||n===gl?(n=em(),Vt=3):n===zu?(n=em(),Vt=4):Vt=n===ld?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Tt===null&&(un=1,Nl(e,xi(n,e.current)))}function B0(){var e=oi.current;return e===null?!0:(wt&4194048)===wt?yi===null:(wt&62914560)===wt||(wt&536870912)!==0?e===yi:!1}function k0(){var e=U.H;return U.H=go,e===null?go:e}function H0(){var e=U.A;return U.A=tb,e}function Gl(){un=4,Ya||(wt&4194048)!==wt&&oi.current!==null||(mr=!0),(Za&134217727)===0&&(zs&134217727)===0||en===null||Ja(en,wt,ui,!1)}function Dd(e,n,a){var r=Ft;Ft|=2;var u=k0(),f=H0();(en!==e||wt!==n)&&(kl=null,vr(e,n)),n=!1;var _=un;e:do try{if(Vt!==0&&Tt!==null){var C=Tt,j=ci;switch(Vt){case 8:Nd(),_=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var oe=Vt;if(Vt=0,ci=null,_r(e,C,j,oe),a&&mr){_=0;break e}break;default:oe=Vt,Vt=0,ci=null,_r(e,C,j,oe)}}ab(),_=un;break}catch(ve){F0(e,ve)}while(!0);return n&&e.shellSuspendCounter++,da=Ts=null,Ft=r,U.H=u,U.A=f,Tt===null&&(en=null,wt=0,ll()),_}function ab(){for(;Tt!==null;)G0(Tt)}function sb(e,n){var a=Ft;Ft|=2;var r=k0(),u=H0();en!==e||wt!==n?(kl=null,Bl=De()+500,vr(e,n)):mr=Ge(e,n);e:do try{if(Vt!==0&&Tt!==null){n=Tt;var f=ci;t:switch(Vt){case 1:Vt=0,ci=null,_r(e,n,f,1);break;case 2:case 9:if(Jp(f)){Vt=0,ci=null,j0(n);break}n=function(){Vt!==2&&Vt!==9||en!==e||(Vt=7),Ki(e)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Jp(f)?(Vt=0,ci=null,j0(n)):(Vt=0,ci=null,_r(e,n,f,7));break;case 5:var _=null;switch(Tt.tag){case 26:_=Tt.memoizedState;case 5:case 27:var C=Tt;if(_?Rg(_):C.stateNode.complete){Vt=0,ci=null;var j=C.sibling;if(j!==null)Tt=j;else{var oe=C.return;oe!==null?(Tt=oe,jl(oe)):Tt=null}break t}}Vt=0,ci=null,_r(e,n,f,5);break;case 6:Vt=0,ci=null,_r(e,n,f,6);break;case 8:Nd(),un=6;break e;default:throw Error(s(462))}}rb();break}catch(ve){F0(e,ve)}while(!0);return da=Ts=null,U.H=r,U.A=u,Ft=a,Tt!==null?0:(en=null,wt=0,ll(),un)}function rb(){for(;Tt!==null&&!et();)G0(Tt)}function G0(e){var n=f0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,n===null?jl(e):Tt=n}function j0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=r0(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=r0(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:Wu(n);default:p0(a,n),n=Tt=Hp(n,ya),n=f0(a,n,ya)}e.memoizedProps=e.pendingProps,n===null?jl(e):Tt=n}function _r(e,n,a,r){da=Ts=null,Wu(n),lr=null,oo=0;var u=n.return;try{if(Y_(e,u,n,a,wt)){un=1,Nl(e,xi(a,e.current)),Tt=null;return}}catch(f){if(u!==null)throw Tt=u,f;un=1,Nl(e,xi(a,e.current)),Tt=null;return}n.flags&32768?(Ct||r===1?e=!0:mr||(wt&536870912)!==0?e=!1:(Ya=e=!0,(r===2||r===9||r===3||r===6)&&(r=oi.current,r!==null&&r.tag===13&&(r.flags|=16384))),V0(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){V0(n,Ya);return}e=n.return;var a=Q_(n.alternate,n,ya);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=e}while(n!==null);un===0&&(un=5)}function V0(e,n){do{var a=J_(e.alternate,e);if(a!==null){a.flags&=32767,Tt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Tt=e;return}Tt=e=a}while(e!==null);un=6,Tt=null}function X0(e,n,a,r,u,f,_,C,j){e.cancelPendingCommit=null;do Vl();while(En!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=_u,We(e,a,f,_,C,j),e===en&&(Tt=en=null,wt=0),xr=n,Qa=e,Sa=a,wd=f,Rd=u,z0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ub(ie,function(){return K0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,u=B.p,B.p=2,_=Ft,Ft|=4;try{$_(e,n,a)}finally{Ft=_,B.p=u,U.T=r}}En=1,W0(),q0(),Y0()}}function W0(){if(En===1){En=0;var e=Qa,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var u=Ft;Ft|=4;try{A0(n,e);var f=jd,_=Lp(e.containerInfo),C=f.focusedElem,j=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&Dp(C.ownerDocument.documentElement,C)){if(j!==null&&pu(C)){var oe=j.start,ve=j.end;if(ve===void 0&&(ve=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(ve,C.value.length);else{var Me=C.ownerDocument||document,ue=Me&&Me.defaultView||window;if(ue.getSelection){var he=ue.getSelection(),Ze=C.textContent.length,ct=Math.min(j.start,Ze),Jt=j.end===void 0?ct:Math.min(j.end,Ze);!he.extend&&ct>Jt&&(_=Jt,Jt=ct,ct=_);var ne=Np(C,ct),Z=Np(C,Jt);if(ne&&Z&&(he.rangeCount!==1||he.anchorNode!==ne.node||he.anchorOffset!==ne.offset||he.focusNode!==Z.node||he.focusOffset!==Z.offset)){var se=Me.createRange();se.setStart(ne.node,ne.offset),he.removeAllRanges(),ct>Jt?(he.addRange(se),he.extend(Z.node,Z.offset)):(se.setEnd(Z.node,Z.offset),he.addRange(se))}}}}for(Me=[],he=C;he=he.parentNode;)he.nodeType===1&&Me.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Me.length;C++){var be=Me[C];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}nc=!!Gd,jd=Gd=null}finally{Ft=u,B.p=r,U.T=a}}e.current=n,En=2}}function q0(){if(En===2){En=0;var e=Qa,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var u=Ft;Ft|=4;try{y0(e,n.alternate,n)}finally{Ft=u,B.p=r,U.T=a}}En=3}}function Y0(){if(En===4||En===3){En=0,yt();var e=Qa,n=xr,a=Sa,r=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,xr=Qa=null,Z0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),ms(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var C=r[_];f(C.value,{componentStack:C.stack})}}finally{U.T=n,B.p=u}}(Sa&3)!==0&&Vl(),Ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Cd?To++:(To=0,Cd=e):To=0,Ao(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function Vl(){return W0(),q0(),Y0(),K0()}function K0(){if(En!==5)return!1;var e=Qa,n=wd;wd=0;var a=ms(Sa),r=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=Rd,Rd=null;var f=Qa,_=Sa;if(En=0,xr=Qa=null,Sa=0,(Ft&6)!==0)throw Error(s(331));var C=Ft;if(Ft|=4,D0(f.current),R0(f,f.current,_,a),Ft=C,Ao(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{B.p=u,U.T=r,Z0(e,n)}}function Q0(e,n,a){n=xi(a,n),n=od(e.stateNode,n,2),e=Va(e,n,2),e!==null&&(lt(e,2),Ki(e))}function Xt(e,n,a){if(e.tag===3)Q0(e,e,a);else for(;n!==null;){if(n.tag===3){Q0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){e=xi(a,e),a=Jm(2),r=Va(n,a,2),r!==null&&($m(a,r,n,e),lt(r,2),Ki(r));break}}n=n.return}}function Ld(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new nb;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Ed=!0,u.add(a),e=ob.bind(null,e,n,a),n.then(e,e))}function ob(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(wt&a)===a&&(un===4||un===3&&(wt&62914560)===wt&&300>De()-Fl?(Ft&2)===0&&vr(e,0):Td|=a,gr===wt&&(gr=0)),Ki(e)}function J0(e,n){n===0&&(n=Ae()),e=Ss(e,n),e!==null&&(lt(e,n),Ki(e))}function lb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),J0(e,a)}function cb(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),J0(e,a)}function ub(e,n){return W(e,n)}var Xl=null,br=null,Ud=!1,Wl=!1,zd=!1,$a=0;function Ki(e){e!==br&&e.next===null&&(br===null?Xl=br=e:br=br.next=e),Wl=!0,Ud||(Ud=!0,fb())}function Ao(e,n){if(!zd&&Wl){zd=!0;do for(var a=!1,r=Xl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-Be(42|e)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(r,f))}else f=wt,f=xe(r,r===en?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ge(r,f)||(a=!0,ng(r,f));r=r.next}while(a);zd=!1}}function db(){$0()}function $0(){Wl=Ud=!1;var e=0;$a!==0&&Sb()&&(e=$a);for(var n=De(),a=null,r=Xl;r!==null;){var u=r.next,f=eg(r,n);f===0?(r.next=null,a===null?Xl=u:a.next=u,u===null&&(br=a)):(a=r,(e!==0||(f&3)!==0)&&(Wl=!0)),r=u}En!==0&&En!==5||Ao(e),$a!==0&&($a=0)}function eg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Be(f),C=1<<_,j=u[_];j===-1?((C&a)===0||(C&r)!==0)&&(u[_]=Le(C,n)):j<=n&&(e.expiredLanes|=C),f&=~C}if(n=en,a=wt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&st(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ge(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&st(r),ms(a)){case 2:case 8:a=T;break;case 32:a=ie;break;case 268435456:a=Te;break;default:a=ie}return r=tg.bind(null,e),a=W(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&st(r),e.callbackPriority=2,e.callbackNode=null,2}function tg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var r=wt;return r=xe(e,e===en?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(P0(e,r,n),eg(e,De()),e.callbackNode!=null&&e.callbackNode===a?tg.bind(null,e):null)}function ng(e,n){if(Vl())return null;P0(e,n,!0)}function fb(){Eb(function(){(Ft&6)!==0?W(L,db):$0()})}function Od(){if($a===0){var e=sr;e===0&&(e=ot,ot<<=1,(ot&261888)===0&&(ot=256)),$a=e}return $a}function ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function hb(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=ig((u[mn]||null).action),_=r.submitter;_&&(n=(n=_[mn]||null)?ig(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new al("action","action",null,r,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var j=_?ag(u,_):new FormData(u);td(a,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(C.preventDefault(),j=_?ag(u,_):new FormData(u),td(a,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var Pd=0;Pd<vu.length;Pd++){var Id=vu[Pd],pb=Id.toLowerCase(),mb=Id[0].toUpperCase()+Id.slice(1);zi(pb,"on"+mb)}zi(Op,"onAnimationEnd"),zi(Pp,"onAnimationIteration"),zi(Ip,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(D_,"onTransitionRun"),zi(L_,"onTransitionStart"),zi(U_,"onTransitionCancel"),zi(Fp,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),P("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),P("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),P("onBeforeInput",["compositionend","keypress","textInput","paste"]),P("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function sg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var C=r[_],j=C.instance,oe=C.currentTarget;if(C=C.listener,j!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=oe;try{f(u)}catch(ve){ol(ve)}u.currentTarget=null,f=j}else for(_=0;_<r.length;_++){if(C=r[_],j=C.instance,oe=C.currentTarget,C=C.listener,j!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=oe;try{f(u)}catch(ve){ol(ve)}u.currentTarget=null,f=j}}}}function At(e,n){var a=n[Gn];a===void 0&&(a=n[Gn]=new Set);var r=e+"__bubble";a.has(r)||(rg(n,e,2,!1),a.add(r))}function Fd(e,n,a){var r=0;n&&(r|=4),rg(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[ql]){e[ql]=!0,gn.forEach(function(a){a!=="selectionchange"&&(gb.has(a)||Fd(a,!1,e),Fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Fd("selectionchange",!1,n))}}function rg(e,n,a,r){switch(Og(n)){case 2:var u=Vb;break;case 8:u=Xb;break;default:u=ef}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kd(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var C=r.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=r.return;_!==null;){var j=_.tag;if((j===3||j===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=Xi(C),_===null)return;if(j=_.tag,j===5||j===6||j===26||j===27){r=f=_;continue e}C=C.parentNode}}r=r.return}dp(function(){var oe=f,ve=iu(a),Me=[];e:{var ue=Bp.get(e);if(ue!==void 0){var he=al,Ze=e;switch(e){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":he=c_;break;case"focusin":Ze="focus",he=cu;break;case"focusout":Ze="blur",he=cu;break;case"beforeblur":case"afterblur":he=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=f_;break;case Op:case Pp:case Ip:he=e_;break;case Fp:he=p_;break;case"scroll":case"scrollend":he=Zv;break;case"wheel":he=g_;break;case"copy":case"cut":case"paste":he=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=gp;break;case"toggle":case"beforetoggle":he=v_}var ct=(n&4)!==0,Jt=!ct&&(e==="scroll"||e==="scrollend"),ne=ct?ue!==null?ue+"Capture":null:ue;ct=[];for(var Z=oe,se;Z!==null;){var be=Z;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||ne===null||(be=Yr(Z,ne),be!=null&&ct.push(Ro(Z,be,se))),Jt)break;Z=Z.return}0<ct.length&&(ue=new he(ue,Ze,null,a,ve),Me.push({event:ue,listeners:ct}))}}if((n&7)===0){e:{if(ue=e==="mouseover"||e==="pointerover",he=e==="mouseout"||e==="pointerout",ue&&a!==nu&&(Ze=a.relatedTarget||a.fromElement)&&(Xi(Ze)||Ze[Ci]))break e;if((he||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,he?(Ze=a.relatedTarget||a.toElement,he=oe,Ze=Ze?Xi(Ze):null,Ze!==null&&(Jt=c(Ze),ct=Ze.tag,Ze!==Jt||ct!==5&&ct!==27&&ct!==6)&&(Ze=null)):(he=null,Ze=oe),he!==Ze)){if(ct=pp,be="onMouseLeave",ne="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(ct=gp,be="onPointerLeave",ne="onPointerEnter",Z="pointer"),Jt=he==null?ue:Di(he),se=Ze==null?ue:Di(Ze),ue=new ct(be,Z+"leave",he,a,ve),ue.target=Jt,ue.relatedTarget=se,be=null,Xi(ve)===oe&&(ct=new ct(ne,Z+"enter",Ze,a,ve),ct.target=se,ct.relatedTarget=Jt,be=ct),Jt=be,he&&Ze)t:{for(ct=xb,ne=he,Z=Ze,se=0,be=ne;be;be=ct(be))se++;be=0;for(var nt=Z;nt;nt=ct(nt))be++;for(;0<se-be;)ne=ct(ne),se--;for(;0<be-se;)Z=ct(Z),be--;for(;se--;){if(ne===Z||Z!==null&&ne===Z.alternate){ct=ne;break t}ne=ct(ne),Z=ct(Z)}ct=null}else ct=null;he!==null&&og(Me,ue,he,ct,!1),Ze!==null&&Jt!==null&&og(Me,Jt,Ze,ct,!0)}}e:{if(ue=oe?Di(oe):window,he=ue.nodeName&&ue.nodeName.toLowerCase(),he==="select"||he==="input"&&ue.type==="file")var Ot=Ep;else if(Sp(ue))if(Tp)Ot=R_;else{Ot=A_;var Je=T_}else he=ue.nodeName,!he||he.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?oe&&Bt(oe.elementType)&&(Ot=Ep):Ot=w_;if(Ot&&(Ot=Ot(e,oe))){Mp(Me,Ot,a,ve);break e}Je&&Je(e,ue,oe),e==="focusout"&&oe&&ue.type==="number"&&oe.memoizedProps.value!=null&&Et(ue,"number",ue.value)}switch(Je=oe?Di(oe):window,e){case"focusin":(Sp(Je)||Je.contentEditable==="true")&&(Qs=Je,mu=oe,no=null);break;case"focusout":no=mu=Qs=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Up(Me,a,ve);break;case"selectionchange":if(N_)break;case"keydown":case"keyup":Up(Me,a,ve)}var bt;if(du)e:{switch(e){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Ks?bp(e,a)&&(Rt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(xp&&a.locale!=="ko"&&(Ks||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Ks&&(bt=fp()):(Ia=ve,ru="value"in Ia?Ia.value:Ia.textContent,Ks=!0)),Je=Yl(oe,Rt),0<Je.length&&(Rt=new mp(Rt,e,null,a,ve),Me.push({event:Rt,listeners:Je}),bt?Rt.data=bt:(bt=yp(a),bt!==null&&(Rt.data=bt)))),(bt=b_?y_(e,a):S_(e,a))&&(Rt=Yl(oe,"onBeforeInput"),0<Rt.length&&(Je=new mp("onBeforeInput","beforeinput",null,a,ve),Me.push({event:Je,listeners:Rt}),Je.data=bt)),hb(Me,e,oe,a,ve)}sg(Me,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(Ro(e,u,f)),u=Yr(e,n),u!=null&&r.push(Ro(e,u,f))),e.tag===3)return r;e=e.return}return[]}function xb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function og(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var C=a,j=C.alternate,oe=C.stateNode;if(C=C.tag,j!==null&&j===r)break;C!==5&&C!==26&&C!==27||oe===null||(j=oe,u?(oe=Yr(a,f),oe!=null&&_.unshift(Ro(a,oe,j))):u||(oe=Yr(a,f),oe!=null&&_.push(Ro(a,oe,j)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var vb=/\r\n?/g,_b=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(_b,"")}function cg(e,n){return n=lg(n),lg(e)===n}function Qt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ai(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ai(e,""+r);break;case"className":Re(e,"class",r);break;case"tabIndex":Re(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Re(e,a,r);break;case"style":Ui(e,r,f);break;case"data":if(n!=="object"){Re(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qt(e,n,"name",u.name,u,null),Qt(e,n,"formEncType",u.formEncType,u,null),Qt(e,n,"formMethod",u.formMethod,u,null),Qt(e,n,"formTarget",u.formTarget,u,null)):(Qt(e,n,"encType",u.encType,u,null),Qt(e,n,"method",u.method,u,null),Qt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=oa);break;case"onScroll":r!=null&&At("scroll",e);break;case"onScrollEnd":r!=null&&At("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":At("beforetoggle",e),At("toggle",e),Q(e,"popover",r);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Q(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wi.get(a)||a,Q(e,a,r))}}function Hd(e,n,a,r,u,f){switch(a){case"style":Ui(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?ai(e,r):(typeof r=="number"||typeof r=="bigint")&&ai(e,""+r);break;case"onScroll":r!=null&&At("scroll",e);break;case"onScrollEnd":r!=null&&At("scrollend",e);break;case"onClick":r!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!v.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Q(e,a,r)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",e),At("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(e,n,f,_,a,null)}}u&&Qt(e,n,"srcSet",a.srcSet,a,null),r&&Qt(e,n,"src",a.src,a,null);return;case"input":At("invalid",e);var C=f=_=u=null,j=null,oe=null;for(r in a)if(a.hasOwnProperty(r)){var ve=a[r];if(ve!=null)switch(r){case"name":u=ve;break;case"type":_=ve;break;case"checked":j=ve;break;case"defaultChecked":oe=ve;break;case"value":f=ve;break;case"defaultValue":C=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Qt(e,n,r,ve,a,null)}}In(e,f,C,j,oe,_,u,!1);return;case"select":At("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":r=C;default:Qt(e,n,u,C,a,null)}n=f,a=_,e.multiple=!!r,n!=null?Mn(e,!!r,n,!1):a!=null&&Mn(e,!!r,a,!0);return;case"textarea":At("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":r=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Qt(e,n,_,C,a,null)}Li(e,r,u,f);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Qt(e,n,j,r,a,null)}return;case"dialog":At("beforetoggle",e),At("toggle",e),At("cancel",e),At("close",e);break;case"iframe":case"object":At("load",e);break;case"video":case"audio":for(r=0;r<wo.length;r++)At(wo[r],e);break;case"image":At("error",e),At("load",e);break;case"details":At("toggle",e);break;case"embed":case"source":case"link":At("error",e),At("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(r=a[oe],r!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(e,n,oe,r,a,null)}return;default:if(Bt(n)){for(ve in a)a.hasOwnProperty(ve)&&(r=a[ve],r!==void 0&&Hd(e,n,ve,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Qt(e,n,C,r,a,null))}function bb(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,j=null,oe=null,ve=null;for(he in a){var Me=a[he];if(a.hasOwnProperty(he)&&Me!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":j=Me;default:r.hasOwnProperty(he)||Qt(e,n,he,null,r,Me)}}for(var ue in r){var he=r[ue];if(Me=a[ue],r.hasOwnProperty(ue)&&(he!=null||Me!=null))switch(ue){case"type":f=he;break;case"name":u=he;break;case"checked":oe=he;break;case"defaultChecked":ve=he;break;case"value":_=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Me&&Qt(e,n,ue,he,r,Me)}}Xe(e,_,C,j,oe,ve,f,u);return;case"select":he=_=C=ue=null;for(f in a)if(j=a[f],a.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":he=j;default:r.hasOwnProperty(f)||Qt(e,n,f,null,r,j)}for(u in r)if(f=r[u],j=a[u],r.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":ue=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==j&&Qt(e,n,u,f,r,j)}n=C,a=_,r=he,ue!=null?Mn(e,!!a,ue,!1):!!r!=!!a&&(n!=null?Mn(e,!!a,n,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":he=ue=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Qt(e,n,C,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ue=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Qt(e,n,_,u,r,f)}ii(e,ue,he);return;case"option":for(var Ze in a)if(ue=a[Ze],a.hasOwnProperty(Ze)&&ue!=null&&!r.hasOwnProperty(Ze))switch(Ze){case"selected":e.selected=!1;break;default:Qt(e,n,Ze,null,r,ue)}for(j in r)if(ue=r[j],he=a[j],r.hasOwnProperty(j)&&ue!==he&&(ue!=null||he!=null))switch(j){case"selected":e.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Qt(e,n,j,ue,r,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ue=a[ct],a.hasOwnProperty(ct)&&ue!=null&&!r.hasOwnProperty(ct)&&Qt(e,n,ct,null,r,ue);for(oe in r)if(ue=r[oe],he=a[oe],r.hasOwnProperty(oe)&&ue!==he&&(ue!=null||he!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Qt(e,n,oe,ue,r,he)}return;default:if(Bt(n)){for(var Jt in a)ue=a[Jt],a.hasOwnProperty(Jt)&&ue!==void 0&&!r.hasOwnProperty(Jt)&&Hd(e,n,Jt,void 0,r,ue);for(ve in r)ue=r[ve],he=a[ve],!r.hasOwnProperty(ve)||ue===he||ue===void 0&&he===void 0||Hd(e,n,ve,ue,r,he);return}}for(var ne in a)ue=a[ne],a.hasOwnProperty(ne)&&ue!=null&&!r.hasOwnProperty(ne)&&Qt(e,n,ne,null,r,ue);for(Me in r)ue=r[Me],he=a[Me],!r.hasOwnProperty(Me)||ue===he||ue==null&&he==null||Qt(e,n,Me,ue,r,he)}function ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&ug(_)){for(_=0,C=u.responseEnd,r+=1;r<a.length;r++){var j=a[r],oe=j.startTime;if(oe>C)break;var ve=j.transferSize,Me=j.initiatorType;ve&&ug(Me)&&(j=j.responseEnd,_+=ve*(j<C?1:(C-oe)/(j-oe)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gd=null,jd=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xd=null;function Sb(){var e=window.event;return e&&e.type==="popstate"?e===Xd?!1:(Xd=e,!0):(Xd=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,Eb=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(e){return pg.resolve(null).then(e).catch(Tb)}:hg;function Tb(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function mg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[Ni]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);Er(n)}function gg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Wd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wd(a),xs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ab(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ni])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function wb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$?"||e.data==="$~"}function Yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zd=null;function vg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function _g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function bg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xs(e)}var Mi=new Map,yg=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=B.d;B.d={f:Cb,r:Nb,D:Db,C:Lb,L:Ub,m:zb,X:Pb,S:Ob,M:Ib};function Cb(){var e=Ma.f(),n=Hl();return e||n}function Nb(e){var n=ra(e);n!==null&&n.tag===5&&n.type==="form"?Fm(n):Ma.r(e)}var yr=typeof document>"u"?null:document;function Sg(e,n,a){var r=yr;if(r&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),yg.has(u)||(yg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),On(n,"link",e),dn(n),r.head.appendChild(n)))}}function Db(e){Ma.D(e),Sg("dns-prefetch",e,null)}function Lb(e,n){Ma.C(e,n),Sg("preconnect",e,n)}function Ub(e,n,a){Ma.L(e,n,a);var r=yr;if(r&&e&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=Mr(e)}Mi.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(No(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),On(n,"link",e),dn(n),r.head.appendChild(n)))}}function zb(e,n){Ma.m(e,n);var a=yr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(r)+'"][href="'+Gt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!Mi.has(f)&&(e=b({rel:"modulepreload",href:e},n),Mi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),On(r,"link",e),dn(r),a.head.appendChild(r)}}}function Ob(e,n,a){Ma.S(e,n,a);var r=yr;if(r&&e){var u=mi(r).hoistableStyles,f=Sr(e);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=r.querySelector(No(f)))C.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(f))&&Kd(e,a);var j=_=r.createElement("link");dn(j),On(j,"link",e),j._p=new Promise(function(oe,ve){j.onload=oe,j.onerror=ve}),j.addEventListener("load",function(){C.loading|=1}),j.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ql(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function Pb(e,n){Ma.X(e,n);var a=yr;if(a&&e){var r=mi(a).hoistableScripts,u=Mr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=b({src:e,async:!0},n),(n=Mi.get(u))&&Qd(e,n),f=a.createElement("script"),dn(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Ib(e,n){Ma.M(e,n);var a=yr;if(a&&e){var r=mi(a).hoistableScripts,u=Mr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=b({src:e,async:!0,type:"module"},n),(n=Mi.get(u))&&Qd(e,n),f=a.createElement("script"),dn(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Mg(e,n,a,r){var u=(u=te.current)?Kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=mi(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=mi(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(No(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,a),f||Fb(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=mi(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+Gt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Eg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Fb(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),dn(n),e.head.appendChild(n))}function Mr(e){return'[src="'+Gt(e)+'"]'}function Do(e){return"script[async]"+e}function Tg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),dn(r),On(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=Sr(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=Eg(a),(u=Mi.get(u))&&Kd(r,u),f=(e.ownerDocument||e).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(C,j){_.onload=C,_.onerror=j}),On(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,dn(u),u):(r=a,(u=Mi.get(f))&&(r=b({},a),Qd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),On(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var C=r[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function Ag(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ni]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var C=r.get(_);C?C.push(f):r.set(_,[f])}}return r}function wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Bb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(r.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=Eg(r),(u=Mi.get(u))&&Kd(r,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(C,j){_.onload=C,_.onerror=j}),On(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jd=0;function Hb(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jd===0&&(Jd=62500*yb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(Gb,e),ec=null,$l.call(e))}function Gb(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:I,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function jb(e,n,a,r,u,f,_,C,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Cg(e,n,a,r,u,f,_,C,j,oe,ve,Me){return e=new jb(e,n,a,_,j,oe,ve,Me,C),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ou(f),e}function Ng(e){return e?(e=er,e):er}function Dg(e,n,a,r,u,f){u=Ng(u),r.context===null?r.context=u:r.pendingContext=u,r=ja(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Va(e,r,n),a!==null&&(Qn(a,e,n),co(a,e,n))}function Lg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $d(e,n){Lg(e,n),(e=e.alternate)&&Lg(e,n)}function Ug(e){if(e.tag===13||e.tag===31){var n=Ss(e,67108864);n!==null&&Qn(n,e,67108864),$d(e,67108864)}}function zg(e){if(e.tag===13||e.tag===31){var n=di();n=pi(n);var a=Ss(e,n);a!==null&&Qn(a,e,n),$d(e,n)}}var nc=!0;function Vb(e,n,a,r){var u=U.T;U.T=null;var f=B.p;try{B.p=2,ef(e,n,a,r)}finally{B.p=f,U.T=u}}function Xb(e,n,a,r){var u=U.T;U.T=null;var f=B.p;try{B.p=8,ef(e,n,a,r)}finally{B.p=f,U.T=u}}function ef(e,n,a,r){if(nc){var u=tf(r);if(u===null)kd(e,n,r,ic,a),Pg(e,r);else if(qb(u,e,n,a,r))r.stopPropagation();else if(Pg(e,r),n&4&&-1<Wb.indexOf(e)){for(;u!==null;){var f=ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ne(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var j=1<<31-Be(_);C.entanglements[1]|=j,_&=~j}Ki(f),(Ft&6)===0&&(Bl=De()+500,Ao(0))}}break;case 31:case 13:C=Ss(f,2),C!==null&&Qn(C,f,2),Hl(),$d(f,2)}if(f=tf(r),f===null&&kd(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else kd(e,n,r,null,a)}}function tf(e){return e=iu(e),nf(e)}var ic=null;function nf(e){if(ic=null,e=Xi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case L:return 2;case T:return 8;case ie:case _e:return 32;case Te:return 268435456;default:return 32}default:return 32}}var af=!1,ts=null,ns=null,is=null,Uo=new Map,zo=new Map,as=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(e,n){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Oo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ra(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function qb(e,n,a,r,u){switch(n){case"focusin":return ts=Oo(ts,e,n,a,r,u),!0;case"dragenter":return ns=Oo(ns,e,n,a,r,u),!0;case"mouseover":return is=Oo(is,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Oo(zo.get(f)||null,e,n,a,r,u)),!0}return!1}function Ig(e){var n=Xi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){zg(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=tf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);nu=r,a.target.dispatchEvent(r),nu=null}else return n=ra(a),n!==null&&Ug(n),e.blockedOn=a,!1;n.shift()}return!0}function Fg(e,n,a){ac(e)&&a.delete(n)}function Yb(){af=!1,ts!==null&&ac(ts)&&(ts=null),ns!==null&&ac(ns)&&(ns=null),is!==null&&ac(is)&&(is=null),Uo.forEach(Fg),zo.forEach(Fg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,af||(af=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yb)))}var rc=null;function Bg(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(nf(r||a)===null)continue;break}var f=ra(a);f!==null&&(e.splice(n,3),n-=3,td(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Er(e){function n(j){return sc(j,e)}ts!==null&&sc(ts,e),ns!==null&&sc(ns,e),is!==null&&sc(is,e),Uo.forEach(n),zo.forEach(n);for(var a=0;a<as.length;a++){var r=as[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&as.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[mn]||null;if(typeof f=="function")_||Bg(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[mn]||null)C=_.formAction;else if(nf(u)!==null)continue}else C=_.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Bg(a)}}}function kg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sf(e){this._internalRoot=e}oc.prototype.render=sf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();Dg(a,r,e,n,null,null)},oc.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dg(e.current,2,null,e,null,null),Hl(),n[Ci]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=za();e={blockedOn:null,target:e,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,e),a===0&&Ig(e)}};var Hg=t.version;if(Hg!=="19.2.7")throw Error(s(527,Hg,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{pe=lc.inject(Zb),me=lc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Ym,f=Zm,_=Km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Cg(e,1,!1,null,null,a,r,null,u,f,_,kg),e[Ci]=n.current,Bd(e),new sf(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Ym,_=Zm,C=Km,j=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=Cg(e,1,!0,n,a??null,r,u,j,f,_,C,kg),n.context=Ng(null),a=n.current,r=di(),r=pi(r),u=ja(r),u.callback=null,Va(a,u,r),a=r,n.current.lanes=a,lt(n,a),Ki(n),e[Ci]=n.current,Bd(e),new oc(n)},Io.version="19.2.7",Io}var Qg;function sy(){if(Qg)return lf.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lf.exports=ay(),lf.exports}var ry=sy();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ly=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Jg=o=>{const t=ly(o);return t.charAt(0).toUpperCase()+t.slice(1)},ov=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),cy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Ue.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...m},g)=>Ue.createElement("svg",{ref:g,...uy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:ov("lucide",l),...!c&&!cy(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,S])=>Ue.createElement(p,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(o,t)=>{const i=Ue.forwardRef(({className:s,...l},c)=>Ue.createElement(dy,{ref:c,iconNode:t,className:ov(`lucide-${oy(Jg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Jg(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],hy=pt("arrow-up",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],lv=pt("award",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gy=pt("book-open",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],$g=pt("brush",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],_y=pt("calendar",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gc=pt("check",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sy=pt("chevron-left",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ey=pt("chevron-right",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ay=pt("clock",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ex=pt("compass",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Cy=pt("copy",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cc=pt("cpu",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Xh=pt("download",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Uy=pt("eraser",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Oy=pt("file-spreadsheet",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Iy=pt("file-text",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],tx=pt("git-branch",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],uc=pt("github",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],ff=pt("instagram",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gy=pt("layers",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],hf=pt("linkedin",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Xy=pt("mail",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qy=pt("map-pin",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Zy=pt("maximize-2",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Qy=pt("minimize-2",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],$y=pt("network",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],nx=pt("palette",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],cv=pt("phone-call",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],i1=pt("play",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],s1=pt("quote",a1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],o1=pt("redo-2",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],c1=pt("refresh-cw",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ix=pt("rocket",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ax=pt("search",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],uv=pt("send",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],p1=pt("sparkle",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xo=pt("sparkles",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],x1=pt("terminal",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],sx=pt("trash-2",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],b1=pt("undo-2",_1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pf=pt("user",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],mf=pt("volume-2",S1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],gf=pt("volume-x",M1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],T1=pt("workflow",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rx=pt("x",A1),Wt={name:"Farhan Kabir",title:"AI Engineer & Research Scientist",tagline:"Designing deep linguistic networks to analyze cognitive states, autism indicators, and mental-health text semantics.",about:"I am an AI Engineer, Researcher, and Full Stack Developer. I build highly robust predictive AI systems, conduct quantitative linguistic analysis, and implement Stripe-polished digital experiences.",focus:"Evaluating Large Language Models for automated cognitive health screenings and zero-shot NLP behavioral diagnostic support.",projects:[{id:"typerush",title:"TypeRush",description:"An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.",category:"AI",techStack:["React 19","TailwindCSS","Web Audio API","Express","Gemini API","Firebase"],architecture:"Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.",timeline:"Sep 2024 - Mar 2025",metrics:[{label:"Audio latency",value:"0ms (Vanilla)"},{label:"Matchmaking Sync",value:"<25ms"},{label:"Frame rate",value:"60fps"}],problem:"Traditional typing practice software lacks sensory engagement and interactive mechanics.",solution:"TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.",roadmap:["Real-time payload glitch attacks","WebAssembly client-side offline dictionary sync"]},{id:"ink-home",title:"The Ink Home",description:"An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.",category:"Productivity",techStack:["React 18","Vite","Three.js","Framer Motion","TailwindCSS","Node.js"],architecture:"Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.",timeline:"Jan 2025 - Present",metrics:[{label:"Avatar fetch success",value:"100%"},{label:"RSS sync latency",value:"<320ms"},{label:"Scene frame rate",value:"60fps"}],problem:"Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.",solution:"The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.",roadmap:["WebGL spatial audio integration","Instant newsletter subscription via Substack API"]},{id:"safeside",title:"SafeSide Predictor",description:"A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.",category:"SaaS",techStack:["React","Supabase","TailwindCSS","Express","Gemini AI","Recharts"],architecture:"Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.",timeline:"Mar 2025 - Present",metrics:[{label:"Poisson model F1",value:"0.88"},{label:"Live updates latency",value:"<150ms"},{label:"Prediction checks",value:"Automated"}],problem:"Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.",solution:"SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.",roadmap:["Weather-impact modeling via OpenWeather API","Multi-league Poisson distribution charts"]},{id:"emotion-detection",title:"Multimodal Emotion Recognizer",description:"A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.",category:"NLP",techStack:["Python","BERT","Wav2Vec 2.0","React","FastAPI"],architecture:"Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.",timeline:"Feb 2023 - Oct 2023",metrics:[{label:"Bimodal accuracy",value:"92.3%"},{label:"Speech inference",value:"18ms"},{label:"Dataset size",value:"50GB"}],problem:"Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.",solution:"This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.",roadmap:["Edge deployment on mobile web views","Expansion to diagnostic indicators for pediatric developmental screens"]},{id:"portfolio-os",title:"FarhanOS Living Environment",description:"The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.",category:"Design",techStack:["React","TailwindCSS","Framer Motion","Express","Gemini API"],architecture:"Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.",timeline:"Mar 2026 - Present",metrics:[{label:"Render pipeline frame rate",value:"120fps"},{label:"Asset payload size",value:"142KB"},{label:"Custom APIs",value:"3"}],problem:"Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.",solution:"FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.",roadmap:["Add support for complete sandboxed terminal commands","Introduce voice command parsing natively via browser audio APIs"]}],papers:[{id:"prompt-break-2025",title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",authors:"Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah",journal:"IEEE ICCIT",year:2025,abstract:"Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.",methodology:"Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.",dataset:"Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.",pipeline:"User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.",results:[{metric:"Detection Accuracy",score:"94.2%"},{metric:"False Positive Rate",score:"2.8%"},{metric:"Latency overhead",score:"4.5ms"},{metric:"Jailbreak F1 Score",score:"0.935"}],citation:"Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE)."},{id:"live-interview-2025",title:"AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",authors:"Farhan Kabir, M Arman Reza Shah, Razat Biswas",journal:"IEEE ICCIT",year:2025,abstract:"Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.",methodology:"Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.",dataset:"1,200 mock interview recordings annotated by human resource professionals.",pipeline:"Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.",results:[{metric:"Late-fusion Accuracy",score:"91.6%"},{metric:"Response Transcribing",score:"110ms"},{metric:"Posture classification",score:"93.2%"},{metric:"Evaluation Agreement",score:"0.87 (Kappa)"}],citation:"Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE)."},{id:"emotion-detection-2025",title:"Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, M. K. Habib Khan, Fazle Rabby",journal:"IEEE ECCE",year:2025,abstract:"Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.",methodology:"Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.",dataset:"90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.",pipeline:"Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.",results:[{metric:"BERT Accuracy",score:"88.5%"},{metric:"RoBERTa F1-Score",score:"0.908"},{metric:"Training latency",score:"1.2 hrs"},{metric:"Inference speed",score:"3.8ms"}],citation:"Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE)."},{id:"depression-detection-2023",title:"Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",journal:"IEEE ICCIT",year:2023,abstract:"Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.",methodology:"Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.",dataset:"120,000 distinct anonymized posts annotated by clinical practitioners.",pipeline:"Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.",results:[{metric:"RoBERTa-Clinical F1",score:"0.914"},{metric:"Baseline Zero-shot F1",score:"0.781"},{metric:"Sensitivity",score:"0.893"},{metric:"Specificity",score:"0.942"}],citation:"Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE)."}],timeline:[{year:2026,title:"Architect & AI Researcher",company:"Cognitive Diagnostics Lab",role:"Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.",description:"Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.",achievements:["Designed custom zero-shot and classification-optimized clinical prediction systems","Implemented modern low-latency model evaluation dashboards processing high-volume text queues","Established rigid testing criteria ensuring patient confidentiality and data safety parameters"],technologies:["PyTorch","Transformer NLP","React/Next.js","Go","TailwindCSS v4"]},{year:2024,title:"Senior AI System Dev",company:"Synthetix Solutions",role:"Backend AI systems Architect constructing robust SaaS solutions for custom automation.",description:"Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.",achievements:["Decreased standard inference lag by over 30% through selective quantization and model distillation techniques","Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles","Orchestrated automated data extraction workers scaling securely according to traffic profiles"],technologies:["Express/Node.js","Redis","Python","Docker","Google Cloud Platform"]},{year:2022,title:"Full Stack Engineer & Researcher",company:"Mental Health Tech",role:"Frontend lead and mental wellness text classifier research dev.",description:"Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.",achievements:["Created the first generation interactive mental wellness support system evaluating distress levels","Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics","Designed completely responsive portfolio workspaces utilizing high-frequency animations"],technologies:["React","Redux","D3.js","Hugging Face Transformers","Python/Flask"]},{year:2020,title:"Open Source Contributor & Dev",company:"Independent / Farhan Lab",role:"Developing open source utilities and studying linguistic text processing.",description:"Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.",achievements:["Built and deployed TypeRush, an open-source terminal typing game","Developed interactive developer portfolios earning deep community feedback","Acquired expertise in system design, Docker containers, and React orchestration"],technologies:["React","Docker","Framer Motion","Node.js","SQLite"]}],professionalTimeline:[{year:"April 2024 - Present",title:"Lead Developer",company:"Auto Spark",role:"Lead Developer",description:"Developed responsive web applications, ensuring compatibility across various browsers and devices. Implemented efficient front-end solutions and collaborated on back-end development tasks.",achievements:["Developed responsive web applications, ensuring compatibility across various browsers and devices.","Implemented efficient front-end solutions and collaborated on back-end development tasks."],technologies:["TypeScript","React","REST APIs","Node.js","Tailwind"],badgeColor:"emerald"},{year:"2022 - 2023",title:"Full Stack Developer (Remote)",company:"Hire My Tech",role:"Full Stack Developer",description:"Built responsive web applications using React and modern JavaScript frameworks, collaborated with design team on user experience improvements.",achievements:["Built responsive web applications using React and modern JavaScript frameworks.","Collaborated with design team on user experience improvements."],technologies:["React","Next.js","PostgreSQL","Dexie.js","Tailwind"],badgeColor:"indigo"},{year:"2020 - 2021",title:"UI/UX Designer",company:"Design Studio",role:"UI/UX Designer",description:"Created user-centered designs for web and mobile applications, conducted user research and usability testing.",achievements:["Created user-centered designs for web and mobile applications.","Conducted user research and usability testing."],technologies:["TypeScript","Node.js","SQLite","Tailwind"],badgeColor:"pink"},{year:"2019 - 2020",title:"Junior Developer",company:"WebAgency",role:"Junior Developer",description:"Developed websites and web applications, learned modern development practices and agile methodologies.",achievements:["Developed websites and web applications.","Learned modern development practices and agile methodologies."],technologies:["Next.js","Webpack","CSS Modules","Node.js"],badgeColor:"amber"}],articles:[{id:"nlp-advances-2026",title:"The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI",category:"Research",readTime:"6 min read",date:"May 12, 2026",excerpt:"Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.",content:"Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers."},{id:"saas-architecture-2025",title:"Designing Zero-Cold-Start SaaS Applications for Hugging Face Models",category:"Engineering",readTime:"8 min read",date:"Nov 24, 2025",excerpt:"An architect's blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.",content:"Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user's client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat."},{id:"ux-design-developers",title:"The Aesthetic Developer Engine: Why High-Performance Styling is Critical",category:"Design",readTime:"5 min read",date:"Jan 15, 2025",excerpt:"Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.",content:"Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience."}],buildLogs:[{id:"bl-v1.4",date:"May 2026",version:"v1.4.2",title:"Audio Node Fusion & Neural Voice Synthesizer",description:"Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.",tasksCompleted:["Constructed custom caching layer for audio binaries on the server","Implemented voice control deck with visual waveform indicator","Configured optimized low-footprint audio transmission protocols"],metricsChanged:[{metric:"Voice rendering",before:"Not Supported",after:"1.2s avg"},{metric:"Client weight",before:"1.4MB",after:"1.1MB"}]},{id:"bl-v1.3",date:"Feb 2026",version:"v1.3.0",title:"Command Palette & Context Engine Upgrade",description:"Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.",tasksCompleted:["Built full-text token matching indexing portfolio vectors","Added smooth canvas overlays using Framer Motion","Mapped custom system operations (AI Site Tour, OS Theme Presets)"],metricsChanged:[{metric:"Search launch lag",before:"420ms",after:"3ms"},{metric:"Indices cached",before:"0",after:"48 items"}]}],skills:[{name:"PyTorch",category:"AI/ML",weight:5},{name:"Large Language Models",category:"AI/ML",weight:5},{name:"Hugging Face & BERT",category:"AI/ML",weight:5},{name:"Clinical NLP Pipelines",category:"AI/ML",weight:5},{name:"Python (NumPy, SciPy)",category:"AI/ML",weight:4},{name:"React / Next.js",category:"Frontend",weight:5},{name:"Tailwind CSS v4",category:"Frontend",weight:5},{name:"Framer Motion",category:"Frontend",weight:4},{name:"D3.js Visualization",category:"Frontend",weight:4},{name:"Node.js & Express",category:"Backend",weight:5},{name:"Go (Golang)",category:"Backend",weight:4},{name:"Redis Caching",category:"Backend",weight:4},{name:"PostgreSQL",category:"Backend",weight:5},{name:"Docker / Containers",category:"Systems & Devops",weight:5},{name:"Git & Linux",category:"Systems & Devops",weight:5},{name:"Academic Research",category:"Research & Science",weight:5},{name:"Mental Health Tech",category:"Research & Science",weight:5}],gardenNodes:[{id:"nlp",label:"Clinical NLP",category:"Research"},{id:"transformers",label:"Transformers",category:"Intelligence"},{id:"bert",label:"BERT Models",category:"Intelligence"},{id:"depression",label:"Depression Dialectics",category:"Research"},{id:"autism",label:"Autism Micro-shifts",category:"Research"},{id:"ethics",label:"Research Ethics",category:"Humanity"},{id:"saas",label:"AI SaaS Architectures",category:"Engineering"},{id:"telemetry",label:"Telemetry Profiling",category:"Engineering"},{id:"databases",label:"PostgreSQL Schema",category:"Engineering"}]};async function w1(o){const t=window.atob(o),i=t.length,s=new Uint8Array(i);for(let x=0;x<i;x++)s[x]=t.charCodeAt(x);const l=Math.floor(i/2),c=new Int16Array(s.buffer,0,l),h=window.AudioContext||window.webkitAudioContext;if(!h)throw new Error("Web Audio API is not supported in this browser.");const m=new h,p=m.createBuffer(1,l,24e3),S=p.getChannelData(0);for(let x=0;x<l;x++)S[x]=c[x]/32768;const b=m.createBufferSource();return b.buffer=p,b.connect(m.destination),b.start(0),{source:b,ctx:m,stop:()=>{try{b.stop(),m.close()}catch{}}}}function ox(o=800,t=.03){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const s=new i,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(o,s.currentTime),l.frequency.exponentialRampToValueAtTime(100,s.currentTime+t),c.gain.setValueAtTime(.015,s.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),l.connect(c),c.connect(s.destination),l.start(),l.stop(s.currentTime+t),setTimeout(()=>s.close(),200)}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="184",R1=0,lx=1,C1=2,Pc=1,N1=2,Wo=3,ps=0,ei=1,wi=2,Na=0,kr=1,jc=2,cx=3,ux=4,D1=5,ks=100,L1=101,U1=102,z1=103,O1=104,P1=200,I1=201,F1=202,B1=203,Jf=204,$f=205,k1=206,H1=207,G1=208,j1=209,V1=210,X1=211,W1=212,q1=213,Y1=214,eh=0,th=1,nh=2,Gr=3,ih=4,ah=5,sh=6,rh=7,dv=0,Z1=1,K1=2,na=0,fv=1,hv=2,pv=3,mv=4,gv=5,xv=6,vv=7,_v=300,Vs=301,jr=302,xf=303,vf=304,Qc=306,oh=1e3,Ca=1001,lh=1002,Pn=1003,Q1=1004,dc=1005,Hn=1006,_f=1007,Gs=1008,Ri=1009,bv=1010,yv=1011,Zo=1012,qh=1013,aa=1014,ea=1015,La=1016,Yh=1017,Zh=1018,Ko=1020,Sv=35902,Mv=35899,Ev=1021,Tv=1022,Hi=1023,Ua=1026,js=1027,Av=1028,Kh=1029,Xs=1030,Qh=1031,Jh=1033,Ic=33776,Fc=33777,Bc=33778,kc=33779,ch=35840,uh=35841,dh=35842,fh=35843,hh=36196,ph=37492,mh=37496,gh=37488,xh=37489,Vc=37490,vh=37491,_h=37808,bh=37809,yh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,Ah=37815,wh=37816,Rh=37817,Ch=37818,Nh=37819,Dh=37820,Lh=37821,Uh=36492,zh=36494,Oh=36495,Ph=36283,Ih=36284,Xc=36285,Fh=36286,J1=3200,dx=0,$1=1,fs="",Ti="srgb",Wc="srgb-linear",qc="linear",qt="srgb",Tr=7680,fx=519,eS=512,tS=513,nS=514,$h=515,iS=516,aS=517,ep=518,sS=519,hx=35044,px="300 es",ta=2e3,Yc=2001;function rS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oS(){const o=Zc("canvas");return o.style.display="block",o}const mx={};function gx(...o){const t="THREE."+o.shift();console.log(t,...o)}function wv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function dt(...o){o=wv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ut(...o){o=wv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Bh(...o){const t=o.join(" ");t in mx||(mx[t]=!0,dt(...o))}function lS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const cS={[eh]:th,[nh]:sh,[ih]:rh,[Gr]:ah,[th]:eh,[sh]:nh,[rh]:ih,[ah]:Gr};class qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=Math.PI/180,kh=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function uS(o,t){return(o%t+t)%t}function yf(o,t,i){return(1-i)*o+i*t}function Fo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const sp=class sp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sp.prototype.isVector2=!0;let Yt=sp;class Wr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,m){let g=s[l+0],p=s[l+1],S=s[l+2],b=s[l+3],x=c[h+0],E=c[h+1],w=c[h+2],D=c[h+3];if(b!==D||g!==x||p!==E||S!==w){let M=g*x+p*E+S*w+b*D;M<0&&(x=-x,E=-E,w=-w,D=-D,M=-M);let y=1-m;if(M<.9995){const N=Math.acos(M),I=Math.sin(N);y=Math.sin(y*N)/I,m=Math.sin(m*N)/I,g=g*y+x*m,p=p*y+E*m,S=S*y+w*m,b=b*y+D*m}else{g=g*y+x*m,p=p*y+E*m,S=S*y+w*m,b=b*y+D*m;const N=1/Math.sqrt(g*g+p*p+S*S+b*b);g*=N,p*=N,S*=N,b*=N}}t[i]=g,t[i+1]=p,t[i+2]=S,t[i+3]=b}static multiplyQuaternionsFlat(t,i,s,l,c,h){const m=s[l],g=s[l+1],p=s[l+2],S=s[l+3],b=c[h],x=c[h+1],E=c[h+2],w=c[h+3];return t[i]=m*w+S*b+g*E-p*x,t[i+1]=g*w+S*x+p*b-m*E,t[i+2]=p*w+S*E+m*x-g*b,t[i+3]=S*w-m*b-g*x-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,m=Math.cos,g=Math.sin,p=m(s/2),S=m(l/2),b=m(c/2),x=g(s/2),E=g(l/2),w=g(c/2);switch(h){case"XYZ":this._x=x*S*b+p*E*w,this._y=p*E*b-x*S*w,this._z=p*S*w+x*E*b,this._w=p*S*b-x*E*w;break;case"YXZ":this._x=x*S*b+p*E*w,this._y=p*E*b-x*S*w,this._z=p*S*w-x*E*b,this._w=p*S*b+x*E*w;break;case"ZXY":this._x=x*S*b-p*E*w,this._y=p*E*b+x*S*w,this._z=p*S*w+x*E*b,this._w=p*S*b-x*E*w;break;case"ZYX":this._x=x*S*b-p*E*w,this._y=p*E*b+x*S*w,this._z=p*S*w-x*E*b,this._w=p*S*b+x*E*w;break;case"YZX":this._x=x*S*b+p*E*w,this._y=p*E*b+x*S*w,this._z=p*S*w-x*E*b,this._w=p*S*b-x*E*w;break;case"XZY":this._x=x*S*b-p*E*w,this._y=p*E*b-x*S*w,this._z=p*S*w+x*E*b,this._w=p*S*b+x*E*w;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],m=i[5],g=i[9],p=i[2],S=i[6],b=i[10],x=s+m+b;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(S-g)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>m&&s>b){const E=2*Math.sqrt(1+s-m-b);this._w=(S-g)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(m>b){const E=2*Math.sqrt(1+m-s-b);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(g+S)/E}else{const E=2*Math.sqrt(1+b-s-m);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(g+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,m=i._x,g=i._y,p=i._z,S=i._w;return this._x=s*S+h*m+l*p-c*g,this._y=l*S+h*g+c*m-s*p,this._z=c*S+h*p+s*g-l*m,this._w=h*S-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,h=-h,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),S=Math.sin(p);g=Math.sin(g*p)/S,i=Math.sin(i*p)/S,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rp=class rp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,m=t.z,g=t.w,p=2*(h*l-m*s),S=2*(m*i-c*l),b=2*(c*s-h*i);return this.x=i+g*p+h*b-m*S,this.y=s+g*S+m*p-c*b,this.z=l+g*b+c*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*h-s*g,this.z=s*m-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sf.copy(this).projectOnVector(t),this.sub(Sf)}reflect(t){return this.sub(Sf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rp.prototype.isVector3=!0;let re=rp;const Sf=new re,xx=new Wr,op=class op{constructor(t,i,s,l,c,h,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p)}set(t,i,s,l,c,h,m,g,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=m,S[3]=i,S[4]=c,S[5]=g,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[3],g=s[6],p=s[1],S=s[4],b=s[7],x=s[2],E=s[5],w=s[8],D=l[0],M=l[3],y=l[6],N=l[1],I=l[4],z=l[7],V=l[2],O=l[5],H=l[8];return c[0]=h*D+m*N+g*V,c[3]=h*M+m*I+g*O,c[6]=h*y+m*z+g*H,c[1]=p*D+S*N+b*V,c[4]=p*M+S*I+b*O,c[7]=p*y+S*z+b*H,c[2]=x*D+E*N+w*V,c[5]=x*M+E*I+w*O,c[8]=x*y+E*z+w*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],S=t[8];return i*h*S-i*m*p-s*c*S+s*m*g+l*c*p-l*h*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],S=t[8],b=S*h-m*p,x=m*g-S*c,E=p*c-h*g,w=i*b+s*x+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/w;return t[0]=b*D,t[1]=(l*p-S*s)*D,t[2]=(m*s-l*h)*D,t[3]=x*D,t[4]=(S*i-l*g)*D,t[5]=(l*c-m*i)*D,t[6]=E*D,t[7]=(s*g-p*i)*D,t[8]=(h*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*m)+h+t,-l*p,l*g,-l*(-p*h+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(Mf.makeScale(t,i)),this}rotate(t){return this.premultiply(Mf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Mf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};op.prototype.isMatrix3=!0;let xt=op;const Mf=new xt,vx=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:Wc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===qt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qt&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Wc]:{primaries:t,whitePoint:s,transfer:qc,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Nt=dS();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ar;class fS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=Zc("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hS=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?c.push(Ef(l[h].image)):c.push(Ef(l[h]))}else c=Ef(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ef(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let pS=0;const Tf=new re;class Xn extends qs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ca,l=Ca,c=Hn,h=Gs,m=Hi,g=Ri,p=Xn.DEFAULT_ANISOTROPY,S=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Qo(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=_v;Xn.DEFAULT_ANISOTROPY=1;const lp=class lp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,p=g[0],S=g[4],b=g[8],x=g[1],E=g[5],w=g[9],D=g[2],M=g[6],y=g[10];if(Math.abs(S-x)<.01&&Math.abs(b-D)<.01&&Math.abs(w-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(b+D)<.1&&Math.abs(w+M)<.1&&Math.abs(p+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,z=(E+1)/2,V=(y+1)/2,O=(S+x)/4,H=(b+D)/4,R=(w+M)/4;return I>z&&I>V?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=O/s,c=H/s):z>V?z<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),s=O/l,c=R/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=H/c,l=R/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-w)*(M-w)+(b-D)*(b-D)+(x-S)*(x-S));return Math.abs(N)<.001&&(N=1),this.x=(M-w)/N,this.y=(b-D)/N,this.z=(x-S)/N,this.w=Math.acos((p+E+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lp.prototype.isVector4=!0;let pn=lp;class mS extends qs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Xn(l),h=s.count;for(let m=0;m<h;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends mS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Rv extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gS extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=class Kc{constructor(t,i,s,l,c,h,m,g,p,S,b,x,E,w,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p,S,b,x,E,w,D,M)}set(t,i,s,l,c,h,m,g,p,S,b,x,E,w,D,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=m,y[13]=g,y[2]=p,y[6]=S,y[10]=b,y[14]=x,y[3]=E,y[7]=w,y[11]=D,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),h=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),S=Math.cos(c),b=Math.sin(c);if(t.order==="XYZ"){const x=h*S,E=h*b,w=m*S,D=m*b;i[0]=g*S,i[4]=-g*b,i[8]=p,i[1]=E+w*p,i[5]=x-D*p,i[9]=-m*g,i[2]=D-x*p,i[6]=w+E*p,i[10]=h*g}else if(t.order==="YXZ"){const x=g*S,E=g*b,w=p*S,D=p*b;i[0]=x+D*m,i[4]=w*m-E,i[8]=h*p,i[1]=h*b,i[5]=h*S,i[9]=-m,i[2]=E*m-w,i[6]=D+x*m,i[10]=h*g}else if(t.order==="ZXY"){const x=g*S,E=g*b,w=p*S,D=p*b;i[0]=x-D*m,i[4]=-h*b,i[8]=w+E*m,i[1]=E+w*m,i[5]=h*S,i[9]=D-x*m,i[2]=-h*p,i[6]=m,i[10]=h*g}else if(t.order==="ZYX"){const x=h*S,E=h*b,w=m*S,D=m*b;i[0]=g*S,i[4]=w*p-E,i[8]=x*p+D,i[1]=g*b,i[5]=D*p+x,i[9]=E*p-w,i[2]=-p,i[6]=m*g,i[10]=h*g}else if(t.order==="YZX"){const x=h*g,E=h*p,w=m*g,D=m*p;i[0]=g*S,i[4]=D-x*b,i[8]=w*b+E,i[1]=b,i[5]=h*S,i[9]=-m*S,i[2]=-p*S,i[6]=E*b+w,i[10]=x-D*b}else if(t.order==="XZY"){const x=h*g,E=h*p,w=m*g,D=m*p;i[0]=g*S,i[4]=-b,i[8]=p*S,i[1]=x*b+D,i[5]=h*S,i[9]=E*b-w,i[2]=w*b-E,i[6]=m*S,i[10]=D*b+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,vS)}lookAt(t,i,s){const l=this.elements;return fi.subVectors(t,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),rs.crossVectors(s,fi),rs.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),rs.crossVectors(s,fi)),rs.normalize(),fc.crossVectors(fi,rs),l[0]=rs.x,l[4]=fc.x,l[8]=fi.x,l[1]=rs.y,l[5]=fc.y,l[9]=fi.y,l[2]=rs.z,l[6]=fc.z,l[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[4],g=s[8],p=s[12],S=s[1],b=s[5],x=s[9],E=s[13],w=s[2],D=s[6],M=s[10],y=s[14],N=s[3],I=s[7],z=s[11],V=s[15],O=l[0],H=l[4],R=l[8],F=l[12],J=l[1],G=l[5],$=l[9],ce=l[13],fe=l[2],q=l[6],U=l[10],B=l[14],le=l[3],ge=l[7],ae=l[11],A=l[15];return c[0]=h*O+m*J+g*fe+p*le,c[4]=h*H+m*G+g*q+p*ge,c[8]=h*R+m*$+g*U+p*ae,c[12]=h*F+m*ce+g*B+p*A,c[1]=S*O+b*J+x*fe+E*le,c[5]=S*H+b*G+x*q+E*ge,c[9]=S*R+b*$+x*U+E*ae,c[13]=S*F+b*ce+x*B+E*A,c[2]=w*O+D*J+M*fe+y*le,c[6]=w*H+D*G+M*q+y*ge,c[10]=w*R+D*$+M*U+y*ae,c[14]=w*F+D*ce+M*B+y*A,c[3]=N*O+I*J+z*fe+V*le,c[7]=N*H+I*G+z*q+V*ge,c[11]=N*R+I*$+z*U+V*ae,c[15]=N*F+I*ce+z*B+V*A,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],m=t[5],g=t[9],p=t[13],S=t[2],b=t[6],x=t[10],E=t[14],w=t[3],D=t[7],M=t[11],y=t[15],N=g*E-p*x,I=m*E-p*b,z=m*x-g*b,V=h*E-p*S,O=h*x-g*S,H=h*b-m*S;return i*(D*N-M*I+y*z)-s*(w*N-M*V+y*O)+l*(w*I-D*V+y*H)-c*(w*z-D*O+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],S=t[8],b=t[9],x=t[10],E=t[11],w=t[12],D=t[13],M=t[14],y=t[15],N=i*m-s*h,I=i*g-l*h,z=i*p-c*h,V=s*g-l*m,O=s*p-c*m,H=l*p-c*g,R=S*D-b*w,F=S*M-x*w,J=S*y-E*w,G=b*M-x*D,$=b*y-E*D,ce=x*y-E*M,fe=N*ce-I*$+z*G+V*J-O*F+H*R;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return t[0]=(m*ce-g*$+p*G)*q,t[1]=(l*$-s*ce-c*G)*q,t[2]=(D*H-M*O+y*V)*q,t[3]=(x*O-b*H-E*V)*q,t[4]=(g*J-h*ce-p*F)*q,t[5]=(i*ce-l*J+c*F)*q,t[6]=(M*z-w*H-y*I)*q,t[7]=(S*H-x*z+E*I)*q,t[8]=(h*$-m*J+p*R)*q,t[9]=(s*J-i*$-c*R)*q,t[10]=(w*O-D*z+y*N)*q,t[11]=(b*z-S*O-E*N)*q,t[12]=(m*F-h*G-g*R)*q,t[13]=(i*G-s*F+l*R)*q,t[14]=(D*I-w*V-M*N)*q,t[15]=(S*V-b*I+x*N)*q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,m=t.y,g=t.z,p=c*h,S=c*m;return this.set(p*h+s,p*m-l*g,p*g+l*m,0,p*m+l*g,S*m+s,S*g-l*h,0,p*g-l*m,S*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,m=i._z,g=i._w,p=c+c,S=h+h,b=m+m,x=c*p,E=c*S,w=c*b,D=h*S,M=h*b,y=m*b,N=g*p,I=g*S,z=g*b,V=s.x,O=s.y,H=s.z;return l[0]=(1-(D+y))*V,l[1]=(E+z)*V,l[2]=(w-I)*V,l[3]=0,l[4]=(E-z)*O,l[5]=(1-(x+y))*O,l[6]=(M+N)*O,l[7]=0,l[8]=(w+I)*H,l[9]=(M-N)*H,l[10]=(1-(x+D))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=wr.set(l[0],l[1],l[2]).length();const m=wr.set(l[4],l[5],l[6]).length(),g=wr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ii.copy(this);const p=1/h,S=1/m,b=1/g;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=b,Ii.elements[9]*=b,Ii.elements[10]*=b,i.setFromRotationMatrix(Ii),s.x=h,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,h,m=ta,g=!1){const p=this.elements,S=2*c/(i-t),b=2*c/(s-l),x=(i+t)/(i-t),E=(s+l)/(s-l);let w,D;if(g)w=c/(h-c),D=h*c/(h-c);else if(m===ta)w=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(m===Yc)w=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=b,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,m=ta,g=!1){const p=this.elements,S=2/(i-t),b=2/(s-l),x=-(i+t)/(i-t),E=-(s+l)/(s-l);let w,D;if(g)w=1/(h-c),D=h/(h-c);else if(m===ta)w=-2/(h-c),D=-(h+c)/(h-c);else if(m===Yc)w=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=b,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=w,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Kc.prototype.isMatrix4=!0;let Sn=Kc;const wr=new re,Ii=new Sn,xS=new re(0,0,0),vS=new re(1,1,1),rs=new re,fc=new re,fi=new re,bx=new Sn,yx=new Wr;class Ws{constructor(t=0,i=0,s=0,l=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],m=l[8],g=l[1],p=l[5],S=l[9],b=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-b,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Dt(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-S,E),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yx.setFromEuler(this),this.setFromQuaternion(yx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Cv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _S=0;const Sx=new re,Rr=new Wr,Ea=new Sn,hc=new re,Bo=new re,bS=new re,yS=new Wr,Mx=new re(1,0,0),Ex=new re(0,1,0),Tx=new re(0,0,1),Ax={type:"added"},SS={type:"removed"},Cr={type:"childadded",child:null},Af={type:"childremoved",child:null};class ti extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new re,i=new Ws,s=new Wr,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new xt}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Mx,t)}rotateY(t){return this.rotateOnAxis(Ex,t)}rotateZ(t){return this.rotateOnAxis(Tx,t)}translateOnAxis(t,i){return Sx.copy(t).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mx,t)}translateY(t){return this.translateOnAxis(Ex,t)}translateZ(t){return this.translateOnAxis(Tx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hc.copy(t):hc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Bo,hc,this.up):Ea.lookAt(hc,Bo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ax),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(SS),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ax),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,bS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,yS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,S=g.length;p<S;p++){const b=g[p];c(t.shapes,b)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=h(t.geometries),g=h(t.materials),p=h(t.textures),S=h(t.images),b=h(t.shapes),x=h(t.skeletons),E=h(t.animations),w=h(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),b.length>0&&(s.shapes=b),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),w.length>0&&(s.nodes=w)}return s.object=l,s;function h(m){const g=[];for(const p in m){const S=m[p];delete S.metadata,g.push(S)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ti.DEFAULT_UP=new re(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),y=this._getHandJoint(p,D);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const S=p.joints["index-finger-tip"],b=p.joints["thumb-tip"],x=S.position.distanceTo(b.position),E=.02,w=.005;p.inputState.pinching&&x>E+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=E-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Rf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class It{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Nt.workingColorSpace){if(t=uS(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rf(h,c,t+1/3),this.g=Rf(h,c,t),this.b=Rf(h,c,t-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(t,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=Nv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Nt.workingToColorSpace(kn.copy(this),t),Math.round(Dt(kn.r*255,0,255))*65536+Math.round(Dt(kn.g*255,0,255))*256+Math.round(Dt(kn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(kn.copy(this),i);const s=kn.r,l=kn.g,c=kn.b,h=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const S=(m+h)/2;if(m===h)g=0,p=0;else{const b=h-m;switch(p=S<=.5?b/(h+m):b/(2-h-m),h){case s:g=(l-c)/b+(l<c?6:0);break;case l:g=(c-s)/b+2;break;case c:g=(s-l)/b+4;break}g/=6}return t.h=g,t.s=p,t.l=S,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(kn.copy(this),i),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ti){Nt.workingToColorSpace(kn.copy(this),t);const i=kn.r,s=kn.g,l=kn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(mc);const s=yf(os.h,mc.h,i),l=yf(os.s,mc.s,i),c=yf(os.l,mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new It;It.NAMES=Nv;class np{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=i}clone(){return new np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ES extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ws,this.environmentIntensity=1,this.environmentRotation=new Ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new re,Ta=new re,Cf=new re,Aa=new re,Nr=new re,Dr=new re,wx=new re,Nf=new re,Df=new re,Lf=new re,Uf=new pn,zf=new pn,Of=new pn;class ki{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Fi.subVectors(t,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Fi.subVectors(l,i),Ta.subVectors(s,i),Cf.subVectors(t,i);const h=Fi.dot(Fi),m=Fi.dot(Ta),g=Fi.dot(Cf),p=Ta.dot(Ta),S=Ta.dot(Cf),b=h*p-m*m;if(b===0)return c.set(0,0,0),null;const x=1/b,E=(p*g-m*S)*x,w=(h*S-m*g)*x;return c.set(1-E-w,w,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,h,m,g){return this.getBarycoord(t,i,s,l,Aa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Aa.x),g.addScaledVector(h,Aa.y),g.addScaledVector(m,Aa.z),g)}static getInterpolatedAttribute(t,i,s,l,c,h){return Uf.setScalar(0),zf.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(t,i),zf.fromBufferAttribute(t,s),Of.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Uf,c.x),h.addScaledVector(zf,c.y),h.addScaledVector(Of,c.z),h}static isFrontFacing(t,i,s,l){return Fi.subVectors(s,i),Ta.subVectors(t,i),Fi.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Fi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,m;Nr.subVectors(l,s),Dr.subVectors(c,s),Nf.subVectors(t,s);const g=Nr.dot(Nf),p=Dr.dot(Nf);if(g<=0&&p<=0)return i.copy(s);Df.subVectors(t,l);const S=Nr.dot(Df),b=Dr.dot(Df);if(S>=0&&b<=S)return i.copy(l);const x=g*b-S*p;if(x<=0&&g>=0&&S<=0)return h=g/(g-S),i.copy(s).addScaledVector(Nr,h);Lf.subVectors(t,c);const E=Nr.dot(Lf),w=Dr.dot(Lf);if(w>=0&&E<=w)return i.copy(c);const D=E*p-g*w;if(D<=0&&p>=0&&w<=0)return m=p/(p-w),i.copy(s).addScaledVector(Dr,m);const M=S*w-E*b;if(M<=0&&b-S>=0&&E-w>=0)return wx.subVectors(c,l),m=(b-S)/(b-S+(E-w)),i.copy(l).addScaledVector(wx,m);const y=1/(M+D+x);return h=D*y,m=x*y,i.copy(s).addScaledVector(Nr,h).addScaledVector(Dr,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,m=c.count;h<m;h++)t.isMesh===!0?t.getVertexPosition(h,Bi):Bi.fromBufferAttribute(c,h),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),xc.subVectors(this.max,ko),Lr.subVectors(t.a,ko),Ur.subVectors(t.b,ko),zr.subVectors(t.c,ko),ls.subVectors(Ur,Lr),cs.subVectors(zr,Ur),Os.subVectors(Lr,zr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Os.z,Os.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Os.z,0,-Os.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Os.y,Os.x,0];return!Pf(i,Lr,Ur,zr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Pf(i,Lr,Ur,zr,xc))?!1:(vc.crossVectors(ls,cs),i=[vc.x,vc.y,vc.z],Pf(i,Lr,Ur,zr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new re,new re,new re,new re,new re,new re,new re,new re],Bi=new re,gc=new Jo,Lr=new re,Ur=new re,zr=new re,ls=new re,cs=new re,Os=new re,ko=new re,xc=new re,vc=new re,Ps=new re;function Pf(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ps.fromArray(o,c);const m=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),g=t.dot(Ps),p=i.dot(Ps),S=s.dot(Ps);if(Math.max(-Math.max(g,p,S),Math.min(g,p,S))>m)return!1}return!0}const yn=new re,_c=new Yt;let TS=0;class Gi extends qs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=hx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hx&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dv extends Gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Lv extends Gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Cn extends Gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const AS=new Jo,Ho=new re,If=new re;class Jc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):AS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(If.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(If)),this.expandByPoint(Ho.copy(t.center).sub(If))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wS=0;const Ei=new Sn,Ff=new ti,Or=new re,hi=new Jo,Go=new Jo,Rn=new re;class ni extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rS(t)?Lv:Dv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return Ff.lookAt(t),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Cn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const m=i[c];Go.setFromBufferAttribute(m),this.morphTargetsRelative?(Rn.addVectors(hi.min,Go.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,Go.max),hi.expandByPoint(Rn)):(hi.expandByPoint(Go.min),hi.expandByPoint(Go.max))}hi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Rn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let c=0,h=i.length;c<h;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,S=m.count;p<S;p++)Rn.fromBufferAttribute(m,p),g&&(Or.fromBufferAttribute(t,p),Rn.add(Or)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),m=[],g=[];for(let R=0;R<s.count;R++)m[R]=new re,g[R]=new re;const p=new re,S=new re,b=new re,x=new Yt,E=new Yt,w=new Yt,D=new re,M=new re;function y(R,F,J){p.fromBufferAttribute(s,R),S.fromBufferAttribute(s,F),b.fromBufferAttribute(s,J),x.fromBufferAttribute(c,R),E.fromBufferAttribute(c,F),w.fromBufferAttribute(c,J),S.sub(p),b.sub(p),E.sub(x),w.sub(x);const G=1/(E.x*w.y-w.x*E.y);isFinite(G)&&(D.copy(S).multiplyScalar(w.y).addScaledVector(b,-E.y).multiplyScalar(G),M.copy(b).multiplyScalar(E.x).addScaledVector(S,-w.x).multiplyScalar(G),m[R].add(D),m[F].add(D),m[J].add(D),g[R].add(M),g[F].add(M),g[J].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let R=0,F=N.length;R<F;++R){const J=N[R],G=J.start,$=J.count;for(let ce=G,fe=G+$;ce<fe;ce+=3)y(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const I=new re,z=new re,V=new re,O=new re;function H(R){V.fromBufferAttribute(l,R),O.copy(V);const F=m[R];I.copy(F),I.sub(V.multiplyScalar(V.dot(F))).normalize(),z.crossVectors(O,F);const G=z.dot(g[R])<0?-1:1;h.setXYZW(R,I.x,I.y,I.z,G)}for(let R=0,F=N.length;R<F;++R){const J=N[R],G=J.start,$=J.count;for(let ce=G,fe=G+$;ce<fe;ce+=3)H(t.getX(ce+0)),H(t.getX(ce+1)),H(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new re,c=new re,h=new re,m=new re,g=new re,p=new re,S=new re,b=new re;if(t)for(let x=0,E=t.count;x<E;x+=3){const w=t.getX(x+0),D=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),S.subVectors(h,c),b.subVectors(l,c),S.cross(b),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),m.add(S),g.add(S),p.add(S),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(D,g.x,g.y,g.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),b.subVectors(l,c),S.cross(b),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(m,g){const p=m.array,S=m.itemSize,b=m.normalized,x=new p.constructor(g.length*S);let E=0,w=0;for(let D=0,M=g.length;D<M;D++){m.isInterleavedBufferAttribute?E=g[D]*m.data.stride+m.offset:E=g[D]*S;for(let y=0;y<S;y++)x[w++]=p[E++]}return new Gi(x,S,b)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=t(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let S=0,b=p.length;S<b;S++){const x=p[S],E=t(x,s);g.push(E)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,g=h.length;m<g;m++){const p=h[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],S=[];for(let b=0,x=p.length;b<x;b++){const E=p[b];S.push(E.toJSON(t.data))}S.length>0&&(l[g]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],b=c[p];for(let x=0,E=b.length;x<E;x++)S.push(b[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const b=h[p];this.addGroup(b.start,b.count,b.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RS=0;class $o extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=kr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=$f,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jf&&(s.blendSrc=this.blendSrc),this.blendDst!==$f&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ra=new re,Bf=new re,bc=new re,us=new re,kf=new re,yc=new re,Hf=new re;class Uv{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Bf.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),us.copy(this.origin).sub(Bf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(bc),m=us.dot(this.direction),g=-us.dot(bc),p=us.lengthSq(),S=Math.abs(1-h*h);let b,x,E,w;if(S>0)if(b=h*g-m,x=h*m-g,w=c*S,b>=0)if(x>=-w)if(x<=w){const D=1/S;b*=D,x*=D,E=b*(b+h*x+2*m)+x*(h*b+x+2*g)+p}else x=c,b=Math.max(0,-(h*x+m)),E=-b*b+x*(x+2*g)+p;else x=-c,b=Math.max(0,-(h*x+m)),E=-b*b+x*(x+2*g)+p;else x<=-w?(b=Math.max(0,-(-h*c+m)),x=b>0?-c:Math.min(Math.max(-c,-g),c),E=-b*b+x*(x+2*g)+p):x<=w?(b=0,x=Math.min(Math.max(-c,-g),c),E=x*(x+2*g)+p):(b=Math.max(0,-(h*c+m)),x=b>0?c:Math.min(Math.max(-c,-g),c),E=-b*b+x*(x+2*g)+p);else x=h>0?-c:c,b=Math.max(0,-(h*x+m)),E=-b*b+x*(x+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(Bf).addScaledVector(bc,x),E}intersectSphere(t,i){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),m=s-h,g=s+h;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,m,g;const p=1/this.direction.x,S=1/this.direction.y,b=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),S>=0?(c=(t.min.y-x.y)*S,h=(t.max.y-x.y)*S):(c=(t.max.y-x.y)*S,h=(t.min.y-x.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),b>=0?(m=(t.min.z-x.z)*b,g=(t.max.z-x.z)*b):(m=(t.max.z-x.z)*b,g=(t.min.z-x.z)*b),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,i,s,l,c){kf.subVectors(i,t),yc.subVectors(s,t),Hf.crossVectors(kf,yc);let h=this.direction.dot(Hf),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;us.subVectors(this.origin,t);const g=m*this.direction.dot(yc.crossVectors(us,yc));if(g<0)return null;const p=m*this.direction.dot(kf.cross(us));if(p<0||g+p>h)return null;const S=-m*us.dot(Hf);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Br extends $o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ws,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rx=new Sn,Is=new Uv,Sc=new Jc,Cx=new re,Mc=new re,Ec=new re,Tc=new re,Gf=new re,Ac=new re,Nx=new re,wc=new re;class $n extends ti{constructor(t=new ni,i=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Ac.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const S=m[g],b=c[g];S!==0&&(Gf.fromBufferAttribute(b,t),h?Ac.addScaledVector(Gf,S):Ac.addScaledVector(Gf.sub(i),S))}i.add(Ac)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),Is.copy(t.ray).recast(t.near),!(Sc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Sc,Cx)===null||Is.origin.distanceToSquared(Cx)>(t.far-t.near)**2))&&(Rx.copy(c).invert(),Is.copy(t.ray).applyMatrix4(Rx),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Is)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,b=c.attributes.normal,x=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(h))for(let w=0,D=x.length;w<D;w++){const M=x[w],y=h[M.materialIndex],N=Math.max(M.start,E.start),I=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let z=N,V=I;z<V;z+=3){const O=m.getX(z),H=m.getX(z+1),R=m.getX(z+2);l=Rc(this,y,t,s,p,S,b,O,H,R),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=w,y=D;M<y;M+=3){const N=m.getX(M),I=m.getX(M+1),z=m.getX(M+2);l=Rc(this,h,t,s,p,S,b,N,I,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let w=0,D=x.length;w<D;w++){const M=x[w],y=h[M.materialIndex],N=Math.max(M.start,E.start),I=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let z=N,V=I;z<V;z+=3){const O=z,H=z+1,R=z+2;l=Rc(this,y,t,s,p,S,b,O,H,R),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),D=Math.min(g.count,E.start+E.count);for(let M=w,y=D;M<y;M+=3){const N=M,I=M+1,z=M+2;l=Rc(this,h,t,s,p,S,b,N,I,z),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CS(o,t,i,s,l,c,h,m){let g;if(t.side===ei?g=s.intersectTriangle(h,c,l,!0,m):g=s.intersectTriangle(l,c,h,t.side===ps,m),g===null)return null;wc.copy(m),wc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:o}}function Rc(o,t,i,s,l,c,h,m,g,p){o.getVertexPosition(m,Mc),o.getVertexPosition(g,Ec),o.getVertexPosition(p,Tc);const S=CS(o,t,i,s,Mc,Ec,Tc,Nx);if(S){const b=new re;ki.getBarycoord(Nx,Mc,Ec,Tc,b),l&&(S.uv=ki.getInterpolatedAttribute(l,m,g,p,b,new Yt)),c&&(S.uv1=ki.getInterpolatedAttribute(c,m,g,p,b,new Yt)),h&&(S.normal=ki.getInterpolatedAttribute(h,m,g,p,b,new re),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:m,b:g,c:p,normal:new re,materialIndex:0};ki.getNormal(Mc,Ec,Tc,x.normal),S.face=x,S.barycoord=b}return S}class NS extends Xn{constructor(t=null,i=1,s=1,l,c,h,m,g,p=Pn,S=Pn,b,x){super(null,h,m,g,p,S,l,c,b,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jf=new re,DS=new re,LS=new xt;class Bs{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jf.subVectors(s,i).cross(DS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(jf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||LS.getNormalMatrix(t),l=this.coplanarPoint(jf).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Jc,US=new Yt(.5,.5),Cc=new re;class zv{constructor(t=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,h=new Bs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ta,s=!1){const l=this.planes,c=t.elements,h=c[0],m=c[1],g=c[2],p=c[3],S=c[4],b=c[5],x=c[6],E=c[7],w=c[8],D=c[9],M=c[10],y=c[11],N=c[12],I=c[13],z=c[14],V=c[15];if(l[0].setComponents(p-h,E-S,y-w,V-N).normalize(),l[1].setComponents(p+h,E+S,y+w,V+N).normalize(),l[2].setComponents(p+m,E+b,y+D,V+I).normalize(),l[3].setComponents(p-m,E-b,y-D,V-I).normalize(),s)l[4].setComponents(g,x,M,z).normalize(),l[5].setComponents(p-g,E-x,y-M,V-z).normalize();else if(l[4].setComponents(p-g,E-x,y-M,V-z).normalize(),i===ta)l[5].setComponents(p+g,E+x,y+M,V+z).normalize();else if(i===Yc)l[5].setComponents(g,x,M,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=US.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?t.max.x:t.min.x,Cc.y=l.normal.y>0?t.max.y:t.min.y,Cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ov extends $o{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dx=new Sn,Hh=new Uv,Nc=new Jc,Dc=new re;class zS extends ti{constructor(t=new ni,i=new Ov){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,t.ray.intersectsSphere(Nc)===!1)return;Dx.copy(l).invert(),Hh.copy(t.ray).applyMatrix4(Dx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,b=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let w=x,D=E;w<D;w++){const M=p.getX(w);Dc.fromBufferAttribute(b,M),Lx(Dc,M,g,l,t,i,this)}}else{const x=Math.max(0,h.start),E=Math.min(b.count,h.start+h.count);for(let w=x,D=E;w<D;w++)Dc.fromBufferAttribute(b,w),Lx(Dc,w,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Lx(o,t,i,s,l,c,h){const m=Hh.distanceSqToPoint(o);if(m<i){const g=new re;Hh.closestPointToPoint(o,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Pv extends Xn{constructor(t=[],i=Vs,s,l,c,h,m,g,p,S){super(t,i,s,l,c,h,m,g,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vr extends Xn{constructor(t,i,s=aa,l,c,h,m=Pn,g=Pn,p,S=Ua,b=1){if(S!==Ua&&S!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:b};super(x,l,c,h,m,g,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OS extends Vr{constructor(t,i=aa,s=Vs,l,c,h=Pn,m=Pn,g,p=Ua){const S={width:t,height:t,depth:1},b=[S,S,S,S,S,S];super(t,t,i,s,l,c,h,m,g,p),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Iv extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class el extends ni{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const m=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],S=[],b=[];let x=0,E=0;w("z","y","x",-1,-1,s,i,t,h,c,0),w("z","y","x",1,-1,s,i,-t,h,c,1),w("x","z","y",1,1,t,s,i,l,h,2),w("x","z","y",1,-1,t,s,-i,l,h,3),w("x","y","z",1,-1,t,i,s,l,c,4),w("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(S,3)),this.setAttribute("uv",new Cn(b,2));function w(D,M,y,N,I,z,V,O,H,R,F){const J=z/H,G=V/R,$=z/2,ce=V/2,fe=O/2,q=H+1,U=R+1;let B=0,le=0;const ge=new re;for(let ae=0;ae<U;ae++){const A=ae*G-ce;for(let k=0;k<q;k++){const de=k*J-$;ge[D]=de*N,ge[M]=A*I,ge[y]=fe,p.push(ge.x,ge.y,ge.z),ge[D]=0,ge[M]=0,ge[y]=O>0?1:-1,S.push(ge.x,ge.y,ge.z),b.push(k/H),b.push(1-ae/R),B+=1}}for(let ae=0;ae<R;ae++)for(let A=0;A<H;A++){const k=x+A+q*ae,de=x+A+q*(ae+1),ye=x+(A+1)+q*(ae+1),we=x+(A+1)+q*ae;g.push(k,de,we),g.push(de,ye,we),le+=6}m.addGroup(E,le,F),E+=le,x+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Yo extends ni{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:m,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],b=[],x=[],E=[];let w=0;const D=[],M=s/2;let y=0;N(),h===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(S),this.setAttribute("position",new Cn(b,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(E,2));function N(){const z=new re,V=new re;let O=0;const H=(i-t)/s;for(let R=0;R<=c;R++){const F=[],J=R/c,G=J*(i-t)+t;for(let $=0;$<=l;$++){const ce=$/l,fe=ce*g+m,q=Math.sin(fe),U=Math.cos(fe);V.x=G*q,V.y=-J*s+M,V.z=G*U,b.push(V.x,V.y,V.z),z.set(q,H,U).normalize(),x.push(z.x,z.y,z.z),E.push(ce,1-J),F.push(w++)}D.push(F)}for(let R=0;R<l;R++)for(let F=0;F<c;F++){const J=D[F][R],G=D[F+1][R],$=D[F+1][R+1],ce=D[F][R+1];(t>0||F!==0)&&(S.push(J,G,ce),O+=3),(i>0||F!==c-1)&&(S.push(G,$,ce),O+=3)}p.addGroup(y,O,0),y+=O}function I(z){const V=w,O=new Yt,H=new re;let R=0;const F=z===!0?t:i,J=z===!0?1:-1;for(let $=1;$<=l;$++)b.push(0,M*J,0),x.push(0,J,0),E.push(.5,.5),w++;const G=w;for(let $=0;$<=l;$++){const fe=$/l*g+m,q=Math.cos(fe),U=Math.sin(fe);H.x=F*U,H.y=M*J,H.z=F*q,b.push(H.x,H.y,H.z),x.push(0,J,0),O.x=q*.5+.5,O.y=U*.5*J+.5,E.push(O.x,O.y),w++}for(let $=0;$<l;$++){const ce=V+$,fe=G+$;z===!0?S.push(fe,fe+1,ce):S.push(fe+1,fe,ce),R+=3}p.addGroup(y,R,z===!0?1:2),y+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $c extends ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,S=g+1,b=t/m,x=i/g,E=[],w=[],D=[],M=[];for(let y=0;y<S;y++){const N=y*x-h;for(let I=0;I<p;I++){const z=I*b-c;w.push(z,-N,0),D.push(0,0,1),M.push(I/m),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<m;N++){const I=N+p*y,z=N+p*(y+1),V=N+1+p*(y+1),O=N+1+p*y;E.push(I,z,O),E.push(z,V,O)}this.setIndex(E),this.setAttribute("position",new Cn(w,3)),this.setAttribute("normal",new Cn(D,3)),this.setAttribute("uv",new Cn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.widthSegments,t.heightSegments)}}class ip extends ni{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+m,Math.PI);let p=0;const S=[],b=new re,x=new re,E=[],w=[],D=[],M=[];for(let y=0;y<=s;y++){const N=[],I=y/s;let z=0;y===0&&h===0?z=.5/i:y===s&&g===Math.PI&&(z=-.5/i);for(let V=0;V<=i;V++){const O=V/i;b.x=-t*Math.cos(l+O*c)*Math.sin(h+I*m),b.y=t*Math.cos(h+I*m),b.z=t*Math.sin(l+O*c)*Math.sin(h+I*m),w.push(b.x,b.y,b.z),x.copy(b).normalize(),D.push(x.x,x.y,x.z),M.push(O+z,1-I),N.push(p++)}S.push(N)}for(let y=0;y<s;y++)for(let N=0;N<i;N++){const I=S[y][N+1],z=S[y][N],V=S[y+1][N],O=S[y+1][N+1];(y!==0||h>0)&&E.push(I,z,O),(y!==s-1||g<Math.PI)&&E.push(z,V,O)}this.setIndex(E),this.setAttribute("position",new Cn(w,3)),this.setAttribute("normal",new Cn(D,3)),this.setAttribute("uv",new Cn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ap extends ni{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const g=[],p=[],S=[],b=[],x=new re,E=new re,w=new re;for(let D=0;D<=s;D++){const M=h+D/s*m;for(let y=0;y<=l;y++){const N=y/l*c;E.x=(t+i*Math.cos(M))*Math.cos(N),E.y=(t+i*Math.cos(M))*Math.sin(N),E.z=i*Math.sin(M),p.push(E.x,E.y,E.z),x.x=t*Math.cos(N),x.y=t*Math.sin(N),w.subVectors(E,x).normalize(),S.push(w.x,w.y,w.z),b.push(y/l),b.push(D/s)}}for(let D=1;D<=s;D++)for(let M=1;M<=l;M++){const y=(l+1)*D+M-1,N=(l+1)*(D-1)+M-1,I=(l+1)*(D-1)+M,z=(l+1)*D+M;g.push(y,N,z),g.push(N,I,z)}this.setIndex(g),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(S,3)),this.setAttribute("uv",new Cn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ap(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Xr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Ux(l))l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Ux(l[0])){const c=[];for(let h=0,m=l.length;h<m;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Vn(o){const t={};for(let i=0;i<o.length;i++){const s=Xr(o[i]);for(const l in s)t[l]=s[l]}return t}function Ux(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function PS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Fv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const IS={clone:Xr,merge:Vn};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends $o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=PS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class kS extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HS extends $o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GS extends $o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lc=new re,Uc=new Wr,Qi=new re;class Bv extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lc,Uc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Uc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Lc,Uc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Uc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new re,zx=new Yt,Ox=new Yt;class Ai extends Bv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,zx,Ox),i.subVectors(Ox,zx)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kv extends Bv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,m-=S*this.view.offsetY,g=m-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Pr=-90,Ir=1;class jS extends ti{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Pr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new Ai(Pr,Ir,t,i);c.layers=this.layers,this.add(c);const h=new Ai(Pr,Ir,t,i);h.layers=this.layers,this.add(h);const m=new Ai(Pr,Ir,t,i);m.layers=this.layers,this.add(m);const g=new Ai(Pr,Ir,t,i);g.layers=this.layers,this.add(g);const p=new Ai(Pr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,m,g]=i;for(const p of i)this.remove(p);if(t===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,m,g,p,S]=this.children,b=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(b,x,E),t.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class VS extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cp=class cp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};cp.prototype.isMatrix2=!0;let Px=cp;function Ix(o,t,i,s){const l=XS(s);switch(i){case Ev:return o*t;case Av:return o*t/l.components*l.byteLength;case Kh:return o*t/l.components*l.byteLength;case Xs:return o*t*2/l.components*l.byteLength;case Qh:return o*t*2/l.components*l.byteLength;case Tv:return o*t*3/l.components*l.byteLength;case Hi:return o*t*4/l.components*l.byteLength;case Jh:return o*t*4/l.components*l.byteLength;case Ic:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:case fh:return Math.max(o,16)*Math.max(t,8)/4;case ch:case dh:return Math.max(o,8)*Math.max(t,8)/2;case hh:case ph:case gh:case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mh:case Vc:case vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case yh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uh:case zh:case Oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ph:case Ih:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Xc:case Fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XS(o){switch(o){case Ri:case bv:return{byteLength:1,components:1};case Zo:case yv:case La:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case aa:case qh:case ea:return{byteLength:4,components:1};case Sv:case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function WS(o){const t=new WeakMap;function i(m,g){const p=m.array,S=m.usage,b=p.byteLength,x=o.createBuffer();o.bindBuffer(g,x),o.bufferData(g,p,S),m.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:b}}function s(m,g,p){const S=g.array,b=g.updateRanges;if(o.bindBuffer(p,m),b.length===0)o.bufferSubData(p,0,S);else{b.sort((E,w)=>E.start-w.start);let x=0;for(let E=1;E<b.length;E++){const w=b[x],D=b[E];D.start<=w.start+w.count+1?w.count=Math.max(w.count,D.start+D.count-w.start):(++x,b[x]=D)}b.length=x+1;for(let E=0,w=b.length;E<w;E++){const D=b[E];o.bufferSubData(p,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function h(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const S=t.get(m);(!S||S.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:h}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$S=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,BM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ME=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:qS,alphahash_pars_fragment:YS,alphamap_fragment:ZS,alphamap_pars_fragment:KS,alphatest_fragment:QS,alphatest_pars_fragment:JS,aomap_fragment:$S,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:aM,bsdfs:sM,iridescence_fragment:rM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:dM,color_fragment:fM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:vM,displacementmap_pars_vertex:_M,displacementmap_vertex:bM,emissivemap_fragment:yM,emissivemap_pars_fragment:SM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:AM,envmap_pars_fragment:wM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:BM,envmap_vertex:CM,fog_vertex:NM,fog_pars_vertex:DM,fog_fragment:LM,fog_pars_fragment:UM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:OM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:IM,lights_pars_begin:FM,lights_toon_fragment:kM,lights_toon_pars_fragment:HM,lights_phong_fragment:GM,lights_phong_pars_fragment:jM,lights_physical_fragment:VM,lights_physical_pars_fragment:XM,lights_fragment_begin:WM,lights_fragment_maps:qM,lights_fragment_end:YM,lightprobes_pars_fragment:ZM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:eE,map_pars_fragment:tE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:dE,normal_fragment_maps:fE,normal_pars_fragment:hE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:bE,opaque_fragment:yE,packing:SE,premultiplied_alpha_fragment:ME,project_vertex:EE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:NE,shadowmap_vertex:DE,shadowmask_pars_fragment:LE,skinbase_vertex:UE,skinning_pars_vertex:zE,skinning_vertex:OE,skinnormal_vertex:PE,specularmap_fragment:IE,specularmap_pars_fragment:FE,tonemapping_fragment:BE,tonemapping_pars_fragment:kE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:jE,uv_pars_vertex:VE,uv_vertex:XE,worldpos_vertex:WE,background_vert:qE,background_frag:YE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:eT,distance_vert:tT,distance_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:sT,linedashed_frag:rT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:dT,meshmatcap_frag:fT,meshnormal_vert:hT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:xT,meshphysical_frag:vT,meshtoon_vert:_T,meshtoon_frag:bT,points_vert:yT,points_frag:ST,shadow_vert:MT,shadow_frag:ET,sprite_vert:TT,sprite_frag:AT},Ve={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},$i={basic:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Vn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Vn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Vn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Vn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Vn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Vn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Vn([Ve.common,Ve.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Vn([Ve.lights,Ve.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};$i.physical={uniforms:Vn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const zc={r:0,b:0,g:0},wT=new Sn,Gv=new xt;Gv.set(-1,0,0,0,1,0,0,0,1);function RT(o,t,i,s,l,c){const h=new It(0);let m=l===!0?0:1,g,p,S=null,b=0,x=null;function E(N){let I=N.isScene===!0?N.background:null;if(I&&I.isTexture){const z=N.backgroundBlurriness>0;I=t.get(I,z)}return I}function w(N){let I=!1;const z=E(N);z===null?M(h,m):z&&z.isColor&&(M(z,1),I=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(N,I){const z=E(I);z&&(z.isCubeTexture||z.mapping===Qc)?(p===void 0&&(p=new $n(new el(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Xr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=z,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(I.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Gv),p.material.toneMapped=Nt.getTransfer(z.colorSpace)!==qt,(S!==z||b!==z.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,S=z,b=z.version,x=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(g===void 0&&(g=new $n(new $c(2,2),new ji({name:"BackgroundMaterial",uniforms:Xr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=z,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.toneMapped=Nt.getTransfer(z.colorSpace)!==qt,z.matrixAutoUpdate===!0&&z.updateMatrix(),g.material.uniforms.uvTransform.value.copy(z.matrix),(S!==z||b!==z.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,S=z,b=z.version,x=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function M(N,I){N.getRGB(zc,Fv(o)),i.buffers.color.setClear(zc.r,zc.g,zc.b,I,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,I=1){h.set(N),m=I,M(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,M(h,m)},render:w,addToRenderList:D,dispose:y}}function CT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function m(G,$,ce,fe,q){let U=!1;const B=b(G,fe,ce,$);c!==B&&(c=B,p(c.object)),U=E(G,fe,ce,q),U&&w(G,fe,ce,q),q!==null&&t.update(q,o.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,z(G,$,ce,fe),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function g(){return o.createVertexArray()}function p(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function b(G,$,ce,fe){const q=fe.wireframe===!0;let U=s[$.id];U===void 0&&(U={},s[$.id]=U);const B=G.isInstancedMesh===!0?G.id:0;let le=U[B];le===void 0&&(le={},U[B]=le);let ge=le[ce.id];ge===void 0&&(ge={},le[ce.id]=ge);let ae=ge[q];return ae===void 0&&(ae=x(g()),ge[q]=ae),ae}function x(G){const $=[],ce=[],fe=[];for(let q=0;q<i;q++)$[q]=0,ce[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ce,attributeDivisors:fe,object:G,attributes:{},index:null}}function E(G,$,ce,fe){const q=c.attributes,U=$.attributes;let B=0;const le=ce.getAttributes();for(const ge in le)if(le[ge].location>=0){const A=q[ge];let k=U[ge];if(k===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(k=G.instanceColor)),A===void 0||A.attribute!==k||k&&A.data!==k.data)return!0;B++}return c.attributesNum!==B||c.index!==fe}function w(G,$,ce,fe){const q={},U=$.attributes;let B=0;const le=ce.getAttributes();for(const ge in le)if(le[ge].location>=0){let A=U[ge];A===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(A=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(A=G.instanceColor));const k={};k.attribute=A,A&&A.data&&(k.data=A.data),q[ge]=k,B++}c.attributes=q,c.attributesNum=B,c.index=fe}function D(){const G=c.newAttributes;for(let $=0,ce=G.length;$<ce;$++)G[$]=0}function M(G){y(G,0)}function y(G,$){const ce=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ce[G]=1,fe[G]===0&&(o.enableVertexAttribArray(G),fe[G]=1),q[G]!==$&&(o.vertexAttribDivisor(G,$),q[G]=$)}function N(){const G=c.newAttributes,$=c.enabledAttributes;for(let ce=0,fe=$.length;ce<fe;ce++)$[ce]!==G[ce]&&(o.disableVertexAttribArray(ce),$[ce]=0)}function I(G,$,ce,fe,q,U,B){B===!0?o.vertexAttribIPointer(G,$,ce,q,U):o.vertexAttribPointer(G,$,ce,fe,q,U)}function z(G,$,ce,fe){D();const q=fe.attributes,U=ce.getAttributes(),B=$.defaultAttributeValues;for(const le in U){const ge=U[le];if(ge.location>=0){let ae=q[le];if(ae===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(ae=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(ae=G.instanceColor)),ae!==void 0){const A=ae.normalized,k=ae.itemSize,de=t.get(ae);if(de===void 0)continue;const ye=de.buffer,we=de.type,te=de.bytesPerElement,Ee=we===o.INT||we===o.UNSIGNED_INT||ae.gpuType===qh;if(ae.isInterleavedBufferAttribute){const Se=ae.data,He=Se.stride,Qe=ae.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ge.locationSize;Ke++)y(ge.location+Ke,Se.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<ge.locationSize;Ke++)M(ge.location+Ke);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Ke=0;Ke<ge.locationSize;Ke++)I(ge.location+Ke,k/ge.locationSize,we,A,He*te,(Qe+k/ge.locationSize*Ke)*te,Ee)}else{if(ae.isInstancedBufferAttribute){for(let Se=0;Se<ge.locationSize;Se++)y(ge.location+Se,ae.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<ge.locationSize;Se++)M(ge.location+Se);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Se=0;Se<ge.locationSize;Se++)I(ge.location+Se,k/ge.locationSize,we,A,k*te,k/ge.locationSize*Se*te,Ee)}}else if(B!==void 0){const A=B[le];if(A!==void 0)switch(A.length){case 2:o.vertexAttrib2fv(ge.location,A);break;case 3:o.vertexAttrib3fv(ge.location,A);break;case 4:o.vertexAttrib4fv(ge.location,A);break;default:o.vertexAttrib1fv(ge.location,A)}}}}N()}function V(){F();for(const G in s){const $=s[G];for(const ce in $){const fe=$[ce];for(const q in fe){const U=fe[q];for(const B in U)S(U[B].object),delete U[B];delete fe[q]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const $=s[G.id];for(const ce in $){const fe=$[ce];for(const q in fe){const U=fe[q];for(const B in U)S(U[B].object),delete U[B];delete fe[q]}}delete s[G.id]}function H(G){for(const $ in s){const ce=s[$];for(const fe in ce){const q=ce[fe];if(q[G.id]===void 0)continue;const U=q[G.id];for(const B in U)S(U[B].object),delete U[B];delete q[G.id]}}}function R(G){for(const $ in s){const ce=s[$],fe=G.isInstancedMesh===!0?G.id:0,q=ce[fe];if(q!==void 0){for(const U in q){const B=q[U];for(const le in B)S(B[le].object),delete B[le];delete q[U]}delete ce[fe],Object.keys(ce).length===0&&delete s[$]}}}function F(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:F,resetDefaultState:J,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfObject:R,releaseStatesOfProgram:H,initAttributes:D,enableAttribute:M,disableUnusedAttributes:N}}function NT(o,t,i){let s;function l(g){s=g}function c(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function h(g,p,S){S!==0&&(o.drawArraysInstanced(s,g,p,S),i.update(p,s,S))}function m(g,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,S);let x=0;for(let E=0;E<S;E++)x+=p[E];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function DT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Hi&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(H){const R=H===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Ri&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ea&&!R)}function g(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=g(p);S!==p&&(dt("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const b=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:b,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:w,maxTextureSize:D,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:z,maxSamples:V,samples:O}}function LT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Bs,m=new xt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(b,x){const E=b.length!==0||x||s!==0||l;return l=x,s=b.length,E},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,x){i=S(b,x,0)},this.setState=function(b,x,E){const w=b.clippingPlanes,D=b.clipIntersection,M=b.clipShadows,y=o.get(b);if(!l||w===null||w.length===0||c&&!M)c?S(null):p();else{const N=c?0:s,I=N*4;let z=y.clippingState||null;g.value=z,z=S(w,x,I,E);for(let V=0;V!==I;++V)z[V]=i[V];y.clippingState=z,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(b,x,E,w){const D=b!==null?b.length:0;let M=null;if(D!==0){if(M=g.value,w!==!0||M===null){const y=E+D*4,N=x.matrixWorldInverse;m.getNormalMatrix(N),(M===null||M.length<y)&&(M=new Float32Array(y));for(let I=0,z=E;I!==D;++I,z+=4)h.copy(b[I]).applyMatrix4(N,m),h.normal.toArray(M,z),M[z+3]=h.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const hs=4,Fx=[.125,.215,.35,.446,.526,.582],Hs=20,UT=256,jo=new kv,Bx=new It;let Vf=null,Xf=0,Wf=0,qf=!1;const zT=new re;class kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:m=zT}=c;Vf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vf,Xf,Wf),this._renderer.xr.enabled=qf,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:La,format:Hi,colorSpace:Wc,depthBuffer:!1},l=Hx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OT(c)),this._blurMaterial=IT(c,t,i),this._ggxMaterial=PT(c,t,i)}return l}_compileMaterial(t){const i=new $n(new ni,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const g=new Ai(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],b=this._renderer,x=b.autoClear,E=b.toneMapping;b.getClearColor(Bx),b.toneMapping=na,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new el,new Br({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let y=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,y=!0):(M.color.copy(Bx),y=!0);for(let I=0;I<6;I++){const z=I%3;z===0?(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+S[I],c.y,c.z)):z===1?(g.up.set(0,0,p[I]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+S[I],c.z)):(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+S[I]));const V=this._cubeSize;Fr(l,z*V,I>2?V:0,V,V),b.setRenderTarget(l),y&&b.render(D,g),b.render(t,g)}b.toneMapping=E,b.autoClear=x,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Fr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[s];m.material=h;const g=h.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),b=Math.sqrt(p*p-S*S),x=0+p*1.25,E=b*x,{_lodMax:w}=this,D=this._sizeLods[s],M=3*D*(s>w-hs?s-w+hs:0),y=4*(this._cubeSize-D);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=w-i,Fr(c,M,y,3*D,2*D),l.setRenderTarget(c),l.render(m,jo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=w-s,Fr(t,M,y,3*D,2*D),l.setRenderTarget(t),l.render(m,jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,m){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const S=3,b=this._lodMeshes[l];b.material=p;const x=p.uniforms,E=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Hs-1),D=c/w,M=isFinite(c)?1+Math.floor(S*D):Hs;M>Hs&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const y=[];let N=0;for(let H=0;H<Hs;++H){const R=H/D,F=Math.exp(-R*R/2);y.push(F),H===0?N+=F:H<M&&(N+=2*F)}for(let H=0;H<y.length;H++)y[H]=y[H]/N;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=h==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:I}=this;x.dTheta.value=w,x.mipInt.value=I-s;const z=this._sizeLods[l],V=3*z*(l>I-hs?l-I+hs:0),O=4*(this._cubeSize-z);Fr(i,V,O,3*z,2*z),g.setRenderTarget(i),g.render(b,jo)}}function OT(o){const t=[],i=[],s=[];let l=o;const c=o-hs+1+Fx.length;for(let h=0;h<c;h++){const m=Math.pow(2,l);t.push(m);let g=1/m;h>o-hs?g=Fx[h-o+hs-1]:h===0&&(g=0),i.push(g);const p=1/(m-2),S=-p,b=1+p,x=[S,S,b,S,b,b,S,S,b,b,S,b],E=6,w=6,D=3,M=2,y=1,N=new Float32Array(D*w*E),I=new Float32Array(M*w*E),z=new Float32Array(y*w*E);for(let O=0;O<E;O++){const H=O%3*2/3-1,R=O>2?0:-1,F=[H,R,0,H+2/3,R,0,H+2/3,R+1,0,H,R,0,H+2/3,R+1,0,H,R+1,0];N.set(F,D*w*O),I.set(x,M*w*O);const J=[O,O,O,O,O,O];z.set(J,y*w*O)}const V=new ni;V.setAttribute("position",new Gi(N,D)),V.setAttribute("uv",new Gi(I,M)),V.setAttribute("faceIndex",new Gi(z,y)),s.push(new $n(V,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Hx(o,t,i){const s=new ia(o,t,i);return s.texture.mapping=Qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function PT(o,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function IT(o,t,i){const s=new Float32Array(Hs),l=new re(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Gx(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function jx(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jv extends ia{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new el(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Xr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:Na});c.uniforms.tEquirect.value=i;const h=new $n(l,c),m=i.minFilter;return i.minFilter===Gs&&(i.minFilter=Hn),new jS(1,10,this).update(t,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function FT(o){let t=new WeakMap,i=new WeakMap,s=null;function l(x,E=!1){return x==null?null:E?h(x):c(x)}function c(x){if(x&&x.isTexture){const E=x.mapping;if(E===xf||E===vf)if(t.has(x)){const w=t.get(x).texture;return m(w,x.mapping)}else{const w=x.image;if(w&&w.height>0){const D=new jv(w.height);return D.fromEquirectangularTexture(o,x),t.set(x,D),x.addEventListener("dispose",p),m(D.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture){const E=x.mapping,w=E===xf||E===vf,D=E===Vs||E===jr;if(w||D){let M=i.get(x);const y=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new kx(o)),M=w?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const N=x.image;return w&&N&&N.height>0||D&&N&&g(N)?(s===null&&(s=new kx(o)),M=w?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",S),M.texture):null}}}return x}function m(x,E){return E===xf?x.mapping=Vs:E===vf&&(x.mapping=jr),x}function g(x){let E=0;const w=6;for(let D=0;D<w;D++)x[D]!==void 0&&E++;return E===w}function p(x){const E=x.target;E.removeEventListener("dispose",p);const w=t.get(E);w!==void 0&&(t.delete(E),w.dispose())}function S(x){const E=x.target;E.removeEventListener("dispose",S);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function b(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:b}}function BT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bh("WebGLRenderer: "+s+" extension not supported."),l}}}function kT(o,t,i,s){const l={},c=new WeakMap;function h(b){const x=b.target;x.index!==null&&t.remove(x.index);for(const w in x.attributes)t.remove(x.attributes[w]);x.removeEventListener("dispose",h),delete l[x.id];const E=c.get(x);E&&(t.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(b,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function g(b){const x=b.attributes;for(const E in x)t.update(x[E],o.ARRAY_BUFFER)}function p(b){const x=[],E=b.index,w=b.attributes.position;let D=0;if(w===void 0)return;if(E!==null){const N=E.array;D=E.version;for(let I=0,z=N.length;I<z;I+=3){const V=N[I+0],O=N[I+1],H=N[I+2];x.push(V,O,O,H,H,V)}}else{const N=w.array;D=w.version;for(let I=0,z=N.length/3-1;I<z;I+=3){const V=I+0,O=I+1,H=I+2;x.push(V,O,O,H,H,V)}}const M=new(w.count>=65535?Lv:Dv)(x,1);M.version=D;const y=c.get(b);y&&t.remove(y),c.set(b,M)}function S(b){const x=c.get(b);if(x){const E=b.index;E!==null&&x.version<E.version&&p(b)}else p(b);return c.get(b)}return{get:m,update:g,getWireframeAttribute:S}}function HT(o,t,i){let s;function l(b){s=b}let c,h;function m(b){c=b.type,h=b.bytesPerElement}function g(b,x){o.drawElements(s,x,c,b*h),i.update(x,s,1)}function p(b,x,E){E!==0&&(o.drawElementsInstanced(s,x,c,b*h,E),i.update(x,s,E))}function S(b,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,b,0,E);let D=0;for(let M=0;M<E;M++)D+=x[M];i.update(D,s,1)}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=S}function GT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,m){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=m*(c/3);break;case o.LINES:i.lines+=m*(c/2);break;case o.LINE_STRIP:i.lines+=m*(c-1);break;case o.LINE_LOOP:i.lines+=m*c;break;case o.POINTS:i.points+=m*c;break;default:Ut("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function jT(o,t,i){const s=new WeakMap,l=new pn;function c(h,m,g){const p=h.morphTargetInfluences,S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,b=S!==void 0?S.length:0;let x=s.get(m);if(x===void 0||x.count!==b){let J=function(){R.dispose(),s.delete(m),m.removeEventListener("dispose",J)};var E=J;x!==void 0&&x.texture.dispose();const w=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],I=m.morphAttributes.color||[];let z=0;w===!0&&(z=1),D===!0&&(z=2),M===!0&&(z=3);let V=m.attributes.position.count*z,O=1;V>t.maxTextureSize&&(O=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const H=new Float32Array(V*O*4*b),R=new Rv(H,V,O,b);R.type=ea,R.needsUpdate=!0;const F=z*4;for(let G=0;G<b;G++){const $=y[G],ce=N[G],fe=I[G],q=V*O*4*G;for(let U=0;U<$.count;U++){const B=U*F;w===!0&&(l.fromBufferAttribute($,U),H[q+B+0]=l.x,H[q+B+1]=l.y,H[q+B+2]=l.z,H[q+B+3]=0),D===!0&&(l.fromBufferAttribute(ce,U),H[q+B+4]=l.x,H[q+B+5]=l.y,H[q+B+6]=l.z,H[q+B+7]=0),M===!0&&(l.fromBufferAttribute(fe,U),H[q+B+8]=l.x,H[q+B+9]=l.y,H[q+B+10]=l.z,H[q+B+11]=fe.itemSize===4?l.w:1)}}x={count:b,texture:R,size:new Yt(V,O)},s.set(m,x),m.addEventListener("dispose",J)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let w=0;for(let M=0;M<p.length;M++)w+=p[M];const D=m.morphTargetsRelative?1:1-w;g.getUniforms().setValue(o,"morphTargetBaseInfluence",D),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function VT(o,t,i,s,l){let c=new WeakMap;function h(p){const S=l.render.frame,b=p.geometry,x=t.get(p,b);if(c.get(x)!==S&&(t.update(x),c.set(x,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,S))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==S&&(E.update(),c.set(E,S))}return x}function m(){c=new WeakMap}function g(p){const S=p.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:h,dispose:m}}const XT={[fv]:"LINEAR_TONE_MAPPING",[hv]:"REINHARD_TONE_MAPPING",[pv]:"CINEON_TONE_MAPPING",[mv]:"ACES_FILMIC_TONE_MAPPING",[xv]:"AGX_TONE_MAPPING",[vv]:"NEUTRAL_TONE_MAPPING",[gv]:"CUSTOM_TONE_MAPPING"};function WT(o,t,i,s,l){const c=new ia(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Vr(t,i):void 0}),h=new ia(t,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const g=new kS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new $n(m,g),S=new kv(-1,1,1,-1,0,1);let b=null,x=null,E=!1,w,D=null,M=[],y=!1;this.setSize=function(N,I){c.setSize(N,I),h.setSize(N,I);for(let z=0;z<M.length;z++){const V=M[z];V.setSize&&V.setSize(N,I)}},this.setEffects=function(N){M=N,y=M.length>0&&M[0].isRenderPass===!0;const I=c.width,z=c.height;for(let V=0;V<M.length;V++){const O=M[V];O.setSize&&O.setSize(I,z)}},this.begin=function(N,I){if(E||N.toneMapping===na&&M.length===0)return!1;if(D=I,I!==null){const z=I.width,V=I.height;(c.width!==z||c.height!==V)&&this.setSize(z,V)}return y===!1&&N.setRenderTarget(c),w=N.toneMapping,N.toneMapping=na,!0},this.hasRenderPass=function(){return y},this.end=function(N,I){N.toneMapping=w,E=!0;let z=c,V=h;for(let O=0;O<M.length;O++){const H=M[O];if(H.enabled!==!1&&(H.render(N,V,z,I),H.needsSwap!==!1)){const R=z;z=V,V=R}}if(b!==N.outputColorSpace||x!==N.toneMapping){b=N.outputColorSpace,x=N.toneMapping,g.defines={},Nt.getTransfer(b)===qt&&(g.defines.SRGB_TRANSFER="");const O=XT[x];O&&(g.defines[O]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=z.texture,N.setRenderTarget(D),N.render(p,S),D=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),m.dispose(),g.dispose()}}const Vv=new Xn,Gh=new Vr(1,1),Xv=new Rv,Wv=new gS,qv=new Pv,Vx=[],Xx=[],Wx=new Float32Array(16),qx=new Float32Array(9),Yx=new Float32Array(4);function qr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Vx[l];if(c===void 0&&(c=new Float32Array(l),Vx[l]=c),t!==0){s.toArray(c,0);for(let h=1,m=0;h!==t;++h)m+=i,o[h].toArray(c,m)}return c}function Tn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function tu(o,t){let i=Xx[t];i===void 0&&(i=new Int32Array(t),Xx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function qT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function KT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function QT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;Yx.set(s),o.uniformMatrix2fv(this.addr,!1,Yx),An(i,s)}}function JT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;qx.set(s),o.uniformMatrix3fv(this.addr,!1,qx),An(i,s)}}function $T(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;Wx.set(s),o.uniformMatrix4fv(this.addr,!1,Wx),An(i,s)}}function e2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function t2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function n2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function i2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function a2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function s2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function r2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function o2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function l2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?ep:$h,c=Gh):c=Vv,i.setTexture2D(t||c,l)}function c2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Wv,l)}function u2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||qv,l)}function d2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Xv,l)}function f2(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return a2;case 36294:return s2;case 36295:return r2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return d2}}function h2(o,t){o.uniform1fv(this.addr,t)}function p2(o,t){const i=qr(t,this.size,2);o.uniform2fv(this.addr,i)}function m2(o,t){const i=qr(t,this.size,3);o.uniform3fv(this.addr,i)}function g2(o,t){const i=qr(t,this.size,4);o.uniform4fv(this.addr,i)}function x2(o,t){const i=qr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function v2(o,t){const i=qr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _2(o,t){const i=qr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function b2(o,t){o.uniform1iv(this.addr,t)}function y2(o,t){o.uniform2iv(this.addr,t)}function S2(o,t){o.uniform3iv(this.addr,t)}function M2(o,t){o.uniform4iv(this.addr,t)}function E2(o,t){o.uniform1uiv(this.addr,t)}function T2(o,t){o.uniform2uiv(this.addr,t)}function A2(o,t){o.uniform3uiv(this.addr,t)}function w2(o,t){o.uniform4uiv(this.addr,t)}function R2(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Gh:h=Vv;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||h,c[m])}function C2(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Wv,c[h])}function N2(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||qv,c[h])}function D2(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Xv,c[h])}function L2(o){switch(o){case 5126:return h2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return x2;case 35675:return v2;case 35676:return _2;case 5124:case 35670:return b2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return E2;case 36294:return T2;case 36295:return A2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return D2}}class U2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=f2(i.type)}}class z2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L2(i.type)}}class O2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Yf=/(\w+)(\])?(\[|\.)?/g;function Zx(o,t){o.seq.push(t),o.map[t.id]=t}function P2(o,t,i){const s=o.name,l=s.length;for(Yf.lastIndex=0;;){const c=Yf.exec(s),h=Yf.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&h+2===l){Zx(i,p===void 0?new U2(m,o,t):new z2(m,o,t));break}else{let b=i.map[m];b===void 0&&(b=new O2(m),Zx(i,b)),i=b}}}class Hc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const m=t.getActiveUniform(i,h),g=t.getUniformLocation(i,m.name);P2(m,g,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Kx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const I2=37297;let F2=0;function B2(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const m=h+1;s.push(`${m===t?">":" "} ${m}: ${i[h]}`)}return s.join(`
`)}const Qx=new xt;function k2(o){Nt._getMatrix(Qx,Nt.workingColorSpace,o);const t=`mat3( ${Qx.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case qc:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Jx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+B2(o.getShaderSource(t),m)}else return c}function H2(o,t){const i=k2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const G2={[fv]:"Linear",[hv]:"Reinhard",[pv]:"Cineon",[mv]:"ACESFilmic",[xv]:"AgX",[vv]:"Neutral",[gv]:"Custom"};function j2(o,t){const i=G2[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new re;function V2(){Nt.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function W2(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function q2(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let m=1;c.type===o.FLOAT_MAT2&&(m=2),c.type===o.FLOAT_MAT3&&(m=3),c.type===o.FLOAT_MAT4&&(m=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:m}}return i}function qo(o){return o!==""}function $x(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(o){return o.replace(Y2,K2)}const Z2=new Map;function K2(o,t){let i=St[t];if(i===void 0){const s=Z2.get(t);if(s!==void 0)i=St[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return jh(i)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(o){return o.replace(Q2,J2)}function J2(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $2={[Pc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function eA(o){return $2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tA={[Vs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[Qc]:"ENVMAP_TYPE_CUBE_UV"};function nA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":tA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const iA={[jr]:"ENVMAP_MODE_REFRACTION"};function aA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":iA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[dv]:"ENVMAP_BLENDING_MULTIPLY",[Z1]:"ENVMAP_BLENDING_MIX",[K1]:"ENVMAP_BLENDING_ADD"};function rA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":sA[o.combine]||"ENVMAP_BLENDING_NONE"}function oA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function lA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,m=i.fragmentShader;const g=eA(i),p=nA(i),S=aA(i),b=rA(i),x=oA(i),E=X2(i),w=W2(c),D=l.createProgram();let M,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(qo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(qo).join(`
`),y.length>0&&(y+=`
`)):(M=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),y=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+b:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?St.tonemapping_pars_fragment:"",i.toneMapping!==na?j2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,H2("linearToOutputTexel",i.outputColorSpace),V2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=jh(h),h=$x(h,i),h=ev(h,i),m=jh(m),m=$x(m,i),m=ev(m,i),h=tv(h),m=tv(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===px?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=N+M+h,z=N+y+m,V=Kx(l,l.VERTEX_SHADER,I),O=Kx(l,l.FRAGMENT_SHADER,z);l.attachShader(D,V),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function H(G){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(D)||"",ce=l.getShaderInfoLog(V)||"",fe=l.getShaderInfoLog(O)||"",q=$.trim(),U=ce.trim(),B=fe.trim();let le=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(le=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,V,O);else{const ae=Jx(l,V,"vertex"),A=Jx(l,O,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+ae+`
`+A)}else q!==""?dt("WebGLProgram: Program Info Log:",q):(U===""||B==="")&&(ge=!1);ge&&(G.diagnostics={runnable:le,programLog:q,vertexShader:{log:U,prefix:M},fragmentShader:{log:B,prefix:y}})}l.deleteShader(V),l.deleteShader(O),R=new Hc(l,D),F=q2(l,D)}let R;this.getUniforms=function(){return R===void 0&&H(this),R};let F;this.getAttributes=function(){return F===void 0&&H(this),F};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(D,I2)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F2++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=O,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dA(t),i.set(t,s)),s}}class dA{constructor(t){this.id=cA++,this.code=t,this.usedTimes=0}}function fA(o){return o===Xs||o===Vc||o===Xc}function hA(o,t,i,s,l,c){const h=new Cv,m=new uA,g=new Set,p=[],S=new Map,b=s.logarithmicDepthBuffer;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return g.add(R),R===0?"uv":`uv${R}`}function D(R,F,J,G,$,ce){const fe=G.fog,q=$.geometry,U=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,B=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,le=t.get(R.envMap||U,B),ge=le&&le.mapping===Qc?le.image.height:null,ae=E[R.type];R.precision!==null&&(x=s.getMaxPrecision(R.precision),x!==R.precision&&dt("WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const A=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,k=A!==void 0?A.length:0;let de=0;q.morphAttributes.position!==void 0&&(de=1),q.morphAttributes.normal!==void 0&&(de=2),q.morphAttributes.color!==void 0&&(de=3);let ye,we,te,Ee;if(ae){const lt=$i[ae];ye=lt.vertexShader,we=lt.fragmentShader}else ye=R.vertexShader,we=R.fragmentShader,m.update(R),te=m.getVertexShaderID(R),Ee=m.getFragmentShaderID(R);const Se=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Qe=$.isInstancedMesh===!0,Ke=$.isBatchedMesh===!0,ht=!!R.map,at=!!R.matcap,tt=!!le,Mt=!!R.aoMap,ut=!!R.lightMap,tn=!!R.bumpMap,it=!!R.normalMap,_t=!!R.displacementMap,W=!!R.emissiveMap,st=!!R.metalnessMap,et=!!R.roughnessMap,yt=R.anisotropy>0,De=R.clearcoat>0,Zt=R.dispersion>0,L=R.iridescence>0,T=R.sheen>0,ie=R.transmission>0,_e=yt&&!!R.anisotropyMap,Te=De&&!!R.clearcoatMap,ze=De&&!!R.clearcoatNormalMap,Ce=De&&!!R.clearcoatRoughnessMap,pe=L&&!!R.iridescenceMap,me=L&&!!R.iridescenceThicknessMap,Fe=T&&!!R.sheenColorMap,Be=T&&!!R.sheenRoughnessMap,Pe=!!R.specularMap,Oe=!!R.specularColorMap,rt=!!R.specularIntensityMap,ot=ie&&!!R.transmissionMap,mt=ie&&!!R.thicknessMap,Y=!!R.gradientMap,Ne=!!R.alphaMap,xe=R.alphaTest>0,Ge=!!R.alphaHash,Le=!!R.extensions;let Ae=na;R.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const qe={shaderID:ae,shaderType:R.type,shaderName:R.name,vertexShader:ye,fragmentShader:we,defines:R.defines,customVertexShaderID:te,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&$._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&$.instanceColor!==null,instancingMorph:Qe&&$.morphTexture!==null,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:ht,matcap:at,envMap:tt,envMapMode:tt&&le.mapping,envMapCubeUVHeight:ge,aoMap:Mt,lightMap:ut,bumpMap:tn,normalMap:it,displacementMap:_t,emissiveMap:W,normalMapObjectSpace:it&&R.normalMapType===$1,normalMapTangentSpace:it&&R.normalMapType===dx,packedNormalMap:it&&R.normalMapType===dx&&fA(R.normalMap.format),metalnessMap:st,roughnessMap:et,anisotropy:yt,anisotropyMap:_e,clearcoat:De,clearcoatMap:Te,clearcoatNormalMap:ze,clearcoatRoughnessMap:Ce,dispersion:Zt,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:T,sheenColorMap:Fe,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:Oe,specularIntensityMap:rt,transmission:ie,transmissionMap:ot,thicknessMap:mt,gradientMap:Y,opaque:R.transparent===!1&&R.blending===kr&&R.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:Ge,combine:R.combine,mapUv:ht&&w(R.map.channel),aoMapUv:Mt&&w(R.aoMap.channel),lightMapUv:ut&&w(R.lightMap.channel),bumpMapUv:tn&&w(R.bumpMap.channel),normalMapUv:it&&w(R.normalMap.channel),displacementMapUv:_t&&w(R.displacementMap.channel),emissiveMapUv:W&&w(R.emissiveMap.channel),metalnessMapUv:st&&w(R.metalnessMap.channel),roughnessMapUv:et&&w(R.roughnessMap.channel),anisotropyMapUv:_e&&w(R.anisotropyMap.channel),clearcoatMapUv:Te&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ze&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(R.sheenRoughnessMap.channel),specularMapUv:Pe&&w(R.specularMap.channel),specularColorMapUv:Oe&&w(R.specularColorMap.channel),specularIntensityMapUv:rt&&w(R.specularIntensityMap.channel),transmissionMapUv:ot&&w(R.transmissionMap.channel),thicknessMapUv:mt&&w(R.thicknessMap.channel),alphaMapUv:Ne&&w(R.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(it||yt),vertexNormals:!!q.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!q.attributes.uv&&(ht||Ne),fog:!!fe,useFog:R.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||q.attributes.normal===void 0&&it===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:He,skinning:$.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:de,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ht&&R.map.isVideoTexture===!0&&Nt.getTransfer(R.map.colorSpace)===qt,decodeVideoTextureEmissive:W&&R.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(R.emissiveMap.colorSpace)===qt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===wi,flipSided:R.side===ei,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Le&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&R.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return qe.vertexUv1s=g.has(1),qe.vertexUv2s=g.has(2),qe.vertexUv3s=g.has(3),g.clear(),qe}function M(R){const F=[];if(R.shaderID?F.push(R.shaderID):(F.push(R.customVertexShaderID),F.push(R.customFragmentShaderID)),R.defines!==void 0)for(const J in R.defines)F.push(J),F.push(R.defines[J]);return R.isRawShaderMaterial===!1&&(y(F,R),N(F,R),F.push(o.outputColorSpace)),F.push(R.customProgramCacheKey),F.join()}function y(R,F){R.push(F.precision),R.push(F.outputColorSpace),R.push(F.envMapMode),R.push(F.envMapCubeUVHeight),R.push(F.mapUv),R.push(F.alphaMapUv),R.push(F.lightMapUv),R.push(F.aoMapUv),R.push(F.bumpMapUv),R.push(F.normalMapUv),R.push(F.displacementMapUv),R.push(F.emissiveMapUv),R.push(F.metalnessMapUv),R.push(F.roughnessMapUv),R.push(F.anisotropyMapUv),R.push(F.clearcoatMapUv),R.push(F.clearcoatNormalMapUv),R.push(F.clearcoatRoughnessMapUv),R.push(F.iridescenceMapUv),R.push(F.iridescenceThicknessMapUv),R.push(F.sheenColorMapUv),R.push(F.sheenRoughnessMapUv),R.push(F.specularMapUv),R.push(F.specularColorMapUv),R.push(F.specularIntensityMapUv),R.push(F.transmissionMapUv),R.push(F.thicknessMapUv),R.push(F.combine),R.push(F.fogExp2),R.push(F.sizeAttenuation),R.push(F.morphTargetsCount),R.push(F.morphAttributeCount),R.push(F.numDirLights),R.push(F.numPointLights),R.push(F.numSpotLights),R.push(F.numSpotLightMaps),R.push(F.numHemiLights),R.push(F.numRectAreaLights),R.push(F.numDirLightShadows),R.push(F.numPointLightShadows),R.push(F.numSpotLightShadows),R.push(F.numSpotLightShadowsWithMaps),R.push(F.numLightProbes),R.push(F.shadowMapType),R.push(F.toneMapping),R.push(F.numClippingPlanes),R.push(F.numClipIntersection),R.push(F.depthPacking)}function N(R,F){h.disableAll(),F.instancing&&h.enable(0),F.instancingColor&&h.enable(1),F.instancingMorph&&h.enable(2),F.matcap&&h.enable(3),F.envMap&&h.enable(4),F.normalMapObjectSpace&&h.enable(5),F.normalMapTangentSpace&&h.enable(6),F.clearcoat&&h.enable(7),F.iridescence&&h.enable(8),F.alphaTest&&h.enable(9),F.vertexColors&&h.enable(10),F.vertexAlphas&&h.enable(11),F.vertexUv1s&&h.enable(12),F.vertexUv2s&&h.enable(13),F.vertexUv3s&&h.enable(14),F.vertexTangents&&h.enable(15),F.anisotropy&&h.enable(16),F.alphaHash&&h.enable(17),F.batching&&h.enable(18),F.dispersion&&h.enable(19),F.batchingColor&&h.enable(20),F.gradientMap&&h.enable(21),F.packedNormalMap&&h.enable(22),F.vertexNormals&&h.enable(23),R.push(h.mask),h.disableAll(),F.fog&&h.enable(0),F.useFog&&h.enable(1),F.flatShading&&h.enable(2),F.logarithmicDepthBuffer&&h.enable(3),F.reversedDepthBuffer&&h.enable(4),F.skinning&&h.enable(5),F.morphTargets&&h.enable(6),F.morphNormals&&h.enable(7),F.morphColors&&h.enable(8),F.premultipliedAlpha&&h.enable(9),F.shadowMapEnabled&&h.enable(10),F.doubleSided&&h.enable(11),F.flipSided&&h.enable(12),F.useDepthPacking&&h.enable(13),F.dithering&&h.enable(14),F.transmission&&h.enable(15),F.sheen&&h.enable(16),F.opaque&&h.enable(17),F.pointsUvs&&h.enable(18),F.decodeVideoTexture&&h.enable(19),F.decodeVideoTextureEmissive&&h.enable(20),F.alphaToCoverage&&h.enable(21),F.numLightProbeGrids>0&&h.enable(22),R.push(h.mask)}function I(R){const F=E[R.type];let J;if(F){const G=$i[F];J=IS.clone(G.uniforms)}else J=R.uniforms;return J}function z(R,F){let J=S.get(F);return J!==void 0?++J.usedTimes:(J=new lA(o,F,R,l),p.push(J),S.set(F,J)),J}function V(R){if(--R.usedTimes===0){const F=p.indexOf(R);p[F]=p[p.length-1],p.pop(),S.delete(R.cacheKey),R.destroy()}}function O(R){m.remove(R)}function H(){m.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:I,acquireProgram:z,releaseProgram:V,releaseShaderCache:O,programs:p,dispose:H}}function pA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let m=o.get(h);return m===void 0&&(m={},o.set(h,m)),m}function s(h){o.delete(h)}function l(h,m,g){o.get(h)[m]=g}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function mA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function iv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function av(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x){let E=0;return x.isInstancedMesh&&(E+=2),x.isSkinnedMesh&&(E+=1),E}function m(x,E,w,D,M,y){let N=o[t];return N===void 0?(N={id:x.id,object:x,geometry:E,material:w,materialVariant:h(x),groupOrder:D,renderOrder:x.renderOrder,z:M,group:y},o[t]=N):(N.id=x.id,N.object=x,N.geometry=E,N.material=w,N.materialVariant=h(x),N.groupOrder=D,N.renderOrder=x.renderOrder,N.z=M,N.group=y),t++,N}function g(x,E,w,D,M,y){const N=m(x,E,w,D,M,y);w.transmission>0?s.push(N):w.transparent===!0?l.push(N):i.push(N)}function p(x,E,w,D,M,y){const N=m(x,E,w,D,M,y);w.transmission>0?s.unshift(N):w.transparent===!0?l.unshift(N):i.unshift(N)}function S(x,E){i.length>1&&i.sort(x||mA),s.length>1&&s.sort(E||iv),l.length>1&&l.sort(E||iv)}function b(){for(let x=t,E=o.length;x<E;x++){const w=o[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:b,sort:S}}function gA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new av,o.set(s,[h])):l>=c.length?(h=new av,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function xA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new It};break;case"SpotLight":i={position:new re,direction:new re,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new It,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new It,groundColor:new It};break;case"RectAreaLight":i={color:new It,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function vA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let _A=0;function bA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function yA(o){const t=new xA,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new Sn,h=new Sn;function m(p){let S=0,b=0,x=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let E=0,w=0,D=0,M=0,y=0,N=0,I=0,z=0,V=0,O=0,H=0;p.sort(bA);for(let F=0,J=p.length;F<J;F++){const G=p[F],$=G.color,ce=G.intensity,fe=G.distance;let q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xs?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=$.r*ce,b+=$.g*ce,x+=$.b*ce;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],ce);H++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,le=i.get(G);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,s.directionalShadow[E]=le,s.directionalShadowMap[E]=q,s.directionalShadowMatrix[E]=G.shadow.matrix,N++}s.directional[E]=U,E++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy($).multiplyScalar(ce),U.distance=fe,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[D]=U;const B=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,B.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[D]=B.matrix,G.castShadow){const le=i.get(G);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,s.spotShadow[D]=le,s.spotShadowMap[D]=q,z++}D++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy($).multiplyScalar(ce),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const B=G.shadow,le=i.get(G);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,le.shadowCameraNear=B.camera.near,le.shadowCameraFar=B.camera.far,s.pointShadow[w]=le,s.pointShadowMap[w]=q,s.pointShadowMatrix[w]=G.shadow.matrix,I++}s.point[w]=U,w++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(ce),U.groundColor.copy(G.groundColor).multiplyScalar(ce),s.hemi[y]=U,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=b,s.ambient[2]=x;const R=s.hash;(R.directionalLength!==E||R.pointLength!==w||R.spotLength!==D||R.rectAreaLength!==M||R.hemiLength!==y||R.numDirectionalShadows!==N||R.numPointShadows!==I||R.numSpotShadows!==z||R.numSpotMaps!==V||R.numLightProbes!==H)&&(s.directional.length=E,s.spot.length=D,s.rectArea.length=M,s.point.length=w,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=z+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=H,R.directionalLength=E,R.pointLength=w,R.spotLength=D,R.rectAreaLength=M,R.hemiLength=y,R.numDirectionalShadows=N,R.numPointShadows=I,R.numSpotShadows=z,R.numSpotMaps=V,R.numLightProbes=H,s.version=_A++)}function g(p,S){let b=0,x=0,E=0,w=0,D=0;const M=S.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const I=p[y];if(I.isDirectionalLight){const z=s.directional[b];z.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),b++}else if(I.isSpotLight){const z=s.spot[E];z.position.setFromMatrixPosition(I.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(M),E++}else if(I.isRectAreaLight){const z=s.rectArea[w];z.position.setFromMatrixPosition(I.matrixWorld),z.position.applyMatrix4(M),h.identity(),c.copy(I.matrixWorld),c.premultiply(M),h.extractRotation(c),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),w++}else if(I.isPointLight){const z=s.point[x];z.position.setFromMatrixPosition(I.matrixWorld),z.position.applyMatrix4(M),x++}else if(I.isHemisphereLight){const z=s.hemi[D];z.direction.setFromMatrixPosition(I.matrixWorld),z.direction.transformDirection(M),D++}}}return{setup:m,setupView:g,state:s}}function sv(o){const t=new yA(o),i=[],s=[],l=[];function c(x){b.camera=x,i.length=0,s.length=0,l.length=0}function h(x){i.push(x)}function m(x){s.push(x)}function g(x){l.push(x)}function p(){t.setup(i)}function S(x){t.setupView(i,x)}const b={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:b,setupLights:p,setupLightsView:S,pushLight:h,pushShadow:m,pushLightProbeGrid:g}}function SA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let m;return h===void 0?(m=new sv(o),t.set(l,[m])):c>=h.length?(m=new sv(o),h.push(m)):m=h[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],AA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],rv=new Sn,Vo=new re,Zf=new re;function wA(o,t,i){let s=new zv;const l=new Yt,c=new Yt,h=new pn,m=new HS,g=new GS,p={},S=i.maxTextureSize,b={[ps]:ei,[ei]:ps,[wi]:wi},x=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:MA,fragmentShader:EA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const w=new ni;w.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new $n(w,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let y=this.type;this.render=function(O,H,R){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===N1&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const F=o.getRenderTarget(),J=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Na),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ce=y!==this.type;ce&&H.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=O.length;fe<q;fe++){const U=O[fe],B=U.shadow;if(B===void 0){dt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const le=B.getFrameExtents();l.multiply(le),c.copy(B.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/le.x),l.x=c.x*le.x,B.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/le.y),l.y=c.y*le.y,B.mapSize.y=c.y));const ge=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ge,B.map===null||ce===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wo){if(U.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ia(l.x,l.y,{format:Xs,type:La,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Vr(l.x,l.y,ea),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ua,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn}else U.isPointLight?(B.map=new jv(l.x),B.map.depthTexture=new OS(l.x,aa)):(B.map=new ia(l.x,l.y),B.map.depthTexture=new Vr(l.x,l.y,aa)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ua,this.type===Pc?(B.map.depthTexture.compareFunction=ge?ep:$h,B.map.depthTexture.minFilter=Hn,B.map.depthTexture.magFilter=Hn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn);B.camera.updateProjectionMatrix()}const ae=B.map.isWebGLCubeRenderTarget?6:1;for(let A=0;A<ae;A++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,A),o.clear();else{A===0&&(o.setRenderTarget(B.map),o.clear());const k=B.getViewport(A);h.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),$.viewport(h)}if(U.isPointLight){const k=B.camera,de=B.matrix,ye=U.distance||k.far;ye!==k.far&&(k.far=ye,k.updateProjectionMatrix()),Vo.setFromMatrixPosition(U.matrixWorld),k.position.copy(Vo),Zf.copy(k.position),Zf.add(TA[A]),k.up.copy(AA[A]),k.lookAt(Zf),k.updateMatrixWorld(),de.makeTranslation(-Vo.x,-Vo.y,-Vo.z),rv.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),B._frustum.setFromProjectionMatrix(rv,k.coordinateSystem,k.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),z(H,R,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===Wo&&N(B,R),B.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(F,J,G)};function N(O,H){const R=t.update(D);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ia(l.x,l.y,{format:Xs,type:La})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(H,null,R,x,D,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(H,null,R,E,D,null)}function I(O,H,R,F){let J=null;const G=R.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)J=G;else if(J=R.isPointLight===!0?g:m,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const $=J.uuid,ce=H.uuid;let fe=p[$];fe===void 0&&(fe={},p[$]=fe);let q=fe[ce];q===void 0&&(q=J.clone(),fe[ce]=q,H.addEventListener("dispose",V)),J=q}if(J.visible=H.visible,J.wireframe=H.wireframe,F===Wo?J.side=H.shadowSide!==null?H.shadowSide:H.side:J.side=H.shadowSide!==null?H.shadowSide:b[H.side],J.alphaMap=H.alphaMap,J.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,J.map=H.map,J.clipShadows=H.clipShadows,J.clippingPlanes=H.clippingPlanes,J.clipIntersection=H.clipIntersection,J.displacementMap=H.displacementMap,J.displacementScale=H.displacementScale,J.displacementBias=H.displacementBias,J.wireframeLinewidth=H.wireframeLinewidth,J.linewidth=H.linewidth,R.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const $=o.properties.get(J);$.light=R}return J}function z(O,H,R,F,J){if(O.visible===!1)return;if(O.layers.test(H.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&J===Wo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,O.matrixWorld);const ce=t.update(O),fe=O.material;if(Array.isArray(fe)){const q=ce.groups;for(let U=0,B=q.length;U<B;U++){const le=q[U],ge=fe[le.materialIndex];if(ge&&ge.visible){const ae=I(O,ge,F,J);O.onBeforeShadow(o,O,H,R,ce,ae,le),o.renderBufferDirect(R,null,ce,ae,O,le),O.onAfterShadow(o,O,H,R,ce,ae,le)}}}else if(fe.visible){const q=I(O,fe,F,J);O.onBeforeShadow(o,O,H,R,ce,q,null),o.renderBufferDirect(R,null,ce,q,O,null),O.onAfterShadow(o,O,H,R,ce,q,null)}}const $=O.children;for(let ce=0,fe=$.length;ce<fe;ce++)z($[ce],H,R,F,J)}function V(O){O.target.removeEventListener("dispose",V);for(const R in p){const F=p[R],J=O.target.uuid;J in F&&(F[J].dispose(),delete F[J])}}}function RA(o,t){function i(){let Y=!1;const Ne=new pn;let xe=null;const Ge=new pn(0,0,0,0);return{setMask:function(Le){xe!==Le&&!Y&&(o.colorMask(Le,Le,Le,Le),xe=Le)},setLocked:function(Le){Y=Le},setClear:function(Le,Ae,qe,lt,We){We===!0&&(Le*=lt,Ae*=lt,qe*=lt),Ne.set(Le,Ae,qe,lt),Ge.equals(Ne)===!1&&(o.clearColor(Le,Ae,qe,lt),Ge.copy(Ne))},reset:function(){Y=!1,xe=null,Ge.set(-1,0,0,0)}}}function s(){let Y=!1,Ne=!1,xe=null,Ge=null,Le=null;return{setReversed:function(Ae){if(Ne!==Ae){const qe=t.get("EXT_clip_control");Ae?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ae;const lt=Le;Le=null,this.setClear(lt)}},getReversed:function(){return Ne},setTest:function(Ae){Ae?Se(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Ae){xe!==Ae&&!Y&&(o.depthMask(Ae),xe=Ae)},setFunc:function(Ae){if(Ne&&(Ae=cS[Ae]),Ge!==Ae){switch(Ae){case eh:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case nh:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case ih:o.depthFunc(o.EQUAL);break;case ah:o.depthFunc(o.GEQUAL);break;case sh:o.depthFunc(o.GREATER);break;case rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ge=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){Le!==Ae&&(Le=Ae,Ne&&(Ae=1-Ae),o.clearDepth(Ae))},reset:function(){Y=!1,xe=null,Ge=null,Le=null,Ne=!1}}}function l(){let Y=!1,Ne=null,xe=null,Ge=null,Le=null,Ae=null,qe=null,lt=null,We=null;return{setTest:function(Lt){Y||(Lt?Se(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Lt){Ne!==Lt&&!Y&&(o.stencilMask(Lt),Ne=Lt)},setFunc:function(Lt,Nn,Dn){(xe!==Lt||Ge!==Nn||Le!==Dn)&&(o.stencilFunc(Lt,Nn,Dn),xe=Lt,Ge=Nn,Le=Dn)},setOp:function(Lt,Nn,Dn){(Ae!==Lt||qe!==Nn||lt!==Dn)&&(o.stencilOp(Lt,Nn,Dn),Ae=Lt,qe=Nn,lt=Dn)},setLocked:function(Lt){Y=Lt},setClear:function(Lt){We!==Lt&&(o.clearStencil(Lt),We=Lt)},reset:function(){Y=!1,Ne=null,xe=null,Ge=null,Le=null,Ae=null,qe=null,lt=null,We=null}}}const c=new i,h=new s,m=new l,g=new WeakMap,p=new WeakMap;let S={},b={},x={},E=new WeakMap,w=[],D=null,M=!1,y=null,N=null,I=null,z=null,V=null,O=null,H=null,R=new It(0,0,0),F=0,J=!1,G=null,$=null,ce=null,fe=null,q=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,le=0;const ge=o.getParameter(o.VERSION);ge.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ge)[1]),B=le>=1):ge.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),B=le>=2);let ae=null,A={};const k=o.getParameter(o.SCISSOR_BOX),de=o.getParameter(o.VIEWPORT),ye=new pn().fromArray(k),we=new pn().fromArray(de);function te(Y,Ne,xe,Ge){const Le=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(Y,Ae),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qe=0;qe<xe;qe++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Ne+qe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Ae}const Ee={};Ee[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Se(o.DEPTH_TEST),h.setFunc(Gr),tn(!1),it(lx),Se(o.CULL_FACE),Mt(Na);function Se(Y){S[Y]!==!0&&(o.enable(Y),S[Y]=!0)}function He(Y){S[Y]!==!1&&(o.disable(Y),S[Y]=!1)}function Qe(Y,Ne){return x[Y]!==Ne?(o.bindFramebuffer(Y,Ne),x[Y]=Ne,Y===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ne),Y===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(Y,Ne){let xe=w,Ge=!1;if(Y){xe=E.get(Ne),xe===void 0&&(xe=[],E.set(Ne,xe));const Le=Y.textures;if(xe.length!==Le.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,qe=Le.length;Ae<qe;Ae++)xe[Ae]=o.COLOR_ATTACHMENT0+Ae;xe.length=Le.length,Ge=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,Ge=!0);Ge&&o.drawBuffers(xe)}function ht(Y){return D!==Y?(o.useProgram(Y),D=Y,!0):!1}const at={[ks]:o.FUNC_ADD,[L1]:o.FUNC_SUBTRACT,[U1]:o.FUNC_REVERSE_SUBTRACT};at[z1]=o.MIN,at[O1]=o.MAX;const tt={[P1]:o.ZERO,[I1]:o.ONE,[F1]:o.SRC_COLOR,[Jf]:o.SRC_ALPHA,[V1]:o.SRC_ALPHA_SATURATE,[G1]:o.DST_COLOR,[k1]:o.DST_ALPHA,[B1]:o.ONE_MINUS_SRC_COLOR,[$f]:o.ONE_MINUS_SRC_ALPHA,[j1]:o.ONE_MINUS_DST_COLOR,[H1]:o.ONE_MINUS_DST_ALPHA,[X1]:o.CONSTANT_COLOR,[W1]:o.ONE_MINUS_CONSTANT_COLOR,[q1]:o.CONSTANT_ALPHA,[Y1]:o.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,Ne,xe,Ge,Le,Ae,qe,lt,We,Lt){if(Y===Na){M===!0&&(He(o.BLEND),M=!1);return}if(M===!1&&(Se(o.BLEND),M=!0),Y!==D1){if(Y!==y||Lt!==J){if((N!==ks||V!==ks)&&(o.blendEquation(o.FUNC_ADD),N=ks,V=ks),Lt)switch(Y){case kr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFunc(o.ONE,o.ONE);break;case cx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ux:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case kr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case cx:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ux:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}I=null,z=null,O=null,H=null,R.set(0,0,0),F=0,y=Y,J=Lt}return}Le=Le||Ne,Ae=Ae||xe,qe=qe||Ge,(Ne!==N||Le!==V)&&(o.blendEquationSeparate(at[Ne],at[Le]),N=Ne,V=Le),(xe!==I||Ge!==z||Ae!==O||qe!==H)&&(o.blendFuncSeparate(tt[xe],tt[Ge],tt[Ae],tt[qe]),I=xe,z=Ge,O=Ae,H=qe),(lt.equals(R)===!1||We!==F)&&(o.blendColor(lt.r,lt.g,lt.b,We),R.copy(lt),F=We),y=Y,J=!1}function ut(Y,Ne){Y.side===wi?He(o.CULL_FACE):Se(o.CULL_FACE);let xe=Y.side===ei;Ne&&(xe=!xe),tn(xe),Y.blending===kr&&Y.transparent===!1?Mt(Na):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ge=Y.stencilWrite;m.setTest(Ge),Ge&&(m.setMask(Y.stencilWriteMask),m.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),m.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),W(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function tn(Y){G!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),G=Y)}function it(Y){Y!==R1?(Se(o.CULL_FACE),Y!==$&&(Y===lx?o.cullFace(o.BACK):Y===C1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),$=Y}function _t(Y){Y!==ce&&(B&&o.lineWidth(Y),ce=Y)}function W(Y,Ne,xe){Y?(Se(o.POLYGON_OFFSET_FILL),(fe!==Ne||q!==xe)&&(fe=Ne,q=xe,h.getReversed()&&(Ne=-Ne),o.polygonOffset(Ne,xe))):He(o.POLYGON_OFFSET_FILL)}function st(Y){Y?Se(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function et(Y){Y===void 0&&(Y=o.TEXTURE0+U-1),ae!==Y&&(o.activeTexture(Y),ae=Y)}function yt(Y,Ne,xe){xe===void 0&&(ae===null?xe=o.TEXTURE0+U-1:xe=ae);let Ge=A[xe];Ge===void 0&&(Ge={type:void 0,texture:void 0},A[xe]=Ge),(Ge.type!==Y||Ge.texture!==Ne)&&(ae!==xe&&(o.activeTexture(xe),ae=xe),o.bindTexture(Y,Ne||Ee[Y]),Ge.type=Y,Ge.texture=Ne)}function De(){const Y=A[ae];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Zt(){try{o.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function L(){try{o.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function T(){try{o.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ie(){try{o.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function _e(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Te(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ze(){try{o.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ce(){try{o.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function pe(){try{o.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function me(){try{o.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Fe(Y){return b[Y]!==void 0?b[Y]:o.getParameter(Y)}function Be(Y,Ne){b[Y]!==Ne&&(o.pixelStorei(Y,Ne),b[Y]=Ne)}function Pe(Y){ye.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function Oe(Y){we.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function rt(Y,Ne){let xe=p.get(Ne);xe===void 0&&(xe=new WeakMap,p.set(Ne,xe));let Ge=xe.get(Y);Ge===void 0&&(Ge=o.getUniformBlockIndex(Ne,Y.name),xe.set(Y,Ge))}function ot(Y,Ne){const Ge=p.get(Ne).get(Y);g.get(Ne)!==Ge&&(o.uniformBlockBinding(Ne,Ge,Y.__bindingPointIndex),g.set(Ne,Ge))}function mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},b={},ae=null,A={},x={},E=new WeakMap,w=[],D=null,M=!1,y=null,N=null,I=null,z=null,V=null,O=null,H=null,R=new It(0,0,0),F=0,J=!1,G=null,$=null,ce=null,fe=null,q=null,ye.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Se,disable:He,bindFramebuffer:Qe,drawBuffers:Ke,useProgram:ht,setBlending:Mt,setMaterial:ut,setFlipSided:tn,setCullFace:it,setLineWidth:_t,setPolygonOffset:W,setScissorTest:st,activeTexture:et,bindTexture:yt,unbindTexture:De,compressedTexImage2D:Zt,compressedTexImage3D:L,texImage2D:pe,texImage3D:me,pixelStorei:Be,getParameter:Fe,updateUBOMapping:rt,uniformBlockBinding:ot,texStorage2D:ze,texStorage3D:Ce,texSubImage2D:T,texSubImage3D:ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:Te,scissor:Pe,viewport:Oe,reset:mt}}function CA(o,t,i,s,l,c,h){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,S=new WeakMap,b=new Set;let x;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(L,T){return w?new OffscreenCanvas(L,T):Zc("canvas")}function M(L,T,ie){let _e=1;const Te=Zt(L);if((Te.width>ie||Te.height>ie)&&(_e=ie/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ze=Math.floor(_e*Te.width),Ce=Math.floor(_e*Te.height);x===void 0&&(x=D(ze,Ce));const pe=T?D(ze,Ce):x;return pe.width=ze,pe.height=Ce,pe.getContext("2d").drawImage(L,0,0,ze,Ce),dt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+ze+"x"+Ce+")."),pe}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function y(L){return L.generateMipmaps}function N(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(L,T,ie,_e,Te,ze=!1){if(L!==null){if(o[L]!==void 0)return o[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ce;_e&&(Ce=t.get("EXT_texture_norm16"),Ce||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===o.RED&&(ie===o.FLOAT&&(pe=o.R32F),ie===o.HALF_FLOAT&&(pe=o.R16F),ie===o.UNSIGNED_BYTE&&(pe=o.R8),ie===o.UNSIGNED_SHORT&&Ce&&(pe=Ce.R16_EXT),ie===o.SHORT&&Ce&&(pe=Ce.R16_SNORM_EXT)),T===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.R8UI),ie===o.UNSIGNED_SHORT&&(pe=o.R16UI),ie===o.UNSIGNED_INT&&(pe=o.R32UI),ie===o.BYTE&&(pe=o.R8I),ie===o.SHORT&&(pe=o.R16I),ie===o.INT&&(pe=o.R32I)),T===o.RG&&(ie===o.FLOAT&&(pe=o.RG32F),ie===o.HALF_FLOAT&&(pe=o.RG16F),ie===o.UNSIGNED_BYTE&&(pe=o.RG8),ie===o.UNSIGNED_SHORT&&Ce&&(pe=Ce.RG16_EXT),ie===o.SHORT&&Ce&&(pe=Ce.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RG8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RG16UI),ie===o.UNSIGNED_INT&&(pe=o.RG32UI),ie===o.BYTE&&(pe=o.RG8I),ie===o.SHORT&&(pe=o.RG16I),ie===o.INT&&(pe=o.RG32I)),T===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),ie===o.UNSIGNED_INT&&(pe=o.RGB32UI),ie===o.BYTE&&(pe=o.RGB8I),ie===o.SHORT&&(pe=o.RGB16I),ie===o.INT&&(pe=o.RGB32I)),T===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),ie===o.UNSIGNED_INT&&(pe=o.RGBA32UI),ie===o.BYTE&&(pe=o.RGBA8I),ie===o.SHORT&&(pe=o.RGBA16I),ie===o.INT&&(pe=o.RGBA32I)),T===o.RGB&&(ie===o.UNSIGNED_SHORT&&Ce&&(pe=Ce.RGB16_EXT),ie===o.SHORT&&Ce&&(pe=Ce.RGB16_SNORM_EXT),ie===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),ie===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),T===o.RGBA){const me=ze?qc:Nt.getTransfer(Te);ie===o.FLOAT&&(pe=o.RGBA32F),ie===o.HALF_FLOAT&&(pe=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(pe=me===qt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT&&Ce&&(pe=Ce.RGBA16_EXT),ie===o.SHORT&&Ce&&(pe=Ce.RGBA16_SNORM_EXT),ie===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function V(L,T){let ie;return L?T===null||T===aa||T===Ko?ie=o.DEPTH24_STENCIL8:T===ea?ie=o.DEPTH32F_STENCIL8:T===Zo&&(ie=o.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===aa||T===Ko?ie=o.DEPTH_COMPONENT24:T===ea?ie=o.DEPTH_COMPONENT32F:T===Zo&&(ie=o.DEPTH_COMPONENT16),ie}function O(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function H(L){const T=L.target;T.removeEventListener("dispose",H),F(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&b.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),G(T)}function F(L){const T=s.get(L);if(T.__webglInit===void 0)return;const ie=L.source,_e=E.get(ie);if(_e){const Te=_e[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&J(L),Object.keys(_e).length===0&&E.delete(ie)}s.remove(L)}function J(L){const T=s.get(L);o.deleteTexture(T.__webglTexture);const ie=L.source,_e=E.get(ie);delete _e[T.__cacheKey],h.memory.textures--}function G(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Te=0;Te<T.__webglFramebuffer[_e].length;Te++)o.deleteFramebuffer(T.__webglFramebuffer[_e][Te]);else o.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[_e]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ie=L.textures;for(let _e=0,Te=ie.length;_e<Te;_e++){const ze=s.get(ie[_e]);ze.__webglTexture&&(o.deleteTexture(ze.__webglTexture),h.memory.textures--),s.remove(ie[_e])}s.remove(L)}let $=0;function ce(){$=0}function fe(){return $}function q(L){$=L}function U(){const L=$;return L>=l.maxTextures&&dt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),$+=1,L}function B(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function le(L,T){const ie=s.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ie.__version!==L.version){const _e=L.image;if(_e===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(ie,L,T);return}}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+T)}function ge(L,T){const ie=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){He(ie,L,T);return}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+T)}function ae(L,T){const ie=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){He(ie,L,T);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+T)}function A(L,T){const ie=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ie.__version!==L.version){Qe(ie,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+T)}const k={[oh]:o.REPEAT,[Ca]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},de={[Pn]:o.NEAREST,[Q1]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[_f]:o.LINEAR_MIPMAP_NEAREST,[Gs]:o.LINEAR_MIPMAP_LINEAR},ye={[eS]:o.NEVER,[sS]:o.ALWAYS,[tS]:o.LESS,[$h]:o.LEQUAL,[nS]:o.EQUAL,[ep]:o.GEQUAL,[iS]:o.GREATER,[aS]:o.NOTEQUAL};function we(L,T){if(T.type===ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===_f||T.magFilter===dc||T.magFilter===Gs||T.minFilter===Hn||T.minFilter===_f||T.minFilter===dc||T.minFilter===Gs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,k[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,k[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,k[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,de[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ye[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==dc&&T.minFilter!==Gs||T.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function te(L,T){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",H));const _e=T.source;let Te=E.get(_e);Te===void 0&&(Te={},E.set(_e,Te));const ze=B(T);if(ze!==L.__cacheKey){Te[ze]===void 0&&(Te[ze]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ie=!0),Te[ze].usedTimes++;const Ce=Te[L.__cacheKey];Ce!==void 0&&(Te[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&J(T)),L.__cacheKey=ze,L.__webglTexture=Te[ze].texture}return ie}function Ee(L,T,ie){return Math.floor(Math.floor(L/ie)/T)}function Se(L,T,ie,_e){const ze=L.updateRanges;if(ze.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,ie,_e,T.data);else{ze.sort((Be,Pe)=>Be.start-Pe.start);let Ce=0;for(let Be=1;Be<ze.length;Be++){const Pe=ze[Ce],Oe=ze[Be],rt=Pe.start+Pe.count,ot=Ee(Oe.start,T.width,4),mt=Ee(Pe.start,T.width,4);Oe.start<=rt+1&&ot===mt&&Ee(Oe.start+Oe.count-1,T.width,4)===ot?Pe.count=Math.max(Pe.count,Oe.start+Oe.count-Pe.start):(++Ce,ze[Ce]=Oe)}ze.length=Ce+1;const pe=i.getParameter(o.UNPACK_ROW_LENGTH),me=i.getParameter(o.UNPACK_SKIP_PIXELS),Fe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Be=0,Pe=ze.length;Be<Pe;Be++){const Oe=ze[Be],rt=Math.floor(Oe.start/4),ot=Math.ceil(Oe.count/4),mt=rt%T.width,Y=Math.floor(rt/T.width),Ne=ot,xe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,mt,Y,Ne,xe,ie,_e,T.data)}L.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,pe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,me),i.pixelStorei(o.UNPACK_SKIP_ROWS,Fe)}}function He(L,T,ie){let _e=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=o.TEXTURE_3D);const Te=te(L,T),ze=T.source;i.bindTexture(_e,L.__webglTexture,o.TEXTURE0+ie);const Ce=s.get(ze);if(ze.version!==Ce.__version||Te===!0){if(i.activeTexture(o.TEXTURE0+ie),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const xe=Nt.getPrimaries(Nt.workingColorSpace),Ge=T.colorSpace===fs?null:Nt.getPrimaries(T.colorSpace),Le=T.colorSpace===fs||xe===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let me=M(T.image,!1,l.maxTextureSize);me=De(T,me);const Fe=c.convert(T.format,T.colorSpace),Be=c.convert(T.type);let Pe=z(T.internalFormat,Fe,Be,T.normalized,T.colorSpace,T.isVideoTexture);we(_e,T);let Oe;const rt=T.mipmaps,ot=T.isVideoTexture!==!0,mt=Ce.__version===void 0||Te===!0,Y=ze.dataReady,Ne=O(T,me);if(T.isDepthTexture)Pe=V(T.format===js,T.type),mt&&(ot?i.texStorage2D(o.TEXTURE_2D,1,Pe,me.width,me.height):i.texImage2D(o.TEXTURE_2D,0,Pe,me.width,me.height,0,Fe,Be,null));else if(T.isDataTexture)if(rt.length>0){ot&&mt&&i.texStorage2D(o.TEXTURE_2D,Ne,Pe,rt[0].width,rt[0].height);for(let xe=0,Ge=rt.length;xe<Ge;xe++)Oe=rt[xe],ot?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,Fe,Be,Oe.data):i.texImage2D(o.TEXTURE_2D,xe,Pe,Oe.width,Oe.height,0,Fe,Be,Oe.data);T.generateMipmaps=!1}else ot?(mt&&i.texStorage2D(o.TEXTURE_2D,Ne,Pe,me.width,me.height),Y&&Se(T,me,Fe,Be)):i.texImage2D(o.TEXTURE_2D,0,Pe,me.width,me.height,0,Fe,Be,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Pe,rt[0].width,rt[0].height,me.depth);for(let xe=0,Ge=rt.length;xe<Ge;xe++)if(Oe=rt[xe],T.format!==Hi)if(Fe!==null)if(ot){if(Y)if(T.layerUpdates.size>0){const Le=Ix(Oe.width,Oe.height,T.format,T.type);for(const Ae of T.layerUpdates){const qe=Oe.data.subarray(Ae*Le/Oe.data.BYTES_PER_ELEMENT,(Ae+1)*Le/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,Ae,Oe.width,Oe.height,1,Fe,qe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,me.depth,Fe,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Pe,Oe.width,Oe.height,me.depth,0,Oe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,Oe.width,Oe.height,me.depth,Fe,Be,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xe,Pe,Oe.width,Oe.height,me.depth,0,Fe,Be,Oe.data)}else{ot&&mt&&i.texStorage2D(o.TEXTURE_2D,Ne,Pe,rt[0].width,rt[0].height);for(let xe=0,Ge=rt.length;xe<Ge;xe++)Oe=rt[xe],T.format!==Hi?Fe!==null?ot?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,Fe,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,xe,Pe,Oe.width,Oe.height,0,Oe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,Oe.width,Oe.height,Fe,Be,Oe.data):i.texImage2D(o.TEXTURE_2D,xe,Pe,Oe.width,Oe.height,0,Fe,Be,Oe.data)}else if(T.isDataArrayTexture)if(ot){if(mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Pe,me.width,me.height,me.depth),Y)if(T.layerUpdates.size>0){const xe=Ix(me.width,me.height,T.format,T.type);for(const Ge of T.layerUpdates){const Le=me.data.subarray(Ge*xe/me.data.BYTES_PER_ELEMENT,(Ge+1)*xe/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ge,me.width,me.height,1,Fe,Be,Le)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,Be,me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Fe,Be,me.data);else if(T.isData3DTexture)ot?(mt&&i.texStorage3D(o.TEXTURE_3D,Ne,Pe,me.width,me.height,me.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,Be,me.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Fe,Be,me.data);else if(T.isFramebufferTexture){if(mt)if(ot)i.texStorage2D(o.TEXTURE_2D,Ne,Pe,me.width,me.height);else{let xe=me.width,Ge=me.height;for(let Le=0;Le<Ne;Le++)i.texImage2D(o.TEXTURE_2D,Le,Pe,xe,Ge,0,Fe,Be,null),xe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const xe=o.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),b.add(T),xe.onpaint=lt=>{const We=lt.changedElements;for(const Lt of b)We.includes(Lt.image)&&(Lt.needsUpdate=!0)},xe.requestPaint();return}const Ge=0,Le=o.RGBA,Ae=o.RGBA,qe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ge,Le,Ae,qe,me),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(rt.length>0){if(ot&&mt){const xe=Zt(rt[0]);i.texStorage2D(o.TEXTURE_2D,Ne,Pe,xe.width,xe.height)}for(let xe=0,Ge=rt.length;xe<Ge;xe++)Oe=rt[xe],ot?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,Fe,Be,Oe):i.texImage2D(o.TEXTURE_2D,xe,Pe,Fe,Be,Oe);T.generateMipmaps=!1}else if(ot){if(mt){const xe=Zt(me);i.texStorage2D(o.TEXTURE_2D,Ne,Pe,xe.width,xe.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,Be,me)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Fe,Be,me);y(T)&&N(_e),Ce.__version=ze.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Qe(L,T,ie){if(T.image.length!==6)return;const _e=te(L,T),Te=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ie);const ze=s.get(Te);if(Te.version!==ze.__version||_e===!0){i.activeTexture(o.TEXTURE0+ie);const Ce=Nt.getPrimaries(Nt.workingColorSpace),pe=T.colorSpace===fs?null:Nt.getPrimaries(T.colorSpace),me=T.colorSpace===fs||Ce===pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let Ae=0;Ae<6;Ae++)!Fe&&!Be?Pe[Ae]=M(T.image[Ae],!0,l.maxCubemapSize):Pe[Ae]=Be?T.image[Ae].image:T.image[Ae],Pe[Ae]=De(T,Pe[Ae]);const Oe=Pe[0],rt=c.convert(T.format,T.colorSpace),ot=c.convert(T.type),mt=z(T.internalFormat,rt,ot,T.normalized,T.colorSpace),Y=T.isVideoTexture!==!0,Ne=ze.__version===void 0||_e===!0,xe=Te.dataReady;let Ge=O(T,Oe);we(o.TEXTURE_CUBE_MAP,T);let Le;if(Fe){Y&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,mt,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){Le=Pe[Ae].mipmaps;for(let qe=0;qe<Le.length;qe++){const lt=Le[qe];T.format!==Hi?rt!==null?Y?xe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe,0,0,lt.width,lt.height,rt,lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe,mt,lt.width,lt.height,0,lt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe,0,0,lt.width,lt.height,rt,ot,lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe,mt,lt.width,lt.height,0,rt,ot,lt.data)}}}else{if(Le=T.mipmaps,Y&&Ne){Le.length>0&&Ge++;const Ae=Zt(Pe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Be){Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Pe[Ae].width,Pe[Ae].height,rt,ot,Pe[Ae].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Pe[Ae].width,Pe[Ae].height,0,rt,ot,Pe[Ae].data);for(let qe=0;qe<Le.length;qe++){const We=Le[qe].image[Ae].image;Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe+1,0,0,We.width,We.height,rt,ot,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe+1,mt,We.width,We.height,0,rt,ot,We.data)}}else{Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,rt,ot,Pe[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,rt,ot,Pe[Ae]);for(let qe=0;qe<Le.length;qe++){const lt=Le[qe];Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe+1,0,0,rt,ot,lt.image[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe+1,mt,rt,ot,lt.image[Ae])}}}y(T)&&N(o.TEXTURE_CUBE_MAP),ze.__version=Te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ke(L,T,ie,_e,Te,ze){const Ce=c.convert(ie.format,ie.colorSpace),pe=c.convert(ie.type),me=z(ie.internalFormat,Ce,pe,ie.normalized,ie.colorSpace),Fe=s.get(T),Be=s.get(ie);if(Be.__renderTarget=T,!Fe.__hasExternalTextures){const Pe=Math.max(1,T.width>>ze),Oe=Math.max(1,T.height>>ze);Te===o.TEXTURE_3D||Te===o.TEXTURE_2D_ARRAY?i.texImage3D(Te,ze,me,Pe,Oe,T.depth,0,Ce,pe,null):i.texImage2D(Te,ze,me,Pe,Oe,0,Ce,pe,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Te,Be.__webglTexture,0,st(T)):(Te===o.TEXTURE_2D||Te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Te,Be.__webglTexture,ze),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(L,T,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const _e=T.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,ze=V(T.stencilBuffer,Te),Ce=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;et(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,st(T),ze,T.width,T.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,st(T),ze,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ze,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ce,o.RENDERBUFFER,L)}else{const _e=T.textures;for(let Te=0;Te<_e.length;Te++){const ze=_e[Te],Ce=c.convert(ze.format,ze.colorSpace),pe=c.convert(ze.type),me=z(ze.internalFormat,Ce,pe,ze.normalized,ze.colorSpace);et(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,st(T),me,T.width,T.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,st(T),me,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,me,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function at(L,T,ie){const _e=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(T.depthTexture);if(Te.__renderTarget=T,(!Te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,T.depthTexture.addEventListener("dispose",H)),Te.__webglTexture===void 0){Te.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Te.__webglTexture),we(o.TEXTURE_CUBE_MAP,T.depthTexture);const Fe=c.convert(T.depthTexture.format),Be=c.convert(T.depthTexture.type);let Pe;T.depthTexture.format===Ua?Pe=o.DEPTH_COMPONENT24:T.depthTexture.format===js&&(Pe=o.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,T.width,T.height,0,Fe,Be,null)}}else le(T.depthTexture,0);const ze=Te.__webglTexture,Ce=st(T),pe=_e?o.TEXTURE_CUBE_MAP_POSITIVE_X+ie:o.TEXTURE_2D,me=T.depthTexture.format===js?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ua)et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,pe,ze,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,me,pe,ze,0);else if(T.depthTexture.format===js)et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,pe,ze,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,me,pe,ze,0);else throw new Error("Unknown depthTexture format")}function tt(L){const T=s.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _e=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=_e}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(ie)for(let _e=0;_e<6;_e++)at(T.__webglFramebuffer[_e],L,_e);else{const _e=L.texture.mipmaps;_e&&_e.length>0?at(T.__webglFramebuffer[0],L,0):at(T.__webglFramebuffer,L,0)}else if(ie){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=o.createRenderbuffer(),ht(T.__webglDepthbuffer[_e],L,!1);else{const Te=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=T.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,ze),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,ze)}}else{const _e=L.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ht(T.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ze),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,ze)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(L,T,ie){const _e=s.get(L);T!==void 0&&Ke(_e.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&tt(L)}function ut(L){const T=L.texture,ie=s.get(L),_e=s.get(T);L.addEventListener("dispose",R);const Te=L.textures,ze=L.isWebGLCubeRenderTarget===!0,Ce=Te.length>1;if(Ce||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=T.version,h.memory.textures++),ze){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[pe]=[];for(let me=0;me<T.mipmaps.length;me++)ie.__webglFramebuffer[pe][me]=o.createFramebuffer()}else ie.__webglFramebuffer[pe]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)ie.__webglFramebuffer[pe]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ce)for(let pe=0,me=Te.length;pe<me;pe++){const Fe=s.get(Te[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&et(L)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let pe=0;pe<Te.length;pe++){const me=Te[pe];ie.__webglColorRenderbuffer[pe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[pe]);const Fe=c.convert(me.format,me.colorSpace),Be=c.convert(me.type),Pe=z(me.internalFormat,Fe,Be,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),Oe=st(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe,Pe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.RENDERBUFFER,ie.__webglColorRenderbuffer[pe])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),ht(ie.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ze){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),we(o.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Ke(ie.__webglFramebuffer[pe][me],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ke(ie.__webglFramebuffer[pe],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(T)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let pe=0,me=Te.length;pe<me;pe++){const Fe=Te[pe],Be=s.get(Fe);let Pe=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Be.__webglTexture),we(Pe,Fe),Ke(ie.__webglFramebuffer,L,Fe,o.COLOR_ATTACHMENT0+pe,Pe,0),y(Fe)&&N(Pe)}i.unbindTexture()}else{let pe=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(pe,_e.__webglTexture),we(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Ke(ie.__webglFramebuffer[me],L,T,o.COLOR_ATTACHMENT0,pe,me);else Ke(ie.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,pe,0);y(T)&&N(pe),i.unbindTexture()}L.depthBuffer&&tt(L)}function tn(L){const T=L.textures;for(let ie=0,_e=T.length;ie<_e;ie++){const Te=T[ie];if(y(Te)){const ze=I(L),Ce=s.get(Te).__webglTexture;i.bindTexture(ze,Ce),N(ze),i.unbindTexture()}}}const it=[],_t=[];function W(L){if(L.samples>0){if(et(L)===!1){const T=L.textures,ie=L.width,_e=L.height;let Te=o.COLOR_BUFFER_BIT;const ze=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=s.get(L),pe=T.length>1;if(pe)for(let Fe=0;Fe<T.length;Fe++)i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const me=L.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=o.STENCIL_BUFFER_BIT)),pe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Fe]);const Be=s.get(T[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Be,0)}o.blitFramebuffer(0,0,ie,_e,0,0,ie,_e,Te,o.NEAREST),g===!0&&(it.length=0,_t.length=0,it.push(o.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(ze),_t.push(ze),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,_t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<T.length;Fe++){i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Fe]);const Be=s.get(T[Fe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,Be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&g){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function st(L){return Math.min(l.maxSamples,L.samples)}function et(L){const T=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(L){const T=h.render.frame;S.get(L)!==T&&(S.set(L,T),L.update())}function De(L,T){const ie=L.colorSpace,_e=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Wc&&ie!==fs&&(Nt.getTransfer(ie)===qt?(_e!==Hi||Te!==Ri)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",ie)),T}function Zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=le,this.setTexture2DArray=ge,this.setTexture3D=ae,this.setTextureCube=A,this.rebindTextures=Mt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NA(o,t){function i(s,l=fs){let c;const h=Nt.getTransfer(l);if(s===Ri)return o.UNSIGNED_BYTE;if(s===Yh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Zh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Sv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Mv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===bv)return o.BYTE;if(s===yv)return o.SHORT;if(s===Zo)return o.UNSIGNED_SHORT;if(s===qh)return o.INT;if(s===aa)return o.UNSIGNED_INT;if(s===ea)return o.FLOAT;if(s===La)return o.HALF_FLOAT;if(s===Ev)return o.ALPHA;if(s===Tv)return o.RGB;if(s===Hi)return o.RGBA;if(s===Ua)return o.DEPTH_COMPONENT;if(s===js)return o.DEPTH_STENCIL;if(s===Av)return o.RED;if(s===Kh)return o.RED_INTEGER;if(s===Xs)return o.RG;if(s===Qh)return o.RG_INTEGER;if(s===Jh)return o.RGBA_INTEGER;if(s===Ic||s===Fc||s===Bc||s===kc)if(h===qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===dh||s===fh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh||s===gh||s===xh||s===Vc||s===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return h===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gh)return c.COMPRESSED_R11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Vc)return c.COMPRESSED_RG11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_h||s===bh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Lh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_h)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ch)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lh)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===zh||s===Oh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Uh)return h===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Ih||s===Xc||s===Fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Iv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:DA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new $c(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends qs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,m="local-floor",g=1,p=null,S=null,b=null,x=null,E=null,w=null;const D=typeof XRWebGLBinding<"u",M=new UA,y={},N=i.getContextAttributes();let I=null,z=null;const V=[],O=[],H=new Yt;let R=null;const F=new Ai;F.viewport=new pn;const J=new Ai;J.viewport=new pn;const G=[F,J],$=new VS;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ee=V[te];return Ee===void 0&&(Ee=new wf,V[te]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(te){let Ee=V[te];return Ee===void 0&&(Ee=new wf,V[te]=Ee),Ee.getGripSpace()},this.getHand=function(te){let Ee=V[te];return Ee===void 0&&(Ee=new wf,V[te]=Ee),Ee.getHandSpace()};function q(te){const Ee=O.indexOf(te.inputSource);if(Ee===-1)return;const Se=V[Ee];Se!==void 0&&(Se.update(te.inputSource,te.frame,p||h),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function U(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let te=0;te<V.length;te++){const Ee=O[te];Ee!==null&&(O[te]=null,V[te].disconnect(Ee))}ce=null,fe=null,M.reset();for(const te in y)delete y[te];t.setRenderTarget(I),E=null,x=null,b=null,l=null,z=null,we.stop(),s.isPresenting=!1,t.setPixelRatio(R),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){m=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return b===null&&D&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),N.xrCompatible!==!0&&await i.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(H),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,He=null,Qe=null;N.depth&&(Qe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=N.stencil?js:Ua,He=N.stencil?Ko:aa);const Ke={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};b=this.getBinding(),x=b.createProjectionLayer(Ke),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new ia(x.textureWidth,x.textureHeight,{format:Hi,type:Ri,depthTexture:new Vr(x.textureWidth,x.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),z=new ia(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(m),we.setContext(l),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(te){for(let Ee=0;Ee<te.removed.length;Ee++){const Se=te.removed[Ee],He=O.indexOf(Se);He>=0&&(O[He]=null,V[He].disconnect(Se))}for(let Ee=0;Ee<te.added.length;Ee++){const Se=te.added[Ee];let He=O.indexOf(Se);if(He===-1){for(let Ke=0;Ke<V.length;Ke++)if(Ke>=O.length){O.push(Se),He=Ke;break}else if(O[Ke]===null){O[Ke]=Se,He=Ke;break}if(He===-1)break}const Qe=V[He];Qe&&Qe.connect(Se)}}const le=new re,ge=new re;function ae(te,Ee,Se){le.setFromMatrixPosition(Ee.matrixWorld),ge.setFromMatrixPosition(Se.matrixWorld);const He=le.distanceTo(ge),Qe=Ee.projectionMatrix.elements,Ke=Se.projectionMatrix.elements,ht=Qe[14]/(Qe[10]-1),at=Qe[14]/(Qe[10]+1),tt=(Qe[9]+1)/Qe[5],Mt=(Qe[9]-1)/Qe[5],ut=(Qe[8]-1)/Qe[0],tn=(Ke[8]+1)/Ke[0],it=ht*ut,_t=ht*tn,W=He/(-ut+tn),st=W*-ut;if(Ee.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(st),te.translateZ(W),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Qe[10]===-1)te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const et=ht+W,yt=at+W,De=it-st,Zt=_t+(He-st),L=tt*at/yt*et,T=Mt*at/yt*et;te.projectionMatrix.makePerspective(De,Zt,L,T,et,yt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function A(te,Ee){Ee===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ee.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let Ee=te.near,Se=te.far;M.texture!==null&&(M.depthNear>0&&(Ee=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),$.near=J.near=F.near=Ee,$.far=J.far=F.far=Se,(ce!==$.near||fe!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ce=$.near,fe=$.far),$.layers.mask=te.layers.mask|6,F.layers.mask=$.layers.mask&-5,J.layers.mask=$.layers.mask&-3;const He=te.parent,Qe=$.cameras;A($,He);for(let Ke=0;Ke<Qe.length;Ke++)A(Qe[Ke],He);Qe.length===2?ae($,F,J):$.projectionMatrix.copy(F.projectionMatrix),k(te,$,He)};function k(te,Ee,Se){Se===null?te.matrix.copy(Ee.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ee.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=kh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&E===null))return g},this.setFoveation=function(te){g=te,x!==null&&(x.fixedFoveation=te),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(te){return y[te]};let de=null;function ye(te,Ee){if(S=Ee.getViewerPose(p||h),w=Ee,S!==null){const Se=S.views;E!==null&&(t.setRenderTargetFramebuffer(z,E.framebuffer),t.setRenderTarget(z));let He=!1;Se.length!==$.cameras.length&&($.cameras.length=0,He=!0);for(let at=0;at<Se.length;at++){const tt=Se[at];let Mt=null;if(E!==null)Mt=E.getViewport(tt);else{const tn=b.getViewSubImage(x,tt);Mt=tn.viewport,at===0&&(t.setRenderTargetTextures(z,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(z))}let ut=G[at];ut===void 0&&(ut=new Ai,ut.layers.enable(at),ut.viewport=new pn,G[at]=ut),ut.matrix.fromArray(tt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(tt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),at===0&&($.matrix.copy(ut.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),He===!0&&$.cameras.push(ut)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){b=s.getBinding();const at=b.getDepthInformation(Se[0]);at&&at.isValid&&at.texture&&M.init(at,l.renderState)}if(Qe&&Qe.includes("camera-access")&&D){t.state.unbindTexture(),b=s.getBinding();for(let at=0;at<Se.length;at++){const tt=Se[at].camera;if(tt){let Mt=y[tt];Mt||(Mt=new Iv,y[tt]=Mt);const ut=b.getCameraImage(tt);Mt.sourceTexture=ut}}}}for(let Se=0;Se<V.length;Se++){const He=O[Se],Qe=V[Se];He!==null&&Qe!==void 0&&Qe.update(He,Ee,p||h)}de&&de(te,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),w=null}const we=new Hv;we.setAnimationLoop(ye),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}}const OA=new Sn,Yv=new xt;Yv.set(-1,0,0,0,1,0,0,0,1);function PA(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Fv(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,N,I,z){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),b(M,y)):y.isMeshPhongMaterial?(c(M,y),S(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&E(M,y,z)):y.isMeshMatcapMaterial?(c(M,y),w(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),D(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&m(M,y)):y.isPointsMaterial?g(M,y,N,I):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const N=t.get(y),I=N.envMap,z=N.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(z)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Yv),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function m(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,N,I){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*N,M.scale.value=I*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function S(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function b(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function E(M,y,N){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,y){y.matcap&&(M.matcap.value=y.matcap)}function D(M,y){const N=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IA(o,t,i,s){let l={},c={},h=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,I){const z=I.program;s.uniformBlockBinding(N,z)}function p(N,I){let z=l[N.id];z===void 0&&(w(N),z=S(N),l[N.id]=z,N.addEventListener("dispose",M));const V=I.program;s.updateUBOMapping(N,V);const O=t.render.frame;c[N.id]!==O&&(x(N),c[N.id]=O)}function S(N){const I=b();N.__bindingPointIndex=I;const z=o.createBuffer(),V=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,z),z}function b(){for(let N=0;N<m;N++)if(h.indexOf(N)===-1)return h.push(N),N;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=l[N.id],z=N.uniforms,V=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let O=0,H=z.length;O<H;O++){const R=Array.isArray(z[O])?z[O]:[z[O]];for(let F=0,J=R.length;F<J;F++){const G=R[F];if(E(G,O,F,V)===!0){const $=G.__offset,ce=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let q=0;q<ce.length;q++){const U=ce[q],B=D(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,$+fe,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):ArrayBuffer.isView(U)?G.__data.set(new U.constructor(U.buffer,U.byteOffset,G.__data.length)):(U.toArray(G.__data,fe),fe+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(N,I,z,V){const O=N.value,H=I+"_"+z;if(V[H]===void 0)return typeof O=="number"||typeof O=="boolean"?V[H]=O:ArrayBuffer.isView(O)?V[H]=O.slice():V[H]=O.clone(),!0;{const R=V[H];if(typeof O=="number"||typeof O=="boolean"){if(R!==O)return V[H]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(R.equals(O)===!1)return R.copy(O),!0}}return!1}function w(N){const I=N.uniforms;let z=0;const V=16;for(let H=0,R=I.length;H<R;H++){const F=Array.isArray(I[H])?I[H]:[I[H]];for(let J=0,G=F.length;J<G;J++){const $=F[J],ce=Array.isArray($.value)?$.value:[$.value];for(let fe=0,q=ce.length;fe<q;fe++){const U=ce[fe],B=D(U),le=z%V,ge=le%B.boundary,ae=le+ge;z+=ge,ae!==0&&V-ae<B.storage&&(z+=V-ae),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=z,z+=B.storage}}}const O=z%V;return O>0&&(z+=V-O),N.__size=z,N.__cache={},this}function D(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(I.boundary=16,I.storage=N.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",N),I}function M(N){const I=N.target;I.removeEventListener("dispose",M);const z=h.indexOf(I.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function y(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:g,update:p,dispose:y}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function BA(){return Ji===null&&(Ji=new NS(FA,16,16,Xs,La),Ji.name="DFG_LUT",Ji.minFilter=Hn,Ji.magFilter=Hn,Ji.wrapS=Ca,Ji.wrapT=Ca,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class kA{constructor(t={}){const{canvas:i=oS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:x=!1,outputBufferType:E=Ri}=t;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=h;const D=E,M=new Set([Jh,Qh,Kh]),y=new Set([Ri,aa,Zo,Ko,Yh,Zh]),N=new Uint32Array(4),I=new Int32Array(4),z=new re;let V=null,O=null;const H=[],R=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const J=this;let G=!1,$=null;this._outputColorSpace=Ti;let ce=0,fe=0,q=null,U=-1,B=null;const le=new pn,ge=new pn;let ae=null;const A=new It(0);let k=0,de=i.width,ye=i.height,we=1,te=null,Ee=null;const Se=new pn(0,0,de,ye),He=new pn(0,0,de,ye);let Qe=!1;const Ke=new zv;let ht=!1,at=!1;const tt=new Sn,Mt=new re,ut=new pn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function _t(){return q===null?we:1}let W=s;function st(v,P){return i.getContext(v,P)}try{const v={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",lt,!1),W===null){const P="webgl2";if(W=st(P,v),W===null)throw st(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Ut("WebGLRenderer: "+v.message),v}let et,yt,De,Zt,L,T,ie,_e,Te,ze,Ce,pe,me,Fe,Be,Pe,Oe,rt,ot,mt,Y,Ne,xe;function Ge(){et=new BT(W),et.init(),Y=new NA(W,et),yt=new DT(W,et,t,Y),De=new RA(W,et),yt.reversedDepthBuffer&&x&&De.buffers.depth.setReversed(!0),Zt=new GT(W),L=new pA,T=new CA(W,et,De,L,yt,Y,Zt),ie=new FT(J),_e=new WS(W),Ne=new CT(W,_e),Te=new kT(W,_e,Zt,Ne),ze=new VT(W,Te,_e,Ne,Zt),rt=new jT(W,yt,T),Be=new LT(L),Ce=new hA(J,ie,et,yt,Ne,Be),pe=new PA(J,L),me=new gA,Fe=new SA(et),Oe=new RT(J,ie,De,ze,w,g),Pe=new wA(J,ze,yt),xe=new IA(W,Zt,yt,De),ot=new NT(W,et,Zt),mt=new HT(W,et,Zt),Zt.programs=Ce.programs,J.capabilities=yt,J.extensions=et,J.properties=L,J.renderLists=me,J.shadowMap=Pe,J.state=De,J.info=Zt}Ge(),D!==Ri&&(F=new WT(D,i.width,i.height,l,c));const Le=new zA(J,W);this.xr=Le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const v=et.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=et.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(v){v!==void 0&&(we=v,this.setSize(de,ye,!1))},this.getSize=function(v){return v.set(de,ye)},this.setSize=function(v,P,X=!0){if(Le.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=v,ye=P,i.width=Math.floor(v*we),i.height=Math.floor(P*we),X===!0&&(i.style.width=v+"px",i.style.height=P+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(de*we,ye*we).floor()},this.setDrawingBufferSize=function(v,P,X){de=v,ye=P,we=X,i.width=Math.floor(v*X),i.height=Math.floor(P*X),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(D===Ri){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(le)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,P,X,K){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,P,X,K),De.viewport(le.copy(Se).multiplyScalar(we).round())},this.getScissor=function(v){return v.copy(He)},this.setScissor=function(v,P,X,K){v.isVector4?He.set(v.x,v.y,v.z,v.w):He.set(v,P,X,K),De.scissor(ge.copy(He).multiplyScalar(we).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(v){De.setScissorTest(Qe=v)},this.setOpaqueSort=function(v){te=v},this.setTransparentSort=function(v){Ee=v},this.getClearColor=function(v){return v.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,X=!0){let K=0;if(v){let ee=!1;if(q!==null){const Ie=q.texture.format;ee=M.has(Ie)}if(ee){const Ie=q.texture.type,je=y.has(Ie),Q=Oe.getClearColor(),Re=Oe.getClearAlpha(),ke=Q.r,Ye=Q.g,ft=Q.b;je?(N[0]=ke,N[1]=Ye,N[2]=ft,N[3]=Re,W.clearBufferuiv(W.COLOR,0,N)):(I[0]=ke,I[1]=Ye,I[2]=ft,I[3]=Re,W.clearBufferiv(W.COLOR,0,I))}else K|=W.COLOR_BUFFER_BIT}P&&(K|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),$=v},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",lt,!1),Oe.dispose(),me.dispose(),Fe.dispose(),L.dispose(),ie.dispose(),ze.dispose(),Ne.dispose(),xe.dispose(),Ce.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",za),Le.removeEventListener("sessionend",Oa),kt.stop()};function Ae(v){v.preventDefault(),gx("WebGLRenderer: Context Lost."),G=!0}function qe(){gx("WebGLRenderer: Context Restored."),G=!1;const v=Zt.autoReset,P=Pe.enabled,X=Pe.autoUpdate,K=Pe.needsUpdate,ee=Pe.type;Ge(),Zt.autoReset=v,Pe.enabled=P,Pe.autoUpdate=X,Pe.needsUpdate=K,Pe.type=ee}function lt(v){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function We(v){const P=v.target;P.removeEventListener("dispose",We),Lt(P)}function Lt(v){Nn(v),L.remove(v)}function Nn(v){const P=L.get(v).programs;P!==void 0&&(P.forEach(function(X){Ce.releaseProgram(X)}),v.isShaderMaterial&&Ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,X,K,ee,Ie){P===null&&(P=tn);const je=ee.isMesh&&ee.matrixWorld.determinant()<0,Q=Xi(v,P,X,K,ee);De.setMaterial(K,je);let Re=X.index,ke=1;if(K.wireframe===!0){if(Re=Te.getWireframeAttribute(X),Re===void 0)return;ke=2}const Ye=X.drawRange,ft=X.attributes.position;let $e=Ye.start*ke,zt=(Ye.start+Ye.count)*ke;Ie!==null&&($e=Math.max($e,Ie.start*ke),zt=Math.min(zt,(Ie.start+Ie.count)*ke)),Re!==null?($e=Math.max($e,0),zt=Math.min(zt,Re.count)):ft!=null&&($e=Math.max($e,0),zt=Math.min(zt,ft.count));const sn=zt-$e;if(sn<0||sn===1/0)return;Ne.setup(ee,K,Q,X,Re);let $t,Ht=ot;if(Re!==null&&($t=_e.get(Re),Ht=mt,Ht.setIndex($t)),ee.isMesh)K.wireframe===!0?(De.setLineWidth(K.wireframeLinewidth*_t()),Ht.setMode(W.LINES)):Ht.setMode(W.TRIANGLES);else if(ee.isLine){let Gt=K.linewidth;Gt===void 0&&(Gt=1),De.setLineWidth(Gt*_t()),ee.isLineSegments?Ht.setMode(W.LINES):ee.isLineLoop?Ht.setMode(W.LINE_LOOP):Ht.setMode(W.LINE_STRIP)}else ee.isPoints?Ht.setMode(W.POINTS):ee.isSprite&&Ht.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Gt=ee._multiDrawStarts,Xe=ee._multiDrawCounts,In=ee._multiDrawCount,Et=Re?_e.get(Re).bytesPerElement:1,Mn=L.get(K).currentProgram.getUniforms();for(let ii=0;ii<In;ii++)Mn.setValue(W,"_gl_DrawID",ii),Ht.render(Gt[ii]/Et,Xe[ii])}else if(ee.isInstancedMesh)Ht.renderInstances($e,sn,ee.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xe=Math.min(X.instanceCount,Gt);Ht.renderInstances($e,sn,Xe)}else Ht.render($e,sn)};function Dn(v,P,X){v.transparent===!0&&v.side===wi&&v.forceSinglePass===!1?(v.side=ei,v.needsUpdate=!0,sa(v,P,X),v.side=ps,v.needsUpdate=!0,sa(v,P,X),v.side=wi):sa(v,P,X)}this.compile=function(v,P,X=null){X===null&&(X=v),O=Fe.get(X),O.init(P),R.push(O),X.traverseVisible(function(ee){ee.isLight&&ee.layers.test(P.layers)&&(O.pushLight(ee),ee.castShadow&&O.pushShadow(ee))}),v!==X&&v.traverseVisible(function(ee){ee.isLight&&ee.layers.test(P.layers)&&(O.pushLight(ee),ee.castShadow&&O.pushShadow(ee))}),O.setupLights();const K=new Set;return v.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let je=0;je<Ie.length;je++){const Q=Ie[je];Dn(Q,X,ee),K.add(Q)}else Dn(Ie,X,ee),K.add(Ie)}),O=R.pop(),K},this.compileAsync=function(v,P,X=null){const K=this.compile(v,P,X);return new Promise(ee=>{function Ie(){if(K.forEach(function(je){L.get(je).currentProgram.isReady()&&K.delete(je)}),K.size===0){ee(v);return}setTimeout(Ie,10)}et.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let pi=null;function ms(v){pi&&pi(v)}function za(){kt.stop()}function Oa(){kt.start()}const kt=new Hv;kt.setAnimationLoop(ms),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(v){pi=v,Le.setAnimationLoop(v),v===null?kt.stop():kt.start()},Le.addEventListener("sessionstart",za),Le.addEventListener("sessionend",Oa),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(v,P);const X=Le.enabled===!0&&Le.isPresenting===!0,K=F!==null&&(q===null||X)&&F.begin(J,q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(P),P=Le.getCamera()),v.isScene===!0&&v.onBeforeRender(J,v,P,q),O=Fe.get(v,R.length),O.init(P),O.state.textureUnits=T.getTextureUnits(),R.push(O),tt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ke.setFromProjectionMatrix(tt,ta,P.reversedDepth),at=this.localClippingEnabled,ht=Be.init(this.clippingPlanes,at),V=me.get(v,H.length),V.init(),H.push(V),Le.enabled===!0&&Le.isPresenting===!0){const je=J.xr.getDepthSensingMesh();je!==null&&ln(je,P,-1/0,J.sortObjects)}ln(v,P,0,J.sortObjects),V.finish(),J.sortObjects===!0&&V.sort(te,Ee),it=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,it&&Oe.addToRenderList(V,v),this.info.render.frame++,ht===!0&&Be.beginShadows();const ee=O.state.shadowsArray;if(Pe.render(ee,v,P),ht===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&F.hasRenderPass())===!1){const je=V.opaque,Q=V.transmissive;if(O.setupLights(),P.isArrayCamera){const Re=P.cameras;if(Q.length>0)for(let ke=0,Ye=Re.length;ke<Ye;ke++){const ft=Re[ke];Ci(je,Q,v,ft)}it&&Oe.render(v);for(let ke=0,Ye=Re.length;ke<Ye;ke++){const ft=Re[ke];mn(V,v,ft,ft.viewport)}}else Q.length>0&&Ci(je,Q,v,P),it&&Oe.render(v),mn(V,v,P)}q!==null&&fe===0&&(T.updateMultisampleRenderTarget(q),T.updateRenderTargetMipmap(q)),K&&F.end(J),v.isScene===!0&&v.onAfterRender(J,v,P),Ne.resetDefaultState(),U=-1,B=null,R.pop(),R.length>0?(O=R[R.length-1],T.setTextureUnits(O.state.textureUnits),ht===!0&&Be.setGlobalState(J.clippingPlanes,O.state.camera)):O=null,H.pop(),H.length>0?V=H[H.length-1]:V=null,$!==null&&$.renderEnd()};function ln(v,P,X,K){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)O.pushLightProbeGrid(v);else if(v.isLight)O.pushLight(v),v.castShadow&&O.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ke.intersectsSprite(v)){K&&ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const je=ze.update(v),Q=v.material;Q.visible&&V.push(v,je,Q,X,ut.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ke.intersectsObject(v))){const je=ze.update(v),Q=v.material;if(K&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ut.copy(v.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),ut.copy(je.boundingSphere.center)),ut.applyMatrix4(v.matrixWorld).applyMatrix4(tt)),Array.isArray(Q)){const Re=je.groups;for(let ke=0,Ye=Re.length;ke<Ye;ke++){const ft=Re[ke],$e=Q[ft.materialIndex];$e&&$e.visible&&V.push(v,je,$e,X,ut.z,ft)}}else Q.visible&&V.push(v,je,Q,X,ut.z,null)}}const Ie=v.children;for(let je=0,Q=Ie.length;je<Q;je++)ln(Ie[je],P,X,K)}function mn(v,P,X,K){const{opaque:ee,transmissive:Ie,transparent:je}=v;O.setupLightsView(X),ht===!0&&Be.setGlobalState(J.clippingPlanes,X),K&&De.viewport(le.copy(K)),ee.length>0&&Gn(ee,P,X),Ie.length>0&&Gn(Ie,P,X),je.length>0&&Gn(je,P,X),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ci(v,P,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[K.id]===void 0){const $e=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[K.id]=new ia(1,1,{generateMipmaps:!0,type:$e?La:Ri,minFilter:Gs,samples:Math.max(4,yt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Ie=O.state.transmissionRenderTarget[K.id],je=K.viewport||le;Ie.setSize(je.z*J.transmissionResolutionScale,je.w*J.transmissionResolutionScale);const Q=J.getRenderTarget(),Re=J.getActiveCubeFace(),ke=J.getActiveMipmapLevel();J.setRenderTarget(Ie),J.getClearColor(A),k=J.getClearAlpha(),k<1&&J.setClearColor(16777215,.5),J.clear(),it&&Oe.render(X);const Ye=J.toneMapping;J.toneMapping=na;const ft=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),O.setupLightsView(K),ht===!0&&Be.setGlobalState(J.clippingPlanes,K),Gn(v,X,K),T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie),et.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let zt=0,sn=P.length;zt<sn;zt++){const $t=P[zt],{object:Ht,geometry:Gt,material:Xe,group:In}=$t;if(Xe.side===wi&&Ht.layers.test(K.layers)){const Et=Xe.side;Xe.side=ei,Xe.needsUpdate=!0,Vi(Ht,X,K,Gt,Xe,In),Xe.side=Et,Xe.needsUpdate=!0,$e=!0}}$e===!0&&(T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie))}J.setRenderTarget(Q,Re,ke),J.setClearColor(A,k),ft!==void 0&&(K.viewport=ft),J.toneMapping=Ye}function Gn(v,P,X){const K=P.isScene===!0?P.overrideMaterial:null;for(let ee=0,Ie=v.length;ee<Ie;ee++){const je=v[ee],{object:Q,geometry:Re,group:ke}=je;let Ye=je.material;Ye.allowOverride===!0&&K!==null&&(Ye=K),Q.layers.test(X.layers)&&Vi(Q,P,X,Re,Ye,ke)}}function Vi(v,P,X,K,ee,Ie){v.onBeforeRender(J,P,X,K,ee,Ie),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),ee.onBeforeRender(J,P,X,K,v,Ie),ee.transparent===!0&&ee.side===wi&&ee.forceSinglePass===!1?(ee.side=ei,ee.needsUpdate=!0,J.renderBufferDirect(X,P,K,ee,v,Ie),ee.side=ps,ee.needsUpdate=!0,J.renderBufferDirect(X,P,K,ee,v,Ie),ee.side=wi):J.renderBufferDirect(X,P,K,ee,v,Ie),v.onAfterRender(J,P,X,K,ee,Ie)}function sa(v,P,X){P.isScene!==!0&&(P=tn);const K=L.get(v),ee=O.state.lights,Ie=O.state.shadowsArray,je=ee.state.version,Q=Ce.getParameters(v,ee.state,Ie,P,X,O.state.lightProbeGridArray),Re=Ce.getProgramCacheKey(Q);let ke=K.programs;K.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,K.fog=P.fog;const Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;K.envMap=ie.get(v.envMap||K.environment,Ye),K.envMapRotation=K.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,ke===void 0&&(v.addEventListener("dispose",We),ke=new Map,K.programs=ke);let ft=ke.get(Re);if(ft!==void 0){if(K.currentProgram===ft&&K.lightsStateVersion===je)return Ni(v,Q),ft}else Q.uniforms=Ce.getUniforms(v),$!==null&&v.isNodeMaterial&&$.build(v,X,Q),v.onBeforeCompile(Q,J),ft=Ce.acquireProgram(Q,Re),ke.set(Re,ft),K.uniforms=Q.uniforms;const $e=K.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&($e.clippingPlanes=Be.uniform),Ni(v,Q),K.needsLights=Di(v),K.lightsStateVersion=je,K.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),K.lightProbeGrid=O.state.lightProbeGridArray.length>0,K.currentProgram=ft,K.uniformsList=null,ft}function gs(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Hc.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ni(v,P){const X=L.get(v);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function xs(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;z.setFromMatrixPosition(P.matrixWorld);for(let X=0,K=v.length;X<K;X++){const ee=v[X];if(ee.texture!==null&&ee.boundingBox.containsPoint(z))return ee}return null}function Xi(v,P,X,K,ee){P.isScene!==!0&&(P=tn),T.resetTextureUnits();const Ie=P.fog,je=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?P.environment:null,Q=q===null?J.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nt.workingColorSpace,Re=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ke=ie.get(K.envMap||je,Re),Ye=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ft=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$e=!!X.morphAttributes.position,zt=!!X.morphAttributes.normal,sn=!!X.morphAttributes.color;let $t=na;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&($t=J.toneMapping);const Ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,Xe=L.get(K),In=O.state.lights;if(ht===!0&&(at===!0||v!==B)){const Bt=v===B&&K.id===U;Be.setState(K,v,Bt)}let Et=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==In.state.version||Xe.outputColorSpace!==Q||ee.isBatchedMesh&&Xe.batching===!1||!ee.isBatchedMesh&&Xe.batching===!0||ee.isBatchedMesh&&Xe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Xe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Xe.instancing===!1||!ee.isInstancedMesh&&Xe.instancing===!0||ee.isSkinnedMesh&&Xe.skinning===!1||!ee.isSkinnedMesh&&Xe.skinning===!0||ee.isInstancedMesh&&Xe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Xe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Xe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Xe.instancingMorph===!1&&ee.morphTexture!==null||Xe.envMap!==ke||K.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==ft||Xe.morphTargets!==$e||Xe.morphNormals!==zt||Xe.morphColors!==sn||Xe.toneMapping!==$t||Xe.morphTargetsCount!==Gt||!!Xe.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Xe.__version=K.version);let Mn=Xe.currentProgram;Et===!0&&(Mn=sa(K,P,ee),$&&K.isNodeMaterial&&$.onUpdateProgram(K,Mn,Xe));let ii=!1,Li=!1,ai=!1;const jt=Mn.getUniforms(),rn=Xe.uniforms;if(De.useProgram(Mn.program)&&(ii=!0,Li=!0,ai=!0),K.id!==U&&(U=K.id,Li=!0),Xe.needsLights){const Bt=xs(O.state.lightProbeGridArray,ee);Xe.lightProbeGrid!==Bt&&(Xe.lightProbeGrid=Bt,Li=!0)}if(ii||B!==v){De.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),jt.setValue(W,"projectionMatrix",v.projectionMatrix),jt.setValue(W,"viewMatrix",v.matrixWorldInverse);const Wi=jt.map.cameraPosition;Wi!==void 0&&Wi.setValue(W,Mt.setFromMatrixPosition(v.matrixWorld)),yt.logarithmicDepthBuffer&&jt.setValue(W,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&jt.setValue(W,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,Li=!0,ai=!0)}if(Xe.needsLights&&(In.state.directionalShadowMap.length>0&&jt.setValue(W,"directionalShadowMap",In.state.directionalShadowMap,T),In.state.spotShadowMap.length>0&&jt.setValue(W,"spotShadowMap",In.state.spotShadowMap,T),In.state.pointShadowMap.length>0&&jt.setValue(W,"pointShadowMap",In.state.pointShadowMap,T)),ee.isSkinnedMesh){jt.setOptional(W,ee,"bindMatrix"),jt.setOptional(W,ee,"bindMatrixInverse");const Bt=ee.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),jt.setValue(W,"boneTexture",Bt.boneTexture,T))}ee.isBatchedMesh&&(jt.setOptional(W,ee,"batchingTexture"),jt.setValue(W,"batchingTexture",ee._matricesTexture,T),jt.setOptional(W,ee,"batchingIdTexture"),jt.setValue(W,"batchingIdTexture",ee._indirectTexture,T),jt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&jt.setValue(W,"batchingColorTexture",ee._colorsTexture,T));const Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&rt.update(ee,X,Mn),(Li||Xe.receiveShadow!==ee.receiveShadow)&&(Xe.receiveShadow=ee.receiveShadow,jt.setValue(W,"receiveShadow",ee.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&P.environment!==null&&(rn.envMapIntensity.value=P.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=BA()),Li){if(jt.setValue(W,"toneMappingExposure",J.toneMappingExposure),Xe.needsLights&&ra(rn,ai),Ie&&K.fog===!0&&pe.refreshFogUniforms(rn,Ie),pe.refreshMaterialUniforms(rn,K,we,ye,O.state.transmissionRenderTarget[v.id]),Xe.needsLights&&Xe.lightProbeGrid){const Bt=Xe.lightProbeGrid;rn.probesSH.value=Bt.texture,rn.probesMin.value.copy(Bt.boundingBox.min),rn.probesMax.value.copy(Bt.boundingBox.max),rn.probesResolution.value.copy(Bt.resolution)}Hc.upload(W,gs(Xe),rn,T)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Hc.upload(W,gs(Xe),rn,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&jt.setValue(W,"center",ee.center),jt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),jt.setValue(W,"normalMatrix",ee.normalMatrix),jt.setValue(W,"modelMatrix",ee.matrixWorld),K.uniformsGroups!==void 0){const Bt=K.uniformsGroups;for(let Wi=0,Pa=Bt.length;Wi<Pa;Wi++){const vs=Bt[Wi];xe.update(vs,Mn),xe.bind(vs,Mn)}}return Mn}function ra(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Di(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(v,P,X){const K=L.get(v);K.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),L.get(v.texture).__webglTexture=P,L.get(v.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:X,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const X=L.get(v);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0};const mi=W.createFramebuffer();this.setRenderTarget=function(v,P=0,X=0){q=v,ce=P,fe=X;let K=null,ee=!1,Ie=!1;if(v){const Q=L.get(v);if(Q.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(W.FRAMEBUFFER,Q.__webglFramebuffer),le.copy(v.viewport),ge.copy(v.scissor),ae=v.scissorTest,De.viewport(le),De.scissor(ge),De.setScissorTest(ae),U=-1;return}else if(Q.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(Q.__hasExternalTextures)T.rebindTextures(v,L.get(v.texture).__webglTexture,L.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ye=v.depthTexture;if(Q.__boundDepthTexture!==Ye){if(Ye!==null&&L.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ie=!0);const ke=L.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ke[P])?K=ke[P][X]:K=ke[P],ee=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?K=L.get(v).__webglMultisampledFramebuffer:Array.isArray(ke)?K=ke[X]:K=ke,le.copy(v.viewport),ge.copy(v.scissor),ae=v.scissorTest}else le.copy(Se).multiplyScalar(we).floor(),ge.copy(He).multiplyScalar(we).floor(),ae=Qe;if(X!==0&&(K=mi),De.bindFramebuffer(W.FRAMEBUFFER,K)&&De.drawBuffers(v,K),De.viewport(le),De.scissor(ge),De.setScissorTest(ae),ee){const Q=L.get(v.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+P,Q.__webglTexture,X)}else if(Ie){const Q=P;for(let Re=0;Re<v.textures.length;Re++){const ke=L.get(v.textures[Re]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Re,ke.__webglTexture,X,Q)}}else if(v!==null&&X!==0){const Q=L.get(v.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Q.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(v,P,X,K,ee,Ie,je,Q=0){if(!(v&&v.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&je!==void 0&&(Re=Re[je]),Re){De.bindFramebuffer(W.FRAMEBUFFER,Re);try{const ke=v.textures[Q],Ye=ke.format,ft=ke.type;if(v.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Q),!yt.textureFormatReadable(Ye)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(ft)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-K&&X>=0&&X<=v.height-ee&&W.readPixels(P,X,K,ee,Y.convert(Ye),Y.convert(ft),Ie)}finally{const ke=q!==null?L.get(q).__webglFramebuffer:null;De.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(v,P,X,K,ee,Ie,je,Q=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&je!==void 0&&(Re=Re[je]),Re)if(P>=0&&P<=v.width-K&&X>=0&&X<=v.height-ee){De.bindFramebuffer(W.FRAMEBUFFER,Re);const ke=v.textures[Q],Ye=ke.format,ft=ke.type;if(v.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Q),!yt.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.bufferData(W.PIXEL_PACK_BUFFER,Ie.byteLength,W.STREAM_READ),W.readPixels(P,X,K,ee,Y.convert(Ye),Y.convert(ft),0);const zt=q!==null?L.get(q).__webglFramebuffer:null;De.bindFramebuffer(W.FRAMEBUFFER,zt);const sn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await lS(W,sn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ie),W.deleteBuffer($e),W.deleteSync(sn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,X=0){const K=Math.pow(2,-X),ee=Math.floor(v.image.width*K),Ie=Math.floor(v.image.height*K),je=P!==null?P.x:0,Q=P!==null?P.y:0;T.setTexture2D(v,0),W.copyTexSubImage2D(W.TEXTURE_2D,X,0,0,je,Q,ee,Ie),De.unbindTexture()};const dn=W.createFramebuffer(),gn=W.createFramebuffer();this.copyTextureToTexture=function(v,P,X=null,K=null,ee=0,Ie=0){let je,Q,Re,ke,Ye,ft,$e,zt,sn;const $t=v.isCompressedTexture?v.mipmaps[Ie]:v.image;if(X!==null)je=X.max.x-X.min.x,Q=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,Ye=X.min.y,ft=X.isBox3?X.min.z:0;else{const rn=Math.pow(2,-ee);je=Math.floor($t.width*rn),Q=Math.floor($t.height*rn),v.isDataArrayTexture?Re=$t.depth:v.isData3DTexture?Re=Math.floor($t.depth*rn):Re=1,ke=0,Ye=0,ft=0}K!==null?($e=K.x,zt=K.y,sn=K.z):($e=0,zt=0,sn=0);const Ht=Y.convert(P.format),Gt=Y.convert(P.type);let Xe;P.isData3DTexture?(T.setTexture3D(P,0),Xe=W.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(T.setTexture2DArray(P,0),Xe=W.TEXTURE_2D_ARRAY):(T.setTexture2D(P,0),Xe=W.TEXTURE_2D),De.activeTexture(W.TEXTURE0),De.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,P.flipY),De.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),De.pixelStorei(W.UNPACK_ALIGNMENT,P.unpackAlignment);const In=De.getParameter(W.UNPACK_ROW_LENGTH),Et=De.getParameter(W.UNPACK_IMAGE_HEIGHT),Mn=De.getParameter(W.UNPACK_SKIP_PIXELS),ii=De.getParameter(W.UNPACK_SKIP_ROWS),Li=De.getParameter(W.UNPACK_SKIP_IMAGES);De.pixelStorei(W.UNPACK_ROW_LENGTH,$t.width),De.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t.height),De.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),De.pixelStorei(W.UNPACK_SKIP_ROWS,Ye),De.pixelStorei(W.UNPACK_SKIP_IMAGES,ft);const ai=v.isDataArrayTexture||v.isData3DTexture,jt=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const rn=L.get(v),Ui=L.get(P),Bt=L.get(rn.__renderTarget),Wi=L.get(Ui.__renderTarget);De.bindFramebuffer(W.READ_FRAMEBUFFER,Bt.__webglFramebuffer),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Pa=0;Pa<Re;Pa++)ai&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,L.get(v).__webglTexture,ee,ft+Pa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,L.get(P).__webglTexture,Ie,sn+Pa)),W.blitFramebuffer(ke,Ye,je,Q,$e,zt,je,Q,W.DEPTH_BUFFER_BIT,W.NEAREST);De.bindFramebuffer(W.READ_FRAMEBUFFER,null),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||v.isRenderTargetTexture||L.has(v)){const rn=L.get(v),Ui=L.get(P);De.bindFramebuffer(W.READ_FRAMEBUFFER,dn),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,gn);for(let Bt=0;Bt<Re;Bt++)ai?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,rn.__webglTexture,ee,ft+Bt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,rn.__webglTexture,ee),jt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ui.__webglTexture,Ie,sn+Bt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ui.__webglTexture,Ie),ee!==0?W.blitFramebuffer(ke,Ye,je,Q,$e,zt,je,Q,W.COLOR_BUFFER_BIT,W.NEAREST):jt?W.copyTexSubImage3D(Xe,Ie,$e,zt,sn+Bt,ke,Ye,je,Q):W.copyTexSubImage2D(Xe,Ie,$e,zt,ke,Ye,je,Q);De.bindFramebuffer(W.READ_FRAMEBUFFER,null),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else jt?v.isDataTexture||v.isData3DTexture?W.texSubImage3D(Xe,Ie,$e,zt,sn,je,Q,Re,Ht,Gt,$t.data):P.isCompressedArrayTexture?W.compressedTexSubImage3D(Xe,Ie,$e,zt,sn,je,Q,Re,Ht,$t.data):W.texSubImage3D(Xe,Ie,$e,zt,sn,je,Q,Re,Ht,Gt,$t):v.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ie,$e,zt,je,Q,Ht,Gt,$t.data):v.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ie,$e,zt,$t.width,$t.height,Ht,$t.data):W.texSubImage2D(W.TEXTURE_2D,Ie,$e,zt,je,Q,Ht,Gt,$t);De.pixelStorei(W.UNPACK_ROW_LENGTH,In),De.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Et),De.pixelStorei(W.UNPACK_SKIP_PIXELS,Mn),De.pixelStorei(W.UNPACK_SKIP_ROWS,ii),De.pixelStorei(W.UNPACK_SKIP_IMAGES,Li),Ie===0&&P.generateMipmaps&&W.generateMipmap(Xe),De.unbindTexture()},this.initRenderTarget=function(v){L.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),De.unbindTexture()},this.resetState=function(){ce=0,fe=0,q=null,De.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}function HA({isWarping:o,theme:t="dark"}){const i=Ue.useRef(null),s=Ue.useRef(null),l=Ue.useRef(o);return Ue.useEffect(()=>{l.current=o},[o]),Ue.useEffect(()=>{const c=i.current,h=s.current;if(!c||!h)return;let m=6514417,g=440020,p=16777215;t==="cyberpunk"?(m=16711765,g=65484,p=16776960):t==="ai"?(m=9133302,g=6514417,p=3718648):t==="terminal"?(m=2278750,g=1483594,p=8843180):t==="light"&&(m=5195493,g=440020,p=5195493);const S=new ES;S.fog=new np(131848,.015);const b=c.clientWidth/c.clientHeight,x=new Ai(75,b,.1,1e3);x.position.set(0,0,10);const E=new kA({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"});E.setSize(c.clientWidth,c.clientHeight,!1),E.setPixelRatio(Math.min(window.devicePixelRatio,2));const w=120,D=100,M=8,y=new Yo(M,M,w,32,D,!0);y.rotateX(Math.PI/2);const N=new Br({color:m,wireframe:!0,transparent:!0,opacity:0,side:wi}),I=new $n(y,N);S.add(I);const z=new ji({vertexShader:`
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform float uWarpProgress;
        uniform vec3 uPrimaryColor;
        uniform vec3 uSecondaryColor;

        // Simple high-performance pseudo-random hash generator
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        // Procedural 2D noise mapping
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec3(0.0, 0.0, 0.0).xy), hash(i + vec3(1.0, 0.0, 0.0).xy), u.x),
                     mix(hash(i + vec3(0.0, 1.0, 0.0).xy), hash(i + vec3(1.0, 1.0, 0.0).xy), u.x), u.y);
        }

        void main() {
          // Circumferential warp stripes
          float speed = uTime * (1.2 + uWarpProgress * 10.0);
          
          // Map longitudinal coordinate (vUv.y) and circumferential coordinate (vUv.x)
          // Multiply vUv.x to make many longitudinal parallel streaks
          float colCoords = vUv.x * 70.0 + sin(vUv.y * 3.1415 + uTime * 2.0) * (1.0 - uWarpProgress);
          float rowCoords = vUv.y * 3.5 - speed;

          // Generate base structural energy streams
          float streamNoise = noise(vec2(colCoords, rowCoords * 0.15));
          float intensity = smoothstep(0.46, 0.82, streamNoise);

          // Longitudinal blur stretching when hyperdrive registers warping progress
          if (uWarpProgress > 0.01) {
            // Highly condensed, vertically stretched streaks to simulate motion blur
            float streakCol = vUv.x * 140.0;
            float streakRow = vUv.y * 1.5 - uTime * (18.0 + uWarpProgress * 45.0);
            float warpStreaks = noise(vec2(streakCol, streakRow * 0.025));
            
            float stretchFactor = smoothstep(0.38, 0.88, warpStreaks) * uWarpProgress * 1.8;
            intensity += stretchFactor;
          }

          // Depth-based fade (tunnel starts dark and leads to the singularity bright core)
          // vPosition.z goes from -tunnelLength/2 to +tunnelLength/2
          float depthFade = smoothstep(55.0, -45.0, vPosition.z);

          // Mix colors based on theme uniforms
          vec3 baseColor = mix(uPrimaryColor, uSecondaryColor, sin(vUv.x * 6.28318 + uTime) * 0.5 + 0.5);
          vec3 finalColor = baseColor * (intensity * (1.0 + uWarpProgress * 3.2));

          // Combine with white-hot core warp lines representing physical relativistic stretch
          if (uWarpProgress > 0.15) {
            float whiteLineNoise = noise(vec2(vUv.x * 200.0, vUv.y * 0.6 - uTime * 70.0));
            float whiteGlowVal = smoothstep(0.72, 0.97, whiteLineNoise) * (uWarpProgress - 0.15) * 1.5;
            finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), whiteGlowVal * depthFade);
            intensity += whiteGlowVal;
          }

          float finalAlpha = intensity * (uWarpProgress * (0.12 + uWarpProgress * 0.68)) * depthFade;
          finalAlpha = clamp(finalAlpha, 0.0, 1.0);

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new It(m)},uSecondaryColor:{value:new It(g)}},transparent:!0,side:wi,blending:jc,depthWrite:!1}),V=new Yo(M-.1,M-.1,w,48,D,!0);V.rotateX(Math.PI/2);const O=new $n(V,z);S.add(O);const H=new Yo(M+1.2,M+1.2,w,12,35,!0);H.rotateX(Math.PI/2);const R=new Br({color:g,wireframe:!0,transparent:!0,opacity:0,side:wi}),F=new $n(H,R);S.add(F);const J=15,G=[],$=new ap(M+.3,.08,8,48);for(let it=0;it<J;it++){const _t=new Br({color:it%2===0?m:g,transparent:!0,opacity:0}),W=new $n($,_t);W.position.z=it/J*w-w/2,S.add(W),G.push(W)}const ce=750,fe=new Float32Array(ce*3),q=[],U=[],B=[],le=new Float32Array(ce*3);for(let it=0;it<ce;it++){const _t=Math.random()*(M-.4)+.2,W=Math.random()*Math.PI*2,st=(Math.random()-.5)*w,et=Math.cos(W)*_t,yt=Math.sin(W)*_t;fe[it*3]=et,fe[it*3+1]=yt,fe[it*3+2]=st,le[it*3]=et,le[it*3+1]=yt,le[it*3+2]=st,q.push(Math.random()*.4+.1),U.push(W),B.push(_t)}const ge=new ni;ge.setAttribute("position",new Gi(fe,3));const ae=new Ov({color:p,size:.12,transparent:!0,opacity:.85,blending:jc,sizeAttenuation:!0}),A=new zS(ge,ae);S.add(A);const k=new ip(1.5,32,32),de=new Br({color:16777215,transparent:!0,opacity:0}),ye=new $n(k,de);ye.position.set(0,0,-45),S.add(ye);let we=0,te=0,Ee=0,Se=0;const He=it=>{we=(it.clientX-window.innerWidth/2)/110,te=(it.clientY-window.innerHeight/2)/110};window.addEventListener("mousemove",He);const Qe=()=>{if(!c||!h)return;const it=c.clientWidth,_t=c.clientHeight;x.aspect=it/_t,x.updateProjectionMatrix(),E.setSize(it,_t,!1)},Ke=new ResizeObserver(()=>{Qe()});Ke.observe(c);let ht=.25,at=.0015,tt=0,Mt=0,ut;const tn=()=>{const it=l.current;Mt+=it?.024:.012,it?(tt=Math.min(1,tt+.018),ht=Math.min(4.8,ht+.15),at=Math.min(.06,at+.0018),x.fov=Math.min(136,x.fov+1.2),x.updateProjectionMatrix(),de.opacity=Math.min(1,de.opacity+.045),ye.scale.addScalar(.4)):(tt=Math.max(0,tt-.03),ht=Math.max(.25,ht-.05),at=Math.max(.0015,at-.001),x.fov=Math.max(75,x.fov-1.5),x.updateProjectionMatrix(),de.opacity=Math.max(0,de.opacity-.05),ye.scale.x>1&&ye.scale.set(1,1,1)),N.opacity=.14*tt,R.opacity=.09*tt,z.uniforms.uWarpProgress.value=tt,z.uniforms.uTime.value=Mt,I.rotation.z+=at,F.rotation.z-=at*.7,O.rotation.z+=at*.4;const _t=Date.now()*.002;G.forEach((st,et)=>{st.position.z,st.position.z+=ht,st.position.z>15&&(st.position.z=-55);const yt=1+Math.sin(_t+et)*.03+(it?.08:0);st.scale.set(yt,yt,1),st.material&&!Array.isArray(st.material)&&(st.material.opacity=.65*tt)}),Ee+=(we-Ee)*.06,Se+=(te-Se)*.06,x.position.x=Ee,x.position.y=-Se,x.lookAt(0,0,-50);const W=ge.attributes.position.array;for(let st=0;st<ce;st++){const et=st*3;U[st]+=at*(st%2===0?1:-1)*.7,W[et]=Math.cos(U[st])*B[st],W[et+1]=Math.sin(U[st])*B[st];const yt=q[st]*(it?14.5:1)+ht;W[et+2]+=yt,W[et+2]>12&&(W[et+2]=-55,W[et]=Math.cos(U[st])*B[st],W[et+1]=Math.sin(U[st])*B[st])}it?ae.size=Math.min(.42,ae.size+.015):ae.size=Math.max(.12,ae.size-.01),ge.attributes.position.needsUpdate=!0,E.render(S,x),ut=requestAnimationFrame(tn)};return tn(),()=>{cancelAnimationFrame(ut),window.removeEventListener("mousemove",He),Ke.disconnect(),E.dispose(),y.dispose(),N.dispose(),V.dispose(),z.dispose(),H.dispose(),R.dispose(),$.dispose(),ge.dispose(),ae.dispose(),k.dispose(),de.dispose()}},[t]),d.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none -z-10 bg-[#020308] overflow-hidden",children:d.jsx("canvas",{ref:s,className:"w-full h-full block",style:{filter:o?"contrast(1.15) brightness(1.1)":"none"}})})}const GA="/assets/avatar-BRuvllXD.png",Kf=o=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...o,children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Qf=o=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...o,children:d.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0a3.26 3.26 0 01-3.26 3.27 3.26 3.26 0 01-3.26-3.27 3.26 3.26 0 013.26-3.27 3.26 3.26 0 013.26 3.27zm3.04 0a1.07 1.07 0 01-1.07 1.06 1.07 1.07 0 01-1.07-1.06 1.07 1.07 0 011.07-1.06 1.07 1.07 0 011.07 1.06z"})});function jA({item:o,idx:t,theme:i}){const s=Ue.useRef(null),[l,c]=Ue.useState(!1);Ue.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:.1,rootMargin:"0px 0px -60px 0px"}),g=s.current;return g&&m.observe(g),()=>{g&&m.unobserve(g)}},[]);const h=t%2===0;return d.jsxs("div",{ref:s,className:`flex flex-col md:flex-row items-start ${h?"md:flex-row-reverse":""} relative transition-all duration-700 ease-out ${l?"opacity-100 translate-x-0":`opacity-0 ${h?"translate-x-10 md:-translate-x-10":"translate-x-10"}`}`,children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:`w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg transition-all duration-500 ${l?"border-cyan-400/80 scale-100":"border-zinc-850 scale-75"}`,children:d.jsx("span",{className:`w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 transition-transform duration-500 ${l?"scale-100":"scale-50"}`})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-12 md:pl-0",children:d.jsxs("div",{className:`p-6 md:p-8 rounded-2xl border backdrop-blur-md relative group transition-all duration-500 ${i==="light"?"bg-white/80 border-slate-200 shadow-lg hover:border-indigo-400 hover:shadow-indigo-500/5":"bg-zinc-950/45 border-zinc-900 shadow-2xl hover:border-zinc-850 hover:shadow-cyan-500/5"}`,children:[d.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1",children:o.year}),d.jsx("h3",{className:`text-base md:text-lg font-sans font-bold leading-tight transition-colors group-hover:text-cyan-300 ${i==="light"?"text-slate-800":"text-white"}`,children:o.title}),d.jsx("span",{className:"text-[10px] font-mono text-zinc-550 block mt-1",children:o.company})]}),d.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[9px] font-mono border font-medium uppercase ${o.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":o.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":o.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:o.company})]}),d.jsx("ul",{className:"space-y-3 mb-6 text-zinc-400",children:o.achievements.map((m,g)=>d.jsxs("li",{className:"flex items-start text-[11px] leading-relaxed font-sans text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0"}),d.jsx("span",{children:m})]},g))}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 select-none",children:o.technologies.map(m=>d.jsx("span",{className:"px-2 py-0.5 rounded-md text-[9px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:m},m))})]})})]})}function VA({isWarping:o,theme:t,soundOn:i,triggerSound:s,onLaunchOS:l,onOpenWindowDirectly:c}){const h=Ue.useRef(null),[m,g]=Ue.useState(!1),[p,S]=Ue.useState("All"),[b,x]=Ue.useState(0),[E,w]=Ue.useState(""),[D,M]=Ue.useState(""),[y,N]=Ue.useState(""),[I,z]=Ue.useState(""),[V,O]=Ue.useState({}),[H,R]=Ue.useState(!1),[F,J]=Ue.useState(!1),[G,$]=Ue.useState(0),ce=Ue.useRef(null);Ue.useEffect(()=>{const A=()=>{h.current&&g(h.current.scrollTop>500);const de=h.current,ye=ce.current;if(!de||!ye)return;const we=de.getBoundingClientRect(),te=ye.getBoundingClientRect(),Ee=we.top,Se=we.height,He=te.top-Ee,Qe=te.height,Ke=Se*.8,ht=Se*.2,at=Qe+Ke-ht,tt=Ke-He,Mt=Math.min(Math.max(tt/at,0),1);$(Mt)},k=h.current;return k&&(k.addEventListener("scroll",A),setTimeout(A,100)),()=>{k&&k.removeEventListener("scroll",A)}},[]);const fe=()=>{h.current&&(h.current.scrollTo({top:0,behavior:"smooth"}),s(1e3,.05))};Ue.useEffect(()=>{const A=setInterval(()=>{x(k=>(k+1)%B.length)},8e3);return()=>clearInterval(A)},[]);const U=(()=>{switch(t){case"cyberpunk":return{textPrimary:"text-[#00ffcc]",textSecondary:"text-pink-400",borderAccent:"border-pink-500/20 hover:border-pink-500/50",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] border border-pink-400/50",btnSecondary:"border-pink-500/30 text-pink-300 hover:bg-pink-550/10 bg-black/60",statCardGlow:"hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",skillBar:"from-pink-500 to-[#00ffcc]",activeTabBtn:"bg-pink-600 text-white border-pink-500",tabBtn:"text-pink-400 border-pink-500/20 hover:border-pink-500/40 bg-zinc-950/40",badgeStyle:"bg-pink-500/10 border border-pink-500/20 text-pink-300",gradientBg:"from-pink-500/5 via-purple-500/2 to-transparent"};case"ai":return{textPrimary:"text-purple-300",textSecondary:"text-cyan-400",borderAccent:"border-purple-500/20 hover:border-cyan-400/40",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-400/40",btnSecondary:"border-purple-500/30 text-cyan-200 hover:bg-purple-950/40 bg-black/60",statCardGlow:"hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",skillBar:"from-purple-500 to-cyan-400",activeTabBtn:"bg-purple-600 text-white border-purple-500",tabBtn:"text-purple-300 border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/40",badgeStyle:"bg-purple-500/10 border border-purple-500/20 text-purple-300",gradientBg:"from-purple-500/5 via-indigo-500/2 to-transparent"};case"terminal":return{textPrimary:"text-[#33ff33]",textSecondary:"text-[#16a34a]",borderAccent:"border-[#33ff33]/20 hover:border-[#33ff33]/50",btnPrimary:"bg-[#33ff33] text-black hover:bg-[#33ff33]/85 shadow-[0_0_15px_rgba(51,255,51,0.3)] border border-[#33ff33]/50",btnSecondary:"border-[#33ff33]/30 text-[#33ff33] hover:bg-[#33ff33]/10 bg-black/60",statCardGlow:"hover:border-[#33ff33]/50 hover:shadow-[0_0_25px_rgba(51,255,51,0.2)]",skillBar:"from-[#16a34a] to-[#33ff33]",activeTabBtn:"bg-zinc-900 text-[#33ff33] border-[#33ff33]",tabBtn:"text-[#33ff33]/80 border-[#33ff33]/20 hover:border-[#33ff33]/40 bg-black/40",badgeStyle:"bg-emerald-950/20 border border-[#33ff33]/20 text-[#33ff33]",gradientBg:"from-[#33ff33]/3 to-transparent"};case"light":return{textPrimary:"text-indigo-600",textSecondary:"text-sky-600",borderAccent:"border-slate-300 hover:border-indigo-400",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white shadow-md",btnSecondary:"border-slate-300 text-slate-700 hover:bg-slate-100 bg-white",statCardGlow:"hover:border-indigo-400 hover:shadow-lg",skillBar:"from-indigo-500 to-sky-500",activeTabBtn:"bg-indigo-650 text-white border-indigo-650",tabBtn:"text-slate-600 border-slate-200 hover:border-slate-350 bg-slate-50",badgeStyle:"bg-indigo-50 border border-indigo-100 text-indigo-600",gradientBg:"from-indigo-500/3 via-purple-500/1 to-transparent"};default:return{textPrimary:"text-sky-400",textSecondary:"text-indigo-400",borderAccent:"border-zinc-800/80 hover:border-[#00ffcc]/30",btnPrimary:"bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40",btnSecondary:"border-zinc-800 text-zinc-300 hover:bg-zinc-900/60 bg-black/60",statCardGlow:"hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]",skillBar:"from-indigo-500 to-sky-400",activeTabBtn:"bg-indigo-650 text-white border-indigo-500",tabBtn:"text-zinc-400 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",badgeStyle:"bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",gradientBg:"from-indigo-500/5 via-purple-500/2 to-transparent"}}})(),B=[{text:"Farhan's expertise in fine-tuning BERT and RoBERTa models for clinical emotional text classification was pivotal to our diagnostics program. His depth of knowledge in linguistic anomalies is world-class.",author:"Dr. Sarah Jenkins",role:"Lead Clinical NLP Researcher, Cognitive Diagnostics Lab",initials:"SJ"},{text:"The Ink Home's WebGL carousel design and custom caching proxy were executed brilliantly. Farhan consistently delivers high-performance SaaS components while respecting peak engineering aesthetic rules.",author:"Marcus Sterling",role:"Product Director, Synthetix Solutions",initials:"MS"},{text:"An absolute powerhouse developer. Farhan balances deep statistical NLP modeling with pixel-perfect responsive layouts inspired by Linear. TypeRush is a masterclass in Web Audio synchronization.",author:"Linus O.",role:"Senior Open Source Systems Architect",initials:"LO"}],le=[{title:"Deep Learning Specialization",issuer:"deeplearning.ai / Coursera",date:"2024",skills:["CNNs","RNNs/LSTMs","Transformer Architecture","Attention Mechanisms"]},{title:"Google Cloud Associate Engineer",issuer:"Google Cloud",date:"2025",skills:["GCP Compute Engines","GKE Containers","IAM Security","Cloud SQL Monitoring"]},{title:"Natural Language Processing Professional",issuer:"Hugging Face / Stanford Online",date:"2024",skills:["Tokenization Pipelines","Model Fine-tuning","ONNX Optimization","Quantization"]}],ge=Wt.skills.filter(A=>p==="All"||p==="AI/ML"&&(A.category==="AI/ML"||A.category==="Research & Science")||p==="Frontend"&&A.category==="Frontend"||p==="Backend"&&A.category==="Backend"&&A.name!=="PostgreSQL"&&A.name!=="Redis Caching"||p==="Database"&&(A.name==="PostgreSQL"||A.name==="Redis Caching")||p==="DevOps"&&A.category==="Systems & Devops"),ae=A=>{A.preventDefault(),s(950,.04);const k={};if(E.trim()||(k.name="Name is required"),D.trim()?/\S+@\S+\.\S+/.test(D)||(k.email="Please provide a valid email"):k.email="Email is required",y.trim()||(k.subject="Subject is required"),I.trim()||(k.message="Message details cannot be empty"),Object.keys(k).length>0){O(k);return}O({}),J(!0),setTimeout(()=>{J(!1),R(!0),s(1050,.12),w(""),M(""),N(""),z("")},1500)};return d.jsxs("div",{ref:h,className:`absolute inset-0 z-50 overflow-y-auto flex flex-col w-full scroll-smooth select-text ${t==="light"?"bg-[#f8fafc]":"bg-[#020308]"}`,children:[d.jsx(HA,{isWarping:o,theme:t}),d.jsx("div",{className:`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${U.gradientBg} opacity-80`}),d.jsxs("header",{className:`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${t==="light"?"border-slate-200/80 bg-white/70":"border-zinc-900/60 bg-black/45"} backdrop-blur-md transition-all`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-black tracking-widest uppercase font-sans ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"FARHAN KABIR"}),d.jsx("span",{className:"text-[8.5px] font-mono text-zinc-500 uppercase tracking-widest",children:"COGNITIVE SYSTEMS ARCHITECT"})]})]}),d.jsxs("nav",{className:"hidden lg:flex items-center gap-5 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400",children:[d.jsx("a",{href:"#about",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"CHRONOLOGY"}),d.jsx("a",{href:"#prof-timeline",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"PROF. TIMELINE"}),d.jsx("a",{href:"#projects",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#certifications",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"CERTIFICATES"}),d.jsx("a",{href:"#contact",onClick:()=>s(900,.02),className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsx("div",{className:"flex items-center gap-3",children:d.jsx("button",{onClick:l,disabled:o,className:`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${U.btnPrimary}`,children:o?"Warp Core Charging...":"Launch OS"})})]}),d.jsxs("section",{className:"relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10",children:[d.jsxs("div",{className:"relative mb-8 flex items-center justify-center animate-fade-in",children:[d.jsx("div",{className:"absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none"}),d.jsx("div",{className:"absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none"}),d.jsx("div",{className:"absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none"}),d.jsxs("div",{className:"relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00ffcc]",children:[d.jsx("img",{src:GA,alt:"Farhan Kabir portrait",className:"w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"})]})]}),d.jsxs("div",{className:"max-w-3xl space-y-4",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300",children:[d.jsx(p1,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"CLINICAL NLP & SAAS PLATFORMS"})]}),d.jsxs("h1",{className:"text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase select-text",children:[d.jsx("span",{className:t==="light"?"text-slate-800":"text-white",children:"I am "}),d.jsx("span",{className:`bg-clip-text text-transparent bg-gradient-to-r ${t==="light"?"from-indigo-650 to-sky-655":"from-indigo-400 via-sky-400 to-[#00ffcc]"}`,children:Wt.name})]}),d.jsx("h2",{className:"text-base sm:text-xl font-bold font-mono tracking-wider text-zinc-400 select-text",children:Wt.title}),d.jsxs("p",{className:"text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed select-text font-normal",children:[Wt.tagline," Fusing low-latency model evaluation pipelines with Linear-grade web experiences."]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md",children:[d.jsx("button",{onClick:l,className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${U.btnPrimary}`,children:"Activate Cosmic OS"}),d.jsxs("button",{onClick:()=>c("resume"),className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${U.btnSecondary}`,children:[d.jsx(Xh,{className:"w-4 h-4"}),d.jsx("span",{children:"Get Resume (CV)"})]})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3 mt-8 text-[9px] font-mono",children:[d.jsxs("button",{onClick:()=>c("brief"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[d.jsx(cv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"MISSION BRIEF (CONTACT)"})]}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"GitHub",children:d.jsx(uc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"LinkedIn",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Medium",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"X (Twitter)",children:d.jsx(Kf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Instagram",children:d.jsx(ff,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Gravatar",children:d.jsx(pf,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse",children:[d.jsx("span",{className:"text-[9px] font-mono text-zinc-600 tracking-widest uppercase",children:"SCROLL FOR DIAGNOSTICS"}),d.jsx("div",{className:"w-px h-6 bg-zinc-800"})]})]}),d.jsxs("section",{id:"about",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"01 // BIOGRAPHY MODULE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"KERNEL SPECS STABLE"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed",children:[d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${U.textPrimary}`,children:"System Bio:"}),d.jsx("p",{className:"select-text",children:Wt.about})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${U.textPrimary}`,children:"Core Mission Directive:"}),d.jsxs("p",{className:"select-text italic",children:['"',Wt.focus,'"']})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${U.textPrimary}`,children:"Active Research Focus:"}),d.jsxs("ul",{className:"list-disc pl-4 space-y-2 mt-1 select-text",children:[d.jsx("li",{children:"Evaluating token probability sequences to block prompt injection triggers before inference."}),d.jsx("li",{children:"Fusing Wav2Vec audio metrics with BERT semantic layers to capture speech emotional variance."}),d.jsx("li",{children:"Conducting validation diagnostics for psychiatric speech anomalies."})]})]})]}),d.jsx("div",{className:"lg:col-span-5 grid grid-cols-2 gap-4",children:[{label:"EXPERIENCE",value:"4+ Years",desc:"AI & Full-Stack Architectures"},{label:"NLP PAPERS",value:"4 Pubs",desc:"IEEE Journals & Conference Index"},{label:"DEPLOYED SAAS",value:"12+ Apps",desc:"High-performance codebases"},{label:"CERTIFICATES",value:"5+ Credentials",desc:"Deep Learning & GCP"}].map((A,k)=>d.jsxs("div",{onClick:()=>s(900,.02),className:`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${U.statCardGlow}`,children:[d.jsx("span",{className:"text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold",children:A.label}),d.jsxs("div",{className:"mt-3",children:[d.jsx("span",{className:`text-xl sm:text-2xl font-black block tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:A.value}),d.jsx("span",{className:"text-[9px] text-zinc-550 block mt-1 font-sans font-normal",children:A.desc})]})]},k))})]})]}),d.jsxs("section",{id:"skills",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"02 // SKILLOBSERVATION OBSERVATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"MATRIX FILTERS FULLY LOADED"})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]",children:["All","AI/ML","Frontend","Backend","Database","DevOps"].map(A=>d.jsx("button",{onClick:()=>{S(A),s(800,.03)},className:`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${p===A?U.activeTabBtn:U.tabBtn}`,children:A==="DevOps"?"DEVOPS & CLOUD":A.toUpperCase()},A))}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:ge.map(A=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono",children:[d.jsxs("div",{className:"flex justify-between items-center text-[10px] mb-2.5",children:[d.jsx("span",{className:`font-bold ${t==="light"?"text-slate-700":"text-slate-200"}`,children:A.name}),d.jsxs("span",{className:"text-zinc-550 font-semibold",children:[A.weight*20,"%"]})]}),d.jsx("div",{className:"w-full h-1 bg-zinc-950 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full bg-gradient-to-r ${U.skillBar} rounded-full`,style:{width:`${A.weight*20}%`}})})]},A.name))})]}),d.jsxs("section",{id:"timeline",className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03 // EXPERIENCE CHRONOLOGY"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DATA VALIDATED FOR SECURE HISTORIES"})]}),d.jsx("div",{className:"relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12",children:Wt.timeline.map((A,k)=>d.jsxs("div",{className:"relative pl-8 sm:pl-12 group select-text",children:[d.jsx("div",{className:"absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:border-[#00ffcc] shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_8px_rgba(0,255,204,0.8)] transition-all duration-300"}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[d.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${U.badgeStyle}`,children:A.year}),d.jsx("span",{className:"text-zinc-550 font-mono text-[9.5px]",children:A.company})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:A.title}),d.jsxs("p",{className:"text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed",children:[A.role," ",A.description]}),d.jsx("ul",{className:"mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400",children:A.achievements.map((de,ye)=>d.jsxs("li",{className:"flex items-start gap-2 leading-relaxed",children:[d.jsx(Gc,{className:`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-600":"text-[#00ffcc]"}`}),d.jsx("span",{children:de})]},ye))}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:A.technologies.map(de=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500",children:de},de))})]},k))})]}),d.jsxs("section",{id:"prof-timeline",className:"relative py-24 px-6 md:px-12 max-w-6xl w-full mx-auto space-y-12 z-10 scroll-mt-16",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03.5 // PROFESSIONAL TIMELINE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE WORK EXPERIENCES"})]}),d.jsxs("div",{ref:ce,className:"relative",children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{className:"absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:`scaleY(${G})`,transformOrigin:"top"}}),d.jsx("div",{className:"space-y-16 relative z-10",children:Wt.professionalTimeline.map((A,k)=>d.jsx(jA,{item:A,idx:k,theme:t},k))})]})]}),d.jsxs("section",{id:"projects",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04 // PORTFOLIO INNOVATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SANDBOX RUNTIMES SYNCHRONIZED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Wt.projects.map(A=>d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${U.badgeStyle}`,children:A.category}),d.jsx("span",{className:"text-[9px] text-zinc-550 font-semibold",children:A.timeline})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${t==="light"?"text-slate-800":"text-white"}`,children:A.title}),d.jsx("p",{className:"text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed",children:A.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono",children:A.metrics.map(k=>d.jsxs("div",{className:"p-1",children:[d.jsx("span",{className:`text-[9.5px] font-bold block ${t==="light"?"text-indigo-650":"text-[#00ffcc]"}`,children:k.value}),d.jsx("span",{className:"text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1",children:k.label})]},k.label))})]}),d.jsxs("div",{className:"space-y-4 pt-4 border-t border-zinc-900/60 select-none",children:[d.jsx("div",{className:"flex flex-wrap gap-1",children:A.techStack.map(k=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500",children:k},k))}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{c("projects")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"DEPLOY SIMULATOR SCREEN →"}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"View Source on GitHub",children:d.jsx(uc,{className:"w-3.5 h-3.5"})})]})]})]},A.id))})]}),d.jsxs("section",{id:"certifications",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"05 // CREDENTIAL VERIFICATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"ALL BADGES CRYPTOGRAPHICALLY SECURED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:le.map((A,k)=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3",children:[d.jsx("span",{children:A.issuer}),d.jsx("span",{className:"font-bold",children:A.date})]}),d.jsxs("h3",{className:`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${t==="light"?"text-slate-850":"text-slate-100"}`,children:[d.jsx(lv,{className:`w-4 h-4 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-650":"text-amber-400"}`}),d.jsx("span",{children:A.title})]})]}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50",children:A.skills.map(de=>d.jsx("span",{className:"text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500",children:de},de))})]},k))})]}),d.jsxs("section",{className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"06 // CLINICAL RECOMMENDATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE REFERRALS ACTIVE"})]}),d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl",children:[d.jsx(s1,{className:`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${t==="light"?"text-indigo-600":"text-indigo-500"}`}),d.jsxs("div",{className:"relative min-h-[140px] flex flex-col justify-between",children:[d.jsxs("p",{className:`text-xs sm:text-sm italic leading-relaxed ${t==="light"?"text-slate-700":"text-slate-300"}`,children:['"',B[b].text,'"']}),d.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${U.badgeStyle}`,children:B[b].initials}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-bold ${t==="light"?"text-slate-800":"text-white"}`,children:B[b].author}),d.jsx("span",{className:"text-[9px] text-zinc-500 font-mono mt-0.5",children:B[b].role})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsx("button",{onClick:()=>{x(A=>(A-1+B.length)%B.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Sy,{className:"w-4 h-4"})}),d.jsx("button",{onClick:()=>{x(A=>(A+1)%B.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Ey,{className:"w-4 h-4"})})]})]})]})]})]}),d.jsxs("section",{id:"contact",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"07 // SECURE COMMUNICATION CHANNEL"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SSL LINK ENCRYPTED"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-5 space-y-6 font-mono text-[10.5px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5",children:"TRANSMISSION DIRECTORIES"}),d.jsx("p",{className:"text-xs font-sans text-zinc-400 leading-relaxed",children:"Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels."})]}),d.jsxs("div",{className:"space-y-3.5 border-t border-zinc-900/80 pt-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400",children:d.jsx(Xy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"ENVELOPE ADDRESS"}),d.jsx("a",{href:"mailto:farhankabir133@gmail.com",onClick:()=>s(900,.02),className:`text-[11px] font-bold ${t==="light"?"text-slate-850":"text-slate-200"} hover:underline`,children:"farhankabir133@gmail.com"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400",children:d.jsx(qy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"COORDINATE MAPPING"}),d.jsx("span",{className:`text-[11px] font-bold ${t==="light"?"text-slate-800":"text-slate-250"}`,children:"Rajshahi, Bangladesh (UTC+6)"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none",children:[d.jsxs("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(uc,{className:"w-4 h-4 text-indigo-400"}),d.jsx("span",{children:"GITHUB"})]}),d.jsxs("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(hf,{className:"w-4 h-4 text-sky-400"}),d.jsx("span",{children:"LINKEDIN"})]}),d.jsxs("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Qf,{className:"w-4 h-4 text-emerald-400"}),d.jsx("span",{children:"MEDIUM"})]}),d.jsxs("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Kf,{className:"w-4 h-4 text-white"}),d.jsx("span",{children:"X / TWITTER"})]}),d.jsxs("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(ff,{className:"w-4 h-4 text-pink-400"}),d.jsx("span",{children:"INSTAGRAM"})]}),d.jsxs("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(pf,{className:"w-4 h-4 text-amber-400"}),d.jsx("span",{children:"GRAVATAR"})]})]})]}),d.jsx("div",{className:"lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative",children:H?d.jsxs("div",{className:"text-center py-10 space-y-4 animate-scale-up",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]",children:d.jsx(Gc,{className:"w-6 h-6 animate-pulse"})}),d.jsxs("div",{className:"space-y-1.5 font-mono",children:[d.jsx("span",{className:"text-[10px] text-emerald-400 font-bold uppercase tracking-wider",children:"TRANSMISSION EN ROUTE"}),d.jsx("h3",{className:`text-base font-extrabold ${t==="light"?"text-slate-800":"text-white"}`,children:"Matrix Sync Completed!"}),d.jsx("p",{className:"text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal",children:"Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now."})]}),d.jsx("button",{onClick:()=>{R(!1),s(800,.02)},className:"bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors active:scale-95",children:"Establish New Node"})]}):d.jsxs("form",{onSubmit:ae,className:"space-y-4 font-mono text-[10px]",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"COGNITIVE NAME"}),d.jsx("input",{type:"text",value:E,onChange:A=>w(A.target.value),placeholder:"e.g. Jenkins S.",className:`w-full bg-black/60 border ${V.name?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),V.name&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:V.name})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION EMAIL"}),d.jsx("input",{type:"email",value:D,onChange:A=>M(A.target.value),placeholder:"e.g. envelope@domain.com",className:`w-full bg-black/60 border ${V.email?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),V.email&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:V.email})]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"INQUIRY SUBJECT"}),d.jsx("input",{type:"text",value:y,onChange:A=>N(A.target.value),placeholder:"e.g. Clinical NLP Model Fine-Tuning",className:`w-full bg-black/60 border ${V.subject?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),V.subject&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:V.subject})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION PAYLOAD (MESSAGE)"}),d.jsx("textarea",{rows:4,value:I,onChange:A=>z(A.target.value),placeholder:"Explain Objectives, Budgets, and Timelines...",className:`w-full bg-black/60 border ${V.message?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none`}),V.message&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:V.message})]}),d.jsx("button",{type:"submit",disabled:F,className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 active:scale-98 cursor-pointer ${U.btnPrimary}`,children:F?d.jsxs(d.Fragment,{children:[d.jsx(c1,{className:"w-4 h-4 animate-spin"}),d.jsx("span",{children:"Transmitting packets..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(uv,{className:"w-4 h-4"}),d.jsx("span",{children:"Transmit Message"})]})})]})})]})]}),d.jsx("footer",{className:`mt-auto border-t ${t==="light"?"border-slate-200/80 bg-slate-100/50":"border-zinc-900/60 bg-black/45"} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`,children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"}),d.jsxs("span",{className:`text-[10px] font-mono tracking-widest uppercase ${t==="light"?"text-slate-600":"text-zinc-450"}`,children:["© ",new Date().getFullYear()," FARHAN KABIR. ALL RIGHTS SECURED."]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-550 font-bold",children:[d.jsx("a",{href:"#about",onClick:()=>s(800,.02),className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:()=>s(800,.02),className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:()=>s(800,.02),className:"hover:text-white transition-colors",children:"TIMELINE"}),d.jsx("a",{href:"#projects",onClick:()=>s(800,.02),className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#contact",onClick:()=>s(800,.02),className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"GitHub",children:d.jsx(uc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"LinkedIn",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Medium",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"X (Twitter)",children:d.jsx(Kf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Instagram",children:d.jsx(ff,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Gravatar",children:d.jsx(pf,{className:"w-3.5 h-3.5"})})]})]})}),m&&d.jsx("button",{onClick:fe,className:`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 animate-scale-up cursor-pointer hover:-translate-y-1 ${t==="light"?"bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50":"bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35"}`,title:"Back to Top",children:d.jsx(hy,{className:"w-4 h-4"})})]})}function XA({theme:o,triggerSound:t}){const i=Ue.useRef(null),s=Ue.useRef(null),[l,c]=Ue.useState(!1),[h,m]=Ue.useState("#6366f1"),[g,p]=Ue.useState(4),[S,b]=Ue.useState(!1),[x,E]=Ue.useState("theme"),[w,D]=Ue.useState([]),[M,y]=Ue.useState([]),[N,I]=Ue.useState([]),[z,V]=Ue.useState({width:600,height:400}),R=x==="theme"?(()=>{switch(o){case"cyberpunk":return[{name:"Neon Pink",value:"#ff007f"},{name:"Matrix Green",value:"#39ff14"},{name:"Neon Blue",value:"#00ffff"},{name:"Cyber Purple",value:"#9d00ff"},{name:"Hot Orange",value:"#ff5e00"},{name:"Pure White",value:"#ffffff"}];case"terminal":return[{name:"Classic Green",value:"#33ff33"},{name:"Amber Glow",value:"#ffb000"},{name:"Terminal White",value:"#e5e5e5"},{name:"Phosphor Green",value:"#00ff66"},{name:"Dim Gray",value:"#7f7f7f"}];case"ai":return[{name:"Deep Cosmic",value:"#4f46e5"},{name:"Quantum Cyan",value:"#06b6d4"},{name:"Neural Violet",value:"#d946ef"},{name:"Supernova",value:"#f43f5e"},{name:"Logic White",value:"#fafafa"}];case"light":return[{name:"Royal Blue",value:"#2563eb"},{name:"Rose Red",value:"#dc2626"},{name:"Forest Green",value:"#16a34a"},{name:"Vibrant Orange",value:"#ea580c"},{name:"Slate Gray",value:"#475569"},{name:"Deep Charcoal",value:"#0f172a"}];default:return[{name:"Indigo Aura",value:"#818cf8"},{name:"Nebula Pink",value:"#f472b6"},{name:"Aurora Teal",value:"#2dd4bf"},{name:"Solar Yellow",value:"#fbbf24"},{name:"Coral Rose",value:"#fb7185"},{name:"Pure White",value:"#ffffff"}]}})():[{name:"Pure Black",value:"#000000"},{name:"Crimson Red",value:"#ef4444"},{name:"Cobalt Blue",value:"#3b82f6"},{name:"Emerald Green",value:"#22c55e"},{name:"Amber Yellow",value:"#eab308"},{name:"Pure White",value:"#ffffff"}];Ue.useEffect(()=>{m(R[0].value),b(!1)},[o,x]),Ue.useEffect(()=>{const ae=i.current;if(!ae)return;const A=new ResizeObserver(k=>{if(!k||k.length===0)return;const{width:de,height:ye}=k[0].contentRect,we=Math.floor(de||600),te=Math.floor(ye||400);V({width:we,height:te})});return A.observe(ae),()=>{A.disconnect()}},[]),Ue.useEffect(()=>{const ae=s.current;ae&&(ae.width=z.width,ae.height=z.height,F())},[z,w,N]);const F=()=>{const ae=s.current;if(!ae)return;const A=ae.getContext("2d");if(!A)return;A.clearRect(0,0,ae.width,ae.height),A.lineCap="round",A.lineJoin="round";const k=de=>{if(!(de.points.length<1))if(A.beginPath(),de.isEraser?A.globalCompositeOperation="destination-out":(A.globalCompositeOperation="source-over",A.strokeStyle=de.color),A.lineWidth=de.width,de.points.length===1){const ye=de.points[0];A.arc(ye.x,ye.y,de.width/2,0,2*Math.PI),A.fillStyle=de.isEraser?"rgba(0,0,0,1)":de.color,A.fill()}else{const ye=de.points[0];A.moveTo(ye.x,ye.y);for(let we=1;we<de.points.length;we++){const te=de.points[we];A.lineTo(te.x,te.y)}A.stroke()}};w.forEach(de=>{k(de)}),N.length>0&&k({points:N,color:h,width:g,isEraser:S}),A.globalCompositeOperation="source-over"},J=ae=>{const A=s.current;if(!A)return null;const k=A.getBoundingClientRect();let de=0,ye=0;if("touches"in ae){if(ae.touches.length===0)return null;de=ae.touches[0].clientX,ye=ae.touches[0].clientY}else de=ae.clientX,ye=ae.clientY;return{x:(de-k.left)/k.width*A.width,y:(ye-k.top)/k.height*A.height}},G=ae=>{ae.preventDefault();const A=J(ae);A&&(c(!0),I([A]),y([]),t&&t(700,.015))},$=ae=>{if(!l)return;ae.preventDefault();const A=J(ae);A&&I(k=>[...k,A])},ce=()=>{if(l){if(c(!1),N.length>0){const ae={points:N,color:h,width:g,isEraser:S};D(A=>[...A,ae])}I([]),t&&t(850,.02)}},fe=()=>{if(w.length===0)return;const ae=[...w],A=ae.pop();A&&(y(k=>[...k,A]),D(ae),t&&t(500,.03))},q=()=>{if(M.length===0)return;const ae=[...M],A=ae.pop();A&&(D(k=>[...k,A]),y(ae),t&&t(900,.03))},U=()=>{w.length!==0&&confirm("Clear the entire ideation sketch pad?")&&(D([]),y([]),I([]),t&&t(350,.07))},B=()=>{const ae=s.current;if(!ae)return;const A=document.createElement("canvas");A.width=ae.width,A.height=ae.height;const k=A.getContext("2d");if(!k)return;o==="light"?k.fillStyle="#f8fafc":o==="cyberpunk"?k.fillStyle="#010206":o==="terminal"?k.fillStyle="#050705":k.fillStyle="#090a12",k.fillRect(0,0,A.width,A.height),k.strokeStyle=o==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)",k.lineWidth=1;const de=30;for(let te=0;te<A.width;te+=de)k.beginPath(),k.moveTo(te,0),k.lineTo(te,A.height),k.stroke();for(let te=0;te<A.height;te+=de)k.beginPath(),k.moveTo(0,te),k.lineTo(A.width,te),k.stroke();k.drawImage(ae,0,0),k.font="10px monospace",k.fillStyle=o==="light"?"rgba(15, 23, 42, 0.4)":"rgba(255, 255, 255, 0.3)",k.textAlign="right",k.fillText("FARHAN KABIR CORE OS v2.4 // VISUAL IDEATION UNIT",A.width-20,A.height-20);const ye=A.toDataURL("image/png"),we=document.createElement("a");we.href=ye,we.download=`FarhanOS_Whiteboard_${Date.now()}.png`,document.body.appendChild(we),we.click(),document.body.removeChild(we),t&&t(1100,.08)},le=o==="cyberpunk"?"border-[#ff007f]/40 text-pink-400 font-mono":o==="terminal"?"border-[#33ff33]/40 text-[#33ff33] font-mono":o==="ai"?"border-indigo-500/40 text-indigo-400 font-sans":o==="light"?"border-slate-300 text-slate-800 font-sans":"border-zinc-800 text-slate-200 font-sans",ge=ae=>{m(ae),b(!1),t&&t(900,.015)};return d.jsxs("div",{className:"flex flex-col h-full gap-3 select-none",children:[d.jsxs("div",{className:`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-3 bg-black/35 backdrop-blur-md ${le}`,children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:fe,disabled:w.length===0,className:`p-1.5 rounded transition-all duration-200 ${w.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Undo stroke (Ctrl+Z)",children:d.jsx(b1,{className:"w-4 h-4"})}),d.jsx("button",{onClick:q,disabled:M.length===0,className:`p-1.5 rounded transition-all duration-200 ${M.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Redo stroke (Ctrl+Y)",children:d.jsx(o1,{className:"w-4 h-4"})}),d.jsx("span",{className:"h-4 w-px bg-zinc-850 mx-1"}),d.jsxs("button",{onClick:()=>{b(!1),t&&t(800,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${S?"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200":"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300"}`,title:"Paint Brush Mode",children:[d.jsx($g,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Paint"})]}),d.jsxs("button",{onClick:()=>{b(!0),t&&t(600,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${S?"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300":"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200"}`,title:"Eraser tool",children:[d.jsx(Uy,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Eraser"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 p-1 rounded-md border border-zinc-900/80 text-[9px] font-mono",children:[d.jsx("button",{onClick:()=>{E("theme"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="theme"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to Theme-specific colors",children:"OS Aura"}),d.jsx("button",{onClick:()=>{E("classic"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="classic"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to classic drawing colors (Black, Red, Blue, Green, etc.)",children:"Classic"})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[R.map(ae=>{const A=h===ae.value&&!S;return d.jsxs("button",{onClick:()=>ge(ae.value),className:"relative group w-4 h-4 rounded-full transition duration-300 border border-black/50",style:{backgroundColor:ae.value},title:`${ae.name}`,children:[A&&d.jsx("span",{className:"absolute inset-0 flex items-center justify-center scale-75 text-white filter drop-shadow",children:d.jsx(Gc,{className:"w-3.5 h-3.5 text-white stroke-[3.5px]",style:{mixBlendMode:"difference"}})}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:ae.name})]},ae.value)}),d.jsx("span",{className:"h-3 w-px bg-zinc-800 mx-1"}),d.jsxs("div",{className:"relative group w-4 h-4 rounded-full overflow-hidden border border-zinc-700/50 flex items-center justify-center bg-gradient-to-tr from-rose-500 via-emerald-500 to-sky-500 shadow-sm",title:"Choose custom color spectrum",children:[d.jsx("input",{type:"color",value:h,onChange:ae=>ge(ae.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),d.jsx("span",{className:"text-[10px] font-black text-white pointer-events-none filter drop-shadow-sm",children:"+"}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:"Custom Color"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono select-none uppercase tracking-tight hidden xs:inline",children:["Width: ",g,"px"]}),d.jsx("input",{type:"range",min:"1",max:"40",value:g,onChange:ae=>{const A=parseInt(ae.target.value,10);p(A),t&&t(750+A*3,.005)},className:"w-16 sm:w-20 md:w-24 accent-indigo-500 bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer",title:"Slide to adjust brush thickness"})]}),d.jsx("div",{className:"flex items-center gap-1",children:[2,4,8,16].map(ae=>d.jsx("button",{onClick:()=>{p(ae),t&&t(750,.01)},className:`w-5 h-5 rounded flex items-center justify-center transition border ${g===ae?"bg-white/10 border-indigo-500/50 text-indigo-400":"border-transparent hover:bg-white/5 text-zinc-400"}`,title:`Brush size ${ae}px`,children:d.jsx("span",{className:"relative flex items-center justify-center",children:d.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.max(2,ae/1.5)}px`,height:`${Math.max(2,ae/1.5)}px`}})})},ae))}),d.jsx("span",{className:"h-4 w-px bg-zinc-850"}),d.jsx("button",{onClick:U,className:"p-1.5 rounded transition-all duration-200 hover:bg-rose-500/20 hover:scale-110 active:scale-90 text-rose-400 hover:text-rose-300",title:"Clear canvas",children:d.jsx(sx,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:B,className:"p-1.5 rounded transition-all duration-200 hover:bg-emerald-500/20 hover:scale-110 active:scale-90 text-emerald-400 hover:text-emerald-300",title:"Download visual sketch (.png)",children:d.jsx(Xh,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("div",{ref:i,className:`whiteboard-canvas-container flex-1 min-h-[280px] max-h-[50vh] rounded-lg border-2 border-dashed flex relative overflow-hidden bg-black/45 shadow-inner transition-colors duration-350 cursor-crosshair ${o==="cyberpunk"?"border-pink-500/25 shadow-pink-500/5 bg-[#000]":o==="terminal"?"border-[#33ff33]/25 shadow-emerald-500/5":"border-zinc-800/80 shadow-sky-500/5"}`,children:[d.jsxs("button",{onClick:U,disabled:w.length===0,className:`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded border shadow-lg transition-all duration-200 select-none ${w.length===0?"opacity-40 cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/40":"hover:scale-105 active:scale-95 "+(o==="cyberpunk"?"bg-black/90 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border-pink-500/30 hover:border-pink-500/50":o==="terminal"?"bg-black/90 hover:bg-[#33ff33]/20 text-[#33ff33] border-[#33ff33]/30 hover:border-[#33ff33]/50 font-mono":o==="light"?"bg-white/90 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300":"bg-zinc-950/90 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border-indigo-500/25 hover:border-indigo-500/45")}`,title:"Clear canvas to a blank state",children:[d.jsx(sx,{className:"w-3 h-3"}),d.jsx("span",{children:"Clear Board"})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen overflow-hidden",children:d.jsx("div",{className:"w-full h-full",style:{backgroundImage:"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",backgroundSize:"24px 24px",color:o==="terminal"?"#33ff33":o==="cyberpunk"?"#ff007f":"#6366f1"}})}),w.length===0&&!l&&d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-2",children:d.jsx($g,{className:"w-6 h-6 text-indigo-400/55 animate-pulse"})}),d.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-zinc-550",children:"Visual Ideation Pad"}),d.jsx("span",{className:"text-[9px] text-zinc-600 mt-1",children:"Press and drag anywhere on this sandbox grid canvas to sketch plans"})]}),d.jsx("canvas",{ref:s,onMouseDown:G,onMouseMove:$,onMouseUp:ce,onMouseLeave:ce,onTouchStart:G,onTouchMove:$,onTouchEnd:ce,className:"absolute inset-0 w-full h-full select-none touch-none bg-transparent"}),d.jsxs("div",{className:"absolute bottom-2 left-2 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-900/50 text-[8px] font-mono text-zinc-500",children:[d.jsxs("span",{children:["COORDS: ",z.width,"x",z.height]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:["STROKESTACK: ",w.length]})]})]}),d.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[d.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-zinc-500 font-mono",children:[d.jsx(Xo,{className:"w-3 h-3 text-indigo-400"}),d.jsx("span",{children:"IDEATION UNIT DEPLOYED SECURELY WITHIN THE OPERATING SYSTEM ENVIRONMENT"})]}),d.jsx("div",{className:"text-[9px] font-mono text-zinc-500",children:"v2.4.6_canvas"})]})]})}function WA(o,t){if(typeof window>"u"||!window.speechSynthesis)return t&&t(),null;window.speechSynthesis.cancel();const i=o.replace(/[*_#`~[\]]/g,"").replace(/➔/g," to ").replace(/F1/gi,"F-1").replace(/LLMs?/gi,"Large Language Models").replace(/NLP/gi,"Natural Language Processing").trim(),s=new SpeechSynthesisUtterance(i),l=window.speechSynthesis.getVoices(),c=l.find(h=>h.lang.startsWith("en")&&(h.name.includes("Google")||h.name.includes("Natural")||h.name.includes("Samantha")||h.name.includes("Zira")))||l.find(h=>h.lang.startsWith("en"))||l[0];return c&&(s.voice=c),s.pitch=1.05,s.rate=.98,s.onend=()=>{t&&t()},s.onerror=()=>{t&&t()},window.speechSynthesis.speak(s),{stop:()=>{window.speechSynthesis.cancel(),t&&t()}}}function qA(o,t){const i=o.toLowerCase().trim();return i.includes("depression")||i.includes("mental")||i.includes("health")||i.includes("distress")||i.includes("clinical")||i.includes("wellness")?`My research in clinical NLP has led to two main publications: 

1. 'Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques' (IEEE ICCIT 2023) - I fine-tuned a RoBERTa-Clinical classifier on 120,000 distinct social posts, mapping negative pronoun density and vocabulary shifts. The model achieved a peak F1-score of 0.914.
2. 'Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques' (IEEE ECCE 2025) - I compared custom BERT and RoBERTa models to classify emotional states and clinical distress levels, securing an F1-score of 0.908.

These models offer non-invasive cognitive diagnostic support for healthcare assistants.`:i.includes("attack")||i.includes("adversarial")||i.includes("prompt")||i.includes("jailbreak")||i.includes("inject")||i.includes("perplexity")||i.includes("break the model")?"In my 2025 IEEE ICCIT paper, 'Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs', we engineered a security framework. Before a prompt propagates to the core LLM, we measure token perplexity. Causal models typically predict normal language with low perplexity, while adversarial prompt injections display sharp, anomalous perplexity shifts. By setting threshold boundaries, our system blocks attacks in real-time with 94.2% accuracy and only 4.5ms latency overhead, preserving LLM safety alignments.":i.includes("interview")||i.includes("posture")||i.includes("computer vision")||i.includes("cv")||i.includes("facial")||i.includes("late-fusion")?"My 2025 IEEE ICCIT paper, 'AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision', presents a multimodal evaluation pipeline. We fuse speech transcripts (via Wav2Vec 2.0) with physical candidate posture and facial keypoint vectors (via MediaPipe). A BERT text classifier evaluates response semantics. Fusing these bimodal streams in a late-fusion model, we reached 91.6% assessment accuracy, maintaining an agreement rate of 0.87 (Cohen's Kappa) with human HR professionals.":i.includes("typerush")||i.includes("typing")||i.includes("game")?"TypeRush is an atmospheric, typing survival game built with React 19, TailwindCSS, the Web Audio API, Express, the Gemini API, and Firebase. It renders moving kinetic letters as physics-based threats, prompting the player to type them before they collide with a spaceship shield. I built a zero-re-render character buffer grid in React running at 60fps, integrated custom Web Audio oscillators for real-time laser synthesis, and used Gemini for adaptive visual difficulty scaling.":i.includes("ink home")||i.includes("medium")||i.includes("3d")||i.includes("carousel")?"The Ink Home is a 3D WebGL publication portal and dynamic metadata indexer. It fetches Medium RSS feeds, bypasses Cloudflare security layers using a 4-tier backend HTTP proxy list with rotating User-Agent headers, and renders articles in an interactive Three.js 3D carousel. Built with React 18, Vite, Three.js, Framer Motion, and Node/SQLite, it targets 60fps animations.":i.includes("safeside")||i.includes("football")||i.includes("poisson")||i.includes("prediction")?"SafeSide Predictor is a tactical football analytics dashboard and simulation engine. It models match outcomes using a custom Poisson probability risk distribution model (F1: 0.88), storing results in Supabase. The system utilizes Gemini AI to write tactical match pre-views and automates result checks via Express cron jobs.":i.includes("skill")||i.includes("tech")||i.includes("stack")||i.includes("language")||i.includes("framework")||i.includes("database")||i.includes("tools")?`Here is my core engineering stack:

• AI / ML / NLP: PyTorch, Hugging Face (BERT & RoBERTa), Prompt Engineering, Wav2Vec 2.0, FastAPI
• Frontend: React, Next.js, Tailwind CSS v4, Three.js (WebGL), Framer Motion, D3.js
• Backend / Databases: Node.js (Express), Go (Golang), Redis Caching, PostgreSQL, SQLite
• DevOps / Infra: Docker, Git, Linux, Google Cloud Platform (GCP), Supabase, Firebase`:i.includes("contact")||i.includes("email")||i.includes("hire")||i.includes("job")||i.includes("resume")||i.includes("github")||i.includes("linkedin")?"You can contact me directly via email at farhankabir236@gmail.com. My GitHub profile is @farhankabir133 (https://github.com/farhankabir133) where you can audit the code of projects like FarhanOS, TypeRush, and The Ink Home. I am highly interested in roles related to clinical NLP, Agentic workflows, and Full-Stack AI engineering.":`Greetings! I am FarhanTwin, a neural clone representing Farhan Kabir. Since this page is currently running on a static hosting environment, the server-side Gemini routes are disabled. However, I have full local access to Farhan's portfolio logs.

You can ask me about:
• My research papers (depression classification F1: 0.914, adversarial prompt defense models)
• My projects (TypeRush typing game, The Ink Home 3D portal, SafeSide football modeling)
• My technical stack or how to get in contact with me.`}function YA(o){const t=o.projectType.includes("NLP")||o.goals.toLowerCase().includes("text")||o.goals.toLowerCase().includes("linguistic")||o.goals.toLowerCase().includes("language"),i=t?"RoBERTa-Clinical or custom fine-tuned BERT":"Gemini 3.5 Flash / distilled Llama 3B",s=t?"<5ms inference threshold":"<150ms roundtrip HMR";return`[SYSTEM DIAGNOSTICS READOUT // OFFLINE FEASIBILITY SCAN]
-----------------------------------------------------------------
INITIATIVE PROFILE : Category: ${o.projectType} // Boundary: ${o.budget} // Timeline: ${o.timeline}
SEMANTIC OBJECTIVE : "${o.goals.length>80?o.goals.substring(0,80)+"...":o.goals}"
OPERATIVE DIRECTIVES: ${o.comments?o.comments:"Standard secure deployment"}

TECHNICAL VIABILITY SUMMARY:
• Feasibility: High. The objectives map directly to Farhan's micro-service templates.
• Target Model Candidate: ${i}
• Proposed Stack: React client + Go/Node.js API pipeline + Redis quantization caching.
• Optimization Goal: ONNX runtime deployment yielding a ${s} overhead.
• Security Boundary: Local token perplexity classification shields will be activated to protect against prompt injection vectors (94.2% accuracy threshold).`}function ZA(){const[o,t]=Ue.useState("landing"),[i,s]=Ue.useState(!1),[l,c]=Ue.useState(""),[h,m]=Ue.useState(""),[g,p]=Ue.useState(!1),[S,b]=Ue.useState(null),[x,E]=Ue.useState(!1),[w,D]=Ue.useState(0),[M,y]=Ue.useState([]),[N,I]=Ue.useState("dark"),[z,V]=Ue.useState(!0),[O,H]=Ue.useState(!0),[R,F]=Ue.useState(""),[J,G]=Ue.useState(["twin"]),[$,ce]=Ue.useState([]),[fe,q]=Ue.useState("twin"),[U,B]=Ue.useState({twin:{x:50,y:70,isMaximized:!1},projects:{x:120,y:140,isMaximized:!1},research:{x:180,y:90,isMaximized:!1},github:{x:220,y:160,isMaximized:!1},writing:{x:80,y:220,isMaximized:!1},garden:{x:260,y:40,isMaximized:!1},resume:{x:300,y:200,isMaximized:!1},timeline:{x:140,y:300,isMaximized:!1},skills:{x:400,y:80,isMaximized:!1},brief:{x:350,y:150,isMaximized:!1},builds:{x:200,y:350,isMaximized:!1},whiteboard:{x:240,y:110,isMaximized:!1},profTimeline:{x:160,y:240,isMaximized:!1}}),[le,ge]=Ue.useState(0),[ae,A]=Ue.useState(12);Ue.useEffect(()=>{const v=setInterval(()=>{A(Math.floor(Math.random()*10)+7)},2500);return()=>clearInterval(v)},[]);const[k,de]=Ue.useState(typeof window<"u"?window.innerWidth:1024);Ue.useEffect(()=>{const v=()=>{de(P=>P!==window.innerWidth?window.innerWidth:P)};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const ye=()=>{const v=["dark","cyberpunk","ai","terminal","light"],P=(v.indexOf(N)+1)%v.length;I(v[P]),We(750,.03)},we=v=>{t("os"),E(!0),J.includes(v)||G([...J,v]),q(v),We(900,.05)},[te,Ee]=Ue.useState(Wt.projects[0]),[Se,He]=Ue.useState(Wt.papers[0]),[Qe,Ke]=Ue.useState(Wt.articles[0]),[ht,at]=Ue.useState(Wt.timeline[0]),[tt,Mt]=Ue.useState("all"),[ut,tn]=Ue.useState("recruiter"),[it,_t]=Ue.useState(!1),[W,st]=Ue.useState(""),[et,yt]=Ue.useState(""),[De,Zt]=Ue.useState([{role:"assistant",content:"Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps."}]),[L,T]=Ue.useState(!1),[ie,_e]=Ue.useState(null),[Te,ze]=Ue.useState(null),[Ce,pe]=Ue.useState({projectType:"AI Engineering",budget:"$5,000 - $10,000",timeline:"1-3 Months",goals:"",comments:""}),[me,Fe]=Ue.useState(null),[Be,Pe]=Ue.useState(!1),[Oe,rt]=Ue.useState(!1),[ot,mt]=Ue.useState(0),[Y,Ne]=Ue.useState(""),[xe,Ge]=Ue.useState(!1),[Le,Ae]=Ue.useState(null),[qe,lt]=Ue.useState(null),We=(v=800,P=.03)=>{z&&ox(v,P)};Ue.useEffect(()=>{const v=()=>{F(new Date().toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};v();const P=setInterval(v,1e3);return()=>clearInterval(P)},[]),Ue.useEffect(()=>{if(!x){const v=["INIT: Booting FarhanOS Kernel v2.4.6...","SYS: Loading digital neural parameters...","SYS: Grounding publications corpus index...","NETWORK: Establishing proxy connection secure rails...","AI: Initializing Gemini bimodal model instances...","GRAPH: Parsing topological clinical coordinates...","SYS: Systems compiled. Ready for operational execution."];let P=0;const X=setInterval(()=>{D(K=>{if(K>=100)return clearInterval(X),setTimeout(()=>{E(!0),We(1e3,.15)},600),100;const ee=Math.floor(Math.random()*15)+5,Ie=Math.min(K+ee,100);return Ie>P*15&&P<v.length&&(y(je=>[...je,v[P]]),P++,We(600+P*50,.02)),Ie})},120);return()=>clearInterval(X)}},[x]);const Lt=()=>{if(i)return;We(1200,.4),s(!0);let v=0;const P=setInterval(()=>{v<7?(We(150+v*200,.05),v++):clearInterval(P)},100);setTimeout(()=>{t("os"),D(0),y([]),E(!1),s(!1)},1800)};Ue.useEffect(()=>{const v=P=>{(P.metaKey||P.ctrlKey)&&P.key==="k"&&(P.preventDefault(),_t(X=>!X),We(900,.04)),P.key==="Escape"&&_t(!1)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[z]);const Nn=Ue.useRef(null),Dn=Ue.useRef({x:0,y:0}),pi=Ue.useRef({x:0,y:0}),ms=(v,P)=>{var ee,Ie,je;if((ee=U[v])!=null&&ee.isMaximized)return;q(v);const X=((Ie=U[v])==null?void 0:Ie.x)||0,K=((je=U[v])==null?void 0:je.y)||0;Nn.current=v,Dn.current={x:P.clientX-X,y:P.clientY-K},pi.current={x:X,y:K},lt(v),We(500,.01)},za=v=>{const P=Nn.current;if(P){const X=Math.max(0,v.clientX-Dn.current.x),K=Math.max(0,v.clientY-Dn.current.y);pi.current={x:X,y:K};const ee=document.getElementById(`window-${P}`);ee&&(ee.style.left=`${X}px`,ee.style.top=`${K}px`)}},Oa=()=>{const v=Nn.current;if(v){const P=pi.current.x,X=pi.current.y;B(K=>({...K,[v]:{...K[v],x:P,y:X}})),Nn.current=null,lt(null)}};Ue.useEffect(()=>(qe&&(window.addEventListener("mousemove",za),window.addEventListener("mouseup",Oa)),()=>{window.removeEventListener("mousemove",za),window.removeEventListener("mouseup",Oa)}),[qe]);const kt=v=>{We(700,.05),J.includes(v)||G(P=>[...P,v]),ce(P=>P.filter(X=>X!==v)),q(v)},ln=v=>{We(400,.06),G(P=>P.filter(X=>X!==v))},mn=v=>{We(450,.04),$.includes(v)||ce(X=>[...X,v]);const P=J.filter(X=>X!==v&&!$.includes(X));P.length>0&&q(P[P.length-1])},Ci=v=>{We(800,.04),B(P=>{var X;return{...P,[v]:{...P[v],isMaximized:!((X=P[v])!=null&&X.isMaximized)}}})},Gn=async(v,P=null,X="narrate")=>{if(O)try{Te&&(Te.stop(),ze(null)),_e(P);const ee=await(await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:v,type:X})})).json();if(ee.audio){const Ie=await w1(ee.audio);ze(Ie);const je=ee.audio.length*.75/24e3;setTimeout(()=>{_e(null)},je*1e3)}}catch(K){console.error("Narrator service unreachable, falling back to client voice:",K);try{const ee=WA(v,()=>{_e(null)});ee?ze(ee):_e(null)}catch(ee){console.error("Client speech synthesis failed:",ee),_e(null)}}},Vi=()=>{Te&&(Te.stop(),ze(null)),_e(null)},sa=async()=>{if(!et.trim())return;const v=et.trim();yt(""),Zt(P=>[...P,{role:"user",content:v}]),T(!0),We(1100,.03);try{const P=De.map(ee=>({role:ee.role==="user"?"user":"assistant",content:ee.content})),K=await(await fetch("/api/ask-twin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:v,history:P})})).json();if(K.reply)Zt(ee=>[...ee,{role:"assistant",content:K.reply}]),T(!1),O&&Gn(K.reply,De.length+1);else throw new Error(K.error||"General twin system fault.")}catch(P){console.warn("Backend twin service failed, using local fallback:",P),De.map(K=>({role:K.role==="user"?"user":"assistant",content:K.content}));const X=qA(v);Zt(K=>[...K,{role:"assistant",content:X}]),T(!1),O&&Gn(X,De.length+1)}},gs=async()=>{if(Ce.goals.trim()){Pe(!0),We(950,.05);try{const P=await(await fetch("/api/summarize-brief",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ce)})).json();P.summary&&Fe(P.summary)}catch(v){console.warn("Backend brief summarizer failed, using local fallback:",v);const P=YA(Ce);Fe(P)}finally{Pe(!1)}}},Ni=async()=>{We(1200,.1),rt(!0),Ge(!0),mt(1);const v=[{id:"twin",title:"Neural Core Clone",text:"This is the Ask Farhan AI Clone, trained on Farhan's complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles."},{id:"projects",title:"Project Galaxy Command",text:"Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications."},{id:"research",title:"Linguistic Research Laboratory",text:"Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules."},{id:"skills",title:"Skill Observational Map",text:"Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures."},{id:"brief",title:"Mission Collaboration Brief",text:"Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."}];await(async X=>{const K=v[X-1];if(!K){rt(!1),mt(0);return}mt(X),Ne(K.text),kt(K.id),Ge(!0),O&&await Gn(K.text,null,"tour"),Ge(!1)})(1)},xs=()=>{if(ot<5){const v=ot+1;mt(v),We(800,.04);const P=["Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.","Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.","Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.","Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."];kt(["projects","research","skills","brief"][v-1]),Ne(P[v-2]),O&&Gn(P[v-2],null,"tour")}else rt(!1),mt(0),Vi(),We(1300,.05)},Xi=Wt.skills.filter(v=>tt==="all"||tt==="AI/ML"&&v.category==="AI/ML"||tt==="Frontend"&&v.category==="Frontend"||tt==="Backend"&&v.category==="Backend"||tt==="Research"&&v.category==="Research & Science"||tt==="Systems"&&v.category==="Systems & Devops"),Di=(()=>{const v=W.toLowerCase().trim();if(!v)return[];const P=[];return Wt.projects.forEach(X=>{(X.title.toLowerCase().includes(v)||X.techStack.some(K=>K.toLowerCase().includes(v)))&&P.push({type:"Project",title:X.title,subtitle:X.category,action:()=>{kt("projects"),Ee(X),_t(!1)}})}),Wt.papers.forEach(X=>{(X.title.toLowerCase().includes(v)||X.abstract.toLowerCase().includes(v))&&P.push({type:"Research Paper",title:X.title,subtitle:`${X.year} - ${X.journal}`,action:()=>{kt("research"),He(X),_t(!1)}})}),Wt.articles.forEach(X=>{(X.title.toLowerCase().includes(v)||X.excerpt.toLowerCase().includes(v))&&P.push({type:"Blog/Article",title:X.title,subtitle:X.category,action:()=>{kt("writing"),Ke(X),_t(!1)}})}),Wt.skills.forEach(X=>{X.name.toLowerCase().includes(v)&&P.push({type:"Tech Stack",title:X.name,subtitle:X.category,action:()=>{kt("skills"),Mt(X.category==="Research & Science"?"Research":X.category==="Systems & Devops"?"Systems":X.category),_t(!1)}})}),("whiteboard".includes(v)||"ideation".includes(v)||"canvas".includes(v)||"drawing".includes(v)||"sketch".includes(v)||"paint".includes(v))&&P.push({type:"OS Utility",title:"Ideation Pad (Whiteboard)",subtitle:"HTML5 digital canvas for sketching visual ideas",action:()=>{kt("whiteboard"),_t(!1)}}),P})(),mi=[{id:"twin",label:"Ask Twin AI",icon:Xo,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{id:"projects",label:"Mission Control",icon:cc,color:"text-sky-400 bg-sky-500/10 border-sky-500/20"},{id:"research",label:"Research Lab",icon:gy,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{id:"github",label:"GitHub Monitor",icon:tx,color:"text-zinc-400 bg-zinc-500/10 border-zinc-500/20"},{id:"writing",label:"Writing Hub",icon:Iy,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"},{id:"garden",label:"Garden Graph",icon:$y,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"resume",label:"Resume Gen",icon:Oy,color:"text-pink-400 bg-pink-500/10 border-pink-500/20"},{id:"timeline",label:"Career Index",icon:_y,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{id:"profTimeline",label:"Prof. Timeline",icon:lv,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"skills",label:"Skill Observatory",icon:ex,color:"text-indigo-400 bg-indigo-500/10 border-indigo-500/20"},{id:"brief",label:"Mission Brief",icon:ix,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{id:"builds",label:"Release Logs",icon:Gy,color:"text-teal-400 bg-teal-500/10 border-teal-500/20"},{id:"whiteboard",label:"Ideation Pad",icon:nx,color:"text-orange-400 bg-orange-500/10 border-orange-500/20"}],gn=(()=>{switch(N){case"cyberpunk":return{bg:"bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white",glass:"bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]",windowHeader:"bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95",btnSecondary:"bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono",accentColor:"text-pink-500",accentBorder:"border-pink-500/40",indicator:"bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]",panelHeader:"text-pink-400 uppercase tracking-widest text-[11px] font-bold",badge:"bg-pink-500/20 border border-pink-500/40 text-pink-300"};case"ai":return{bg:"bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white",glass:"bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10",windowHeader:"bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100",btnSecondary:"bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all",accentColor:"text-purple-400",accentBorder:"border-purple-500/30",indicator:"bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse",panelHeader:"text-purple-400 tracking-wider text-xs font-semibold",badge:"bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs"};case"terminal":return{bg:"bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20",glass:"bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]",windowHeader:"bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono",btnPrimary:"bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all",btnSecondary:"bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all",accentColor:"text-[#33ff33]",accentBorder:"border-[#33ff33]/30",indicator:"bg-[#33ff33] shadow-[0_0_10px_#33ff33]",panelHeader:"text-[#33ff33] font-bold uppercase tracking-wider text-[11px]",badge:"bg-transparent border border-[#33ff33] text-[#33ff33] text-xs"};case"light":return{bg:"bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20",glass:"bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl",windowHeader:"bg-slate-50 text-slate-800 border-b border-slate-200 font-sans",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95",btnSecondary:"bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all",accentColor:"text-indigo-600",accentBorder:"border-slate-300",indicator:"bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]",panelHeader:"text-slate-500 uppercase tracking-widest text-[11px] font-bold",badge:"bg-slate-100 border border-slate-200 text-slate-700 text-xs"};default:return{bg:"bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20",glass:"bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80",windowHeader:"bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans",btnPrimary:"bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95",btnSecondary:"bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all",accentColor:"text-sky-400",accentBorder:"border-sky-500/20",indicator:"bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",panelHeader:"text-sky-450 uppercase tracking-wider text-[11px] font-bold",badge:"bg-sky-500/10 border border-sky-500/20 text-sky-300"}}})();return d.jsx("div",{className:`h-full w-full ${gn.bg} transition-colors duration-500 overflow-hidden select-none flex flex-col relative`,children:o==="landing"?d.jsx(VA,{isWarping:i,theme:N,soundOn:z,triggerSound:We,onLaunchOS:Lt,onOpenWindowDirectly:we}):d.jsxs(d.Fragment,{children:[!x&&d.jsxs("div",{className:"absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6",children:[d.jsxs("div",{className:"w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500",style:{width:`${w}%`}}),d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-3 mb-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"}),d.jsx("span",{className:"text-zinc-400 font-bold tracking-wider",children:"FARHAN KABIR CORE OS v2.4"})]}),d.jsxs("span",{className:"text-zinc-500 tracking-wider",children:["BOOT: ",w,"%"]})]}),d.jsxs("div",{className:"space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1",children:[M.map((v,P)=>d.jsxs("div",{className:"text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between",children:[d.jsx("span",{className:"flex-1 whitespace-pre-wrap",children:v}),d.jsx("span",{className:"text-zinc-600 text-[9px]",children:"[SUCCESS]"})]},P)),w<100&&d.jsx("div",{className:"text-white animate-pulse font-mono text-[11px]",children:"⏳ Orchestrating linguistic vectors, please standby..."})]}),d.jsxs("div",{className:"flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500",children:[d.jsx("span",{children:"SYSTEM HOST: OOS LOCAL HOST INSTANCE"}),d.jsx("span",{children:"PORT: 3001 ACTIVE"})]})]}),d.jsx("div",{className:"mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono",children:"Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices."})]}),d.jsxs("header",{className:"h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono",children:[d.jsxs("div",{className:"flex items-center gap-5",children:[d.jsxs("div",{className:"flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85",onClick:()=>We(900,.05),children:[d.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]"}),d.jsx("span",{children:"FarhanOS"}),d.jsx("span",{className:"text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium",children:"BETA"})]}),d.jsxs("button",{onClick:()=>{t("landing"),We(1105,.06)},className:"flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer",title:"Return to Cosmos Portal",children:[d.jsx(ex,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"Return to Cosmos"})]}),d.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none",children:[d.jsxs("button",{onClick:()=>{_t(!0),We(800,.03)},className:"hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer",children:[d.jsx(ax,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Search ",d.jsx("kbd",{className:"text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5",children:"Cmd+K"})]})]}),d.jsxs("button",{onClick:Ni,className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300",children:[d.jsx(Xo,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"AI Site Tour"})]}),d.jsxs("button",{onClick:()=>kt("brief"),className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer",children:[d.jsx(cv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Mission Brief"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-4 select-none",children:[d.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-medium mr-1.5",children:"Mood Theme:"}),["dark","cyberpunk","ai","terminal","light"].map(v=>d.jsx("button",{onClick:()=>{I(v),We(750,.03)},className:`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${N===v?"bg-[#181926] text-white font-bold border border-zinc-700/60":"text-zinc-500 hover:text-zinc-300"}`,children:v},v))]}),d.jsxs("button",{onClick:ye,className:"md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all",title:"Cycle Theme",children:[d.jsx(nx,{className:"w-3.5 h-3.5 text-sky-400 animate-pulse"}),d.jsxs("span",{children:["Theme: ",N]})]}),d.jsxs("div",{className:"flex items-center gap-3 border-l border-zinc-800/60 pl-3",children:[d.jsx("button",{onClick:()=>{V(!z),ox(1e3,.02)},className:`p-1 rounded cursor-pointer hover:bg-zinc-900 ${z?"text-zinc-300":"text-zinc-600"}`,title:"Toggle Audio Feedback",children:z?d.jsx(mf,{className:"w-3.5 h-3.5"}):d.jsx(gf,{className:"w-3.5 h-3.5"})}),d.jsxs("button",{onClick:()=>{H(!O),ie!==null&&Vi()},className:`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${O?"text-purple-400 border border-purple-500/20 bg-purple-500/5":"text-zinc-600 border border-zinc-800"}`,title:"Toggle Voice synthesizer narration output",children:[d.jsx(cc,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{className:"hidden sm:inline",children:"OS Voice"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none",children:[d.jsx(Ay,{className:"w-3.5 h-3.5 text-sky-400"}),d.jsxs("span",{children:[R||"14:37:33"," (UTC)"]})]})]})]})]}),Oe&&d.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short",children:[d.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300",children:d.jsx(Xo,{className:"w-5 h-5 text-purple-400 animate-spin-slow"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("h4",{className:"text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200",children:["AI SYSTEM TOUR — ZONE ",ot," OF 5"]}),xe&&d.jsx("span",{className:"text-[10px] text-purple-300 animate-pulse font-mono select-none",children:"Rendering Synthesized Voice..."})]}),d.jsx("p",{className:"text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans",children:Y||"Preparing..."}),d.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[d.jsx("button",{onClick:xs,className:"bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer",children:ot===5?"Conclude Integration Tour":"Acknowledge & Sync Next Area"}),d.jsx("button",{onClick:()=>{rt(!1),mt(0),Vi(),We(400,.05)},className:"text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer",children:"Exit Tour"})]})]})]}),d.jsxs("main",{className:"flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none",children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35",children:[d.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"}),d.jsx("div",{className:"absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"}),d.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow"})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto",children:mi.map((v,P)=>{const X=v.icon,K=J.includes(v.id),ee=fe===v.id&&!$.includes(v.id);return d.jsxs("div",{onClick:()=>kt(v.id),style:{animationDelay:`${P*45}ms`},className:`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 ${K?"bg-zinc-950/15":""}`,children:[d.jsxs("div",{className:`p-4 rounded-2xl ${v.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`,children:[d.jsx(X,{className:"w-6 h-6"}),K&&d.jsx("span",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]"})]}),d.jsx("span",{className:"text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1",children:v.label}),ee&&d.jsx("span",{className:"absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs"})]},v.id)})}),J.map(v=>{if($.includes(v))return null;const P=fe===v,X=U[v]||{x:100,y:100,isMaximized:!1},K=mi.find(Q=>Q.id===v),ee=K?K.icon:x1,je=k<768||X.isMaximized?{position:"fixed",top:"2.5rem",left:0,right:0,bottom:"4rem",zIndex:P?50:20}:{position:"absolute",left:`${X.x}px`,top:`${X.y}px`,width:v==="twin"||v==="garden"||v==="skills"?"540px":"720px",height:v==="twin"?"480px":"550px",maxHeight:"85vh",zIndex:P?50:20};return d.jsxs("div",{id:`window-${v}`,style:je,onClick:()=>{q(v),We(400,.01)},className:`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${gn.glass} ${P?"ring-2 ring-sky-500/35 scale-[1.002]":"opacity-90"} animate-window-open`,children:[d.jsxs("div",{onMouseDown:Q=>ms(v,Q),className:`h-9 px-3 flex items-center justify-between cursor-move select-none ${gn.windowHeader}`,children:[d.jsxs("div",{className:"flex items-center gap-2 font-semibold tracking-tight text-xs",children:[d.jsx(ee,{className:"w-3.5 h-3.5 opacity-80"}),d.jsx("span",{children:K?K.label:"FarhanOS Sandbox"}),P&&d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})]}),d.jsxs("div",{className:"flex items-center gap-2",onMouseDown:Q=>Q.stopPropagation(),children:[d.jsx("button",{onClick:()=>mn(v),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Minimize",children:d.jsx(Qy,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>Ci(v),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Toggle Maximize",children:d.jsx(Zy,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>ln(v),className:"p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10",title:"Close Window",children:d.jsx(rx,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800",onScroll:Q=>{if(v==="profTimeline"){const Re=Q.currentTarget,ke=Re.scrollTop/(Re.scrollHeight-Re.clientHeight||1);ge(ke)}},children:[v==="twin"&&d.jsxs("div",{className:"flex flex-col h-full gap-3",children:[d.jsxs("div",{className:"border-b border-zinc-800/60 pb-2 mb-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Xo,{className:"w-4 h-4 text-purple-400"}),d.jsx("span",{className:"font-bold text-slate-100 tracking-tight",children:"Interactive Ask Twin Engine"})]}),d.jsx("p",{className:"text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal",children:"Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements."})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]",children:[De.map((Q,Re)=>d.jsxs("div",{className:`flex flex-col gap-1 w-full ${Q.role==="user"?"items-end":"items-start"}`,children:[d.jsx("div",{className:`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${Q.role==="user"?"bg-sky-500/10 border-sky-500/20 text-slate-100":"bg-zinc-950/40 border-zinc-900 text-slate-300"}`,children:Q.content}),Q.role==="assistant"&&d.jsx("button",{onClick:()=>{ie===Re?Vi():Gn(Q.content,Re)},className:"text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold",children:ie===Re?d.jsxs(d.Fragment,{children:[d.jsx(gf,{className:"w-3 h-3 text-rose-400 animate-pulse"}),d.jsx("span",{className:"text-rose-400",children:"Silence Audio Narrator"})]}):d.jsxs(d.Fragment,{children:[d.jsx(mf,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{children:"Speak Response Model"})]})})]},Re)),L&&d.jsxs("div",{className:"flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]",children:[d.jsx(cc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"FarhanTwin thinking processes synchronized..."})]})]}),d.jsx("div",{className:"border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10",children:["Explain depression text research","What bimodal stack is in use?","What SaaS packages did Farhan build?","Give brief overview of Farhan"].map(Q=>d.jsxs("button",{onClick:()=>{yt(Q),We(900,.02)},className:"text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors",children:["→ ",Q]},Q))}),d.jsxs("div",{className:"flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none",children:[d.jsx("input",{type:"text",value:et,onChange:Q=>yt(Q.target.value),onKeyDown:Q=>Q.key==="Enter"&&sa(),placeholder:"Inquire about clinical studies, model performance parameters...",className:"flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"}),d.jsx("button",{onClick:sa,disabled:!et.trim()||L,className:`p-2.5 rounded-lg cursor-pointer ${gn.btnPrimary}`,children:d.jsx(uv,{className:"w-3.5 h-3.5"})})]})]}),v==="projects"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:gn.panelHeader,children:"CATEGORIES"}),d.jsx("div",{className:"flex flex-wrap md:flex-col gap-1 select-none mb-3",children:["AI","NLP","SaaS","Open Source","Research","Productivity","Design"].map(Q=>d.jsxs("button",{onClick:()=>{Ee(Wt.projects.find(Re=>Re.category===Q)||Wt.projects[0]),We(800,.02)},className:`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${te.category===Q?"bg-zinc-950 text-sky-400 border border-zinc-800 font-bold":"text-zinc-500 hover:text-zinc-300"}`,children:["🎨 ",Q]},Q))}),d.jsx("span",{className:gn.panelHeader,children:"ACTIVE PLATFORMS"}),d.jsx("div",{className:"space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none",children:Wt.projects.map(Q=>d.jsxs("button",{onClick:()=>{Ee(Q),We(800,.03)},className:`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${te.id===Q.id?"bg-sky-500/10 border-sky-500/30 text-sky-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold truncate",children:Q.title}),d.jsx("span",{className:"text-[9px] opacity-75",children:Q.category})]},Q.id))})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"flex items-start justify-between border-b border-zinc-800/40 pb-2",children:[d.jsxs("div",{children:[d.jsxs("span",{className:gn.badge,children:[te.category," PROJECT"]}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:te.title}),d.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono tracking-wide",children:["TIMELINE: ",te.timeline]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsxs("button",{onClick:()=>We(1e3,.05),className:"p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1",children:[d.jsx(tx,{className:"w-3 h-3"}),d.jsx("span",{children:"Code"})]}),d.jsxs("button",{onClick:()=>{We(1100,.05),kt("brief")},className:"p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1",children:[d.jsx(ix,{className:"w-3 h-3"}),d.jsx("span",{children:"Deploy"})]})]})]}),d.jsx("p",{className:"text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text",children:te.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:te.metrics.map((Q,Re)=>d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20"}),d.jsx("div",{className:"text-[10px] text-zinc-500 capitalize",children:Q.label}),d.jsx("div",{className:"text-xs font-black text-sky-300 mt-1",children:Q.value})]},Re))}),d.jsxs("div",{className:"space-y-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Architecture Pipeline:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:te.architecture})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Design Problem:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:te.problem})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Integrated Tech-Stack Matrix:"}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 select-none",children:te.techStack.map(Q=>d.jsx("span",{className:"bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight",children:Q},Q))})]})]})]})]}),v==="research"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:gn.panelHeader,children:"PUBLICATIONS CATALOG"}),d.jsx("div",{className:"space-y-1 select-none",children:Wt.papers.map(Q=>d.jsxs("button",{onClick:()=>{He(Q),We(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${Se.id===Q.id?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold text-[10px] line-clamp-2 leading-snug",children:Q.title}),d.jsxs("span",{className:"text-[9px] opacity-75 font-mono",children:[Q.journal," (",Q.year,")"]})]},Q.id))}),d.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text",children:[d.jsx("span",{className:"font-bold text-emerald-300",children:"Clinician Alerts"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans mt-1",children:"Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold."})]})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start",children:[d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]",children:"PEER-REVIEWED JOURNAL"}),d.jsx("h3",{className:"text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5",children:Se.title}),d.jsxs("div",{className:"text-[9.5px] text-zinc-500 italic mt-0.5 select-text",children:["Authors: ",Se.authors," · Published in ",Se.journal," (",Se.year,")"]})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text",children:[d.jsx("span",{className:"font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1",children:"Anatomical Abstract:"}),d.jsx("p",{className:"text-slate-400 font-sans leading-normal text-[10px]",children:Se.abstract})]}),d.jsxs("div",{children:[d.jsx("span",{className:gn.panelHeader,children:"CLASSIFIER PIPELINE DATAFLOW"}),d.jsxs("div",{className:"flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono",children:[d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"Ingestion"}),d.jsx("span",{className:"text-zinc-600",children:"→"}),d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"POS normalise"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse",children:"RoBERTa Tensor Matrix"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("div",{className:"bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded",children:"Clinician Alert"})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:gn.panelHeader,children:"EVALUATION ACCURACY STATISTICS"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]",children:Se.results.map((Q,Re)=>d.jsxs("div",{className:"bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center",children:[d.jsx("div",{className:"text-zinc-500 text-[9px] truncate",title:Q.metric,children:Q.metric}),d.jsx("div",{className:"font-bold text-emerald-400 text-xs mt-0.5",children:Q.score})]},Re))})]}),d.jsxs("div",{className:"border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg",children:[d.jsxs("div",{className:"flex items-center justify-between pointer-events-auto select-none mb-1",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block",children:"BIBTEX CITATION RESOURCE"}),d.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(Se.citation),We(1200,.05)},className:"bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer",children:[d.jsx(Cy,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Copy Citation"})]})]}),d.jsx("code",{className:"text-[9.5px] text-zinc-400 font-mono select-all block leading-tight",children:Se.citation})]})]})]}),v==="github"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUALIZED TELEMETRY STREAM"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Linguistic & Engineering Pipelines Stream"})]}),d.jsx("span",{className:"text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded",children:"STREAK: 142 DAYS"})]}),d.jsxs("div",{children:[d.jsx("span",{className:gn.panelHeader,children:"CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)"}),d.jsx("div",{className:"grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg",children:Array.from({length:48}).map((Q,Re)=>{const ke=Re%7===0?"bg-green-500 shadow-[0_0_4px_#22c55e]":Re%5===0?"bg-green-600":Re%3===0?"bg-green-800":"bg-zinc-900";return d.jsx("div",{onClick:()=>We(900+Re%5*100,.02),className:`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${ke}`,title:`Telemetry day ${Re+1}: Commits verified`},Re)})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"INTELLIGENT SYSTEMS"}),d.jsxs("div",{className:"space-y-2 font-mono",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"typerush-cockpit"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 184"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"the-ink-home-portal"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 142"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"safeside-predictor"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 211"})]})]})]}),d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"LIVE COMPILING ACTIONS FEED"}),d.jsxs("div",{className:"space-y-2 leading-relaxed text-[10.5px]",children:[d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-emerald-400",children:"●"}),d.jsxs("p",{className:"text-zinc-400",children:["Pushed update to ",d.jsx("code",{className:"text-[#33ff33] font-mono",children:"typerush"}),": Configured Web Audio procedural oscillators & dynamic BPM heartbeats."]})]}),d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-amber-400",children:"●"}),d.jsx("p",{className:"text-zinc-400",children:"Released version 1.4.2 containing live Audio Synthesis narrated profiles."})]})]})]})]})]}),v==="writing"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:gn.panelHeader,children:"NARRATIVE CHRONICLES"}),d.jsx("div",{className:"space-y-1",children:Wt.articles.map(Q=>d.jsxs("button",{onClick:()=>{Ke(Q),We(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${Qe.id===Q.id?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-extrabold text-[10.5px] line-clamp-1 truncate",children:Q.title}),d.jsxs("div",{className:"flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono",children:[d.jsx("span",{children:Q.category}),d.jsx("span",{children:Q.readTime})]})]},Q.id))}),d.jsxs("div",{className:"p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]",children:[d.jsx("span",{className:"font-bold text-amber-300 block mb-0.5",children:"Medium Syndicate"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans",children:"Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX."})]})]}),d.jsxs("div",{className:"flex-1 space-y-3 relative",children:[d.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(mf,{className:"w-4 h-4 text-amber-400 animate-pulse"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none",children:"SYSTÉME NARRATOR"}),d.jsx("p",{className:"text-[11px] text-white font-bold select-text",children:"Read aloud with synthesized clinical AI speech?"})]})]}),d.jsx("div",{className:"flex items-center gap-1",children:ie===999?d.jsxs("button",{onClick:Vi,className:"bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(gf,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Stop Narration"})]}):d.jsxs("button",{onClick:()=>Gn(Qe.content,999),className:"bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(i1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Play Voiceover"})]})})]}),d.jsxs("div",{className:"border-b border-zinc-850 pb-2",children:[d.jsxs("span",{className:"text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono",children:[Qe.category," COLUMN"]}),d.jsx("h3",{className:"text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text",children:Qe.title}),d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1",children:["Written on ",Qe.date," · ",Qe.readTime]})]}),d.jsx("div",{className:"text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1",children:d.jsx("p",{children:Qe.content})})]})]}),v==="garden"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Topological Semantics Mapping"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Interconnected Semantic Knowledge Field"})]}),d.jsxs("div",{children:[d.jsx("span",{className:gn.panelHeader,children:"INTERACTIVE CONCEPT NODES"}),d.jsxs("div",{className:"relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35"}),d.jsx("div",{className:"relative w-full h-full",children:Wt.gardenNodes.map((Q,Re)=>{const ke=Re*11%80+10,Ye=Re*7%65+15,ft=Le===Q.id;return d.jsx("button",{onMouseEnter:()=>{Ae(Q.id),We(1100,.01)},onMouseLeave:()=>Ae(null),style:{left:`${ke}%`,top:`${Ye}%`},className:`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${ft?"bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50":"bg-zinc-900/60 border-zinc-800 text-zinc-400"}`,children:Q.label},Q.id)})})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text",children:[d.jsx("span",{className:"font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1",children:"Active Node Spectrum Details:"}),Le?d.jsxs("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:[Le==="nlp"&&"Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress.",Le==="transformers"&&"Transformers: Multi-attention neural architectures providing topological weights maps.",Le==="depression"&&"Depression Dialectics: Analysis of negation markers and cognitive distortions.",Le==="ethics"&&"Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters.",Le==="saas"&&"AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations.",!["nlp","transformers","depression","ethics","saas"].includes(Le)&&`Semantic connection active on ${Le}. High performance clustering coefficient evaluated.`]}):d.jsx("p",{className:"text-[10px] text-zinc-500 font-sans",children:"Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies..."})]})]}),v==="resume"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUAL RESUME ARCHITECT"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Interactively Tailored Professional Profile"})]}),d.jsxs("button",{onClick:()=>{window.print(),We(1100,.05)},className:"bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0",children:[d.jsx(Xh,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Print Resume Draft"})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block mb-1",children:"CONFIGURE AUDIENCE TAILORING SYSTEM:"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center",children:[{id:"recruiter",label:"HR / Recruiter",text:"Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores."},{id:"investor",label:"Venture Capital",text:"Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation."},{id:"founder",label:"Startups / Founder",text:"Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration."},{id:"researcher",label:"Clinical Academics",text:"Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights."}].map(Q=>d.jsxs("button",{onClick:()=>{tn(Q.id),We(800,.02)},className:`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${ut===Q.id?"bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsxs("span",{children:["👤 ",Q.label]}),d.jsx("span",{className:"text-[8px] opacity-70 font-normal leading-normal",children:Q.text})]},Q.id))})]}),d.jsxs("div",{className:"bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text",children:[d.jsxs("div",{className:"border-b border-zinc-850 pb-2 mb-2 text-center select-text",children:[d.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:Wt.name}),d.jsx("span",{className:"text-[9px] text-[#00ffcc] font-mono tracking-widest",children:Wt.title})]}),ut==="recruiter"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"EXECUTIVE SUMMARY (RECRUITER ALIGNED)"}),d.jsx("p",{children:"Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"CORE TECHNICAL SPECIFICATIONS"}),d.jsx("p",{children:"React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration."})]})]}),ut==="investor"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)"}),d.jsx("p",{children:"Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"PROVEN MONETIZATION HIGHLIGHTS"}),d.jsx("p",{children:"Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores."})]})]}),ut==="founder"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)"}),d.jsx("p",{children:"High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"CORE FLUIDITY TOOLS"}),d.jsx("p",{children:"TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces."})]})]}),ut==="researcher"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"RESEARCH STATEMENT (ACADEMIC ALIGNED)"}),d.jsx("p",{children:"Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"ACADEMIC RESEARCH TRACK RECORD"}),d.jsx("p",{children:"First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models."})]})]})]})]}),v==="timeline"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:gn.panelHeader,children:"CHRONOLOGY INDEX"}),d.jsx("div",{className:"space-y-1.5",children:Wt.timeline.map(Q=>d.jsxs("button",{onClick:()=>{at(Q),We(800,.03)},className:`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${ht.year===Q.year?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"text-[10.5px]",children:Q.company}),d.jsx("span",{className:"bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono",children:Q.year})]},Q.year))})]}),d.jsxs("div",{className:"flex-1 space-y-3",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsxs("span",{className:"bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono",children:["YEAR: ",ht.year," EXP"]}),d.jsx("h4",{className:"text-xs font-black text-white mt-1.5",children:ht.title}),d.jsxs("span",{className:"text-[9.5px] text-zinc-500 font-serif block",children:[ht.company," · Role: ",ht.role]})]}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:ht.description}),d.jsxs("div",{className:"space-y-2 select-text",children:[d.jsx("span",{className:gn.panelHeader,children:"HIGHLIGHT ACCOMPLISHMENTS"}),d.jsx("ul",{className:"space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal",children:ht.achievements.map((Q,Re)=>d.jsx("li",{className:"marker:text-sky-400",children:Q},Re))})]}),d.jsxs("div",{className:"bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5",children:"INTEGRATED TECH GRID"}),d.jsx("div",{className:"flex flex-wrap gap-1 select-none",children:ht.technologies.map(Q=>d.jsx("span",{className:"bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]",children:Q},Q))})]})]})]}),v==="profTimeline"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"PRO TIMELINE NODE"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Professional Experience & Verification Chronology"})]}),d.jsxs("div",{className:"relative pl-6 md:pl-0 pt-4",children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/60 via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{className:"absolute left-[13px] md:left-1/2 top-0 bottom-16 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:`scaleY(${le})`,transformOrigin:"top"}}),d.jsx("div",{className:"space-y-10 relative z-10",children:Wt.professionalTimeline.map((Q,Re)=>{const ke=Re%2===0;return d.jsxs("div",{className:`flex flex-col md:flex-row items-start ${ke?"md:flex-row-reverse":""} relative`,children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:"w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md",children:d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-8 md:pl-0",children:d.jsxs("div",{className:"p-5 rounded-xl bg-zinc-900/30 border border-zinc-900/80 relative group hover:border-zinc-800 transition-all duration-300",children:[d.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-lg pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-2 mb-4",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5",children:Q.year}),d.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight",children:Q.title}),d.jsx("span",{className:"text-[9px] text-zinc-550 block font-mono mt-0.5",children:Q.company})]}),d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[8.5px] font-mono border font-medium uppercase ${Q.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":Q.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":Q.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:Q.company})]}),d.jsx("ul",{className:"space-y-2 mb-4 text-[10.5px] text-zinc-400",children:Q.achievements.map((Ye,ft)=>d.jsxs("li",{className:"flex items-start leading-relaxed text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2 shrink-0"}),d.jsx("span",{children:Ye})]},ft))}),d.jsx("div",{className:"flex flex-wrap gap-1 pt-3 border-t border-zinc-900/60 select-none",children:Q.technologies.map(Ye=>d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[8px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:Ye},Ye))})]})})]},Re)})})]})]}),v==="skills"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Observatory Deck"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Linguistic, Structural & Compute Matrices"})]}),d.jsx("div",{className:"flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none",children:["all","AI/ML","Frontend","Backend","Research","Systems"].map(Q=>d.jsx("button",{onClick:()=>{Mt(Q),We(800,.02)},className:`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${tt===Q?"bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]":"bg-transparent text-zinc-500 hover:text-zinc-300"}`,children:Q==="all"?"All Matrices":Q},Q))}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none",children:Xi.map(Q=>{const Re=Q.weight===5?"border-sky-500/50 bg-sky-500/5 text-sky-200":Q.weight===4?"border-indigo-500/30 bg-indigo-500/5 text-indigo-200":"border-zinc-800 bg-zinc-900/40 text-zinc-400";return d.jsxs("div",{onClick:()=>We(700+Q.weight*100,.03),className:`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${Re}`,children:[d.jsx("span",{className:"text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100",children:Q.name}),d.jsx("span",{className:"text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400",children:Q.category}),d.jsx("div",{className:"flex items-center gap-0.5 mt-1",children:Array.from({length:5}).map((ke,Ye)=>d.jsx("span",{className:`w-1 h-1 rounded-full ${Ye<Q.weight?"bg-indigo-400 shadow-[0_0_4px_#818cf8]":"bg-zinc-800"}`},Ye))})]},Q.name)})})]}),v==="brief"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"INTELLIGENT INTAKE PROCESS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Initiate Feasibility Evaluation Strategy"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"VENTURE DOMAIN:"}),d.jsxs("select",{value:Ce.projectType,onChange:Q=>pe({...Ce,projectType:Q.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer",children:[d.jsx("option",{children:"AI Engineering & LLMs"}),d.jsx("option",{children:"Clinical NLP & Mental State analysis"}),d.jsx("option",{children:"SaaS Automation Development"}),d.jsx("option",{children:"Interactive UI/UX Projects"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"FINANCIAL BOUNDS:"}),d.jsxs("select",{value:Ce.budget,onChange:Q=>pe({...Ce,budget:Q.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"$5k - $10k"}),d.jsx("option",{children:"$10k - $25k"}),d.jsx("option",{children:"$25k+"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TIMELINE PROFILE:"}),d.jsxs("select",{value:Ce.timeline,onChange:Q=>pe({...Ce,timeline:Q.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"1-3 Months"}),d.jsx("option",{children:"3 Months-half year"}),d.jsx("option",{children:"Complex Multiphase"})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"STRATEGIC GOALS / OBJECTIVES:"}),d.jsx("textarea",{value:Ce.goals,onChange:Q=>pe({...Ce,goals:Q.target.value}),rows:3,placeholder:"Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)",className:"w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"})]}),d.jsx("button",{onClick:gs,disabled:!Ce.goals.trim()||Be,className:"w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5",children:Be?d.jsxs(d.Fragment,{children:[d.jsx(cc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"Deconstruct parameters algorithms..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(T1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Evaluate Feasibility Strategy"})]})})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5",children:"ASSESSMENT & ARCHITECTURE STRATEGY:"}),me?d.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-sans select-text",children:me}):d.jsx("div",{className:"text-zinc-600 font-sans text-[10.5px] italic text-center py-10",children:"Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations..."})]}),me&&d.jsxs("div",{className:"border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4",children:[d.jsxs("span",{className:"text-zinc-500 flex items-center gap-1 font-mono",children:[d.jsx(Gc,{className:"w-3 h-3 text-emerald-400"})," API SECURE Rails"]}),d.jsx("button",{onClick:()=>{alert("Strategy Brief dispatched. Farhan's team will contact you securely."),Fe(null),We(1100,.05)},className:"bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-1 px-3 border border-emerald-400 rounded text-[9.5px] cursor-pointer",children:"Dispatch Brief"})]})]})]})]}),v==="whiteboard"&&d.jsx(XA,{theme:N,triggerSound:We}),v==="builds"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono",children:"TELEMETRY DIAGNOSTICS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Continuous Development & Deployment Releases"})]}),d.jsx("div",{className:"space-y-3.5 max-h-[300px] overflow-y-auto pr-1",children:Wt.buildLogs.map(Q=>d.jsxs("div",{className:"bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-850 pb-1.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-white font-bold",children:[d.jsx("span",{className:"text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded",children:Q.version}),d.jsx("span",{className:"text-[11px] font-sans truncate",children:Q.title})]}),d.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:Q.date})]}),d.jsx("p",{className:"text-[10.5px] text-slate-400 leading-relaxed font-sans",children:Q.description}),d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"TASKS DEPLOYED"}),d.jsx("ul",{className:"space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans",children:Q.tasksCompleted.map((Re,ke)=>d.jsx("li",{children:Re},ke))})]}),d.jsxs("div",{className:"border-t border-zinc-900 pt-1.5",children:[d.jsx("span",{className:"font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"METRIC SHIFTS DETECTED"}),d.jsx("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono select-none",children:Q.metricsChanged.map((Re,ke)=>d.jsxs("span",{className:"bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300",children:[d.jsxs("span",{children:[Re.metric,":"]}),d.jsxs("span",{className:"text-teal-400 font-bold",children:[Re.before," ➔ ",Re.after]})]},ke))})]})]},Q.id))})]})]})]},v)})]}),d.jsxs("footer",{className:"h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none",children:[d.jsx("div",{className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none",children:mi.map(v=>{const P=v.icon,X=J.includes(v.id),K=fe===v.id&&!$.includes(v.id);return d.jsxs("button",{onClick:()=>{X?K?mn(v.id):(q(v.id),ce(ee=>ee.filter(Ie=>Ie!==v.id))):kt(v.id)},className:`p-2 rounded-xl transition-all relative cursor-pointer ${v.color} transform hover:scale-129 active:scale-95 duration-100`,title:v.label,children:[d.jsx(P,{className:"w-5 h-5"}),X&&d.jsx("span",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]"}),K&&d.jsx("span",{className:"absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs"})]},v.id)})}),d.jsx("div",{className:"absolute right-4 hidden md:flex items-center gap-1.5",children:d.jsx("button",{type:"button",onClick:()=>{_t(!0),We(800,.03)},className:"p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer",children:"Terminal Commands (CMD+K)"})})]}),it&&d.jsx("div",{className:"fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal",children:d.jsxs("div",{className:"w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up",children:[d.jsxs("div",{className:"flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850",children:[d.jsx(ax,{className:"w-4 h-4 text-sky-400"}),d.jsx("input",{type:"text",value:W,onChange:v=>st(v.target.value),placeholder:"Search projects, research papers, tech stack node keys, commands...",className:"flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white",autoFocus:!0}),d.jsx("button",{onClick:()=>{_t(!1),We(400,.02)},className:"p-1 text-zinc-500 hover:text-white rounded",children:d.jsx(rx,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]",children:W.trim().length===0?d.jsxs("div",{className:"space-y-2",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide",children:"SYSTEM DIAGNOSTIC CORES:"}),d.jsx("button",{onClick:()=>{Ni(),_t(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"🚀 Trigger system AI Guided Tour with synthesized Voice narrations"}),d.jsx("button",{onClick:()=>{kt("brief"),_t(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"💡 Open Mission Intake Consultation Workspace"}),d.jsx("div",{className:"text-[10px] text-zinc-550 italic font-sans px-2",children:"Enter queries parsing index models above to match academic research text parameters..."})]}):d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5",children:["MATCHED WORKSPACE PARAMS (",Di.length,")"]}),Di.length>0?Di.map((v,P)=>d.jsxs("button",{onClick:v.action,className:"w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase",children:v.type}),d.jsx("span",{className:"text-white font-bold font-sans",children:v.title})]}),d.jsx("span",{className:"text-[10px] text-zinc-500",children:v.subtitle})]},P)):d.jsx("div",{className:"text-center text-zinc-500 text-[11px] py-6 font-sans",children:"No matching intelligence indices found. Retry key parameters."})]})}),d.jsxs("div",{className:"p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500",children:[d.jsx("span",{className:"font-mono",children:"SEARCH GRID INTEGRATION READY"}),d.jsx("span",{children:"ESC TO EXIT"})]})]})})]})})}ry.createRoot(document.getElementById("root")).render(d.jsx(Ue.StrictMode,{children:d.jsx(ZA,{})}));
