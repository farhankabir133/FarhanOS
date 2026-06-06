(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rf={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Jb(){if(Hg)return Po;Hg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Gg;function $b(){return Gg||(Gg=1,rf.exports=Jb()),rf.exports}var d=$b(),of={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function ey(){if(Vg)return vt;Vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,S={};function b(D,V,k){this.props=D,this.context=V,this.refs=S,this.updater=k||T}b.prototype.isReactComponent={},b.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},b.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=b.prototype;function I(D,V,k){this.props=D,this.context=V,this.refs=S,this.updater=k||T}var O=I.prototype=new L;O.constructor=I,U(O,b.prototype),O.isPureReactComponent=!0;var X=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function F(D,V,k){var me=k.ref;return{$$typeof:o,type:D,key:V,ref:me!==void 0?me:null,props:k}}function K(D,V){return F(D.type,V,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function Z(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(k){return V[k]})}var de=/\/+/g;function pe(D,V){return typeof D=="object"&&D!==null&&D.key!=null?Z(""+D.key):V.toString(36)}function W(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(P,P):(D.status="pending",D.then(function(V){D.status==="pending"&&(D.status="fulfilled",D.value=V)},function(V){D.status==="pending"&&(D.status="rejected",D.reason=V)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function z(D,V,k,me,Ae){var $=typeof D;($==="undefined"||$==="boolean")&&(D=null);var Te=!1;if(D===null)Te=!0;else switch($){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(D.$$typeof){case o:case t:Te=!0;break;case y:return Te=D._init,z(Te(D._payload),V,k,me,Ae)}}if(Te)return Ae=Ae(D),Te=me===""?"."+pe(D,0):me,X(Ae)?(k="",Te!=null&&(k=Te.replace(de,"$&/")+"/"),z(Ae,V,k,"",function(et){return et})):Ae!=null&&(H(Ae)&&(Ae=K(Ae,k+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(de,"$&/")+"/")+Te)),V.push(Ae)),1;Te=0;var we=me===""?".":me+":";if(X(D))for(var Ve=0;Ve<D.length;Ve++)me=D[Ve],$=we+pe(me,Ve),Te+=z(me,V,k,$,Ae);else if(Ve=M(D),typeof Ve=="function")for(D=Ve.call(D),Ve=0;!(me=D.next()).done;)me=me.value,$=we+pe(me,Ve++),Te+=z(me,V,k,$,Ae);else if($==="object"){if(typeof D.then=="function")return z(W(D),V,k,me,Ae);throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Te}function j(D,V,k){if(D==null)return D;var me=[],Ae=0;return z(D,me,"","",function($){return V.call(k,$,Ae++)}),me}function ie(D){if(D._status===-1){var V=D._result;V=V(),V.then(function(k){(D._status===0||D._status===-1)&&(D._status=1,D._result=k)},function(k){(D._status===0||D._status===-1)&&(D._status=2,D._result=k)}),D._status===-1&&(D._status=0,D._result=V)}if(D._status===1)return D._result.default;throw D._result}var _e=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},se={map:j,forEach:function(D,V,k){j(D,function(){V.apply(this,arguments)},k)},count:function(D){var V=0;return j(D,function(){V++}),V},toArray:function(D){return j(D,function(V){return V})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return vt.Activity=_,vt.Children=se,vt.Component=b,vt.Fragment=i,vt.Profiler=l,vt.PureComponent=I,vt.StrictMode=s,vt.Suspense=g,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,vt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},vt.cache=function(D){return function(){return D.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(D,V,k){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var me=U({},D.props),Ae=D.key;if(V!=null)for($ in V.key!==void 0&&(Ae=""+V.key),V)!A.call(V,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&V.ref===void 0||(me[$]=V[$]);var $=arguments.length-2;if($===1)me.children=k;else if(1<$){for(var Te=Array($),we=0;we<$;we++)Te[we]=arguments[we+2];me.children=Te}return F(D.type,Ae,me)},vt.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},vt.createElement=function(D,V,k){var me,Ae={},$=null;if(V!=null)for(me in V.key!==void 0&&($=""+V.key),V)A.call(V,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Ae[me]=V[me]);var Te=arguments.length-2;if(Te===1)Ae.children=k;else if(1<Te){for(var we=Array(Te),Ve=0;Ve<Te;Ve++)we[Ve]=arguments[Ve+2];Ae.children=we}if(D&&D.defaultProps)for(me in Te=D.defaultProps,Te)Ae[me]===void 0&&(Ae[me]=Te[me]);return F(D,$,Ae)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(D){return{$$typeof:m,render:D}},vt.isValidElement=H,vt.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ie}},vt.memo=function(D,V){return{$$typeof:p,type:D,compare:V===void 0?null:V}},vt.startTransition=function(D){var V=B.T,k={};B.T=k;try{var me=D(),Ae=B.S;Ae!==null&&Ae(k,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(P,_e)}catch($){_e($)}finally{V!==null&&k.types!==null&&(V.types=k.types),B.T=V}},vt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},vt.use=function(D){return B.H.use(D)},vt.useActionState=function(D,V,k){return B.H.useActionState(D,V,k)},vt.useCallback=function(D,V){return B.H.useCallback(D,V)},vt.useContext=function(D){return B.H.useContext(D)},vt.useDebugValue=function(){},vt.useDeferredValue=function(D,V){return B.H.useDeferredValue(D,V)},vt.useEffect=function(D,V){return B.H.useEffect(D,V)},vt.useEffectEvent=function(D){return B.H.useEffectEvent(D)},vt.useId=function(){return B.H.useId()},vt.useImperativeHandle=function(D,V,k){return B.H.useImperativeHandle(D,V,k)},vt.useInsertionEffect=function(D,V){return B.H.useInsertionEffect(D,V)},vt.useLayoutEffect=function(D,V){return B.H.useLayoutEffect(D,V)},vt.useMemo=function(D,V){return B.H.useMemo(D,V)},vt.useOptimistic=function(D,V){return B.H.useOptimistic(D,V)},vt.useReducer=function(D,V,k){return B.H.useReducer(D,V,k)},vt.useRef=function(D){return B.H.useRef(D)},vt.useState=function(D){return B.H.useState(D)},vt.useSyncExternalStore=function(D,V,k){return B.H.useSyncExternalStore(D,V,k)},vt.useTransition=function(){return B.H.useTransition()},vt.version="19.2.7",vt}var Xg;function Vh(){return Xg||(Xg=1,of.exports=ey()),of.exports}var Oe=Vh(),lf={exports:{}},Io={},cf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function ty(){return Wg||(Wg=1,(function(o){function t(z,j){var ie=z.length;z.push(j);e:for(;0<ie;){var _e=ie-1>>>1,se=z[_e];if(0<l(se,j))z[_e]=j,z[ie]=se,ie=_e;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var j=z[0],ie=z.pop();if(ie!==j){z[0]=ie;e:for(var _e=0,se=z.length,D=se>>>1;_e<D;){var V=2*(_e+1)-1,k=z[V],me=V+1,Ae=z[me];if(0>l(k,ie))me<se&&0>l(Ae,k)?(z[_e]=Ae,z[me]=ie,_e=me):(z[_e]=k,z[V]=ie,_e=V);else if(me<se&&0>l(Ae,ie))z[_e]=Ae,z[me]=ie,_e=me;else break e}}return j}function l(z,j){var ie=z.sortIndex-j.sortIndex;return ie!==0?ie:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();o.unstable_now=function(){return h.now()-m}}var g=[],p=[],y=1,_=null,x=3,M=!1,T=!1,U=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=z)s(p),j.sortIndex=j.expirationTime,t(g,j);else break;j=i(p)}}function X(z){if(U=!1,O(z),!T)if(i(g)!==null)T=!0,P||(P=!0,Z());else{var j=i(p);j!==null&&W(X,j.startTime-z)}}var P=!1,B=-1,A=5,F=-1;function K(){return S?!0:!(o.unstable_now()-F<A)}function H(){if(S=!1,P){var z=o.unstable_now();F=z;var j=!0;try{e:{T=!1,U&&(U=!1,L(B),B=-1),M=!0;var ie=x;try{t:{for(O(z),_=i(g);_!==null&&!(_.expirationTime>z&&K());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,x=_.priorityLevel;var se=_e(_.expirationTime<=z);if(z=o.unstable_now(),typeof se=="function"){_.callback=se,O(z),j=!0;break t}_===i(g)&&s(g),O(z)}else s(g);_=i(g)}if(_!==null)j=!0;else{var D=i(p);D!==null&&W(X,D.startTime-z),j=!1}}break e}finally{_=null,x=ie,M=!1}j=void 0}}finally{j?Z():P=!1}}}var Z;if(typeof I=="function")Z=function(){I(H)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=H,Z=function(){pe.postMessage(null)}}else Z=function(){b(H,0)};function W(z,j){B=b(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var ie=x;x=j;try{return z()}finally{x=ie}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=x;x=z;try{return j()}finally{x=ie}},o.unstable_scheduleCallback=function(z,j,ie){var _e=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?_e+ie:_e):ie=_e,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ie+se,z={id:y++,callback:j,priorityLevel:z,startTime:ie,expirationTime:se,sortIndex:-1},ie>_e?(z.sortIndex=ie,t(p,z),i(g)===null&&z===i(p)&&(U?(L(B),B=-1):U=!0,W(X,ie-_e))):(z.sortIndex=se,t(g,z),T||M||(T=!0,P||(P=!0,Z()))),z},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(z){var j=x;return function(){var ie=x;x=j;try{return z.apply(this,arguments)}finally{x=ie}}}})(uf)),uf}var qg;function ny(){return qg||(qg=1,cf.exports=ty()),cf.exports}var df={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function iy(){if(Yg)return Bn;Yg=1;var o=Vh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:p,implementation:y}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(g,p,null,y)},Bn.flushSync=function(g){var p=h.T,y=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=y,s.d.f()}},Bn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Bn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Bn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):y==="script"&&s.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Bn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin);s.d.L(g,y,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Bn.requestFormReset=function(g){s.d.r(g)},Bn.unstable_batchedUpdates=function(g,p){return g(p)},Bn.useFormState=function(g,p,y){return h.H.useFormState(g,p,y)},Bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bn.version="19.2.7",Bn}var Zg;function ay(){if(Zg)return df.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),df.exports=iy(),df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function sy(){if(Kg)return Io;Kg=1;var o=ny(),t=Vh(),i=ay();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,r=f;break}if(C===r){v=!0,r=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,r=u;break}if(C===r){v=!0,r=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),I=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case I:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var W=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},_e=[],se=-1;function D(e){return{current:e}}function V(e){0>se||(e.current=_e[se],_e[se]=null,se--)}function k(e,n){se++,_e[se]=e.current,e.current=n}var me=D(null),Ae=D(null),$=D(null),Te=D(null);function we(e,n){switch(k($,n),k(Ae,e),k(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dg(n),e=fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(me),k(me,e)}function Ve(){V(me),V(Ae),V($)}function et(e){e.memoizedState!==null&&k(Te,e);var n=me.current,a=fg(n,e.type);n!==a&&(k(Ae,e),k(me,a))}function Je(e){Ae.current===e&&(V(me),V(Ae)),Te.current===e&&(V(Te),Lo._currentValue=ie)}var yt,ft;function dt(e){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+ft}var Et=!1;function tt(e,n){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(ve){var fe=ve}Reflect.construct(e,[],Ce)}else{try{Ce.call()}catch(ve){fe=ve}e.call(Ce.prototype)}}else{try{throw Error()}catch(ve){fe=ve}(Ce=e())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(ve){if(ve&&fe&&typeof ve.stack=="string")return[ve.stack,fe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var G=v.split(`
`),ce=C.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===ce.length)for(r=G.length-1,u=ce.length-1;1<=r&&0<=u&&G[r]!==ce[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==ce[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==ce[u]){var Me=`
`+G[r].replace(" at new "," at ");return e.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",e.displayName)),Me}while(1<=r&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?dt(a):""}function Ft(e,n){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return e.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return tt(e.type,!1);case 11:return tt(e.type.render,!1);case 1:return tt(e.type,!0);case 31:return dt("Activity");default:return""}}function Nt(e){try{var n="",a=null;do n+=Ft(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var un=Object.prototype.hasOwnProperty,Q=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,it=o.unstable_shouldYield,st=o.unstable_requestPaint,Ue=o.unstable_now,rt=o.unstable_getCurrentPriorityLevel,R=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,ee=o.unstable_NormalPriority,ye=o.unstable_LowPriority,Re=o.unstable_IdlePriority,Pe=o.log,Ie=o.unstable_setDisableYieldValue,xe=null,ge=null;function ke(e){if(typeof Pe=="function"&&Ie(e),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(xe,e)}catch{}}var He=Math.clz32?Math.clz32:ht,Be=Math.log,Fe=Math.LN2;function ht(e){return e>>>=0,e===0?32:31-(Be(e)/Fe|0)|0}var pt=256,St=262144,q=4194304;function ze(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?u=ze(r):(v&=C,v!==0?u=ze(v):a||(a=C&~e,a!==0&&(u=ze(a))))):(C=r&~f,C!==0?u=ze(C):v!==0?u=ze(v):a||(a=r&~e,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Xe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function je(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function Ye(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ot(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,ce=e.hiddenUpdates;for(a=v&~a;0<a;){var Me=31-He(a),Ce=1<<Me;C[Me]=0,G[Me]=-1;var fe=ce[Me];if(fe!==null)for(ce[Me]=null,Me=0;Me<fe.length;Me++){var ve=fe[Me];ve!==null&&(ve.lane&=-536870913)}a&=~Ce}r!==0&&Bt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Bt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-He(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function nt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-He(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Vn(e,n){var a=n&-n;return a=(a&42)!==0?1:si(a),(a&(e.suspendedLanes|n))!==0?0:a}function si(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ri(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function Vi(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var an=Math.random().toString(36).slice(2),cn="__reactFiber$"+an,_n="__reactProps$"+an,gi="__reactContainer$"+an,pn="__reactEvents$"+an,Ws="__reactListeners$"+an,la="__reactHandles$"+an,ms="__reactResources$"+an,Xn="__reactMarker$"+an;function Ui(e){delete e[cn],delete e[_n],delete e[pn],delete e[Ws],delete e[la]}function zi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[gi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_g(e);e!==null;){if(a=e[cn])return a;e=_g(e)}return n}e=a,a=e.parentNode}return null}function Xi(e){if(e=e[cn]||e[gi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function qi(e){var n=e[ms];return n||(n=e[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[Xn]=!0}var qr=new Set,w={};function J(e,n){ue(e,n),ue(e+"Capture",n)}function ue(e,n){for(w[e]=n,e=0;e<n.length;e++)qr.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),N={},re={};function he(e){return un.call(re,e)?!0:un.call(N,e)?!1:ne.test(e)?re[e]=!0:(N[e]=!0,!1)}function be(e,n,a){if(he(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function De(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ge(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lt(e){if(!e._valueTracker){var n=ae(e)?"checked":"value";e._valueTracker=Le(e,n,""+e[n])}}function _t(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ct(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var At=/[\n"\\]/g;function Rt(e){return e.replace(At,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(e,n,a,r,u,f,v,C){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ke(n)):e.value!==""+Ke(n)&&(e.value=""+Ke(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?xt(e,v,Ke(n)):a!=null?xt(e,v,Ke(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ke(C):e.removeAttribute("name")}function bn(e,n,a,r,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){lt(e);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),lt(e)}function xt(e,n,a){n==="number"&&Ct(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fn(e,n,a){if(n!=null&&(n=""+Ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ke(a):""}function xi(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ke(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),lt(e)}function ct(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Wt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Oi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&on(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&on(e,f,n[f])}function Xt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function up(e){var n=Xi(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(We(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[_n]||null;if(!u)throw Error(s(90));We(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&_t(r)}break e;case"textarea":Fn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var au=!1;function dp(e,n,a){if(au)return e(n,a);au=!0;try{var r=e(n);return r}finally{if(au=!1,(qs!==null||Ys!==null)&&(Gl(),qs&&(n=qs,e=Ys,Ys=qs=null,up(n),e)))for(n=0;n<e.length;n++)up(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(ua)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{su=!1}var Ia=null,ru=null,il=null;function fp(){if(il)return il;var e,n=ru,a=n.length,r,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return il=u.slice(e,1<r?1-r:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function hp(){return!1}function Zn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:hp,this.isPropagationStopped=hp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Zn(xs),Kr=_({},xs,{view:0,detail:0}),Kv=Zn(Kr),ou,lu,Qr,ol=_({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(ou=e.screenX-Qr.screenX,lu=e.screenY-Qr.screenY):lu=ou=0,Qr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),pp=Zn(ol),Qv=_({},ol,{dataTransfer:0}),Jv=Zn(Qv),$v=_({},Kr,{relatedTarget:0}),cu=Zn($v),e_=_({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Zn(e_),n_=_({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i_=Zn(n_),a_=_({},xs,{data:0}),mp=Zn(a_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=o_[e])?!!n[e]:!1}function uu(){return l_}var c_=_({},Kr,{key:function(e){if(e.key){var n=s_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u_=Zn(c_),d_=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Zn(d_),f_=_({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),h_=Zn(f_),p_=_({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Zn(p_),g_=_({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Zn(g_),v_=_({},xs,{newState:0,oldState:0}),__=Zn(v_),b_=[9,13,27,32],du=ua&&"CompositionEvent"in window,Jr=null;ua&&"documentMode"in document&&(Jr=document.documentMode);var y_=ua&&"TextEvent"in window&&!Jr,xp=ua&&(!du||Jr&&8<Jr&&11>=Jr),vp=" ",_p=!1;function bp(e,n){switch(e){case"keyup":return b_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function S_(e,n){switch(e){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(_p=!0,vp);case"textInput":return e=n.data,e===vp&&_p?null:e;default:return null}}function M_(e,n){if(Zs)return e==="compositionend"||!du&&bp(e,n)?(e=fp(),il=ru=Ia=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!E_[e.type]:n==="textarea"}function Mp(e,n,a,r){qs?Ys?Ys.push(r):Ys=[r]:qs=r,n=Kl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var $r=null,eo=null;function T_(e){sg(e,0)}function ll(e){var n=Wi(e);if(_t(n))return e}function Ep(e,n){if(e==="change")return n}var Tp=!1;if(ua){var fu;if(ua){var hu="oninput"in document;if(!hu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),hu=typeof Ap.oninput=="function"}fu=hu}else fu=!1;Tp=fu&&(!document.documentMode||9<document.documentMode)}function wp(){$r&&($r.detachEvent("onpropertychange",Cp),eo=$r=null)}function Cp(e){if(e.propertyName==="value"&&ll(eo)){var n=[];Mp(n,eo,e,iu(e)),dp(T_,n)}}function A_(e,n,a){e==="focusin"?(wp(),$r=n,eo=a,$r.attachEvent("onpropertychange",Cp)):e==="focusout"&&wp()}function w_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(eo)}function C_(e,n){if(e==="click")return ll(n)}function R_(e,n){if(e==="input"||e==="change")return ll(n)}function N_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var oi=typeof Object.is=="function"?Object.is:N_;function to(e,n){if(oi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!un.call(n,u)||!oi(e[u],n[u]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var a=Rp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ct(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ct(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var D_=ua&&"documentMode"in document&&11>=document.documentMode,Ks=null,mu=null,no=null,gu=!1;function Up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Ks==null||Ks!==Ct(r)||(r=Ks,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&to(no,r)||(no=r,r=Kl(mu,"onSelect"),0<r.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ks)))}function vs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},xu={},zp={};ua&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function _s(e){if(xu[e])return xu[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return xu[e]=n[a];return e}var Op=_s("animationend"),Pp=_s("animationiteration"),Ip=_s("animationstart"),L_=_s("transitionrun"),U_=_s("transitionstart"),z_=_s("transitioncancel"),Fp=_s("transitionend"),Bp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Pi(e,n){Bp.set(e,n),J(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vi=[],Js=0,_u=0;function ul(){for(var e=Js,n=_u=Js=0;n<e;){var a=vi[n];vi[n++]=null;var r=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&kp(a,u,f)}}function dl(e,n,a,r){vi[Js++]=e,vi[Js++]=n,vi[Js++]=a,vi[Js++]=r,_u|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bu(e,n,a,r){return dl(e,n,a,r),fl(e)}function bs(e,n){return dl(e,null,null,n),fl(e)}function kp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-He(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(e){if(50<To)throw To=0,Rd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function O_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,n,a,r){return new O_(e,n,a,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,n){var a=e.alternate;return a===null?(a=li(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")yu(e)&&(v=1);else if(typeof e=="string")v=kb(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=li(31,a,n,u),e.elementType=F,e.lanes=f,e;case U:return ys(a.children,u,f,n);case S:v=8,u|=24;break;case b:return e=li(12,a,n,u|2),e.elementType=b,e.lanes=f,e;case X:return e=li(13,a,n,u),e.elementType=X,e.lanes=f,e;case P:return e=li(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:v=10;break e;case L:v=9;break e;case O:v=11;break e;case B:v=14;break e;case A:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=li(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ys(e,n,a,r){return e=li(7,e,r,n),e.lanes=a,e}function Su(e,n,a){return e=li(6,e,null,n),e.lanes=a,e}function Hp(e){var n=li(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=li(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gp=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=Gp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Nt(n)},Gp.set(e,n),n)}return{value:e,source:n,stack:Nt(n)}}var er=[],tr=0,pl=null,io=0,bi=[],yi=0,Fa=null,Zi=1,Ki="";function fa(e,n){er[tr++]=io,er[tr++]=pl,pl=e,io=n}function Vp(e,n,a){bi[yi++]=Zi,bi[yi++]=Ki,bi[yi++]=Fa,Fa=e;var r=Zi;e=Ki;var u=32-He(r)-1;r&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Zi=1<<32-He(n)+u|a<<u|r,Ki=f+e}else Zi=1<<f|a<<u|r,Ki=e}function Eu(e){e.return!==null&&(fa(e,1),Vp(e,1,0))}function Tu(e){for(;e===pl;)pl=er[--tr],er[tr]=null,io=er[--tr],er[tr]=null;for(;e===Fa;)Fa=bi[--yi],bi[yi]=null,Ki=bi[--yi],bi[yi]=null,Zi=bi[--yi],bi[yi]=null}function Xp(e,n){bi[yi++]=Zi,bi[yi++]=Ki,bi[yi++]=Fa,Zi=n.id,Ki=n.overflow,Fa=e}var Un=null,sn=null,Ot=!1,Ba=null,Si=!1,Au=Error(s(519));function ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(_i(n,e)),Au}function Wp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[cn]=e,n[_n]=r,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Lt(wo[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),bn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),xi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||cg(n.textContent,a)?(r.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),r.onScroll!=null&&Lt("scroll",n),r.onScrollEnd!=null&&Lt("scrollend",n),r.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||ka(e,!0)}function qp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function nr(e){if(e!==Un)return!1;if(!Ot)return qp(e),Ot=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vd(e.type,e.memoizedProps)),a=!a),a&&sn&&ka(e),qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=vg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=vg(e)}else n===27?(n=sn,es(e.type)?(e=Zd,Zd=null,sn=e):sn=n):sn=Un?Ei(e.stateNode.nextSibling):null;return!0}function Ss(){sn=Un=null,Ot=!1}function wu(){var e=Ba;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ba=null),e}function ao(e){Ba===null?Ba=[e]:Ba.push(e)}var Cu=D(null),Ms=null,ha=null;function ja(e,n,a){k(Cu,n._currentValue),n._currentValue=a}function pa(e){e._currentValue=Cu.current,V(Cu)}function Ru(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Ru(f.return,a,e),r||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ru(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ir(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;oi(u.pendingProps.value,v.value)||(e!==null?e.push(C):e=[C])}}else if(u===Te.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Nu(n,e,a,r),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Yp(Ms,e)}function gl(e,n){return Ms===null&&Es(e),Yp(e,n)}function Yp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(s(308));ha=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ha=ha.next=n;return a}var P_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},I_=o.unstable_scheduleCallback,F_=o.unstable_NormalPriority,yn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new P_,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&I_(F_,function(){e.controller.abort()})}var ro=null,Lu=0,ar=0,sr=null;function B_(e,n){if(ro===null){var a=ro=[];Lu=0,ar=Od(),sr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(Zp,Zp),n}function Zp(){if(--Lu===0&&ro!==null){sr!==null&&(sr.status="fulfilled");var e=ro;ro=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function k_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Kp=z.S;z.S=function(e,n){U0=Ue(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&B_(e,n),Kp!==null&&Kp(e,n)};var Ts=D(null);function Uu(){var e=Ts.current;return e!==null?e:tn.pooledCache}function xl(e,n){n===null?k(Ts,Ts.current):k(Ts,n.pool)}function Qp(){var e=Uu();return e===null?null:{parent:yn._currentValue,pool:e}}var rr=Error(s(460)),zu=Error(s(474)),vl=Error(s(542)),_l={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(ca,ca);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw ws=n,rr}}function As(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,rr):a}}var ws=null;function em(){if(ws===null)throw Error(s(459));var e=ws;return ws=null,e}function tm(e){if(e===rr||e===vl)throw Error(s(483))}var or=null,oo=0;function bl(e){var n=oo;return oo+=1,or===null&&(or=[]),$p(or,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nm(e){function n(te,Y){if(e){var oe=te.deletions;oe===null?(te.deletions=[Y],te.flags|=16):oe.push(Y)}}function a(te,Y){if(!e)return null;for(;Y!==null;)n(te,Y),Y=Y.sibling;return null}function r(te){for(var Y=new Map;te!==null;)te.key!==null?Y.set(te.key,te):Y.set(te.index,te),te=te.sibling;return Y}function u(te,Y){return te=da(te,Y),te.index=0,te.sibling=null,te}function f(te,Y,oe){return te.index=oe,e?(oe=te.alternate,oe!==null?(oe=oe.index,oe<Y?(te.flags|=67108866,Y):oe):(te.flags|=67108866,Y)):(te.flags|=1048576,Y)}function v(te){return e&&te.alternate===null&&(te.flags|=67108866),te}function C(te,Y,oe,Ee){return Y===null||Y.tag!==6?(Y=Su(oe,te.mode,Ee),Y.return=te,Y):(Y=u(Y,oe),Y.return=te,Y)}function G(te,Y,oe,Ee){var at=oe.type;return at===U?Me(te,Y,oe.props.children,Ee,oe.key):Y!==null&&(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&As(at)===Y.type)?(Y=u(Y,oe.props),lo(Y,oe),Y.return=te,Y):(Y=hl(oe.type,oe.key,oe.props,null,te.mode,Ee),lo(Y,oe),Y.return=te,Y)}function ce(te,Y,oe,Ee){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=Mu(oe,te.mode,Ee),Y.return=te,Y):(Y=u(Y,oe.children||[]),Y.return=te,Y)}function Me(te,Y,oe,Ee,at){return Y===null||Y.tag!==7?(Y=ys(oe,te.mode,Ee,at),Y.return=te,Y):(Y=u(Y,oe),Y.return=te,Y)}function Ce(te,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Su(""+Y,te.mode,oe),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return oe=hl(Y.type,Y.key,Y.props,null,te.mode,oe),lo(oe,Y),oe.return=te,oe;case T:return Y=Mu(Y,te.mode,oe),Y.return=te,Y;case A:return Y=As(Y),Ce(te,Y,oe)}if(W(Y)||Z(Y))return Y=ys(Y,te.mode,oe,null),Y.return=te,Y;if(typeof Y.then=="function")return Ce(te,bl(Y),oe);if(Y.$$typeof===I)return Ce(te,gl(te,Y),oe);yl(te,Y)}return null}function fe(te,Y,oe,Ee){var at=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return at!==null?null:C(te,Y,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===at?G(te,Y,oe,Ee):null;case T:return oe.key===at?ce(te,Y,oe,Ee):null;case A:return oe=As(oe),fe(te,Y,oe,Ee)}if(W(oe)||Z(oe))return at!==null?null:Me(te,Y,oe,Ee,null);if(typeof oe.then=="function")return fe(te,Y,bl(oe),Ee);if(oe.$$typeof===I)return fe(te,Y,gl(te,oe),Ee);yl(te,oe)}return null}function ve(te,Y,oe,Ee,at){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return te=te.get(oe)||null,C(Y,te,""+Ee,at);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case M:return te=te.get(Ee.key===null?oe:Ee.key)||null,G(Y,te,Ee,at);case T:return te=te.get(Ee.key===null?oe:Ee.key)||null,ce(Y,te,Ee,at);case A:return Ee=As(Ee),ve(te,Y,oe,Ee,at)}if(W(Ee)||Z(Ee))return te=te.get(oe)||null,Me(Y,te,Ee,at,null);if(typeof Ee.then=="function")return ve(te,Y,oe,bl(Ee),at);if(Ee.$$typeof===I)return ve(te,Y,oe,gl(Y,Ee),at);yl(Y,Ee)}return null}function Qe(te,Y,oe,Ee){for(var at=null,Ht=null,$e=Y,Tt=Y=0,zt=null;$e!==null&&Tt<oe.length;Tt++){$e.index>Tt?(zt=$e,$e=null):zt=$e.sibling;var Gt=fe(te,$e,oe[Tt],Ee);if(Gt===null){$e===null&&($e=zt);break}e&&$e&&Gt.alternate===null&&n(te,$e),Y=f(Gt,Y,Tt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt,$e=zt}if(Tt===oe.length)return a(te,$e),Ot&&fa(te,Tt),at;if($e===null){for(;Tt<oe.length;Tt++)$e=Ce(te,oe[Tt],Ee),$e!==null&&(Y=f($e,Y,Tt),Ht===null?at=$e:Ht.sibling=$e,Ht=$e);return Ot&&fa(te,Tt),at}for($e=r($e);Tt<oe.length;Tt++)zt=ve($e,te,Tt,oe[Tt],Ee),zt!==null&&(e&&zt.alternate!==null&&$e.delete(zt.key===null?Tt:zt.key),Y=f(zt,Y,Tt),Ht===null?at=zt:Ht.sibling=zt,Ht=zt);return e&&$e.forEach(function(ss){return n(te,ss)}),Ot&&fa(te,Tt),at}function ut(te,Y,oe,Ee){if(oe==null)throw Error(s(151));for(var at=null,Ht=null,$e=Y,Tt=Y=0,zt=null,Gt=oe.next();$e!==null&&!Gt.done;Tt++,Gt=oe.next()){$e.index>Tt?(zt=$e,$e=null):zt=$e.sibling;var ss=fe(te,$e,Gt.value,Ee);if(ss===null){$e===null&&($e=zt);break}e&&$e&&ss.alternate===null&&n(te,$e),Y=f(ss,Y,Tt),Ht===null?at=ss:Ht.sibling=ss,Ht=ss,$e=zt}if(Gt.done)return a(te,$e),Ot&&fa(te,Tt),at;if($e===null){for(;!Gt.done;Tt++,Gt=oe.next())Gt=Ce(te,Gt.value,Ee),Gt!==null&&(Y=f(Gt,Y,Tt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt);return Ot&&fa(te,Tt),at}for($e=r($e);!Gt.done;Tt++,Gt=oe.next())Gt=ve($e,te,Tt,Gt.value,Ee),Gt!==null&&(e&&Gt.alternate!==null&&$e.delete(Gt.key===null?Tt:Gt.key),Y=f(Gt,Y,Tt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt);return e&&$e.forEach(function(Qb){return n(te,Qb)}),Ot&&fa(te,Tt),at}function $t(te,Y,oe,Ee){if(typeof oe=="object"&&oe!==null&&oe.type===U&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var at=oe.key;Y!==null;){if(Y.key===at){if(at=oe.type,at===U){if(Y.tag===7){a(te,Y.sibling),Ee=u(Y,oe.props.children),Ee.return=te,te=Ee;break e}}else if(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&As(at)===Y.type){a(te,Y.sibling),Ee=u(Y,oe.props),lo(Ee,oe),Ee.return=te,te=Ee;break e}a(te,Y);break}else n(te,Y);Y=Y.sibling}oe.type===U?(Ee=ys(oe.props.children,te.mode,Ee,oe.key),Ee.return=te,te=Ee):(Ee=hl(oe.type,oe.key,oe.props,null,te.mode,Ee),lo(Ee,oe),Ee.return=te,te=Ee)}return v(te);case T:e:{for(at=oe.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){a(te,Y.sibling),Ee=u(Y,oe.children||[]),Ee.return=te,te=Ee;break e}else{a(te,Y);break}else n(te,Y);Y=Y.sibling}Ee=Mu(oe,te.mode,Ee),Ee.return=te,te=Ee}return v(te);case A:return oe=As(oe),$t(te,Y,oe,Ee)}if(W(oe))return Qe(te,Y,oe,Ee);if(Z(oe)){if(at=Z(oe),typeof at!="function")throw Error(s(150));return oe=at.call(oe),ut(te,Y,oe,Ee)}if(typeof oe.then=="function")return $t(te,Y,bl(oe),Ee);if(oe.$$typeof===I)return $t(te,Y,gl(te,oe),Ee);yl(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Y!==null&&Y.tag===6?(a(te,Y.sibling),Ee=u(Y,oe),Ee.return=te,te=Ee):(a(te,Y),Ee=Su(oe,te.mode,Ee),Ee.return=te,te=Ee),v(te)):a(te,Y)}return function(te,Y,oe,Ee){try{oo=0;var at=$t(te,Y,oe,Ee);return or=null,at}catch($e){if($e===rr||$e===vl)throw $e;var Ht=li(29,$e,null,te.mode);return Ht.lanes=Ee,Ht.return=te,Ht}finally{}}}var Cs=nm(!0),im=nm(!1),Ha=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Vt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(e),kp(e,null,a),n}return dl(e,r,n,a),fl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,nt(e,a)}}function Iu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function uo(){if(Fu){var e=sr;if(e!==null)throw e}}function fo(e,n,a,r){Fu=!1;var u=e.updateQueue;Ha=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,ce=G.next;G.next=null,v===null?f=ce:v.next=ce,v=G;var Me=e.alternate;Me!==null&&(Me=Me.updateQueue,C=Me.lastBaseUpdate,C!==v&&(C===null?Me.firstBaseUpdate=ce:C.next=ce,Me.lastBaseUpdate=G))}if(f!==null){var Ce=u.baseState;v=0,Me=ce=G=null,C=f;do{var fe=C.lane&-536870913,ve=fe!==C.lane;if(ve?(Ut&fe)===fe:(r&fe)===fe){fe!==0&&fe===ar&&(Fu=!0),Me!==null&&(Me=Me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Qe=e,ut=C;fe=n;var $t=a;switch(ut.tag){case 1:if(Qe=ut.payload,typeof Qe=="function"){Ce=Qe.call($t,Ce,fe);break e}Ce=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ut.payload,fe=typeof Qe=="function"?Qe.call($t,Ce,fe):Qe,fe==null)break e;Ce=_({},Ce,fe);break e;case 2:Ha=!0}}fe=C.callback,fe!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=u.callbacks,ve===null?u.callbacks=[fe]:ve.push(fe))}else ve={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Me===null?(ce=Me=ve,G=Ce):Me=Me.next=ve,v|=fe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ve=C,C=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);Me===null&&(G=Ce),u.baseState=G,u.firstBaseUpdate=ce,u.lastBaseUpdate=Me,f===null&&(u.shared.lanes=0),Za|=v,e.lanes=v,e.memoizedState=Ce}}function am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)am(a[e],n)}var lr=D(null),Sl=D(0);function rm(e,n){e=Ma,k(Sl,e),k(lr,n),Ma=e|n.baseLanes}function Bu(){k(Sl,Ma),k(lr,lr.current)}function ku(){Ma=Sl.current,V(lr),V(Sl)}var ci=D(null),Mi=null;function Xa(e){var n=e.alternate;k(gn,gn.current&1),k(ci,e),Mi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(Mi=e)}function ju(e){k(gn,gn.current),k(ci,e),Mi===null&&(Mi=e)}function om(e){e.tag===22?(k(gn,gn.current),k(ci,e),Mi===null&&(Mi=e)):Wa()}function Wa(){k(gn,gn.current),k(ci,ci.current)}function ui(e){V(ci),Mi===e&&(Mi=null),V(gn)}var gn=D(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qd(a)||Yd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,Mt=null,Qt=null,Sn=null,El=!1,cr=!1,Rs=!1,Tl=0,ho=0,ur=null,j_=0;function fn(){throw Error(s(321))}function Hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!oi(e[a],n[a]))return!1;return!0}function Gu(e,n,a,r,u,f){return ma=f,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Vm:ad,Rs=!1,f=a(r,u),Rs=!1,cr&&(f=cm(n,a,r,u)),lm(e),f}function lm(e){z.H=go;var n=Qt!==null&&Qt.next!==null;if(ma=0,Sn=Qt=Mt=null,El=!1,ho=0,ur=null,n)throw Error(s(300));e===null||Mn||(e=e.dependencies,e!==null&&ml(e)&&(Mn=!0))}function cm(e,n,a,r){Mt=e;var u=0;do{if(cr&&(ur=null),ho=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,Sn=Qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Xm,f=n(a,r)}while(cr);return f}function H_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(Mt.flags|=1024),n}function Vu(){var e=Tl!==0;return Tl=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}ma=0,Sn=Qt=Mt=null,cr=!1,ho=Tl=0,ur=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Mt.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function xn(){if(Qt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=Sn===null?Mt.memoizedState:Sn.next;if(n!==null)Sn=n,Qt=e;else{if(e===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Sn===null?Mt.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,ur===null&&(ur=[]),e=$p(ur,e,n),n=Mt,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Vm:ad),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===I)return zn(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Mt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=K;return n.index++,a}function ga(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=xn();return Yu(n,Qt,e)}function Yu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=v=null,G=null,ce=n,Me=!1;do{var Ce=ce.lane&-536870913;if(Ce!==ce.lane?(Ut&Ce)===Ce:(ma&Ce)===Ce){var fe=ce.revertLane;if(fe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Ce===ar&&(Me=!0);else if((ma&fe)===fe){ce=ce.next,fe===ar&&(Me=!0);continue}else Ce={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(C=G=Ce,v=f):G=G.next=Ce,Mt.lanes|=fe,Za|=fe;Ce=ce.action,Rs&&a(f,Ce),f=ce.hasEagerState?ce.eagerState:a(f,Ce)}else fe={lane:Ce,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(C=G=fe,v=f):G=G.next=fe,Mt.lanes|=Ce,Za|=Ce;ce=ce.next}while(ce!==null&&ce!==n);if(G===null?v=f:G.next=C,!oi(f,e.memoizedState)&&(Mn=!0,Me&&(a=sr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zu(e){var n=xn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);oi(f,n.memoizedState)||(Mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function um(e,n,a){var r=Mt,u=xn(),f=Ot;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!oi((Qt||u).memoizedState,a);if(v&&(u.memoizedState=a,Mn=!0),u=u.queue,Ju(hm.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||Sn!==null&&Sn.memoizedState.tag&1){if(r.flags|=2048,dr(9,{destroy:void 0},fm.bind(null,r,u,a,n),null),tn===null)throw Error(s(349));f||(ma&127)!==0||dm(r,n,a)}return a}function dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=Al(),Mt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,r){n.value=a,n.getSnapshot=r,pm(n)&&mm(e)}function hm(e,n,a){return a(function(){pm(n)&&mm(e)})}function pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!oi(e,a)}catch{return!0}}function mm(e){var n=bs(e,2);n!==null&&ei(n,e,2)}function Ku(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Rs){ke(!0);try{a()}finally{ke(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},n}function gm(e,n,a,r){return e.baseState=a,Yu(e,Qt,typeof r=="function"?r:ga)}function G_(e,n,a,r,u){if(Dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var C=a(u,r),G=z.S;G!==null&&G(v,C),vm(e,n,C)}catch(ce){Qu(e,n,ce)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(u,r),vm(e,n,f)}catch(ce){Qu(e,n,ce)}}function vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){_m(e,n,r)},function(r){return Qu(e,n,r)}):_m(e,n,a)}function _m(e,n,a){n.status="fulfilled",n.value=a,bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xm(e,a)))}function Qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==r)}e.action=null}function bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Sm(e,n){if(Ot){var a=tn.formState;if(a!==null){e:{var r=Mt;if(Ot){if(sn){t:{for(var u=sn,f=Si;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Ei(u.nextSibling),r=u.data==="F!";break e}}ka(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=r,a=jm.bind(null,Mt,r),r.dispatch=a,r=Ku(!1),f=id.bind(null,Mt,!1,r.queue),r=Wn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=G_.bind(null,Mt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Mm(e){var n=xn();return Em(n,Qt,e)}function Em(e,n,a){if(n=Yu(e,n,ym)[0],e=Cl(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=po(n)}catch(v){throw v===rr?vl:v}else r=n;n=xn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Mt.flags|=2048,dr(9,{destroy:void 0},V_.bind(null,u,a),null)),[r,f,e]}function V_(e,n){e.action=n}function Tm(e){var n=xn(),a=Qt;if(a!==null)return Em(n,a,e);xn(),n=n.memoizedState,a=xn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function dr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Mt.updateQueue,n===null&&(n=Al(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Am(){return xn().memoizedState}function Rl(e,n,a,r){var u=Wn();Mt.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nl(e,n,a,r){var u=xn();r=r===void 0?null:r;var f=u.memoizedState.inst;Qt!==null&&r!==null&&Hu(r,Qt.memoizedState.deps)?u.memoizedState=dr(n,f,a,r):(Mt.flags|=e,u.memoizedState=dr(1|n,f,a,r))}function wm(e,n){Rl(8390656,8,e,n)}function Ju(e,n){Nl(2048,8,e,n)}function X_(e){Mt.flags|=4;var n=Mt.updateQueue;if(n===null)n=Al(),Mt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Cm(e){var n=xn().memoizedState;return X_({ref:n,nextImpl:e}),function(){if((Vt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Rm(e,n){return Nl(4,2,e,n)}function Nm(e,n){return Nl(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lm(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,Dm.bind(null,n,e),a)}function $u(){}function Um(e,n){var a=xn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Hu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function zm(e,n){var a=xn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Hu(n,r[1]))return r[0];if(r=e(),Rs){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[r,n],r}function ed(e,n,a){return a===void 0||(ma&1073741824)!==0&&(Ut&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=O0(),Mt.lanes|=e,Za|=e,a)}function Om(e,n,a,r){return oi(a,n)?a:lr.current!==null?(e=ed(e,a,r),oi(e,n)||(Mn=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(Ut&261930)===0?(Mn=!0,e.memoizedState=a):(e=O0(),Mt.lanes|=e,Za|=e,n)}function Pm(e,n,a,r,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=z.T,C={};z.T=C,id(e,!1,n,a);try{var G=u(),ce=z.S;if(ce!==null&&ce(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Me=k_(G,r);mo(e,n,Me,hi(e))}else mo(e,n,r,hi(e))}catch(Ce){mo(e,n,{then:function(){},status:"rejected",reason:Ce},hi())}finally{j.p=f,v!==null&&C.types!==null&&(v.types=C.types),z.T=v}}function W_(){}function td(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Im(e).queue;Pm(e,u,n,ie,a===null?W_:function(){return Fm(e),a(r)})}function Im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fm(e){var n=Im(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},hi())}function nd(){return zn(Lo)}function Bm(){return xn().memoizedState}function km(){return xn().memoizedState}function q_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();e=Ga(a);var r=Va(n,e,a);r!==null&&(ei(r,n,a),co(r,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function Y_(e,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Hm(n,a):(a=bu(e,n,a,r),a!==null&&(ei(a,e,r),Gm(a,n,r)))}function jm(e,n,a){var r=hi();mo(e,n,a,r)}function mo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Hm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,oi(C,v))return dl(e,n,u,0),tn===null&&ul(),!1}catch{}finally{}if(a=bu(e,n,u,r),a!==null)return ei(a,e,r),Gm(a,n,r),!0}return!1}function id(e,n,a,r){if(r={lane:2,revertLane:Od(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(s(479))}else n=bu(e,a,r,2),n!==null&&ei(n,e,2)}function Dl(e){var n=e.alternate;return e===Mt||n!==null&&n===Mt}function Hm(e,n){cr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Gm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,nt(e,a)}}var go={readContext:zn,use:wl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};go.useEffectEvent=fn;var Vm={readContext:zn,use:wl,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Rs){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var u=a(n);if(Rs){ke(!0);try{a(n)}finally{ke(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Y_.bind(null,Mt,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=jm.bind(null,Mt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Wn();return ed(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Pm.bind(null,Mt,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Mt,u=Wn();if(Ot){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Ut&127)!==0||dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wm(hm.bind(null,r,f,e),[e]),r.flags|=2048,dr(9,{destroy:void 0},fm.bind(null,r,f,a,n),null),a},useId:function(){var e=Wn(),n=tn.identifierPrefix;if(Ot){var a=Ki,r=Zi;a=(r&~(1<<32-He(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=j_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nd,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=id.bind(null,Mt,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return Wn().memoizedState=q_.bind(null,Mt)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Vt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ad={readContext:zn,use:wl,useCallback:Um,useContext:zn,useEffect:Ju,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Nm,useMemo:zm,useReducer:Cl,useRef:Am,useState:function(){return Cl(ga)},useDebugValue:$u,useDeferredValue:function(e,n){var a=xn();return Om(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Cl(ga)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:um,useId:Bm,useHostTransitionStatus:nd,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=xn();return gm(a,Qt,e,n)},useMemoCache:qu,useCacheRefresh:km};ad.useEffectEvent=Cm;var Xm={readContext:zn,use:wl,useCallback:Um,useContext:zn,useEffect:Ju,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Nm,useMemo:zm,useReducer:Zu,useRef:Am,useState:function(){return Zu(ga)},useDebugValue:$u,useDeferredValue:function(e,n){var a=xn();return Qt===null?ed(a,e,n):Om(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Zu(ga)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:um,useId:Bm,useHostTransitionStatus:nd,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=xn();return Qt!==null?gm(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:km};Xm.useEffectEvent=Cm;function sd(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=hi(),u=Ga(r);u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,r),n!==null&&(ei(n,e,r),co(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=hi(),u=Ga(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,r),n!==null&&(ei(n,e,r),co(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=hi(),r=Ga(a);r.tag=2,n!=null&&(r.callback=n),n=Va(e,r,a),n!==null&&(ei(n,e,a),co(n,e,a))}};function Wm(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function qm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&rd.enqueueReplaceState(n,n.state,null)}function Ns(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ym(e){cl(e)}function Zm(e){console.error(e)}function Km(e){cl(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Qm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function od(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function Jm(e){return e=Ga(e),e.tag=3,e}function $m(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Qm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Qm(n,a,r),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function Z_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?Vl():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ld(e,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ld(e,r,u)),!1}throw Error(s(435,a.tag))}return Ld(e,r,u),Vl(),!1}if(Ot)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Au&&(e=Error(s(422),{cause:r}),ao(_i(e,a)))):(r!==Au&&(n=Error(s(423),{cause:r}),ao(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=_i(r,a),u=od(e.stateNode,r,u),Iu(e,u),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:r});if(f=_i(f,a),Eo===null?Eo=[f]:Eo.push(f),hn!==4&&(hn=2),n===null)return!0;r=_i(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=od(a.stateNode,r,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jm(u),$m(u,e,a,r),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var ld=Error(s(461)),Mn=!1;function On(e,n,a,r){n.child=e===null?im(n,null,a,r):Cs(n,e.child,a,r)}function e0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var C in r)C!=="ref"&&(v[C]=r[C])}else v=r;return Es(n),r=Gu(e,n,a,v,f,u),C=Vu(),e!==null&&!Mn?(Xu(e,n,u),xa(e,n,u)):(Ot&&C&&Eu(n),n.flags|=1,On(e,n,r,u),n.child)}function t0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,n0(e,n,f,r,u)):(e=hl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,r)&&e.ref===n.ref)return xa(e,n,u)}return n.flags|=1,e=da(f,r),e.ref=n.ref,e.return=n,n.child=e}function n0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(to(f,r)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=r=f,gd(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,xa(e,n,u)}return cd(e,n,a,r,u)}function i0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return a0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):Bu(),om(n);else return r=n.lanes=536870912,a0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(xl(n,f.cachePool),rm(n,f),Wa(),n.memoizedState=null):(e!==null&&xl(n,null),Bu(),Wa());return On(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function a0(e,n,a,r,u){var f=Uu();return f=f===null?null:{parent:yn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Bu(),om(n),e!==null&&ir(e,n,r,!0),n.childLanes=u,null}function Ul(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function s0(e,n,a){return Cs(n,e.child,null,a),e=Ul(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function K_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ot){if(r.mode==="hidden")return e=Ul(n,r),n.lanes=536870912,xo(null,e);if(ju(n),(e=sn)?(e=xg(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=Hp(e),a.return=n,n.child=a,Un=n,sn=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return Ul(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=s0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Mn||ir(e,n,a,!1),u=(a&e.childLanes)!==0,Mn||u){if(r=tn,r!==null&&(v=Vn(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,bs(e,v),ei(r,e,v),ld;Vl(),n=s0(e,n,a)}else e=f.treeContext,sn=Ei(v.nextSibling),Un=n,Ot=!0,Ba=null,Si=!1,e!==null&&Xp(n,e),n=Ul(n,r),n.flags|=4096;return n}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cd(e,n,a,r,u){return Es(n),a=Gu(e,n,a,r,void 0,u),r=Vu(),e!==null&&!Mn?(Xu(e,n,u),xa(e,n,u)):(Ot&&r&&Eu(n),n.flags|=1,On(e,n,a,u),n.child)}function r0(e,n,a,r,u,f){return Es(n),n.updateQueue=null,a=cm(n,r,a,u),lm(e),r=Vu(),e!==null&&!Mn?(Xu(e,n,f),xa(e,n,f)):(Ot&&r&&Eu(n),n.flags|=1,On(e,n,a,f),n.child)}function o0(e,n,a,r,u){if(Es(n),n.stateNode===null){var f=$s,v=a.contextType;typeof v=="object"&&v!==null&&(f=zn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ou(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?zn(v):$s,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(sd(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&rd.enqueueReplaceState(f,f.state,null),fo(n,r,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,G=Ns(a,C);f.props=G;var ce=f.context,Me=a.contextType;v=$s,typeof Me=="object"&&Me!==null&&(v=zn(Me));var Ce=a.getDerivedStateFromProps;Me=typeof Ce=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ce!==v)&&qm(n,f,r,v),Ha=!1;var fe=n.memoizedState;f.state=fe,fo(n,r,f,u),uo(),ce=n.memoizedState,C||fe!==ce||Ha?(typeof Ce=="function"&&(sd(n,a,Ce,r),ce=n.memoizedState),(G=Ha||Wm(n,a,G,r,fe,ce,v))?(Me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=v,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pu(e,n),v=n.memoizedProps,Me=Ns(a,v),f.props=Me,Ce=n.pendingProps,fe=f.context,ce=a.contextType,G=$s,typeof ce=="object"&&ce!==null&&(G=zn(ce)),C=a.getDerivedStateFromProps,(ce=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Ce||fe!==G)&&qm(n,f,r,G),Ha=!1,fe=n.memoizedState,f.state=fe,fo(n,r,f,u),uo();var ve=n.memoizedState;v!==Ce||fe!==ve||Ha||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof C=="function"&&(sd(n,a,C,r),ve=n.memoizedState),(Me=Ha||Wm(n,a,Me,r,fe,ve,G)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(ce||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ve,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ve,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ve),f.props=r,f.state=ve,f.context=G,r=Me):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Cs(n,e.child,null,u),n.child=Cs(n,null,a,u)):On(e,n,a,u),n.memoizedState=f.state,e=n.child):e=xa(e,n,u),e}function l0(e,n,a,r){return Ss(),n.flags|=256,On(e,n,a,r),n.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(e){return{baseLanes:e,cachePool:Qp()}}function fd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function c0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ot){if(u?Xa(n):Wa(),(e=sn)?(e=xg(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=Hp(e),a.return=n,n.child=a,Un=n,sn=null)):e=null,e===null)throw ka(n);return Yd(e)?n.lanes=32:n.lanes=536870912,null}var C=r.children;return r=r.fallback,u?(Wa(),u=n.mode,C=Ol({mode:"hidden",children:C},u),r=ys(r,u,a,null),C.return=n,r.return=n,C.sibling=r,n.child=C,r=n.child,r.memoizedState=dd(a),r.childLanes=fd(e,v,a),n.memoizedState=ud,xo(null,r)):(Xa(n),hd(n,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=pd(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),C=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),C=ys(C,u,a,null),C.flags|=2,r.return=n,C.return=n,r.sibling=C,n.child=r,Cs(n,e.child,null,a),r=n.child,r.memoizedState=dd(a),r.childLanes=fd(e,v,a),n.memoizedState=ud,n=xo(null,r));else if(Xa(n),Yd(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ce=v.dgst;v=ce,r=Error(s(419)),r.stack="",r.digest=v,ao({value:r,source:null,stack:null}),n=pd(e,n,a)}else if(Mn||ir(e,n,a,!1),v=(a&e.childLanes)!==0,Mn||v){if(v=tn,v!==null&&(r=Vn(v,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,bs(e,r),ei(v,e,r),ld;qd(C)||Vl(),n=pd(e,n,a)}else qd(C)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,sn=Ei(C.nextSibling),Un=n,Ot=!0,Ba=null,Si=!1,e!==null&&Xp(n,e),n=hd(n,r.children),n.flags|=4096);return n}return u?(Wa(),C=r.fallback,u=n.mode,G=e.child,ce=G.sibling,r=da(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,ce!==null?C=da(ce,C):(C=ys(C,u,a,null),C.flags|=2),C.return=n,r.return=n,r.sibling=C,n.child=r,xo(null,r),r=n.child,C=e.child.memoizedState,C===null?C=dd(a):(u=C.cachePool,u!==null?(G=yn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Qp(),C={baseLanes:C.baseLanes|a,cachePool:u}),r.memoizedState=C,r.childLanes=fd(e,v,a),n.memoizedState=ud,xo(e.child,r)):(Xa(n),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function hd(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=li(22,e,null,n),e.lanes=0,e}function pd(e,n,a){return Cs(n,e.child,null,a),e=hd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function u0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ru(e.return,n,a)}function md(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function d0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=gn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,k(gn,v),On(e,n,r,a),r=Ot?io:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u0(e,a,n);else if(e.tag===19)u0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),md(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}md(n,!0,a,null,f,r);break;case"together":md(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function xa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=da(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Q_(e,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),ja(n,yn,e.memoizedState.cache),Ss();break;case 27:case 5:et(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?c0(e,n,a):(Xa(n),e=xa(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ir(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return d0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),k(gn,gn.current),r)break;return null;case 22:return n.lanes=0,i0(e,n,a,n.pendingProps);case 24:ja(n,yn,e.memoizedState.cache)}return xa(e,n,a)}function f0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!gd(e,a)&&(n.flags&128)===0)return Mn=!1,Q_(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Ot&&(n.flags&1048576)!==0&&Vp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=As(n.elementType),n.type=e,typeof e=="function")yu(e)?(r=Ns(e,r),n.tag=1,n=o0(null,n,e,r,a)):(n.tag=0,n=cd(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=e0(null,n,e,r,a);break e}else if(u===B){n.tag=14,n=t0(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return cd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ns(r,n.pendingProps),o0(e,n,r,u,a);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),fo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ja(n,yn,r),r!==f.cache&&Nu(n,[yn],a,!0),uo(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=l0(e,n,r,a);break e}else if(r!==u){u=_i(Error(s(424)),n),ao(u),n=l0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Ei(e.firstChild),Un=n,Ot=!0,Ba=null,Si=!0,a=im(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ss(),r===u){n=xa(e,n,a);break e}On(e,n,r,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ot||(a=n.type,e=n.pendingProps,r=Ql($.current).createElement(a),r[cn]=n,r[_n]=e,Pn(r,a,e),dn(r),n.stateNode=r):n.memoizedState=Mg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Ot&&(r=n.stateNode=bg(n.type,n.pendingProps,$.current),Un=n,Si=!0,u=sn,es(n.type)?(Zd=u,sn=Ei(r.firstChild)):sn=u),On(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ot&&((u=r=sn)&&(r=wb(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,Un=n,sn=Ei(r.firstChild),Si=!1,u=!0):u=!1),u||ka(n)),et(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Vd(u,f)?r=null:v!==null&&Vd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(e,n,H_,null,null,a),Lo._currentValue=u),zl(e,n),On(e,n,r,a),n.child;case 6:return e===null&&Ot&&((e=a=sn)&&(a=Cb(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,sn=null,e=!0):e=!1),e||ka(n)),null;case 13:return c0(e,n,a);case 4:return we(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Cs(n,null,r,a):On(e,n,r,a),n.child;case 11:return e0(e,n,n.type,n.pendingProps,a);case 7:return On(e,n,n.pendingProps,a),n.child;case 8:return On(e,n,n.pendingProps.children,a),n.child;case 12:return On(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ja(n,n.type,r.value),On(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Es(n),u=zn(u),r=r(u),n.flags|=1,On(e,n,r,a),n.child;case 14:return t0(e,n,n.type,n.pendingProps,a);case 15:return n0(e,n,n.type,n.pendingProps,a);case 19:return d0(e,n,a);case 31:return K_(e,n,a);case 22:return i0(e,n,a,n.pendingProps);case 24:return Es(n),r=zn(yn),e===null?(u=Uu(),u===null&&(u=tn,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ou(n),ja(n,yn,u)):((e.lanes&a)!==0&&(Pu(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ja(n,yn,r)):(r=f.cache,ja(n,yn,r),r!==u.cache&&Nu(n,[yn],a,!0))),On(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(e){e.flags|=4}function xd(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(B0())e.flags|=8192;else throw ws=_l,zu}else e.flags&=-16777217}function h0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cg(n))if(B0())e.flags|=8192;else throw ws=_l,zu}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,mr|=n)}function vo(e,n){if(!Ot)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function J_(e,n,a){var r=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),pa(yn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?va(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),rn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(va(n),f!==null?(rn(n),h0(n,f)):(rn(n),xd(n,u,null,r,a))):f?f!==e.memoizedState?(va(n),rn(n),h0(n,f)):(rn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&va(n),rn(n),xd(n,u,e,r,a)),null;case 27:if(Je(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return rn(n),null}e=me.current,nr(n)?Wp(n):(e=bg(u,r,a),n.stateNode=e,va(n))}return rn(n),null;case 5:if(Je(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return rn(n),null}if(f=me.current,nr(n))Wp(n);else{var v=Ql($.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[cn]=n,f[_n]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Pn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&va(n)}}return rn(n),xd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=$.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Un,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||cg(e.nodeValue,a)),e||ka(n,!0)}else e=Ql(e).createTextNode(r),e[cn]=n,n.stateNode=e}return rn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=nr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),e=!1}else a=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return rn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),u=!1}else u=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),rn(n),null);case 4:return Ve(),e===null&&Bd(n.stateNode.containerInfo),rn(n),null;case 10:return pa(n.type),rn(n),null;case 19:if(V(gn),r=n.memoizedState,r===null)return rn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)vo(r,!1);else{if(hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,vo(r,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jp(a,e),a=a.sibling;return k(gn,gn.current&1|2),Ot&&fa(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Ue()>jl&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),vo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ot)return rn(n),null}else 2*Ue()-r.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ue(),e.sibling=null,a=gn.current,k(gn,u?a&1|2:a&1),Ot&&fa(n,r.treeForkCount),e):(rn(n),null);case 22:case 23:return ui(n),ku(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&V(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(yn),rn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $_(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pa(yn),Ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(gn),null;case 4:return Ve(),null;case 10:return pa(n.type),null;case 22:case 23:return ui(n),ku(),e!==null&&V(Ts),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return pa(yn),null;case 25:return null;default:return null}}function p0(e,n){switch(Tu(n),n.tag){case 3:pa(yn),Ve();break;case 26:case 27:case 5:Je(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:V(gn);break;case 10:pa(n.type);break;case 22:case 23:ui(n),ku(),e!==null&&V(Ts);break;case 24:pa(yn)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(C){Yt(n,n.return,C)}}function qa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var G=a,ce=C;try{ce()}catch(Me){Yt(u,G,Me)}}}r=r.next}while(r!==f)}}catch(Me){Yt(n,n.return,Me)}}function m0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(r){Yt(e,e.return,r)}}}function g0(e,n,a){a.props=Ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Yt(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Yt(e,n,u)}}function Qi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Yt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Yt(e,n,u)}else a.current=null}function x0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Yt(e,e.return,u)}}function vd(e,n,a){try{var r=e.stateNode;yb(r,e.type,a,n),r[_n]=n}catch(u){Yt(e,e.return,u)}}function v0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bd(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca));else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bd(e,n,a),e=e.sibling;e!==null;)bd(e,n,a),e=e.sibling}function Il(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function _0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,r,a),n[cn]=e,n[_n]=a}catch(f){Yt(e,e.return,f)}}var _a=!1,En=!1,yd=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function eb(e,n){if(e=e.containerInfo,Hd=ac,e=Lp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,G=-1,ce=0,Me=0,Ce=e,fe=null;t:for(;;){for(var ve;Ce!==a||u!==0&&Ce.nodeType!==3||(C=v+u),Ce!==f||r!==0&&Ce.nodeType!==3||(G=v+r),Ce.nodeType===3&&(v+=Ce.nodeValue.length),(ve=Ce.firstChild)!==null;)fe=Ce,Ce=ve;for(;;){if(Ce===e)break t;if(fe===a&&++ce===u&&(C=v),fe===f&&++Me===r&&(G=v),(ve=Ce.nextSibling)!==null)break;Ce=fe,fe=Ce.parentNode}Ce=ve}a=C===-1||G===-1?null:{start:C,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gd={focusedElem:e,selectionRange:a},ac=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Qe=Ns(a.type,u);e=r.getSnapshotBeforeUpdate(Qe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ut){Yt(a,a.return,ut)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function y0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),r&4&&_o(5,a);break;case 1:if(ya(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Yt(a,a.return,v)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Yt(a,a.return,v)}}r&64&&m0(a),r&512&&bo(a,a.return);break;case 3:if(ya(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(v){Yt(a,a.return,v)}}break;case 27:n===null&&r&4&&_0(a);case 26:case 5:ya(e,a),n===null&&r&4&&x0(a),r&512&&bo(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),r&4&&E0(e,a);break;case 13:ya(e,a),r&4&&T0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cb.bind(null,a),Rb(e,a))));break;case 22:if(r=a.memoizedState!==null||_a,!r){n=n!==null&&n.memoizedState!==null||En,u=_a;var f=En;_a=r,(En=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),_a=u,En=f}break;case 30:break;default:ya(e,a)}}function S0(e){var n=e.alternate;n!==null&&(e.alternate=null,S0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ui(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,Kn=!1;function ba(e,n,a){for(a=a.child;a!==null;)M0(e,n,a),a=a.sibling}function M0(e,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:En||Qi(a,n),ba(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:En||Qi(a,n);var r=ln,u=Kn;es(a.type)&&(ln=a.stateNode,Kn=!1),ba(e,n,a),Ro(a.stateNode),ln=r,Kn=u;break;case 5:En||Qi(a,n);case 6:if(r=ln,u=Kn,ln=null,ba(e,n,a),ln=r,Kn=u,ln!==null)if(Kn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){Yt(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){Yt(a,n,f)}break;case 18:ln!==null&&(Kn?(e=ln,mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):mg(ln,a.stateNode));break;case 4:r=ln,u=Kn,ln=a.stateNode.containerInfo,Kn=!0,ba(e,n,a),ln=r,Kn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),En||qa(4,a,n),ba(e,n,a);break;case 1:En||(Qi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&g0(a,n,r)),ba(e,n,a);break;case 21:ba(e,n,a);break;case 22:En=(r=En)||a.memoizedState!==null,ba(e,n,a),En=r;break;default:ba(e,n,a)}}function E0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){Yt(n,n.return,a)}}}function T0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){Yt(n,n.return,a)}}function tb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new b0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new b0),n;default:throw Error(s(435,e.tag))}}function Fl(e,n){var a=tb(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=ub.bind(null,e,r);r.then(u,u)}})}function Qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(es(C.type)){ln=C.stateNode,Kn=!1;break e}break;case 5:ln=C.stateNode,Kn=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,Kn=!0;break e}C=C.return}if(ln===null)throw Error(s(160));M0(f,v,u),ln=null,Kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)A0(n,e),n=n.sibling}var Ii=null;function A0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),r&4&&(qa(3,e,e.return),_o(3,e),qa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),r&512&&(En||a===null||Qi(a,a.return)),r&64&&_a&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ii;if(Qn(n,e),Jn(e),r&512&&(En||a===null||Qi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Xn]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Pn(f,r,a),f[cn]=e,dn(f),r=f;break e;case"link":var v=Ag("link","href",u).get(r+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(r),Pn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=Ag("meta","content",u).get(r+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(r),Pn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=e,dn(f),r=f}e.stateNode=r}else wg(u,e.type,e.stateNode);else e.stateNode=Tg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?wg(u,e.type,e.stateNode):Tg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&vd(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,e),Jn(e),r&512&&(En||a===null||Qi(a,a.return)),a!==null&&r&4&&vd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),r&512&&(En||a===null||Qi(a,a.return)),e.flags&32){u=e.stateNode;try{ct(u,"")}catch(Qe){Yt(e,e.return,Qe)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,vd(e,u,a!==null?a.memoizedProps:u)),r&1024&&(yd=!0);break;case 6:if(Qn(n,e),Jn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Qe){Yt(e,e.return,Qe)}}break;case 3:if(ec=null,u=Ii,Ii=Jl(n.containerInfo),Qn(n,e),Ii=u,Jn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Qe){Yt(e,e.return,Qe)}yd&&(yd=!1,w0(e));break;case 4:r=Ii,Ii=Jl(e.stateNode.containerInfo),Qn(n,e),Jn(e),Ii=r;break;case 12:Qn(n,e),Jn(e);break;case 31:Qn(n,e),Jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=Ue()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ce=_a,Me=En;if(_a=ce||u,En=Me||G,Qn(n,e),En=Me,_a=ce,Jn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||_a||En||Ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=G.stateNode;var Ce=G.memoizedProps.style,fe=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Qe){Yt(G,G.return,Qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qe){Yt(G,G.return,Qe)}}}else if(n.tag===18){if(a===null){G=n;try{var ve=G.stateNode;u?gg(ve,!0):gg(G.stateNode,!1)}catch(Qe){Yt(G,G.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Fl(e,a))));break;case 19:Qn(n,e),Jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(v0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_d(e);Il(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ct(v,""),a.flags&=-33);var C=_d(e);Il(e,C,v);break;case 3:case 4:var G=a.stateNode.containerInfo,ce=_d(e);bd(e,ce,G);break;default:throw Error(s(161))}}catch(Me){Yt(e,e.return,Me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(e,n.alternate,n),n=n.sibling}function Ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ds(n);break;case 1:Qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&g0(n,n.return,a),Ds(n);break;case 27:Ro(n.stateNode);case 26:case 5:Qi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),_o(4,f);break;case 1:if(Sa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Yt(r,r.return,ce)}if(r=f,u=r.updateQueue,u!==null){var C=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)am(G[u],C)}catch(ce){Yt(r,r.return,ce)}}a&&v&64&&m0(f),bo(f,f.return);break;case 27:_0(f);case 26:case 5:Sa(u,f,a),a&&r===null&&v&4&&x0(f),bo(f,f.return);break;case 12:Sa(u,f,a);break;case 31:Sa(u,f,a),a&&v&4&&E0(u,f);break;case 13:Sa(u,f,a),a&&v&4&&T0(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),bo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function Sd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Fi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)C0(e,n,a,r),n=n.sibling}function C0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(e,n,a,r),u&2048&&_o(9,n);break;case 1:Fi(e,n,a,r);break;case 3:Fi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Fi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Yt(n,n.return,G)}}else Fi(e,n,a,r);break;case 31:Fi(e,n,a,r);break;case 13:Fi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Fi(e,n,a,r):yo(e,n):f._visibility&2?Fi(e,n,a,r):(f._visibility|=2,fr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sd(v,n);break;case 24:Fi(e,n,a,r),u&2048&&Md(n.alternate,n);break;default:Fi(e,n,a,r)}}function fr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,C=a,G=r,ce=v.flags;switch(v.tag){case 0:case 11:case 15:fr(f,v,C,G,u),_o(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?fr(f,v,C,G,u):yo(f,v):(Me._visibility|=2,fr(f,v,C,G,u)),u&&ce&2048&&Sd(v.alternate,v);break;case 24:fr(f,v,C,G,u),u&&ce&2048&&Md(v.alternate,v);break;default:fr(f,v,C,G,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&Sd(r.alternate,r);break;case 24:yo(a,r),u&2048&&Md(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var So=8192;function hr(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)R0(e,n,a),e=e.sibling}function R0(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&So&&e.memoizedState!==null&&jb(a,Ii,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var r=Ii;Ii=Jl(e.stateNode.containerInfo),hr(e,n,a),Ii=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,hr(e,n,a),So=r):hr(e,n,a));break;default:hr(e,n,a)}}function N0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,L0(r,e)}N0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)D0(e),e=e.sibling}function D0(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):Mo(e);break;default:Mo(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,L0(r,e)}N0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function L0(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:so(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Nn=r;else e:for(a=e;Nn!==null;){r=Nn;var u=r.sibling,f=r.return;if(S0(r),r===a){Nn=null;break e}if(u!==null){u.return=f,Nn=u;break e}Nn=f}}}var nb={getCacheForType:function(e){var n=zn(yn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(yn).controller.signal}},ib=typeof WeakMap=="function"?WeakMap:Map,Vt=0,tn=null,Dt=null,Ut=0,qt=0,di=null,Ya=!1,pr=!1,Ed=!1,Ma=0,hn=0,Za=0,Ls=0,Td=0,fi=0,mr=0,Eo=null,$n=null,Ad=!1,kl=0,U0=0,jl=1/0,Hl=null,Ka=null,wn=0,Qa=null,gr=null,Ea=0,wd=0,Cd=null,z0=null,To=0,Rd=null;function hi(){return(Vt&2)!==0&&Ut!==0?Ut&-Ut:z.T!==null?Od():ri()}function O0(){if(fi===0)if((Ut&536870912)===0||Ot){var e=St;St<<=1,(St&3932160)===0&&(St=262144),fi=e}else fi=536870912;return e=ci.current,e!==null&&(e.flags|=32),fi}function ei(e,n,a){(e===tn&&(qt===2||qt===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Ja(e,Ut,fi,!1)),ot(e,a),((Vt&2)===0||e!==tn)&&(e===tn&&((Vt&2)===0&&(Ls|=a),hn===4&&Ja(e,Ut,fi,!1)),Ji(e))}function P0(e,n,a){if((Vt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xe(e,n),u=r?rb(e,n):Dd(e,n,!0),f=r;do{if(u===0){pr&&!r&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ab(a)){u=Dd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=e;u=Eo;var G=C.current.memoizedState.isDehydrated;if(G&&(xr(C,v).flags|=256),v=Dd(C,v,!1),v!==2){if(Ed&&!G){C.errorRecoveryDisabledLanes|=f,Ls|=f,u=4;break e}f=$n,$n=u,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){xr(e,0),Ja(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(r,n,fi,!Ya);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-Ue(),10<u)){if(Ja(r,n,fi,!Ya),Se(r,0,!0)!==0)break e;Ea=n,r.timeoutHandle=hg(I0.bind(null,r,a,$n,Hl,Ad,n,fi,Ls,mr,Ya,f,"Throttled",-0,0),u);break e}I0(r,a,$n,Hl,Ad,n,fi,Ls,mr,Ya,f,null,-0,0)}}break}while(!0);Ji(e)}function I0(e,n,a,r,u,f,v,C,G,ce,Me,Ce,fe,ve){if(e.timeoutHandle=-1,Ce=n.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},R0(n,f,Ce);var Qe=(f&62914560)===f?kl-Ue():(f&4194048)===f?U0-Ue():0;if(Qe=Hb(Ce,Qe),Qe!==null){Ea=f,e.cancelPendingCommit=Qe(X0.bind(null,e,n,f,a,r,u,v,C,G,Me,Ce,null,fe,ve)),Ja(e,f,v,!ce);return}}X0(e,n,f,a,r,u,v,C,G)}function ab(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!oi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,r){n&=~Td,n&=~Ls,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-He(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Bt(e,a,n)}function Gl(){return(Vt&6)===0?(Ao(0),!1):!0}function Nd(){if(Dt!==null){if(qt===0)var e=Dt.return;else e=Dt,ha=Ms=null,Wu(e),or=null,oo=0,e=Dt;for(;e!==null;)p0(e.alternate,e),e=e.return;Dt=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Eb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Nd(),tn=e,Dt=a=da(e.current,null),Ut=n,qt=0,di=null,Ya=!1,pr=Xe(e,n),Ed=!1,mr=fi=Td=Ls=Za=hn=0,$n=Eo=null,Ad=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-He(r),f=1<<u;n|=e[u],r&=~f}return Ma=n,ul(),a}function F0(e,n){Mt=null,z.H=go,n===rr||n===vl?(n=em(),qt=3):n===zu?(n=em(),qt=4):qt=n===ld?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Dt===null&&(hn=1,Ll(e,_i(n,e.current)))}function B0(){var e=ci.current;return e===null?!0:(Ut&4194048)===Ut?Mi===null:(Ut&62914560)===Ut||(Ut&536870912)!==0?e===Mi:!1}function k0(){var e=z.H;return z.H=go,e===null?go:e}function j0(){var e=z.A;return z.A=nb,e}function Vl(){hn=4,Ya||(Ut&4194048)!==Ut&&ci.current!==null||(pr=!0),(Za&134217727)===0&&(Ls&134217727)===0||tn===null||Ja(tn,Ut,fi,!1)}function Dd(e,n,a){var r=Vt;Vt|=2;var u=k0(),f=j0();(tn!==e||Ut!==n)&&(Hl=null,xr(e,n)),n=!1;var v=hn;e:do try{if(qt!==0&&Dt!==null){var C=Dt,G=di;switch(qt){case 8:Nd(),v=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ce=qt;if(qt=0,di=null,vr(e,C,G,ce),a&&pr){v=0;break e}break;default:ce=qt,qt=0,di=null,vr(e,C,G,ce)}}sb(),v=hn;break}catch(Me){F0(e,Me)}while(!0);return n&&e.shellSuspendCounter++,ha=Ms=null,Vt=r,z.H=u,z.A=f,Dt===null&&(tn=null,Ut=0,ul()),v}function sb(){for(;Dt!==null;)H0(Dt)}function rb(e,n){var a=Vt;Vt|=2;var r=k0(),u=j0();tn!==e||Ut!==n?(Hl=null,jl=Ue()+500,xr(e,n)):pr=Xe(e,n);e:do try{if(qt!==0&&Dt!==null){n=Dt;var f=di;t:switch(qt){case 1:qt=0,di=null,vr(e,n,f,1);break;case 2:case 9:if(Jp(f)){qt=0,di=null,G0(n);break}n=function(){qt!==2&&qt!==9||tn!==e||(qt=7),Ji(e)},f.then(n,n);break e;case 3:qt=7;break e;case 4:qt=5;break e;case 7:Jp(f)?(qt=0,di=null,G0(n)):(qt=0,di=null,vr(e,n,f,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var C=Dt;if(v?Cg(v):C.stateNode.complete){qt=0,di=null;var G=C.sibling;if(G!==null)Dt=G;else{var ce=C.return;ce!==null?(Dt=ce,Xl(ce)):Dt=null}break t}}qt=0,di=null,vr(e,n,f,5);break;case 6:qt=0,di=null,vr(e,n,f,6);break;case 8:Nd(),hn=6;break e;default:throw Error(s(462))}}ob();break}catch(Me){F0(e,Me)}while(!0);return ha=Ms=null,z.H=r,z.A=u,Vt=a,Dt!==null?0:(tn=null,Ut=0,ul(),hn)}function ob(){for(;Dt!==null&&!it();)H0(Dt)}function H0(e){var n=f0(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,n===null?Xl(e):Dt=n}function G0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=r0(a,n,n.pendingProps,n.type,void 0,Ut);break;case 11:n=r0(a,n,n.pendingProps,n.type.render,n.ref,Ut);break;case 5:Wu(n);default:p0(a,n),n=Dt=jp(n,Ma),n=f0(a,n,Ma)}e.memoizedProps=e.pendingProps,n===null?Xl(e):Dt=n}function vr(e,n,a,r){ha=Ms=null,Wu(n),or=null,oo=0;var u=n.return;try{if(Z_(e,u,n,a,Ut)){hn=1,Ll(e,_i(a,e.current)),Dt=null;return}}catch(f){if(u!==null)throw Dt=u,f;hn=1,Ll(e,_i(a,e.current)),Dt=null;return}n.flags&32768?(Ot||r===1?e=!0:pr||(Ut&536870912)!==0?e=!1:(Ya=e=!0,(r===2||r===9||r===3||r===6)&&(r=ci.current,r!==null&&r.tag===13&&(r.flags|=16384))),V0(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){V0(n,Ya);return}e=n.return;var a=J_(n.alternate,n,Ma);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=e}while(n!==null);hn===0&&(hn=5)}function V0(e,n){do{var a=$_(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);hn=6,Dt=null}function X0(e,n,a,r,u,f,v,C,G){e.cancelPendingCommit=null;do Wl();while(wn!==0);if((Vt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=_u,nn(e,a,f,v,C,G),e===tn&&(Dt=tn=null,Ut=0),gr=n,Qa=e,Ea=a,wd=f,Cd=u,z0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,db(ee,function(){return K0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=j.p,j.p=2,v=Vt,Vt|=4;try{eb(e,n,a)}finally{Vt=v,j.p=u,z.T=r}}wn=1,W0(),q0(),Y0()}}function W0(){if(wn===1){wn=0;var e=Qa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=j.p;j.p=2;var u=Vt;Vt|=4;try{A0(n,e);var f=Gd,v=Lp(e.containerInfo),C=f.focusedElem,G=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&Dp(C.ownerDocument.documentElement,C)){if(G!==null&&pu(C)){var ce=G.start,Me=G.end;if(Me===void 0&&(Me=ce),"selectionStart"in C)C.selectionStart=ce,C.selectionEnd=Math.min(Me,C.value.length);else{var Ce=C.ownerDocument||document,fe=Ce&&Ce.defaultView||window;if(fe.getSelection){var ve=fe.getSelection(),Qe=C.textContent.length,ut=Math.min(G.start,Qe),$t=G.end===void 0?ut:Math.min(G.end,Qe);!ve.extend&&ut>$t&&(v=$t,$t=ut,ut=v);var te=Np(C,ut),Y=Np(C,$t);if(te&&Y&&(ve.rangeCount!==1||ve.anchorNode!==te.node||ve.anchorOffset!==te.offset||ve.focusNode!==Y.node||ve.focusOffset!==Y.offset)){var oe=Ce.createRange();oe.setStart(te.node,te.offset),ve.removeAllRanges(),ut>$t?(ve.addRange(oe),ve.extend(Y.node,Y.offset)):(oe.setEnd(Y.node,Y.offset),ve.addRange(oe))}}}}for(Ce=[],ve=C;ve=ve.parentNode;)ve.nodeType===1&&Ce.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ce.length;C++){var Ee=Ce[C];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}ac=!!Hd,Gd=Hd=null}finally{Vt=u,j.p=r,z.T=a}}e.current=n,wn=2}}function q0(){if(wn===2){wn=0;var e=Qa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=j.p;j.p=2;var u=Vt;Vt|=4;try{y0(e,n.alternate,n)}finally{Vt=u,j.p=r,z.T=a}}wn=3}}function Y0(){if(wn===4||wn===3){wn=0,st();var e=Qa,n=gr,a=Ea,r=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,gr=Qa=null,Z0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),oa(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(xe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=j.p,j.p=2,z.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var C=r[v];f(C.value,{componentStack:C.stack})}}finally{z.T=n,j.p=u}}(Ea&3)!==0&&Wl(),Ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Rd?To++:(To=0,Rd=e):To=0,Ao(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function Wl(){return W0(),q0(),Y0(),K0()}function K0(){if(wn!==5)return!1;var e=Qa,n=wd;wd=0;var a=oa(Ea),r=z.T,u=j.p;try{j.p=32>a?32:a,z.T=null,a=Cd,Cd=null;var f=Qa,v=Ea;if(wn=0,gr=Qa=null,Ea=0,(Vt&6)!==0)throw Error(s(331));var C=Vt;if(Vt|=4,D0(f.current),C0(f,f.current,v,a),Vt=C,Ao(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(xe,f)}catch{}return!0}finally{j.p=u,z.T=r,Z0(e,n)}}function Q0(e,n,a){n=_i(a,n),n=od(e.stateNode,n,2),e=Va(e,n,2),e!==null&&(ot(e,2),Ji(e))}function Yt(e,n,a){if(e.tag===3)Q0(e,e,a);else for(;n!==null;){if(n.tag===3){Q0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){e=_i(a,e),a=Jm(2),r=Va(n,a,2),r!==null&&($m(a,r,n,e),ot(r,2),Ji(r));break}}n=n.return}}function Ld(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new ib;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Ed=!0,u.add(a),e=lb.bind(null,e,n,a),n.then(e,e))}function lb(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Ut&a)===a&&(hn===4||hn===3&&(Ut&62914560)===Ut&&300>Ue()-kl?(Vt&2)===0&&xr(e,0):Td|=a,mr===Ut&&(mr=0)),Ji(e)}function J0(e,n){n===0&&(n=Ne()),e=bs(e,n),e!==null&&(ot(e,n),Ji(e))}function cb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),J0(e,a)}function ub(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),J0(e,a)}function db(e,n){return Q(e,n)}var ql=null,_r=null,Ud=!1,Yl=!1,zd=!1,$a=0;function Ji(e){e!==_r&&e.next===null&&(_r===null?ql=_r=e:_r=_r.next=e),Yl=!0,Ud||(Ud=!0,hb())}function Ao(e,n){if(!zd&&Yl){zd=!0;do for(var a=!1,r=ql;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-He(42|e)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(r,f))}else f=Ut,f=Se(r,r===tn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Xe(r,f)||(a=!0,ng(r,f));r=r.next}while(a);zd=!1}}function fb(){$0()}function $0(){Yl=Ud=!1;var e=0;$a!==0&&Mb()&&(e=$a);for(var n=Ue(),a=null,r=ql;r!==null;){var u=r.next,f=eg(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(_r=a)):(a=r,(e!==0||(f&3)!==0)&&(Yl=!0)),r=u}wn!==0&&wn!==5||Ao(e),$a!==0&&($a=0)}function eg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-He(f),C=1<<v,G=u[v];G===-1?((C&a)===0||(C&r)!==0)&&(u[v]=je(C,n)):G<=n&&(e.expiredLanes|=C),f&=~C}if(n=tn,a=Ut,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(qt===2||qt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ze(r),oa(a)){case 2:case 8:a=E;break;case 32:a=ee;break;case 268435456:a=Re;break;default:a=ee}return r=tg.bind(null,e),a=Q(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function tg(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var r=Ut;return r=Se(e,e===tn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(P0(e,r,n),eg(e,Ue()),e.callbackNode!=null&&e.callbackNode===a?tg.bind(null,e):null)}function ng(e,n){if(Wl())return null;P0(e,n,!0)}function hb(){Tb(function(){(Vt&6)!==0?Q(R,fb):$0()})}function Od(){if($a===0){var e=ar;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),$a=e}return $a}function ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gs(""+e)}function ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function pb(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=ig((u[_n]||null).action),v=r.submitter;v&&(n=(n=v[_n]||null)?ig(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new rl("action","action",null,r,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var G=v?ag(u,v):new FormData(u);td(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(C.preventDefault(),G=v?ag(u,v):new FormData(u),td(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Pd=0;Pd<vu.length;Pd++){var Id=vu[Pd],mb=Id.toLowerCase(),gb=Id[0].toUpperCase()+Id.slice(1);Pi(mb,"on"+gb)}Pi(Op,"onAnimationEnd"),Pi(Pp,"onAnimationIteration"),Pi(Ip,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(L_,"onTransitionRun"),Pi(U_,"onTransitionStart"),Pi(z_,"onTransitionCancel"),Pi(Fp,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function sg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var C=r[v],G=C.instance,ce=C.currentTarget;if(C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){cl(Me)}u.currentTarget=null,f=G}else for(v=0;v<r.length;v++){if(C=r[v],G=C.instance,ce=C.currentTarget,C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){cl(Me)}u.currentTarget=null,f=G}}}}function Lt(e,n){var a=n[pn];a===void 0&&(a=n[pn]=new Set);var r=e+"__bubble";a.has(r)||(rg(n,e,2,!1),a.add(r))}function Fd(e,n,a){var r=0;n&&(r|=4),rg(a,e,r,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[Zl]){e[Zl]=!0,qr.forEach(function(a){a!=="selectionchange"&&(xb.has(a)||Fd(a,!1,e),Fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Fd("selectionchange",!1,n))}}function rg(e,n,a,r){switch(Og(n)){case 2:var u=Xb;break;case 8:u=Wb;break;default:u=ef}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kd(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var C=r.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=r.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=zi(C),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){r=f=v;continue e}C=C.parentNode}}r=r.return}dp(function(){var ce=f,Me=iu(a),Ce=[];e:{var fe=Bp.get(e);if(fe!==void 0){var ve=rl,Qe=e;switch(e){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":ve=u_;break;case"focusin":Qe="focus",ve=cu;break;case"focusout":Qe="blur",ve=cu;break;case"beforeblur":case"afterblur":ve=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=h_;break;case Op:case Pp:case Ip:ve=t_;break;case Fp:ve=m_;break;case"scroll":case"scrollend":ve=Kv;break;case"wheel":ve=x_;break;case"copy":case"cut":case"paste":ve=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=gp;break;case"toggle":case"beforetoggle":ve=__}var ut=(n&4)!==0,$t=!ut&&(e==="scroll"||e==="scrollend"),te=ut?fe!==null?fe+"Capture":null:fe;ut=[];for(var Y=ce,oe;Y!==null;){var Ee=Y;if(oe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||oe===null||te===null||(Ee=Yr(Y,te),Ee!=null&&ut.push(Co(Y,Ee,oe))),$t)break;Y=Y.return}0<ut.length&&(fe=new ve(fe,Qe,null,a,Me),Ce.push({event:fe,listeners:ut}))}}if((n&7)===0){e:{if(fe=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",fe&&a!==nu&&(Qe=a.relatedTarget||a.fromElement)&&(zi(Qe)||Qe[gi]))break e;if((ve||fe)&&(fe=Me.window===Me?Me:(fe=Me.ownerDocument)?fe.defaultView||fe.parentWindow:window,ve?(Qe=a.relatedTarget||a.toElement,ve=ce,Qe=Qe?zi(Qe):null,Qe!==null&&($t=c(Qe),ut=Qe.tag,Qe!==$t||ut!==5&&ut!==27&&ut!==6)&&(Qe=null)):(ve=null,Qe=ce),ve!==Qe)){if(ut=pp,Ee="onMouseLeave",te="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(ut=gp,Ee="onPointerLeave",te="onPointerEnter",Y="pointer"),$t=ve==null?fe:Wi(ve),oe=Qe==null?fe:Wi(Qe),fe=new ut(Ee,Y+"leave",ve,a,Me),fe.target=$t,fe.relatedTarget=oe,Ee=null,zi(Me)===ce&&(ut=new ut(te,Y+"enter",Qe,a,Me),ut.target=oe,ut.relatedTarget=$t,Ee=ut),$t=Ee,ve&&Qe)t:{for(ut=vb,te=ve,Y=Qe,oe=0,Ee=te;Ee;Ee=ut(Ee))oe++;Ee=0;for(var at=Y;at;at=ut(at))Ee++;for(;0<oe-Ee;)te=ut(te),oe--;for(;0<Ee-oe;)Y=ut(Y),Ee--;for(;oe--;){if(te===Y||Y!==null&&te===Y.alternate){ut=te;break t}te=ut(te),Y=ut(Y)}ut=null}else ut=null;ve!==null&&og(Ce,fe,ve,ut,!1),Qe!==null&&$t!==null&&og(Ce,$t,Qe,ut,!0)}}e:{if(fe=ce?Wi(ce):window,ve=fe.nodeName&&fe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&fe.type==="file")var Ht=Ep;else if(Sp(fe))if(Tp)Ht=R_;else{Ht=w_;var $e=A_}else ve=fe.nodeName,!ve||ve.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ce&&Xt(ce.elementType)&&(Ht=Ep):Ht=C_;if(Ht&&(Ht=Ht(e,ce))){Mp(Ce,Ht,a,Me);break e}$e&&$e(e,fe,ce),e==="focusout"&&ce&&fe.type==="number"&&ce.memoizedProps.value!=null&&xt(fe,"number",fe.value)}switch($e=ce?Wi(ce):window,e){case"focusin":(Sp($e)||$e.contentEditable==="true")&&(Ks=$e,mu=ce,no=null);break;case"focusout":no=mu=Ks=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Up(Ce,a,Me);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":Up(Ce,a,Me)}var Tt;if(du)e:{switch(e){case"compositionstart":var zt="onCompositionStart";break e;case"compositionend":zt="onCompositionEnd";break e;case"compositionupdate":zt="onCompositionUpdate";break e}zt=void 0}else Zs?bp(e,a)&&(zt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(zt="onCompositionStart");zt&&(xp&&a.locale!=="ko"&&(Zs||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Zs&&(Tt=fp()):(Ia=Me,ru="value"in Ia?Ia.value:Ia.textContent,Zs=!0)),$e=Kl(ce,zt),0<$e.length&&(zt=new mp(zt,e,null,a,Me),Ce.push({event:zt,listeners:$e}),Tt?zt.data=Tt:(Tt=yp(a),Tt!==null&&(zt.data=Tt)))),(Tt=y_?S_(e,a):M_(e,a))&&(zt=Kl(ce,"onBeforeInput"),0<zt.length&&($e=new mp("onBeforeInput","beforeinput",null,a,Me),Ce.push({event:$e,listeners:zt}),$e.data=Tt)),pb(Ce,e,ce,a,Me)}sg(Ce,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(Co(e,u,f)),u=Yr(e,n),u!=null&&r.push(Co(e,u,f))),e.tag===3)return r;e=e.return}return[]}function vb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function og(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var C=a,G=C.alternate,ce=C.stateNode;if(C=C.tag,G!==null&&G===r)break;C!==5&&C!==26&&C!==27||ce===null||(G=ce,u?(ce=Yr(a,f),ce!=null&&v.unshift(Co(a,ce,G))):u||(ce=Yr(a,f),ce!=null&&v.push(Co(a,ce,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var _b=/\r\n?/g,bb=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(_b,`
`).replace(bb,"")}function cg(e,n){return n=lg(n),lg(e)===n}function Jt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ct(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ct(e,""+r);break;case"className":De(e,"class",r);break;case"tabIndex":De(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":De(e,a,r);break;case"style":Oi(e,r,f);break;case"data":if(n!=="object"){De(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=gs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Jt(e,n,"name",u.name,u,null),Jt(e,n,"formEncType",u.formEncType,u,null),Jt(e,n,"formMethod",u.formMethod,u,null),Jt(e,n,"formTarget",u.formTarget,u,null)):(Jt(e,n,"encType",u.encType,u,null),Jt(e,n,"method",u.method,u,null),Jt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=gs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ca);break;case"onScroll":r!=null&&Lt("scroll",e);break;case"onScrollEnd":r!=null&&Lt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=gs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Lt("beforetoggle",e),Lt("toggle",e),be(e,"popover",r);break;case"xlinkActuate":Ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ge(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ge(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ge(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ge(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":be(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yi.get(a)||a,be(e,a,r))}}function jd(e,n,a,r,u,f){switch(a){case"style":Oi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?ct(e,r):(typeof r=="number"||typeof r=="bigint")&&ct(e,""+r);break;case"onScroll":r!=null&&Lt("scroll",e);break;case"onScrollEnd":r!=null&&Lt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):be(e,a,r)}}}function Pn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",e),Lt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(e,n,f,v,a,null)}}u&&Jt(e,n,"srcSet",a.srcSet,a,null),r&&Jt(e,n,"src",a.src,a,null);return;case"input":Lt("invalid",e);var C=f=v=u=null,G=null,ce=null;for(r in a)if(a.hasOwnProperty(r)){var Me=a[r];if(Me!=null)switch(r){case"name":u=Me;break;case"type":v=Me;break;case"checked":G=Me;break;case"defaultChecked":ce=Me;break;case"value":f=Me;break;case"defaultValue":C=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(s(137,n));break;default:Jt(e,n,r,Me,a,null)}}bn(e,f,C,G,ce,v,u,!1);return;case"select":Lt("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":r=C;default:Jt(e,n,u,C,a,null)}n=f,a=v,e.multiple=!!r,n!=null?mn(e,!!r,n,!1):a!=null&&mn(e,!!r,a,!0);return;case"textarea":Lt("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":r=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Jt(e,n,v,C,a,null)}xi(e,r,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Jt(e,n,G,r,a,null)}return;case"dialog":Lt("beforetoggle",e),Lt("toggle",e),Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":Lt("load",e);break;case"video":case"audio":for(r=0;r<wo.length;r++)Lt(wo[r],e);break;case"image":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"embed":case"source":case"link":Lt("error",e),Lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in a)if(a.hasOwnProperty(ce)&&(r=a[ce],r!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Jt(e,n,ce,r,a,null)}return;default:if(Xt(n)){for(Me in a)a.hasOwnProperty(Me)&&(r=a[Me],r!==void 0&&jd(e,n,Me,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Jt(e,n,C,r,a,null))}function yb(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,G=null,ce=null,Me=null;for(ve in a){var Ce=a[ve];if(a.hasOwnProperty(ve)&&Ce!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":G=Ce;default:r.hasOwnProperty(ve)||Jt(e,n,ve,null,r,Ce)}}for(var fe in r){var ve=r[fe];if(Ce=a[fe],r.hasOwnProperty(fe)&&(ve!=null||Ce!=null))switch(fe){case"type":f=ve;break;case"name":u=ve;break;case"checked":ce=ve;break;case"defaultChecked":Me=ve;break;case"value":v=ve;break;case"defaultValue":C=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:ve!==Ce&&Jt(e,n,fe,ve,r,Ce)}}We(e,v,C,G,ce,Me,f,u);return;case"select":ve=v=C=fe=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ve=G;default:r.hasOwnProperty(f)||Jt(e,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":fe=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==G&&Jt(e,n,u,f,r,G)}n=C,a=v,r=ve,fe!=null?mn(e,!!a,fe,!1):!!r!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":ve=fe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Jt(e,n,C,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":fe=u;break;case"defaultValue":ve=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Jt(e,n,v,u,r,f)}Fn(e,fe,ve);return;case"option":for(var Qe in a)if(fe=a[Qe],a.hasOwnProperty(Qe)&&fe!=null&&!r.hasOwnProperty(Qe))switch(Qe){case"selected":e.selected=!1;break;default:Jt(e,n,Qe,null,r,fe)}for(G in r)if(fe=r[G],ve=a[G],r.hasOwnProperty(G)&&fe!==ve&&(fe!=null||ve!=null))switch(G){case"selected":e.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Jt(e,n,G,fe,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in a)fe=a[ut],a.hasOwnProperty(ut)&&fe!=null&&!r.hasOwnProperty(ut)&&Jt(e,n,ut,null,r,fe);for(ce in r)if(fe=r[ce],ve=a[ce],r.hasOwnProperty(ce)&&fe!==ve&&(fe!=null||ve!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Jt(e,n,ce,fe,r,ve)}return;default:if(Xt(n)){for(var $t in a)fe=a[$t],a.hasOwnProperty($t)&&fe!==void 0&&!r.hasOwnProperty($t)&&jd(e,n,$t,void 0,r,fe);for(Me in r)fe=r[Me],ve=a[Me],!r.hasOwnProperty(Me)||fe===ve||fe===void 0&&ve===void 0||jd(e,n,Me,fe,r,ve);return}}for(var te in a)fe=a[te],a.hasOwnProperty(te)&&fe!=null&&!r.hasOwnProperty(te)&&Jt(e,n,te,null,r,fe);for(Ce in r)fe=r[Ce],ve=a[Ce],!r.hasOwnProperty(Ce)||fe===ve||fe==null&&ve==null||Jt(e,n,Ce,fe,r,ve)}function ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&ug(v)){for(v=0,C=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],ce=G.startTime;if(ce>C)break;var Me=G.transferSize,Ce=G.initiatorType;Me&&ug(Ce)&&(G=G.responseEnd,v+=Me*(G<C?1:(C-ce)/(G-ce)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hd=null,Gd=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xd=null;function Mb(){var e=window.event;return e&&e.type==="popstate"?e===Xd?!1:(Xd=e,!0):(Xd=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(e){return pg.resolve(null).then(e).catch(Ab)}:hg;function Ab(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function mg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Mr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[Xn]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);Mr(n)}function gg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Wd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wd(a),Ui(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wb(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Xn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Cb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$?"||e.data==="$~"}function Yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zd=null;function vg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function _g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function bg(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ui(e)}var Ti=new Map,yg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=j.d;j.d={f:Nb,r:Db,D:Lb,C:Ub,L:zb,m:Ob,X:Ib,S:Pb,M:Fb};function Nb(){var e=Ta.f(),n=Gl();return e||n}function Db(e){var n=Xi(e);n!==null&&n.tag===5&&n.type==="form"?Fm(n):Ta.r(e)}var br=typeof document>"u"?null:document;function Sg(e,n,a){var r=br;if(r&&typeof n=="string"&&n){var u=Rt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),yg.has(u)||(yg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Pn(n,"link",e),dn(n),r.head.appendChild(n)))}}function Lb(e){Ta.D(e),Sg("dns-prefetch",e,null)}function Ub(e,n){Ta.C(e,n),Sg("preconnect",e,n)}function zb(e,n,a){Ta.L(e,n,a);var r=br;if(r&&e&&n){var u='link[rel="preload"][as="'+Rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Rt(a.imageSizes)+'"]')):u+='[href="'+Rt(e)+'"]';var f=u;switch(n){case"style":f=yr(e);break;case"script":f=Sr(e)}Ti.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ti.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(No(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Pn(n,"link",e),dn(n),r.head.appendChild(n)))}}function Ob(e,n){Ta.m(e,n);var a=br;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Rt(r)+'"][href="'+Rt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!Ti.has(f)&&(e=_({rel:"modulepreload",href:e},n),Ti.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Pn(r,"link",e),dn(r),a.head.appendChild(r)}}}function Pb(e,n,a){Ta.S(e,n,a);var r=br;if(r&&e){var u=qi(r).hoistableStyles,f=yr(e);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=r.querySelector(No(f)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ti.get(f))&&Kd(e,a);var G=v=r.createElement("link");dn(G),Pn(G,"link",e),G._p=new Promise(function(ce,Me){G.onload=ce,G.onerror=Me}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,$l(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function Ib(e,n){Ta.X(e,n);var a=br;if(a&&e){var r=qi(a).hoistableScripts,u=Sr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0},n),(n=Ti.get(u))&&Qd(e,n),f=a.createElement("script"),dn(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Fb(e,n){Ta.M(e,n);var a=br;if(a&&e){var r=qi(a).hoistableScripts,u=Sr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Ti.get(u))&&Qd(e,n),f=a.createElement("script"),dn(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Mg(e,n,a,r){var u=(u=$.current)?Jl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=qi(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var f=qi(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(No(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(e,a),f||Bb(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=qi(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+Rt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Eg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Bb(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Pn(n,"link",a),dn(n),e.head.appendChild(n))}function Sr(e){return'[src="'+Rt(e)+'"]'}function Do(e){return"script[async]"+e}function Tg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),dn(r),Pn(r,"style",u),$l(r,a.precedence,e),n.instance=r;case"stylesheet":u=yr(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=Eg(a),(u=Ti.get(u))&&Kd(r,u),f=(e.ownerDocument||e).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(C,G){v.onload=C,v.onerror=G}),Pn(f,"link",r),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,dn(u),u):(r=a,(u=Ti.get(f))&&(r=_({},a),Qd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),Pn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$l(r,a.precedence,e));return n.instance}function $l(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var C=r[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ec=null;function Ag(e,n,a){if(ec===null){var r=new Map,u=ec=new Map;u.set(a,r)}else u=ec,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Xn]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var C=r.get(v);C?C.push(f):r.set(v,[f])}}return r}function wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function kb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(r.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=Eg(r),(u=Ti.get(u))&&Kd(r,u),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(C,G){v.onload=C,v.onerror=G}),Pn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jd=0;function Hb(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jd===0&&(Jd=62500*Sb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Gb,e),nc=null,tc.call(e))}function Gb(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var r=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Vb(e,n,a,r,u,f,v,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Rg(e,n,a,r,u,f,v,C,G,ce,Me,Ce){return e=new Vb(e,n,a,v,G,ce,Me,Ce,C),n=1,f===!0&&(n|=24),f=li(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ou(f),e}function Ng(e){return e?(e=$s,e):$s}function Dg(e,n,a,r,u,f){u=Ng(u),r.context===null?r.context=u:r.pendingContext=u,r=Ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Va(e,r,n),a!==null&&(ei(a,e,n),co(a,e,n))}function Lg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $d(e,n){Lg(e,n),(e=e.alternate)&&Lg(e,n)}function Ug(e){if(e.tag===13||e.tag===31){var n=bs(e,67108864);n!==null&&ei(n,e,67108864),$d(e,67108864)}}function zg(e){if(e.tag===13||e.tag===31){var n=hi();n=si(n);var a=bs(e,n);a!==null&&ei(a,e,n),$d(e,n)}}var ac=!0;function Xb(e,n,a,r){var u=z.T;z.T=null;var f=j.p;try{j.p=2,ef(e,n,a,r)}finally{j.p=f,z.T=u}}function Wb(e,n,a,r){var u=z.T;z.T=null;var f=j.p;try{j.p=8,ef(e,n,a,r)}finally{j.p=f,z.T=u}}function ef(e,n,a,r){if(ac){var u=tf(r);if(u===null)kd(e,n,r,sc,a),Pg(e,r);else if(Yb(u,e,n,a,r))r.stopPropagation();else if(Pg(e,r),n&4&&-1<qb.indexOf(e)){for(;u!==null;){var f=Xi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ze(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var G=1<<31-He(v);C.entanglements[1]|=G,v&=~G}Ji(f),(Vt&6)===0&&(jl=Ue()+500,Ao(0))}}break;case 31:case 13:C=bs(f,2),C!==null&&ei(C,f,2),Gl(),$d(f,2)}if(f=tf(r),f===null&&kd(e,n,r,sc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else kd(e,n,r,null,a)}}function tf(e){return e=iu(e),nf(e)}var sc=null;function nf(e){if(sc=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sc=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case R:return 2;case E:return 8;case ee:case ye:return 32;case Re:return 268435456;default:return 32}default:return 32}}var af=!1,ts=null,ns=null,is=null,Uo=new Map,zo=new Map,as=[],qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(e,n){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Oo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Xi(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Yb(e,n,a,r,u){switch(n){case"focusin":return ts=Oo(ts,e,n,a,r,u),!0;case"dragenter":return ns=Oo(ns,e,n,a,r,u),!0;case"mouseover":return is=Oo(is,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Oo(zo.get(f)||null,e,n,a,r,u)),!0}return!1}function Ig(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vi(e.priority,function(){zg(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Vi(e.priority,function(){zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=tf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);nu=r,a.target.dispatchEvent(r),nu=null}else return n=Xi(a),n!==null&&Ug(n),e.blockedOn=a,!1;n.shift()}return!0}function Fg(e,n,a){rc(e)&&a.delete(n)}function Zb(){af=!1,ts!==null&&rc(ts)&&(ts=null),ns!==null&&rc(ns)&&(ns=null),is!==null&&rc(is)&&(is=null),Uo.forEach(Fg),zo.forEach(Fg)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,af||(af=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Zb)))}var lc=null;function Bg(e){lc!==e&&(lc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(nf(r||a)===null)continue;break}var f=Xi(a);f!==null&&(e.splice(n,3),n-=3,td(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Mr(e){function n(G){return oc(G,e)}ts!==null&&oc(ts,e),ns!==null&&oc(ns,e),is!==null&&oc(is,e),Uo.forEach(n),zo.forEach(n);for(var a=0;a<as.length;a++){var r=as[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&as.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[_n]||null;if(typeof f=="function")v||Bg(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[_n]||null)C=v.formAction;else if(nf(u)!==null)continue}else C=v.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Bg(a)}}}function kg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sf(e){this._internalRoot=e}cc.prototype.render=sf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();Dg(a,r,e,n,null,null)},cc.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dg(e.current,2,null,e,null,null),Gl(),n[gi]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ri();e={blockedOn:null,target:e,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,e),a===0&&Ig(e)}};var jg=t.version;if(jg!=="19.2.7")throw Error(s(527,jg,"19.2.7"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Kb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{xe=uc.inject(Kb),ge=uc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Ym,f=Zm,v=Km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Rg(e,1,!1,null,null,a,r,null,u,f,v,kg),e[gi]=n.current,Bd(e),new sf(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Ym,v=Zm,C=Km,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Rg(e,1,!0,n,a??null,r,u,G,f,v,C,kg),n.context=Ng(null),a=n.current,r=hi(),r=si(r),u=Ga(r),u.callback=null,Va(a,u,r),a=r,n.current.lanes=a,ot(n,a),Ji(n),e[gi]=n.current,Bd(e),new cc(n)},Io.version="19.2.7",Io}var Qg;function ry(){if(Qg)return lf.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lf.exports=sy(),lf.exports}var oy=ry();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Jg=o=>{const t=cy(o);return t.charAt(0).toUpperCase()+t.slice(1)},ov=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),uy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Oe.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...m},g)=>Oe.createElement("svg",{ref:g,...dy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:ov("lucide",l),...!c&&!uy(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,y])=>Oe.createElement(p,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(o,t)=>{const i=Oe.forwardRef(({className:s,...l},c)=>Oe.createElement(fy,{ref:c,iconNode:t,className:ov(`lucide-${ly(Jg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Jg(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],py=gt("arrow-up",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],lv=gt("award",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xy=gt("book-open",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],$g=gt("brush",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],by=gt("calendar",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Vc=gt("check",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],My=gt("chevron-left",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ty=gt("chevron-right",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],cv=gt("clock",Ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ex=gt("compass",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ry=gt("copy",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],dc=gt("cpu",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Xh=gt("download",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Uy=gt("eraser",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Oy=gt("external-link",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Iy=gt("file-spreadsheet",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],By=gt("file-text",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],tx=gt("git-branch",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],fc=gt("github",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],ff=gt("instagram",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vy=gt("layers",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],hf=gt("linkedin",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qy=gt("mail",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Zy=gt("map-pin",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Qy=gt("maximize-2",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],$y=gt("minimize-2",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],t1=gt("network",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],nx=gt("palette",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],uv=gt("phone-call",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],s1=gt("play",a1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],o1=gt("quote",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],c1=gt("redo-2",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],d1=gt("refresh-cw",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ix=gt("rocket",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ax=gt("search",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],dv=gt("send",p1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],g1=gt("sparkle",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xo=gt("sparkles",x1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],_1=gt("terminal",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],sx=gt("trash-2",b1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],S1=gt("undo-2",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pf=gt("user",M1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],mf=gt("volume-2",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],gf=gt("volume-x",T1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],w1=gt("workflow",A1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rx=gt("x",C1),en={name:"Farhan Kabir",title:"AI Engineer | Full-Stack Developer | Specializing in Agentic Workflows & NLP | Mental Health |",tagline:"Designing deep linguistic networks to analyze cognitive states, autism indicators, and mental-health text semantics.",about:"I am an AI Engineer, Researcher, and Full Stack Developer. I build highly robust predictive AI systems, conduct quantitative linguistic analysis, and implement Stripe-polished digital experiences.",focus:"Evaluating Large Language Models for automated cognitive health screenings and zero-shot NLP behavioral diagnostic support.",projects:[{id:"typerush",title:"TypeRush",description:"An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.",category:"AI",techStack:["React 19","TailwindCSS","Web Audio API","Express","Gemini API","Firebase"],architecture:"Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.",timeline:"Sep 2024 - Mar 2025",metrics:[{label:"Audio latency",value:"0ms (Vanilla)"},{label:"Matchmaking Sync",value:"<25ms"},{label:"Frame rate",value:"60fps"}],problem:"Traditional typing practice software lacks sensory engagement and interactive mechanics.",solution:"TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.",roadmap:["Real-time payload glitch attacks","WebAssembly client-side offline dictionary sync"]},{id:"ink-home",title:"The Ink Home",description:"An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.",category:"Productivity",techStack:["React 18","Vite","Three.js","Framer Motion","TailwindCSS","Node.js"],architecture:"Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.",timeline:"Jan 2025 - Present",metrics:[{label:"Avatar fetch success",value:"100%"},{label:"RSS sync latency",value:"<320ms"},{label:"Scene frame rate",value:"60fps"}],problem:"Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.",solution:"The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.",roadmap:["WebGL spatial audio integration","Instant newsletter subscription via Substack API"]},{id:"safeside",title:"SafeSide Predictor",description:"A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.",category:"SaaS",techStack:["React","Supabase","TailwindCSS","Express","Gemini AI","Recharts"],architecture:"Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.",timeline:"Mar 2025 - Present",metrics:[{label:"Poisson model F1",value:"0.88"},{label:"Live updates latency",value:"<150ms"},{label:"Prediction checks",value:"Automated"}],problem:"Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.",solution:"SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.",roadmap:["Weather-impact modeling via OpenWeather API","Multi-league Poisson distribution charts"]},{id:"emotion-detection",title:"Multimodal Emotion Recognizer",description:"A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.",category:"NLP",techStack:["Python","BERT","Wav2Vec 2.0","React","FastAPI"],architecture:"Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.",timeline:"Feb 2023 - Oct 2023",metrics:[{label:"Bimodal accuracy",value:"92.3%"},{label:"Speech inference",value:"18ms"},{label:"Dataset size",value:"50GB"}],problem:"Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.",solution:"This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.",roadmap:["Edge deployment on mobile web views","Expansion to diagnostic indicators for pediatric developmental screens"]},{id:"portfolio-os",title:"FarhanOS Living Environment",description:"The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.",category:"Design",techStack:["React","TailwindCSS","Framer Motion","Express","Gemini API"],architecture:"Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.",timeline:"Mar 2026 - Present",metrics:[{label:"Render pipeline frame rate",value:"120fps"},{label:"Asset payload size",value:"142KB"},{label:"Custom APIs",value:"3"}],problem:"Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.",solution:"FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.",roadmap:["Add support for complete sandboxed terminal commands","Introduce voice command parsing natively via browser audio APIs"]}],papers:[{id:"prompt-break-2025",title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",authors:"Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah",journal:"IEEE ICCIT",year:2025,abstract:"Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.",methodology:"Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.",dataset:"Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.",pipeline:"User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.",results:[{metric:"Detection Accuracy",score:"94.2%"},{metric:"False Positive Rate",score:"2.8%"},{metric:"Latency overhead",score:"4.5ms"},{metric:"Jailbreak F1 Score",score:"0.935"}],citation:"Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE)."},{id:"live-interview-2025",title:"AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",authors:"Farhan Kabir, M Arman Reza Shah, Razat Biswas",journal:"IEEE ICCIT",year:2025,abstract:"Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.",methodology:"Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.",dataset:"1,200 mock interview recordings annotated by human resource professionals.",pipeline:"Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.",results:[{metric:"Late-fusion Accuracy",score:"91.6%"},{metric:"Response Transcribing",score:"110ms"},{metric:"Posture classification",score:"93.2%"},{metric:"Evaluation Agreement",score:"0.87 (Kappa)"}],citation:"Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE)."},{id:"emotion-detection-2025",title:"Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, M. K. Habib Khan, Fazle Rabby",journal:"IEEE ECCE",year:2025,abstract:"Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.",methodology:"Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.",dataset:"90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.",pipeline:"Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.",results:[{metric:"BERT Accuracy",score:"88.5%"},{metric:"RoBERTa F1-Score",score:"0.908"},{metric:"Training latency",score:"1.2 hrs"},{metric:"Inference speed",score:"3.8ms"}],citation:"Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE)."},{id:"depression-detection-2023",title:"Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",journal:"IEEE ICCIT",year:2023,abstract:"Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.",methodology:"Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.",dataset:"120,000 distinct anonymized posts annotated by clinical practitioners.",pipeline:"Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.",results:[{metric:"RoBERTa-Clinical F1",score:"0.914"},{metric:"Baseline Zero-shot F1",score:"0.781"},{metric:"Sensitivity",score:"0.893"},{metric:"Specificity",score:"0.942"}],citation:"Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE)."}],timeline:[{year:2026,title:"Architect & AI Researcher",company:"Cognitive Diagnostics Lab",role:"Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.",description:"Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.",achievements:["Designed custom zero-shot and classification-optimized clinical prediction systems","Implemented modern low-latency model evaluation dashboards processing high-volume text queues","Established rigid testing criteria ensuring patient confidentiality and data safety parameters"],technologies:["PyTorch","Transformer NLP","React/Next.js","Go","TailwindCSS v4"]},{year:2024,title:"Senior AI System Dev",company:"Synthetix Solutions",role:"Backend AI systems Architect constructing robust SaaS solutions for custom automation.",description:"Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.",achievements:["Decreased standard inference lag by over 30% through selective quantization and model distillation techniques","Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles","Orchestrated automated data extraction workers scaling securely according to traffic profiles"],technologies:["Express/Node.js","Redis","Python","Docker","Google Cloud Platform"]},{year:2022,title:"Full Stack Engineer & Researcher",company:"Mental Health Tech",role:"Frontend lead and mental wellness text classifier research dev.",description:"Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.",achievements:["Created the first generation interactive mental wellness support system evaluating distress levels","Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics","Designed completely responsive portfolio workspaces utilizing high-frequency animations"],technologies:["React","Redux","D3.js","Hugging Face Transformers","Python/Flask"]},{year:2020,title:"Open Source Contributor & Dev",company:"Independent / Farhan Lab",role:"Developing open source utilities and studying linguistic text processing.",description:"Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.",achievements:["Built and deployed TypeRush, an open-source terminal typing game","Developed interactive developer portfolios earning deep community feedback","Acquired expertise in system design, Docker containers, and React orchestration"],technologies:["React","Docker","Framer Motion","Node.js","SQLite"]}],professionalTimeline:[{year:"April 2024 - Present",title:"Lead Developer",company:"Auto Spark",role:"Lead Developer",description:"Developed responsive web applications, ensuring compatibility across various browsers and devices. Implemented efficient front-end solutions and collaborated on back-end development tasks.",achievements:["Developed responsive web applications, ensuring compatibility across various browsers and devices.","Implemented efficient front-end solutions and collaborated on back-end development tasks."],technologies:["TypeScript","React","REST APIs","Node.js","Tailwind"],badgeColor:"emerald"},{year:"2022 - 2023",title:"Full Stack Developer (Remote)",company:"Hire My Tech",role:"Full Stack Developer",description:"Built responsive web applications using React and modern JavaScript frameworks, collaborated with design team on user experience improvements.",achievements:["Built responsive web applications using React and modern JavaScript frameworks.","Collaborated with design team on user experience improvements."],technologies:["React","Next.js","PostgreSQL","Dexie.js","Tailwind"],badgeColor:"indigo"},{year:"2020 - 2021",title:"UI/UX Designer",company:"Design Studio",role:"UI/UX Designer",description:"Created user-centered designs for web and mobile applications, conducted user research and usability testing.",achievements:["Created user-centered designs for web and mobile applications.","Conducted user research and usability testing."],technologies:["TypeScript","Node.js","SQLite","Tailwind"],badgeColor:"pink"},{year:"2019 - 2020",title:"Junior Developer",company:"WebAgency",role:"Junior Developer",description:"Developed websites and web applications, learned modern development practices and agile methodologies.",achievements:["Developed websites and web applications.","Learned modern development practices and agile methodologies."],technologies:["Next.js","Webpack","CSS Modules","Node.js"],badgeColor:"amber"}],articles:[{id:"nlp-advances-2026",title:"The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI",category:"Research",readTime:"6 min read",date:"May 12, 2026",excerpt:"Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.",content:"Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers."},{id:"saas-architecture-2025",title:"Designing Zero-Cold-Start SaaS Applications for Hugging Face Models",category:"Engineering",readTime:"8 min read",date:"Nov 24, 2025",excerpt:"An architect's blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.",content:"Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user's client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat."},{id:"ux-design-developers",title:"The Aesthetic Developer Engine: Why High-Performance Styling is Critical",category:"Design",readTime:"5 min read",date:"Jan 15, 2025",excerpt:"Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.",content:"Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience."}],buildLogs:[{id:"bl-v1.4",date:"May 2026",version:"v1.4.2",title:"Audio Node Fusion & Neural Voice Synthesizer",description:"Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.",tasksCompleted:["Constructed custom caching layer for audio binaries on the server","Implemented voice control deck with visual waveform indicator","Configured optimized low-footprint audio transmission protocols"],metricsChanged:[{metric:"Voice rendering",before:"Not Supported",after:"1.2s avg"},{metric:"Client weight",before:"1.4MB",after:"1.1MB"}]},{id:"bl-v1.3",date:"Feb 2026",version:"v1.3.0",title:"Command Palette & Context Engine Upgrade",description:"Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.",tasksCompleted:["Built full-text token matching indexing portfolio vectors","Added smooth canvas overlays using Framer Motion","Mapped custom system operations (AI Site Tour, OS Theme Presets)"],metricsChanged:[{metric:"Search launch lag",before:"420ms",after:"3ms"},{metric:"Indices cached",before:"0",after:"48 items"}]}],skills:[{name:"PyTorch",category:"AI/ML",weight:5},{name:"Large Language Models",category:"AI/ML",weight:5},{name:"Hugging Face & BERT",category:"AI/ML",weight:5},{name:"Clinical NLP Pipelines",category:"AI/ML",weight:5},{name:"Python (NumPy, SciPy)",category:"AI/ML",weight:4},{name:"React / Next.js",category:"Frontend",weight:5},{name:"Tailwind CSS v4",category:"Frontend",weight:5},{name:"Framer Motion",category:"Frontend",weight:4},{name:"D3.js Visualization",category:"Frontend",weight:4},{name:"Node.js & Express",category:"Backend",weight:5},{name:"Go (Golang)",category:"Backend",weight:4},{name:"Redis Caching",category:"Backend",weight:4},{name:"PostgreSQL",category:"Backend",weight:5},{name:"Docker / Containers",category:"Systems & Devops",weight:5},{name:"Git & Linux",category:"Systems & Devops",weight:5},{name:"Academic Research",category:"Research & Science",weight:5},{name:"Mental Health Tech",category:"Research & Science",weight:5}],gardenNodes:[{id:"nlp",label:"Clinical NLP",category:"Research"},{id:"transformers",label:"Transformers",category:"Intelligence"},{id:"bert",label:"BERT Models",category:"Intelligence"},{id:"depression",label:"Depression Dialectics",category:"Research"},{id:"autism",label:"Autism Micro-shifts",category:"Research"},{id:"ethics",label:"Research Ethics",category:"Humanity"},{id:"saas",label:"AI SaaS Architectures",category:"Engineering"},{id:"telemetry",label:"Telemetry Profiling",category:"Engineering"},{id:"databases",label:"PostgreSQL Schema",category:"Engineering"}]};async function R1(o){const t=window.atob(o),i=t.length,s=new Uint8Array(i);for(let x=0;x<i;x++)s[x]=t.charCodeAt(x);const l=Math.floor(i/2),c=new Int16Array(s.buffer,0,l),h=window.AudioContext||window.webkitAudioContext;if(!h)throw new Error("Web Audio API is not supported in this browser.");const m=new h,p=m.createBuffer(1,l,24e3),y=p.getChannelData(0);for(let x=0;x<l;x++)y[x]=c[x]/32768;const _=m.createBufferSource();return _.buffer=p,_.connect(m.destination),_.start(0),{source:_,ctx:m,stop:()=>{try{_.stop(),m.close()}catch{}}}}function ox(o=800,t=.03){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const s=new i,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(o,s.currentTime),l.frequency.exponentialRampToValueAtTime(100,s.currentTime+t),c.gain.setValueAtTime(.015,s.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),l.connect(c),c.connect(s.destination),l.start(),l.stop(s.currentTime+t),setTimeout(()=>s.close(),200)}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="184",N1=0,lx=1,D1=2,Fc=1,L1=2,Wo=3,ps=0,ni=1,Ri=2,La=0,Br=1,Yo=2,cx=3,ux=4,U1=5,Fs=100,z1=101,O1=102,P1=103,I1=104,F1=200,B1=201,k1=202,j1=203,Jf=204,$f=205,H1=206,G1=207,V1=208,X1=209,W1=210,q1=211,Y1=212,Z1=213,K1=214,eh=0,th=1,nh=2,jr=3,ih=4,ah=5,sh=6,rh=7,fv=0,Q1=1,J1=2,aa=0,hv=1,pv=2,mv=3,gv=4,xv=5,vv=6,_v=7,bv=300,Hs=301,Hr=302,xf=303,vf=304,Jc=306,oh=1e3,Da=1001,lh=1002,In=1003,$1=1004,hc=1005,Hn=1006,_f=1007,ks=1008,Ni=1009,yv=1010,Sv=1011,Ko=1012,qh=1013,ra=1014,na=1015,za=1016,Yh=1017,Zh=1018,Qo=1020,Mv=35902,Ev=35899,Tv=1021,Av=1022,Gi=1023,Oa=1026,js=1027,wv=1028,Kh=1029,Gs=1030,Qh=1031,Jh=1033,Bc=33776,kc=33777,jc=33778,Hc=33779,ch=35840,uh=35841,dh=35842,fh=35843,hh=36196,ph=37492,mh=37496,gh=37488,xh=37489,Xc=37490,vh=37491,_h=37808,bh=37809,yh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,Ah=37815,wh=37816,Ch=37817,Rh=37818,Nh=37819,Dh=37820,Lh=37821,Uh=36492,zh=36494,Oh=36495,Ph=36283,Ih=36284,Wc=36285,Fh=36286,eS=3200,dx=0,tS=1,fs="",wi="srgb",qc="srgb-linear",Yc="linear",Zt="srgb",Er=7680,fx=519,nS=512,iS=513,aS=514,$h=515,sS=516,rS=517,ep=518,oS=519,hx=35044,px="300 es",ia=2e3,Zc=2001;function lS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cS(){const o=Kc("canvas");return o.style.display="block",o}const mx={};function gx(...o){const t="THREE."+o.shift();console.log(t,...o)}function Cv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function mt(...o){o=Cv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function jt(...o){o=Cv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Bh(...o){const t=o.join(" ");t in mx||(mx[t]=!0,mt(...o))}function uS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const dS={[eh]:th,[nh]:sh,[ih]:rh,[jr]:ah,[th]:eh,[sh]:nh,[rh]:ih,[ah]:jr};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=Math.PI/180,kh=180/Math.PI;function Jo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[o&255]+kn[o>>8&255]+kn[o>>16&255]+kn[o>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function It(o,t,i){return Math.max(t,Math.min(i,o))}function fS(o,t){return(o%t+t)%t}function yf(o,t,i){return(1-i)*o+i*t}function Fo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const sp=class sp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(It(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sp.prototype.isVector2=!0;let Kt=sp;class Xr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,m){let g=s[l+0],p=s[l+1],y=s[l+2],_=s[l+3],x=c[h+0],M=c[h+1],T=c[h+2],U=c[h+3];if(_!==U||g!==x||p!==M||y!==T){let S=g*x+p*M+y*T+_*U;S<0&&(x=-x,M=-M,T=-T,U=-U,S=-S);let b=1-m;if(S<.9995){const L=Math.acos(S),I=Math.sin(L);b=Math.sin(b*L)/I,m=Math.sin(m*L)/I,g=g*b+x*m,p=p*b+M*m,y=y*b+T*m,_=_*b+U*m}else{g=g*b+x*m,p=p*b+M*m,y=y*b+T*m,_=_*b+U*m;const L=1/Math.sqrt(g*g+p*p+y*y+_*_);g*=L,p*=L,y*=L,_*=L}}t[i]=g,t[i+1]=p,t[i+2]=y,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const m=s[l],g=s[l+1],p=s[l+2],y=s[l+3],_=c[h],x=c[h+1],M=c[h+2],T=c[h+3];return t[i]=m*T+y*_+g*M-p*x,t[i+1]=g*T+y*x+p*_-m*M,t[i+2]=p*T+y*M+m*x-g*_,t[i+3]=y*T-m*_-g*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,m=Math.cos,g=Math.sin,p=m(s/2),y=m(l/2),_=m(c/2),x=g(s/2),M=g(l/2),T=g(c/2);switch(h){case"XYZ":this._x=x*y*_+p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_-x*M*T;break;case"YXZ":this._x=x*y*_+p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_+x*M*T;break;case"ZXY":this._x=x*y*_-p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_-x*M*T;break;case"ZYX":this._x=x*y*_-p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_+x*M*T;break;case"YZX":this._x=x*y*_+p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_-x*M*T;break;case"XZY":this._x=x*y*_-p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_+x*M*T;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],m=i[5],g=i[9],p=i[2],y=i[6],_=i[10],x=s+m+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-g)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>m&&s>_){const M=2*Math.sqrt(1+s-m-_);this._w=(y-g)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(m>_){const M=2*Math.sqrt(1+m-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(g+y)/M}else{const M=2*Math.sqrt(1+_-s-m);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(g+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(It(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,m=i._x,g=i._y,p=i._z,y=i._w;return this._x=s*y+h*m+l*p-c*g,this._y=l*y+h*g+c*m-s*p,this._z=c*y+h*p+s*g-l*m,this._w=h*y-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,h=-h,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),y=Math.sin(p);g=Math.sin(g*p)/y,i=Math.sin(i*p)/y,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rp=class rp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,m=t.z,g=t.w,p=2*(h*l-m*s),y=2*(m*i-c*l),_=2*(c*s-h*i);return this.x=i+g*p+h*_-m*y,this.y=s+g*y+m*p-c*_,this.z=l+g*_+c*y-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this.z=It(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this.z=It(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*h-s*g,this.z=s*m-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sf.copy(this).projectOnVector(t),this.sub(Sf)}reflect(t){return this.sub(Sf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(It(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rp.prototype.isVector3=!0;let le=rp;const Sf=new le,xx=new Xr,op=class op{constructor(t,i,s,l,c,h,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p)}set(t,i,s,l,c,h,m,g,p){const y=this.elements;return y[0]=t,y[1]=l,y[2]=m,y[3]=i,y[4]=c,y[5]=g,y[6]=s,y[7]=h,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[3],g=s[6],p=s[1],y=s[4],_=s[7],x=s[2],M=s[5],T=s[8],U=l[0],S=l[3],b=l[6],L=l[1],I=l[4],O=l[7],X=l[2],P=l[5],B=l[8];return c[0]=h*U+m*L+g*X,c[3]=h*S+m*I+g*P,c[6]=h*b+m*O+g*B,c[1]=p*U+y*L+_*X,c[4]=p*S+y*I+_*P,c[7]=p*b+y*O+_*B,c[2]=x*U+M*L+T*X,c[5]=x*S+M*I+T*P,c[8]=x*b+M*O+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8];return i*h*y-i*m*p-s*c*y+s*m*g+l*c*p-l*h*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=y*h-m*p,x=m*g-y*c,M=p*c-h*g,T=i*_+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return t[0]=_*U,t[1]=(l*p-y*s)*U,t[2]=(m*s-l*h)*U,t[3]=x*U,t[4]=(y*i-l*g)*U,t[5]=(l*c-m*i)*U,t[6]=M*U,t[7]=(s*g-p*i)*U,t[8]=(h*i-s*c)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*m)+h+t,-l*p,l*g,-l*(-p*h+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(Mf.makeScale(t,i)),this}rotate(t){return this.premultiply(Mf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Mf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};op.prototype.isMatrix3=!0;let bt=op;const Mf=new bt,vx=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hS(){const o={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Zt&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Zt&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qc]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:Zt,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),o}const Pt=hS();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Tr;class pS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=Kc("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:t.width,height:t.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mS=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?c.push(Ef(l[h].image)):c.push(Ef(l[h]))}else c=Ef(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ef(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let gS=0;const Tf=new le;class Gn extends Xs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Da,l=Da,c=Hn,h=ks,m=Gi,g=Ni,p=Gn.DEFAULT_ANISOTROPY,y=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Jo(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){mt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case Da:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case Da:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=bv;Gn.DEFAULT_ANISOTROPY=1;const lp=class lp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,p=g[0],y=g[4],_=g[8],x=g[1],M=g[5],T=g[9],U=g[2],S=g[6],b=g[10];if(Math.abs(y-x)<.01&&Math.abs(_-U)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+x)<.1&&Math.abs(_+U)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,O=(M+1)/2,X=(b+1)/2,P=(y+x)/4,B=(_+U)/4,A=(T+S)/4;return I>O&&I>X?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=P/s,c=B/s):O>X?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=P/l,c=A/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=B/c,l=A/c),this.set(s,l,c,i),this}let L=Math.sqrt((S-T)*(S-T)+(_-U)*(_-U)+(x-y)*(x-y));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(_-U)/L,this.z=(x-y)/L,this.w=Math.acos((p+M+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this.z=It(this.z,t.z,i.z),this.w=It(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this.z=It(this.z,t,i),this.w=It(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lp.prototype.isVector4=!0;let vn=lp;class xS extends Xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new vn(0,0,t,i),this.scissorTest=!1,this.viewport=new vn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Gn(l),h=s.count;for(let m=0;m<h;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends xS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Rv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vS extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=class Qc{constructor(t,i,s,l,c,h,m,g,p,y,_,x,M,T,U,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p,y,_,x,M,T,U,S)}set(t,i,s,l,c,h,m,g,p,y,_,x,M,T,U,S){const b=this.elements;return b[0]=t,b[4]=i,b[8]=s,b[12]=l,b[1]=c,b[5]=h,b[9]=m,b[13]=g,b[2]=p,b[6]=y,b[10]=_,b[14]=x,b[3]=M,b[7]=T,b[11]=U,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),h=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),y=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*y,M=h*_,T=m*y,U=m*_;i[0]=g*y,i[4]=-g*_,i[8]=p,i[1]=M+T*p,i[5]=x-U*p,i[9]=-m*g,i[2]=U-x*p,i[6]=T+M*p,i[10]=h*g}else if(t.order==="YXZ"){const x=g*y,M=g*_,T=p*y,U=p*_;i[0]=x+U*m,i[4]=T*m-M,i[8]=h*p,i[1]=h*_,i[5]=h*y,i[9]=-m,i[2]=M*m-T,i[6]=U+x*m,i[10]=h*g}else if(t.order==="ZXY"){const x=g*y,M=g*_,T=p*y,U=p*_;i[0]=x-U*m,i[4]=-h*_,i[8]=T+M*m,i[1]=M+T*m,i[5]=h*y,i[9]=U-x*m,i[2]=-h*p,i[6]=m,i[10]=h*g}else if(t.order==="ZYX"){const x=h*y,M=h*_,T=m*y,U=m*_;i[0]=g*y,i[4]=T*p-M,i[8]=x*p+U,i[1]=g*_,i[5]=U*p+x,i[9]=M*p-T,i[2]=-p,i[6]=m*g,i[10]=h*g}else if(t.order==="YZX"){const x=h*g,M=h*p,T=m*g,U=m*p;i[0]=g*y,i[4]=U-x*_,i[8]=T*_+M,i[1]=_,i[5]=h*y,i[9]=-m*y,i[2]=-p*y,i[6]=M*_+T,i[10]=x-U*_}else if(t.order==="XZY"){const x=h*g,M=h*p,T=m*g,U=m*p;i[0]=g*y,i[4]=-_,i[8]=p*y,i[1]=x*_+U,i[5]=h*y,i[9]=M*_-T,i[2]=T*_-M,i[6]=m*y,i[10]=U*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_S,t,bS)}lookAt(t,i,s){const l=this.elements;return pi.subVectors(t,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),rs.crossVectors(s,pi),rs.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),rs.crossVectors(s,pi)),rs.normalize(),pc.crossVectors(pi,rs),l[0]=rs.x,l[4]=pc.x,l[8]=pi.x,l[1]=rs.y,l[5]=pc.y,l[9]=pi.y,l[2]=rs.z,l[6]=pc.z,l[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[4],g=s[8],p=s[12],y=s[1],_=s[5],x=s[9],M=s[13],T=s[2],U=s[6],S=s[10],b=s[14],L=s[3],I=s[7],O=s[11],X=s[15],P=l[0],B=l[4],A=l[8],F=l[12],K=l[1],H=l[5],Z=l[9],de=l[13],pe=l[2],W=l[6],z=l[10],j=l[14],ie=l[3],_e=l[7],se=l[11],D=l[15];return c[0]=h*P+m*K+g*pe+p*ie,c[4]=h*B+m*H+g*W+p*_e,c[8]=h*A+m*Z+g*z+p*se,c[12]=h*F+m*de+g*j+p*D,c[1]=y*P+_*K+x*pe+M*ie,c[5]=y*B+_*H+x*W+M*_e,c[9]=y*A+_*Z+x*z+M*se,c[13]=y*F+_*de+x*j+M*D,c[2]=T*P+U*K+S*pe+b*ie,c[6]=T*B+U*H+S*W+b*_e,c[10]=T*A+U*Z+S*z+b*se,c[14]=T*F+U*de+S*j+b*D,c[3]=L*P+I*K+O*pe+X*ie,c[7]=L*B+I*H+O*W+X*_e,c[11]=L*A+I*Z+O*z+X*se,c[15]=L*F+I*de+O*j+X*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],m=t[5],g=t[9],p=t[13],y=t[2],_=t[6],x=t[10],M=t[14],T=t[3],U=t[7],S=t[11],b=t[15],L=g*M-p*x,I=m*M-p*_,O=m*x-g*_,X=h*M-p*y,P=h*x-g*y,B=h*_-m*y;return i*(U*L-S*I+b*O)-s*(T*L-S*X+b*P)+l*(T*I-U*X+b*B)-c*(T*O-U*P+S*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=t[9],x=t[10],M=t[11],T=t[12],U=t[13],S=t[14],b=t[15],L=i*m-s*h,I=i*g-l*h,O=i*p-c*h,X=s*g-l*m,P=s*p-c*m,B=l*p-c*g,A=y*U-_*T,F=y*S-x*T,K=y*b-M*T,H=_*S-x*U,Z=_*b-M*U,de=x*b-M*S,pe=L*de-I*Z+O*H+X*K-P*F+B*A;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/pe;return t[0]=(m*de-g*Z+p*H)*W,t[1]=(l*Z-s*de-c*H)*W,t[2]=(U*B-S*P+b*X)*W,t[3]=(x*P-_*B-M*X)*W,t[4]=(g*K-h*de-p*F)*W,t[5]=(i*de-l*K+c*F)*W,t[6]=(S*O-T*B-b*I)*W,t[7]=(y*B-x*O+M*I)*W,t[8]=(h*Z-m*K+p*A)*W,t[9]=(s*K-i*Z-c*A)*W,t[10]=(T*P-U*O+b*L)*W,t[11]=(_*O-y*P-M*L)*W,t[12]=(m*F-h*H-g*A)*W,t[13]=(i*H-s*F+l*A)*W,t[14]=(U*I-T*X-S*L)*W,t[15]=(y*X-_*I+x*L)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,m=t.y,g=t.z,p=c*h,y=c*m;return this.set(p*h+s,p*m-l*g,p*g+l*m,0,p*m+l*g,y*m+s,y*g-l*h,0,p*g-l*m,y*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,m=i._z,g=i._w,p=c+c,y=h+h,_=m+m,x=c*p,M=c*y,T=c*_,U=h*y,S=h*_,b=m*_,L=g*p,I=g*y,O=g*_,X=s.x,P=s.y,B=s.z;return l[0]=(1-(U+b))*X,l[1]=(M+O)*X,l[2]=(T-I)*X,l[3]=0,l[4]=(M-O)*P,l[5]=(1-(x+b))*P,l[6]=(S+L)*P,l[7]=0,l[8]=(T+I)*B,l[9]=(S-L)*B,l[10]=(1-(x+U))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ar.set(l[0],l[1],l[2]).length();const m=Ar.set(l[4],l[5],l[6]).length(),g=Ar.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Bi.copy(this);const p=1/h,y=1/m,_=1/g;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=y,Bi.elements[5]*=y,Bi.elements[6]*=y,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,i.setFromRotationMatrix(Bi),s.x=h,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,h,m=ia,g=!1){const p=this.elements,y=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let T,U;if(g)T=c/(h-c),U=h*c/(h-c);else if(m===ia)T=-(h+c)/(h-c),U=-2*h*c/(h-c);else if(m===Zc)T=-h/(h-c),U=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,m=ia,g=!1){const p=this.elements,y=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,U;if(g)T=1/(h-c),U=h/(h-c);else if(m===ia)T=-2/(h-c),U=-(h+c)/(h-c);else if(m===Zc)T=-1/(h-c),U=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Qc.prototype.isMatrix4=!0;let An=Qc;const Ar=new le,Bi=new An,_S=new le(0,0,0),bS=new le(1,1,1),rs=new le,pc=new le,pi=new le,bx=new An,yx=new Xr;class Vs{constructor(t=0,i=0,s=0,l=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],m=l[8],g=l[1],p=l[5],y=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-It(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-It(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(It(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yx.setFromEuler(this),this.setFromQuaternion(yx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Nv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yS=0;const Sx=new le,wr=new Xr,Aa=new An,mc=new le,Bo=new le,SS=new le,MS=new Xr,Mx=new le(1,0,0),Ex=new le(0,1,0),Tx=new le(0,0,1),Ax={type:"added"},ES={type:"removed"},Cr={type:"childadded",child:null},Af={type:"childremoved",child:null};class ii extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new le,i=new Vs,s=new Xr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new An},normalMatrix:{value:new bt}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Mx,t)}rotateY(t){return this.rotateOnAxis(Ex,t)}rotateZ(t){return this.rotateOnAxis(Tx,t)}translateOnAxis(t,i){return Sx.copy(t).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mx,t)}translateY(t){return this.translateOnAxis(Ex,t)}translateZ(t){return this.translateOnAxis(Tx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(Bo,mc,this.up):Aa.lookAt(mc,Bo,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(Aa),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ax),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ES),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ax),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,SS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,MS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,y=g.length;p<y;p++){const _=g[p];c(t.shapes,_)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=h(t.geometries),g=h(t.materials),p=h(t.textures),y=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),T=h(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(m){const g=[];for(const p in m){const y=m[p];delete y.metadata,g.push(y)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ii.DEFAULT_UP=new le(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TS={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const U of t.hand.values()){const S=i.getJointPose(U,s),b=this._getHandJoint(p,U);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const y=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=y.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new gc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Cf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class kt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Pt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Pt.workingColorSpace){if(t=fS(t,1),i=It(i,0,1),s=It(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Cf(h,c,t+1/3),this.g=Cf(h,c,t),this.b=Cf(h,c,t-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(t,i=wi){function s(c){c!==void 0&&parseFloat(c)<1&&mt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:mt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);mt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=wi){const s=Dv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):mt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return Pt.workingToColorSpace(jn.copy(this),t),Math.round(It(jn.r*255,0,255))*65536+Math.round(It(jn.g*255,0,255))*256+Math.round(It(jn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pt.workingColorSpace){Pt.workingToColorSpace(jn.copy(this),i);const s=jn.r,l=jn.g,c=jn.b,h=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const y=(m+h)/2;if(m===h)g=0,p=0;else{const _=h-m;switch(p=y<=.5?_/(h+m):_/(2-h-m),h){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return t.h=g,t.s=p,t.l=y,t}getRGB(t,i=Pt.workingColorSpace){return Pt.workingToColorSpace(jn.copy(this),i),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=wi){Pt.workingToColorSpace(jn.copy(this),t);const i=jn.r,s=jn.g,l=jn.b;return t!==wi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(xc);const s=yf(os.h,xc.h,i),l=yf(os.s,xc.s,i),c=yf(os.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new kt;kt.NAMES=Dv;class np{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=i}clone(){return new np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AS extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vs,this.environmentIntensity=1,this.environmentRotation=new Vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ki=new le,wa=new le,Rf=new le,Ca=new le,Rr=new le,Nr=new le,wx=new le,Nf=new le,Df=new le,Lf=new le,Uf=new vn,zf=new vn,Of=new vn;class Hi{constructor(t=new le,i=new le,s=new le){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ki.subVectors(t,i),l.cross(ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ki.subVectors(l,i),wa.subVectors(s,i),Rf.subVectors(t,i);const h=ki.dot(ki),m=ki.dot(wa),g=ki.dot(Rf),p=wa.dot(wa),y=wa.dot(Rf),_=h*p-m*m;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*g-m*y)*x,T=(h*y-m*g)*x;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,i,s,l,c,h,m,g){return this.getBarycoord(t,i,s,l,Ca)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Ca.x),g.addScaledVector(h,Ca.y),g.addScaledVector(m,Ca.z),g)}static getInterpolatedAttribute(t,i,s,l,c,h){return Uf.setScalar(0),zf.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(t,i),zf.fromBufferAttribute(t,s),Of.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Uf,c.x),h.addScaledVector(zf,c.y),h.addScaledVector(Of,c.z),h}static isFrontFacing(t,i,s,l){return ki.subVectors(s,i),wa.subVectors(t,i),ki.cross(wa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),ki.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Hi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,m;Rr.subVectors(l,s),Nr.subVectors(c,s),Nf.subVectors(t,s);const g=Rr.dot(Nf),p=Nr.dot(Nf);if(g<=0&&p<=0)return i.copy(s);Df.subVectors(t,l);const y=Rr.dot(Df),_=Nr.dot(Df);if(y>=0&&_<=y)return i.copy(l);const x=g*_-y*p;if(x<=0&&g>=0&&y<=0)return h=g/(g-y),i.copy(s).addScaledVector(Rr,h);Lf.subVectors(t,c);const M=Rr.dot(Lf),T=Nr.dot(Lf);if(T>=0&&M<=T)return i.copy(c);const U=M*p-g*T;if(U<=0&&p>=0&&T<=0)return m=p/(p-T),i.copy(s).addScaledVector(Nr,m);const S=y*T-M*_;if(S<=0&&_-y>=0&&M-T>=0)return wx.subVectors(c,l),m=(_-y)/(_-y+(M-T)),i.copy(l).addScaledVector(wx,m);const b=1/(S+U+x);return h=U*b,m=x*b,i.copy(s).addScaledVector(Rr,h).addScaledVector(Nr,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $o{constructor(t=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ji.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ji.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ji.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,m=c.count;h<m;h++)t.isMesh===!0?t.getVertexPosition(h,ji):ji.fromBufferAttribute(c,h),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),_c.subVectors(this.max,ko),Dr.subVectors(t.a,ko),Lr.subVectors(t.b,ko),Ur.subVectors(t.c,ko),ls.subVectors(Lr,Dr),cs.subVectors(Ur,Lr),Us.subVectors(Dr,Ur);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Us.z,Us.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Us.z,0,-Us.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Us.y,Us.x,0];return!Pf(i,Dr,Lr,Ur,_c)||(i=[1,0,0,0,1,0,0,0,1],!Pf(i,Dr,Lr,Ur,_c))?!1:(bc.crossVectors(ls,cs),i=[bc.x,bc.y,bc.z],Pf(i,Dr,Lr,Ur,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new le,new le,new le,new le,new le,new le,new le,new le],ji=new le,vc=new $o,Dr=new le,Lr=new le,Ur=new le,ls=new le,cs=new le,Us=new le,ko=new le,_c=new le,bc=new le,zs=new le;function Pf(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){zs.fromArray(o,c);const m=l.x*Math.abs(zs.x)+l.y*Math.abs(zs.y)+l.z*Math.abs(zs.z),g=t.dot(zs),p=i.dot(zs),y=s.dot(zs);if(Math.max(-Math.max(g,p,y),Math.min(g,p,y))>m)return!1}return!0}const Tn=new le,yc=new Kt;let wS=0;class Di extends Xs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=hx,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hx&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Lv extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Uv extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ln extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const CS=new $o,jo=new le,If=new le;class $c{constructor(t=new le,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):CS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(If.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(If)),this.expandByPoint(jo.copy(t.center).sub(If))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let RS=0;const Ai=new An,Ff=new ii,zr=new le,mi=new $o,Ho=new $o,Dn=new le;class ai extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lS(t)?Uv:Lv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new bt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,i,s){return Ai.makeTranslation(t,i,s),this.applyMatrix4(Ai),this}scale(t,i,s){return Ai.makeScale(t,i,s),this.applyMatrix4(Ai),this}lookAt(t){return Ff.lookAt(t),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(t){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const m=i[c];Ho.setFromBufferAttribute(m),this.morphTargetsRelative?(Dn.addVectors(mi.min,Ho.min),mi.expandByPoint(Dn),Dn.addVectors(mi.max,Ho.max),mi.expandByPoint(Dn)):(mi.expandByPoint(Ho.min),mi.expandByPoint(Ho.max))}mi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Dn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,y=m.count;p<y;p++)Dn.fromBufferAttribute(m,p),g&&(zr.fromBufferAttribute(t,p),Dn.add(zr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new le,g[A]=new le;const p=new le,y=new le,_=new le,x=new Kt,M=new Kt,T=new Kt,U=new le,S=new le;function b(A,F,K){p.fromBufferAttribute(s,A),y.fromBufferAttribute(s,F),_.fromBufferAttribute(s,K),x.fromBufferAttribute(c,A),M.fromBufferAttribute(c,F),T.fromBufferAttribute(c,K),y.sub(p),_.sub(p),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(U.copy(y).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(H),S.copy(_).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(H),m[A].add(U),m[F].add(U),m[K].add(U),g[A].add(S),g[F].add(S),g[K].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let A=0,F=L.length;A<F;++A){const K=L[A],H=K.start,Z=K.count;for(let de=H,pe=H+Z;de<pe;de+=3)b(t.getX(de+0),t.getX(de+1),t.getX(de+2))}const I=new le,O=new le,X=new le,P=new le;function B(A){X.fromBufferAttribute(l,A),P.copy(X);const F=m[A];I.copy(F),I.sub(X.multiplyScalar(X.dot(F))).normalize(),O.crossVectors(P,F);const H=O.dot(g[A])<0?-1:1;h.setXYZW(A,I.x,I.y,I.z,H)}for(let A=0,F=L.length;A<F;++A){const K=L[A],H=K.start,Z=K.count;for(let de=H,pe=H+Z;de<pe;de+=3)B(t.getX(de+0)),B(t.getX(de+1)),B(t.getX(de+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new le,c=new le,h=new le,m=new le,g=new le,p=new le,y=new le,_=new le;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),U=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,U),p.fromBufferAttribute(s,S),m.add(y),g.add(y),p.add(y),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(U,g.x,g.y,g.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Dn.fromBufferAttribute(t,i),Dn.normalize(),t.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(m,g){const p=m.array,y=m.itemSize,_=m.normalized,x=new p.constructor(g.length*y);let M=0,T=0;for(let U=0,S=g.length;U<S;U++){m.isInterleavedBufferAttribute?M=g[U]*m.data.stride+m.offset:M=g[U]*y;for(let b=0;b<y;b++)x[T++]=p[M++]}return new Di(x,y,_)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=t(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let y=0,_=p.length;y<_;y++){const x=p[y],M=t(x,s);g.push(M)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,g=h.length;m<g;m++){const p=h[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],y=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];y.push(M.toJSON(t.data))}y.length>0&&(l[g]=y,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const c=t.morphAttributes;for(const p in c){const y=[],_=c[p];for(let x=0,M=_.length;x<M;x++)y.push(_[x].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,y=h.length;p<y;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NS=0;class el extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Br,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=$f,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){mt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jf&&(s.blendSrc=this.blendSrc),this.blendDst!==$f&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Na=new le,Bf=new le,Sc=new le,us=new le,kf=new le,Mc=new le,jf=new le;class zv{constructor(t=new le,i=new le(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Bf.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),us.copy(this.origin).sub(Bf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Sc),m=us.dot(this.direction),g=-us.dot(Sc),p=us.lengthSq(),y=Math.abs(1-h*h);let _,x,M,T;if(y>0)if(_=h*g-m,x=h*m-g,T=c*y,_>=0)if(x>=-T)if(x<=T){const U=1/y;_*=U,x*=U,M=_*(_+h*x+2*m)+x*(h*_+x+2*g)+p}else x=c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x=-c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x<=-T?(_=Math.max(0,-(-h*c+m)),x=_>0?-c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-g),c),M=x*(x+2*g)+p):(_=Math.max(0,-(h*c+m)),x=_>0?c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Bf).addScaledVector(Sc,x),M}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),m=s-h,g=s+h;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,m,g;const p=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),y>=0?(c=(t.min.y-x.y)*y,h=(t.max.y-x.y)*y):(c=(t.max.y-x.y)*y,h=(t.min.y-x.y)*y),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(m=(t.min.z-x.z)*_,g=(t.max.z-x.z)*_):(m=(t.max.z-x.z)*_,g=(t.min.z-x.z)*_),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,s,l,c){kf.subVectors(i,t),Mc.subVectors(s,t),jf.crossVectors(kf,Mc);let h=this.direction.dot(jf),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;us.subVectors(this.origin,t);const g=m*this.direction.dot(Mc.crossVectors(us,Mc));if(g<0)return null;const p=m*this.direction.dot(kf.cross(us));if(p<0||g+p>h)return null;const y=-m*us.dot(jf);return y<0?null:this.at(y/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fr extends el{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cx=new An,Os=new zv,Ec=new $c,Rx=new le,Tc=new le,Ac=new le,wc=new le,Hf=new le,Cc=new le,Nx=new le,Rc=new le;class Yn extends ii{constructor(t=new ai,i=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Cc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const y=m[g],_=c[g];y!==0&&(Hf.fromBufferAttribute(_,t),h?Cc.addScaledVector(Hf,y):Cc.addScaledVector(Hf.sub(i),y))}i.add(Cc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(Ec.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Ec,Rx)===null||Os.origin.distanceToSquared(Rx)>(t.far-t.near)**2))&&(Cx.copy(c).invert(),Os.copy(t.ray).applyMatrix4(Cx),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Os)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(h))for(let T=0,U=x.length;T<U;T++){const S=x[T],b=h[S.materialIndex],L=Math.max(S.start,M.start),I=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let O=L,X=I;O<X;O+=3){const P=m.getX(O),B=m.getX(O+1),A=m.getX(O+2);l=Nc(this,b,t,s,p,y,_,P,B,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),U=Math.min(m.count,M.start+M.count);for(let S=T,b=U;S<b;S+=3){const L=m.getX(S),I=m.getX(S+1),O=m.getX(S+2);l=Nc(this,h,t,s,p,y,_,L,I,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let T=0,U=x.length;T<U;T++){const S=x[T],b=h[S.materialIndex],L=Math.max(S.start,M.start),I=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let O=L,X=I;O<X;O+=3){const P=O,B=O+1,A=O+2;l=Nc(this,b,t,s,p,y,_,P,B,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),U=Math.min(g.count,M.start+M.count);for(let S=T,b=U;S<b;S+=3){const L=S,I=S+1,O=S+2;l=Nc(this,h,t,s,p,y,_,L,I,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function DS(o,t,i,s,l,c,h,m){let g;if(t.side===ni?g=s.intersectTriangle(h,c,l,!0,m):g=s.intersectTriangle(l,c,h,t.side===ps,m),g===null)return null;Rc.copy(m),Rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:o}}function Nc(o,t,i,s,l,c,h,m,g,p){o.getVertexPosition(m,Tc),o.getVertexPosition(g,Ac),o.getVertexPosition(p,wc);const y=DS(o,t,i,s,Tc,Ac,wc,Nx);if(y){const _=new le;Hi.getBarycoord(Nx,Tc,Ac,wc,_),l&&(y.uv=Hi.getInterpolatedAttribute(l,m,g,p,_,new Kt)),c&&(y.uv1=Hi.getInterpolatedAttribute(c,m,g,p,_,new Kt)),h&&(y.normal=Hi.getInterpolatedAttribute(h,m,g,p,_,new le),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:m,b:g,c:p,normal:new le,materialIndex:0};Hi.getNormal(Tc,Ac,wc,x.normal),y.face=x,y.barycoord=_}return y}class LS extends Gn{constructor(t=null,i=1,s=1,l,c,h,m,g,p=In,y=In,_,x){super(null,h,m,g,p,y,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gf=new le,US=new le,zS=new bt;class Is{constructor(t=new le(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Gf.subVectors(s,i).cross(US.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Gf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||zS.getNormalMatrix(t),l=this.coplanarPoint(Gf).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new $c,OS=new Kt(.5,.5),Dc=new le;class Ov{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,h=new Is){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia,s=!1){const l=this.planes,c=t.elements,h=c[0],m=c[1],g=c[2],p=c[3],y=c[4],_=c[5],x=c[6],M=c[7],T=c[8],U=c[9],S=c[10],b=c[11],L=c[12],I=c[13],O=c[14],X=c[15];if(l[0].setComponents(p-h,M-y,b-T,X-L).normalize(),l[1].setComponents(p+h,M+y,b+T,X+L).normalize(),l[2].setComponents(p+m,M+_,b+U,X+I).normalize(),l[3].setComponents(p-m,M-_,b-U,X-I).normalize(),s)l[4].setComponents(g,x,S,O).normalize(),l[5].setComponents(p-g,M-x,b-S,X-O).normalize();else if(l[4].setComponents(p-g,M-x,b-S,X-O).normalize(),i===ia)l[5].setComponents(p+g,M+x,b+S,X+O).normalize();else if(i===Zc)l[5].setComponents(g,x,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const i=OS.distanceTo(t.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends el{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dx=new An,jh=new zv,Lc=new $c,Uc=new le;class PS extends ii{constructor(t=new ai,i=new Pv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,t.ray.intersectsSphere(Lc)===!1)return;Dx.copy(l).invert(),jh.copy(t.ray).applyMatrix4(Dx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=x,U=M;T<U;T++){const S=p.getX(T);Uc.fromBufferAttribute(_,S),Lx(Uc,S,g,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let T=x,U=M;T<U;T++)Uc.fromBufferAttribute(_,T),Lx(Uc,T,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Lx(o,t,i,s,l,c,h){const m=jh.distanceSqToPoint(o);if(m<i){const g=new le;jh.closestPointToPoint(o,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Iv extends Gn{constructor(t=[],i=Hs,s,l,c,h,m,g,p,y){super(t,i,s,l,c,h,m,g,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IS extends Gn{constructor(t,i,s,l,c,h,m,g,p){super(t,i,s,l,c,h,m,g,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr extends Gn{constructor(t,i,s=ra,l,c,h,m=In,g=In,p,y=Oa,_=1){if(y!==Oa&&y!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,m,g,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class FS extends Gr{constructor(t,i=ra,s=Hs,l,c,h=In,m=In,g,p=Oa){const y={width:t,height:t,depth:1},_=[y,y,y,y,y,y];super(t,t,i,s,l,c,h,m,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class tl extends ai{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const m=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],y=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(_,2));function T(U,S,b,L,I,O,X,P,B,A,F){const K=O/B,H=X/A,Z=O/2,de=X/2,pe=P/2,W=B+1,z=A+1;let j=0,ie=0;const _e=new le;for(let se=0;se<z;se++){const D=se*H-de;for(let V=0;V<W;V++){const k=V*K-Z;_e[U]=k*L,_e[S]=D*I,_e[b]=pe,p.push(_e.x,_e.y,_e.z),_e[U]=0,_e[S]=0,_e[b]=P>0?1:-1,y.push(_e.x,_e.y,_e.z),_.push(V/B),_.push(1-se/A),j+=1}}for(let se=0;se<A;se++)for(let D=0;D<B;D++){const V=x+D+W*se,k=x+D+W*(se+1),me=x+(D+1)+W*(se+1),Ae=x+(D+1)+W*se;g.push(V,k,Ae),g.push(k,me,Ae),ie+=6}m.addGroup(M,ie,F),M+=ie,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zo extends ai{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:m,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const y=[],_=[],x=[],M=[];let T=0;const U=[],S=s/2;let b=0;L(),h===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(y),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(x,3)),this.setAttribute("uv",new Ln(M,2));function L(){const O=new le,X=new le;let P=0;const B=(i-t)/s;for(let A=0;A<=c;A++){const F=[],K=A/c,H=K*(i-t)+t;for(let Z=0;Z<=l;Z++){const de=Z/l,pe=de*g+m,W=Math.sin(pe),z=Math.cos(pe);X.x=H*W,X.y=-K*s+S,X.z=H*z,_.push(X.x,X.y,X.z),O.set(W,B,z).normalize(),x.push(O.x,O.y,O.z),M.push(de,1-K),F.push(T++)}U.push(F)}for(let A=0;A<l;A++)for(let F=0;F<c;F++){const K=U[F][A],H=U[F+1][A],Z=U[F+1][A+1],de=U[F][A+1];(t>0||F!==0)&&(y.push(K,H,de),P+=3),(i>0||F!==c-1)&&(y.push(H,Z,de),P+=3)}p.addGroup(b,P,0),b+=P}function I(O){const X=T,P=new Kt,B=new le;let A=0;const F=O===!0?t:i,K=O===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*K,0),x.push(0,K,0),M.push(.5,.5),T++;const H=T;for(let Z=0;Z<=l;Z++){const pe=Z/l*g+m,W=Math.cos(pe),z=Math.sin(pe);B.x=F*z,B.y=S*K,B.z=F*W,_.push(B.x,B.y,B.z),x.push(0,K,0),P.x=W*.5+.5,P.y=z*.5*K+.5,M.push(P.x,P.y),T++}for(let Z=0;Z<l;Z++){const de=X+Z,pe=H+Z;O===!0?y.push(pe,pe+1,de):y.push(pe+1,pe,de),A+=3}p.addGroup(b,A,O===!0?1:2),b+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nl extends ai{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,y=g+1,_=t/m,x=i/g,M=[],T=[],U=[],S=[];for(let b=0;b<y;b++){const L=b*x-h;for(let I=0;I<p;I++){const O=I*_-c;T.push(O,-L,0),U.push(0,0,1),S.push(I/m),S.push(1-b/g)}}for(let b=0;b<g;b++)for(let L=0;L<m;L++){const I=L+p*b,O=L+p*(b+1),X=L+1+p*(b+1),P=L+1+p*b;M.push(I,O,P),M.push(O,X,P)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(U,3)),this.setAttribute("uv",new Ln(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.widthSegments,t.heightSegments)}}class ip extends ai{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+m,Math.PI);let p=0;const y=[],_=new le,x=new le,M=[],T=[],U=[],S=[];for(let b=0;b<=s;b++){const L=[],I=b/s;let O=0;b===0&&h===0?O=.5/i:b===s&&g===Math.PI&&(O=-.5/i);for(let X=0;X<=i;X++){const P=X/i;_.x=-t*Math.cos(l+P*c)*Math.sin(h+I*m),_.y=t*Math.cos(h+I*m),_.z=t*Math.sin(l+P*c)*Math.sin(h+I*m),T.push(_.x,_.y,_.z),x.copy(_).normalize(),U.push(x.x,x.y,x.z),S.push(P+O,1-I),L.push(p++)}y.push(L)}for(let b=0;b<s;b++)for(let L=0;L<i;L++){const I=y[b][L+1],O=y[b][L],X=y[b+1][L],P=y[b+1][L+1];(b!==0||h>0)&&M.push(I,O,P),(b!==s-1||g<Math.PI)&&M.push(O,X,P)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(U,3)),this.setAttribute("uv",new Ln(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ap extends ai{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const g=[],p=[],y=[],_=[],x=new le,M=new le,T=new le;for(let U=0;U<=s;U++){const S=h+U/s*m;for(let b=0;b<=l;b++){const L=b/l*c;M.x=(t+i*Math.cos(S))*Math.cos(L),M.y=(t+i*Math.cos(S))*Math.sin(L),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),x.x=t*Math.cos(L),x.y=t*Math.sin(L),T.subVectors(M,x).normalize(),y.push(T.x,T.y,T.z),_.push(b/l),_.push(U/s)}}for(let U=1;U<=s;U++)for(let S=1;S<=l;S++){const b=(l+1)*U+S-1,L=(l+1)*(U-1)+S-1,I=(l+1)*(U-1)+S,O=(l+1)*U+S;g.push(b,L,O),g.push(L,I,O)}this.setIndex(g),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ap(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Vr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Ux(l))l.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Ux(l[0])){const c=[];for(let h=0,m=l.length;h<m;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function qn(o){const t={};for(let i=0;i<o.length;i++){const s=Vr(o[i]);for(const l in s)t[l]=s[l]}return t}function Ux(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function BS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Bv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}const kS={clone:Vr,merge:qn};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends el{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=BS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class GS extends Li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class VS extends el{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XS extends el{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zc=new le,Oc=new Xr,$i=new le;class kv extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,Oc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Oc,$i.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(zc,Oc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Oc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new le,zx=new Kt,Ox=new Kt;class Ci extends kv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,zx,Ox),i.subVectors(Ox,zx)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class jv extends kv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,m-=y*this.view.offsetY,g=m-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Or=-90,Pr=1;class WS extends ii{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Or,Pr,t,i);l.layers=this.layers,this.add(l);const c=new Ci(Or,Pr,t,i);c.layers=this.layers,this.add(c);const h=new Ci(Or,Pr,t,i);h.layers=this.layers,this.add(h);const m=new Ci(Or,Pr,t,i);m.layers=this.layers,this.add(m);const g=new Ci(Or,Pr,t,i);g.layers=this.layers,this.add(g);const p=new Ci(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,m,g]=i;for(const p of i)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,m,g,p,y]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,y),t.setRenderTarget(_,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class qS extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cp=class cp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};cp.prototype.isMatrix2=!0;let Px=cp;function Ix(o,t,i,s){const l=YS(s);switch(i){case Tv:return o*t;case wv:return o*t/l.components*l.byteLength;case Kh:return o*t/l.components*l.byteLength;case Gs:return o*t*2/l.components*l.byteLength;case Qh:return o*t*2/l.components*l.byteLength;case Av:return o*t*3/l.components*l.byteLength;case Gi:return o*t*4/l.components*l.byteLength;case Jh:return o*t*4/l.components*l.byteLength;case Bc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jc:case Hc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:case fh:return Math.max(o,16)*Math.max(t,8)/4;case ch:case dh:return Math.max(o,8)*Math.max(t,8)/2;case hh:case ph:case gh:case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mh:case Xc:case vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case yh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uh:case zh:case Oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ph:case Ih:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Wc:case Fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YS(o){switch(o){case Ni:case yv:return{byteLength:1,components:1};case Ko:case Sv:case za:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case ra:case qh:case na:return{byteLength:4,components:1};case Mv:case Ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ZS(o){const t=new WeakMap;function i(m,g){const p=m.array,y=m.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(g,x),o.bufferData(g,p,y),m.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:_}}function s(m,g,p){const y=g.array,_=g.updateRanges;if(o.bindBuffer(p,m),_.length===0)o.bufferSubData(p,0,y);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],U=_[M];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++x,_[x]=U)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const U=_[M];o.bufferSubData(p,U.start*y.BYTES_PER_ELEMENT,y,U.start,U.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function h(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const y=t.get(m);(!y||y.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:h}}var KS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
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
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
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
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_M=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yM=`vec3 transformedNormal = objectNormal;
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
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
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
#endif`,YM=`uniform sampler2D dfgLUT;
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
}`,ZM=`
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rE=`#if defined( USE_POINTS_UV )
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
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OE=`float getShadowMask() {
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
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`#include <common>
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
}`,i2=`#if DEPTH_PACKING == 3200
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
}`,a2=`#define DISTANCE
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
}`,s2=`#define DISTANCE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`uniform float scale;
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
}`,c2=`uniform vec3 diffuse;
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
}`,u2=`#include <common>
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
}`,d2=`uniform vec3 diffuse;
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
}`,f2=`#define LAMBERT
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
}`,h2=`#define LAMBERT
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
}`,p2=`#define MATCAP
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
}`,m2=`#define MATCAP
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
}`,g2=`#define NORMAL
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
}`,x2=`#define NORMAL
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
}`,v2=`#define PHONG
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
}`,_2=`#define PHONG
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
}`,b2=`#define STANDARD
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
}`,y2=`#define STANDARD
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
}`,S2=`#define TOON
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
}`,M2=`#define TOON
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
}`,E2=`uniform float size;
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
}`,T2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,w2=`uniform vec3 color;
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
}`,C2=`uniform float rotation;
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
}`,R2=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:KS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:$S,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:aM,batching_vertex:sM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:xM,color_vertex:vM,common:_M,cube_uv_reflection_fragment:bM,defaultnormal_vertex:yM,displacementmap_pars_vertex:SM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:TM,colorspace_fragment:AM,colorspace_pars_fragment:wM,envmap_fragment:CM,envmap_common_pars_fragment:RM,envmap_pars_fragment:NM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:HM,envmap_vertex:LM,fog_vertex:UM,fog_pars_vertex:zM,fog_fragment:OM,fog_pars_fragment:PM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:FM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:kM,lights_pars_begin:jM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:XM,lights_phong_pars_fragment:WM,lights_physical_fragment:qM,lights_physical_pars_fragment:YM,lights_fragment_begin:ZM,lights_fragment_maps:KM,lights_fragment_end:QM,lightprobes_pars_fragment:JM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:sE,map_particle_pars_fragment:rE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:xE,normal_vertex:vE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:wE,dithering_fragment:CE,dithering_pars_fragment:RE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:UE,shadowmap_vertex:zE,shadowmask_pars_fragment:OE,skinbase_vertex:PE,skinning_pars_vertex:IE,skinning_vertex:FE,skinnormal_vertex:BE,specularmap_fragment:kE,specularmap_pars_fragment:jE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:XE,uv_pars_fragment:WE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:ZE,background_vert:KE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:$E,cube_vert:e2,cube_frag:t2,depth_vert:n2,depth_frag:i2,distance_vert:a2,distance_frag:s2,equirect_vert:r2,equirect_frag:o2,linedashed_vert:l2,linedashed_frag:c2,meshbasic_vert:u2,meshbasic_frag:d2,meshlambert_vert:f2,meshlambert_frag:h2,meshmatcap_vert:p2,meshmatcap_frag:m2,meshnormal_vert:g2,meshnormal_frag:x2,meshphong_vert:v2,meshphong_frag:_2,meshphysical_vert:b2,meshphysical_frag:y2,meshtoon_vert:S2,meshtoon_frag:M2,points_vert:E2,points_frag:T2,shadow_vert:A2,shadow_frag:w2,sprite_vert:C2,sprite_frag:R2},qe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ta={basic:{uniforms:qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:qn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:qn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new kt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:qn([qe.points,qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:qn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:qn([qe.common,qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:qn([qe.sprite,qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:qn([qe.common,qe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:qn([qe.lights,qe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ta.physical={uniforms:qn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Pc={r:0,b:0,g:0},N2=new An,Gv=new bt;Gv.set(-1,0,0,0,1,0,0,0,1);function D2(o,t,i,s,l,c){const h=new kt(0);let m=l===!0?0:1,g,p,y=null,_=0,x=null;function M(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const O=L.backgroundBlurriness>0;I=t.get(I,O)}return I}function T(L){let I=!1;const O=M(L);O===null?S(h,m):O&&O.isColor&&(S(O,1),I=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(L,I){const O=M(I);O&&(O.isCubeTexture||O.mapping===Jc)?(p===void 0&&(p=new Yn(new tl(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Vr(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(X,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(N2.makeRotationFromEuler(I.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Gv),p.material.toneMapped=Pt.getTransfer(O.colorSpace)!==Zt,(y!==O||_!==O.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,y=O,_=O.version,x=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(g===void 0&&(g=new Yn(new nl(2,2),new Li({name:"BackgroundMaterial",uniforms:Vr(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=O,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.toneMapped=Pt.getTransfer(O.colorSpace)!==Zt,O.matrixAutoUpdate===!0&&O.updateMatrix(),g.material.uniforms.uvTransform.value.copy(O.matrix),(y!==O||_!==O.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,y=O,_=O.version,x=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null))}function S(L,I){L.getRGB(Pc,Bv(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,I,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,I=1){h.set(L),m=I,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,S(h,m)},render:T,addToRenderList:U,dispose:b}}function L2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function m(H,Z,de,pe,W){let z=!1;const j=_(H,pe,de,Z);c!==j&&(c=j,p(c.object)),z=M(H,pe,de,W),z&&T(H,pe,de,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,O(H,Z,de,pe),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function g(){return o.createVertexArray()}function p(H){return o.bindVertexArray(H)}function y(H){return o.deleteVertexArray(H)}function _(H,Z,de,pe){const W=pe.wireframe===!0;let z=s[Z.id];z===void 0&&(z={},s[Z.id]=z);const j=H.isInstancedMesh===!0?H.id:0;let ie=z[j];ie===void 0&&(ie={},z[j]=ie);let _e=ie[de.id];_e===void 0&&(_e={},ie[de.id]=_e);let se=_e[W];return se===void 0&&(se=x(g()),_e[W]=se),se}function x(H){const Z=[],de=[],pe=[];for(let W=0;W<i;W++)Z[W]=0,de[W]=0,pe[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:de,attributeDivisors:pe,object:H,attributes:{},index:null}}function M(H,Z,de,pe){const W=c.attributes,z=Z.attributes;let j=0;const ie=de.getAttributes();for(const _e in ie)if(ie[_e].location>=0){const D=W[_e];let V=z[_e];if(V===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;j++}return c.attributesNum!==j||c.index!==pe}function T(H,Z,de,pe){const W={},z=Z.attributes;let j=0;const ie=de.getAttributes();for(const _e in ie)if(ie[_e].location>=0){let D=z[_e];D===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(D=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(D=H.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),W[_e]=V,j++}c.attributes=W,c.attributesNum=j,c.index=pe}function U(){const H=c.newAttributes;for(let Z=0,de=H.length;Z<de;Z++)H[Z]=0}function S(H){b(H,0)}function b(H,Z){const de=c.newAttributes,pe=c.enabledAttributes,W=c.attributeDivisors;de[H]=1,pe[H]===0&&(o.enableVertexAttribArray(H),pe[H]=1),W[H]!==Z&&(o.vertexAttribDivisor(H,Z),W[H]=Z)}function L(){const H=c.newAttributes,Z=c.enabledAttributes;for(let de=0,pe=Z.length;de<pe;de++)Z[de]!==H[de]&&(o.disableVertexAttribArray(de),Z[de]=0)}function I(H,Z,de,pe,W,z,j){j===!0?o.vertexAttribIPointer(H,Z,de,W,z):o.vertexAttribPointer(H,Z,de,pe,W,z)}function O(H,Z,de,pe){U();const W=pe.attributes,z=de.getAttributes(),j=Z.defaultAttributeValues;for(const ie in z){const _e=z[ie];if(_e.location>=0){let se=W[ie];if(se===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const D=se.normalized,V=se.itemSize,k=t.get(se);if(k===void 0)continue;const me=k.buffer,Ae=k.type,$=k.bytesPerElement,Te=Ae===o.INT||Ae===o.UNSIGNED_INT||se.gpuType===qh;if(se.isInterleavedBufferAttribute){const we=se.data,Ve=we.stride,et=se.offset;if(we.isInstancedInterleavedBuffer){for(let Je=0;Je<_e.locationSize;Je++)b(_e.location+Je,we.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Je=0;Je<_e.locationSize;Je++)S(_e.location+Je);o.bindBuffer(o.ARRAY_BUFFER,me);for(let Je=0;Je<_e.locationSize;Je++)I(_e.location+Je,V/_e.locationSize,Ae,D,Ve*$,(et+V/_e.locationSize*Je)*$,Te)}else{if(se.isInstancedBufferAttribute){for(let we=0;we<_e.locationSize;we++)b(_e.location+we,se.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<_e.locationSize;we++)S(_e.location+we);o.bindBuffer(o.ARRAY_BUFFER,me);for(let we=0;we<_e.locationSize;we++)I(_e.location+we,V/_e.locationSize,Ae,D,V*$,V/_e.locationSize*we*$,Te)}}else if(j!==void 0){const D=j[ie];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(_e.location,D);break;case 3:o.vertexAttrib3fv(_e.location,D);break;case 4:o.vertexAttrib4fv(_e.location,D);break;default:o.vertexAttrib1fv(_e.location,D)}}}}L()}function X(){F();for(const H in s){const Z=s[H];for(const de in Z){const pe=Z[de];for(const W in pe){const z=pe[W];for(const j in z)y(z[j].object),delete z[j];delete pe[W]}}delete s[H]}}function P(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const de in Z){const pe=Z[de];for(const W in pe){const z=pe[W];for(const j in z)y(z[j].object),delete z[j];delete pe[W]}}delete s[H.id]}function B(H){for(const Z in s){const de=s[Z];for(const pe in de){const W=de[pe];if(W[H.id]===void 0)continue;const z=W[H.id];for(const j in z)y(z[j].object),delete z[j];delete W[H.id]}}}function A(H){for(const Z in s){const de=s[Z],pe=H.isInstancedMesh===!0?H.id:0,W=de[pe];if(W!==void 0){for(const z in W){const j=W[z];for(const ie in j)y(j[ie].object),delete j[ie];delete W[z]}delete de[pe],Object.keys(de).length===0&&delete s[Z]}}}function F(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:F,resetDefaultState:K,dispose:X,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:U,enableAttribute:S,disableUnusedAttributes:L}}function U2(o,t,i){let s;function l(g){s=g}function c(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function h(g,p,y){y!==0&&(o.drawArraysInstanced(s,g,p,y),i.update(p,s,y))}function m(g,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,y);let x=0;for(let M=0;M<y;M++)x+=p[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function z2(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Gi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(B){const A=B===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ni&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!A)}function g(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=g(p);y!==p&&(mt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:O,maxSamples:X,samples:P}}function O2(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Is,m=new bt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=y(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,U=_.clipIntersection,S=_.clipShadows,b=o.get(_);if(!l||T===null||T.length===0||c&&!S)c?y(null):p();else{const L=c?0:s,I=L*4;let O=b.clippingState||null;g.value=O,O=y(T,x,I,M);for(let X=0;X!==I;++X)O[X]=i[X];b.clippingState=O,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=L}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(_,x,M,T){const U=_!==null?_.length:0;let S=null;if(U!==0){if(S=g.value,T!==!0||S===null){const b=M+U*4,L=x.matrixWorldInverse;m.getNormalMatrix(L),(S===null||S.length<b)&&(S=new Float32Array(b));for(let I=0,O=M;I!==U;++I,O+=4)h.copy(_[I]).applyMatrix4(L,m),h.normal.toArray(S,O),S[O+3]=h.constant}g.value=S,g.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,S}}const hs=4,Fx=[.125,.215,.35,.446,.526,.582],Bs=20,P2=256,Go=new jv,Bx=new kt;let Vf=null,Xf=0,Wf=0,qf=!1;const I2=new le;class kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:m=I2}=c;Vf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vf,Xf,Wf),this._renderer.xr.enabled=qf,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:za,format:Gi,colorSpace:qc,depthBuffer:!1},l=jx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F2(c)),this._blurMaterial=k2(c,t,i),this._ggxMaterial=B2(c,t,i)}return l}_compileMaterial(t){const i=new Yn(new ai,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,s,l,c){const g=new Ci(90,1,i,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Bx),_.toneMapping=aa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new tl,new Fr({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,S=U.material;let b=!1;const L=t.background;L?L.isColor&&(S.color.copy(L),t.background=null,b=!0):(S.color.copy(Bx),b=!0);for(let I=0;I<6;I++){const O=I%3;O===0?(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+y[I],c.y,c.z)):O===1?(g.up.set(0,0,p[I]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+y[I],c.z)):(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+y[I]));const X=this._cubeSize;Ir(l,O*X,I>2?X:0,X,X),_.setRenderTarget(l),b&&_.render(U,g),_.render(t,g)}_.toneMapping=M,_.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hs||t.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Ir(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Go)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[s];m.material=h;const g=h.uniforms,p=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-y*y),x=0+p*1.25,M=_*x,{_lodMax:T}=this,U=this._sizeLods[s],S=3*U*(s>T-hs?s-T+hs:0),b=4*(this._cubeSize-U);g.envMap.value=t.texture,g.roughness.value=M,g.mipInt.value=T-i,Ir(c,S,b,3*U,2*U),l.setRenderTarget(c),l.render(m,Go),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Ir(t,S,b,3*U,2*U),l.setRenderTarget(t),l.render(m,Go)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,m){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Bs-1),U=c/T,S=isFinite(c)?1+Math.floor(y*U):Bs;S>Bs&&mt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bs}`);const b=[];let L=0;for(let B=0;B<Bs;++B){const A=B/U,F=Math.exp(-A*A/2);b.push(F),B===0?L+=F:B<S&&(L+=2*F)}for(let B=0;B<b.length;B++)b[B]=b[B]/L;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=b,x.latitudinal.value=h==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:I}=this;x.dTheta.value=T,x.mipInt.value=I-s;const O=this._sizeLods[l],X=3*O*(l>I-hs?l-I+hs:0),P=4*(this._cubeSize-O);Ir(i,X,P,3*O,2*O),g.setRenderTarget(i),g.render(_,Go)}}function F2(o){const t=[],i=[],s=[];let l=o;const c=o-hs+1+Fx.length;for(let h=0;h<c;h++){const m=Math.pow(2,l);t.push(m);let g=1/m;h>o-hs?g=Fx[h-o+hs-1]:h===0&&(g=0),i.push(g);const p=1/(m-2),y=-p,_=1+p,x=[y,y,_,y,_,_,y,y,_,_,y,_],M=6,T=6,U=3,S=2,b=1,L=new Float32Array(U*T*M),I=new Float32Array(S*T*M),O=new Float32Array(b*T*M);for(let P=0;P<M;P++){const B=P%3*2/3-1,A=P>2?0:-1,F=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];L.set(F,U*T*P),I.set(x,S*T*P);const K=[P,P,P,P,P,P];O.set(K,b*T*P)}const X=new ai;X.setAttribute("position",new Di(L,U)),X.setAttribute("uv",new Di(I,S)),X.setAttribute("faceIndex",new Di(O,b)),s.push(new Yn(X,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function jx(o,t,i){const s=new sa(o,t,i);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function B2(o,t,i){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function k2(o,t,i){const s=new Float32Array(Bs),l=new le(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Hx(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Gx(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}class Vv extends sa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Li({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:La});c.uniforms.tEquirect.value=i;const h=new Yn(l,c),m=i.minFilter;return i.minFilter===ks&&(i.minFilter=Hn),new WS(1,10,this).update(t,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function j2(o){let t=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?h(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===xf||M===vf)if(t.has(x)){const T=t.get(x).texture;return m(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const U=new Vv(T.height);return U.fromEquirectangularTexture(o,x),t.set(x,U),x.addEventListener("dispose",p),m(U.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture){const M=x.mapping,T=M===xf||M===vf,U=M===Hs||M===Hr;if(T||U){let S=i.get(x);const b=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return s===null&&(s=new kx(o)),S=T?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const L=x.image;return T&&L&&L.height>0||U&&L&&g(L)?(s===null&&(s=new kx(o)),S=T?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",y),S.texture):null}}}return x}function m(x,M){return M===xf?x.mapping=Hs:M===vf&&(x.mapping=Hr),x}function g(x){let M=0;const T=6;for(let U=0;U<T;U++)x[U]!==void 0&&M++;return M===T}function p(x){const M=x.target;M.removeEventListener("dispose",p);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function H2(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bh("WebGLRenderer: "+s+" extension not supported."),l}}}function G2(o,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function g(_){const x=_.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let U=0;if(T===void 0)return;if(M!==null){const L=M.array;U=M.version;for(let I=0,O=L.length;I<O;I+=3){const X=L[I+0],P=L[I+1],B=L[I+2];x.push(X,P,P,B,B,X)}}else{const L=T.array;U=T.version;for(let I=0,O=L.length/3-1;I<O;I+=3){const X=I+0,P=I+1,B=I+2;x.push(X,P,P,B,B,X)}}const S=new(T.count>=65535?Uv:Lv)(x,1);S.version=U;const b=c.get(_);b&&t.remove(b),c.set(_,S)}function y(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:m,update:g,getWireframeAttribute:y}}function V2(o,t,i){let s;function l(_){s=_}let c,h;function m(_){c=_.type,h=_.bytesPerElement}function g(_,x){o.drawElements(s,x,c,_*h),i.update(x,s,1)}function p(_,x,M){M!==0&&(o.drawElementsInstanced(s,x,c,_*h,M),i.update(x,s,M))}function y(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let U=0;for(let S=0;S<M;S++)U+=x[S];i.update(U,s,1)}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=y}function X2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,m){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=m*(c/3);break;case o.LINES:i.lines+=m*(c/2);break;case o.LINE_STRIP:i.lines+=m*(c-1);break;case o.LINE_LOOP:i.lines+=m*c;break;case o.POINTS:i.points+=m*c;break;default:jt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function W2(o,t,i){const s=new WeakMap,l=new vn;function c(h,m,g){const p=h.morphTargetInfluences,y=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=y!==void 0?y.length:0;let x=s.get(m);if(x===void 0||x.count!==_){let K=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",K)};var M=K;x!==void 0&&x.texture.dispose();const T=m.morphAttributes.position!==void 0,U=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,b=m.morphAttributes.position||[],L=m.morphAttributes.normal||[],I=m.morphAttributes.color||[];let O=0;T===!0&&(O=1),U===!0&&(O=2),S===!0&&(O=3);let X=m.attributes.position.count*O,P=1;X>t.maxTextureSize&&(P=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const B=new Float32Array(X*P*4*_),A=new Rv(B,X,P,_);A.type=na,A.needsUpdate=!0;const F=O*4;for(let H=0;H<_;H++){const Z=b[H],de=L[H],pe=I[H],W=X*P*4*H;for(let z=0;z<Z.count;z++){const j=z*F;T===!0&&(l.fromBufferAttribute(Z,z),B[W+j+0]=l.x,B[W+j+1]=l.y,B[W+j+2]=l.z,B[W+j+3]=0),U===!0&&(l.fromBufferAttribute(de,z),B[W+j+4]=l.x,B[W+j+5]=l.y,B[W+j+6]=l.z,B[W+j+7]=0),S===!0&&(l.fromBufferAttribute(pe,z),B[W+j+8]=l.x,B[W+j+9]=l.y,B[W+j+10]=l.z,B[W+j+11]=pe.itemSize===4?l.w:1)}}x={count:_,texture:A,size:new Kt(X,P)},s.set(m,x),m.addEventListener("dispose",K)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const U=m.morphTargetsRelative?1:1-T;g.getUniforms().setValue(o,"morphTargetBaseInfluence",U),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function q2(o,t,i,s,l){let c=new WeakMap;function h(p){const y=l.render.frame,_=p.geometry,x=t.get(p,_);if(c.get(x)!==y&&(t.update(x),c.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==y&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return x}function m(){c=new WeakMap}function g(p){const y=p.target;y.removeEventListener("dispose",g),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:m}}const Y2={[hv]:"LINEAR_TONE_MAPPING",[pv]:"REINHARD_TONE_MAPPING",[mv]:"CINEON_TONE_MAPPING",[gv]:"ACES_FILMIC_TONE_MAPPING",[vv]:"AGX_TONE_MAPPING",[_v]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function Z2(o,t,i,s,l){const c=new sa(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Gr(t,i):void 0}),h=new sa(t,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ai;m.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const g=new GS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Yn(m,g),y=new jv(-1,1,1,-1,0,1);let _=null,x=null,M=!1,T,U=null,S=[],b=!1;this.setSize=function(L,I){c.setSize(L,I),h.setSize(L,I);for(let O=0;O<S.length;O++){const X=S[O];X.setSize&&X.setSize(L,I)}},this.setEffects=function(L){S=L,b=S.length>0&&S[0].isRenderPass===!0;const I=c.width,O=c.height;for(let X=0;X<S.length;X++){const P=S[X];P.setSize&&P.setSize(I,O)}},this.begin=function(L,I){if(M||L.toneMapping===aa&&S.length===0)return!1;if(U=I,I!==null){const O=I.width,X=I.height;(c.width!==O||c.height!==X)&&this.setSize(O,X)}return b===!1&&L.setRenderTarget(c),T=L.toneMapping,L.toneMapping=aa,!0},this.hasRenderPass=function(){return b},this.end=function(L,I){L.toneMapping=T,M=!0;let O=c,X=h;for(let P=0;P<S.length;P++){const B=S[P];if(B.enabled!==!1&&(B.render(L,X,O,I),B.needsSwap!==!1)){const A=O;O=X,X=A}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,g.defines={},Pt.getTransfer(_)===Zt&&(g.defines.SRGB_TRANSFER="");const P=Y2[x];P&&(g.defines[P]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,L.setRenderTarget(U),L.render(p,y),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),m.dispose(),g.dispose()}}const Xv=new Gn,Hh=new Gr(1,1),Wv=new Rv,qv=new vS,Yv=new Iv,Vx=[],Xx=[],Wx=new Float32Array(16),qx=new Float32Array(9),Yx=new Float32Array(4);function Wr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Vx[l];if(c===void 0&&(c=new Float32Array(l),Vx[l]=c),t!==0){s.toArray(c,0);for(let h=1,m=0;h!==t;++h)m+=i,o[h].toArray(c,m)}return c}function Cn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Rn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function tu(o,t){let i=Xx[t];i===void 0&&(i=new Int32Array(t),Xx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function K2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Q2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2fv(this.addr,t),Rn(i,t)}}function J2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Cn(i,t))return;o.uniform3fv(this.addr,t),Rn(i,t)}}function $2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4fv(this.addr,t),Rn(i,t)}}function eT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Rn(i,t)}else{if(Cn(i,s))return;Yx.set(s),o.uniformMatrix2fv(this.addr,!1,Yx),Rn(i,s)}}function tT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Rn(i,t)}else{if(Cn(i,s))return;qx.set(s),o.uniformMatrix3fv(this.addr,!1,qx),Rn(i,s)}}function nT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Rn(i,t)}else{if(Cn(i,s))return;Wx.set(s),o.uniformMatrix4fv(this.addr,!1,Wx),Rn(i,s)}}function iT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2iv(this.addr,t),Rn(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;o.uniform3iv(this.addr,t),Rn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4iv(this.addr,t),Rn(i,t)}}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Cn(i,t))return;o.uniform2uiv(this.addr,t),Rn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Cn(i,t))return;o.uniform3uiv(this.addr,t),Rn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Cn(i,t))return;o.uniform4uiv(this.addr,t),Rn(i,t)}}function dT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Hh.compareFunction=i.isReversedDepthBuffer()?ep:$h,c=Hh):c=Xv,i.setTexture2D(t||c,l)}function fT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||qv,l)}function hT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Yv,l)}function pT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Wv,l)}function mT(o){switch(o){case 5126:return K2;case 35664:return Q2;case 35665:return J2;case 35666:return $2;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return sT;case 35669:case 35673:return rT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(o,t){o.uniform1fv(this.addr,t)}function xT(o,t){const i=Wr(t,this.size,2);o.uniform2fv(this.addr,i)}function vT(o,t){const i=Wr(t,this.size,3);o.uniform3fv(this.addr,i)}function _T(o,t){const i=Wr(t,this.size,4);o.uniform4fv(this.addr,i)}function bT(o,t){const i=Wr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Wr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Wr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function TT(o,t){o.uniform3iv(this.addr,t)}function AT(o,t){o.uniform4iv(this.addr,t)}function wT(o,t){o.uniform1uiv(this.addr,t)}function CT(o,t){o.uniform2uiv(this.addr,t)}function RT(o,t){o.uniform3uiv(this.addr,t)}function NT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Cn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Hh:h=Xv;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||h,c[m])}function LT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Cn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||qv,c[h])}function UT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Cn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Yv,c[h])}function zT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);Cn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Wv,c[h])}function OT(o){switch(o){case 5126:return gT;case 35664:return xT;case 35665:return vT;case 35666:return _T;case 35674:return bT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return wT;case 36294:return CT;case 36295:return RT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return zT}}class PT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class IT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class FT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Yf=/(\w+)(\])?(\[|\.)?/g;function Zx(o,t){o.seq.push(t),o.map[t.id]=t}function BT(o,t,i){const s=o.name,l=s.length;for(Yf.lastIndex=0;;){const c=Yf.exec(s),h=Yf.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&h+2===l){Zx(i,p===void 0?new PT(m,o,t):new IT(m,o,t));break}else{let _=i.map[m];_===void 0&&(_=new FT(m),Zx(i,_)),i=_}}}class Gc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const m=t.getActiveUniform(i,h),g=t.getUniformLocation(i,m.name);BT(m,g,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Kx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const kT=37297;let jT=0;function HT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const m=h+1;s.push(`${m===t?">":" "} ${m}: ${i[h]}`)}return s.join(`
`)}const Qx=new bt;function GT(o){Pt._getMatrix(Qx,Pt.workingColorSpace,o);const t=`mat3( ${Qx.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Jx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+HT(o.getShaderSource(t),m)}else return c}function VT(o,t){const i=GT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XT={[hv]:"Linear",[pv]:"Reinhard",[mv]:"Cineon",[gv]:"ACESFilmic",[vv]:"AgX",[_v]:"Neutral",[xv]:"Custom"};function WT(o,t){const i=XT[t];return i===void 0?(mt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new le;function qT(){Pt.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function ZT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function KT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let m=1;c.type===o.FLOAT_MAT2&&(m=2),c.type===o.FLOAT_MAT3&&(m=3),c.type===o.FLOAT_MAT4&&(m=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:m}}return i}function qo(o){return o!==""}function $x(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(o){return o.replace(QT,$T)}const JT=new Map;function $T(o,t){let i=wt[t];if(i===void 0){const s=JT.get(t);if(s!==void 0)i=wt[s],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Gh(i)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(o){return o.replace(eA,tA)}function tA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nv(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const nA={[Fc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function iA(o){return nA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aA={[Hs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function sA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":aA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[Hr]:"ENVMAP_MODE_REFRACTION"};function oA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lA={[fv]:"ENVMAP_BLENDING_MULTIPLY",[Q1]:"ENVMAP_BLENDING_MIX",[J1]:"ENVMAP_BLENDING_ADD"};function cA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":lA[o.combine]||"ENVMAP_BLENDING_NONE"}function uA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,m=i.fragmentShader;const g=iA(i),p=sA(i),y=oA(i),_=cA(i),x=uA(i),M=YT(i),T=ZT(c),U=l.createProgram();let S,b,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),b.length>0&&(b+=`
`)):(S=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),b=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==aa?"#define TONE_MAPPING":"",i.toneMapping!==aa?wt.tonemapping_pars_fragment:"",i.toneMapping!==aa?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,VT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Gh(h),h=$x(h,i),h=ev(h,i),m=Gh(m),m=$x(m,i),m=ev(m,i),h=tv(h),m=tv(m),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",i.glslVersion===px?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const I=L+S+h,O=L+b+m,X=Kx(l,l.VERTEX_SHADER,I),P=Kx(l,l.FRAGMENT_SHADER,O);l.attachShader(U,X),l.attachShader(U,P),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function B(H){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(U)||"",de=l.getShaderInfoLog(X)||"",pe=l.getShaderInfoLog(P)||"",W=Z.trim(),z=de.trim(),j=pe.trim();let ie=!0,_e=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,U,X,P);else{const se=Jx(l,X,"vertex"),D=Jx(l,P,"fragment");jt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+se+`
`+D)}else W!==""?mt("WebGLProgram: Program Info Log:",W):(z===""||j==="")&&(_e=!1);_e&&(H.diagnostics={runnable:ie,programLog:W,vertexShader:{log:z,prefix:S},fragmentShader:{log:j,prefix:b}})}l.deleteShader(X),l.deleteShader(P),A=new Gc(l,U),F=KT(l,U)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let F;this.getAttributes=function(){return F===void 0&&B(this),F};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(U,kT)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=X,this.fragmentShader=P,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new pA(t),i.set(t,s)),s}}class pA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function mA(o){return o===Gs||o===Xc||o===Wc}function gA(o,t,i,s,l,c){const h=new Nv,m=new hA,g=new Set,p=[],y=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return g.add(A),A===0?"uv":`uv${A}`}function U(A,F,K,H,Z,de){const pe=H.fog,W=Z.geometry,z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ie=t.get(A.envMap||z,j),_e=ie&&ie.mapping===Jc?ie.image.height:null,se=M[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&mt("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,V=D!==void 0?D.length:0;let k=0;W.morphAttributes.position!==void 0&&(k=1),W.morphAttributes.normal!==void 0&&(k=2),W.morphAttributes.color!==void 0&&(k=3);let me,Ae,$,Te;if(se){const ot=ta[se];me=ot.vertexShader,Ae=ot.fragmentShader}else me=A.vertexShader,Ae=A.fragmentShader,m.update(A),$=m.getVertexShaderID(A),Te=m.getFragmentShaderID(A);const we=o.getRenderTarget(),Ve=o.state.buffers.depth.getReversed(),et=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,yt=!!A.map,ft=!!A.matcap,dt=!!ie,Et=!!A.aoMap,tt=!!A.lightMap,Ft=!!A.bumpMap,Nt=!!A.normalMap,un=!!A.displacementMap,Q=!!A.emissiveMap,Ze=!!A.metalnessMap,it=!!A.roughnessMap,st=A.anisotropy>0,Ue=A.clearcoat>0,rt=A.dispersion>0,R=A.iridescence>0,E=A.sheen>0,ee=A.transmission>0,ye=st&&!!A.anisotropyMap,Re=Ue&&!!A.clearcoatMap,Pe=Ue&&!!A.clearcoatNormalMap,Ie=Ue&&!!A.clearcoatRoughnessMap,xe=R&&!!A.iridescenceMap,ge=R&&!!A.iridescenceThicknessMap,ke=E&&!!A.sheenColorMap,He=E&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Fe=!!A.specularColorMap,ht=!!A.specularIntensityMap,pt=ee&&!!A.transmissionMap,St=ee&&!!A.thicknessMap,q=!!A.gradientMap,ze=!!A.alphaMap,Se=A.alphaTest>0,Xe=!!A.alphaHash,je=!!A.extensions;let Ne=aa;A.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ne=o.toneMapping);const Ye={shaderID:se,shaderType:A.type,shaderName:A.name,vertexShader:me,fragmentShader:Ae,defines:A.defines,customVertexShaderID:$,customFragmentShaderID:Te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:et,instancingColor:et&&Z.instanceColor!==null,instancingMorph:et&&Z.morphTexture!==null,outputColorSpace:we===null?o.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:yt,matcap:ft,envMap:dt,envMapMode:dt&&ie.mapping,envMapCubeUVHeight:_e,aoMap:Et,lightMap:tt,bumpMap:Ft,normalMap:Nt,displacementMap:un,emissiveMap:Q,normalMapObjectSpace:Nt&&A.normalMapType===tS,normalMapTangentSpace:Nt&&A.normalMapType===dx,packedNormalMap:Nt&&A.normalMapType===dx&&mA(A.normalMap.format),metalnessMap:Ze,roughnessMap:it,anisotropy:st,anisotropyMap:ye,clearcoat:Ue,clearcoatMap:Re,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ie,dispersion:rt,iridescence:R,iridescenceMap:xe,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:ke,sheenRoughnessMap:He,specularMap:Be,specularColorMap:Fe,specularIntensityMap:ht,transmission:ee,transmissionMap:pt,thicknessMap:St,gradientMap:q,opaque:A.transparent===!1&&A.blending===Br&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:Se,alphaHash:Xe,combine:A.combine,mapUv:yt&&T(A.map.channel),aoMapUv:Et&&T(A.aoMap.channel),lightMapUv:tt&&T(A.lightMap.channel),bumpMapUv:Ft&&T(A.bumpMap.channel),normalMapUv:Nt&&T(A.normalMap.channel),displacementMapUv:un&&T(A.displacementMap.channel),emissiveMapUv:Q&&T(A.emissiveMap.channel),metalnessMapUv:Ze&&T(A.metalnessMap.channel),roughnessMapUv:it&&T(A.roughnessMap.channel),anisotropyMapUv:ye&&T(A.anisotropyMap.channel),clearcoatMapUv:Re&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(A.sheenRoughnessMap.channel),specularMapUv:Be&&T(A.specularMap.channel),specularColorMapUv:Fe&&T(A.specularColorMap.channel),specularIntensityMapUv:ht&&T(A.specularIntensityMap.channel),transmissionMapUv:pt&&T(A.transmissionMap.channel),thicknessMapUv:St&&T(A.thicknessMap.channel),alphaMapUv:ze&&T(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Nt||st),vertexNormals:!!W.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(yt||ze),fog:!!pe,useFog:A.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||W.attributes.normal===void 0&&Nt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ve,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:k,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&K.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ne,decodeVideoTexture:yt&&A.map.isVideoTexture===!0&&Pt.getTransfer(A.map.colorSpace)===Zt,decodeVideoTextureEmissive:Q&&A.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(A.emissiveMap.colorSpace)===Zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ri,flipSided:A.side===ni,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:je&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&A.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=g.has(1),Ye.vertexUv2s=g.has(2),Ye.vertexUv3s=g.has(3),g.clear(),Ye}function S(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)F.push(K),F.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(b(F,A),L(F,A),F.push(o.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function b(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function L(A,F){h.disableAll(),F.instancing&&h.enable(0),F.instancingColor&&h.enable(1),F.instancingMorph&&h.enable(2),F.matcap&&h.enable(3),F.envMap&&h.enable(4),F.normalMapObjectSpace&&h.enable(5),F.normalMapTangentSpace&&h.enable(6),F.clearcoat&&h.enable(7),F.iridescence&&h.enable(8),F.alphaTest&&h.enable(9),F.vertexColors&&h.enable(10),F.vertexAlphas&&h.enable(11),F.vertexUv1s&&h.enable(12),F.vertexUv2s&&h.enable(13),F.vertexUv3s&&h.enable(14),F.vertexTangents&&h.enable(15),F.anisotropy&&h.enable(16),F.alphaHash&&h.enable(17),F.batching&&h.enable(18),F.dispersion&&h.enable(19),F.batchingColor&&h.enable(20),F.gradientMap&&h.enable(21),F.packedNormalMap&&h.enable(22),F.vertexNormals&&h.enable(23),A.push(h.mask),h.disableAll(),F.fog&&h.enable(0),F.useFog&&h.enable(1),F.flatShading&&h.enable(2),F.logarithmicDepthBuffer&&h.enable(3),F.reversedDepthBuffer&&h.enable(4),F.skinning&&h.enable(5),F.morphTargets&&h.enable(6),F.morphNormals&&h.enable(7),F.morphColors&&h.enable(8),F.premultipliedAlpha&&h.enable(9),F.shadowMapEnabled&&h.enable(10),F.doubleSided&&h.enable(11),F.flipSided&&h.enable(12),F.useDepthPacking&&h.enable(13),F.dithering&&h.enable(14),F.transmission&&h.enable(15),F.sheen&&h.enable(16),F.opaque&&h.enable(17),F.pointsUvs&&h.enable(18),F.decodeVideoTexture&&h.enable(19),F.decodeVideoTextureEmissive&&h.enable(20),F.alphaToCoverage&&h.enable(21),F.numLightProbeGrids>0&&h.enable(22),A.push(h.mask)}function I(A){const F=M[A.type];let K;if(F){const H=ta[F];K=kS.clone(H.uniforms)}else K=A.uniforms;return K}function O(A,F){let K=y.get(F);return K!==void 0?++K.usedTimes:(K=new dA(o,F,A,l),p.push(K),y.set(F,K)),K}function X(A){if(--A.usedTimes===0){const F=p.indexOf(A);p[F]=p[p.length-1],p.pop(),y.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function B(){m.dispose()}return{getParameters:U,getProgramCacheKey:S,getUniforms:I,acquireProgram:O,releaseProgram:X,releaseShaderCache:P,programs:p,dispose:B}}function xA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let m=o.get(h);return m===void 0&&(m={},o.set(h,m)),m}function s(h){o.delete(h)}function l(h,m,g){o.get(h)[m]=g}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function vA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function iv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function av(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function m(x,M,T,U,S,b){let L=o[t];return L===void 0?(L={id:x.id,object:x,geometry:M,material:T,materialVariant:h(x),groupOrder:U,renderOrder:x.renderOrder,z:S,group:b},o[t]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=T,L.materialVariant=h(x),L.groupOrder=U,L.renderOrder=x.renderOrder,L.z=S,L.group=b),t++,L}function g(x,M,T,U,S,b){const L=m(x,M,T,U,S,b);T.transmission>0?s.push(L):T.transparent===!0?l.push(L):i.push(L)}function p(x,M,T,U,S,b){const L=m(x,M,T,U,S,b);T.transmission>0?s.unshift(L):T.transparent===!0?l.unshift(L):i.unshift(L)}function y(x,M){i.length>1&&i.sort(x||vA),s.length>1&&s.sort(M||iv),l.length>1&&l.sort(M||iv)}function _(){for(let x=t,M=o.length;x<M;x++){const T=o[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:_,sort:y}}function _A(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new av,o.set(s,[h])):l>=c.length?(h=new av,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function bA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new le,color:new kt};break;case"SpotLight":i={position:new le,direction:new le,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new le,halfWidth:new le,halfHeight:new le};break}return o[t.id]=i,i}}}function yA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let SA=0;function MA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function EA(o){const t=new bA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new An,h=new An;function m(p){let y=0,_=0,x=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let M=0,T=0,U=0,S=0,b=0,L=0,I=0,O=0,X=0,P=0,B=0;p.sort(MA);for(let F=0,K=p.length;F<K;F++){const H=p[F],Z=H.color,de=H.intensity,pe=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gs?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)y+=Z.r*de,_+=Z.g*de,x+=Z.b*de;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],de);B++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,ie=i.get(H);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,s.directionalShadow[M]=ie,s.directionalShadowMap[M]=W,s.directionalShadowMatrix[M]=H.shadow.matrix,L++}s.directional[M]=z,M++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(Z).multiplyScalar(de),z.distance=pe,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[U]=z;const j=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,j.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[U]=j.matrix,H.castShadow){const ie=i.get(H);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,s.spotShadow[U]=ie,s.spotShadowMap[U]=W,O++}U++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(Z).multiplyScalar(de),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=z,S++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const j=H.shadow,ie=i.get(H);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,s.pointShadow[T]=ie,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=H.shadow.matrix,I++}s.point[T]=z,T++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(de),z.groundColor.copy(H.groundColor).multiplyScalar(de),s.hemi[b]=z,b++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=x;const A=s.hash;(A.directionalLength!==M||A.pointLength!==T||A.spotLength!==U||A.rectAreaLength!==S||A.hemiLength!==b||A.numDirectionalShadows!==L||A.numPointShadows!==I||A.numSpotShadows!==O||A.numSpotMaps!==X||A.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=S,s.point.length=T,s.hemi.length=b,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=O+X-P,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,A.directionalLength=M,A.pointLength=T,A.spotLength=U,A.rectAreaLength=S,A.hemiLength=b,A.numDirectionalShadows=L,A.numPointShadows=I,A.numSpotShadows=O,A.numSpotMaps=X,A.numLightProbes=B,s.version=SA++)}function g(p,y){let _=0,x=0,M=0,T=0,U=0;const S=y.matrixWorldInverse;for(let b=0,L=p.length;b<L;b++){const I=p[b];if(I.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),_++}else if(I.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const O=s.rectArea[T];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(S),h.identity(),c.copy(I.matrixWorld),c.premultiply(S),h.extractRotation(c),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),T++}else if(I.isPointLight){const O=s.point[x];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(S),x++}else if(I.isHemisphereLight){const O=s.hemi[U];O.direction.setFromMatrixPosition(I.matrixWorld),O.direction.transformDirection(S),U++}}}return{setup:m,setupView:g,state:s}}function sv(o){const t=new EA(o),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function h(x){i.push(x)}function m(x){s.push(x)}function g(x){l.push(x)}function p(){t.setup(i)}function y(x){t.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:y,pushLight:h,pushShadow:m,pushLightProbeGrid:g}}function TA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let m;return h===void 0?(m=new sv(o),t.set(l,[m])):c>=h.length?(m=new sv(o),h.push(m)):m=h[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
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
}`,CA=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],RA=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],rv=new An,Vo=new le,Zf=new le;function NA(o,t,i){let s=new Ov;const l=new Kt,c=new Kt,h=new vn,m=new VS,g=new XS,p={},y=i.maxTextureSize,_={[ps]:ni,[ni]:ps,[Ri]:Ri},x=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:AA,fragmentShader:wA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new ai;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Yn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let b=this.type;this.render=function(P,B,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===L1&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const F=o.getRenderTarget(),K=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(La),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const de=b!==this.type;de&&B.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(W=>W.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,W=P.length;pe<W;pe++){const z=P[pe],j=z.shadow;if(j===void 0){mt("WebGLShadowMap:",z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ie=j.getFrameExtents();l.multiply(ie),c.copy(j.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/ie.x),l.x=c.x*ie.x,j.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/ie.y),l.y=c.y*ie.y,j.mapSize.y=c.y));const _e=o.state.buffers.depth.getReversed();if(j.camera._reversedDepth=_e,j.map===null||de===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Wo){if(z.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new sa(l.x,l.y,{format:Gs,type:za,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),j.map.texture.name=z.name+".shadowMap",j.map.depthTexture=new Gr(l.x,l.y,na),j.map.depthTexture.name=z.name+".shadowMapDepth",j.map.depthTexture.format=Oa,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=In,j.map.depthTexture.magFilter=In}else z.isPointLight?(j.map=new Vv(l.x),j.map.depthTexture=new FS(l.x,ra)):(j.map=new sa(l.x,l.y),j.map.depthTexture=new Gr(l.x,l.y,ra)),j.map.depthTexture.name=z.name+".shadowMap",j.map.depthTexture.format=Oa,this.type===Fc?(j.map.depthTexture.compareFunction=_e?ep:$h,j.map.depthTexture.minFilter=Hn,j.map.depthTexture.magFilter=Hn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=In,j.map.depthTexture.magFilter=In);j.camera.updateProjectionMatrix()}const se=j.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<se;D++){if(j.map.isWebGLCubeRenderTarget)o.setRenderTarget(j.map,D),o.clear();else{D===0&&(o.setRenderTarget(j.map),o.clear());const V=j.getViewport(D);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),Z.viewport(h)}if(z.isPointLight){const V=j.camera,k=j.matrix,me=z.distance||V.far;me!==V.far&&(V.far=me,V.updateProjectionMatrix()),Vo.setFromMatrixPosition(z.matrixWorld),V.position.copy(Vo),Zf.copy(V.position),Zf.add(CA[D]),V.up.copy(RA[D]),V.lookAt(Zf),V.updateMatrixWorld(),k.makeTranslation(-Vo.x,-Vo.y,-Vo.z),rv.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j._frustum.setFromProjectionMatrix(rv,V.coordinateSystem,V.reversedDepth)}else j.updateMatrices(z);s=j.getFrustum(),O(B,A,j.camera,z,this.type)}j.isPointLightShadow!==!0&&this.type===Wo&&L(j,A),j.needsUpdate=!1}b=this.type,S.needsUpdate=!1,o.setRenderTarget(F,K,H)};function L(P,B){const A=t.update(U);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new sa(l.x,l.y,{format:Gs,type:za})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(B,null,A,x,U,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(B,null,A,M,U,null)}function I(P,B,A,F){let K=null;const H=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)K=H;else if(K=A.isPointLight===!0?g:m,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=K.uuid,de=B.uuid;let pe=p[Z];pe===void 0&&(pe={},p[Z]=pe);let W=pe[de];W===void 0&&(W=K.clone(),pe[de]=W,B.addEventListener("dispose",X)),K=W}if(K.visible=B.visible,K.wireframe=B.wireframe,F===Wo?K.side=B.shadowSide!==null?B.shadowSide:B.side:K.side=B.shadowSide!==null?B.shadowSide:_[B.side],K.alphaMap=B.alphaMap,K.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,K.map=B.map,K.clipShadows=B.clipShadows,K.clippingPlanes=B.clippingPlanes,K.clipIntersection=B.clipIntersection,K.displacementMap=B.displacementMap,K.displacementScale=B.displacementScale,K.displacementBias=B.displacementBias,K.wireframeLinewidth=B.wireframeLinewidth,K.linewidth=B.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const Z=o.properties.get(K);Z.light=A}return K}function O(P,B,A,F,K){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&K===Wo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const de=t.update(P),pe=P.material;if(Array.isArray(pe)){const W=de.groups;for(let z=0,j=W.length;z<j;z++){const ie=W[z],_e=pe[ie.materialIndex];if(_e&&_e.visible){const se=I(P,_e,F,K);P.onBeforeShadow(o,P,B,A,de,se,ie),o.renderBufferDirect(A,null,de,se,P,ie),P.onAfterShadow(o,P,B,A,de,se,ie)}}}else if(pe.visible){const W=I(P,pe,F,K);P.onBeforeShadow(o,P,B,A,de,W,null),o.renderBufferDirect(A,null,de,W,P,null),P.onAfterShadow(o,P,B,A,de,W,null)}}const Z=P.children;for(let de=0,pe=Z.length;de<pe;de++)O(Z[de],B,A,F,K)}function X(P){P.target.removeEventListener("dispose",X);for(const A in p){const F=p[A],K=P.target.uuid;K in F&&(F[K].dispose(),delete F[K])}}}function DA(o,t){function i(){let q=!1;const ze=new vn;let Se=null;const Xe=new vn(0,0,0,0);return{setMask:function(je){Se!==je&&!q&&(o.colorMask(je,je,je,je),Se=je)},setLocked:function(je){q=je},setClear:function(je,Ne,Ye,ot,nn){nn===!0&&(je*=ot,Ne*=ot,Ye*=ot),ze.set(je,Ne,Ye,ot),Xe.equals(ze)===!1&&(o.clearColor(je,Ne,Ye,ot),Xe.copy(ze))},reset:function(){q=!1,Se=null,Xe.set(-1,0,0,0)}}}function s(){let q=!1,ze=!1,Se=null,Xe=null,je=null;return{setReversed:function(Ne){if(ze!==Ne){const Ye=t.get("EXT_clip_control");Ne?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ze=Ne;const ot=je;je=null,this.setClear(ot)}},getReversed:function(){return ze},setTest:function(Ne){Ne?we(o.DEPTH_TEST):Ve(o.DEPTH_TEST)},setMask:function(Ne){Se!==Ne&&!q&&(o.depthMask(Ne),Se=Ne)},setFunc:function(Ne){if(ze&&(Ne=dS[Ne]),Xe!==Ne){switch(Ne){case eh:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case nh:o.depthFunc(o.LESS);break;case jr:o.depthFunc(o.LEQUAL);break;case ih:o.depthFunc(o.EQUAL);break;case ah:o.depthFunc(o.GEQUAL);break;case sh:o.depthFunc(o.GREATER);break;case rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xe=Ne}},setLocked:function(Ne){q=Ne},setClear:function(Ne){je!==Ne&&(je=Ne,ze&&(Ne=1-Ne),o.clearDepth(Ne))},reset:function(){q=!1,Se=null,Xe=null,je=null,ze=!1}}}function l(){let q=!1,ze=null,Se=null,Xe=null,je=null,Ne=null,Ye=null,ot=null,nn=null;return{setTest:function(Bt){q||(Bt?we(o.STENCIL_TEST):Ve(o.STENCIL_TEST))},setMask:function(Bt){ze!==Bt&&!q&&(o.stencilMask(Bt),ze=Bt)},setFunc:function(Bt,nt,Vn){(Se!==Bt||Xe!==nt||je!==Vn)&&(o.stencilFunc(Bt,nt,Vn),Se=Bt,Xe=nt,je=Vn)},setOp:function(Bt,nt,Vn){(Ne!==Bt||Ye!==nt||ot!==Vn)&&(o.stencilOp(Bt,nt,Vn),Ne=Bt,Ye=nt,ot=Vn)},setLocked:function(Bt){q=Bt},setClear:function(Bt){nn!==Bt&&(o.clearStencil(Bt),nn=Bt)},reset:function(){q=!1,ze=null,Se=null,Xe=null,je=null,Ne=null,Ye=null,ot=null,nn=null}}}const c=new i,h=new s,m=new l,g=new WeakMap,p=new WeakMap;let y={},_={},x={},M=new WeakMap,T=[],U=null,S=!1,b=null,L=null,I=null,O=null,X=null,P=null,B=null,A=new kt(0,0,0),F=0,K=!1,H=null,Z=null,de=null,pe=null,W=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ie=0;const _e=o.getParameter(o.VERSION);_e.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(_e)[1]),j=ie>=1):_e.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),j=ie>=2);let se=null,D={};const V=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),me=new vn().fromArray(V),Ae=new vn().fromArray(k);function $(q,ze,Se,Xe){const je=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(q,Ne),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ye=0;Ye<Se;Ye++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(ze,0,o.RGBA,1,1,Xe,0,o.RGBA,o.UNSIGNED_BYTE,je):o.texImage2D(ze+Ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,je);return Ne}const Te={};Te[o.TEXTURE_2D]=$(o.TEXTURE_2D,o.TEXTURE_2D,1),Te[o.TEXTURE_CUBE_MAP]=$(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[o.TEXTURE_2D_ARRAY]=$(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Te[o.TEXTURE_3D]=$(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),we(o.DEPTH_TEST),h.setFunc(jr),Ft(!1),Nt(lx),we(o.CULL_FACE),Et(La);function we(q){y[q]!==!0&&(o.enable(q),y[q]=!0)}function Ve(q){y[q]!==!1&&(o.disable(q),y[q]=!1)}function et(q,ze){return x[q]!==ze?(o.bindFramebuffer(q,ze),x[q]=ze,q===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=ze),q===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=ze),!0):!1}function Je(q,ze){let Se=T,Xe=!1;if(q){Se=M.get(ze),Se===void 0&&(Se=[],M.set(ze,Se));const je=q.textures;if(Se.length!==je.length||Se[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,Ye=je.length;Ne<Ye;Ne++)Se[Ne]=o.COLOR_ATTACHMENT0+Ne;Se.length=je.length,Xe=!0}}else Se[0]!==o.BACK&&(Se[0]=o.BACK,Xe=!0);Xe&&o.drawBuffers(Se)}function yt(q){return U!==q?(o.useProgram(q),U=q,!0):!1}const ft={[Fs]:o.FUNC_ADD,[z1]:o.FUNC_SUBTRACT,[O1]:o.FUNC_REVERSE_SUBTRACT};ft[P1]=o.MIN,ft[I1]=o.MAX;const dt={[F1]:o.ZERO,[B1]:o.ONE,[k1]:o.SRC_COLOR,[Jf]:o.SRC_ALPHA,[W1]:o.SRC_ALPHA_SATURATE,[V1]:o.DST_COLOR,[H1]:o.DST_ALPHA,[j1]:o.ONE_MINUS_SRC_COLOR,[$f]:o.ONE_MINUS_SRC_ALPHA,[X1]:o.ONE_MINUS_DST_COLOR,[G1]:o.ONE_MINUS_DST_ALPHA,[q1]:o.CONSTANT_COLOR,[Y1]:o.ONE_MINUS_CONSTANT_COLOR,[Z1]:o.CONSTANT_ALPHA,[K1]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(q,ze,Se,Xe,je,Ne,Ye,ot,nn,Bt){if(q===La){S===!0&&(Ve(o.BLEND),S=!1);return}if(S===!1&&(we(o.BLEND),S=!0),q!==U1){if(q!==b||Bt!==K){if((L!==Fs||X!==Fs)&&(o.blendEquation(o.FUNC_ADD),L=Fs,X=Fs),Bt)switch(q){case Br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yo:o.blendFunc(o.ONE,o.ONE);break;case cx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ux:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:jt("WebGLState: Invalid blending: ",q);break}else switch(q){case Br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case cx:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ux:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",q);break}I=null,O=null,P=null,B=null,A.set(0,0,0),F=0,b=q,K=Bt}return}je=je||ze,Ne=Ne||Se,Ye=Ye||Xe,(ze!==L||je!==X)&&(o.blendEquationSeparate(ft[ze],ft[je]),L=ze,X=je),(Se!==I||Xe!==O||Ne!==P||Ye!==B)&&(o.blendFuncSeparate(dt[Se],dt[Xe],dt[Ne],dt[Ye]),I=Se,O=Xe,P=Ne,B=Ye),(ot.equals(A)===!1||nn!==F)&&(o.blendColor(ot.r,ot.g,ot.b,nn),A.copy(ot),F=nn),b=q,K=!1}function tt(q,ze){q.side===Ri?Ve(o.CULL_FACE):we(o.CULL_FACE);let Se=q.side===ni;ze&&(Se=!Se),Ft(Se),q.blending===Br&&q.transparent===!1?Et(La):Et(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Xe=q.stencilWrite;m.setTest(Xe),Xe&&(m.setMask(q.stencilWriteMask),m.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),m.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Q(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?we(o.SAMPLE_ALPHA_TO_COVERAGE):Ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(q){H!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),H=q)}function Nt(q){q!==N1?(we(o.CULL_FACE),q!==Z&&(q===lx?o.cullFace(o.BACK):q===D1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ve(o.CULL_FACE),Z=q}function un(q){q!==de&&(j&&o.lineWidth(q),de=q)}function Q(q,ze,Se){q?(we(o.POLYGON_OFFSET_FILL),(pe!==ze||W!==Se)&&(pe=ze,W=Se,h.getReversed()&&(ze=-ze),o.polygonOffset(ze,Se))):Ve(o.POLYGON_OFFSET_FILL)}function Ze(q){q?we(o.SCISSOR_TEST):Ve(o.SCISSOR_TEST)}function it(q){q===void 0&&(q=o.TEXTURE0+z-1),se!==q&&(o.activeTexture(q),se=q)}function st(q,ze,Se){Se===void 0&&(se===null?Se=o.TEXTURE0+z-1:Se=se);let Xe=D[Se];Xe===void 0&&(Xe={type:void 0,texture:void 0},D[Se]=Xe),(Xe.type!==q||Xe.texture!==ze)&&(se!==Se&&(o.activeTexture(Se),se=Se),o.bindTexture(q,ze||Te[q]),Xe.type=q,Xe.texture=ze)}function Ue(){const q=D[se];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function rt(){try{o.compressedTexImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function R(){try{o.compressedTexImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function E(){try{o.texSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function ee(){try{o.texSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function ye(){try{o.compressedTexSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function Re(){try{o.compressedTexSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function Pe(){try{o.texStorage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function Ie(){try{o.texStorage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function xe(){try{o.texImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function ge(){try{o.texImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function ke(q){return _[q]!==void 0?_[q]:o.getParameter(q)}function He(q,ze){_[q]!==ze&&(o.pixelStorei(q,ze),_[q]=ze)}function Be(q){me.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),me.copy(q))}function Fe(q){Ae.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function ht(q,ze){let Se=p.get(ze);Se===void 0&&(Se=new WeakMap,p.set(ze,Se));let Xe=Se.get(q);Xe===void 0&&(Xe=o.getUniformBlockIndex(ze,q.name),Se.set(q,Xe))}function pt(q,ze){const Xe=p.get(ze).get(q);g.get(ze)!==Xe&&(o.uniformBlockBinding(ze,Xe,q.__bindingPointIndex),g.set(ze,Xe))}function St(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),y={},_={},se=null,D={},x={},M=new WeakMap,T=[],U=null,S=!1,b=null,L=null,I=null,O=null,X=null,P=null,B=null,A=new kt(0,0,0),F=0,K=!1,H=null,Z=null,de=null,pe=null,W=null,me.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:we,disable:Ve,bindFramebuffer:et,drawBuffers:Je,useProgram:yt,setBlending:Et,setMaterial:tt,setFlipSided:Ft,setCullFace:Nt,setLineWidth:un,setPolygonOffset:Q,setScissorTest:Ze,activeTexture:it,bindTexture:st,unbindTexture:Ue,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:xe,texImage3D:ge,pixelStorei:He,getParameter:ke,updateUBOMapping:ht,uniformBlockBinding:pt,texStorage2D:Pe,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ye,compressedTexSubImage3D:Re,scissor:Be,viewport:Fe,reset:St}}function LA(o,t,i,s,l,c,h){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Kt,y=new WeakMap,_=new Set;let x;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(R,E){return T?new OffscreenCanvas(R,E):Kc("canvas")}function S(R,E,ee){let ye=1;const Re=rt(R);if((Re.width>ee||Re.height>ee)&&(ye=ee/Math.max(Re.width,Re.height)),ye<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Pe=Math.floor(ye*Re.width),Ie=Math.floor(ye*Re.height);x===void 0&&(x=U(Pe,Ie));const xe=E?U(Pe,Ie):x;return xe.width=Pe,xe.height=Ie,xe.getContext("2d").drawImage(R,0,0,Pe,Ie),mt("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+Pe+"x"+Ie+")."),xe}else return"data"in R&&mt("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),R;return R}function b(R){return R.generateMipmaps}function L(R){o.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?o.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(R,E,ee,ye,Re,Pe=!1){if(R!==null){if(o[R]!==void 0)return o[R];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ie;ye&&(Ie=t.get("EXT_texture_norm16"),Ie||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===o.RED&&(ee===o.FLOAT&&(xe=o.R32F),ee===o.HALF_FLOAT&&(xe=o.R16F),ee===o.UNSIGNED_BYTE&&(xe=o.R8),ee===o.UNSIGNED_SHORT&&Ie&&(xe=Ie.R16_EXT),ee===o.SHORT&&Ie&&(xe=Ie.R16_SNORM_EXT)),E===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(xe=o.R8UI),ee===o.UNSIGNED_SHORT&&(xe=o.R16UI),ee===o.UNSIGNED_INT&&(xe=o.R32UI),ee===o.BYTE&&(xe=o.R8I),ee===o.SHORT&&(xe=o.R16I),ee===o.INT&&(xe=o.R32I)),E===o.RG&&(ee===o.FLOAT&&(xe=o.RG32F),ee===o.HALF_FLOAT&&(xe=o.RG16F),ee===o.UNSIGNED_BYTE&&(xe=o.RG8),ee===o.UNSIGNED_SHORT&&Ie&&(xe=Ie.RG16_EXT),ee===o.SHORT&&Ie&&(xe=Ie.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(xe=o.RG8UI),ee===o.UNSIGNED_SHORT&&(xe=o.RG16UI),ee===o.UNSIGNED_INT&&(xe=o.RG32UI),ee===o.BYTE&&(xe=o.RG8I),ee===o.SHORT&&(xe=o.RG16I),ee===o.INT&&(xe=o.RG32I)),E===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(xe=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(xe=o.RGB16UI),ee===o.UNSIGNED_INT&&(xe=o.RGB32UI),ee===o.BYTE&&(xe=o.RGB8I),ee===o.SHORT&&(xe=o.RGB16I),ee===o.INT&&(xe=o.RGB32I)),E===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(xe=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(xe=o.RGBA16UI),ee===o.UNSIGNED_INT&&(xe=o.RGBA32UI),ee===o.BYTE&&(xe=o.RGBA8I),ee===o.SHORT&&(xe=o.RGBA16I),ee===o.INT&&(xe=o.RGBA32I)),E===o.RGB&&(ee===o.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGB16_EXT),ee===o.SHORT&&Ie&&(xe=Ie.RGB16_SNORM_EXT),ee===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),ee===o.UNSIGNED_INT_10F_11F_11F_REV&&(xe=o.R11F_G11F_B10F)),E===o.RGBA){const ge=Pe?Yc:Pt.getTransfer(Re);ee===o.FLOAT&&(xe=o.RGBA32F),ee===o.HALF_FLOAT&&(xe=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(xe=ge===Zt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGBA16_EXT),ee===o.SHORT&&Ie&&(xe=Ie.RGBA16_SNORM_EXT),ee===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function X(R,E){let ee;return R?E===null||E===ra||E===Qo?ee=o.DEPTH24_STENCIL8:E===na?ee=o.DEPTH32F_STENCIL8:E===Ko&&(ee=o.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ra||E===Qo?ee=o.DEPTH_COMPONENT24:E===na?ee=o.DEPTH_COMPONENT32F:E===Ko&&(ee=o.DEPTH_COMPONENT16),ee}function P(R,E){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==In&&R.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function B(R){const E=R.target;E.removeEventListener("dispose",B),F(E),E.isVideoTexture&&y.delete(E),E.isHTMLTexture&&_.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),H(E)}function F(R){const E=s.get(R);if(E.__webglInit===void 0)return;const ee=R.source,ye=M.get(ee);if(ye){const Re=ye[E.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&K(R),Object.keys(ye).length===0&&M.delete(ee)}s.remove(R)}function K(R){const E=s.get(R);o.deleteTexture(E.__webglTexture);const ee=R.source,ye=M.get(ee);delete ye[E.__cacheKey],h.memory.textures--}function H(R){const E=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(E.__webglFramebuffer[ye]))for(let Re=0;Re<E.__webglFramebuffer[ye].length;Re++)o.deleteFramebuffer(E.__webglFramebuffer[ye][Re]);else o.deleteFramebuffer(E.__webglFramebuffer[ye]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ye])}else{if(Array.isArray(E.__webglFramebuffer))for(let ye=0;ye<E.__webglFramebuffer.length;ye++)o.deleteFramebuffer(E.__webglFramebuffer[ye]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ye=0;ye<E.__webglColorRenderbuffer.length;ye++)E.__webglColorRenderbuffer[ye]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ye]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=R.textures;for(let ye=0,Re=ee.length;ye<Re;ye++){const Pe=s.get(ee[ye]);Pe.__webglTexture&&(o.deleteTexture(Pe.__webglTexture),h.memory.textures--),s.remove(ee[ye])}s.remove(R)}let Z=0;function de(){Z=0}function pe(){return Z}function W(R){Z=R}function z(){const R=Z;return R>=l.maxTextures&&mt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),Z+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ie(R,E){const ee=s.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ee.__version!==R.version){const ye=R.image;if(ye===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(ee,R,E);return}}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+E)}function _e(R,E){const ee=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){Ve(ee,R,E);return}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+E)}function se(R,E){const ee=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){Ve(ee,R,E);return}i.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+E)}function D(R,E){const ee=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&ee.__version!==R.version){et(ee,R,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+E)}const V={[oh]:o.REPEAT,[Da]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},k={[In]:o.NEAREST,[$1]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[_f]:o.LINEAR_MIPMAP_NEAREST,[ks]:o.LINEAR_MIPMAP_LINEAR},me={[nS]:o.NEVER,[oS]:o.ALWAYS,[iS]:o.LESS,[$h]:o.LEQUAL,[aS]:o.EQUAL,[ep]:o.GEQUAL,[sS]:o.GREATER,[rS]:o.NOTEQUAL};function Ae(R,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===_f||E.magFilter===hc||E.magFilter===ks||E.minFilter===Hn||E.minFilter===_f||E.minFilter===hc||E.minFilter===ks)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(R,o.TEXTURE_WRAP_S,V[E.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,V[E.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,V[E.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,k[E.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,k[E.minFilter]),E.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==hc&&E.minFilter!==ks||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ee=t.get("EXT_texture_filter_anisotropic");o.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function $(R,E){let ee=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",B));const ye=E.source;let Re=M.get(ye);Re===void 0&&(Re={},M.set(ye,Re));const Pe=j(E);if(Pe!==R.__cacheKey){Re[Pe]===void 0&&(Re[Pe]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),Re[Pe].usedTimes++;const Ie=Re[R.__cacheKey];Ie!==void 0&&(Re[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&K(E)),R.__cacheKey=Pe,R.__webglTexture=Re[Pe].texture}return ee}function Te(R,E,ee){return Math.floor(Math.floor(R/ee)/E)}function we(R,E,ee,ye){const Pe=R.updateRanges;if(Pe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,ee,ye,E.data);else{Pe.sort((He,Be)=>He.start-Be.start);let Ie=0;for(let He=1;He<Pe.length;He++){const Be=Pe[Ie],Fe=Pe[He],ht=Be.start+Be.count,pt=Te(Fe.start,E.width,4),St=Te(Be.start,E.width,4);Fe.start<=ht+1&&pt===St&&Te(Fe.start+Fe.count-1,E.width,4)===pt?Be.count=Math.max(Be.count,Fe.start+Fe.count-Be.start):(++Ie,Pe[Ie]=Fe)}Pe.length=Ie+1;const xe=i.getParameter(o.UNPACK_ROW_LENGTH),ge=i.getParameter(o.UNPACK_SKIP_PIXELS),ke=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let He=0,Be=Pe.length;He<Be;He++){const Fe=Pe[He],ht=Math.floor(Fe.start/4),pt=Math.ceil(Fe.count/4),St=ht%E.width,q=Math.floor(ht/E.width),ze=pt,Se=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,St),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,St,q,ze,Se,ee,ye,E.data)}R.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,xe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(o.UNPACK_SKIP_ROWS,ke)}}function Ve(R,E,ee){let ye=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=o.TEXTURE_3D);const Re=$(R,E),Pe=E.source;i.bindTexture(ye,R.__webglTexture,o.TEXTURE0+ee);const Ie=s.get(Pe);if(Pe.version!==Ie.__version||Re===!0){if(i.activeTexture(o.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Se=Pt.getPrimaries(Pt.workingColorSpace),Xe=E.colorSpace===fs?null:Pt.getPrimaries(E.colorSpace),je=E.colorSpace===fs||Se===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=S(E.image,!1,l.maxTextureSize);ge=Ue(E,ge);const ke=c.convert(E.format,E.colorSpace),He=c.convert(E.type);let Be=O(E.internalFormat,ke,He,E.normalized,E.colorSpace,E.isVideoTexture);Ae(ye,E);let Fe;const ht=E.mipmaps,pt=E.isVideoTexture!==!0,St=Ie.__version===void 0||Re===!0,q=Pe.dataReady,ze=P(E,ge);if(E.isDepthTexture)Be=X(E.format===js,E.type),St&&(pt?i.texStorage2D(o.TEXTURE_2D,1,Be,ge.width,ge.height):i.texImage2D(o.TEXTURE_2D,0,Be,ge.width,ge.height,0,ke,He,null));else if(E.isDataTexture)if(ht.length>0){pt&&St&&i.texStorage2D(o.TEXTURE_2D,ze,Be,ht[0].width,ht[0].height);for(let Se=0,Xe=ht.length;Se<Xe;Se++)Fe=ht[Se],pt?q&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ke,He,Fe.data):i.texImage2D(o.TEXTURE_2D,Se,Be,Fe.width,Fe.height,0,ke,He,Fe.data);E.generateMipmaps=!1}else pt?(St&&i.texStorage2D(o.TEXTURE_2D,ze,Be,ge.width,ge.height),q&&we(E,ge,ke,He)):i.texImage2D(o.TEXTURE_2D,0,Be,ge.width,ge.height,0,ke,He,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Be,ht[0].width,ht[0].height,ge.depth);for(let Se=0,Xe=ht.length;Se<Xe;Se++)if(Fe=ht[Se],E.format!==Gi)if(ke!==null)if(pt){if(q)if(E.layerUpdates.size>0){const je=Ix(Fe.width,Fe.height,E.format,E.type);for(const Ne of E.layerUpdates){const Ye=Fe.data.subarray(Ne*je/Fe.data.BYTES_PER_ELEMENT,(Ne+1)*je/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,Ne,Fe.width,Fe.height,1,ke,Ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Fe.width,Fe.height,ge.depth,ke,Fe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Be,Fe.width,Fe.height,ge.depth,0,Fe.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Fe.width,Fe.height,ge.depth,ke,He,Fe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Se,Be,Fe.width,Fe.height,ge.depth,0,ke,He,Fe.data)}else{pt&&St&&i.texStorage2D(o.TEXTURE_2D,ze,Be,ht[0].width,ht[0].height);for(let Se=0,Xe=ht.length;Se<Xe;Se++)Fe=ht[Se],E.format!==Gi?ke!==null?pt?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ke,Fe.data):i.compressedTexImage2D(o.TEXTURE_2D,Se,Be,Fe.width,Fe.height,0,Fe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?q&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Fe.width,Fe.height,ke,He,Fe.data):i.texImage2D(o.TEXTURE_2D,Se,Be,Fe.width,Fe.height,0,ke,He,Fe.data)}else if(E.isDataArrayTexture)if(pt){if(St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Be,ge.width,ge.height,ge.depth),q)if(E.layerUpdates.size>0){const Se=Ix(ge.width,ge.height,E.format,E.type);for(const Xe of E.layerUpdates){const je=ge.data.subarray(Xe*Se/ge.data.BYTES_PER_ELEMENT,(Xe+1)*Se/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Xe,ge.width,ge.height,1,ke,He,je)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ke,He,ge.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,ke,He,ge.data);else if(E.isData3DTexture)pt?(St&&i.texStorage3D(o.TEXTURE_3D,ze,Be,ge.width,ge.height,ge.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ke,He,ge.data)):i.texImage3D(o.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,ke,He,ge.data);else if(E.isFramebufferTexture){if(St)if(pt)i.texStorage2D(o.TEXTURE_2D,ze,Be,ge.width,ge.height);else{let Se=ge.width,Xe=ge.height;for(let je=0;je<ze;je++)i.texImage2D(o.TEXTURE_2D,je,Be,Se,Xe,0,ke,He,null),Se>>=1,Xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Se=o.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ge.parentNode!==Se){Se.appendChild(ge),_.add(E),Se.onpaint=ot=>{const nn=ot.changedElements;for(const Bt of _)nn.includes(Bt.image)&&(Bt.needsUpdate=!0)},Se.requestPaint();return}const Xe=0,je=o.RGBA,Ne=o.RGBA,Ye=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Xe,je,Ne,Ye,ge),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ht.length>0){if(pt&&St){const Se=rt(ht[0]);i.texStorage2D(o.TEXTURE_2D,ze,Be,Se.width,Se.height)}for(let Se=0,Xe=ht.length;Se<Xe;Se++)Fe=ht[Se],pt?q&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,ke,He,Fe):i.texImage2D(o.TEXTURE_2D,Se,Be,ke,He,Fe);E.generateMipmaps=!1}else if(pt){if(St){const Se=rt(ge);i.texStorage2D(o.TEXTURE_2D,ze,Be,Se.width,Se.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,He,ge)}else i.texImage2D(o.TEXTURE_2D,0,Be,ke,He,ge);b(E)&&L(ye),Ie.__version=Pe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function et(R,E,ee){if(E.image.length!==6)return;const ye=$(R,E),Re=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+ee);const Pe=s.get(Re);if(Re.version!==Pe.__version||ye===!0){i.activeTexture(o.TEXTURE0+ee);const Ie=Pt.getPrimaries(Pt.workingColorSpace),xe=E.colorSpace===fs?null:Pt.getPrimaries(E.colorSpace),ge=E.colorSpace===fs||Ie===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,He=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Ne=0;Ne<6;Ne++)!ke&&!He?Be[Ne]=S(E.image[Ne],!0,l.maxCubemapSize):Be[Ne]=He?E.image[Ne].image:E.image[Ne],Be[Ne]=Ue(E,Be[Ne]);const Fe=Be[0],ht=c.convert(E.format,E.colorSpace),pt=c.convert(E.type),St=O(E.internalFormat,ht,pt,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,ze=Pe.__version===void 0||ye===!0,Se=Re.dataReady;let Xe=P(E,Fe);Ae(o.TEXTURE_CUBE_MAP,E);let je;if(ke){q&&ze&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,St,Fe.width,Fe.height);for(let Ne=0;Ne<6;Ne++){je=Be[Ne].mipmaps;for(let Ye=0;Ye<je.length;Ye++){const ot=je[Ye];E.format!==Gi?ht!==null?q?Se&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye,0,0,ot.width,ot.height,ht,ot.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye,St,ot.width,ot.height,0,ot.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye,0,0,ot.width,ot.height,ht,pt,ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye,St,ot.width,ot.height,0,ht,pt,ot.data)}}}else{if(je=E.mipmaps,q&&ze){je.length>0&&Xe++;const Ne=rt(Be[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,St,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(He){q?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Be[Ne].width,Be[Ne].height,ht,pt,Be[Ne].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,St,Be[Ne].width,Be[Ne].height,0,ht,pt,Be[Ne].data);for(let Ye=0;Ye<je.length;Ye++){const nn=je[Ye].image[Ne].image;q?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye+1,0,0,nn.width,nn.height,ht,pt,nn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye+1,St,nn.width,nn.height,0,ht,pt,nn.data)}}else{q?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ht,pt,Be[Ne]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,St,ht,pt,Be[Ne]);for(let Ye=0;Ye<je.length;Ye++){const ot=je[Ye];q?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye+1,0,0,ht,pt,ot.image[Ne]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ye+1,St,ht,pt,ot.image[Ne])}}}b(E)&&L(o.TEXTURE_CUBE_MAP),Pe.__version=Re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Je(R,E,ee,ye,Re,Pe){const Ie=c.convert(ee.format,ee.colorSpace),xe=c.convert(ee.type),ge=O(ee.internalFormat,Ie,xe,ee.normalized,ee.colorSpace),ke=s.get(E),He=s.get(ee);if(He.__renderTarget=E,!ke.__hasExternalTextures){const Be=Math.max(1,E.width>>Pe),Fe=Math.max(1,E.height>>Pe);Re===o.TEXTURE_3D||Re===o.TEXTURE_2D_ARRAY?i.texImage3D(Re,Pe,ge,Be,Fe,E.depth,0,Ie,xe,null):i.texImage2D(Re,Pe,ge,Be,Fe,0,Ie,xe,null)}i.bindFramebuffer(o.FRAMEBUFFER,R),it(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,Re,He.__webglTexture,0,Ze(E)):(Re===o.TEXTURE_2D||Re>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ye,Re,He.__webglTexture,Pe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(R,E,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,R),E.depthBuffer){const ye=E.depthTexture,Re=ye&&ye.isDepthTexture?ye.type:null,Pe=X(E.stencilBuffer,Re),Ie=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;it(E)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ze(E),Pe,E.width,E.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze(E),Pe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Pe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,R)}else{const ye=E.textures;for(let Re=0;Re<ye.length;Re++){const Pe=ye[Re],Ie=c.convert(Pe.format,Pe.colorSpace),xe=c.convert(Pe.type),ge=O(Pe.internalFormat,Ie,xe,Pe.normalized,Pe.colorSpace);it(E)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ze(E),ge,E.width,E.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze(E),ge,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ge,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ft(R,E,ee){const ye=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=s.get(E.depthTexture);if(Re.__renderTarget=E,(!Re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ye){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Re.__webglTexture===void 0){Re.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Re.__webglTexture),Ae(o.TEXTURE_CUBE_MAP,E.depthTexture);const ke=c.convert(E.depthTexture.format),He=c.convert(E.depthTexture.type);let Be;E.depthTexture.format===Oa?Be=o.DEPTH_COMPONENT24:E.depthTexture.format===js&&(Be=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Be,E.width,E.height,0,ke,He,null)}}else ie(E.depthTexture,0);const Pe=Re.__webglTexture,Ie=Ze(E),xe=ye?o.TEXTURE_CUBE_MAP_POSITIVE_X+ee:o.TEXTURE_2D,ge=E.depthTexture.format===js?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oa)it(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,xe,Pe,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,ge,xe,Pe,0);else if(E.depthTexture.format===js)it(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,xe,Pe,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,ge,xe,Pe,0);else throw new Error("Unknown depthTexture format")}function dt(R){const E=s.get(R),ee=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ye=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ye){const Re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ye.removeEventListener("dispose",Re)};ye.addEventListener("dispose",Re),E.__depthDisposeCallback=Re}E.__boundDepthTexture=ye}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ye=0;ye<6;ye++)ft(E.__webglFramebuffer[ye],R,ye);else{const ye=R.texture.mipmaps;ye&&ye.length>0?ft(E.__webglFramebuffer[0],R,0):ft(E.__webglFramebuffer,R,0)}else if(ee){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]===void 0)E.__webglDepthbuffer[ye]=o.createRenderbuffer(),yt(E.__webglDepthbuffer[ye],R,!1);else{const Re=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=E.__webglDepthbuffer[ye];o.bindRenderbuffer(o.RENDERBUFFER,Pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,Pe)}}else{const ye=R.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),yt(E.__webglDepthbuffer,R,!1);else{const Re=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,Pe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(R,E,ee){const ye=s.get(R);E!==void 0&&Je(ye.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&dt(R)}function tt(R){const E=R.texture,ee=s.get(R),ye=s.get(E);R.addEventListener("dispose",A);const Re=R.textures,Pe=R.isWebGLCubeRenderTarget===!0,Ie=Re.length>1;if(Ie||(ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture()),ye.__version=E.version,h.memory.textures++),Pe){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[xe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)ee.__webglFramebuffer[xe][ge]=o.createFramebuffer()}else ee.__webglFramebuffer[xe]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)ee.__webglFramebuffer[xe]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let xe=0,ge=Re.length;xe<ge;xe++){const ke=s.get(Re[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=o.createTexture(),h.memory.textures++)}if(R.samples>0&&it(R)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let xe=0;xe<Re.length;xe++){const ge=Re[xe];ee.__webglColorRenderbuffer[xe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const ke=c.convert(ge.format,ge.colorSpace),He=c.convert(ge.type),Be=O(ge.internalFormat,ke,He,ge.normalized,ge.colorSpace,R.isXRRenderTarget===!0),Fe=Ze(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Be,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,ee.__webglColorRenderbuffer[xe])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(ee.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Pe){i.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),Ae(o.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Je(ee.__webglFramebuffer[xe][ge],R,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ge);else Je(ee.__webglFramebuffer[xe],R,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);b(E)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let xe=0,ge=Re.length;xe<ge;xe++){const ke=Re[xe],He=s.get(ke);let Be=o.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Be=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Be,He.__webglTexture),Ae(Be,ke),Je(ee.__webglFramebuffer,R,ke,o.COLOR_ATTACHMENT0+xe,Be,0),b(ke)&&L(Be)}i.unbindTexture()}else{let xe=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xe,ye.__webglTexture),Ae(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Je(ee.__webglFramebuffer[ge],R,E,o.COLOR_ATTACHMENT0,xe,ge);else Je(ee.__webglFramebuffer,R,E,o.COLOR_ATTACHMENT0,xe,0);b(E)&&L(xe),i.unbindTexture()}R.depthBuffer&&dt(R)}function Ft(R){const E=R.textures;for(let ee=0,ye=E.length;ee<ye;ee++){const Re=E[ee];if(b(Re)){const Pe=I(R),Ie=s.get(Re).__webglTexture;i.bindTexture(Pe,Ie),L(Pe),i.unbindTexture()}}}const Nt=[],un=[];function Q(R){if(R.samples>0){if(it(R)===!1){const E=R.textures,ee=R.width,ye=R.height;let Re=o.COLOR_BUFFER_BIT;const Pe=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=s.get(R),xe=E.length>1;if(xe)for(let ke=0;ke<E.length;ke++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ge=R.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Re|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Re|=o.STENCIL_BUFFER_BIT)),xe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const He=s.get(E[ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,He,0)}o.blitFramebuffer(0,0,ee,ye,0,0,ee,ye,Re,o.NEAREST),g===!0&&(Nt.length=0,un.length=0,Nt.push(o.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(Pe),un.push(Pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,un)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xe)for(let ke=0;ke<E.length;ke++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const He=s.get(E[ke]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,He,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&g){const E=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ze(R){return Math.min(l.maxSamples,R.samples)}function it(R){const E=s.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(R){const E=h.render.frame;y.get(R)!==E&&(y.set(R,E),R.update())}function Ue(R,E){const ee=R.colorSpace,ye=R.format,Re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ee!==qc&&ee!==fs&&(Pt.getTransfer(ee)===Zt?(ye!==Gi||Re!==Ni)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",ee)),E}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=de,this.getTextureUnits=pe,this.setTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=_e,this.setTexture3D=se,this.setTextureCube=D,this.rebindTextures=Et,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function UA(o,t){function i(s,l=fs){let c;const h=Pt.getTransfer(l);if(s===Ni)return o.UNSIGNED_BYTE;if(s===Yh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Zh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ev)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===yv)return o.BYTE;if(s===Sv)return o.SHORT;if(s===Ko)return o.UNSIGNED_SHORT;if(s===qh)return o.INT;if(s===ra)return o.UNSIGNED_INT;if(s===na)return o.FLOAT;if(s===za)return o.HALF_FLOAT;if(s===Tv)return o.ALPHA;if(s===Av)return o.RGB;if(s===Gi)return o.RGBA;if(s===Oa)return o.DEPTH_COMPONENT;if(s===js)return o.DEPTH_STENCIL;if(s===wv)return o.RED;if(s===Kh)return o.RED_INTEGER;if(s===Gs)return o.RG;if(s===Qh)return o.RG_INTEGER;if(s===Jh)return o.RGBA_INTEGER;if(s===Bc||s===kc||s===jc||s===Hc)if(h===Zt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===dh||s===fh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh||s===gh||s===xh||s===Xc||s===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return h===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gh)return c.COMPRESSED_R11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xc)return c.COMPRESSED_RG11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_h||s===bh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh||s===Lh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_h)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ch)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lh)return h===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===zh||s===Oh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Uh)return h===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Ih||s===Wc||s===Fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
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

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Fv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Li({vertexShader:zA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new nl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Xs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,m="local-floor",g=1,p=null,y=null,_=null,x=null,M=null,T=null;const U=typeof XRWebGLBinding<"u",S=new PA,b={},L=i.getContextAttributes();let I=null,O=null;const X=[],P=[],B=new Kt;let A=null;const F=new Ci;F.viewport=new vn;const K=new Ci;K.viewport=new vn;const H=[F,K],Z=new qS;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Te=X[$];return Te===void 0&&(Te=new wf,X[$]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function($){let Te=X[$];return Te===void 0&&(Te=new wf,X[$]=Te),Te.getGripSpace()},this.getHand=function($){let Te=X[$];return Te===void 0&&(Te=new wf,X[$]=Te),Te.getHandSpace()};function W($){const Te=P.indexOf($.inputSource);if(Te===-1)return;const we=X[Te];we!==void 0&&(we.update($.inputSource,$.frame,p||h),we.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",j);for(let $=0;$<X.length;$++){const Te=P[$];Te!==null&&(P[$]=null,X[$].disconnect(Te))}de=null,pe=null,S.reset();for(const $ in b)delete b[$];t.setRenderTarget(I),M=null,x=null,_=null,l=null,O=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(A),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){m=$,s.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",z),l.addEventListener("inputsourceschange",j),L.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(B),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ve=null,et=null;L.depth&&(et=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=L.stencil?js:Oa,Ve=L.stencil?Qo:ra);const Je={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Je),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new sa(x.textureWidth,x.textureHeight,{format:Gi,type:Ni,depthTexture:new Gr(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new sa(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(m),Ae.setContext(l),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j($){for(let Te=0;Te<$.removed.length;Te++){const we=$.removed[Te],Ve=P.indexOf(we);Ve>=0&&(P[Ve]=null,X[Ve].disconnect(we))}for(let Te=0;Te<$.added.length;Te++){const we=$.added[Te];let Ve=P.indexOf(we);if(Ve===-1){for(let Je=0;Je<X.length;Je++)if(Je>=P.length){P.push(we),Ve=Je;break}else if(P[Je]===null){P[Je]=we,Ve=Je;break}if(Ve===-1)break}const et=X[Ve];et&&et.connect(we)}}const ie=new le,_e=new le;function se($,Te,we){ie.setFromMatrixPosition(Te.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const Ve=ie.distanceTo(_e),et=Te.projectionMatrix.elements,Je=we.projectionMatrix.elements,yt=et[14]/(et[10]-1),ft=et[14]/(et[10]+1),dt=(et[9]+1)/et[5],Et=(et[9]-1)/et[5],tt=(et[8]-1)/et[0],Ft=(Je[8]+1)/Je[0],Nt=yt*tt,un=yt*Ft,Q=Ve/(-tt+Ft),Ze=Q*-tt;if(Te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(Q),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),et[10]===-1)$.projectionMatrix.copy(Te.projectionMatrix),$.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const it=yt+Q,st=ft+Q,Ue=Nt-Ze,rt=un+(Ve-Ze),R=dt*ft/st*it,E=Et*ft/st*it;$.projectionMatrix.makePerspective(Ue,rt,R,E,it,st),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function D($,Te){Te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let Te=$.near,we=$.far;S.texture!==null&&(S.depthNear>0&&(Te=S.depthNear),S.depthFar>0&&(we=S.depthFar)),Z.near=K.near=F.near=Te,Z.far=K.far=F.far=we,(de!==Z.near||pe!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),de=Z.near,pe=Z.far),Z.layers.mask=$.layers.mask|6,F.layers.mask=Z.layers.mask&-5,K.layers.mask=Z.layers.mask&-3;const Ve=$.parent,et=Z.cameras;D(Z,Ve);for(let Je=0;Je<et.length;Je++)D(et[Je],Ve);et.length===2?se(Z,F,K):Z.projectionMatrix.copy(F.projectionMatrix),V($,Z,Ve)};function V($,Te,we){we===null?$.matrix.copy(Te.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(Te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Te.projectionMatrix),$.projectionMatrixInverse.copy(Te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return g},this.setFoveation=function($){g=$,x!==null&&(x.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function($){return b[$]};let k=null;function me($,Te){if(y=Te.getViewerPose(p||h),T=Te,y!==null){const we=y.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let Ve=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,Ve=!0);for(let ft=0;ft<we.length;ft++){const dt=we[ft];let Et=null;if(M!==null)Et=M.getViewport(dt);else{const Ft=_.getViewSubImage(x,dt);Et=Ft.viewport,ft===0&&(t.setRenderTargetTextures(O,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(O))}let tt=H[ft];tt===void 0&&(tt=new Ci,tt.layers.enable(ft),tt.viewport=new vn,H[ft]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Et.x,Et.y,Et.width,Et.height),ft===0&&(Z.matrix.copy(tt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ve===!0&&Z.cameras.push(tt)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const ft=_.getDepthInformation(we[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,l.renderState)}if(et&&et.includes("camera-access")&&U){t.state.unbindTexture(),_=s.getBinding();for(let ft=0;ft<we.length;ft++){const dt=we[ft].camera;if(dt){let Et=b[dt];Et||(Et=new Fv,b[dt]=Et);const tt=_.getCameraImage(dt);Et.sourceTexture=tt}}}}for(let we=0;we<X.length;we++){const Ve=P[we],et=X[we];Ve!==null&&et!==void 0&&et.update(Ve,Te,p||h)}k&&k($,Te),Te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Te}),T=null}const Ae=new Hv;Ae.setAnimationLoop(me),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}}const FA=new An,Zv=new bt;Zv.set(-1,0,0,0,1,0,0,0,1);function BA(o,t){function i(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function s(S,b){b.color.getRGB(S.fogColor.value,Bv(o)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function l(S,b,L,I,O){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(S,b):b.isMeshLambertMaterial?(c(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(S,b),_(S,b)):b.isMeshPhongMaterial?(c(S,b),y(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(S,b),x(S,b),b.isMeshPhysicalMaterial&&M(S,b,O)):b.isMeshMatcapMaterial?(c(S,b),T(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),U(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(h(S,b),b.isLineDashedMaterial&&m(S,b)):b.isPointsMaterial?g(S,b,L,I):b.isSpriteMaterial?p(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,i(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===ni&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,i(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===ni&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,i(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,i(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const L=t.get(b),I=L.envMap,O=L.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(O)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Zv),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,S.aoMapTransform))}function h(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform))}function m(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function g(S,b,L,I){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*L,S.scale.value=I*.5,b.map&&(S.map.value=b.map,i(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function y(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function _(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function x(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function M(S,b,L){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===ni&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,b){b.matcap&&(S.matcap.value=b.matcap)}function U(S,b){const L=t.get(b).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kA(o,t,i,s){let l={},c={},h=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,I){const O=I.program;s.uniformBlockBinding(L,O)}function p(L,I){let O=l[L.id];O===void 0&&(T(L),O=y(L),l[L.id]=O,L.addEventListener("dispose",S));const X=I.program;s.updateUBOMapping(L,X);const P=t.render.frame;c[L.id]!==P&&(x(L),c[L.id]=P)}function y(L){const I=_();L.__bindingPointIndex=I;const O=o.createBuffer(),X=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,X,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,O),O}function _(){for(let L=0;L<m;L++)if(h.indexOf(L)===-1)return h.push(L),L;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const I=l[L.id],O=L.uniforms,X=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let P=0,B=O.length;P<B;P++){const A=Array.isArray(O[P])?O[P]:[O[P]];for(let F=0,K=A.length;F<K;F++){const H=A[F];if(M(H,P,F,X)===!0){const Z=H.__offset,de=Array.isArray(H.value)?H.value:[H.value];let pe=0;for(let W=0;W<de.length;W++){const z=de[W],j=U(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Z+pe,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):ArrayBuffer.isView(z)?H.__data.set(new z.constructor(z.buffer,z.byteOffset,H.__data.length)):(z.toArray(H.__data,pe),pe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,I,O,X){const P=L.value,B=I+"_"+O;if(X[B]===void 0)return typeof P=="number"||typeof P=="boolean"?X[B]=P:ArrayBuffer.isView(P)?X[B]=P.slice():X[B]=P.clone(),!0;{const A=X[B];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return X[B]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(A.equals(P)===!1)return A.copy(P),!0}}return!1}function T(L){const I=L.uniforms;let O=0;const X=16;for(let B=0,A=I.length;B<A;B++){const F=Array.isArray(I[B])?I[B]:[I[B]];for(let K=0,H=F.length;K<H;K++){const Z=F[K],de=Array.isArray(Z.value)?Z.value:[Z.value];for(let pe=0,W=de.length;pe<W;pe++){const z=de[pe],j=U(z),ie=O%X,_e=ie%j.boundary,se=ie+_e;O+=_e,se!==0&&X-se<j.storage&&(O+=X-se),Z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=O,O+=j.storage}}}const P=O%X;return P>0&&(O+=X-P),L.__size=O,L.__cache={},this}function U(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(I.boundary=16,I.storage=L.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",L),I}function S(L){const I=L.target;I.removeEventListener("dispose",S);const O=h.indexOf(I.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function b(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:g,update:p,dispose:b}}const jA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function HA(){return ea===null&&(ea=new LS(jA,16,16,Gs,za),ea.name="DFG_LUT",ea.minFilter=Hn,ea.magFilter=Hn,ea.wrapS=Da,ea.wrapT=Da,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class GA{constructor(t={}){const{canvas:i=cS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ni}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const U=M,S=new Set([Jh,Qh,Kh]),b=new Set([Ni,ra,Ko,Qo,Yh,Zh]),L=new Uint32Array(4),I=new Int32Array(4),O=new le;let X=null,P=null;const B=[],A=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let H=!1,Z=null;this._outputColorSpace=wi;let de=0,pe=0,W=null,z=-1,j=null;const ie=new vn,_e=new vn;let se=null;const D=new kt(0);let V=0,k=i.width,me=i.height,Ae=1,$=null,Te=null;const we=new vn(0,0,k,me),Ve=new vn(0,0,k,me);let et=!1;const Je=new Ov;let yt=!1,ft=!1;const dt=new An,Et=new le,tt=new vn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function un(){return W===null?Ae:1}let Q=s;function Ze(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",ot,!1),Q===null){const J="webgl2";if(Q=Ze(J,w),Q===null)throw Ze(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw jt("WebGLRenderer: "+w.message),w}let it,st,Ue,rt,R,E,ee,ye,Re,Pe,Ie,xe,ge,ke,He,Be,Fe,ht,pt,St,q,ze,Se;function Xe(){it=new H2(Q),it.init(),q=new UA(Q,it),st=new z2(Q,it,t,q),Ue=new DA(Q,it),st.reversedDepthBuffer&&x&&Ue.buffers.depth.setReversed(!0),rt=new X2(Q),R=new xA,E=new LA(Q,it,Ue,R,st,q,rt),ee=new j2(K),ye=new ZS(Q),ze=new L2(Q,ye),Re=new G2(Q,ye,rt,ze),Pe=new q2(Q,Re,ye,ze,rt),ht=new W2(Q,st,E),He=new O2(R),Ie=new gA(K,ee,it,st,ze,He),xe=new BA(K,R),ge=new _A,ke=new TA(it),Fe=new D2(K,ee,Ue,Pe,T,g),Be=new NA(K,Pe,st),Se=new kA(Q,rt,st,Ue),pt=new U2(Q,it,rt),St=new V2(Q,it,rt),rt.programs=Ie.programs,K.capabilities=st,K.extensions=it,K.properties=R,K.renderLists=ge,K.shadowMap=Be,K.state=Ue,K.info=rt}Xe(),U!==Ni&&(F=new Z2(U,i.width,i.height,l,c));const je=new IA(K,Q);this.xr=je,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(w){w!==void 0&&(Ae=w,this.setSize(k,me,!1))},this.getSize=function(w){return w.set(k,me)},this.setSize=function(w,J,ue=!0){if(je.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,me=J,i.width=Math.floor(w*Ae),i.height=Math.floor(J*Ae),ue===!0&&(i.style.width=w+"px",i.style.height=J+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(k*Ae,me*Ae).floor()},this.setDrawingBufferSize=function(w,J,ue){k=w,me=J,Ae=ue,i.width=Math.floor(w*ue),i.height=Math.floor(J*ue),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(U===Ni){jt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,J,ue,ne){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,J,ue,ne),Ue.viewport(ie.copy(we).multiplyScalar(Ae).round())},this.getScissor=function(w){return w.copy(Ve)},this.setScissor=function(w,J,ue,ne){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,J,ue,ne),Ue.scissor(_e.copy(Ve).multiplyScalar(Ae).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){Ue.setScissorTest(et=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){Te=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,ue=!0){let ne=0;if(w){let N=!1;if(W!==null){const re=W.texture.format;N=S.has(re)}if(N){const re=W.texture.type,he=b.has(re),be=Fe.getClearColor(),De=Fe.getClearAlpha(),Ge=be.r,Ke=be.g,ae=be.b;he?(L[0]=Ge,L[1]=Ke,L[2]=ae,L[3]=De,Q.clearBufferuiv(Q.COLOR,0,L)):(I[0]=Ge,I[1]=Ke,I[2]=ae,I[3]=De,Q.clearBufferiv(Q.COLOR,0,I))}else ne|=Q.COLOR_BUFFER_BIT}J&&(ne|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",ot,!1),Fe.dispose(),ge.dispose(),ke.dispose(),R.dispose(),ee.dispose(),Pe.dispose(),ze.dispose(),Se.dispose(),Ie.dispose(),je.dispose(),je.removeEventListener("sessionstart",ri),je.removeEventListener("sessionend",Vi),an.stop()};function Ne(w){w.preventDefault(),gx("WebGLRenderer: Context Lost."),H=!0}function Ye(){gx("WebGLRenderer: Context Restored."),H=!1;const w=rt.autoReset,J=Be.enabled,ue=Be.autoUpdate,ne=Be.needsUpdate,N=Be.type;Xe(),rt.autoReset=w,Be.enabled=J,Be.autoUpdate=ue,Be.needsUpdate=ne,Be.type=N}function ot(w){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nn(w){const J=w.target;J.removeEventListener("dispose",nn),Bt(J)}function Bt(w){nt(w),R.remove(w)}function nt(w){const J=R.get(w).programs;J!==void 0&&(J.forEach(function(ue){Ie.releaseProgram(ue)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,ue,ne,N,re){J===null&&(J=Ft);const he=N.isMesh&&N.matrixWorld.determinant()<0,be=zi(w,J,ue,ne,N);Ue.setMaterial(ne,he);let De=ue.index,Ge=1;if(ne.wireframe===!0){if(De=Re.getWireframeAttribute(ue),De===void 0)return;Ge=2}const Ke=ue.drawRange,ae=ue.attributes.position;let Le=Ke.start*Ge,lt=(Ke.start+Ke.count)*Ge;re!==null&&(Le=Math.max(Le,re.start*Ge),lt=Math.min(lt,(re.start+re.count)*Ge)),De!==null?(Le=Math.max(Le,0),lt=Math.min(lt,De.count)):ae!=null&&(Le=Math.max(Le,0),lt=Math.min(lt,ae.count));const _t=lt-Le;if(_t<0||_t===1/0)return;ze.setup(N,ne,be,ue,De);let Ct,At=pt;if(De!==null&&(Ct=ye.get(De),At=St,At.setIndex(Ct)),N.isMesh)ne.wireframe===!0?(Ue.setLineWidth(ne.wireframeLinewidth*un()),At.setMode(Q.LINES)):At.setMode(Q.TRIANGLES);else if(N.isLine){let Rt=ne.linewidth;Rt===void 0&&(Rt=1),Ue.setLineWidth(Rt*un()),N.isLineSegments?At.setMode(Q.LINES):N.isLineLoop?At.setMode(Q.LINE_LOOP):At.setMode(Q.LINE_STRIP)}else N.isPoints?At.setMode(Q.POINTS):N.isSprite&&At.setMode(Q.TRIANGLES);if(N.isBatchedMesh)if(it.get("WEBGL_multi_draw"))At.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,We=N._multiDrawCounts,bn=N._multiDrawCount,xt=De?ye.get(De).bytesPerElement:1,mn=R.get(ne).currentProgram.getUniforms();for(let Fn=0;Fn<bn;Fn++)mn.setValue(Q,"_gl_DrawID",Fn),At.render(Rt[Fn]/xt,We[Fn])}else if(N.isInstancedMesh)At.renderInstances(Le,_t,N.count);else if(ue.isInstancedBufferGeometry){const Rt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,We=Math.min(ue.instanceCount,Rt);At.renderInstances(Le,_t,We)}else At.render(Le,_t)};function Vn(w,J,ue){w.transparent===!0&&w.side===Ri&&w.forceSinglePass===!1?(w.side=ni,w.needsUpdate=!0,la(w,J,ue),w.side=ps,w.needsUpdate=!0,la(w,J,ue),w.side=Ri):la(w,J,ue)}this.compile=function(w,J,ue=null){ue===null&&(ue=w),P=ke.get(ue),P.init(J),A.push(P),ue.traverseVisible(function(N){N.isLight&&N.layers.test(J.layers)&&(P.pushLight(N),N.castShadow&&P.pushShadow(N))}),w!==ue&&w.traverseVisible(function(N){N.isLight&&N.layers.test(J.layers)&&(P.pushLight(N),N.castShadow&&P.pushShadow(N))}),P.setupLights();const ne=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const be=re[he];Vn(be,ue,N),ne.add(be)}else Vn(re,ue,N),ne.add(re)}),P=A.pop(),ne},this.compileAsync=function(w,J,ue=null){const ne=this.compile(w,J,ue);return new Promise(N=>{function re(){if(ne.forEach(function(he){R.get(he).currentProgram.isReady()&&ne.delete(he)}),ne.size===0){N(w);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let si=null;function oa(w){si&&si(w)}function ri(){an.stop()}function Vi(){an.start()}const an=new Hv;an.setAnimationLoop(oa),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){si=w,je.setAnimationLoop(w),w===null?an.stop():an.start()},je.addEventListener("sessionstart",ri),je.addEventListener("sessionend",Vi),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(w,J);const ue=je.enabled===!0&&je.isPresenting===!0,ne=F!==null&&(W===null||ue)&&F.begin(K,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(J),J=je.getCamera()),w.isScene===!0&&w.onBeforeRender(K,w,J,W),P=ke.get(w,A.length),P.init(J),P.state.textureUnits=E.getTextureUnits(),A.push(P),dt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Je.setFromProjectionMatrix(dt,ia,J.reversedDepth),ft=this.localClippingEnabled,yt=He.init(this.clippingPlanes,ft),X=ge.get(w,B.length),X.init(),B.push(X),je.enabled===!0&&je.isPresenting===!0){const he=K.xr.getDepthSensingMesh();he!==null&&cn(he,J,-1/0,K.sortObjects)}cn(w,J,0,K.sortObjects),X.finish(),K.sortObjects===!0&&X.sort($,Te),Nt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Nt&&Fe.addToRenderList(X,w),this.info.render.frame++,yt===!0&&He.beginShadows();const N=P.state.shadowsArray;if(Be.render(N,w,J),yt===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const he=X.opaque,be=X.transmissive;if(P.setupLights(),J.isArrayCamera){const De=J.cameras;if(be.length>0)for(let Ge=0,Ke=De.length;Ge<Ke;Ge++){const ae=De[Ge];gi(he,be,w,ae)}Nt&&Fe.render(w);for(let Ge=0,Ke=De.length;Ge<Ke;Ge++){const ae=De[Ge];_n(X,w,ae,ae.viewport)}}else be.length>0&&gi(he,be,w,J),Nt&&Fe.render(w),_n(X,w,J)}W!==null&&pe===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),ne&&F.end(K),w.isScene===!0&&w.onAfterRender(K,w,J),ze.resetDefaultState(),z=-1,j=null,A.pop(),A.length>0?(P=A[A.length-1],E.setTextureUnits(P.state.textureUnits),yt===!0&&He.setGlobalState(K.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?X=B[B.length-1]:X=null,Z!==null&&Z.renderEnd()};function cn(w,J,ue,ne){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)ue=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ne&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const he=Pe.update(w),be=w.material;be.visible&&X.push(w,he,be,ue,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const he=Pe.update(w),be=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),tt.copy(he.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(be)){const De=he.groups;for(let Ge=0,Ke=De.length;Ge<Ke;Ge++){const ae=De[Ge],Le=be[ae.materialIndex];Le&&Le.visible&&X.push(w,he,Le,ue,tt.z,ae)}}else be.visible&&X.push(w,he,be,ue,tt.z,null)}}const re=w.children;for(let he=0,be=re.length;he<be;he++)cn(re[he],J,ue,ne)}function _n(w,J,ue,ne){const{opaque:N,transmissive:re,transparent:he}=w;P.setupLightsView(ue),yt===!0&&He.setGlobalState(K.clippingPlanes,ue),ne&&Ue.viewport(ie.copy(ne)),N.length>0&&pn(N,J,ue),re.length>0&&pn(re,J,ue),he.length>0&&pn(he,J,ue),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function gi(w,J,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Le=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new sa(1,1,{generateMipmaps:!0,type:Le?za:Ni,minFilter:ks,samples:Math.max(4,st.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const re=P.state.transmissionRenderTarget[ne.id],he=ne.viewport||ie;re.setSize(he.z*K.transmissionResolutionScale,he.w*K.transmissionResolutionScale);const be=K.getRenderTarget(),De=K.getActiveCubeFace(),Ge=K.getActiveMipmapLevel();K.setRenderTarget(re),K.getClearColor(D),V=K.getClearAlpha(),V<1&&K.setClearColor(16777215,.5),K.clear(),Nt&&Fe.render(ue);const Ke=K.toneMapping;K.toneMapping=aa;const ae=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),yt===!0&&He.setGlobalState(K.clippingPlanes,ne),pn(w,ue,ne),E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let lt=0,_t=J.length;lt<_t;lt++){const Ct=J[lt],{object:At,geometry:Rt,material:We,group:bn}=Ct;if(We.side===Ri&&At.layers.test(ne.layers)){const xt=We.side;We.side=ni,We.needsUpdate=!0,Ws(At,ue,ne,Rt,We,bn),We.side=xt,We.needsUpdate=!0,Le=!0}}Le===!0&&(E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re))}K.setRenderTarget(be,De,Ge),K.setClearColor(D,V),ae!==void 0&&(ne.viewport=ae),K.toneMapping=Ke}function pn(w,J,ue){const ne=J.isScene===!0?J.overrideMaterial:null;for(let N=0,re=w.length;N<re;N++){const he=w[N],{object:be,geometry:De,group:Ge}=he;let Ke=he.material;Ke.allowOverride===!0&&ne!==null&&(Ke=ne),be.layers.test(ue.layers)&&Ws(be,J,ue,De,Ke,Ge)}}function Ws(w,J,ue,ne,N,re){w.onBeforeRender(K,J,ue,ne,N,re),w.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(K,J,ue,ne,w,re),N.transparent===!0&&N.side===Ri&&N.forceSinglePass===!1?(N.side=ni,N.needsUpdate=!0,K.renderBufferDirect(ue,J,ne,N,w,re),N.side=ps,N.needsUpdate=!0,K.renderBufferDirect(ue,J,ne,N,w,re),N.side=Ri):K.renderBufferDirect(ue,J,ne,N,w,re),w.onAfterRender(K,J,ue,ne,N,re)}function la(w,J,ue){J.isScene!==!0&&(J=Ft);const ne=R.get(w),N=P.state.lights,re=P.state.shadowsArray,he=N.state.version,be=Ie.getParameters(w,N.state,re,J,ue,P.state.lightProbeGridArray),De=Ie.getProgramCacheKey(be);let Ge=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?J.environment:null,ne.fog=J.fog;const Ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=ee.get(w.envMap||ne.environment,Ke),ne.envMapRotation=ne.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",nn),Ge=new Map,ne.programs=Ge);let ae=Ge.get(De);if(ae!==void 0){if(ne.currentProgram===ae&&ne.lightsStateVersion===he)return Xn(w,be),ae}else be.uniforms=Ie.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,ue,be),w.onBeforeCompile(be,K),ae=Ie.acquireProgram(be,De),Ge.set(De,ae),ne.uniforms=be.uniforms;const Le=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=He.uniform),Xn(w,be),ne.needsLights=Wi(w),ne.lightsStateVersion=he,ne.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ae,ne.uniformsList=null,ae}function ms(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=Gc.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Xn(w,J){const ue=R.get(w);ue.outputColorSpace=J.outputColorSpace,ue.batching=J.batching,ue.batchingColor=J.batchingColor,ue.instancing=J.instancing,ue.instancingColor=J.instancingColor,ue.instancingMorph=J.instancingMorph,ue.skinning=J.skinning,ue.morphTargets=J.morphTargets,ue.morphNormals=J.morphNormals,ue.morphColors=J.morphColors,ue.morphTargetsCount=J.morphTargetsCount,ue.numClippingPlanes=J.numClippingPlanes,ue.numIntersection=J.numClipIntersection,ue.vertexAlphas=J.vertexAlphas,ue.vertexTangents=J.vertexTangents,ue.toneMapping=J.toneMapping}function Ui(w,J){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;O.setFromMatrixPosition(J.matrixWorld);for(let ue=0,ne=w.length;ue<ne;ue++){const N=w[ue];if(N.texture!==null&&N.boundingBox.containsPoint(O))return N}return null}function zi(w,J,ue,ne,N){J.isScene!==!0&&(J=Ft),E.resetTextureUnits();const re=J.fog,he=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?J.environment:null,be=W===null?K.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pt.workingColorSpace,De=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ge=ee.get(ne.envMap||he,De),Ke=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ae=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Le=!!ue.morphAttributes.position,lt=!!ue.morphAttributes.normal,_t=!!ue.morphAttributes.color;let Ct=aa;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ct=K.toneMapping);const At=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Rt=At!==void 0?At.length:0,We=R.get(ne),bn=P.state.lights;if(yt===!0&&(ft===!0||w!==j)){const Xt=w===j&&ne.id===z;He.setState(ne,w,Xt)}let xt=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==bn.state.version||We.outputColorSpace!==be||N.isBatchedMesh&&We.batching===!1||!N.isBatchedMesh&&We.batching===!0||N.isBatchedMesh&&We.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&We.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&We.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&We.instancingMorph===!1&&N.morphTexture!==null||We.envMap!==Ge||ne.fog===!0&&We.fog!==re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==He.numPlanes||We.numIntersection!==He.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==ae||We.morphTargets!==Le||We.morphNormals!==lt||We.morphColors!==_t||We.toneMapping!==Ct||We.morphTargetsCount!==Rt||!!We.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,We.__version=ne.version);let mn=We.currentProgram;xt===!0&&(mn=la(ne,J,N),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,mn,We));let Fn=!1,xi=!1,ct=!1;const Wt=mn.getUniforms(),on=We.uniforms;if(Ue.useProgram(mn.program)&&(Fn=!0,xi=!0,ct=!0),ne.id!==z&&(z=ne.id,xi=!0),We.needsLights){const Xt=Ui(P.state.lightProbeGridArray,N);We.lightProbeGrid!==Xt&&(We.lightProbeGrid=Xt,xi=!0)}if(Fn||j!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Wt.setValue(Q,"projectionMatrix",w.projectionMatrix),Wt.setValue(Q,"viewMatrix",w.matrixWorldInverse);const Yi=Wt.map.cameraPosition;Yi!==void 0&&Yi.setValue(Q,Et.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&Wt.setValue(Q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Wt.setValue(Q,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,xi=!0,ct=!0)}if(We.needsLights&&(bn.state.directionalShadowMap.length>0&&Wt.setValue(Q,"directionalShadowMap",bn.state.directionalShadowMap,E),bn.state.spotShadowMap.length>0&&Wt.setValue(Q,"spotShadowMap",bn.state.spotShadowMap,E),bn.state.pointShadowMap.length>0&&Wt.setValue(Q,"pointShadowMap",bn.state.pointShadowMap,E)),N.isSkinnedMesh){Wt.setOptional(Q,N,"bindMatrix"),Wt.setOptional(Q,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Wt.setValue(Q,"boneTexture",Xt.boneTexture,E))}N.isBatchedMesh&&(Wt.setOptional(Q,N,"batchingTexture"),Wt.setValue(Q,"batchingTexture",N._matricesTexture,E),Wt.setOptional(Q,N,"batchingIdTexture"),Wt.setValue(Q,"batchingIdTexture",N._indirectTexture,E),Wt.setOptional(Q,N,"batchingColorTexture"),N._colorsTexture!==null&&Wt.setValue(Q,"batchingColorTexture",N._colorsTexture,E));const Oi=ue.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&ht.update(N,ue,mn),(xi||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,Wt.setValue(Q,"receiveShadow",N.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&J.environment!==null&&(on.envMapIntensity.value=J.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=HA()),xi){if(Wt.setValue(Q,"toneMappingExposure",K.toneMappingExposure),We.needsLights&&Xi(on,ct),re&&ne.fog===!0&&xe.refreshFogUniforms(on,re),xe.refreshMaterialUniforms(on,ne,Ae,me,P.state.transmissionRenderTarget[w.id]),We.needsLights&&We.lightProbeGrid){const Xt=We.lightProbeGrid;on.probesSH.value=Xt.texture,on.probesMin.value.copy(Xt.boundingBox.min),on.probesMax.value.copy(Xt.boundingBox.max),on.probesResolution.value.copy(Xt.resolution)}Gc.upload(Q,ms(We),on,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Gc.upload(Q,ms(We),on,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Wt.setValue(Q,"center",N.center),Wt.setValue(Q,"modelViewMatrix",N.modelViewMatrix),Wt.setValue(Q,"normalMatrix",N.normalMatrix),Wt.setValue(Q,"modelMatrix",N.matrixWorld),ne.uniformsGroups!==void 0){const Xt=ne.uniformsGroups;for(let Yi=0,Pa=Xt.length;Yi<Pa;Yi++){const gs=Xt[Yi];Se.update(gs,mn),Se.bind(gs,mn)}}return mn}function Xi(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function Wi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,J,ue){const ne=R.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),R.get(w.texture).__webglTexture=J,R.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const ue=R.get(w);ue.__webglFramebuffer=J,ue.__useDefaultFramebuffer=J===void 0};const qi=Q.createFramebuffer();this.setRenderTarget=function(w,J=0,ue=0){W=w,de=J,pe=ue;let ne=null,N=!1,re=!1;if(w){const be=R.get(w);if(be.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(Q.FRAMEBUFFER,be.__webglFramebuffer),ie.copy(w.viewport),_e.copy(w.scissor),se=w.scissorTest,Ue.viewport(ie),Ue.scissor(_e),Ue.setScissorTest(se),z=-1;return}else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(be.__hasExternalTextures)E.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&R.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(re=!0);const Ge=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[J])?ne=Ge[J][ue]:ne=Ge[J],N=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?ne=R.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?ne=Ge[ue]:ne=Ge,ie.copy(w.viewport),_e.copy(w.scissor),se=w.scissorTest}else ie.copy(we).multiplyScalar(Ae).floor(),_e.copy(Ve).multiplyScalar(Ae).floor(),se=et;if(ue!==0&&(ne=qi),Ue.bindFramebuffer(Q.FRAMEBUFFER,ne)&&Ue.drawBuffers(w,ne),Ue.viewport(ie),Ue.scissor(_e),Ue.setScissorTest(se),N){const be=R.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,be.__webglTexture,ue)}else if(re){const be=J;for(let De=0;De<w.textures.length;De++){const Ge=R.get(w.textures[De]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+De,Ge.__webglTexture,ue,be)}}else if(w!==null&&ue!==0){const be=R.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,be.__webglTexture,ue)}z=-1},this.readRenderTargetPixels=function(w,J,ue,ne,N,re,he,be=0){if(!(w&&w.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(De=De[he]),De){Ue.bindFramebuffer(Q.FRAMEBUFFER,De);try{const Ge=w.textures[be],Ke=Ge.format,ae=Ge.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be),!st.textureFormatReadable(Ke)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ae)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ne&&ue>=0&&ue<=w.height-N&&Q.readPixels(J,ue,ne,N,q.convert(Ke),q.convert(ae),re)}finally{const Ge=W!==null?R.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(Q.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,J,ue,ne,N,re,he,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(De=De[he]),De)if(J>=0&&J<=w.width-ne&&ue>=0&&ue<=w.height-N){Ue.bindFramebuffer(Q.FRAMEBUFFER,De);const Ge=w.textures[be],Ke=Ge.format,ae=Ge.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be),!st.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Le),Q.bufferData(Q.PIXEL_PACK_BUFFER,re.byteLength,Q.STREAM_READ),Q.readPixels(J,ue,ne,N,q.convert(Ke),q.convert(ae),0);const lt=W!==null?R.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(Q.FRAMEBUFFER,lt);const _t=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await uS(Q,_t,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Le),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,re),Q.deleteBuffer(Le),Q.deleteSync(_t),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,ue=0){const ne=Math.pow(2,-ue),N=Math.floor(w.image.width*ne),re=Math.floor(w.image.height*ne),he=J!==null?J.x:0,be=J!==null?J.y:0;E.setTexture2D(w,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,he,be,N,re),Ue.unbindTexture()};const dn=Q.createFramebuffer(),qr=Q.createFramebuffer();this.copyTextureToTexture=function(w,J,ue=null,ne=null,N=0,re=0){let he,be,De,Ge,Ke,ae,Le,lt,_t;const Ct=w.isCompressedTexture?w.mipmaps[re]:w.image;if(ue!==null)he=ue.max.x-ue.min.x,be=ue.max.y-ue.min.y,De=ue.isBox3?ue.max.z-ue.min.z:1,Ge=ue.min.x,Ke=ue.min.y,ae=ue.isBox3?ue.min.z:0;else{const on=Math.pow(2,-N);he=Math.floor(Ct.width*on),be=Math.floor(Ct.height*on),w.isDataArrayTexture?De=Ct.depth:w.isData3DTexture?De=Math.floor(Ct.depth*on):De=1,Ge=0,Ke=0,ae=0}ne!==null?(Le=ne.x,lt=ne.y,_t=ne.z):(Le=0,lt=0,_t=0);const At=q.convert(J.format),Rt=q.convert(J.type);let We;J.isData3DTexture?(E.setTexture3D(J,0),We=Q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(E.setTexture2DArray(J,0),We=Q.TEXTURE_2D_ARRAY):(E.setTexture2D(J,0),We=Q.TEXTURE_2D),Ue.activeTexture(Q.TEXTURE0),Ue.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),Ue.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Ue.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment);const bn=Ue.getParameter(Q.UNPACK_ROW_LENGTH),xt=Ue.getParameter(Q.UNPACK_IMAGE_HEIGHT),mn=Ue.getParameter(Q.UNPACK_SKIP_PIXELS),Fn=Ue.getParameter(Q.UNPACK_SKIP_ROWS),xi=Ue.getParameter(Q.UNPACK_SKIP_IMAGES);Ue.pixelStorei(Q.UNPACK_ROW_LENGTH,Ct.width),Ue.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ct.height),Ue.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ge),Ue.pixelStorei(Q.UNPACK_SKIP_ROWS,Ke),Ue.pixelStorei(Q.UNPACK_SKIP_IMAGES,ae);const ct=w.isDataArrayTexture||w.isData3DTexture,Wt=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const on=R.get(w),Oi=R.get(J),Xt=R.get(on.__renderTarget),Yi=R.get(Oi.__renderTarget);Ue.bindFramebuffer(Q.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ue.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Pa=0;Pa<De;Pa++)ct&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get(w).__webglTexture,N,ae+Pa),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get(J).__webglTexture,re,_t+Pa)),Q.blitFramebuffer(Ge,Ke,he,be,Le,lt,he,be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Ue.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(N!==0||w.isRenderTargetTexture||R.has(w)){const on=R.get(w),Oi=R.get(J);Ue.bindFramebuffer(Q.READ_FRAMEBUFFER,dn),Ue.bindFramebuffer(Q.DRAW_FRAMEBUFFER,qr);for(let Xt=0;Xt<De;Xt++)ct?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,on.__webglTexture,N,ae+Xt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,on.__webglTexture,N),Wt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Oi.__webglTexture,re,_t+Xt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Oi.__webglTexture,re),N!==0?Q.blitFramebuffer(Ge,Ke,he,be,Le,lt,he,be,Q.COLOR_BUFFER_BIT,Q.NEAREST):Wt?Q.copyTexSubImage3D(We,re,Le,lt,_t+Xt,Ge,Ke,he,be):Q.copyTexSubImage2D(We,re,Le,lt,Ge,Ke,he,be);Ue.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Wt?w.isDataTexture||w.isData3DTexture?Q.texSubImage3D(We,re,Le,lt,_t,he,be,De,At,Rt,Ct.data):J.isCompressedArrayTexture?Q.compressedTexSubImage3D(We,re,Le,lt,_t,he,be,De,At,Ct.data):Q.texSubImage3D(We,re,Le,lt,_t,he,be,De,At,Rt,Ct):w.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,re,Le,lt,he,be,At,Rt,Ct.data):w.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,re,Le,lt,Ct.width,Ct.height,At,Ct.data):Q.texSubImage2D(Q.TEXTURE_2D,re,Le,lt,he,be,At,Rt,Ct);Ue.pixelStorei(Q.UNPACK_ROW_LENGTH,bn),Ue.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,xt),Ue.pixelStorei(Q.UNPACK_SKIP_PIXELS,mn),Ue.pixelStorei(Q.UNPACK_SKIP_ROWS,Fn),Ue.pixelStorei(Q.UNPACK_SKIP_IMAGES,xi),re===0&&J.generateMipmaps&&Q.generateMipmap(We),Ue.unbindTexture()},this.initRenderTarget=function(w){R.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){de=0,pe=0,W=null,Ue.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pt._getUnpackColorSpace()}}function VA({isWarping:o,theme:t="dark"}){const i=Oe.useRef(null),s=Oe.useRef(null),l=Oe.useRef(o);return Oe.useEffect(()=>{l.current=o},[o]),Oe.useEffect(()=>{const c=i.current,h=s.current;if(!c||!h)return;let m=6514417,g=440020;t==="cyberpunk"?(m=16711765,g=65484):t==="ai"?(m=9133302,g=6514417):t==="terminal"?(m=2278750,g=1483594):t==="light"&&(m=5195493,g=440020);const p=new AS;p.fog=new np(131848,.015);const y=c.clientWidth/c.clientHeight,_=new Ci(75,y,.1,1e3);_.position.set(0,0,10);const x=new GA({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setSize(c.clientWidth,c.clientHeight,!1),x.setPixelRatio(Math.min(window.devicePixelRatio,2));const M=120,T=100,U=8,S=new Zo(U,U,M,32,T,!0);S.rotateX(Math.PI/2);const b=new Fr({color:m,wireframe:!0,transparent:!0,opacity:0,side:Ri}),L=new Yn(S,b);p.add(L);const I=new Li({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new kt(m)},uSecondaryColor:{value:new kt(g)}},transparent:!0,side:Ri,blending:Yo,depthWrite:!1}),O=new Zo(U-.1,U-.1,M,48,T,!0);O.rotateX(Math.PI/2);const X=new Yn(O,I);p.add(X);const P=new Zo(U+1.2,U+1.2,M,12,35,!0);P.rotateX(Math.PI/2);const B=new Fr({color:g,wireframe:!0,transparent:!0,opacity:0,side:Ri}),A=new Yn(P,B);p.add(A);const F=15,K=[],H=new ap(U+.3,.08,8,48);for(let Ze=0;Ze<F;Ze++){const it=new Fr({color:Ze%2===0?m:g,transparent:!0,opacity:0}),st=new Yn(H,it);st.position.z=Ze/F*M-M/2,p.add(st),K.push(st)}const Z=new Li({vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;
        uniform float uWarpProgress;
        uniform vec3 uPrimaryColor;
        uniform vec3 uSecondaryColor;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec3(0.0, 0.0, 0.0).xy), hash(i + vec3(1.0, 0.0, 0.0).xy), u.x),
                     mix(hash(i + vec3(0.0, 1.0, 0.0).xy), hash(i + vec3(1.0, 1.0, 0.0).xy), u.x), u.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < 3; ++i) {
            v += a * noise(p);
            p = rot * p * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 p = vUv * 3.5;
          float t = uTime * 0.02;
          
          float n1 = fbm(p + vec2(t * 0.4, t * 0.2));
          float n2 = fbm(p - vec2(t * 0.15, -t * 0.3) + n1 * 0.4);
          
          float val = smoothstep(0.18, 0.82, n2);
          
          vec3 baseColor = mix(uPrimaryColor * 0.18, uSecondaryColor * 0.35, val);
          baseColor += vec3(0.06, 0.04, 0.09) * n1 * n1;
          
          float nebulaAlpha = val * 0.75;
          nebulaAlpha = clamp(nebulaAlpha, 0.0, 1.0);
          
          vec3 finalColor = mix(baseColor, baseColor * 1.5 + vec3(0.15), uWarpProgress);
          float finalAlpha = mix(nebulaAlpha, nebulaAlpha * 0.45 + 0.12, uWarpProgress);
          
          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new kt(m)},uSecondaryColor:{value:new kt(g)}},transparent:!0,depthWrite:!1,blending:Yo}),de=new Yn(new nl(280,280),Z);de.position.set(0,0,-85),p.add(de);const pe=900,W=new Float32Array(pe*3),z=new Float32Array(pe*3),j=[],ie=[],_e=[],se=[],D=()=>{const Ze=document.createElement("canvas");Ze.width=16,Ze.height=16;const it=Ze.getContext("2d");if(it){const st=it.createRadialGradient(8,8,0,8,8,8);st.addColorStop(0,"rgba(255, 255, 255, 1)"),st.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),st.addColorStop(.5,"rgba(255, 255, 255, 0.25)"),st.addColorStop(1,"rgba(255, 255, 255, 0)"),it.fillStyle=st,it.fillRect(0,0,16,16)}return new IS(Ze)};for(let Ze=0;Ze<pe;Ze++){const it=(Math.random()-.5)*90,st=(Math.random()-.5)*90,Ue=Math.random()*100-85;W[Ze*3]=it,W[Ze*3+1]=st,W[Ze*3+2]=Ue,j.push(Math.random()*.08+.02),ie.push(1+Math.random()*2.5),_e.push(Math.random()*Math.PI*2);let rt=1,R=1,E=1;const ee=Math.random();ee<.18?(rt=.82,R=.9,E=1):ee<.32&&(rt=1,R=.94,E=.78),se.push([rt,R,E]),z[Ze*3]=rt,z[Ze*3+1]=R,z[Ze*3+2]=E}const V=new ai;V.setAttribute("position",new Di(W,3)),V.setAttribute("color",new Di(z,3));const k=new Pv({size:.38,map:D(),transparent:!0,blending:Yo,depthWrite:!1,vertexColors:!0,sizeAttenuation:!0}),me=new PS(V,k);p.add(me);const Ae=new ip(1.5,32,32),$=new Fr({color:16777215,transparent:!0,opacity:0}),Te=new Yn(Ae,$);Te.position.set(0,0,-45),p.add(Te);let we=0,Ve=0,et=0,Je=0;const yt=Ze=>{we=(Ze.clientX-window.innerWidth/2)/110,Ve=(Ze.clientY-window.innerHeight/2)/110};window.addEventListener("mousemove",yt);const ft=()=>{if(!c||!h)return;const Ze=c.clientWidth,it=c.clientHeight;_.aspect=Ze/it,_.updateProjectionMatrix(),x.setSize(Ze,it,!1)},dt=new ResizeObserver(()=>{ft()});dt.observe(c);let Et=.25,tt=.0015,Ft=0,Nt=0,un;const Q=()=>{const Ze=l.current;Nt+=Ze?.024:.012,Ze?(Ft=Math.min(1,Ft+.018),Et=Math.min(4.8,Et+.15),tt=Math.min(.06,tt+.0018),_.fov=Math.min(136,_.fov+1.2),_.updateProjectionMatrix(),$.opacity=Math.min(1,$.opacity+.045),Te.scale.addScalar(.4)):(Ft=Math.max(0,Ft-.03),Et=Math.max(.25,Et-.05),tt=Math.max(.0015,tt-.001),_.fov=Math.max(75,_.fov-1.5),_.updateProjectionMatrix(),$.opacity=Math.max(0,$.opacity-.05),Te.scale.x>1&&Te.scale.set(1,1,1)),b.opacity=.14*Ft,B.opacity=.09*Ft,I.uniforms.uWarpProgress.value=Ft,I.uniforms.uTime.value=Nt,Z.uniforms.uTime.value=Nt,Z.uniforms.uWarpProgress.value=Ft,L.rotation.z+=tt,A.rotation.z-=tt*.7,X.rotation.z+=tt*.4;const it=Date.now()*.002;K.forEach((rt,R)=>{rt.position.z,rt.position.z+=Et,rt.position.z>15&&(rt.position.z=-55);const E=1+Math.sin(it+R)*.03+(Ze?.08:0);rt.scale.set(E,E,1),rt.material&&!Array.isArray(rt.material)&&(rt.material.opacity=.65*Ft)}),et+=(we-et)*.06,Je+=(Ve-Je)*.06,_.position.x=et,_.position.y=-Je,_.lookAt(0,0,-50);const st=V.attributes.position.array,Ue=V.attributes.color.array;for(let rt=0;rt<pe;rt++){const R=rt*3,E=Ze?j[rt]*120+Et*12:j[rt]+Et*.08;if(st[R+2]+=E,st[R+2]>12&&(st[R+2]=-85,st[R]=(Math.random()-.5)*90,st[R+1]=(Math.random()-.5)*90),!Ze){const Re=st[R],Pe=st[R+1],Ie=4e-4*(rt%2===0?1:-1),xe=Math.cos(Ie),ge=Math.sin(Ie);st[R]=Re*xe-Pe*ge,st[R+1]=Re*ge+Pe*xe}const ee=se[rt];let ye=1;Ze||(ye=.35+.65*Math.sin(Nt*ie[rt]+_e[rt])),Ue[R]=ee[0]*ye,Ue[R+1]=ee[1]*ye,Ue[R+2]=ee[2]*ye}Ze?k.size=Math.min(.55,k.size+.012):k.size=Math.max(.38,k.size-.01),V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0,x.render(p,_),un=requestAnimationFrame(Q)};return Q(),()=>{cancelAnimationFrame(un),window.removeEventListener("mousemove",yt),dt.disconnect(),x.dispose(),S.dispose(),b.dispose(),O.dispose(),I.dispose(),P.dispose(),B.dispose(),H.dispose(),V.dispose(),k.dispose(),Ae.dispose(),$.dispose(),de.geometry.dispose(),Z.dispose()}},[t]),d.jsx("div",{ref:i,className:`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${t==="light"?"bg-[#f8fafc]":"bg-[#020308]"}`,children:d.jsx("canvas",{ref:s,className:"w-full h-full block",style:{filter:o?"contrast(1.15) brightness(1.1)":"none"}})})}const XA="/assets/avatar-BRuvllXD.png",Kf=o=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...o,children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Qf=o=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...o,children:d.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0a3.26 3.26 0 01-3.26 3.27 3.26 3.26 0 01-3.26-3.27 3.26 3.26 0 013.26-3.27 3.26 3.26 0 013.26 3.27zm3.04 0a1.07 1.07 0 01-1.07 1.06 1.07 1.07 0 01-1.07-1.06 1.07 1.07 0 011.07-1.06 1.07 1.07 0 011.07 1.06z"})});function WA({item:o,idx:t,theme:i}){const s=Oe.useRef(null),[l,c]=Oe.useState(!1);Oe.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:.1,rootMargin:"0px 0px -60px 0px"}),g=s.current;return g&&m.observe(g),()=>{g&&m.unobserve(g)}},[]);const h=t%2===0;return d.jsxs("div",{ref:s,className:`flex flex-col md:flex-row items-start ${h?"md:flex-row-reverse":""} relative transition-all duration-700 ease-out ${l?"opacity-100 translate-x-0":`opacity-0 ${h?"translate-x-10 md:-translate-x-10":"translate-x-10"}`}`,children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:`w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg transition-all duration-500 ${l?"border-cyan-400/80 scale-100":"border-zinc-850 scale-75"}`,children:d.jsx("span",{className:`w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 transition-transform duration-500 ${l?"scale-100":"scale-50"}`})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-12 md:pl-0",children:d.jsxs("div",{className:`p-6 md:p-8 rounded-2xl border backdrop-blur-md relative group transition-all duration-500 ${i==="light"?"bg-white/80 border-slate-200 shadow-lg hover:border-indigo-400 hover:shadow-indigo-500/5":"bg-zinc-950/45 border-zinc-900 shadow-2xl hover:border-zinc-850 hover:shadow-cyan-500/5"}`,children:[d.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1",children:o.year}),d.jsx("h3",{className:`text-base md:text-lg font-sans font-bold leading-tight transition-colors group-hover:text-cyan-300 ${i==="light"?"text-slate-800":"text-white"}`,children:o.title}),d.jsx("span",{className:"text-[10px] font-mono text-zinc-550 block mt-1",children:o.company})]}),d.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[9px] font-mono border font-medium uppercase ${o.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":o.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":o.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:o.company})]}),d.jsx("ul",{className:"space-y-3 mb-6 text-zinc-400",children:o.achievements.map((m,g)=>d.jsxs("li",{className:"flex items-start text-[11px] leading-relaxed font-sans text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0"}),d.jsx("span",{children:m})]},g))}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 select-none",children:o.technologies.map(m=>d.jsx("span",{className:"px-2 py-0.5 rounded-md text-[9px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:m},m))})]})})]})}function qA({isWarping:o,theme:t,soundOn:i,triggerSound:s,onLaunchOS:l,onOpenWindowDirectly:c,articles:h=[],onOpenArticleDirectly:m}){const g=Oe.useRef(null),[p,y]=Oe.useState(!1),[_,x]=Oe.useState("All"),[M,T]=Oe.useState(0),[U,S]=Oe.useState(""),[b,L]=Oe.useState(""),[I,O]=Oe.useState(""),[X,P]=Oe.useState(""),[B,A]=Oe.useState({}),[F,K]=Oe.useState(!1),[H,Z]=Oe.useState(!1),de=Oe.useRef(null),pe=Oe.useRef(null);Oe.useEffect(()=>{let k=!1;const me=()=>{k||(window.requestAnimationFrame(()=>{const Ae=window.scrollY||document.documentElement.scrollTop;y(Ae>500);const $=de.current;if($){const Te=$.getBoundingClientRect(),we=window.innerHeight,Ve=Te.top,et=Te.height,Je=we*.8,yt=we*.2,ft=et+Je-yt,dt=Je-Ve,Et=Math.min(Math.max(dt/ft,0),1);pe.current&&(pe.current.style.transform=`scaleY(${Et})`)}k=!1}),k=!0)};return window.addEventListener("scroll",me,{passive:!0}),setTimeout(me,100),()=>{window.removeEventListener("scroll",me)}},[]);const W=()=>{window.scrollTo({top:0,behavior:"smooth"}),s(1e3,.05)},z=(k,me)=>{k.preventDefault();const Ae=document.getElementById(me);if(Ae){const $=Ae.getBoundingClientRect(),Te=window.scrollY||document.documentElement.scrollTop,we=$.top+Te-64;window.scrollTo({top:we,behavior:"smooth"})}};Oe.useEffect(()=>{const k=setInterval(()=>{T(me=>(me+1)%_e.length)},8e3);return()=>clearInterval(k)},[]);const ie=(()=>{switch(t){case"cyberpunk":return{textPrimary:"text-[#00ffcc]",textSecondary:"text-pink-400",borderAccent:"border-pink-500/20 hover:border-pink-500/50",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] border border-pink-400/50",btnSecondary:"border-pink-500/30 text-pink-300 hover:bg-pink-550/10 bg-black/60",statCardGlow:"hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",skillBar:"from-pink-500 to-[#00ffcc]",activeTabBtn:"bg-pink-600 text-white border-pink-500",tabBtn:"text-pink-400 border-pink-500/20 hover:border-pink-500/40 bg-zinc-950/40",badgeStyle:"bg-pink-500/10 border border-pink-500/20 text-pink-300",gradientBg:"from-pink-500/5 via-purple-500/2 to-transparent"};case"ai":return{textPrimary:"text-purple-300",textSecondary:"text-cyan-400",borderAccent:"border-purple-500/20 hover:border-cyan-400/40",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-400/40",btnSecondary:"border-purple-500/30 text-cyan-200 hover:bg-purple-950/40 bg-black/60",statCardGlow:"hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",skillBar:"from-purple-500 to-cyan-400",activeTabBtn:"bg-purple-600 text-white border-purple-500",tabBtn:"text-purple-300 border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/40",badgeStyle:"bg-purple-500/10 border border-purple-500/20 text-purple-300",gradientBg:"from-purple-500/5 via-indigo-500/2 to-transparent"};case"terminal":return{textPrimary:"text-[#33ff33]",textSecondary:"text-[#16a34a]",borderAccent:"border-[#33ff33]/20 hover:border-[#33ff33]/50",btnPrimary:"bg-[#33ff33] text-black hover:bg-[#33ff33]/85 shadow-[0_0_15px_rgba(51,255,51,0.3)] border border-[#33ff33]/50",btnSecondary:"border-[#33ff33]/30 text-[#33ff33] hover:bg-[#33ff33]/10 bg-black/60",statCardGlow:"hover:border-[#33ff33]/50 hover:shadow-[0_0_25px_rgba(51,255,51,0.2)]",skillBar:"from-[#16a34a] to-[#33ff33]",activeTabBtn:"bg-zinc-900 text-[#33ff33] border-[#33ff33]",tabBtn:"text-[#33ff33]/80 border-[#33ff33]/20 hover:border-[#33ff33]/40 bg-black/40",badgeStyle:"bg-emerald-950/20 border border-[#33ff33]/20 text-[#33ff33]",gradientBg:"from-[#33ff33]/3 to-transparent"};case"light":return{textPrimary:"text-indigo-600",textSecondary:"text-sky-600",borderAccent:"border-slate-300 hover:border-indigo-400",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white shadow-md",btnSecondary:"border-slate-300 text-slate-700 hover:bg-slate-100 bg-white",statCardGlow:"hover:border-indigo-400 hover:shadow-lg",skillBar:"from-indigo-500 to-sky-500",activeTabBtn:"bg-indigo-650 text-white border-indigo-650",tabBtn:"text-slate-600 border-slate-200 hover:border-slate-350 bg-slate-50",badgeStyle:"bg-indigo-50 border border-indigo-100 text-indigo-600",gradientBg:"from-indigo-500/3 via-purple-500/1 to-transparent"};default:return{textPrimary:"text-sky-400",textSecondary:"text-indigo-400",borderAccent:"border-zinc-800/80 hover:border-[#00ffcc]/30",btnPrimary:"bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40",btnSecondary:"border-zinc-800 text-zinc-300 hover:bg-zinc-900/60 bg-black/60",statCardGlow:"hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]",skillBar:"from-indigo-500 to-sky-400",activeTabBtn:"bg-indigo-650 text-white border-indigo-500",tabBtn:"text-zinc-400 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",badgeStyle:"bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",gradientBg:"from-indigo-500/5 via-purple-500/2 to-transparent"}}})(),_e=[{text:"Farhan's expertise in fine-tuning BERT and RoBERTa models for clinical emotional text classification was pivotal to our diagnostics program. His depth of knowledge in linguistic anomalies is world-class.",author:"Dr. Sarah Jenkins",role:"Lead Clinical NLP Researcher, Cognitive Diagnostics Lab",initials:"SJ"},{text:"The Ink Home's WebGL carousel design and custom caching proxy were executed brilliantly. Farhan consistently delivers high-performance SaaS components while respecting peak engineering aesthetic rules.",author:"Marcus Sterling",role:"Product Director, Synthetix Solutions",initials:"MS"},{text:"An absolute powerhouse developer. Farhan balances deep statistical NLP modeling with pixel-perfect responsive layouts inspired by Linear. TypeRush is a masterclass in Web Audio synchronization.",author:"Linus O.",role:"Senior Open Source Systems Architect",initials:"LO"}],se=[{title:"Deep Learning Specialization",issuer:"deeplearning.ai / Coursera",date:"2024",skills:["CNNs","RNNs/LSTMs","Transformer Architecture","Attention Mechanisms"]},{title:"Google Cloud Associate Engineer",issuer:"Google Cloud",date:"2025",skills:["GCP Compute Engines","GKE Containers","IAM Security","Cloud SQL Monitoring"]},{title:"Natural Language Processing Professional",issuer:"Hugging Face / Stanford Online",date:"2024",skills:["Tokenization Pipelines","Model Fine-tuning","ONNX Optimization","Quantization"]}],D=en.skills.filter(k=>_==="All"||_==="AI/ML"&&(k.category==="AI/ML"||k.category==="Research & Science")||_==="Frontend"&&k.category==="Frontend"||_==="Backend"&&k.category==="Backend"&&k.name!=="PostgreSQL"&&k.name!=="Redis Caching"||_==="Database"&&(k.name==="PostgreSQL"||k.name==="Redis Caching")||_==="DevOps"&&k.category==="Systems & Devops"),V=k=>{k.preventDefault(),s(950,.04);const me={};if(U.trim()||(me.name="Name is required"),b.trim()?/\S+@\S+\.\S+/.test(b)||(me.email="Please provide a valid email"):me.email="Email is required",I.trim()||(me.subject="Subject is required"),X.trim()||(me.message="Message details cannot be empty"),Object.keys(me).length>0){A(me);return}A({}),Z(!0),setTimeout(()=>{Z(!1),K(!0),s(1050,.12),S(""),L(""),O(""),P("")},1500)};return d.jsxs("div",{ref:g,className:"relative min-h-screen flex flex-col w-full select-text bg-transparent",children:[d.jsx(VA,{isWarping:o,theme:t}),d.jsx("div",{className:`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${ie.gradientBg} opacity-80`}),d.jsxs("header",{className:`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${t==="light"?"border-slate-200/80 bg-white/70":"border-zinc-900/60 bg-black/45"} backdrop-blur-md transition-all`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-black tracking-widest uppercase font-sans ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"FARHAN KABIR"}),d.jsx("span",{className:"text-[8.5px] font-mono text-zinc-550 uppercase tracking-widest",children:"COGNITIVE SYSTEMS ARCHITECT"})]})]}),d.jsxs("nav",{className:"hidden lg:flex items-center gap-5 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400",children:[d.jsx("a",{href:"#about",onClick:k=>{s(900,.02),z(k,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:k=>{s(900,.02),z(k,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:k=>{s(900,.02),z(k,"timeline")},className:"hover:text-white transition-colors",children:"CHRONOLOGY"}),d.jsx("a",{href:"#prof-timeline",onClick:k=>{s(900,.02),z(k,"prof-timeline")},className:"hover:text-white transition-colors",children:"PROF. TIMELINE"}),d.jsx("a",{href:"#projects",onClick:k=>{s(900,.02),z(k,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#certifications",onClick:k=>{s(900,.02),z(k,"certifications")},className:"hover:text-white transition-colors",children:"CERTIFICATES"}),d.jsx("a",{href:"#contact",onClick:k=>{s(900,.02),z(k,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsx("div",{className:"flex items-center gap-3",children:d.jsx("button",{onClick:l,disabled:o,className:`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${ie.btnPrimary}`,children:o?"Warp Core Charging...":"Launch OS"})})]}),d.jsxs("section",{className:"relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10",children:[d.jsxs("div",{className:"relative mb-8 flex items-center justify-center animate-fade-in",children:[d.jsx("div",{className:"absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none"}),d.jsx("div",{className:"absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none"}),d.jsx("div",{className:"absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none"}),d.jsxs("div",{className:"relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00ffcc]",children:[d.jsx("img",{src:XA,alt:"Farhan Kabir portrait",className:"w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"})]})]}),d.jsxs("div",{className:"max-w-3xl space-y-4",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300",children:[d.jsx(g1,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"CLINICAL NLP & SAAS PLATFORMS"})]}),d.jsxs("h1",{className:"text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase select-text",children:[d.jsx("span",{className:t==="light"?"text-slate-800":"text-white",children:"I am "}),d.jsx("span",{className:`bg-clip-text text-transparent bg-gradient-to-r ${t==="light"?"from-indigo-650 to-sky-655":"from-indigo-400 via-sky-400 to-[#00ffcc]"}`,children:en.name})]}),d.jsx("h2",{className:"text-base sm:text-xl font-bold font-mono tracking-wider text-zinc-400 select-text",children:en.title}),d.jsxs("p",{className:"text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed select-text font-normal",children:[en.tagline," Fusing low-latency model evaluation pipelines with Linear-grade web experiences."]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md",children:[d.jsx("button",{onClick:l,className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${ie.btnPrimary}`,children:"Activate Cosmic OS"}),d.jsxs("button",{onClick:()=>c("resume"),className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${ie.btnSecondary}`,children:[d.jsx(Xh,{className:"w-4 h-4"}),d.jsx("span",{children:"Get Resume (CV)"})]})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3 mt-8 text-[9px] font-mono",children:[d.jsxs("button",{onClick:()=>c("brief"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[d.jsx(uv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"MISSION BRIEF (CONTACT)"})]}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"GitHub",children:d.jsx(fc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"LinkedIn",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Medium",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"X (Twitter)",children:d.jsx(Kf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Instagram",children:d.jsx(ff,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Gravatar",children:d.jsx(pf,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse",children:[d.jsx("span",{className:"text-[9px] font-mono text-zinc-600 tracking-widest uppercase",children:"SCROLL FOR DIAGNOSTICS"}),d.jsx("div",{className:"w-px h-6 bg-zinc-800"})]})]}),d.jsxs("section",{id:"about",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"01 // BIOGRAPHY MODULE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"KERNEL SPECS STABLE"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed",children:[d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ie.textPrimary}`,children:"System Bio:"}),d.jsx("p",{className:"select-text",children:en.about})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ie.textPrimary}`,children:"Core Mission Directive:"}),d.jsxs("p",{className:"select-text italic",children:['"',en.focus,'"']})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ie.textPrimary}`,children:"Active Research Focus:"}),d.jsxs("ul",{className:"list-disc pl-4 space-y-2 mt-1 select-text",children:[d.jsx("li",{children:"Evaluating token probability sequences to block prompt injection triggers before inference."}),d.jsx("li",{children:"Fusing Wav2Vec audio metrics with BERT semantic layers to capture speech emotional variance."}),d.jsx("li",{children:"Conducting validation diagnostics for psychiatric speech anomalies."})]})]})]}),d.jsx("div",{className:"lg:col-span-5 grid grid-cols-2 gap-4",children:[{label:"EXPERIENCE",value:"4+ Years",desc:"AI & Full-Stack Architectures"},{label:"NLP PAPERS",value:"4 Pubs",desc:"IEEE Journals & Conference Index"},{label:"DEPLOYED SAAS",value:"12+ Apps",desc:"High-performance codebases"},{label:"CERTIFICATES",value:"5+ Credentials",desc:"Deep Learning & GCP"}].map((k,me)=>d.jsxs("div",{onClick:()=>s(900,.02),className:`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${ie.statCardGlow}`,children:[d.jsx("span",{className:"text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold",children:k.label}),d.jsxs("div",{className:"mt-3",children:[d.jsx("span",{className:`text-xl sm:text-2xl font-black block tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.value}),d.jsx("span",{className:"text-[9px] text-zinc-550 block mt-1 font-sans font-normal",children:k.desc})]})]},me))})]})]}),d.jsxs("section",{id:"skills",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"02 // SKILLOBSERVATION OBSERVATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"MATRIX FILTERS FULLY LOADED"})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]",children:["All","AI/ML","Frontend","Backend","Database","DevOps"].map(k=>d.jsx("button",{onClick:()=>{x(k),s(800,.03)},className:`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${_===k?ie.activeTabBtn:ie.tabBtn}`,children:k==="DevOps"?"DEVOPS & CLOUD":k.toUpperCase()},k))}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:D.map(k=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono",children:[d.jsxs("div",{className:"flex justify-between items-center text-[10px] mb-2.5",children:[d.jsx("span",{className:`font-bold ${t==="light"?"text-slate-700":"text-slate-200"}`,children:k.name}),d.jsxs("span",{className:"text-zinc-550 font-semibold",children:[k.weight*20,"%"]})]}),d.jsx("div",{className:"w-full h-1 bg-zinc-950 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full bg-gradient-to-r ${ie.skillBar} rounded-full`,style:{width:`${k.weight*20}%`}})})]},k.name))})]}),d.jsxs("section",{id:"timeline",className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03 // EXPERIENCE CHRONOLOGY"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DATA VALIDATED FOR SECURE HISTORIES"})]}),d.jsx("div",{className:"relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12",children:en.timeline.map((k,me)=>d.jsxs("div",{className:"relative pl-8 sm:pl-12 group select-text",children:[d.jsx("div",{className:"absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:border-[#00ffcc] shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_8px_rgba(0,255,204,0.8)] transition-all duration-300"}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[d.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${ie.badgeStyle}`,children:k.year}),d.jsx("span",{className:"text-zinc-550 font-mono text-[9.5px]",children:k.company})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsxs("p",{className:"text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed",children:[k.role," ",k.description]}),d.jsx("ul",{className:"mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400",children:k.achievements.map((Ae,$)=>d.jsxs("li",{className:"flex items-start gap-2 leading-relaxed",children:[d.jsx(Vc,{className:`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-600":"text-[#00ffcc]"}`}),d.jsx("span",{children:Ae})]},$))}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:k.technologies.map(Ae=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500",children:Ae},Ae))})]},me))})]}),d.jsxs("section",{id:"prof-timeline",className:"relative py-24 px-6 md:px-12 max-w-6xl w-full mx-auto space-y-12 z-10 scroll-mt-16",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03.5 // PROFESSIONAL TIMELINE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE WORK EXPERIENCES"})]}),d.jsxs("div",{ref:de,className:"relative",children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:pe,className:"absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-16 relative z-10",children:en.professionalTimeline.map((k,me)=>d.jsx(WA,{item:k,idx:me,theme:t},me))})]})]}),d.jsxs("section",{id:"projects",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04 // PORTFOLIO INNOVATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SANDBOX RUNTIMES SYNCHRONIZED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:en.projects.map(k=>d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${ie.badgeStyle}`,children:k.category}),d.jsx("span",{className:"text-[9px] text-zinc-550 font-semibold",children:k.timeline})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsx("p",{className:"text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed",children:k.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono",children:k.metrics.map(me=>d.jsxs("div",{className:"p-1",children:[d.jsx("span",{className:`text-[9.5px] font-bold block ${t==="light"?"text-indigo-650":"text-[#00ffcc]"}`,children:me.value}),d.jsx("span",{className:"text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1",children:me.label})]},me.label))})]}),d.jsxs("div",{className:"space-y-4 pt-4 border-t border-zinc-900/60 select-none",children:[d.jsx("div",{className:"flex flex-wrap gap-1",children:k.techStack.map(me=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500",children:me},me))}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{c("projects")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"DEPLOY SIMULATOR SCREEN →"}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"View Source on GitHub",children:d.jsx(fc,{className:"w-3.5 h-3.5"})})]})]})]},k.id))})]}),d.jsxs("section",{id:"writings",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04.5 // MEDIUM WRITING SYNDICATE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DYNAMIC RSS CHANNELS ACTIVE"})]}),h.length===0?d.jsx("div",{className:"text-center py-10 bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-6 font-mono text-zinc-550 text-xs",children:"⏳ Synchronizing narrative telemetry vectors..."}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.slice(0,6).map((k,me)=>{const Ae=me===0;return d.jsxs("div",{className:`bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_10px_35px_rgba(245,158,11,0.04)] transition-all duration-300 group select-text ${Ae?"md:col-span-2 lg:col-span-1":""}`,children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px]",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${t==="light"?"bg-amber-100 text-amber-800 border-amber-250":"bg-amber-500/10 text-amber-300 border-amber-500/20"}`,children:k.category}),d.jsx("span",{className:"text-zinc-550 font-semibold",children:k.date})]}),k.imageUrl?d.jsxs("div",{className:"w-full h-36 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 relative",children:[d.jsx("img",{src:k.imageUrl,alt:k.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0b0c14]/90 via-transparent to-transparent"})]}):d.jsx("div",{className:"w-full h-1 bg-gradient-to-r from-amber-500/10 to-transparent rounded"}),d.jsx("h3",{className:`text-xs sm:text-sm font-extrabold group-hover:text-amber-400 transition-colors leading-snug select-text ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:k.excerpt})]}),d.jsxs("div",{className:"space-y-3 pt-4 border-t border-zinc-900/60 mt-4 select-none",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[8.5px] font-mono text-zinc-500",children:[d.jsx(cv,{className:"w-3 h-3 text-amber-500"}),d.jsx("span",{children:k.readTime})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{m?m(k):c("writing")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[9.5px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"WARP & READ IN OS →"}),k.link&&d.jsx("a",{href:k.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"Read on Medium",children:d.jsx(Oy,{className:"w-3.5 h-3.5"})})]})]})]},k.id)})})]}),d.jsxs("section",{id:"certifications",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"05 // CREDENTIAL VERIFICATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"ALL BADGES CRYPTOGRAPHICALLY SECURED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:se.map((k,me)=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3",children:[d.jsx("span",{children:k.issuer}),d.jsx("span",{className:"font-bold",children:k.date})]}),d.jsxs("h3",{className:`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${t==="light"?"text-slate-850":"text-slate-100"}`,children:[d.jsx(lv,{className:`w-4 h-4 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-650":"text-amber-400"}`}),d.jsx("span",{children:k.title})]})]}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50",children:k.skills.map(Ae=>d.jsx("span",{className:"text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500",children:Ae},Ae))})]},me))})]}),d.jsxs("section",{className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"06 // CLINICAL RECOMMENDATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE REFERRALS ACTIVE"})]}),d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl",children:[d.jsx(o1,{className:`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${t==="light"?"text-indigo-600":"text-indigo-500"}`}),d.jsxs("div",{className:"relative min-h-[140px] flex flex-col justify-between",children:[d.jsxs("p",{className:`text-xs sm:text-sm italic leading-relaxed ${t==="light"?"text-slate-700":"text-slate-300"}`,children:['"',_e[M].text,'"']}),d.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${ie.badgeStyle}`,children:_e[M].initials}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-bold ${t==="light"?"text-slate-800":"text-white"}`,children:_e[M].author}),d.jsx("span",{className:"text-[9px] text-zinc-500 font-mono mt-0.5",children:_e[M].role})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsx("button",{onClick:()=>{T(k=>(k-1+_e.length)%_e.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(My,{className:"w-4 h-4"})}),d.jsx("button",{onClick:()=>{T(k=>(k+1)%_e.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Ty,{className:"w-4 h-4"})})]})]})]})]})]}),d.jsxs("section",{id:"contact",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"07 // SECURE COMMUNICATION CHANNEL"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SSL LINK ENCRYPTED"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-5 space-y-6 font-mono text-[10.5px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5",children:"TRANSMISSION DIRECTORIES"}),d.jsx("p",{className:"text-xs font-sans text-zinc-400 leading-relaxed",children:"Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels."})]}),d.jsxs("div",{className:"space-y-3.5 border-t border-zinc-900/80 pt-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400",children:d.jsx(qy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"ENVELOPE ADDRESS"}),d.jsx("a",{href:"mailto:farhankabir133@gmail.com",onClick:()=>s(900,.02),className:`text-[11px] font-bold ${t==="light"?"text-slate-850":"text-slate-200"} hover:underline`,children:"farhankabir133@gmail.com"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400",children:d.jsx(Zy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"COORDINATE MAPPING"}),d.jsx("span",{className:`text-[11px] font-bold ${t==="light"?"text-slate-800":"text-slate-250"}`,children:"Rajshahi, Bangladesh (UTC+6)"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none",children:[d.jsxs("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(fc,{className:"w-4 h-4 text-indigo-400"}),d.jsx("span",{children:"GITHUB"})]}),d.jsxs("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(hf,{className:"w-4 h-4 text-sky-400"}),d.jsx("span",{children:"LINKEDIN"})]}),d.jsxs("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Qf,{className:"w-4 h-4 text-emerald-400"}),d.jsx("span",{children:"MEDIUM"})]}),d.jsxs("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Kf,{className:"w-4 h-4 text-white"}),d.jsx("span",{children:"X / TWITTER"})]}),d.jsxs("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(ff,{className:"w-4 h-4 text-pink-400"}),d.jsx("span",{children:"INSTAGRAM"})]}),d.jsxs("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(pf,{className:"w-4 h-4 text-amber-400"}),d.jsx("span",{children:"GRAVATAR"})]})]})]}),d.jsx("div",{className:"lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative",children:F?d.jsxs("div",{className:"text-center py-10 space-y-4 animate-scale-up",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]",children:d.jsx(Vc,{className:"w-6 h-6 animate-pulse"})}),d.jsxs("div",{className:"space-y-1.5 font-mono",children:[d.jsx("span",{className:"text-[10px] text-emerald-400 font-bold uppercase tracking-wider",children:"TRANSMISSION EN ROUTE"}),d.jsx("h3",{className:`text-base font-extrabold ${t==="light"?"text-slate-800":"text-white"}`,children:"Matrix Sync Completed!"}),d.jsx("p",{className:"text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal",children:"Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now."})]}),d.jsx("button",{onClick:()=>{K(!1),s(800,.02)},className:"bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors active:scale-95",children:"Establish New Node"})]}):d.jsxs("form",{onSubmit:V,className:"space-y-4 font-mono text-[10px]",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"COGNITIVE NAME"}),d.jsx("input",{type:"text",value:U,onChange:k=>S(k.target.value),placeholder:"e.g. Jenkins S.",className:`w-full bg-black/60 border ${B.name?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),B.name&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:B.name})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION EMAIL"}),d.jsx("input",{type:"email",value:b,onChange:k=>L(k.target.value),placeholder:"e.g. envelope@domain.com",className:`w-full bg-black/60 border ${B.email?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),B.email&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:B.email})]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"INQUIRY SUBJECT"}),d.jsx("input",{type:"text",value:I,onChange:k=>O(k.target.value),placeholder:"e.g. Clinical NLP Model Fine-Tuning",className:`w-full bg-black/60 border ${B.subject?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),B.subject&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:B.subject})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION PAYLOAD (MESSAGE)"}),d.jsx("textarea",{rows:4,value:X,onChange:k=>P(k.target.value),placeholder:"Explain Objectives, Budgets, and Timelines...",className:`w-full bg-black/60 border ${B.message?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none`}),B.message&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:B.message})]}),d.jsx("button",{type:"submit",disabled:H,className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 active:scale-98 cursor-pointer ${ie.btnPrimary}`,children:H?d.jsxs(d.Fragment,{children:[d.jsx(d1,{className:"w-4 h-4 animate-spin"}),d.jsx("span",{children:"Transmitting packets..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(dv,{className:"w-4 h-4"}),d.jsx("span",{children:"Transmit Message"})]})})]})})]})]}),d.jsx("footer",{className:`mt-auto border-t ${t==="light"?"border-slate-200/80 bg-slate-100/50":"border-zinc-900/60 bg-black/45"} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`,children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"}),d.jsxs("span",{className:`text-[10px] font-mono tracking-widest uppercase ${t==="light"?"text-slate-600":"text-zinc-450"}`,children:["© ",new Date().getFullYear()," FARHAN KABIR. ALL RIGHTS SECURED."]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-550 font-bold",children:[d.jsx("a",{href:"#about",onClick:k=>{s(800,.02),z(k,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:k=>{s(800,.02),z(k,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:k=>{s(800,.02),z(k,"timeline")},className:"hover:text-white transition-colors",children:"TIMELINE"}),d.jsx("a",{href:"#projects",onClick:k=>{s(800,.02),z(k,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#contact",onClick:k=>{s(800,.02),z(k,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"GitHub",children:d.jsx(fc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"LinkedIn",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Medium",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"X (Twitter)",children:d.jsx(Kf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Instagram",children:d.jsx(ff,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Gravatar",children:d.jsx(pf,{className:"w-3.5 h-3.5"})})]})]})}),p&&d.jsx("button",{onClick:W,className:`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 animate-scale-up cursor-pointer hover:-translate-y-1 ${t==="light"?"bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50":"bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35"}`,title:"Back to Top",children:d.jsx(py,{className:"w-4 h-4"})})]})}function YA({theme:o,triggerSound:t}){const i=Oe.useRef(null),s=Oe.useRef(null),[l,c]=Oe.useState(!1),[h,m]=Oe.useState("#6366f1"),[g,p]=Oe.useState(4),[y,_]=Oe.useState(!1),[x,M]=Oe.useState("theme"),[T,U]=Oe.useState([]),[S,b]=Oe.useState([]),[L,I]=Oe.useState([]),[O,X]=Oe.useState({width:600,height:400}),A=x==="theme"?(()=>{switch(o){case"cyberpunk":return[{name:"Neon Pink",value:"#ff007f"},{name:"Matrix Green",value:"#39ff14"},{name:"Neon Blue",value:"#00ffff"},{name:"Cyber Purple",value:"#9d00ff"},{name:"Hot Orange",value:"#ff5e00"},{name:"Pure White",value:"#ffffff"}];case"terminal":return[{name:"Classic Green",value:"#33ff33"},{name:"Amber Glow",value:"#ffb000"},{name:"Terminal White",value:"#e5e5e5"},{name:"Phosphor Green",value:"#00ff66"},{name:"Dim Gray",value:"#7f7f7f"}];case"ai":return[{name:"Deep Cosmic",value:"#4f46e5"},{name:"Quantum Cyan",value:"#06b6d4"},{name:"Neural Violet",value:"#d946ef"},{name:"Supernova",value:"#f43f5e"},{name:"Logic White",value:"#fafafa"}];case"light":return[{name:"Royal Blue",value:"#2563eb"},{name:"Rose Red",value:"#dc2626"},{name:"Forest Green",value:"#16a34a"},{name:"Vibrant Orange",value:"#ea580c"},{name:"Slate Gray",value:"#475569"},{name:"Deep Charcoal",value:"#0f172a"}];default:return[{name:"Indigo Aura",value:"#818cf8"},{name:"Nebula Pink",value:"#f472b6"},{name:"Aurora Teal",value:"#2dd4bf"},{name:"Solar Yellow",value:"#fbbf24"},{name:"Coral Rose",value:"#fb7185"},{name:"Pure White",value:"#ffffff"}]}})():[{name:"Pure Black",value:"#000000"},{name:"Crimson Red",value:"#ef4444"},{name:"Cobalt Blue",value:"#3b82f6"},{name:"Emerald Green",value:"#22c55e"},{name:"Amber Yellow",value:"#eab308"},{name:"Pure White",value:"#ffffff"}];Oe.useEffect(()=>{m(A[0].value),_(!1)},[o,x]),Oe.useEffect(()=>{const se=i.current;if(!se)return;const D=new ResizeObserver(V=>{if(!V||V.length===0)return;const{width:k,height:me}=V[0].contentRect,Ae=Math.floor(k||600),$=Math.floor(me||400);X({width:Ae,height:$})});return D.observe(se),()=>{D.disconnect()}},[]),Oe.useEffect(()=>{const se=s.current;se&&(se.width=O.width,se.height=O.height,F())},[O,T,L]);const F=()=>{const se=s.current;if(!se)return;const D=se.getContext("2d");if(!D)return;D.clearRect(0,0,se.width,se.height),D.lineCap="round",D.lineJoin="round";const V=k=>{if(!(k.points.length<1))if(D.beginPath(),k.isEraser?D.globalCompositeOperation="destination-out":(D.globalCompositeOperation="source-over",D.strokeStyle=k.color),D.lineWidth=k.width,k.points.length===1){const me=k.points[0];D.arc(me.x,me.y,k.width/2,0,2*Math.PI),D.fillStyle=k.isEraser?"rgba(0,0,0,1)":k.color,D.fill()}else{const me=k.points[0];D.moveTo(me.x,me.y);for(let Ae=1;Ae<k.points.length;Ae++){const $=k.points[Ae];D.lineTo($.x,$.y)}D.stroke()}};T.forEach(k=>{V(k)}),L.length>0&&V({points:L,color:h,width:g,isEraser:y}),D.globalCompositeOperation="source-over"},K=se=>{const D=s.current;if(!D)return null;const V=D.getBoundingClientRect();let k=0,me=0;if("touches"in se){if(se.touches.length===0)return null;k=se.touches[0].clientX,me=se.touches[0].clientY}else k=se.clientX,me=se.clientY;return{x:(k-V.left)/V.width*D.width,y:(me-V.top)/V.height*D.height}},H=se=>{se.preventDefault();const D=K(se);D&&(c(!0),I([D]),b([]),t&&t(700,.015))},Z=se=>{if(!l)return;se.preventDefault();const D=K(se);D&&I(V=>[...V,D])},de=()=>{if(l){if(c(!1),L.length>0){const se={points:L,color:h,width:g,isEraser:y};U(D=>[...D,se])}I([]),t&&t(850,.02)}},pe=()=>{if(T.length===0)return;const se=[...T],D=se.pop();D&&(b(V=>[...V,D]),U(se),t&&t(500,.03))},W=()=>{if(S.length===0)return;const se=[...S],D=se.pop();D&&(U(V=>[...V,D]),b(se),t&&t(900,.03))},z=()=>{T.length!==0&&confirm("Clear the entire ideation sketch pad?")&&(U([]),b([]),I([]),t&&t(350,.07))},j=()=>{const se=s.current;if(!se)return;const D=document.createElement("canvas");D.width=se.width,D.height=se.height;const V=D.getContext("2d");if(!V)return;o==="light"?V.fillStyle="#f8fafc":o==="cyberpunk"?V.fillStyle="#010206":o==="terminal"?V.fillStyle="#050705":V.fillStyle="#090a12",V.fillRect(0,0,D.width,D.height),V.strokeStyle=o==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)",V.lineWidth=1;const k=30;for(let $=0;$<D.width;$+=k)V.beginPath(),V.moveTo($,0),V.lineTo($,D.height),V.stroke();for(let $=0;$<D.height;$+=k)V.beginPath(),V.moveTo(0,$),V.lineTo(D.width,$),V.stroke();V.drawImage(se,0,0),V.font="10px monospace",V.fillStyle=o==="light"?"rgba(15, 23, 42, 0.4)":"rgba(255, 255, 255, 0.3)",V.textAlign="right",V.fillText("FARHAN KABIR CORE OS v2.4 // VISUAL IDEATION UNIT",D.width-20,D.height-20);const me=D.toDataURL("image/png"),Ae=document.createElement("a");Ae.href=me,Ae.download=`FarhanOS_Whiteboard_${Date.now()}.png`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),t&&t(1100,.08)},ie=o==="cyberpunk"?"border-[#ff007f]/40 text-pink-400 font-mono":o==="terminal"?"border-[#33ff33]/40 text-[#33ff33] font-mono":o==="ai"?"border-indigo-500/40 text-indigo-400 font-sans":o==="light"?"border-slate-300 text-slate-800 font-sans":"border-zinc-800 text-slate-200 font-sans",_e=se=>{m(se),_(!1),t&&t(900,.015)};return d.jsxs("div",{className:"flex flex-col h-full gap-3 select-none",children:[d.jsxs("div",{className:`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-3 bg-black/35 backdrop-blur-md ${ie}`,children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:pe,disabled:T.length===0,className:`p-1.5 rounded transition-all duration-200 ${T.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Undo stroke (Ctrl+Z)",children:d.jsx(S1,{className:"w-4 h-4"})}),d.jsx("button",{onClick:W,disabled:S.length===0,className:`p-1.5 rounded transition-all duration-200 ${S.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Redo stroke (Ctrl+Y)",children:d.jsx(c1,{className:"w-4 h-4"})}),d.jsx("span",{className:"h-4 w-px bg-zinc-850 mx-1"}),d.jsxs("button",{onClick:()=>{_(!1),t&&t(800,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200":"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300"}`,title:"Paint Brush Mode",children:[d.jsx($g,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Paint"})]}),d.jsxs("button",{onClick:()=>{_(!0),t&&t(600,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300":"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200"}`,title:"Eraser tool",children:[d.jsx(Uy,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Eraser"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 p-1 rounded-md border border-zinc-900/80 text-[9px] font-mono",children:[d.jsx("button",{onClick:()=>{M("theme"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="theme"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to Theme-specific colors",children:"OS Aura"}),d.jsx("button",{onClick:()=>{M("classic"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="classic"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to classic drawing colors (Black, Red, Blue, Green, etc.)",children:"Classic"})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[A.map(se=>{const D=h===se.value&&!y;return d.jsxs("button",{onClick:()=>_e(se.value),className:"relative group w-4 h-4 rounded-full transition duration-300 border border-black/50",style:{backgroundColor:se.value},title:`${se.name}`,children:[D&&d.jsx("span",{className:"absolute inset-0 flex items-center justify-center scale-75 text-white filter drop-shadow",children:d.jsx(Vc,{className:"w-3.5 h-3.5 text-white stroke-[3.5px]",style:{mixBlendMode:"difference"}})}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:se.name})]},se.value)}),d.jsx("span",{className:"h-3 w-px bg-zinc-800 mx-1"}),d.jsxs("div",{className:"relative group w-4 h-4 rounded-full overflow-hidden border border-zinc-700/50 flex items-center justify-center bg-gradient-to-tr from-rose-500 via-emerald-500 to-sky-500 shadow-sm",title:"Choose custom color spectrum",children:[d.jsx("input",{type:"color",value:h,onChange:se=>_e(se.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),d.jsx("span",{className:"text-[10px] font-black text-white pointer-events-none filter drop-shadow-sm",children:"+"}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:"Custom Color"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono select-none uppercase tracking-tight hidden xs:inline",children:["Width: ",g,"px"]}),d.jsx("input",{type:"range",min:"1",max:"40",value:g,onChange:se=>{const D=parseInt(se.target.value,10);p(D),t&&t(750+D*3,.005)},className:"w-16 sm:w-20 md:w-24 accent-indigo-500 bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer",title:"Slide to adjust brush thickness"})]}),d.jsx("div",{className:"flex items-center gap-1",children:[2,4,8,16].map(se=>d.jsx("button",{onClick:()=>{p(se),t&&t(750,.01)},className:`w-5 h-5 rounded flex items-center justify-center transition border ${g===se?"bg-white/10 border-indigo-500/50 text-indigo-400":"border-transparent hover:bg-white/5 text-zinc-400"}`,title:`Brush size ${se}px`,children:d.jsx("span",{className:"relative flex items-center justify-center",children:d.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.max(2,se/1.5)}px`,height:`${Math.max(2,se/1.5)}px`}})})},se))}),d.jsx("span",{className:"h-4 w-px bg-zinc-850"}),d.jsx("button",{onClick:z,className:"p-1.5 rounded transition-all duration-200 hover:bg-rose-500/20 hover:scale-110 active:scale-90 text-rose-400 hover:text-rose-300",title:"Clear canvas",children:d.jsx(sx,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:j,className:"p-1.5 rounded transition-all duration-200 hover:bg-emerald-500/20 hover:scale-110 active:scale-90 text-emerald-400 hover:text-emerald-300",title:"Download visual sketch (.png)",children:d.jsx(Xh,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("div",{ref:i,className:`whiteboard-canvas-container flex-1 min-h-[280px] max-h-[50vh] rounded-lg border-2 border-dashed flex relative overflow-hidden bg-black/45 shadow-inner transition-colors duration-350 cursor-crosshair ${o==="cyberpunk"?"border-pink-500/25 shadow-pink-500/5 bg-[#000]":o==="terminal"?"border-[#33ff33]/25 shadow-emerald-500/5":"border-zinc-800/80 shadow-sky-500/5"}`,children:[d.jsxs("button",{onClick:z,disabled:T.length===0,className:`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded border shadow-lg transition-all duration-200 select-none ${T.length===0?"opacity-40 cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/40":"hover:scale-105 active:scale-95 "+(o==="cyberpunk"?"bg-black/90 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border-pink-500/30 hover:border-pink-500/50":o==="terminal"?"bg-black/90 hover:bg-[#33ff33]/20 text-[#33ff33] border-[#33ff33]/30 hover:border-[#33ff33]/50 font-mono":o==="light"?"bg-white/90 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300":"bg-zinc-950/90 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border-indigo-500/25 hover:border-indigo-500/45")}`,title:"Clear canvas to a blank state",children:[d.jsx(sx,{className:"w-3 h-3"}),d.jsx("span",{children:"Clear Board"})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen overflow-hidden",children:d.jsx("div",{className:"w-full h-full",style:{backgroundImage:"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",backgroundSize:"24px 24px",color:o==="terminal"?"#33ff33":o==="cyberpunk"?"#ff007f":"#6366f1"}})}),T.length===0&&!l&&d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-2",children:d.jsx($g,{className:"w-6 h-6 text-indigo-400/55 animate-pulse"})}),d.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-zinc-550",children:"Visual Ideation Pad"}),d.jsx("span",{className:"text-[9px] text-zinc-600 mt-1",children:"Press and drag anywhere on this sandbox grid canvas to sketch plans"})]}),d.jsx("canvas",{ref:s,onMouseDown:H,onMouseMove:Z,onMouseUp:de,onMouseLeave:de,onTouchStart:H,onTouchMove:Z,onTouchEnd:de,className:"absolute inset-0 w-full h-full select-none touch-none bg-transparent"}),d.jsxs("div",{className:"absolute bottom-2 left-2 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-900/50 text-[8px] font-mono text-zinc-500",children:[d.jsxs("span",{children:["COORDS: ",O.width,"x",O.height]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:["STROKESTACK: ",T.length]})]})]}),d.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[d.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-zinc-500 font-mono",children:[d.jsx(Xo,{className:"w-3 h-3 text-indigo-400"}),d.jsx("span",{children:"IDEATION UNIT DEPLOYED SECURELY WITHIN THE OPERATING SYSTEM ENVIRONMENT"})]}),d.jsx("div",{className:"text-[9px] font-mono text-zinc-500",children:"v2.4.6_canvas"})]})]})}function ZA(o,t){if(typeof window>"u"||!window.speechSynthesis)return t&&t(),null;window.speechSynthesis.cancel();const i=o.replace(/[*_#`~[\]]/g,"").replace(/➔/g," to ").replace(/F1/gi,"F-1").replace(/LLMs?/gi,"Large Language Models").replace(/NLP/gi,"Natural Language Processing").trim(),s=new SpeechSynthesisUtterance(i),l=window.speechSynthesis.getVoices(),c=l.find(h=>h.lang.startsWith("en")&&(h.name.includes("Google")||h.name.includes("Natural")||h.name.includes("Samantha")||h.name.includes("Zira")))||l.find(h=>h.lang.startsWith("en"))||l[0];return c&&(s.voice=c),s.pitch=1.05,s.rate=.98,s.onend=()=>{t&&t()},s.onerror=()=>{t&&t()},window.speechSynthesis.speak(s),{stop:()=>{window.speechSynthesis.cancel(),t&&t()}}}function KA(o,t){const i=o.toLowerCase().trim();return i.includes("depression")||i.includes("mental")||i.includes("health")||i.includes("distress")||i.includes("clinical")||i.includes("wellness")?`My research in clinical NLP has led to two main publications: 

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
• My technical stack or how to get in contact with me.`}function QA(o){const t=o.projectType.includes("NLP")||o.goals.toLowerCase().includes("text")||o.goals.toLowerCase().includes("linguistic")||o.goals.toLowerCase().includes("language"),i=t?"RoBERTa-Clinical or custom fine-tuned BERT":"Gemini 3.5 Flash / distilled Llama 3B",s=t?"<5ms inference threshold":"<150ms roundtrip HMR";return`[SYSTEM DIAGNOSTICS READOUT // OFFLINE FEASIBILITY SCAN]
-----------------------------------------------------------------
INITIATIVE PROFILE : Category: ${o.projectType} // Boundary: ${o.budget} // Timeline: ${o.timeline}
SEMANTIC OBJECTIVE : "${o.goals.length>80?o.goals.substring(0,80)+"...":o.goals}"
OPERATIVE DIRECTIVES: ${o.comments?o.comments:"Standard secure deployment"}

TECHNICAL VIABILITY SUMMARY:
• Feasibility: High. The objectives map directly to Farhan's micro-service templates.
• Target Model Candidate: ${i}
• Proposed Stack: React client + Go/Node.js API pipeline + Redis quantization caching.
• Optimization Goal: ONNX runtime deployment yielding a ${s} overhead.
• Security Boundary: Local token perplexity classification shields will be activated to protect against prompt injection vectors (94.2% accuracy threshold).`}function JA(){const[o,t]=Oe.useState("landing"),[i,s]=Oe.useState(!1);Oe.useEffect(()=>(o==="os"?document.documentElement.classList.add("os-mode"):document.documentElement.classList.remove("os-mode"),()=>{document.documentElement.classList.remove("os-mode")}),[o]);const[l,c]=Oe.useState(""),[h,m]=Oe.useState(""),[g,p]=Oe.useState(!1),[y,_]=Oe.useState(null),[x,M]=Oe.useState(!1),[T,U]=Oe.useState(0),[S,b]=Oe.useState([]),[L,I]=Oe.useState("dark"),[O,X]=Oe.useState(!0),[P,B]=Oe.useState(!0),[A,F]=Oe.useState(""),[K,H]=Oe.useState(["twin"]),[Z,de]=Oe.useState([]),[pe,W]=Oe.useState("twin"),[z,j]=Oe.useState({twin:{x:50,y:70,isMaximized:!1},projects:{x:120,y:140,isMaximized:!1},research:{x:180,y:90,isMaximized:!1},github:{x:220,y:160,isMaximized:!1},writing:{x:80,y:220,isMaximized:!1},garden:{x:260,y:40,isMaximized:!1},resume:{x:300,y:200,isMaximized:!1},timeline:{x:140,y:300,isMaximized:!1},skills:{x:400,y:80,isMaximized:!1},brief:{x:350,y:150,isMaximized:!1},builds:{x:200,y:350,isMaximized:!1},whiteboard:{x:240,y:110,isMaximized:!1},profTimeline:{x:160,y:240,isMaximized:!1}}),ie=Oe.useRef(null),[_e,se]=Oe.useState(12);Oe.useEffect(()=>{const N=setInterval(()=>{se(Math.floor(Math.random()*10)+7)},2500);return()=>clearInterval(N)},[]);const[D,V]=Oe.useState(typeof window<"u"?window.innerWidth:1024);Oe.useEffect(()=>{const N=()=>{V(re=>re!==window.innerWidth?window.innerWidth:re)};return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const k=()=>{const N=["dark","cyberpunk","ai","terminal","light"],re=(N.indexOf(L)+1)%N.length;I(N[re]),nt(750,.03)},me=N=>{t("os"),M(!0),K.includes(N)||H([...K,N]),W(N),nt(900,.05)},Ae=N=>{ft(N),me("writing")},[$,Te]=Oe.useState(en.projects[0]),[we,Ve]=Oe.useState(en.papers[0]),[et,Je]=Oe.useState(en.articles),[yt,ft]=Oe.useState(en.articles[0]),[dt,Et]=Oe.useState(en.timeline[0]);Oe.useEffect(()=>{(async()=>{try{const re=await fetch("/api/medium-stories");if(re.ok){const he=await re.json();if(Array.isArray(he)&&he.length>0){Je(he),ft(he[0]);return}}}catch(re){console.warn("Backend Medium stories endpoint unavailable, trying client fallback:",re)}try{const re=await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@farhankabir133");if(re.ok){const he=await re.json();if(he.status==="ok"&&Array.isArray(he.items)){const be=he.items.slice(0,6).map((De,Ge)=>{const Ke=De.description||"",ae=Ke.match(/<img[^>]+src=["']([^"']+)["']/),Le=ae?ae[1]:"",lt=Ke.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);let _t=lt?lt[1].replace(/<[^>]+>/g,"").trim():"";const Ct=Ke.replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();_t||(_t=Ct.slice(0,150)+(Ct.length>150?"...":""));let At="Life";const Rt=(De.categories||[]).map(ct=>ct.toLowerCase());Rt.some(ct=>ct.includes("ai")||ct.includes("artificial")||ct.includes("gpt")||ct.includes("llm"))?At="AI":Rt.some(ct=>ct.includes("dev")||ct.includes("coding")||ct.includes("program")||ct.includes("software")||ct.includes("architecture")||ct.includes("engineering"))?At="Engineering":Rt.some(ct=>ct.includes("productiv")||ct.includes("work")||ct.includes("career")||ct.includes("growth"))?At="Productivity":Rt.some(ct=>ct.includes("research")||ct.includes("science")||ct.includes("clinic"))?At="Research":Rt.some(ct=>ct.includes("design")||ct.includes("ux")||ct.includes("ui"))?At="Design":Rt.some(ct=>ct.includes("startup")||ct.includes("business")||ct.includes("saas"))?At="Startups":Rt.some(ct=>ct.includes("philosoph")||ct.includes("think"))&&(At="Philosophy");let We=De.pubDate;try{const ct=new Date(De.pubDate);isNaN(ct.getTime())||(We=ct.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))}catch{}const bn=Ct.split(/\s+/).length,mn=`${Math.max(1,Math.ceil(bn/225))} min read`,Fn=(De.guid||"").match(/\/p\/([a-f0-9]+)$/)||(De.link||"").match(/-([a-f0-9]+)$/);return{id:Fn?Fn[1]:`medium-${Ge}`,title:De.title,category:At,readTime:mn,date:We,excerpt:_t,content:Ct||_t||De.title,link:De.link,imageUrl:Le}});be.length>0&&(Je(be),ft(be[0]))}}}catch(re){console.warn("Client-side rss2json fallback failed:",re)}})()},[]);const[tt,Ft]=Oe.useState("all"),[Nt,un]=Oe.useState("recruiter"),[Q,Ze]=Oe.useState(!1),[it,st]=Oe.useState(""),[Ue,rt]=Oe.useState(""),[R,E]=Oe.useState([{role:"assistant",content:"Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps."}]),[ee,ye]=Oe.useState(!1),[Re,Pe]=Oe.useState(null),[Ie,xe]=Oe.useState(null),[ge,ke]=Oe.useState({projectType:"AI Engineering",budget:"$5,000 - $10,000",timeline:"1-3 Months",goals:"",comments:""}),[He,Be]=Oe.useState(null),[Fe,ht]=Oe.useState(!1),[pt,St]=Oe.useState(!1),[q,ze]=Oe.useState(0),[Se,Xe]=Oe.useState(""),[je,Ne]=Oe.useState(!1),[Ye,ot]=Oe.useState(null),[nn,Bt]=Oe.useState(null),nt=(N=800,re=.03)=>{O&&ox(N,re)};Oe.useEffect(()=>{const N=()=>{F(new Date().toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};N();const re=setInterval(N,1e3);return()=>clearInterval(re)},[]),Oe.useEffect(()=>{if(!x){const N=["INIT: Booting FarhanOS Kernel v2.4.6...","SYS: Loading digital neural parameters...","SYS: Grounding publications corpus index...","NETWORK: Establishing proxy connection secure rails...","AI: Initializing Gemini bimodal model instances...","GRAPH: Parsing topological clinical coordinates...","SYS: Systems compiled. Ready for operational execution."];let re=0;const he=setInterval(()=>{U(be=>{if(be>=100)return clearInterval(he),setTimeout(()=>{M(!0),nt(1e3,.15)},600),100;const De=Math.floor(Math.random()*15)+5,Ge=Math.min(be+De,100);return Ge>re*15&&re<N.length&&(b(Ke=>[...Ke,N[re]]),re++,nt(600+re*50,.02)),Ge})},120);return()=>clearInterval(he)}},[x]);const Vn=()=>{if(i)return;nt(1200,.4),s(!0);let N=0;const re=setInterval(()=>{N<7?(nt(150+N*200,.05),N++):clearInterval(re)},100);setTimeout(()=>{t("os"),U(0),b([]),M(!1),s(!1)},1800)};Oe.useEffect(()=>{const N=re=>{(re.metaKey||re.ctrlKey)&&re.key==="k"&&(re.preventDefault(),Ze(he=>!he),nt(900,.04)),re.key==="Escape"&&Ze(!1)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[O]);const si=Oe.useRef(null),oa=Oe.useRef({x:0,y:0}),ri=Oe.useRef(null),Vi=Oe.useRef({x:0,y:0}),an=Oe.useRef({x:0,y:0}),cn=(N,re)=>{var Ke,ae,Le;if((Ke=z[N])!=null&&Ke.isMaximized)return;W(N);const he=((ae=z[N])==null?void 0:ae.x)||0,be=((Le=z[N])==null?void 0:Le.y)||0;si.current=N,oa.current={x:re.clientX-he,y:re.clientY-be},Vi.current={x:he,y:be},an.current={x:he,y:be};const De=document.getElementById(`window-${N}`);De&&(De.style.transition="none"),Bt(N),nt(500,.01),ri.current&&cancelAnimationFrame(ri.current);const Ge=()=>{const lt=si.current;if(!lt)return;const _t=.16,Ct=Vi.current.x-an.current.x,At=Vi.current.y-an.current.y;an.current.x+=Ct*_t,an.current.y+=At*_t;const Rt=Ct*_t,We=4,bn=Math.min(Math.max(-Rt*.14,-We),We),xt=document.getElementById(`window-${lt}`);xt&&(xt.style.left=`${an.current.x}px`,xt.style.top=`${an.current.y}px`,xt.style.transform=`rotateZ(${bn}deg) scale(1.025)`,xt.style.boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.65)",xt.style.zIndex="100"),ri.current=requestAnimationFrame(Ge)};ri.current=requestAnimationFrame(Ge)},_n=N=>{if(si.current){const he=Math.max(0,N.clientX-oa.current.x),be=Math.max(0,N.clientY-oa.current.y);Vi.current={x:he,y:be}}},gi=()=>{const N=si.current;if(N){ri.current&&cancelAnimationFrame(ri.current),ri.current=null;const re=an.current.x,he=an.current.y,be=document.getElementById(`window-${N}`);be&&(be.style.transition="",be.style.transform="",be.style.boxShadow="",be.style.zIndex=""),j(De=>({...De,[N]:{...De[N],x:re,y:he}})),si.current=null,Bt(null)}};Oe.useEffect(()=>(nn&&(window.addEventListener("mousemove",_n),window.addEventListener("mouseup",gi)),()=>{window.removeEventListener("mousemove",_n),window.removeEventListener("mouseup",gi)}),[nn]);const pn=N=>{nt(700,.05),K.includes(N)||H(re=>[...re,N]),de(re=>re.filter(he=>he!==N)),W(N)},Ws=N=>{nt(400,.06),H(re=>re.filter(he=>he!==N))},la=N=>{nt(450,.04),Z.includes(N)||de(he=>[...he,N]);const re=K.filter(he=>he!==N&&!Z.includes(he));re.length>0&&W(re[re.length-1])},ms=N=>{nt(800,.04),j(re=>{var he;return{...re,[N]:{...re[N],isMaximized:!((he=re[N])!=null&&he.isMaximized)}}})},Xn=async(N,re=null,he="narrate")=>{if(P)try{Ie&&(Ie.stop(),xe(null)),Pe(re);const De=await(await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:N,type:he})})).json();if(De.audio){const Ge=await R1(De.audio);xe(Ge);const Ke=De.audio.length*.75/24e3;setTimeout(()=>{Pe(null)},Ke*1e3)}}catch(be){console.error("Narrator service unreachable, falling back to client voice:",be);try{const De=ZA(N,()=>{Pe(null)});De?xe(De):Pe(null)}catch(De){console.error("Client speech synthesis failed:",De),Pe(null)}}},Ui=()=>{Ie&&(Ie.stop(),xe(null)),Pe(null)},zi=async()=>{if(!Ue.trim())return;const N=Ue.trim();rt(""),E(re=>[...re,{role:"user",content:N}]),ye(!0),nt(1100,.03);try{const re=R.map(De=>({role:De.role==="user"?"user":"assistant",content:De.content})),be=await(await fetch("/api/ask-twin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:N,history:re})})).json();if(be.reply)E(De=>[...De,{role:"assistant",content:be.reply}]),ye(!1),P&&Xn(be.reply,R.length+1);else throw new Error(be.error||"General twin system fault.")}catch(re){console.warn("Backend twin service failed, using local fallback:",re),R.map(be=>({role:be.role==="user"?"user":"assistant",content:be.content}));const he=KA(N);E(be=>[...be,{role:"assistant",content:he}]),ye(!1),P&&Xn(he,R.length+1)}},Xi=async()=>{if(ge.goals.trim()){ht(!0),nt(950,.05);try{const re=await(await fetch("/api/summarize-brief",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();re.summary&&Be(re.summary)}catch(N){console.warn("Backend brief summarizer failed, using local fallback:",N);const re=QA(ge);Be(re)}finally{ht(!1)}}},Wi=async()=>{nt(1200,.1),St(!0),Ne(!0),ze(1);const N=[{id:"twin",title:"Neural Core Clone",text:"This is the Ask Farhan AI Clone, trained on Farhan's complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles."},{id:"projects",title:"Project Galaxy Command",text:"Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications."},{id:"research",title:"Linguistic Research Laboratory",text:"Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules."},{id:"skills",title:"Skill Observational Map",text:"Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures."},{id:"brief",title:"Mission Collaboration Brief",text:"Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."}];await(async he=>{const be=N[he-1];if(!be){St(!1),ze(0);return}ze(he),Xe(be.text),pn(be.id),Ne(!0),P&&await Xn(be.text,null,"tour"),Ne(!1)})(1)},qi=()=>{if(q<5){const N=q+1;ze(N),nt(800,.04);const re=["Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.","Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.","Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.","Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."];pn(["projects","research","skills","brief"][N-1]),Xe(re[N-2]),P&&Xn(re[N-2],null,"tour")}else St(!1),ze(0),Ui(),nt(1300,.05)},dn=en.skills.filter(N=>tt==="all"||tt==="AI/ML"&&N.category==="AI/ML"||tt==="Frontend"&&N.category==="Frontend"||tt==="Backend"&&N.category==="Backend"||tt==="Research"&&N.category==="Research & Science"||tt==="Systems"&&N.category==="Systems & Devops"),w=(()=>{const N=it.toLowerCase().trim();if(!N)return[];const re=[];return en.projects.forEach(he=>{(he.title.toLowerCase().includes(N)||he.techStack.some(be=>be.toLowerCase().includes(N)))&&re.push({type:"Project",title:he.title,subtitle:he.category,action:()=>{pn("projects"),Te(he),Ze(!1)}})}),en.papers.forEach(he=>{(he.title.toLowerCase().includes(N)||he.abstract.toLowerCase().includes(N))&&re.push({type:"Research Paper",title:he.title,subtitle:`${he.year} - ${he.journal}`,action:()=>{pn("research"),Ve(he),Ze(!1)}})}),et.forEach(he=>{(he.title.toLowerCase().includes(N)||he.excerpt.toLowerCase().includes(N))&&re.push({type:"Blog/Article",title:he.title,subtitle:he.category,action:()=>{pn("writing"),ft(he),Ze(!1)}})}),en.skills.forEach(he=>{he.name.toLowerCase().includes(N)&&re.push({type:"Tech Stack",title:he.name,subtitle:he.category,action:()=>{pn("skills"),Ft(he.category==="Research & Science"?"Research":he.category==="Systems & Devops"?"Systems":he.category),Ze(!1)}})}),("whiteboard".includes(N)||"ideation".includes(N)||"canvas".includes(N)||"drawing".includes(N)||"sketch".includes(N)||"paint".includes(N))&&re.push({type:"OS Utility",title:"Ideation Pad (Whiteboard)",subtitle:"HTML5 digital canvas for sketching visual ideas",action:()=>{pn("whiteboard"),Ze(!1)}}),re})(),J=[{id:"twin",label:"Ask Twin AI",icon:Xo,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{id:"projects",label:"Mission Control",icon:dc,color:"text-sky-400 bg-sky-500/10 border-sky-500/20"},{id:"research",label:"Research Lab",icon:xy,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{id:"github",label:"GitHub Monitor",icon:tx,color:"text-zinc-400 bg-zinc-500/10 border-zinc-500/20"},{id:"writing",label:"Writing Hub",icon:By,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"},{id:"garden",label:"Garden Graph",icon:t1,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"resume",label:"Resume Gen",icon:Iy,color:"text-pink-400 bg-pink-500/10 border-pink-500/20"},{id:"timeline",label:"Career Index",icon:by,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{id:"profTimeline",label:"Prof. Timeline",icon:lv,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"skills",label:"Skill Observatory",icon:ex,color:"text-indigo-400 bg-indigo-500/10 border-indigo-500/20"},{id:"brief",label:"Mission Brief",icon:ix,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{id:"builds",label:"Release Logs",icon:Vy,color:"text-teal-400 bg-teal-500/10 border-teal-500/20"},{id:"whiteboard",label:"Ideation Pad",icon:nx,color:"text-orange-400 bg-orange-500/10 border-orange-500/20"}],ne=(()=>{switch(L){case"cyberpunk":return{bg:"bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white",glass:"bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]",windowHeader:"bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95",btnSecondary:"bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono",accentColor:"text-pink-500",accentBorder:"border-pink-500/40",indicator:"bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]",panelHeader:"text-pink-400 uppercase tracking-widest text-[11px] font-bold",badge:"bg-pink-500/20 border border-pink-500/40 text-pink-300"};case"ai":return{bg:"bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white",glass:"bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10",windowHeader:"bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100",btnSecondary:"bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all",accentColor:"text-purple-400",accentBorder:"border-purple-500/30",indicator:"bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse",panelHeader:"text-purple-400 tracking-wider text-xs font-semibold",badge:"bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs"};case"terminal":return{bg:"bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20",glass:"bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]",windowHeader:"bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono",btnPrimary:"bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all",btnSecondary:"bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all",accentColor:"text-[#33ff33]",accentBorder:"border-[#33ff33]/30",indicator:"bg-[#33ff33] shadow-[0_0_10px_#33ff33]",panelHeader:"text-[#33ff33] font-bold uppercase tracking-wider text-[11px]",badge:"bg-transparent border border-[#33ff33] text-[#33ff33] text-xs"};case"light":return{bg:"bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20",glass:"bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl",windowHeader:"bg-slate-50 text-slate-800 border-b border-slate-200 font-sans",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95",btnSecondary:"bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all",accentColor:"text-indigo-600",accentBorder:"border-slate-300",indicator:"bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]",panelHeader:"text-slate-500 uppercase tracking-widest text-[11px] font-bold",badge:"bg-slate-100 border border-slate-200 text-slate-700 text-xs"};default:return{bg:"bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20",glass:"bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80",windowHeader:"bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans",btnPrimary:"bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95",btnSecondary:"bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all",accentColor:"text-sky-400",accentBorder:"border-sky-500/20",indicator:"bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",panelHeader:"text-sky-450 uppercase tracking-wider text-[11px] font-bold",badge:"bg-sky-500/10 border border-sky-500/20 text-sky-300"}}})();return d.jsx("div",{className:`w-full ${o==="os"?"h-full overflow-hidden select-none":"min-h-screen"} ${ne.bg} transition-colors duration-500 flex flex-col relative`,children:o==="landing"?d.jsx(qA,{isWarping:i,theme:L,soundOn:O,triggerSound:nt,onLaunchOS:Vn,onOpenWindowDirectly:me,articles:et,onOpenArticleDirectly:Ae}):d.jsxs(d.Fragment,{children:[!x&&d.jsxs("div",{className:"absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6",children:[d.jsxs("div",{className:"w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500",style:{width:`${T}%`}}),d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-3 mb-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"}),d.jsx("span",{className:"text-zinc-400 font-bold tracking-wider",children:"FARHAN KABIR CORE OS v2.4"})]}),d.jsxs("span",{className:"text-zinc-500 tracking-wider",children:["BOOT: ",T,"%"]})]}),d.jsxs("div",{className:"space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1",children:[S.map((N,re)=>d.jsxs("div",{className:"text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between",children:[d.jsx("span",{className:"flex-1 whitespace-pre-wrap",children:N}),d.jsx("span",{className:"text-zinc-600 text-[9px]",children:"[SUCCESS]"})]},re)),T<100&&d.jsx("div",{className:"text-white animate-pulse font-mono text-[11px]",children:"⏳ Orchestrating linguistic vectors, please standby..."})]}),d.jsxs("div",{className:"flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500",children:[d.jsx("span",{children:"SYSTEM HOST: OOS LOCAL HOST INSTANCE"}),d.jsx("span",{children:"PORT: 3001 ACTIVE"})]})]}),d.jsx("div",{className:"mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono",children:"Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices."})]}),d.jsxs("header",{className:"h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono",children:[d.jsxs("div",{className:"flex items-center gap-5",children:[d.jsxs("div",{className:"flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85",onClick:()=>nt(900,.05),children:[d.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]"}),d.jsx("span",{children:"FarhanOS"}),d.jsx("span",{className:"text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium",children:"BETA"})]}),d.jsxs("button",{onClick:()=>{t("landing"),nt(1105,.06)},className:"flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer",title:"Return to Cosmos Portal",children:[d.jsx(ex,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"Return to Cosmos"})]}),d.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none",children:[d.jsxs("button",{onClick:()=>{Ze(!0),nt(800,.03)},className:"hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer",children:[d.jsx(ax,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Search ",d.jsx("kbd",{className:"text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5",children:"Cmd+K"})]})]}),d.jsxs("button",{onClick:Wi,className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300",children:[d.jsx(Xo,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"AI Site Tour"})]}),d.jsxs("button",{onClick:()=>pn("brief"),className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer",children:[d.jsx(uv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Mission Brief"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-4 select-none",children:[d.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-medium mr-1.5",children:"Mood Theme:"}),["dark","cyberpunk","ai","terminal","light"].map(N=>d.jsx("button",{onClick:()=>{I(N),nt(750,.03)},className:`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${L===N?"bg-[#181926] text-white font-bold border border-zinc-700/60":"text-zinc-500 hover:text-zinc-300"}`,children:N},N))]}),d.jsxs("button",{onClick:k,className:"md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all",title:"Cycle Theme",children:[d.jsx(nx,{className:"w-3.5 h-3.5 text-sky-400 animate-pulse"}),d.jsxs("span",{children:["Theme: ",L]})]}),d.jsxs("div",{className:"flex items-center gap-3 border-l border-zinc-800/60 pl-3",children:[d.jsx("button",{onClick:()=>{X(!O),ox(1e3,.02)},className:`p-1 rounded cursor-pointer hover:bg-zinc-900 ${O?"text-zinc-300":"text-zinc-600"}`,title:"Toggle Audio Feedback",children:O?d.jsx(mf,{className:"w-3.5 h-3.5"}):d.jsx(gf,{className:"w-3.5 h-3.5"})}),d.jsxs("button",{onClick:()=>{B(!P),Re!==null&&Ui()},className:`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${P?"text-purple-400 border border-purple-500/20 bg-purple-500/5":"text-zinc-600 border border-zinc-800"}`,title:"Toggle Voice synthesizer narration output",children:[d.jsx(dc,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{className:"hidden sm:inline",children:"OS Voice"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none",children:[d.jsx(cv,{className:"w-3.5 h-3.5 text-sky-400"}),d.jsxs("span",{children:[A||"14:37:33"," (UTC)"]})]})]})]})]}),pt&&d.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short",children:[d.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300",children:d.jsx(Xo,{className:"w-5 h-5 text-purple-400 animate-spin-slow"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("h4",{className:"text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200",children:["AI SYSTEM TOUR — ZONE ",q," OF 5"]}),je&&d.jsx("span",{className:"text-[10px] text-purple-300 animate-pulse font-mono select-none",children:"Rendering Synthesized Voice..."})]}),d.jsx("p",{className:"text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans",children:Se||"Preparing..."}),d.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[d.jsx("button",{onClick:qi,className:"bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer",children:q===5?"Conclude Integration Tour":"Acknowledge & Sync Next Area"}),d.jsx("button",{onClick:()=>{St(!1),ze(0),Ui(),nt(400,.05)},className:"text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer",children:"Exit Tour"})]})]})]}),d.jsxs("main",{className:"flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none",children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35",children:[d.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"}),d.jsx("div",{className:"absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"}),d.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow"})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto",children:J.map((N,re)=>{const he=N.icon,be=K.includes(N.id),De=pe===N.id&&!Z.includes(N.id);return d.jsxs("div",{onClick:()=>pn(N.id),style:{animationDelay:`${re*45}ms`},className:`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 ${be?"bg-zinc-950/15":""}`,children:[d.jsxs("div",{className:`p-4 rounded-2xl ${N.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`,children:[d.jsx(he,{className:"w-6 h-6"}),be&&d.jsx("span",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]"})]}),d.jsx("span",{className:"text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1",children:N.label}),De&&d.jsx("span",{className:"absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs"})]},N.id)})}),K.map(N=>{if(Z.includes(N))return null;const re=pe===N,he=z[N]||{x:100,y:100,isMaximized:!1},be=J.find(ae=>ae.id===N),De=be?be.icon:_1,Ke=D<768||he.isMaximized?{position:"fixed",top:"2.5rem",left:0,right:0,bottom:"4rem",zIndex:re?50:20}:{position:"absolute",left:`${he.x}px`,top:`${he.y}px`,width:N==="twin"||N==="garden"||N==="skills"?"540px":"720px",height:N==="twin"?"480px":"550px",maxHeight:"85vh",zIndex:re?50:20};return d.jsxs("div",{id:`window-${N}`,style:Ke,onClick:()=>{W(N),nt(400,.01)},className:`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${ne.glass} ${re?"ring-2 ring-sky-500/35 scale-[1.002]":"opacity-90"} animate-window-open`,children:[d.jsxs("div",{onMouseDown:ae=>cn(N,ae),className:`h-9 px-3 flex items-center justify-between cursor-move select-none ${ne.windowHeader}`,children:[d.jsxs("div",{className:"flex items-center gap-2 font-semibold tracking-tight text-xs",children:[d.jsx(De,{className:"w-3.5 h-3.5 opacity-80"}),d.jsx("span",{children:be?be.label:"FarhanOS Sandbox"}),re&&d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})]}),d.jsxs("div",{className:"flex items-center gap-2",onMouseDown:ae=>ae.stopPropagation(),children:[d.jsx("button",{onClick:()=>la(N),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Minimize",children:d.jsx($y,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>ms(N),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Toggle Maximize",children:d.jsx(Qy,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>Ws(N),className:"p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10",title:"Close Window",children:d.jsx(rx,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800",onScroll:ae=>{if(N==="profTimeline"){const Le=ae.currentTarget,lt=Le.scrollTop/(Le.scrollHeight-Le.clientHeight||1);ie.current&&(ie.current.style.transform=`scaleY(${lt})`)}},children:[N==="twin"&&d.jsxs("div",{className:"flex flex-col h-full gap-3",children:[d.jsxs("div",{className:"border-b border-zinc-800/60 pb-2 mb-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Xo,{className:"w-4 h-4 text-purple-400"}),d.jsx("span",{className:"font-bold text-slate-100 tracking-tight",children:"Interactive Ask Twin Engine"})]}),d.jsx("p",{className:"text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal",children:"Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements."})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]",children:[R.map((ae,Le)=>d.jsxs("div",{className:`flex flex-col gap-1 w-full ${ae.role==="user"?"items-end":"items-start"}`,children:[d.jsx("div",{className:`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${ae.role==="user"?"bg-sky-500/10 border-sky-500/20 text-slate-100":"bg-zinc-950/40 border-zinc-900 text-slate-300"}`,children:ae.content}),ae.role==="assistant"&&d.jsx("button",{onClick:()=>{Re===Le?Ui():Xn(ae.content,Le)},className:"text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold",children:Re===Le?d.jsxs(d.Fragment,{children:[d.jsx(gf,{className:"w-3 h-3 text-rose-400 animate-pulse"}),d.jsx("span",{className:"text-rose-400",children:"Silence Audio Narrator"})]}):d.jsxs(d.Fragment,{children:[d.jsx(mf,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{children:"Speak Response Model"})]})})]},Le)),ee&&d.jsxs("div",{className:"flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]",children:[d.jsx(dc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"FarhanTwin thinking processes synchronized..."})]})]}),d.jsx("div",{className:"border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10",children:["Explain depression text research","What bimodal stack is in use?","What SaaS packages did Farhan build?","Give brief overview of Farhan"].map(ae=>d.jsxs("button",{onClick:()=>{rt(ae),nt(900,.02)},className:"text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors",children:["→ ",ae]},ae))}),d.jsxs("div",{className:"flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none",children:[d.jsx("input",{type:"text",value:Ue,onChange:ae=>rt(ae.target.value),onKeyDown:ae=>ae.key==="Enter"&&zi(),placeholder:"Inquire about clinical studies, model performance parameters...",className:"flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"}),d.jsx("button",{onClick:zi,disabled:!Ue.trim()||ee,className:`p-2.5 rounded-lg cursor-pointer ${ne.btnPrimary}`,children:d.jsx(dv,{className:"w-3.5 h-3.5"})})]})]}),N==="projects"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:ne.panelHeader,children:"CATEGORIES"}),d.jsx("div",{className:"flex flex-wrap md:flex-col gap-1 select-none mb-3",children:["AI","NLP","SaaS","Open Source","Research","Productivity","Design"].map(ae=>d.jsxs("button",{onClick:()=>{Te(en.projects.find(Le=>Le.category===ae)||en.projects[0]),nt(800,.02)},className:`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${$.category===ae?"bg-zinc-950 text-sky-400 border border-zinc-800 font-bold":"text-zinc-500 hover:text-zinc-300"}`,children:["🎨 ",ae]},ae))}),d.jsx("span",{className:ne.panelHeader,children:"ACTIVE PLATFORMS"}),d.jsx("div",{className:"space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none",children:en.projects.map(ae=>d.jsxs("button",{onClick:()=>{Te(ae),nt(800,.03)},className:`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${$.id===ae.id?"bg-sky-500/10 border-sky-500/30 text-sky-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold truncate",children:ae.title}),d.jsx("span",{className:"text-[9px] opacity-75",children:ae.category})]},ae.id))})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"flex items-start justify-between border-b border-zinc-800/40 pb-2",children:[d.jsxs("div",{children:[d.jsxs("span",{className:ne.badge,children:[$.category," PROJECT"]}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:$.title}),d.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono tracking-wide",children:["TIMELINE: ",$.timeline]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsxs("button",{onClick:()=>nt(1e3,.05),className:"p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1",children:[d.jsx(tx,{className:"w-3 h-3"}),d.jsx("span",{children:"Code"})]}),d.jsxs("button",{onClick:()=>{nt(1100,.05),pn("brief")},className:"p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1",children:[d.jsx(ix,{className:"w-3 h-3"}),d.jsx("span",{children:"Deploy"})]})]})]}),d.jsx("p",{className:"text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text",children:$.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:$.metrics.map((ae,Le)=>d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20"}),d.jsx("div",{className:"text-[10px] text-zinc-500 capitalize",children:ae.label}),d.jsx("div",{className:"text-xs font-black text-sky-300 mt-1",children:ae.value})]},Le))}),d.jsxs("div",{className:"space-y-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Architecture Pipeline:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:$.architecture})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Design Problem:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:$.problem})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Integrated Tech-Stack Matrix:"}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 select-none",children:$.techStack.map(ae=>d.jsx("span",{className:"bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight",children:ae},ae))})]})]})]})]}),N==="research"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:ne.panelHeader,children:"PUBLICATIONS CATALOG"}),d.jsx("div",{className:"space-y-1 select-none",children:en.papers.map(ae=>d.jsxs("button",{onClick:()=>{Ve(ae),nt(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${we.id===ae.id?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold text-[10px] line-clamp-2 leading-snug",children:ae.title}),d.jsxs("span",{className:"text-[9px] opacity-75 font-mono",children:[ae.journal," (",ae.year,")"]})]},ae.id))}),d.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text",children:[d.jsx("span",{className:"font-bold text-emerald-300",children:"Clinician Alerts"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans mt-1",children:"Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold."})]})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start",children:[d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]",children:"PEER-REVIEWED JOURNAL"}),d.jsx("h3",{className:"text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5",children:we.title}),d.jsxs("div",{className:"text-[9.5px] text-zinc-500 italic mt-0.5 select-text",children:["Authors: ",we.authors," · Published in ",we.journal," (",we.year,")"]})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text",children:[d.jsx("span",{className:"font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1",children:"Anatomical Abstract:"}),d.jsx("p",{className:"text-slate-400 font-sans leading-normal text-[10px]",children:we.abstract})]}),d.jsxs("div",{children:[d.jsx("span",{className:ne.panelHeader,children:"CLASSIFIER PIPELINE DATAFLOW"}),d.jsxs("div",{className:"flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono",children:[d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"Ingestion"}),d.jsx("span",{className:"text-zinc-600",children:"→"}),d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"POS normalise"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse",children:"RoBERTa Tensor Matrix"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("div",{className:"bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded",children:"Clinician Alert"})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:ne.panelHeader,children:"EVALUATION ACCURACY STATISTICS"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]",children:we.results.map((ae,Le)=>d.jsxs("div",{className:"bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center",children:[d.jsx("div",{className:"text-zinc-500 text-[9px] truncate",title:ae.metric,children:ae.metric}),d.jsx("div",{className:"font-bold text-emerald-400 text-xs mt-0.5",children:ae.score})]},Le))})]}),d.jsxs("div",{className:"border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg",children:[d.jsxs("div",{className:"flex items-center justify-between pointer-events-auto select-none mb-1",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block",children:"BIBTEX CITATION RESOURCE"}),d.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(we.citation),nt(1200,.05)},className:"bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer",children:[d.jsx(Ry,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Copy Citation"})]})]}),d.jsx("code",{className:"text-[9.5px] text-zinc-400 font-mono select-all block leading-tight",children:we.citation})]})]})]}),N==="github"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUALIZED TELEMETRY STREAM"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Linguistic & Engineering Pipelines Stream"})]}),d.jsx("span",{className:"text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded",children:"STREAK: 142 DAYS"})]}),d.jsxs("div",{children:[d.jsx("span",{className:ne.panelHeader,children:"CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)"}),d.jsx("div",{className:"grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg",children:Array.from({length:48}).map((ae,Le)=>{const lt=Le%7===0?"bg-green-500 shadow-[0_0_4px_#22c55e]":Le%5===0?"bg-green-600":Le%3===0?"bg-green-800":"bg-zinc-900";return d.jsx("div",{onClick:()=>nt(900+Le%5*100,.02),className:`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${lt}`,title:`Telemetry day ${Le+1}: Commits verified`},Le)})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"INTELLIGENT SYSTEMS"}),d.jsxs("div",{className:"space-y-2 font-mono",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"typerush-cockpit"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 184"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"the-ink-home-portal"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 142"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"safeside-predictor"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 211"})]})]})]}),d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"LIVE COMPILING ACTIONS FEED"}),d.jsxs("div",{className:"space-y-2 leading-relaxed text-[10.5px]",children:[d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-emerald-400",children:"●"}),d.jsxs("p",{className:"text-zinc-400",children:["Pushed update to ",d.jsx("code",{className:"text-[#33ff33] font-mono",children:"typerush"}),": Configured Web Audio procedural oscillators & dynamic BPM heartbeats."]})]}),d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-amber-400",children:"●"}),d.jsx("p",{className:"text-zinc-400",children:"Released version 1.4.2 containing live Audio Synthesis narrated profiles."})]})]})]})]})]}),N==="writing"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:ne.panelHeader,children:"NARRATIVE CHRONICLES"}),d.jsx("div",{className:"space-y-1",children:et.map(ae=>d.jsxs("button",{onClick:()=>{ft(ae),nt(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${yt.id===ae.id?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-extrabold text-[10.5px] line-clamp-1 truncate",children:ae.title}),d.jsxs("div",{className:"flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono",children:[d.jsx("span",{children:ae.category}),d.jsx("span",{children:ae.readTime})]})]},ae.id))}),d.jsxs("div",{className:"p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]",children:[d.jsx("span",{className:"font-bold text-amber-300 block mb-0.5",children:"Medium Syndicate"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans",children:"Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX."})]})]}),d.jsxs("div",{className:"flex-1 space-y-3 relative",children:[d.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(mf,{className:"w-4 h-4 text-amber-400 animate-pulse"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none",children:"SYSTÉME NARRATOR"}),d.jsx("p",{className:"text-[11px] text-white font-bold select-text",children:"Read aloud with synthesized clinical AI speech?"})]})]}),d.jsx("div",{className:"flex items-center gap-1",children:Re===999?d.jsxs("button",{onClick:Ui,className:"bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(gf,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Stop Narration"})]}):d.jsxs("button",{onClick:()=>Xn(yt.content,999),className:"bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(s1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Play Voiceover"})]})})]}),d.jsxs("div",{className:"border-b border-zinc-850 pb-2 flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsxs("span",{className:"text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono",children:[yt.category," COLUMN"]}),d.jsx("h3",{className:"text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text",children:yt.title}),d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1",children:["Written on ",yt.date," · ",yt.readTime]})]}),yt.link&&d.jsx("a",{href:yt.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>nt(900,.02),className:"text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono uppercase tracking-wider ml-2",children:d.jsx("span",{children:"Read on Medium ↗"})})]}),d.jsx("div",{className:"text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1",children:d.jsx("p",{children:yt.content})})]})]}),N==="garden"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Topological Semantics Mapping"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Interconnected Semantic Knowledge Field"})]}),d.jsxs("div",{children:[d.jsx("span",{className:ne.panelHeader,children:"INTERACTIVE CONCEPT NODES"}),d.jsxs("div",{className:"relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35"}),d.jsx("div",{className:"relative w-full h-full",children:en.gardenNodes.map((ae,Le)=>{const lt=Le*11%80+10,_t=Le*7%65+15,Ct=Ye===ae.id;return d.jsx("button",{onMouseEnter:()=>{ot(ae.id),nt(1100,.01)},onMouseLeave:()=>ot(null),style:{left:`${lt}%`,top:`${_t}%`},className:`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${Ct?"bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50":"bg-zinc-900/60 border-zinc-800 text-zinc-400"}`,children:ae.label},ae.id)})})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text",children:[d.jsx("span",{className:"font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1",children:"Active Node Spectrum Details:"}),Ye?d.jsxs("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:[Ye==="nlp"&&"Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress.",Ye==="transformers"&&"Transformers: Multi-attention neural architectures providing topological weights maps.",Ye==="depression"&&"Depression Dialectics: Analysis of negation markers and cognitive distortions.",Ye==="ethics"&&"Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters.",Ye==="saas"&&"AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations.",!["nlp","transformers","depression","ethics","saas"].includes(Ye)&&`Semantic connection active on ${Ye}. High performance clustering coefficient evaluated.`]}):d.jsx("p",{className:"text-[10px] text-zinc-500 font-sans",children:"Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies..."})]})]}),N==="resume"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUAL RESUME ARCHITECT"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Interactively Tailored Professional Profile"})]}),d.jsxs("button",{onClick:()=>{window.print(),nt(1100,.05)},className:"bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0",children:[d.jsx(Xh,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Print Resume Draft"})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block mb-1",children:"CONFIGURE AUDIENCE TAILORING SYSTEM:"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center",children:[{id:"recruiter",label:"HR / Recruiter",text:"Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores."},{id:"investor",label:"Venture Capital",text:"Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation."},{id:"founder",label:"Startups / Founder",text:"Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration."},{id:"researcher",label:"Clinical Academics",text:"Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights."}].map(ae=>d.jsxs("button",{onClick:()=>{un(ae.id),nt(800,.02)},className:`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${Nt===ae.id?"bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsxs("span",{children:["👤 ",ae.label]}),d.jsx("span",{className:"text-[8px] opacity-70 font-normal leading-normal",children:ae.text})]},ae.id))})]}),d.jsxs("div",{className:"bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text",children:[d.jsxs("div",{className:"border-b border-zinc-850 pb-2 mb-2 text-center select-text",children:[d.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:en.name}),d.jsx("span",{className:"text-[9px] text-[#00ffcc] font-mono tracking-widest",children:en.title})]}),Nt==="recruiter"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"EXECUTIVE SUMMARY (RECRUITER ALIGNED)"}),d.jsx("p",{children:"Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"CORE TECHNICAL SPECIFICATIONS"}),d.jsx("p",{children:"React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration."})]})]}),Nt==="investor"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)"}),d.jsx("p",{children:"Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"PROVEN MONETIZATION HIGHLIGHTS"}),d.jsx("p",{children:"Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores."})]})]}),Nt==="founder"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)"}),d.jsx("p",{children:"High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"CORE FLUIDITY TOOLS"}),d.jsx("p",{children:"TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces."})]})]}),Nt==="researcher"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"RESEARCH STATEMENT (ACADEMIC ALIGNED)"}),d.jsx("p",{children:"Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"ACADEMIC RESEARCH TRACK RECORD"}),d.jsx("p",{children:"First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models."})]})]})]})]}),N==="timeline"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:ne.panelHeader,children:"CHRONOLOGY INDEX"}),d.jsx("div",{className:"space-y-1.5",children:en.timeline.map(ae=>d.jsxs("button",{onClick:()=>{Et(ae),nt(800,.03)},className:`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${dt.year===ae.year?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"text-[10.5px]",children:ae.company}),d.jsx("span",{className:"bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono",children:ae.year})]},ae.year))})]}),d.jsxs("div",{className:"flex-1 space-y-3",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsxs("span",{className:"bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono",children:["YEAR: ",dt.year," EXP"]}),d.jsx("h4",{className:"text-xs font-black text-white mt-1.5",children:dt.title}),d.jsxs("span",{className:"text-[9.5px] text-zinc-500 font-sans block",children:[dt.company," · Role: ",dt.role]})]}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:dt.description}),d.jsxs("div",{className:"space-y-2 select-text",children:[d.jsx("span",{className:ne.panelHeader,children:"HIGHLIGHT ACCOMPLISHMENTS"}),d.jsx("ul",{className:"space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal",children:dt.achievements.map((ae,Le)=>d.jsx("li",{className:"marker:text-sky-400",children:ae},Le))})]}),d.jsxs("div",{className:"bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5",children:"INTEGRATED TECH GRID"}),d.jsx("div",{className:"flex flex-wrap gap-1 select-none",children:dt.technologies.map(ae=>d.jsx("span",{className:"bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]",children:ae},ae))})]})]})]}),N==="profTimeline"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"PRO TIMELINE NODE"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Professional Experience & Verification Chronology"})]}),d.jsxs("div",{className:"relative pl-6 md:pl-0 pt-4",children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/60 via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:ie,className:"absolute left-[13px] md:left-1/2 top-0 bottom-16 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-10 relative z-10",children:en.professionalTimeline.map((ae,Le)=>{const lt=Le%2===0;return d.jsxs("div",{className:`flex flex-col md:flex-row items-start ${lt?"md:flex-row-reverse":""} relative`,children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:"w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md",children:d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-8 md:pl-0",children:d.jsxs("div",{className:"p-5 rounded-xl bg-zinc-900/30 border border-zinc-900/80 relative group hover:border-zinc-800 transition-all duration-300",children:[d.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-lg pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-2 mb-4",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5",children:ae.year}),d.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight",children:ae.title}),d.jsx("span",{className:"text-[9px] text-zinc-550 block font-mono mt-0.5",children:ae.company})]}),d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[8.5px] font-mono border font-medium uppercase ${ae.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":ae.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":ae.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:ae.company})]}),d.jsx("ul",{className:"space-y-2 mb-4 text-[10.5px] text-zinc-400",children:ae.achievements.map((_t,Ct)=>d.jsxs("li",{className:"flex items-start leading-relaxed text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2 shrink-0"}),d.jsx("span",{children:_t})]},Ct))}),d.jsx("div",{className:"flex flex-wrap gap-1 pt-3 border-t border-zinc-900/60 select-none",children:ae.technologies.map(_t=>d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[8px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:_t},_t))})]})})]},Le)})})]})]}),N==="skills"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Observatory Deck"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Linguistic, Structural & Compute Matrices"})]}),d.jsx("div",{className:"flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none",children:["all","AI/ML","Frontend","Backend","Research","Systems"].map(ae=>d.jsx("button",{onClick:()=>{Ft(ae),nt(800,.02)},className:`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${tt===ae?"bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]":"bg-transparent text-zinc-500 hover:text-zinc-300"}`,children:ae==="all"?"All Matrices":ae},ae))}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none",children:dn.map(ae=>{const Le=ae.weight===5?"border-sky-500/50 bg-sky-500/5 text-sky-200":ae.weight===4?"border-indigo-500/30 bg-indigo-500/5 text-indigo-200":"border-zinc-800 bg-zinc-900/40 text-zinc-400";return d.jsxs("div",{onClick:()=>nt(700+ae.weight*100,.03),className:`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${Le}`,children:[d.jsx("span",{className:"text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100",children:ae.name}),d.jsx("span",{className:"text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400",children:ae.category}),d.jsx("div",{className:"flex items-center gap-0.5 mt-1",children:Array.from({length:5}).map((lt,_t)=>d.jsx("span",{className:`w-1 h-1 rounded-full ${_t<ae.weight?"bg-indigo-400 shadow-[0_0_4px_#818cf8]":"bg-zinc-800"}`},_t))})]},ae.name)})})]}),N==="brief"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"INTELLIGENT INTAKE PROCESS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Initiate Feasibility Evaluation Strategy"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"VENTURE DOMAIN:"}),d.jsxs("select",{value:ge.projectType,onChange:ae=>ke({...ge,projectType:ae.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer",children:[d.jsx("option",{children:"AI Engineering & LLMs"}),d.jsx("option",{children:"Clinical NLP & Mental State analysis"}),d.jsx("option",{children:"SaaS Automation Development"}),d.jsx("option",{children:"Interactive UI/UX Projects"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"FINANCIAL BOUNDS:"}),d.jsxs("select",{value:ge.budget,onChange:ae=>ke({...ge,budget:ae.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"$5k - $10k"}),d.jsx("option",{children:"$10k - $25k"}),d.jsx("option",{children:"$25k+"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TIMELINE PROFILE:"}),d.jsxs("select",{value:ge.timeline,onChange:ae=>ke({...ge,timeline:ae.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"1-3 Months"}),d.jsx("option",{children:"3 Months-half year"}),d.jsx("option",{children:"Complex Multiphase"})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"STRATEGIC GOALS / OBJECTIVES:"}),d.jsx("textarea",{value:ge.goals,onChange:ae=>ke({...ge,goals:ae.target.value}),rows:3,placeholder:"Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)",className:"w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"})]}),d.jsx("button",{onClick:Xi,disabled:!ge.goals.trim()||Fe,className:"w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5",children:Fe?d.jsxs(d.Fragment,{children:[d.jsx(dc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"Deconstruct parameters algorithms..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(w1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Evaluate Feasibility Strategy"})]})})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5",children:"ASSESSMENT & ARCHITECTURE STRATEGY:"}),He?d.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-sans select-text",children:He}):d.jsx("div",{className:"text-zinc-600 font-sans text-[10.5px] italic text-center py-10",children:"Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations..."})]}),He&&d.jsxs("div",{className:"border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4",children:[d.jsxs("span",{className:"text-zinc-500 flex items-center gap-1 font-mono",children:[d.jsx(Vc,{className:"w-3 h-3 text-emerald-400"})," API SECURE Rails"]}),d.jsx("button",{onClick:()=>{alert("Strategy Brief dispatched. Farhan's team will contact you securely."),Be(null),nt(1100,.05)},className:"bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-1 px-3 border border-emerald-400 rounded text-[9.5px] cursor-pointer",children:"Dispatch Brief"})]})]})]})]}),N==="whiteboard"&&d.jsx(YA,{theme:L,triggerSound:nt}),N==="builds"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono",children:"TELEMETRY DIAGNOSTICS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Continuous Development & Deployment Releases"})]}),d.jsx("div",{className:"space-y-3.5 max-h-[300px] overflow-y-auto pr-1",children:en.buildLogs.map(ae=>d.jsxs("div",{className:"bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-850 pb-1.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-white font-bold",children:[d.jsx("span",{className:"text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded",children:ae.version}),d.jsx("span",{className:"text-[11px] font-sans truncate",children:ae.title})]}),d.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:ae.date})]}),d.jsx("p",{className:"text-[10.5px] text-slate-400 leading-relaxed font-sans",children:ae.description}),d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"TASKS DEPLOYED"}),d.jsx("ul",{className:"space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans",children:ae.tasksCompleted.map((Le,lt)=>d.jsx("li",{children:Le},lt))})]}),d.jsxs("div",{className:"border-t border-zinc-900 pt-1.5",children:[d.jsx("span",{className:"font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"METRIC SHIFTS DETECTED"}),d.jsx("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono select-none",children:ae.metricsChanged.map((Le,lt)=>d.jsxs("span",{className:"bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300",children:[d.jsxs("span",{children:[Le.metric,":"]}),d.jsxs("span",{className:"text-teal-400 font-bold",children:[Le.before," ➔ ",Le.after]})]},lt))})]})]},ae.id))})]})]})]},N)})]}),d.jsxs("footer",{className:"h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none",children:[d.jsx("div",{className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none",children:J.map(N=>{const re=N.icon,he=K.includes(N.id),be=pe===N.id&&!Z.includes(N.id);return d.jsxs("button",{onClick:()=>{he?be?la(N.id):(W(N.id),de(De=>De.filter(Ge=>Ge!==N.id))):pn(N.id)},className:`p-2 rounded-xl transition-all relative cursor-pointer ${N.color} transform hover:scale-129 active:scale-95 duration-100`,title:N.label,children:[d.jsx(re,{className:"w-5 h-5"}),he&&d.jsx("span",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]"}),be&&d.jsx("span",{className:"absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs"})]},N.id)})}),d.jsx("div",{className:"absolute right-4 hidden md:flex items-center gap-1.5",children:d.jsx("button",{type:"button",onClick:()=>{Ze(!0),nt(800,.03)},className:"p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer",children:"Terminal Commands (CMD+K)"})})]}),Q&&d.jsx("div",{className:"fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal",children:d.jsxs("div",{className:"w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up",children:[d.jsxs("div",{className:"flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850",children:[d.jsx(ax,{className:"w-4 h-4 text-sky-400"}),d.jsx("input",{type:"text",value:it,onChange:N=>st(N.target.value),placeholder:"Search projects, research papers, tech stack node keys, commands...",className:"flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white",autoFocus:!0}),d.jsx("button",{onClick:()=>{Ze(!1),nt(400,.02)},className:"p-1 text-zinc-500 hover:text-white rounded",children:d.jsx(rx,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]",children:it.trim().length===0?d.jsxs("div",{className:"space-y-2",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide",children:"SYSTEM DIAGNOSTIC CORES:"}),d.jsx("button",{onClick:()=>{Wi(),Ze(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"🚀 Trigger system AI Guided Tour with synthesized Voice narrations"}),d.jsx("button",{onClick:()=>{pn("brief"),Ze(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"💡 Open Mission Intake Consultation Workspace"}),d.jsx("div",{className:"text-[10px] text-zinc-550 italic font-sans px-2",children:"Enter queries parsing index models above to match academic research text parameters..."})]}):d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5",children:["MATCHED WORKSPACE PARAMS (",w.length,")"]}),w.length>0?w.map((N,re)=>d.jsxs("button",{onClick:N.action,className:"w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase",children:N.type}),d.jsx("span",{className:"text-white font-bold font-sans",children:N.title})]}),d.jsx("span",{className:"text-[10px] text-zinc-500",children:N.subtitle})]},re)):d.jsx("div",{className:"text-center text-zinc-500 text-[11px] py-6 font-sans",children:"No matching intelligence indices found. Retry key parameters."})]})}),d.jsxs("div",{className:"p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500",children:[d.jsx("span",{className:"font-mono",children:"SEARCH GRID INTEGRATION READY"}),d.jsx("span",{children:"ESC TO EXIT"})]})]})})]})})}oy.createRoot(document.getElementById("root")).render(d.jsx(Oe.StrictMode,{children:d.jsx(JA,{})}));
