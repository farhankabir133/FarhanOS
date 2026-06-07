(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var of={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function ey(){if(Gg)return Po;Gg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Vg;function ty(){return Vg||(Vg=1,of.exports=ey()),of.exports}var d=ty(),lf={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function ny(){if(Xg)return St;Xg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,S={};function b(D,V,B){this.props=D,this.context=V,this.refs=S,this.updater=B||T}b.prototype.isReactComponent={},b.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},b.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function N(){}N.prototype=b.prototype;function P(D,V,B){this.props=D,this.context=V,this.refs=S,this.updater=B||T}var z=P.prototype=new N;z.constructor=P,L(z,b.prototype),z.isPureReactComponent=!0;var X=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function I(D,V,B){var xe=B.ref;return{$$typeof:r,type:D,key:V,ref:xe!==void 0?xe:null,props:B}}function K(D,V){return I(D.type,V,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function Z(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(B){return V[B]})}var he=/\/+/g;function ge(D,V){return typeof D=="object"&&D!==null&&D.key!=null?Z(""+D.key):V.toString(36)}function W(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(V){D.status==="pending"&&(D.status="fulfilled",D.value=V)},function(V){D.status==="pending"&&(D.status="rejected",D.reason=V)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function U(D,V,B,xe,Ae){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var Ee=!1;if(D===null)Ee=!0;else switch(J){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(D.$$typeof){case r:case t:Ee=!0;break;case y:return Ee=D._init,U(Ee(D._payload),V,B,xe,Ae)}}if(Ee)return Ae=Ae(D),Ee=xe===""?"."+ge(D,0):xe,X(Ae)?(B="",Ee!=null&&(B=Ee.replace(he,"$&/")+"/"),U(Ae,V,B,"",function(nt){return nt})):Ae!=null&&(H(Ae)&&(Ae=K(Ae,B+(Ae.key==null||D&&D.key===Ae.key?"":(""+Ae.key).replace(he,"$&/")+"/")+Ee)),V.push(Ae)),1;Ee=0;var we=xe===""?".":xe+":";if(X(D))for(var We=0;We<D.length;We++)xe=D[We],J=we+ge(xe,We),Ee+=U(xe,V,B,J,Ae);else if(We=M(D),typeof We=="function")for(D=We.call(D),We=0;!(xe=D.next()).done;)xe=xe.value,J=we+ge(xe,We++),Ee+=U(xe,V,B,J,Ae);else if(J==="object"){if(typeof D.then=="function")return U(W(D),V,B,xe,Ae);throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function j(D,V,B){if(D==null)return D;var xe=[],Ae=0;return U(D,xe,"","",function(J){return V.call(B,J,Ae++)}),xe}function ne(D){if(D._status===-1){var V=D._result;V=V(),V.then(function(B){(D._status===0||D._status===-1)&&(D._status=1,D._result=B)},function(B){(D._status===0||D._status===-1)&&(D._status=2,D._result=B)}),D._status===-1&&(D._status=0,D._result=V)}if(D._status===1)return D._result.default;throw D._result}var be=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ie={map:j,forEach:function(D,V,B){j(D,function(){V.apply(this,arguments)},B)},count:function(D){var V=0;return j(D,function(){V++}),V},toArray:function(D){return j(D,function(V){return V})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return St.Activity=_,St.Children=ie,St.Component=b,St.Fragment=i,St.Profiler=l,St.PureComponent=P,St.StrictMode=s,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cacheSignal=function(){return null},St.cloneElement=function(D,V,B){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var xe=L({},D.props),Ae=D.key;if(V!=null)for(J in V.key!==void 0&&(Ae=""+V.key),V)!A.call(V,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&V.ref===void 0||(xe[J]=V[J]);var J=arguments.length-2;if(J===1)xe.children=B;else if(1<J){for(var Ee=Array(J),we=0;we<J;we++)Ee[we]=arguments[we+2];xe.children=Ee}return I(D.type,Ae,xe)},St.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},St.createElement=function(D,V,B){var xe,Ae={},J=null;if(V!=null)for(xe in V.key!==void 0&&(J=""+V.key),V)A.call(V,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Ae[xe]=V[xe]);var Ee=arguments.length-2;if(Ee===1)Ae.children=B;else if(1<Ee){for(var we=Array(Ee),We=0;We<Ee;We++)we[We]=arguments[We+2];Ae.children=we}if(D&&D.defaultProps)for(xe in Ee=D.defaultProps,Ee)Ae[xe]===void 0&&(Ae[xe]=Ee[xe]);return I(D,J,Ae)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:m,render:D}},St.isValidElement=H,St.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ne}},St.memo=function(D,V){return{$$typeof:p,type:D,compare:V===void 0?null:V}},St.startTransition=function(D){var V=F.T,B={};F.T=B;try{var xe=D(),Ae=F.S;Ae!==null&&Ae(B,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(O,be)}catch(J){be(J)}finally{V!==null&&B.types!==null&&(V.types=B.types),F.T=V}},St.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},St.use=function(D){return F.H.use(D)},St.useActionState=function(D,V,B){return F.H.useActionState(D,V,B)},St.useCallback=function(D,V){return F.H.useCallback(D,V)},St.useContext=function(D){return F.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,V){return F.H.useDeferredValue(D,V)},St.useEffect=function(D,V){return F.H.useEffect(D,V)},St.useEffectEvent=function(D){return F.H.useEffectEvent(D)},St.useId=function(){return F.H.useId()},St.useImperativeHandle=function(D,V,B){return F.H.useImperativeHandle(D,V,B)},St.useInsertionEffect=function(D,V){return F.H.useInsertionEffect(D,V)},St.useLayoutEffect=function(D,V){return F.H.useLayoutEffect(D,V)},St.useMemo=function(D,V){return F.H.useMemo(D,V)},St.useOptimistic=function(D,V){return F.H.useOptimistic(D,V)},St.useReducer=function(D,V,B){return F.H.useReducer(D,V,B)},St.useRef=function(D){return F.H.useRef(D)},St.useState=function(D){return F.H.useState(D)},St.useSyncExternalStore=function(D,V,B){return F.H.useSyncExternalStore(D,V,B)},St.useTransition=function(){return F.H.useTransition()},St.version="19.2.7",St}var Wg;function Xh(){return Wg||(Wg=1,lf.exports=ny()),lf.exports}var Ue=Xh(),cf={exports:{}},Io={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function iy(){return qg||(qg=1,(function(r){function t(U,j){var ne=U.length;U.push(j);e:for(;0<ne;){var be=ne-1>>>1,ie=U[be];if(0<l(ie,j))U[be]=j,U[ne]=ie,ne=be;else break e}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var j=U[0],ne=U.pop();if(ne!==j){U[0]=ne;e:for(var be=0,ie=U.length,D=ie>>>1;be<D;){var V=2*(be+1)-1,B=U[V],xe=V+1,Ae=U[xe];if(0>l(B,ne))xe<ie&&0>l(Ae,B)?(U[be]=Ae,U[xe]=ne,be=xe):(U[be]=B,U[V]=ne,be=V);else if(xe<ie&&0>l(Ae,ne))U[be]=Ae,U[xe]=ne,be=xe;else break e}}return j}function l(U,j){var ne=U.sortIndex-j.sortIndex;return ne!==0?ne:U.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],p=[],y=1,_=null,x=3,M=!1,T=!1,L=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function z(U){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=U)s(p),j.sortIndex=j.expirationTime,t(g,j);else break;j=i(p)}}function X(U){if(L=!1,z(U),!T)if(i(g)!==null)T=!0,O||(O=!0,Z());else{var j=i(p);j!==null&&W(X,j.startTime-U)}}var O=!1,F=-1,A=5,I=-1;function K(){return S?!0:!(r.unstable_now()-I<A)}function H(){if(S=!1,O){var U=r.unstable_now();I=U;var j=!0;try{e:{T=!1,L&&(L=!1,N(F),F=-1),M=!0;var ne=x;try{t:{for(z(U),_=i(g);_!==null&&!(_.expirationTime>U&&K());){var be=_.callback;if(typeof be=="function"){_.callback=null,x=_.priorityLevel;var ie=be(_.expirationTime<=U);if(U=r.unstable_now(),typeof ie=="function"){_.callback=ie,z(U),j=!0;break t}_===i(g)&&s(g),z(U)}else s(g);_=i(g)}if(_!==null)j=!0;else{var D=i(p);D!==null&&W(X,D.startTime-U),j=!1}}break e}finally{_=null,x=ne,M=!1}j=void 0}}finally{j?Z():O=!1}}}var Z;if(typeof P=="function")Z=function(){P(H)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ge=he.port2;he.port1.onmessage=H,Z=function(){ge.postMessage(null)}}else Z=function(){b(H,0)};function W(U,j){F=b(function(){U(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(U){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var ne=x;x=j;try{return U()}finally{x=ne}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=x;x=U;try{return j()}finally{x=ne}},r.unstable_scheduleCallback=function(U,j,ne){var be=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ne+ie,U={id:y++,callback:j,priorityLevel:U,startTime:ne,expirationTime:ie,sortIndex:-1},ne>be?(U.sortIndex=ne,t(p,U),i(g)===null&&U===i(p)&&(L?(N(F),F=-1):L=!0,W(X,ne-be))):(U.sortIndex=ie,t(g,U),T||M||(T=!0,O||(O=!0,Z()))),U},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(U){var j=x;return function(){var ne=x;x=j;try{return U.apply(this,arguments)}finally{x=ne}}}})(df)),df}var Yg;function ay(){return Yg||(Yg=1,uf.exports=iy()),uf.exports}var ff={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function sy(){if(Zg)return jn;Zg=1;var r=Xh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:p,implementation:y}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(g,p,null,y)},jn.flushSync=function(g){var p=h.T,y=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=y,s.d.f()}},jn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},jn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},jn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):y==="script"&&s.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},jn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},jn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin);s.d.L(g,y,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},jn.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},jn.requestFormReset=function(g){s.d.r(g)},jn.unstable_batchedUpdates=function(g,p){return g(p)},jn.useFormState=function(g,p,y){return h.H.useFormState(g,p,y)},jn.useFormStatus=function(){return h.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var Kg;function ry(){if(Kg)return ff.exports;Kg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ff.exports=sy(),ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function oy(){if(Qg)return Io;Qg=1;var r=ay(),t=Xh(),i=ry();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===o)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,o=f;break}if(C===o){v=!0,o=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,o=u;break}if(C===o){v=!0,o=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case O:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ge(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return ge(e(n))}catch{}}return null}var W=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],ie=-1;function D(e){return{current:e}}function V(e){0>ie||(e.current=be[ie],be[ie]=null,ie--)}function B(e,n){ie++,be[ie]=e.current,e.current=n}var xe=D(null),Ae=D(null),J=D(null),Ee=D(null);function we(e,n){switch(B(J,n),B(Ae,e),B(xe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?fg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=fg(n),e=hg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(xe),B(xe,e)}function We(){V(xe),V(Ae),V(J)}function nt(e){e.memoizedState!==null&&B(Ee,e);var n=xe.current,a=hg(n,e.type);n!==a&&(B(Ae,e),B(xe,a))}function et(e){Ae.current===e&&(V(xe),V(Ae)),Ee.current===e&&(V(Ee),Lo._currentValue=ne)}var Et,ft;function dt(e){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+ft}var At=!1;function it(e,n){if(!e||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(_e){var pe=_e}Reflect.construct(e,[],Ce)}else{try{Ce.call()}catch(_e){pe=_e}e.call(Ce.prototype)}}else{try{throw Error()}catch(_e){pe=_e}(Ce=e())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(_e){if(_e&&pe&&typeof _e.stack=="string")return[_e.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var G=v.split(`
`),ce=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ce.length)for(o=G.length-1,u=ce.length-1;1<=o&&0<=u&&G[o]!==ce[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ce[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ce[u]){var Me=`
`+G[o].replace(" at new "," at ");return e.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",e.displayName)),Me}while(1<=o&&0<=u);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?dt(a):""}function Ft(e,n){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return e.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return dt("Activity");default:return""}}function Nt(e){try{var n="",a=null;do n+=Ft(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var hn=Object.prototype.hasOwnProperty,Q=r.unstable_scheduleCallback,Qe=r.unstable_cancelCallback,at=r.unstable_shouldYield,rt=r.unstable_requestPaint,Le=r.unstable_now,ot=r.unstable_getCurrentPriorityLevel,R=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,ee=r.unstable_NormalPriority,Se=r.unstable_LowPriority,Re=r.unstable_IdlePriority,Oe=r.log,Pe=r.unstable_setDisableYieldValue,ve=null,ae=null;function Fe(e){if(typeof Oe=="function"&&Pe(e),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(ve,e)}catch{}}var je=Math.clz32?Math.clz32:ht,Be=Math.log,Ie=Math.LN2;function ht(e){return e>>>=0,e===0?32:31-(Be(e)/Ie|0)|0}var pt=256,Ct=262144,q=4194304;function ze(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=ze(o):(v&=C,v!==0?u=ze(v):a||(a=C&~e,a!==0&&(u=ze(a))))):(C=o&~f,C!==0?u=ze(C):v!==0?u=ze(v):a||(a=o&~e,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ve(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ke(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function $e(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function lt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jt(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,ce=e.hiddenUpdates;for(a=v&~a;0<a;){var Me=31-je(a),Ce=1<<Me;C[Me]=0,G[Me]=-1;var pe=ce[Me];if(pe!==null)for(ce[Me]=null,Me=0;Me<pe.length;Me++){var _e=pe[Me];_e!==null&&(_e.lane&=-536870913)}a&=~Ce}o!==0&&Bt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Bt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-je(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-je(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function kn(e,n){var a=n&-n;return a=(a&42)!==0?1:ct(a),(a&(e.suspendedLanes|n))!==0?0:a}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ui(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Pg(e.type))}function ra(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,nn="__reactProps$"+dn,zi="__reactContainer$"+dn,Oi="__reactEvents$"+dn,ps="__reactListeners$"+dn,An="__reactHandles$"+dn,ms="__reactResources$"+dn,Pi="__reactMarker$"+dn;function gs(e){delete e[rn],delete e[nn],delete e[Oi],delete e[ps],delete e[An]}function qn(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=bg(e);e!==null;){if(a=e[rn])return a;e=bg(e)}return n}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[rn]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Xi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Wi(e){var n=e[ms];return n||(n=e[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[Pi]=!0}var xs=new Set,w={};function $(e,n){fe(e,n),fe(e+"Capture",n)}function fe(e,n){for(w[e]=n,e=0;e<n.length;e++)xs.add(n[e])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},qe={};function He(e){return hn.call(qe,e)?!0:hn.call(re,e)?!1:se.test(e)?qe[e]=!0:(re[e]=!0,!1)}function k(e,n,a){if(He(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function me(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function De(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yt(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function de(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gt=/[\n"\\]/g;function xt(e){return e.replace(gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,o,u,f,v,C){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+De(n)):e.value!==""+De(n)&&(e.value=""+De(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?vt(e,v,De(n)):a!=null?vt(e,v,De(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+De(C):e.removeAttribute("name")}function an(e,n,a,o,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yt(e);return}a=a!=null?""+De(a):"",n=n!=null?""+De(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yt(e)}function vt(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+De(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function zn(e,n,a){if(n!=null&&(n=""+De(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+De(a):""}function wn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=De(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),yt(e)}function Yn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function mt(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ln(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&ln(e,f,n[f])}function qt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return za.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function dp(e){var n=Jn(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[nn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&de(o)}break e;case"textarea":zn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var su=!1;function fp(e,n,a){if(su)return e(n,a);su=!0;try{var o=e(n);return o}finally{if(su=!1,(Ys!==null||Zs!==null)&&(Vl(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,dp(n),e)))for(n=0;n<e.length;n++)dp(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(la)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{ru=!1}var Oa=null,ou=null,al=null;function hp(){if(al)return al;var e,n=ou,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return al=u.slice(e,1<o?1-o:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function pp(){return!1}function $n(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:pp,this.isPropagationStopped=pp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=$n(_s),Kr=_({},_s,{view:0,detail:0}),Jv=$n(Kr),lu,cu,Qr,ll=_({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(lu=e.screenX-Qr.screenX,cu=e.screenY-Qr.screenY):cu=lu=0,Qr=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),mp=$n(ll),$v=_({},ll,{dataTransfer:0}),e_=$n($v),t_=_({},Kr,{relatedTarget:0}),uu=$n(t_),n_=_({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=$n(n_),a_=_({},_s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s_=$n(a_),r_=_({},_s,{data:0}),gp=$n(r_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=c_[e])?!!n[e]:!1}function du(){return u_}var d_=_({},Kr,{key:function(e){if(e.key){var n=o_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f_=$n(d_),h_=_({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=$n(h_),p_=_({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),m_=$n(p_),g_=_({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),x_=$n(g_),v_=_({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),__=$n(v_),b_=_({},_s,{newState:0,oldState:0}),y_=$n(b_),S_=[9,13,27,32],fu=la&&"CompositionEvent"in window,Jr=null;la&&"documentMode"in document&&(Jr=document.documentMode);var M_=la&&"TextEvent"in window&&!Jr,vp=la&&(!fu||Jr&&8<Jr&&11>=Jr),_p=" ",bp=!1;function yp(e,n){switch(e){case"keyup":return S_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function E_(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(bp=!0,_p);case"textInput":return e=n.data,e===_p&&bp?null:e;default:return null}}function T_(e,n){if(Ks)return e==="compositionend"||!fu&&yp(e,n)?(e=hp(),al=ou=Oa=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!A_[e.type]:n==="textarea"}function Ep(e,n,a,o){Ys?Zs?Zs.push(o):Zs=[o]:Ys=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $r=null,eo=null;function w_(e){rg(e,0)}function cl(e){var n=Xi(e);if(de(n))return e}function Tp(e,n){if(e==="change")return n}var Ap=!1;if(la){var hu;if(la){var pu="oninput"in document;if(!pu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),pu=typeof wp.oninput=="function"}hu=pu}else hu=!1;Ap=hu&&(!document.documentMode||9<document.documentMode)}function Cp(){$r&&($r.detachEvent("onpropertychange",Rp),eo=$r=null)}function Rp(e){if(e.propertyName==="value"&&cl(eo)){var n=[];Ep(n,eo,e,au(e)),fp(w_,n)}}function C_(e,n,a){e==="focusin"?(Cp(),$r=n,eo=a,$r.attachEvent("onpropertychange",Rp)):e==="focusout"&&Cp()}function R_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(eo)}function N_(e,n){if(e==="click")return cl(n)}function D_(e,n){if(e==="input"||e==="change")return cl(n)}function L_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:L_;function to(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!hn.call(n,u)||!ci(e[u],n[u]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,n){var a=Np(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var U_=la&&"documentMode"in document&&11>=document.documentMode,Qs=null,gu=null,no=null,xu=!1;function zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Qs==null||Qs!==Ke(o)||(o=Qs,"selectionStart"in o&&mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=Ql(gu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},vu={},Op={};la&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ys(e){if(vu[e])return vu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Op)return vu[e]=n[a];return e}var Pp=ys("animationend"),Ip=ys("animationiteration"),Fp=ys("animationstart"),z_=ys("transitionrun"),O_=ys("transitionstart"),P_=ys("transitioncancel"),Bp=ys("transitionend"),kp=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function Ii(e,n){kp.set(e,n),$(n,[e])}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vi=[],$s=0,bu=0;function dl(){for(var e=$s,n=bu=$s=0;n<e;){var a=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&jp(a,u,f)}}function fl(e,n,a,o){vi[$s++]=e,vi[$s++]=n,vi[$s++]=a,vi[$s++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yu(e,n,a,o){return fl(e,n,a,o),hl(e)}function Ss(e,n){return fl(e,null,null,n),hl(e)}function jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-je(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<To)throw To=0,Nd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function I_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,n,a,o){return new I_(e,n,a,o)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=ui(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Su(e)&&(v=1);else if(typeof e=="string")v=Hb(e,a,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=ui(31,a,n,u),e.elementType=I,e.lanes=f,e;case L:return Ms(a.children,u,f,n);case S:v=8,u|=24;break;case b:return e=ui(12,a,n,u|2),e.elementType=b,e.lanes=f,e;case X:return e=ui(13,a,n,u),e.elementType=X,e.lanes=f,e;case O:return e=ui(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break e;case N:v=9;break e;case z:v=11;break e;case F:v=14;break e;case A:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ui(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ms(e,n,a,o){return e=ui(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=ui(6,e,null,n),e.lanes=a,e}function Gp(e){var n=ui(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=ui(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Nt(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:Nt(n)}}var tr=[],nr=0,ml=null,io=0,bi=[],yi=0,Pa=null,Yi=1,Zi="";function ua(e,n){tr[nr++]=io,tr[nr++]=ml,ml=e,io=n}function Xp(e,n,a){bi[yi++]=Yi,bi[yi++]=Zi,bi[yi++]=Pa,Pa=e;var o=Yi;e=Zi;var u=32-je(o)-1;o&=~(1<<u),a+=1;var f=32-je(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Yi=1<<32-je(n)+u|a<<u|o,Zi=f+e}else Yi=1<<f|a<<u|o,Zi=e}function Tu(e){e.return!==null&&(ua(e,1),Xp(e,1,0))}function Au(e){for(;e===ml;)ml=tr[--nr],tr[nr]=null,io=tr[--nr],tr[nr]=null;for(;e===Pa;)Pa=bi[--yi],bi[yi]=null,Zi=bi[--yi],bi[yi]=null,Yi=bi[--yi],bi[yi]=null}function Wp(e,n){bi[yi++]=Yi,bi[yi++]=Zi,bi[yi++]=Pa,Yi=n.id,Zi=n.overflow,Pa=e}var On=null,cn=null,Ot=!1,Ia=null,Si=!1,wu=Error(s(519));function Fa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(_i(n,e)),wu}function qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[nn]=o,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Lt(wo[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),an(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),wn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ug(n.textContent,a)?(o.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),o.onScroll!=null&&Lt("scroll",n),o.onScrollEnd!=null&&Lt("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Fa(e,!0)}function Yp(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:On=On.return}}function ir(e){if(e!==On)return!1;if(!Ot)return Yp(e),Ot=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xd(e.type,e.memoizedProps)),a=!a),a&&cn&&Fa(e),Yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=_g(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));cn=_g(e)}else n===27?(n=cn,Ja(e.type)?(e=Kd,Kd=null,cn=e):cn=n):cn=On?Ei(e.stateNode.nextSibling):null;return!0}function Es(){cn=On=null,Ot=!1}function Cu(){var e=Ia;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ia=null),e}function ao(e){Ia===null?Ia=[e]:Ia.push(e)}var Ru=D(null),Ts=null,da=null;function Ba(e,n,a){B(Ru,n._currentValue),n._currentValue=a}function fa(e){e._currentValue=Ru.current,V(Ru)}function Nu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Nu(f.return,a,e),o||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Nu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;ci(u.pendingProps.value,v.value)||(e!==null?e.push(C):e=[C])}}else if(u===Ee.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return Zp(Ts,e)}function xl(e,n){return Ts===null&&As(e),Zp(e,n)}function Zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(e===null)throw Error(s(308));da=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else da=da.next=n;return a}var F_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},B_=r.unstable_scheduleCallback,k_=r.unstable_NormalPriority,bn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new F_,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&B_(k_,function(){e.controller.abort()})}var ro=null,Uu=0,sr=0,rr=null;function j_(e,n){if(ro===null){var a=ro=[];Uu=0,sr=Pd(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(Kp,Kp),n}function Kp(){if(--Uu===0&&ro!==null){rr!==null&&(rr.status="fulfilled");var e=ro;ro=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function H_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=U.S;U.S=function(e,n){z0=Le(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&j_(e,n),Qp!==null&&Qp(e,n)};var ws=D(null);function zu(){var e=ws.current;return e!==null?e:sn.pooledCache}function vl(e,n){n===null?B(ws,ws.current):B(ws,n.pool)}function Jp(){var e=zu();return e===null?null:{parent:bn._currentValue,pool:e}}var or=Error(s(460)),Ou=Error(s(474)),_l=Error(s(542)),bl={then:function(){}};function $p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nm(e),e}throw Rs=n,or}}function Cs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,or):a}}var Rs=null;function tm(){if(Rs===null)throw Error(s(459));var e=Rs;return Rs=null,e}function nm(e){if(e===or||e===_l)throw Error(s(483))}var lr=null,oo=0;function yl(e){var n=oo;return oo+=1,lr===null&&(lr=[]),em(lr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function im(e){function n(te,Y){if(e){var oe=te.deletions;oe===null?(te.deletions=[Y],te.flags|=16):oe.push(Y)}}function a(te,Y){if(!e)return null;for(;Y!==null;)n(te,Y),Y=Y.sibling;return null}function o(te){for(var Y=new Map;te!==null;)te.key!==null?Y.set(te.key,te):Y.set(te.index,te),te=te.sibling;return Y}function u(te,Y){return te=ca(te,Y),te.index=0,te.sibling=null,te}function f(te,Y,oe){return te.index=oe,e?(oe=te.alternate,oe!==null?(oe=oe.index,oe<Y?(te.flags|=67108866,Y):oe):(te.flags|=67108866,Y)):(te.flags|=1048576,Y)}function v(te){return e&&te.alternate===null&&(te.flags|=67108866),te}function C(te,Y,oe,Te){return Y===null||Y.tag!==6?(Y=Mu(oe,te.mode,Te),Y.return=te,Y):(Y=u(Y,oe),Y.return=te,Y)}function G(te,Y,oe,Te){var st=oe.type;return st===L?Me(te,Y,oe.props.children,Te,oe.key):Y!==null&&(Y.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===A&&Cs(st)===Y.type)?(Y=u(Y,oe.props),lo(Y,oe),Y.return=te,Y):(Y=pl(oe.type,oe.key,oe.props,null,te.mode,Te),lo(Y,oe),Y.return=te,Y)}function ce(te,Y,oe,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=Eu(oe,te.mode,Te),Y.return=te,Y):(Y=u(Y,oe.children||[]),Y.return=te,Y)}function Me(te,Y,oe,Te,st){return Y===null||Y.tag!==7?(Y=Ms(oe,te.mode,Te,st),Y.return=te,Y):(Y=u(Y,oe),Y.return=te,Y)}function Ce(te,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Mu(""+Y,te.mode,oe),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return oe=pl(Y.type,Y.key,Y.props,null,te.mode,oe),lo(oe,Y),oe.return=te,oe;case T:return Y=Eu(Y,te.mode,oe),Y.return=te,Y;case A:return Y=Cs(Y),Ce(te,Y,oe)}if(W(Y)||Z(Y))return Y=Ms(Y,te.mode,oe,null),Y.return=te,Y;if(typeof Y.then=="function")return Ce(te,yl(Y),oe);if(Y.$$typeof===P)return Ce(te,xl(te,Y),oe);Sl(te,Y)}return null}function pe(te,Y,oe,Te){var st=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return st!==null?null:C(te,Y,""+oe,Te);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===st?G(te,Y,oe,Te):null;case T:return oe.key===st?ce(te,Y,oe,Te):null;case A:return oe=Cs(oe),pe(te,Y,oe,Te)}if(W(oe)||Z(oe))return st!==null?null:Me(te,Y,oe,Te,null);if(typeof oe.then=="function")return pe(te,Y,yl(oe),Te);if(oe.$$typeof===P)return pe(te,Y,xl(te,oe),Te);Sl(te,oe)}return null}function _e(te,Y,oe,Te,st){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return te=te.get(oe)||null,C(Y,te,""+Te,st);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case M:return te=te.get(Te.key===null?oe:Te.key)||null,G(Y,te,Te,st);case T:return te=te.get(Te.key===null?oe:Te.key)||null,ce(Y,te,Te,st);case A:return Te=Cs(Te),_e(te,Y,oe,Te,st)}if(W(Te)||Z(Te))return te=te.get(oe)||null,Me(Y,te,Te,st,null);if(typeof Te.then=="function")return _e(te,Y,oe,yl(Te),st);if(Te.$$typeof===P)return _e(te,Y,oe,xl(Y,Te),st);Sl(Y,Te)}return null}function Je(te,Y,oe,Te){for(var st=null,Vt=null,tt=Y,wt=Y=0,zt=null;tt!==null&&wt<oe.length;wt++){tt.index>wt?(zt=tt,tt=null):zt=tt.sibling;var Xt=pe(te,tt,oe[wt],Te);if(Xt===null){tt===null&&(tt=zt);break}e&&tt&&Xt.alternate===null&&n(te,tt),Y=f(Xt,Y,wt),Vt===null?st=Xt:Vt.sibling=Xt,Vt=Xt,tt=zt}if(wt===oe.length)return a(te,tt),Ot&&ua(te,wt),st;if(tt===null){for(;wt<oe.length;wt++)tt=Ce(te,oe[wt],Te),tt!==null&&(Y=f(tt,Y,wt),Vt===null?st=tt:Vt.sibling=tt,Vt=tt);return Ot&&ua(te,wt),st}for(tt=o(tt);wt<oe.length;wt++)zt=_e(tt,te,wt,oe[wt],Te),zt!==null&&(e&&zt.alternate!==null&&tt.delete(zt.key===null?wt:zt.key),Y=f(zt,Y,wt),Vt===null?st=zt:Vt.sibling=zt,Vt=zt);return e&&tt.forEach(function(is){return n(te,is)}),Ot&&ua(te,wt),st}function ut(te,Y,oe,Te){if(oe==null)throw Error(s(151));for(var st=null,Vt=null,tt=Y,wt=Y=0,zt=null,Xt=oe.next();tt!==null&&!Xt.done;wt++,Xt=oe.next()){tt.index>wt?(zt=tt,tt=null):zt=tt.sibling;var is=pe(te,tt,Xt.value,Te);if(is===null){tt===null&&(tt=zt);break}e&&tt&&is.alternate===null&&n(te,tt),Y=f(is,Y,wt),Vt===null?st=is:Vt.sibling=is,Vt=is,tt=zt}if(Xt.done)return a(te,tt),Ot&&ua(te,wt),st;if(tt===null){for(;!Xt.done;wt++,Xt=oe.next())Xt=Ce(te,Xt.value,Te),Xt!==null&&(Y=f(Xt,Y,wt),Vt===null?st=Xt:Vt.sibling=Xt,Vt=Xt);return Ot&&ua(te,wt),st}for(tt=o(tt);!Xt.done;wt++,Xt=oe.next())Xt=_e(tt,te,wt,Xt.value,Te),Xt!==null&&(e&&Xt.alternate!==null&&tt.delete(Xt.key===null?wt:Xt.key),Y=f(Xt,Y,wt),Vt===null?st=Xt:Vt.sibling=Xt,Vt=Xt);return e&&tt.forEach(function($b){return n(te,$b)}),Ot&&ua(te,wt),st}function en(te,Y,oe,Te){if(typeof oe=="object"&&oe!==null&&oe.type===L&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var st=oe.key;Y!==null;){if(Y.key===st){if(st=oe.type,st===L){if(Y.tag===7){a(te,Y.sibling),Te=u(Y,oe.props.children),Te.return=te,te=Te;break e}}else if(Y.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===A&&Cs(st)===Y.type){a(te,Y.sibling),Te=u(Y,oe.props),lo(Te,oe),Te.return=te,te=Te;break e}a(te,Y);break}else n(te,Y);Y=Y.sibling}oe.type===L?(Te=Ms(oe.props.children,te.mode,Te,oe.key),Te.return=te,te=Te):(Te=pl(oe.type,oe.key,oe.props,null,te.mode,Te),lo(Te,oe),Te.return=te,te=Te)}return v(te);case T:e:{for(st=oe.key;Y!==null;){if(Y.key===st)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){a(te,Y.sibling),Te=u(Y,oe.children||[]),Te.return=te,te=Te;break e}else{a(te,Y);break}else n(te,Y);Y=Y.sibling}Te=Eu(oe,te.mode,Te),Te.return=te,te=Te}return v(te);case A:return oe=Cs(oe),en(te,Y,oe,Te)}if(W(oe))return Je(te,Y,oe,Te);if(Z(oe)){if(st=Z(oe),typeof st!="function")throw Error(s(150));return oe=st.call(oe),ut(te,Y,oe,Te)}if(typeof oe.then=="function")return en(te,Y,yl(oe),Te);if(oe.$$typeof===P)return en(te,Y,xl(te,oe),Te);Sl(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Y!==null&&Y.tag===6?(a(te,Y.sibling),Te=u(Y,oe),Te.return=te,te=Te):(a(te,Y),Te=Mu(oe,te.mode,Te),Te.return=te,te=Te),v(te)):a(te,Y)}return function(te,Y,oe,Te){try{oo=0;var st=en(te,Y,oe,Te);return lr=null,st}catch(tt){if(tt===or||tt===_l)throw tt;var Vt=ui(29,tt,null,te.mode);return Vt.lanes=Te,Vt.return=te,Vt}finally{}}}var Ns=im(!0),am=im(!1),ka=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),jp(e,null,a),n}return fl(e,o,n,a),hl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wn(e,a)}}function Fu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function uo(){if(Bu){var e=rr;if(e!==null)throw e}}function fo(e,n,a,o){Bu=!1;var u=e.updateQueue;ka=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,ce=G.next;G.next=null,v===null?f=ce:v.next=ce,v=G;var Me=e.alternate;Me!==null&&(Me=Me.updateQueue,C=Me.lastBaseUpdate,C!==v&&(C===null?Me.firstBaseUpdate=ce:C.next=ce,Me.lastBaseUpdate=G))}if(f!==null){var Ce=u.baseState;v=0,Me=ce=G=null,C=f;do{var pe=C.lane&-536870913,_e=pe!==C.lane;if(_e?(Ut&pe)===pe:(o&pe)===pe){pe!==0&&pe===sr&&(Bu=!0),Me!==null&&(Me=Me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Je=e,ut=C;pe=n;var en=a;switch(ut.tag){case 1:if(Je=ut.payload,typeof Je=="function"){Ce=Je.call(en,Ce,pe);break e}Ce=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ut.payload,pe=typeof Je=="function"?Je.call(en,Ce,pe):Je,pe==null)break e;Ce=_({},Ce,pe);break e;case 2:ka=!0}}pe=C.callback,pe!==null&&(e.flags|=64,_e&&(e.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[pe]:_e.push(pe))}else _e={lane:pe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Me===null?(ce=Me=_e,G=Ce):Me=Me.next=_e,v|=pe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;_e=C,C=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Me===null&&(G=Ce),u.baseState=G,u.firstBaseUpdate=ce,u.lastBaseUpdate=Me,f===null&&(u.shared.lanes=0),qa|=v,e.lanes=v,e.memoizedState=Ce}}function sm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sm(a[e],n)}var cr=D(null),Ml=D(0);function om(e,n){e=ya,B(Ml,e),B(cr,n),ya=e|n.baseLanes}function ku(){B(Ml,ya),B(cr,cr.current)}function ju(){ya=Ml.current,V(cr),V(Ml)}var di=D(null),Mi=null;function Ga(e){var n=e.alternate;B(xn,xn.current&1),B(di,e),Mi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(Mi=e)}function Hu(e){B(xn,xn.current),B(di,e),Mi===null&&(Mi=e)}function lm(e){e.tag===22?(B(xn,xn.current),B(di,e),Mi===null&&(Mi=e)):Va()}function Va(){B(xn,xn.current),B(di,di.current)}function fi(e){V(di),Mi===e&&(Mi=null),V(xn)}var xn=D(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yd(a)||Zd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,Tt=null,Jt=null,yn=null,Tl=!1,ur=!1,Ds=!1,Al=0,ho=0,dr=null,G_=0;function mn(){throw Error(s(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,u,f){return ha=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Xm:sd,Ds=!1,f=a(o,u),Ds=!1,ur&&(f=um(n,a,o,u)),cm(e),f}function cm(e){U.H=go;var n=Jt!==null&&Jt.next!==null;if(ha=0,yn=Jt=Tt=null,Tl=!1,ho=0,dr=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&gl(e)&&(Sn=!0))}function um(e,n,a,o){Tt=e;var u=0;do{if(ur&&(dr=null),ho=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,yn=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Wm,f=n(a,o)}while(ur);return f}function V_(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Tt.flags|=1024),n}function Xu(){var e=Al!==0;return Al=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Tl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tl=!1}ha=0,yn=Jt=Tt=null,ur=!1,ho=Al=0,dr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Tt.memoizedState=yn=e:yn=yn.next=e,yn}function vn(){if(Jt===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var n=yn===null?Tt.memoizedState:yn.next;if(n!==null)yn=n,Jt=e;else{if(e===null)throw Tt.alternate===null?Error(s(467)):Error(s(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},yn===null?Tt.memoizedState=yn=e:yn=yn.next=e}return yn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,dr===null&&(dr=[]),e=em(dr,e,n),n=Tt,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Xm:sd),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===P)return Pn(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=Tt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),Tt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=vn();return Zu(n,Jt,e)}function Zu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=v=null,G=null,ce=n,Me=!1;do{var Ce=ce.lane&-536870913;if(Ce!==ce.lane?(Ut&Ce)===Ce:(ha&Ce)===Ce){var pe=ce.revertLane;if(pe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Ce===sr&&(Me=!0);else if((ha&pe)===pe){ce=ce.next,pe===sr&&(Me=!0);continue}else Ce={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(C=G=Ce,v=f):G=G.next=Ce,Tt.lanes|=pe,qa|=pe;Ce=ce.action,Ds&&a(f,Ce),f=ce.hasEagerState?ce.eagerState:a(f,Ce)}else pe={lane:Ce,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(C=G=pe,v=f):G=G.next=pe,Tt.lanes|=Ce,qa|=Ce;ce=ce.next}while(ce!==null&&ce!==n);if(G===null?v=f:G.next=C,!ci(f,e.memoizedState)&&(Sn=!0,Me&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var n=vn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);ci(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function dm(e,n,a){var o=Tt,u=vn(),f=Ot;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ci((Jt||u).memoizedState,a);if(v&&(u.memoizedState=a,Sn=!0),u=u.queue,$u(pm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},hm.bind(null,o,u,a,n),null),sn===null)throw Error(s(349));f||(ha&127)!==0||fm(o,n,a)}return a}function fm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Tt.updateQueue,n===null?(n=wl(),Tt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hm(e,n,a,o){n.value=a,n.getSnapshot=o,mm(n)&&gm(e)}function pm(e,n,a){return a(function(){mm(n)&&gm(e)})}function mm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function gm(e){var n=Ss(e,2);n!==null&&ai(n,e,2)}function Qu(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Ds){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function xm(e,n,a,o){return e.baseState=a,Zu(e,Jt,typeof o=="function"?o:pa)}function X_(e,n,a,o,u){if(Ll(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,vm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,v={};U.T=v;try{var C=a(u,o),G=U.S;G!==null&&G(v,C),_m(e,n,C)}catch(ce){Ju(e,n,ce)}finally{f!==null&&v.types!==null&&(f.types=v.types),U.T=f}}else try{f=a(u,o),_m(e,n,f)}catch(ce){Ju(e,n,ce)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(e,n,o)},function(o){return Ju(e,n,o)}):bm(e,n,a)}function bm(e,n,a){n.status="fulfilled",n.value=a,ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,vm(e,a)))}function Ju(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==o)}e.action=null}function ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function Mm(e,n){if(Ot){var a=sn.formState;if(a!==null){e:{var o=Tt;if(Ot){if(cn){t:{for(var u=cn,f=Si;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){cn=Ei(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,Tt,o),o.dispatch=a,o=Qu(!1),f=ad.bind(null,Tt,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=X_.bind(null,Tt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Em(e){var n=vn();return Tm(n,Jt,e)}function Tm(e,n,a){if(n=Zu(e,n,Sm)[0],e=Rl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(v){throw v===or?_l:v}else o=n;n=vn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Tt.flags|=2048,fr(9,{destroy:void 0},W_.bind(null,u,a),null)),[o,f,e]}function W_(e,n){e.action=n}function Am(e){var n=vn(),a=Jt;if(a!==null)return Tm(n,a,e);vn(),n=n.memoizedState,a=vn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Tt.updateQueue,n===null&&(n=wl(),Tt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function wm(){return vn().memoizedState}function Nl(e,n,a,o){var u=Zn();Tt.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(e,n,a,o){var u=vn();o=o===void 0?null:o;var f=u.memoizedState.inst;Jt!==null&&o!==null&&Gu(o,Jt.memoizedState.deps)?u.memoizedState=fr(n,f,a,o):(Tt.flags|=e,u.memoizedState=fr(1|n,f,a,o))}function Cm(e,n){Nl(8390656,8,e,n)}function $u(e,n){Dl(2048,8,e,n)}function q_(e){Tt.flags|=4;var n=Tt.updateQueue;if(n===null)n=wl(),Tt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=vn().memoizedState;return q_({ref:n,nextImpl:e}),function(){if((Wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Nm(e,n){return Dl(4,2,e,n)}function Dm(e,n){return Dl(4,4,e,n)}function Lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,Lm.bind(null,n,e),a)}function ed(){}function zm(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Om(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=e(),Ds){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[o,n],o}function td(e,n,a){return a===void 0||(ha&1073741824)!==0&&(Ut&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=P0(),Tt.lanes|=e,qa|=e,a)}function Pm(e,n,a,o){return ci(a,n)?a:cr.current!==null?(e=td(e,a,o),ci(e,n)||(Sn=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Ut&261930)===0?(Sn=!0,e.memoizedState=a):(e=P0(),Tt.lanes|=e,qa|=e,n)}function Im(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=U.T,C={};U.T=C,ad(e,!1,n,a);try{var G=u(),ce=U.S;if(ce!==null&&ce(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Me=H_(G,o);mo(e,n,Me,mi(e))}else mo(e,n,o,mi(e))}catch(Ce){mo(e,n,{then:function(){},status:"rejected",reason:Ce},mi())}finally{j.p=f,v!==null&&C.types!==null&&(v.types=C.types),U.T=v}}function Y_(){}function nd(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Fm(e).queue;Im(e,u,n,ne,a===null?Y_:function(){return Bm(e),a(o)})}function Fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bm(e){var n=Fm(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},mi())}function id(){return Pn(Lo)}function km(){return vn().memoizedState}function jm(){return vn().memoizedState}function Z_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=ja(a);var o=Ha(n,e,a);o!==null&&(ai(o,n,a),co(o,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function K_(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Gm(n,a):(a=yu(e,n,a,o),a!==null&&(ai(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=mi();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,ci(C,v))return fl(e,n,u,0),sn===null&&dl(),!1}catch{}finally{}if(a=yu(e,n,u,o),a!==null)return ai(a,e,o),Vm(a,n,o),!0}return!1}function ad(e,n,a,o){if(o={lane:2,revertLane:Pd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(n)throw Error(s(479))}else n=yu(e,a,o,2),n!==null&&ai(n,e,2)}function Ll(e){var n=e.alternate;return e===Tt||n!==null&&n===Tt}function Gm(e,n){ur=Tl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wn(e,a)}}var go={readContext:Pn,use:Cl,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};go.useEffectEvent=mn;var Xm={readContext:Pn,use:Cl,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:Cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,Lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Ds){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Ds){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=K_.bind(null,Tt,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Hm.bind(null,Tt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ed,useDeferredValue:function(e,n){var a=Zn();return td(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Im.bind(null,Tt,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Tt,u=Zn();if(Ot){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Ut&127)!==0||fm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Cm(pm.bind(null,o,f,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},hm.bind(null,o,f,a,n),null),a},useId:function(){var e=Zn(),n=sn.identifierPrefix;if(Ot){var a=Zi,o=Yi;a=(o&~(1<<32-je(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=G_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:id,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ad.bind(null,Tt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return Zn().memoizedState=Z_.bind(null,Tt)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sd={readContext:Pn,use:Cl,useCallback:zm,useContext:Pn,useEffect:$u,useImperativeHandle:Um,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Om,useReducer:Rl,useRef:wm,useState:function(){return Rl(pa)},useDebugValue:ed,useDeferredValue:function(e,n){var a=vn();return Pm(a,Jt.memoizedState,e,n)},useTransition:function(){var e=Rl(pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:dm,useId:km,useHostTransitionStatus:id,useFormState:Em,useActionState:Em,useOptimistic:function(e,n){var a=vn();return xm(a,Jt,e,n)},useMemoCache:Yu,useCacheRefresh:jm};sd.useEffectEvent=Rm;var Wm={readContext:Pn,use:Cl,useCallback:zm,useContext:Pn,useEffect:$u,useImperativeHandle:Um,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Om,useReducer:Ku,useRef:wm,useState:function(){return Ku(pa)},useDebugValue:ed,useDeferredValue:function(e,n){var a=vn();return Jt===null?td(a,e,n):Pm(a,Jt.memoizedState,e,n)},useTransition:function(){var e=Ku(pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:dm,useId:km,useHostTransitionStatus:id,useFormState:Am,useActionState:Am,useOptimistic:function(e,n){var a=vn();return Jt!==null?xm(a,Jt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:jm};Wm.useEffectEvent=Rm;function rd(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var od={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(ai(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(ai(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(e,o,a),n!==null&&(ai(n,e,a),co(n,e,a))}};function qm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function Ym(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&od.enqueueReplaceState(n,n.state,null)}function Ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Zm(e){ul(e)}function Km(e){console.error(e)}function Qm(e){ul(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ld(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function $m(e){return e=ja(e),e.tag=3,e}function e0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Jm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Jm(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Q_(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?Xl():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ud(e,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ud(e,o,u)),!1}throw Error(s(435,a.tag))}return Ud(e,o,u),Xl(),!1}if(Ot)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(e=Error(s(422),{cause:o}),ao(_i(e,a)))):(o!==wu&&(n=Error(s(423),{cause:o}),ao(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=_i(o,a),u=ld(e.stateNode,o,u),Fu(e,u),gn!==4&&(gn=2)),!1;var f=Error(s(520),{cause:o});if(f=_i(f,a),Eo===null?Eo=[f]:Eo.push(f),gn!==4&&(gn=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ld(a.stateNode,o,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),e0(u,e,a,o),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var cd=Error(s(461)),Sn=!1;function In(e,n,a,o){n.child=e===null?am(n,null,a,o):Ns(n,e.child,a,o)}function t0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var C in o)C!=="ref"&&(v[C]=o[C])}else v=o;return As(n),o=Vu(e,n,a,v,f,u),C=Xu(),e!==null&&!Sn?(Wu(e,n,u),ma(e,n,u)):(Ot&&C&&Tu(n),n.flags|=1,In(e,n,o,u),n.child)}function n0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,i0(e,n,f,o,u)):(e=pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!xd(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,o)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(f,o),e.ref=n.ref,e.return=n,n.child=e}function i0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,xd(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return ud(e,n,a,o,u)}function a0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return s0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?om(n,f):ku(),lm(n);else return o=n.lanes=536870912,s0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),om(n,f),Va(),n.memoizedState=null):(e!==null&&vl(n,null),ku(),Va());return In(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function s0(e,n,a,o,u){var f=zu();return f=f===null?null:{parent:bn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vl(n,null),ku(),lm(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function zl(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function r0(e,n,a){return Ns(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function J_(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ot){if(o.mode==="hidden")return e=zl(n,o),n.lanes=536870912,xo(null,e);if(Hu(n),(e=cn)?(e=vg(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,On=n,cn=null)):e=null,e===null)throw Fa(n);return n.lanes=536870912,null}return zl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=r0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,Sn||u){if(o=sn,o!==null&&(v=kn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ss(e,v),ai(o,e,v),cd;Xl(),n=r0(e,n,a)}else e=f.treeContext,cn=Ei(v.nextSibling),On=n,Ot=!0,Ia=null,Si=!1,e!==null&&Wp(n,e),n=zl(n,o),n.flags|=4096;return n}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ud(e,n,a,o,u){return As(n),a=Vu(e,n,a,o,void 0,u),o=Xu(),e!==null&&!Sn?(Wu(e,n,u),ma(e,n,u)):(Ot&&o&&Tu(n),n.flags|=1,In(e,n,a,u),n.child)}function o0(e,n,a,o,u,f){return As(n),n.updateQueue=null,a=um(n,o,a,u),cm(e),o=Xu(),e!==null&&!Sn?(Wu(e,n,f),ma(e,n,f)):(Ot&&o&&Tu(n),n.flags|=1,In(e,n,a,f),n.child)}function l0(e,n,a,o,u){if(As(n),n.stateNode===null){var f=er,v=a.contextType;typeof v=="object"&&v!==null&&(f=Pn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=od,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Pn(v):er,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(rd(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&od.enqueueReplaceState(f,f.state,null),fo(n,o,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,G=Ls(a,C);f.props=G;var ce=f.context,Me=a.contextType;v=er,typeof Me=="object"&&Me!==null&&(v=Pn(Me));var Ce=a.getDerivedStateFromProps;Me=typeof Ce=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ce!==v)&&Ym(n,f,o,v),ka=!1;var pe=n.memoizedState;f.state=pe,fo(n,o,f,u),uo(),ce=n.memoizedState,C||pe!==ce||ka?(typeof Ce=="function"&&(rd(n,a,Ce,o),ce=n.memoizedState),(G=ka||qm(n,a,G,o,pe,ce,v))?(Me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Iu(e,n),v=n.memoizedProps,Me=Ls(a,v),f.props=Me,Ce=n.pendingProps,pe=f.context,ce=a.contextType,G=er,typeof ce=="object"&&ce!==null&&(G=Pn(ce)),C=a.getDerivedStateFromProps,(ce=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Ce||pe!==G)&&Ym(n,f,o,G),ka=!1,pe=n.memoizedState,f.state=pe,fo(n,o,f,u),uo();var _e=n.memoizedState;v!==Ce||pe!==_e||ka||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof C=="function"&&(rd(n,a,C,o),_e=n.memoizedState),(Me=ka||qm(n,a,Me,o,pe,_e,G)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(ce||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,_e,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,_e,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_e),f.props=o,f.state=_e,f.context=G,o=Me):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):In(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ma(e,n,u),e}function c0(e,n,a,o){return Es(),n.flags|=256,In(e,n,a,o),n.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fd(e){return{baseLanes:e,cachePool:Jp()}}function hd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function u0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ot){if(u?Ga(n):Va(),(e=cn)?(e=vg(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,On=n,cn=null)):e=null,e===null)throw Fa(n);return Zd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Va(),u=n.mode,C=Pl({mode:"hidden",children:C},u),o=Ms(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=fd(a),o.childLanes=hd(e,v,a),n.memoizedState=dd,xo(null,o)):(Ga(n),pd(n,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=md(e,n,a)):n.memoizedState!==null?(Va(),n.child=e.child,n.flags|=128,n=null):(Va(),C=o.fallback,u=n.mode,o=Pl({mode:"visible",children:o.children},u),C=Ms(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ns(n,e.child,null,a),o=n.child,o.memoizedState=fd(a),o.childLanes=hd(e,v,a),n.memoizedState=dd,n=xo(null,o));else if(Ga(n),Zd(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ce=v.dgst;v=ce,o=Error(s(419)),o.stack="",o.digest=v,ao({value:o,source:null,stack:null}),n=md(e,n,a)}else if(Sn||ar(e,n,a,!1),v=(a&e.childLanes)!==0,Sn||v){if(v=sn,v!==null&&(o=kn(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Ss(e,o),ai(v,e,o),cd;Yd(C)||Xl(),n=md(e,n,a)}else Yd(C)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,cn=Ei(C.nextSibling),On=n,Ot=!0,Ia=null,Si=!1,e!==null&&Wp(n,e),n=pd(n,o.children),n.flags|=4096);return n}return u?(Va(),C=o.fallback,u=n.mode,G=e.child,ce=G.sibling,o=ca(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ce!==null?C=ca(ce,C):(C=Ms(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,xo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=fd(a):(u=C.cachePool,u!==null?(G=bn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Jp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=hd(e,v,a),n.memoizedState=dd,xo(e.child,o)):(Ga(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function pd(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=ui(22,e,null,n),e.lanes=0,e}function md(e,n,a){return Ns(n,e.child,null,a),e=pd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nu(e.return,n,a)}function gd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function f0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=xn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,B(xn,v),In(e,n,o,a),o=Ot?io:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d0(e,a,n);else if(e.tag===19)d0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gd(n,!0,a,null,f,o);break;case"together":gd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function xd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function $_(e,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Ba(n,bn,e.memoizedState.cache),Es();break;case 27:case 5:nt(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?u0(e,n,a):(Ga(n),e=ma(e,n,a),e!==null?e.sibling:null);Ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return f0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(xn,xn.current),o)break;return null;case 22:return n.lanes=0,a0(e,n,a,n.pendingProps);case 24:Ba(n,bn,e.memoizedState.cache)}return ma(e,n,a)}function h0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!xd(e,a)&&(n.flags&128)===0)return Sn=!1,$_(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Ot&&(n.flags&1048576)!==0&&Xp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Cs(n.elementType),n.type=e,typeof e=="function")Su(e)?(o=Ls(e,o),n.tag=1,n=l0(null,n,e,o,a)):(n.tag=0,n=ud(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=t0(null,n,e,o,a);break e}else if(u===F){n.tag=14,n=n0(null,n,e,o,a);break e}}throw n=ge(e)||e,Error(s(306,n,""))}}return n;case 0:return ud(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),l0(e,n,o,u,a);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(e,n),fo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ba(n,bn,o),o!==f.cache&&Du(n,[bn],a,!0),uo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c0(e,n,o,a);break e}else if(o!==u){u=_i(Error(s(424)),n),ao(u),n=c0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=Ei(e.firstChild),On=n,Ot=!0,Ia=null,Si=!0,a=am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),o===u){n=ma(e,n,a);break e}In(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=Eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ot||(a=n.type,e=n.pendingProps,o=Jl(J.current).createElement(a),o[rn]=n,o[nn]=e,Fn(o,a,e),pn(o),n.stateNode=o):n.memoizedState=Eg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&Ot&&(o=n.stateNode=yg(n.type,n.pendingProps,J.current),On=n,Si=!0,u=cn,Ja(n.type)?(Kd=u,cn=Ei(o.firstChild)):cn=u),In(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ot&&((u=o=cn)&&(o=Rb(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,On=n,cn=Ei(o.firstChild),Si=!1,u=!0):u=!1),u||Fa(n)),nt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Xd(u,f)?o=null:v!==null&&Xd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,V_,null,null,a),Lo._currentValue=u),Ol(e,n),In(e,n,o,a),n.child;case 6:return e===null&&Ot&&((e=a=cn)&&(a=Nb(a,n.pendingProps,Si),a!==null?(n.stateNode=a,On=n,cn=null,e=!0):e=!1),e||Fa(n)),null;case 13:return u0(e,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ns(n,null,o,a):In(e,n,o,a),n.child;case 11:return t0(e,n,n.type,n.pendingProps,a);case 7:return In(e,n,n.pendingProps,a),n.child;case 8:return In(e,n,n.pendingProps.children,a),n.child;case 12:return In(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),In(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=Pn(u),o=o(u),n.flags|=1,In(e,n,o,a),n.child;case 14:return n0(e,n,n.type,n.pendingProps,a);case 15:return i0(e,n,n.type,n.pendingProps,a);case 19:return f0(e,n,a);case 31:return J_(e,n,a);case 22:return a0(e,n,a,n.pendingProps);case 24:return As(n),o=Pn(bn),e===null?(u=zu(),u===null&&(u=sn,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Pu(n),Ba(n,bn,u)):((e.lanes&a)!==0&&(Iu(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,bn,o)):(o=f.cache,Ba(n,bn,o),o!==u.cache&&Du(n,[bn],a,!0))),In(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(e){e.flags|=4}function vd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(k0())e.flags|=8192;else throw Rs=bl,Ou}else e.flags&=-16777217}function p0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rg(n))if(k0())e.flags|=8192;else throw Rs=bl,Ou}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,gr|=n)}function vo(e,n){if(!Ot)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function un(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function eb(e,n,a){var o=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),fa(bn),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),un(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ga(n),f!==null?(un(n),p0(n,f)):(un(n),vd(n,u,null,o,a))):f?f!==e.memoizedState?(ga(n),un(n),p0(n,f)):(un(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(n),un(n),vd(n,u,e,o,a)),null;case 27:if(et(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}e=xe.current,ir(n)?qp(n):(e=yg(u,o,a),n.stateNode=e,ga(n))}return un(n),null;case 5:if(et(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(f=xe.current,ir(n))qp(n);else{var v=Jl(J.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[rn]=n,f[nn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Fn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return un(n),vd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ug(e.nodeValue,a)),e||Fa(n,!0)}else e=Jl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return un(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),e=!1}else a=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),un(n),null);case 4:return We(),e===null&&kd(n.stateNode.containerInfo),un(n),null;case 10:return fa(n.type),un(n),null;case 19:if(V(xn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=El(e),f!==null){for(n.flags|=128,vo(o,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return B(xn,xn.current&1|2),Ot&&ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Le()>Hl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=El(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ot)return un(n),null}else 2*Le()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Le(),e.sibling=null,a=xn.current,B(xn,u?a&1|2:a&1),Ot&&ua(n,o.treeForkCount),e):(un(n),null);case 22:case 23:return fi(n),ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&V(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(bn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function tb(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fa(bn),We(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(xn),null;case 4:return We(),null;case 10:return fa(n.type),null;case 22:case 23:return fi(n),ju(),e!==null&&V(ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return fa(bn),null;case 25:return null;default:return null}}function m0(e,n){switch(Au(n),n.tag){case 3:fa(bn),We();break;case 26:case 27:case 5:et(n);break;case 4:We();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:V(xn);break;case 10:fa(n.type);break;case 22:case 23:fi(n),ju(),e!==null&&V(ws);break;case 24:fa(bn)}}function _o(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(C){Zt(n,n.return,C)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var G=a,ce=C;try{ce()}catch(Me){Zt(u,G,Me)}}}o=o.next}while(o!==f)}}catch(Me){Zt(n,n.return,Me)}}function g0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rm(n,a)}catch(o){Zt(e,e.return,o)}}}function x0(e,n,a){a.props=Ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Zt(e,n,o)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Zt(e,n,u)}}function Ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Zt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Zt(e,n,u)}else a.current=null}function v0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Zt(e,e.return,u)}}function _d(e,n,a){try{var o=e.stateNode;Mb(o,e.type,a,n),o[nn]=n}catch(u){Zt(e,e.return,u)}}function _0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yd(e,n,a),e=e.sibling;e!==null;)yd(e,n,a),e=e.sibling}function Fl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function b0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Fn(n,o,a),n[rn]=e,n[nn]=a}catch(f){Zt(e,e.return,f)}}var xa=!1,Mn=!1,Sd=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Dn=null;function nb(e,n){if(e=e.containerInfo,Gd=sc,e=Up(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,G=-1,ce=0,Me=0,Ce=e,pe=null;t:for(;;){for(var _e;Ce!==a||u!==0&&Ce.nodeType!==3||(C=v+u),Ce!==f||o!==0&&Ce.nodeType!==3||(G=v+o),Ce.nodeType===3&&(v+=Ce.nodeValue.length),(_e=Ce.firstChild)!==null;)pe=Ce,Ce=_e;for(;;){if(Ce===e)break t;if(pe===a&&++ce===u&&(C=v),pe===f&&++Me===o&&(G=v),(_e=Ce.nextSibling)!==null)break;Ce=pe,pe=Ce.parentNode}Ce=_e}a=C===-1||G===-1?null:{start:C,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vd={focusedElem:e,selectionRange:a},sc=!1,Dn=n;Dn!==null;)if(n=Dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Dn=e;else for(;Dn!==null;){switch(n=Dn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Je=Ls(a.type,u);e=o.getSnapshotBeforeUpdate(Je,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ut){Zt(a,a.return,ut)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Dn=e;break}Dn=n.return}}function S0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),o&4&&_o(5,a);break;case 1:if(_a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}o&64&&g0(a),o&512&&bo(a,a.return);break;case 3:if(_a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rm(e,n)}catch(v){Zt(a,a.return,v)}}break;case 27:n===null&&o&4&&b0(a);case 26:case 5:_a(e,a),n===null&&o&4&&v0(a),o&512&&bo(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),o&4&&T0(e,a);break;case 13:_a(e,a),o&4&&A0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=db.bind(null,a),Db(e,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||Mn,u=xa;var f=Mn;xa=o,(Mn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),xa=u,Mn=f}break;case 30:break;default:_a(e,a)}}function M0(e){var n=e.alternate;n!==null&&(e.alternate=null,M0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&gs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,ei=!1;function va(e,n,a){for(a=a.child;a!==null;)E0(e,n,a),a=a.sibling}function E0(e,n,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:Mn||Ki(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Ki(a,n);var o=fn,u=ei;Ja(a.type)&&(fn=a.stateNode,ei=!1),va(e,n,a),Ro(a.stateNode),fn=o,ei=u;break;case 5:Mn||Ki(a,n);case 6:if(o=fn,u=ei,fn=null,va(e,n,a),fn=o,ei=u,fn!==null)if(ei)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode)}catch(f){Zt(a,n,f)}else try{fn.removeChild(a.stateNode)}catch(f){Zt(a,n,f)}break;case 18:fn!==null&&(ei?(e=fn,gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):gg(fn,a.stateNode));break;case 4:o=fn,u=ei,fn=a.stateNode.containerInfo,ei=!0,va(e,n,a),fn=o,ei=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),Mn||Xa(4,a,n),va(e,n,a);break;case 1:Mn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&x0(a,n,o)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,va(e,n,a),Mn=o;break;default:va(e,n,a)}}function T0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Zt(n,n.return,a)}}}function A0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Zt(n,n.return,a)}}function ib(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new y0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new y0),n;default:throw Error(s(435,e.tag))}}function Bl(e,n){var a=ib(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=fb.bind(null,e,o);o.then(u,u)}})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Ja(C.type)){fn=C.stateNode,ei=!1;break e}break;case 5:fn=C.stateNode,ei=!1;break e;case 3:case 4:fn=C.stateNode.containerInfo,ei=!0;break e}C=C.return}if(fn===null)throw Error(s(160));E0(f,v,u),fn=null,ei=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,e),n=n.sibling}var Fi=null;function w0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ni(e),o&4&&(Xa(3,e,e.return),_o(3,e),Xa(5,e,e.return));break;case 1:ti(n,e),ni(e),o&512&&(Mn||a===null||Ki(a,a.return)),o&64&&xa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Fi;if(ti(n,e),ni(e),o&512&&(Mn||a===null||Ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Pi]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Fn(f,o,a),f[rn]=e,pn(f),o=f;break e;case"link":var v=wg("link","href",u).get(o+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(o),Fn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=wg("meta","content",u).get(o+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(o),Fn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,pn(f),o=f}e.stateNode=o}else Cg(u,e.type,e.stateNode);else e.stateNode=Ag(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Cg(u,e.type,e.stateNode):Ag(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&_d(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ni(e),o&512&&(Mn||a===null||Ki(a,a.return)),a!==null&&o&4&&_d(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ni(e),o&512&&(Mn||a===null||Ki(a,a.return)),e.flags&32){u=e.stateNode;try{Yn(u,"")}catch(Je){Zt(e,e.return,Je)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,_d(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Sd=!0);break;case 6:if(ti(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Je){Zt(e,e.return,Je)}}break;case 3:if(tc=null,u=Fi,Fi=$l(n.containerInfo),ti(n,e),Fi=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Je){Zt(e,e.return,Je)}Sd&&(Sd=!1,C0(e));break;case 4:o=Fi,Fi=$l(e.stateNode.containerInfo),ti(n,e),ni(e),Fi=o;break;case 12:ti(n,e),ni(e);break;case 31:ti(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 13:ti(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=Le()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ce=xa,Me=Mn;if(xa=ce||u,Mn=Me||G,ti(n,e),Mn=Me,xa=ce,ni(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||xa||Mn||Us(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=G.stateNode;var Ce=G.memoizedProps.style,pe=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;C.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Je){Zt(G,G.return,Je)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Je){Zt(G,G.return,Je)}}}else if(n.tag===18){if(a===null){G=n;try{var _e=G.stateNode;u?xg(_e,!0):xg(G.stateNode,!1)}catch(Je){Zt(G,G.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(e,a))));break;case 19:ti(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bd(e);Fl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Yn(v,""),a.flags&=-33);var C=bd(e);Fl(e,C,v);break;case 3:case 4:var G=a.stateNode.containerInfo,ce=bd(e);yd(e,ce,G);break;default:throw Error(s(161))}}catch(Me){Zt(e,e.return,Me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function C0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;C0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S0(e,n.alternate,n),n=n.sibling}function Us(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Us(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&x0(n,n.return,a),Us(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ki(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),_o(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Zt(o,o.return,ce)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)sm(G[u],C)}catch(ce){Zt(o,o.return,ce)}}a&&v&64&&g0(f),bo(f,f.return);break;case 27:b0(f);case 26:case 5:ba(u,f,a),a&&o===null&&v&4&&v0(f),bo(f,f.return);break;case 12:ba(u,f,a);break;case 31:ba(u,f,a),a&&v&4&&T0(u,f);break;case 13:ba(u,f,a),a&&v&4&&A0(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),bo(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Md(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Ed(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)R0(e,n,a,o),n=n.sibling}function R0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,o),u&2048&&_o(9,n);break;case 1:Bi(e,n,a,o);break;case 3:Bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Zt(n,n.return,G)}}else Bi(e,n,a,o);break;case 31:Bi(e,n,a,o);break;case 13:Bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Bi(e,n,a,o):yo(e,n):f._visibility&2?Bi(e,n,a,o):(f._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Md(v,n);break;case 24:Bi(e,n,a,o),u&2048&&Ed(n.alternate,n);break;default:Bi(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,C=a,G=o,ce=v.flags;switch(v.tag){case 0:case 11:case 15:hr(f,v,C,G,u),_o(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?hr(f,v,C,G,u):yo(f,v):(Me._visibility|=2,hr(f,v,C,G,u)),u&&ce&2048&&Md(v.alternate,v);break;case 24:hr(f,v,C,G,u),u&&ce&2048&&Ed(v.alternate,v);break;default:hr(f,v,C,G,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Md(o.alternate,o);break;case 24:yo(a,o),u&2048&&Ed(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var So=8192;function pr(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)N0(e,n,a),e=e.sibling}function N0(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&So&&e.memoizedState!==null&&Gb(a,Fi,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Fi;Fi=$l(e.stateNode.containerInfo),pr(e,n,a),Fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,pr(e,n,a),So=o):pr(e,n,a));break;default:pr(e,n,a)}}function D0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,U0(o,e)}D0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L0(e),e=e.sibling}function L0(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Mo(e);break;default:Mo(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,U0(o,e)}D0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function U0(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Dn=o;else e:for(a=e;Dn!==null;){o=Dn;var u=o.sibling,f=o.return;if(M0(o),o===a){Dn=null;break e}if(u!==null){u.return=f,Dn=u;break e}Dn=f}}}var ab={getCacheForType:function(e){var n=Pn(bn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Pn(bn).controller.signal}},sb=typeof WeakMap=="function"?WeakMap:Map,Wt=0,sn=null,Dt=null,Ut=0,Yt=0,hi=null,Wa=!1,mr=!1,Td=!1,ya=0,gn=0,qa=0,zs=0,Ad=0,pi=0,gr=0,Eo=null,ii=null,wd=!1,jl=0,z0=0,Hl=1/0,Gl=null,Ya=null,Cn=0,Za=null,xr=null,Sa=0,Cd=0,Rd=null,O0=null,To=0,Nd=null;function mi(){return(Wt&2)!==0&&Ut!==0?Ut&-Ut:U.T!==null?Pd():Ui()}function P0(){if(pi===0)if((Ut&536870912)===0||Ot){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),pi=e}else pi=536870912;return e=di.current,e!==null&&(e.flags|=32),pi}function ai(e,n,a){(e===sn&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ka(e,Ut,pi,!1)),lt(e,a),((Wt&2)===0||e!==sn)&&(e===sn&&((Wt&2)===0&&(zs|=a),gn===4&&Ka(e,Ut,pi,!1)),Qi(e))}function I0(e,n,a){if((Wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ve(e,n),u=o?lb(e,n):Ld(e,n,!0),f=o;do{if(u===0){mr&&!o&&Ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!rb(a)){u=Ld(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=e;u=Eo;var G=C.current.memoizedState.isDehydrated;if(G&&(vr(C,v).flags|=256),v=Ld(C,v,!1),v!==2){if(Td&&!G){C.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break e}f=ii,ii=u,f!==null&&(ii===null?ii=f:ii.push.apply(ii,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ka(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,pi,!Wa);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-Le(),10<u)){if(Ka(o,n,pi,!Wa),ye(o,0,!0)!==0)break e;Sa=n,o.timeoutHandle=pg(F0.bind(null,o,a,ii,Gl,wd,n,pi,zs,gr,Wa,f,"Throttled",-0,0),u);break e}F0(o,a,ii,Gl,wd,n,pi,zs,gr,Wa,f,null,-0,0)}}break}while(!0);Qi(e)}function F0(e,n,a,o,u,f,v,C,G,ce,Me,Ce,pe,_e){if(e.timeoutHandle=-1,Ce=n.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},N0(n,f,Ce);var Je=(f&62914560)===f?jl-Le():(f&4194048)===f?z0-Le():0;if(Je=Vb(Ce,Je),Je!==null){Sa=f,e.cancelPendingCommit=Je(W0.bind(null,e,n,f,a,o,u,v,C,G,Me,Ce,null,pe,_e)),Ka(e,f,v,!ce);return}}W0(e,n,f,a,o,u,v,C,G)}function rb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ci(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(e,n,a,o){n&=~Ad,n&=~zs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-je(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Bt(e,a,n)}function Vl(){return(Wt&6)===0?(Ao(0),!1):!0}function Dd(){if(Dt!==null){if(Yt===0)var e=Dt.return;else e=Dt,da=Ts=null,qu(e),lr=null,oo=0,e=Dt;for(;e!==null;)m0(e.alternate,e),e=e.return;Dt=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ab(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Dd(),sn=e,Dt=a=ca(e.current,null),Ut=n,Yt=0,hi=null,Wa=!1,mr=Ve(e,n),Td=!1,gr=pi=Ad=zs=qa=gn=0,ii=Eo=null,wd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-je(o),f=1<<u;n|=e[u],o&=~f}return ya=n,dl(),a}function B0(e,n){Tt=null,U.H=go,n===or||n===_l?(n=tm(),Yt=3):n===Ou?(n=tm(),Yt=4):Yt=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Dt===null&&(gn=1,Ul(e,_i(n,e.current)))}function k0(){var e=di.current;return e===null?!0:(Ut&4194048)===Ut?Mi===null:(Ut&62914560)===Ut||(Ut&536870912)!==0?e===Mi:!1}function j0(){var e=U.H;return U.H=go,e===null?go:e}function H0(){var e=U.A;return U.A=ab,e}function Xl(){gn=4,Wa||(Ut&4194048)!==Ut&&di.current!==null||(mr=!0),(qa&134217727)===0&&(zs&134217727)===0||sn===null||Ka(sn,Ut,pi,!1)}function Ld(e,n,a){var o=Wt;Wt|=2;var u=j0(),f=H0();(sn!==e||Ut!==n)&&(Gl=null,vr(e,n)),n=!1;var v=gn;e:do try{if(Yt!==0&&Dt!==null){var C=Dt,G=hi;switch(Yt){case 8:Dd(),v=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var ce=Yt;if(Yt=0,hi=null,_r(e,C,G,ce),a&&mr){v=0;break e}break;default:ce=Yt,Yt=0,hi=null,_r(e,C,G,ce)}}ob(),v=gn;break}catch(Me){B0(e,Me)}while(!0);return n&&e.shellSuspendCounter++,da=Ts=null,Wt=o,U.H=u,U.A=f,Dt===null&&(sn=null,Ut=0,dl()),v}function ob(){for(;Dt!==null;)G0(Dt)}function lb(e,n){var a=Wt;Wt|=2;var o=j0(),u=H0();sn!==e||Ut!==n?(Gl=null,Hl=Le()+500,vr(e,n)):mr=Ve(e,n);e:do try{if(Yt!==0&&Dt!==null){n=Dt;var f=hi;t:switch(Yt){case 1:Yt=0,hi=null,_r(e,n,f,1);break;case 2:case 9:if($p(f)){Yt=0,hi=null,V0(n);break}n=function(){Yt!==2&&Yt!==9||sn!==e||(Yt=7),Qi(e)},f.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:$p(f)?(Yt=0,hi=null,V0(n)):(Yt=0,hi=null,_r(e,n,f,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var C=Dt;if(v?Rg(v):C.stateNode.complete){Yt=0,hi=null;var G=C.sibling;if(G!==null)Dt=G;else{var ce=C.return;ce!==null?(Dt=ce,Wl(ce)):Dt=null}break t}}Yt=0,hi=null,_r(e,n,f,5);break;case 6:Yt=0,hi=null,_r(e,n,f,6);break;case 8:Dd(),gn=6;break e;default:throw Error(s(462))}}cb();break}catch(Me){B0(e,Me)}while(!0);return da=Ts=null,U.H=o,U.A=u,Wt=a,Dt!==null?0:(sn=null,Ut=0,dl(),gn)}function cb(){for(;Dt!==null&&!at();)G0(Dt)}function G0(e){var n=h0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,n===null?Wl(e):Dt=n}function V0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=o0(a,n,n.pendingProps,n.type,void 0,Ut);break;case 11:n=o0(a,n,n.pendingProps,n.type.render,n.ref,Ut);break;case 5:qu(n);default:m0(a,n),n=Dt=Hp(n,ya),n=h0(a,n,ya)}e.memoizedProps=e.pendingProps,n===null?Wl(e):Dt=n}function _r(e,n,a,o){da=Ts=null,qu(n),lr=null,oo=0;var u=n.return;try{if(Q_(e,u,n,a,Ut)){gn=1,Ul(e,_i(a,e.current)),Dt=null;return}}catch(f){if(u!==null)throw Dt=u,f;gn=1,Ul(e,_i(a,e.current)),Dt=null;return}n.flags&32768?(Ot||o===1?e=!0:mr||(Ut&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),X0(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){X0(n,Wa);return}e=n.return;var a=eb(n.alternate,n,ya);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=e}while(n!==null);gn===0&&(gn=5)}function X0(e,n){do{var a=tb(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);gn=6,Dt=null}function W0(e,n,a,o,u,f,v,C,G){e.cancelPendingCommit=null;do ql();while(Cn!==0);if((Wt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,jt(e,a,f,v,C,G),e===sn&&(Dt=sn=null,Ut=0),xr=n,Za=e,Sa=a,Cd=f,Rd=u,O0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hb(ee,function(){return Q0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=j.p,j.p=2,v=Wt,Wt|=4;try{nb(e,n,a)}finally{Wt=v,j.p=u,U.T=o}}Cn=1,q0(),Y0(),Z0()}}function q0(){if(Cn===1){Cn=0;var e=Za,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=j.p;j.p=2;var u=Wt;Wt|=4;try{w0(n,e);var f=Vd,v=Up(e.containerInfo),C=f.focusedElem,G=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&Lp(C.ownerDocument.documentElement,C)){if(G!==null&&mu(C)){var ce=G.start,Me=G.end;if(Me===void 0&&(Me=ce),"selectionStart"in C)C.selectionStart=ce,C.selectionEnd=Math.min(Me,C.value.length);else{var Ce=C.ownerDocument||document,pe=Ce&&Ce.defaultView||window;if(pe.getSelection){var _e=pe.getSelection(),Je=C.textContent.length,ut=Math.min(G.start,Je),en=G.end===void 0?ut:Math.min(G.end,Je);!_e.extend&&ut>en&&(v=en,en=ut,ut=v);var te=Dp(C,ut),Y=Dp(C,en);if(te&&Y&&(_e.rangeCount!==1||_e.anchorNode!==te.node||_e.anchorOffset!==te.offset||_e.focusNode!==Y.node||_e.focusOffset!==Y.offset)){var oe=Ce.createRange();oe.setStart(te.node,te.offset),_e.removeAllRanges(),ut>en?(_e.addRange(oe),_e.extend(Y.node,Y.offset)):(oe.setEnd(Y.node,Y.offset),_e.addRange(oe))}}}}for(Ce=[],_e=C;_e=_e.parentNode;)_e.nodeType===1&&Ce.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ce.length;C++){var Te=Ce[C];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}sc=!!Gd,Vd=Gd=null}finally{Wt=u,j.p=o,U.T=a}}e.current=n,Cn=2}}function Y0(){if(Cn===2){Cn=0;var e=Za,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=j.p;j.p=2;var u=Wt;Wt|=4;try{S0(e,n.alternate,n)}finally{Wt=u,j.p=o,U.T=a}}Cn=3}}function Z0(){if(Cn===4||Cn===3){Cn=0,rt();var e=Za,n=xr,a=Sa,o=O0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,xr=Za=null,K0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),hs(a),n=n.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=j.p,j.p=2,U.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var C=o[v];f(C.value,{componentStack:C.stack})}}finally{U.T=n,j.p=u}}(Sa&3)!==0&&ql(),Qi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Nd?To++:(To=0,Nd=e):To=0,Ao(0)}}function K0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function ql(){return q0(),Y0(),Z0(),Q0()}function Q0(){if(Cn!==5)return!1;var e=Za,n=Cd;Cd=0;var a=hs(Sa),o=U.T,u=j.p;try{j.p=32>a?32:a,U.T=null,a=Rd,Rd=null;var f=Za,v=Sa;if(Cn=0,xr=Za=null,Sa=0,(Wt&6)!==0)throw Error(s(331));var C=Wt;if(Wt|=4,L0(f.current),R0(f,f.current,v,a),Wt=C,Ao(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{j.p=u,U.T=o,K0(e,n)}}function J0(e,n,a){n=_i(a,n),n=ld(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(lt(e,2),Qi(e))}function Zt(e,n,a){if(e.tag===3)J0(e,e,a);else for(;n!==null;){if(n.tag===3){J0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=_i(a,e),a=$m(2),o=Ha(n,a,2),o!==null&&(e0(a,o,n,e),lt(o,2),Qi(o));break}}n=n.return}}function Ud(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Td=!0,u.add(a),e=ub.bind(null,e,n,a),n.then(e,e))}function ub(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,sn===e&&(Ut&a)===a&&(gn===4||gn===3&&(Ut&62914560)===Ut&&300>Le()-jl?(Wt&2)===0&&vr(e,0):Ad|=a,gr===Ut&&(gr=0)),Qi(e)}function $0(e,n){n===0&&(n=Ne()),e=Ss(e,n),e!==null&&(lt(e,n),Qi(e))}function db(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$0(e,a)}function fb(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),$0(e,a)}function hb(e,n){return Q(e,n)}var Yl=null,br=null,zd=!1,Zl=!1,Od=!1,Qa=0;function Qi(e){e!==br&&e.next===null&&(br===null?Yl=br=e:br=br.next=e),Zl=!0,zd||(zd=!0,mb())}function Ao(e,n){if(!Od&&Zl){Od=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-je(42|e)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ig(o,f))}else f=Ut,f=ye(o,o===sn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ve(o,f)||(a=!0,ig(o,f));o=o.next}while(a);Od=!1}}function pb(){eg()}function eg(){Zl=zd=!1;var e=0;Qa!==0&&Tb()&&(e=Qa);for(var n=Le(),a=null,o=Yl;o!==null;){var u=o.next,f=tg(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(f&3)!==0)&&(Zl=!0)),o=u}Cn!==0&&Cn!==5||Ao(e),Qa!==0&&(Qa=0)}function tg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-je(f),C=1<<v,G=u[v];G===-1?((C&a)===0||(C&o)!==0)&&(u[v]=ke(C,n)):G<=n&&(e.expiredLanes|=C),f&=~C}if(n=sn,a=Ut,a=ye(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ve(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qe(o),hs(a)){case 2:case 8:a=E;break;case 32:a=ee;break;case 268435456:a=Re;break;default:a=ee}return o=ng.bind(null,e),a=Q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function ng(e,n){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=Ut;return o=ye(e,e===sn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(I0(e,o,n),tg(e,Le()),e.callbackNode!=null&&e.callbackNode===a?ng.bind(null,e):null)}function ig(e,n){if(ql())return null;I0(e,n,!0)}function mb(){wb(function(){(Wt&6)!==0?Q(R,pb):eg()})}function Pd(){if(Qa===0){var e=sr;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),Qa=e}return Qa}function ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function sg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gb(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ag((u[nn]||null).action),v=o.submitter;v&&(n=(n=v[nn]||null)?ag(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new ol("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var G=v?sg(u,v):new FormData(u);nd(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(C.preventDefault(),G=v?sg(u,v):new FormData(u),nd(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Id=0;Id<_u.length;Id++){var Fd=_u[Id],xb=Fd.toLowerCase(),vb=Fd[0].toUpperCase()+Fd.slice(1);Ii(xb,"on"+vb)}Ii(Pp,"onAnimationEnd"),Ii(Ip,"onAnimationIteration"),Ii(Fp,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(z_,"onTransitionRun"),Ii(O_,"onTransitionStart"),Ii(P_,"onTransitionCancel"),Ii(Bp,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function rg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var C=o[v],G=C.instance,ce=C.currentTarget;if(C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){ul(Me)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(C=o[v],G=C.instance,ce=C.currentTarget,C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){ul(Me)}u.currentTarget=null,f=G}}}}function Lt(e,n){var a=n[Oi];a===void 0&&(a=n[Oi]=new Set);var o=e+"__bubble";a.has(o)||(og(n,e,2,!1),a.add(o))}function Bd(e,n,a){var o=0;n&&(o|=4),og(a,e,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function kd(e){if(!e[Kl]){e[Kl]=!0,xs.forEach(function(a){a!=="selectionchange"&&(_b.has(a)||Bd(a,!1,e),Bd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Bd("selectionchange",!1,n))}}function og(e,n,a,o){switch(Pg(n)){case 2:var u=qb;break;case 8:u=Yb;break;default:u=tf}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var C=o.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=qn(C),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue e}C=C.parentNode}}o=o.return}fp(function(){var ce=f,Me=au(a),Ce=[];e:{var pe=kp.get(e);if(pe!==void 0){var _e=ol,Je=e;switch(e){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":_e=f_;break;case"focusin":Je="focus",_e=uu;break;case"focusout":Je="blur",_e=uu;break;case"beforeblur":case"afterblur":_e=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=m_;break;case Pp:case Ip:case Fp:_e=i_;break;case Bp:_e=x_;break;case"scroll":case"scrollend":_e=Jv;break;case"wheel":_e=__;break;case"copy":case"cut":case"paste":_e=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=xp;break;case"toggle":case"beforetoggle":_e=y_}var ut=(n&4)!==0,en=!ut&&(e==="scroll"||e==="scrollend"),te=ut?pe!==null?pe+"Capture":null:pe;ut=[];for(var Y=ce,oe;Y!==null;){var Te=Y;if(oe=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||oe===null||te===null||(Te=Yr(Y,te),Te!=null&&ut.push(Co(Y,Te,oe))),en)break;Y=Y.return}0<ut.length&&(pe=new _e(pe,Je,null,a,Me),Ce.push({event:pe,listeners:ut}))}}if((n&7)===0){e:{if(pe=e==="mouseover"||e==="pointerover",_e=e==="mouseout"||e==="pointerout",pe&&a!==iu&&(Je=a.relatedTarget||a.fromElement)&&(qn(Je)||Je[zi]))break e;if((_e||pe)&&(pe=Me.window===Me?Me:(pe=Me.ownerDocument)?pe.defaultView||pe.parentWindow:window,_e?(Je=a.relatedTarget||a.toElement,_e=ce,Je=Je?qn(Je):null,Je!==null&&(en=c(Je),ut=Je.tag,Je!==en||ut!==5&&ut!==27&&ut!==6)&&(Je=null)):(_e=null,Je=ce),_e!==Je)){if(ut=mp,Te="onMouseLeave",te="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(ut=xp,Te="onPointerLeave",te="onPointerEnter",Y="pointer"),en=_e==null?pe:Xi(_e),oe=Je==null?pe:Xi(Je),pe=new ut(Te,Y+"leave",_e,a,Me),pe.target=en,pe.relatedTarget=oe,Te=null,qn(Me)===ce&&(ut=new ut(te,Y+"enter",Je,a,Me),ut.target=oe,ut.relatedTarget=en,Te=ut),en=Te,_e&&Je)t:{for(ut=bb,te=_e,Y=Je,oe=0,Te=te;Te;Te=ut(Te))oe++;Te=0;for(var st=Y;st;st=ut(st))Te++;for(;0<oe-Te;)te=ut(te),oe--;for(;0<Te-oe;)Y=ut(Y),Te--;for(;oe--;){if(te===Y||Y!==null&&te===Y.alternate){ut=te;break t}te=ut(te),Y=ut(Y)}ut=null}else ut=null;_e!==null&&lg(Ce,pe,_e,ut,!1),Je!==null&&en!==null&&lg(Ce,en,Je,ut,!0)}}e:{if(pe=ce?Xi(ce):window,_e=pe.nodeName&&pe.nodeName.toLowerCase(),_e==="select"||_e==="input"&&pe.type==="file")var Vt=Tp;else if(Mp(pe))if(Ap)Vt=D_;else{Vt=R_;var tt=C_}else _e=pe.nodeName,!_e||_e.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ce&&qt(ce.elementType)&&(Vt=Tp):Vt=N_;if(Vt&&(Vt=Vt(e,ce))){Ep(Ce,Vt,a,Me);break e}tt&&tt(e,pe,ce),e==="focusout"&&ce&&pe.type==="number"&&ce.memoizedProps.value!=null&&vt(pe,"number",pe.value)}switch(tt=ce?Xi(ce):window,e){case"focusin":(Mp(tt)||tt.contentEditable==="true")&&(Qs=tt,gu=ce,no=null);break;case"focusout":no=gu=Qs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,zp(Ce,a,Me);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":zp(Ce,a,Me)}var wt;if(fu)e:{switch(e){case"compositionstart":var zt="onCompositionStart";break e;case"compositionend":zt="onCompositionEnd";break e;case"compositionupdate":zt="onCompositionUpdate";break e}zt=void 0}else Ks?yp(e,a)&&(zt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(zt="onCompositionStart");zt&&(vp&&a.locale!=="ko"&&(Ks||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Ks&&(wt=hp()):(Oa=Me,ou="value"in Oa?Oa.value:Oa.textContent,Ks=!0)),tt=Ql(ce,zt),0<tt.length&&(zt=new gp(zt,e,null,a,Me),Ce.push({event:zt,listeners:tt}),wt?zt.data=wt:(wt=Sp(a),wt!==null&&(zt.data=wt)))),(wt=M_?E_(e,a):T_(e,a))&&(zt=Ql(ce,"onBeforeInput"),0<zt.length&&(tt=new gp("onBeforeInput","beforeinput",null,a,Me),Ce.push({event:tt,listeners:zt}),tt.data=wt)),gb(Ce,e,ce,a,Me)}rg(Ce,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&o.unshift(Co(e,u,f)),u=Yr(e,n),u!=null&&o.push(Co(e,u,f))),e.tag===3)return o;e=e.return}return[]}function bb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var C=a,G=C.alternate,ce=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||ce===null||(G=ce,u?(ce=Yr(a,f),ce!=null&&v.unshift(Co(a,ce,G))):u||(ce=Yr(a,f),ce!=null&&v.push(Co(a,ce,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var yb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function cg(e){return(typeof e=="string"?e:""+e).replace(yb,`
`).replace(Sb,"")}function ug(e,n){return n=cg(n),cg(e)===n}function $t(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,a,o);break;case"style":mt(e,o,f);break;case"data":if(n!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&$t(e,n,"name",u.name,u,null),$t(e,n,"formEncType",u.formEncType,u,null),$t(e,n,"formMethod",u.formMethod,u,null),$t(e,n,"formTarget",u.formTarget,u,null)):($t(e,n,"encType",u.encType,u,null),$t(e,n,"method",u.method,u,null),$t(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&Lt("scroll",e);break;case"onScrollEnd":o!=null&&Lt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Lt("beforetoggle",e),Lt("toggle",e),k(e,"popover",o);break;case"xlinkActuate":me(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":me(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":me(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":me(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":me(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":me(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":me(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":k(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qi.get(a)||a,k(e,a,o))}}function Hd(e,n,a,o,u,f){switch(a){case"style":mt(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&Yn(e,""+o);break;case"onScroll":o!=null&&Lt("scroll",e);break;case"onScrollEnd":o!=null&&Lt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):k(e,a,o)}}}function Fn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",e),Lt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,f,v,a,null)}}u&&$t(e,n,"srcSet",a.srcSet,a,null),o&&$t(e,n,"src",a.src,a,null);return;case"input":Lt("invalid",e);var C=f=v=u=null,G=null,ce=null;for(o in a)if(a.hasOwnProperty(o)){var Me=a[o];if(Me!=null)switch(o){case"name":u=Me;break;case"type":v=Me;break;case"checked":G=Me;break;case"defaultChecked":ce=Me;break;case"value":f=Me;break;case"defaultValue":C=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(s(137,n));break;default:$t(e,n,o,Me,a,null)}}an(e,f,C,G,ce,v,u,!1);return;case"select":Lt("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":o=C;default:$t(e,n,u,C,a,null)}n=f,a=v,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":Lt("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:$t(e,n,v,C,a,null)}wn(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:$t(e,n,G,o,a,null)}return;case"dialog":Lt("beforetoggle",e),Lt("toggle",e),Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":Lt("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)Lt(wo[o],e);break;case"image":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"embed":case"source":case"link":Lt("error",e),Lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in a)if(a.hasOwnProperty(ce)&&(o=a[ce],o!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,ce,o,a,null)}return;default:if(qt(n)){for(Me in a)a.hasOwnProperty(Me)&&(o=a[Me],o!==void 0&&Hd(e,n,Me,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&$t(e,n,C,o,a,null))}function Mb(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,G=null,ce=null,Me=null;for(_e in a){var Ce=a[_e];if(a.hasOwnProperty(_e)&&Ce!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":G=Ce;default:o.hasOwnProperty(_e)||$t(e,n,_e,null,o,Ce)}}for(var pe in o){var _e=o[pe];if(Ce=a[pe],o.hasOwnProperty(pe)&&(_e!=null||Ce!=null))switch(pe){case"type":f=_e;break;case"name":u=_e;break;case"checked":ce=_e;break;case"defaultChecked":Me=_e;break;case"value":v=_e;break;case"defaultValue":C=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:_e!==Ce&&$t(e,n,pe,_e,o,Ce)}}Ge(e,v,C,G,ce,Me,f,u);return;case"select":_e=v=C=pe=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":_e=G;default:o.hasOwnProperty(f)||$t(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":pe=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==G&&$t(e,n,u,f,o,G)}n=C,a=v,o=_e,pe!=null?on(e,!!a,pe,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":_e=pe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:$t(e,n,C,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":pe=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&$t(e,n,v,u,o,f)}zn(e,pe,_e);return;case"option":for(var Je in a)if(pe=a[Je],a.hasOwnProperty(Je)&&pe!=null&&!o.hasOwnProperty(Je))switch(Je){case"selected":e.selected=!1;break;default:$t(e,n,Je,null,o,pe)}for(G in o)if(pe=o[G],_e=a[G],o.hasOwnProperty(G)&&pe!==_e&&(pe!=null||_e!=null))switch(G){case"selected":e.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:$t(e,n,G,pe,o,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in a)pe=a[ut],a.hasOwnProperty(ut)&&pe!=null&&!o.hasOwnProperty(ut)&&$t(e,n,ut,null,o,pe);for(ce in o)if(pe=o[ce],_e=a[ce],o.hasOwnProperty(ce)&&pe!==_e&&(pe!=null||_e!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:$t(e,n,ce,pe,o,_e)}return;default:if(qt(n)){for(var en in a)pe=a[en],a.hasOwnProperty(en)&&pe!==void 0&&!o.hasOwnProperty(en)&&Hd(e,n,en,void 0,o,pe);for(Me in o)pe=o[Me],_e=a[Me],!o.hasOwnProperty(Me)||pe===_e||pe===void 0&&_e===void 0||Hd(e,n,Me,pe,o,_e);return}}for(var te in a)pe=a[te],a.hasOwnProperty(te)&&pe!=null&&!o.hasOwnProperty(te)&&$t(e,n,te,null,o,pe);for(Ce in o)pe=o[Ce],_e=a[Ce],!o.hasOwnProperty(Ce)||pe===_e||pe==null&&_e==null||$t(e,n,Ce,pe,o,_e)}function dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&dg(v)){for(v=0,C=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ce=G.startTime;if(ce>C)break;var Me=G.transferSize,Ce=G.initiatorType;Me&&dg(Ce)&&(G=G.responseEnd,v+=Me*(G<C?1:(C-ce)/(G-ce)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gd=null,Vd=null;function Jl(e){return e.nodeType===9?e:e.ownerDocument}function fg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Tb(){var e=window.event;return e&&e.type==="popstate"?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var pg=typeof setTimeout=="function"?setTimeout:void 0,Ab=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,wb=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(e){return mg.resolve(null).then(e).catch(Cb)}:pg;function Cb(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function gg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[Pi]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);Er(n)}function xg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qd(a),gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Rb(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Pi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Nb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function vg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$?"||e.data==="$~"}function Zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Db(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kd=null;function _g(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function yg(e,n,a){switch(n=Jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);gs(e)}var Ti=new Map,Sg=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=j.d;j.d={f:Lb,r:Ub,D:zb,C:Ob,L:Pb,m:Ib,X:Bb,S:Fb,M:kb};function Lb(){var e=Ma.f(),n=Vl();return e||n}function Ub(e){var n=Jn(e);n!==null&&n.tag===5&&n.type==="form"?Bm(n):Ma.r(e)}var yr=typeof document>"u"?null:document;function Mg(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=xt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Sg.has(u)||(Sg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Fn(n,"link",e),pn(n),o.head.appendChild(n)))}}function zb(e){Ma.D(e),Mg("dns-prefetch",e,null)}function Ob(e,n){Ma.C(e,n),Mg("preconnect",e,n)}function Pb(e,n,a){Ma.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xt(a.imageSizes)+'"]')):u+='[href="'+xt(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=Mr(e)}Ti.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ti.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),Fn(n,"link",e),pn(n),o.head.appendChild(n)))}}function Ib(e,n){Ma.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xt(o)+'"][href="'+xt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!Ti.has(f)&&(e=_({rel:"modulepreload",href:e},n),Ti.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),Fn(o,"link",e),pn(o),a.head.appendChild(o)}}}function Fb(e,n,a){Ma.S(e,n,a);var o=yr;if(o&&e){var u=Wi(o).hoistableStyles,f=Sr(e);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=o.querySelector(No(f)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ti.get(f))&&Qd(e,a);var G=v=o.createElement("link");pn(G),Fn(G,"link",e),G._p=new Promise(function(ce,Me){G.onload=ce,G.onerror=Me}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ec(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function Bb(e,n){Ma.X(e,n);var a=yr;if(a&&e){var o=Wi(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0},n),(n=Ti.get(u))&&Jd(e,n),f=a.createElement("script"),pn(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function kb(e,n){Ma.M(e,n);var a=yr;if(a&&e){var o=Wi(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Ti.get(u))&&Jd(e,n),f=a.createElement("script"),pn(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Eg(e,n,a,o){var u=(u=J.current)?$l(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Wi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=Wi(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(No(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(e,a),f||jb(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Wi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+xt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Tg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function jb(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Fn(n,"link",a),pn(n),e.head.appendChild(n))}function Mr(e){return'[src="'+xt(e)+'"]'}function Do(e){return"script[async]"+e}function Ag(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),pn(o),Fn(o,"style",u),ec(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,pn(f),f;o=Tg(a),(u=Ti.get(u))&&Qd(o,u),f=(e.ownerDocument||e).createElement("link"),pn(f);var v=f;return v._p=new Promise(function(C,G){v.onload=C,v.onerror=G}),Fn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,pn(u),u):(o=a,(u=Ti.get(f))&&(o=_({},a),Jd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),pn(u),Fn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,e));return n.instance}function ec(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var C=o[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function wg(e,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Pi]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var C=o.get(v);C?C.push(f):o.set(v,[f])}}return o}function Cg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Hb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gb(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,pn(f);return}f=n.ownerDocument||n,o=Tg(o),(u=Ti.get(u))&&Qd(o,u),f=f.createElement("link"),pn(f);var v=f;v._p=new Promise(function(C,G){v.onload=C,v.onerror=G}),Fn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $d=0;function Vb(e,n){return e.stylesheets&&e.count===0&&ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$d===0&&($d=62500*Eb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$d?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ic=null;function ac(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ic=new Map,n.forEach(Xb,e),ic=null,nc.call(e))}function Xb(e,n){if(!(n.state.loading&4)){var a=ic.get(e);if(a)var o=a.get(null);else{a=new Map,ic.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Wb(e,n,a,o,u,f,v,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Ng(e,n,a,o,u,f,v,C,G,ce,Me,Ce){return e=new Wb(e,n,a,v,G,ce,Me,Ce,C),n=1,f===!0&&(n|=24),f=ui(3,null,null,n),e.current=f,f.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),e}function Dg(e){return e?(e=er,e):er}function Lg(e,n,a,o,u,f){u=Dg(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ha(e,o,n),a!==null&&(ai(a,e,n),co(a,e,n))}function Ug(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ef(e,n){Ug(e,n),(e=e.alternate)&&Ug(e,n)}function zg(e){if(e.tag===13||e.tag===31){var n=Ss(e,67108864);n!==null&&ai(n,e,67108864),ef(e,67108864)}}function Og(e){if(e.tag===13||e.tag===31){var n=mi();n=ct(n);var a=Ss(e,n);a!==null&&ai(a,e,n),ef(e,n)}}var sc=!0;function qb(e,n,a,o){var u=U.T;U.T=null;var f=j.p;try{j.p=2,tf(e,n,a,o)}finally{j.p=f,U.T=u}}function Yb(e,n,a,o){var u=U.T;U.T=null;var f=j.p;try{j.p=8,tf(e,n,a,o)}finally{j.p=f,U.T=u}}function tf(e,n,a,o){if(sc){var u=nf(o);if(u===null)jd(e,n,o,rc,a),Ig(e,o);else if(Kb(u,e,n,a,o))o.stopPropagation();else if(Ig(e,o),n&4&&-1<Zb.indexOf(e)){for(;u!==null;){var f=Jn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ze(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var G=1<<31-je(v);C.entanglements[1]|=G,v&=~G}Qi(f),(Wt&6)===0&&(Hl=Le()+500,Ao(0))}}break;case 31:case 13:C=Ss(f,2),C!==null&&ai(C,f,2),Vl(),ef(f,2)}if(f=nf(o),f===null&&jd(e,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jd(e,n,o,null,a)}}function nf(e){return e=au(e),af(e)}var rc=null;function af(e){if(rc=null,e=qn(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function Pg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case R:return 2;case E:return 8;case ee:case Se:return 32;case Re:return 268435456;default:return 32}default:return 32}}var sf=!1,$a=null,es=null,ts=null,Uo=new Map,zo=new Map,ns=[],Zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(e,n){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Oo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Jn(n),n!==null&&zg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Kb(e,n,a,o,u){switch(n){case"focusin":return $a=Oo($a,e,n,a,o,u),!0;case"dragenter":return es=Oo(es,e,n,a,o,u),!0;case"mouseover":return ts=Oo(ts,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Oo(zo.get(f)||null,e,n,a,o,u)),!0}return!1}function Fg(e){var n=qn(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ra(e.priority,function(){Og(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,ra(e.priority,function(){Og(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);iu=o,a.target.dispatchEvent(o),iu=null}else return n=Jn(a),n!==null&&zg(n),e.blockedOn=a,!1;n.shift()}return!0}function Bg(e,n,a){oc(e)&&a.delete(n)}function Qb(){sf=!1,$a!==null&&oc($a)&&($a=null),es!==null&&oc(es)&&(es=null),ts!==null&&oc(ts)&&(ts=null),Uo.forEach(Bg),zo.forEach(Bg)}function lc(e,n){e.blockedOn===n&&(e.blockedOn=null,sf||(sf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Qb)))}var cc=null;function kg(e){cc!==e&&(cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(af(o||a)===null)continue;break}var f=Jn(a);f!==null&&(e.splice(n,3),n-=3,nd(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(G){return lc(G,e)}$a!==null&&lc($a,e),es!==null&&lc(es,e),ts!==null&&lc(ts,e),Uo.forEach(n),zo.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&ns.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[nn]||null;if(typeof f=="function")v||kg(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[nn]||null)C=v.formAction;else if(af(u)!==null)continue}else C=v.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),kg(a)}}}function jg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rf(e){this._internalRoot=e}uc.prototype.render=rf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();Lg(a,o,e,n,null,null)},uc.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lg(e.current,2,null,e,null,null),Vl(),n[zi]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ui();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,e),a===0&&Fg(e)}};var Hg=t.version;if(Hg!=="19.2.7")throw Error(s(527,Hg,"19.2.7"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Jb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ve=dc.inject(Jb),ae=dc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Zm,f=Km,v=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ng(e,1,!1,null,null,a,o,null,u,f,v,jg),e[zi]=n.current,kd(e),new rf(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Zm,v=Km,C=Qm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Ng(e,1,!0,n,a??null,o,u,G,f,v,C,jg),n.context=Dg(null),a=n.current,o=mi(),o=ct(o),u=ja(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,lt(n,a),Qi(n),e[zi]=n.current,kd(e),new uc(n)},Io.version="19.2.7",Io}var Jg;function ly(){if(Jg)return cf.exports;Jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cf.exports=oy(),cf.exports}var cy=ly();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),$g=r=>{const t=dy(r);return t.charAt(0).toUpperCase()+t.slice(1)},lv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),fy=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Ue.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...m},g)=>Ue.createElement("svg",{ref:g,...hy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:lv("lucide",l),...!c&&!fy(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,y])=>Ue.createElement(p,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(r,t)=>{const i=Ue.forwardRef(({className:s,...l},c)=>Ue.createElement(py,{ref:c,iconNode:t,className:lv(`lucide-${uy($g(r))}`,`lucide-${r}`,s),...l}));return i.displayName=$g(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],gy=bt("arrow-up",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],cv=bt("award",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],_y=bt("book-open",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],ex=bt("brush",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Sy=bt("calendar",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xc=bt("check",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ty=bt("chevron-left",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],wy=bt("chevron-right",Ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],uv=bt("clock",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tx=bt("compass",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Dy=bt("copy",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fc=bt("cpu",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Wh=bt("download",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Oy=bt("eraser",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Iy=bt("external-link",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],By=bt("file-spreadsheet",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],jy=bt("file-text",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],nx=bt("git-branch",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],hc=bt("github",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],hf=bt("instagram",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Wy=bt("layers",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],pf=bt("linkedin",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Zy=bt("mail",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qy=bt("map-pin",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],$y=bt("maximize-2",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],t1=bt("minimize-2",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],i1=bt("network",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ix=bt("palette",a1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],dv=bt("phone-call",s1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],o1=bt("play",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],c1=bt("quote",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],d1=bt("redo-2",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],fv=bt("refresh-cw",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ax=bt("rocket",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],sx=bt("search",p1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],hv=bt("send",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],x1=bt("sparkle",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xo=bt("sparkles",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],b1=bt("terminal",_1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],rx=bt("trash-2",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],M1=bt("undo-2",S1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],mf=bt("user",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],gf=bt("volume-2",T1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],xf=bt("volume-x",A1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],C1=bt("workflow",w1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ox=bt("x",R1),tn={name:"Farhan Kabir",title:"AI Engineer | Full-Stack Developer | Specializing in Agentic Workflows & NLP | Mental Health |",tagline:"Designing deep linguistic networks to analyze cognitive states, autism indicators, and mental-health text semantics.",about:"I am an AI Engineer, Researcher, and Full Stack Developer. I build highly robust predictive AI systems, conduct quantitative linguistic analysis, and implement Stripe-polished digital experiences.",focus:"Evaluating Large Language Models for automated cognitive health screenings and zero-shot NLP behavioral diagnostic support.",projects:[{id:"typerush",title:"TypeRush",description:"An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.",category:"AI",techStack:["React 19","TailwindCSS","Web Audio API","Express","Gemini API","Firebase"],architecture:"Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.",timeline:"Sep 2024 - Mar 2025",metrics:[{label:"Audio latency",value:"0ms (Vanilla)"},{label:"Matchmaking Sync",value:"<25ms"},{label:"Frame rate",value:"60fps"}],problem:"Traditional typing practice software lacks sensory engagement and interactive mechanics.",solution:"TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.",roadmap:["Real-time payload glitch attacks","WebAssembly client-side offline dictionary sync"]},{id:"ink-home",title:"The Ink Home",description:"An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.",category:"Productivity",techStack:["React 18","Vite","Three.js","Framer Motion","TailwindCSS","Node.js"],architecture:"Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.",timeline:"Jan 2025 - Present",metrics:[{label:"Avatar fetch success",value:"100%"},{label:"RSS sync latency",value:"<320ms"},{label:"Scene frame rate",value:"60fps"}],problem:"Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.",solution:"The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.",roadmap:["WebGL spatial audio integration","Instant newsletter subscription via Substack API"]},{id:"safeside",title:"SafeSide Predictor",description:"A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.",category:"SaaS",techStack:["React","Supabase","TailwindCSS","Express","Gemini AI","Recharts"],architecture:"Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.",timeline:"Mar 2025 - Present",metrics:[{label:"Poisson model F1",value:"0.88"},{label:"Live updates latency",value:"<150ms"},{label:"Prediction checks",value:"Automated"}],problem:"Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.",solution:"SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.",roadmap:["Weather-impact modeling via OpenWeather API","Multi-league Poisson distribution charts"]},{id:"emotion-detection",title:"Multimodal Emotion Recognizer",description:"A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.",category:"NLP",techStack:["Python","BERT","Wav2Vec 2.0","React","FastAPI"],architecture:"Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.",timeline:"Feb 2023 - Oct 2023",metrics:[{label:"Bimodal accuracy",value:"92.3%"},{label:"Speech inference",value:"18ms"},{label:"Dataset size",value:"50GB"}],problem:"Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.",solution:"This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.",roadmap:["Edge deployment on mobile web views","Expansion to diagnostic indicators for pediatric developmental screens"]},{id:"portfolio-os",title:"FarhanOS Living Environment",description:"The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.",category:"Design",techStack:["React","TailwindCSS","Framer Motion","Express","Gemini API"],architecture:"Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.",timeline:"Mar 2026 - Present",metrics:[{label:"Render pipeline frame rate",value:"120fps"},{label:"Asset payload size",value:"142KB"},{label:"Custom APIs",value:"3"}],problem:"Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.",solution:"FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.",roadmap:["Add support for complete sandboxed terminal commands","Introduce voice command parsing natively via browser audio APIs"]}],papers:[{id:"prompt-break-2025",title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",authors:"Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah",journal:"IEEE ICCIT",year:2025,abstract:"Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.",methodology:"Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.",dataset:"Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.",pipeline:"User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.",results:[{metric:"Detection Accuracy",score:"94.2%"},{metric:"False Positive Rate",score:"2.8%"},{metric:"Latency overhead",score:"4.5ms"},{metric:"Jailbreak F1 Score",score:"0.935"}],citation:"Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE)."},{id:"live-interview-2025",title:"AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",authors:"Farhan Kabir, M Arman Reza Shah, Razat Biswas",journal:"IEEE ICCIT",year:2025,abstract:"Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.",methodology:"Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.",dataset:"1,200 mock interview recordings annotated by human resource professionals.",pipeline:"Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.",results:[{metric:"Late-fusion Accuracy",score:"91.6%"},{metric:"Response Transcribing",score:"110ms"},{metric:"Posture classification",score:"93.2%"},{metric:"Evaluation Agreement",score:"0.87 (Kappa)"}],citation:"Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE)."},{id:"emotion-detection-2025",title:"Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, M. K. Habib Khan, Fazle Rabby",journal:"IEEE ECCE",year:2025,abstract:"Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.",methodology:"Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.",dataset:"90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.",pipeline:"Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.",results:[{metric:"BERT Accuracy",score:"88.5%"},{metric:"RoBERTa F1-Score",score:"0.908"},{metric:"Training latency",score:"1.2 hrs"},{metric:"Inference speed",score:"3.8ms"}],citation:"Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE)."},{id:"depression-detection-2023",title:"Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",journal:"IEEE ICCIT",year:2023,abstract:"Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.",methodology:"Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.",dataset:"120,000 distinct anonymized posts annotated by clinical practitioners.",pipeline:"Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.",results:[{metric:"RoBERTa-Clinical F1",score:"0.914"},{metric:"Baseline Zero-shot F1",score:"0.781"},{metric:"Sensitivity",score:"0.893"},{metric:"Specificity",score:"0.942"}],citation:"Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE)."}],timeline:[{year:2026,title:"Architect & AI Researcher",company:"Cognitive Diagnostics Lab",role:"Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.",description:"Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.",achievements:["Designed custom zero-shot and classification-optimized clinical prediction systems","Implemented modern low-latency model evaluation dashboards processing high-volume text queues","Established rigid testing criteria ensuring patient confidentiality and data safety parameters"],technologies:["PyTorch","Transformer NLP","React/Next.js","Go","TailwindCSS v4"]},{year:2024,title:"Senior AI System Dev",company:"Synthetix Solutions",role:"Backend AI systems Architect constructing robust SaaS solutions for custom automation.",description:"Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.",achievements:["Decreased standard inference lag by over 30% through selective quantization and model distillation techniques","Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles","Orchestrated automated data extraction workers scaling securely according to traffic profiles"],technologies:["Express/Node.js","Redis","Python","Docker","Google Cloud Platform"]},{year:2022,title:"Full Stack Engineer & Researcher",company:"Mental Health Tech",role:"Frontend lead and mental wellness text classifier research dev.",description:"Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.",achievements:["Created the first generation interactive mental wellness support system evaluating distress levels","Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics","Designed completely responsive portfolio workspaces utilizing high-frequency animations"],technologies:["React","Redux","D3.js","Hugging Face Transformers","Python/Flask"]},{year:2020,title:"Open Source Contributor & Dev",company:"Independent / Farhan Lab",role:"Developing open source utilities and studying linguistic text processing.",description:"Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.",achievements:["Built and deployed TypeRush, an open-source terminal typing game","Developed interactive developer portfolios earning deep community feedback","Acquired expertise in system design, Docker containers, and React orchestration"],technologies:["React","Docker","Framer Motion","Node.js","SQLite"]}],professionalTimeline:[{year:"April 2024 - Present",title:"Lead Developer",company:"Auto Spark",role:"Lead Developer",description:"Developed responsive web applications, ensuring compatibility across various browsers and devices. Implemented efficient front-end solutions and collaborated on back-end development tasks.",achievements:["Developed responsive web applications, ensuring compatibility across various browsers and devices.","Implemented efficient front-end solutions and collaborated on back-end development tasks."],technologies:["TypeScript","React","REST APIs","Node.js","Tailwind"],badgeColor:"emerald"},{year:"2022 - 2023",title:"Full Stack Developer (Remote)",company:"Hire My Tech",role:"Full Stack Developer",description:"Built responsive web applications using React and modern JavaScript frameworks, collaborated with design team on user experience improvements.",achievements:["Built responsive web applications using React and modern JavaScript frameworks.","Collaborated with design team on user experience improvements."],technologies:["React","Next.js","PostgreSQL","Dexie.js","Tailwind"],badgeColor:"indigo"},{year:"2020 - 2021",title:"UI/UX Designer",company:"Design Studio",role:"UI/UX Designer",description:"Created user-centered designs for web and mobile applications, conducted user research and usability testing.",achievements:["Created user-centered designs for web and mobile applications.","Conducted user research and usability testing."],technologies:["TypeScript","Node.js","SQLite","Tailwind"],badgeColor:"pink"},{year:"2019 - 2020",title:"Junior Developer",company:"WebAgency",role:"Junior Developer",description:"Developed websites and web applications, learned modern development practices and agile methodologies.",achievements:["Developed websites and web applications.","Learned modern development practices and agile methodologies."],technologies:["Next.js","Webpack","CSS Modules","Node.js"],badgeColor:"amber"}],articles:[{id:"nlp-advances-2026",title:"The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI",category:"Research",readTime:"6 min read",date:"May 12, 2026",excerpt:"Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.",content:"Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers."},{id:"saas-architecture-2025",title:"Designing Zero-Cold-Start SaaS Applications for Hugging Face Models",category:"Engineering",readTime:"8 min read",date:"Nov 24, 2025",excerpt:"An architect's blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.",content:"Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user's client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat."},{id:"ux-design-developers",title:"The Aesthetic Developer Engine: Why High-Performance Styling is Critical",category:"Design",readTime:"5 min read",date:"Jan 15, 2025",excerpt:"Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.",content:"Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience."}],buildLogs:[{id:"bl-v1.4",date:"May 2026",version:"v1.4.2",title:"Audio Node Fusion & Neural Voice Synthesizer",description:"Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.",tasksCompleted:["Constructed custom caching layer for audio binaries on the server","Implemented voice control deck with visual waveform indicator","Configured optimized low-footprint audio transmission protocols"],metricsChanged:[{metric:"Voice rendering",before:"Not Supported",after:"1.2s avg"},{metric:"Client weight",before:"1.4MB",after:"1.1MB"}]},{id:"bl-v1.3",date:"Feb 2026",version:"v1.3.0",title:"Command Palette & Context Engine Upgrade",description:"Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.",tasksCompleted:["Built full-text token matching indexing portfolio vectors","Added smooth canvas overlays using Framer Motion","Mapped custom system operations (AI Site Tour, OS Theme Presets)"],metricsChanged:[{metric:"Search launch lag",before:"420ms",after:"3ms"},{metric:"Indices cached",before:"0",after:"48 items"}]}],skills:[{name:"PyTorch",category:"AI/ML",weight:5},{name:"Large Language Models",category:"AI/ML",weight:5},{name:"Hugging Face & BERT",category:"AI/ML",weight:5},{name:"Clinical NLP Pipelines",category:"AI/ML",weight:5},{name:"Python (NumPy, SciPy)",category:"AI/ML",weight:4},{name:"React / Next.js",category:"Frontend",weight:5},{name:"Tailwind CSS v4",category:"Frontend",weight:5},{name:"Framer Motion",category:"Frontend",weight:4},{name:"D3.js Visualization",category:"Frontend",weight:4},{name:"Node.js & Express",category:"Backend",weight:5},{name:"Go (Golang)",category:"Backend",weight:4},{name:"Redis Caching",category:"Backend",weight:4},{name:"PostgreSQL",category:"Backend",weight:5},{name:"Docker / Containers",category:"Systems & Devops",weight:5},{name:"Git & Linux",category:"Systems & Devops",weight:5},{name:"Academic Research",category:"Research & Science",weight:5},{name:"Mental Health Tech",category:"Research & Science",weight:5}],gardenNodes:[{id:"nlp",label:"Clinical NLP",category:"Research"},{id:"transformers",label:"Transformers",category:"Intelligence"},{id:"bert",label:"BERT Models",category:"Intelligence"},{id:"depression",label:"Depression Dialectics",category:"Research"},{id:"autism",label:"Autism Micro-shifts",category:"Research"},{id:"ethics",label:"Research Ethics",category:"Humanity"},{id:"saas",label:"AI SaaS Architectures",category:"Engineering"},{id:"telemetry",label:"Telemetry Profiling",category:"Engineering"},{id:"databases",label:"PostgreSQL Schema",category:"Engineering"}]};async function N1(r){const t=window.atob(r),i=t.length,s=new Uint8Array(i);for(let x=0;x<i;x++)s[x]=t.charCodeAt(x);const l=Math.floor(i/2),c=new Int16Array(s.buffer,0,l),h=window.AudioContext||window.webkitAudioContext;if(!h)throw new Error("Web Audio API is not supported in this browser.");const m=new h,p=m.createBuffer(1,l,24e3),y=p.getChannelData(0);for(let x=0;x<l;x++)y[x]=c[x]/32768;const _=m.createBufferSource();return _.buffer=p,_.connect(m.destination),_.start(0),{source:_,ctx:m,stop:()=>{try{_.stop(),m.close()}catch{}}}}function lx(r=800,t=.03){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const s=new i,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(r,s.currentTime),l.frequency.exponentialRampToValueAtTime(100,s.currentTime+t),c.gain.setValueAtTime(.015,s.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),l.connect(c),c.connect(s.destination),l.start(),l.stop(s.currentTime+t),setTimeout(()=>s.close(),200)}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="184",D1=0,cx=1,L1=2,Bc=1,U1=2,Wo=3,fs=0,ri=1,Ri=2,Na=0,kr=1,Zo=2,ux=3,dx=4,z1=5,ks=100,O1=101,P1=102,I1=103,F1=104,B1=200,k1=201,j1=202,H1=203,$f=204,eh=205,G1=206,V1=207,X1=208,W1=209,q1=210,Y1=211,Z1=212,K1=213,Q1=214,th=0,nh=1,ih=2,Hr=3,ah=4,sh=5,rh=6,oh=7,pv=0,J1=1,$1=2,ia=0,mv=1,gv=2,xv=3,vv=4,_v=5,bv=6,yv=7,Sv=300,Vs=301,Gr=302,vf=303,_f=304,$c=306,lh=1e3,Ra=1001,ch=1002,Bn=1003,eS=1004,pc=1005,Vn=1006,bf=1007,Hs=1008,Ni=1009,Mv=1010,Ev=1011,Qo=1012,Yh=1013,sa=1014,ta=1015,La=1016,Zh=1017,Kh=1018,Jo=1020,Tv=35902,Av=35899,wv=1021,Cv=1022,Vi=1023,Ua=1026,Gs=1027,Rv=1028,Qh=1029,Xs=1030,Jh=1031,$h=1033,kc=33776,jc=33777,Hc=33778,Gc=33779,uh=35840,dh=35841,fh=35842,hh=35843,ph=36196,mh=37492,gh=37496,xh=37488,vh=37489,Wc=37490,_h=37491,bh=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,Ah=37814,wh=37815,Ch=37816,Rh=37817,Nh=37818,Dh=37819,Lh=37820,Uh=37821,zh=36492,Oh=36494,Ph=36495,Ih=36283,Fh=36284,qc=36285,Bh=36286,tS=3200,fx=0,nS=1,us="",wi="srgb",Yc="srgb-linear",Zc="linear",Kt="srgb",Tr=7680,hx=519,iS=512,aS=513,sS=514,ep=515,rS=516,oS=517,tp=518,lS=519,px=35044,mx="300 es",na=2e3,Kc=2001;function cS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uS(){const r=Qc("canvas");return r.style.display="block",r}const gx={};function xx(...r){const t="THREE."+r.shift();console.log(t,...r)}function Nv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function _t(...r){r=Nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ht(...r){r=Nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function kh(...r){const t=r.join(" ");t in gx||(gx[t]=!0,_t(...r))}function dS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const fS={[th]:nh,[ih]:rh,[ah]:oh,[Hr]:sh,[nh]:th,[rh]:ih,[oh]:ah,[sh]:Hr};class qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=Math.PI/180,jh=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function It(r,t,i){return Math.max(t,Math.min(i,r))}function hS(r,t){return(r%t+t)%t}function Sf(r,t,i){return(1-i)*r+i*t}function Fo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rp=class rp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(It(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let Qt=rp;class Wr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,m){let g=s[l+0],p=s[l+1],y=s[l+2],_=s[l+3],x=c[h+0],M=c[h+1],T=c[h+2],L=c[h+3];if(_!==L||g!==x||p!==M||y!==T){let S=g*x+p*M+y*T+_*L;S<0&&(x=-x,M=-M,T=-T,L=-L,S=-S);let b=1-m;if(S<.9995){const N=Math.acos(S),P=Math.sin(N);b=Math.sin(b*N)/P,m=Math.sin(m*N)/P,g=g*b+x*m,p=p*b+M*m,y=y*b+T*m,_=_*b+L*m}else{g=g*b+x*m,p=p*b+M*m,y=y*b+T*m,_=_*b+L*m;const N=1/Math.sqrt(g*g+p*p+y*y+_*_);g*=N,p*=N,y*=N,_*=N}}t[i]=g,t[i+1]=p,t[i+2]=y,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const m=s[l],g=s[l+1],p=s[l+2],y=s[l+3],_=c[h],x=c[h+1],M=c[h+2],T=c[h+3];return t[i]=m*T+y*_+g*M-p*x,t[i+1]=g*T+y*x+p*_-m*M,t[i+2]=p*T+y*M+m*x-g*_,t[i+3]=y*T-m*_-g*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,m=Math.cos,g=Math.sin,p=m(s/2),y=m(l/2),_=m(c/2),x=g(s/2),M=g(l/2),T=g(c/2);switch(h){case"XYZ":this._x=x*y*_+p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_-x*M*T;break;case"YXZ":this._x=x*y*_+p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_+x*M*T;break;case"ZXY":this._x=x*y*_-p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_-x*M*T;break;case"ZYX":this._x=x*y*_-p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_+x*M*T;break;case"YZX":this._x=x*y*_+p*M*T,this._y=p*M*_+x*y*T,this._z=p*y*T-x*M*_,this._w=p*y*_-x*M*T;break;case"XZY":this._x=x*y*_-p*M*T,this._y=p*M*_-x*y*T,this._z=p*y*T+x*M*_,this._w=p*y*_+x*M*T;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],m=i[5],g=i[9],p=i[2],y=i[6],_=i[10],x=s+m+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-g)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>m&&s>_){const M=2*Math.sqrt(1+s-m-_);this._w=(y-g)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(m>_){const M=2*Math.sqrt(1+m-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(g+y)/M}else{const M=2*Math.sqrt(1+_-s-m);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(g+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(It(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,m=i._x,g=i._y,p=i._z,y=i._w;return this._x=s*y+h*m+l*p-c*g,this._y=l*y+h*g+c*m-s*p,this._z=c*y+h*p+s*g-l*m,this._w=h*y-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,h=-h,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),y=Math.sin(p);g=Math.sin(g*p)/y,i=Math.sin(i*p)/y,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const op=class op{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,m=t.z,g=t.w,p=2*(h*l-m*s),y=2*(m*i-c*l),_=2*(c*s-h*i);return this.x=i+g*p+h*_-m*y,this.y=s+g*y+m*p-c*_,this.z=l+g*_+c*y-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this.z=It(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this.z=It(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*h-s*g,this.z=s*m-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Mf.copy(this).projectOnVector(t),this.sub(Mf)}reflect(t){return this.sub(Mf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(It(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};op.prototype.isVector3=!0;let le=op;const Mf=new le,vx=new Wr,lp=class lp{constructor(t,i,s,l,c,h,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p)}set(t,i,s,l,c,h,m,g,p){const y=this.elements;return y[0]=t,y[1]=l,y[2]=m,y[3]=i,y[4]=c,y[5]=g,y[6]=s,y[7]=h,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[3],g=s[6],p=s[1],y=s[4],_=s[7],x=s[2],M=s[5],T=s[8],L=l[0],S=l[3],b=l[6],N=l[1],P=l[4],z=l[7],X=l[2],O=l[5],F=l[8];return c[0]=h*L+m*N+g*X,c[3]=h*S+m*P+g*O,c[6]=h*b+m*z+g*F,c[1]=p*L+y*N+_*X,c[4]=p*S+y*P+_*O,c[7]=p*b+y*z+_*F,c[2]=x*L+M*N+T*X,c[5]=x*S+M*P+T*O,c[8]=x*b+M*z+T*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8];return i*h*y-i*m*p-s*c*y+s*m*g+l*c*p-l*h*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=y*h-m*p,x=m*g-y*c,M=p*c-h*g,T=i*_+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=_*L,t[1]=(l*p-y*s)*L,t[2]=(m*s-l*h)*L,t[3]=x*L,t[4]=(y*i-l*g)*L,t[5]=(l*c-m*i)*L,t[6]=M*L,t[7]=(s*g-p*i)*L,t[8]=(h*i-s*c)*L,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*m)+h+t,-l*p,l*g,-l*(-p*h+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(Ef.makeScale(t,i)),this}rotate(t){return this.premultiply(Ef.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ef.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lp.prototype.isMatrix3=!0;let Mt=lp;const Ef=new Mt,_x=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const r={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Kt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Kt&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yc]:{primaries:t,whitePoint:s,transfer:Zc,toXYZ:_x,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:Kt,toXYZ:_x,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),r}const Pt=pS();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class mS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=Qc("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gS=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?c.push(Tf(l[h].image)):c.push(Tf(l[h]))}else c=Tf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Tf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let xS=0;const Af=new le;class Xn extends qs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ra,l=Ra,c=Vn,h=Hs,m=Vi,g=Ni,p=Xn.DEFAULT_ANISOTROPY,y=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=$o(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){_t(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){_t(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lh:t.x=t.x-Math.floor(t.x);break;case Ra:t.x=t.x<0?0:1;break;case ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lh:t.y=t.y-Math.floor(t.y);break;case Ra:t.y=t.y<0?0:1;break;case ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Sv;Xn.DEFAULT_ANISOTROPY=1;const cp=class cp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,p=g[0],y=g[4],_=g[8],x=g[1],M=g[5],T=g[9],L=g[2],S=g[6],b=g[10];if(Math.abs(y-x)<.01&&Math.abs(_-L)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+x)<.1&&Math.abs(_+L)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,z=(M+1)/2,X=(b+1)/2,O=(y+x)/4,F=(_+L)/4,A=(T+S)/4;return P>z&&P>X?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=O/s,c=F/s):z>X?z<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),s=O/l,c=A/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=F/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-T)*(S-T)+(_-L)*(_-L)+(x-y)*(x-y));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(_-L)/N,this.z=(x-y)/N,this.w=Math.acos((p+M+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=It(this.x,t.x,i.x),this.y=It(this.y,t.y,i.y),this.z=It(this.z,t.z,i.z),this.w=It(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=It(this.x,t,i),this.y=It(this.y,t,i),this.z=It(this.z,t,i),this.w=It(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(It(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cp.prototype.isVector4=!0;let _n=cp;class vS extends qs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new _n(0,0,t,i),this.scissorTest=!1,this.viewport=new _n(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Xn(l),h=s.count;for(let m=0;m<h;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends vS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Dv extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(t,i,s,l,c,h,m,g,p,y,_,x,M,T,L,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p,y,_,x,M,T,L,S)}set(t,i,s,l,c,h,m,g,p,y,_,x,M,T,L,S){const b=this.elements;return b[0]=t,b[4]=i,b[8]=s,b[12]=l,b[1]=c,b[5]=h,b[9]=m,b[13]=g,b[2]=p,b[6]=y,b[10]=_,b[14]=x,b[3]=M,b[7]=T,b[11]=L,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),h=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),y=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*y,M=h*_,T=m*y,L=m*_;i[0]=g*y,i[4]=-g*_,i[8]=p,i[1]=M+T*p,i[5]=x-L*p,i[9]=-m*g,i[2]=L-x*p,i[6]=T+M*p,i[10]=h*g}else if(t.order==="YXZ"){const x=g*y,M=g*_,T=p*y,L=p*_;i[0]=x+L*m,i[4]=T*m-M,i[8]=h*p,i[1]=h*_,i[5]=h*y,i[9]=-m,i[2]=M*m-T,i[6]=L+x*m,i[10]=h*g}else if(t.order==="ZXY"){const x=g*y,M=g*_,T=p*y,L=p*_;i[0]=x-L*m,i[4]=-h*_,i[8]=T+M*m,i[1]=M+T*m,i[5]=h*y,i[9]=L-x*m,i[2]=-h*p,i[6]=m,i[10]=h*g}else if(t.order==="ZYX"){const x=h*y,M=h*_,T=m*y,L=m*_;i[0]=g*y,i[4]=T*p-M,i[8]=x*p+L,i[1]=g*_,i[5]=L*p+x,i[9]=M*p-T,i[2]=-p,i[6]=m*g,i[10]=h*g}else if(t.order==="YZX"){const x=h*g,M=h*p,T=m*g,L=m*p;i[0]=g*y,i[4]=L-x*_,i[8]=T*_+M,i[1]=_,i[5]=h*y,i[9]=-m*y,i[2]=-p*y,i[6]=M*_+T,i[10]=x-L*_}else if(t.order==="XZY"){const x=h*g,M=h*p,T=m*g,L=m*p;i[0]=g*y,i[4]=-_,i[8]=p*y,i[1]=x*_+L,i[5]=h*y,i[9]=M*_-T,i[2]=T*_-M,i[6]=m*y,i[10]=L*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bS,t,yS)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),as.crossVectors(s,gi),as.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),as.crossVectors(s,gi)),as.normalize(),mc.crossVectors(gi,as),l[0]=as.x,l[4]=mc.x,l[8]=gi.x,l[1]=as.y,l[5]=mc.y,l[9]=gi.y,l[2]=as.z,l[6]=mc.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[4],g=s[8],p=s[12],y=s[1],_=s[5],x=s[9],M=s[13],T=s[2],L=s[6],S=s[10],b=s[14],N=s[3],P=s[7],z=s[11],X=s[15],O=l[0],F=l[4],A=l[8],I=l[12],K=l[1],H=l[5],Z=l[9],he=l[13],ge=l[2],W=l[6],U=l[10],j=l[14],ne=l[3],be=l[7],ie=l[11],D=l[15];return c[0]=h*O+m*K+g*ge+p*ne,c[4]=h*F+m*H+g*W+p*be,c[8]=h*A+m*Z+g*U+p*ie,c[12]=h*I+m*he+g*j+p*D,c[1]=y*O+_*K+x*ge+M*ne,c[5]=y*F+_*H+x*W+M*be,c[9]=y*A+_*Z+x*U+M*ie,c[13]=y*I+_*he+x*j+M*D,c[2]=T*O+L*K+S*ge+b*ne,c[6]=T*F+L*H+S*W+b*be,c[10]=T*A+L*Z+S*U+b*ie,c[14]=T*I+L*he+S*j+b*D,c[3]=N*O+P*K+z*ge+X*ne,c[7]=N*F+P*H+z*W+X*be,c[11]=N*A+P*Z+z*U+X*ie,c[15]=N*I+P*he+z*j+X*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],m=t[5],g=t[9],p=t[13],y=t[2],_=t[6],x=t[10],M=t[14],T=t[3],L=t[7],S=t[11],b=t[15],N=g*M-p*x,P=m*M-p*_,z=m*x-g*_,X=h*M-p*y,O=h*x-g*y,F=h*_-m*y;return i*(L*N-S*P+b*z)-s*(T*N-S*X+b*O)+l*(T*P-L*X+b*F)-c*(T*z-L*O+S*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=t[9],x=t[10],M=t[11],T=t[12],L=t[13],S=t[14],b=t[15],N=i*m-s*h,P=i*g-l*h,z=i*p-c*h,X=s*g-l*m,O=s*p-c*m,F=l*p-c*g,A=y*L-_*T,I=y*S-x*T,K=y*b-M*T,H=_*S-x*L,Z=_*b-M*L,he=x*b-M*S,ge=N*he-P*Z+z*H+X*K-O*I+F*A;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ge;return t[0]=(m*he-g*Z+p*H)*W,t[1]=(l*Z-s*he-c*H)*W,t[2]=(L*F-S*O+b*X)*W,t[3]=(x*O-_*F-M*X)*W,t[4]=(g*K-h*he-p*I)*W,t[5]=(i*he-l*K+c*I)*W,t[6]=(S*z-T*F-b*P)*W,t[7]=(y*F-x*z+M*P)*W,t[8]=(h*Z-m*K+p*A)*W,t[9]=(s*K-i*Z-c*A)*W,t[10]=(T*O-L*z+b*N)*W,t[11]=(_*z-y*O-M*N)*W,t[12]=(m*I-h*H-g*A)*W,t[13]=(i*H-s*I+l*A)*W,t[14]=(L*P-T*X-S*N)*W,t[15]=(y*X-_*P+x*N)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,m=t.y,g=t.z,p=c*h,y=c*m;return this.set(p*h+s,p*m-l*g,p*g+l*m,0,p*m+l*g,y*m+s,y*g-l*h,0,p*g-l*m,y*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,m=i._z,g=i._w,p=c+c,y=h+h,_=m+m,x=c*p,M=c*y,T=c*_,L=h*y,S=h*_,b=m*_,N=g*p,P=g*y,z=g*_,X=s.x,O=s.y,F=s.z;return l[0]=(1-(L+b))*X,l[1]=(M+z)*X,l[2]=(T-P)*X,l[3]=0,l[4]=(M-z)*O,l[5]=(1-(x+b))*O,l[6]=(S+N)*O,l[7]=0,l[8]=(T+P)*F,l[9]=(S-N)*F,l[10]=(1-(x+L))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=wr.set(l[0],l[1],l[2]).length();const m=wr.set(l[4],l[5],l[6]).length(),g=wr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),ki.copy(this);const p=1/h,y=1/m,_=1/g;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=y,ki.elements[5]*=y,ki.elements[6]*=y,ki.elements[8]*=_,ki.elements[9]*=_,ki.elements[10]*=_,i.setFromRotationMatrix(ki),s.x=h,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,h,m=na,g=!1){const p=this.elements,y=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let T,L;if(g)T=c/(h-c),L=h*c/(h-c);else if(m===na)T=-(h+c)/(h-c),L=-2*h*c/(h-c);else if(m===Kc)T=-h/(h-c),L=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=L,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,m=na,g=!1){const p=this.elements,y=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,L;if(g)T=1/(h-c),L=h/(h-c);else if(m===na)T=-2/(h-c),L=-(h+c)/(h-c);else if(m===Kc)T=-1/(h-c),L=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=L,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Jc.prototype.isMatrix4=!0;let Tn=Jc;const wr=new le,ki=new Tn,bS=new le(0,0,0),yS=new le(1,1,1),as=new le,mc=new le,gi=new le,yx=new Tn,Sx=new Wr;class Ws{constructor(t=0,i=0,s=0,l=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],m=l[8],g=l[1],p=l[5],y=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-It(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-It(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(It(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return yx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Sx.setFromEuler(this),this.setFromQuaternion(Sx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SS=0;const Mx=new le,Cr=new Wr,Ea=new Tn,gc=new le,Bo=new le,MS=new le,ES=new Wr,Ex=new le(1,0,0),Tx=new le(0,1,0),Ax=new le(0,0,1),wx={type:"added"},TS={type:"removed"},Rr={type:"childadded",child:null},wf={type:"childremoved",child:null};class oi extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new le,i=new Ws,s=new Wr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Mt}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(Ex,t)}rotateY(t){return this.rotateOnAxis(Tx,t)}rotateZ(t){return this.rotateOnAxis(Ax,t)}translateOnAxis(t,i){return Mx.copy(t).applyQuaternion(this.quaternion),this.position.add(Mx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ex,t)}translateY(t){return this.translateOnAxis(Tx,t)}translateZ(t){return this.translateOnAxis(Ax,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Bo,gc,this.up):Ea.lookAt(gc,Bo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wx),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TS),wf.child=t,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wx),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,MS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,y=g.length;p<y;p++){const _=g[p];c(t.shapes,_)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=h(t.geometries),g=h(t.materials),p=h(t.textures),y=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),T=h(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(m){const g=[];for(const p in m){const y=m[p];delete y.metadata,g.push(y)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}oi.DEFAULT_UP=new le(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const L of t.hand.values()){const S=i.getJointPose(L,s),b=this._getHandJoint(p,L);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const y=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=y.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new xc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Rf(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class kt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Pt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Pt.workingColorSpace){if(t=hS(t,1),i=It(i,0,1),s=It(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rf(h,c,t+1/3),this.g=Rf(h,c,t),this.b=Rf(h,c,t-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(t,i=wi){function s(c){c!==void 0&&parseFloat(c)<1&&_t("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:_t("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);_t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=wi){const s=Uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):_t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return Pt.workingToColorSpace(Gn.copy(this),t),Math.round(It(Gn.r*255,0,255))*65536+Math.round(It(Gn.g*255,0,255))*256+Math.round(It(Gn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pt.workingColorSpace){Pt.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,h=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const y=(m+h)/2;if(m===h)g=0,p=0;else{const _=h-m;switch(p=y<=.5?_/(h+m):_/(2-h-m),h){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return t.h=g,t.s=p,t.l=y,t}getRGB(t,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=wi){Pt.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==wi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+i,ss.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ss),t.getHSL(vc);const s=Sf(ss.h,vc.h,i),l=Sf(ss.s,vc.s,i),c=Sf(ss.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new kt;kt.NAMES=Uv;class ip{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=i}clone(){return new ip(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wS extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ws,this.environmentIntensity=1,this.environmentRotation=new Ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ji=new le,Ta=new le,Nf=new le,Aa=new le,Nr=new le,Dr=new le,Cx=new le,Df=new le,Lf=new le,Uf=new le,zf=new _n,Of=new _n,Pf=new _n;class Gi{constructor(t=new le,i=new le,s=new le){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ji.subVectors(t,i),l.cross(ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ji.subVectors(l,i),Ta.subVectors(s,i),Nf.subVectors(t,i);const h=ji.dot(ji),m=ji.dot(Ta),g=ji.dot(Nf),p=Ta.dot(Ta),y=Ta.dot(Nf),_=h*p-m*m;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*g-m*y)*x,T=(h*y-m*g)*x;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,h,m,g){return this.getBarycoord(t,i,s,l,Aa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Aa.x),g.addScaledVector(h,Aa.y),g.addScaledVector(m,Aa.z),g)}static getInterpolatedAttribute(t,i,s,l,c,h){return zf.setScalar(0),Of.setScalar(0),Pf.setScalar(0),zf.fromBufferAttribute(t,i),Of.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zf,c.x),h.addScaledVector(Of,c.y),h.addScaledVector(Pf,c.z),h}static isFrontFacing(t,i,s,l){return ji.subVectors(s,i),Ta.subVectors(t,i),ji.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),ji.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Gi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,m;Nr.subVectors(l,s),Dr.subVectors(c,s),Df.subVectors(t,s);const g=Nr.dot(Df),p=Dr.dot(Df);if(g<=0&&p<=0)return i.copy(s);Lf.subVectors(t,l);const y=Nr.dot(Lf),_=Dr.dot(Lf);if(y>=0&&_<=y)return i.copy(l);const x=g*_-y*p;if(x<=0&&g>=0&&y<=0)return h=g/(g-y),i.copy(s).addScaledVector(Nr,h);Uf.subVectors(t,c);const M=Nr.dot(Uf),T=Dr.dot(Uf);if(T>=0&&M<=T)return i.copy(c);const L=M*p-g*T;if(L<=0&&p>=0&&T<=0)return m=p/(p-T),i.copy(s).addScaledVector(Dr,m);const S=y*T-M*_;if(S<=0&&_-y>=0&&M-T>=0)return Cx.subVectors(c,l),m=(_-y)/(_-y+(M-T)),i.copy(l).addScaledVector(Cx,m);const b=1/(S+L+x);return h=L*b,m=x*b,i.copy(s).addScaledVector(Nr,h).addScaledVector(Dr,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class el{constructor(t=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,m=c.count;h<m;h++)t.isMesh===!0?t.getVertexPosition(h,Hi):Hi.fromBufferAttribute(c,h),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),bc.subVectors(this.max,ko),Lr.subVectors(t.a,ko),Ur.subVectors(t.b,ko),zr.subVectors(t.c,ko),rs.subVectors(Ur,Lr),os.subVectors(zr,Ur),Os.subVectors(Lr,zr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Os.z,Os.y,rs.z,0,-rs.x,os.z,0,-os.x,Os.z,0,-Os.x,-rs.y,rs.x,0,-os.y,os.x,0,-Os.y,Os.x,0];return!If(i,Lr,Ur,zr,bc)||(i=[1,0,0,0,1,0,0,0,1],!If(i,Lr,Ur,zr,bc))?!1:(yc.crossVectors(rs,os),i=[yc.x,yc.y,yc.z],If(i,Lr,Ur,zr,bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new le,new le,new le,new le,new le,new le,new le,new le],Hi=new le,_c=new el,Lr=new le,Ur=new le,zr=new le,rs=new le,os=new le,Os=new le,ko=new le,bc=new le,yc=new le,Ps=new le;function If(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ps.fromArray(r,c);const m=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),g=t.dot(Ps),p=i.dot(Ps),y=s.dot(Ps);if(Math.max(-Math.max(g,p,y),Math.min(g,p,y))>m)return!1}return!0}const En=new le,Sc=new Qt;let CS=0;class Di extends qs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=px,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=si(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array),l=si(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array),l=si(l,this.array),c=si(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==px&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class zv extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ov extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Un extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const RS=new el,jo=new le,Ff=new le;class eu{constructor(t=new le,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):RS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ff.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Ff)),this.expandByPoint(jo.copy(t.center).sub(Ff))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let NS=0;const Ai=new Tn,Bf=new oi,Or=new le,xi=new el,Ho=new el,Ln=new le;class li extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cS(t)?Ov:zv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Mt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,i,s){return Ai.makeTranslation(t,i,s),this.applyMatrix4(Ai),this}scale(t,i,s){return Ai.makeScale(t,i,s),this.applyMatrix4(Ai),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(t){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const m=i[c];Ho.setFromBufferAttribute(m),this.morphTargetsRelative?(Ln.addVectors(xi.min,Ho.min),xi.expandByPoint(Ln),Ln.addVectors(xi.max,Ho.max),xi.expandByPoint(Ln)):(xi.expandByPoint(Ho.min),xi.expandByPoint(Ho.max))}xi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Ln.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let c=0,h=i.length;c<h;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,y=m.count;p<y;p++)Ln.fromBufferAttribute(m,p),g&&(Or.fromBufferAttribute(t,p),Ln.add(Or)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new le,g[A]=new le;const p=new le,y=new le,_=new le,x=new Qt,M=new Qt,T=new Qt,L=new le,S=new le;function b(A,I,K){p.fromBufferAttribute(s,A),y.fromBufferAttribute(s,I),_.fromBufferAttribute(s,K),x.fromBufferAttribute(c,A),M.fromBufferAttribute(c,I),T.fromBufferAttribute(c,K),y.sub(p),_.sub(p),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(L.copy(y).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(H),S.copy(_).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(H),m[A].add(L),m[I].add(L),m[K].add(L),g[A].add(S),g[I].add(S),g[K].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let A=0,I=N.length;A<I;++A){const K=N[A],H=K.start,Z=K.count;for(let he=H,ge=H+Z;he<ge;he+=3)b(t.getX(he+0),t.getX(he+1),t.getX(he+2))}const P=new le,z=new le,X=new le,O=new le;function F(A){X.fromBufferAttribute(l,A),O.copy(X);const I=m[A];P.copy(I),P.sub(X.multiplyScalar(X.dot(I))).normalize(),z.crossVectors(O,I);const H=z.dot(g[A])<0?-1:1;h.setXYZW(A,P.x,P.y,P.z,H)}for(let A=0,I=N.length;A<I;++A){const K=N[A],H=K.start,Z=K.count;for(let he=H,ge=H+Z;he<ge;he+=3)F(t.getX(he+0)),F(t.getX(he+1)),F(t.getX(he+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new le,c=new le,h=new le,m=new le,g=new le,p=new le,y=new le,_=new le;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),L=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),p.fromBufferAttribute(s,S),m.add(y),g.add(y),p.add(y),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(L,g.x,g.y,g.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(m,g){const p=m.array,y=m.itemSize,_=m.normalized,x=new p.constructor(g.length*y);let M=0,T=0;for(let L=0,S=g.length;L<S;L++){m.isInterleavedBufferAttribute?M=g[L]*m.data.stride+m.offset:M=g[L]*y;for(let b=0;b<y;b++)x[T++]=p[M++]}return new Di(x,y,_)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=t(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let y=0,_=p.length;y<_;y++){const x=p[y],M=t(x,s);g.push(M)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,g=h.length;m<g;m++){const p=h[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],y=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];y.push(M.toJSON(t.data))}y.length>0&&(l[g]=y,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const c=t.morphAttributes;for(const p in c){const y=[],_=c[p];for(let x=0,M=_.length;x<M;x++)y.push(_[x].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,y=h.length;p<y;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DS=0;class tl extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=kr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=eh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){_t(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){_t(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$f&&(s.blendSrc=this.blendSrc),this.blendDst!==eh&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ca=new le,kf=new le,Mc=new le,ls=new le,jf=new le,Ec=new le,Hf=new le;class Pv{constructor(t=new le,i=new le(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){kf.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),ls.copy(this.origin).sub(kf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Mc),m=ls.dot(this.direction),g=-ls.dot(Mc),p=ls.lengthSq(),y=Math.abs(1-h*h);let _,x,M,T;if(y>0)if(_=h*g-m,x=h*m-g,T=c*y,_>=0)if(x>=-T)if(x<=T){const L=1/y;_*=L,x*=L,M=_*(_+h*x+2*m)+x*(h*_+x+2*g)+p}else x=c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x=-c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x<=-T?(_=Math.max(0,-(-h*c+m)),x=_>0?-c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-g),c),M=x*(x+2*g)+p):(_=Math.max(0,-(h*c+m)),x=_>0?c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(kf).addScaledVector(Mc,x),M}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),m=s-h,g=s+h;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,m,g;const p=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),y>=0?(c=(t.min.y-x.y)*y,h=(t.max.y-x.y)*y):(c=(t.max.y-x.y)*y,h=(t.min.y-x.y)*y),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(m=(t.min.z-x.z)*_,g=(t.max.z-x.z)*_):(m=(t.max.z-x.z)*_,g=(t.min.z-x.z)*_),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,l,c){jf.subVectors(i,t),Ec.subVectors(s,t),Hf.crossVectors(jf,Ec);let h=this.direction.dot(Hf),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;ls.subVectors(this.origin,t);const g=m*this.direction.dot(Ec.crossVectors(ls,Ec));if(g<0)return null;const p=m*this.direction.dot(jf.cross(ls));if(p<0||g+p>h)return null;const y=-m*ls.dot(Hf);return y<0?null:this.at(y/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Br extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ws,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rx=new Tn,Is=new Pv,Tc=new eu,Nx=new le,Ac=new le,wc=new le,Cc=new le,Gf=new le,Rc=new le,Dx=new le,Nc=new le;class Qn extends oi{constructor(t=new li,i=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Rc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const y=m[g],_=c[g];y!==0&&(Gf.fromBufferAttribute(_,t),h?Rc.addScaledVector(Gf,y):Rc.addScaledVector(Gf.sub(i),y))}i.add(Rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),Is.copy(t.ray).recast(t.near),!(Tc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Tc,Nx)===null||Is.origin.distanceToSquared(Nx)>(t.far-t.near)**2))&&(Rx.copy(c).invert(),Is.copy(t.ray).applyMatrix4(Rx),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Is)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(h))for(let T=0,L=x.length;T<L;T++){const S=x[T],b=h[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let z=N,X=P;z<X;z+=3){const O=m.getX(z),F=m.getX(z+1),A=m.getX(z+2);l=Dc(this,b,t,s,p,y,_,O,F,A),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),L=Math.min(m.count,M.start+M.count);for(let S=T,b=L;S<b;S+=3){const N=m.getX(S),P=m.getX(S+1),z=m.getX(S+2);l=Dc(this,h,t,s,p,y,_,N,P,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let T=0,L=x.length;T<L;T++){const S=x[T],b=h[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let z=N,X=P;z<X;z+=3){const O=z,F=z+1,A=z+2;l=Dc(this,b,t,s,p,y,_,O,F,A),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),L=Math.min(g.count,M.start+M.count);for(let S=T,b=L;S<b;S+=3){const N=S,P=S+1,z=S+2;l=Dc(this,h,t,s,p,y,_,N,P,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function LS(r,t,i,s,l,c,h,m){let g;if(t.side===ri?g=s.intersectTriangle(h,c,l,!0,m):g=s.intersectTriangle(l,c,h,t.side===fs,m),g===null)return null;Nc.copy(m),Nc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:r}}function Dc(r,t,i,s,l,c,h,m,g,p){r.getVertexPosition(m,Ac),r.getVertexPosition(g,wc),r.getVertexPosition(p,Cc);const y=LS(r,t,i,s,Ac,wc,Cc,Dx);if(y){const _=new le;Gi.getBarycoord(Dx,Ac,wc,Cc,_),l&&(y.uv=Gi.getInterpolatedAttribute(l,m,g,p,_,new Qt)),c&&(y.uv1=Gi.getInterpolatedAttribute(c,m,g,p,_,new Qt)),h&&(y.normal=Gi.getInterpolatedAttribute(h,m,g,p,_,new le),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:m,b:g,c:p,normal:new le,materialIndex:0};Gi.getNormal(Ac,wc,Cc,x.normal),y.face=x,y.barycoord=_}return y}class US extends Xn{constructor(t=null,i=1,s=1,l,c,h,m,g,p=Bn,y=Bn,_,x){super(null,h,m,g,p,y,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vf=new le,zS=new le,OS=new Mt;class Bs{constructor(t=new le(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Vf.subVectors(s,i).cross(zS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Vf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||OS.getNormalMatrix(t),l=this.coplanarPoint(Vf).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new eu,PS=new Qt(.5,.5),Lc=new le;class Iv{constructor(t=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,h=new Bs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na,s=!1){const l=this.planes,c=t.elements,h=c[0],m=c[1],g=c[2],p=c[3],y=c[4],_=c[5],x=c[6],M=c[7],T=c[8],L=c[9],S=c[10],b=c[11],N=c[12],P=c[13],z=c[14],X=c[15];if(l[0].setComponents(p-h,M-y,b-T,X-N).normalize(),l[1].setComponents(p+h,M+y,b+T,X+N).normalize(),l[2].setComponents(p+m,M+_,b+L,X+P).normalize(),l[3].setComponents(p-m,M-_,b-L,X-P).normalize(),s)l[4].setComponents(g,x,S,z).normalize(),l[5].setComponents(p-g,M-x,b-S,X-z).normalize();else if(l[4].setComponents(p-g,M-x,b-S,X-z).normalize(),i===na)l[5].setComponents(p+g,M+x,b+S,X+z).normalize();else if(i===Kc)l[5].setComponents(g,x,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=PS.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fv extends tl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lx=new Tn,Hh=new Pv,Uc=new eu,zc=new le;class IS extends oi{constructor(t=new li,i=new Fv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;Lx.copy(l).invert(),Hh.copy(t.ray).applyMatrix4(Lx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=x,L=M;T<L;T++){const S=p.getX(T);zc.fromBufferAttribute(_,S),Ux(zc,S,g,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let T=x,L=M;T<L;T++)zc.fromBufferAttribute(_,T),Ux(zc,T,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Ux(r,t,i,s,l,c,h){const m=Hh.distanceSqToPoint(r);if(m<i){const g=new le;Hh.closestPointToPoint(r,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Bv extends Xn{constructor(t=[],i=Vs,s,l,c,h,m,g,p,y){super(t,i,s,l,c,h,m,g,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class FS extends Xn{constructor(t,i,s,l,c,h,m,g,p){super(t,i,s,l,c,h,m,g,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vr extends Xn{constructor(t,i,s=sa,l,c,h,m=Bn,g=Bn,p,y=Ua,_=1){if(y!==Ua&&y!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,m,g,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BS extends Vr{constructor(t,i=sa,s=Vs,l,c,h=Bn,m=Bn,g,p=Ua){const y={width:t,height:t,depth:1},_=[y,y,y,y,y,y];super(t,t,i,s,l,c,h,m,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kv extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nl extends li{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const m=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],y=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(_,2));function T(L,S,b,N,P,z,X,O,F,A,I){const K=z/F,H=X/A,Z=z/2,he=X/2,ge=O/2,W=F+1,U=A+1;let j=0,ne=0;const be=new le;for(let ie=0;ie<U;ie++){const D=ie*H-he;for(let V=0;V<W;V++){const B=V*K-Z;be[L]=B*N,be[S]=D*P,be[b]=ge,p.push(be.x,be.y,be.z),be[L]=0,be[S]=0,be[b]=O>0?1:-1,y.push(be.x,be.y,be.z),_.push(V/F),_.push(1-ie/A),j+=1}}for(let ie=0;ie<A;ie++)for(let D=0;D<F;D++){const V=x+D+W*ie,B=x+D+W*(ie+1),xe=x+(D+1)+W*(ie+1),Ae=x+(D+1)+W*ie;g.push(V,B,Ae),g.push(B,xe,Ae),ne+=6}m.addGroup(M,ne,I),M+=ne,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ko extends li{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:m,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const y=[],_=[],x=[],M=[];let T=0;const L=[],S=s/2;let b=0;N(),h===!1&&(t>0&&P(!0),i>0&&P(!1)),this.setIndex(y),this.setAttribute("position",new Un(_,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(M,2));function N(){const z=new le,X=new le;let O=0;const F=(i-t)/s;for(let A=0;A<=c;A++){const I=[],K=A/c,H=K*(i-t)+t;for(let Z=0;Z<=l;Z++){const he=Z/l,ge=he*g+m,W=Math.sin(ge),U=Math.cos(ge);X.x=H*W,X.y=-K*s+S,X.z=H*U,_.push(X.x,X.y,X.z),z.set(W,F,U).normalize(),x.push(z.x,z.y,z.z),M.push(he,1-K),I.push(T++)}L.push(I)}for(let A=0;A<l;A++)for(let I=0;I<c;I++){const K=L[I][A],H=L[I+1][A],Z=L[I+1][A+1],he=L[I][A+1];(t>0||I!==0)&&(y.push(K,H,he),O+=3),(i>0||I!==c-1)&&(y.push(H,Z,he),O+=3)}p.addGroup(b,O,0),b+=O}function P(z){const X=T,O=new Qt,F=new le;let A=0;const I=z===!0?t:i,K=z===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*K,0),x.push(0,K,0),M.push(.5,.5),T++;const H=T;for(let Z=0;Z<=l;Z++){const ge=Z/l*g+m,W=Math.cos(ge),U=Math.sin(ge);F.x=I*U,F.y=S*K,F.z=I*W,_.push(F.x,F.y,F.z),x.push(0,K,0),O.x=W*.5+.5,O.y=U*.5*K+.5,M.push(O.x,O.y),T++}for(let Z=0;Z<l;Z++){const he=X+Z,ge=H+Z;z===!0?y.push(ge,ge+1,he):y.push(ge+1,ge,he),A+=3}p.addGroup(b,A,z===!0?1:2),b+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,y=g+1,_=t/m,x=i/g,M=[],T=[],L=[],S=[];for(let b=0;b<y;b++){const N=b*x-h;for(let P=0;P<p;P++){const z=P*_-c;T.push(z,-N,0),L.push(0,0,1),S.push(P/m),S.push(1-b/g)}}for(let b=0;b<g;b++)for(let N=0;N<m;N++){const P=N+p*b,z=N+p*(b+1),X=N+1+p*(b+1),O=N+1+p*b;M.push(P,z,O),M.push(z,X,O)}this.setIndex(M),this.setAttribute("position",new Un(T,3)),this.setAttribute("normal",new Un(L,3)),this.setAttribute("uv",new Un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.widthSegments,t.heightSegments)}}class ap extends li{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+m,Math.PI);let p=0;const y=[],_=new le,x=new le,M=[],T=[],L=[],S=[];for(let b=0;b<=s;b++){const N=[],P=b/s;let z=0;b===0&&h===0?z=.5/i:b===s&&g===Math.PI&&(z=-.5/i);for(let X=0;X<=i;X++){const O=X/i;_.x=-t*Math.cos(l+O*c)*Math.sin(h+P*m),_.y=t*Math.cos(h+P*m),_.z=t*Math.sin(l+O*c)*Math.sin(h+P*m),T.push(_.x,_.y,_.z),x.copy(_).normalize(),L.push(x.x,x.y,x.z),S.push(O+z,1-P),N.push(p++)}y.push(N)}for(let b=0;b<s;b++)for(let N=0;N<i;N++){const P=y[b][N+1],z=y[b][N],X=y[b+1][N],O=y[b+1][N+1];(b!==0||h>0)&&M.push(P,z,O),(b!==s-1||g<Math.PI)&&M.push(z,X,O)}this.setIndex(M),this.setAttribute("position",new Un(T,3)),this.setAttribute("normal",new Un(L,3)),this.setAttribute("uv",new Un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ap(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sp extends li{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const g=[],p=[],y=[],_=[],x=new le,M=new le,T=new le;for(let L=0;L<=s;L++){const S=h+L/s*m;for(let b=0;b<=l;b++){const N=b/l*c;M.x=(t+i*Math.cos(S))*Math.cos(N),M.y=(t+i*Math.cos(S))*Math.sin(N),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),x.x=t*Math.cos(N),x.y=t*Math.sin(N),T.subVectors(M,x).normalize(),y.push(T.x,T.y,T.z),_.push(b/l),_.push(L/s)}}for(let L=1;L<=s;L++)for(let S=1;S<=l;S++){const b=(l+1)*L+S-1,N=(l+1)*(L-1)+S-1,P=(l+1)*(L-1)+S,z=(l+1)*L+S;g.push(b,N,z),g.push(N,P,z)}this.setIndex(g),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Xr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(zx(l))l.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(zx(l[0])){const c=[];for(let h=0,m=l.length;h<m;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Kn(r){const t={};for(let i=0;i<r.length;i++){const s=Xr(r[i]);for(const l in s)t[l]=s[l]}return t}function zx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function kS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function jv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}const jS={clone:Xr,merge:Kn};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=GS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=kS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class VS extends Li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XS extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WS extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oc=new le,Pc=new Wr,Ji=new le;class Hv extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,Pc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Oc,Pc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new le,Ox=new Qt,Px=new Qt;class Ci extends Hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,i){return this.getViewBounds(t,Ox,Px),i.subVectors(Px,Ox)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Gv extends Hv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,m-=y*this.view.offsetY,g=m-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Pr=-90,Ir=1;class qS extends oi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Pr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new Ci(Pr,Ir,t,i);c.layers=this.layers,this.add(c);const h=new Ci(Pr,Ir,t,i);h.layers=this.layers,this.add(h);const m=new Ci(Pr,Ir,t,i);m.layers=this.layers,this.add(m);const g=new Ci(Pr,Ir,t,i);g.layers=this.layers,this.add(g);const p=new Ci(Pr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,m,g]=i;for(const p of i)this.remove(p);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,m,g,p,y]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=L,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,y),t.setRenderTarget(_,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class YS extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const up=class up{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};up.prototype.isMatrix2=!0;let Ix=up;function Fx(r,t,i,s){const l=ZS(s);switch(i){case wv:return r*t;case Rv:return r*t/l.components*l.byteLength;case Qh:return r*t/l.components*l.byteLength;case Xs:return r*t*2/l.components*l.byteLength;case Jh:return r*t*2/l.components*l.byteLength;case Cv:return r*t*3/l.components*l.byteLength;case Vi:return r*t*4/l.components*l.byteLength;case $h:return r*t*4/l.components*l.byteLength;case kc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dh:case hh:return Math.max(r,16)*Math.max(t,8)/4;case uh:case fh:return Math.max(r,8)*Math.max(t,8)/2;case ph:case mh:case xh:case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gh:case Wc:case _h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Th:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case zh:case Oh:case Ph:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ih:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qc:case Bh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZS(r){switch(r){case Ni:case Mv:return{byteLength:1,components:1};case Qo:case Ev:case La:return{byteLength:2,components:1};case Zh:case Kh:return{byteLength:2,components:4};case sa:case Yh:case ta:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function KS(r){const t=new WeakMap;function i(m,g){const p=m.array,y=m.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(g,x),r.bufferData(g,p,y),m.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:_}}function s(m,g,p){const y=g.array,_=g.updateRanges;if(r.bindBuffer(p,m),_.length===0)r.bufferSubData(p,0,y);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],L=_[M];L.start<=T.start+T.count+1?T.count=Math.max(T.count,L.start+L.count-T.start):(++x,_[x]=L)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const L=_[M];r.bufferSubData(p,L.start*y.BYTES_PER_ELEMENT,y,L.start,L.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(r.deleteBuffer(g.buffer),t.delete(m))}function h(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const y=t.get(m);(!y||y.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:h}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
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
#endif`,$S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
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
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SM=`vec3 transformedNormal = objectNormal;
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
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
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
#endif`,ZM=`uniform sampler2D dfgLUT;
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
}`,KM=`
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
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
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,s2=`#define DISTANCE
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
}`,r2=`#define DISTANCE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`uniform float scale;
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
}`,u2=`uniform vec3 diffuse;
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
}`,d2=`#include <common>
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
}`,f2=`uniform vec3 diffuse;
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
}`,h2=`#define LAMBERT
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
}`,p2=`#define LAMBERT
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
}`,m2=`#define MATCAP
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
}`,g2=`#define MATCAP
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
}`,x2=`#define NORMAL
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
}`,v2=`#define NORMAL
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
}`,_2=`#define PHONG
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
}`,b2=`#define PHONG
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
}`,y2=`#define STANDARD
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
}`,S2=`#define STANDARD
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
}`,M2=`#define TOON
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
}`,E2=`#define TOON
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
}`,T2=`uniform float size;
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
}`,A2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,C2=`uniform vec3 color;
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
}`,R2=`uniform float rotation;
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
}`,N2=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:$S,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:aM,batching_pars_vertex:sM,batching_vertex:rM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:dM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:xM,color_pars_vertex:vM,color_vertex:_M,common:bM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:SM,displacementmap_pars_vertex:MM,displacementmap_vertex:EM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:wM,colorspace_pars_fragment:CM,envmap_fragment:RM,envmap_common_pars_fragment:NM,envmap_pars_fragment:DM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:GM,envmap_vertex:UM,fog_vertex:zM,fog_pars_vertex:OM,fog_fragment:PM,fog_pars_fragment:IM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:BM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:jM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:XM,lights_phong_fragment:WM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:ZM,lights_fragment_begin:KM,lights_fragment_maps:QM,lights_fragment_end:JM,lightprobes_pars_fragment:$M,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:aE,map_pars_fragment:sE,map_particle_fragment:rE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:dE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:xE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:AE,premultiplied_alpha_fragment:wE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:NE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:zE,shadowmap_vertex:OE,shadowmask_pars_fragment:PE,skinbase_vertex:IE,skinning_pars_vertex:FE,skinning_vertex:BE,skinnormal_vertex:kE,specularmap_fragment:jE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:VE,transmission_fragment:XE,transmission_pars_fragment:WE,uv_pars_fragment:qE,uv_pars_vertex:YE,uv_vertex:ZE,worldpos_vertex:KE,background_vert:QE,background_frag:JE,backgroundCube_vert:$E,backgroundCube_frag:e2,cube_vert:t2,cube_frag:n2,depth_vert:i2,depth_frag:a2,distance_vert:s2,distance_frag:r2,equirect_vert:o2,equirect_frag:l2,linedashed_vert:c2,linedashed_frag:u2,meshbasic_vert:d2,meshbasic_frag:f2,meshlambert_vert:h2,meshlambert_frag:p2,meshmatcap_vert:m2,meshmatcap_frag:g2,meshnormal_vert:x2,meshnormal_frag:v2,meshphong_vert:_2,meshphong_frag:b2,meshphysical_vert:y2,meshphysical_frag:S2,meshtoon_vert:M2,meshtoon_frag:E2,points_vert:T2,points_frag:A2,shadow_vert:w2,shadow_frag:C2,sprite_vert:R2,sprite_frag:N2},Ye={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ea={basic:{uniforms:Kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Kn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Kn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Kn([Ye.points,Ye.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Kn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Kn([Ye.common,Ye.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Kn([Ye.sprite,Ye.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Kn([Ye.common,Ye.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Kn([Ye.lights,Ye.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};ea.physical={uniforms:Kn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Ic={r:0,b:0,g:0},D2=new Tn,Xv=new Mt;Xv.set(-1,0,0,0,1,0,0,0,1);function L2(r,t,i,s,l,c){const h=new kt(0);let m=l===!0?0:1,g,p,y=null,_=0,x=null;function M(N){let P=N.isScene===!0?N.background:null;if(P&&P.isTexture){const z=N.backgroundBlurriness>0;P=t.get(P,z)}return P}function T(N){let P=!1;const z=M(N);z===null?S(h,m):z&&z.isColor&&(S(z,1),P=!0);const X=r.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function L(N,P){const z=M(P);z&&(z.isCubeTexture||z.mapping===$c)?(p===void 0&&(p=new Qn(new nl(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Xr(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(X,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=z,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(P.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Xv),p.material.toneMapped=Pt.getTransfer(z.colorSpace)!==Kt,(y!==z||_!==z.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,y=z,_=z.version,x=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(g===void 0&&(g=new Qn(new il(2,2),new Li({name:"BackgroundMaterial",uniforms:Xr(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=z,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=Pt.getTransfer(z.colorSpace)!==Kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),g.material.uniforms.uvTransform.value.copy(z.matrix),(y!==z||_!==z.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,y=z,_=z.version,x=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function S(N,P){N.getRGB(Ic,jv(r)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,P,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,P=1){h.set(N),m=P,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,S(h,m)},render:T,addToRenderList:L,dispose:b}}function U2(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function m(H,Z,he,ge,W){let U=!1;const j=_(H,ge,he,Z);c!==j&&(c=j,p(c.object)),U=M(H,ge,he,W),U&&T(H,ge,he,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,z(H,Z,he,ge),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function g(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function y(H){return r.deleteVertexArray(H)}function _(H,Z,he,ge){const W=ge.wireframe===!0;let U=s[Z.id];U===void 0&&(U={},s[Z.id]=U);const j=H.isInstancedMesh===!0?H.id:0;let ne=U[j];ne===void 0&&(ne={},U[j]=ne);let be=ne[he.id];be===void 0&&(be={},ne[he.id]=be);let ie=be[W];return ie===void 0&&(ie=x(g()),be[W]=ie),ie}function x(H){const Z=[],he=[],ge=[];for(let W=0;W<i;W++)Z[W]=0,he[W]=0,ge[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:he,attributeDivisors:ge,object:H,attributes:{},index:null}}function M(H,Z,he,ge){const W=c.attributes,U=Z.attributes;let j=0;const ne=he.getAttributes();for(const be in ne)if(ne[be].location>=0){const D=W[be];let V=U[be];if(V===void 0&&(be==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),be==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),D===void 0||D.attribute!==V||V&&D.data!==V.data)return!0;j++}return c.attributesNum!==j||c.index!==ge}function T(H,Z,he,ge){const W={},U=Z.attributes;let j=0;const ne=he.getAttributes();for(const be in ne)if(ne[be].location>=0){let D=U[be];D===void 0&&(be==="instanceMatrix"&&H.instanceMatrix&&(D=H.instanceMatrix),be==="instanceColor"&&H.instanceColor&&(D=H.instanceColor));const V={};V.attribute=D,D&&D.data&&(V.data=D.data),W[be]=V,j++}c.attributes=W,c.attributesNum=j,c.index=ge}function L(){const H=c.newAttributes;for(let Z=0,he=H.length;Z<he;Z++)H[Z]=0}function S(H){b(H,0)}function b(H,Z){const he=c.newAttributes,ge=c.enabledAttributes,W=c.attributeDivisors;he[H]=1,ge[H]===0&&(r.enableVertexAttribArray(H),ge[H]=1),W[H]!==Z&&(r.vertexAttribDivisor(H,Z),W[H]=Z)}function N(){const H=c.newAttributes,Z=c.enabledAttributes;for(let he=0,ge=Z.length;he<ge;he++)Z[he]!==H[he]&&(r.disableVertexAttribArray(he),Z[he]=0)}function P(H,Z,he,ge,W,U,j){j===!0?r.vertexAttribIPointer(H,Z,he,W,U):r.vertexAttribPointer(H,Z,he,ge,W,U)}function z(H,Z,he,ge){L();const W=ge.attributes,U=he.getAttributes(),j=Z.defaultAttributeValues;for(const ne in U){const be=U[ne];if(be.location>=0){let ie=W[ne];if(ie===void 0&&(ne==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),ne==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor)),ie!==void 0){const D=ie.normalized,V=ie.itemSize,B=t.get(ie);if(B===void 0)continue;const xe=B.buffer,Ae=B.type,J=B.bytesPerElement,Ee=Ae===r.INT||Ae===r.UNSIGNED_INT||ie.gpuType===Yh;if(ie.isInterleavedBufferAttribute){const we=ie.data,We=we.stride,nt=ie.offset;if(we.isInstancedInterleavedBuffer){for(let et=0;et<be.locationSize;et++)b(be.location+et,we.meshPerAttribute);H.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let et=0;et<be.locationSize;et++)S(be.location+et);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let et=0;et<be.locationSize;et++)P(be.location+et,V/be.locationSize,Ae,D,We*J,(nt+V/be.locationSize*et)*J,Ee)}else{if(ie.isInstancedBufferAttribute){for(let we=0;we<be.locationSize;we++)b(be.location+we,ie.meshPerAttribute);H.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<be.locationSize;we++)S(be.location+we);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let we=0;we<be.locationSize;we++)P(be.location+we,V/be.locationSize,Ae,D,V*J,V/be.locationSize*we*J,Ee)}}else if(j!==void 0){const D=j[ne];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(be.location,D);break;case 3:r.vertexAttrib3fv(be.location,D);break;case 4:r.vertexAttrib4fv(be.location,D);break;default:r.vertexAttrib1fv(be.location,D)}}}}N()}function X(){I();for(const H in s){const Z=s[H];for(const he in Z){const ge=Z[he];for(const W in ge){const U=ge[W];for(const j in U)y(U[j].object),delete U[j];delete ge[W]}}delete s[H]}}function O(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const he in Z){const ge=Z[he];for(const W in ge){const U=ge[W];for(const j in U)y(U[j].object),delete U[j];delete ge[W]}}delete s[H.id]}function F(H){for(const Z in s){const he=s[Z];for(const ge in he){const W=he[ge];if(W[H.id]===void 0)continue;const U=W[H.id];for(const j in U)y(U[j].object),delete U[j];delete W[H.id]}}}function A(H){for(const Z in s){const he=s[Z],ge=H.isInstancedMesh===!0?H.id:0,W=he[ge];if(W!==void 0){for(const U in W){const j=W[U];for(const ne in j)y(j[ne].object),delete j[ne];delete W[U]}delete he[ge],Object.keys(he).length===0&&delete s[Z]}}}function I(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:I,resetDefaultState:K,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:L,enableAttribute:S,disableUnusedAttributes:N}}function z2(r,t,i){let s;function l(g){s=g}function c(g,p){r.drawArrays(s,g,p),i.update(p,s,1)}function h(g,p,y){y!==0&&(r.drawArraysInstanced(s,g,p,y),i.update(p,s,y))}function m(g,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,y);let x=0;for(let M=0;M<y;M++)x+=p[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function O2(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Vi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(F){const A=F===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ta&&!A)}function g(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=g(p);y!==p&&(_t("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:L,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:z,maxSamples:X,samples:O}}function P2(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Bs,m=new Mt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=y(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,L=_.clipIntersection,S=_.clipShadows,b=r.get(_);if(!l||T===null||T.length===0||c&&!S)c?y(null):p();else{const N=c?0:s,P=N*4;let z=b.clippingState||null;g.value=z,z=y(T,x,P,M);for(let X=0;X!==P;++X)z[X]=i[X];b.clippingState=z,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(_,x,M,T){const L=_!==null?_.length:0;let S=null;if(L!==0){if(S=g.value,T!==!0||S===null){const b=M+L*4,N=x.matrixWorldInverse;m.getNormalMatrix(N),(S===null||S.length<b)&&(S=new Float32Array(b));for(let P=0,z=M;P!==L;++P,z+=4)h.copy(_[P]).applyMatrix4(N,m),h.normal.toArray(S,z),S[z+3]=h.constant}g.value=S,g.needsUpdate=!0}return t.numPlanes=L,t.numIntersection=0,S}}const ds=4,Bx=[.125,.215,.35,.446,.526,.582],js=20,I2=256,Go=new Gv,kx=new kt;let Xf=null,Wf=0,qf=0,Yf=!1;const F2=new le;class jx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:m=F2}=c;Xf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xf,Wf,qf),this._renderer.xr.enabled=Yf,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:La,format:Vi,colorSpace:Yc,depthBuffer:!1},l=Hx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B2(c)),this._blurMaterial=j2(c,t,i),this._ggxMaterial=k2(c,t,i)}return l}_compileMaterial(t){const i=new Qn(new li,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,s,l,c){const g=new Ci(90,1,i,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(kx),_.toneMapping=ia,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new nl,new Br({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,S=L.material;let b=!1;const N=t.background;N?N.isColor&&(S.color.copy(N),t.background=null,b=!0):(S.color.copy(kx),b=!0);for(let P=0;P<6;P++){const z=P%3;z===0?(g.up.set(0,p[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+y[P],c.y,c.z)):z===1?(g.up.set(0,0,p[P]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+y[P],c.z)):(g.up.set(0,p[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+y[P]));const X=this._cubeSize;Fr(l,z*X,P>2?X:0,X,X),_.setRenderTarget(l),b&&_.render(L,g),_.render(t,g)}_.toneMapping=M,_.autoClear=x,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Fr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Go)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[s];m.material=h;const g=h.uniforms,p=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-y*y),x=0+p*1.25,M=_*x,{_lodMax:T}=this,L=this._sizeLods[s],S=3*L*(s>T-ds?s-T+ds:0),b=4*(this._cubeSize-L);g.envMap.value=t.texture,g.roughness.value=M,g.mipInt.value=T-i,Fr(c,S,b,3*L,2*L),l.setRenderTarget(c),l.render(m,Go),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Fr(t,S,b,3*L,2*L),l.setRenderTarget(t),l.render(m,Go)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,m){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*js-1),L=c/T,S=isFinite(c)?1+Math.floor(y*L):js;S>js&&_t(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${js}`);const b=[];let N=0;for(let F=0;F<js;++F){const A=F/L,I=Math.exp(-A*A/2);b.push(I),F===0?N+=I:F<S&&(N+=2*I)}for(let F=0;F<b.length;F++)b[F]=b[F]/N;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=b,x.latitudinal.value=h==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-s;const z=this._sizeLods[l],X=3*z*(l>P-ds?l-P+ds:0),O=4*(this._cubeSize-z);Fr(i,X,O,3*z,2*z),g.setRenderTarget(i),g.render(_,Go)}}function B2(r){const t=[],i=[],s=[];let l=r;const c=r-ds+1+Bx.length;for(let h=0;h<c;h++){const m=Math.pow(2,l);t.push(m);let g=1/m;h>r-ds?g=Bx[h-r+ds-1]:h===0&&(g=0),i.push(g);const p=1/(m-2),y=-p,_=1+p,x=[y,y,_,y,_,_,y,y,_,_,y,_],M=6,T=6,L=3,S=2,b=1,N=new Float32Array(L*T*M),P=new Float32Array(S*T*M),z=new Float32Array(b*T*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,A=O>2?0:-1,I=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];N.set(I,L*T*O),P.set(x,S*T*O);const K=[O,O,O,O,O,O];z.set(K,b*T*O)}const X=new li;X.setAttribute("position",new Di(N,L)),X.setAttribute("uv",new Di(P,S)),X.setAttribute("faceIndex",new Di(z,b)),s.push(new Qn(X,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Hx(r,t,i){const s=new aa(r,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function k2(r,t,i){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function j2(r,t,i){const s=new Float32Array(js),l=new le(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Gx(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Vx(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class Wv extends aa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new Li({name:"CubemapFromEquirect",uniforms:Xr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:Na});c.uniforms.tEquirect.value=i;const h=new Qn(l,c),m=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Vn),new qS(1,10,this).update(t,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function H2(r){let t=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?h(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===vf||M===_f)if(t.has(x)){const T=t.get(x).texture;return m(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const L=new Wv(T.height);return L.fromEquirectangularTexture(r,x),t.set(x,L),x.addEventListener("dispose",p),m(L.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture){const M=x.mapping,T=M===vf||M===_f,L=M===Vs||M===Gr;if(T||L){let S=i.get(x);const b=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return s===null&&(s=new jx(r)),S=T?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const N=x.image;return T&&N&&N.height>0||L&&N&&g(N)?(s===null&&(s=new jx(r)),S=T?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",y),S.texture):null}}}return x}function m(x,M){return M===vf?x.mapping=Vs:M===_f&&(x.mapping=Gr),x}function g(x){let M=0;const T=6;for(let L=0;L<T;L++)x[L]!==void 0&&M++;return M===T}function p(x){const M=x.target;M.removeEventListener("dispose",p);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function G2(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kh("WebGLRenderer: "+s+" extension not supported."),l}}}function V2(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function g(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let L=0;if(T===void 0)return;if(M!==null){const N=M.array;L=M.version;for(let P=0,z=N.length;P<z;P+=3){const X=N[P+0],O=N[P+1],F=N[P+2];x.push(X,O,O,F,F,X)}}else{const N=T.array;L=T.version;for(let P=0,z=N.length/3-1;P<z;P+=3){const X=P+0,O=P+1,F=P+2;x.push(X,O,O,F,F,X)}}const S=new(T.count>=65535?Ov:zv)(x,1);S.version=L;const b=c.get(_);b&&t.remove(b),c.set(_,S)}function y(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:m,update:g,getWireframeAttribute:y}}function X2(r,t,i){let s;function l(_){s=_}let c,h;function m(_){c=_.type,h=_.bytesPerElement}function g(_,x){r.drawElements(s,x,c,_*h),i.update(x,s,1)}function p(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*h,M),i.update(x,s,M))}function y(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let L=0;for(let S=0;S<M;S++)L+=x[S];i.update(L,s,1)}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=y}function W2(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,m){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:Ht("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function q2(r,t,i){const s=new WeakMap,l=new _n;function c(h,m,g){const p=h.morphTargetInfluences,y=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=y!==void 0?y.length:0;let x=s.get(m);if(x===void 0||x.count!==_){let K=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",K)};var M=K;x!==void 0&&x.texture.dispose();const T=m.morphAttributes.position!==void 0,L=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,b=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],P=m.morphAttributes.color||[];let z=0;T===!0&&(z=1),L===!0&&(z=2),S===!0&&(z=3);let X=m.attributes.position.count*z,O=1;X>t.maxTextureSize&&(O=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const F=new Float32Array(X*O*4*_),A=new Dv(F,X,O,_);A.type=ta,A.needsUpdate=!0;const I=z*4;for(let H=0;H<_;H++){const Z=b[H],he=N[H],ge=P[H],W=X*O*4*H;for(let U=0;U<Z.count;U++){const j=U*I;T===!0&&(l.fromBufferAttribute(Z,U),F[W+j+0]=l.x,F[W+j+1]=l.y,F[W+j+2]=l.z,F[W+j+3]=0),L===!0&&(l.fromBufferAttribute(he,U),F[W+j+4]=l.x,F[W+j+5]=l.y,F[W+j+6]=l.z,F[W+j+7]=0),S===!0&&(l.fromBufferAttribute(ge,U),F[W+j+8]=l.x,F[W+j+9]=l.y,F[W+j+10]=l.z,F[W+j+11]=ge.itemSize===4?l.w:1)}}x={count:_,texture:A,size:new Qt(X,O)},s.set(m,x),m.addEventListener("dispose",K)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const L=m.morphTargetsRelative?1:1-T;g.getUniforms().setValue(r,"morphTargetBaseInfluence",L),g.getUniforms().setValue(r,"morphTargetInfluences",p)}g.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Y2(r,t,i,s,l){let c=new WeakMap;function h(p){const y=l.render.frame,_=p.geometry,x=t.get(p,_);if(c.get(x)!==y&&(t.update(x),c.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==y&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return x}function m(){c=new WeakMap}function g(p){const y=p.target;y.removeEventListener("dispose",g),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:m}}const Z2={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[xv]:"CINEON_TONE_MAPPING",[vv]:"ACES_FILMIC_TONE_MAPPING",[bv]:"AGX_TONE_MAPPING",[yv]:"NEUTRAL_TONE_MAPPING",[_v]:"CUSTOM_TONE_MAPPING"};function K2(r,t,i,s,l){const c=new aa(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Vr(t,i):void 0}),h=new aa(t,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),m=new li;m.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Un([0,2,0,0,2,0],2));const g=new VS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Qn(m,g),y=new Gv(-1,1,1,-1,0,1);let _=null,x=null,M=!1,T,L=null,S=[],b=!1;this.setSize=function(N,P){c.setSize(N,P),h.setSize(N,P);for(let z=0;z<S.length;z++){const X=S[z];X.setSize&&X.setSize(N,P)}},this.setEffects=function(N){S=N,b=S.length>0&&S[0].isRenderPass===!0;const P=c.width,z=c.height;for(let X=0;X<S.length;X++){const O=S[X];O.setSize&&O.setSize(P,z)}},this.begin=function(N,P){if(M||N.toneMapping===ia&&S.length===0)return!1;if(L=P,P!==null){const z=P.width,X=P.height;(c.width!==z||c.height!==X)&&this.setSize(z,X)}return b===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=ia,!0},this.hasRenderPass=function(){return b},this.end=function(N,P){N.toneMapping=T,M=!0;let z=c,X=h;for(let O=0;O<S.length;O++){const F=S[O];if(F.enabled!==!1&&(F.render(N,X,z,P),F.needsSwap!==!1)){const A=z;z=X,X=A}}if(_!==N.outputColorSpace||x!==N.toneMapping){_=N.outputColorSpace,x=N.toneMapping,g.defines={},Pt.getTransfer(_)===Kt&&(g.defines.SRGB_TRANSFER="");const O=Z2[x];O&&(g.defines[O]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=z.texture,N.setRenderTarget(L),N.render(p,y),L=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),m.dispose(),g.dispose()}}const qv=new Xn,Gh=new Vr(1,1),Yv=new Dv,Zv=new _S,Kv=new Bv,Xx=[],Wx=[],qx=new Float32Array(16),Yx=new Float32Array(9),Zx=new Float32Array(4);function qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Xx[l];if(c===void 0&&(c=new Float32Array(l),Xx[l]=c),t!==0){s.toArray(c,0);for(let h=1,m=0;h!==t;++h)m+=i,r[h].toArray(c,m)}return c}function Rn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Nn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function nu(r,t){let i=Wx[t];i===void 0&&(i=new Int32Array(t),Wx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Q2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function J2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2fv(this.addr,t),Nn(i,t)}}function $2(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;r.uniform3fv(this.addr,t),Nn(i,t)}}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4fv(this.addr,t),Nn(i,t)}}function tT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Nn(i,t)}else{if(Rn(i,s))return;Zx.set(s),r.uniformMatrix2fv(this.addr,!1,Zx),Nn(i,s)}}function nT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Nn(i,t)}else{if(Rn(i,s))return;Yx.set(s),r.uniformMatrix3fv(this.addr,!1,Yx),Nn(i,s)}}function iT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Nn(i,t)}else{if(Rn(i,s))return;qx.set(s),r.uniformMatrix4fv(this.addr,!1,qx),Nn(i,s)}}function aT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2iv(this.addr,t),Nn(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3iv(this.addr,t),Nn(i,t)}}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4iv(this.addr,t),Nn(i,t)}}function lT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2uiv(this.addr,t),Nn(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3uiv(this.addr,t),Nn(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4uiv(this.addr,t),Nn(i,t)}}function fT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?tp:ep,c=Gh):c=qv,i.setTexture2D(t||c,l)}function hT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Zv,l)}function pT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Kv,l)}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Yv,l)}function gT(r){switch(r){case 5126:return Q2;case 35664:return J2;case 35665:return $2;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return sT;case 35668:case 35672:return rT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function xT(r,t){r.uniform1fv(this.addr,t)}function vT(r,t){const i=qr(t,this.size,2);r.uniform2fv(this.addr,i)}function _T(r,t){const i=qr(t,this.size,3);r.uniform3fv(this.addr,i)}function bT(r,t){const i=qr(t,this.size,4);r.uniform4fv(this.addr,i)}function yT(r,t){const i=qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ST(r,t){const i=qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MT(r,t){const i=qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ET(r,t){r.uniform1iv(this.addr,t)}function TT(r,t){r.uniform2iv(this.addr,t)}function AT(r,t){r.uniform3iv(this.addr,t)}function wT(r,t){r.uniform4iv(this.addr,t)}function CT(r,t){r.uniform1uiv(this.addr,t)}function RT(r,t){r.uniform2uiv(this.addr,t)}function NT(r,t){r.uniform3uiv(this.addr,t)}function DT(r,t){r.uniform4uiv(this.addr,t)}function LT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Gh:h=qv;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||h,c[m])}function UT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Zv,c[h])}function zT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Kv,c[h])}function OT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Yv,c[h])}function PT(r){switch(r){case 5126:return xT;case 35664:return vT;case 35665:return _T;case 35666:return bT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return RT;case 36295:return NT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return OT}}class IT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gT(i.type)}}class FT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class BT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Zf=/(\w+)(\])?(\[|\.)?/g;function Kx(r,t){r.seq.push(t),r.map[t.id]=t}function kT(r,t,i){const s=r.name,l=s.length;for(Zf.lastIndex=0;;){const c=Zf.exec(s),h=Zf.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&h+2===l){Kx(i,p===void 0?new IT(m,r,t):new FT(m,r,t));break}else{let _=i.map[m];_===void 0&&(_=new BT(m),Kx(i,_)),i=_}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const m=t.getActiveUniform(i,h),g=t.getUniformLocation(i,m.name);kT(m,g,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Qx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const jT=37297;let HT=0;function GT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const m=h+1;s.push(`${m===t?">":" "} ${m}: ${i[h]}`)}return s.join(`
`)}const Jx=new Mt;function VT(r){Pt._getMatrix(Jx,Pt.workingColorSpace,r);const t=`mat3( ${Jx.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $x(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+GT(r.getShaderSource(t),m)}else return c}function XT(r,t){const i=VT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WT={[mv]:"Linear",[gv]:"Reinhard",[xv]:"Cineon",[vv]:"ACESFilmic",[bv]:"AgX",[yv]:"Neutral",[_v]:"Custom"};function qT(r,t){const i=WT[t];return i===void 0?(_t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new le;function YT(){Pt.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function KT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function QT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:m}}return i}function qo(r){return r!==""}function ev(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(r){return r.replace(JT,eA)}const $T=new Map;function eA(r,t){let i=Rt[t];if(i===void 0){const s=$T.get(t);if(s!==void 0)i=Rt[s],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Vh(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(r){return r.replace(tA,nA)}function nA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function iv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const iA={[Bc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function aA(r){return iA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sA={[Vs]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function rA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":sA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const oA={[Gr]:"ENVMAP_MODE_REFRACTION"};function lA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cA={[pv]:"ENVMAP_BLENDING_MULTIPLY",[J1]:"ENVMAP_BLENDING_MIX",[$1]:"ENVMAP_BLENDING_ADD"};function uA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cA[r.combine]||"ENVMAP_BLENDING_NONE"}function dA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,m=i.fragmentShader;const g=aA(i),p=rA(i),y=lA(i),_=uA(i),x=dA(i),M=ZT(i),T=KT(c),L=l.createProgram();let S,b,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),b.length>0&&(b+=`
`)):(S=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),b=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?Rt.tonemapping_pars_fragment:"",i.toneMapping!==ia?qT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),YT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Vh(h),h=ev(h,i),h=tv(h,i),m=Vh(m),m=ev(m,i),m=tv(m,i),h=nv(h),m=nv(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",i.glslVersion===mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const P=N+S+h,z=N+b+m,X=Qx(l,l.VERTEX_SHADER,P),O=Qx(l,l.FRAGMENT_SHADER,z);l.attachShader(L,X),l.attachShader(L,O),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function F(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(L)||"",he=l.getShaderInfoLog(X)||"",ge=l.getShaderInfoLog(O)||"",W=Z.trim(),U=he.trim(),j=ge.trim();let ne=!0,be=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,L,X,O);else{const ie=$x(l,X,"vertex"),D=$x(l,O,"fragment");Ht("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+ie+`
`+D)}else W!==""?_t("WebGLProgram: Program Info Log:",W):(U===""||j==="")&&(be=!1);be&&(H.diagnostics={runnable:ne,programLog:W,vertexShader:{log:U,prefix:S},fragmentShader:{log:j,prefix:b}})}l.deleteShader(X),l.deleteShader(O),A=new Vc(l,L),I=QT(l,L)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(L,jT)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=L,this.vertexShader=X,this.fragmentShader=O,this}let hA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new mA(t),i.set(t,s)),s}}class mA{constructor(t){this.id=hA++,this.code=t,this.usedTimes=0}}function gA(r){return r===Xs||r===Wc||r===qc}function xA(r,t,i,s,l,c){const h=new Lv,m=new pA,g=new Set,p=[],y=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return g.add(A),A===0?"uv":`uv${A}`}function L(A,I,K,H,Z,he){const ge=H.fog,W=Z.geometry,U=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=t.get(A.envMap||U,j),be=ne&&ne.mapping===$c?ne.image.height:null,ie=M[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&_t("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,V=D!==void 0?D.length:0;let B=0;W.morphAttributes.position!==void 0&&(B=1),W.morphAttributes.normal!==void 0&&(B=2),W.morphAttributes.color!==void 0&&(B=3);let xe,Ae,J,Ee;if(ie){const lt=ea[ie];xe=lt.vertexShader,Ae=lt.fragmentShader}else xe=A.vertexShader,Ae=A.fragmentShader,m.update(A),J=m.getVertexShaderID(A),Ee=m.getFragmentShaderID(A);const we=r.getRenderTarget(),We=r.state.buffers.depth.getReversed(),nt=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,Et=!!A.map,ft=!!A.matcap,dt=!!ne,At=!!A.aoMap,it=!!A.lightMap,Ft=!!A.bumpMap,Nt=!!A.normalMap,hn=!!A.displacementMap,Q=!!A.emissiveMap,Qe=!!A.metalnessMap,at=!!A.roughnessMap,rt=A.anisotropy>0,Le=A.clearcoat>0,ot=A.dispersion>0,R=A.iridescence>0,E=A.sheen>0,ee=A.transmission>0,Se=rt&&!!A.anisotropyMap,Re=Le&&!!A.clearcoatMap,Oe=Le&&!!A.clearcoatNormalMap,Pe=Le&&!!A.clearcoatRoughnessMap,ve=R&&!!A.iridescenceMap,ae=R&&!!A.iridescenceThicknessMap,Fe=E&&!!A.sheenColorMap,je=E&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Ie=!!A.specularColorMap,ht=!!A.specularIntensityMap,pt=ee&&!!A.transmissionMap,Ct=ee&&!!A.thicknessMap,q=!!A.gradientMap,ze=!!A.alphaMap,ye=A.alphaTest>0,Ve=!!A.alphaHash,ke=!!A.extensions;let Ne=ia;A.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const $e={shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:xe,fragmentShader:Ae,defines:A.defines,customVertexShaderID:J,customFragmentShaderID:Ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:nt,instancingColor:nt&&Z.instanceColor!==null,instancingMorph:nt&&Z.morphTexture!==null,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Et,matcap:ft,envMap:dt,envMapMode:dt&&ne.mapping,envMapCubeUVHeight:be,aoMap:At,lightMap:it,bumpMap:Ft,normalMap:Nt,displacementMap:hn,emissiveMap:Q,normalMapObjectSpace:Nt&&A.normalMapType===nS,normalMapTangentSpace:Nt&&A.normalMapType===fx,packedNormalMap:Nt&&A.normalMapType===fx&&gA(A.normalMap.format),metalnessMap:Qe,roughnessMap:at,anisotropy:rt,anisotropyMap:Se,clearcoat:Le,clearcoatMap:Re,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Pe,dispersion:ot,iridescence:R,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:E,sheenColorMap:Fe,sheenRoughnessMap:je,specularMap:Be,specularColorMap:Ie,specularIntensityMap:ht,transmission:ee,transmissionMap:pt,thicknessMap:Ct,gradientMap:q,opaque:A.transparent===!1&&A.blending===kr&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:Ve,combine:A.combine,mapUv:Et&&T(A.map.channel),aoMapUv:At&&T(A.aoMap.channel),lightMapUv:it&&T(A.lightMap.channel),bumpMapUv:Ft&&T(A.bumpMap.channel),normalMapUv:Nt&&T(A.normalMap.channel),displacementMapUv:hn&&T(A.displacementMap.channel),emissiveMapUv:Q&&T(A.emissiveMap.channel),metalnessMapUv:Qe&&T(A.metalnessMap.channel),roughnessMapUv:at&&T(A.roughnessMap.channel),anisotropyMapUv:Se&&T(A.anisotropyMap.channel),clearcoatMapUv:Re&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(A.sheenRoughnessMap.channel),specularMapUv:Be&&T(A.specularMap.channel),specularColorMapUv:Ie&&T(A.specularColorMap.channel),specularIntensityMapUv:ht&&T(A.specularIntensityMap.channel),transmissionMapUv:pt&&T(A.transmissionMap.channel),thicknessMapUv:Ct&&T(A.thicknessMap.channel),alphaMapUv:ze&&T(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Nt||rt),vertexNormals:!!W.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(Et||ze),fog:!!ge,useFog:A.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||W.attributes.normal===void 0&&Nt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:We,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:B,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Et&&A.map.isVideoTexture===!0&&Pt.getTransfer(A.map.colorSpace)===Kt,decodeVideoTextureEmissive:Q&&A.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(A.emissiveMap.colorSpace)===Kt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ri,flipSided:A.side===ri,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ke&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&A.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return $e.vertexUv1s=g.has(1),$e.vertexUv2s=g.has(2),$e.vertexUv3s=g.has(3),g.clear(),$e}function S(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)I.push(K),I.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(b(I,A),N(I,A),I.push(r.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function b(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function N(A,I){h.disableAll(),I.instancing&&h.enable(0),I.instancingColor&&h.enable(1),I.instancingMorph&&h.enable(2),I.matcap&&h.enable(3),I.envMap&&h.enable(4),I.normalMapObjectSpace&&h.enable(5),I.normalMapTangentSpace&&h.enable(6),I.clearcoat&&h.enable(7),I.iridescence&&h.enable(8),I.alphaTest&&h.enable(9),I.vertexColors&&h.enable(10),I.vertexAlphas&&h.enable(11),I.vertexUv1s&&h.enable(12),I.vertexUv2s&&h.enable(13),I.vertexUv3s&&h.enable(14),I.vertexTangents&&h.enable(15),I.anisotropy&&h.enable(16),I.alphaHash&&h.enable(17),I.batching&&h.enable(18),I.dispersion&&h.enable(19),I.batchingColor&&h.enable(20),I.gradientMap&&h.enable(21),I.packedNormalMap&&h.enable(22),I.vertexNormals&&h.enable(23),A.push(h.mask),h.disableAll(),I.fog&&h.enable(0),I.useFog&&h.enable(1),I.flatShading&&h.enable(2),I.logarithmicDepthBuffer&&h.enable(3),I.reversedDepthBuffer&&h.enable(4),I.skinning&&h.enable(5),I.morphTargets&&h.enable(6),I.morphNormals&&h.enable(7),I.morphColors&&h.enable(8),I.premultipliedAlpha&&h.enable(9),I.shadowMapEnabled&&h.enable(10),I.doubleSided&&h.enable(11),I.flipSided&&h.enable(12),I.useDepthPacking&&h.enable(13),I.dithering&&h.enable(14),I.transmission&&h.enable(15),I.sheen&&h.enable(16),I.opaque&&h.enable(17),I.pointsUvs&&h.enable(18),I.decodeVideoTexture&&h.enable(19),I.decodeVideoTextureEmissive&&h.enable(20),I.alphaToCoverage&&h.enable(21),I.numLightProbeGrids>0&&h.enable(22),A.push(h.mask)}function P(A){const I=M[A.type];let K;if(I){const H=ea[I];K=jS.clone(H.uniforms)}else K=A.uniforms;return K}function z(A,I){let K=y.get(I);return K!==void 0?++K.usedTimes:(K=new fA(r,I,A,l),p.push(K),y.set(I,K)),K}function X(A){if(--A.usedTimes===0){const I=p.indexOf(A);p[I]=p[p.length-1],p.pop(),y.delete(A.cacheKey),A.destroy()}}function O(A){m.remove(A)}function F(){m.dispose()}return{getParameters:L,getProgramCacheKey:S,getUniforms:P,acquireProgram:z,releaseProgram:X,releaseShaderCache:O,programs:p,dispose:F}}function vA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let m=r.get(h);return m===void 0&&(m={},r.set(h,m)),m}function s(h){r.delete(h)}function l(h,m,g){r.get(h)[m]=g}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function _A(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function m(x,M,T,L,S,b){let N=r[t];return N===void 0?(N={id:x.id,object:x,geometry:M,material:T,materialVariant:h(x),groupOrder:L,renderOrder:x.renderOrder,z:S,group:b},r[t]=N):(N.id=x.id,N.object=x,N.geometry=M,N.material=T,N.materialVariant=h(x),N.groupOrder=L,N.renderOrder=x.renderOrder,N.z=S,N.group=b),t++,N}function g(x,M,T,L,S,b){const N=m(x,M,T,L,S,b);T.transmission>0?s.push(N):T.transparent===!0?l.push(N):i.push(N)}function p(x,M,T,L,S,b){const N=m(x,M,T,L,S,b);T.transmission>0?s.unshift(N):T.transparent===!0?l.unshift(N):i.unshift(N)}function y(x,M){i.length>1&&i.sort(x||_A),s.length>1&&s.sort(M||av),l.length>1&&l.sort(M||av)}function _(){for(let x=t,M=r.length;x<M;x++){const T=r[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:_,sort:y}}function bA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new sv,r.set(s,[h])):l>=c.length?(h=new sv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new le,color:new kt};break;case"SpotLight":i={position:new le,direction:new le,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[t.id]=i,i}}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let MA=0;function EA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TA(r){const t=new yA,i=SA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new Tn,h=new Tn;function m(p){let y=0,_=0,x=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let M=0,T=0,L=0,S=0,b=0,N=0,P=0,z=0,X=0,O=0,F=0;p.sort(EA);for(let I=0,K=p.length;I<K;I++){const H=p[I],Z=H.color,he=H.intensity,ge=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xs?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)y+=Z.r*he,_+=Z.g*he,x+=Z.b*he;else if(H.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(H.sh.coefficients[U],he);F++}else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,ne=i.get(H);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,s.directionalShadow[M]=ne,s.directionalShadowMap[M]=W,s.directionalShadowMatrix[M]=H.shadow.matrix,N++}s.directional[M]=U,M++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(Z).multiplyScalar(he),U.distance=ge,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,s.spot[L]=U;const j=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,j.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[L]=j.matrix,H.castShadow){const ne=i.get(H);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,s.spotShadow[L]=ne,s.spotShadowMap[L]=W,z++}L++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy(Z).multiplyScalar(he),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=U,S++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const j=H.shadow,ne=i.get(H);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,s.pointShadow[T]=ne,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=H.shadow.matrix,P++}s.point[T]=U,T++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar(he),U.groundColor.copy(H.groundColor).multiplyScalar(he),s.hemi[b]=U,b++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=x;const A=s.hash;(A.directionalLength!==M||A.pointLength!==T||A.spotLength!==L||A.rectAreaLength!==S||A.hemiLength!==b||A.numDirectionalShadows!==N||A.numPointShadows!==P||A.numSpotShadows!==z||A.numSpotMaps!==X||A.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=L,s.rectArea.length=S,s.point.length=T,s.hemi.length=b,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=z+X-O,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,A.directionalLength=M,A.pointLength=T,A.spotLength=L,A.rectAreaLength=S,A.hemiLength=b,A.numDirectionalShadows=N,A.numPointShadows=P,A.numSpotShadows=z,A.numSpotMaps=X,A.numLightProbes=F,s.version=MA++)}function g(p,y){let _=0,x=0,M=0,T=0,L=0;const S=y.matrixWorldInverse;for(let b=0,N=p.length;b<N;b++){const P=p[b];if(P.isDirectionalLight){const z=s.directional[_];z.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),_++}else if(P.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const z=s.rectArea[T];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),h.identity(),c.copy(P.matrixWorld),c.premultiply(S),h.extractRotation(c),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),T++}else if(P.isPointLight){const z=s.point[x];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const z=s.hemi[L];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),L++}}}return{setup:m,setupView:g,state:s}}function rv(r){const t=new TA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function h(x){i.push(x)}function m(x){s.push(x)}function g(x){l.push(x)}function p(){t.setup(i)}function y(x){t.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:y,pushLight:h,pushShadow:m,pushLightProbeGrid:g}}function AA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let m;return h===void 0?(m=new rv(r),t.set(l,[m])):c>=h.length?(m=new rv(r),h.push(m)):m=h[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`,RA=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],NA=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],ov=new Tn,Vo=new le,Kf=new le;function DA(r,t,i){let s=new Iv;const l=new Qt,c=new Qt,h=new _n,m=new XS,g=new WS,p={},y=i.maxTextureSize,_={[fs]:ri,[ri]:fs,[Ri]:Ri},x=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:wA,fragmentShader:CA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new li;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Qn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let b=this.type;this.render=function(O,F,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===U1&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const I=r.getRenderTarget(),K=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Na),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const he=b!==this.type;he&&F.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(W=>W.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,W=O.length;ge<W;ge++){const U=O[ge],j=U.shadow;if(j===void 0){_t("WebGLShadowMap:",U,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ne=j.getFrameExtents();l.multiply(ne),c.copy(j.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/ne.x),l.x=c.x*ne.x,j.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/ne.y),l.y=c.y*ne.y,j.mapSize.y=c.y));const be=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=be,j.map===null||he===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Wo){if(U.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new aa(l.x,l.y,{format:Xs,type:La,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),j.map.texture.name=U.name+".shadowMap",j.map.depthTexture=new Vr(l.x,l.y,ta),j.map.depthTexture.name=U.name+".shadowMapDepth",j.map.depthTexture.format=Ua,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bn,j.map.depthTexture.magFilter=Bn}else U.isPointLight?(j.map=new Wv(l.x),j.map.depthTexture=new BS(l.x,sa)):(j.map=new aa(l.x,l.y),j.map.depthTexture=new Vr(l.x,l.y,sa)),j.map.depthTexture.name=U.name+".shadowMap",j.map.depthTexture.format=Ua,this.type===Bc?(j.map.depthTexture.compareFunction=be?tp:ep,j.map.depthTexture.minFilter=Vn,j.map.depthTexture.magFilter=Vn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bn,j.map.depthTexture.magFilter=Bn);j.camera.updateProjectionMatrix()}const ie=j.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<ie;D++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,D),r.clear();else{D===0&&(r.setRenderTarget(j.map),r.clear());const V=j.getViewport(D);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),Z.viewport(h)}if(U.isPointLight){const V=j.camera,B=j.matrix,xe=U.distance||V.far;xe!==V.far&&(V.far=xe,V.updateProjectionMatrix()),Vo.setFromMatrixPosition(U.matrixWorld),V.position.copy(Vo),Kf.copy(V.position),Kf.add(RA[D]),V.up.copy(NA[D]),V.lookAt(Kf),V.updateMatrixWorld(),B.makeTranslation(-Vo.x,-Vo.y,-Vo.z),ov.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ov,V.coordinateSystem,V.reversedDepth)}else j.updateMatrices(U);s=j.getFrustum(),z(F,A,j.camera,U,this.type)}j.isPointLightShadow!==!0&&this.type===Wo&&N(j,A),j.needsUpdate=!1}b=this.type,S.needsUpdate=!1,r.setRenderTarget(I,K,H)};function N(O,F){const A=t.update(L);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new aa(l.x,l.y,{format:Xs,type:La})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,A,x,L,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,A,M,L,null)}function P(O,F,A,I){let K=null;const H=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)K=H;else if(K=A.isPointLight===!0?g:m,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=K.uuid,he=F.uuid;let ge=p[Z];ge===void 0&&(ge={},p[Z]=ge);let W=ge[he];W===void 0&&(W=K.clone(),ge[he]=W,F.addEventListener("dispose",X)),K=W}if(K.visible=F.visible,K.wireframe=F.wireframe,I===Wo?K.side=F.shadowSide!==null?F.shadowSide:F.side:K.side=F.shadowSide!==null?F.shadowSide:_[F.side],K.alphaMap=F.alphaMap,K.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,K.map=F.map,K.clipShadows=F.clipShadows,K.clippingPlanes=F.clippingPlanes,K.clipIntersection=F.clipIntersection,K.displacementMap=F.displacementMap,K.displacementScale=F.displacementScale,K.displacementBias=F.displacementBias,K.wireframeLinewidth=F.wireframeLinewidth,K.linewidth=F.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const Z=r.properties.get(K);Z.light=A}return K}function z(O,F,A,I,K){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===Wo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const he=t.update(O),ge=O.material;if(Array.isArray(ge)){const W=he.groups;for(let U=0,j=W.length;U<j;U++){const ne=W[U],be=ge[ne.materialIndex];if(be&&be.visible){const ie=P(O,be,I,K);O.onBeforeShadow(r,O,F,A,he,ie,ne),r.renderBufferDirect(A,null,he,ie,O,ne),O.onAfterShadow(r,O,F,A,he,ie,ne)}}}else if(ge.visible){const W=P(O,ge,I,K);O.onBeforeShadow(r,O,F,A,he,W,null),r.renderBufferDirect(A,null,he,W,O,null),O.onAfterShadow(r,O,F,A,he,W,null)}}const Z=O.children;for(let he=0,ge=Z.length;he<ge;he++)z(Z[he],F,A,I,K)}function X(O){O.target.removeEventListener("dispose",X);for(const A in p){const I=p[A],K=O.target.uuid;K in I&&(I[K].dispose(),delete I[K])}}}function LA(r,t){function i(){let q=!1;const ze=new _n;let ye=null;const Ve=new _n(0,0,0,0);return{setMask:function(ke){ye!==ke&&!q&&(r.colorMask(ke,ke,ke,ke),ye=ke)},setLocked:function(ke){q=ke},setClear:function(ke,Ne,$e,lt,jt){jt===!0&&(ke*=lt,Ne*=lt,$e*=lt),ze.set(ke,Ne,$e,lt),Ve.equals(ze)===!1&&(r.clearColor(ke,Ne,$e,lt),Ve.copy(ze))},reset:function(){q=!1,ye=null,Ve.set(-1,0,0,0)}}}function s(){let q=!1,ze=!1,ye=null,Ve=null,ke=null;return{setReversed:function(Ne){if(ze!==Ne){const $e=t.get("EXT_clip_control");Ne?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ze=Ne;const lt=ke;ke=null,this.setClear(lt)}},getReversed:function(){return ze},setTest:function(Ne){Ne?we(r.DEPTH_TEST):We(r.DEPTH_TEST)},setMask:function(Ne){ye!==Ne&&!q&&(r.depthMask(Ne),ye=Ne)},setFunc:function(Ne){if(ze&&(Ne=fS[Ne]),Ve!==Ne){switch(Ne){case th:r.depthFunc(r.NEVER);break;case nh:r.depthFunc(r.ALWAYS);break;case ih:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case sh:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=Ne}},setLocked:function(Ne){q=Ne},setClear:function(Ne){ke!==Ne&&(ke=Ne,ze&&(Ne=1-Ne),r.clearDepth(Ne))},reset:function(){q=!1,ye=null,Ve=null,ke=null,ze=!1}}}function l(){let q=!1,ze=null,ye=null,Ve=null,ke=null,Ne=null,$e=null,lt=null,jt=null;return{setTest:function(Bt){q||(Bt?we(r.STENCIL_TEST):We(r.STENCIL_TEST))},setMask:function(Bt){ze!==Bt&&!q&&(r.stencilMask(Bt),ze=Bt)},setFunc:function(Bt,Wn,kn){(ye!==Bt||Ve!==Wn||ke!==kn)&&(r.stencilFunc(Bt,Wn,kn),ye=Bt,Ve=Wn,ke=kn)},setOp:function(Bt,Wn,kn){(Ne!==Bt||$e!==Wn||lt!==kn)&&(r.stencilOp(Bt,Wn,kn),Ne=Bt,$e=Wn,lt=kn)},setLocked:function(Bt){q=Bt},setClear:function(Bt){jt!==Bt&&(r.clearStencil(Bt),jt=Bt)},reset:function(){q=!1,ze=null,ye=null,Ve=null,ke=null,Ne=null,$e=null,lt=null,jt=null}}}const c=new i,h=new s,m=new l,g=new WeakMap,p=new WeakMap;let y={},_={},x={},M=new WeakMap,T=[],L=null,S=!1,b=null,N=null,P=null,z=null,X=null,O=null,F=null,A=new kt(0,0,0),I=0,K=!1,H=null,Z=null,he=null,ge=null,W=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ne=0;const be=r.getParameter(r.VERSION);be.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(be)[1]),j=ne>=1):be.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),j=ne>=2);let ie=null,D={};const V=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),xe=new _n().fromArray(V),Ae=new _n().fromArray(B);function J(q,ze,ye,Ve){const ke=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(q,Ne),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<ye;$e++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(ze+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return Ne}const Ee={};Ee[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),we(r.DEPTH_TEST),h.setFunc(Hr),Ft(!1),Nt(cx),we(r.CULL_FACE),At(Na);function we(q){y[q]!==!0&&(r.enable(q),y[q]=!0)}function We(q){y[q]!==!1&&(r.disable(q),y[q]=!1)}function nt(q,ze){return x[q]!==ze?(r.bindFramebuffer(q,ze),x[q]=ze,q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=ze),q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function et(q,ze){let ye=T,Ve=!1;if(q){ye=M.get(ze),ye===void 0&&(ye=[],M.set(ze,ye));const ke=q.textures;if(ye.length!==ke.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,$e=ke.length;Ne<$e;Ne++)ye[Ne]=r.COLOR_ATTACHMENT0+Ne;ye.length=ke.length,Ve=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(ye)}function Et(q){return L!==q?(r.useProgram(q),L=q,!0):!1}const ft={[ks]:r.FUNC_ADD,[O1]:r.FUNC_SUBTRACT,[P1]:r.FUNC_REVERSE_SUBTRACT};ft[I1]=r.MIN,ft[F1]=r.MAX;const dt={[B1]:r.ZERO,[k1]:r.ONE,[j1]:r.SRC_COLOR,[$f]:r.SRC_ALPHA,[q1]:r.SRC_ALPHA_SATURATE,[X1]:r.DST_COLOR,[G1]:r.DST_ALPHA,[H1]:r.ONE_MINUS_SRC_COLOR,[eh]:r.ONE_MINUS_SRC_ALPHA,[W1]:r.ONE_MINUS_DST_COLOR,[V1]:r.ONE_MINUS_DST_ALPHA,[Y1]:r.CONSTANT_COLOR,[Z1]:r.ONE_MINUS_CONSTANT_COLOR,[K1]:r.CONSTANT_ALPHA,[Q1]:r.ONE_MINUS_CONSTANT_ALPHA};function At(q,ze,ye,Ve,ke,Ne,$e,lt,jt,Bt){if(q===Na){S===!0&&(We(r.BLEND),S=!1);return}if(S===!1&&(we(r.BLEND),S=!0),q!==z1){if(q!==b||Bt!==K){if((N!==ks||X!==ks)&&(r.blendEquation(r.FUNC_ADD),N=ks,X=ks),Bt)switch(q){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zo:r.blendFunc(r.ONE,r.ONE);break;case ux:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ht("WebGLState: Invalid blending: ",q);break}else switch(q){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ux:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",q);break}P=null,z=null,O=null,F=null,A.set(0,0,0),I=0,b=q,K=Bt}return}ke=ke||ze,Ne=Ne||ye,$e=$e||Ve,(ze!==N||ke!==X)&&(r.blendEquationSeparate(ft[ze],ft[ke]),N=ze,X=ke),(ye!==P||Ve!==z||Ne!==O||$e!==F)&&(r.blendFuncSeparate(dt[ye],dt[Ve],dt[Ne],dt[$e]),P=ye,z=Ve,O=Ne,F=$e),(lt.equals(A)===!1||jt!==I)&&(r.blendColor(lt.r,lt.g,lt.b,jt),A.copy(lt),I=jt),b=q,K=!1}function it(q,ze){q.side===Ri?We(r.CULL_FACE):we(r.CULL_FACE);let ye=q.side===ri;ze&&(ye=!ye),Ft(ye),q.blending===kr&&q.transparent===!1?At(Na):At(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ve=q.stencilWrite;m.setTest(Ve),Ve&&(m.setMask(q.stencilWriteMask),m.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),m.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Q(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):We(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(q){H!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),H=q)}function Nt(q){q!==D1?(we(r.CULL_FACE),q!==Z&&(q===cx?r.cullFace(r.BACK):q===L1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):We(r.CULL_FACE),Z=q}function hn(q){q!==he&&(j&&r.lineWidth(q),he=q)}function Q(q,ze,ye){q?(we(r.POLYGON_OFFSET_FILL),(ge!==ze||W!==ye)&&(ge=ze,W=ye,h.getReversed()&&(ze=-ze),r.polygonOffset(ze,ye))):We(r.POLYGON_OFFSET_FILL)}function Qe(q){q?we(r.SCISSOR_TEST):We(r.SCISSOR_TEST)}function at(q){q===void 0&&(q=r.TEXTURE0+U-1),ie!==q&&(r.activeTexture(q),ie=q)}function rt(q,ze,ye){ye===void 0&&(ie===null?ye=r.TEXTURE0+U-1:ye=ie);let Ve=D[ye];Ve===void 0&&(Ve={type:void 0,texture:void 0},D[ye]=Ve),(Ve.type!==q||Ve.texture!==ze)&&(ie!==ye&&(r.activeTexture(ye),ie=ye),r.bindTexture(q,ze||Ee[q]),Ve.type=q,Ve.texture=ze)}function Le(){const q=D[ie];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ot(){try{r.compressedTexImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function E(){try{r.texSubImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function ee(){try{r.texSubImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function Se(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function Re(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function Oe(){try{r.texStorage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function Pe(){try{r.texStorage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function ve(){try{r.texImage2D(...arguments)}catch(q){Ht("WebGLState:",q)}}function ae(){try{r.texImage3D(...arguments)}catch(q){Ht("WebGLState:",q)}}function Fe(q){return _[q]!==void 0?_[q]:r.getParameter(q)}function je(q,ze){_[q]!==ze&&(r.pixelStorei(q,ze),_[q]=ze)}function Be(q){xe.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),xe.copy(q))}function Ie(q){Ae.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function ht(q,ze){let ye=p.get(ze);ye===void 0&&(ye=new WeakMap,p.set(ze,ye));let Ve=ye.get(q);Ve===void 0&&(Ve=r.getUniformBlockIndex(ze,q.name),ye.set(q,Ve))}function pt(q,ze){const Ve=p.get(ze).get(q);g.get(ze)!==Ve&&(r.uniformBlockBinding(ze,Ve,q.__bindingPointIndex),g.set(ze,Ve))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},_={},ie=null,D={},x={},M=new WeakMap,T=[],L=null,S=!1,b=null,N=null,P=null,z=null,X=null,O=null,F=null,A=new kt(0,0,0),I=0,K=!1,H=null,Z=null,he=null,ge=null,W=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:we,disable:We,bindFramebuffer:nt,drawBuffers:et,useProgram:Et,setBlending:At,setMaterial:it,setFlipSided:Ft,setCullFace:Nt,setLineWidth:hn,setPolygonOffset:Q,setScissorTest:Qe,activeTexture:at,bindTexture:rt,unbindTexture:Le,compressedTexImage2D:ot,compressedTexImage3D:R,texImage2D:ve,texImage3D:ae,pixelStorei:je,getParameter:Fe,updateUBOMapping:ht,uniformBlockBinding:pt,texStorage2D:Oe,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:Se,compressedTexSubImage3D:Re,scissor:Be,viewport:Ie,reset:Ct}}function UA(r,t,i,s,l,c,h){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qt,y=new WeakMap,_=new Set;let x;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(R,E){return T?new OffscreenCanvas(R,E):Qc("canvas")}function S(R,E,ee){let Se=1;const Re=ot(R);if((Re.width>ee||Re.height>ee)&&(Se=ee/Math.max(Re.width,Re.height)),Se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Oe=Math.floor(Se*Re.width),Pe=Math.floor(Se*Re.height);x===void 0&&(x=L(Oe,Pe));const ve=E?L(Oe,Pe):x;return ve.width=Oe,ve.height=Pe,ve.getContext("2d").drawImage(R,0,0,Oe,Pe),_t("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+Oe+"x"+Pe+")."),ve}else return"data"in R&&_t("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),R;return R}function b(R){return R.generateMipmaps}function N(R){r.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function z(R,E,ee,Se,Re,Oe=!1){if(R!==null){if(r[R]!==void 0)return r[R];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Pe;Se&&(Pe=t.get("EXT_texture_norm16"),Pe||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===r.RED&&(ee===r.FLOAT&&(ve=r.R32F),ee===r.HALF_FLOAT&&(ve=r.R16F),ee===r.UNSIGNED_BYTE&&(ve=r.R8),ee===r.UNSIGNED_SHORT&&Pe&&(ve=Pe.R16_EXT),ee===r.SHORT&&Pe&&(ve=Pe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ve=r.R8UI),ee===r.UNSIGNED_SHORT&&(ve=r.R16UI),ee===r.UNSIGNED_INT&&(ve=r.R32UI),ee===r.BYTE&&(ve=r.R8I),ee===r.SHORT&&(ve=r.R16I),ee===r.INT&&(ve=r.R32I)),E===r.RG&&(ee===r.FLOAT&&(ve=r.RG32F),ee===r.HALF_FLOAT&&(ve=r.RG16F),ee===r.UNSIGNED_BYTE&&(ve=r.RG8),ee===r.UNSIGNED_SHORT&&Pe&&(ve=Pe.RG16_EXT),ee===r.SHORT&&Pe&&(ve=Pe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ve=r.RG8UI),ee===r.UNSIGNED_SHORT&&(ve=r.RG16UI),ee===r.UNSIGNED_INT&&(ve=r.RG32UI),ee===r.BYTE&&(ve=r.RG8I),ee===r.SHORT&&(ve=r.RG16I),ee===r.INT&&(ve=r.RG32I)),E===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),ee===r.UNSIGNED_INT&&(ve=r.RGB32UI),ee===r.BYTE&&(ve=r.RGB8I),ee===r.SHORT&&(ve=r.RGB16I),ee===r.INT&&(ve=r.RGB32I)),E===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),ee===r.UNSIGNED_INT&&(ve=r.RGBA32UI),ee===r.BYTE&&(ve=r.RGBA8I),ee===r.SHORT&&(ve=r.RGBA16I),ee===r.INT&&(ve=r.RGBA32I)),E===r.RGB&&(ee===r.UNSIGNED_SHORT&&Pe&&(ve=Pe.RGB16_EXT),ee===r.SHORT&&Pe&&(ve=Pe.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),E===r.RGBA){const ae=Oe?Zc:Pt.getTransfer(Re);ee===r.FLOAT&&(ve=r.RGBA32F),ee===r.HALF_FLOAT&&(ve=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ve=ae===Kt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&Pe&&(ve=Pe.RGBA16_EXT),ee===r.SHORT&&Pe&&(ve=Pe.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function X(R,E){let ee;return R?E===null||E===sa||E===Jo?ee=r.DEPTH24_STENCIL8:E===ta?ee=r.DEPTH32F_STENCIL8:E===Qo&&(ee=r.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===sa||E===Jo?ee=r.DEPTH_COMPONENT24:E===ta?ee=r.DEPTH_COMPONENT32F:E===Qo&&(ee=r.DEPTH_COMPONENT16),ee}function O(R,E){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bn&&R.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function F(R){const E=R.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&y.delete(E),E.isHTMLTexture&&_.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),H(E)}function I(R){const E=s.get(R);if(E.__webglInit===void 0)return;const ee=R.source,Se=M.get(ee);if(Se){const Re=Se[E.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&K(R),Object.keys(Se).length===0&&M.delete(ee)}s.remove(R)}function K(R){const E=s.get(R);r.deleteTexture(E.__webglTexture);const ee=R.source,Se=M.get(ee);delete Se[E.__cacheKey],h.memory.textures--}function H(R){const E=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(E.__webglFramebuffer[Se]))for(let Re=0;Re<E.__webglFramebuffer[Se].length;Re++)r.deleteFramebuffer(E.__webglFramebuffer[Se][Re]);else r.deleteFramebuffer(E.__webglFramebuffer[Se]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Se])}else{if(Array.isArray(E.__webglFramebuffer))for(let Se=0;Se<E.__webglFramebuffer.length;Se++)r.deleteFramebuffer(E.__webglFramebuffer[Se]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Se=0;Se<E.__webglColorRenderbuffer.length;Se++)E.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Se]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=R.textures;for(let Se=0,Re=ee.length;Se<Re;Se++){const Oe=s.get(ee[Se]);Oe.__webglTexture&&(r.deleteTexture(Oe.__webglTexture),h.memory.textures--),s.remove(ee[Se])}s.remove(R)}let Z=0;function he(){Z=0}function ge(){return Z}function W(R){Z=R}function U(){const R=Z;return R>=l.maxTextures&&_t("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),Z+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ne(R,E){const ee=s.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ee.__version!==R.version){const Se=R.image;if(Se===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{We(ee,R,E);return}}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+E)}function be(R,E){const ee=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){We(ee,R,E);return}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+E)}function ie(R,E){const ee=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){We(ee,R,E);return}i.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+E)}function D(R,E){const ee=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&ee.__version!==R.version){nt(ee,R,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+E)}const V={[lh]:r.REPEAT,[Ra]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},B={[Bn]:r.NEAREST,[eS]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[bf]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},xe={[iS]:r.NEVER,[lS]:r.ALWAYS,[aS]:r.LESS,[ep]:r.LEQUAL,[sS]:r.EQUAL,[tp]:r.GEQUAL,[rS]:r.GREATER,[oS]:r.NOTEQUAL};function Ae(R,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===bf||E.magFilter===pc||E.magFilter===Hs||E.minFilter===Vn||E.minFilter===bf||E.minFilter===pc||E.minFilter===Hs)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,B[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,B[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==pc&&E.minFilter!==Hs||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ee=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function J(R,E){let ee=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",F));const Se=E.source;let Re=M.get(Se);Re===void 0&&(Re={},M.set(Se,Re));const Oe=j(E);if(Oe!==R.__cacheKey){Re[Oe]===void 0&&(Re[Oe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),Re[Oe].usedTimes++;const Pe=Re[R.__cacheKey];Pe!==void 0&&(Re[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&K(E)),R.__cacheKey=Oe,R.__webglTexture=Re[Oe].texture}return ee}function Ee(R,E,ee){return Math.floor(Math.floor(R/ee)/E)}function we(R,E,ee,Se){const Oe=R.updateRanges;if(Oe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,ee,Se,E.data);else{Oe.sort((je,Be)=>je.start-Be.start);let Pe=0;for(let je=1;je<Oe.length;je++){const Be=Oe[Pe],Ie=Oe[je],ht=Be.start+Be.count,pt=Ee(Ie.start,E.width,4),Ct=Ee(Be.start,E.width,4);Ie.start<=ht+1&&pt===Ct&&Ee(Ie.start+Ie.count-1,E.width,4)===pt?Be.count=Math.max(Be.count,Ie.start+Ie.count-Be.start):(++Pe,Oe[Pe]=Ie)}Oe.length=Pe+1;const ve=i.getParameter(r.UNPACK_ROW_LENGTH),ae=i.getParameter(r.UNPACK_SKIP_PIXELS),Fe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let je=0,Be=Oe.length;je<Be;je++){const Ie=Oe[je],ht=Math.floor(Ie.start/4),pt=Math.ceil(Ie.count/4),Ct=ht%E.width,q=Math.floor(ht/E.width),ze=pt,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,Ct,q,ze,ye,ee,Se,E.data)}R.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ve),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function We(R,E,ee){let Se=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Se=r.TEXTURE_3D);const Re=J(R,E),Oe=E.source;i.bindTexture(Se,R.__webglTexture,r.TEXTURE0+ee);const Pe=s.get(Oe);if(Oe.version!==Pe.__version||Re===!0){if(i.activeTexture(r.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Pt.getPrimaries(Pt.workingColorSpace),Ve=E.colorSpace===us?null:Pt.getPrimaries(E.colorSpace),ke=E.colorSpace===us||ye===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ae=S(E.image,!1,l.maxTextureSize);ae=Le(E,ae);const Fe=c.convert(E.format,E.colorSpace),je=c.convert(E.type);let Be=z(E.internalFormat,Fe,je,E.normalized,E.colorSpace,E.isVideoTexture);Ae(Se,E);let Ie;const ht=E.mipmaps,pt=E.isVideoTexture!==!0,Ct=Pe.__version===void 0||Re===!0,q=Oe.dataReady,ze=O(E,ae);if(E.isDepthTexture)Be=X(E.format===Gs,E.type),Ct&&(pt?i.texStorage2D(r.TEXTURE_2D,1,Be,ae.width,ae.height):i.texImage2D(r.TEXTURE_2D,0,Be,ae.width,ae.height,0,Fe,je,null));else if(E.isDataTexture)if(ht.length>0){pt&&Ct&&i.texStorage2D(r.TEXTURE_2D,ze,Be,ht[0].width,ht[0].height);for(let ye=0,Ve=ht.length;ye<Ve;ye++)Ie=ht[ye],pt?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Fe,je,Ie.data):i.texImage2D(r.TEXTURE_2D,ye,Be,Ie.width,Ie.height,0,Fe,je,Ie.data);E.generateMipmaps=!1}else pt?(Ct&&i.texStorage2D(r.TEXTURE_2D,ze,Be,ae.width,ae.height),q&&we(E,ae,Fe,je)):i.texImage2D(r.TEXTURE_2D,0,Be,ae.width,ae.height,0,Fe,je,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ze,Be,ht[0].width,ht[0].height,ae.depth);for(let ye=0,Ve=ht.length;ye<Ve;ye++)if(Ie=ht[ye],E.format!==Vi)if(Fe!==null)if(pt){if(q)if(E.layerUpdates.size>0){const ke=Fx(Ie.width,Ie.height,E.format,E.type);for(const Ne of E.layerUpdates){const $e=Ie.data.subarray(Ne*ke/Ie.data.BYTES_PER_ELEMENT,(Ne+1)*ke/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Ne,Ie.width,Ie.height,1,Fe,$e)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,ae.depth,Fe,Ie.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Ie.width,Ie.height,ae.depth,0,Ie.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,ae.depth,Fe,je,Ie.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Be,Ie.width,Ie.height,ae.depth,0,Fe,je,Ie.data)}else{pt&&Ct&&i.texStorage2D(r.TEXTURE_2D,ze,Be,ht[0].width,ht[0].height);for(let ye=0,Ve=ht.length;ye<Ve;ye++)Ie=ht[ye],E.format!==Vi?Fe!==null?pt?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Fe,Ie.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Be,Ie.width,Ie.height,0,Ie.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Fe,je,Ie.data):i.texImage2D(r.TEXTURE_2D,ye,Be,Ie.width,Ie.height,0,Fe,je,Ie.data)}else if(E.isDataArrayTexture)if(pt){if(Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ze,Be,ae.width,ae.height,ae.depth),q)if(E.layerUpdates.size>0){const ye=Fx(ae.width,ae.height,E.format,E.type);for(const Ve of E.layerUpdates){const ke=ae.data.subarray(Ve*ye/ae.data.BYTES_PER_ELEMENT,(Ve+1)*ye/ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ve,ae.width,ae.height,1,Fe,je,ke)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Fe,je,ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,ae.width,ae.height,ae.depth,0,Fe,je,ae.data);else if(E.isData3DTexture)pt?(Ct&&i.texStorage3D(r.TEXTURE_3D,ze,Be,ae.width,ae.height,ae.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Fe,je,ae.data)):i.texImage3D(r.TEXTURE_3D,0,Be,ae.width,ae.height,ae.depth,0,Fe,je,ae.data);else if(E.isFramebufferTexture){if(Ct)if(pt)i.texStorage2D(r.TEXTURE_2D,ze,Be,ae.width,ae.height);else{let ye=ae.width,Ve=ae.height;for(let ke=0;ke<ze;ke++)i.texImage2D(r.TEXTURE_2D,ke,Be,ye,Ve,0,Fe,je,null),ye>>=1,Ve>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ae.parentNode!==ye){ye.appendChild(ae),_.add(E),ye.onpaint=lt=>{const jt=lt.changedElements;for(const Bt of _)jt.includes(Bt.image)&&(Bt.needsUpdate=!0)},ye.requestPaint();return}const Ve=0,ke=r.RGBA,Ne=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ve,ke,Ne,$e,ae),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ht.length>0){if(pt&&Ct){const ye=ot(ht[0]);i.texStorage2D(r.TEXTURE_2D,ze,Be,ye.width,ye.height)}for(let ye=0,Ve=ht.length;ye<Ve;ye++)Ie=ht[ye],pt?q&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Fe,je,Ie):i.texImage2D(r.TEXTURE_2D,ye,Be,Fe,je,Ie);E.generateMipmaps=!1}else if(pt){if(Ct){const ye=ot(ae);i.texStorage2D(r.TEXTURE_2D,ze,Be,ye.width,ye.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,je,ae)}else i.texImage2D(r.TEXTURE_2D,0,Be,Fe,je,ae);b(E)&&N(Se),Pe.__version=Oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function nt(R,E,ee){if(E.image.length!==6)return;const Se=J(R,E),Re=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+ee);const Oe=s.get(Re);if(Re.version!==Oe.__version||Se===!0){i.activeTexture(r.TEXTURE0+ee);const Pe=Pt.getPrimaries(Pt.workingColorSpace),ve=E.colorSpace===us?null:Pt.getPrimaries(E.colorSpace),ae=E.colorSpace===us||Pe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Ne=0;Ne<6;Ne++)!Fe&&!je?Be[Ne]=S(E.image[Ne],!0,l.maxCubemapSize):Be[Ne]=je?E.image[Ne].image:E.image[Ne],Be[Ne]=Le(E,Be[Ne]);const Ie=Be[0],ht=c.convert(E.format,E.colorSpace),pt=c.convert(E.type),Ct=z(E.internalFormat,ht,pt,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,ze=Oe.__version===void 0||Se===!0,ye=Re.dataReady;let Ve=O(E,Ie);Ae(r.TEXTURE_CUBE_MAP,E);let ke;if(Fe){q&&ze&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,Ct,Ie.width,Ie.height);for(let Ne=0;Ne<6;Ne++){ke=Be[Ne].mipmaps;for(let $e=0;$e<ke.length;$e++){const lt=ke[$e];E.format!==Vi?ht!==null?q?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,0,0,lt.width,lt.height,ht,lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,Ct,lt.width,lt.height,0,lt.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,0,0,lt.width,lt.height,ht,pt,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e,Ct,lt.width,lt.height,0,ht,pt,lt.data)}}}else{if(ke=E.mipmaps,q&&ze){ke.length>0&&Ve++;const Ne=ot(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,Ct,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(je){q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Be[Ne].width,Be[Ne].height,ht,pt,Be[Ne].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ct,Be[Ne].width,Be[Ne].height,0,ht,pt,Be[Ne].data);for(let $e=0;$e<ke.length;$e++){const jt=ke[$e].image[Ne].image;q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,0,0,jt.width,jt.height,ht,pt,jt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,Ct,jt.width,jt.height,0,ht,pt,jt.data)}}else{q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ht,pt,Be[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ct,ht,pt,Be[Ne]);for(let $e=0;$e<ke.length;$e++){const lt=ke[$e];q?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,0,0,ht,pt,lt.image[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e+1,Ct,ht,pt,lt.image[Ne])}}}b(E)&&N(r.TEXTURE_CUBE_MAP),Oe.__version=Re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function et(R,E,ee,Se,Re,Oe){const Pe=c.convert(ee.format,ee.colorSpace),ve=c.convert(ee.type),ae=z(ee.internalFormat,Pe,ve,ee.normalized,ee.colorSpace),Fe=s.get(E),je=s.get(ee);if(je.__renderTarget=E,!Fe.__hasExternalTextures){const Be=Math.max(1,E.width>>Oe),Ie=Math.max(1,E.height>>Oe);Re===r.TEXTURE_3D||Re===r.TEXTURE_2D_ARRAY?i.texImage3D(Re,Oe,ae,Be,Ie,E.depth,0,Pe,ve,null):i.texImage2D(Re,Oe,ae,Be,Ie,0,Pe,ve,null)}i.bindFramebuffer(r.FRAMEBUFFER,R),at(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,Re,je.__webglTexture,0,Qe(E)):(Re===r.TEXTURE_2D||Re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,Re,je.__webglTexture,Oe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(R,E,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Se=E.depthTexture,Re=Se&&Se.isDepthTexture?Se.type:null,Oe=X(E.stencilBuffer,Re),Pe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;at(E)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(E),Oe,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(E),Oe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,R)}else{const Se=E.textures;for(let Re=0;Re<Se.length;Re++){const Oe=Se[Re],Pe=c.convert(Oe.format,Oe.colorSpace),ve=c.convert(Oe.type),ae=z(Oe.internalFormat,Pe,ve,Oe.normalized,Oe.colorSpace);at(E)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(E),ae,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(E),ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ae,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(R,E,ee){const Se=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=s.get(E.depthTexture);if(Re.__renderTarget=E,(!Re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Se){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Re.__webglTexture===void 0){Re.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Re.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,E.depthTexture);const Fe=c.convert(E.depthTexture.format),je=c.convert(E.depthTexture.type);let Be;E.depthTexture.format===Ua?Be=r.DEPTH_COMPONENT24:E.depthTexture.format===Gs&&(Be=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Be,E.width,E.height,0,Fe,je,null)}}else ne(E.depthTexture,0);const Oe=Re.__webglTexture,Pe=Qe(E),ve=Se?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,ae=E.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ua)at(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ve,Oe,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ve,Oe,0);else if(E.depthTexture.format===Gs)at(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ve,Oe,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ve,Oe,0);else throw new Error("Unknown depthTexture format")}function dt(R){const E=s.get(R),ee=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Se=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Se){const Re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Se.removeEventListener("dispose",Re)};Se.addEventListener("dispose",Re),E.__depthDisposeCallback=Re}E.__boundDepthTexture=Se}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let Se=0;Se<6;Se++)ft(E.__webglFramebuffer[Se],R,Se);else{const Se=R.texture.mipmaps;Se&&Se.length>0?ft(E.__webglFramebuffer[0],R,0):ft(E.__webglFramebuffer,R,0)}else if(ee){E.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Se]),E.__webglDepthbuffer[Se]===void 0)E.__webglDepthbuffer[Se]=r.createRenderbuffer(),Et(E.__webglDepthbuffer[Se],R,!1);else{const Re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer[Se];r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,Oe)}}else{const Se=R.texture.mipmaps;if(Se&&Se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Et(E.__webglDepthbuffer,R,!1);else{const Re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,Oe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function At(R,E,ee){const Se=s.get(R);E!==void 0&&et(Se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&dt(R)}function it(R){const E=R.texture,ee=s.get(R),Se=s.get(E);R.addEventListener("dispose",A);const Re=R.textures,Oe=R.isWebGLCubeRenderTarget===!0,Pe=Re.length>1;if(Pe||(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=E.version,h.memory.textures++),Oe){ee.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ve]=[];for(let ae=0;ae<E.mipmaps.length;ae++)ee.__webglFramebuffer[ve][ae]=r.createFramebuffer()}else ee.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)ee.__webglFramebuffer[ve]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ve=0,ae=Re.length;ve<ae;ve++){const Fe=s.get(Re[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),h.memory.textures++)}if(R.samples>0&&at(R)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ve=0;ve<Re.length;ve++){const ae=Re[ve];ee.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ve]);const Fe=c.convert(ae.format,ae.colorSpace),je=c.convert(ae.type),Be=z(ae.internalFormat,Fe,je,ae.normalized,ae.colorSpace,R.isXRRenderTarget===!0),Ie=Qe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Be,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(ee.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Oe){i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)et(ee.__webglFramebuffer[ve][ae],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ae);else et(ee.__webglFramebuffer[ve],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);b(E)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let ve=0,ae=Re.length;ve<ae;ve++){const Fe=Re[ve],je=s.get(Fe);let Be=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Be=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,je.__webglTexture),Ae(Be,Fe),et(ee.__webglFramebuffer,R,Fe,r.COLOR_ATTACHMENT0+ve,Be,0),b(Fe)&&N(Be)}i.unbindTexture()}else{let ve=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ve,Se.__webglTexture),Ae(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)et(ee.__webglFramebuffer[ae],R,E,r.COLOR_ATTACHMENT0,ve,ae);else et(ee.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ve,0);b(E)&&N(ve),i.unbindTexture()}R.depthBuffer&&dt(R)}function Ft(R){const E=R.textures;for(let ee=0,Se=E.length;ee<Se;ee++){const Re=E[ee];if(b(Re)){const Oe=P(R),Pe=s.get(Re).__webglTexture;i.bindTexture(Oe,Pe),N(Oe),i.unbindTexture()}}}const Nt=[],hn=[];function Q(R){if(R.samples>0){if(at(R)===!1){const E=R.textures,ee=R.width,Se=R.height;let Re=r.COLOR_BUFFER_BIT;const Oe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(R),ve=E.length>1;if(ve)for(let Fe=0;Fe<E.length;Fe++)i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ae=R.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Re|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Re|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const je=s.get(E[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,ee,Se,0,0,ee,Se,Re,r.NEAREST),g===!0&&(Nt.length=0,hn.length=0,Nt.push(r.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(Oe),hn.push(Oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,hn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<E.length;Fe++){i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const je=s.get(E[Fe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,je,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&g){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Qe(R){return Math.min(l.maxSamples,R.samples)}function at(R){const E=s.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rt(R){const E=h.render.frame;y.get(R)!==E&&(y.set(R,E),R.update())}function Le(R,E){const ee=R.colorSpace,Se=R.format,Re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ee!==Yc&&ee!==us&&(Pt.getTransfer(ee)===Kt?(Se!==Vi||Re!==Ni)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ee)),E}function ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=he,this.getTextureUnits=ge,this.setTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=be,this.setTexture3D=ie,this.setTextureCube=D,this.rebindTextures=At,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zA(r,t){function i(s,l=us){let c;const h=Pt.getTransfer(l);if(s===Ni)return r.UNSIGNED_BYTE;if(s===Zh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Mv)return r.BYTE;if(s===Ev)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===Yh)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===ta)return r.FLOAT;if(s===La)return r.HALF_FLOAT;if(s===wv)return r.ALPHA;if(s===Cv)return r.RGB;if(s===Vi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Rv)return r.RED;if(s===Qh)return r.RED_INTEGER;if(s===Xs)return r.RG;if(s===Jh)return r.RG_INTEGER;if(s===$h)return r.RGBA_INTEGER;if(s===kc||s===jc||s===Hc||s===Gc)if(h===Kt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===dh||s===fh||s===hh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ph||s===mh||s===gh||s===xh||s===vh||s===Wc||s===_h)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ph||s===mh)return h===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xh)return c.COMPRESSED_R11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===_h)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===bh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh||s===Lh||s===Uh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Th)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ah)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return h===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zh||s===Oh||s===Ph)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===zh)return h===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ph)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ih||s===Fh||s===qc||s===Bh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ih)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new kv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Li({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new il(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends qs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,m="local-floor",g=1,p=null,y=null,_=null,x=null,M=null,T=null;const L=typeof XRWebGLBinding<"u",S=new IA,b={},N=i.getContextAttributes();let P=null,z=null;const X=[],O=[],F=new Qt;let A=null;const I=new Ci;I.viewport=new _n;const K=new Ci;K.viewport=new _n;const H=[I,K],Z=new YS;let he=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Ee=X[J];return Ee===void 0&&(Ee=new Cf,X[J]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(J){let Ee=X[J];return Ee===void 0&&(Ee=new Cf,X[J]=Ee),Ee.getGripSpace()},this.getHand=function(J){let Ee=X[J];return Ee===void 0&&(Ee=new Cf,X[J]=Ee),Ee.getHandSpace()};function W(J){const Ee=O.indexOf(J.inputSource);if(Ee===-1)return;const we=X[Ee];we!==void 0&&(we.update(J.inputSource,J.frame,p||h),we.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",j);for(let J=0;J<X.length;J++){const Ee=O[J];Ee!==null&&(O[J]=null,X[J].disconnect(Ee))}he=null,ge=null,S.reset();for(const J in b)delete b[J];t.setRenderTarget(P),M=null,x=null,_=null,l=null,z=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){m=J,s.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&L&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",U),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,We=null,nt=null;N.depth&&(nt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=N.stencil?Gs:Ua,We=N.stencil?Jo:sa);const et={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(et),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new aa(x.textureWidth,x.textureHeight,{format:Vi,type:Ni,depthTexture:new Vr(x.textureWidth,x.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new aa(M.framebufferWidth,M.framebufferHeight,{format:Vi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(m),Ae.setContext(l),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(J){for(let Ee=0;Ee<J.removed.length;Ee++){const we=J.removed[Ee],We=O.indexOf(we);We>=0&&(O[We]=null,X[We].disconnect(we))}for(let Ee=0;Ee<J.added.length;Ee++){const we=J.added[Ee];let We=O.indexOf(we);if(We===-1){for(let et=0;et<X.length;et++)if(et>=O.length){O.push(we),We=et;break}else if(O[et]===null){O[et]=we,We=et;break}if(We===-1)break}const nt=X[We];nt&&nt.connect(we)}}const ne=new le,be=new le;function ie(J,Ee,we){ne.setFromMatrixPosition(Ee.matrixWorld),be.setFromMatrixPosition(we.matrixWorld);const We=ne.distanceTo(be),nt=Ee.projectionMatrix.elements,et=we.projectionMatrix.elements,Et=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),dt=(nt[9]+1)/nt[5],At=(nt[9]-1)/nt[5],it=(nt[8]-1)/nt[0],Ft=(et[8]+1)/et[0],Nt=Et*it,hn=Et*Ft,Q=We/(-it+Ft),Qe=Q*-it;if(Ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(Q),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),nt[10]===-1)J.projectionMatrix.copy(Ee.projectionMatrix),J.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const at=Et+Q,rt=ft+Q,Le=Nt-Qe,ot=hn+(We-Qe),R=dt*ft/rt*at,E=At*ft/rt*at;J.projectionMatrix.makePerspective(Le,ot,R,E,at,rt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,Ee){Ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let Ee=J.near,we=J.far;S.texture!==null&&(S.depthNear>0&&(Ee=S.depthNear),S.depthFar>0&&(we=S.depthFar)),Z.near=K.near=I.near=Ee,Z.far=K.far=I.far=we,(he!==Z.near||ge!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),he=Z.near,ge=Z.far),Z.layers.mask=J.layers.mask|6,I.layers.mask=Z.layers.mask&-5,K.layers.mask=Z.layers.mask&-3;const We=J.parent,nt=Z.cameras;D(Z,We);for(let et=0;et<nt.length;et++)D(nt[et],We);nt.length===2?ie(Z,I,K):Z.projectionMatrix.copy(I.projectionMatrix),V(J,Z,We)};function V(J,Ee,we){we===null?J.matrix.copy(Ee.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(Ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Ee.projectionMatrix),J.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=jh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return g},this.setFoveation=function(J){g=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(J){return b[J]};let B=null;function xe(J,Ee){if(y=Ee.getViewerPose(p||h),T=Ee,y!==null){const we=y.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let We=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let ft=0;ft<we.length;ft++){const dt=we[ft];let At=null;if(M!==null)At=M.getViewport(dt);else{const Ft=_.getViewSubImage(x,dt);At=Ft.viewport,ft===0&&(t.setRenderTargetTextures(z,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(z))}let it=H[ft];it===void 0&&(it=new Ci,it.layers.enable(ft),it.viewport=new _n,H[ft]=it),it.matrix.fromArray(dt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(dt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(At.x,At.y,At.width,At.height),ft===0&&(Z.matrix.copy(it.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(it)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){_=s.getBinding();const ft=_.getDepthInformation(we[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,l.renderState)}if(nt&&nt.includes("camera-access")&&L){t.state.unbindTexture(),_=s.getBinding();for(let ft=0;ft<we.length;ft++){const dt=we[ft].camera;if(dt){let At=b[dt];At||(At=new kv,b[dt]=At);const it=_.getCameraImage(dt);At.sourceTexture=it}}}}for(let we=0;we<X.length;we++){const We=O[we],nt=X[we];We!==null&&nt!==void 0&&nt.update(We,Ee,p||h)}B&&B(J,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),T=null}const Ae=new Vv;Ae.setAnimationLoop(xe),this.setAnimationLoop=function(J){B=J},this.dispose=function(){}}}const BA=new Tn,Qv=new Mt;Qv.set(-1,0,0,0,1,0,0,0,1);function kA(r,t){function i(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function s(S,b){b.color.getRGB(S.fogColor.value,jv(r)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function l(S,b,N,P,z){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(S,b):b.isMeshLambertMaterial?(c(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(S,b),_(S,b)):b.isMeshPhongMaterial?(c(S,b),y(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(S,b),x(S,b),b.isMeshPhysicalMaterial&&M(S,b,z)):b.isMeshMatcapMaterial?(c(S,b),T(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),L(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(h(S,b),b.isLineDashedMaterial&&m(S,b)):b.isPointsMaterial?g(S,b,N,P):b.isSpriteMaterial?p(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,i(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===ri&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,i(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===ri&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,i(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,i(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const N=t.get(b),P=N.envMap,z=N.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(z)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Qv),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,S.aoMapTransform))}function h(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform))}function m(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function g(S,b,N,P){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*N,S.scale.value=P*.5,b.map&&(S.map.value=b.map,i(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function y(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function _(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function x(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function M(S,b,N){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===ri&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,b){b.matcap&&(S.matcap.value=b.matcap)}function L(S,b){const N=t.get(b).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jA(r,t,i,s){let l={},c={},h=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,P){const z=P.program;s.uniformBlockBinding(N,z)}function p(N,P){let z=l[N.id];z===void 0&&(T(N),z=y(N),l[N.id]=z,N.addEventListener("dispose",S));const X=P.program;s.updateUBOMapping(N,X);const O=t.render.frame;c[N.id]!==O&&(x(N),c[N.id]=O)}function y(N){const P=_();N.__bindingPointIndex=P;const z=r.createBuffer(),X=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,X,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,z),z}function _(){for(let N=0;N<m;N++)if(h.indexOf(N)===-1)return h.push(N),N;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const P=l[N.id],z=N.uniforms,X=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let O=0,F=z.length;O<F;O++){const A=Array.isArray(z[O])?z[O]:[z[O]];for(let I=0,K=A.length;I<K;I++){const H=A[I];if(M(H,O,I,X)===!0){const Z=H.__offset,he=Array.isArray(H.value)?H.value:[H.value];let ge=0;for(let W=0;W<he.length;W++){const U=he[W],j=L(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,Z+ge,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):ArrayBuffer.isView(U)?H.__data.set(new U.constructor(U.buffer,U.byteOffset,H.__data.length)):(U.toArray(H.__data,ge),ge+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,P,z,X){const O=N.value,F=P+"_"+z;if(X[F]===void 0)return typeof O=="number"||typeof O=="boolean"?X[F]=O:ArrayBuffer.isView(O)?X[F]=O.slice():X[F]=O.clone(),!0;{const A=X[F];if(typeof O=="number"||typeof O=="boolean"){if(A!==O)return X[F]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(A.equals(O)===!1)return A.copy(O),!0}}return!1}function T(N){const P=N.uniforms;let z=0;const X=16;for(let F=0,A=P.length;F<A;F++){const I=Array.isArray(P[F])?P[F]:[P[F]];for(let K=0,H=I.length;K<H;K++){const Z=I[K],he=Array.isArray(Z.value)?Z.value:[Z.value];for(let ge=0,W=he.length;ge<W;ge++){const U=he[ge],j=L(U),ne=z%X,be=ne%j.boundary,ie=ne+be;z+=be,ie!==0&&X-ie<j.storage&&(z+=X-ie),Z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=z,z+=j.storage}}}const O=z%X;return O>0&&(z+=X-O),N.__size=z,N.__cache={},this}function L(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const z=h.indexOf(P.__bindingPointIndex);h.splice(z,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function b(){for(const N in l)r.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:g,update:p,dispose:b}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function GA(){return $i===null&&($i=new US(HA,16,16,Xs,La),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=Ra,$i.wrapT=Ra,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class VA{constructor(t={}){const{canvas:i=uS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ni}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const L=M,S=new Set([$h,Jh,Qh]),b=new Set([Ni,sa,Qo,Jo,Zh,Kh]),N=new Uint32Array(4),P=new Int32Array(4),z=new le;let X=null,O=null;const F=[],A=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let H=!1,Z=null;this._outputColorSpace=wi;let he=0,ge=0,W=null,U=-1,j=null;const ne=new _n,be=new _n;let ie=null;const D=new kt(0);let V=0,B=i.width,xe=i.height,Ae=1,J=null,Ee=null;const we=new _n(0,0,B,xe),We=new _n(0,0,B,xe);let nt=!1;const et=new Iv;let Et=!1,ft=!1;const dt=new Tn,At=new le,it=new _n,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function hn(){return W===null?Ae:1}let Q=s;function Qe(w,$){return i.getContext(w,$)}try{const w={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qh}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",$e,!1),i.addEventListener("webglcontextcreationerror",lt,!1),Q===null){const $="webgl2";if(Q=Qe($,w),Q===null)throw Qe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ht("WebGLRenderer: "+w.message),w}let at,rt,Le,ot,R,E,ee,Se,Re,Oe,Pe,ve,ae,Fe,je,Be,Ie,ht,pt,Ct,q,ze,ye;function Ve(){at=new G2(Q),at.init(),q=new zA(Q,at),rt=new O2(Q,at,t,q),Le=new LA(Q,at),rt.reversedDepthBuffer&&x&&Le.buffers.depth.setReversed(!0),ot=new W2(Q),R=new vA,E=new UA(Q,at,Le,R,rt,q,ot),ee=new H2(K),Se=new KS(Q),ze=new U2(Q,Se),Re=new V2(Q,Se,ot,ze),Oe=new Y2(Q,Re,Se,ze,ot),ht=new q2(Q,rt,E),je=new P2(R),Pe=new xA(K,ee,at,rt,ze,je),ve=new kA(K,R),ae=new bA,Fe=new AA(at),Ie=new L2(K,ee,Le,Oe,T,g),Be=new DA(K,Oe,rt),ye=new jA(Q,ot,rt,Le),pt=new z2(Q,at,ot),Ct=new X2(Q,at,ot),ot.programs=Pe.programs,K.capabilities=rt,K.extensions=at,K.properties=R,K.renderLists=ae,K.shadowMap=Be,K.state=Le,K.info=ot}Ve(),L!==Ni&&(I=new K2(L,i.width,i.height,l,c));const ke=new FA(K,Q);this.xr=ke,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(w){w!==void 0&&(Ae=w,this.setSize(B,xe,!1))},this.getSize=function(w){return w.set(B,xe)},this.setSize=function(w,$,fe=!0){if(ke.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,xe=$,i.width=Math.floor(w*Ae),i.height=Math.floor($*Ae),fe===!0&&(i.style.width=w+"px",i.style.height=$+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(B*Ae,xe*Ae).floor()},this.setDrawingBufferSize=function(w,$,fe){B=w,xe=$,Ae=fe,i.width=Math.floor(w*fe),i.height=Math.floor($*fe),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(L===Ni){Ht("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){_t("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,$,fe,se){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,$,fe,se),Le.viewport(ne.copy(we).multiplyScalar(Ae).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,$,fe,se){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,$,fe,se),Le.scissor(be.copy(We).multiplyScalar(Ae).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){Le.setScissorTest(nt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){Ee=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,fe=!0){let se=0;if(w){let re=!1;if(W!==null){const qe=W.texture.format;re=S.has(qe)}if(re){const qe=W.texture.type,He=b.has(qe),k=Ie.getClearColor(),ue=Ie.getClearAlpha(),me=k.r,De=k.g,Xe=k.b;He?(N[0]=me,N[1]=De,N[2]=Xe,N[3]=ue,Q.clearBufferuiv(Q.COLOR,0,N)):(P[0]=me,P[1]=De,P[2]=Xe,P[3]=ue,Q.clearBufferiv(Q.COLOR,0,P))}else se|=Q.COLOR_BUFFER_BIT}$&&(se|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",$e,!1),i.removeEventListener("webglcontextcreationerror",lt,!1),Ie.dispose(),ae.dispose(),Fe.dispose(),R.dispose(),ee.dispose(),Oe.dispose(),ze.dispose(),ye.dispose(),Pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ui),ke.removeEventListener("sessionend",ra),dn.stop()};function Ne(w){w.preventDefault(),xx("WebGLRenderer: Context Lost."),H=!0}function $e(){xx("WebGLRenderer: Context Restored."),H=!1;const w=ot.autoReset,$=Be.enabled,fe=Be.autoUpdate,se=Be.needsUpdate,re=Be.type;Ve(),ot.autoReset=w,Be.enabled=$,Be.autoUpdate=fe,Be.needsUpdate=se,Be.type=re}function lt(w){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const $=w.target;$.removeEventListener("dispose",jt),Bt($)}function Bt(w){Wn(w),R.remove(w)}function Wn(w){const $=R.get(w).programs;$!==void 0&&($.forEach(function(fe){Pe.releaseProgram(fe)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,fe,se,re,qe){$===null&&($=Ft);const He=re.isMesh&&re.matrixWorld.determinant()<0,k=qn(w,$,fe,se,re);Le.setMaterial(se,He);let ue=fe.index,me=1;if(se.wireframe===!0){if(ue=Re.getWireframeAttribute(fe),ue===void 0)return;me=2}const De=fe.drawRange,Xe=fe.attributes.position;let Ze=De.start*me,yt=(De.start+De.count)*me;qe!==null&&(Ze=Math.max(Ze,qe.start*me),yt=Math.min(yt,(qe.start+qe.count)*me)),ue!==null?(Ze=Math.max(Ze,0),yt=Math.min(yt,ue.count)):Xe!=null&&(Ze=Math.max(Ze,0),yt=Math.min(yt,Xe.count));const de=yt-Ze;if(de<0||de===1/0)return;ze.setup(re,se,k,fe,ue);let Ke,gt=pt;if(ue!==null&&(Ke=Se.get(ue),gt=Ct,gt.setIndex(Ke)),re.isMesh)se.wireframe===!0?(Le.setLineWidth(se.wireframeLinewidth*hn()),gt.setMode(Q.LINES)):gt.setMode(Q.TRIANGLES);else if(re.isLine){let xt=se.linewidth;xt===void 0&&(xt=1),Le.setLineWidth(xt*hn()),re.isLineSegments?gt.setMode(Q.LINES):re.isLineLoop?gt.setMode(Q.LINE_LOOP):gt.setMode(Q.LINE_STRIP)}else re.isPoints?gt.setMode(Q.POINTS):re.isSprite&&gt.setMode(Q.TRIANGLES);if(re.isBatchedMesh)if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const xt=re._multiDrawStarts,Ge=re._multiDrawCounts,an=re._multiDrawCount,vt=ue?Se.get(ue).bytesPerElement:1,on=R.get(se).currentProgram.getUniforms();for(let zn=0;zn<an;zn++)on.setValue(Q,"_gl_DrawID",zn),gt.render(xt[zn]/vt,Ge[zn])}else if(re.isInstancedMesh)gt.renderInstances(Ze,de,re.count);else if(fe.isInstancedBufferGeometry){const xt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ge=Math.min(fe.instanceCount,xt);gt.renderInstances(Ze,de,Ge)}else gt.render(Ze,de)};function kn(w,$,fe){w.transparent===!0&&w.side===Ri&&w.forceSinglePass===!1?(w.side=ri,w.needsUpdate=!0,An(w,$,fe),w.side=fs,w.needsUpdate=!0,An(w,$,fe),w.side=Ri):An(w,$,fe)}this.compile=function(w,$,fe=null){fe===null&&(fe=w),O=Fe.get(fe),O.init($),A.push(O),fe.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(O.pushLight(re),re.castShadow&&O.pushShadow(re))}),w!==fe&&w.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(O.pushLight(re),re.castShadow&&O.pushShadow(re))}),O.setupLights();const se=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const qe=re.material;if(qe)if(Array.isArray(qe))for(let He=0;He<qe.length;He++){const k=qe[He];kn(k,fe,re),se.add(k)}else kn(qe,fe,re),se.add(qe)}),O=A.pop(),se},this.compileAsync=function(w,$,fe=null){const se=this.compile(w,$,fe);return new Promise(re=>{function qe(){if(se.forEach(function(He){R.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){re(w);return}setTimeout(qe,10)}at.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let ct=null;function hs(w){ct&&ct(w)}function Ui(){dn.stop()}function ra(){dn.start()}const dn=new Vv;dn.setAnimationLoop(hs),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(w){ct=w,ke.setAnimationLoop(w),w===null?dn.stop():dn.start()},ke.addEventListener("sessionstart",Ui),ke.addEventListener("sessionend",ra),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(w,$);const fe=ke.enabled===!0&&ke.isPresenting===!0,se=I!==null&&(W===null||fe)&&I.begin(K,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera($),$=ke.getCamera()),w.isScene===!0&&w.onBeforeRender(K,w,$,W),O=Fe.get(w,A.length),O.init($),O.state.textureUnits=E.getTextureUnits(),A.push(O),dt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),et.setFromProjectionMatrix(dt,na,$.reversedDepth),ft=this.localClippingEnabled,Et=je.init(this.clippingPlanes,ft),X=ae.get(w,F.length),X.init(),F.push(X),ke.enabled===!0&&ke.isPresenting===!0){const He=K.xr.getDepthSensingMesh();He!==null&&rn(He,$,-1/0,K.sortObjects)}rn(w,$,0,K.sortObjects),X.finish(),K.sortObjects===!0&&X.sort(J,Ee),Nt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Nt&&Ie.addToRenderList(X,w),this.info.render.frame++,Et===!0&&je.beginShadows();const re=O.state.shadowsArray;if(Be.render(re,w,$),Et===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&I.hasRenderPass())===!1){const He=X.opaque,k=X.transmissive;if(O.setupLights(),$.isArrayCamera){const ue=$.cameras;if(k.length>0)for(let me=0,De=ue.length;me<De;me++){const Xe=ue[me];zi(He,k,w,Xe)}Nt&&Ie.render(w);for(let me=0,De=ue.length;me<De;me++){const Xe=ue[me];nn(X,w,Xe,Xe.viewport)}}else k.length>0&&zi(He,k,w,$),Nt&&Ie.render(w),nn(X,w,$)}W!==null&&ge===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),se&&I.end(K),w.isScene===!0&&w.onAfterRender(K,w,$),ze.resetDefaultState(),U=-1,j=null,A.pop(),A.length>0?(O=A[A.length-1],E.setTextureUnits(O.state.textureUnits),Et===!0&&je.setGlobalState(K.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?X=F[F.length-1]:X=null,Z!==null&&Z.renderEnd()};function rn(w,$,fe,se){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLightProbeGrid)O.pushLightProbeGrid(w);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||et.intersectsSprite(w)){se&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const He=Oe.update(w),k=w.material;k.visible&&X.push(w,He,k,fe,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||et.intersectsObject(w))){const He=Oe.update(w),k=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),it.copy(He.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(k)){const ue=He.groups;for(let me=0,De=ue.length;me<De;me++){const Xe=ue[me],Ze=k[Xe.materialIndex];Ze&&Ze.visible&&X.push(w,He,Ze,fe,it.z,Xe)}}else k.visible&&X.push(w,He,k,fe,it.z,null)}}const qe=w.children;for(let He=0,k=qe.length;He<k;He++)rn(qe[He],$,fe,se)}function nn(w,$,fe,se){const{opaque:re,transmissive:qe,transparent:He}=w;O.setupLightsView(fe),Et===!0&&je.setGlobalState(K.clippingPlanes,fe),se&&Le.viewport(ne.copy(se)),re.length>0&&Oi(re,$,fe),qe.length>0&&Oi(qe,$,fe),He.length>0&&Oi(He,$,fe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function zi(w,$,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[se.id]===void 0){const Ze=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[se.id]=new aa(1,1,{generateMipmaps:!0,type:Ze?La:Ni,minFilter:Hs,samples:Math.max(4,rt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const qe=O.state.transmissionRenderTarget[se.id],He=se.viewport||ne;qe.setSize(He.z*K.transmissionResolutionScale,He.w*K.transmissionResolutionScale);const k=K.getRenderTarget(),ue=K.getActiveCubeFace(),me=K.getActiveMipmapLevel();K.setRenderTarget(qe),K.getClearColor(D),V=K.getClearAlpha(),V<1&&K.setClearColor(16777215,.5),K.clear(),Nt&&Ie.render(fe);const De=K.toneMapping;K.toneMapping=ia;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),O.setupLightsView(se),Et===!0&&je.setGlobalState(K.clippingPlanes,se),Oi(w,fe,se),E.updateMultisampleRenderTarget(qe),E.updateRenderTargetMipmap(qe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let yt=0,de=$.length;yt<de;yt++){const Ke=$[yt],{object:gt,geometry:xt,material:Ge,group:an}=Ke;if(Ge.side===Ri&&gt.layers.test(se.layers)){const vt=Ge.side;Ge.side=ri,Ge.needsUpdate=!0,ps(gt,fe,se,xt,Ge,an),Ge.side=vt,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(qe),E.updateRenderTargetMipmap(qe))}K.setRenderTarget(k,ue,me),K.setClearColor(D,V),Xe!==void 0&&(se.viewport=Xe),K.toneMapping=De}function Oi(w,$,fe){const se=$.isScene===!0?$.overrideMaterial:null;for(let re=0,qe=w.length;re<qe;re++){const He=w[re],{object:k,geometry:ue,group:me}=He;let De=He.material;De.allowOverride===!0&&se!==null&&(De=se),k.layers.test(fe.layers)&&ps(k,$,fe,ue,De,me)}}function ps(w,$,fe,se,re,qe){w.onBeforeRender(K,$,fe,se,re,qe),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(K,$,fe,se,w,qe),re.transparent===!0&&re.side===Ri&&re.forceSinglePass===!1?(re.side=ri,re.needsUpdate=!0,K.renderBufferDirect(fe,$,se,re,w,qe),re.side=fs,re.needsUpdate=!0,K.renderBufferDirect(fe,$,se,re,w,qe),re.side=Ri):K.renderBufferDirect(fe,$,se,re,w,qe),w.onAfterRender(K,$,fe,se,re,qe)}function An(w,$,fe){$.isScene!==!0&&($=Ft);const se=R.get(w),re=O.state.lights,qe=O.state.shadowsArray,He=re.state.version,k=Pe.getParameters(w,re.state,qe,$,fe,O.state.lightProbeGridArray),ue=Pe.getProgramCacheKey(k);let me=se.programs;se.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;const De=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;se.envMap=ee.get(w.envMap||se.environment,De),se.envMapRotation=se.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,me===void 0&&(w.addEventListener("dispose",jt),me=new Map,se.programs=me);let Xe=me.get(ue);if(Xe!==void 0){if(se.currentProgram===Xe&&se.lightsStateVersion===He)return Pi(w,k),Xe}else k.uniforms=Pe.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,fe,k),w.onBeforeCompile(k,K),Xe=Pe.acquireProgram(k,ue),me.set(ue,Xe),se.uniforms=k.uniforms;const Ze=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=je.uniform),Pi(w,k),se.needsLights=Xi(w),se.lightsStateVersion=He,se.needsLights&&(Ze.ambientLightColor.value=re.state.ambient,Ze.lightProbe.value=re.state.probe,Ze.directionalLights.value=re.state.directional,Ze.directionalLightShadows.value=re.state.directionalShadow,Ze.spotLights.value=re.state.spot,Ze.spotLightShadows.value=re.state.spotShadow,Ze.rectAreaLights.value=re.state.rectArea,Ze.ltc_1.value=re.state.rectAreaLTC1,Ze.ltc_2.value=re.state.rectAreaLTC2,Ze.pointLights.value=re.state.point,Ze.pointLightShadows.value=re.state.pointShadow,Ze.hemisphereLights.value=re.state.hemi,Ze.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ze.spotLightMatrix.value=re.state.spotLightMatrix,Ze.spotLightMap.value=re.state.spotLightMap,Ze.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=O.state.lightProbeGridArray.length>0,se.currentProgram=Xe,se.uniformsList=null,Xe}function ms(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Vc.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function Pi(w,$){const fe=R.get(w);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function gs(w,$){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;z.setFromMatrixPosition($.matrixWorld);for(let fe=0,se=w.length;fe<se;fe++){const re=w[fe];if(re.texture!==null&&re.boundingBox.containsPoint(z))return re}return null}function qn(w,$,fe,se,re){$.isScene!==!0&&($=Ft),E.resetTextureUnits();const qe=$.fog,He=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,k=W===null?K.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pt.workingColorSpace,ue=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,me=ee.get(se.envMap||He,ue),De=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Xe=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!fe.morphAttributes.position,yt=!!fe.morphAttributes.normal,de=!!fe.morphAttributes.color;let Ke=ia;se.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ke=K.toneMapping);const gt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,xt=gt!==void 0?gt.length:0,Ge=R.get(se),an=O.state.lights;if(Et===!0&&(ft===!0||w!==j)){const qt=w===j&&se.id===U;je.setState(se,w,qt)}let vt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==an.state.version||Ge.outputColorSpace!==k||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==me||se.fog===!0&&Ge.fog!==qe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==De||Ge.vertexTangents!==Xe||Ge.morphTargets!==Ze||Ge.morphNormals!==yt||Ge.morphColors!==de||Ge.toneMapping!==Ke||Ge.morphTargetsCount!==xt||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=se.version);let on=Ge.currentProgram;vt===!0&&(on=An(se,$,re),Z&&se.isNodeMaterial&&Z.onUpdateProgram(se,on,Ge));let zn=!1,wn=!1,Yn=!1;const Gt=on.getUniforms(),ln=Ge.uniforms;if(Le.useProgram(on.program)&&(zn=!0,wn=!0,Yn=!0),se.id!==U&&(U=se.id,wn=!0),Ge.needsLights){const qt=gs(O.state.lightProbeGridArray,re);Ge.lightProbeGrid!==qt&&(Ge.lightProbeGrid=qt,wn=!0)}if(zn||j!==w){Le.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Gt.setValue(Q,"projectionMatrix",w.projectionMatrix),Gt.setValue(Q,"viewMatrix",w.matrixWorldInverse);const qi=Gt.map.cameraPosition;qi!==void 0&&qi.setValue(Q,At.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&Gt.setValue(Q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(Q,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,wn=!0,Yn=!0)}if(Ge.needsLights&&(an.state.directionalShadowMap.length>0&&Gt.setValue(Q,"directionalShadowMap",an.state.directionalShadowMap,E),an.state.spotShadowMap.length>0&&Gt.setValue(Q,"spotShadowMap",an.state.spotShadowMap,E),an.state.pointShadowMap.length>0&&Gt.setValue(Q,"pointShadowMap",an.state.pointShadowMap,E)),re.isSkinnedMesh){Gt.setOptional(Q,re,"bindMatrix"),Gt.setOptional(Q,re,"bindMatrixInverse");const qt=re.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Gt.setValue(Q,"boneTexture",qt.boneTexture,E))}re.isBatchedMesh&&(Gt.setOptional(Q,re,"batchingTexture"),Gt.setValue(Q,"batchingTexture",re._matricesTexture,E),Gt.setOptional(Q,re,"batchingIdTexture"),Gt.setValue(Q,"batchingIdTexture",re._indirectTexture,E),Gt.setOptional(Q,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(Q,"batchingColorTexture",re._colorsTexture,E));const mt=fe.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&ht.update(re,fe,on),(wn||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Gt.setValue(Q,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(ln.envMapIntensity.value=$.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=GA()),wn){if(Gt.setValue(Q,"toneMappingExposure",K.toneMappingExposure),Ge.needsLights&&Jn(ln,Yn),qe&&se.fog===!0&&ve.refreshFogUniforms(ln,qe),ve.refreshMaterialUniforms(ln,se,Ae,xe,O.state.transmissionRenderTarget[w.id]),Ge.needsLights&&Ge.lightProbeGrid){const qt=Ge.lightProbeGrid;ln.probesSH.value=qt.texture,ln.probesMin.value.copy(qt.boundingBox.min),ln.probesMax.value.copy(qt.boundingBox.max),ln.probesResolution.value.copy(qt.resolution)}Vc.upload(Q,ms(Ge),ln,E)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Vc.upload(Q,ms(Ge),ln,E),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(Q,"center",re.center),Gt.setValue(Q,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(Q,"normalMatrix",re.normalMatrix),Gt.setValue(Q,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const qt=se.uniformsGroups;for(let qi=0,za=qt.length;qi<za;qi++){const vs=qt[qi];ye.update(vs,on),ye.bind(vs,on)}}return on}function Jn(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Xi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,$,fe){const se=R.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),R.get(w.texture).__webglTexture=$,R.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const fe=R.get(w);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0};const Wi=Q.createFramebuffer();this.setRenderTarget=function(w,$=0,fe=0){W=w,he=$,ge=fe;let se=null,re=!1,qe=!1;if(w){const k=R.get(w);if(k.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer),ne.copy(w.viewport),be.copy(w.scissor),ie=w.scissorTest,Le.viewport(ne),Le.scissor(be),Le.setScissorTest(ie),U=-1;return}else if(k.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(k.__hasExternalTextures)E.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(k.__boundDepthTexture!==De){if(De!==null&&R.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const ue=w.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(qe=!0);const me=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(me[$])?se=me[$][fe]:se=me[$],re=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?se=R.get(w).__webglMultisampledFramebuffer:Array.isArray(me)?se=me[fe]:se=me,ne.copy(w.viewport),be.copy(w.scissor),ie=w.scissorTest}else ne.copy(we).multiplyScalar(Ae).floor(),be.copy(We).multiplyScalar(Ae).floor(),ie=nt;if(fe!==0&&(se=Wi),Le.bindFramebuffer(Q.FRAMEBUFFER,se)&&Le.drawBuffers(w,se),Le.viewport(ne),Le.scissor(be),Le.setScissorTest(ie),re){const k=R.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,k.__webglTexture,fe)}else if(qe){const k=$;for(let ue=0;ue<w.textures.length;ue++){const me=R.get(w.textures[ue]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ue,me.__webglTexture,fe,k)}}else if(w!==null&&fe!==0){const k=R.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,k.__webglTexture,fe)}U=-1},this.readRenderTargetPixels=function(w,$,fe,se,re,qe,He,k=0){if(!(w&&w.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(ue=ue[He]),ue){Le.bindFramebuffer(Q.FRAMEBUFFER,ue);try{const me=w.textures[k],De=me.format,Xe=me.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+k),!rt.textureFormatReadable(De)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Xe)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-se&&fe>=0&&fe<=w.height-re&&Q.readPixels($,fe,se,re,q.convert(De),q.convert(Xe),qe)}finally{const me=W!==null?R.get(W).__webglFramebuffer:null;Le.bindFramebuffer(Q.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(w,$,fe,se,re,qe,He,k=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(ue=ue[He]),ue)if($>=0&&$<=w.width-se&&fe>=0&&fe<=w.height-re){Le.bindFramebuffer(Q.FRAMEBUFFER,ue);const me=w.textures[k],De=me.format,Xe=me.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+k),!rt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ze),Q.bufferData(Q.PIXEL_PACK_BUFFER,qe.byteLength,Q.STREAM_READ),Q.readPixels($,fe,se,re,q.convert(De),q.convert(Xe),0);const yt=W!==null?R.get(W).__webglFramebuffer:null;Le.bindFramebuffer(Q.FRAMEBUFFER,yt);const de=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await dS(Q,de,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ze),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,qe),Q.deleteBuffer(Ze),Q.deleteSync(de),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,fe=0){const se=Math.pow(2,-fe),re=Math.floor(w.image.width*se),qe=Math.floor(w.image.height*se),He=$!==null?$.x:0,k=$!==null?$.y:0;E.setTexture2D(w,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,fe,0,0,He,k,re,qe),Le.unbindTexture()};const pn=Q.createFramebuffer(),xs=Q.createFramebuffer();this.copyTextureToTexture=function(w,$,fe=null,se=null,re=0,qe=0){let He,k,ue,me,De,Xe,Ze,yt,de;const Ke=w.isCompressedTexture?w.mipmaps[qe]:w.image;if(fe!==null)He=fe.max.x-fe.min.x,k=fe.max.y-fe.min.y,ue=fe.isBox3?fe.max.z-fe.min.z:1,me=fe.min.x,De=fe.min.y,Xe=fe.isBox3?fe.min.z:0;else{const ln=Math.pow(2,-re);He=Math.floor(Ke.width*ln),k=Math.floor(Ke.height*ln),w.isDataArrayTexture?ue=Ke.depth:w.isData3DTexture?ue=Math.floor(Ke.depth*ln):ue=1,me=0,De=0,Xe=0}se!==null?(Ze=se.x,yt=se.y,de=se.z):(Ze=0,yt=0,de=0);const gt=q.convert($.format),xt=q.convert($.type);let Ge;$.isData3DTexture?(E.setTexture3D($,0),Ge=Q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(E.setTexture2DArray($,0),Ge=Q.TEXTURE_2D_ARRAY):(E.setTexture2D($,0),Ge=Q.TEXTURE_2D),Le.activeTexture(Q.TEXTURE0),Le.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,$.flipY),Le.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Le.pixelStorei(Q.UNPACK_ALIGNMENT,$.unpackAlignment);const an=Le.getParameter(Q.UNPACK_ROW_LENGTH),vt=Le.getParameter(Q.UNPACK_IMAGE_HEIGHT),on=Le.getParameter(Q.UNPACK_SKIP_PIXELS),zn=Le.getParameter(Q.UNPACK_SKIP_ROWS),wn=Le.getParameter(Q.UNPACK_SKIP_IMAGES);Le.pixelStorei(Q.UNPACK_ROW_LENGTH,Ke.width),Le.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ke.height),Le.pixelStorei(Q.UNPACK_SKIP_PIXELS,me),Le.pixelStorei(Q.UNPACK_SKIP_ROWS,De),Le.pixelStorei(Q.UNPACK_SKIP_IMAGES,Xe);const Yn=w.isDataArrayTexture||w.isData3DTexture,Gt=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const ln=R.get(w),mt=R.get($),qt=R.get(ln.__renderTarget),qi=R.get(mt.__renderTarget);Le.bindFramebuffer(Q.READ_FRAMEBUFFER,qt.__webglFramebuffer),Le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let za=0;za<ue;za++)Yn&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get(w).__webglTexture,re,Xe+za),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get($).__webglTexture,qe,de+za)),Q.blitFramebuffer(me,De,He,k,Ze,yt,He,k,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Le.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||R.has(w)){const ln=R.get(w),mt=R.get($);Le.bindFramebuffer(Q.READ_FRAMEBUFFER,pn),Le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,xs);for(let qt=0;qt<ue;qt++)Yn?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ln.__webglTexture,re,Xe+qt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ln.__webglTexture,re),Gt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mt.__webglTexture,qe,de+qt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mt.__webglTexture,qe),re!==0?Q.blitFramebuffer(me,De,He,k,Ze,yt,He,k,Q.COLOR_BUFFER_BIT,Q.NEAREST):Gt?Q.copyTexSubImage3D(Ge,qe,Ze,yt,de+qt,me,De,He,k):Q.copyTexSubImage2D(Ge,qe,Ze,yt,me,De,He,k);Le.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Gt?w.isDataTexture||w.isData3DTexture?Q.texSubImage3D(Ge,qe,Ze,yt,de,He,k,ue,gt,xt,Ke.data):$.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ge,qe,Ze,yt,de,He,k,ue,gt,Ke.data):Q.texSubImage3D(Ge,qe,Ze,yt,de,He,k,ue,gt,xt,Ke):w.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,qe,Ze,yt,He,k,gt,xt,Ke.data):w.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,qe,Ze,yt,Ke.width,Ke.height,gt,Ke.data):Q.texSubImage2D(Q.TEXTURE_2D,qe,Ze,yt,He,k,gt,xt,Ke);Le.pixelStorei(Q.UNPACK_ROW_LENGTH,an),Le.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,vt),Le.pixelStorei(Q.UNPACK_SKIP_PIXELS,on),Le.pixelStorei(Q.UNPACK_SKIP_ROWS,zn),Le.pixelStorei(Q.UNPACK_SKIP_IMAGES,wn),qe===0&&$.generateMipmaps&&Q.generateMipmap(Ge),Le.unbindTexture()},this.initRenderTarget=function(w){R.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){he=0,ge=0,W=null,Le.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pt._getUnpackColorSpace()}}function XA({isWarping:r,theme:t="dark"}){const i=Ue.useRef(null),s=Ue.useRef(null),l=Ue.useRef(r);return Ue.useEffect(()=>{l.current=r},[r]),Ue.useEffect(()=>{const c=i.current,h=s.current;if(!c||!h)return;let m=6514417,g=440020;t==="cyberpunk"?(m=16711765,g=65484):t==="ai"?(m=9133302,g=6514417):t==="terminal"?(m=2278750,g=1483594):t==="light"&&(m=5195493,g=440020);const p=new wS;p.fog=new ip(131848,.015);const y=c.clientWidth/c.clientHeight,_=new Ci(75,y,.1,1e3);_.position.set(0,0,10);const x=new VA({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setSize(c.clientWidth,c.clientHeight,!1),x.setPixelRatio(Math.min(window.devicePixelRatio,2));const M=120,T=100,L=8,S=new Ko(L,L,M,32,T,!0);S.rotateX(Math.PI/2);const b=new Br({color:m,wireframe:!0,transparent:!0,opacity:0,side:Ri}),N=new Qn(S,b);p.add(N);const P=new Li({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new kt(m)},uSecondaryColor:{value:new kt(g)}},transparent:!0,side:Ri,blending:Zo,depthWrite:!1}),z=new Ko(L-.1,L-.1,M,48,T,!0);z.rotateX(Math.PI/2);const X=new Qn(z,P);p.add(X);const O=new Ko(L+1.2,L+1.2,M,12,35,!0);O.rotateX(Math.PI/2);const F=new Br({color:g,wireframe:!0,transparent:!0,opacity:0,side:Ri}),A=new Qn(O,F);p.add(A);const I=15,K=[],H=new sp(L+.3,.08,8,48);for(let Qe=0;Qe<I;Qe++){const at=new Br({color:Qe%2===0?m:g,transparent:!0,opacity:0}),rt=new Qn(H,at);rt.position.z=Qe/I*M-M/2,p.add(rt),K.push(rt)}const Z=new Li({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new kt(m)},uSecondaryColor:{value:new kt(g)}},transparent:!0,depthWrite:!1,blending:Zo}),he=new Qn(new il(280,280),Z);he.position.set(0,0,-85),p.add(he);const ge=900,W=new Float32Array(ge*3),U=new Float32Array(ge*3),j=[],ne=[],be=[],ie=[],D=()=>{const Qe=document.createElement("canvas");Qe.width=16,Qe.height=16;const at=Qe.getContext("2d");if(at){const rt=at.createRadialGradient(8,8,0,8,8,8);rt.addColorStop(0,"rgba(255, 255, 255, 1)"),rt.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),rt.addColorStop(.5,"rgba(255, 255, 255, 0.25)"),rt.addColorStop(1,"rgba(255, 255, 255, 0)"),at.fillStyle=rt,at.fillRect(0,0,16,16)}return new FS(Qe)};for(let Qe=0;Qe<ge;Qe++){const at=(Math.random()-.5)*90,rt=(Math.random()-.5)*90,Le=Math.random()*100-85;W[Qe*3]=at,W[Qe*3+1]=rt,W[Qe*3+2]=Le,j.push(Math.random()*.08+.02),ne.push(1+Math.random()*2.5),be.push(Math.random()*Math.PI*2);let ot=1,R=1,E=1;const ee=Math.random();ee<.18?(ot=.82,R=.9,E=1):ee<.32&&(ot=1,R=.94,E=.78),ie.push([ot,R,E]),U[Qe*3]=ot,U[Qe*3+1]=R,U[Qe*3+2]=E}const V=new li;V.setAttribute("position",new Di(W,3)),V.setAttribute("color",new Di(U,3));const B=new Fv({size:.38,map:D(),transparent:!0,blending:Zo,depthWrite:!1,vertexColors:!0,sizeAttenuation:!0}),xe=new IS(V,B);p.add(xe);const Ae=new ap(1.5,32,32),J=new Br({color:16777215,transparent:!0,opacity:0}),Ee=new Qn(Ae,J);Ee.position.set(0,0,-45),p.add(Ee);let we=0,We=0,nt=0,et=0;const Et=Qe=>{we=(Qe.clientX-window.innerWidth/2)/110,We=(Qe.clientY-window.innerHeight/2)/110};window.addEventListener("mousemove",Et);const ft=()=>{if(!c||!h)return;const Qe=c.clientWidth,at=c.clientHeight;_.aspect=Qe/at,_.updateProjectionMatrix(),x.setSize(Qe,at,!1)},dt=new ResizeObserver(()=>{ft()});dt.observe(c);let At=.25,it=.0015,Ft=0,Nt=0,hn;const Q=()=>{const Qe=l.current;Nt+=Qe?.024:.012,Qe?(Ft=Math.min(1,Ft+.018),At=Math.min(4.8,At+.15),it=Math.min(.06,it+.0018),_.fov=Math.min(136,_.fov+1.2),_.updateProjectionMatrix(),J.opacity=Math.min(1,J.opacity+.045),Ee.scale.addScalar(.4)):(Ft=Math.max(0,Ft-.03),At=Math.max(.25,At-.05),it=Math.max(.0015,it-.001),_.fov=Math.max(75,_.fov-1.5),_.updateProjectionMatrix(),J.opacity=Math.max(0,J.opacity-.05),Ee.scale.x>1&&Ee.scale.set(1,1,1)),b.opacity=.14*Ft,F.opacity=.09*Ft,P.uniforms.uWarpProgress.value=Ft,P.uniforms.uTime.value=Nt,Z.uniforms.uTime.value=Nt,Z.uniforms.uWarpProgress.value=Ft,N.rotation.z+=it,A.rotation.z-=it*.7,X.rotation.z+=it*.4;const at=Date.now()*.002;K.forEach((ot,R)=>{ot.position.z,ot.position.z+=At,ot.position.z>15&&(ot.position.z=-55);const E=1+Math.sin(at+R)*.03+(Qe?.08:0);ot.scale.set(E,E,1),ot.material&&!Array.isArray(ot.material)&&(ot.material.opacity=.65*Ft)}),nt+=(we-nt)*.06,et+=(We-et)*.06,_.position.x=nt,_.position.y=-et,_.lookAt(0,0,-50);const rt=V.attributes.position.array,Le=V.attributes.color.array;for(let ot=0;ot<ge;ot++){const R=ot*3,E=Qe?j[ot]*120+At*12:j[ot]+At*.08;if(rt[R+2]+=E,rt[R+2]>12&&(rt[R+2]=-85,rt[R]=(Math.random()-.5)*90,rt[R+1]=(Math.random()-.5)*90),!Qe){const Re=rt[R],Oe=rt[R+1],Pe=4e-4*(ot%2===0?1:-1),ve=Math.cos(Pe),ae=Math.sin(Pe);rt[R]=Re*ve-Oe*ae,rt[R+1]=Re*ae+Oe*ve}const ee=ie[ot];let Se=1;Qe||(Se=.35+.65*Math.sin(Nt*ne[ot]+be[ot])),Le[R]=ee[0]*Se,Le[R+1]=ee[1]*Se,Le[R+2]=ee[2]*Se}Qe?B.size=Math.min(.55,B.size+.012):B.size=Math.max(.38,B.size-.01),V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0,x.render(p,_),hn=requestAnimationFrame(Q)};return Q(),()=>{cancelAnimationFrame(hn),window.removeEventListener("mousemove",Et),dt.disconnect(),x.dispose(),S.dispose(),b.dispose(),z.dispose(),P.dispose(),O.dispose(),F.dispose(),H.dispose(),V.dispose(),B.dispose(),Ae.dispose(),J.dispose(),he.geometry.dispose(),Z.dispose()}},[t]),d.jsx("div",{ref:i,className:`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${t==="light"?"bg-[#f8fafc]":"bg-[#020308]"}`,children:d.jsx("canvas",{ref:s,className:"w-full h-full block",style:{filter:r?"contrast(1.15) brightness(1.1)":"none"}})})}const WA="/assets/avatar-BRuvllXD.png",Yo=()=>{if(typeof window<"u"){const r=window.location.hostname;if(r==="localhost"||r==="127.0.5.1"||r==="127.0.0.1"||r.startsWith("192.168.")||r.startsWith("10.")||r.endsWith(".local"))return"";const t="rsacfzyiydjxiqnynxfb";if(r==="farhankabir.me"||r.endsWith(".github.io"))return`https://${t}.supabase.co/functions/v1/api`}return""},Qf=r=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...r,children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Jf=r=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...r,children:d.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0a3.26 3.26 0 01-3.26 3.27 3.26 3.26 0 01-3.26-3.27 3.26 3.26 0 013.26-3.27 3.26 3.26 0 013.26 3.27zm3.04 0a1.07 1.07 0 01-1.07 1.06 1.07 1.07 0 01-1.07-1.06 1.07 1.07 0 011.07-1.06 1.07 1.07 0 011.07 1.06z"})});function qA({item:r,idx:t,theme:i}){const s=Ue.useRef(null),[l,c]=Ue.useState(!1);Ue.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:.1,rootMargin:"0px 0px -60px 0px"}),g=s.current;return g&&m.observe(g),()=>{g&&m.unobserve(g)}},[]);const h=t%2===0;return d.jsxs("div",{ref:s,className:`flex flex-col md:flex-row items-start ${h?"md:flex-row-reverse":""} relative transition-all duration-700 ease-out ${l?"opacity-100 translate-x-0":`opacity-0 ${h?"translate-x-10 md:-translate-x-10":"translate-x-10"}`}`,children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:`w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg transition-all duration-500 ${l?"border-cyan-400/80 scale-100":"border-zinc-850 scale-75"}`,children:d.jsx("span",{className:`w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 transition-transform duration-500 ${l?"scale-100":"scale-50"}`})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-12 md:pl-0",children:d.jsxs("div",{className:`p-6 md:p-8 rounded-2xl border backdrop-blur-md relative group transition-all duration-500 ${i==="light"?"bg-white/80 border-slate-200 shadow-lg hover:border-indigo-400 hover:shadow-indigo-500/5":"bg-zinc-950/45 border-zinc-900 shadow-2xl hover:border-zinc-850 hover:shadow-cyan-500/5"}`,children:[d.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1",children:r.year}),d.jsx("h3",{className:`text-base md:text-lg font-sans font-bold leading-tight transition-colors group-hover:text-cyan-300 ${i==="light"?"text-slate-800":"text-white"}`,children:r.title}),d.jsx("span",{className:"text-[10px] font-mono text-zinc-550 block mt-1",children:r.company})]}),d.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[9px] font-mono border font-medium uppercase ${r.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":r.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":r.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:r.company})]}),d.jsx("ul",{className:"space-y-3 mb-6 text-zinc-400",children:r.achievements.map((m,g)=>d.jsxs("li",{className:"flex items-start text-[11px] leading-relaxed font-sans text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0"}),d.jsx("span",{children:m})]},g))}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 select-none",children:r.technologies.map(m=>d.jsx("span",{className:"px-2 py-0.5 rounded-md text-[9px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:m},m))})]})})]})}function YA({isWarping:r,theme:t,soundOn:i,triggerSound:s,onLaunchOS:l,onOpenWindowDirectly:c,articles:h=[],onOpenArticleDirectly:m}){const g=Ue.useRef(null),[p,y]=Ue.useState(!1),[_,x]=Ue.useState("All"),[M,T]=Ue.useState(0),[L,S]=Ue.useState(""),[b,N]=Ue.useState(""),[P,z]=Ue.useState(""),[X,O]=Ue.useState(""),[F,A]=Ue.useState({}),[I,K]=Ue.useState(!1),[H,Z]=Ue.useState(!1),he=Ue.useRef(null),ge=Ue.useRef(null);Ue.useEffect(()=>{let B=!1;const xe=()=>{B||(window.requestAnimationFrame(()=>{const Ae=window.scrollY||document.documentElement.scrollTop;y(Ae>500);const J=he.current;if(J){const Ee=J.getBoundingClientRect(),we=window.innerHeight,We=Ee.top,nt=Ee.height,et=we*.8,Et=we*.2,ft=nt+et-Et,dt=et-We,At=Math.min(Math.max(dt/ft,0),1);ge.current&&(ge.current.style.transform=`scaleY(${At})`)}B=!1}),B=!0)};return window.addEventListener("scroll",xe,{passive:!0}),setTimeout(xe,100),()=>{window.removeEventListener("scroll",xe)}},[]);const W=()=>{window.scrollTo({top:0,behavior:"smooth"}),s(1e3,.05)},U=(B,xe)=>{B.preventDefault();const Ae=document.getElementById(xe);if(Ae){const J=Ae.getBoundingClientRect(),Ee=window.scrollY||document.documentElement.scrollTop,we=J.top+Ee-64;window.scrollTo({top:we,behavior:"smooth"})}};Ue.useEffect(()=>{const B=setInterval(()=>{T(xe=>(xe+1)%be.length)},8e3);return()=>clearInterval(B)},[]);const ne=(()=>{switch(t){case"cyberpunk":return{textPrimary:"text-[#00ffcc]",textSecondary:"text-pink-400",borderAccent:"border-pink-500/20 hover:border-pink-500/50",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] border border-pink-400/50",btnSecondary:"border-pink-500/30 text-pink-300 hover:bg-pink-550/10 bg-black/60",statCardGlow:"hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",skillBar:"from-pink-500 to-[#00ffcc]",activeTabBtn:"bg-pink-600 text-white border-pink-500",tabBtn:"text-pink-400 border-pink-500/20 hover:border-pink-500/40 bg-zinc-950/40",badgeStyle:"bg-pink-500/10 border border-pink-500/20 text-pink-300",gradientBg:"from-pink-500/5 via-purple-500/2 to-transparent"};case"ai":return{textPrimary:"text-purple-300",textSecondary:"text-cyan-400",borderAccent:"border-purple-500/20 hover:border-cyan-400/40",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-400/40",btnSecondary:"border-purple-500/30 text-cyan-200 hover:bg-purple-950/40 bg-black/60",statCardGlow:"hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",skillBar:"from-purple-500 to-cyan-400",activeTabBtn:"bg-purple-600 text-white border-purple-500",tabBtn:"text-purple-300 border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/40",badgeStyle:"bg-purple-500/10 border border-purple-500/20 text-purple-300",gradientBg:"from-purple-500/5 via-indigo-500/2 to-transparent"};case"terminal":return{textPrimary:"text-[#33ff33]",textSecondary:"text-[#16a34a]",borderAccent:"border-[#33ff33]/20 hover:border-[#33ff33]/50",btnPrimary:"bg-[#33ff33] text-black hover:bg-[#33ff33]/85 shadow-[0_0_15px_rgba(51,255,51,0.3)] border border-[#33ff33]/50",btnSecondary:"border-[#33ff33]/30 text-[#33ff33] hover:bg-[#33ff33]/10 bg-black/60",statCardGlow:"hover:border-[#33ff33]/50 hover:shadow-[0_0_25px_rgba(51,255,51,0.2)]",skillBar:"from-[#16a34a] to-[#33ff33]",activeTabBtn:"bg-zinc-900 text-[#33ff33] border-[#33ff33]",tabBtn:"text-[#33ff33]/80 border-[#33ff33]/20 hover:border-[#33ff33]/40 bg-black/40",badgeStyle:"bg-emerald-950/20 border border-[#33ff33]/20 text-[#33ff33]",gradientBg:"from-[#33ff33]/3 to-transparent"};case"light":return{textPrimary:"text-indigo-600",textSecondary:"text-sky-600",borderAccent:"border-slate-300 hover:border-indigo-400",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white shadow-md",btnSecondary:"border-slate-300 text-slate-700 hover:bg-slate-100 bg-white",statCardGlow:"hover:border-indigo-400 hover:shadow-lg",skillBar:"from-indigo-500 to-sky-500",activeTabBtn:"bg-indigo-650 text-white border-indigo-650",tabBtn:"text-slate-600 border-slate-200 hover:border-slate-350 bg-slate-50",badgeStyle:"bg-indigo-50 border border-indigo-100 text-indigo-600",gradientBg:"from-indigo-500/3 via-purple-500/1 to-transparent"};default:return{textPrimary:"text-sky-400",textSecondary:"text-indigo-400",borderAccent:"border-zinc-800/80 hover:border-[#00ffcc]/30",btnPrimary:"bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40",btnSecondary:"border-zinc-800 text-zinc-300 hover:bg-zinc-900/60 bg-black/60",statCardGlow:"hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]",skillBar:"from-indigo-500 to-sky-400",activeTabBtn:"bg-indigo-650 text-white border-indigo-500",tabBtn:"text-zinc-400 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",badgeStyle:"bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",gradientBg:"from-indigo-500/5 via-purple-500/2 to-transparent"}}})(),be=[{text:"Farhan's expertise in fine-tuning BERT and RoBERTa models for clinical emotional text classification was pivotal to our diagnostics program. His depth of knowledge in linguistic anomalies is world-class.",author:"Dr. Sarah Jenkins",role:"Lead Clinical NLP Researcher, Cognitive Diagnostics Lab",initials:"SJ"},{text:"The Ink Home's WebGL carousel design and custom caching proxy were executed brilliantly. Farhan consistently delivers high-performance SaaS components while respecting peak engineering aesthetic rules.",author:"Marcus Sterling",role:"Product Director, Synthetix Solutions",initials:"MS"},{text:"An absolute powerhouse developer. Farhan balances deep statistical NLP modeling with pixel-perfect responsive layouts inspired by Linear. TypeRush is a masterclass in Web Audio synchronization.",author:"Linus O.",role:"Senior Open Source Systems Architect",initials:"LO"}],ie=[{title:"Deep Learning Specialization",issuer:"deeplearning.ai / Coursera",date:"2024",skills:["CNNs","RNNs/LSTMs","Transformer Architecture","Attention Mechanisms"]},{title:"Google Cloud Associate Engineer",issuer:"Google Cloud",date:"2025",skills:["GCP Compute Engines","GKE Containers","IAM Security","Cloud SQL Monitoring"]},{title:"Natural Language Processing Professional",issuer:"Hugging Face / Stanford Online",date:"2024",skills:["Tokenization Pipelines","Model Fine-tuning","ONNX Optimization","Quantization"]}],D=tn.skills.filter(B=>_==="All"||_==="AI/ML"&&(B.category==="AI/ML"||B.category==="Research & Science")||_==="Frontend"&&B.category==="Frontend"||_==="Backend"&&B.category==="Backend"&&B.name!=="PostgreSQL"&&B.name!=="Redis Caching"||_==="Database"&&(B.name==="PostgreSQL"||B.name==="Redis Caching")||_==="DevOps"&&B.category==="Systems & Devops"),V=B=>{B.preventDefault(),s(950,.04);const xe={};if(L.trim()||(xe.name="Name is required"),b.trim()?/\S+@\S+\.\S+/.test(b)||(xe.email="Please provide a valid email"):xe.email="Email is required",P.trim()||(xe.subject="Subject is required"),X.trim()||(xe.message="Message details cannot be empty"),Object.keys(xe).length>0){A(xe);return}A({}),Z(!0);const Ae=Yo();fetch(`${Ae}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,email:b,subject:P,message:X})}).then(async J=>{const Ee=await J.json();if(!J.ok)throw new Error(Ee.error||"Failed to transmit message.");Ee.analysis&&console.log("[Transmission Diagnostics Analysed]:",Ee.analysis),Z(!1),K(!0),s(1050,.12),S(""),N(""),z(""),O("")}).catch(J=>{console.warn("Real backend message transmission failed, reverting to local fallback:",J),setTimeout(()=>{Z(!1),K(!0),s(1050,.12),S(""),N(""),z(""),O("")},1200)})};return d.jsxs("div",{ref:g,className:"relative min-h-screen flex flex-col w-full select-text bg-transparent",children:[d.jsx(XA,{isWarping:r,theme:t}),d.jsx("div",{className:`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${ne.gradientBg} opacity-80`}),d.jsxs("header",{className:`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${t==="light"?"border-slate-200/80 bg-white/70":"border-zinc-900/60 bg-black/45"} backdrop-blur-md transition-all`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-black tracking-widest uppercase font-sans ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"FARHAN KABIR"}),d.jsx("span",{className:"text-[8.5px] font-mono text-zinc-550 uppercase tracking-widest",children:"COGNITIVE SYSTEMS ARCHITECT"})]})]}),d.jsxs("nav",{className:"hidden lg:flex items-center gap-5 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400",children:[d.jsx("a",{href:"#about",onClick:B=>{s(900,.02),U(B,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:B=>{s(900,.02),U(B,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:B=>{s(900,.02),U(B,"timeline")},className:"hover:text-white transition-colors",children:"CHRONOLOGY"}),d.jsx("a",{href:"#prof-timeline",onClick:B=>{s(900,.02),U(B,"prof-timeline")},className:"hover:text-white transition-colors",children:"PROF. TIMELINE"}),d.jsx("a",{href:"#projects",onClick:B=>{s(900,.02),U(B,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#certifications",onClick:B=>{s(900,.02),U(B,"certifications")},className:"hover:text-white transition-colors",children:"CERTIFICATES"}),d.jsx("a",{href:"#contact",onClick:B=>{s(900,.02),U(B,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsx("div",{className:"flex items-center gap-3",children:d.jsx("button",{onClick:l,disabled:r,className:`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${ne.btnPrimary}`,children:r?"Warp Core Charging...":"Launch OS"})})]}),d.jsxs("section",{className:"relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10",children:[d.jsxs("div",{className:"relative mb-8 flex items-center justify-center animate-fade-in",children:[d.jsx("div",{className:"absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none"}),d.jsx("div",{className:"absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none"}),d.jsx("div",{className:"absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none"}),d.jsxs("div",{className:"relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00ffcc]",children:[d.jsx("img",{src:WA,alt:"Farhan Kabir portrait",className:"w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"})]})]}),d.jsxs("div",{className:"max-w-3xl space-y-4",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300",children:[d.jsx(x1,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"CLINICAL NLP & SAAS PLATFORMS"})]}),d.jsxs("h1",{className:"text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase select-text",children:[d.jsx("span",{className:t==="light"?"text-slate-800":"text-white",children:"I am "}),d.jsx("span",{className:`bg-clip-text text-transparent bg-gradient-to-r ${t==="light"?"from-indigo-650 to-sky-655":"from-indigo-400 via-sky-400 to-[#00ffcc]"}`,children:tn.name})]}),d.jsx("h2",{className:"text-base sm:text-xl font-bold font-mono tracking-wider text-zinc-400 select-text",children:tn.title}),d.jsxs("p",{className:"text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed select-text font-normal",children:[tn.tagline," Fusing low-latency model evaluation pipelines with Linear-grade web experiences."]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md",children:[d.jsx("button",{onClick:l,className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${ne.btnPrimary}`,children:"Activate Cosmic OS"}),d.jsxs("button",{onClick:()=>c("resume"),className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${ne.btnSecondary}`,children:[d.jsx(Wh,{className:"w-4 h-4"}),d.jsx("span",{children:"Get Resume (CV)"})]})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3 mt-8 text-[9px] font-mono",children:[d.jsxs("button",{onClick:()=>c("brief"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[d.jsx(dv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"MISSION BRIEF (CONTACT)"})]}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"GitHub",children:d.jsx(hc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"LinkedIn",children:d.jsx(pf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Medium",children:d.jsx(Jf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"X (Twitter)",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Instagram",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Gravatar",children:d.jsx(mf,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse",children:[d.jsx("span",{className:"text-[9px] font-mono text-zinc-600 tracking-widest uppercase",children:"SCROLL FOR DIAGNOSTICS"}),d.jsx("div",{className:"w-px h-6 bg-zinc-800"})]})]}),d.jsxs("section",{id:"about",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"01 // BIOGRAPHY MODULE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"KERNEL SPECS STABLE"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed",children:[d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"System Bio:"}),d.jsx("p",{className:"select-text",children:tn.about})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"Core Mission Directive:"}),d.jsxs("p",{className:"select-text italic",children:['"',tn.focus,'"']})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"Active Research Focus:"}),d.jsxs("ul",{className:"list-disc pl-4 space-y-2 mt-1 select-text",children:[d.jsx("li",{children:"Evaluating token probability sequences to block prompt injection triggers before inference."}),d.jsx("li",{children:"Fusing Wav2Vec audio metrics with BERT semantic layers to capture speech emotional variance."}),d.jsx("li",{children:"Conducting validation diagnostics for psychiatric speech anomalies."})]})]})]}),d.jsx("div",{className:"lg:col-span-5 grid grid-cols-2 gap-4",children:[{label:"EXPERIENCE",value:"4+ Years",desc:"AI & Full-Stack Architectures"},{label:"NLP PAPERS",value:"4 Pubs",desc:"IEEE Journals & Conference Index"},{label:"DEPLOYED SAAS",value:"12+ Apps",desc:"High-performance codebases"},{label:"CERTIFICATES",value:"5+ Credentials",desc:"Deep Learning & GCP"}].map((B,xe)=>d.jsxs("div",{onClick:()=>s(900,.02),className:`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${ne.statCardGlow}`,children:[d.jsx("span",{className:"text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold",children:B.label}),d.jsxs("div",{className:"mt-3",children:[d.jsx("span",{className:`text-xl sm:text-2xl font-black block tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:B.value}),d.jsx("span",{className:"text-[9px] text-zinc-550 block mt-1 font-sans font-normal",children:B.desc})]})]},xe))})]})]}),d.jsxs("section",{id:"skills",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"02 // SKILLOBSERVATION OBSERVATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"MATRIX FILTERS FULLY LOADED"})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]",children:["All","AI/ML","Frontend","Backend","Database","DevOps"].map(B=>d.jsx("button",{onClick:()=>{x(B),s(800,.03)},className:`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${_===B?ne.activeTabBtn:ne.tabBtn}`,children:B==="DevOps"?"DEVOPS & CLOUD":B.toUpperCase()},B))}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:D.map(B=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono",children:[d.jsxs("div",{className:"flex justify-between items-center text-[10px] mb-2.5",children:[d.jsx("span",{className:`font-bold ${t==="light"?"text-slate-700":"text-slate-200"}`,children:B.name}),d.jsxs("span",{className:"text-zinc-550 font-semibold",children:[B.weight*20,"%"]})]}),d.jsx("div",{className:"w-full h-1 bg-zinc-950 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full bg-gradient-to-r ${ne.skillBar} rounded-full`,style:{width:`${B.weight*20}%`}})})]},B.name))})]}),d.jsxs("section",{id:"timeline",className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03 // EXPERIENCE CHRONOLOGY"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DATA VALIDATED FOR SECURE HISTORIES"})]}),d.jsx("div",{className:"relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12",children:tn.timeline.map((B,xe)=>d.jsxs("div",{className:"relative pl-8 sm:pl-12 group select-text",children:[d.jsx("div",{className:"absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:border-[#00ffcc] shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_8px_rgba(0,255,204,0.8)] transition-all duration-300"}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[d.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${ne.badgeStyle}`,children:B.year}),d.jsx("span",{className:"text-zinc-550 font-mono text-[9.5px]",children:B.company})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:B.title}),d.jsxs("p",{className:"text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed",children:[B.role," ",B.description]}),d.jsx("ul",{className:"mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400",children:B.achievements.map((Ae,J)=>d.jsxs("li",{className:"flex items-start gap-2 leading-relaxed",children:[d.jsx(Xc,{className:`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-600":"text-[#00ffcc]"}`}),d.jsx("span",{children:Ae})]},J))}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:B.technologies.map(Ae=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500",children:Ae},Ae))})]},xe))})]}),d.jsxs("section",{id:"prof-timeline",className:"relative py-24 px-6 md:px-12 max-w-6xl w-full mx-auto space-y-12 z-10 scroll-mt-16",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03.5 // PROFESSIONAL TIMELINE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE WORK EXPERIENCES"})]}),d.jsxs("div",{ref:he,className:"relative",children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:ge,className:"absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-16 relative z-10",children:tn.professionalTimeline.map((B,xe)=>d.jsx(qA,{item:B,idx:xe,theme:t},xe))})]})]}),d.jsxs("section",{id:"projects",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04 // PORTFOLIO INNOVATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SANDBOX RUNTIMES SYNCHRONIZED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:tn.projects.map(B=>d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${ne.badgeStyle}`,children:B.category}),d.jsx("span",{className:"text-[9px] text-zinc-550 font-semibold",children:B.timeline})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${t==="light"?"text-slate-800":"text-white"}`,children:B.title}),d.jsx("p",{className:"text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed",children:B.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono",children:B.metrics.map(xe=>d.jsxs("div",{className:"p-1",children:[d.jsx("span",{className:`text-[9.5px] font-bold block ${t==="light"?"text-indigo-650":"text-[#00ffcc]"}`,children:xe.value}),d.jsx("span",{className:"text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1",children:xe.label})]},xe.label))})]}),d.jsxs("div",{className:"space-y-4 pt-4 border-t border-zinc-900/60 select-none",children:[d.jsx("div",{className:"flex flex-wrap gap-1",children:B.techStack.map(xe=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500",children:xe},xe))}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{c("projects")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"DEPLOY SIMULATOR SCREEN →"}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"View Source on GitHub",children:d.jsx(hc,{className:"w-3.5 h-3.5"})})]})]})]},B.id))})]}),d.jsxs("section",{id:"writings",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04.5 // MEDIUM WRITING SYNDICATE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DYNAMIC RSS CHANNELS ACTIVE"})]}),h.length===0?d.jsx("div",{className:"text-center py-10 bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-6 font-mono text-zinc-550 text-xs",children:"⏳ Synchronizing narrative telemetry vectors..."}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.slice(0,6).map((B,xe)=>{const Ae=xe===0;return d.jsxs("div",{className:`bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_10px_35px_rgba(245,158,11,0.04)] transition-all duration-300 group select-text ${Ae?"md:col-span-2 lg:col-span-1":""}`,children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px]",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${t==="light"?"bg-amber-100 text-amber-800 border-amber-250":"bg-amber-500/10 text-amber-300 border-amber-500/20"}`,children:B.category}),d.jsx("span",{className:"text-zinc-550 font-semibold",children:B.date})]}),B.imageUrl?d.jsxs("div",{className:"w-full h-36 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 relative",children:[d.jsx("img",{src:B.imageUrl,alt:B.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0b0c14]/90 via-transparent to-transparent"})]}):d.jsx("div",{className:"w-full h-1 bg-gradient-to-r from-amber-500/10 to-transparent rounded"}),d.jsx("h3",{className:`text-xs sm:text-sm font-extrabold group-hover:text-amber-400 transition-colors leading-snug select-text ${t==="light"?"text-slate-800":"text-white"}`,children:B.title}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:B.excerpt})]}),d.jsxs("div",{className:"space-y-3 pt-4 border-t border-zinc-900/60 mt-4 select-none",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[8.5px] font-mono text-zinc-500",children:[d.jsx(uv,{className:"w-3 h-3 text-amber-500"}),d.jsx("span",{children:B.readTime})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{m?m(B):c("writing")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[9.5px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"WARP & READ IN OS →"}),B.link&&d.jsx("a",{href:B.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"Read on Medium",children:d.jsx(Iy,{className:"w-3.5 h-3.5"})})]})]})]},B.id)})})]}),d.jsxs("section",{id:"certifications",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"05 // CREDENTIAL VERIFICATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"ALL BADGES CRYPTOGRAPHICALLY SECURED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:ie.map((B,xe)=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3",children:[d.jsx("span",{children:B.issuer}),d.jsx("span",{className:"font-bold",children:B.date})]}),d.jsxs("h3",{className:`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${t==="light"?"text-slate-850":"text-slate-100"}`,children:[d.jsx(cv,{className:`w-4 h-4 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-650":"text-amber-400"}`}),d.jsx("span",{children:B.title})]})]}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50",children:B.skills.map(Ae=>d.jsx("span",{className:"text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500",children:Ae},Ae))})]},xe))})]}),d.jsxs("section",{className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"06 // CLINICAL RECOMMENDATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE REFERRALS ACTIVE"})]}),d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl",children:[d.jsx(c1,{className:`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${t==="light"?"text-indigo-600":"text-indigo-500"}`}),d.jsxs("div",{className:"relative min-h-[140px] flex flex-col justify-between",children:[d.jsxs("p",{className:`text-xs sm:text-sm italic leading-relaxed ${t==="light"?"text-slate-700":"text-slate-300"}`,children:['"',be[M].text,'"']}),d.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${ne.badgeStyle}`,children:be[M].initials}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-bold ${t==="light"?"text-slate-800":"text-white"}`,children:be[M].author}),d.jsx("span",{className:"text-[9px] text-zinc-500 font-mono mt-0.5",children:be[M].role})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsx("button",{onClick:()=>{T(B=>(B-1+be.length)%be.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Ty,{className:"w-4 h-4"})}),d.jsx("button",{onClick:()=>{T(B=>(B+1)%be.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(wy,{className:"w-4 h-4"})})]})]})]})]})]}),d.jsxs("section",{id:"contact",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"07 // SECURE COMMUNICATION CHANNEL"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SSL LINK ENCRYPTED"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-5 space-y-6 font-mono text-[10.5px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5",children:"TRANSMISSION DIRECTORIES"}),d.jsx("p",{className:"text-xs font-sans text-zinc-400 leading-relaxed",children:"Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels."})]}),d.jsxs("div",{className:"space-y-3.5 border-t border-zinc-900/80 pt-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400",children:d.jsx(Zy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"ENVELOPE ADDRESS"}),d.jsx("a",{href:"mailto:farhankabir133@gmail.com",onClick:()=>s(900,.02),className:`text-[11px] font-bold ${t==="light"?"text-slate-850":"text-slate-200"} hover:underline`,children:"farhankabir133@gmail.com"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400",children:d.jsx(Qy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"COORDINATE MAPPING"}),d.jsx("span",{className:`text-[11px] font-bold ${t==="light"?"text-slate-800":"text-slate-250"}`,children:"Rajshahi, Bangladesh (UTC+6)"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none",children:[d.jsxs("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(hc,{className:"w-4 h-4 text-indigo-400"}),d.jsx("span",{children:"GITHUB"})]}),d.jsxs("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(pf,{className:"w-4 h-4 text-sky-400"}),d.jsx("span",{children:"LINKEDIN"})]}),d.jsxs("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Jf,{className:"w-4 h-4 text-emerald-400"}),d.jsx("span",{children:"MEDIUM"})]}),d.jsxs("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(Qf,{className:"w-4 h-4 text-white"}),d.jsx("span",{children:"X / TWITTER"})]}),d.jsxs("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(hf,{className:"w-4 h-4 text-pink-400"}),d.jsx("span",{children:"INSTAGRAM"})]}),d.jsxs("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(mf,{className:"w-4 h-4 text-amber-400"}),d.jsx("span",{children:"GRAVATAR"})]})]})]}),d.jsx("div",{className:"lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative",children:I?d.jsxs("div",{className:"text-center py-10 space-y-4 animate-scale-up",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]",children:d.jsx(Xc,{className:"w-6 h-6 animate-pulse"})}),d.jsxs("div",{className:"space-y-1.5 font-mono",children:[d.jsx("span",{className:"text-[10px] text-emerald-400 font-bold uppercase tracking-wider",children:"TRANSMISSION EN ROUTE"}),d.jsx("h3",{className:`text-base font-extrabold ${t==="light"?"text-slate-800":"text-white"}`,children:"Matrix Sync Completed!"}),d.jsx("p",{className:"text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal",children:"Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now."})]}),d.jsx("button",{onClick:()=>{K(!1),s(800,.02)},className:"bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors active:scale-95",children:"Establish New Node"})]}):d.jsxs("form",{onSubmit:V,className:"space-y-4 font-mono text-[10px]",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"COGNITIVE NAME"}),d.jsx("input",{type:"text",value:L,onChange:B=>S(B.target.value),placeholder:"e.g. Jenkins S.",className:`w-full bg-black/60 border ${F.name?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.name&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.name})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION EMAIL"}),d.jsx("input",{type:"email",value:b,onChange:B=>N(B.target.value),placeholder:"e.g. envelope@domain.com",className:`w-full bg-black/60 border ${F.email?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.email&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.email})]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"INQUIRY SUBJECT"}),d.jsx("input",{type:"text",value:P,onChange:B=>z(B.target.value),placeholder:"e.g. Clinical NLP Model Fine-Tuning",className:`w-full bg-black/60 border ${F.subject?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.subject&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.subject})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION PAYLOAD (MESSAGE)"}),d.jsx("textarea",{rows:4,value:X,onChange:B=>O(B.target.value),placeholder:"Explain Objectives, Budgets, and Timelines...",className:`w-full bg-black/60 border ${F.message?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none`}),F.message&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.message})]}),d.jsx("button",{type:"submit",disabled:H,className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 active:scale-98 cursor-pointer ${ne.btnPrimary}`,children:H?d.jsxs(d.Fragment,{children:[d.jsx(fv,{className:"w-4 h-4 animate-spin"}),d.jsx("span",{children:"Transmitting packets..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(hv,{className:"w-4 h-4"}),d.jsx("span",{children:"Transmit Message"})]})})]})})]})]}),d.jsx("footer",{className:`mt-auto border-t ${t==="light"?"border-slate-200/80 bg-slate-100/50":"border-zinc-900/60 bg-black/45"} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`,children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"}),d.jsxs("span",{className:`text-[10px] font-mono tracking-widest uppercase ${t==="light"?"text-slate-600":"text-zinc-450"}`,children:["© ",new Date().getFullYear()," FARHAN KABIR. ALL RIGHTS SECURED."]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-550 font-bold",children:[d.jsx("a",{href:"#about",onClick:B=>{s(800,.02),U(B,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:B=>{s(800,.02),U(B,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:B=>{s(800,.02),U(B,"timeline")},className:"hover:text-white transition-colors",children:"TIMELINE"}),d.jsx("a",{href:"#projects",onClick:B=>{s(800,.02),U(B,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#contact",onClick:B=>{s(800,.02),U(B,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"GitHub",children:d.jsx(hc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"LinkedIn",children:d.jsx(pf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Medium",children:d.jsx(Jf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"X (Twitter)",children:d.jsx(Qf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Instagram",children:d.jsx(hf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Gravatar",children:d.jsx(mf,{className:"w-3.5 h-3.5"})})]})]})}),p&&d.jsx("button",{onClick:W,className:`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 animate-scale-up cursor-pointer hover:-translate-y-1 ${t==="light"?"bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50":"bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35"}`,title:"Back to Top",children:d.jsx(gy,{className:"w-4 h-4"})})]})}function ZA({theme:r,triggerSound:t}){const i=Ue.useRef(null),s=Ue.useRef(null),[l,c]=Ue.useState(!1),[h,m]=Ue.useState("#6366f1"),[g,p]=Ue.useState(4),[y,_]=Ue.useState(!1),[x,M]=Ue.useState("theme"),[T,L]=Ue.useState([]),[S,b]=Ue.useState([]),[N,P]=Ue.useState([]),[z,X]=Ue.useState({width:600,height:400}),A=x==="theme"?(()=>{switch(r){case"cyberpunk":return[{name:"Neon Pink",value:"#ff007f"},{name:"Matrix Green",value:"#39ff14"},{name:"Neon Blue",value:"#00ffff"},{name:"Cyber Purple",value:"#9d00ff"},{name:"Hot Orange",value:"#ff5e00"},{name:"Pure White",value:"#ffffff"}];case"terminal":return[{name:"Classic Green",value:"#33ff33"},{name:"Amber Glow",value:"#ffb000"},{name:"Terminal White",value:"#e5e5e5"},{name:"Phosphor Green",value:"#00ff66"},{name:"Dim Gray",value:"#7f7f7f"}];case"ai":return[{name:"Deep Cosmic",value:"#4f46e5"},{name:"Quantum Cyan",value:"#06b6d4"},{name:"Neural Violet",value:"#d946ef"},{name:"Supernova",value:"#f43f5e"},{name:"Logic White",value:"#fafafa"}];case"light":return[{name:"Royal Blue",value:"#2563eb"},{name:"Rose Red",value:"#dc2626"},{name:"Forest Green",value:"#16a34a"},{name:"Vibrant Orange",value:"#ea580c"},{name:"Slate Gray",value:"#475569"},{name:"Deep Charcoal",value:"#0f172a"}];default:return[{name:"Indigo Aura",value:"#818cf8"},{name:"Nebula Pink",value:"#f472b6"},{name:"Aurora Teal",value:"#2dd4bf"},{name:"Solar Yellow",value:"#fbbf24"},{name:"Coral Rose",value:"#fb7185"},{name:"Pure White",value:"#ffffff"}]}})():[{name:"Pure Black",value:"#000000"},{name:"Crimson Red",value:"#ef4444"},{name:"Cobalt Blue",value:"#3b82f6"},{name:"Emerald Green",value:"#22c55e"},{name:"Amber Yellow",value:"#eab308"},{name:"Pure White",value:"#ffffff"}];Ue.useEffect(()=>{m(A[0].value),_(!1)},[r,x]),Ue.useEffect(()=>{const ie=i.current;if(!ie)return;const D=new ResizeObserver(V=>{if(!V||V.length===0)return;const{width:B,height:xe}=V[0].contentRect,Ae=Math.floor(B||600),J=Math.floor(xe||400);X({width:Ae,height:J})});return D.observe(ie),()=>{D.disconnect()}},[]),Ue.useEffect(()=>{const ie=s.current;ie&&(ie.width=z.width,ie.height=z.height,I())},[z,T,N]);const I=()=>{const ie=s.current;if(!ie)return;const D=ie.getContext("2d");if(!D)return;D.clearRect(0,0,ie.width,ie.height),D.lineCap="round",D.lineJoin="round";const V=B=>{if(!(B.points.length<1))if(D.beginPath(),B.isEraser?D.globalCompositeOperation="destination-out":(D.globalCompositeOperation="source-over",D.strokeStyle=B.color),D.lineWidth=B.width,B.points.length===1){const xe=B.points[0];D.arc(xe.x,xe.y,B.width/2,0,2*Math.PI),D.fillStyle=B.isEraser?"rgba(0,0,0,1)":B.color,D.fill()}else{const xe=B.points[0];D.moveTo(xe.x,xe.y);for(let Ae=1;Ae<B.points.length;Ae++){const J=B.points[Ae];D.lineTo(J.x,J.y)}D.stroke()}};T.forEach(B=>{V(B)}),N.length>0&&V({points:N,color:h,width:g,isEraser:y}),D.globalCompositeOperation="source-over"},K=ie=>{const D=s.current;if(!D)return null;const V=D.getBoundingClientRect();let B=0,xe=0;if("touches"in ie){if(ie.touches.length===0)return null;B=ie.touches[0].clientX,xe=ie.touches[0].clientY}else B=ie.clientX,xe=ie.clientY;return{x:(B-V.left)/V.width*D.width,y:(xe-V.top)/V.height*D.height}},H=ie=>{ie.preventDefault();const D=K(ie);D&&(c(!0),P([D]),b([]),t&&t(700,.015))},Z=ie=>{if(!l)return;ie.preventDefault();const D=K(ie);D&&P(V=>[...V,D])},he=()=>{if(l){if(c(!1),N.length>0){const ie={points:N,color:h,width:g,isEraser:y};L(D=>[...D,ie])}P([]),t&&t(850,.02)}},ge=()=>{if(T.length===0)return;const ie=[...T],D=ie.pop();D&&(b(V=>[...V,D]),L(ie),t&&t(500,.03))},W=()=>{if(S.length===0)return;const ie=[...S],D=ie.pop();D&&(L(V=>[...V,D]),b(ie),t&&t(900,.03))},U=()=>{T.length!==0&&confirm("Clear the entire ideation sketch pad?")&&(L([]),b([]),P([]),t&&t(350,.07))},j=()=>{const ie=s.current;if(!ie)return;const D=document.createElement("canvas");D.width=ie.width,D.height=ie.height;const V=D.getContext("2d");if(!V)return;r==="light"?V.fillStyle="#f8fafc":r==="cyberpunk"?V.fillStyle="#010206":r==="terminal"?V.fillStyle="#050705":V.fillStyle="#090a12",V.fillRect(0,0,D.width,D.height),V.strokeStyle=r==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)",V.lineWidth=1;const B=30;for(let J=0;J<D.width;J+=B)V.beginPath(),V.moveTo(J,0),V.lineTo(J,D.height),V.stroke();for(let J=0;J<D.height;J+=B)V.beginPath(),V.moveTo(0,J),V.lineTo(D.width,J),V.stroke();V.drawImage(ie,0,0),V.font="10px monospace",V.fillStyle=r==="light"?"rgba(15, 23, 42, 0.4)":"rgba(255, 255, 255, 0.3)",V.textAlign="right",V.fillText("FARHAN KABIR CORE OS v2.4 // VISUAL IDEATION UNIT",D.width-20,D.height-20);const xe=D.toDataURL("image/png"),Ae=document.createElement("a");Ae.href=xe,Ae.download=`FarhanOS_Whiteboard_${Date.now()}.png`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),t&&t(1100,.08)},ne=r==="cyberpunk"?"border-[#ff007f]/40 text-pink-400 font-mono":r==="terminal"?"border-[#33ff33]/40 text-[#33ff33] font-mono":r==="ai"?"border-indigo-500/40 text-indigo-400 font-sans":r==="light"?"border-slate-300 text-slate-800 font-sans":"border-zinc-800 text-slate-200 font-sans",be=ie=>{m(ie),_(!1),t&&t(900,.015)};return d.jsxs("div",{className:"flex flex-col h-full gap-3 select-none",children:[d.jsxs("div",{className:`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-3 bg-black/35 backdrop-blur-md ${ne}`,children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:ge,disabled:T.length===0,className:`p-1.5 rounded transition-all duration-200 ${T.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Undo stroke (Ctrl+Z)",children:d.jsx(M1,{className:"w-4 h-4"})}),d.jsx("button",{onClick:W,disabled:S.length===0,className:`p-1.5 rounded transition-all duration-200 ${S.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Redo stroke (Ctrl+Y)",children:d.jsx(d1,{className:"w-4 h-4"})}),d.jsx("span",{className:"h-4 w-px bg-zinc-850 mx-1"}),d.jsxs("button",{onClick:()=>{_(!1),t&&t(800,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200":"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300"}`,title:"Paint Brush Mode",children:[d.jsx(ex,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Paint"})]}),d.jsxs("button",{onClick:()=>{_(!0),t&&t(600,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300":"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200"}`,title:"Eraser tool",children:[d.jsx(Oy,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Eraser"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 p-1 rounded-md border border-zinc-900/80 text-[9px] font-mono",children:[d.jsx("button",{onClick:()=>{M("theme"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="theme"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to Theme-specific colors",children:"OS Aura"}),d.jsx("button",{onClick:()=>{M("classic"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="classic"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to classic drawing colors (Black, Red, Blue, Green, etc.)",children:"Classic"})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[A.map(ie=>{const D=h===ie.value&&!y;return d.jsxs("button",{onClick:()=>be(ie.value),className:"relative group w-4 h-4 rounded-full transition duration-300 border border-black/50",style:{backgroundColor:ie.value},title:`${ie.name}`,children:[D&&d.jsx("span",{className:"absolute inset-0 flex items-center justify-center scale-75 text-white filter drop-shadow",children:d.jsx(Xc,{className:"w-3.5 h-3.5 text-white stroke-[3.5px]",style:{mixBlendMode:"difference"}})}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:ie.name})]},ie.value)}),d.jsx("span",{className:"h-3 w-px bg-zinc-800 mx-1"}),d.jsxs("div",{className:"relative group w-4 h-4 rounded-full overflow-hidden border border-zinc-700/50 flex items-center justify-center bg-gradient-to-tr from-rose-500 via-emerald-500 to-sky-500 shadow-sm",title:"Choose custom color spectrum",children:[d.jsx("input",{type:"color",value:h,onChange:ie=>be(ie.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),d.jsx("span",{className:"text-[10px] font-black text-white pointer-events-none filter drop-shadow-sm",children:"+"}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:"Custom Color"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono select-none uppercase tracking-tight hidden xs:inline",children:["Width: ",g,"px"]}),d.jsx("input",{type:"range",min:"1",max:"40",value:g,onChange:ie=>{const D=parseInt(ie.target.value,10);p(D),t&&t(750+D*3,.005)},className:"w-16 sm:w-20 md:w-24 accent-indigo-500 bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer",title:"Slide to adjust brush thickness"})]}),d.jsx("div",{className:"flex items-center gap-1",children:[2,4,8,16].map(ie=>d.jsx("button",{onClick:()=>{p(ie),t&&t(750,.01)},className:`w-5 h-5 rounded flex items-center justify-center transition border ${g===ie?"bg-white/10 border-indigo-500/50 text-indigo-400":"border-transparent hover:bg-white/5 text-zinc-400"}`,title:`Brush size ${ie}px`,children:d.jsx("span",{className:"relative flex items-center justify-center",children:d.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.max(2,ie/1.5)}px`,height:`${Math.max(2,ie/1.5)}px`}})})},ie))}),d.jsx("span",{className:"h-4 w-px bg-zinc-850"}),d.jsx("button",{onClick:U,className:"p-1.5 rounded transition-all duration-200 hover:bg-rose-500/20 hover:scale-110 active:scale-90 text-rose-400 hover:text-rose-300",title:"Clear canvas",children:d.jsx(rx,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:j,className:"p-1.5 rounded transition-all duration-200 hover:bg-emerald-500/20 hover:scale-110 active:scale-90 text-emerald-400 hover:text-emerald-300",title:"Download visual sketch (.png)",children:d.jsx(Wh,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("div",{ref:i,className:`whiteboard-canvas-container flex-1 min-h-[280px] max-h-[50vh] rounded-lg border-2 border-dashed flex relative overflow-hidden bg-black/45 shadow-inner transition-colors duration-350 cursor-crosshair ${r==="cyberpunk"?"border-pink-500/25 shadow-pink-500/5 bg-[#000]":r==="terminal"?"border-[#33ff33]/25 shadow-emerald-500/5":"border-zinc-800/80 shadow-sky-500/5"}`,children:[d.jsxs("button",{onClick:U,disabled:T.length===0,className:`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded border shadow-lg transition-all duration-200 select-none ${T.length===0?"opacity-40 cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/40":"hover:scale-105 active:scale-95 "+(r==="cyberpunk"?"bg-black/90 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border-pink-500/30 hover:border-pink-500/50":r==="terminal"?"bg-black/90 hover:bg-[#33ff33]/20 text-[#33ff33] border-[#33ff33]/30 hover:border-[#33ff33]/50 font-mono":r==="light"?"bg-white/90 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300":"bg-zinc-950/90 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border-indigo-500/25 hover:border-indigo-500/45")}`,title:"Clear canvas to a blank state",children:[d.jsx(rx,{className:"w-3 h-3"}),d.jsx("span",{children:"Clear Board"})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen overflow-hidden",children:d.jsx("div",{className:"w-full h-full",style:{backgroundImage:"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",backgroundSize:"24px 24px",color:r==="terminal"?"#33ff33":r==="cyberpunk"?"#ff007f":"#6366f1"}})}),T.length===0&&!l&&d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-2",children:d.jsx(ex,{className:"w-6 h-6 text-indigo-400/55 animate-pulse"})}),d.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-zinc-550",children:"Visual Ideation Pad"}),d.jsx("span",{className:"text-[9px] text-zinc-600 mt-1",children:"Press and drag anywhere on this sandbox grid canvas to sketch plans"})]}),d.jsx("canvas",{ref:s,onMouseDown:H,onMouseMove:Z,onMouseUp:he,onMouseLeave:he,onTouchStart:H,onTouchMove:Z,onTouchEnd:he,className:"absolute inset-0 w-full h-full select-none touch-none bg-transparent"}),d.jsxs("div",{className:"absolute bottom-2 left-2 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-900/50 text-[8px] font-mono text-zinc-500",children:[d.jsxs("span",{children:["COORDS: ",z.width,"x",z.height]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:["STROKESTACK: ",T.length]})]})]}),d.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[d.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-zinc-500 font-mono",children:[d.jsx(Xo,{className:"w-3 h-3 text-indigo-400"}),d.jsx("span",{children:"IDEATION UNIT DEPLOYED SECURELY WITHIN THE OPERATING SYSTEM ENVIRONMENT"})]}),d.jsx("div",{className:"text-[9px] font-mono text-zinc-500",children:"v2.4.6_canvas"})]})]})}function KA(r,t){if(typeof window>"u"||!window.speechSynthesis)return t&&t(),null;window.speechSynthesis.cancel();const i=r.replace(/[*_#`~[\]]/g,"").replace(/➔/g," to ").replace(/F1/gi,"F-1").replace(/LLMs?/gi,"Large Language Models").replace(/NLP/gi,"Natural Language Processing").trim(),s=new SpeechSynthesisUtterance(i),l=window.speechSynthesis.getVoices(),c=l.find(h=>h.lang.startsWith("en")&&(h.name.includes("Google")||h.name.includes("Natural")||h.name.includes("Samantha")||h.name.includes("Zira")))||l.find(h=>h.lang.startsWith("en"))||l[0];return c&&(s.voice=c),s.pitch=1.05,s.rate=.98,s.onend=()=>{t&&t()},s.onerror=()=>{t&&t()},window.speechSynthesis.speak(s),{stop:()=>{window.speechSynthesis.cancel(),t&&t()}}}function QA(r,t){const i=r.toLowerCase().trim();return i.includes("depression")||i.includes("mental")||i.includes("health")||i.includes("distress")||i.includes("clinical")||i.includes("wellness")?`My research in clinical NLP has led to two main publications: 

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
• My technical stack or how to get in contact with me.`}function JA(r){const t=r.projectType.includes("NLP")||r.goals.toLowerCase().includes("text")||r.goals.toLowerCase().includes("linguistic")||r.goals.toLowerCase().includes("language"),i=t?"RoBERTa-Clinical or custom fine-tuned BERT":"Gemini 3.5 Flash / distilled Llama 3B",s=t?"<5ms inference threshold":"<150ms roundtrip HMR";return`[SYSTEM DIAGNOSTICS READOUT // OFFLINE FEASIBILITY SCAN]
-----------------------------------------------------------------
INITIATIVE PROFILE : Category: ${r.projectType} // Boundary: ${r.budget} // Timeline: ${r.timeline}
SEMANTIC OBJECTIVE : "${r.goals.length>80?r.goals.substring(0,80)+"...":r.goals}"
OPERATIVE DIRECTIVES: ${r.comments?r.comments:"Standard secure deployment"}

TECHNICAL VIABILITY SUMMARY:
• Feasibility: High. The objectives map directly to Farhan's micro-service templates.
• Target Model Candidate: ${i}
• Proposed Stack: React client + Go/Node.js API pipeline + Redis quantization caching.
• Optimization Goal: ONNX runtime deployment yielding a ${s} overhead.
• Security Boundary: Local token perplexity classification shields will be activated to protect against prompt injection vectors (94.2% accuracy threshold).`}function $A(){const[r,t]=Ue.useState("landing"),[i,s]=Ue.useState(!1);Ue.useEffect(()=>(r==="os"?document.documentElement.classList.add("os-mode"):document.documentElement.classList.remove("os-mode"),()=>{document.documentElement.classList.remove("os-mode")}),[r]);const[l,c]=Ue.useState(""),[h,m]=Ue.useState(""),[g,p]=Ue.useState(!1),[y,_]=Ue.useState(null),[x,M]=Ue.useState(!1),[T,L]=Ue.useState(0),[S,b]=Ue.useState([]),[N,P]=Ue.useState("dark"),[z,X]=Ue.useState(!0),[O,F]=Ue.useState(!0),[A,I]=Ue.useState(""),[K,H]=Ue.useState(["twin"]),[Z,he]=Ue.useState([]),[ge,W]=Ue.useState("twin"),[U,j]=Ue.useState({twin:{x:50,y:70,isMaximized:!1},projects:{x:120,y:140,isMaximized:!1},research:{x:180,y:90,isMaximized:!1},github:{x:220,y:160,isMaximized:!1},writing:{x:80,y:220,isMaximized:!1},garden:{x:260,y:40,isMaximized:!1},resume:{x:300,y:200,isMaximized:!1},timeline:{x:140,y:300,isMaximized:!1},skills:{x:400,y:80,isMaximized:!1},brief:{x:350,y:150,isMaximized:!1},builds:{x:200,y:350,isMaximized:!1},whiteboard:{x:240,y:110,isMaximized:!1},profTimeline:{x:160,y:240,isMaximized:!1}}),ne=Ue.useRef(null),[be,ie]=Ue.useState(12);Ue.useEffect(()=>{const k=setInterval(()=>{ie(Math.floor(Math.random()*10)+7)},2500);return()=>clearInterval(k)},[]);const[D,V]=Ue.useState(typeof window<"u"?window.innerWidth:1024);Ue.useEffect(()=>{const k=()=>{V(ue=>ue!==window.innerWidth?window.innerWidth:ue)};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const B=()=>{const k=["dark","cyberpunk","ai","terminal","light"],ue=(k.indexOf(N)+1)%k.length;P(k[ue]),ct(750,.03)},xe=k=>{t("os"),M(!0),K.includes(k)||H([...K,k]),W(k),ct(900,.05)},Ae=k=>{ft(k),xe("writing")},[J,Ee]=Ue.useState(tn.projects[0]),[we,We]=Ue.useState(tn.papers[0]),[nt,et]=Ue.useState(tn.articles),[Et,ft]=Ue.useState(tn.articles[0]),[dt,At]=Ue.useState(tn.timeline[0]);Ue.useEffect(()=>{(async()=>{try{const ue=await fetch("/api/medium-stories");if(ue.ok){const me=await ue.json();if(Array.isArray(me)&&me.length>0){et(me),ft(me[0]);return}}}catch(ue){console.warn("Backend Medium stories endpoint unavailable, trying client fallback:",ue)}try{const ue=await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@farhankabir133");if(ue.ok){const me=await ue.json();if(me.status==="ok"&&Array.isArray(me.items)){const De=me.items.slice(0,6).map((Xe,Ze)=>{const yt=Xe.description||"",de=yt.match(/<img[^>]+src=["']([^"']+)["']/),Ke=de?de[1]:"",gt=yt.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);let xt=gt?gt[1].replace(/<[^>]+>/g,"").trim():"";const Ge=yt.replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();xt||(xt=Ge.slice(0,150)+(Ge.length>150?"...":""));let an="Life";const vt=(Xe.categories||[]).map(mt=>mt.toLowerCase());vt.some(mt=>mt.includes("ai")||mt.includes("artificial")||mt.includes("gpt")||mt.includes("llm"))?an="AI":vt.some(mt=>mt.includes("dev")||mt.includes("coding")||mt.includes("program")||mt.includes("software")||mt.includes("architecture")||mt.includes("engineering"))?an="Engineering":vt.some(mt=>mt.includes("productiv")||mt.includes("work")||mt.includes("career")||mt.includes("growth"))?an="Productivity":vt.some(mt=>mt.includes("research")||mt.includes("science")||mt.includes("clinic"))?an="Research":vt.some(mt=>mt.includes("design")||mt.includes("ux")||mt.includes("ui"))?an="Design":vt.some(mt=>mt.includes("startup")||mt.includes("business")||mt.includes("saas"))?an="Startups":vt.some(mt=>mt.includes("philosoph")||mt.includes("think"))&&(an="Philosophy");let on=Xe.pubDate;try{const mt=new Date(Xe.pubDate);isNaN(mt.getTime())||(on=mt.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))}catch{}const zn=Ge.split(/\s+/).length,Yn=`${Math.max(1,Math.ceil(zn/225))} min read`,Gt=(Xe.guid||"").match(/\/p\/([a-f0-9]+)$/)||(Xe.link||"").match(/-([a-f0-9]+)$/);return{id:Gt?Gt[1]:`medium-${Ze}`,title:Xe.title,category:an,readTime:Yn,date:on,excerpt:xt,content:Ge||xt||Xe.title,link:Xe.link,imageUrl:Ke}});De.length>0&&(et(De),ft(De[0]))}}}catch(ue){console.warn("Client-side rss2json fallback failed:",ue)}})()},[]);const[it,Ft]=Ue.useState("all"),[Nt,hn]=Ue.useState("recruiter"),[Q,Qe]=Ue.useState(!1),[at,rt]=Ue.useState(""),[Le,ot]=Ue.useState(""),[R,E]=Ue.useState([{role:"assistant",content:"Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps."}]),[ee,Se]=Ue.useState(!1),[Re,Oe]=Ue.useState(null),[Pe,ve]=Ue.useState(null),[ae,Fe]=Ue.useState({projectType:"AI Engineering",budget:"$5,000 - $10,000",timeline:"1-3 Months",goals:"",comments:"",email:""}),[je,Be]=Ue.useState(null),[Ie,ht]=Ue.useState(!1),[pt,Ct]=Ue.useState(!1),[q,ze]=Ue.useState(!1),[ye,Ve]=Ue.useState(0),[ke,Ne]=Ue.useState(""),[$e,lt]=Ue.useState(!1),[jt,Bt]=Ue.useState(null),[Wn,kn]=Ue.useState(null),ct=(k=800,ue=.03)=>{z&&lx(k,ue)};Ue.useEffect(()=>{const k=()=>{I(new Date().toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};k();const ue=setInterval(k,1e3);return()=>clearInterval(ue)},[]),Ue.useEffect(()=>{if(!x){const k=["INIT: Booting FarhanOS Kernel v2.4.6...","SYS: Loading digital neural parameters...","SYS: Grounding publications corpus index...","NETWORK: Establishing proxy connection secure rails...","AI: Initializing Gemini bimodal model instances...","GRAPH: Parsing topological clinical coordinates...","SYS: Systems compiled. Ready for operational execution."];let ue=0;const me=setInterval(()=>{L(De=>{if(De>=100)return clearInterval(me),setTimeout(()=>{M(!0),ct(1e3,.15)},600),100;const Xe=Math.floor(Math.random()*15)+5,Ze=Math.min(De+Xe,100);return Ze>ue*15&&ue<k.length&&(b(yt=>[...yt,k[ue]]),ue++,ct(600+ue*50,.02)),Ze})},120);return()=>clearInterval(me)}},[x]);const hs=()=>{if(i)return;ct(1200,.4),s(!0);let k=0;const ue=setInterval(()=>{k<7?(ct(150+k*200,.05),k++):clearInterval(ue)},100);setTimeout(()=>{t("os"),L(0),b([]),M(!1),s(!1)},1800)};Ue.useEffect(()=>{const k=ue=>{(ue.metaKey||ue.ctrlKey)&&ue.key==="k"&&(ue.preventDefault(),Qe(me=>!me),ct(900,.04)),ue.key==="Escape"&&Qe(!1)};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[z]);const Ui=Ue.useRef(null),ra=Ue.useRef({x:0,y:0}),dn=Ue.useRef(null),rn=Ue.useRef({x:0,y:0}),nn=Ue.useRef({x:0,y:0}),zi=(k,ue)=>{var yt,de,Ke;if((yt=U[k])!=null&&yt.isMaximized)return;W(k);const me=((de=U[k])==null?void 0:de.x)||0,De=((Ke=U[k])==null?void 0:Ke.y)||0;Ui.current=k,ra.current={x:ue.clientX-me,y:ue.clientY-De},rn.current={x:me,y:De},nn.current={x:me,y:De};const Xe=document.getElementById(`window-${k}`);Xe&&(Xe.style.transition="none"),kn(k),ct(500,.01),dn.current&&cancelAnimationFrame(dn.current);const Ze=()=>{const gt=Ui.current;if(!gt)return;const xt=.16,Ge=rn.current.x-nn.current.x,an=rn.current.y-nn.current.y;nn.current.x+=Ge*xt,nn.current.y+=an*xt;const vt=Ge*xt,on=4,zn=Math.min(Math.max(-vt*.14,-on),on),wn=document.getElementById(`window-${gt}`);wn&&(wn.style.left=`${nn.current.x}px`,wn.style.top=`${nn.current.y}px`,wn.style.transform=`rotateZ(${zn}deg) scale(1.025)`,wn.style.boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.65)",wn.style.zIndex="100"),dn.current=requestAnimationFrame(Ze)};dn.current=requestAnimationFrame(Ze)},Oi=k=>{if(Ui.current){const me=Math.max(0,k.clientX-ra.current.x),De=Math.max(0,k.clientY-ra.current.y);rn.current={x:me,y:De}}},ps=()=>{const k=Ui.current;if(k){dn.current&&cancelAnimationFrame(dn.current),dn.current=null;const ue=nn.current.x,me=nn.current.y,De=document.getElementById(`window-${k}`);De&&(De.style.transition="",De.style.transform="",De.style.boxShadow="",De.style.zIndex=""),j(Xe=>({...Xe,[k]:{...Xe[k],x:ue,y:me}})),Ui.current=null,kn(null)}};Ue.useEffect(()=>(Wn&&(window.addEventListener("mousemove",Oi),window.addEventListener("mouseup",ps)),()=>{window.removeEventListener("mousemove",Oi),window.removeEventListener("mouseup",ps)}),[Wn]);const An=k=>{ct(700,.05),K.includes(k)||H(ue=>[...ue,k]),he(ue=>ue.filter(me=>me!==k)),W(k)},ms=k=>{ct(400,.06),H(ue=>ue.filter(me=>me!==k))},Pi=k=>{ct(450,.04),Z.includes(k)||he(me=>[...me,k]);const ue=K.filter(me=>me!==k&&!Z.includes(me));ue.length>0&&W(ue[ue.length-1])},gs=k=>{ct(800,.04),j(ue=>{var me;return{...ue,[k]:{...ue[k],isMaximized:!((me=ue[k])!=null&&me.isMaximized)}}})},qn=async(k,ue=null,me="narrate")=>{if(O)try{Pe&&(Pe.stop(),ve(null)),Oe(ue);const Xe=await(await fetch(`${Yo()}/api/tts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:k,type:me})})).json();if(Xe.audio){const Ze=await N1(Xe.audio);ve(Ze);const yt=Xe.audio.length*.75/24e3;setTimeout(()=>{Oe(null)},yt*1e3)}}catch(De){console.error("Narrator service unreachable, falling back to client voice:",De);try{const Xe=KA(k,()=>{Oe(null)});Xe?ve(Xe):Oe(null)}catch(Xe){console.error("Client speech synthesis failed:",Xe),Oe(null)}}},Jn=()=>{Pe&&(Pe.stop(),ve(null)),Oe(null)},Xi=async()=>{if(!Le.trim())return;const k=Le.trim();ot(""),E(ue=>[...ue,{role:"user",content:k}]),Se(!0),ct(1100,.03);try{const ue=R.map(Xe=>({role:Xe.role==="user"?"user":"assistant",content:Xe.content})),De=await(await fetch(`${Yo()}/api/ask-twin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:k,history:ue})})).json();if(De.reply)E(Xe=>[...Xe,{role:"assistant",content:De.reply}]),Se(!1),O&&qn(De.reply,R.length+1);else throw new Error(De.error||"General twin system fault.")}catch(ue){console.warn("Backend twin service failed, using local fallback:",ue),R.map(De=>({role:De.role==="user"?"user":"assistant",content:De.content}));const me=QA(k);E(De=>[...De,{role:"assistant",content:me}]),Se(!1),O&&qn(me,R.length+1)}},Wi=async()=>{if(ae.goals.trim()){ht(!0),ct(950,.05);try{const ue=await(await fetch(`${Yo()}/api/summarize-brief`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectType:ae.projectType,budget:ae.budget,timeline:ae.timeline,goals:ae.goals,comments:ae.comments})})).json();ue.summary&&Be(ue.summary)}catch(k){console.warn("Backend brief summarizer failed, using local fallback:",k);const ue=JA(ae);Be(ue)}finally{ht(!1)}}},pn=async()=>{if(!ae.email.trim()){alert("Please provide a valid transmission email address before dispatching.");return}if(!/\S+@\S+\.\S+/.test(ae.email)){alert("Please provide a valid email structure.");return}Ct(!0),ct(1100,.05);try{if(!(await fetch(`${Yo()}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"OS Mission Collaborator",email:ae.email,subject:`Mission Brief: ${ae.projectType}`,message:`Strategic Brief Parameters:
- Venture Domain: ${ae.projectType}
- Financial Bounds: ${ae.budget}
- Timeline Profile: ${ae.timeline}
- Strategic Goals: ${ae.goals}
- Operational Directives: ${ae.comments||"None"}

Generated Assessment Architecture:
${je}`,metadata:{source:"OS_MISSION_BRIEF",projectType:ae.projectType,budget:ae.budget,timeline:ae.timeline,comments:ae.comments}})})).ok)throw new Error("Failed to dispatch brief.");alert("Handshake confirmed. Strategy Brief successfully transmitted to Farhan's secure channel."),Be(null),Fe(ue=>({...ue,goals:"",comments:"",email:""}))}catch(k){console.warn("Real dispatch failed, falling back to simulation:",k),alert("Handshake completed. Strategy Brief successfully recorded (simulated delivery)."),Be(null)}finally{Ct(!1)}},xs=async()=>{ct(1200,.1),ze(!0),lt(!0),Ve(1);const k=[{id:"twin",title:"Neural Core Clone",text:"This is the Ask Farhan AI Clone, trained on Farhan's complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles."},{id:"projects",title:"Project Galaxy Command",text:"Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications."},{id:"research",title:"Linguistic Research Laboratory",text:"Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules."},{id:"skills",title:"Skill Observational Map",text:"Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures."},{id:"brief",title:"Mission Collaboration Brief",text:"Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."}];await(async me=>{const De=k[me-1];if(!De){ze(!1),Ve(0);return}Ve(me),Ne(De.text),An(De.id),lt(!0),O&&await qn(De.text,null,"tour"),lt(!1)})(1)},w=()=>{if(ye<5){const k=ye+1;Ve(k),ct(800,.04);const ue=["Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.","Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.","Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.","Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."];An(["projects","research","skills","brief"][k-1]),Ne(ue[k-2]),O&&qn(ue[k-2],null,"tour")}else ze(!1),Ve(0),Jn(),ct(1300,.05)},$=tn.skills.filter(k=>it==="all"||it==="AI/ML"&&k.category==="AI/ML"||it==="Frontend"&&k.category==="Frontend"||it==="Backend"&&k.category==="Backend"||it==="Research"&&k.category==="Research & Science"||it==="Systems"&&k.category==="Systems & Devops"),se=(()=>{const k=at.toLowerCase().trim();if(!k)return[];const ue=[];return tn.projects.forEach(me=>{(me.title.toLowerCase().includes(k)||me.techStack.some(De=>De.toLowerCase().includes(k)))&&ue.push({type:"Project",title:me.title,subtitle:me.category,action:()=>{An("projects"),Ee(me),Qe(!1)}})}),tn.papers.forEach(me=>{(me.title.toLowerCase().includes(k)||me.abstract.toLowerCase().includes(k))&&ue.push({type:"Research Paper",title:me.title,subtitle:`${me.year} - ${me.journal}`,action:()=>{An("research"),We(me),Qe(!1)}})}),nt.forEach(me=>{(me.title.toLowerCase().includes(k)||me.excerpt.toLowerCase().includes(k))&&ue.push({type:"Blog/Article",title:me.title,subtitle:me.category,action:()=>{An("writing"),ft(me),Qe(!1)}})}),tn.skills.forEach(me=>{me.name.toLowerCase().includes(k)&&ue.push({type:"Tech Stack",title:me.name,subtitle:me.category,action:()=>{An("skills"),Ft(me.category==="Research & Science"?"Research":me.category==="Systems & Devops"?"Systems":me.category),Qe(!1)}})}),("whiteboard".includes(k)||"ideation".includes(k)||"canvas".includes(k)||"drawing".includes(k)||"sketch".includes(k)||"paint".includes(k))&&ue.push({type:"OS Utility",title:"Ideation Pad (Whiteboard)",subtitle:"HTML5 digital canvas for sketching visual ideas",action:()=>{An("whiteboard"),Qe(!1)}}),ue})(),re=[{id:"twin",label:"Ask Twin AI",icon:Xo,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{id:"projects",label:"Mission Control",icon:fc,color:"text-sky-400 bg-sky-500/10 border-sky-500/20"},{id:"research",label:"Research Lab",icon:_y,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{id:"github",label:"GitHub Monitor",icon:nx,color:"text-zinc-400 bg-zinc-500/10 border-zinc-500/20"},{id:"writing",label:"Writing Hub",icon:jy,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"},{id:"garden",label:"Garden Graph",icon:i1,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"resume",label:"Resume Gen",icon:By,color:"text-pink-400 bg-pink-500/10 border-pink-500/20"},{id:"timeline",label:"Career Index",icon:Sy,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{id:"profTimeline",label:"Prof. Timeline",icon:cv,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"skills",label:"Skill Observatory",icon:tx,color:"text-indigo-400 bg-indigo-500/10 border-indigo-500/20"},{id:"brief",label:"Mission Brief",icon:ax,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{id:"builds",label:"Release Logs",icon:Wy,color:"text-teal-400 bg-teal-500/10 border-teal-500/20"},{id:"whiteboard",label:"Ideation Pad",icon:ix,color:"text-orange-400 bg-orange-500/10 border-orange-500/20"}],He=(()=>{switch(N){case"cyberpunk":return{bg:"bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white",glass:"bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]",windowHeader:"bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95",btnSecondary:"bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono",accentColor:"text-pink-500",accentBorder:"border-pink-500/40",indicator:"bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]",panelHeader:"text-pink-400 uppercase tracking-widest text-[11px] font-bold",badge:"bg-pink-500/20 border border-pink-500/40 text-pink-300"};case"ai":return{bg:"bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white",glass:"bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10",windowHeader:"bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100",btnSecondary:"bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all",accentColor:"text-purple-400",accentBorder:"border-purple-500/30",indicator:"bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse",panelHeader:"text-purple-400 tracking-wider text-xs font-semibold",badge:"bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs"};case"terminal":return{bg:"bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20",glass:"bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]",windowHeader:"bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono",btnPrimary:"bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all",btnSecondary:"bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all",accentColor:"text-[#33ff33]",accentBorder:"border-[#33ff33]/30",indicator:"bg-[#33ff33] shadow-[0_0_10px_#33ff33]",panelHeader:"text-[#33ff33] font-bold uppercase tracking-wider text-[11px]",badge:"bg-transparent border border-[#33ff33] text-[#33ff33] text-xs"};case"light":return{bg:"bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20",glass:"bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl",windowHeader:"bg-slate-50 text-slate-800 border-b border-slate-200 font-sans",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95",btnSecondary:"bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all",accentColor:"text-indigo-600",accentBorder:"border-slate-300",indicator:"bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]",panelHeader:"text-slate-500 uppercase tracking-widest text-[11px] font-bold",badge:"bg-slate-100 border border-slate-200 text-slate-700 text-xs"};default:return{bg:"bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20",glass:"bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80",windowHeader:"bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans",btnPrimary:"bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95",btnSecondary:"bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all",accentColor:"text-sky-400",accentBorder:"border-sky-500/20",indicator:"bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",panelHeader:"text-sky-450 uppercase tracking-wider text-[11px] font-bold",badge:"bg-sky-500/10 border border-sky-500/20 text-sky-300"}}})();return d.jsx("div",{className:`w-full ${r==="os"?"h-full overflow-hidden select-none":"min-h-screen"} ${He.bg} transition-colors duration-500 flex flex-col relative`,children:r==="landing"?d.jsx(YA,{isWarping:i,theme:N,soundOn:z,triggerSound:ct,onLaunchOS:hs,onOpenWindowDirectly:xe,articles:nt,onOpenArticleDirectly:Ae}):d.jsxs(d.Fragment,{children:[!x&&d.jsxs("div",{className:"absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6",children:[d.jsxs("div",{className:"w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500",style:{width:`${T}%`}}),d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-3 mb-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"}),d.jsx("span",{className:"text-zinc-400 font-bold tracking-wider",children:"FARHAN KABIR CORE OS v2.4"})]}),d.jsxs("span",{className:"text-zinc-500 tracking-wider",children:["BOOT: ",T,"%"]})]}),d.jsxs("div",{className:"space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1",children:[S.map((k,ue)=>d.jsxs("div",{className:"text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between",children:[d.jsx("span",{className:"flex-1 whitespace-pre-wrap",children:k}),d.jsx("span",{className:"text-zinc-600 text-[9px]",children:"[SUCCESS]"})]},ue)),T<100&&d.jsx("div",{className:"text-white animate-pulse font-mono text-[11px]",children:"⏳ Orchestrating linguistic vectors, please standby..."})]}),d.jsxs("div",{className:"flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500",children:[d.jsx("span",{children:"SYSTEM HOST: OOS LOCAL HOST INSTANCE"}),d.jsx("span",{children:"PORT: 3001 ACTIVE"})]})]}),d.jsx("div",{className:"mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono",children:"Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices."})]}),d.jsxs("header",{className:"h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono",children:[d.jsxs("div",{className:"flex items-center gap-5",children:[d.jsxs("div",{className:"flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85",onClick:()=>ct(900,.05),children:[d.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]"}),d.jsx("span",{children:"FarhanOS"}),d.jsx("span",{className:"text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium",children:"BETA"})]}),d.jsxs("button",{onClick:()=>{t("landing"),ct(1105,.06)},className:"flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer",title:"Return to Cosmos Portal",children:[d.jsx(tx,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"Return to Cosmos"})]}),d.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none",children:[d.jsxs("button",{onClick:()=>{Qe(!0),ct(800,.03)},className:"hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer",children:[d.jsx(sx,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Search ",d.jsx("kbd",{className:"text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5",children:"Cmd+K"})]})]}),d.jsxs("button",{onClick:xs,className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300",children:[d.jsx(Xo,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"AI Site Tour"})]}),d.jsxs("button",{onClick:()=>An("brief"),className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer",children:[d.jsx(dv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Mission Brief"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-4 select-none",children:[d.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-medium mr-1.5",children:"Mood Theme:"}),["dark","cyberpunk","ai","terminal","light"].map(k=>d.jsx("button",{onClick:()=>{P(k),ct(750,.03)},className:`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${N===k?"bg-[#181926] text-white font-bold border border-zinc-700/60":"text-zinc-500 hover:text-zinc-300"}`,children:k},k))]}),d.jsxs("button",{onClick:B,className:"md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all",title:"Cycle Theme",children:[d.jsx(ix,{className:"w-3.5 h-3.5 text-sky-400 animate-pulse"}),d.jsxs("span",{children:["Theme: ",N]})]}),d.jsxs("div",{className:"flex items-center gap-3 border-l border-zinc-800/60 pl-3",children:[d.jsx("button",{onClick:()=>{X(!z),lx(1e3,.02)},className:`p-1 rounded cursor-pointer hover:bg-zinc-900 ${z?"text-zinc-300":"text-zinc-600"}`,title:"Toggle Audio Feedback",children:z?d.jsx(gf,{className:"w-3.5 h-3.5"}):d.jsx(xf,{className:"w-3.5 h-3.5"})}),d.jsxs("button",{onClick:()=>{F(!O),Re!==null&&Jn()},className:`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${O?"text-purple-400 border border-purple-500/20 bg-purple-500/5":"text-zinc-600 border border-zinc-800"}`,title:"Toggle Voice synthesizer narration output",children:[d.jsx(fc,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{className:"hidden sm:inline",children:"OS Voice"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none",children:[d.jsx(uv,{className:"w-3.5 h-3.5 text-sky-400"}),d.jsxs("span",{children:[A||"14:37:33"," (UTC)"]})]})]})]})]}),q&&d.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short",children:[d.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300",children:d.jsx(Xo,{className:"w-5 h-5 text-purple-400 animate-spin-slow"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("h4",{className:"text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200",children:["AI SYSTEM TOUR — ZONE ",ye," OF 5"]}),$e&&d.jsx("span",{className:"text-[10px] text-purple-300 animate-pulse font-mono select-none",children:"Rendering Synthesized Voice..."})]}),d.jsx("p",{className:"text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans",children:ke||"Preparing..."}),d.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[d.jsx("button",{onClick:w,className:"bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer",children:ye===5?"Conclude Integration Tour":"Acknowledge & Sync Next Area"}),d.jsx("button",{onClick:()=>{ze(!1),Ve(0),Jn(),ct(400,.05)},className:"text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer",children:"Exit Tour"})]})]})]}),d.jsxs("main",{className:"flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none",children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35",children:[d.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"}),d.jsx("div",{className:"absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"}),d.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow"})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto",children:re.map((k,ue)=>{const me=k.icon,De=K.includes(k.id),Xe=ge===k.id&&!Z.includes(k.id);return d.jsxs("div",{onClick:()=>An(k.id),style:{animationDelay:`${ue*45}ms`},className:`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 ${De?"bg-zinc-950/15":""}`,children:[d.jsxs("div",{className:`p-4 rounded-2xl ${k.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`,children:[d.jsx(me,{className:"w-6 h-6"}),De&&d.jsx("span",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]"})]}),d.jsx("span",{className:"text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1",children:k.label}),Xe&&d.jsx("span",{className:"absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs"})]},k.id)})}),K.map(k=>{if(Z.includes(k))return null;const ue=ge===k,me=U[k]||{x:100,y:100,isMaximized:!1},De=re.find(de=>de.id===k),Xe=De?De.icon:b1,yt=D<768||me.isMaximized?{position:"fixed",top:"2.5rem",left:0,right:0,bottom:"4rem",zIndex:ue?50:20}:{position:"absolute",left:`${me.x}px`,top:`${me.y}px`,width:k==="twin"||k==="garden"||k==="skills"?"540px":"720px",height:k==="twin"?"480px":"550px",maxHeight:"85vh",zIndex:ue?50:20};return d.jsxs("div",{id:`window-${k}`,style:yt,onClick:()=>{W(k),ct(400,.01)},className:`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${He.glass} ${ue?"ring-2 ring-sky-500/35 scale-[1.002]":"opacity-90"} animate-window-open`,children:[d.jsxs("div",{onMouseDown:de=>zi(k,de),className:`h-9 px-3 flex items-center justify-between cursor-move select-none ${He.windowHeader}`,children:[d.jsxs("div",{className:"flex items-center gap-2 font-semibold tracking-tight text-xs",children:[d.jsx(Xe,{className:"w-3.5 h-3.5 opacity-80"}),d.jsx("span",{children:De?De.label:"FarhanOS Sandbox"}),ue&&d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})]}),d.jsxs("div",{className:"flex items-center gap-2",onMouseDown:de=>de.stopPropagation(),children:[d.jsx("button",{onClick:()=>Pi(k),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Minimize",children:d.jsx(t1,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>gs(k),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Toggle Maximize",children:d.jsx($y,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>ms(k),className:"p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10",title:"Close Window",children:d.jsx(ox,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800",onScroll:de=>{if(k==="profTimeline"){const Ke=de.currentTarget,gt=Ke.scrollTop/(Ke.scrollHeight-Ke.clientHeight||1);ne.current&&(ne.current.style.transform=`scaleY(${gt})`)}},children:[k==="twin"&&d.jsxs("div",{className:"flex flex-col h-full gap-3",children:[d.jsxs("div",{className:"border-b border-zinc-800/60 pb-2 mb-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Xo,{className:"w-4 h-4 text-purple-400"}),d.jsx("span",{className:"font-bold text-slate-100 tracking-tight",children:"Interactive Ask Twin Engine"})]}),d.jsx("p",{className:"text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal",children:"Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements."})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]",children:[R.map((de,Ke)=>d.jsxs("div",{className:`flex flex-col gap-1 w-full ${de.role==="user"?"items-end":"items-start"}`,children:[d.jsx("div",{className:`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${de.role==="user"?"bg-sky-500/10 border-sky-500/20 text-slate-100":"bg-zinc-950/40 border-zinc-900 text-slate-300"}`,children:de.content}),de.role==="assistant"&&d.jsx("button",{onClick:()=>{Re===Ke?Jn():qn(de.content,Ke)},className:"text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold",children:Re===Ke?d.jsxs(d.Fragment,{children:[d.jsx(xf,{className:"w-3 h-3 text-rose-400 animate-pulse"}),d.jsx("span",{className:"text-rose-400",children:"Silence Audio Narrator"})]}):d.jsxs(d.Fragment,{children:[d.jsx(gf,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{children:"Speak Response Model"})]})})]},Ke)),ee&&d.jsxs("div",{className:"flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]",children:[d.jsx(fc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"FarhanTwin thinking processes synchronized..."})]})]}),d.jsx("div",{className:"border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10",children:["Explain depression text research","What bimodal stack is in use?","What SaaS packages did Farhan build?","Give brief overview of Farhan"].map(de=>d.jsxs("button",{onClick:()=>{ot(de),ct(900,.02)},className:"text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors",children:["→ ",de]},de))}),d.jsxs("div",{className:"flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none",children:[d.jsx("input",{type:"text",value:Le,onChange:de=>ot(de.target.value),onKeyDown:de=>de.key==="Enter"&&Xi(),placeholder:"Inquire about clinical studies, model performance parameters...",className:"flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"}),d.jsx("button",{onClick:Xi,disabled:!Le.trim()||ee,className:`p-2.5 rounded-lg cursor-pointer ${He.btnPrimary}`,children:d.jsx(hv,{className:"w-3.5 h-3.5"})})]})]}),k==="projects"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:He.panelHeader,children:"CATEGORIES"}),d.jsx("div",{className:"flex flex-wrap md:flex-col gap-1 select-none mb-3",children:["AI","NLP","SaaS","Open Source","Research","Productivity","Design"].map(de=>d.jsxs("button",{onClick:()=>{Ee(tn.projects.find(Ke=>Ke.category===de)||tn.projects[0]),ct(800,.02)},className:`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${J.category===de?"bg-zinc-950 text-sky-400 border border-zinc-800 font-bold":"text-zinc-500 hover:text-zinc-300"}`,children:["🎨 ",de]},de))}),d.jsx("span",{className:He.panelHeader,children:"ACTIVE PLATFORMS"}),d.jsx("div",{className:"space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none",children:tn.projects.map(de=>d.jsxs("button",{onClick:()=>{Ee(de),ct(800,.03)},className:`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${J.id===de.id?"bg-sky-500/10 border-sky-500/30 text-sky-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold truncate",children:de.title}),d.jsx("span",{className:"text-[9px] opacity-75",children:de.category})]},de.id))})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"flex items-start justify-between border-b border-zinc-800/40 pb-2",children:[d.jsxs("div",{children:[d.jsxs("span",{className:He.badge,children:[J.category," PROJECT"]}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:J.title}),d.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono tracking-wide",children:["TIMELINE: ",J.timeline]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsxs("button",{onClick:()=>ct(1e3,.05),className:"p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1",children:[d.jsx(nx,{className:"w-3 h-3"}),d.jsx("span",{children:"Code"})]}),d.jsxs("button",{onClick:()=>{ct(1100,.05),An("brief")},className:"p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1",children:[d.jsx(ax,{className:"w-3 h-3"}),d.jsx("span",{children:"Deploy"})]})]})]}),d.jsx("p",{className:"text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text",children:J.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:J.metrics.map((de,Ke)=>d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20"}),d.jsx("div",{className:"text-[10px] text-zinc-500 capitalize",children:de.label}),d.jsx("div",{className:"text-xs font-black text-sky-300 mt-1",children:de.value})]},Ke))}),d.jsxs("div",{className:"space-y-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Architecture Pipeline:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:J.architecture})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Design Problem:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:J.problem})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Integrated Tech-Stack Matrix:"}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 select-none",children:J.techStack.map(de=>d.jsx("span",{className:"bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight",children:de},de))})]})]})]})]}),k==="research"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:He.panelHeader,children:"PUBLICATIONS CATALOG"}),d.jsx("div",{className:"space-y-1 select-none",children:tn.papers.map(de=>d.jsxs("button",{onClick:()=>{We(de),ct(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${we.id===de.id?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold text-[10px] line-clamp-2 leading-snug",children:de.title}),d.jsxs("span",{className:"text-[9px] opacity-75 font-mono",children:[de.journal," (",de.year,")"]})]},de.id))}),d.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text",children:[d.jsx("span",{className:"font-bold text-emerald-300",children:"Clinician Alerts"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans mt-1",children:"Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold."})]})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start",children:[d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]",children:"PEER-REVIEWED JOURNAL"}),d.jsx("h3",{className:"text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5",children:we.title}),d.jsxs("div",{className:"text-[9.5px] text-zinc-500 italic mt-0.5 select-text",children:["Authors: ",we.authors," · Published in ",we.journal," (",we.year,")"]})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text",children:[d.jsx("span",{className:"font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1",children:"Anatomical Abstract:"}),d.jsx("p",{className:"text-slate-400 font-sans leading-normal text-[10px]",children:we.abstract})]}),d.jsxs("div",{children:[d.jsx("span",{className:He.panelHeader,children:"CLASSIFIER PIPELINE DATAFLOW"}),d.jsxs("div",{className:"flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono",children:[d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"Ingestion"}),d.jsx("span",{className:"text-zinc-600",children:"→"}),d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"POS normalise"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse",children:"RoBERTa Tensor Matrix"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("div",{className:"bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded",children:"Clinician Alert"})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:He.panelHeader,children:"EVALUATION ACCURACY STATISTICS"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]",children:we.results.map((de,Ke)=>d.jsxs("div",{className:"bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center",children:[d.jsx("div",{className:"text-zinc-500 text-[9px] truncate",title:de.metric,children:de.metric}),d.jsx("div",{className:"font-bold text-emerald-400 text-xs mt-0.5",children:de.score})]},Ke))})]}),d.jsxs("div",{className:"border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg",children:[d.jsxs("div",{className:"flex items-center justify-between pointer-events-auto select-none mb-1",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block",children:"BIBTEX CITATION RESOURCE"}),d.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(we.citation),ct(1200,.05)},className:"bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer",children:[d.jsx(Dy,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Copy Citation"})]})]}),d.jsx("code",{className:"text-[9.5px] text-zinc-400 font-mono select-all block leading-tight",children:we.citation})]})]})]}),k==="github"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUALIZED TELEMETRY STREAM"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Linguistic & Engineering Pipelines Stream"})]}),d.jsx("span",{className:"text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded",children:"STREAK: 142 DAYS"})]}),d.jsxs("div",{children:[d.jsx("span",{className:He.panelHeader,children:"CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)"}),d.jsx("div",{className:"grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg",children:Array.from({length:48}).map((de,Ke)=>{const gt=Ke%7===0?"bg-green-500 shadow-[0_0_4px_#22c55e]":Ke%5===0?"bg-green-600":Ke%3===0?"bg-green-800":"bg-zinc-900";return d.jsx("div",{onClick:()=>ct(900+Ke%5*100,.02),className:`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${gt}`,title:`Telemetry day ${Ke+1}: Commits verified`},Ke)})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"INTELLIGENT SYSTEMS"}),d.jsxs("div",{className:"space-y-2 font-mono",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"typerush-cockpit"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 184"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"the-ink-home-portal"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 142"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"safeside-predictor"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 211"})]})]})]}),d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"LIVE COMPILING ACTIONS FEED"}),d.jsxs("div",{className:"space-y-2 leading-relaxed text-[10.5px]",children:[d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-emerald-400",children:"●"}),d.jsxs("p",{className:"text-zinc-400",children:["Pushed update to ",d.jsx("code",{className:"text-[#33ff33] font-mono",children:"typerush"}),": Configured Web Audio procedural oscillators & dynamic BPM heartbeats."]})]}),d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-amber-400",children:"●"}),d.jsx("p",{className:"text-zinc-400",children:"Released version 1.4.2 containing live Audio Synthesis narrated profiles."})]})]})]})]})]}),k==="writing"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:He.panelHeader,children:"NARRATIVE CHRONICLES"}),d.jsx("div",{className:"space-y-1",children:nt.map(de=>d.jsxs("button",{onClick:()=>{ft(de),ct(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${Et.id===de.id?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-extrabold text-[10.5px] line-clamp-1 truncate",children:de.title}),d.jsxs("div",{className:"flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono",children:[d.jsx("span",{children:de.category}),d.jsx("span",{children:de.readTime})]})]},de.id))}),d.jsxs("div",{className:"p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]",children:[d.jsx("span",{className:"font-bold text-amber-300 block mb-0.5",children:"Medium Syndicate"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans",children:"Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX."})]})]}),d.jsxs("div",{className:"flex-1 space-y-3 relative",children:[d.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(gf,{className:"w-4 h-4 text-amber-400 animate-pulse"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none",children:"SYSTÉME NARRATOR"}),d.jsx("p",{className:"text-[11px] text-white font-bold select-text",children:"Read aloud with synthesized clinical AI speech?"})]})]}),d.jsx("div",{className:"flex items-center gap-1",children:Re===999?d.jsxs("button",{onClick:Jn,className:"bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(xf,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Stop Narration"})]}):d.jsxs("button",{onClick:()=>qn(Et.content,999),className:"bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(o1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Play Voiceover"})]})})]}),d.jsxs("div",{className:"border-b border-zinc-850 pb-2 flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsxs("span",{className:"text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono",children:[Et.category," COLUMN"]}),d.jsx("h3",{className:"text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text",children:Et.title}),d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1",children:["Written on ",Et.date," · ",Et.readTime]})]}),Et.link&&d.jsx("a",{href:Et.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>ct(900,.02),className:"text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono uppercase tracking-wider ml-2",children:d.jsx("span",{children:"Read on Medium ↗"})})]}),d.jsx("div",{className:"text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1",children:d.jsx("p",{children:Et.content})})]})]}),k==="garden"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Topological Semantics Mapping"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Interconnected Semantic Knowledge Field"})]}),d.jsxs("div",{children:[d.jsx("span",{className:He.panelHeader,children:"INTERACTIVE CONCEPT NODES"}),d.jsxs("div",{className:"relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35"}),d.jsx("div",{className:"relative w-full h-full",children:tn.gardenNodes.map((de,Ke)=>{const gt=Ke*11%80+10,xt=Ke*7%65+15,Ge=jt===de.id;return d.jsx("button",{onMouseEnter:()=>{Bt(de.id),ct(1100,.01)},onMouseLeave:()=>Bt(null),style:{left:`${gt}%`,top:`${xt}%`},className:`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${Ge?"bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50":"bg-zinc-900/60 border-zinc-800 text-zinc-400"}`,children:de.label},de.id)})})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text",children:[d.jsx("span",{className:"font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1",children:"Active Node Spectrum Details:"}),jt?d.jsxs("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:[jt==="nlp"&&"Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress.",jt==="transformers"&&"Transformers: Multi-attention neural architectures providing topological weights maps.",jt==="depression"&&"Depression Dialectics: Analysis of negation markers and cognitive distortions.",jt==="ethics"&&"Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters.",jt==="saas"&&"AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations.",!["nlp","transformers","depression","ethics","saas"].includes(jt)&&`Semantic connection active on ${jt}. High performance clustering coefficient evaluated.`]}):d.jsx("p",{className:"text-[10px] text-zinc-500 font-sans",children:"Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies..."})]})]}),k==="resume"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUAL RESUME ARCHITECT"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Interactively Tailored Professional Profile"})]}),d.jsxs("button",{onClick:()=>{window.print(),ct(1100,.05)},className:"bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0",children:[d.jsx(Wh,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Print Resume Draft"})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block mb-1",children:"CONFIGURE AUDIENCE TAILORING SYSTEM:"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center",children:[{id:"recruiter",label:"HR / Recruiter",text:"Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores."},{id:"investor",label:"Venture Capital",text:"Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation."},{id:"founder",label:"Startups / Founder",text:"Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration."},{id:"researcher",label:"Clinical Academics",text:"Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights."}].map(de=>d.jsxs("button",{onClick:()=>{hn(de.id),ct(800,.02)},className:`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${Nt===de.id?"bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsxs("span",{children:["👤 ",de.label]}),d.jsx("span",{className:"text-[8px] opacity-70 font-normal leading-normal",children:de.text})]},de.id))})]}),d.jsxs("div",{className:"bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text",children:[d.jsxs("div",{className:"border-b border-zinc-850 pb-2 mb-2 text-center select-text",children:[d.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:tn.name}),d.jsx("span",{className:"text-[9px] text-[#00ffcc] font-mono tracking-widest",children:tn.title})]}),Nt==="recruiter"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"EXECUTIVE SUMMARY (RECRUITER ALIGNED)"}),d.jsx("p",{children:"Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"CORE TECHNICAL SPECIFICATIONS"}),d.jsx("p",{children:"React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration."})]})]}),Nt==="investor"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)"}),d.jsx("p",{children:"Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"PROVEN MONETIZATION HIGHLIGHTS"}),d.jsx("p",{children:"Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores."})]})]}),Nt==="founder"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)"}),d.jsx("p",{children:"High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"CORE FLUIDITY TOOLS"}),d.jsx("p",{children:"TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces."})]})]}),Nt==="researcher"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"RESEARCH STATEMENT (ACADEMIC ALIGNED)"}),d.jsx("p",{children:"Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"ACADEMIC RESEARCH TRACK RECORD"}),d.jsx("p",{children:"First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models."})]})]})]})]}),k==="timeline"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:He.panelHeader,children:"CHRONOLOGY INDEX"}),d.jsx("div",{className:"space-y-1.5",children:tn.timeline.map(de=>d.jsxs("button",{onClick:()=>{At(de),ct(800,.03)},className:`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${dt.year===de.year?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"text-[10.5px]",children:de.company}),d.jsx("span",{className:"bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono",children:de.year})]},de.year))})]}),d.jsxs("div",{className:"flex-1 space-y-3",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsxs("span",{className:"bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono",children:["YEAR: ",dt.year," EXP"]}),d.jsx("h4",{className:"text-xs font-black text-white mt-1.5",children:dt.title}),d.jsxs("span",{className:"text-[9.5px] text-zinc-500 font-sans block",children:[dt.company," · Role: ",dt.role]})]}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:dt.description}),d.jsxs("div",{className:"space-y-2 select-text",children:[d.jsx("span",{className:He.panelHeader,children:"HIGHLIGHT ACCOMPLISHMENTS"}),d.jsx("ul",{className:"space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal",children:dt.achievements.map((de,Ke)=>d.jsx("li",{className:"marker:text-sky-400",children:de},Ke))})]}),d.jsxs("div",{className:"bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5",children:"INTEGRATED TECH GRID"}),d.jsx("div",{className:"flex flex-wrap gap-1 select-none",children:dt.technologies.map(de=>d.jsx("span",{className:"bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]",children:de},de))})]})]})]}),k==="profTimeline"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"PRO TIMELINE NODE"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Professional Experience & Verification Chronology"})]}),d.jsxs("div",{className:"relative pl-6 md:pl-0 pt-4",children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/60 via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:ne,className:"absolute left-[13px] md:left-1/2 top-0 bottom-16 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-10 relative z-10",children:tn.professionalTimeline.map((de,Ke)=>{const gt=Ke%2===0;return d.jsxs("div",{className:`flex flex-col md:flex-row items-start ${gt?"md:flex-row-reverse":""} relative`,children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:"w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md",children:d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-8 md:pl-0",children:d.jsxs("div",{className:"p-5 rounded-xl bg-zinc-900/30 border border-zinc-900/80 relative group hover:border-zinc-800 transition-all duration-300",children:[d.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-lg pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-2 mb-4",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5",children:de.year}),d.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight",children:de.title}),d.jsx("span",{className:"text-[9px] text-zinc-550 block font-mono mt-0.5",children:de.company})]}),d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[8.5px] font-mono border font-medium uppercase ${de.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":de.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":de.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:de.company})]}),d.jsx("ul",{className:"space-y-2 mb-4 text-[10.5px] text-zinc-400",children:de.achievements.map((xt,Ge)=>d.jsxs("li",{className:"flex items-start leading-relaxed text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2 shrink-0"}),d.jsx("span",{children:xt})]},Ge))}),d.jsx("div",{className:"flex flex-wrap gap-1 pt-3 border-t border-zinc-900/60 select-none",children:de.technologies.map(xt=>d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[8px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:xt},xt))})]})})]},Ke)})})]})]}),k==="skills"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Observatory Deck"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Linguistic, Structural & Compute Matrices"})]}),d.jsx("div",{className:"flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none",children:["all","AI/ML","Frontend","Backend","Research","Systems"].map(de=>d.jsx("button",{onClick:()=>{Ft(de),ct(800,.02)},className:`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${it===de?"bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]":"bg-transparent text-zinc-500 hover:text-zinc-300"}`,children:de==="all"?"All Matrices":de},de))}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none",children:$.map(de=>{const Ke=de.weight===5?"border-sky-500/50 bg-sky-500/5 text-sky-200":de.weight===4?"border-indigo-500/30 bg-indigo-500/5 text-indigo-200":"border-zinc-800 bg-zinc-900/40 text-zinc-400";return d.jsxs("div",{onClick:()=>ct(700+de.weight*100,.03),className:`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${Ke}`,children:[d.jsx("span",{className:"text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100",children:de.name}),d.jsx("span",{className:"text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400",children:de.category}),d.jsx("div",{className:"flex items-center gap-0.5 mt-1",children:Array.from({length:5}).map((gt,xt)=>d.jsx("span",{className:`w-1 h-1 rounded-full ${xt<de.weight?"bg-indigo-400 shadow-[0_0_4px_#818cf8]":"bg-zinc-800"}`},xt))})]},de.name)})})]}),k==="brief"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"INTELLIGENT INTAKE PROCESS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Initiate Feasibility Evaluation Strategy"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"VENTURE DOMAIN:"}),d.jsxs("select",{value:ae.projectType,onChange:de=>Fe({...ae,projectType:de.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer",children:[d.jsx("option",{children:"AI Engineering & LLMs"}),d.jsx("option",{children:"Clinical NLP & Mental State analysis"}),d.jsx("option",{children:"SaaS Automation Development"}),d.jsx("option",{children:"Interactive UI/UX Projects"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"FINANCIAL BOUNDS:"}),d.jsxs("select",{value:ae.budget,onChange:de=>Fe({...ae,budget:de.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"$5k - $10k"}),d.jsx("option",{children:"$10k - $25k"}),d.jsx("option",{children:"$25k+"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TIMELINE PROFILE:"}),d.jsxs("select",{value:ae.timeline,onChange:de=>Fe({...ae,timeline:de.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"1-3 Months"}),d.jsx("option",{children:"3 Months-half year"}),d.jsx("option",{children:"Complex Multiphase"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TRANSMISSION EMAIL:"}),d.jsx("input",{type:"email",value:ae.email,onChange:de=>Fe({...ae,email:de.target.value}),placeholder:"e.g. name@domain.com",className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"OPERATIONAL DIRECTIVES:"}),d.jsx("input",{type:"text",value:ae.comments,onChange:de=>Fe({...ae,comments:de.target.value}),placeholder:"e.g. Custom requirements, NDA, etc.",className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"STRATEGIC GOALS / OBJECTIVES:"}),d.jsx("textarea",{value:ae.goals,onChange:de=>Fe({...ae,goals:de.target.value}),rows:3,placeholder:"Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)",className:"w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"})]}),d.jsx("button",{onClick:Wi,disabled:!ae.goals.trim()||Ie,className:"w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5",children:Ie?d.jsxs(d.Fragment,{children:[d.jsx(fc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"Deconstruct parameters algorithms..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(C1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Evaluate Feasibility Strategy"})]})})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5",children:"ASSESSMENT & ARCHITECTURE STRATEGY:"}),je?d.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-sans select-text",children:je}):d.jsx("div",{className:"text-zinc-600 font-sans text-[10.5px] italic text-center py-10",children:"Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations..."})]}),je&&d.jsxs("div",{className:"border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4",children:[d.jsxs("span",{className:"text-zinc-500 flex items-center gap-1 font-mono",children:[d.jsx(Xc,{className:"w-3 h-3 text-emerald-400"})," API SECURE Rails"]}),d.jsx("button",{onClick:pn,disabled:pt||!ae.email.trim(),className:"bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-850 disabled:text-zinc-500 disabled:border-zinc-800 text-white font-bold p-1 px-3 border border-emerald-400 disabled:border-transparent rounded text-[9.5px] cursor-pointer flex items-center gap-1.5",children:pt?d.jsxs(d.Fragment,{children:[d.jsx(fv,{className:"w-3 h-3 animate-spin"}),d.jsx("span",{children:"Transmitting..."})]}):d.jsx("span",{children:"Dispatch Brief"})})]})]})]})]}),k==="whiteboard"&&d.jsx(ZA,{theme:N,triggerSound:ct}),k==="builds"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono",children:"TELEMETRY DIAGNOSTICS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Continuous Development & Deployment Releases"})]}),d.jsx("div",{className:"space-y-3.5 max-h-[300px] overflow-y-auto pr-1",children:tn.buildLogs.map(de=>d.jsxs("div",{className:"bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-850 pb-1.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-white font-bold",children:[d.jsx("span",{className:"text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded",children:de.version}),d.jsx("span",{className:"text-[11px] font-sans truncate",children:de.title})]}),d.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:de.date})]}),d.jsx("p",{className:"text-[10.5px] text-slate-400 leading-relaxed font-sans",children:de.description}),d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"TASKS DEPLOYED"}),d.jsx("ul",{className:"space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans",children:de.tasksCompleted.map((Ke,gt)=>d.jsx("li",{children:Ke},gt))})]}),d.jsxs("div",{className:"border-t border-zinc-900 pt-1.5",children:[d.jsx("span",{className:"font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"METRIC SHIFTS DETECTED"}),d.jsx("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono select-none",children:de.metricsChanged.map((Ke,gt)=>d.jsxs("span",{className:"bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300",children:[d.jsxs("span",{children:[Ke.metric,":"]}),d.jsxs("span",{className:"text-teal-400 font-bold",children:[Ke.before," ➔ ",Ke.after]})]},gt))})]})]},de.id))})]})]})]},k)})]}),d.jsxs("footer",{className:"h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none",children:[d.jsx("div",{className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none",children:re.map(k=>{const ue=k.icon,me=K.includes(k.id),De=ge===k.id&&!Z.includes(k.id);return d.jsxs("button",{onClick:()=>{me?De?Pi(k.id):(W(k.id),he(Xe=>Xe.filter(Ze=>Ze!==k.id))):An(k.id)},className:`p-2 rounded-xl transition-all relative cursor-pointer ${k.color} transform hover:scale-129 active:scale-95 duration-100`,title:k.label,children:[d.jsx(ue,{className:"w-5 h-5"}),me&&d.jsx("span",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]"}),De&&d.jsx("span",{className:"absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs"})]},k.id)})}),d.jsx("div",{className:"absolute right-4 hidden md:flex items-center gap-1.5",children:d.jsx("button",{type:"button",onClick:()=>{Qe(!0),ct(800,.03)},className:"p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer",children:"Terminal Commands (CMD+K)"})})]}),Q&&d.jsx("div",{className:"fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal",children:d.jsxs("div",{className:"w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up",children:[d.jsxs("div",{className:"flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850",children:[d.jsx(sx,{className:"w-4 h-4 text-sky-400"}),d.jsx("input",{type:"text",value:at,onChange:k=>rt(k.target.value),placeholder:"Search projects, research papers, tech stack node keys, commands...",className:"flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white",autoFocus:!0}),d.jsx("button",{onClick:()=>{Qe(!1),ct(400,.02)},className:"p-1 text-zinc-500 hover:text-white rounded",children:d.jsx(ox,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]",children:at.trim().length===0?d.jsxs("div",{className:"space-y-2",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide",children:"SYSTEM DIAGNOSTIC CORES:"}),d.jsx("button",{onClick:()=>{xs(),Qe(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"🚀 Trigger system AI Guided Tour with synthesized Voice narrations"}),d.jsx("button",{onClick:()=>{An("brief"),Qe(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"💡 Open Mission Intake Consultation Workspace"}),d.jsx("div",{className:"text-[10px] text-zinc-550 italic font-sans px-2",children:"Enter queries parsing index models above to match academic research text parameters..."})]}):d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5",children:["MATCHED WORKSPACE PARAMS (",se.length,")"]}),se.length>0?se.map((k,ue)=>d.jsxs("button",{onClick:k.action,className:"w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase",children:k.type}),d.jsx("span",{className:"text-white font-bold font-sans",children:k.title})]}),d.jsx("span",{className:"text-[10px] text-zinc-500",children:k.subtitle})]},ue)):d.jsx("div",{className:"text-center text-zinc-500 text-[11px] py-6 font-sans",children:"No matching intelligence indices found. Retry key parameters."})]})}),d.jsxs("div",{className:"p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500",children:[d.jsx("span",{className:"font-mono",children:"SEARCH GRID INTEGRATION READY"}),d.jsx("span",{children:"ESC TO EXIT"})]})]})})]})})}cy.createRoot(document.getElementById("root")).render(d.jsx(Ue.StrictMode,{children:d.jsx($A,{})}));
